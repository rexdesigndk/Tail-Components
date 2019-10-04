const mix = require('laravel-mix');

mix.postCss('src/css/main.css', 'dist/css', [
  require('tailwindcss'),
  require('autoprefixer')
])
  .js('src/js/app.js', 'dist/js')