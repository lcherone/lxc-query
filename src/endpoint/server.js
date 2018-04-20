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
module.exports = class Server {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0'
    this.lxc = lxc
  }

  /**
   *
   */
  exec (cmd, mutator, parse) {
    //
    cmd = cmd || ''
    mutator = mutator || {}
    parse = parse || undefined
    //
    return exec(cmd, mutator, false)
  }

  /**
   *
   */
  query (remote, action, data, mutator) {
    //
    remote = remote || 'local:/'
    action = action || 'GET'
    data = (
      data instanceof Object ? JSON.stringify(data) : (
        (typeof data === 'string' || data instanceof String) && data ? data : false
      )
    )
    return this.exec(
      this.lxc.cmd + ' query -X ' + shellescape([action]) + (data !== false ? ' -d ' + shellescape([data]) : '') + ' ' + shellescape([remote]),
      mutator
    )
  }

  /**
   *
   */
  remotes () {
    return this.exec(
      this.lxc.cmd + ' remote list | tail -n +4 | awk \'{print $2}\' | egrep -v \'^(\\||^$)\'',
      response => {
        return response.trim().split(/\r?\n/)
      },
      false
    )
  }

  /**
   *
   */
  info (remote) {
    return this.query((remote || 'local') + ':' + this.baseEndpoint)
  }

  /**
   *
   */
  resources (remote) {
    return this.query((remote || 'local') + ':' + this.baseEndpoint + '/resources')
  }

  /**
   *
   */
  update (remote, options, mutator) {
    //
    remote = remote || 'local'
    options = (
      options instanceof Object ? JSON.stringify(options) : (
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.query(remote + ':' + this.baseEndpoint, 'PATCH', options, mutator)
  }

  /**
   *
   */
  replace (remote, options, mutator) {
    //
    remote = remote || 'local'
    options = (
      options instanceof Object ? JSON.stringify(options) : (
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.query(remote + ':' + this.baseEndpoint, 'PUT', options, mutator)
  }
}
