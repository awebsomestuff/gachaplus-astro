// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gacha.plus',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
