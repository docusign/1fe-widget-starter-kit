module.exports = /** @type {import("eslint").Linter.Config} */ {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  parser: "@typescript-eslint/parser", // Use the TypeScript parser
  parserOptions: {
    ecmaVersion: 2022, // Support the latest ECMAScript features
    sourceType: "module", // Enable ECMAScript modules
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  env: {
    browser: true, // Enable browser global variables
    node: true, // Enable Node.js global variables
    es6: true, // Enable ECMAScript 6 features
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
  rules: {
    "prettier/prettier": "error", // Treat Prettier violations as errors
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optional: Disables enforcing explicit return types on function signatures
    "react/no-unknown-property": ["error", { ignore: ["css"] }], // Required for emotion css prop
    "react/no-unescaped-entities": "off", // Allow apostrophes and quotes in JSX
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
