(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9850],{513022:function(){},409850:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return a}}),t(573577);var a={template:'\n{% block sw_bulk_edit_change_type %}\n<div class="sw-bulk-edit-change-type">\n    \n    {% block sw_bulk_edit_change_type_select_field %}\n    <sw-single-select\n        v-model:value="currentValue"\n        class="sw-bulk-edit-change-type__selection"\n        :options="options"\n        @update:value="onChangeType"\n    />\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_change_type_value_field %}\n    <slot\n        name="value-field"\n        v-bind="{ isDisplayingValue }"\n    >\n    </slot>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],emits:["update:value"],props:{value:{type:String,required:!0},allowOverwrite:{type:Boolean,required:!1,default:!1},allowClear:{type:Boolean,required:!1,default:!1},allowAdd:{type:Boolean,required:!1,default:!1},allowRemove:{type:Boolean,required:!1,default:!1}},data(){return{isDisplayingValue:!0}},computed:{currentValue:{get(){return this.value},set(e){this.isDisplayingValue="clear"!==e,this.$emit("update:value",e)}},options(){let e=[];return this.allowOverwrite&&e.push({value:"overwrite",label:this.$tc("sw-bulk-edit.changeTypes.overwrite")}),this.allowClear&&e.push({value:"clear",label:this.$tc("sw-bulk-edit.changeTypes.clear")}),this.allowAdd&&e.push({value:"add",label:this.$tc("sw-bulk-edit.changeTypes.add")}),this.allowRemove&&e.push({value:"remove",label:this.$tc("sw-bulk-edit.changeTypes.remove")}),e}},methods:{onChangeType(e){this.currentValue=e}}}},573577:function(e,l,t){var a=t(513022);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),t(745346).Z("0738c434",a,!0,{})}}]);