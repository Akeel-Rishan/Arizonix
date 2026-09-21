import { existsSync, readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = join(projectRoot, '.next');
const manifestPath = join(outputRoot, 'app-build-manifest.json');
const maximumChunkBytes = 200 * 1024;

if (!existsSync(manifestPath)) {
  console.error(
    'ERROR: .next/app-build-manifest.json is missing. Run npm run build first.',
  );
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const pageRoutes = Object.entries(manifest.pages).filter(
  ([route]) =>
    route.endsWith('/page') &&
    !route.startsWith('/studio/') &&
    !route.includes('/api/'),
);

let failed = false;
for (const [route, assets] of pageRoutes) {
  const scripts = [...new Set(assets.filter((asset) => asset.endsWith('.js')))];
  let totalRawBytes = 0;
  let totalGzipBytes = 0;
  let largestChunk = { asset: '', bytes: 0 };

  for (const asset of scripts) {
    const source = readFileSync(join(outputRoot, asset));
    const compressedBytes = gzipSync(source).length;
    totalRawBytes += source.length;
    totalGzipBytes += compressedBytes;

    if (compressedBytes > largestChunk.bytes) {
      largestChunk = { asset, bytes: compressedBytes };
    }
    if (compressedBytes > maximumChunkBytes) {
      console.error(
        `ERROR: ${route} contains ${asset} at ${Math.ceil(compressedBytes / 1024)} KB gzipped.`,
      );
      failed = true;
    }
  }

  console.log(
    `${route}: ${Math.ceil(totalRawBytes / 1024)} KB raw, ` +
      `${Math.ceil(totalGzipBytes / 1024)} KB gzipped total; ` +
      `largest chunk ${Math.ceil(largestChunk.bytes / 1024)} KB gzipped`,
  );
}

if (failed) {
  console.error('One or more route chunks exceed the 200 KB gzipped budget.');
  process.exit(1);
}

console.log('Bundle chunk budget passed.');
