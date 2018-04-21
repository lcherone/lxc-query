Helper methods for certificates.

## List

List client certificates.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| mutator      | function      | Mutation function |           |

```
lxc.certificates.list('local').then(response => {
    console.log(response)
})
```

**Response**
```
[
    "/1.0/certificates/33c50480212ea93c0afbb8125c280b1a66445cac64706066ade30851f54cc8bx"
]
```

## Add

Add client certificate.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| options      | object        | Certificate options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.certificates.add('local', {
    "type": "client",
    "certificate": "PEM certificate",
    "name": "foo",
    "password": "server-trust-password"
}).then(response => {
    console.log(response)
})
```

**Response**

```
{
    
}
```

## Info

Get certificate information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Certificate fingerprint |     |
| mutator      | function      | Mutation function |           |

```
lxc.certificates.info('local', '33c50480212ea93c0afbb8125c280b1a66445cac64706066ade30851f54cc8bx').then(response => {
    console.log(response)
})
```

**Response**

```
{
    "certificate": "-----BEGIN CERTIFICATE-----\n snip \n-----END CERTIFICATE-----\n",
    "fingerprint": "33c50480212ea93c0afbb8125c280b1a66445cac64706066ade30851f54cc8bx",
    "name": "",
    "type": "client"
}
```

## Replace

Replace certificate properties.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Certificate fingerprint |     |
| options      | object        | Certificate options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.certificates.replace('local', '33c50480212ea93c0afbb8125c280b1a66445cac64706066ade30851f54cc8bx', {
    "type": "client",
    "name": "bar"
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

Update certificate properties.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Certificate fingerprint |     |
| options      | object        | Certificate options   |           |
| mutator      | function      | Mutation function |           |

```
lxc.certificates.replace('local', '33c50480212ea93c0afbb8125c280b1a66445cac64706066ade30851f54cc8bx', {
    "name": "baz"
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

Delete a client certificate.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local         |
| fingerprint  | string        | Certificate fingerprint |     |
| mutator      | function      | Mutation function |           |

```
lxc.certificates.delete('local', '33c50480212ea93c0afbb8125c280b1a66445cac64706066ade30851f54cc8bx').then(response => {
    console.log(response)
})
```

**Response**

```
{
	
}
```
