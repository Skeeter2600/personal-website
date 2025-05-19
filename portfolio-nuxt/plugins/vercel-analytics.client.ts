import { inject } from "@vercel/analytics";

export default defineNuxtPlugin(() => {
  // Only inject analytics on client-side
  if (process.client) {
    inject();
  }
});
