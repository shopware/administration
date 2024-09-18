(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[50017,16121],{402974:function(){},116121:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return s}}),e(981766);let{Mixin:n}=Shopware,{Criteria:r}=Shopware.Data,{ShopwareError:o}=Shopware.Classes;var s={template:'\n{% block sw_settings_listing_option_base %}\n<sw-page class="sw-settings-listing-base">\n    \n    {% block sw_settings_listing_option_base_smart_bar_heading %}\n    <template #smart-bar-header>\n        <h2>{{ smartBarHeading }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_base_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_base_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_listing_option_base_smart_bar_actions_save %}\n        <sw-button\n            variant="primary"\n            :disabled="isSaveButtonDisabled"\n            @click="onSave"\n        >\n            {{ $t(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_base_smart_content %}\n    <template #content>\n\n        \n        {% block sw_settings_listing_option_base_smart_content_general_info %}\n        <sw-settings-listing-option-general-info\n            v-if="productSortingEntity"\n            :sorting-option="productSortingEntity"\n            :is-default-sorting="isDefaultSorting"\n            :label-error="sortingOptionLabelError"\n            :technical-name-error="sortingOptionTechnicalNameError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_base_smart_bar_actions_grid %}\n        <sw-settings-listing-option-criteria-grid\n            v-if="productSortingEntity"\n            :product-sorting-entity="productSortingEntity"\n            @criteria-delete="onDeleteCriteria"\n            @criteria-add="onAddCriteria"\n            @inline-edit-save="onSave"\n            @inline-edit-cancel="onCancelEditCriteria"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_base_smart_bar_actions_grid_delete_modal %}\n        <sw-settings-listing-delete-modal\n            v-if="toBeDeletedCriteria"\n            :title="$tc(\'sw-settings-listing.base.delete.modalTitle\')"\n            :description="$tc(\'sw-settings-listing.base.delete.modalDescription\')"\n            @cancel="toBeDeletedCriteria = null"\n            @delete="onConfirmDeleteCriteria"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","systemConfigApiService"],mixins:[n.getByName("notification")],data(){return{productSortingEntity:null,toBeDeletedCriteria:null,customFieldOptions:[],customFields:[],defaultSortingId:null,sortingOptionTechnicalNameError:null,sortingOptionLabelError:null}},computed:{productSortingRepository(){return this.repositoryFactory.create("product_sorting")},customFieldRepository(){return this.repositoryFactory.create("custom_field")},smartBarHeading(){return this.productSortingEntity&&this.productSortingEntity.label?this.productSortingEntity.label:this.$tc("sw-settings-listing.base.smartBarTitle")},isGeneralCardLoading(){return!this.productSortingEntity},customFieldCriteria(){return new r(1,25)},productSortingEntityCriteria(){return new r(1,25)},isSaveButtonDisabled(){return!this.productSortingEntity||this.productSortingEntity.fields.length<=0||this.productSortingEntity.fields.some(t=>!t.field||"customField"===t.field)},isDefaultSorting(){return this.defaultSortingId===this.productSortingEntity.id}},created(){this.createdComponent()},methods:{createdComponent(){Promise.all([this.fetchProductSortingEntity(),this.fetchCustomFields(),this.fetchDefaultSorting()])},fetchProductSortingEntity(){let t=this.getProductSortingEntityId();this.productSortingRepository.get(t,Shopware.Context.api,this.productSortingEntityCriteria).then(t=>{Array.isArray(t.fields)||(t.fields=[]),this.productSortingEntity=t})},fetchCustomFields(){return this.customFieldRepository.search(this.customFieldCriteria).then(t=>{this.customFields=t})},fetchDefaultSorting(){this.systemConfigApiService.getValues("core.listing").then(t=>{this.defaultSortingId=t["core.listing.defaultSorting"]})},getProductSortingEntityId(){return this.$route.params.id},async isValidSortingOption(){return this.productSortingEntity.key||(this.sortingOptionTechnicalNameError=new o({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})),await this.searchForAlreadyExistingKey(this.productSortingEntity.key)&&(this.sortingOptionTechnicalNameError=new o({code:"DUPLICATED_NAME"})),this.productSortingEntity.label||(this.sortingOptionLabelError=new o({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})),!(this.sortingOptionTechnicalNameError||this.sortingOptionLabelError)},async searchForAlreadyExistingKey(t){if(!t)return!1;let i=new r;i.addFilter(r.equals("key",t));let e=await this.productSortingRepository.search(i);return!!e.first()&&e.first().id!==this.productSortingEntity.id},async saveProductSorting(){return await this.isValidSortingOption()?this.productSortingRepository.save(this.productSortingEntity):Promise.reject()},onSave(){return this.sortingOptionTechnicalNameError=null,this.sortingOptionLabelError=null,this.transformCustomFieldCriterias(),this.productSortingEntity.fields=this.productSortingEntity.fields.filter(t=>"customField"!==t.field),this.saveProductSorting().then(()=>{let t=this.productSortingEntity.label;this.createNotificationSuccess({message:this.$t("sw-settings-listing.base.notification.saveSuccess",{sortingOptionName:t})})}).catch(()=>{let t=this.productSortingEntity.label;this.createNotificationError({message:this.$t("sw-settings-listing.base.notification.saveError",{sortingOptionName:t})})})},getCriteriaTemplate(t){return{field:t,order:"asc",priority:1,naturalSorting:0}},onDeleteCriteria(t){this.toBeDeletedCriteria=t},onConfirmDeleteCriteria(){this.productSortingEntity.fields=this.productSortingEntity.fields.filter(t=>t.field!==this.toBeDeletedCriteria.field),this.saveProductSorting().finally(()=>{this.toBeDeletedCriteria=null})},onAddCriteria(t){if(!t)return;let i=this.getCriteriaTemplate(t);this.productSortingEntity.fields||(this.productSortingEntity.fields=[]),this.productSortingEntity.fields.push(i)},onCancelEditCriteria(t){if(this.getProductSortingEntityId()){this.fetchProductSortingEntity();return}this.productSortingEntity.fields=this.productSortingEntity.fields.filter(i=>i.field!==t.field)},isCriteriaACustomField(t){return this.customFields.some(i=>i.name===t)},transformCustomFieldCriterias(){this.productSortingEntity.fields=this.productSortingEntity.fields.map(t=>(this.isCriteriaACustomField(t.field)&&(t.field=`customFields.${t.field}`),t))},onChangeLanguage(){this.fetchProductSortingEntity()}}}},750017:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return r}}),e(116121);let{Criteria:n}=Shopware.Data;var r={template:'\n{% block sw_settings_listing_option_edit_smart_bar_actions_grid %}\n<sw-settings-listing-option-criteria-grid\n    v-if="productSortingEntity"\n    :product-sorting-entity="productSortingEntity"\n    @criteria-delete="onDeleteCriteria"\n    @criteria-add="onAddCriteria"\n/>\n{% endblock %}\n\n\n{% block sw_settings_listing_option_base_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch\n        :disabled="isNewProductSorting"\n        @on-change="onChangeLanguage"\n    />\n</template>\n{% endblock %}\n',computed:{smartBarHeading(){return this.productSortingEntity&&this.productSortingEntity.label?this.productSortingEntity.label:this.$tc("sw-settings-listing.create.smartBarTitle")},isNewProductSorting(){return!this.productSortingEntity||this.productSortingEntity._isNew},urlKeyCriteria(){let t=new n(1,1);return t.addFilter(n.equals("key",this.productSortingEntity.key)),t}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchCustomFields().then(()=>{this.productSortingEntity=this.createProductSortingEntity(),Shopware.State.commit("context/resetLanguageToDefault")})},createProductSortingEntity(){let t=this.productSortingRepository.create();return t.fields=[],t.priority=1,t.active=!1,t},async onSave(){return this.sortingOptionTechnicalNameError=null,this.sortingOptionLabelError=null,this.transformCustomFieldCriterias(),this.productSortingEntity.fields=this.productSortingEntity.fields.filter(t=>"customField"!==t.field),this.saveProductSorting().then(t=>{let i=JSON.parse(t.config.data);this.$router.push({name:"sw.settings.listing.edit",params:{id:i.id}});let e=this.productSortingEntity.label;this.createNotificationSuccess({message:this.$t("sw-settings-listing.base.notification.saveSuccess",{sortingOptionName:e})})}).catch(()=>{let t=this.productSortingEntity.label;this.createNotificationError({message:this.$t("sw-settings-listing.base.notification.saveError",{sortingOptionName:t})})})},onAddCriteria(t){if(!t)return;let i=this.getCriteriaTemplate(t);this.productSortingEntity.fields||(this.productSortingEntity.fields=[]),this.productSortingEntity.fields.push(i)},onConfirmDeleteCriteria(){this.productSortingEntity.fields=this.productSortingEntity.fields.filter(t=>t.field!==this.toBeDeletedCriteria.field),this.toBeDeletedCriteria=null}}}},981766:function(t,i,e){var n=e(402974);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),e(745346).Z("5ea18564",n,!0,{})}}]);