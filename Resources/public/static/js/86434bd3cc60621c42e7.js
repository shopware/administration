(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77225],{750301:function(){},777225:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return n}}),l(639985);var n={template:'\n{% block sw_order_state_select_v2 %}\n<div\n    class="sw-order-state-select-v2"\n    :class="`sw-order-state-select-v2__${stateType}`"\n>\n    \n    {% block sw_order_state_select_v2_field %}\n    <sw-single-select\n        id="state"\n        v-model:value="selectedActionName"\n        :class="`${selectStyle} ${backgroundStyle}`"\n        :disabled="!selectable || undefined"\n        label-property="name"\n        value-property="id"\n        :placeholder="selectPlaceholder"\n        :label="label"\n        :options="transitionOptions"\n        size="small"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["state-select"],props:{transitionOptions:{type:Array,required:!1,default(){return[]}},stateType:{type:String,required:!0},roundedStyle:{type:Boolean,required:!1,default:!1},placeholder:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},backgroundStyle:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},data(){return{selectedActionName:null}},computed:{selectStyle(){return`sw-order-state-select-v2__field${this.roundedStyle?"--rounded":""}`},selectPlaceholder(){return this.placeholder?this.placeholder:this.$tc("sw-order.stateCard.labelSelectStatePlaceholder")},selectable(){return!this.disabled&&this.transitionOptions.length>0}},watch:{selectedActionName(){null!==this.selectedActionName&&this.onStateChangeClicked()}},methods:{onStateChangeClicked(){this.$emit("state-select",this.stateType,this.selectedActionName),this.$nextTick(()=>{this.selectedActionName=null})}}}},639985:function(e,t,l){var n=l(750301);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),l(745346).Z("3acdd3db",n,!0,{})}}]);