(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[260],{MUGe:function(e,n,t){"use strict";t.r(n);t("UxP/");var s=Shopware.State;n.default={template:'\n{% block sw_flow_sequence_selector %}\n<div class="sw-flow-sequence-selector">\n    \n    {% block sw_flow_sequence_selector_title %}\n    <div class="sw-flow-sequence-selector__title">\n        <slot name="title">\n            <h4>{{ title }}</h4>\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_selector_help_text %}\n    <div class="sw-flow-sequence-selector__help-text">\n        <slot name="helpText">\n            <p v-html="helpText"></p>\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_selector_actions %}\n    <div class="sw-flow-sequence-selector__actions">\n        \n        {% block sw_flow_sequence_selector_if_condition %}\n        <sw-button\n            class="sw-flow-sequence-selector__add-condition"\n            :disabled="disabled"\n            @click="addIfCondition"\n        >\n\n            \n            {% block sw_flow_sequence_selector_then_action_icon_rule %}\n            <sw-icon\n                size="16"\n                name="regular-rule-s"\n            />\n            {% endblock %}\n\n            {{ $tc(\'sw-flow.detail.sequence.selectorIfCondition\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_selector_then_action %}\n        <sw-button\n            class="sw-flow-sequence-selector__add-action"\n            :disabled="disabled"\n            @click="addThenAction"\n        >\n\n            \n            {% block sw_flow_sequence_selector_then_action_icon_file %}\n            <sw-icon\n                size="16"\n                name="regular-file-edit-s"\n            />\n            {% endblock %}\n\n            {{ $tc(\'sw-flow.detail.sequence.selectorThenAction\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_selector_extension_options %}{% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{title:function(){return!this.sequence.parentId&&this.sequence.position>1?this.$tc("sw-flow.detail.sequence.selectorTitleAddSequence"):this.$tc("sw-flow.detail.sequence.selectorTitle")},helpText:function(){var e=this.sequence,n=e.parentId,t=e.position,s=e.trueCase;return n||1!==t?!n&&t>1?this.$tc("sw-flow.detail.sequence.selectorHelpTextAddSequence"):s?this.$tc("sw-flow.detail.sequence.selectorHelpTextTrueCondition"):this.$tc("sw-flow.detail.sequence.selectorHelpTextFalseCondition"):this.$tc("sw-flow.detail.sequence.selectorHelpText")}},methods:{addIfCondition:function(){s.commit("swFlowState/updateSequence",{id:this.sequence.id,ruleId:""})},addThenAction:function(){s.commit("swFlowState/updateSequence",{id:this.sequence.id,actionName:""})}}}},"UxP/":function(e,n,t){var s=t("l/jc");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("P8hj").default)("1154dfc2",s,!0,{})},"l/jc":function(e,n,t){}}]);