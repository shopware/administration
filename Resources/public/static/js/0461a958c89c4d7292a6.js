"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[20894],{920894:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var s={template:'\n{% block sw_bulk_edit_save_modal_error %}\n<div class="sw-bulk-edit-save-modal-error">\n    \n    {% block sw_bulk_edit_save_modal_error_icon %}\n    <sw-label\n        class="sw-bulk-edit-save-modal__icon"\n        appearance="pill"\n        variant="danger"\n    >\n        <sw-icon\n            name="regular-times-hexagon"\n            size="30px"\n        />\n    </sw-label>\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_save_modal_error_content %}\n    <p class="sw-bulk-edit-save-modal__help-text">\n        {{ $tc(\'sw-bulk-edit.modal.error.description\') }}\n    </p>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',created(){this.createdComponent()},methods:{createdComponent(){this.updateButtons(),this.setTitle()},setTitle(){this.$emit("title-set",this.$tc("sw-bulk-edit.modal.error.title"))},updateButtons(){let e=[{key:"close",label:this.$tc("global.sw-modal.labelClose"),position:"right",variant:"primary",action:"",disabled:!1}];this.$emit("buttons-update",e)}}}}}]);