# Open Usage

Open usage is a nodejs application that allows you to expose system metrics easily. 

The application is fully customisable and secure. 

<table>
<thead>
<tr>
<th>Authorisation</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>IP Auth</td>
<td>IPV4</td>
</tr>
<tr>
<td>Key Auth</td>
<td>String</td>
</tr>
<tr>
<td>Public</td>
<td>Null</td>
</tr>
</tbody>
</table>

# Response Structure

Status 200
```
{
  "cpu": {
    "manufacturer": string,
    "brand": string,
    "vendor": string,
    "family": string,
    "model": string,
    "stepping": string,
    "revision": string,
    "voltage": string,
    "speed": float,
    "speedMin": float,
    "speedMax": float,
    "governor": string,
    "cores": int,
    "physicalCores": int,
    "performanceCores": int,
    "efficiencyCores": int,
    "processors": int,
    "socket": string,
    "flags": string,
    "virtualization": boolean,
    "cache": {
      "l1d": int,
      "l1i": int,
      "l2": int,
      "l3": int
    }
  },
  "load": {
    "avgLoad": float,
    "currentLoad": float,
    "currentLoadUser": float,
    "currentLoadSystem": float,
    "currentLoadNice": float,
    "currentLoadIdle": float,
    "currentLoadIrq": float,
    "rawCurrentLoad": int,
    "rawCurrentLoadUser": int,
    "rawCurrentLoadSystem": int,
    "rawCurrentLoadNice": int,
    "rawCurrentLoadIdle": int,
    "rawCurrentLoadIrq": int,
    "cpus": [
      {
        "load": float,
        "loadUser": float,
        "loadSystem": float,
        "loadNice": float,
        "loadIdle": float,
        "loadIrq": float,
        "rawLoad": int,
        "rawLoadUser": int,
        "rawLoadSystem": int,
        "rawLoadNice": int,
        "rawLoadIdle": int,
        "rawLoadIrq": int
      }
    ]
  },
  "mem": {
    "total": int,
    "free": int,
    "used": int,
    "active": int,
    "available": int,
    "buffers": int,
    "cached": int,
    "slab": int,
    "buffcache": int,
    "swaptotal": int,
    "swapused": int,
    "swapfree": int
  },
  "os": {
    "platform": String,
    "distro": String,
    "release": String,
    "codename": String,
    "kernel": String,
    "arch": String,
    "hostname": String,
    "fqdn": String,
    "codepage": String,
    "logofile": String,
    "serial": String,
    "build": String,
    "servicepack": String,
    "uefi": bool,
    "hypervisor": bool,
    "remoteSession": bool
  },
  "net": [
    {
      "iface": String,
      "ifaceName": String,
      "default": bool,
      "ip4": String,
      "ip4subnet": String,
      "ip6": String,
      "ip6subnet": String,
      "mac": String,
      "internal": Bool,
      "virtual": Bool,
      "operstate": String,
      "type": String,
      "duplex": String,
      "mtu": String,
      "speed": Int,
      "dhcp": Bool,
      "dnsSuffix": String,
      "ieee8021xAuth": String,
      "ieee8021xState": String,
      "carrierChanges": int
    }
  ],
  "disk": [
    {
      "fs": String,
      "type": String,
      "size": Int,
      "used": Int,
      "available": Int,
      "use": Float,
      "mount": String,
      "rw": null
    }
  ]
}
```