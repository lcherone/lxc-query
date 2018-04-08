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
   * Execute nodejs exec as a promise or with callback
   *
   * Very verbose so as to know whats breaking...
   *
   * @param string cmd - should be escaped properly
   * @param function callback - the callback after resolving
   * @param bool parse - if set will not attempt to decode json
   *
   */
  exec (cmd, callback, parse) {
    parse = parse === undefined
    if (typeof callback !== 'function') {
      return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
          if (error !== null) {
            console.error('cmd: ', cmd)
            console.error('stderr: ', stderr)
            reject(error)
          } else {
            if (!parse) {
              resolve(stdout)
            } else {
              try {
                stdout = JSON.parse(stdout)
              } catch (e) {
                console.error('cmd: ', cmd)
                console.error('stderr: ', stderr)
                reject(stdout)
              }
              resolve(stdout)
            }
          }
        })
      })
    } else {
      exec(cmd, (error, stdout, stderr) => {
        if (error !== null) {
          console.error('cmd: ', cmd)
          console.error('stderr: ', stderr)
          console.error('error: ', error)
        } else {
          if (!parse) {
            callback(stdout)
          } else {
            try {
              stdout = JSON.parse(stdout)
            } catch (e) {
              console.error('cmd: ', cmd)
              console.error('stderr: ', stderr)
              console.error('stdout: ', stdout)
              return false
            }
            callback(stdout)
          }
        }
      })
    }
  }
}

module.exports = new Module()
