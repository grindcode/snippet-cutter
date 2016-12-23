var defaults = require('lodash.defaults')

var defaultOptions = {
  min: 1,
  max: 140,
  ellipsis: '...',
  delimeter: '.',
}

module.exports = function (str, opts) {
  var options = defaults({}, opts, defaultOptions)
  return str.split(options.delimeter).reduce(function (snippet, sentence) {
    if (snippet.length < options.min) {
      return snippet.concat(sentence + options.delimeter)
    }
    if (snippet.length > (options.max + options.ellipsis.length)) {
      return snippet.slice(0, options.max) + options.ellipsis
    }
    return snippet
  }, '')
}
