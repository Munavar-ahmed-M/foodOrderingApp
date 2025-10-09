const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest", // 👈 important
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@reduxjs/toolkit|redux-thunk|immer|reselect)/)",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js",
  },
};

module.exports = config;
