(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[648],{"5Cml":function(t,e,n){"use strict";n.r(e);var r=n("CsSd"),a=n.n(r);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l=Shopware.Context,s=Shopware.Data.Criteria,i=Shopware.Component.getComponentHelper().mapPropertyErrors;e.default={template:'\n{% block sw_settings_tax_rule_modal %}\n<sw-modal\n    :title="$tc(\'sw-settings-tax.taxRuleCard.labelCountryName\')"\n    class="sw-settings-tax-rule-modal__settings-modal"\n    @modal-close="$emit(\'modal-close\')"\n>\n    \n    {% block sw_settings_tax_rule_modal_form_first_row %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 32px"\n    >\n        \n        {% block sw_settings_tax_rule_modal_country_select %}\n        <sw-entity-single-select\n            v-model="taxRule.countryId"\n            show-clearable-button\n            required\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelCountryName\')"\n            :help-text="$tc(\'sw-settings-tax.taxRuleCard.tooltipCountries\')"\n            :error="taxRuleCountryIdError"\n            :criteria="countryCriteria"\n            entity="country"\n        />\n        {% endblock %}\n        \n        {% block sw_settings_tax_rule_modal_type_select %}\n        <sw-entity-single-select\n            v-model="taxRule.taxRuleTypeId"\n            show-clearable-button\n            required\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelAppliesOn\')"\n            label-property="typeName"\n            :error="taxRuleTaxRuleTypeIdError"\n            :criteria="taxRuleTypeCriteria"\n            entity="tax_rule_type"\n            @change="changeRuleType"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_rule_modal_form_second_row %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0 32px"\n    >\n        \n        {% block sw_settings_tax_rule_modal_additional_component %}\n        <component\n            :is="additionalComponent"\n            v-if="additionalComponent"\n            :tax-rule="taxRule"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_tax_rule_modal_tax_rate %}\n        <sw-number-field\n            v-model="taxRule.taxRate"\n            required\n            :digits="3"\n            :error="taxRuleTaxRateError"\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelTaxRate\')"\n        >\n            <template #suffix>\n                <span>\n                    <span v-html="$sanitize($tc(\'sw-settings-tax.general.taxRateSymbol\'))"></span>\n                </span>\n            </template>\n        </sw-number-field>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_rule_modal_form_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_tax_rule_modal_form_footer_cancel %}\n        <sw-button\n            size="small"\n            @click="$emit(\'modal-close\')"\n        >\n            {{ $tc(\'sw-settings-tax.taxRuleCard.labelCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_tax_rule_modal_form_footer_button_create %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onConfirm"\n        >\n            {{ $tc(\'sw-settings-tax.detail.buttonSave\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],props:{tax:{type:Object,required:!0},currentRule:{type:Object,required:!1,default:null}},data:function(){return{showModal:!1,taxRule:null,currentTaxRuleType:null}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({taxRuleRepository:function(){return this.repositoryFactory.create("tax_rule")},taxRuleTypeRepository:function(){return this.repositoryFactory.create("tax_rule_type")},additionalComponent:function(){if(!this.currentTaxRuleType)return null;var t=this.currentTaxRuleType.technicalName.replace(/_/g,"-");return this.$options.components["sw-settings-tax-rule-type-".concat(t)]},taxRuleTypeCriteria:function(){var t=new s(1,25);return t.addSorting(s.sort("position","ASC")),t},countryCriteria:function(){var t=new s(1,25);return t.addSorting(s.sort("name","ASC",!1)),t}},i("taxRule",["taxRuleTypeId","countryId","taxRate"])),created:function(){this.createdComponent()},methods:{changeRuleType:function(t){var e=this;this.taxRuleTypeRepository.get(t,l.api).then((function(t){e.currentTaxRuleType=t}))},createdComponent:function(){this.currentRule?(this.taxRule=this.currentRule,this.taxRule.taxRuleTypeId&&this.changeRuleType(this.taxRule.taxRuleTypeId)):(this.taxRule=this.taxRuleRepository.create(),this.taxRule.taxId=this.tax.id)},onConfirm:function(){var t=this;this.taxRuleRepository.save(this.taxRule,l.api).then((function(){t.isSaveSuccessful=!0,t.$emit("modal-close")})).catch((function(){t.isLoading=!1}))}}}}}]);