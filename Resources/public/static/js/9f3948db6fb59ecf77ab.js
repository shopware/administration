"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[48828],{648828:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var o={template:'\n{% block sw_order_document_settings_modal_form_first_row %}\n<sw-container\n    columns="1fr 1fr 1fr"\n    gap="0 14px"\n>\n    \n    {% block sw_order_document_settings_modal_form_document_number %}\n    <sw-text-field\n        v-model:value="documentConfig.documentNumber"\n        :label="$tc(\'sw-order.documentModal.labelDeliveryNoteNumber\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_document_date %}\n    <sw-datepicker\n        v-model:value="documentConfig.documentDate"\n        date-type="date"\n        hide-hint\n        :label="$tc(\'sw-order.documentModal.labelDocumentDate\')"\n        :placeholder="$tc(\'sw-datepicker.date.placeholder\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_settings_modal_form_document_delivery_date %}\n    <sw-datepicker\n        v-model:value="documentConfig.custom.deliveryDate"\n        date-type="date"\n        required\n        hide-hint\n        :label="$tc(\'sw-order.documentModal.labelDeliveryDate\')"\n        :placeholder="$tc(\'sw-datepicker.date.placeholder\')"\n    />\n    {% endblock %}\n</sw-container>\n{% endblock %}\n',inject:["feature"],emits:["loading-document","loading-preview"],data(){return{documentConfig:{custom:{deliveryDate:new Date().toISOString(),deliveryNoteDate:new Date().toISOString()},documentNumber:0,documentComment:"",documentDate:""}}},created(){this.createdComponent()},methods:{onCreateDocument(e=!1){this.$emit("loading-document"),this.documentNumberPreview===this.documentConfig.documentNumber?this.numberRangeService.reserve(`document_${this.currentDocumentType.technicalName}`,this.order.salesChannelId,!1).then(t=>{this.documentConfig.custom.deliveryNoteNumber=t.number,t.number!==this.documentConfig.documentNumber&&this.createNotificationInfo({message:this.$tc("sw-order.documentCard.info.DOCUMENT__NUMBER_WAS_CHANGED")}),this.documentConfig.documentNumber=t.number,this.callDocumentCreate(e)}):(this.documentConfig.custom.deliveryNoteNumber=this.documentConfig.documentNumber,this.callDocumentCreate(e))},onPreview(){this.$emit("loading-preview"),this.documentConfig.custom.deliveryNoteNumber=this.documentConfig.documentNumber,this.$super("onPreview")}}}}}]);