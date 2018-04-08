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
 * Endpoints
 */
const Server = require('./endpoint/server.js')
const Containers = require('./endpoint/containers.js')

/**
 *
 */
class LXC {
  /**
   *
   */
  constructor () {
    this.server = new Server(this)
    this.containers = new Containers(this)
  }

  /**
   *
   */
  query (remote, action, data, callback) {
    return this.server.query(remote, action, data, callback)
  }

  /**
   *
   */
  info (remote, callback) {
    return this.server.info(remote, callback)
  }
}

module.exports = new LXC()
