(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[317],{"9nlH":function(e,s,t){var r=t("WBWm");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t("P8hj").default)("4a8d3ae9",r,!0,{})},WBWm:function(e,s,t){},ZLAF:function(e,s,t){"use strict";t.r(s);t("9nlH");var r=Shopware.Component,i=Shopware.Data.Criteria;s.default=r.wrapComponentConfig({template:'<sw-single-select\n    {% if VUE3 %}\n    v-model:value="addressId"\n    {% else %}\n    v-model="addressId"\n    {% endif %}\n    v-bind="$attrs"\n    class="sw-order-customer-address-select"\n    value-property="id"\n    required\n    :is-loading="isLoading"\n    :options="customerAddresses"\n    :disabled="disabled"\n    :search-function="searchAddressResults"\n    @search="searchAddress"\n>\n    <template #selection-label-property="{ item }">\n        {{ getSelectionLabel(item) }}\n    </template>\n\n    <template #result-item="{ item, index, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }">\n        <sw-select-result\n            :selected="isSelected(item)"\n            v-bind="{ item, index }"\n            @item-select="setValue"\n        >\n            <sw-highlight-text\n                v-if="highlightSearchTerm && !isSelected(item)"\n                :text="getCustomerAddress(item)"\n                :search-term="searchTerm"\n            />\n\n            <template v-else>\n                {{ getCustomerAddress(item) }}\n            </template>\n        </sw-select-result>\n    </template>\n</sw-single-select>\n',inject:["repositoryFactory","feature"],model:{prop:"value",event:"change"},props:{customer:{type:Object,required:!0},value:{type:String,required:!0},sameAddressLabel:{type:String,required:!1,default:""},sameAddressValue:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{customerAddresses:[],isLoading:!1,addressSearchTerm:""}},computed:{addressId:{get:function(){return this.value},set:function(e){null!==e&&(this.feature.isActive("VUE3")?this.$emit("update:value",e):this.$emit("change",e))}},isSameAddress:function(){return this.value===this.sameAddressValue},addressRepository:function(){var e,s,t;return this.repositoryFactory.create(null!==(e=null===(s=this.customer.addresses)||void 0===s?void 0:s.entity)&&void 0!==e?e:"customer_address",null===(t=this.customer.addresses)||void 0===t?void 0:t.source)},addressCriteria:function(){var e=new i(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),this.addressSearchTerm&&e.setTerm(this.addressSearchTerm),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getCustomerAddresses()},getSelectionLabel:function(e){return this.isSameAddress&&this.sameAddressLabel?this.sameAddressLabel:this.getCustomerAddress(e)},getCustomerAddress:function(e){if(!e)return"";var s=[];return["street","zipcode","city","countryState","country"].forEach((function(t){if(e[t])if("countryState"!==t&&"country"!==t)s.push(e[t]);else{var r,i,n=null===(r=e[t])||void 0===r||null===(i=r.translated)||void 0===i?void 0:i.name;n&&s.push(n)}})),s.join(", ")},getCustomerAddresses:function(){var e=this;return this.isLoading=!0,this.addressRepository.search(this.addressCriteria).then((function(s){e.customerAddresses=s})).finally((function(){e.isLoading=!1}))},searchAddress:function(e){var s=this;return this.isLoading=!0,this.addressSearchTerm=e,this.addressRepository.search(this.addressCriteria).then((function(e){s.customerAddresses.forEach((function(s){s.hidden=!e.has(s.id)}))})).finally((function(){s.isLoading=!1}))},searchAddressResults:function(){return this.customerAddresses}}})}}]);