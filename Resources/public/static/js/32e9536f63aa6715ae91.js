(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[140],{DdT7:function(n,e,s){var t=s("Hab7");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,s("P8hj").default)("356ac93a",t,!0,{})},Hab7:function(n,e,s){},"vS/i":function(n,e,s){"use strict";s.r(e);s("DdT7"),e.default={template:'\n{% block sw_cms_missing_element_modal %}\n<sw-modal\n    class="sw-cms-missing-element-modal"\n    variant="small"\n    :title="$tc(\'sw-cms.components.cmsMissingElementModal.headline\')"\n    @modal-close="onClose"\n>\n\n    \n    {% block sw_cms_missing_element_modal_title %}\n    <p\n        class="sw-cms-missing-element-modal__title"\n        v-html="title"\n    ></p>\n    {% endblock %}\n\n    \n    {% block sw_cms_missing_element_modal_subtitle %}\n    <p class="sw-cms-missing-element-modal__subtitle">\n        {{ $tc(\'sw-cms.components.cmsMissingElementModal.subtitle\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_cms_missing_element_modal_paragraph %}\n    <p class="sw-cms-missing-element-modal__paragraph">\n        {{ $tc(\'sw-cms.components.cmsMissingElementModal.paragraph\') }}\n    </p>\n    {% endblock %}\n\n    <sw-checkbox-field\n        class="sw-cms-missing-element-modal__dont-remind"\n        {% if VUE3 %}\n        @update:value="onChangeDontRemindCheckbox()"\n        {% else %}\n        @change="onChangeDontRemindCheckbox()"\n        {% endif %}\n    >\n        <template #label>\n            {{ $tc(\'sw-app.component.sw-app-actions.dontAskMeAgain\') }}\n        </template>\n    </sw-checkbox-field>\n\n    <template #modal-footer>\n        \n        {% block sw_cms_missing_element_modal_button_cancel %}\n        <sw-button\n            class="sw-cms-missing-element-modal__button-cancel"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_cms_missing_element_modal_button_save %}\n        <sw-button\n            class="sw-cms-missing-element-modal__button-save"\n            size="small"\n            variant="primary"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-cms.components.cmsMissingElementModal.buttonSave\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n\n</sw-modal>\n{% endblock %}\n',props:{missingElements:{type:Array,required:!0,default:function(){return[]}}},computed:{element:function(){var n=this;return this.missingElements.map((function(e){return n.$tc("sw-cms.elements.".concat(e,".label"))})).join(", ")},title:function(){return this.$tc("sw-cms.components.cmsMissingElementModal.title",this.missingElements.length,{element:this.element})}},methods:{onClose:function(){this.$emit("modal-close")},onSave:function(){this.$emit("modal-save")},onChangeDontRemindCheckbox:function(){this.$emit("modal-dont-remind-change")}}}}}]);
//# sourceMappingURL=32e9536f63aa6715ae91.js.map