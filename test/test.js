// include lib
const lxc = require('../src/index.js')

// include test libs
const assert = require('assert')

// set cmd which is run for travis, default its set to just lxc
if (process.env.isTravis) {
  lxc.setCmd('sudo lxd.lxc')
}

describe('LXC', function () {
  // check server
  describe('#query()', function () {
    it('should complete promise, return object and not error', function (done) {
      lxc.query('local:/1.0', 'GET', {}).then(response => {
        assert.equal(response.constructor, Object)
        done()
      }, err => done(err)).catch(err => done(err))
    })
  })
})

describe('LXC - Containers', function () {
  // list container
  describe('#list()', function () {
    it('should complete promise, return array and not error', function (done) {
      lxc.containers.list('local').then(response => {
        assert.equal(response.constructor, Array)
        done()
      }, err => done(err)).catch(err => done(err))
    })
  })

  // create container
  describe('#create()', function () {
    it('should complete promise, create container, return object and not error', function (done) {
      lxc.containers.create('local', {
        'name': 'test-container',
        'architecture': 'x86_64',
        'profiles': ['default'],
        'ephemeral': false,
        'config': {},
        'devices': {},
        'source': {
          'type': 'image',
          'mode': 'pull',
          'server': 'https://images.linuxcontainers.org:8443',
          'protocol': 'simplestreams',
          'alias': 'alpine/edge'

        }
      }).then(response => {
        assert.equal(response.constructor, Object)
        done()
      }, err => done(err)).catch(err => done(err))
    })
  })

  // start container - give it 5 seconds to create
  describe('#start()', function () {
    it('should complete promise, start container, return object and not error', function (done) {
      this.timeout(11000)
      setTimeout(function () {
        lxc.containers.start('local', 'test-container').then(response => {
          assert.equal(response.constructor, Object)
          done()
        }, err => done(err)).catch(err => done(err))
      }, 10000)
    })
  })

  // stop container
  describe('#stop()', function () {
    it('should complete promise, stop container, return object and not error', function (done) {
      this.timeout(6000)
      setTimeout(function () {
        lxc.containers.stop('local', 'test-container').then(response => {
          assert.equal(response.constructor, Object)
          done()
        }, err => done(err)).catch(err => done(err))
      }, 5000)
    })
  })

  // delete container
  describe('#delete()', function () {
    it('should complete promise, delete container, return object and not error', function (done) {
      this.timeout(6000)
      setTimeout(function () {
        lxc.containers.delete('local', 'test-container').then(response => {
          assert.equal(response.constructor, Object)
          done()
        }, err => done(err)).catch(err => done(err))
      }, 5000)
    })
  })
})

/*
lxc.containers.create('local', {
  'name': 'my-new-container',
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
*/

/*
lxc.images.list('images', 'architecture="' + ['x86_64', 'i686', 'amd64'].join('|') + '"').then(response => {
  console.log(JSON.stringify(response, null, 4))
})
*/
