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

const BaseEndpoint = require('../endpoint/base.js')

/**
 *
 */
module.exports = class Containers extends BaseEndpoint {
  /**
   *
   */
  constructor (lxc) {
    super(lxc, '/1.0/containers')
  }

  /**
   * Snapshots endpoint getter
   */
  get snapshots () {
    return new (require('./containers/snapshots.js'))(this.lxc)
  }

  /**
   * Files endpoint getter
   */
  get files () {
    return new (require('./containers/files.js'))(this.lxc)
  }

  /**
   * Logs endpoint getter
   */
  get logs () {
    return new (require('./containers/logs.js'))(this.lxc)
  }

  /**
   * Metadata endpoint getter
   */
  get metadata () {
    return new (require('./containers/metadata.js'))(this.lxc)
  }

  /**
   *
   */
  setState (remote, name, options, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    options = (
      options instanceof Object ? JSON.stringify(options) : (
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name + '/state', 'PUT', options, mutator)
  }

  /**
   *
   */
  getState (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name + '/state', 'GET', {}, mutator)
  }

  /**
   *
   */
  start (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.setState(remote, name, {action: 'start', timeout: 30}, mutator)
  }

  /**
   *
   */
  stop (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.setState(remote, name, {action: 'stop', timeout: 30}, mutator)
  }

  /**
   *
   */
  restart (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.setState(remote, name, {action: 'restart', timeout: 30}, mutator)
  }

  /**
   *
   */
  freeze (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.setState(remote, name, {action: 'freeze', timeout: 30}, mutator)
  }

  /**
   *
   */
  unfreeze (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.setState(remote, name, {action: 'unfreeze', timeout: 30}, mutator)
  }

  /**
   *
   */
  exec (remote, name, options, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    options = (
      options instanceof Object ? JSON.stringify(options) : (
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name + '/exec', 'POST', options, mutator)
  }
}
