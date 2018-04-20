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
module.exports = class Metadata {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/containers/{0}/metadata'
    this.lxc = lxc
  }

  /**
   *
   */
  stripEndpoint (items) {
    let ret = []
    items.forEach(value => {
      ret.push(value.substr(value.lastIndexOf('/') + 1))
    })
    return ret
  }

  /**
   *
   */
  get (remote, container, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint, container), 'GET', {}, mutator)
  }

  /**
   *
   */
  replace (remote, container, metadata, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    metadata = metadata || {}
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint, container), 'PUT', metadata, mutator)
  }
}
