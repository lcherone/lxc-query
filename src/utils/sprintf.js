/**
 * sprintf style format string
 * @usage: format('{0}, then follows {1}', 'abc', 'efg')
 */
module.exports = function (format) {
  let args = Array.prototype.slice.call(arguments, 1)
  return format.replace(/{(\d+)}/g, (match, number) => {
    return typeof args[number] !== 'undefined' ? args[number] : match
  })
}
