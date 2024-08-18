import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [jsconfigPaths(), react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, "./public"),
    },
  },
  boild: {
    sourcemap: true,
  },
});
