(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[66598],{623452:function(){},266598:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t}}),i(689242);var t={template:'\n{% block sw_order_document_order_inline_field %}\n<div class="sw-order-inline-field">\n\n    <slot v-if="editable">\n        <sw-confirm-field\n            :value="value"\n            :required="required"\n            @input="onInput"\n        />\n    </slot>\n    <span v-else>\n        {{ displayValue }}\n    </span>\n</div>\n{% endblock %}\n',props:{value:{type:String,required:!1,default:""},displayValue:{type:String,required:!0,default:""},editable:{type:Boolean,required:!0,default:!1},required:{type:Boolean,required:!1,default:!1}},methods:{onInput(e){this.$emit("update:value",e)}}}},689242:function(e,n,i){var t=i(623452);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),i(745346).Z("221bdfc7",t,!0,{})}}]);