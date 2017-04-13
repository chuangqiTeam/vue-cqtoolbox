// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {},
    "postcss-mixins": {mixins},
    "postcss-import": {},
    "postcss-nested": {},
    "postcss-cssnext": {
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ]
    }
  }
}
