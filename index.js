var defaults = require('lodash.defaults')
module.exports = function (str, opts) {
  var options = defaults({}, opts, {
    min: 1, max: 140, ellipsis: '...', delimeter: '.'
  })
  return str.split(options.delimeter).reduce(function (candidate, sentence) {
    return (candidate.length < options.min)
           ? candidate.concat(`${sentence}${options.delimeter}`)
           : (candidate.length > (options.max + options.ellipsis.length))
             ? candidate.slice(0, options.max) + options.ellipsis
             : candidate
  }, '')
}
