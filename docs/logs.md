Helper methods for container logs.

## List

Returns a list of the log files available for this container. 

**Note:** This works on containers that have been deleted (or were never created) 
to enable you to get logs for failed creations.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.logs.list('local', 'my-container').then(response => {
    console.log(response);
})
```

**Response**
``` json
[
    "/1.0/containers/my-container/logs/forkstart.log",
    "/1.0/containers/my-container/logs/lxc.conf",
    "/1.0/containers/my-container/logs/lxc.log"
]
```

## Get

Returns the contents of a particular log file. 

**Note:** This method ONLY works with LXD > 3.0.0

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| logfile      | string        | Container logfile |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.logs.get('local', 'my-container', 'lxc.conf').then(response => {
    console.log(response);
})
```

**Response**
``` text
The log file contents
```

## Delete

Delete a particular log file.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| container    | string        | Container name    |           |
| logfile      | string        | Container logfile |           |
| mutator      | function      | Mutation function |           |

``` javascript
lxc.containers.logs.delete('local', 'my-container', 'lxc.conf').then(response => {
    console.log(response);
})
```

**Response**
``` json
""
```
