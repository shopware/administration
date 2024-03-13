"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[46464],{46464:function(e,t,i){i.r(t),i.d(t,{default:function(){return s}});var s={template:'\n{% block sw_customField_type_base_content %}\n{% parent() %}\n\n\n{% block sw_custom_field_type_date_container %}\n<sw-container\n    columns="1fr 1fr"\n    gap="20px"\n>\n    \n    {% block sw_custom_field_type_date_container_type %}\n    <sw-select-field\n        v-model:value="currentCustomField.config.dateType"\n        :label="$tc(\'sw-settings-custom-field.customField.detail.labelDateType\')"\n        :options="types"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_type_date_container_time_format %}\n    <sw-select-field\n        v-if="[\'time\', \'datetime\'].includes(currentCustomField.config.dateType)"\n        v-model:value="currentCustomField.config.config.time_24hr"\n        :label="$tc(\'sw-settings-custom-field.customField.detail.labelTimeForm\')"\n        :options="timeForms"\n    />\n    {% endblock %}\n</sw-container>\n{% endblock %}\n{% endblock %}\n',data(){return{propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel"),helpText:this.$tc("sw-settings-custom-field.customField.detail.labelHelpText")},types:[{id:"datetime",name:this.$tc("sw-settings-custom-field.customField.detail.labelDatetime")},{id:"date",name:this.$tc("sw-settings-custom-field.customField.detail.labelDate")},{id:"time",name:this.$tc("sw-settings-custom-field.customField.detail.labelTime")}],timeForms:[{id:"true",name:this.$tc("sw-settings-custom-field.customField.detail.labelYes")},{id:"false",name:this.$tc("sw-settings-custom-field.customField.detail.labelNo")}]}},created(){this.createdComponent()},methods:{createdComponent(){this.currentCustomField.config.hasOwnProperty("dateType")||this.$set(this.currentCustomField.config,"dateType","datetime"),this.currentCustomField.config.hasOwnProperty("config")||this.$set(this.currentCustomField.config,"config",{time_24hr:!0})}}}}}]);