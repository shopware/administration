"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27259],{427259:function(e,t,s){s.r(t),s.d(t,{default:function(){return n}});var n={template:'\n{% block sw_custom_field_type_base %}\n<div class="sw-custom-field-type-base">\n    \n    {% block sw_custom_field_type_base_content %}\n    \n    {% block sw_custom_field_type_base_labels %}\n    <sw-custom-field-translated-labels\n        v-model:config="currentCustomField.config"\n        :disabled="!acl.can(\'custom_field.editor\')"\n        :property-names="propertyNames"\n        :locales="locales"\n    />\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl"],props:{currentCustomField:{type:Object,required:!0},set:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data(){return{propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel")}}},computed:{locales(){return this.set.config.hasOwnProperty("translated")&&!0===this.set.config.translated?Object.keys(this.$root.$i18n.messages):[this.$root.$i18n.fallbackLocale]}}}}}]);