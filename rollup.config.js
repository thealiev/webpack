import typescript from "@rollup/plugin-typescript";
import { babel } from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import url from "@rollup/plugin-url";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import sass from "sass";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".ts"],
      include: ["src/**/*"],
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-typescript",
      ],
    }),
    scss({
      output: "dist/styles.css",
      outputStyle: "compressed",
      sass: sass,
    }),
    url({
      include: ["**/*.png", "**/*.jpg", "**/*.gif", "**/*.svg"],
      limit: 0,
    }),
    copy({
      targets: [{ src: "src/index.html", dest: "dist" }],
    }),
    terser(),
  ],
};
