(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[541],{Cq7d:function(n,i,s){"use strict";s.r(i);i.default={template:'\n{% block sw_extension_my_extensions_recommendation %}\n<div class="sw-extension-my-extensions__recommendation">\n    <div v-if="isLoading">\n        <sw-skeleton />\n        <sw-skeleton />\n    </div>\n\n    <sw-meteor-card v-show="!isLoading">\n        \n        {% block sw_extension_my_extensions_recommendation_plugin_wizard %}\n        <sw-first-run-wizard-plugins @loading-finished="finishLoading" />\n        {% endblock %}\n    </sw-meteor-card>\n</div>\n{% endblock %}\n',data:function(){return{isLoading:!0}},methods:{finishLoading:function(){this.isLoading=!1}}}}}]);