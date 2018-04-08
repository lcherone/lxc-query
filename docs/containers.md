# Containers

Helper methods for container operations.

## List

List containers on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |

```
lxc.containers.list('local:').then(response => {
    console.log(response);
})
```

**Response**
```
[ 
    '/1.0/containers/my-container'
]
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
    console.log(response);
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

## Start

Start container on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | The container name |  |

```
lxc.containers.start('local:', 'container-name').then(response => {
    console.log(response);
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
    console.log(response);
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
    console.log(response);
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
    console.log(response);
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
    console.log(response);
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

