import{A as n}from"./api.service-DdtDqyz_.js";import"./channel-B1e7pKFZ.js";class h extends n{constructor(e,s,t="sync"){super(e,s,t),this.name="syncService"}sync(e,s={},t={}){const r=s,i=this.getBasicHeaders(t);return this.httpClient.post(`/_action/${this.apiEndpoint}`,e,{params:r,headers:i}).then(c=>n.handleResponse(c))}}export{h as default};
//# sourceMappingURL=sync.api.service-BBmqzIz-.js.map
