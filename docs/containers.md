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
