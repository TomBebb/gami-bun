import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import vue from "@vitejs/plugin-vue";
export default defineConfig({
  plugins: [viteSingleFile(), vue()],
  esbuild: {legalComments: "none"},
});
