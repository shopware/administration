"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[24529],{24529:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});let{Component:o}=Shopware,{Criteria:c}=Shopware.Data,{mapState:l}=o.getComponentHelper(),{ShopwareError:s}=Shopware.Classes;var d={template:'\n{% block sw_flow_generate_document_modal %}\n<sw-modal\n    class="sw-flow-generate-document-modal"\n    :title="$tc(\'sw-flow.modals.document.titleCreateDocument\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_generate_document_modal_document_type_multiple %}\n    <sw-multi-select\n        v-model:value="documentTypesSelected"\n        name="sw-field--documentTypesSelected"\n        required\n        class="sw-flow-generate-document-modal__type-multi-select"\n        label-property="translated.name"\n        value-property="technicalName"\n        :options="documentTypes"\n        :label="$tc(\'sw-flow.modals.document.labelDocumentType\')"\n        :placeholder="$tc(\'sw-flow.modals.document.placeholderDocumentType\')"\n        :error="fieldError"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_generate_document_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_generate_document_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-generate-document-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_generate_document_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-generate-document-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],props:{sequence:{type:Object,required:!0}},data(){return{documentTypesSelected:[],fieldError:null}},computed:{documentTypeRepository(){return this.repositoryFactory.create("document_type")},documentTypeCriteria(){let e=new c(1,100);return e.addSorting(c.sort("name","ASC")),e},...l("swFlowState",["documentTypes"])},watch:{documentTypesSelected(e){e.length>0&&this.fieldError&&(this.fieldError=null)}},created(){this.createdComponent()},methods:{createdComponent(){this.sequence?.config?.documentType?this.documentTypesSelected=[this.sequence.config]:this.documentTypesSelected=this.sequence?.config?.documentTypes||[],this.documentTypesSelected=this.documentTypesSelected.map(e=>e.documentType),this.documentTypes.length||this.documentTypeRepository.search(this.documentTypeCriteria).then(e=>{Shopware.State.commit("swFlowState/setDocumentTypes",e)})},onClose(){this.$emit("modal-close")},onAddAction(){if(!this.documentTypesSelected.length){this.fieldError=new s({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"});return}let e={...this.sequence},t=this.documentTypesSelected.map(e=>({documentType:e,documentRangerType:`document_${e}`}));e={...e,config:{documentTypes:t}},this.$emit("process-finish",e)}}}}}]);