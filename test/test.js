/**
 * Tests - written for travis
 * 
 * The idea is not to pedantically cover everything but just the basics so as 
 * not to deploy a broken lib, like does it return an array/object.
 * 
 * If your comfortable writing tests, then please feel free to contribute.
 */
var runTests = process.env.runTests || false

// include lib
const lxc = require('../src/index.js')

// include test libs
const assert = require('assert')

// set cmd which is run for travis, default its set to just lxc
if (process.env.isTravis || process.env.GITHUB_ACTIONS) {
  lxc.setCmd('sudo lxd.lxc')
  runTests = true
}

// should we actully run tests
if (runTests) {
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
    // list containers
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
      it('should complete promise, create container, return object (operation dect) and not error', function (done) {
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
  
    // start container - give it 10 seconds to create
    describe('#start()', function () {
      it('should complete promise, start container, return object (operation dect) and not error', function (done) {
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
      it('should complete promise, stop container, return object (operation dect) and not error', function (done) {
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
      it('should complete promise, delete container, return object (operation dect) and not error', function (done) {
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
}

/* Developers testing - anything beyond this point, its best to just ignore ;p */

