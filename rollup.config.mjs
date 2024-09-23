import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
// import pkg from "./package.json";

export default [
	{
		input: "src/heic2any.ts",
		output: {
			file: 'dist/heic2any.js',
			format: "esm",
			name: "heic2any",
			globals: {
				"./libheif": "libheif"
			}
		},
		external: [],
		plugins: [
			typescript(),
		]
	},
	{
		input: "src/heic-worker.ts",
		output: {
			file: 'dist/heic-worker.js',
			format: "umd",
			name: "heic2any",
			globals: {
				"./libheif": "libheif"
			}
		},
		external: [],
		plugins: [
			typescript(),
			commonjs(),
			nodeResolve(),
		]
	},
];
