# Roll Gevoekt Project

This is a sample web project built with Webpack, Rollup, TypeScript, SCSS, and Babel. It demonstrates a modern JavaScript build setup that processes TypeScript (.ts), JavaScript (.js), SCSS (.scss), and image files, outputting minified assets to a `dist` folder with source maps.

## Features

- **TypeScript**: Write type-safe code with `.ts` files, compiled to ES5 via Babel and `@rollup/plugin-typescript` or `babel-loader`.
- **SCSS**: Style the application with SCSS, compiled to minified CSS using `rollup-plugin-scss` (Rollup) or `sass-loader` (Webpack) with the modern Sass API.
- **Webpack/Rollup**: Bundle JavaScript, TypeScript, and assets efficiently with tree-shaking (Rollup) or robust module handling (Webpack).
- **Babel**: Transpile modern JavaScript/TypeScript to ES5 for broad browser compatibility.
- **Images**: Import and process image files (`.jpg`, `.png`, `.gif`, `.svg`) using `@rollup/plugin-url` or `file-loader`.
- **HTML**: Process HTML templates with `rollup-plugin-copy` or `html-webpack-plugin`.
- **Minification**: Minify JavaScript with `rollup-plugin-terser` or Webpack’s Terser, and CSS with `rollup-plugin-scss` or `css-minimizer-webpack-plugin`.
- **Source Maps**: Generate source maps for easier debugging.

## Project Structure

```
├── dist/                   # Output folder for built assets (gitignored)
├── src/                    # Source files
│   ├── index.html          # HTML template
│   ├── index.js            # Entry point (imports TypeScript and SCSS)
│   ├── main.ts             # TypeScript logic (e.g., DOM manipulation)
│   ├── styles.scss         # SCSS styles
│   ├── images.jpg          # Sample image asset
│   ├── declarations.d.ts   # TypeScript declarations for image imports
├── .babelrc                # Babel configuration
├── .gitignore              # Git ignore file
├── package.json            # Project metadata and dependencies
├── rollup.config.js        # Rollup configuration
├── tsconfig.json           # TypeScript configuration
├── webpack.config.js       # Webpack configuration
└── README.md               # This file
```

## Prerequisites

- **Node.js**: Version 18.19.1 or higher (tested with v18.19.1).
- **npm**: Included with Node.js.

## Setup Instructions

1. **Clone the Repository**:

  ```bash
  git clone https://github.com/your-username/your-repo.git
  cd your-repo
  ```

2. **Install Dependencies**:

  ```bash
  npm install
  ```

3. **Verify Image Asset**:  
  Ensure `src/images.jpg` exists. If using a different image, update the import in `src/main.ts`:

  ```typescript
  import image from './your-image.jpg';
  ```

## Build and Run

- **Build with Webpack**:  
  Compile and bundle all assets to the `dist` folder using Webpack:

  ```bash
  npm run build:webpack
  ```

- **Build with Rollup**:  
  Compile and bundle all assets to the `dist` folder using Rollup:

  ```bash
  npm run build:rollup
  ```

- **Serve the Application**:  
  Use a local server to view the output:

  ```bash
  npx http-server dist
  ```

  Open [http://localhost:8080](http://localhost:8080) in your browser to see the application.

- **Debugging**:  
  Source maps are included in `dist/`. Use browser developer tools to debug TypeScript and SCSS source files.

## Key Fixes and Improvements

### Babel Module Transformation Error

- **Issue**: `@rollup/plugin-babel` transformed ES6 modules to CommonJS, causing Rollup to fail.
- **Fix**: Added `modules: false` to `@babel/preset-env` in `.babelrc`:

  ```json
  {
   "presets": [
    ["@babel/preset-env", { "modules": false }],
    "@babel/preset-typescript"
   ]
  }
  ```

### Sass Deprecation Warning

- **Issue**: `rollup-plugin-scss` used the deprecated legacy JS API of Sass.
- **Fix**: Updated `sass` and `rollup-plugin-scss` to their latest versions and configured the modern Sass API in `rollup.config.js`:

  ```javascript
  scss({
   output: 'dist/styles.css',
   outputStyle: 'compressed',
   sass: require('sass')
  })
  ```

### TypeScript Image Import Error

- **Issue**: TypeScript couldn’t resolve image imports (`TS2307`).
- **Fix**: Added `src/declarations.d.ts`:

  ```typescript
  declare module '*.jpg';
  declare module '*.png';
  declare module '*.gif';
  declare module '*.svg';
  ```

## Dependencies

Key dependencies in `package.json`:

- **Webpack**: `webpack`, `webpack-cli`
- **Rollup**: `rollup`, `@rollup/plugin-typescript`, `@rollup/plugin-babel`, `rollup-plugin-scss`, `@rollup/plugin-url`, `rollup-plugin-copy`, `rollup-plugin-terser`
- **SCSS**: `sass`, `sass-loader`, `css-loader`, `style-loader`, `mini-css-extract-plugin`, `css-minimizer-webpack-plugin`
- **Babel**: `babel-loader`, `@babel/core`, `@babel/preset-env`, `@babel/preset-typescript`
- **HTML**: `html-webpack-plugin`, `file-loader`
- **TypeScript**: `typescript`

Install them with:

```bash
npm install
```

## Troubleshooting

- **Build Fails with Babel Error**:  
  Ensure `.babelrc` includes `modules: false`. Delete `dist/` and rebuild:

  ```bash
  rm -rf dist
  npm run build:rollup
  ```

- **Sass Deprecation Warning**:  
  Verify `sass` and `rollup-plugin-scss` are on their latest versions:

  ```bash
  npm list sass rollup-plugin-scss
  npm install sass@latest rollup-plugin-scss@latest --save-dev
  ```

- **Image Import Errors**:  
  Check that `src/images.jpg` exists and is correctly referenced in `src/main.ts`. Update `src/declarations.d.ts` for additional image types if needed.

## Contributing

1. Fork the repository.
2. Create a branch:

  ```bash
  git checkout -b feature/your-feature
  ```

3. Commit changes:

  ```bash
  git commit -m "Add your feature"
  ```

4. Push to GitHub:

  ```bash
  git push origin feature/your-feature
  ```

5. Open a pull request with a detailed description.

See the pull request for details on recent fixes (e.g., `fix/rollup-sass-deprecation`).

## License

MIT License. See `LICENSE` for details.
