(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[545],{fCTa:function(n,e,t){"use strict";t.r(e);e.default={template:'\n{% block sw_first_run_wizard_shopware_base %}\n{% if VUE3 %}\n<router-view\n    v-slot="{ Component }"\n>\n    <component\n        :is="Component"\n        v-on="$listeners"\n    />\n</router-view>\n{% else %}\n<router-view v-on="$listeners" />\n{% endif %}\n{% endblock %}\n'}}}]);