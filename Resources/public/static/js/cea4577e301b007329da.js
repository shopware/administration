"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[20074],{720074:function(t,e,s){s.r(e),s.d(e,{default:function(){return a}});let{Mixin:i}=Shopware,{Criteria:n}=Shopware.Data;var a={template:'\n{% block sw_settings_custom_field_set_detail %}\n<sw-page class="sw-settings-set-detail">\n\n    \n    {% block sw_settings_customField_set_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="set && set.config && getInlineSnippet(set.config.label)">\n            {{ getInlineSnippet(set.config.label) }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-custom-field.set.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_custom_field_set_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="set.isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-custom-field.set.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_custom_field_set_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-set-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="set.isLoading || !acl.can(\'custom_field.editor\')"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-custom-field.set.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n                \n                {% block sw_settings_custom_field_set_detail_content_detail_base %}\n                <sw-custom-field-set-detail-base\n                    :set="set"\n                    :technical-name-error="technicalNameError"\n                    @reset-errors="onResetErrors"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_custom_field_set_detail_content_detail_custom_field_list %}\n                <sw-custom-field-list\n                    v-if="set.id"\n                    ref="customFieldList"\n                    :set="set"\n                    @loading-changed="onLoadingChanged"\n                />\n                {% endblock %}\n            </div>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[i.getByName("notification"),i.getByName("sw-inline-snippet"),i.getByName("discard-detail-page-changes")("set")],shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("custom_field.editor")},method:"onSave"},ESCAPE:"onCancel"},data(){return{set:{},setId:"",isLoading:!0,isSaveSuccessful:!1,technicalNameError:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.set.config&&this.getInlineSnippet(this.set.config.label)?this.getInlineSnippet(this.set.config.label):this.set.name},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},customFieldRepository(){return this.repositoryFactory.create("custom_field")},customFieldCriteria(){let t=new n(1,25);return t.addFilter(n.equals("customFieldSetId",this.setId)),t},customFieldSetCriteria(){let t=new n(1,25);return t.addAssociation("relations"),t},tooltipSave(){if(!this.acl.can("custom_field.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("custom_field.editor"),showOnDisabledElements:!0};let t=this.$device.getSystemKey();return{message:`${t} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}}},created(){this.createdComponent()},methods:{createdComponent(){this.$route.params.id&&(this.setId=this.$route.params.id,this.loadEntityData())},async loadEntityData(){this.set=await this.customFieldSetRepository.get(this.setId,Shopware.Context.api,this.customFieldSetCriteria)},saveFinish(){this.isSaveSuccessful=!1},onSave(){let t=this.identifier,e=this.$tc("global.default.success"),s=this.$tc("sw-settings-custom-field.set.detail.messageSaveSuccess",0,{name:t});if(this.isSaveSuccessful=!1,this.isLoading=!0,!this.set.config.translated||!1===this.set.config.translated){let t=this.swInlineSnippetFallbackLocale;this.set.config.label={[t]:this.set.config.label[t]}}this.set.relations||(this.set.relations=[]),this.customFieldSetRepository.save(this.set).then(()=>(this.isSaveSuccessful=!0,this.createNotificationSuccess({title:e,message:s}),this.loadEntityData())).catch(t=>{let e=t?.response?.data?.errors?.[0]?.detail??"Error";this.createNotificationError({message:e})}).finally(()=>{this.isLoading=!1})},onCancel(){this.$router.push({name:"sw.settings.custom.field.index"})},abortOnLanguageChange(){return this.customFieldSetRepository.hasChanges(this.set)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()},onLoadingChanged(t){this.isLoading=t},onResetErrors(){this.technicalNameError=null}}}}}]);