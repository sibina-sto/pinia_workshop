/// <reference types="vite/client" />
import "pinia";

declare module "pinia" {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a boolean
    // for local storeage plugin
    localStorage?: boolean;
  }
}
