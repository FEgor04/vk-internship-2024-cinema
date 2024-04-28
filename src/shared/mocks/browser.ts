import { setupWorker } from "msw/browser";
import { getAPIKinopoiskDevMock } from "../api/index.msw";

const worker = setupWorker(...getAPIKinopoiskDevMock());

export async function start(): Promise<void> {
  if (import.meta.env.DEV) {
    await worker.start();
  }
}
