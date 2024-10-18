(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[23020],{541634:function(){},23020:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return e}}),r(185319);var e={template:'\n{% block sw_first_run_wizard_shopware_account %}\n<div class="sw-first-run-wizard-shopware-account">\n    <sw-container columns="1fr 1fr">\n        <img\n            class="sw-first-run-wizard-shopware-account__illustration"\n            :src="assetFilter(\'/administration/static/img/first-run-wizard/shopware-account.svg\')"\n            alt=""\n        >\n        <div>\n            <h5 class="headline">\n                {{ $tc(\'sw-first-run-wizard.shopwareAccount.headline\') }}\n            </h5>\n            <p\n                class="message"\n                v-html="$tc(\'sw-first-run-wizard.shopwareAccount.message\')"\n            ></p>\n            <p class="create-account">\n                {{ $tc(\'sw-first-run-wizard.shopwareAccount.registerAccountText\') }}\n                <a\n                    class="external-link"\n                    :href="$tc(\'sw-first-run-wizard.shopwareAccount.registerAccountUrl\')"\n                    target="_blank"\n                    rel="noopener"\n                >\n                    {{ $tc(\'sw-first-run-wizard.shopwareAccount.registerAccountHere\') }}\n                </a>.\n            </p>\n            <div class="input-fields">\n                <sw-text-field\n                    v-model:value="shopwareId"\n                    name="shopwareId"\n                    validation="required"\n                    :label="$tc(\'sw-first-run-wizard.shopwareAccount.emailAddressLabel\')"\n                    :placeholder="$tc(\'sw-first-run-wizard.shopwareAccount.emailAddressPlaceholder\')"\n                />\n            </div>\n\n            <div class="input-fields">\n                <sw-password-field\n                    v-model:value="password"\n                    :label="$tc(\'sw-first-run-wizard.shopwareAccount.passwordLabel\')"\n                    :placeholder="$tc(\'sw-first-run-wizard.shopwareAccount.passwordPlaceholder\')"\n                />\n            </div>\n            <p class="forgot-password">\n                <a\n                    class="external-link"\n                    :href="$tc(\'sw-first-run-wizard.shopwareAccount.forgotPasswordUrl\')"\n                    target="_blank"\n                    rel="noopener"\n                >\n                    {{ $tc(\'sw-first-run-wizard.shopwareAccount.forgotPasswordText\') }}\n                </a>\n            </p>\n\n            <div\n                v-if="accountError"\n                class="sw-first-run-wizard-shopware-account__error"\n            >\n                <sw-alert\n                    :title="$tc(\'global.default.error\')"\n                    variant="error"\n                    appearance="notification"\n                >\n                    {{ $tc(\'sw-first-run-wizard.error.messageLoginDataInvalid\') }}\n                </sw-alert>\n            </div>\n        </div>\n    </sw-container>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["firstRunWizardService"],emits:["frw-set-title","buttons-update","frw-redirect"],data(){return{shopwareId:"",password:"",accountError:!1}},computed:{assetFilter(){return Shopware.Filter.getByName("asset")}},created(){this.createdComponent()},methods:{createdComponent(){this.setTitle(),this.updateButtons()},setTitle(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.shopwareAccount.modalTitle"))},updateButtons(){let t=Shopware.State.get("context").app.config.settings.disableExtensionManagement,n=[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:`sw.first.run.wizard.index.${t?"mailer.selection":"plugins"}`,disabled:!1},{key:"skip",label:this.$tc("sw-first-run-wizard.general.buttonSkip"),position:"right",variant:null,action:`sw.first.run.wizard.index.${t?"finish":"store"}`,disabled:!1},{key:"next",label:this.$tc("sw-first-run-wizard.general.buttonNext"),position:"right",variant:"primary",action:this.testCredentials.bind(this),disabled:!1}];this.$emit("buttons-update",n)},testCredentials(){let{shopwareId:t,password:n}=this;return this.firstRunWizardService.checkShopwareId({shopwareId:t,password:n}).then(()=>(this.accountError=!1,this.$emit("frw-redirect","sw.first.run.wizard.index.shopware.domain"),!1)).catch(()=>(this.accountError=!0,!0))}}}},185319:function(t,n,r){var e=r(541634);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals),r(745346).Z("a7bb385e",e,!0,{})}}]);