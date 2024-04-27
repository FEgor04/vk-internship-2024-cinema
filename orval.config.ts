import { defineConfig } from "orval";
export default defineConfig({
  kinopoisk: {
    input: {
      target: "https://api.kinopoisk.dev/documentation-yaml",
    },
    output: {
      target: "index.ts",
      client: "axios-functions",
      workspace: "src/shared/api",
      mode: "split",
      mock: true,
    },
  },
});
