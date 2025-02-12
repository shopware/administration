import{A as n}from"./api.service-DdtDqyz_.js";import"./channel-B1e7pKFZ.js";class o extends n{constructor(e,t,s="known-ips"){super(e,t,s),this.name="knownIpsService"}getKnownIps(){const e=this.getBasicHeaders();return this.httpClient.get("/_admin/known-ips",{headers:e}).then(t=>t.data.ips)}}export{o as default};
//# sourceMappingURL=known-ips.api.service-qFHQi7R_.js.map
