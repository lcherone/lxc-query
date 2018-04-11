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
class LXC {
  /**
   * Server endpoint getter
   */
  get server () {
    return new (require('./endpoint/server.js'))(this)
  }

  /**
   * Containers endpoint getter
   */
  get containers () {
    return new (require('./endpoint/containers.js'))(this)
  }

  /**
   * Images endpoint getter
   */
  get images () {
    return new (require('./endpoint/images.js'))(this)
  }

  /**
   *
   */
  local (cmd) {
    return this.server.exec(cmd)
  }

  /**
   *
   */
  query (remote, action, data, mutator) {
    return this.server.query(remote, action, data, mutator)
  }

  /**
   *
   */
  info (remote, mutator) {
    return this.server.info(remote, mutator)
  }

  /**
   *
   */
  replace (remote, options, mutator) {
    return this.server.replace(remote, options, mutator)
  }

  /**
   *
   */
  update (remote, options, mutator) {
    return this.server.update(remote, options, mutator)
  }
}

module.exports = new LXC()
