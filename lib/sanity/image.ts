import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { client } from '@/lib/sanity/client';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function sanityImage(
  source: SanityImageSource,
  options?: { height?: number; quality?: number; width?: number },
) {
  let image = builder.image(source).auto('format');
  if (options?.width) image = image.width(options.width);
  if (options?.height) image = image.height(options.height);
  if (options?.quality) image = image.quality(options.quality);
  return image.url();
}
