(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[342],{MB9Z:function(e,t,r){},"g/7V":function(e,t,r){var n=r("MB9Z");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("ydqr").default)("5c08590c",n,!0,{})},nCjv:function(e,t,r){"use strict";r.r(t);var n=r("J58c"),d=r.n(n);r("g/7V");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=Shopware,l=i.Component,o=i.State,c=Shopware.Data.Criteria,h=l.getComponentHelper(),p=h.mapGetters,u=h.mapState;t.default={template:'\n{% block sw_order_detail_details %}\n<div class="sw-order-detail-details">\n\n    \n    {% block sw_order_detail_details_payment %}\n    <sw-order-details-state-card\n        v-if="transaction"\n        :title="$tc(\'sw-order.detailsTab.labelTransactionCard\')"\n        :order="order"\n        :entity="transaction"\n        :state-label="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n        :disabled="!acl.can(\'order.editor\')"\n        @show-status-history="showStateHistoryModal = true"\n        @save-edits="onSaveEdits"\n    >\n\n        \n        {% block sw_order_detail_details_payment_billing_address %}\n        <sw-order-address-selection\n            class="sw-order-detail-details__billing-address"\n            type="billing"\n            :address="billingAddress"\n            :address-id="selectedBillingAddressId"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelBillingAddress\')"\n            @change-address="onChangeOrderAddress"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_payment_method_select %}\n        <sw-entity-single-select\n            v-model="transaction.paymentMethodId"\n            entity="payment_method"\n            label-property="distinguishableName"\n            disabled\n            :criteria="paymentMethodCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelPaymentMethod\')"\n            :help-text="$tc(\'sw-order.createBase.detailsFooter.helpTextPaymentMethod\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderPaymentMethod\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n    </sw-order-details-state-card>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_details_shipping %}\n    <sw-order-details-state-card\n        v-if="delivery"\n        :title="$tc(\'sw-order.detailsTab.labelDeliveryCard\')"\n        :order="order"\n        :entity="delivery"\n        :state-label="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n        :disabled="!acl.can(\'order.editor\')"\n        @show-status-history="showStateHistoryModal = true"\n        @save-edits="onSaveEdits"\n    >\n\n        \n        {% block sw_order_detail_details_shipping_address %}\n        <sw-order-address-selection\n            class="sw-order-detail-details__shipping-address"\n            type="shipping"\n            :address="shippingAddress"\n            :address-id="selectedShippingAddressId"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelShippingAddress\')"\n            @change-address="onChangeOrderAddress"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_shipping_method_select %}\n        <sw-entity-single-select\n            v-model="delivery.shippingMethodId"\n            entity="shipping_method"\n            disabled\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelShippingMethod\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderShippingMethod\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_shipping_costs %}\n        <sw-number-field\n            v-model="shippingCosts"\n            class="sw-order-detail-details__shipping-cost"\n            :disabled="!acl.can(\'order.editor\')"\n            fill-digits\n            :label="$tc(\'sw-order.detailDeliveries.labelShippingCosts\')"\n        >\n            <template #suffix>\n                {{ order.currency.symbol }}\n            </template>\n        </sw-number-field>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_shipping_date %}\n        <sw-datepicker\n            v-model="delivery.shippingDateEarliest"\n            disabled\n            :label="$tc(\'sw-order.detailDeliveries.labelDeliveryDate\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_shipping_tracking_codes %}\n        <sw-multi-tag-select\n            v-model="delivery.trackingCodes"\n            class="sw-order-user-card__tracking-code-select"\n            :disabled="!acl.can(\'order.editor\')"\n            :placeholder="$tc(\'sw-order.detailBase.placeholderTrackingCodeSelect\')"\n            :label="$tc(\'sw-order.detailBase.labelTrackingCodes\')"\n            :validate="validateTrackingCode"\n            @change="saveAndReload"\n        >\n            <template #message-add-data>\n                <span>{{ $tc(\'sw-order.detailBase.addTrackingCode\') }}</span>\n            </template>\n            <template #message-enter-valid-data>\n                <span>{{ $tc(\'sw-order.detailBase.enterValidTrackingCode\') }}</span>\n            </template>\n        </sw-multi-tag-select>\n        {% endblock %}\n\n    </sw-order-details-state-card>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_details_order %}\n    <sw-order-details-state-card\n        :title="$tc(\'sw-order.detailsTab.labelOrderCard\')"\n        :order="order"\n        :entity="order"\n        :disabled="!acl.can(\'order.editor\')"\n        :state-label="$tc(\'sw-order.stateCard.headlineOrderState\')"\n        @show-status-history="showStateHistoryModal = true"\n        @save-edits="onSaveEdits"\n    >\n\n        \n        {% block sw_order_detail_details_order_email %}\n        <sw-text-field\n            v-model="order.orderCustomer.email"\n            class="sw-order-detail-details__email"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelEmail\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholderEmail\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_phone_number %}\n        <sw-text-field\n            v-model="order.addresses.get(order.billingAddressId).phoneNumber"\n            class="sw-order-detail-details__phone-number"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelPhoneNumber\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholderPhoneNumber\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_sales_channel %}\n        <sw-entity-single-select\n            v-model="order.salesChannelId"\n            entity="sales_channel"\n            disabled\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelSalesChannel\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderSalesChannel\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_language %}\n        <sw-entity-single-select\n            v-model="order.languageId"\n            entity="language"\n            disabled\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelOrderLanguage\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderOrderLanguage\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_affiliate %}\n        <sw-text-field\n            v-model="order.affiliateCode"\n            class="sw-order-detail-details__affiliate-code"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.detailBase.labelAffiliateCode\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_campaign %}\n        <sw-text-field\n            v-model="order.campaignCode"\n            class="sw-order-detail-details__campaign-code"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.detailBase.labelCampaignCode\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_customer_comment %}\n        <sw-textarea-field\n            v-model="order.customerComment"\n            class="sw-order-detail-details__customer-comment"\n            :disabled="!acl.can(\'order.editor\')"\n            :label="$tc(\'sw-order.detailBase.labelCustomerComment\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_detail_details_order_promotion %}\n        <sw-order-promotion-field\n            class="sw-order-detail-details__promotion"\n            @loading-change="updateLoading"\n            @reload-entity-data="reloadEntityData"\n            @error="showError"\n        />\n        {% endblock %}\n\n    </sw-order-details-state-card>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_details_custom_fields %}\n    <sw-card\n        v-if="customFieldSets.length > 0"\n        position-identifier="sw-order-detail-details-custom-fields"\n        :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n    >\n        <sw-custom-field-set-renderer\n            :entity="order"\n            :disabled="!acl.can(\'order.editor\')"\n            :sets="customFieldSets"\n        />\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_base_state_history_modal %}\n    <sw-order-state-history-modal\n        v-if="showStateHistoryModal"\n        :order="order"\n        :is-loading="isLoading"\n        @modal-close="showStateHistoryModal = false"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{orderId:{type:String,required:!0},isSaveSuccessful:{type:Boolean,required:!0}},data:function(){return{customFieldSets:[],showStateHistoryModal:!1}},computed:s(s(s({},p("swOrderDetail",["isLoading"])),u("swOrderDetail",["order","versionContext","orderAddressIds"])),{},{delivery:function(){return this.order.deliveries.length>0&&this.order.deliveries[0]},transaction:function(){for(var e=0;e<this.order.transactions.length;e+=1)if(!["cancelled","failed"].includes(this.order.transactions[e].stateMachineState.technicalName))return this.order.transactions[e];return this.order.transactions.last()},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria:function(){var e=new c(1,null);return e.addFilter(c.equals("relations.entityName","order")),e},salesChannelCriteria:function(){var e=new c(1,25);return this.order.salesChannelId&&e.addFilter(c.equals("salesChannels.id",this.order.salesChannelId)),e},paymentMethodCriteria:function(){var e=new c(1,25);return this.order.salesChannelId&&e.addFilter(c.equals("salesChannels.id",this.order.salesChannelId)),e.addFilter(c.equals("afterOrderEnabled",1)),e},taxStatus:function(){return this.order.price.taxStatus},currency:function(){return this.order.currency},billingAddress:function(){var e=this;return this.order.addresses.find((function(t){return t.id===e.order.billingAddressId}))},shippingAddress:function(){return this.delivery.shippingOrderAddress},selectedBillingAddressId:function(){var e=this.orderAddressIds.find((function(e){return"billing"===e.type}));return(null==e?void 0:e.customerAddressId)||this.billingAddress.id},selectedShippingAddressId:function(){var e=this.orderAddressIds.find((function(e){return"shipping"===e.type}));return(null==e?void 0:e.customerAddressId)||this.shippingAddress.id},shippingCosts:{get:function(){var e;return(null===(e=this.delivery)||void 0===e?void 0:e.shippingCosts.totalPrice)||0},set:function(e){this.onShippingChargeEdited(e)}}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.$emit("update-loading",!0),this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){e.customFieldSets=t,e.$emit("update-loading",!1)}))},onShippingChargeEdited:function(e){this.delivery.shippingCosts.unitPrice=e,this.delivery.shippingCosts.totalPrice=e,this.saveAndRecalculate()},saveAndRecalculate:function(){this.$emit("save-and-recalculate")},saveAndReload:function(){this.$emit("save-and-reload")},onSaveEdits:function(){this.$emit("save-edits")},reloadEntityData:function(){this.$emit("reload-entity-data")},showError:function(e){this.$emit("error",e)},updateLoading:function(e){o.commit("swOrderDetail/setLoading",["order",e])},validateTrackingCode:function(e){var t,r,n=e.trim();return!(n.length<=0)&&!(null===(t=this.delivery)||void 0===t||null===(r=t.trackingCodes)||void 0===r?void 0:r.find((function(e){return e===n})))},onChangeOrderAddress:function(e){o.commit("swOrderDetail/setOrderAddressIds",e)}}}}}]);