(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[611],{"056l":function(e,t,n){"use strict";n.r(t);t.default={template:'\n{% block sw_custom_field_type_base_content %}\n{% parent() %}\n\n\n{% block sw_custom_field_type_number_container %}\n<sw-container\n    columns="1fr 1fr"\n    gap="0 20px"\n>\n    \n    {% block sw_custom_field_type_number_container_numbertype %}\n    <sw-field\n        v-model="currentCustomField.config.numberType"\n        type="select"\n        :label="$tc(\'sw-settings-custom-field.customField.detail.labelNumberType\')"\n        :options="numberTypes"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_type_number_container_step %}\n    <sw-number-field\n        v-model="currentCustomField.config.step"\n        :label="$tc(\'sw-settings-custom-field.customField.detail.labelStep\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_type_number_container_min %}\n    <sw-number-field\n        v-model="currentCustomField.config.min"\n        :label="$tc(\'sw-settings-custom-field.customField.detail.labelMin\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_type_number_container_max %}\n    <sw-number-field\n        v-model="currentCustomField.config.max"\n        :label="$tc(\'sw-settings-custom-field.customField.detail.labelMax\')"\n    />\n    {% endblock %}\n</sw-container>\n{% endblock %}\n{% endblock %}\n',data:function(){return{propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel"),placeholder:this.$tc("sw-settings-custom-field.customField.detail.labelPlaceholder"),helpText:this.$tc("sw-settings-custom-field.customField.detail.labelHelpText")},numberTypes:[{id:"int",name:this.$tc("sw-settings-custom-field.customField.detail.labelInt")},{id:"float",name:this.$tc("sw-settings-custom-field.customField.detail.labelFloat")}]}},watch:{"currentCustomField.config.numberType":function(e){this.currentCustomField.type=e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.currentCustomField.config.numberType||this.$set(this.currentCustomField.config,"numberType","int")}}}}}]);