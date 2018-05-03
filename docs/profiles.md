Helper methods for profiles.

## List

List profiles.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.profiles.list('local').then(response => {
    console.log(response)
})
```

**Response**
``` json
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

``` javascript
lxc.profiles.info('local', 'default').then(response => {
    console.log(response)
})
```

**Response**
 
``` json
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

``` javascript
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

``` json
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

``` javascript
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

``` json
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

``` javascript
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

``` json
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

``` javascript
lxc.profiles.rename('local', 'old-name', 'new-name').then(response => {
    console.log(response)
})
```

**Response**

``` json
{
	
}
```

## Delete

Delete a profile.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| name         | string        | Profile name  |               |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.profiles.delete('local', 'profile-name').then(response => {
    console.log(response)
})
```

**Response**

``` json
{
	
}
```
