import { setupWorker } from 'msw/browser'
import { getAPIKinopoiskDevMock } from '../api/index.msw'
 
export const worker = setupWorker(...getAPIKinopoiskDevMock())
