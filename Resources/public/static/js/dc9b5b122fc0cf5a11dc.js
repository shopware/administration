(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[653],{Itcu:function(t,e,n){"use strict";n.r(e);e.default={template:'\n{% block sw_settings_tax_rule_type_zip_code_range %}\n<sw-container\n    columns="1fr 1fr"\n    gap="0 32px"\n>\n    \n    {% block sw_settings_tax_rule_type_zip_code_range_from %}\n    <sw-text-field\n        v-model="taxRule.data.fromZipCode"\n        :label="$tc(\'sw-settings-tax.taxRuleCard.labelToZipCode\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_rule_type_zip_code_range_to %}\n    <sw-text-field\n        v-model="taxRule.data.toZipCode"\n        :label="$tc(\'sw-settings-tax.taxRuleCard.labelFromZipCode\')"\n    />\n    {% endblock %}\n</sw-container>\n{% endblock %}\n',props:{taxRule:{type:Object,required:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.taxRule.data||(this.taxRule.data={fromZipCode:"",toZipCode:""})}}}}}]);