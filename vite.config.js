import { defineConfig } from "vite";
import path from "path";
import dts from 'vite-plugin-dts';

const name = "index";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "flyoNitroTypescript",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    },
    plugins: [
      // Other plugins...
      dts(),
    ],
  };
});
