const mix = require("laravel-mix");
require("laravel-mix-imagemin");

mix
  .postCss("src/css/main.css", "dist/css/", [
    require('postcss-import')({
      path: ['src/css/']
    }),
    require("tailwindcss"), 
    require("autoprefixer"),
    require('cssnano'),
    require('@fullhuman/postcss-purgecss')({
      content: ['index.html'],
      css: ['src/css/main.css'],
      defaultExtractor: content =>content.match(/[A-Za-z0-9-_:\/]+/g) || []
    }),
  ])
  .js(["src/js/entry.js"], "dist/js/bundle.js")
  .imagemin(
    {
      from: "src/img",
      to: "dist/img/"
    },
    {
      optipng: {
        optimizationLevel: 5
      },
      jpegtran: null
    }
  );
