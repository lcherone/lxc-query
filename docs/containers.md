Helper methods for containers.

## List

List containers on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| mutator      | function      | Mutation function |           |

``` javascript
// apply no mutation to the response
lxc.containers.list('local').then(response => {
    // [ '/1.0/containers/my-container' ]
    console.log(response)
})

// apply stripEndpoint on response
lxc.containers.list('local', response => lxc.containers.stripEndpoint(response)).then(response => {
    // [ 'my-container' ]
    console.log(response)
})

// or you could write your own
lxc.containers.list('local', response => {
    let ret = []
    response.forEach(value => {
      ret.push(value.replace(lxc.containers.baseEndpoint + '/', ''))
    })
    return ret
}).then(response => {
    // [ 'my-container' ]
    console.log(response)
})
```

**Response**
``` json
[ 
    '/1.0/containers/my-container'
]
```

## Info

Get container information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Container name    |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.info('local', 'my-container').then(response => {
    console.log(response);
})
```

**Response**
``` json
{
    "architecture": "x86_64",
    "config": {
        "image.architecture": "amd64",
        "image.description": "ubuntu 16.04 LTS amd64 (release) (20180405)",
        "image.label": "release",
        "image.os": "ubuntu",
        "image.release": "xenial",
        "image.serial": "20180405",
        "image.version": "16.04",
        "volatile.base_image": "be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a",
        "volatile.eth0.hwaddr": "00:16:3e:fb:89:0a",
        "volatile.idmap.base": "0",
        "volatile.idmap.next": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.idmap": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.power": "RUNNING"
    },
    "created_at": "2018-04-08T15:41:08Z",
    "description": "",
    "devices": {},
    "ephemeral": false,
    "expanded_config": {
        "image.architecture": "amd64",
        "image.description": "ubuntu 16.04 LTS amd64 (release) (20180405)",
        "image.label": "release",
        "image.os": "ubuntu",
        "image.release": "xenial",
        "image.serial": "20180405",
        "image.version": "16.04",
        "volatile.base_image": "be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a",
        "volatile.eth0.hwaddr": "00:16:3e:fb:89:0a",
        "volatile.idmap.base": "0",
        "volatile.idmap.next": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.idmap": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":100000,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.power": "RUNNING"
    },
    "expanded_devices": {
        "eth0": {
            "name": "eth0",
            "nictype": "bridged",
            "parent": "lxdbr0",
            "type": "nic"
        },
        "root": {
            "path": "/",
            "pool": "default",
            "type": "disk"
        }
    },
    "last_used_at": "2018-04-08T20:09:53Z",
    "location": "",
    "name": "my-container",
    "profiles": [
        "default"
    ],
    "stateful": false,
    "status": "Running",
    "status_code": 103
}
```

**Express**

In express you might do something like the following, to get all containers and then enumerate their information.

``` javascript
app.get("/containers", function(req, res) {
  //
  lxc.containers.list('local', response => lxc.containers.stripEndpoint(response)).then(containers => {
    let promises = []
    //
    containers.forEach(container => {
      promises.push(lxc.containers.info('local', container))
    })
    //
    Promise.all(promises).then(results => {
      res.json(results)
    })
  })
})
```

## Get State

Get the state of a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |

``` javascript
lxc.containers.getState('local', 'container-name').then(response => {
    console.log(response);
})
```

**Response**
``` json
{
	"cpu": {
		"usage": 15159435138
	},
	"disk": {},
	"memory": {
		"swap_usage": 0,
		"swap_usage_peak": 0,
		"usage": 239001600,
		"usage_peak": 314175488
	},
	"network": {
		"eth0": {
			"addresses": [
			    {
					"address": "10.189.110.190",
					"family": "inet",
					"netmask": "24",
					"scope": "global"
				},
				{
					"address": "fe80::216:3eff:fefb:890a",
					"family": "inet6",
					"netmask": "64",
					"scope": "link"
				}
			],
			"counters": {
				"bytes_received": 26351929,
				"bytes_sent": 706569,
				"packets_received": 18810,
				"packets_sent": 10095
			},
			"host_name": "vethQGS6S6",
			"hwaddr": "00:16:3e:fb:89:0a",
			"mtu": 1500,
			"state": "up",
			"type": "broadcast"
		},
		"lo": {
			"addresses": [
			    {
					"address": "127.0.0.1",
					"family": "inet",
					"netmask": "8",
					"scope": "local"
				},
				{
					"address": "::1",
					"family": "inet6",
					"netmask": "128",
					"scope": "local"
				}
			],
			"counters": {
				"bytes_received": 0,
				"bytes_sent": 0,
				"packets_received": 0,
				"packets_sent": 0
			},
			"host_name": "",
			"hwaddr": "",
			"mtu": 65536,
			"state": "up",
			"type": "loopback"
		}
	},
	"pid": 7156,
	"processes": 30,
	"status": "Running",
	"status_code": 103
}
```

## Set State

Set the state of a container on remote, this allows for more flexibility then 
calling the (start, stop, restart, freeze, unfreeze) methods below as you can set the options parameter.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |
| options      | object \| json   | Container state options |  |

``` javascript
lxc.containers.setState('local', 'container-name',  {
    "action": "stop",  # State change action (stop, start, restart, freeze or unfreeze)
    "timeout": 30,     # A timeout after which the state change is considered as failed
    "force": true,     # Force the state change (currently only valid for stop and restart where it means killing the container)
    "stateful": true   # Whether to store or restore runtime state before stopping or startiong (only valid for stop and start, defaults to false)
}).then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-08T16:37:36.511708398Z',
	description: '[Stopping, Starting, Restarting, Freezing, Unfreezing] container',
	err: '',
	id: '4850b25b-3a9a-4666-acf6-9f2b4c25a236',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: [
			'/1.0/containers/my-container'
		]
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-08T16:37:36.511708398Z'
}
```

## Replace

Replaces container configuration or restore snapshot.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Container name  |             |
| options      | object        | Container options |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.replace('local', 'my-container', {
    "architecture": "x86_64",
    "config": {
        "limits.cpu": "4",
        "volatile.base_image": "97d97a3d1d053840ca19c86cdd0596cf1be060c5157d31407f2a4f9f350c78cc",
        "volatile.eth0.hwaddr": "00:16:3e:1c:94:38"
    },
    "devices": {
        "rootfs": {
            "path": "/",
            "type": "disk"
        }
    },
    "ephemeral": true,
    "profiles": [
        "default"
    ]
}).then(response => {
    console.log(response)
})
```

**Response**

``` json
{
	
}
```

## Update

Update container configuration.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Container name    |           |
| options      | object        | Container options |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.replace('local', 'my-container', {
    "config": {
        "limits.cpu": "4"
    },
    "devices": {
        "rootfs": {
            "size": "5GB"
        }
    },
    "ephemeral": true
}).then(response => {
    console.log(response)
})
```

**Response**

``` json
{
	
}
```

## Rename

Rename a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Container name    |           |
| newName      | string        | New container name|           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.rename('local', 'old-name', 'new-name').then(response => {
    console.log(response)
})
```

**Response**

``` json
{
	
}
```

## Create

Create a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| options      | object        | The container options |       |

Full container options can be found here: [https://github.com/lxc/lxd/blob/master/doc/rest-api.md#post-1](https://github.com/lxc/lxd/blob/master/doc/rest-api.md#post-1)

``` javascript
// example from local
lxc.containers.create('local', {
    "name": "my-new-container",
    "architecture": "x86_64",
    "profiles": ["default"],
    "ephemeral": true,
    "config": { "limits.cpu": "2" },
    "devices": {},
    "source": {
        "type": "image",
        "fingerprint": "be7cec7c9489"
    }
}).then(response => {
    console.log(response)
})

// example from https://images.linuxcontainers.org
lxc.containers.create('local', {
  'name': 'my-new-container',
  'architecture': 'x86_64',
  'profiles': ['default'],
  'ephemeral': true,
  'config': { 'limits.cpu': '2' },
  'devices': {},
  'source': {
    'type': 'image',
    'mode': 'pull',
    'server': 'https://images.linuxcontainers.org:8443',
    'protocol': 'simplestreams',
    'alias': 'ubuntu/16.04'

  }
}).then(response => {
  console.log(response)
})

```

**Response**
``` json
{
    "class": "task",
    "created_at": "2018-04-08T22:49:33.892947111Z",
    "description": "Creating container",
    "err": "",
    "id": "cfd9cd81-a651-4b9b-bd89-4667cc51ad4b",
    "may_cancel": false,
    "metadata": null,
    "resources": {
        "containers": [
            "/1.0/containers/my-new-container"
        ]
    },
    "status": "Running",
    "status_code": 103,
    "updated_at": "2018-04-08T22:49:33.892947111Z"
}
```

*you could also simply call `lxc.local()` to run what you would normally run on cmd line:

``` javascript
// same as above
lxc.local('lxc launch ubuntu:16.04 my-new-container')

// launch on a remote
lxc.local('lxc launch ubuntu:16.04 production:my-container')

// launch local image on a remote
lxc.local('lxc launch local:<fingerprint> production:my-container')

// launch remote image on a remote
lxc.local('lxc launch staging:<fingerprint> production:my-container')
```

## Start

Start a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |

``` javascript
lxc.containers.start('local', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-08T16:37:36.511708398Z',
	description: 'Starting container',
	err: '',
	id: '4850b25b-3a9a-4666-acf6-9f2b4c25a236',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: [
			'/1.0/containers/my-container'
		]
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-08T16:37:36.511708398Z'
}
```

## Stop

Stop a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |

``` javascript
lxc.containers.stop('local', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-08T16:37:36.511708398Z',
	description: 'Stopping container',
	err: '',
	id: '4850b25b-3a9a-4666-acf6-9f2b4c25a236',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: [
			'/1.0/containers/my-container'
		]
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-08T16:37:36.511708398Z'
}
```

## Restart

Restart a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |

``` javascript
lxc.containers.restart('local', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-08T16:37:36.511708398Z',
	description: 'Restarting container',
	err: '',
	id: '4850b25b-3a9a-4666-acf6-9f2b4c25a236',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: [
			'/1.0/containers/my-container'
		]
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-08T16:37:36.511708398Z'
}
```

## Freeze

Freeze a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |

``` javascript
lxc.containers.freeze('local', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-08T16:37:36.511708398Z',
	description: 'Freezing container',
	err: '',
	id: '4850b25b-3a9a-4666-acf6-9f2b4c25a236',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: [
			'/1.0/containers/my-container'
		]
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-08T16:37:36.511708398Z'
}
```

## Unfreeze

Unfreeze a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | The container name |          |

``` javascript
lxc.containers.unfreeze('local', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-08T16:37:36.511708398Z',
	description: 'Thawing container',
	err: '',
	id: '4850b25b-3a9a-4666-acf6-9f2b4c25a236',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: [
			'/1.0/containers/my-container'
		]
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-08T16:37:36.511708398Z'
}
```

## Delete

Delete a container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Container name    |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.delete('local', 'container-name').then(response => {
    console.log(response)
})
```

**Response**

``` json
{
	
}
```

## Exec

Run a command in container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Container name    |           |
| options      | object        | The container options |       |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.exec('local', 'my-container', {
    "command": ["/bin/bash"],
    "environment": {},
    "wait-for-websocket": false,
    "record-output": false,
    "interactive": false,
    "width": 80,
    "height": 25
}).then(response => {
    console.log(response);
})
```

**Response**

``` json
{
    "class": "task",
    "created_at": "2018-04-16T01:58:34.642661556Z",
    "description": "Executing command",
    "err": "",
    "id": "bff27d5c-f54c-4fb4-8956-60bcea56d074",
    "may_cancel": false,
    "metadata": null,
    "resources": {
        "containers": [
            "/1.0/containers/my-container"
        ]
    },
    "status": "Running",
    "status_code": 103,
    "updated_at": "2018-04-16T01:58:34.642661556Z"
}
```
