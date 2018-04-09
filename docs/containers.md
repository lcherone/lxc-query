# Containers

Helper methods for container operations.

## List

List containers on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| mutator      | function      | Mutation function |               |

```
// apply no mutation to the response
lxc.containers.list('local:').then(response => {
    // [ '/1.0/containers/my-container' ]
    console.log(response)
})

// apply stripEndpoint on response
lxc.containers.list('local:', response => lxc.containers.stripEndpoint(response)).then(response => {
    // [ 'my-container' ]
    console.log(response)
})

// or you could write your own
lxc.containers.list('local:', response => {
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
```
[ 
    '/1.0/containers/my-container'
]
```

## Get State

Get the state of a container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.getState('local:', 'container-name').then(response => {
    console.log(response);
})
```

**Response**
```
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
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |
| options      | object \| json   | Container state options |  |

```
lxc.containers.setState ('local:', 'container-name',  {
    "action": "stop",  # State change action (stop, start, restart, freeze or unfreeze)
    "timeout": 30,     # A timeout after which the state change is considered as failed
    "force": true,     # Force the state change (currently only valid for stop and restart where it means killing the container)
    "stateful": true   # Whether to store or restore runtime state before stopping or startiong (only valid for stop and start, defaults to false)
}).then(response => {
    console.log(response)
})
```

**Response**
```
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

## Create

Create container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| options      | object        | The container options |  |

Full container options can be found here: [https://github.com/lxc/lxd/blob/master/doc/rest-api.md#post-1](https://github.com/lxc/lxd/blob/master/doc/rest-api.md#post-1)

```
lxc.containers.create('local:', {
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
    console.log(JSON.stringify(response, null, 4))
})
```

**Response**
```
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
## Start

Start container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.start('local:', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
```
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

Stop container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.stop('local:', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
```
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

Restart container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.restart('local:', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
```
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

Freeze container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.freeze('local:', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
```
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

Unfreeze container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.unfreeze('local:', 'container-name').then(response => {
    console.log(response)
})
```

**Response**
```
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
