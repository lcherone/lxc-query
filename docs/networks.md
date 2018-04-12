Helper methods for network operations.

## List

List networks.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| mutator      | function      | Mutation function |           |

```
lxc.networks.list('local').then(response => {
    console.log(response)
})
```

**Response**
```
[
    "/1.0/networks/lxdbr0",
    "/1.0/networks/lo"
]
```

## Info

Get network information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Network name  |               |
| mutator      | function      | Mutation function |           |

```
lxc.networks.info('local', 'lxdbr0').then(response => {
    console.log(response)
})
```

**Response**

```
{
    "config": {
        "ipv4.address": "10.158.250.1/24",
        "ipv4.nat": "true",
        "ipv6.address": "fd42:a224:5bde:20c0::1/64",
        "ipv6.nat": "true"
    },
    "description": "",
    "managed": true,
    "name": "lxdbr0",
    "type": "bridge",
    "used_by": [
        "/1.0/containers/my-container"
    ]
}
```

## Create

Create network.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| options      | object        | Network options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.networks.create('local', {
    "name": "my-network",
    "description": "My network",
    "config": {
        "ipv4.address": "none",
        "ipv6.address": "2001:470:b368:4242::1/64",
        "ipv6.nat": "true"
    }
}).then(response => {
    console.log(response)
})
```

**Response**

```
{
    
}
```

## Replace

Replace the network information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Network name  |               |
| options      | object        | Network options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.networks.replace('local', 'my-new-network', {
    "config": {
        "bridge.driver": "openvswitch",
        "ipv4.address": "10.0.3.1/24",
        "ipv6.address": "fd1:6997:4939:495d::1/64"
    }
}).then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```

## Update

Update the network information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Network name  |               |
| options      | object        | Network options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.networks.replace('local', 'my-new-network', {
    "config": {
        "dns.mode": "dynamic"
    }
}).then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```

## Rename

Rename a network.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Network name  |               |
| newName      | string        | New network name  |           |
| mutator      | function      | Mutation function |           |

```
lxc.networks.rename('local', 'old-name', 'new-name').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```

## Delete

Delete a network.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Network name  |               |
| mutator      | function      | Mutation function |           |

```
lxc.networks.delete('local', 'network-name').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```
