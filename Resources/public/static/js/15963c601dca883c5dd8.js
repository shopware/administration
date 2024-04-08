"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[40391],{40391:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});let{Mixin:n}=Shopware,{Criteria:s}=Shopware.Data,i=Shopware.Classes.ShopwareError,{mapPropertyErrors:l}=Shopware.Component.getComponentHelper();var o={template:'\n{% block sw_settings_salutation_detail %}\n<sw-page class="sw-settings-salutation-detail">\n\n    \n    {% block sw_settings_salutation_detail_search_bar %}\n    <template #search-bar></template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_detail_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_salutation_detail_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_salutation_detail_smart_bar_header_title_text %}\n            {{ placeholder(salutation, \'salutationKey\', $tc(\'sw-settings-salutation.detail.placeholderNewSalutation\')) }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="salutationId == null"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_salutation_detail_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-settings-salutation-detail__cancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-salutation.general.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_salutation_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-salutation-detail__save"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="invalidKey || isKeyChecking || !allowSave"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-salutation.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_detail_cardview %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            <template v-else>\n                \n                {% block sw_settings_salutation_detail_content_language_info %}\n                <sw-language-info :entity-description="entityDescription" />\n                {% endblock %}\n\n                \n                {% block sw_settings_salutation_detail_content_card %}\n                <sw-card\n                    position-identifier="sw-settings-salutation-detail-content"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-salutation.detail.cardTitle\')"\n                >\n\n                    <template v-if="salutation">\n                        \n                        {% block sw_settings_salutation_detail_content_card_salutation_key %}\n                        <sw-text-field\n                            v-model:value="salutation.salutationKey"\n                            name="sw-field--salutation-salutationKey"\n                            class="sw-settings-salutation-detail__salutation_key"\n                            :label="$tc(\'sw-settings-salutation.detail.fieldSalutationKeyLabel\')"\n                            :placeholder="$tc(\'sw-settings-salutation.detail.fieldSalutationKeyPlaceholder\')"\n                            :help-text="$tc(\'sw-settings-salutation.detail.fieldSalutationKeyTooltip\')"\n                            :error="salutationSalutationKeyError"\n                            validation="required"\n                            required\n                            :disabled="!acl.can(\'salutation.editor\')"\n                            @update:value="onChange"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_salutation_detail_content_card_display_name %}\n                        <sw-text-field\n                            v-model:value="salutation.displayName"\n                            name="sw-field--salutation-displayName"\n                            required\n                            class="sw-settings-salutation-detail__displayName"\n                            :label="$tc(\'sw-settings-salutation.detail.fieldDisplayNameLabel\')"\n                            :error="salutationDisplayNameError"\n                            :disabled="!acl.can(\'salutation.editor\')"\n                            :placeholder="placeholder(salutation, \'displayName\', $tc(\'sw-settings-salutation.detail.fieldDisplayNamePlaceholder\'))"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_salutation_detail_content_card_letter_name %}\n                        <sw-text-field\n                            v-model:value="salutation.letterName"\n                            name="sw-field--salutation-letterName"\n                            required\n                            class="sw-settings-salutation-detail__letterName"\n                            :label="$tc(\'sw-settings-salutation.detail.fieldLetterNameLabel\')"\n                            :error="salutationLetterNameError"\n                            :disabled="!acl.can(\'salutation.editor\')"\n                            :placeholder="placeholder(salutation, \'letterName\', $tc(\'sw-settings-salutation.detail.fieldLetterNamePlaceholder\'))"\n                        />\n                        {% endblock %}\n                    </template>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_salutation_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-salutation-detail-custom-fields"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="salutation"\n                        :disabled="!acl.can(\'salutation.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[n.getByName("notification"),n.getByName("placeholder"),n.getByName("discard-detail-page-changes")("salutation")],props:{salutationId:{type:String,required:!1,default:null}},shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data(){return{entityName:"salutation",isLoading:!1,salutation:null,invalidKey:!1,isKeyChecking:!1,isSaveSuccessful:!1,customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.salutation,"displayName")},salutationRepository(){return this.repositoryFactory.create("salutation")},entityDescription(){return this.placeholder(this.salutation,"salutationKey",this.$tc("sw-settings-salutation.detail.placeholderNewSalutation"))},invalidKeyError(){return this.invalidKey&&!this.isKeyChecking?new i({code:"DUPLICATED_SALUTATION_KEY"}):null},allowSave(){return this.salutation&&this.salutation.isNew()?this.acl.can("salutation.creator"):this.acl.can("salutation.editor")},tooltipSave(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};let t=this.$device.getSystemKey();return{message:`${t} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},...l("salutation",["displayName","letterName","salutationKey"]),showCustomFields(){return this.salutation&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{salutationId(){this.salutationId||this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(this.isLoading=!0,this.salutationId){this.salutationRepository.get(this.salutationId).then(t=>{this.salutation=t,this.isLoading=!1}),this.loadCustomFieldSets();return}Shopware.State.commit("context/resetLanguageToDefault"),this.salutation=this.salutationRepository.create(),this.isLoading=!1},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("salutation").then(t=>{this.customFieldSets=t})},onChangeLanguage(){this.createdComponent()},saveFinish(){this.isSaveSuccessful=!1},onSave(){return this.isLoading=!0,this.isSaveSuccessful=!1,this.salutationRepository.save(this.salutation).then(()=>{this.isSaveSuccessful=!0,this.salutationId||this.$router.push({name:"sw.settings.salutation.detail",params:{id:this.salutation.id}}),this.salutationRepository.get(this.salutation.id).then(t=>{this.salutation=t,this.isLoading=!1})}).catch(()=>{this.isLoading=!1,this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-settings-salutation.detail.notificationErrorMessage")})})},onCancel(){this.$router.push({name:"sw.settings.salutation.index"})},onChange(){this.isKeyChecking=!0,this.onChangeDebounce()},onChangeDebounce:Shopware.Utils.debounce(function(){if(!this.salutation)return;if("string"!=typeof this.salutation.salutationKey||""===this.salutation.salutationKey.trim()){this.invalidKey=!1,this.isKeyChecking=!1;return}let t=new s(1,1);t.addFilter(s.multi("AND",[s.equals("salutationKey",this.salutation.salutationKey),s.not("AND",[s.equals("id",this.salutation.id)])])),this.salutationRepository.search(t).then(({total:t})=>{this.invalidKey=t>0,this.isKeyChecking=!1}).catch(()=>{this.invalidKey=!0,this.isKeyChecking=!1})},500)}}}}]);