(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[235],{"+jG2":function(n,e,t){"use strict";t.r(e);var s=t("7yzw"),a=t.n(s),i=t("92Mt"),o=t.n(i),r=(t("9BLm"),Shopware.Mixin);e.default=Shopware.Component.wrapComponentConfig({template:'<sw-meteor-page\n    class="sw-extension-config"\n    :from-link="fromLink"\n>\n    <template #smart-bar-icon>\n        <sw-extension-icon\n            class="sw-extension-config__extension-icon"\n            :src="image"\n            :alt="$tc(\'sw-extension-store.component.sw-extension-config.imageDescription\', 0, { extensionName: extensionLabel})"\n        />\n    </template>\n\n    <template #smart-bar-header>\n        {{ extensionLabel }}\n    </template>\n\n    <template\n        v-if="extension"\n        #smart-bar-header-meta\n    >\n        <span v-if="extension.producerWebsite && extension.producerName">\n            {{ $tc(\'sw-extension-store.component.sw-extension-config.labelBy\') }}\n\n            <sw-external-link\n                small\n                :href="extension.producerWebsite"\n                class="sw-extension-config__producer-link"\n            >\n                {{ extension.producerName }}\n            </sw-external-link>\n        </span>\n\n        <span v-else-if="extension.producerName">\n            {{ $tc(\'sw-extension-store.component.sw-extension-config.labelBy\') }} {{ extension.producerName }}\n        </span>\n    </template>\n\n    <template #smart-bar-actions>\n        <sw-button\n            variant="primary"\n            class="sw-extension-config__save-action"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n    </template>\n\n    <template #default>\n        <sw-system-config\n            ref="systemConfig"\n            :domain="domain"\n            sales-channel-switchable\n            :sales-channel-id="salesChannelId"\n        />\n    </template>\n</sw-meteor-page>\n',beforeRouteEnter:function(n,e,t){t((function(n){n.fromLink=e}))},inject:["shopwareExtensionService"],mixins:[r.getByName("notification")],props:{namespace:{type:String,required:!0}},data:function(){return{salesChannelId:null,extension:null,fromLink:null}},computed:{domain:function(){return"".concat(this.namespace,".config")},myExtensions:function(){return Shopware.State.get("shopwareExtensions").myExtensions.data},defaultThemeAsset:function(){return Shopware.Filter.getByName("asset")("administration/static/img/theme/default_theme_preview.jpg")},image:function(){var n,e;return null!==(n=this.extension)&&void 0!==n&&n.icon?this.extension.icon:null!==(e=this.extension)&&void 0!==e&&e.iconRaw?"data:image/png;base64, ".concat(this.extension.iconRaw):this.defaultThemeAsset},extensionLabel:function(){var n,e;return null!==(n=null===(e=this.extension)||void 0===e?void 0:e.label)&&void 0!==n?n:this.namespace}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var n=this;return a()(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.myExtensions.length){e.next=3;break}return e.next=3,n.shopwareExtensionService.updateExtensionData();case 3:n.extension=null!==(t=n.myExtensions.find((function(e){return e.name===n.namespace})))&&void 0!==t?t:null;case 4:case"end":return e.stop()}}),e)})))()},onSave:function(){var n=this;return a()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.$refs.systemConfig.saveAll();case 3:n.createNotificationSuccess({message:n.$tc("sw-extension-store.component.sw-extension-config.messageSaveSuccess")}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n.createNotificationError({message:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}})},"9BLm":function(n,e,t){var s=t("XgPb");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);(0,t("P8hj").default)("1ca3f653",s,!0,{})},XgPb:function(n,e,t){}}]);
//# sourceMappingURL=ad4faeef66caede7feaf.js.map