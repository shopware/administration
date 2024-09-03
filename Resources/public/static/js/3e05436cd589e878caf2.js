(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9691],{981311:function(){},209691:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n(532384);let{Mixin:a}=Shopware,{Criteria:l}=Shopware.Data,{mapPropertyErrors:s}=Shopware.Component.getComponentHelper();var i={template:'\n{% block sw_settings_language_detail %}\n<sw-page class="sw-settings-language-detail">\n\n    \n    {% block sw_settings_language_detail_header %}\n    <template #smart-bar-header>\n        <h2\n            v-if="languageHasName"\n        >\n            {{ language.name }}\n        </h2>\n        <h2\n            v-else\n        >\n            {{ $tc(\'sw-settings-language.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_language_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-language.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_language_detail_actions_save %}\n        <sw-button-process\n            v-model:processSuccess="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-language-detail__save-action"\n            :is-loading="isLoading"\n            :disabled="isLoading || !allowSave || undefined"\n            variant="primary"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-language.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            <template v-else>\n                \n                {% block sw_settings_language_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="language.name"\n                    :is-new-entity="isNewLanguage"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_language_detail_content_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-language.detail.titleCard\')"\n                    position-identifier="sw-settings-language-detail-content"\n                >\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n\n                        \n                        {% block sw_settings_language_detail_content_field_name %}\n                        <sw-text-field\n                            v-model:value="language.name"\n                            name="sw-field--language-name"\n                            :disabled="!acl.can(\'language.editor\') || undefined"\n                            :label="$tc(\'sw-settings-language.detail.labelName\')"\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderName\')"\n                            :error="languageNameError"\n                            validation="required"\n                            required\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_detail_content_field_localeId %}\n                        <sw-entity-single-select\n                            id="locales"\n                            v-model:value="language.localeId"\n                            name="sw-field--language-localeId"\n                            required\n                            show-clearable-button\n                            class="sw-settings-language-detail__select-locale"\n                            :disabled="!acl.can(\'language.editor\') || undefined"\n                            :label="$tc(\'sw-settings-language.detail.labelLocale\')"\n                            entity="locale"\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderPleaseSelect\')"\n                            :error="languageLocaleIdError"\n                        >\n                            <template #selection-label-property="{ item, getKey }">\n                                {{ getKey(item, \'translated.name\') }}, {{ getKey(item, \'translated.territory\') }}\n                            </template>\n\n                            <template #result-label-property="{ item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }">\n                                <sw-highlight-text\n                                    v-if="highlightSearchTerm"\n                                    :text="`${getKey(item, \'translated.name\')}, ${getKey(item, \'translated.territory\')}`"\n                                    :search-term="searchTerm"\n                                />\n                                <template v-else>\n                                    {{ getKey(item, \'translated.name\') }}, {{ getKey(item, \'translated.territory\') }}\n                                </template>\n                            </template>\n                        </sw-entity-single-select>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_detail_content_field_iso_code %}\n                        <sw-entity-single-select\n                            id="iso-codes"\n                            v-model:value="language.translationCodeId"\n                            class="sw-settings-language-detail__select-iso-code"\n                            :disabled="!acl.can(\'language.editor\') || undefined"\n                            label-property="code"\n                            :label="$tc(\'sw-settings-language.detail.labelIsoCode\')"\n                            :required="isIsoCodeRequired"\n                            show-clearable-button\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderPleaseSelect\')"\n                            entity="locale"\n                        >\n                            <template #result-item="{ isSelected, setValue, item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }">\n                                <sw-select-result\n                                    v-tooltip="{\n                                        showDelay: 300,\n                                        message: $tc(\'sw-settings-language.detail.textIsoCodeIsInUse\'),\n                                        disabled: !isLocaleAlreadyUsed(item?.id)\n                                    }"\n\n                                    :selected="isSelected(item)"\n                                    v-bind="{ item, index }"\n                                    @item-select="setValue"\n                                >\n\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="(getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)) + (isLocaleAlreadyUsed(item?.id) ? \'*\' : \'\')"\n                                        :search-term="searchTerm"\n                                    />\n                                    <template v-else>\n                                        {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }}\n                                    </template>\n                                </sw-select-result>\n                            </template>\n                            <template #hint>\n                                <div v-if="isLocaleAlreadyUsed(language.translationCodeId)">\n                                    {{ $tc(\'sw-settings-language.detail.textIsoCodeIsInUse\') }}\n                                </div>\n                            </template>\n                        </sw-entity-single-select>\n\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_detail_content_field_parentId %}\n                        <sw-entity-single-select\n                            id="inherit"\n                            v-model:value="language.parentId"\n                            name="sw-field--language-parentId"\n                            class="sw-settings-language-detail__select-parent"\n                            :criteria="parentLanguageCriteria"\n                            :disabled="!acl.can(\'language.editor\') || isSystemDefaultLanguageId || undefined"\n                            :label="$tc(\'sw-settings-language.detail.labelParent\')"\n                            :placeholder="$tc(\'sw-settings-language.detail.placeholderPleaseSelect\')"\n                            :help-text="inheritanceTooltipText"\n                            entity="language"\n                            show-clearable-button\n                            @update:value="onInputLanguage"\n                        >\n                            <template #result-item="{ isSelected, setValue, item, index, labelProperty, searchTerm, highlightSearchTerm, getKey }">\n                                <sw-select-result\n                                    v-tooltip="{\n                                        showDelay: 300,\n                                        message: $tc(\'sw-settings-language.detail.textLanguageHasParent\'),\n                                        disabled: !item.parentId\n                                    }"\n                                    :disabled="!!item.parentId || undefined"\n                                    :selected="isSelected(item)"\n                                    v-bind="{ item, index }"\n                                    @item-select="setValue"\n                                >\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)"\n                                        :search-term="searchTerm"\n                                    />\n                                    <template v-else>\n                                        {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }}\n                                    </template>\n                                </sw-select-result>\n                            </template>\n                        </sw-entity-single-select>\n                        {% endblock %}\n                    </sw-container>\n                    \n                    {% block sw_settings_language_detail_content_alert_change_parent %}\n                    <sw-alert\n                        v-if="showAlertForChangeParentLanguage"\n                        class="sw-settings-language--alert-change-parent"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="warning"\n                    >\n                        {{ $tc(\'sw-settings-language.detail.textAlertChangeParent\') }}\n                    </sw-alert>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_language_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-language-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="language"\n                        :disabled="!acl.can(\'language.editor\') || undefined"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","customFieldDataProviderService","feature"],mixins:[a.getByName("notification"),a.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},props:{languageId:{type:String,required:!1,default:null}},data(){return{language:null,usedTranslationIds:[],showAlertForChangeParentLanguage:!1,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null,parentTranslationCodeId:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.languageHasName?this.language.name:""},languageRepository(){return this.repositoryFactory.create("language")},isIsoCodeRequired(){return!this.language.parentId},languageHasName(){return null!==this.language&&this.language.name},isNewLanguage(){return!!this.language&&"function"==typeof this.language.isNew&&this.language.isNew()},usedLocaleCriteria(){return new l(1,null).addFilter(l.not("and",[l.equals("id",this.languageId)])).addAggregation(l.terms("usedTranslationIds","language.translationCode.id",null,null,null))},allowSave(){return this.isNewLanguage?this.acl.can("language.creator"):this.acl.can("language.editor")},tooltipSave(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},parentLanguageCriteria(){let e=new l(1,25);return e.addFilter(l.not("and",[l.equals("id",this.language.id)])),e},isSystemDefaultLanguageId(){return this.language.id===Shopware.Context.api.systemLanguageId},inheritanceTooltipText(){return this.isSystemDefaultLanguageId?this.$tc("sw-settings-language.detail.tooltipInheritanceNotPossible"):this.$tc("sw-settings-language.detail.tooltipLanguageNotChoosable")},showCustomFields(){return this.customFieldSets&&this.customFieldSets.length>0},...s("language",["localeId","name"])},watch:{languageId(){null===this.languageId&&this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(!this.languageId){Shopware.State.commit("context/resetLanguageToDefault"),this.language=this.languageRepository.create();return}this.loadEntityData().then(()=>this.loadCustomFieldSets()).then(()=>{this.languageRepository.search(this.usedLocaleCriteria).then(e=>{this.usedTranslationIds=e.aggregations.usedTranslationIds.buckets.map(e=>e.key)})})},loadEntityData(){return this.isLoading=!0,this.languageRepository.get(this.languageId).then(e=>{this.isLoading=!1,this.language=e,e.parentId&&this.setParentTranslationCodeId(e.parentId)}).catch(()=>{this.isLoading=!1})},loadCustomFieldSets(){return this.customFieldDataProviderService.getCustomFieldSets("language").then(e=>{this.customFieldSets=e})},checkTranslationCodeInheritance(e){return e===this.parentTranslationCodeId},setParentTranslationCodeId(e){this.languageRepository.get(e,Shopware.Context.api).then(e=>{this.parentTranslationCodeId=e.translationCodeId})},onInputLanguage(e){e&&this.setParentTranslationCodeId(e);let t=this.language.getOrigin();!this.language.isNew()&&t.parentId&&(this.showAlertForChangeParentLanguage=t.parentId!==this.language.parentId)},isLocaleAlreadyUsed(e){return this.usedTranslationIds.some(t=>e===t)},onSave(){this.isLoading=!0,this.languageRepository.save(this.language).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,this.languageId||this.$router.push({name:"sw.settings.language.detail",params:{id:this.language.id}})}).catch(()=>{this.isLoading=!1})},onCancel(){this.$router.push({name:"sw.settings.language.index"})}}}},532384:function(e,t,n){var a=n(981311);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),n(745346).Z("7d613b7c",a,!0,{})}}]);