"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[75001],{75001:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});let{Context:a}=Shopware,{Criteria:l}=Shopware.Data,{mapPropertyErrors:r}=Shopware.Component.getComponentHelper();var o={template:'\n{% block sw_settings_tax_rule_modal %}\n<sw-modal\n    :title="$tc(\'sw-settings-tax.taxRuleCard.labelCountryName\')"\n    class="sw-settings-tax-rule-modal__settings-modal"\n    @modal-close="$emit(\'modal-close\')"\n>\n    \n    {% block sw_settings_tax_rule_modal_form_first_row %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 32px"\n    >\n        \n        {% block sw_settings_tax_rule_modal_country_select %}\n        <sw-entity-single-select\n            v-model:value="taxRule.countryId"\n            show-clearable-button\n            required\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelCountryName\')"\n            :help-text="$tc(\'sw-settings-tax.taxRuleCard.tooltipCountries\')"\n            :error="taxRuleCountryIdError"\n            :criteria="countryCriteria"\n            entity="country"\n        />\n        {% endblock %}\n        \n        {% block sw_settings_tax_rule_modal_type_select %}\n        <sw-entity-single-select\n            v-model:value="taxRule.taxRuleTypeId"\n            show-clearable-button\n            required\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelAppliesOn\')"\n            label-property="typeName"\n            :error="taxRuleTaxRuleTypeIdError"\n            :criteria="taxRuleTypeCriteria"\n            entity="tax_rule_type"\n            @update:value="changeRuleType"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_rule_modal_form_second_row %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0 32px"\n    >\n        \n        {% block sw_settings_tax_rule_modal_additional_component %}\n        <component\n            :is="additionalComponent"\n            v-if="additionalComponent"\n            :tax-rule="taxRule"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_tax_rule_modal_tax_rate %}\n        <sw-number-field\n            v-model:value="taxRule.taxRate"\n            required\n            :digits="3"\n            :error="taxRuleTaxRateError"\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelTaxRate\')"\n        >\n            <template #suffix>\n                <span>\n                    <span v-html="$sanitize($tc(\'sw-settings-tax.general.taxRateSymbol\'))"></span>\n                </span>\n            </template>\n        </sw-number-field>\n        {% endblock %}\n\n        \n        {% block sw_settings_tax_rule_modal_tax_active_from %}\n        <sw-datepicker\n            v-model:value="taxRule.activeFrom"\n            date-type="datetime"\n            :error="taxRuleActiveFromError"\n            :label="$tc(\'sw-settings-tax.taxRuleCard.labelActiveFrom\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_rule_modal_form_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_tax_rule_modal_form_footer_cancel %}\n        <sw-button\n            size="small"\n            @click="$emit(\'modal-close\')"\n        >\n            {{ $tc(\'sw-settings-tax.taxRuleCard.labelCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_tax_rule_modal_form_footer_button_create %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onConfirm"\n        >\n            {{ $tc(\'sw-settings-tax.detail.buttonSave\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","feature"],props:{tax:{type:Object,required:!0},currentRule:{type:Object,required:!1,default:null}},data(){return{showModal:!1,taxRule:null,currentTaxRuleType:null}},computed:{taxRuleRepository(){return this.repositoryFactory.create("tax_rule")},taxRuleTypeRepository(){return this.repositoryFactory.create("tax_rule_type")},additionalComponent(){if(!this.currentTaxRuleType)return null;let e=this.currentTaxRuleType.technicalName.replace(/_/g,"-");return`sw-settings-tax-rule-type-${e}`},taxRuleTypeCriteria(){let e=new l(1,25);return e.addSorting(l.sort("position","ASC")),e},countryCriteria(){let e=new l(1,25);return e.addSorting(l.sort("name","ASC",!1)),e},...r("taxRule",["taxRuleTypeId","countryId","taxRate","activeFrom"])},created(){this.createdComponent()},methods:{changeRuleType(e){this.taxRuleTypeRepository.get(e,a.api).then(e=>{this.currentTaxRuleType=e})},createdComponent(){this.currentRule?(this.taxRule=this.currentRule,this.taxRule.taxRuleTypeId&&this.changeRuleType(this.taxRule.taxRuleTypeId)):(this.taxRule=this.taxRuleRepository.create(),this.taxRule.taxId=this.tax.id)},onConfirm(){this.taxRuleRepository.save(this.taxRule,a.api).then(()=>{this.isSaveSuccessful=!0,this.$emit("modal-close")}).catch(()=>{this.isLoading=!1})}}}}}]);