(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[555],{zlzq:function(e,n,s){"use strict";s.r(n);n.default={template:'\n{% block sw_flow_sequence_modal %}\n<component\n    :is="modalName"\n    v-bind="{ sequence, action }"\n    @process-finish="processSuccess"\n    @modal-close="onClose"\n/>\n{% endblock %}\n',props:{sequence:{type:Object,required:!0},modalName:{type:String,required:!0},action:{type:String,required:!1,default:null}},methods:{processSuccess:function(e){this.$emit("process-finish",e)},onClose:function(){this.$emit("modal-close")}}}}}]);