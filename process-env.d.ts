declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        GROQ_API_KEY: string;
        // add more environment variables and their types here
      }
    }
  }