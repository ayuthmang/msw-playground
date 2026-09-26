// Only used by jest (via babel-jest) to transform the handful of ESM-only
// node_modules packages listed in jest.config.js's transformIgnorePatterns
// (msw's transitive deps `until-async` and `rettime`) down to CommonJS.
module.exports = {
  plugins: ['@babel/plugin-transform-modules-commonjs'],
}
