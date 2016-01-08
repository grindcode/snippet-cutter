var defaults = require('lodash.defaults')
module.exports = function (str, opts) {
  var options = defaults({}, opts, { min: 1, max: 140, ellipsis: '...'})
  return str.split('.').reduce((candidate, sentence) => {
    return (candidate.length < options.min)
           ? candidate.concat(`${sentence}.`)
           : (candidate.length > (options.max + options.ellipsis.length))
             ? candidate.slice(0, options.max) + options.ellipsis
             : candidate.trim()
  }, '')
}
