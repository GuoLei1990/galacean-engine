import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  resolve: { dedupe: ["@galacean/engine"] },
  build: {
    outDir: "/tmp/audio-repro/engine-build", emptyOutDir: true, target: "es2018", minify: true,
    rollupOptions: {
      input: path.resolve(process.cwd(), "src/audio-lifecycle.ts"),
      output: { inlineDynamicImports: true, entryFileNames: "bundle.js", format: "iife" }
    }
  }
});
