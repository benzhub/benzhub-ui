import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import peerDeps from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss"

export default [
  {
    input: "src/index.ts", // entry point of your library
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
      }, // generate commonjs bundle
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      }, // generate ecma script module bundle
    ],
    plugins: [
      peerDeps(), // handle peer dependencies
      resolve(), // resolve node modules
      postcss(),
      commonjs(), // convert commonjs to esm
      typescript(), // handle typescript
      terser(), // minify the code
    ],
  },
  {
    input: "src/index.ts", // entry point of your library
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()], // handle typescript related stuff
    external: [/\.css$/] // exclude css files from types
  },
];
