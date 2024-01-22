(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[65869],{27494:function(){},65869:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return n}}),e(29166);var n={template:'\n{% block sw_first_run_wizard_store %}\n<div class="sw-first-run-wizard-store">\n    <template v-if="loadStatus">\n        <sw-loader />\n\n        <p class="message">\n            {{ $tc(\'sw-first-run-wizard.store.loadStatusCollect\') }}\n            <br>\n            {{ $tc(\'sw-first-run-wizard.store.takeMinutes\') }}\n        </p>\n    </template>\n\n    <template v-else-if="extensionStatus && extensionStatus.active">\n        <sw-label\n            class="sw-first-run-wizard-store__label"\n            appearance="pill"\n            variant="success"\n        >\n            <sw-icon\n                name="regular-check-circle"\n                size="30px"\n            />\n        </sw-label>\n\n        <h2>\n            {{ $tc(\'sw-first-run-wizard.store.alreadyActivated\') }}\n        </h2>\n    </template>\n\n    <template v-else-if="isActivating">\n        <sw-loader />\n\n        <p class="message">\n            {{ $tc(\'sw-first-run-wizard.store.enablingStore\') }}\n            <br>\n            {{ $tc(\'sw-first-run-wizard.store.takeMinutes\') }}\n        </p>\n    </template>\n\n    <template v-else-if="activationError">\n        <sw-label\n            class="sw-first-run-wizard-store__label"\n            appearance="pill"\n            variant="danger"\n        >\n            <sw-icon\n                name="regular-times-circle"\n                size="30px"\n            />\n        </sw-label>\n\n        <h2>\n            {{ error && error.title || $tc(\'sw-first-run-wizard.store.activationErrorTitle\') }}\n        </h2>\n        <p>\n            {{ error && error.detail || $tc(\'sw-first-run-wizard.store.activationErrorDescription\') }}\n        </p>\n    </template>\n\n    <template v-else>\n        <img\n            :src="assetFilter(\'/administration/static/img/extension-store/store_illustration.svg\')"\n            alt=""\n        >\n\n        <h2 class="sw-first-run-wizard-store__heading">\n            {{ $tc(\'sw-first-run-wizard.store.headingOne\') }}\n            <br>\n            {{ $tc(\'sw-first-run-wizard.store.headingTwo\') }}\n        </h2>\n\n        <p>\n            {{ $tc(\'sw-first-run-wizard.store.description\') }}\n        </p>\n    </template>\n</div>\n{% endblock %}\n',inject:["extensionHelperService"],data(){return{loadStatus:!1,isActivating:!1,activationError:null,extensionStatus:null,error:null}},computed:{edition(){let t=this.licenceDomains.find(t=>t.active);return t?t.edition:""},buttonConfig(){let t={key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.shopware.account",disabled:this.isActivating||this.loadStatus};return this.extensionStatus&&this.extensionStatus.active?[t,{key:"next",label:this.$tc("sw-first-run-wizard.general.buttonNext"),position:"right",variant:"primary",action:"sw.first.run.wizard.index.finish",disabled:!1}]:[t,{key:"skip",label:this.$tc("sw-first-run-wizard.general.buttonSkip"),position:"right",variant:null,action:"sw.first.run.wizard.index.finish",disabled:this.isActivating||this.loadStatus},{key:"activate",label:this.$tc("sw-first-run-wizard.general.buttonActivate"),position:"right",variant:"primary",action:this.activateStore.bind(this),disabled:this.isActivating||this.loadStatus}]},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{buttonConfig:{handler(){this.updateButtons()},deep:!0}},created(){this.createdComponent()},methods:{createdComponent(){this.updateButtons(),this.setTitle(),this.updateExtensionStatus()},setTitle(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.store.modalTitle"))},async updateExtensionStatus(){this.loadStatus=!0;try{this.extensionStatus=await this.extensionHelperService.getStatusOfExtension("SwagExtensionStore")}catch(t){Shopware.Utils.debug.error(t)}finally{this.loadStatus=!1}},activateStore(){this.isActivating=!0,this.activationError=null,Promise.all([this.installExtensionStore()]).then(()=>{this.$emit("frw-redirect","sw.first.run.wizard.index.finish")}).catch(t=>{this.activationError=!0,t?.response?.data&&Array.isArray(t.response.data.errors)&&t.response.data.errors[0]&&(this.error=t.response.data.errors[0]),Shopware.Utils.debug.error(t)}).finally(()=>{this.isActivating=!1})},async installExtensionStore(){let t=await this.extensionHelperService.downloadAndActivateExtension("SwagExtensionStore");return this.$emit("extension-activated"),t},updateButtons(){this.$emit("buttons-update",this.buttonConfig)}}}},29166:function(t,i,e){var n=e(27494);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),e(45346).Z("1d3a4f80",n,!0,{})}}]);