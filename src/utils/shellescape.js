// return a shell compatible format
//
module.exports = (a) => {
  let ret = []
  a.forEach(function(s) {
    if (/[^A-Za-z0-9_\/:=-]/.test(s)) {
      s = "'" + s.replace(/'/g, "'\\''") + "'"
      s = s.replace(/^(?:'')+/g, '').replace(/\\'''/g, "\\'")
    }
    ret.push(s)
  })
  return ret.join(' ')
}