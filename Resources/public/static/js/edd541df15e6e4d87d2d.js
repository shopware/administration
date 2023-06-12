(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[53],{"3FMM":function(t,e,i){var n=i("DrTS");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("ydqr").default)("660a8568",n,!0,{})},DrTS:function(t,e,i){},gRgf:function(t,e,i){"use strict";i.r(e);var n=i("XkwL"),l=i.n(n);i("3FMM"),e.default={template:'\n{% block sw_bulk_edit_save_modal_confirm %}\n<div class="sw-bulk-edit-save-modal-confirm">\n    <p class="sw-bulk-edit-save-modal__help-text">\n        {{ $tc(\'sw-bulk-edit.modal.confirm.description\', itemTotal, {itemCount: itemTotal}) }}\n    </p>\n\n    \n    {% block sw_bulk_edit_save_modal_confirm_trigger_flows %}\n    <div\n        v-if="triggeredFlows.length > 0"\n        class="sw-bulk-edit-save-modal-confirm__trigger-flows"\n    >\n        \n        {% block sw_bulk_edit_save_modal_confirm_trigger_flows_switch %}\n        <sw-field\n            v-if="!bulkEditData?.statusMails?.isChanged"\n            v-model="isFlowTriggered"\n            type="switch"\n            name="sw-bulk-edit-save-modal-confirm-trigger-flows-switch"\n            class="sw-bulk-edit-save-modal-confirm__trigger-flows-switch"\n            :label="$tc(\'sw-bulk-edit.modal.confirm.switchLabel\')"\n            :help-text="$tc(\'sw-bulk-edit.modal.confirm.switchHelpText\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_bulk_edit_save_modal_confirm_trigger_flows_alert %}\n        <sw-alert\n            v-show="isFlowTriggered"\n            class="sw-bulk-edit-save-modal-confirm__trigger-flows-alert"\n        >\n            <p>{{ $tc(\'sw-bulk-edit.modal.confirm.alertTitle\') }}</p>\n            <span>{{ triggeredFlows.join(\', \') }}</span>\n        </sw-alert>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    <sw-alert\n        variant="warning"\n        class="sw-bulk-edit-save-modal__warning"\n    >\n        {{ $tc(\'sw-bulk-edit.modal.warningText\') }}\n    </sw-alert>\n</div>\n{% endblock %}\n',props:{itemTotal:{required:!0,type:Number},bulkEditData:{type:Object,required:!1,default:function(){return{}}}},computed:{isFlowTriggered:{get:function(){return Shopware.State.get("swBulkEdit").isFlowTriggered},set:function(t){Shopware.State.commit("swBulkEdit/setIsFlowTriggered",t)}},triggeredFlows:function(){var t=this,e=[];return Object.entries(this.bulkEditData).forEach((function(i){var n=l()(i,2),s=n[0],o=n[1];s===t.$tc("sw-bulk-edit.modal.confirm.triggeredFlows.".concat(s,".key"))&&!0===o.isChanged&&e.push(t.$tc("sw-bulk-edit.modal.confirm.triggeredFlows.".concat(s,".label")))})),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.updateButtons(),this.setTitle()},setTitle:function(){this.$emit("title-set",this.$tc("sw-bulk-edit.modal.confirm.title"))},updateButtons:function(){var t=[{key:"cancel",label:this.$tc("global.sw-modal.labelClose"),position:"left",action:"",disabled:!1},{key:"next",label:this.$tc("sw-bulk-edit.modal.confirm.buttons.applyChanges"),position:"right",variant:"primary",action:"process",disabled:!1}];this.$emit("buttons-update",t)}}}}}]);