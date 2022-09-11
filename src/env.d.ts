/// <reference types="astro/client" />
/// <reference types="unplugin-icons/types/svelte" />

interface ImportMetaEnv {
    readonly PUSHER_APP_ID: string;
    readonly PUBLIC_PUSHER_APP_KEY: string;
    readonly PUSHER_APP_SECRET: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}