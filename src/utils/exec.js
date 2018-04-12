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

const exec = require('child_process').exec

/**
 * Abstract module so exec is not in callers scope
 */
class Module {
  /**
   * Execute exec as a promise, handle json or not, parse or not.
   *
   * @param string   cmd     - command to run, should be escaped properly
   * @param function mutator - mutation function which can be applied to the response before resolving
   * @param bool     parse   - if set will *not* attempt to decode json
   *
   */
  exec (cmd, mutator, parse) {
    //
    if (typeof mutator !== 'function') {
      mutator = response => response
    }
    //
    parse = parse === undefined
    //
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        try {
          if (error !== null) {
            reject(error)
          } else {
            if (!parse) {
              if (typeof mutator === 'function') {
                stdout = mutator(stdout)
              }
              resolve(stdout)
            } else {
              if (!stdout) {
                stdout = '{}'
              }
              try {
                stdout = JSON.parse(stdout)
              } catch (e) {
                reject(stdout)
              }
              if (typeof mutator === 'function') {
                stdout = mutator(stdout)
              }
              resolve(stdout)
            }
          }
        } catch (e) {
          reject(e.message)
        }
      })
    })
  }
}

module.exports = new Module()
