const lxc = require('../src/index.js')

// set cmd which is run for travis, default its set to just lxc
if (process.env.isTravis) {
  lxc.setCmd('sudo lxd.lxc')
}

describe('LXC', function () {
  describe('#query()', function () {
    it('should complete promise and not error', function (done) {
      lxc.query('local:/1.0', 'GET', {}).then(response => {
        done()
      }, err => done(err))
    })
  })
})

/*
lxc.images.list('images', 'architecture="' + ['x86_64', 'i686', 'amd64'].join('|') + '"').then(response => {
  console.log(JSON.stringify(response, null, 4))
})
*/