import type { Config } from 'jest';

const config: Config = {
  projects: [
    {
      displayName: 'api',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/api/**/*.test.ts'],
      transform: { '^.+\\.tsx?$': ['ts-jest', {}] },
      moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
    },
    {
      displayName: 'components',
      testEnvironment: 'jsdom',
      testMatch: ['**/__tests__/components/**/*.test.tsx'],
      transform: { '^.+\\.tsx?$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }] },
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(jpg|jpeg|png|gif|webp|svg|png)$': '<rootDir>/__mocks__/fileMock.ts',
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    },
  ],
};

export default config;
