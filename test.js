// const lxc = require('lxc-query')

const lxc = require('./src/index.js')

/*
lxc.containers.files.pull('local', 'crucial-macaw', '/var/log/cloud-init.log').then(response => {
    console.log(JSON.stringify(response, null, 4));
})*/

lxc.containers.metadata.replace('local', 'crucial-macaw', {
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
    console.log(JSON.stringify(response, null, 4));
})
/*
lxc.containers.logs.get('local', 'crucial-macaw', 'lxc.conf').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/
/*
lxc.containers.list('local').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.images.aliases.list('local', response => lxc.images.aliases.stripEndpoint(response)).then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/
/*
lxc.profiles.rename('local', 'my-profilename', 'new-name').then(response => {
    console.log(response)
})
*/
/*
lxc.profiles.delete('local', 'new-name').then(response => {
    console.log(response)
})
*/
/*
lxc.profiles.list('10.158.250.1', response => lxc.profiles.stripEndpoint(response)).then(response => {
    console.log(JSON.stringify(response, null, 4));
}, err => {
    console.log(err.message);
})
*/
/*
lxc.profiles.info('local', 'default').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.server.remotes().then(response => {
    console.log(response);
})
*/
/*
lxc.images.aliases.list('local').then(response => {
    console.log(JSON.stringify(response, null, 4));
})

lxc.images.aliases.info('local', 'alias-name').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.images.aliases.create('local', {
    "description": "The alias description",
    "target": "be7cec7c948958adfbb9bc7dbd292762d2388cc883466815fc2b6bc06bf06f5a",
    "name": "alias-name"
}).then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/
/*
lxc.images.list('local').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/
/*
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
    console.log(JSON.stringify(response, null, 4))
})
*/


// or you could write your own
/*
lxc.containers.getState('local', 'crucial-macaw').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.containers.snapshots.create('local', 'my-new-container', {
    "name": "my-snapshot",
    "stateful": true
}).then(response => {
    console.log(JSON.stringify(response, null, 4));
});
*/

/*
lxc.containers.snapshots.list('10.158.250.1:', 'proxy').then(response => {
    console.log(JSON.stringify(response, null, 4));
});
*/

/*
lxc.containers.snapshots.info('10.158.250.1:', 'my-container', 'my-snapshot').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/
/*
lxc.containers.snapshots.info('10.158.250.1:', 'proxy', 'proxy (April 10, 2018 6:53 PM)').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/
/*
lxc.replace('10.158.250.1:', {
    "config": {
        "core.trust_password": "lfc582zf",
        "core.https_address": "[::]:8443"
    }
}).then(response => {
    console.log(JSON.stringify(response, null, 4));
}, err => {
    console.log(JSON.stringify(err, null, 4));
})
*/
/*
lxc.containers.snapshots.rename('10.158.250.1:', 'proxy', 'proxy (April 10, 2018 6:53 PM)', 'proxy (April 10 PM)').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.server.remotes().then(response => {
    console.log(response);
}, err => {
    console.error(err);
})
*/
//
/*
lxc.containers.create('local', {
    "name": "my-new-container",
    "architecture": "x86_64",
    "profiles": ["default"],
    "ephemeral": true,
    "config": { "limits.cpu": "2" },
    "devices": {},
    "source": {
        "type": "image",
        "fingerprint": "be7cec7c9489"
    },
}).then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.server.remotes().then(response => {
    console.log(response);
}, err => {
    console.error(err);
})
*/

/*
lxc.containers.getState('local', 'crucial-macaw').then(response => {
    console.log(JSON.stringify(response, null, 4));
})
*/

/*
lxc.containers.list('local').then(response => {
    console.log(response);
})
*/

/*
lxc.info('local').then(response => {
    console.log(response);
})
*/
/*
lxc.query('local/1.0', 'GET', {}, response => {
    console.log(response);
})
*/


// with callback
/*
lxc.query('10.158.250.1:/1.0', 'GET', '', response => {
    console.log(response);
})

// with promise
lxc.query('10.158.250.1:/1.0', 'GET', '').then(response => {
    console.log(response);
})


// with promise
lxc.containers.list('local').then(response => {
    // [ '/1.0/containers/my-container' ]
    console.log(response);
    
    // [ 'crucial-macaw' ]
    console.log(lxc.containers.stripEndpoint(response));
})

// with callback
lxc.containers.list('local', response => {
    // [ '/1.0/containers/my-container' ]
    console.log(response);
    
    // [ 'crucial-macaw' ]
    console.log(lxc.containers.stripEndpoint(response));
})
*/
