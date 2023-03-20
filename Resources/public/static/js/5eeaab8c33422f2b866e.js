(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[558],{vHph:function(e,t,n){"use strict";n.r(t);var r=Shopware,a=r.State,s=r.Service,o=Shopware.Data.Criteria;t.default={template:'\n{% block sw_order_create_details_footer %}\n<sw-container\n    class="sw-order-create-details-footer"\n    columns="minmax(min-content, 1fr) minmax(min-content, 1fr)"\n    gap="0 32px"\n>\n    <div>\n        \n        {% block sw_order_create_details_footer_sales_channel %}\n        <sw-entity-single-select\n            v-model="salesChannelId"\n            disabled\n            size="small"\n            entity="sales_channel"\n            class="sw-order-create-details-footer__item"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelSalesChannel\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderSalesChannel\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_footer_payment_method %}\n        <sw-entity-single-select\n            v-model="context.paymentMethodId"\n            size="small"\n            entity="payment_method"\n            label-property="distinguishableName"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="paymentMethodCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelPaymentMethod\')"\n            :help-text="$tc(\'sw-order.createBase.detailsFooter.helpTextPaymentMethod\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderPaymentMethod\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_footer_shipping_method %}\n        <sw-entity-single-select\n            v-model="context.shippingMethodId"\n            size="small"\n            entity="shipping_method"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelShippingMethod\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderShippingMethod\')"\n        />\n        {% endblock %}\n    </div>\n\n    <div>\n        \n        {% block sw_order_create_details_footer_order_language %}\n        <sw-entity-single-select\n            v-model="context.languageId"\n            size="small"\n            entity="language"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelOrderLanguage\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderOrderLanguage\')"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_footer_currency %}\n        <sw-entity-single-select\n            v-model="context.currencyId"\n            size="small"\n            entity="currency"\n            class="sw-order-create-details-footer__item"\n            :disabled="!isCustomerActive"\n            :criteria="salesChannelCriteria"\n            :label="$tc(\'sw-order.createBase.detailsFooter.labelCurrency\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsFooter.placeholderCurrency\')"\n            show-clearable-button\n        />\n        {% endblock %}\n    </div>\n</sw-container>\n{% endblock %}\n',props:{cart:{type:Object,required:!0},customer:{type:Object,default:null},isCustomerActive:{type:Boolean,default:!1}},computed:{context:{get:function(){return this.customer?this.customer.salesChannel:{}},set:function(e){this.customer&&(this.customer.salesChannel=e)}},salesChannelId:{get:function(){return this.customer?this.customer.salesChannelId:null},set:function(e){this.customer&&(this.customer.salesChannelId=e)}},salesChannelCriteria:function(){var e=new o(1,25);return this.salesChannelId&&e.addFilter(o.equals("salesChannels.id",this.salesChannelId)),e},paymentMethodCriteria:function(){var e=new o(1,25);return this.salesChannelId&&e.addFilter(o.equals("salesChannels.id",this.salesChannelId)),e.addFilter(o.equals("afterOrderEnabled",1)),e},currencyRepository:function(){return s("repositoryFactory").create("currency")},currentCurrencyId:function(){return a.getters["swOrder/currencyId"]},defaultSalesChannel:function(){return a.get("swOrder").defaultSalesChannel},isCartTokenAvailable:function(){return a.getters["swOrder/isCartTokenAvailable"]}},watch:{context:{immediate:!0,deep:!0,handler:function(){this.customer&&this.cart.token&&(this.updateContext(),this.updateOrderContext())}},isCartTokenAvailable:{immediate:!0,handler:function(){this.isCartTokenAvailable&&this.customer&&this.updateOrderContext()}}},methods:{updateContext:function(){var e=this;["currencyId","languageId","shippingMethodId","paymentMethodId"].forEach((function(t){e.context[t]=e.context[t]||e.defaultSalesChannel[t]}))},updateOrderContext:function(){var e=this;a.dispatch("swOrder/updateOrderContext",{context:this.context,salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).then((function(){e.updateCustomerContext(),e.currentCurrencyId!==e.context.currencyId&&e.getCurrency()}))},updateCustomerContext:function(){var e=this;a.dispatch("swOrder/updateCustomerContext",{customerId:this.customer.id,salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).then((function(t){200===t.status&&e.getCart()}))},getCart:function(){var e=this;this.$emit("loading-change",!0),a.dispatch("swOrder/getCart",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token}).finally((function(){e.$emit("loading-change",!1)}))},getCurrency:function(){return this.currencyRepository.get(this.context.currencyId).then((function(e){a.commit("swOrder/setCurrency",e)}))}}}}}]);