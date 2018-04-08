**LXC Query**
=========

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://nodei.co/npm/lxc-query.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lxc-query/)


A Node.js LXD client which uses a local instance of LXD and `lxc query` to manage your remote LXD servers.

**You must be using >= LXD 2.17**

## Install

Require this package with npm using the following command:

``` bash
$ npm i lxc-query
```

## Usage

```
const lxc = require('lxc-query')

lxc.query('remote:/1.0', 'GET', {}).then(response => {
    console.log(response);
})
```

Need more examples? [See the docs](https://lcherone.github.io/lxc-query).

## Contributing

Please see [CONTRIBUTING](https://github.com/lcherone/lxc-query/blob/master/CONTRIBUTING.md) for details.


## Credits

- [Lawrence Cherone](https://github.com/lcherone)
- [All Contributors](https://github.com/lcherone/lxc-query/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](https://github.com/lcherone/lxc-query/blob/master/LICENSE) for more information.
