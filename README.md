**LXC Query (nodejs)**
=========

A helper utility to call lxc query.

## Install

Require this package with npm using the following command:

``` bash
$ npm install lxc-query --save
```

## Usage

```
const lxc = require('lxc-query')

lxc.query('remote:/1.0', 'GET', '', response => {
    console.log(response);
})

```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.


## Credits

- [Lawrence Cherone](https://github.com/lcherone)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
