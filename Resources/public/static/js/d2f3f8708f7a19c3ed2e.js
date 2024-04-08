(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[313],{"0C4A":function(e,r,t){"use strict";t.r(r);t("BRzK");var n=Shopware,a=n.Component,s=n.Mixin;r.default=a.wrapComponentConfig({template:'<div>\n    <div class="sw-order-create-general-info__summary">\n        <div class="sw-order-create-general-info__summary-main">\n            <div class="sw-order-create-general-info__summary-main-header">\n                {{ summaryMainHeader }}\n            </div>\n            <div class="sw-order-create-general-info__summary-main-total">\n                {{ currencyFilter(cart.price.totalPrice, context.currency.isoCode, context.currency.totalRounding.decimals) }}\n            </div>\n        </div>\n\n        <div class="sw-order-create-general-info__summary-sub">\n            <div class="sw-order-create-general-info__summary-sub-description">\n                {{ $tc(\'sw-order.generalTab.info.summary.with\') }}\n                {{ context.shippingMethod.translated.name }}\n                {{ $tc(\'sw-order.generalTab.info.summary.and\') }}\n                {{ context.paymentMethod.translated.distinguishableName }}\n            </div>\n        </div>\n    </div>\n\n    <div class="sw-order-create-general-info__order-states">\n        <div class="sw-order-create-general-info__order-state">\n            <sw-order-state-select-v2\n                class="sw-order-create-general-info__order-state-payment"\n                state-type="order_transaction"\n                rounded-style\n                :placeholder="$tc(\'sw-order.stateCard.draftPlaceholder\')"\n                :label="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n                disabled\n            />\n        </div>\n        <div class="sw-order-create-general-info__order-state">\n            <sw-order-state-select-v2\n                class="sw-order-create-general-info__order-state-delivery"\n                state-type="order_delivery"\n                rounded-style\n                :placeholder="$tc(\'sw-order.stateCard.draftPlaceholder\')"\n                :label="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n                disabled\n            />\n        </div>\n        <div class="sw-order-create-general-info__order-state">\n            <sw-order-state-select-v2\n                class="sw-order-create-general-info__order-state-order"\n                rounded-style\n                state-type="order"\n                :placeholder="$tc(\'sw-order.stateCard.draftPlaceholder\')"\n                :label="$tc(\'sw-order.stateCard.headlineOrderState\')"\n                disabled\n            />\n        </div>\n    </div>\n\n    <sw-entity-tag-select\n        class="sw-order-create-general-info__order-tags"\n        size="small"\n        :entity-collection="[]"\n        disabled\n        :placeholder="$tc(\'sw-order.generalTab.tagSelect.placeholder\')"\n        always-show-placeholder\n    />\n</div>\n',inject:["acl"],mixins:[s.getByName("notification")],props:{cart:{type:Object,required:!0},context:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},computed:{summaryMainHeader:function(){return this.context.customer?"".concat(this.context.customer.firstName," ").concat(this.context.customer.lastName," (").concat(this.context.customer.email,")"):""},paymentMethodName:function(){var e,r,t;return null!==(e=null===(r=this.context.paymentMethod)||void 0===r||null===(t=r.translated)||void 0===t?void 0:t.distinguishableName)&&void 0!==e?e:""},shippingMethodName:function(){var e,r;return null!==(e=null===(r=this.context.shippingMethod.translated)||void 0===r?void 0:r.name)&&void 0!==e?e:""},currencyFilter:function(){return Shopware.Filter.getByName("currency")}}})},"8e7j":function(e,r,t){},BRzK:function(e,r,t){var n=t("8e7j");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("P8hj").default)("63b3bb49",n,!0,{})}}]);