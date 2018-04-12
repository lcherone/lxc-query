Helper methods for profile operations.

## List

List profiles on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.list('local').then(response => {
    console.log(response)
})
```

**Response**
```
[
    "/1.0/profiles/default"
]
```

## Info

Get profile information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Profile name  |               |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.info('local', 'default').then(response => {
    console.log(response)
})
```

**Response**

```
{
    "config": {},
    "description": "Default LXD profile",
    "devices": {
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
    "name": "default",
    "used_by": [
        "/1.0/containers/my-container"
    ]
}
```

## Create

Create profile.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| options      | object        | Profile options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.create('local', {
    "name": "my-new-profile",
    "description": "Some informative description string",
    "config": {
        "limits.memory": "2GB"
    },
    "devices": {
        "kvm": {
            "type": "unix-char",
            "path": "/dev/kvm"
        }
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

Replace profile properties, update description, devices and limits.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Profile name  |               |
| options      | object        | Profile options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.replace('local', 'my-new-profile', {
    "config": {
        "limits.memory": "4GB"
    },
    "description": "Some description string",
    "devices": {}
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

Update profile properties, update description, devices and limits.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Profile name  |               |
| options      | object        | Profile options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.replace('local', 'my-new-profile', {
    "config": {
        "limits.memory": "4GB"
    },
    "description": "Some description string",
    "devices": {}
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

Rename a profile.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Profile name  |               |
| newName      | string        | New profile name  |           |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.rename('local', 'old-name', 'new-name').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```

## Delete

Delete a profile on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Profile name  |               |
| mutator      | function      | Mutation function |           |

```
lxc.profiles.delete('local', 'profile-name').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```
