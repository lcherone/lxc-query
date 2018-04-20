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
const BaseEndpoint = require('../endpoint/base.js')

/**
 *
 */
module.exports = class Images extends BaseEndpoint {
  /**
   *
   */
  constructor (lxc) {
    super(lxc, '/1.0/images')
  }

  /**
   * Aliases endpoint getter
   */
  get aliases () {
    return new (require('./images/aliases.js'))(this.lxc)
  }

  /**
   *
   */
  list (remote, filter) {
    //
    remote = remote || 'local'
    filter = filter || ''

    //
    return this.lxc.server.exec(
      this.lxc.cmd + ' image list ' + shellescape([remote]) + ': ' + filter + ' --format=json',
      response => JSON.parse(response),
      false
    )
  }
}
