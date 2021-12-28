/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>
  export default component;
}

// Declare Vue Lazy Image
declare module 'v-lazy-image'
