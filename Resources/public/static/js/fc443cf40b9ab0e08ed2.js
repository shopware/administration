(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77632],{151154:function(){},677632:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}}),t(705221);let{State:o}=Shopware;var d={template:'\n{% block sw_bulk_edit_order_documents_generate_invoice %}\n<div class="sw-bulk-edit-order-documents-generate-invoice">\n    \n    {% block sw_bulk_edit_order_documents_generate_invoice_datepicker %}\n    <sw-datepicker\n        v-model:value="generateData.documentDate"\n        class="sw-bulk-edit-order-documents-generate-invoice__item"\n        :label="$tc(\'sw-bulk-edit.order.documents.generateInvoice.labelDatePicker\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_order_documents_generate_invoice_textarea %}\n    <sw-textarea-field\n        v-model:value="generateData.documentComment"\n        :label="$tc(\'sw-bulk-edit.order.documents.generateInvoice.labelTextarea\')"\n        :placeholder="$tc(\'sw-bulk-edit.order.documents.generateInvoice.placeholderTextarea\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_order_documents_generate_invoice_placeholder %}\n    {% endblock %}\n</div>\n{% endblock %}\n',computed:{generateData:{get(){return o.get("swBulkEdit")?.orderDocuments?.invoice?.value},set(e){o.commit("swBulkEdit/setOrderDocumentsValue",{type:"invoice",value:e})}}}}},705221:function(e,n,t){var o=t(151154);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),t(745346).Z("3b2b16b7",o,!0,{})}}]);