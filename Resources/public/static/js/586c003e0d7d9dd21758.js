(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[562],{TNAd:function(e,s,d){"use strict";d.r(s);s.default={template:'\n{% block sw_order_create_details_body %}\n<sw-container\n    class="sw-order-create-details-body"\n    columns="minmax(min-content, 1fr) minmax(min-content, 1fr)"\n    gap="0 32px"\n>\n    <div>\n        \n        {% block sw_order_create_details_body_email %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="email"\n            {% else %}\n            v-model="email"\n            {% endif %}\n            disabled\n            size="small"\n            class="sw-order-create-details-body__item"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelEmail\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholderEmail\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_body_billing_address %}\n        <div\n            v-if="isCustomerActive"\n            class="sw-order-create-details-body__item is-billing"\n        >\n            <p class="sw-order-create-details-body__item-label">\n                {{ $tc(\'sw-order.createBase.detailsBody.labelBillingAddress\') }}\n                <sw-button\n                    class="sw-order-create-details-body__item-label-button"\n                    @click="onEditBillingAddress"\n                >\n                    {{ $tc(\'sw-order.detailBase.buttonEditAddress\') }}\n                </sw-button>\n            </p>\n            <sw-address :address="billingAddress" />\n        </div>\n        <sw-textarea-field\n            v-else\n            disabled\n            class="sw-order-create-details-body__item"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelBillingAddress\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholder\')"\n        />\n        {% endblock %}\n    </div>\n\n    <div>\n        \n        {% block sw_order_create_details_body_phone_number %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="phoneNumber"\n            {% else %}\n            v-model="phoneNumber"\n            {% endif %}\n            disabled\n            size="small"\n            class="sw-order-create-details-body__item"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelPhoneNumber\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholderPhoneNumber\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_body_shipping_address %}\n        <div\n            v-if="isCustomerActive"\n            class="sw-order-create-details-body__item is-shipping"\n        >\n            <template v-if="isAddressIdentical">\n                \n                {% block sw_order_create_details_body_shipping_address_identical %}\n                <p class="sw-order-create-details-body__item-label">\n                    {{ $tc(\'sw-order.createBase.detailsBody.labelShippingAddress\') }}\n                    <sw-button\n                        class="sw-order-create-details-body__item-label-button"\n                        @click="onEditShippingAddress"\n                    >\n                        {{ $tc(\'sw-order.detailBase.buttonEditAddress\') }}\n                    </sw-button>\n                </p>\n                <div class="sw-order-create-details-body__address-identical">\n                    <span class="sw-order-create-details-body__address-identical-text">\n                        {{ $tc(\'sw-order.createBase.detailsBody.textIdentical\') }}\n                    </span>\n                </div>\n                {% endblock %}\n            </template>\n            <template v-else>\n                \n                {% block sw_order_create_details_body_shipping_address_content %}\n                <p class="sw-order-create-details-body__item-label">\n                    {{ $tc(\'sw-order.createBase.detailsBody.labelShippingAddress\') }}\n                    <sw-button\n                        class="sw-order-create-details-body__item-label-button"\n                        @click="onEditShippingAddress"\n                    >\n                        {{ $tc(\'sw-order.detailBase.buttonEditAddress\') }}\n                    </sw-button>\n                </p>\n                <sw-address :address="shippingAddress" />\n                {% endblock %}\n            </template>\n        </div>\n        <sw-textarea-field\n            v-else\n            disabled\n            class="sw-order-create-details-body__item"\n            :label="$tc(\'sw-order.createBase.detailsBody.labelShippingAddress\')"\n            :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholder\')"\n        />\n        {% endblock %}\n    </div>\n</sw-container>\n{% endblock %}\n',props:{customer:{type:Object},isCustomerActive:{type:Boolean,default:!1}},computed:{email:{get:function(){return this.customer?this.customer.email:null},set:function(e){this.customer&&(this.customer.email=e)}},phoneNumber:{get:function(){return this.customer?this.customer.defaultBillingAddress.phoneNumber:null},set:function(e){this.customer&&(this.customer.defaultBillingAddress.phoneNumber=e)}},billingAddress:{get:function(){if(this.customer){var e=this.customer,s=e.billingAddress,d=e.defaultBillingAddress;return s||d}return null},set:function(e){this.customer&&(this.customer.billingAddress=e)}},shippingAddress:{get:function(){if(this.customer){var e=this.customer,s=e.shippingAddress,d=e.defaultShippingAddress;return s||d}return null},set:function(e){this.customer&&(this.customer.shippingAddress=e)}},isAddressIdentical:function(){var e,s;return(null===(e=this.shippingAddress)||void 0===e?void 0:e.id)===(null===(s=this.billingAddress)||void 0===s?void 0:s.id)}},methods:{onEditBillingAddress:function(){this.$emit("on-edit-billing-address")},onEditShippingAddress:function(){this.$emit("on-edit-shipping-address")}}}}}]);
//# sourceMappingURL=586c003e0d7d9dd21758.js.map