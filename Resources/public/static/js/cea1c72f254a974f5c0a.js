(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[653],{CQNE:function(t,e,a){"use strict";a.r(e);e.default={template:"\n{% block sw_settings_tax_rule_type_zip_code_range_cell %}\n<span>\n    {{ taxRule.type.typeName }}: {{ taxRule.data.fromZipCode }} - {{ taxRule.data.toZipCode }}\n</span>\n{% endblock %}\n",props:{taxRule:{type:Object,required:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.taxRule.data||(this.taxRule.data={fromZipCode:"",toZipCode:""})}}}}}]);