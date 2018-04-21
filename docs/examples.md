Here are (will be) some examples of common things you might want to do with LXD. 

If you know of anything else which would be beneficial to show please let me know with an [issue](https://github.com/lcherone/lxc-query/issues) and ill add it.

## Initialize web socket for console

## Migrate containers

## Provision container with bash script

## Provision ubuntu container with cloud-init

## Example title

Example description.

```
// code
```

## Express example

```
//
const express = require("express")
const lxc = require('../src/index.js')
const app = express()

/**
 * Prettify json output
 */
function json(res, obj) {
  res.set({
    'Content-Type': 'application/json; charset=utf-8'
  }).status(200).send(JSON.stringify(obj, null, 4))
}

/**
 * Routes
 */

app.get("/containers", function(req, res) {
  //
  lxc.containers.list('local').then(response => {
    let containers = lxc.containers.stripEndpoint(response)
    let promises = []
    //
    containers.forEach(container => {
      promises.push(lxc.containers.info('local', container))
    })
    //
    Promise.all(promises).then(results => {
      json(res, results)
    })
  })
})
```

More coming soon...