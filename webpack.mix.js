const mix = require("laravel-mix");
require("laravel-mix-imagemin");

mix
  .postCss("src/css/main.css", "dist/css", [require("tailwindcss"), require("autoprefixer")])
  .js(["src/js/entry.js"], "dist/js/dist.js")
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
