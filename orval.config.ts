import { faker } from "@faker-js/faker";
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
        type: "msw",
        locale: "ru",
      },
      prettier: true,
      override: {
        mutator: {
          path: "instance.ts",
          name: "customInstance",
        },
        mock: {
          locale: "ru",
          useExamples: false,
          required: true,
          properties: {
            "/poster/": {
              url: "https://image.openmoviedb.com/kinopoisk-images/1946459/5c758ac0-7a5c-4f00-a94f-1be680a312fb/orig",
              previewUrl:
                "https://image.openmoviedb.com/kinopoisk-images/1946459/5c758ac0-7a5c-4f00-a94f-1be680a312fb/x1000",
            },
            "/countries/": () =>
              new Array(3)
                .fill(0)
                .map(() => ({ name: faker.location.country() })),
            "/genres/": () =>
              new Array(3).fill(0).map(() => ({ name: faker.music.genre() })),
            "/description/":
              "1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...",
            "/shortDescription/":
              "Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе",
          },
        },
      },
    },
  },
});
