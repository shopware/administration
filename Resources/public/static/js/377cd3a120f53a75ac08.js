(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[654],{BW3Z:function(e,t,n){"use strict";n.r(t);t.default={template:'\n{% block sw_settings_tax_rule_type_zip_code %}\n<sw-text-field\n    {% if VUE3 %}\n    v-model:value="taxRule.data.zipCode"\n    {% else %}\n    v-model="taxRule.data.zipCode"\n    {% endif %}\n    :label="$tc(\'sw-settings-tax.taxRuleCard.labelZipCode\')"\n/>\n{% endblock %}\n',props:{taxRule:{type:Object,required:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.taxRule.data||(this.taxRule.data={zipCode:""})}}}}}]);