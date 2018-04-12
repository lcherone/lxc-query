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
module.exports = class Networks {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/networks'
    this.lxc = lxc
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
    //
    remote = remote || 'local'
    //
    return this.lxc.server.query(remote + ':' + this.baseEndpoint, 'GET', {}, mutator)
  }

  /**
   *
   */
  info (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    //
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name, 'GET', {}, mutator)
  }

  /**
   *
   */
  create (remote, options, mutator) {
    //
    remote = remote || 'local'
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    return this.lxc.server.query(remote + ':' + this.baseEndpoint, 'POST', options, mutator)
  }

  /**
   *
   */
  replace (remote, name, options, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name, 'PUT', options, mutator)
  }

  /**
   *
   */
  update (remote, name, options, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name, 'PATCH', options, mutator)
  }

  /**
   *
   */
  rename (remote, name, newName, mutator) {
    //
    remote = remote || 'local'
    name = name || ''
    newName = newName || ''
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name, 'POST', {
      'name': newName
    }, mutator)
  }

  /**
   *
   */
  delete (remote, name, mutator) {
    //
    remote = remote || 'local'
    name = name || ''

    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + name, 'DELETE', {}, mutator)
  }
}
