Helper methods for server.

## Info

Get server information.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |

```
lxc.info('local:').then(response => {
    console.log(response)
})
```

**Response**
```
{
	api_extensions: [
		'storage_zfs_remove_snapshots',
		'container_host_shutdown_timeout',
		'container_stop_priority',
		'container_syscall_filtering',
		'auth_pki',
		'container_last_used_at',
		'etag',
		'patch',
		'usb_devices',
		'https_allowed_credentials',
		'image_compression_algorithm',
		'directory_manipulation',
		'container_cpu_time',
		'storage_zfs_use_refquota',
		'storage_lvm_mount_options',
		'network',
		'profile_usedby',
		'container_push',
		'container_exec_recording',
		'certificate_update',
		'container_exec_signal_handling',
		'gpu_devices',
		'container_image_properties',
		'migration_progress',
		'id_map',
		'network_firewall_filtering',
		'network_routes',
		'storage',
		'file_delete',
		'file_append',
		'network_dhcp_expiry',
		'storage_lvm_vg_rename',
		'storage_lvm_thinpool_rename',
		'network_vlan',
		'image_create_aliases',
		'container_stateless_copy',
		'container_only_migration',
		'storage_zfs_clone_copy',
		'unix_device_rename',
		'storage_lvm_use_thinpool',
		'storage_rsync_bwlimit',
		'network_vxlan_interface',
		'storage_btrfs_mount_options',
		'entity_description',
		'image_force_refresh',
		'storage_lvm_lv_resizing',
		'id_map_base',
		'file_symlinks',
		'container_push_target',
		'network_vlan_physical',
		'storage_images_delete',
		'container_edit_metadata',
		'container_snapshot_stateful_migration',
		'storage_driver_ceph',
		'storage_ceph_user_name',
		'resource_limits',
		'storage_volatile_initial_source',
		'storage_ceph_force_osd_reuse',
		'storage_block_filesystem_btrfs',
		'resources',
		'kernel_limits',
		'storage_api_volume_rename',
		'macaroon_authentication',
		'network_sriov',
		'console',
		'restrict_devlxd',
		'migration_pre_copy',
		'infiniband',
		'maas_network',
		'devlxd_events',
		'proxy',
		'network_dhcp_gateway',
		'file_get_symlink',
		'network_leases',
		'unix_device_hotplug',
		'storage_api_local_volume_handling',
		'operation_description',
		'clustering',
		'event_lifecycle',
		'storage_api_remote_volume_handling',
		'nvidia_runtime'
	],
	api_status: 'stable',
	api_version: '1.0',
	auth: 'trusted',
	auth_methods: [
		'tls'
	],
	config: {},
	environment: {
		addresses: [],
		architectures: [
			'x86_64',
			'i686'
		],
		certificate: '-----BEGIN CERTIFICATE-----Snip-----END CERTIFICATE-----\n',
		certificate_fingerprint: 'dc32c2ec49a7a234762fc4be670e7e72f8d156a1w0cf1a1d216e9abcc594f61d',
		driver: 'lxc',
		driver_version: '3.0.0',
		kernel: 'Linux',
		kernel_architecture: 'x86_64',
		kernel_version: '4.13.0-38-generic',
		server: 'lxd',
		server_clustered: false,
		server_name: 'my-lxd-server',
		server_pid: 906,
		server_version: '3.0.0',
		storage: 'zfs',
		storage_version: '1'
	},
	public: false
}
```

## Replace

Replaces the server configuration or other properties.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| options      | object        | The server options |  |

<em>Replaces any existing config with the provided one.</em>

```
lxc.replace('remote:', {
    "config": {
        "core.trust_password": "my-new-password",
        "core.https_address": "[::]:8443"
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

## Update

Updates the server configuration or other properties.

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| remote       | string        | LXD remote    | local:        |
| options      | object        | The server options |  |

<em>Updates only the listed keys, rest remain intact.</em>

```
lxc.update('remote:', {
    "config": {
        "core.trust_password": "my-new-password",
        "core.https_address": "[::]:8443"
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

## Remotes

Get currently defined remotes. (only works with local:)

**Parameters & Call**

| Parameter    | Type          | Description   | Default       |
| ----------   | ------------- | ------------- | ------------- | 
| None         |               |               |               | 

```
lxc.server.remotes().then(response => {
    console.log(response)
})
```

**Response**
```
[
	'images:',
	'local:',
	'ubuntu:',
	'ubuntu-daily:'
]
```

## Local

Allows you to execute local exec commands.

**Parameters & Call**

| Parameter    | Type          | Description    | Default       |
| ----------   | ------------- | -------------  | ------------- | 
| command      | string        | Shell command to run |               |

```
lxc.local('lxc list').then(response => {
    console.log(response)
})
```

**Response**
```
+------------------+---------+-----------------------+------+------------+-----------+
|       NAME       |  STATE  |         IPV4          | IPV6 |    TYPE    | SNAPSHOTS |
+------------------+---------+-----------------------+------+------------+-----------+
| my-container     | STOPPED |                       |      | EPHEMERAL  | 0         |
+------------------+---------+-----------------------+------+------------+-----------+
```

