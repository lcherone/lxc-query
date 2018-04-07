'use strict';

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
//
const shellescape = require('./utils/shellescape.js')
const exec = require('child_process').exec

/**
 * 
 */
class LXC {
  /**
   * 
   */
  query(remote, action, data, callback) {
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

    if (typeof callback !== 'function') {
      var callback = function(response) {
        console.error('ERROR: no callback supplied for lxc_query(' + remote + ', ' + action + ', ' + data + ', *callback)')
        console.log(response)
      }
    }

    exec('lxc query -X ' + action + (data !== false ? ' -d ' + shellescape([data]) : '') + ' ' + shellescape([remote]), function(error, stdout, stderr) {
      if (error !== null) {
        console.error('stderr: ', stderr)
        console.error('error: ', error)
      }
      callback(stdout)
    })
  }

}

module.exports = new LXC()
