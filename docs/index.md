[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard) [![NPM](https://nodei.co/npm/lxc-query.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lxc-query/)
[![Build Status](https://travis-ci.org/lcherone/lxc-query.svg?branch=master)](https://travis-ci.org/lcherone/lxc-query)

A Node.js LXD client which uses your local instance of LXD and `lxc query` to manage your local or remote LXD servers.

**You must be using >= LXD 2.17**

## Install

Require this package with npm using the following command:

``` bash
$ npm i lxc-query
```

## Usage

Essentially you can do any LXD operation with the single `lxc.query` method, or you can use the helper methods which cover all the LXD endpoints (see side menu).

**Parameters & Call**

| Parameter    | Type          | Description   | Default                     |
| ----------   | ------------- | ------------- | -------------               | 
| remote       | string        | LXD remote and endpoint            | local |
| rest method  | string        | e.g GET, POST, DELETE, PUT, PATCH  | GET    |
| payload      | object \| json string | Rest json payload          |        |
| mutator      | function      | Pre-resolve mutation function      |        |

``` javascript
const lxc = require('lxc-query')

lxc.query('remote:/1.0', 'GET', {}).then(response => {
    console.log(response)
})
```

Check out the LXD [RESTapi](https://github.com/lxc/lxd/blob/master/doc/rest-api.md), for more information. 

## Contributing

Please see [CONTRIBUTING](https://github.com/lcherone/lxc-query/blob/master/CONTRIBUTING.md) for details.

## Developer Support / Sponsor

If you want to show your appreciation, please feel free to make a donation [https://www.paypal.me/lcherone](https://www.paypal.me/lcherone), thanks.

## Credits

- [Lawrence Cherone](https://github.com/lcherone)
- [All Contributors](https://github.com/lcherone/lxc-query/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](https://github.com/lcherone/lxc-query/blob/master/LICENSE) for more information.

## Links

Check out [LXD-UI](https://github.com/lcherone/lxd-ui) - A simple easy to use GUI for your local LXD server.