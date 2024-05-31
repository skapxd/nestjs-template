import 'dotenv/config';

import { resolve } from 'path';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

import tsConfig from './tsconfig.json';

const testResultDir = resolve(__dirname, 'test-reporter');

export default defineConfig({
  test: {
    hookTimeout: 1_000_000,
    testTimeout: 1_000_000,
    coverage: {
      enabled: true,
      // provider: 'istanbul',
      provider: 'v8',
      reporter: ['html'],
      reportsDirectory: resolve(testResultDir, 'coverage'),
      include: ['src/server/**/*.ts'],
      exclude: ['**/**.module.ts', '**/main.ts'],
      thresholds: {
        branches: 90,
        functions: 90,
        lines: 90,
        statements: 90,
      },
    },
    outputFile: resolve(testResultDir, 'index.html'),
    reporters: ['default', 'html'],
    globals: true,
    root: './',
    alias: {
      // @ts-expect-error: ERR
      '#/': new URL(tsConfig.compilerOptions.baseUrl, import.meta.url).pathname,
    },
  },
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
});
