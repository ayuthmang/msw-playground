module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.m?jsx?$': 'babel-jest',
  },
  // msw's transitive deps `until-async` and `rettime` ship ESM-only builds;
  // transform them to CommonJS instead of leaving them out like the rest of node_modules.
  transformIgnorePatterns: ['/node_modules/(?!(until-async|rettime)/)'],
}
