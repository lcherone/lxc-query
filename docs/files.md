Helper methods for files.

## List

List files or directorys in a container.

**Note:** Does not work for listing *file contents* unless your using LXD > 3.0.0, 
so should be used only to list directorys, see pull method below on how to 
fetch them.


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

## Pull

Download a file from the container.

Note: We use `lxc pull` as there is a bug which prevents accessing the file with 
files endpoint thought `lxc query`. Its fixed in LXD > 3.0.0, so will be converted 
to use that in future.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| path         | string        | Container directory or file path |

```
lxc.containers.files.get('local', 'my-container', '/path/to/file').then(response => {
    console.log(response);
})
```

<em>
    Because with `file pull` you cant output to stdout, we need to pull the file then `cat` it,
    so a folder structure is created based upon the path. 
    Example above would create: `./.files/local/my-container/path/to/file`
</em>

**Response**
```
The file contents
```
