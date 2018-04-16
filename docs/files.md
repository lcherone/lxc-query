Helper methods for files.

## List

Download a file or directory listing from the container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| path         | string        | Container directory or file path | |
| mutator      | function      | Mutation function |           |

```
lxc.containers.files.list('local', 'my-container', '/').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
```

**Response**
```
[
    "proc",
    "usr",
    "run",
    "etc",
    "home",
    "sbin",
    "snap",
    "opt",
    "lib64",
    "boot",
    "root",
    "media",
    "lib",
    "sys",
    "bin",
    "mnt",
    "var",
    "tmp",
    "srv",
    "dev"
]
```

## Get

Download a file or directory listing from the container.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| path         | string        | Container directory or file path | |
| mutator      | function      | Mutation function |           |

```
lxc.containers.files.get('local', 'my-container', '/path/to/file').then(response => {
    console.log(response);
})
```

**Response**
```
File contents
```
