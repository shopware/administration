(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[88321],{336469:function(){},288321:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(141324);var l={template:'\n{% block sw_order_saveable_field %}\n<sw-container\n    v-if="isEditing"\n    columns="1fr 20px 25px"\n    gap="0px 10px"\n    class="sw-order-saveable-field"\n>\n    \n    {% block sw_order_saveable_field_input %}\n    \n    {% block  sw_order_saveable_field_input_field%}\n    <component\n        :is="component"\n        ref="edit-field"\n        :value="value"\n        :placeholder="placeholder"\n        v-on="listeners"\n        @update:value="$emit(\'update:value\', $event)"\n    />\n    {% endblock %}\n    {% endblock %}\n    \n    {% block sw_order_saveable_field_actions %}\n    \n    {% block sw_order_saveable_field_cancel_button %}\n    <sw-button\n        size="x-small"\n        square\n        @click="onCancelButtonClicked"\n    >\n        <sw-icon\n            name="regular-times-xs"\n            small\n        />\n    </sw-button>\n    {%  endblock %}\n    {%  block sw_order_saveable_field_save_button %}\n    <sw-button\n        size="x-small"\n        variant="primary"\n        square\n        @click="onSaveButtonClicked"\n    >\n        <sw-icon\n            name="regular-checkmark-xxs"\n            small\n        />\n    </sw-button>\n    {%  endblock %}\n    {% endblock %}\n</sw-container>\n<div\n    v-else\n    role="button"\n    tabindex="0"\n    @click="onClick"\n    @keydown.enter="onClick"\n>\n    \n    {% block sw_order_saveable_field_content %}\n    <slot></slot>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["value-change","update:value"],props:{value:{required:!0,default:null},type:{type:String,required:!0,default:"text"},placeholder:{required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},data(){return{isEditing:!1,isLoading:!1}},computed:{component(){switch(this.type){case"checkbox":return"sw-checkbox-field";case"colorpicker":return"sw-colorpicker";case"compactColorpicker":return"sw-compact-colorpicker";case"date":return"sw-datepicker";case"email":return"sw-email-field";case"number":return"sw-number-field";case"password":return"sw-password-field";case"radio":return"sw-radio-field";case"select":return"sw-select-field";case"switch":return"sw-switch-field";case"textarea":return"sw-textarea-field";case"url":return"sw-url-field";default:return"sw-text-field"}},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},methods:{onClick(){this.editable&&(this.isEditing=!0)},onSaveButtonClicked(){this.isEditing=!1,this.$emit("value-change",this.$refs["edit-field"].currentValue)},onCancelButtonClicked(){this.isEditing=!1}}}},141324:function(e,n,t){var l=t(336469);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),t(745346).Z("e6360b6e",l,!0,{})}}]);