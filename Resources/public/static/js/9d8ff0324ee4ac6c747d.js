(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[79236],{32233:function(){},79236:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}}),t(62819);let{Mixin:d}=Shopware,{Criteria:r}=Shopware.Data;var n={template:'\n{% block sw_order_address_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.addressSelection.modalTitleEditAddress\')"\n    :is-loading="isLoading"\n    @modal-close="onClose"\n>\n    \n    {% block sw_order_address_modal_content %}\n    <sw-tabs\n        class="sw-order-address-modal"\n        position-identifier="sw-order-address-modal"\n        default-item="edit"\n        @new-item-active="onNewActiveItem"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_order_address_modal_tabs %}\n            \n            {% block sw_order_address_modal_tab_edit_address %}\n            <sw-tabs-item\n                name="edit"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-order.addressSelection.headlineTabEditAddress\') }}\n            </sw-tabs-item>\n            {%  endblock %}\n            \n            {% block sw_order_address_modal_tab_select_address %}\n            <sw-tabs-item\n                name="addresses"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-order.addressSelection.headlineTabSelectAddress\') }}\n            </sw-tabs-item>\n            {% endblock %}\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            \n            {% block sw_order_address_modal_tabs_content %}\n            <div v-if="active===\'edit\'">\n                \n                {% block sw_order_address_modal_tabs_content_edit_address %}\n                <sw-customer-address-form\n                    :address="address"\n                    :customer="orderCustomer"\n                    :countries="countries"\n                />\n                <sw-custom-field-set-renderer\n                    :entity="address"\n                    variant="tabs"\n                    :sets="addressCustomFieldSets"\n                />\n                {% endblock %}\n            </div>\n            <div v-if="active===\'addresses\'">\n                \n                {% block sw_order_address_modal_tabs_content_select_address %}\n                <sw-button\n                    v-for="address in availableAddresses"\n                    :key="address.id"\n                    block\n                    :class="addressButtonClasses(address.id)"\n                    @click="onExistingAddressSelected(address)"\n                >\n                    {{ address.company }} <br>\n                    {{ salutationFilter(address) }}<br>\n                    {{ address.street }} <br>\n                    {{ address.zipcode }} {{ address.city }}<br>\n                    {{ placeholder(address.country, \'name\') }}<br>\n                </sw-button>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_order_address_modal_actions %}\n    <template #modal-footer>\n        \n        {% block sw_order_address_modal_action_close %}\n        <sw-button\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'sw-customer.detailAddresses.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_address_modal_actions_apply %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-customer.detailAddresses.buttonApply\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n\n',inject:["repositoryFactory"],mixins:[d.getByName("notification"),d.getByName("placeholder")],props:{address:{type:Object,required:!0,default:()=>{}},countries:{type:Array,required:!0,default(){return[]}},order:{type:Object,required:!0,default:()=>{}},versionContext:{type:Object,required:!0,default:()=>{}}},data(){return{availableAddresses:[],selectedAddressId:0,isLoading:!1,addressCustomFieldSets:[]}},computed:{customerCriteria(){let e=new r(1,1);return e.setIds([this.orderCustomer.customerId]),e.addAssociation("addresses"),e},customFieldSetCriteria(){let e=new r(1,null);return e.addFilter(r.equals("relations.entityName","customer_address")),e.addAssociation("customFields"),e},customerRepository(){return this.repositoryFactory.create("customer")},orderRepository(){return this.repositoryFactory.create("order")},orderCustomer(){return this.order.orderCustomer},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},salutationFilter(){return Shopware.Filter.getByName("salutation")}},created(){this.createdComponent()},methods:{createdComponent(){this.orderCustomer&&this.orderCustomer.customerId&&this.getCustomerInfo(),this.getCustomFieldSetData()},getCustomerInfo(){this.isLoading=!0,this.customerRepository.search(this.customerCriteria).then(e=>(this.availableAddresses=e[0].addresses,Shopware.State.dispatch("error/resetApiErrors"))).finally(()=>{this.isLoading=!1})},onNewActiveItem(){this.selectedAddressId=0},addressButtonClasses(e){return`sw-order-address-modal__entry${e===this.selectedAddressId?" sw-order-address-modal__entry__selected":""}`},onExistingAddressSelected(e){this.selectedAddressId=e.id},onClose(){this.$emit("reset")},onSave(){this.isLoading=!0;let e=this.order.addresses[0].country.shippingAvailable;if(!e&&"boolean"==typeof e){this.createNotificationError({message:this.$tc("sw-order.detail.messageShippingNotAvailable")}),this.isLoading=!1;return}new Promise(e=>{if(0!==this.selectedAddressId){let s=this.availableAddresses.find(e=>e.id===this.selectedAddressId);this.$emit("address-select",s),e()}else this.orderRepository.save(this.order,this.versionContext).then(()=>{this.$emit("save")}).catch(()=>{this.createNotificationError({message:this.$tc("sw-order.detail.messageSaveError")})}).finally(()=>{e()})}).finally(()=>{this.isLoading=!1})},getCustomFieldSetData(){this.customFieldSetRepository.search(this.customFieldSetCriteria).then(e=>{this.addressCustomFieldSets=e})}}}},62819:function(e,s,t){var d=t(32233);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals),t(45346).Z("66bdc363",d,!0,{})}}]);