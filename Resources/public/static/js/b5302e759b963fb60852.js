(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[261],{"0stp":function(e,n,s){"use strict";s.r(n);s("ORgw"),n.default={template:'\n{% block sw_flow_sequence %}\n<div class="sw-flow-sequence">\n    \n    {% block sw_flow_sequence_selector %}\n    <sw-flow-sequence-selector\n        v-if="isSelectorSequence"\n        :disabled="disabled"\n        :sequence="sequenceData"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition %}\n    <sw-flow-sequence-condition\n        v-if="isConditionSequence"\n        :disabled="disabled"\n        :sequence="sequenceData"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_action %}\n    <sw-flow-sequence-action\n        v-if="isActionSequence"\n        :sequence="sequenceData"\n        :disabled="disabled"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_extension %}{% endblock %}\n\n    \n    {% block sw_flow_sequence_true_block %}\n    <div\n        v-if="sequenceData.trueBlock"\n        class="sw-flow-sequence__true-block"\n        :class="trueBlockClasses"\n    >\n        <sw-flow-sequence\n            :sequence="sequenceData.trueBlock"\n            :disabled="disabled"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_false_block %}\n    <div\n        v-if="sequenceData.falseBlock"\n        class="sw-flow-sequence__false-block"\n    >\n        <sw-flow-sequence\n            :sequence="sequenceData.falseBlock"\n            :disabled="disabled"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{sequenceData:function(){var e=Object.values(this.sequence);return this.sequence.id||e.length>1?this.sequence:e[0]},isSelectorSequence:function(){return null===this.sequenceData.actionName&&null===this.sequenceData.ruleId},isConditionSequence:function(){return this.sequenceData.ruleId||""===this.sequenceData.ruleId},isActionSequence:function(){return!this.isSelectorSequence&&!this.isConditionSequence},trueBlockClasses:function(){var e,n;if(this.sequence.parentId||!this.isConditionSequence)return null;var s=null===(e=this.sequence)||void 0===e?void 0:e.falseBlock,c=null===(n=this.sequence)||void 0===n?void 0:n.trueBlock;return s&&c?(s=Object.values(s),c=Object.values(c),{"has--selector":null===s[0].actionName&&null===s[0].ruleId&&null===c[0].actionName&&null===c[0].ruleId}):null}}}},ORgw:function(e,n,s){var c=s("WQ0Y");c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);(0,s("ydqr").default)("39c5ee61",c,!0,{})},WQ0Y:function(e,n,s){}}]);