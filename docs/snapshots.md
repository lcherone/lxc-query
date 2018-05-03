Helper methods for snapshots.

## List

List container snapshots.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.snapshots.list('local', 'my-container').then(response => {
    console.log(response)
})

// or apply stripEndpoint on response
lxc.containers.snapshots.list('local', 'my-container', response => lxc.containers.snapshots.stripEndpoint(response)).then(response => {
    // [ 'my-snapshot' ]
    console.log(response)
})
```

**Response**
``` json
[
    "/1.0/containers/my-container/snapshots/my-snapshot"
]
```

## Info

Get container snapshot information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| snapshot     | string        | Snapshot name     |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.snapshots.info('local', 'my-container', 'my-container (April 10, 2018 6:53 PM)').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
    "architecture": "x86_64",
    "config": {
        "image.architecture": "amd64",
        "image.description": "ubuntu 16.04 LTS amd64 (release) (20180306)",
        "image.label": "release",
        "image.os": "ubuntu",
        "image.release": "xenial",
        "image.serial": "20180306",
        "image.version": "16.04",
        "volatile.base_image": "c5bbef7f4e1c19f0104fd4ub862b2e54x095d894765c75c6d72775f1d98135ec",
        "volatile.eth0.hwaddr": "00:16:3e:24:39:ee",
        "volatile.eth0.name": "eth0",
        "volatile.idmap.base": "0",
        "volatile.idmap.next": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.idmap": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.power": "STOPPED"
    },
    "created_at": "2018-04-10T17:53:44Z",
    "devices": {},
    "ephemeral": false,
    "expanded_config": {
        "boot.autostart": "0",
        "image.architecture": "amd64",
        "image.description": "ubuntu 16.04 LTS amd64 (release) (20180306)",
        "image.label": "release",
        "image.os": "ubuntu",
        "image.release": "xenial",
        "image.serial": "20180306",
        "image.version": "16.04",
        "limits.cpu": "1",
        "limits.cpu.allowance": "90%",
        "limits.cpu.priority": "9",
        "limits.disk.priority": "9",
        "limits.memory": "1056MB",
        "limits.memory.enforce": "hard",
        "limits.memory.swap": "1",
        "limits.memory.swap.priority": "5",
        "limits.network.priority": "9",
        "limits.processes": "14100",
        "security.nesting": "0",
        "security.privileged": "0",
        "volatile.base_image": "c5bbef7f4e1c19f0104fd49b862b2e549095d894765c75c6d72775f1d98185ec",
        "volatile.eth0.hwaddr": "00:16:3e:24:39:ee",
        "volatile.eth0.name": "eth0",
        "volatile.idmap.base": "0",
        "volatile.idmap.next": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.idmap": "[{\"Isuid\":true,\"Isgid\":false,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536},{\"Isuid\":false,\"Isgid\":true,\"Hostid\":165536,\"Nsid\":0,\"Maprange\":65536}]",
        "volatile.last_state.power": "STOPPED"
    },
    "expanded_devices": {
        "eth0": {
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
    "last_used_at": "1970-01-01T00:00:00Z",
    "name": "my-container/my-container (April 10, 2018 6:53 PM)",
    "profiles": [
        "default"
    ],
    "stateful": false
}
```

## Create

Create container snapshot.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| options      | object        | Snapshot options  |           |
| mutator      | function      | Mutation function |           |
 
``` javascript
lxc.containers.snapshots.create('local', 'my-container', {
    "name": "my-snapshot",
    "stateful": true
}).then(response => {
    console.log(response)
})
```

**Response**
``` json
{
    "class": "task",
    "created_at": "2018-04-09T17:57:48.19705024Z",
    "description": "Snapshotting container",
    "err": "",
    "id": "5db401c7-8d31-4110-aa15-0c6398a36cdb",
    "may_cancel": false,
    "metadata": null,
    "resources": {
        "containers": [
            "/1.0/containers/my-container"
        ]
    },
    "status": "Running",
    "status_code": 103,
    "updated_at": "2018-04-09T17:57:48.19705024Z"
}
```

## Rename

Rename container snapshot.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| snapshot     | string        | Snapshot name     |           |
| newname      | string        | New snapshot name |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.snapshots.rename('local', 'my-container', 'my-snapshot-name', 'new-snapshot-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
    "class": "task",
    "created_at": "2018-04-10T19:17:15.517952676+01:00",
    "err": "",
    "id": "1863b8ce-b3d5-4a35-87bc-959eafbb106d",
    "may_cancel": false,
    "metadata": null,
    "resources": {
        "containers": [
            "/1.0/containers/my-container"
        ]
    },
    "status": "Running",
    "status_code": 103,
    "updated_at": "2018-04-10T19:17:15.517952676+01:00"
}
```

## Delete

Delete container snapshot.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| snapshot     | string        | Snapshot name     |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.snapshots.delete('local', 'my-container', 'my-snapshot-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{
	class: 'task',
	created_at: '2018-04-10T20:23:56.80835635+01:00',
	err: '',
	id: 'd1a9df55-5748-40ff-a0e3-09e0096f278b',
	may_cancel: false,
	metadata: null,
	resources: {
		containers: ['/1.0/containers/my-container/my-snapshot']
	},
	status: 'Running',
	status_code: 103,
	updated_at: '2018-04-10T20:23:56.80835635+01:00'
}
```

## Restore

Restore container snapshot.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| snapshot     | string        | Snapshot name     |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.snapshots.restore('local', 'my-container', 'my-snapshot-name').then(response => {
    console.log(response)
})
```

**Response**
``` json
{

}
```