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

lxc.containers.create('local', {
  'name': 'my-new-containerx',
  'architecture': 'x86_64',
  'profiles': ['default'],
  'ephemeral': true,
  'config': { 'limits.cpu': '2' },
  'devices': {},
  'source': {
    'type': 'image',
    'mode': 'pull',
    'server': 'https://images.linuxcontainers.org:8443',
    'protocol': 'simplestreams',
    'alias': 'ubuntu/16.04'

  }
}).then(response => {
  console.log(response)
})

/*
lxc.images.list('images', 'architecture="' + ['x86_64', 'i686', 'amd64'].join('|') + '"').then(response => {
  console.log(JSON.stringify(response, null, 4))
})
*/
