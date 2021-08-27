module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.tsx',
    'src/hooks/**/*.ts(x)?',
    '!src/components/index.tsx',
    '!src/hooks/index.ts',
    '!src/pages/**/*.ts(x)?',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/theme/**/*.{ts,css}',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
