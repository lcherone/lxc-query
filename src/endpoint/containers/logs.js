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
module.exports = class Logs {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/containers/{0}/logs'
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
  list (remote, container, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint, container), 'GET', {}, mutator)
  }

  /**
   *
   */
  get (remote, container, logfile, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    logfile = logfile || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint + '/{1}', container, logfile), 'GET', {}, mutator)
  }
  
  /**
   *
   */
  delete (remote, container, logfile, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    log = log || ''

    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint + '/{1}', container, log), 'DELETE', {}, mutator)
  }
}
