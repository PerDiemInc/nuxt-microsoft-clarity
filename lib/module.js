const { resolve } = require('path')

module.exports = function module (moduleOptions) {
  const defaults = {
    MICROSOFT_CLARITY_ID: ''
  };

  const options = Object.assign({}, defaults, this.options.msc, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('./../package.json')