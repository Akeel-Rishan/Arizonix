import { loadEnvConfig } from '@next/env';
import { basename, resolve } from 'node:path';

const currentDirectory = process.cwd();
const projectRoot =
  basename(currentDirectory).toLowerCase() === 'sanity'
    ? resolve(currentDirectory, '..')
    : currentDirectory;

loadEnvConfig(projectRoot);
