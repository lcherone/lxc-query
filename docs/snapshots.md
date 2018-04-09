# Snapshots

Helper methods for snapshots.

## List

List container snapshots.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | Container name    |           |
| mutator      | function      | Mutation function |           |

```
lxc.containers.snapshots.list('local:', 'my-container').then(response => {
    console.log(response)
})
```

**Response**
```
[
    "/1.0/containers/my-container/snapshots/my-snapshot"
]
```

## Create

Create container snapshot.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| container    | string        | Container name    |           |
| options      | object        | Snapshot options  |           |
| mutator      | function      | Mutation function |           |

```
lxc.containers.snapshots.create('local:', 'my-container', {
    "name": "my-snapshot",
    "stateful": true
}).then(response => {
    console.log(response)
})
```

**Response**
```
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
