(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[312],{"/14Y":function(e,s,r){"use strict";r.r(s);var t=r("CsSd"),d=r.n(t),n=r("7yzw"),a=r.n(n),o=r("92Mt"),c=r.n(o),i=(r("UHhY"),Shopware),l=i.Mixin,u=i.State,m=i.Service,p=Shopware.Data.Criteria;s.default={template:'\n{% block sw_order_create_address_modal %}\n<sw-modal\n    :title="editAddressModalTitle"\n    class="sw-order-create-address-modal"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_order_create_address_modal_content %}\n    \n    {% block sw_order_create_address_form_modal %}\n    <sw-modal\n        v-if="showAddressFormModal"\n        :title="getAddressFormModalTitle()"\n        @modal-close="onCloseAddressModal"\n    >\n        \n        {% block sw_order_create_address_form_modal_content %}\n        <sw-customer-address-form\n            :address="currentAddress"\n            :customer="activeCustomer"\n            :disabled="isLoading"\n        >\n            <sw-customer-address-form-options\n                :address="currentAddress"\n                :customer="activeCustomer"\n                :custom-field-sets="[]"\n                @default-address-change="onChangeDefaultAddress"\n            />\n        </sw-customer-address-form>\n        {% endblock %}\n\n        \n        {% block sw_order_create_address_form_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_order_create_address_form_modal_cancel_button %}\n            <sw-button\n                size="small"\n                @click="onCloseAddressModal"\n            >\n                {{ $tc(\'sw-customer.detailAddresses.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_order_create_address_form_modal_apply_button %}\n            <sw-button\n                :is-loading="isLoading"\n                variant="primary"\n                size="small"\n                @click="onSubmitAddressForm"\n            >\n                {{ $tc(\'sw-customer.detailAddresses.buttonSaveAndSelect\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n    <sw-card\n        :is-loading="isLoading"\n        :large="true"\n        position-identifier="sw-order-create-address-modal"\n        class="sw-order-create-address-modal__card-filter"\n    >\n        \n        {% block sw_order_create_address_modal_toolbar %}\n        <template #toolbar>\n            <sw-card-filter\n                :placeholder="$tc(\'sw-order.addressSelection.searchAddressToolbarPlaceholder\')"\n                @sw-card-filter-term-change="onSearchAddress"\n            >\n                \n                {% block sw_order_create_address_modal_add_button %}\n                <template #filter>\n                    <sw-button\n                        class="sw-order-create-address-modal__add-btn"\n                        size="small"\n                        @click="onAddNewAddress"\n                    >\n                        <sw-icon\n                            name="regular-plus-circle-s"\n                            small\n                        />\n                        {{ $tc(\'sw-customer.detailAddresses.buttonAddAddress\') }}\n                    </sw-button>\n                </template>\n                {% endblock %}\n            </sw-card-filter>\n        </template>\n        {% endblock %}\n        \n        {% block sw_order_create_address_modal_empty_state %}\n        <template #grid>\n            <div\n                v-if="!isLoading && !addresses.length"\n                class="sw-order-create-address-modal__card is--empty"\n            >\n                <sw-empty-state\n                    :title="$tc(\'sw-order.addressSelection.emptySearchResults\')"\n                    :icon="\'regular-book-user\'"\n                >\n                    \n                    {% block sw_order_create_address_modal_empty_state_content %}\n                    <span></span>\n                    {% endblock %}\n                </sw-empty-state>\n            </div>\n            <div\n                v-for="(address, index) in addresses"\n                :key="address.id"\n                :class="{ \'is--selected\': isCurrentSelected(address.id)}"\n                class="sw-order-create-address-modal__card"\n            >\n                <div class="sw-order-create-address-modal__card-body">\n                    <span\n                        v-if="isCurrentSelected(address.id)"\n                        class="sw-order-create-address-modal__card-label"\n                    >\n                        {{ $tc(\'sw-order.addressSelection.currentlySelected\') }}<br><br>\n                    </span>\n                    <sw-address :address="address" />\n                    \n                    <a\n                        class="sw-order-create-address-modal__edit-btn"\n                        @click="onEditAddress(address)"\n                    >\n                        {{ $tc(\'sw-customer.detailBase.buttonTitleEditAddress\') }}\n                    </a>\n                </div>\n                <div class="sw-order-create-address-modal__select-btn">\n                    <sw-button\n                        v-if="!isCurrentSelected(address.id)"\n                        @click="onSelectExistingAddress(address)"\n                    >\n                        {{ $tc(\'sw-customer.detailAddresses.buttonSelect\') }}\n                    </sw-button>\n                </div>\n            </div>\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_address_modal_actions %}\n    <template #modal-footer>\n        \n        {% block sw_order_create_address_modal_cancel_button %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-customer.detailAddresses.buttonClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',mixins:[l.getByName("notification"),l.getByName("placeholder")],props:{customer:{type:Object,required:!0},address:{type:Object,required:!0},addAddressModalTitle:{type:String,required:!0},editAddressModalTitle:{type:String,required:!0},cart:{type:Object,required:!0}},data:function(){return{addresses:[],selectedAddressId:null,activeCustomer:this.customer,isLoading:!1,term:null,showAddressFormModal:!1,defaultAddressIdMapping:{"billing-address":"defaultBillingAddressId","shipping-address":"defaultShippingAddressId"},currentAddress:null}},computed:{addressCriteria:function(){var e=new p(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),this.term&&e.setTerm(this.term),e},customerRepository:function(){return m("repositoryFactory").create("customer")},addressRepository:function(){return m("repositoryFactory").create(this.activeCustomer.addresses.entity,this.activeCustomer.addresses.source)},isValidCompanyField:function(){var e;return null!==this.customer.company&&!(null===(e=this.currentAddress.company)||void 0===e||!e.trim().length)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;return a()(c.a.mark((function s(){return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.getCustomerAddresses();case 2:case"end":return s.stop()}}),s)})))()},getCustomerAddresses:function(){var e=this;return a()(c.a.mark((function s(){return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.isLoading=!0,s.prev=1,s.next=4,e.addressRepository.search(e.addressCriteria);case 4:return e.addresses=s.sent,e.selectedAddressId=e.activeCustomer[e.address.contextId]||e.activeCustomer[e.address.contextDataDefaultId],s.next=8,Shopware.State.dispatch("error/resetApiErrors");case 8:s.next=13;break;case 10:s.prev=10,s.t0=s.catch(1),e.createNotificationError({message:e.$tc("sw-order.create.messageFetchCustomerAddressesError")});case 13:return s.prev=13,e.isLoading=!1,s.finish(13);case 16:case"end":return s.stop()}}),s,null,[[1,10,13,16]])})))()},onNewActiveItem:function(){this.selectedAddressId=null},isCurrentSelected:function(e){return this.selectedAddressId===e},onSearchAddress:function(e){var s=this;return a()(c.a.mark((function r(){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s.term=e,r.next=3,s.getCustomerAddresses();case 3:case"end":return r.stop()}}),r)})))()},onSelectExistingAddress:function(e){var s=this;return a()(c.a.mark((function r(){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s.selectedAddressId=e.id,r.next=3,s.onSave();case 3:case"end":return r.stop()}}),r)})))()},findSelectedAddress:function(){var e=this;return this.addresses.find((function(s){return s.id===e.selectedAddressId}))},updateOrderContext:function(){var e=this;return a()(c.a.mark((function s(){var r,t,n;return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.findSelectedAddress(),r={},d()(r,e.address.contextId,t.id),d()(r,e.address.contextDataKey,t),d()(r,e.address.contextDataDefaultId,t[e.address.contextDataDefaultId]),n=r,s.next=4,u.dispatch("swOrder/updateOrderContext",{context:n,salesChannelId:e.activeCustomer.salesChannelId,contextToken:e.cart.token});case 4:e.$emit("set-customer-address",{contextId:e.address.contextId,contextDataKey:e.address.contextDataKey,data:t});case 5:case"end":return s.stop()}}),s)})))()},saveCurrentCustomer:function(){var e=this;return a()(c.a.mark((function s(){return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.hasOwnProperty("defaultShippingAddressId")&&(e.activeCustomer.defaultShippingAddressId=e.defaultShippingAddressId),e.hasOwnProperty("defaultBillingAddressId")&&(e.activeCustomer.defaultBillingAddressId=e.defaultBillingAddressId),s.abrupt("return",e.customerRepository.save(e.activeCustomer));case 3:case"end":return s.stop()}}),s)})))()},saveCurrentAddress:function(){var e=this;return a()(c.a.mark((function s(){var r;return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(e.selectedAddressId=e.currentAddress.id,e.currentAddress.isNew()&&e.addresses.push(e.currentAddress),e.isValidCompanyField){s.next=7;break}return r=new Shopware.Classes.ShopwareError({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"}),s.next=6,Shopware.State.dispatch("error/addApiError",{expression:"customer_address.".concat(e.currentAddress.id,".company"),error:r});case 6:return s.abrupt("return",Promise.reject(r));case 7:return s.abrupt("return",e.addressRepository.save(e.currentAddress));case 8:case"end":return s.stop()}}),s)})))()},closeModal:function(){this.$emit("close-modal")},onCancel:function(){this.closeModal()},onSave:function(){var e=this;return a()(c.a.mark((function s(){return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.isLoading=!0,s.prev=1,s.next=4,e.updateOrderContext();case 4:e.closeModal(),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(1),e.createNotificationError({message:e.$tc("sw-order.detail.messageSaveError")});case 10:return s.prev=10,e.isLoading=!1,s.finish(10);case 13:case"end":return s.stop()}}),s,null,[[1,7,10,13]])})))()},onCloseAddressModal:function(){this.showAddressFormModal=!1},onAddNewAddress:function(){this.createNewCustomerAddress(),this.showAddressFormModal=!0},onEditAddress:function(e){this.currentAddress=e,this.showAddressFormModal=!0},onChangeDefaultAddress:function(e){e.value&&(this[this.defaultAddressIdMapping[e.name]]=e.id)},onSubmitAddressForm:function(){var e=this;return a()(c.a.mark((function s(){return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,e.isLoading=!0,null!==e.currentAddress){s.next=4;break}return s.abrupt("return");case 4:return s.next=6,e.saveCurrentAddress();case 6:return s.next=8,e.saveCurrentCustomer();case 8:return s.next=10,e.updateOrderContext();case 10:return s.next=12,e.getCustomerAddresses();case 12:e.currentAddress=null,e.showAddressFormModal=!1,s.next=19;break;case 16:s.prev=16,s.t0=s.catch(0),e.createNotificationError({message:e.$tc("sw-order.detail.messageSaveError")});case 19:return s.prev=19,e.isLoading=!1,s.finish(19);case 22:case"end":return s.stop()}}),s,null,[[0,16,19,22]])})))()},getAddressFormModalTitle:function(){return!this.currentAddress||this.currentAddress.isNew()?this.addAddressModalTitle:this.editAddressModalTitle},createNewCustomerAddress:function(){var e=this.addressRepository.create();e.customerId=this.activeCustomer.id,this.currentAddress=e}}}},PfnV:function(e,s,r){},UHhY:function(e,s,r){var t=r("PfnV");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,r("P8hj").default)("66a34c74",t,!0,{})}}]);