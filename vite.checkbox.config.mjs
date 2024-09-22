import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: ["./src/lib/components/Checkbox/Checkbox.svelte"],
    },
    lib: {
      entry: "/dist/assets/Checkbox-CWDZuXaz.js",
      fileName: "Checkbox-CWDZuXaz",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
});
