import { defineConfig } from "vite";
import path from "path";

const name = "index";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "flyoNitroJs",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    },
  };
});
