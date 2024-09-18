(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[2102],{459421:function(){},902102:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(703834);let{Mixin:o,Classes:{ShopwareError:a}}=Shopware;var l={template:'\n{% block sw_flow_app_action_modal %}\n<sw-modal\n    class="sw-flow-app-action-modal"\n    @modal-close="onClose"\n>\n    <template #modal-header>\n        \n        {% block sw_flow_app_action_modal_header %}\n        <div class="sw-flow-app-action-modal__header">\n            {{ actionLabel }}\n            <span class="sw-flow-app-action-modal__app-badge">\n                {{ appBadge }}\n            </span>\n        </div>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_flow_app_action_modal_content %}\n    \n    {% block sw_flow_app_action_modal_headcontent %}\n    <div\n        v-if="headline || paragraph"\n        class="sw-flow-app-action-modal__headcontent"\n    >\n        \n        {% block sw_flow_app_action_modal_headline %}\n        <div\n            v-if="headline"\n            class="sw-flow-app-action-modal__headline"\n        >\n            {{ headline }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_flow_app_action_modal_paragraph %}\n        <div\n            v-if="paragraph"\n            class="sw-flow-app-action-modal__paragraph"\n        >\n            {{ paragraph }}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n    <sw-form-field-renderer\n        v-for="field in fields"\n        :key="field.name"\n        v-model:value="config[field.name]"\n        :type="field.type"\n        :config="getConfig(field)"\n        :error="errors[field.name]"\n        @update:value="onChange($event, field)"\n    />\n    {% endblock %}\n    <template #modal-footer>\n        \n        {% block sw_flow_app_action_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-app-action-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_app_action_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-app-action-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-flow.modals.buttonSaveAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl"],emits:["process-finish","modal-close"],mixins:[o.getByName("placeholder"),o.getByName("notification")],props:{sequence:{type:Object,required:!0}},data(){return{config:{},fields:[],errors:{}}},computed:{actionLabel(){return this.sequence?.propsAppFlowAction?.translated?.label||this.sequence?.propsAppFlowAction?.label},appBadge(){return this.sequence?.propsAppFlowAction?.app?.label},currentLocale(){return Shopware.State.get("session").currentLocale},headline(){return this.sequence?.propsAppFlowAction?.translated?.headline||this.sequence?.propsAppFlowAction?.headline},paragraph(){return this.sequence?.propsAppFlowAction?.translated?.description||this.sequence?.propsAppFlowAction?.description}},created(){this.createdComponent()},methods:{createdComponent(){this.getFields(),this.sequence?.config&&Object.entries({...this.sequence.config}).forEach(([e,n])=>{this.config[e]="object"==typeof n&&void 0!==n.value?n.value:n})},onChange(e,n){this.handleValid(n,e)},isValid(){return this.errors={},this.fields.forEach(e=>{let n=this.config[e.name]??null;this.handleValid(e,n)}),0===Object.keys(this.errors).length},handleValid(e,n){let t=n;if("object"==typeof t&&(t?.length===0||t?.value?.length===0)&&(t=null),e.required&&!t&&"boolean"!=typeof t){this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.config,[e.name]):delete this.config[e.name],this.isCompatEnabled("INSTANCE_SET")?this.$set(this.errors,e.name,new a({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})):this.errors[e.name]=new a({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"});return}this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.errors,[e.name]):delete this.errors[e.name]},onSave(){if(!this.isValid()||!this.sequence?.propsAppFlowAction?.app?.active)return;let e=this.buildConfig(),n={...this.sequence,config:e};this.$emit("process-finish",n),this.onClose()},buildConfig(){let e={};return this.fields.forEach(n=>{this.config[n.name]?.length!==0&&null!==this.config[n.name]&&(e[n.name]=this.config[n.name])}),e},onClose(){this.$emit("modal-close")},getFields(){this.sequence.propsAppFlowAction?.config.forEach(e=>{this.config[e.name]=this.convertDefaultValue(e.type,e.defaultValue),this.fields.push(e),this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(this.errors,e.name):delete this.errors[e.name]})},convertDefaultValue(e,n){return void 0===n?null:["int","float"].includes(e)?parseInt(n,10):["bool","checkbox"].includes(e)?!!n:["date","datetime","time"].includes(e)?null:n},getConfig(e){let n={label:e.label,placeholder:e.placeHolder,disabled:e.disabled,required:e.required,helpText:this.helpText(e)};return"colorpicker"===e.type?(n.componentName="sw-colorpicker",n.zIndex=1e3,n.colorOutput="hex"):"text-editor"===e.type?n.componentName="sw-text-editor":["single-select","multi-select"].includes(e.type)&&(n.componentName=`sw-${e.type}`,n.options=e.options),n},helpText(e){if(void 0===e.helpText)return null;let n=JSON.parse(JSON.stringify(e.helpText));return n[this.currentLocale]??n[Shopware.Context.app.fallbackLocale]??null}}}},703834:function(e,n,t){var o=t(459421);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),t(745346).Z("5792f829",o,!0,{})}}]);