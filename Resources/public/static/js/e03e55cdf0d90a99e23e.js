(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[505],{"730g":function(e,t,n){"use strict";n.r(t);var a=Shopware.State;t.default={template:'\n{% block sw_bulk_edit_order_documents_generate_invoice_datepicker %}\n<template v-if="generateData?.custom">\n    <sw-datepicker\n        v-model="generateData.custom.deliveryDate"\n        class="sw-bulk-edit-order-documents-generate-invoice__item"\n        :label="$tc(\'sw-bulk-edit.order.documents.generateInvoice.labelDatePicker\')"\n    />\n    <sw-datepicker\n        v-model="generateData.custom.deliveryNoteDate"\n        class="sw-bulk-edit-order-documents-generate-invoice__item"\n        :label="$tc(\'sw-bulk-edit.order.documents.generateDeliveryNote.labelDeliveryDatePicker\')"\n    />\n</template>\n{% endblock %}\n',computed:{generateData:{get:function(){var e,t;return null===(e=a.get("swBulkEdit").orderDocuments)||void 0===e||null===(t=e.delivery_note)||void 0===t?void 0:t.value},set:function(e){a.commit("swBulkEdit/setOrderDocumentsValue",{type:"delivery_note",value:e})}}}}}}]);