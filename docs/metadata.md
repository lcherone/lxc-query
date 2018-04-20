Helper methods for container metadata.

## Get

Returns the containers metadata.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| mutator      | function      | Mutation function |           |

```
lxc.containers.metadata.get('local', 'my-container').then(response => {
    console.log(response);
})
```

**Response**
```
{
    "architecture": "x86_64",
    "creation_date": 1522920368,
    "expiry_date": 0,
    "properties": {
        "architecture": "x86_64",
        "description": "Ubuntu 16.04 LTS server (20180405)",
        "os": "ubuntu",
        "release": "xenial"
    },
    "templates": {
        "/etc/hostname": {
            "create_only": false,
            "properties": null,
            "template": "hostname.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/meta-data": {
            "create_only": false,
            "properties": null,
            "template": "cloud-init-meta.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/network-config": {
            "create_only": false,
            "properties": null,
            "template": "cloud-init-network.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/user-data": {
            "create_only": false,
            "properties": {
                "default": "#cloud-config\n{}\n"
            },
            "template": "cloud-init-user.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/vendor-data": {
            "create_only": false,
            "properties": {
                "default": "#cloud-config\n{}\n"
            },
            "template": "cloud-init-vendor.tpl",
            "when": [
                "create",
                "copy"
            ]
        }
    }
}
```

## Replace

Replace the containers metadata.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| metadata     | string        | Container metadata |          |
| mutator      | function      | Mutation function |           |

```
lxc.containers.metadata.replace('local', 'my-container', {
    "architecture": "x86_64",
    "creation_date": 1522920368,
    "expiry_date": 0,
    "properties": {
        "architecture": "x86_64",
        "description": "Ubuntu 16.04 LTS server (20180405)",
        "os": "ubuntu",
        "release": "xenial"
    },
    "templates": {
        "/etc/hostname": {
            "create_only": false,
            "properties": null,
            "template": "hostname.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/meta-data": {
            "create_only": false,
            "properties": null,
            "template": "cloud-init-meta.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/network-config": {
            "create_only": false,
            "properties": null,
            "template": "cloud-init-network.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/user-data": {
            "create_only": false,
            "properties": {
                "default": "#cloud-config\n{}\n"
            },
            "template": "cloud-init-user.tpl",
            "when": [
                "create",
                "copy"
            ]
        },
        "/var/lib/cloud/seed/nocloud-net/vendor-data": {
            "create_only": false,
            "properties": {
                "default": "#cloud-config\n{}\n"
            },
            "template": "cloud-init-vendor.tpl",
            "when": [
                "create",
                "copy"
            ]
        }
    }
}).then(response => {
    console.log(response);
})
```

**Response**
```
{
    
}
```