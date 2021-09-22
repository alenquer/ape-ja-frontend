declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      MONGODB_DB: string;
      NEXT_PUBLIC_BASE_URL: string;
    }
  }
}
