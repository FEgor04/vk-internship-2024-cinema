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
      mock: {
        type: 'msw',
        locale: 'ru',
      },
      prettier: true,
      override: {
        mock: {
          useExamples: true,
          required: true,
          properties: {
            '/poster/': {
              url: 'https://rukminim2.flixcart.com/image/850/1000/jqwny4w0/poster/s/v/u/medium-spider-man-11-spider-man-poster-for-room-office-13-inch-x-original-imafctjenprfatgh.jpeg?q=90&crop=false',
              previewUrl: 'https://rukminim2.flixcart.com/image/850/1000/jqwny4w0/poster/s/v/u/medium-spider-man-11-spider-man-poster-for-room-office-13-inch-x-original-imafctjenprfatgh.jpeg?q=90&crop=false',
            }
          }
        }
      }
    },
  },
});
