Rollup TypeScript SCSS Project
This is a sample web project built with Rollup, TypeScript, SCSS, and Babel. It demonstrates a modern JavaScript build setup that processes TypeScript (.ts), JavaScript (.js), SCSS (.scss), and image files, outputting minified assets to a dist folder with source maps.
Features

TypeScript: Write type-safe code with .ts files, compiled to ES5 via Babel and @rollup/plugin-typescript.
SCSS: Style the application with SCSS, compiled to minified CSS using rollup-plugin-scss and the modern sass API.
Rollup: Bundle JavaScript, TypeScript, and assets efficiently with tree-shaking and ES module support.
Babel: Transpile modern JavaScript/TypeScript to ES5 for broad browser compatibility.
Images: Import and process image files (.jpg, .png, .gif, .svg) using @rollup/plugin-url.
HTML: Copy and process an HTML template to the dist folder with rollup-plugin-copy.
Minification: Minify JavaScript with rollup-plugin-terser and CSS with rollup-plugin-scss.
Source Maps: Generate source maps for easier debugging.

Project Structure
├── dist/                   # Output folder for built assets
├── src/                    # Source files
│   ├── index.html          # HTML template
│   ├── index.js            # Entry point (imports TypeScript and SCSS)
│   ├── main.ts             # TypeScript logic (e.g., DOM manipulation)
│   ├── styles.scss         # SCSS styles
│   ├── images.jpg          # Sample image asset
│   ├── declarations.d.ts   # TypeScript declarations for image imports
├── .babelrc                # Babel configuration
├── package.json            # Project metadata and dependencies
├── rollup.config.js        # Rollup configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file

Prerequisites

Node.js: Version 18.19.1 or higher (tested with v18.19.1).
npm: Included with Node.js.

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/your-repo.git
cd your-repo


Install Dependencies:
npm install


Verify Image Asset:Ensure src/images.jpg exists. If using a different image, update the import in src/main.ts:
import image from './your-image.jpg';



Build and Run

Build the Project:Compile and bundle all assets to the dist folder:
npx rollup -c

This generates dist/bundle.js, dist/styles.css, dist/index.html, and copies assets like images.jpg.

Serve the Application:Use a local server to view the output:
npx http-server dist

Open http://localhost:8080 in your browser to see the application.

Debugging:Source maps are included in dist/. Use browser developer tools to debug TypeScript and SCSS source files.


Key Fixes and Improvements
This project includes fixes for common Rollup build issues:

Babel Module Transformation Error:
Issue: @rollup/plugin-babel transformed ES6 modules to CommonJS, causing Rollup to fail.
Fix: Added modules: false to @babel/preset-env in .babelrc to preserve ES module syntax:{
  "presets": [
    ["@babel/preset-env", { "modules": false }],
    "@babel/preset-typescript"
  ]
}






Sass Deprecation Warning:
Issue: rollup-plugin-scss used the deprecated legacy JS API of sass.
Fix: Updated sass and rollup-plugin-scss to their latest versions and configured the modern sass API in rollup.config.js:scss({
  output: 'dist/styles.css',
  outputStyle: 'compressed',
  sass: require('sass')
})




TypeScript Image Import Error:
Issue: TypeScript couldn’t resolve image imports (TS2307).
Fix: Added src/declarations.d.ts to declare image module types:declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';





Dependencies
Key dependencies in package.json:

rollup: Module bundler.
@rollup/plugin-typescript: TypeScript compilation.
@rollup/plugin-babel: JavaScript/TypeScript transpilation to ES5.
rollup-plugin-scss: SCSS compilation and minification.
@rollup/plugin-url: Image asset processing.
rollup-plugin-copy: HTML file copying.
rollup-plugin-terser: JavaScript minification.
sass: Modern Sass compiler.
@babel/core, @babel/preset-env, @babel/preset-typescript: Babel setup.

Install them with:
npm install

Troubleshooting

Build Fails with Babel Error:Ensure .babelrc includes modules: false. Delete dist/ and rebuild:rm -rf dist
npx rollup -c


Sass Deprecation Warning:Verify sass and rollup-plugin-scss are on their latest versions:npm list sass rollup-plugin-scss
npm install sass@latest rollup-plugin-scss@latest --save-dev


Image Import Errors:Check that src/images.jpg exists and is correctly referenced in src/main.ts. Update src/declarations.d.ts for additional image types if needed.

Contributing

Fork the repository.
Create a branch: git checkout -b feature/your-feature.
Commit changes: git commit -m "Add your feature".
Push to GitHub: git push origin feature/your-feature.
Open a pull request with a detailed description.

See the pull request for details on recent fixes (e.g., fix/rollup-sass-deprecation).
License
MIT License. See LICENSE for details.
Contact
For issues or questions, open an issue on GitHub or contact [your-email@example.com].
