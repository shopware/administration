(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[573],{nX6z:function(e,n,t){"use strict";t.r(n);var o=t("6lmj"),r=t.n(o),i=t("CsSd"),s=t.n(i),a=t("JvCW"),d=t("5qLW");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=Shopware,h=u.Component,p=u.Mixin,m=u.State,v=Shopware.Data.Criteria;n.default=h.wrapComponentConfig({template:'\n{% block sw_order_create_details %}\n<div class="sw-order-create-details">\n    <sw-loader v-if="isLoading" />\n\n    \n    {% block sw_order_create_details_promotion_modal %}\n    <sw-order-create-promotion-modal\n        v-if="showPromotionModal"\n        :is-loading="isLoading"\n        :currency="currency"\n        :sales-channel-id="salesChannelId"\n        @close="onClosePromotionModal"\n        @save="onSavePromotionModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_payment %}\n    <sw-card\n        class="sw-order-create-details__payment"\n        position-identifier="sw-order-create-details-payment"\n        :title="$tc(\'sw-order.createBase.detailsTab.labelTransactionCard\')"\n    >\n        <sw-container\n            class="sw_order_create-details__payment-container"\n            gap="0px 30px"\n            columns="1fr 1fr"\n        >\n            <sw-order-customer-address-select\n                {% if VUE3 %}\n                v-model:value="context.billingAddressId"\n                {% else %}\n                v-model="context.billingAddressId"\n                {% endif %}\n                :label="$tc(\'sw-order.createBase.labelBillingAddress\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderBillingAddress\')"\n                :same-address-value="context.shippingAddressId"\n                :customer="customer"\n            />\n\n            <sw-entity-single-select\n                {% if VUE3 %}\n                v-model:value="context.paymentMethodId"\n                {% else %}\n                v-model="context.paymentMethodId"\n                {% endif %}\n                entity="payment_method"\n                label-property="distinguishableName"\n                class="sw_order_create-details__payment-method"\n                :criteria="paymentMethodCriteria"\n                :label="$tc(\'sw-order.createBase.labelPaymentMethod\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderPaymentMethod\')"\n                show-clearable-button\n                required\n            />\n\n            <sw-entity-single-select\n                {% if VUE3 %}\n                v-model:value="context.currencyId"\n                {% else %}\n                v-model="context.currencyId"\n                {% endif %}\n                class="sw_order_create-details__currency"\n                entity="currency"\n                :criteria="currencyCriteria"\n                :label="$tc(\'sw-order.createBase.labelCurrency\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderCurrency\')"\n                show-clearable-button\n                required\n            />\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_shipping %}\n    <sw-card\n        class="sw-order-create-details__shipping"\n        position-identifier="sw-order-create-details-shipping"\n        :title="$tc(\'sw-order.createBase.detailsTab.labelDeliveryCard\')"\n    >\n        <sw-container\n            class="sw_order_create_details__shipping-container"\n            gap="0px 30px"\n            columns="1fr 1fr"\n        >\n            <sw-order-customer-address-select\n                {% if VUE3 %}\n                v-model:value="context.shippingAddressId"\n                {% else %}\n                v-model="context.shippingAddressId"\n                {% endif %}\n                :label="$tc(\'sw-order.createBase.labelShippingAddress\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderShippingAddress\')"\n                :same-address-label="$tc(\'sw-order.initialModal.options.textSameAsBillingAddress\')"\n                :same-address-value="context.billingAddressId"\n                :customer="customer"\n            />\n\n            <sw-entity-single-select\n                {% if VUE3 %}\n                v-model:value="context.shippingMethodId"\n                {% else %}\n                v-model="context.shippingMethodId"\n                {% endif %}\n                show-clearable-button\n                class="sw_order_create-details__shipping"\n                entity="shipping_method"\n                :criteria="shippingMethodCriteria"\n                :label="$tc(\'sw-order.createBase.labelShippingMethod\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderShippingMethod\')"\n                required\n            />\n\n            <sw-number-field\n                {% if VUE3 %}\n                v-model:value="shippingCosts"\n                {% else %}\n                v-model="shippingCosts"\n                {% endif %}\n                :label="$tc(\'sw-order.createBase.labelShippingCosts\')"\n                :min="0"\n                fill-digits\n                required\n            >\n                <template #suffix>\n                    {{ currency.symbol }}\n                </template>\n            </sw-number-field>\n\n            <sw-datepicker\n                {% if VUE3 %}\n                v-model:value="deliveryDate"\n                {% else %}\n                v-model="deliveryDate"\n                {% endif %}\n                disabled\n                :label="$tc(\'sw-order.detailDeliveries.labelDeliveryDate\')"\n            />\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_order %}\n    <sw-card\n        class="sw-order-create-details__order"\n        position-identifier="sw-order-create-details-order"\n        :title="$tc(\'sw-order.createBase.detailsTab.labelOrderCard\')"\n    >\n        <sw-container\n            class="sw_order_create_details__order-container"\n            gap="0px 30px"\n            columns="1fr 1fr"\n        >\n            \n            {% block sw_order_create_details_email %}\n            <sw-text-field\n                {% if VUE3 %}\n                v-model:value="email"\n                {% else %}\n                v-model="email"\n                {% endif %}\n                disabled\n                class="sw-order-create-details__email"\n                :label="$tc(\'sw-order.createBase.labelEmail\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderEmail\')"\n                required\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_create_details_phone_number %}\n            <sw-text-field\n                {% if VUE3 %}\n                v-model:value="phoneNumber"\n                {% else %}\n                v-model="phoneNumber"\n                {% endif %}\n                disabled\n                class="sw-order-create-details__phone-number"\n                :label="$tc(\'sw-order.createBase.labelPhoneNumber\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderPhoneNumber\')"\n                required\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_create_details__order_sales_channel %}\n            <sw-entity-single-select\n                {% if VUE3 %}\n                v-model:value="salesChannelId"\n                {% else %}\n                v-model="salesChannelId"\n                {% endif %}\n                disabled\n                entity="sales_channel"\n                class="sw-order-create-options__sales-channel"\n                :label="$tc(\'sw-order.createBase.labelSalesChannel\')"\n                required\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_create_details_order_language %}\n            <sw-entity-single-select\n                {% if VUE3 %}\n                v-model:value="context.languageId"\n                {% else %}\n                v-model="context.languageId"\n                {% endif %}\n                entity="language"\n                class="sw-order-create-options__order-language"\n                :criteria="languageCriteria"\n                :label="$tc(\'sw-order.createBase.labelOrderLanguage\')"\n                :placeholder="$tc(\'sw-order.createBase.placeholderOrderLanguage\')"\n                show-clearable-button\n                required\n            />\n        {% endblock %}\n        </sw-container>\n\n        \n        {% block sw_order_create_details_voucher_field %}\n        <sw-order-promotion-tag-field\n            v-model="promotionCodeTags"\n            :disabled="!hasLineItem"\n            :currency="currency"\n            :label="$tc(\'sw-order.createBase.labelAddPromotion\')"\n            :placeholder="$tc(\'sw-order.createBase.placeholderAddPromotion\')"\n            :error="promotionError"\n            @on-remove-code="onRemoveExistingCode"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_switch_disable_auto_promotion %}\n        <sw-switch-field\n            class="sw-order-create-details__disable-auto-promotion"\n            :value="disabledAutoPromotion"\n            :label="$tc(\'sw-order.createBase.labelToggleAutomaticPromotions\')"\n            {% if VUE3 %}\n            @update:value="toggleAutomaticPromotions"\n            {% else %}\n            @change="toggleAutomaticPromotions"\n            {% endif %}\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","cartStoreService"],mixins:[p.getByName("notification"),p.getByName("cart-notification")],data:function(){return{showPromotionModal:!1,promotionError:null,isLoading:!1,context:{currencyId:"",paymentMethodId:"",shippingMethodId:"",languageId:"",billingAddressId:"",shippingAddressId:""}}},computed:{salesChannelId:function(){var e;return(null===(e=this.salesChannelContext)||void 0===e?void 0:e.salesChannel.id)||""},customer:function(){return m.get("swOrder").customer},cart:function(){return m.get("swOrder").cart},currency:function(){return m.get("swOrder").context.currency},salesChannelContext:function(){return m.get("swOrder").context},email:function(){var e;return(null===(e=this.customer)||void 0===e?void 0:e.email)||""},phoneNumber:function(){var e,n;return(null===(e=this.customer)||void 0===e||null===(n=e.defaultBillingAddress)||void 0===n?void 0:n.phoneNumber)||""},cartDelivery:function(){return Object(d.d)(this.cart,"deliveries[0]",null)},shippingCosts:{get:function(){var e;return(null===(e=this.cartDelivery)||void 0===e?void 0:e.shippingCosts.totalPrice)||0},set:function(e){this.modifyShippingCosts(e)}},deliveryDate:function(){var e;return(null===(e=this.cartDelivery)||void 0===e?void 0:e.deliveryDate.earliest)||""},shippingMethodCriteria:function(){var e=new v(1,25);return e.addFilter(v.equals("salesChannels.id",this.salesChannelId)),e},paymentMethodCriteria:function(){var e=new v(1,25);return e.addFilter(v.equals("salesChannels.id",this.salesChannelId)),e.addFilter(v.equals("active",1)),e},languageCriteria:function(){var e=new v(1,25);return e.addFilter(v.equals("salesChannels.id",this.salesChannelId)),e},currencyCriteria:function(){var e=new v(1,25);return e.addFilter(v.equals("salesChannels.id",this.salesChannelId)),e},currencyRepository:function(){return this.repositoryFactory.create("currency")},isCartTokenAvailable:function(){return m.getters["swOrder/isCartTokenAvailable"]},hasLineItem:function(){var e;return(null===(e=this.cart)||void 0===e?void 0:e.lineItems.filter((function(e){return e.hasOwnProperty("id")})).length)>0},promotionCodeLineItems:function(){var e;return null===(e=this.cart)||void 0===e?void 0:e.lineItems.filter((function(e){var n;return e.type===a.a.PROMOTION&&(null==e||null===(n=e.payload)||void 0===n?void 0:n.code)}))},disabledAutoPromotion:function(){return m.get("swOrder").disabledAutoPromotion},promotionCodeTags:{get:function(){return m.get("swOrder").promotionCodes},set:function(e){m.commit("swOrder/setPromotionCodes",e)}}},watch:{context:{deep:!0,handler:function(){var e=this;this.customer&&this.isCartTokenAvailable&&(this.isLoading=!0,this.updateContext().finally((function(){e.isLoading=!1})))}},cart:{deep:!0,immediate:!0,handler:"updatePromotionList"},promotionCodeTags:{handler:"handlePromotionCodeTags"}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e,n,t,o,r,i,s=this;this.customer||this.$nextTick((function(){s.$router.push({name:"sw.order.create.initial"})})),this.context=c(c({},this.context),{},{currencyId:this.salesChannelContext.context.currencyId,languageId:this.salesChannelContext.context.languageIdChain[0],shippingMethodId:this.salesChannelContext.shippingMethod.id,paymentMethodId:this.salesChannelContext.paymentMethod.id,billingAddressId:null!==(e=null===(n=this.salesChannelContext.customer)||void 0===n||null===(t=n.activeBillingAddress)||void 0===t?void 0:t.id)&&void 0!==e?e:"",shippingAddressId:null!==(o=null===(r=this.salesChannelContext.customer)||void 0===r||null===(i=r.activeShippingAddress)||void 0===i?void 0:i.id)&&void 0!==o?o:""})},updateContext:function(){var e,n=this;return m.dispatch("swOrder/updateOrderContext",{context:this.context,salesChannelId:null===(e=this.customer)||void 0===e?void 0:e.salesChannelId,contextToken:this.cart.token}).then((function(){return n.loadCart()}))},loadCart:function(){var e;return m.dispatch("swOrder/getCart",{salesChannelId:null===(e=this.customer)||void 0===e?void 0:e.salesChannelId,contextToken:this.cart.token})},onRemoveExistingCode:function(e){return e.isInvalid?(this.promotionCodeTags=this.promotionCodeTags.filter((function(n){return n.code!==e.code})),Promise.resolve()):this.onRemoveItems([e.discountId])},onRemoveItems:function(e){var n,t=this;return this.isLoading=!0,m.dispatch("swOrder/removeLineItems",{salesChannelId:null===(n=this.customer)||void 0===n?void 0:n.salesChannelId,contextToken:this.cart.token,lineItemKeys:e}).then((function(){e.forEach((function(e){var n=t.promotionCodeTags.find((function(n){return n.discountId===e}));n&&(t.promotionCodeTags=t.promotionCodeTags.filter((function(e){return e.discountId!==n.discountId})))}))})).finally((function(){t.isLoading=!1}))},updatePromotionList:function(){var e=this;this.promotionCodeTags=this.promotionCodeTags.map((function(n){var t=e.promotionCodeLineItems.find((function(e){var t;return(null===(t=e.payload)||void 0===t?void 0:t.code)===n.code}));return t?c(c({},t.payload),{},{isInvalid:!1}):c(c({},n),{},{isInvalid:!0})})),this.promotionCodeLineItems.forEach((function(n){e.promotionCodeTags.find((function(e){var t;return e.code===(null===(t=n.payload)||void 0===t?void 0:t.code)}))||(e.promotionCodeTags=[].concat(r()(e.promotionCodeTags),[c(c({},n.payload),{},{isInvalid:!1})]))}))},toggleAutomaticPromotions:function(e){var n=this;this.showPromotionModal=e,e?m.commit("swOrder/setDisabledAutoPromotion",!0):(this.isLoading=!0,this.cartStoreService.enableAutomaticPromotions(this.cart.token,{salesChannelId:this.salesChannelId}).then((function(){return m.commit("swOrder/setDisabledAutoPromotion",!1),n.loadCart()})).finally((function(){n.isLoading=!1})))},onClosePromotionModal:function(){this.showPromotionModal=!1,m.commit("swOrder/setDisabledAutoPromotion",!1)},onSavePromotionModal:function(){var e=this;return this.showPromotionModal=!1,m.commit("swOrder/setDisabledAutoPromotion",!0),this.loadCart().finally((function(){e.isLoading=!1}))},modifyShippingCosts:function(e){var n=this,t=Math.abs(e);this.cartDelivery&&(this.cartDelivery.shippingCosts.unitPrice=t,this.cartDelivery.shippingCosts.totalPrice=t,this.isLoading=!0,m.dispatch("swOrder/modifyShippingCosts",{salesChannelId:this.salesChannelId,contextToken:this.cart.token,shippingCosts:this.cartDelivery.shippingCosts}).catch((function(e){n.$emit("error",e)})).finally((function(){n.isLoading=!1})))},handlePromotionCodeTags:function(e,n){if(this.promotionError=null,!(e.length<n.length)){var t=this.promotionCodeTags.length,o=this.promotionCodeTags[t-1];e.length>n.length&&this.onSubmitCode(o.code),t>0&&o.isInvalid&&(this.promotionError={detail:this.$tc("sw-order.createBase.textInvalidPromotionCode")})}},onSubmitCode:function(e){var n,t=this;return this.isLoading=!0,m.dispatch("swOrder/addPromotionCode",{salesChannelId:null===(n=this.customer)||void 0===n?void 0:n.salesChannelId,contextToken:this.cart.token,code:e}).finally((function(){t.isLoading=!1}))}}})}}]);