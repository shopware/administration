(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[467],{AXLp:function(e,t,n){"use strict";n.r(t);n("Wj4u"),t.default={template:'\n{% block sw_settings_snippet_filter_switch %}\n<div class="sw-settings-snippet-filter-switch">\n    <slot name="template">\n        <div :class="fieldClasses">\n            \n            {% block sw_settings_snippet_filter_switch_field %}\n            <slot name="field">\n                <sw-switch-field\n                    :name="name"\n                    :value="value"\n                    :label="label"\n                    {% if VUE3 %}\n                    @update:value="onChange"\n                    {% else %}\n                    @change="onChange"\n                    {% endif %}\n                />\n            </slot>\n            {% endblock %}\n        </div>\n    </slot>\n</div>\n{% endblock %}\n',props:{label:{type:String,required:!1,default:""},name:{type:String,required:!0},group:{type:String,required:!1,default:null},borderTop:{type:Boolean,required:!1,default:!1},borderBottom:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:"small",validator:function(e){return!e.length||["small","large"].includes(e)}},value:{type:Boolean,required:!1,default:!1}},computed:{fieldClasses:function(){return["sw-settings-snippet-filter-switch__field","sw-settings-snippet-filter-switch--".concat(this.type),{"border-top":this.borderTop,"border-bottom":this.borderBottom}].join(" ")}},methods:{onChange:function(e){var t=this.name,n=this.group;this.$emit("change",{value:e,name:t,group:n})}}}},Wj4u:function(e,t,n){var i=n("eGJQ");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("0e13fd0a",i,!0,{})},eGJQ:function(e,t,n){}}]);