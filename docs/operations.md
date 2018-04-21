Helper methods for operations.

## List

List operations on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| mutator      | function      | Mutation function |           |

```
lxc.operations.list('local').then(response => {
  console.log(response)
})
```

**Response**
```
[
    "/1.0/operations/c0fc0d0d-a997-462b-842b-f8bd0df82507",
    "/1.0/operations/092a8755-fd90-4ce4-bf91-9f87d03fd5bc"
]
```

## Info

Get operation information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| uuid         | string        | Operation uuid    |           |
| mutator      | function      | Mutation function |           |

```
lxc.operations.info('local', '092a8755-fd90-4ce4-bf91-9f87d03fd5bc').then(response => {
    console.log(response)
})
```

**Response**

```
{
    "id": "b8d84888-1dc2-44fd-b386-7f679e171ba5",
    "class": "token",
    "created_at": "2016-02-17T16:59:27.237628195-05:00",
    "updated_at": "2016-02-17T16:59:27.237628195-05:00",
    "status": "Running",
    "status_code": 103,
    "resources": {
        "images": [
            "/1.0/images/54c8caac1f61901ed86c68f24af5f5d3672bdc62c71d04f06df3a59e95684473"
        ]
    },
    "metadata": {                                                                          
        "secret": "c9209bee6df99315be1660dd215acde4aec89b8e5336039712fc11008d918b0d"
    },
    "may_cancel": true,
    "err": ""
}
```

## Delete

Delete an operation.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| uuid         | string        | Operation uuid    |           |
| mutator      | function      | Mutation function |           |

```
lxc.operations.delete('local', '092a8755-fd90-4ce4-bf91-9f87d03fd5bc').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```

## Websocket

Websocket upgrading to `/1.0/operations/<uuid>/websocket` can be done by calling 
[`lxc.containers.exec`](https://lcherone.github.io/lxc-query/containers/#exec) 
with `"wait-for-websocket": true` then using the operation id to directly initialise 
the websocket connection using the provided secret. 

You could still use `lxc.query()` if you really require it but you would need to 
proxy it through with something like express, for that it has not been added, 
as I do not want to add addtional dependencies.
