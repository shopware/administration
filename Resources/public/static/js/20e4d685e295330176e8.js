(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[336],{"0EG+":function(n,e,o){},"1NHg":function(n,e,o){var t=o("0EG+");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o("P8hj").default)("678672eb",t,!0,{})},"2XT5":function(n,e,o){"use strict";o.r(e);o("1NHg"),e.default={template:'\n{% block sw_order_state_change_modal %}\n<sw-modal\n    :title="modalTitle"\n    class="sw-order-state-change-modal"\n    @modal-close="onCancel"\n>\n\n    \n    {% block sw_order_state_change_modal_attach_documents_component %}\n    <sw-order-state-change-modal-attach-documents\n        :order="order"\n        :is-loading="isLoading"\n        @on-confirm="onDocsConfirm"\n    />\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',props:{order:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},technicalName:{type:String,required:!0}},data:function(){return{showModal:!1,userCanConfirm:!1}},computed:{modalTitle:function(){return this.$tc("sw-order.assignMailTemplateCard.cardTitle")}},methods:{onCancel:function(){this.$emit("page-leave")},onDocsConfirm:function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$emit("page-leave-confirm",n,e)}}}}}]);
//# sourceMappingURL=20e4d685e295330176e8.js.map