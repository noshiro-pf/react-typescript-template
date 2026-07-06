import * as path from 'node:path';
import { type ViteUserConfig } from 'vitest/config';
import { type CoverageOptions, type ProjectConfig } from 'vitest/node';
import { projectRootPath } from '../scripts/project-root-path.mjs';

// https://github.com/vitest-dev/vitest/blob/v1.5.0/test/import-meta/vite.config.ts
const config = () =>
  ({
    test: {
      coverage: coverageSettings(),
      typecheck: {
        tsconfig: path.resolve(projectRootPath, './tsconfig.json'),
      },
      ...projectConfig(),
    },
  }) as const satisfies ViteUserConfig;

const projectConfig = () =>
  ({
    dir: projectRootPath,
    environment: 'jsdom',
    globals: true,
    restoreMocks: true,
    hideSkippedTests: true,
    includeSource: ['src/**/*.{mts,tsx}'],
    include: ['src/**/*.test.{mts,tsx}'],
    exclude: ['**/*.d.mts', '**/index.mts'],
  }) as const satisfies ProjectConfig;

const coverageSettings = () =>
  ({
    provider: 'v8',
    reporter: ['html', 'lcov', 'text'],
    include: ['src/**/*.{mts,tsx}'],
    exclude: ['**/index.mts'],
  }) as const satisfies CoverageOptions;

export default config();
