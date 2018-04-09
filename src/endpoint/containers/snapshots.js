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

const sprintf = require('../../utils/sprintf.js')

/**
 *
 */
module.exports = class Snapshots {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/containers/{0}/snapshots'
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
  list (remote, container, mutator) {
    //
    remote = remote || 'local:'
    container = container || ''
    //
    return this.lxc.server.query(sprintf(remote + this.baseEndpoint, container), 'GET', {}, mutator)
  }

  /**
   *
   */
  create (remote, container, options, mutator) {
    //
    remote = remote || 'local:'
    container = container || ''
    options = (
      // is object, stringify-it
      options instanceof Object ? JSON.stringify(options) : (
        // is string, not empty, or set as false
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.lxc.server.query(sprintf(remote + this.baseEndpoint, container), 'POST', options, mutator)
  }
}