"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[92309],{192309:function(e,l,o){o.r(l),o.d(l,{default:function(){return r}});let{Component:n,Mixin:t}=Shopware,{ShopwareError:a}=Shopware.Classes,{mapState:s}=n.getComponentHelper();var r={template:'<sw-modal\n    class="sw-flow-grant-download-access-modal"\n    :title="$tc(\'sw-flow.modals.downloadAccess.titleSetDownloadAccess\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    <div class="sw-flow-grant-download-access-modal__content">\n        <sw-single-select\n            v-model:value="value"\n            name="sw-field--value"\n            class="sw-flow-grant-download-access-modal__value-field"\n            required\n            :label="$tc(\'sw-flow.modals.downloadAccess.labelValueField\')"\n            :placeholder="$tc(\'sw-flow.modals.downloadAccess.placeholderValueField\')"\n            :error="valueError"\n            :options="valueOptions"\n        />\n    </div>\n\n    <template #modal-footer>\n        <sw-button\n            class="sw-flow-grant-download-access-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n\n        <sw-button\n            class="sw-flow-grant-download-access-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-flow.modals.buttonSaveAction\') }}\n        </sw-button>\n    </template>\n</sw-modal>\n',mixins:[t.getByName("placeholder"),t.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data(){return{value:null,valueError:null}},computed:{valueOptions(){return[{value:!0,label:`${this.$tc("sw-flow.modals.downloadAccess.options.grant")}`},{value:!1,label:`${this.$tc("sw-flow.modals.downloadAccess.options.revoke")}`}]},...s("swFlowState",["triggerEvent","triggerActions"])},watch:{value(e){e&&this.valueError&&(this.valueError=null)}},created(){this.createdComponent()},methods:{createdComponent(){let{config:e}=this.sequence;this.value=e?.value},getConfig(){return{value:this.value}},fieldError(e){return"boolean"!=typeof e?new a({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"}):null},onSave(){if(this.valueError=this.fieldError(this.value),this.valueError)return;let e=this.getConfig(),l={...this.sequence,config:e};this.$emit("process-finish",l),this.onClose()},onClose(){this.valueError=null,this.$emit("modal-close")}}}}}]);