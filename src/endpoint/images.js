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
module.exports = class Images {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/images'
    this.lxc = lxc
  }

  /**
   * Aliases endpoint getter
   */
  get aliases () {
    return new (require('./images/aliases.js'))(this.lxc)
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
  info (remote, fingerprint, mutator) {
    //
    remote = remote || 'local'
    fingerprint = fingerprint || ''
    //
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + fingerprint, 'GET', {}, mutator)
  }

  /**
   *
   */
  replace (remote, fingerprint, options, mutator) {
    //
    remote = remote || 'local'
    fingerprint = fingerprint || ''
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + fingerprint, 'PUT', options, mutator)
  }

  /**
   *
   */
  update (remote, fingerprint, options, mutator) {
    //
    remote = remote || 'local'
    fingerprint = fingerprint || ''
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + fingerprint, 'PATCH', options, mutator)
  }

  /**
   *
   */
  delete (remote, fingerprint, mutator) {
    //
    remote = remote || 'local'
    fingerprint = fingerprint || ''

    return this.lxc.server.query(remote + ':' + this.baseEndpoint + '/' + fingerprint, 'DELETE', {}, mutator)
  }
}
