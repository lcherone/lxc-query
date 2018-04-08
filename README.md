**LXC Query (nodejs)**
=========

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A helper utility to call lxc query.

**You must be using >= LXD 2.17**

## Install

Require this package with npm using the following command:

``` bash
$ npm install lxc-query --save
```

## Usage

```
const lxc = require('lxc-query')

// with callback
lxc.query('remote:/1.0', 'GET', '', response => {
    console.log(response);
})

// with promise
lxc.query('remote:/1.0', 'GET', '').then(response => {
    console.log(response);
})

```

Need more examples? See [docs](./docs/index.md)

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.


## Credits

- [Lawrence Cherone](https://github.com/lcherone)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
