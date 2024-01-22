(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[80432],{95732:function(){},80432:function(e,d,r){"use strict";r.r(d),r.d(d,{default:function(){return n}}),r(24972);var n={template:'\n{% block sw_order_delivery_metadata %}\n<sw-card\n    class="sw-order-delivery-metadata"\n    position-identifier="sw-order-delivery-metadata"\n    :title="title"\n    :is-loading="isLoading"\n>\n    \n    {% block sw_order_delivery_metadata_deliveries %}\n    <sw-container\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        gap="0 30px"\n    >\n        \n        {% block sw_order_delivery_metadata_deliveries_data %}\n        <sw-description-list>\n            \n            {% block sw_order_delivery_metadata_shipping_method %}\n            <dt>{{ $tc(\'sw-order.detailDeliveries.labelShippingMethod\') }}</dt>\n            <dd>{{ delivery.shippingMethod.translated.name }}</dd>\n            {% endblock %}\n\n            \n            {% block sw_order_delivery_metadata_delivery_date %}\n            <dt>{{ $tc(\'sw-order.detailDeliveries.labelDeliveryDate\') }}</dt>\n            <dd>{{ dateFilter(delivery.shippingDateEarliest) }}</dd>\n            {% endblock %}\n\n            \n            {% block sw_order_delivery_metadata_shipping_costs %}\n            <dt>{{ $tc(\'sw-order.detailDeliveries.labelShippingCosts\') }}</dt>\n            <dd>{{ currencyFilter(order.shippingTotal, order.currency.shortName) }}</dd>\n            {% endblock %}\n\n            \n            {% block sw_order_delivery_metadata_slot %}\n            {% endblock %}\n\n        </sw-description-list>\n        {% endblock %}\n        \n        {% block sw_order_delivery_metadata_shipping_address %}\n        <sw-description-list>\n            <sw-address\n                class="sw-order-delivery-metdata__address"\n                :headline="$tc(\'sw-order.detailBase.headlineDeliveryAddress\')"\n                :address="delivery.shippingOrderAddress"\n                :formatting-address="formattingAddress"\n            />\n            \n            {% block sw_order_delivery_metadata_delivery_phone_number %}\n            <dt>{{ $tc(\'sw-order.detailBase.labelCustomerPhoneNumber\') }}</dt>\n            <dd v-if="delivery.shippingOrderAddress.phoneNumber">\n                {{ delivery.shippingOrderAddress.phoneNumber }}\n            </dd>\n            <dd v-else>\n                {{ $tc(\'sw-order.detailBase.labelNoPhoneNumber\') }}\n            </dd>\n            {% endblock %}\n        </sw-description-list>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["customSnippetApiService"],props:{delivery:{type:Object,required:!0,default:()=>{}},order:{type:Object,required:!0,default:()=>{}},title:{type:String,required:!1,default:null},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{formattingAddress:""}},computed:{currencyFilter(){return Shopware.Filter.getByName("currency")},dateFilter(){return Shopware.Filter.getByName("date")}},created(){this.createdComponent()},methods:{createdComponent(){this.renderFormattingAddress()},renderFormattingAddress(){this.customSnippetApiService.render(this.delivery.shippingOrderAddress,this.delivery.shippingOrderAddress.country.addressFormat).then(e=>{this.formattingAddress=e.rendered})}}}},24972:function(e,d,r){var n=r(95732);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),r(45346).Z("318d58b7",n,!0,{})}}]);