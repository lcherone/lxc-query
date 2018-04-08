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

const shellescape = require('../utils/shellescape.js')
const exec = require('../utils/exec.js').exec

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
  list (remote, callback) {
    //
    if (remote === undefined || remote === null) {
      remote = 'local:'
    }
    return exec('lxc query -X GET ' + shellescape([remote + this.baseEndpoint]), callback)
  }

  /**
   *
   */
  start (remote, name, callback) {
    //
    if (remote === undefined || remote === null) {
      remote = 'local:'
    }
    //
    if (name === undefined || name === null) {
      name = ''
    }
    return this.lxc.query(remote + this.baseEndpoint + '/' + name + '/state', 'PUT', JSON.stringify({
      action: 'start',
      timeout: 30// ,
      // force: true,
      // stateful: true
    }), callback)
  }

  /**
   *
   */
  stop (remote, name, callback) {
    //
    if (remote === undefined || remote === null) {
      remote = 'local:'
    }
    //
    if (name === undefined || name === null) {
      name = ''
    }
    return this.lxc.query(remote + this.baseEndpoint + '/' + name + '/state', 'PUT', JSON.stringify({
      action: 'stop',
      timeout: 30// ,
      // force: true,
      // stateful: true
    }), callback)
  }
}
