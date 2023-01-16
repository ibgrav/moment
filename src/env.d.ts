/// <reference types="vite/client" />

import JSX = preact.JSX;

interface ImportMetaEnv {
  readonly VITE_SUPABASE_PROJECT_ID: string;
  readonly VITE_SUPABASE_PUBLIC_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
