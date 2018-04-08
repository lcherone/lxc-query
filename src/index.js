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

const shellescape = require('./utils/shellescape.js')
const exec = require('./utils/exec.js').exec

/**
 * Endpoints
 */
const Containers = require('./endpoint/containers.js')

/**
 *
 */
class LXC {
  /**
   *
   */
  constructor () {
    this.containers = new Containers(this)
  }

  /**
   *
   */
  query (remote, action, data, callback) {
    //
    if (remote === undefined || remote === null) {
      remote = '/'
    }

    //
    if (action === undefined || action === null) {
      action = 'GET'
    }

    //
    if (data === undefined || data === null || data === '') {
      data = false
    }

    return exec(
      'lxc query -X ' + action + (data !== false ? ' -d ' + shellescape([data]) : '') + ' ' + shellescape([remote]),
      callback
    )
  }
}

module.exports = new LXC()
