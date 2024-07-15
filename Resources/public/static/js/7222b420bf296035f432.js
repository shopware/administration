(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[17782],{785506:function(){},517782:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}}),n(312104);let{Criteria:o}=Shopware.Data;var i={template:'\n{% block sw_order_select_document_type_modal %}\n<sw-modal\n    v-bind="$attrs"\n    :title="$tc(\'sw-order.components.selectDocumentTypeModal.title\')"\n    variant="small"\n    class="sw-order-select-document-type-modal"\n    @modal-close="$emit(\'modal-close\', false)"\n>\n\n    \n    {% block sw_order_select_document_type_modal_document_types %}\n    <sw-radio-field\n        v-if="!isLoading && documentTypes.length"\n        v-model:value="documentType"\n        :options="documentTypes"\n        class="sw-order-select-document-type-modal__radio-field"\n        @update:value="onRadioFieldChange"\n    />\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_order_select_document_type_modal_footer_action_cancel %}\n        <sw-button\n            @click="$emit(\'modal-close\', false)"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_select_document_type_modal_footer_action_create %}\n        <sw-button\n            variant="primary"\n            @click="$emit(\'modal-close\', true)"\n        >\n            {{ $tc(\'sw-order.components.selectDocumentTypeModal.primaryAction\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","feature"],props:{order:{type:Object,required:!0},value:{required:!1,type:Object,default:null}},data(){return{documentTypes:[],documentTypeCollection:null,documentType:null,invoiceExists:!1,isLoading:!1}},computed:{creditItems(){let e=[];return this.order.lineItems.forEach(t=>{"credit"===t.type&&e.push(t)}),e},documentRepository(){return this.repositoryFactory.create("document")},documentTypeRepository(){return this.repositoryFactory.create("document_type")},documentTypeCriteria(){return new o(1,100).addSorting(o.sort("name","ASC"))},documentCriteria(){let e=new o(1,100);return e.addFilter(o.equals("order.id",this.order.id)),e.addFilter(o.equals("documentType.technicalName","invoice")),e}},created(){this.createdComponent()},methods:{createdComponent(){this.isLoading=!0,this.documentRepository.searchIds(this.documentCriteria).then(e=>{this.invoiceExists=e.total>0,this.documentTypeRepository.search(this.documentTypeCriteria).then(e=>{this.documentTypeCollection=e,this.documentTypes=e.map(e=>{let t={value:e.id,name:e.translated.name,disabled:!this.documentTypeAvailable(e)};return"storno"===e.technicalName||"credit_note"===e.technicalName?this.addHelpTextToOption(t,e):t}),this.documentTypes.length&&(this.documentType=this.documentTypes.find(e=>!e.disabled).value,this.onRadioFieldChange()),this.isLoading=!1})})},documentTypeAvailable(e){return"storno"!==e.technicalName&&"credit_note"!==e.technicalName||("storno"===e.technicalName||"credit_note"===e.technicalName&&0!==this.creditItems.length)&&this.invoiceExists},addHelpTextToOption(e,t){return e.helpText=this.$tc(`sw-order.components.selectDocumentTypeModal.helpText.${t.technicalName}`),e},onRadioFieldChange(){this.$emit("update:value",this.documentTypeCollection.get(this.documentType))}}}},312104:function(e,t,n){var o=n(785506);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),n(745346).Z("9b27225c",o,!0,{})}}]);