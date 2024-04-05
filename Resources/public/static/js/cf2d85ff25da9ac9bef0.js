"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[23648],{17224:function(t,e,c){c.r(e),c.d(e,{default:function(){return s}});let{Mixin:n}=Shopware;var s={template:'{% block sw_settings_cache_modal %}\n    <sw-modal\n        v-if="open"\n        variant="small"\n        :title="$t(\'sw-settings-cache.modal.title\')"\n        @modal-close="closeModal">\n        {{ $tc(\'sw-settings-cache.modal.message\') }}\n\n        <template #modal-footer>\n            <sw-button @click="closeModal"\n                       size="small">\n                {{ $tc(\'sw-settings-cache.modal.actions.cancel\') }}\n            </sw-button>\n\n            <sw-button @click="clearCache"\n                       variant="primary"\n                       ref="button"\n                       size="small">\n                {{ $tc(\'sw-settings-cache.modal.actions.clear\') }}\n            </sw-button>\n        </template>\n    </sw-modal>\n{% endblock %}\n',shortcuts:{"SYSTEMKEY+c":"openModal"},inject:["cacheApiService","acl"],mixins:[n.getByName("notification")],data(){return{open:!1}},watch:{open(){this.open&&this.$nextTick(()=>{this.$refs.button.$el.focus()})}},created(){this.createdComponent()},methods:{createdComponent(){document.addEventListener("keydown",t=>{("Alt"===t.key||"c"===t.key&&t.altKey)&&t.preventDefault()})},openModal(){this.acl.can("system.clear_cache")&&(this.open=!0)},closeModal(){this.open=!1},clearCache(){this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.clearCache.started")}),this.cacheApiService.clear().then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-cache.notifications.clearCache.success")})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-cache.notifications.clearCache.error")})}),this.open=!1}}}}}]);