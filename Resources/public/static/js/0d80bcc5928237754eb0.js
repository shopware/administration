"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67650],{74071:function(e,s){s.Z=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},67650:function(e,s,t){t.r(s),t.d(s,{default:function(){return c}});var r=t(74071);let{mapPropertyErrors:a}=Shopware.Component.getComponentHelper(),{ShopwareError:i}=Shopware.Classes,{Mixin:o}=Shopware,{Criteria:n}=Shopware.Data;var c={template:'{%  block sw_customer_create %}\n<sw-page class="sw-customer-create">\n\n    \n    {% block sw_customer_create_header %}\n    <template #smart-bar-header>\n        <h2>{{ salutationFilter(customer, $tc(\'sw-customer.general.newCustomer\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_create_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            v-tooltip="{ message: $tc(\'sw-customer.general.tooltipLanguageSwitch\') }"\n            disabled\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_create_actions %}\n    <template #smart-bar-actions>\n        <sw-button-process\n            class="sw-customer-create__save-action"\n            :is-loading="isLoading"\n            :disabled="isLoading"\n            :process-success="isSaveSuccessful"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-customer.detail.buttonSave\') }}\n        </sw-button-process>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_create_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_customer_create_base_form %}\n            <sw-card\n                :title="$tc(\'sw-customer.detailBase.labelAccountCard\')"\n                position-identifier="sw-customer-create-base-form"\n            >\n                <sw-customer-base-form\n                    v-if="customer"\n                    :is-loading="isLoading"\n                    :customer="customer"\n                    @sales-channel-change="onChangeSalesChannel"\n                />\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_customer_create_adress_form %}\n            <sw-card\n                :title="$tc(\'sw-customer.detailBase.labelAddressesCard\')"\n                position-identifier="sw-customer-create-address-form"\n            >\n                <sw-customer-address-form\n                    v-if="customer"\n                    v-bind="{ customer, address }"\n                />\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","numberRangeService","systemConfigApiService","customerValidationService"],mixins:[o.getByName("notification")],data(){return{customer:null,address:null,customerNumberPreview:"",isSaveSuccessful:!1,isLoading:!1}},computed:{...a("address",["company"]),customerRepository(){return this.repositoryFactory.create("customer")},validCompanyField(){return this.customer.accountType!==r.Z.ACCOUNT_TYPE_BUSINESS||this.address.company?.trim().length},languageRepository(){return this.repositoryFactory.create("language")},languageCriteria(){let e=new n;return e.setLimit(1),this.customer?.salesChannelId&&e.addFilter(n.equals("salesChannelDefaultAssignments.id",this.customer.salesChannelId)),e},languageId(){return this.loadLanguage(this.customer?.salesChannelId)},salutationRepository(){return this.repositoryFactory.create("salutation")},salutationCriteria(){let e=new n(1,1);return e.addFilter(n.equals("salutationKey","not_specified")),e},salutationFilter(){return Shopware.Filter.getByName("salutation")}},watch:{"customer.salesChannelId"(e){this.systemConfigApiService.getValues("core.systemWideLoginRegistration").then(s=>{s["core.systemWideLoginRegistration.isCustomerBoundToSalesChannel"]&&(this.customer.boundSalesChannelId=e)})},"customer.accountType"(e){e!==r.Z.ACCOUNT_TYPE_BUSINESS&&this.addressCompanyError&&Shopware.State.dispatch("error/removeApiError",{expression:`customer_address.${this.address.id}.company`})}},created(){this.createdComponent()},methods:{async createdComponent(){let e=await this.getDefaultSalutation();Shopware.State.commit("context/resetLanguageToDefault"),this.customer=this.customerRepository.create();let s=this.repositoryFactory.create(this.customer.addresses.entity,this.customer.addresses.source);this.customer.accountType=r.Z.ACCOUNT_TYPE_PRIVATE,this.address=s.create(),this.customer.addresses.add(this.address),this.customer.defaultBillingAddressId=this.address.id,this.customer.defaultShippingAddressId=this.address.id,this.customer.password="",this.customer.vatIds=[],this.customer.salutationId=e,this.address.salutationId=e},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.customer.detail",params:{id:this.customer.id}})},validateEmail(){let{id:e,email:s,boundSalesChannelId:t}=this.customer;return s?this.customerValidationService.checkCustomerEmail({id:e,email:s,boundSalesChannelId:t}).then(e=>e).catch(e=>{Shopware.State.dispatch("error/addApiError",{expression:`customer.${this.customer.id}.email`,error:new i(e.response.data.errors[0])})}):Promise.resolve({isValid:!0})},async onSave(){this.isLoading=!0;let e=!1,s=await this.validateEmail();s&&s.isValid||(e=!0),this.isSaveSuccessful=!1;let t=Promise.resolve();if(this.customerNumberPreview===this.customer.customerNumber&&(t=this.numberRangeService.reserve("customer",this.customer.salesChannelId).then(e=>{this.customerNumberPreview="reserved",this.customer.customerNumber=e.number})),this.validCompanyField||(this.createErrorMessageForCompanyField(),e=!0),e)return this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,!1;let r=await this.languageId,a={...Shopware.Context.api,languageId:r};return t.then(()=>this.customerRepository.save(this.customer,a).then(e=>(this.isLoading=!1,this.isSaveSuccessful=!0,e)).catch(e=>{throw this.createNotificationError({message:this.$tc("sw-customer.detail.messageSaveError")}),this.isLoading=!1,e}))},onChangeSalesChannel(e){this.customer.salesChannelId=e,this.numberRangeService.reserve("customer",e,!0).then(e=>{this.customerNumberPreview=e.number,this.customer.customerNumber=e.number})},createErrorMessageForCompanyField(){this.isLoading=!1,Shopware.State.dispatch("error/addApiError",{expression:`customer_address.${this.address.id}.company`,error:new Shopware.Classes.ShopwareError({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})}),this.createNotificationError({message:this.$tc("sw-customer.error.COMPANY_IS_REQUIRED")})},async loadLanguage(e){let s=Shopware.Context.api.languageId;if(!e)return s;let t=await this.languageRepository.searchIds(this.languageCriteria);return t?.data?t.data[0]:s},async getDefaultSalutation(){let e=await this.salutationRepository.searchIds(this.salutationCriteria);return e.data?.[0]}}}}}]);