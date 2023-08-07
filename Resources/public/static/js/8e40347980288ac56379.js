(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[335],{"4PNa":function(e,n,t){"use strict";t.r(n);var o=t("CsSd"),i=t.n(o);t("lUUh");function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=Shopware.Data.Criteria;n.default={template:'\n{% block sw_order_send_document_modal %}\n<sw-modal\n    class="sw-order-send-document-modal"\n    :title="$tc(\'sw-order.documentCard.labelSendDocument\')"\n    :is-loading="isLoading"\n    @modal-close="$emit(\'modal-close\')"\n>\n    \n    {% block sw_order_send_document_modal_info %}\n    <sw-container\n        class="sw-order-send-document-modal__info-container"\n        columns="1fr 1fr 1fr"\n    >\n        \n        {% block sw_order_send_document_modal_info_number %}\n        <sw-description-list>\n            <dt>{{ $tc(\'sw-order.documentSendModal.labelNumber\') }}</dt>\n            <dd>{{ document.config.documentNumber }}</dd>\n        </sw-description-list>\n        {% endblock %}\n\n        \n        {% block sw_order_send_document_modal_info_type %}\n        <sw-description-list>\n            <dt>{{ $tc(\'sw-order.documentSendModal.labelType\') }}</dt>\n            <dd>{{ document.documentType.name }}</dd>\n        </sw-description-list>\n        {% endblock %}\n\n        \n        {% block sw_order_send_document_modal_info_date %}\n        <sw-description-list>\n            <dt>{{ $tc(\'sw-order.documentSendModal.labelDate\') }}</dt>\n            <dd>{{ document.createdAt | date({hour: \'2-digit\', minute: \'2-digit\'}) }}</dd>\n        </sw-description-list>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_mail_template_select %}\n    <sw-entity-single-select\n        v-model="mailTemplateId"\n        entity="mail_template"\n        :criteria="mailTemplateCriteria"\n        label-property="mailTemplateType.name"\n        :label="$tc(\'sw-order.documentSendModal.labelMailTemplate\')"\n        required\n        @change="onMailTemplateChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_customer_mail_select %}\n    <sw-text-field\n        v-model="recipient"\n        :label="$tc(\'sw-order.documentSendModal.labelRecipient\')"\n        required\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_subject %}\n    <sw-text-field\n        v-model="subject"\n        :label="$tc(\'sw-order.documentSendModal.labelSubject\')"\n        required\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_send_document_modal_mail_content %}\n    <div\n        class="sw-order-send-document-modal__email-content-label"\n    >\n        {{ $tc(\'sw-order.documentSendModal.labelContent\') }}\n    </div>\n\n    <div\n        class="sw-order-send-document-modal__email-content"\n        v-html="$sanitize(content)"\n    >\n    </div>\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_order_send_document_modal_secondary_action %}\n        <sw-button\n            @click="$emit(\'modal-close\')"\n        >\n            {{ $tc(\'sw-order.documentSendModal.labelClose\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_send_document_modal_primary_action %}\n        <sw-button\n            :disabled="primaryActionDisabled"\n            variant="primary"\n            @click="onSendDocument"\n        >\n            {{ $tc(\'sw-order.documentCard.labelSendDocument\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',inject:["mailService","repositoryFactory"],mixins:["notification"],props:{document:{type:Object,required:!0},order:{type:Object,required:!0}},data:function(){return{isLoading:!1,mailTemplateId:null,subject:"",recipient:"",content:""}},computed:{mailTemplateRepository:function(){return this.repositoryFactory.create("mail_template")},mailTemplateCriteria:function(){var e=new d(1,25);return e.addAssociation("mailTemplateType"),e.addFilter(d.equalsAny("mailTemplateType.technicalName",["delivery_mail","invoice_mail","credit_note_mail","cancellation_mail"])),e},mailTemplateSendCriteria:function(){var e=new d(1,25);return e.addAssociation("mailTemplateType"),e},primaryActionDisabled:function(){return null===this.mailTemplateId||this.subject.length<=0||this.recipient.length<=0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.recipient=this.order.orderCustomer.email,this.setEmailTemplateAccordingToDocumentType()},setEmailTemplateAccordingToDocumentType:function(){var e=this,n={invoice:"invoice_mail",credit_note:"credit_note_mail",delivery_note:"delivery_mail",storno:"cancellation_mail"};n.hasOwnProperty(this.document.documentType.technicalName)&&this.mailTemplateRepository.search(this.mailTemplateCriteria,Shopware.Context.api).then((function(t){var o=t.filter((function(t){return t.mailTemplateType.technicalName===n[e.document.documentType.technicalName]})).first();o&&(e.mailTemplateId=o.id,e.onMailTemplateChange(o.id,o))}))},onMailTemplateChange:function(e,n){var t=this;if(null===e)return this.subject="",void(this.content="");this.subject=n.subject,this.mailService.buildRenderPreview(n.mailTemplateType,n).then((function(e){t.content=e}))},onSendDocument:function(){var e=this;this.isLoading=!0,this.mailTemplateRepository.get(this.mailTemplateId,Shopware.Context.api,this.mailTemplateSendCriteria).then((function(n){e.mailService.sendMailTemplate(e.recipient,"".concat(e.order.orderCustomer.firstName," ").concat(e.order.orderCustomer.lastName),a(a({},n),{subject:e.subject,recipient:e.recipient}),{getIds:function(){}},e.order.salesChannelId,!1,[e.document.id],{order:e.order,salesChannel:e.order.salesChannel}).catch((function(){e.createNotificationError({message:e.$tc("sw-order.documentSendModal.errorMessage")}),e.$emit("modal-close")})).then((function(){e.$emit("document-sent")})).finally((function(){e.isLoading=!1}))}))}}}},ABfy:function(e,n,t){},lUUh:function(e,n,t){var o=t("ABfy");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("P8hj").default)("0a9672f6",o,!0,{})}}]);