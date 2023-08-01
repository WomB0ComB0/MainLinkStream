export {}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
declare global {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }
  }
