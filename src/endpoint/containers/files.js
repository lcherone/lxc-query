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
const fs = require('fs')
const fspath = require('path')
const sprintf = require('../../utils/sprintf.js')
const shellescape = require('../../utils/shellescape.js')

/**
 * Create directory structure from path
 */
function mkdirSyncRecursive (directory) {
  var path = directory.replace(/\/$/, '').split('/')

  for (let i = 1; i <= path.length; i++) {
    let segment = path.slice(0, i).join('/')
    if (!fs.existsSync(segment)) {
      fs.mkdirSync(segment)
    }
  }
}

/**
 * Check directory path exists for container files
 */
function storagePath (remote, container, path) {
  // get dirname from path
  var tmp = './.files/' + remote + '/' + container + '/' + fspath.dirname(path)
  // check exists or create
  if (!fs.existsSync(tmp)) {
    mkdirSyncRecursive(tmp)
  }
  // append filename to path and return
  return tmp + '/' + fspath.basename(path)
}

/**
 *
 */
module.exports = class Files {
  /**
   *
   */
  constructor (lxc) {
    this.baseEndpoint = '/1.0/containers/{0}/files'
    this.lxc = lxc
  }

  /**
   *
   */
  stripEndpoint (items) {
    let ret = []
    items.forEach(value => {
      ret.push(value.substr(value.lastIndexOf('/') + 1))
    })
    return ret
  }

  /**
   *
   */
  pull (remote, container, path, mutator) {
    let tmp = storagePath(remote, container, path)

    return this.lxc.server.exec(
      'lxc file pull ' + shellescape([remote + ':' + container + path]) + ' ' + shellescape([tmp]) + ' && cat ' + shellescape([tmp])
    )
  }

  /**
   *
   */
  list (remote, container, path, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    path = path || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint, container) + '?path=' + path, 'GET', {}, mutator)
  }

  /**
   *
   */
  /*
  info (remote, container, snapshot, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    snapshot = snapshot || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint + '/{1}', container, snapshot), 'GET', {}, mutator)
  }
  */
  /**
   *
   */
  /*
  rename (remote, container, snapshot, newname, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    snapshot = snapshot || ''
    newname = newname || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint + '/{1}', container, snapshot), 'POST', {
      'name': newname
    }, mutator)
  }
  */
  /**
   *
   */
  /*
  create (remote, container, options, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    options = (
      options instanceof Object ? JSON.stringify(options) : (
        (typeof options === 'string' || options instanceof String) && options ? options : false
      )
    )
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint, container), 'POST', options, mutator)
  }
  */
  /**
   *
   */
  /*
  restore (remote, container, snapshot, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    snapshot = snapshot || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint + '/{1}', container), 'PUT', {
      'restore': snapshot
    }, mutator)
  }
  */
  /**
   *
   */
  /*
  delete (remote, container, snapshot, mutator) {
    //
    remote = remote || 'local'
    container = container || ''
    snapshot = snapshot || ''
    //
    return this.lxc.server.query(sprintf(remote + ':' + this.baseEndpoint + '/{1}', container, snapshot), 'DELETE', {}, mutator)
  }
  */
}
