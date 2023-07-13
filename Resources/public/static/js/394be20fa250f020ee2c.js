(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[317],{Liuq:function(e,t,s){"use strict";s.r(t);s("QVFZ");var r=Shopware.Component,i=Shopware.Data.Criteria;t.default=r.wrapComponentConfig({template:'<sw-single-select\n    v-model="addressId"\n    v-bind="$attrs"\n    class="sw-order-customer-address-select"\n    value-property="id"\n    required\n    disable-search-function\n    :is-loading="isLoading"\n    :options="customerAddresses"\n    :disabled="disabled"\n    @search="searchAddress"\n>\n    <template #selection-label-property="{ item }">\n        {{ getSelectionLabel(item) }}\n    </template>\n\n    <template #result-item="{ item, index, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }">\n        <li\n            is="sw-select-result"\n            :selected="isSelected(item)"\n            v-bind="{ item, index }"\n            @item-select="setValue"\n        >\n            <sw-highlight-text\n                v-if="highlightSearchTerm && !isSelected(item)"\n                :text="getCustomerAddress(item)"\n                :search-term="searchTerm"\n            />\n\n            <template v-else>\n                {{ getCustomerAddress(item) }}\n            </template>\n        </li>\n    </template>\n</sw-single-select>\n',inject:["repositoryFactory"],model:{prop:"value",event:"change"},props:{customer:{type:Object,required:!0},value:{type:String,required:!0},sameAddressLabel:{type:String,required:!1,default:""},sameAddressValue:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{customerAddresses:[],isLoading:!1,addressSearchTerm:""}},computed:{addressId:{get:function(){return this.value},set:function(e){null!==e&&this.$emit("change",e)}},isSameAddress:function(){return this.value===this.sameAddressValue},addressRepository:function(){var e,t,s;return this.repositoryFactory.create(null!==(e=null===(t=this.customer.addresses)||void 0===t?void 0:t.entity)&&void 0!==e?e:"customer_address",null===(s=this.customer.addresses)||void 0===s?void 0:s.source)},addressCriteria:function(){var e=new i(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),this.addressSearchTerm&&e.setTerm(this.addressSearchTerm),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getCustomerAddresses()},getSelectionLabel:function(e){return this.isSameAddress&&this.sameAddressLabel?this.sameAddressLabel:this.getCustomerAddress(e)},getCustomerAddress:function(e){if(!e)return"";var t=[];return["street","zipcode","city","countryState","country"].forEach((function(s){if(e[s])if("countryState"!==s&&"country"!==s)t.push(e[s]);else{var r,i,n=null===(r=e[s])||void 0===r||null===(i=r.translated)||void 0===i?void 0:i.name;n&&t.push(n)}})),t.join(", ")},getCustomerAddresses:function(){var e=this;return this.isLoading=!0,this.addressRepository.search(this.addressCriteria).then((function(t){e.customerAddresses=t})).finally((function(){e.isLoading=!1}))},searchAddress:function(e){var t=this;return this.isLoading=!0,this.addressSearchTerm=e,this.addressRepository.search(this.addressCriteria).then((function(e){t.customerAddresses.forEach((function(t){t.hidden=!e.has(t.id)}))})).finally((function(){t.isLoading=!1}))}}})},QVFZ:function(e,t,s){var r=s("mEig");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,s("ydqr").default)("584cd108",r,!0,{})},mEig:function(e,t,s){}}]);