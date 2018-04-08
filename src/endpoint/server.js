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
    this.baseEndpoint = '/'
  }

  /**
   *
   */
  query (remote, action, data, mutator) {
    //
    remote = remote || 'local:'
    action = action || 'GET'
    data = (
      // is object, stringify-it
      data instanceof Object ? JSON.stringify(data) : (
      // is string, not empty, or set as false
        data instanceof String && data ? data : false
      )
    )
    return exec(
      'lxc query -X ' + shellescape([action]) + (data !== false ? ' -d ' + shellescape([data]) : '') + ' ' + shellescape([remote]),
      mutator
    )
  }

  /**
   *
   */
  remotes () {
    return exec(
      'lxc remote list | tail -n +4 | awk \'{print $2}\' | egrep -v \'^(\\||^$)\'',
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
    return this.query((remote || 'local:') + '/1.0')
  }
}
