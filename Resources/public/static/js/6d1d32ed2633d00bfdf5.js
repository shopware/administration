(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[91159],{45494:function(){},91159:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return d}}),o(25228);let{Criteria:n}=Shopware.Data;var d={template:'\n{% block sw_bulk_edit_order_documents_download_documents %}\n<div\n    v-if="documentTypes && documentTypes.total > 0"\n    class="sw-bulk-edit-order-documents-download-documents"\n>\n    \n    {% block sw_bulk_edit_order_documents_download_documents_content %}\n    <sw-checkbox-field\n        v-for="documentType in documentTypes"\n        :key="documentType.id"\n        v-model:value="documentType.selected"\n        :label="documentType.translated.name"\n        class="sw-bulk-edit-order-documents-download-documents__checkbox"\n        :class="`is--${documentType.technicalName}`"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[Shopware.Mixin.getByName("notification")],computed:{documentTypeRepository(){return this.repositoryFactory.create("document_type")},documentTypeCriteria(){let e=new n(1,100);return e.addSorting(n.sort("name","ASC")),e},documentTypes:{get(){return Shopware.State.get("swBulkEdit")?.orderDocuments?.download?.value},set(e){Shopware.State.commit("swBulkEdit/setOrderDocumentsValue",{type:"download",value:e})}}},created(){this.createdComponent()},methods:{createdComponent(){this.getDocumentTypes().then(e=>{e.forEach(e=>{e.selected=!1}),this.documentTypes=e}).catch(e=>{this.documentTypes=[],this.createNotificationError({message:e.message})})},getDocumentTypes(){return this.documentTypeRepository.search(this.documentTypeCriteria)}}}},25228:function(e,t,o){var n=o(45494);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),o(45346).Z("4650721d",n,!0,{})}}]);