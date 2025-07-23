/**
 * This file is a workaround for a emotion-jsx-runtime issue.
 * @see https://github.com/emotion-js/emotion/issues/3049#issuecomment-1576037494
 */

declare module "@emotion/react/jsx-runtime" {
  namespace JSX {
    type ElementType = React.JSX.ElementType;
  }
}
