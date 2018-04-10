# Aliases

Helper methods for alias operations.

## List

List aliases on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.list('local:').then(response => {
    console.log(response)
})
```

**Response**
```
[
    "/1.0/images/aliases/alias-name"
]
```

## Info

Get image alias information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| name         | string        | Alias name    |               |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.info('local:', 'alias-name').then(response => {
    console.log(response)
})
```

**Response**

```
{
    "description": "The alias description",
    "name": "alias-name",
    "target": "<image fingerprint>"
}
```

## Create

Get image alias information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| options      | object        | Alias options     |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.create('local:', {
    "description": "The alias description",
    "target": "<image fingerprint>",
    "name": "alias-name"
}).then(response => {
    console.log(response);
})
```

**Response**

```
{

}
```

## Replace

Replace alias target or description.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| name         | string        | Alias name        |           |
| options      | object        | Alias options     |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.replace('local:', 'alias-name', {
    "description": "New description",
    "target": "<image fingerprint>"
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

Update alias target or description.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| name         | string        | Alias name        |           |
| options      | object        | Images options    |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.update('local:', 'alias-name', {
    "description": "New description",
    "target": "<image fingerprint>"
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

Update alias target or description.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| name         | string        | Alias name        |           |
| options      | object        | Images options    |           |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.rename('local:', 'alias-name', {
    "name": "new-name"
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

Delete an alias on remote.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| name         | name          | Alias name    |               |
| mutator      | function      | Mutation function |           |

```
lxc.images.aliases.delete('local:', 'alias-name').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```
