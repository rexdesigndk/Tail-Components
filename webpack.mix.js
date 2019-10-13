const mix = require("laravel-mix");
require("laravel-mix-imagemin");

mix
  .js(["src/js/entry.js"], "dist/js/bundle.js")
  .postCss("src/css/main.css", "dist/css/", [
    require("postcss-import")({
      path: ["src/css/"]
    }),
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["index.html"],
      from: ["/src/css/main.css"],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:\/]+/g) || []
    }),
    require("cssnano")
  ])
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
