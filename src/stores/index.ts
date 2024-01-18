import { createPinia } from 'pinia';
import type { App } from 'vue';

// export * from "./modules";
export * from './types';

export const store = createPinia();

export async function setupStore(app: App<Element>) {
  app.use(store);
}
