(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[86741],{80962:function(){},86741:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(44548);let{Component:o,State:s}=Shopware,{mapGetters:c}=o.getComponentHelper();var i={template:'<div class="sw-flow-sequence-action-error">\n    <div class="sw-flow-sequence-action-error__content">\n        <slot name="content"></slot>\n    </div>\n\n    <sw-context-button\n        class="sw-flow-sequence-action-error__context-button"\n    >\n        <sw-context-menu-item\n            variant="danger"\n            class="sw-flow-sequence-action-error__delete-action"\n            @click="removeWarning(sequence.id)"\n        >\n            {{ $tc(\'sw-flow.actions.contextButton.deleteAction\') }}\n        </sw-context-menu-item>\n    </sw-context-button>\n</div>\n',props:{sequence:{type:Object,required:!0}},computed:{...c("swFlowState",["sequences"])},methods:{removeWarning(e){let n=this.sequences.find(n=>n.id===e);n?.id&&this.sequences.filter(t=>t.parentId===n.parentId&&t.trueCase===n.trueCase&&t.id!==e).forEach((e,n)=>{s.commit("swFlowState/updateSequence",{id:e.id,position:n+1})}),s.commit("swFlowState/removeSequences",[e])}}}},44548:function(e,n,t){var o=t(80962);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),t(45346).Z("747a4276",o,!0,{})}}]);