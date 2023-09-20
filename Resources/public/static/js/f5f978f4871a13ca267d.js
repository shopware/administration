(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[253],{Jrwn:function(e,t,l){},qZI5:function(e,t,l){var a=l("Jrwn");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,l("P8hj").default)("32e42970",a,!0,{})},"tS/w":function(e,t,l){"use strict";l.r(t);var a=l("7yzw"),n=l.n(a),o=l("CsSd"),i=l.n(o),r=l("92Mt"),m=l.n(r);l("qZI5");function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}var s=Shopware.Mixin,p=Shopware.Data.Criteria,d=Shopware.Component.getComponentHelper().mapPropertyErrors,f=Shopware.Utils;t.default={template:'\n{% block sw_flow_create_mail_template_modal %}\n<sw-modal\n    class="sw-flow-create-mail-template-modal"\n    :title="$tc(\'sw-flow.modals.mail.titleNewEmailTemplate\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_create_mail_template_modal_content %}\n    \n    {% block sw_flow_create_mail_template_modal_type_selection %}\n    <sw-entity-single-select\n        {% if VUE3 %}\n        v-model:value="mailTemplate.mailTemplateTypeId"\n        {% else %}\n        v-model="mailTemplate.mailTemplateTypeId"\n        {% endif %}\n        class="sw-flow-create-mail-template-modal__type"\n        entity="mail_template_type"\n        required\n        :label="$tc(\'sw-flow.modals.mail.labelMailType\')"\n        :placeholder="$tc(\'sw-flow.modals.mail.placeholderMailType\')"\n        :error="mailTemplateMailTemplateTypeIdError"\n        {% if VUE3 %}\n        @update:value="onChangeType"\n        {% else %}\n        @change="onChangeType"\n        {% endif %}\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_create_mail_template_modal_info %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="30px"\n    >\n        \n        {% block sw_flow_create_mail_template_modal_subject %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="mailTemplate.subject"\n            {% else %}\n            v-model="mailTemplate.subject"\n            {% endif %}\n            class="sw-flow-create-mail-template-modal__subject"\n            required\n            :label="$tc(\'sw-flow.modals.mail.labelSubject\')"\n            :placeholder="$tc(\'sw-flow.modals.mail.placeholderSubject\')"\n            :error="mailTemplateSubjectError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_create_mail_template_modal_sender_name %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="mailTemplate.senderName"\n            {% else %}\n            v-model="mailTemplate.senderName"\n            {% endif %}\n            class="sw-flow-create-mail-template-modal__sender-name"\n            :label="$tc(\'sw-flow.modals.mail.labelSenderName\')"\n            :placeholder="$tc(\'sw-flow.modals.mail.placeholderSenderName\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_flow_create_mail_template_modal_description %}\n    <sw-textarea-field\n        {% if VUE3 %}\n        v-model:value="mailTemplate.description"\n        {% else %}\n        v-model="mailTemplate.description"\n        {% endif %}\n        class="sw-flow-create-mail-template-modal__description"\n        :label="$tc(\'sw-flow.modals.mail.labelDescription\')"\n        :placeholder="$tc(\'sw-flow.modals.mail.placeholderDescription\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_create_mail_template_modal_plain_content %}\n    <sw-code-editor\n        ref="plainEditor"\n        :key="`${mailTemplate.mailTemplateTypeId}plain`"\n        v-model="mailTemplate.contentPlain"\n        class="sw-flow-create-mail-template-modal__content-plain"\n        name="content_plain"\n        completion-mode="entity"\n        :label="$tc(\'sw-flow.modals.mail.labelContentPlain\')"\n        :placeholder="placeholder(mailTemplate, \'contentPlain\', $tc(\'sw-flow.modals.mail.placeholderPlain\'))"\n        :completer-function="outerCompleterFunction"\n        :editor-config="editorConfig"\n        :error="mailTemplateContentPlainError"\n        required\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_create_mail_template_modal_html_content %}\n    <sw-code-editor\n        ref="htmlEditor"\n        :key="`${mailTemplate.mailTemplateTypeId}html`"\n        v-model="mailTemplate.contentHtml"\n        class="sw-flow-create-mail-template-modal__content-html"\n        name="content_html"\n        completion-mode="entity"\n        :label="$tc(\'sw-flow.modals.mail.labelContentHtml\')"\n        :placeholder="placeholder(mailTemplate, \'contentPlain\', $tc(\'sw-flow.modals.mail.placeholderHtml\'))"\n        :completer-function="outerCompleterFunction"\n        :editor-config="editorConfig"\n        :error="mailTemplateContentHtmlError"\n        required\n    />\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_flow_create_mail_template_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_create_mail_template_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-create-mail-template-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_create_mail_template_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-create-mail-template-modal__save-button"\n            variant="primary"\n            size="small"\n            :is-loading="isLoading"\n            @click="onAddMailTemplate"\n        >\n            {{ $tc(\'sw-flow.modals.mail.buttonAddMailTemplate\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["mailService","entityMappingService","repositoryFactory"],mixins:[s.getByName("placeholder"),s.getByName("notification")],data:function(){return{mailTemplate:{},mailTemplateType:{},editorConfig:{enableBasicAutocompletion:!0},isLoading:!1}},computed:function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){i()(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({mailTemplateRepository:function(){return this.repositoryFactory.create("mail_template")},mailTemplateTypeRepository:function(){return this.repositoryFactory.create("mail_template_type")},mailTemplateCriteria:function(){var e=new p(1,25);return e.addAssociation("mailTemplateType"),e},outerCompleterFunction:function(){return e=this.entityMappingService,t=this.mailTemplateType,function(l){var a=[];return Object.keys(e.getEntityMapping(l,t.availableEntities)).forEach((function(e){a.push({value:e})})),a};var e,t}},d("mailTemplate",["contentHtml","contentPlain","mailTemplateTypeId","subject"])),created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.mailTemplate=this.mailTemplateRepository.create(Shopware.Context.api,f.createId())},onClose:function(){this.$emit("modal-close")},onAddMailTemplate:function(){var e=this,t=this.mailTemplate.subject||this.placeholder(this.mailTemplate,"subject");return this.isSaveSuccessful=!1,this.isLoading=!0,this.mailTemplateRepository.save(this.mailTemplate).then((function(){e.getMailTemplate()})).catch((function(l){var a="";if(e.isLoading=!1,l.response.data.errors.length>0){var n=l.response.data.errors[0].detail;a="<br/> ".concat(e.$tc("sw-mail-template.detail.textErrorMessage"),': "').concat(n,'"')}e.createNotificationError({message:e.$tc("sw-mail-template.detail.messageSaveError",0,{subject:t})+a})}))},getMailTemplateType:function(){var e,t=this;return null!==(e=this.mailTemplate)&&void 0!==e&&e.mailTemplateTypeId?this.mailTemplateTypeRepository.get(this.mailTemplate.mailTemplateTypeId).then((function(e){t.mailTemplateType=e,t.$refs.htmlEditor.defineAutocompletion(t.outerCompleterFunction),t.$refs.plainEditor.defineAutocompletion(t.outerCompleterFunction)})):Promise.resolve()},onChangeType:function(e){var t=this;return n()(m.a.mark((function l(){var a,n;return m.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(e){l.next=2;break}return l.abrupt("return");case 2:return l.prev=2,l.next=5,t.getMailTemplateType();case 5:l.next=12;break;case 7:l.prev=7,l.t0=l.catch(2),a="",l.t0.response.data.errors.length>0&&(n=l.t0.response.data.errors[0].detail,a="<br/> ".concat(t.$tc("sw-mail-template.detail.textErrorMessage"),': "').concat(n,'"')),t.createNotificationError({message:a});case 12:case"end":return l.stop()}}),l,null,[[2,7]])})))()},getMailTemplate:function(){var e=this;return this.mailTemplateRepository.get(this.mailTemplate.id,Shopware.Context.api,this.mailTemplateCriteria).then((function(t){e.$emit("process-finish",t)})).catch((function(){e.$emit("process-finish",null)})).finally((function(){e.isLoading=!1,e.onClose()}))}}}}}]);