import { basename, resolve } from 'node:path';

import { loadEnvConfig } from '@next/env';

const currentDirectory = process.cwd();
const projectRoot =
  basename(currentDirectory).toLowerCase() === 'sanity'
    ? resolve(currentDirectory, '..')
    : currentDirectory;

loadEnvConfig(projectRoot);
