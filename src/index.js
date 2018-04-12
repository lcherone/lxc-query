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
   * Certificates endpoint getter
   */
  get certificates () {
    return new (require('./endpoint/certificates.js'))(this)
  }

  /**
   * Profiles endpoint getter
   */
  get profiles () {
    return new (require('./endpoint/profiles.js'))(this)
  }

  /**
   * Networks endpoint getter
   */
  get networks () {
    return new (require('./endpoint/networks.js'))(this)
  }

  /**
   *
   */
  local () {
    return this.server.exec(...arguments)
  }

  /**
   *
   */
  query () {
    return this.server.query(...arguments)
  }

  /**
   *
   */
  info () {
    return this.server.info(...arguments)
  }

  /**
   *
   */
  replace () {
    return this.server.replace(...arguments)
  }

  /**
   *
   */
  update () {
    return this.server.update(...arguments)
  }
}

module.exports = new LXC()
