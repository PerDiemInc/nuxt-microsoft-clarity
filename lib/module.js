const { resolve } = require('path')

/**
 *
 * @param {Object} moduleOptions - Those options are coming from nuxt.config file
 */
module.exports = function module (moduleOptions) {
  const defaults = {
    id: null
  };

  const opt = Object.assign({}, defaults, this.options.microsoftClarity, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    // We don't support SSR at the moment.
    // The code will be added in the client side.
    ssr: false,
    opt
  })
}

module.exports.meta = require('./../package.json')