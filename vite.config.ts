import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	build: {
		target: "node16",
		outDir: "dist",
		lib: {
			entry: path.resolve(__dirname, "src/cli.tsx"),
			formats: ["es"],
			fileName: "cli",
		},
		rollupOptions: {
			external: (id) => {
				// Node.js built-in modules only
				const builtins = [
					"fs",
					"path",
					"url",
					"child_process",
					"process",
					"os",
					"tty",
					"util",
					"stream",
					"events",
					"readline",
					"string_decoder",
					"buffer",
					"assert",
					"module",
				];
				return builtins.some(
					(builtin) => id === builtin || id.startsWith(`node:${builtin}`),
				);
			},
			output: {
				format: "es",
			},
		},
		minify: true,
		sourcemap: false,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
});
