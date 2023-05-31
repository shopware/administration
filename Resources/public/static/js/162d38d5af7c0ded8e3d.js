(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[217],{"2InQ":function(n,e,t){var i=t("QuCn");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,t("ydqr").default)("675aba8c",i,!0,{})},QuCn:function(n,e,t){},gOiW:function(n,e,t){"use strict";t.r(e);var i=t("HZZ/"),s=t.n(i),o=t("J58c"),a=t.n(o),r=t("hJxD"),c=t.n(r),l=(t("2InQ"),t("22wk"));function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}e.default={template:'\n{% block sw_extension_card_base_activation_switch %}\n{% parent %}\n\n\n{% block sw_bought_extension_card_deactivation_modal %}\n<sw-extension-deactivation-modal\n    v-if="showDeactivationModal"\n    :extension-name="label"\n    :is-licensed="license !== null"\n    :is-loading="isLoading"\n    @modal-close="closeDeactivationModal"\n    @extension-deactivate="closeModalAndDeactivateExtension"\n/>\n{% endblock %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_info_content %}\n{% parent %}\n\n\n{% block sw_extension_card_base_calculated_price %}\n<section v-if="priceInfo && extension.storeLicense.variant === \'rent\'">\n    \n    {% block sw_bought_extension_card_info_price %}\n    <span class="sw-extension-card-bought__info-price">\n        {{ priceInfo }}\n    </span>\n    {% endblock %}\n</section>\n{% endblock %}\n\n\n{% block sw_extension_card_base_subscription_expired_info %}\n<section v-if="subscriptionExpiredText">\n    \n    {% block sw_extension_card_base_subscription_expired_info_text %}\n    <span\n        class="sw-extension-card-bought__info-subscription-expiry"\n        :class="subscriptionExpiredTextClasses"\n    >\n        <sw-icon\n            v-if="isExpiredTestPhase || isExpiredRent"\n            name="solid-exclamation-circle"\n            size="14"\n            small\n        />\n        {{ subscriptionExpiredText }}\n    </span>\n    {% endblock %}\n</section>\n{% endblock %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_context_menu_actions %}\n\n\n{% block sw_bought_extension_card_context_menu_open_detail %}\n<sw-context-menu-item\n    v-if="detailLink"\n    class="sw-extension-card-bought__detail-link"\n    :router-link="detailLink"\n>\n    {{ $tc(\'sw-extension-store.component.sw-extension-card-base.contextMenu.seeDetailsLabel\') }}\n</sw-context-menu-item>\n{% endblock %}\n\n\n{% block sw_bought_extension_card_context_menu_rate %}\n<sw-context-menu-item\n    v-if="isInstalled && extension.storeLicense"\n    class="sw-extension-card-bought__rate-link"\n    @click="openRatingModal"\n>\n    {{ $tc(\'sw-extension-store.component.sw-extension-card-base.contextMenu.rateLabel\') }}\n</sw-context-menu-item>\n{% endblock %}\n\n{% parent %}\n{% endblock %}\n\n\n{% block sw_extension_card_base_modals %}\n{% parent %}\n\n\n{% block sw_bought_extension_card_rating_modal %}\n<sw-extension-rating-modal\n    v-if="showRatingModal"\n    :extension="extension"\n    @modal-close="closeRatingModal"\n/>\n{% endblock %}\n\n\n{% block sw_bought_extension_card_installation_failed_modal %}\n<sw-modal\n    v-if="showExtensionInstallationFailedModal"\n    :title="extension.label"\n    variant="small"\n    class="sw-extension-card-bought__installation-failed-modal"\n    @modal-close="closeInstallationFailedNotification"\n>\n    \n    {% block sw_bought_extension_card_installation_failed_modal_extension %}\n    <sw-extension-adding-failed\n        :extension-name="extension.name"\n        :title="installationFailedError && installationFailedError.title"\n        :detail="installationFailedError && installationFailedError.message"\n        :documentation-link="installationFailedError && installationFailedError.parameters && installationFailedError.parameters.documentationLink"\n        @close="closeInstallationFailedNotification"\n    />\n    {% endblock %}\n</sw-modal>\n    {% endblock %}\n{% endblock %}\n',mixins:["sw-extension-error"],props:{extension:{type:Object,required:!1,default:null}},data:function(){return{showDeactivationModal:!1,showRatingModal:!1,showExtensionInstallationFailedModal:!1,installationFailedError:null}},computed:{extensionCardClasses:function(){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){a()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({"sw-extension-card-bought":!0},this.$super("extensionCardClasses"))},priceInfo:function(){var n,e,t;return null!==(n=null===(e=this.extension)||void 0===e||null===(t=e.storeLicense)||void 0===t?void 0:t.paymentText)&&void 0!==n?n:""},detailLink:function(){return{name:"sw.extension.store.detail",params:{id:String(this.extension.storeExtension?this.extension.storeExtension.id:this.extension.id)}}},subscriptionExpiredText:function(){var n,e,t,i,s,o,a,r=null!==(n=null===(e=this.extension)||void 0===e||null===(t=e.storeLicense)||void 0===t?void 0:t.expirationDate)&&void 0!==n?n:null;if(null===r)return null;var c=new Date(r).toLocaleDateString();return"test"!==(null===(i=this.extension)||void 0===i||null===(s=i.storeLicense)||void 0===s?void 0:s.variant)||null!==(o=this.extension)&&void 0!==o&&null!==(a=o.storeLicense)&&void 0!==a&&a.expired?this.isExpiredTestPhase?this.$t("sw-extension-store.component.sw-extension-card-bought.testPhaseExpiredAt",{date:c}):this.isExpiredRent?this.$t("sw-extension-store.component.sw-extension-card-bought.rentExpiredAt",{date:c}):this.$t("sw-extension-store.component.sw-extension-card-bought.rentWillExpireAt",{date:c}):this.$t("sw-extension-store.component.sw-extension-card-bought.testPhaseWillExpireAt",{date:c})},isExpiredRent:function(){var n,e,t,i;return"rent"===(null===(n=this.extension)||void 0===n||null===(e=n.storeLicense)||void 0===e?void 0:e.variant)&&(null===(t=this.extension)||void 0===t||null===(i=t.storeLicense)||void 0===i?void 0:i.expired)},isExpiredTestPhase:function(){var n,e,t,i;return"test"===(null===(n=this.extension)||void 0===n||null===(e=n.storeLicense)||void 0===e?void 0:e.variant)&&(null===(t=this.extension)||void 0===t||null===(i=t.storeLicense)||void 0===i?void 0:i.expired)},subscriptionExpiredTextClasses:function(){return{"is--expired-test-phase":this.isExpiredTestPhase,"is--expired-rent":this.isExpiredRent}}},methods:{changeExtensionStatus:function(){var n=this;return s()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isActive){e.next=4;break}return e.next=3,n.activateExtension();case 3:return e.abrupt("return");case 4:if(n.license&&n.license.variant===n.shopwareExtensionService.EXTENSION_VARIANT_TYPES.RENT){e.next=8;break}return e.next=7,n.deactivateExtension();case 7:return e.abrupt("return");case 8:n.showDeactivationModal=!0,n.$nextTick((function(){n.extension.active=!n.extension.active}));case 10:case"end":return e.stop()}}),e)})))()},activateExtension:function(){var n=this;return s()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.isLoading=!0,e.next=4,n.shopwareExtensionService.activateExtension(n.extension.name,n.extension.type);case 4:n.extension.active=!0,n.clearCacheAndReloadPage(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n.extension.active=!1,n.showExtensionErrors(e.t0);case 12:return e.prev=12,n.isLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))()},deactivateExtension:function(){var n=this;return s()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.isLoading=!0,e.next=4,n.shopwareExtensionService.deactivateExtension(n.extension.name,n.extension.type);case 4:n.extension.active=!1,n.clearCacheAndReloadPage(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),n.extension.active=!0,n.showExtensionErrors(e.t0);case 12:return e.prev=12,n.isLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))()},closeDeactivationModal:function(){this.showDeactivationModal=!1},closeModalAndDeactivateExtension:function(){var n=this;return s()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.deactivateExtension();case 2:n.showDeactivationModal=!1;case 3:case"end":return e.stop()}}),e)})))()},installExtension:function(){var n=this;return s()(c.a.mark((function e(){var t,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.isLoading=!0,e.prev=1,"store"!==n.extension.source){e.next=5;break}return e.next=5,n.extensionStoreActionService.downloadExtension(n.extension.name);case 5:return e.next=7,n.shopwareExtensionService.installExtension(n.extension.name,n.extension.type);case 7:return e.next=9,n.clearCacheAndReloadPage();case 9:e.next=17;break;case 11:e.prev=11,e.t0=e.catch(1),n.showExtensionErrors(e.t0),(i=null===(t=l.a.mapErrors(e.t0.response.data.errors))||void 0===t?void 0:t[0]).parameters?n.installationFailedError=i:n.installationFailedError={title:n.$tc(i.title),message:n.$tc(i.message)},n.showExtensionInstallationFailedModal=!0;case 17:return e.prev=17,n.isLoading=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,11,17,20]])})))()},cancelAndRemoveExtension:function(){var n=this;return s()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.closeRemovalModal(),n.isLoading=!0,n.extension.storeLicense.expirationDate){e.next=6;break}return e.next=6,n.shopwareExtensionService.cancelLicense(n.extension.storeLicense.id);case 6:return e.next=8,n.shopwareExtensionService.removeExtension(n.extension.name,n.extension.type);case 8:n.$nextTick((function(){n.emitUpdateList()})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n.showExtensionErrors(e.t0);case 14:return e.prev=14,n.isLoading=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})))()},openRatingModal:function(){this.showRatingModal=!0},closeRatingModal:function(){this.showRatingModal=!1},closeInstallationFailedNotification:function(){this.showExtensionInstallationFailedModal=!1}}}}}]);