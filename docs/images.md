Helper methods for image.

## List

List images on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| filter       | string        | Image property based filtering | |

```
lxc.images.list('images').then(response => {
  console.log(response)
})

// filtering by architecture
lxc.images.list('images', 'architecture="' + ['x86_64', 'i686', 'amd64'].join('|') + '"').then(response => {
  console.log(response)
})
```

**Response**
```
[
    {
        "auto_update": false,
        "properties": {
            "architecture": "amd64",
            "description": "Alpine 3.4 amd64 (20180419_17:50)",
            "os": "Alpine",
            "release": "3.4",
            "serial": "20180419_17:50"
        },
        "public": true,
        "aliases": [
            {
                "name": "alpine/3.4/default",
                "description": ""
            },
            {
                "name": "alpine/3.4/default/amd64",
                "description": ""
            },
            {
                "name": "alpine/3.4",
                "description": ""
            },
            {
                "name": "alpine/3.4/amd64",
                "description": ""
            }
        ],
        "architecture": "x86_64",
        "cached": false,
        "filename": "lxd.tar.xz",
        "fingerprint": "ca571b2780652ccd1a5c7fa62da452db0d5e94557647e760c57d10ccd4369721",
        "size": 2134616,
        "created_at": "2018-04-19T00:00:00Z",
        "expires_at": "1970-01-01T00:00:00Z",
        "last_used_at": "0001-01-01T00:00:00Z",
        "uploaded_at": "2018-04-19T00:00:00Z"
    },
    
    ... snip
]
```

## Info

Get image information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Image fingerprint |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.info('local', 'be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a').then(response => {
    console.log(response)
})
```

**Response**

```
{
    "aliases": [],
    "architecture": "x86_64",
    "auto_update": true,
    "cached": true,
    "created_at": "2018-04-05T00:00:00Z",
    "expires_at": "2021-04-21T00:00:00Z",
    "filename": "ubuntu-16.04-server-cloudimg-amd64-lxd.tar.xz",
    "fingerprint": "be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a",
    "last_used_at": "2018-04-08T22:49:34Z",
    "properties": {
        "architecture": "amd64",
        "description": "ubuntu 16.04 LTS amd64 (release) (20180405)",
        "label": "release",
        "os": "ubuntu",
        "release": "xenial",
        "serial": "20180405",
        "version": "16.04"
    },
    "public": false,
    "size": 163857160,
    "update_source": {
        "alias": "16.04",
        "certificate": "",
        "protocol": "simplestreams",
        "server": "https://cloud-images.ubuntu.com/releases"
    },
    "uploaded_at": "2018-04-08T15:41:08Z"
}
```

## Replace

Replace image properties, update information and visibility.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Image fingerprint |           |
| options      | object        | Images options    |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.replace('local', 'be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a', {
    "auto_update": true,
    "properties": {
        "architecture": "x86_64",
        "description": "Ubuntu 16.04 LTS server (20160201)",
        "os": "ubuntu",
        "release": "trusty"
    },
    "public": true,
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

Update image properties, update information and visibility.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Image fingerprint |           |
| options      | object        | Images options    |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.update('local', 'be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a', {
    "auto_update": true,
    "properties": {
        "architecture": "x86_64",
        "description": "Ubuntu 16.04 LTS server (20160201)",
        "os": "ubuntu",
        "release": "trusty"
    },
    "public": true,
}).then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```

## Delete

Delete an image.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Image fingerprint |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.delete('local', 'be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```
