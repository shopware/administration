"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[33103],{333103:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});let{State:r,Service:a}=Shopware,{Criteria:s}=Shopware.Data;var l={template:'\n{% block sw_order_create_details_footer %}\n<sw-container\n    class="sw-order-create-details-footer"\n    columns="minmax(min-content, 1fr) minmax(min-content, 1fr)"\n    gap="0 32px"\n>\n    <div>\n        \n        {% block sw_order_create_details_footer_sales_channel %}\n        <sw-entity-single-select\n            v-model:value="salesChannelId"\n            disabled\n            size="small"\n            entity="sales_channel"\n            class="sw-order-create-details-footer__item"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelSalesChannel\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderSalesChannel\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_footer_payment_method %}\n        <sw-entity-single-select\n            v-model:value="context.paymentMethodId"\n            size="small"\n            entity="payment_method"\n            label-property="distinguishableName"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="paymentMethodCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelPaymentMethod\')"\n            :help-text="$tc(\'sw-order.createBase.detailsFooter.helpTextPaymentMethod\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderPaymentMethod\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_footer_shipping_method %}\n        <sw-entity-single-select\n            v-model:value="context.shippingMethodId"\n            size="small"\n            entity="shipping_method"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelShippingMethod\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderShippingMethod\')"\n        />\n        {% endblock %}\n    </div>\n\n    <div>\n        \n        {% block sw_order_create_details_footer_order_language %}\n        <sw-entity-single-select\n            v-model:value="context.languageId"\n            size="small"\n            entity="language"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelOrderLanguage\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderOrderLanguage\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_footer_currency %}\n        <sw-entity-single-select\n            v-model:value="context.currencyId"\n            size="small"\n            entity="currency"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelCurrency\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderCurrency\')"\n            show-clearable-button\n        />\n        {% endblock %}\n    </div>\n</sw-container>\n{% endblock %}\n',props:{cart:{type:Object,required:!0},customer:{type:Object,default:null},isCustomerActive:{type:Boolean,default:!1}},computed:{context:{get(){return this.customer?this.customer.salesChannel:{}},set(e){this.customer&&(this.customer.salesChannel=e)}},salesChannelId:{get(){return this.customer?this.customer.salesChannelId:null},set(e){this.customer&&(this.customer.salesChannelId=e)}},salesChannelCriteria(){let e=new s(1,25);return this.salesChannelId&&e.addFilter(s.equals("salesChannels.id",this.salesChannelId)),e},paymentMethodCriteria(){let e=new s(1,25);return this.salesChannelId&&e.addFilter(s.equals("salesChannels.id",this.salesChannelId)),e.addFilter(s.equals("afterOrderEnabled",1)),e},currencyRepository(){return a("repositoryFactory").create("currency")},currentCurrencyId(){return r.getters["swOrder/currencyId"]},defaultSalesChannel(){return r.get("swOrder").defaultSalesChannel},isCartTokenAvailable(){return r.getters["swOrder/isCartTokenAvailable"]}},watch:{context:{immediate:!0,deep:!0,handler(){this.customer&&this.cart.token&&(this.updateContext(),this.updateOrderContext())}},isCartTokenAvailable:{immediate:!0,handler(){this.isCartTokenAvailable&&this.customer&&this.updateOrderContext()}}},methods:{updateContext(){["currencyId","languageId","shippingMethodId","paymentMethodId"].forEach(e=>{this.context[e]=this.context[e]||this.defaultSalesChannel[e]})},updateOrderContext(){r.dispatch("swOrder/updateOrderContext",{context:this.context,salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).then(()=>{this.updateCustomerContext(),this.currentCurrencyId!==this.context.currencyId&&this.getCurrency()})},updateCustomerContext(){r.dispatch("swOrder/updateCustomerContext",{customerId:this.customer.id,salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).then(e=>{200===e.status&&this.getCart()})},getCart(){this.$emit("loading-change",!0),r.dispatch("swOrder/getCart",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).finally(()=>{this.$emit("loading-change",!1)})},getCurrency(){return this.currencyRepository.get(this.context.currencyId).then(e=>{r.commit("swOrder/setCurrency",e)})}}}}}]);