[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A helper utility to call lxc query.

**You must be using >= LXD 2.17**

## Install

Require this package with npm using the following command:

``` bash
$ npm i lxc-query
```

## Usage

```
const lxc = require('lxc-query')

// with promise
lxc.query('remote:/1.0', 'GET', '').then(response => {
    console.log(response);
})

// with callback
lxc.query('remote:/1.0', 'GET', '', response => {
    console.log(response);
})
```

You can use the above to call **any** endpoint on LXD [RESTapi](https://github.com/lxc/lxd/blob/master/doc/rest-api.md). 

## Contributing

Please see [CONTRIBUTING](https://github.com/lcherone/lxc-query/blob/master/CONTRIBUTING.md) for details.


## Credits

- [Lawrence Cherone](https://github.com/lcherone)
- [All Contributors](https://github.com/lcherone/lxc-query/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](https://github.com/lcherone/lxc-query/blob/master/LICENSE) for more information.
