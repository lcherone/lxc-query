const lxc = require('../src/index.js')
const assert = require('assert')

describe('LXC', function() {
  describe('#query()', function() {
    it('should complete promise and not error', function(done) {
      lxc.query('local:/1.0', 'GET', {}).then(response => {
        done()
      }, err => done(err))
    })
  })
})

/*
lxc.containers.files.pull('local', 'my-container', '/var/log/cloud-init.log').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/