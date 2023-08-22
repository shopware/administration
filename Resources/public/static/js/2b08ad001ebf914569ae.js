(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[311],{"5L3s":function(e,s,t){var r=t("Txe4");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t("P8hj").default)("10052f90",r,!0,{})},BSQ5:function(e,s,t){"use strict";t.r(s);var r=t("CsSd"),d=t.n(r),n=t("2wIO");t("5L3s");function i(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?i(Object(t),!0).forEach((function(s){d()(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}var a=Shopware,c=a.EntityDefinition,l=a.Mixin,u=Shopware.Data.Criteria,m=Shopware.Component.getComponentHelper().mapState,h=Shopware.Utils.object.cloneDeep;s.default={template:'\n{% block sw_order_address_selection %}\n<div class="sw-order-address">\n    \n    {% block sw_order_address_selection_modal %}\n    <sw-modal\n        v-if="currentAddress"\n        :title="modalTitle"\n        @modal-close="currentAddress = null"\n    >\n        \n        {% block sw_order_address_modal_content %}\n        <sw-customer-address-form\n            :address="currentAddress"\n            :customer="customer"\n        >\n            <sw-customer-address-form-options\n                v-if="currentAddress._isNew"\n                :address="currentAddress"\n                :customer="customer"\n                :custom-field-sets="customerAddressCustomFieldSets"\n                @default-address-change="onChangeDefaultAddress"\n            />\n        </sw-customer-address-form>\n        {% endblock %}\n\n        \n        {% block sw_order_address_modal_actions %}\n        <template #modal-footer>\n            \n            {% block sw_order_address_modal_action_close %}\n            <sw-button\n                size="small"\n                @click="currentAddress = null"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_order_address_modal_actions_apply %}\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="onSaveAddress"\n            >\n                {{ $tc(\'global.default.apply\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_order_address_selection_entity_single_select %}\n    <sw-single-select\n        :value="addressId"\n        class="sw-order-address-selection"\n        :options="addressOptions"\n        value-property="id"\n        :label="label"\n        :placeholder="$tc(\'sw-order.createBase.detailsBody.placeholderAddress\')"\n        :popover-classes="[\'sw-order-address-selection__popover\']"\n        :disabled="disabled"\n        @change="onAddressChange"\n    >\n        <template #before-item-list>\n            <ul class="sw-select-result__item-list">\n                \n                <li\n                    class="sw-select-result sw-select-result__add-new-address"\n                    @click="onCreateNewAddress"\n                >\n                    {{ $tc(\'sw-order.createBase.detailsBody.buttonAddNewAddress\') }}\n                </li>\n            </ul>\n        </template>\n\n        <template #result-item="{ item, index, labelProperty, isSelected }">\n            <li\n                is="sw-select-result"\n                :selected="isSelected(item)"\n                v-bind="{ item, index }"\n                :class="{\'sw-order-address-selection__order-address\': isSelected(item)}"\n            >\n                <div class="sw-order-address-selection__information">\n                    <p>{{ item.firstName }} {{ item.lastName }}</p>\n                    <p class="text-gray">\n                        {{ item.street }}\n                    </p>\n                    <p class="text-gray">\n                        {{ item.zipcode }} {{ item.city }}\n                    </p>\n                </div>\n\n                <div class="sw-order-address-selection__edit-action">\n                    <sw-context-menu-item @click="onEditAddress(item.id)">\n                        {{ $tc(\'global.default.edit\') }}\n                    </sw-context-menu-item>\n                </div>\n            </li>\n        </template>\n    </sw-single-select>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[l.getByName("notification")],props:{address:{type:Object,required:!1,default:function(){}},label:{type:String,required:!1,default:""},addressId:{type:String,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:""}},data:function(){var e;return{customer:{},currentAddress:null,customerAddressCustomFieldSets:null,orderAddressId:h(null===(e=this.address)||void 0===e?void 0:e.id)}},computed:o(o({},m("swOrderDetail",["order","versionContext"])),{},{orderCustomer:function(){return this.order.orderCustomer},orderRepository:function(){return this.repositoryFactory.create("order")},addressRepository:function(){return this.repositoryFactory.create(this.customer.addresses.entity,this.customer.addresses.source)},customerRepository:function(){return this.repositoryFactory.create("customer")},customerCriteria:function(){var e=new u(1,25);return e.addAssociation("addresses"),e},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria:function(){var e=new u(1,25);return e.addFilter(u.equals("relations.entityName","customer_address")).addAssociation("customFields"),e},addressOptions:function(){var e,s=((null===(e=this.customer)||void 0===e?void 0:e.addresses)||[]).map((function(e){return o({label:"".concat(e.street,", ").concat(e.zipcode," ").concat(e.city)},e)}));return this.address&&s.unshift(o({label:"".concat(this.address.street,", ").concat(this.address.zipcode," ").concat(this.address.city)},this.address)),s},modalTitle:function(){var e;return this.$tc("sw-order.addressSelection.".concat(null!==(e=this.currentAddress)&&void 0!==e&&e._isNew?"modalTitleEditAddress":"modalTitleSelectAddress"))},selectedAddressId:function(){var e,s;return null!==(e=null===(s=this.address)||void 0===s?void 0:s.customerAddressId)&&void 0!==e?e:this.addressId}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getCustomer(),this.getCustomFieldSet()},onEditAddress:function(e){if(this.orderAddressId=e,e!==this.address.id){var s=this.addressRepository.create(Shopware.Context.api,e);this.currentAddress=Object.assign(s,this.customer.addresses.get(e))}else this.currentAddress=this.address},onCreateNewAddress:function(){this.createNewCustomerAddress()},createNewCustomerAddress:function(){var e=this.addressRepository.create();e.customerId=this.customer.id,this.currentAddress=e},onSaveAddress:function(){var e,s=this;if(null===this.currentAddress)return Promise.resolve();if(this.currentAddress.id===this.address.id)return this.orderRepository.save(this.order,this.versionContext).then((function(){s.currentAddress=null})).catch((function(){s.createNotificationError({message:s.$tc("sw-order.detail.messageSaveError")})}));if(!this.isValidAddress(this.currentAddress))return this.createNotificationError({message:this.$tc("sw-customer.notification.requiredFields")}),Promise.reject();var t=null!==(e=this.customer.addresses.get(this.currentAddress.id))&&void 0!==e?e:this.addressRepository.create(Shopware.Context.api,this.currentAddress.id);return Object.assign(t,this.currentAddress),this.customer.addresses.has(t.id)&&this.customer.addresses.remove(t.id),this.customer.addresses.push(t),this.customerRepository.save(this.customer).then((function(){s.currentAddress=null}))},isValidAddress:function(e){var s=["createdAt"];return Object.keys(c.getRequiredFields("customer_address")).every((function(t){return-1!==s.indexOf(t)||Object(n.c)(e[t])}))},onChangeDefaultAddress:function(e){if(!e.value)return this.hasOwnProperty("defaultShippingAddressId")&&(this.customer.defaultShippingAddressId=this.defaultShippingAddressId),void(this.hasOwnProperty("defaultBillingAddressId")&&(this.customer.defaultBillingAddressId=this.defaultBillingAddressId));var s=this.createPrefix(e.name,"-address"),t="default".concat(s,"AddressId");this[t]=this.customer[t],this.customer[t]=e.id},createPrefix:function(e,s){var t=e.replace(s,"");return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))},onAddressChange:function(e){this.$emit("change-address",{orderAddressId:this.addressId,customerAddressId:e,type:this.type})},getCustomer:function(){var e=this;return this.orderCustomer.customerId?this.customerRepository.get(this.orderCustomer.customerId,Shopware.Context.api,this.customerCriteria).then((function(s){e.customer=s})):Promise.reject()},getCustomFieldSet:function(){var e=this;return this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(s){e.customerAddressCustomFieldSets=s}))}}}},Txe4:function(e,s,t){}}]);