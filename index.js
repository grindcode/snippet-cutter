var cutter = function (str, options) {
  return str.split('.').reduce((candidate, sentence) => {
    return (candidate.length < options.min)
           ? candidate.concat(`${sentence}.`)
           : (candidate.length > (options.max + options.ellipsis.length))
             ? candidate.slice(0, options.max) + options.ellipsis
             : candidate.trim()
  }, '')
}

module.exports = cutter
