(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[323],{"2ISo":function(e,n,i){var t=i("C5fP");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i("ydqr").default)("e8779f1c",t,!0,{})},C5fP:function(e,n,i){},u8Ms:function(e,n,i){"use strict";i.r(n);i("2ISo"),n.default={template:'\n{% block sw_order_document_order_inline_field %}\n<div class="sw-order-inline-field">\n\n    <slot v-if="editable">\n        <sw-confirm-field\n            :value="value"\n            :required="required"\n            @input="onInput"\n        />\n    </slot>\n    <span v-else>\n        {{ displayValue }}\n    </span>\n</div>\n{% endblock %}\n',props:{value:{type:String,required:!1,default:""},displayValue:{type:String,required:!0,default:""},editable:{type:Boolean,required:!0,default:!1},required:{type:Boolean,required:!1,default:!1}},methods:{onInput:function(e){this.$emit("input",e)}}}}}]);