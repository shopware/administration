(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[266],{"6tG+":function(e,n,l){"use strict";l.r(n);var t=l("CsSd"),o=l.n(t);l("zA9O");function i(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function a(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?i(Object(l),!0).forEach((function(n){o()(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}var r=Shopware.Component.getComponentHelper(),s=r.mapPropertyErrors,w=r.mapState;n.default={template:'\n{% block sw_flow_detail_general %}\n<div class="sw-flow-detail-general">\n    \n    {% block sw_flow_detail_general_information %}\n    <sw-alert\n        v-if="isUnknownTrigger"\n        variant="warning"\n        class="sw-flow-detail-general__warning-unknow-trigger"\n    >\n        <p>{{ $tc(\'sw-flow.flowNotification.messageUnknownTriggerWarning\') }}</p>\n        <p>{{ $tc(\'sw-flow.flowNotification.textIntroduce\') }}</p>\n        <ul>\n            <li>{{ $tc(\'sw-flow.flowNotification.textGuide1\') }}</li>\n            <li>{{ $tc(\'sw-flow.flowNotification.textGuide2\') }}</li>\n            <li>{{ $tc(\'sw-flow.flowNotification.textGuide3\') }}</li>\n        </ul>\n    </sw-alert>\n\n    <sw-card\n        class="sw-flow-detail-general__general-card"\n        position-identifier="sw-flow-detail-general"\n        :class="{\'sw-flow-detail-general__template\': isTemplate }"\n        :title="$tc(\'sw-flow.detail.labelGeneralCard\')"\n        :is-loading="isLoading"\n    >\n        \n        {% block sw_flow_detail_general_information_name %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="flow.name"\n            {% else %}\n            v-model="flow.name"\n            {% endif %}\n            class="sw-flow-detail-general__general-name"\n            :required="!isTemplate"\n            :disabled="!acl.can(\'flow.editor\')"\n            :label="$tc(\'sw-flow.detail.labelGeneralInformationName\')"\n            :placeholder="$tc(\'sw-flow.detail.placeholderGeneralInformationName\')"\n            :error="flowNameError"\n            {% if VUE3 %}\n            name="sw-field--flow-name"\n            {% endif %}\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_detail_general_information_description %}\n        <sw-textarea-field\n            {% if VUE3 %}\n            v-model:value="flow.description"\n            {% else %}\n            v-model="flow.description"\n            {% endif %}\n            class="sw-flow-detail-general__general-description"\n            :disabled="!acl.can(\'flow.editor\')"\n            :label="$tc(\'sw-flow.detail.labelGeneralInformationDescription\')"\n            :placeholder="$tc(\'sw-flow.detail.placeholderGeneralInformationDescription\')"\n        />\n        {% endblock %}\n\n        <sw-container\n            columns="repeat(auto-fit, minmax(250px, 1fr))"\n            gap="0 30px"\n        >\n            \n            {% block sw_flow_detail_general_information_priority %}\n            <sw-number-field\n                v-if="!isFlowTemplate"\n                {% if VUE3 %}\n                v-model:value="flow.priority"\n                {% else %}\n                v-model="flow.priority"\n                {% endif %}\n                class="sw-flow-detail-general__general-priority"\n                :disabled="!acl.can(\'flow.editor\')"\n                :label="$tc(\'sw-flow.detail.labelGeneralInformationPriority\')"\n                {% if VUE3 %}\n                name="sw-field--flow-priority"\n                {% endif %}\n            />\n            {% endblock %}\n\n            \n            {% block sw_flow_detail_general_information_active %}\n            <sw-switch-field\n                v-if="!isFlowTemplate"\n                {% if VUE3 %}\n                v-model:value="flow.active"\n                {% else %}\n                v-model="flow.active"\n                {% endif %}\n                class="sw-flow-detail-general__general-active"\n                :disabled="!acl.can(\'flow.editor\') || isUnknownTrigger"\n                :label="$tc(\'sw-flow.detail.labelGeneralInformationActive\')"\n            />\n            {% endblock %}\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],props:{isLoading:{type:Boolean,required:!1,default:!1},isNewFlow:{type:Boolean,required:!1,default:!1},isTemplate:{type:Boolean,required:!1,default:!1},isUnknownTrigger:{type:Boolean,required:!1,default:!1}},computed:a(a({logGridColumns:function(){return[{property:"dataExecuted",label:this.$tc("sw-flow.detail.labelLogDateExecuted"),naturalSorting:!0,primary:!0},{property:"trigger",label:this.$tc("sw-flow.detail.labelLogTrigger"),sortable:!1},{property:"triggerValue",label:this.$tc("sw-flow.detail.labelLogTriggerValue"),sortable:!1},{property:"actions",label:this.$tc("sw-flow.detail.labelLogActions"),sortable:!1},{property:"success",label:this.$tc("sw-flow.detail.labelLogSuccess"),sortable:!1}]},isFlowTemplate:function(){var e;return"template"===(null===(e=this.$route.query)||void 0===e?void 0:e.type)}},w("swFlowState",["flow"])),s("flow",["name"]))}},dieB:function(e,n,l){},zA9O:function(e,n,l){var t=l("dieB");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l("P8hj").default)("42027cd8",t,!0,{})}}]);