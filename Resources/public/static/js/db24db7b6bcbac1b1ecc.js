(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[50],{ZoJH:function(e,t,n){},rvl1:function(e,t,n){"use strict";n.r(t);n("s6O9");var o=Shopware.Data.Criteria;t.default={template:'\n{% block sw_bulk_edit_order_documents_download_documents %}\n<div\n    v-if="documentTypes && documentTypes.total > 0"\n    class="sw-bulk-edit-order-documents-download-documents"\n>\n    \n    {% block sw_bulk_edit_order_documents_download_documents_content %}\n    <sw-checkbox-field\n        v-for="documentType in documentTypes"\n        :key="documentType.id"\n        v-model="documentType.selected"\n        :label="documentType.translated.name"\n        class="sw-bulk-edit-order-documents-download-documents__checkbox"\n        :class="`is--${documentType.technicalName}`"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[Shopware.Mixin.getByName("notification")],computed:{documentTypeRepository:function(){return this.repositoryFactory.create("document_type")},documentTypeCriteria:function(){var e=new o(1,100);return e.addSorting(o.sort("name","ASC")),e},documentTypes:{get:function(){var e,t,n;return null===(e=Shopware.State.get("swBulkEdit"))||void 0===e||null===(t=e.orderDocuments)||void 0===t||null===(n=t.download)||void 0===n?void 0:n.value},set:function(e){Shopware.State.commit("swBulkEdit/setOrderDocumentsValue",{type:"download",value:e})}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.getDocumentTypes().then((function(t){t.forEach((function(e){e.selected=!1})),e.documentTypes=t})).catch((function(t){e.documentTypes=[],e.createNotificationError({message:t.message})}))},getDocumentTypes:function(){return this.documentTypeRepository.search(this.documentTypeCriteria)}}}},s6O9:function(e,t,n){var o=n("ZoJH");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("61d8c13f",o,!0,{})}}]);