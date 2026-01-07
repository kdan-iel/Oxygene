/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_RECAPTCHA_SITEKEY?: string;
    // add other VITE_ variables here if needed
    readonly [key: string]: string | undefined;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export {};
