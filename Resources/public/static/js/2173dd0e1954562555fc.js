(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[310],{"72kV":function(e,t,s){"use strict";s.r(t);s("Il/u");var n=Shopware.Mixin,r=Shopware.Data.Criteria;t.default={template:'\n{% block sw_order_address_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.addressSelection.modalTitleEditAddress\')"\n    :is-loading="isLoading"\n    @modal-close="onClose"\n>\n    \n    {% block sw_order_address_modal_content %}\n    <sw-tabs\n        class="sw-order-address-modal"\n        position-identifier="sw-order-address-modal"\n        default-item="edit"\n        @new-item-active="onNewActiveItem"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_order_address_modal_tabs %}\n            \n            {% block sw_order_address_modal_tab_edit_address %}\n            <sw-tabs-item\n                name="edit"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-order.addressSelection.headlineTabEditAddress\') }}\n            </sw-tabs-item>\n            {%  endblock %}\n            \n            {% block sw_order_address_modal_tab_select_address %}\n            <sw-tabs-item\n                name="addresses"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-order.addressSelection.headlineTabSelectAddress\') }}\n            </sw-tabs-item>\n            {% endblock %}\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            \n            {% block sw_order_address_modal_tabs_content %}\n            <div v-if="active===\'edit\'">\n                \n                {% block sw_order_address_modal_tabs_content_edit_address %}\n                <sw-customer-address-form\n                    :address="address"\n                    :customer="orderCustomer"\n                    :countries="countries"\n                />\n                <sw-custom-field-set-renderer\n                    :entity="address"\n                    variant="tabs"\n                    :sets="addressCustomFieldSets"\n                />\n                {% endblock %}\n            </div>\n            <div v-if="active===\'addresses\'">\n                \n                {% block sw_order_address_modal_tabs_content_select_address %}\n                <sw-button\n                    v-for="address in availableAddresses"\n                    :key="address.id"\n                    block\n                    :class="addressButtonClasses(address.id)"\n                    @click="onExistingAddressSelected(address)"\n                >\n                    {{ address.company }} <br>\n                    {{ salutationFilter(address) }}<br>\n                    {{ address.street }} <br>\n                    {{ address.zipcode }} {{ address.city }}<br>\n                    {{ placeholder(address.country, \'name\') }}<br>\n                </sw-button>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_order_address_modal_actions %}\n    <template #modal-footer>\n        \n        {% block sw_order_address_modal_action_close %}\n        <sw-button\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'sw-customer.detailAddresses.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_address_modal_actions_apply %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-customer.detailAddresses.buttonApply\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n\n',inject:["repositoryFactory"],mixins:[n.getByName("notification"),n.getByName("placeholder")],props:{address:{type:Object,required:!0,default:function(){}},countries:{type:Array,required:!0,default:function(){return[]}},order:{type:Object,required:!0,default:function(){}},versionContext:{type:Object,required:!0,default:function(){}}},data:function(){return{availableAddresses:[],selectedAddressId:0,isLoading:!1,addressCustomFieldSets:[]}},computed:{customerCriteria:function(){var e=new r(1,1);return e.setIds([this.orderCustomer.customerId]),e.addAssociation("addresses"),e},customFieldSetCriteria:function(){var e=new r(1,null);return e.addFilter(r.equals("relations.entityName","customer_address")),e.addAssociation("customFields"),e},customerRepository:function(){return this.repositoryFactory.create("customer")},orderRepository:function(){return this.repositoryFactory.create("order")},orderCustomer:function(){return this.order.orderCustomer},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},salutationFilter:function(){return Shopware.Filter.getByName("salutation")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.orderCustomer&&this.orderCustomer.customerId&&this.getCustomerInfo(),this.getCustomFieldSetData()},getCustomerInfo:function(){var e=this;this.isLoading=!0,this.customerRepository.search(this.customerCriteria).then((function(t){return e.availableAddresses=t[0].addresses,Shopware.State.dispatch("error/resetApiErrors")})).finally((function(){e.isLoading=!1}))},onNewActiveItem:function(){this.selectedAddressId=0},addressButtonClasses:function(e){return"sw-order-address-modal__entry".concat(e===this.selectedAddressId?" sw-order-address-modal__entry__selected":"")},onExistingAddressSelected:function(e){this.selectedAddressId=e.id},onClose:function(){this.$emit("reset")},onSave:function(){var e=this;this.isLoading=!0;var t=this.order.addresses[0].country.shippingAvailable;if(!t&&"boolean"==typeof t)return this.createNotificationError({message:this.$tc("sw-order.detail.messageShippingNotAvailable")}),void(this.isLoading=!1);new Promise((function(t){if(0!==e.selectedAddressId){var s=e.availableAddresses.find((function(t){return t.id===e.selectedAddressId}));e.$emit("address-select",s),t()}else e.orderRepository.save(e.order,e.versionContext).then((function(){e.$emit("save")})).catch((function(){e.createNotificationError({message:e.$tc("sw-order.detail.messageSaveError")})})).finally((function(){t()}))})).finally((function(){e.isLoading=!1}))},getCustomFieldSetData:function(){var e=this;this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){e.addressCustomFieldSets=t}))}}}},ILt1:function(e,t,s){},"Il/u":function(e,t,s){var n=s("ILt1");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("P8hj").default)("27056879",n,!0,{})}}]);