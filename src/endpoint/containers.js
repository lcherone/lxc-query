'use strict'

/*
 +----------------------------------------------------------------------+
 | lxc-query
 +----------------------------------------------------------------------+
 | Copyright (c)2018 (https://github.com/lcherone/lxc-query)
 +----------------------------------------------------------------------+
 | This source file is subject to MIT License
 | that is bundled with this package in the file LICENSE.
 |
 | If you did not receive a copy of the license and are unable to
 | obtain it through the world-wide-web, please send an email
 | to lawrence@cherone.co.uk so we can send you a copy immediately.
 +----------------------------------------------------------------------+
 | Authors:
 |   Lawrence Cherone <lawrence@cherone.co.uk>
 +----------------------------------------------------------------------+
 */

/**
 *
 */
module.exports = class Containers {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/containers'
    this.lxc = lxc
  }

  /**
   * Snapshots endpoint getter
   */
  get snapshots () {
    return new (require('./containers/snapshots.js'))(this.lxc)
  }

  /**
   *
   */
  stripEndpoint (containers) {
    let ret = []
    containers.forEach(value => {
      ret.push(value.replace(this.baseEndpoint + '/', ''))
    })
    return ret
  }

  /**
   *
   */
  list (remote, mutator) {
    return this.lxc.server.query((remote || 'local:') + this.baseEndpoint, 'GET', {}, mutator)
  }

  /**
   *
   */
  setState (remote, name, options, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.lxc.server.query(remote + this.baseEndpoint + '/' + name + '/state', 'PUT', options, mutator)
  }

  /**
   *
   */
  getState (remote, name, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    //
    return this.lxc.server.query(remote + this.baseEndpoint + '/' + name + '/state', 'GET', {}, mutator)
  }

  /**
   *
   */
  create (remote, options, mutator) {
    //
    remote = remote || 'local:'
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.lxc.server.query(remote + this.baseEndpoint, 'POST', options, mutator)
  }

  /**
   *
   */
  start (remote, name, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    //
    return this.setState(remote + this.baseEndpoint + '/' + name + '/state', {
      action: 'start',
      timeout: 30
    }, mutator)
  }

  /**
   *
   */
  stop (remote, name, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    //
    return this.setState(remote + this.baseEndpoint + '/' + name + '/state', {
      action: 'stop',
      timeout: 30
    }, mutator)
  }

  /**
   *
   */
  restart (remote, name, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    //
    return this.setState(remote + this.baseEndpoint + '/' + name + '/state', {
      action: 'restart',
      timeout: 30
    }, mutator)
  }

  /**
   *
   */
  freeze (remote, name, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    //
    return this.setState(remote + this.baseEndpoint + '/' + name + '/state', {
      action: 'freeze',
      timeout: 30
    }, mutator)
  }

  /**
   *
   */
  unfreeze (remote, name, mutator) {
    //
    remote = remote || 'local:'
    name = name || ''
    //
    return this.setState(remote + this.baseEndpoint + '/' + name + '/state', {
      action: 'unfreeze',
      timeout: 30
    }, mutator)
  }
}