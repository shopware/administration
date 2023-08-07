(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[615],{sPeJ:function(t,e,n){"use strict";n.r(e);var s=n("CsSd"),i=n.n(s),a=n("7yzw"),o=n.n(a),c=n("92Mt"),l=n.n(c),r=Shopware.Mixin,d=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_custom_field_set_detail %}\n<sw-page class="sw-settings-set-detail">\n\n    \n    {% block sw_settings_customField_set_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="set && set.config && getInlineSnippet(set.config.label)">\n            {{ getInlineSnippet(set.config.label) }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-custom-field.set.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_custom_field_set_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="set.isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-custom-field.set.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_custom_field_set_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-set-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="set.isLoading || !acl.can(\'custom_field.editor\')"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-custom-field.set.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n                \n                {% block sw_settings_custom_field_set_detail_content_detail_base %}\n                <sw-custom-field-set-detail-base\n                    :set="set"\n                    :technical-name-error="technicalNameError"\n                    @reset-errors="onResetErrors"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_custom_field_set_detail_content_detail_custom_field_list %}\n                <sw-custom-field-list\n                    v-if="set.id"\n                    ref="customFieldList"\n                    :set="set"\n                    @loading-changed="onLoadingChanged"\n                />\n                {% endblock %}\n            </div>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[r.getByName("notification"),r.getByName("sw-inline-snippet"),r.getByName("discard-detail-page-changes")("set")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.acl.can("custom_field.editor")},method:"onSave"},ESCAPE:"onCancel"},data:function(){return{set:{},setId:"",isLoading:!0,isSaveSuccessful:!1,technicalNameError:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{identifier:function(){return this.set.config&&this.getInlineSnippet(this.set.config.label)?this.getInlineSnippet(this.set.config.label):this.set.name},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},customFieldCriteria:function(){var t=new d(1,25);return t.addFilter(d.equals("customFieldSetId",this.setId)),t},customFieldSetCriteria:function(){var t=new d(1,25);return t.addAssociation("relations"),t},tooltipSave:function(){if(!this.acl.can("custom_field.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("custom_field.editor"),showOnDisabledElements:!0};var t=this.$device.getSystemKey();return{message:"".concat(t," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.$route.params.id&&(this.setId=this.$route.params.id,this.loadEntityData())},loadEntityData:function(){var t=this;return o()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.customFieldSetRepository.get(t.setId,Shopware.Context.api,t.customFieldSetCriteria);case 2:t.set=e.sent;case 3:case"end":return e.stop()}}),e)})))()},saveFinish:function(){this.isSaveSuccessful=!1},onSave:function(){var t=this,e=this.identifier,n=this.$tc("global.default.success"),s=this.$tc("sw-settings-custom-field.set.detail.messageSaveSuccess",0,{name:e});if(this.isSaveSuccessful=!1,this.isLoading=!0,!this.set.config.translated||!1===this.set.config.translated){var a=this.swInlineSnippetFallbackLocale;this.set.config.label=i()({},a,this.set.config.label[a])}this.set.relations||(this.set.relations=[]),this.customFieldSetRepository.save(this.set).then((function(){return t.isSaveSuccessful=!0,t.createNotificationSuccess({title:n,message:s}),t.loadEntityData()})).catch((function(e){var n,s,i,a,o,c=null!==(n=null==e||null===(s=e.response)||void 0===s||null===(i=s.data)||void 0===i||null===(a=i.errors)||void 0===a||null===(o=a[0])||void 0===o?void 0:o.detail)&&void 0!==n?n:"Error";t.createNotificationError({message:c})})).finally((function(){t.isLoading=!1}))},onCancel:function(){this.$router.push({name:"sw.settings.custom.field.index"})},abortOnLanguageChange:function(){return this.customFieldSetRepository.hasChanges(this.set)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(){this.loadEntityData()},onLoadingChanged:function(t){this.isLoading=t},onResetErrors:function(){this.technicalNameError=null}}}}}]);