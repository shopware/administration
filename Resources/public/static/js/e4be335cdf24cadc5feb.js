"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[58629],{58629:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});let{Mixin:a}=Shopware,{mapPropertyErrors:n}=Shopware.Component.getComponentHelper();var r={template:'\n{% block sw_settings_product_feature_set_detail %}\n<sw-page class="sw-settings-product-feature-sets-detail">\n\n    \n    {% block sw_settings_product_feature_set_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(productFeatureSet, \'name\', $tc(\'sw-settings-product-feature-sets.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_product_feature_set_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_product_feature_set_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_product_feature_set_detail_actions_save %}\n        <sw-button-process\n            v-model:processSuccess="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-currency-detail__save-action"\n            :is-loading="isLoading"\n            :disabled="isLoading || !acl.can(\'product_feature_sets.editor\')"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-product-feature-sets.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_product_feature_set_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_product_feature_set_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(productFeatureSet, \'name\', $tc(\'sw-settings-product-feature-sets.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_product_feature_set_detail_content_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-product-feature-sets.detail.titleCard\')"\n                    position-identifier="sw-settings-product-feature-sets-detail"\n                >\n\n                    \n                    {% block sw_settings_product_feature_set_detail_content_field_name %}\n                    <sw-text-field\n                        v-model:value="productFeatureSet.name"\n                        class="sw-settings-product-feature-sets-detail__name"\n                        validation="required"\n                        required\n                        :error="productFeatureSetNameError"\n                        :disabled="!acl.can(\'product_feature_sets.editor\')"\n                        :label="$tc(\'sw-settings-product-feature-sets.detail.labelName\')"\n                        :placeholder="placeholder(productFeatureSet, \'name\', $tc(\'sw-settings-product-feature-sets.detail.placeholderName\'))"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_product_feature_set_detail_content_field_description %}\n                    <sw-textarea-field\n                        v-model:value="productFeatureSet.description"\n                        :label="$tc(\'sw-settings-product-feature-sets.detail.labelDescription\')"\n                        class="sw-settings-product-feature-sets-detail__description"\n                        :error="productFeatureSetDescriptionError"\n                        :disabled="!acl.can(\'product_feature_sets.editor\')"\n                        :placeholder="placeholder(productFeatureSet, \'description\', $tc(\'sw-settings-product-feature-sets.detail.placeholderDescription\'))"\n                    />\n                    {% endblock %}\n\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_product_feature_set_detail_content_values_card %}\n                <sw-settings-product-feature-sets-values-card\n                    v-if="productFeatureSet.id"\n                    :disabled="!productFeatureSetId"\n                    :allow-edit="acl.can(\'product_feature_sets.editor\')"\n                    class="sw-settings-product-feature-sets-detail__tax-rule-grid"\n                    :product-feature-set="productFeatureSet"\n                    :is-loading="isLoading"\n                    @product-feature-set-rule-save="onSave"\n                />\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","feature"],mixins:[a.getByName("notification"),a.getByName("placeholder")],props:{productFeatureSetId:{type:String,required:!1,default:null}},shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data(){return{productFeatureSet:{},isLoading:!1,isSaveSuccessful:!1}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.productFeatureSet,"name")},productFeatureSetsRepository(){return this.repositoryFactory.create("product_feature_set")},tooltipSave(){if(!this.acl.can("product_feature_sets.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("product_feature_sets.editor"),showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},...n("productFeatureSet",["name","description","features.id"])},watch:{productFeatureSetId(){this.productFeatureSetId||this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(this.isLoading=!0,this.productFeatureSetId){this.productFeatureSetsRepository.get(this.productFeatureSetId).then(e=>{e.features&&!e.features.length&&(e.features=[]),this.productFeatureSet=e,this.isLoading=!1});return}this.productFeatureSet=this.productFeatureSetsRepository.create(),this.isLoading=!1},loadEntityData(){this.productFeatureSetsRepository.get(this.productFeatureSetId).then(e=>{e.features&&!e.features.length&&(e.features=[]),this.productFeatureSet=e})},saveFinish(){this.isSaveSuccessful=!1},onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.productFeatureSetsRepository.save(this.productFeatureSet).then(()=>{this.isSaveSuccessful=!0,this.productFeatureSetId||this.$router.push({name:"sw.settings.product.feature.sets.detail",params:{id:this.productFeatureSet.id}})}).then(()=>{this.loadEntityData()}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-product-feature-sets.detail.notificationErrorMessage")})}).finally(()=>{this.isLoading=!1})},onCancel(){this.$router.push({name:"sw.settings.product.feature.sets.index"})},abortOnLanguageChange(){return this.productFeatureSetsRepository.hasChanges(this.productFeatureSet)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()}}}}}]);