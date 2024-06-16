import { setupWorker } from "msw/browser";
import { getAPIKinopoiskDevMock } from "../api/index.msw";

const worker = setupWorker(...getAPIKinopoiskDevMock());

export async function start(): Promise<void> {
  return new Promise((res) => res());
}
