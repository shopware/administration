(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[46848],{73137:function(){},46848:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return s}}),t(38156);var i=t(39841),s={template:'\n{% block sw_extension_card_base_activation_switch %}\n{% parent %}\n\n\n{% block sw_bought_extension_card_deactivation_modal %}\n<sw-extension-deactivation-modal\n    v-if="showDeactivationModal"\n    :extension-name="label"\n    :is-licensed="license !== null"\n    :is-loading="isLoading"\n    @modal-close="closeDeactivationModal"\n    @extension-deactivate="closeModalAndDeactivateExtension"\n/>\n{% endblock %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_info_content %}\n{% parent %}\n\n\n{% block sw_extension_card_base_calculated_price %}\n<section v-if="priceInfo && extension.storeLicense.variant === \'rent\'">\n    \n    {% block sw_bought_extension_card_info_price %}\n    <span class="sw-extension-card-bought__info-price">\n        {{ priceInfo }}\n    </span>\n    {% endblock %}\n</section>\n{% endblock %}\n\n\n{% block sw_extension_card_base_subscription_expired_info %}\n<section v-if="subscriptionExpiredText">\n    \n    {% block sw_extension_card_base_subscription_expired_info_text %}\n    <span\n        class="sw-extension-card-bought__info-subscription-expiry"\n        :class="subscriptionExpiredTextClasses"\n    >\n        <sw-icon\n            v-if="isExpiredTestPhase || isExpiredRent"\n            name="solid-exclamation-circle"\n            size="14"\n            small\n        />\n        {{ subscriptionExpiredText }}\n    </span>\n    {% endblock %}\n</section>\n{% endblock %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_context_menu_actions %}\n\n\n{% block sw_bought_extension_card_context_menu_open_detail %}\n<sw-context-menu-item\n    v-if="detailLink"\n    class="sw-extension-card-bought__detail-link"\n    :router-link="detailLink"\n>\n    {{ $tc(\'sw-extension-store.component.sw-extension-card-base.contextMenu.seeDetailsLabel\') }}\n</sw-context-menu-item>\n{% endblock %}\n\n\n{% block sw_bought_extension_card_context_menu_rate %}\n<sw-context-menu-item\n    v-if="isInstalled && extension.storeLicense"\n    class="sw-extension-card-bought__rate-link"\n    @click="openRatingModal"\n>\n    {{ $tc(\'sw-extension-store.component.sw-extension-card-base.contextMenu.rateLabel\') }}\n</sw-context-menu-item>\n{% endblock %}\n\n{% parent %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_modals %}\n{% parent %}\n\n\n{% block sw_bought_extension_card_rating_modal %}\n<sw-extension-rating-modal\n    v-if="showRatingModal"\n    :extension="extension"\n    @modal-close="closeRatingModal"\n/>\n{% endblock %}\n\n\n{% block sw_bought_extension_card_installation_failed_modal %}\n<sw-modal\n    v-if="showExtensionInstallationFailedModal"\n    :title="extension.label"\n    variant="small"\n    class="sw-extension-card-bought__installation-failed-modal"\n    @modal-close="closeInstallationFailedNotification"\n>\n    \n    {% block sw_bought_extension_card_installation_failed_modal_extension %}\n    <sw-extension-adding-failed\n        :extension-name="extension.name"\n        :title="installationFailedError && installationFailedError.title"\n        :detail="installationFailedError && installationFailedError.message"\n        :documentation-link="installationFailedError && installationFailedError.parameters && installationFailedError.parameters.documentationLink"\n        @close="closeInstallationFailedNotification"\n    />\n    {% endblock %}\n</sw-modal>\n    {% endblock %}\n{% endblock %}\n',mixins:["sw-extension-error"],props:{extension:{type:Object,required:!1,default:null}},data(){return{showDeactivationModal:!1,showRatingModal:!1,showExtensionInstallationFailedModal:!1,installationFailedError:null}},computed:{extensionCardClasses(){return{"sw-extension-card-bought":!0,...this.$super("extensionCardClasses")}},priceInfo(){return this.extension?.storeLicense?.paymentText??""},detailLink(){return{name:"sw.extension.store.detail",params:{id:String(this.extension.storeExtension?this.extension.storeExtension.id:this.extension.id)}}},subscriptionExpiredText(){let n=this.extension?.storeLicense?.expirationDate??null;if(null===n)return null;let e=new Date(n).toLocaleDateString();return this.extension?.storeLicense?.variant!=="test"||this.extension?.storeLicense?.expired?this.isExpiredTestPhase?this.$t("sw-extension-store.component.sw-extension-card-bought.testPhaseExpiredAt",{date:e}):this.isExpiredRent?this.$t("sw-extension-store.component.sw-extension-card-bought.rentExpiredAt",{date:e}):this.$t("sw-extension-store.component.sw-extension-card-bought.rentWillExpireAt",{date:e}):this.$t("sw-extension-store.component.sw-extension-card-bought.testPhaseWillExpireAt",{date:e})},isExpiredRent(){return this.extension?.storeLicense?.variant==="rent"&&this.extension?.storeLicense?.expired},isExpiredTestPhase(){return this.extension?.storeLicense?.variant==="test"&&this.extension?.storeLicense?.expired},subscriptionExpiredTextClasses(){return{"is--expired-test-phase":this.isExpiredTestPhase,"is--expired-rent":this.isExpiredRent}}},methods:{async changeExtensionStatus(){if(this.isActive){await this.activateExtension();return}if(!this.license||this.license.variant!==this.shopwareExtensionService.EXTENSION_VARIANT_TYPES.RENT){await this.deactivateExtension();return}this.showDeactivationModal=!0,this.$nextTick(()=>{this.extension.active=!this.extension.active})},async activateExtension(){try{this.isLoading=!0,await this.shopwareExtensionService.activateExtension(this.extension.name,this.extension.type),this.extension.active=!0,this.clearCacheAndReloadPage()}catch(n){this.extension.active=!1,this.showExtensionErrors(n)}finally{this.isLoading=!1}},async deactivateExtension(){try{this.isLoading=!0,await this.shopwareExtensionService.deactivateExtension(this.extension.name,this.extension.type),this.extension.active=!1,this.clearCacheAndReloadPage()}catch(n){this.extension.active=!0,this.showExtensionErrors(n)}finally{this.isLoading=!1}},closeDeactivationModal(){this.showDeactivationModal=!1},async closeModalAndDeactivateExtension(){await this.deactivateExtension(),this.showDeactivationModal=!1},async installExtension(){this.isLoading=!0;try{"store"===this.extension.source&&await this.extensionStoreActionService.downloadExtension(this.extension.name),await this.shopwareExtensionService.installExtension(this.extension.name,this.extension.type),await this.clearCacheAndReloadPage()}catch(e){this.showExtensionErrors(e);let n=i.Z.mapErrors(e.response.data.errors)?.[0];n.parameters?this.installationFailedError=n:this.installationFailedError={title:this.$tc(n.title),message:this.$tc(n.message)},this.showExtensionInstallationFailedModal=!0}finally{this.isLoading=!1}},async installAndActivateExtension(){this.isLoading=!0;try{"store"===this.extension.source&&await this.extensionStoreActionService.downloadExtension(this.extension.name),await this.shopwareExtensionService.installExtension(this.extension.name,this.extension.type),await this.shopwareExtensionService.activateExtension(this.extension.name,this.extension.type),await this.clearCacheAndReloadPage()}catch(e){this.showExtensionErrors(e);let n=i.Z.mapErrors(e.response.data.errors)?.[0];n.parameters?this.installationFailedError=n:this.installationFailedError={title:this.$tc(n.title),message:this.$tc(n.message)},this.showExtensionInstallationFailedModal=!0}finally{this.isLoading=!1}},async cancelAndRemoveExtension(){try{this.closeRemovalModal(),this.isLoading=!0,this.extension.storeLicense.expirationDate||await this.shopwareExtensionService.cancelLicense(this.extension.storeLicense.id),await this.shopwareExtensionService.removeExtension(this.extension.name,this.extension.type),this.$nextTick(()=>{this.emitUpdateList()})}catch(n){this.showExtensionErrors(n)}finally{this.isLoading=!1}},openRatingModal(){this.showRatingModal=!0},closeRatingModal(){this.showRatingModal=!1},closeInstallationFailedNotification(){this.showExtensionInstallationFailedModal=!1}}}},38156:function(n,e,t){var i=t(73137);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals),t(45346).Z("9c494552",i,!0,{})}}]);