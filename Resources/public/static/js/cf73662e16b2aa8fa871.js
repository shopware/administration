(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[52],{BKTf:function(e,n,t){"use strict";t.r(n);t("SDuz");var o=Shopware.Mixin,c=Shopware.Data.Criteria;n.default={template:'\n{% block sw_bulk_edit_order_documents %}\n<div class="sw-bulk-edit-order-documents">\n    \n    {% block sw_bulk_edit_order_documents_container %}\n    <sw-container\n        columns="1fr"\n        rows="50px"\n    >\n        \n        {% block sw_bulk_edit_order_documents_type %}\n        <sw-checkbox-field\n            v-for="document in documentTypes"\n            :key="document.id"\n            {% if VUE3 %}\n            v-model:value="value.documentType[document.technicalName]"\n            {% else %}\n            v-model="value.documentType[document.technicalName]"\n            {% endif %}\n            :label="document.name"\n            :disabled="documents?.disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_bulk_edit_order_documents_skip_sent_documents %}\n        <sw-switch-field\n            {% if VUE3 %}\n            v-model:value="value.skipSentDocuments"\n            {% else %}\n            v-model="value.skipSentDocuments"\n            {% endif %}\n            :label="$tc(\'sw-bulk-edit.order.status.documents.skipSentDocuments\')"\n            :disabled="documents?.disabled"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[o.getByName("notification")],props:{documents:{type:Object,required:!0},value:{type:Object,required:!0}},data:function(){return{documentTypes:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{documentTypeRepository:function(){return this.repositoryFactory.create("document_type")},documentTypeCriteria:function(){var e=new c(1,100);return e.addSorting(c.sort("name","ASC")),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.documentTypeRepository.search(this.documentTypeCriteria).then((function(n){e.documentTypes=n,e.documentTypes.forEach((function(n){e.value.documentType[n.technicalName]=null}))}))}}}},SDuz:function(e,n,t){var o=t("w4Wf");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("P8hj").default)("ad880ca2",o,!0,{})},w4Wf:function(e,n,t){}}]);