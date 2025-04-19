# 🎯 Rollup TypeScript SCSS Project

A modern web project built with **Rollup**, **TypeScript**, **SCSS**, and **Babel**. This setup demonstrates how to efficiently bundle JavaScript, compile TypeScript, process SCSS, handle images, and output clean, minified assets ready for deployment.

---

## 🚀 Features

- **TypeScript:** Write robust, type-safe code with `.ts` files compiled via Babel and `@rollup/plugin-typescript`.
- **SCSS:** Style with SCSS, compiled and minified using `rollup-plugin-scss` and the modern `sass` API.
- **Rollup:** Efficient module bundler with tree-shaking and ES module support.
- **Babel:** Transpile TypeScript and modern JavaScript to ES5.
- **Image Assets:** Handle `.jpg`, `.png`, `.gif`, `.svg` files using `@rollup/plugin-url`.
- **HTML Handling:** Copy and process HTML templates via `rollup-plugin-copy`.
- **Minification:** Compress JavaScript and CSS with `rollup-plugin-terser` and SCSS plugin.
- **Source Maps:** Easier debugging with source maps.

---

## 📁 Project Structure


├── dist/ # Compiled output ├── src/ # Source files │ ├── index.html # HTML template │ ├── index.js # Entry (imports TypeScript and SCSS) │ ├── main.ts # Main logic │ ├── styles.scss # SCSS styles │ ├── images.jpg # Sample image │ ├── declarations.d.ts # TS image declarations ├── .babelrc # Babel config ├── package.json # Project metadata ├── rollup.config.js # Rollup config ├── tsconfig.json # TypeScript config └── README.md # You're here!


---

## 🧰 Prerequisites

- **Node.js**: v18.19.1 or higher  
- **npm**: comes bundled with Node.js

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo

