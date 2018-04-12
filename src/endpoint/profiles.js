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

const BaseEndpoint = require('../endpoint/base.js')

/**
 *
 */
module.exports = class Profiles extends BaseEndpoint {
  /**
   *
   */
  constructor (lxc) {
    super(lxc, '/1.0/profiles')
  }

  /**
   *
   */
  stripEndpoint () {
    return super.stripEndpoint(...arguments)
  }

  /**
   *
   */
  list () {
    return super.list(...arguments)
  }

  /**
   *
   */
  info () {
    return super.info(...arguments)
  }

  /**
   *
   */
  create () {
    return super.create(...arguments)
  }

  /**
   *
   */
  replace () {
    return super.replace(...arguments)
  }

  /**
   *
   */
  update () {
    return super.update(...arguments)
  }

  /**
   *
   */
  rename () {
    return super.rename(...arguments)
  }

  /**
   *
   */
  delete () {
    return super.delete(...arguments)
  }
}
