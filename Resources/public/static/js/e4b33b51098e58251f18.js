(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[40796],{327021:function(){},640796:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return t}}),n(999451);let{Component:a}=Shopware,{mapPropertyErrors:o,mapState:i}=a.getComponentHelper();var t={template:'\n{% block sw_flow_detail_general %}\n<div class="sw-flow-detail-general">\n    \n    {% block sw_flow_detail_general_information %}\n    <sw-alert\n        v-if="isUnknownTrigger"\n        variant="warning"\n        class="sw-flow-detail-general__warning-unknow-trigger"\n    >\n        <p>{{ $tc(\'sw-flow.flowNotification.messageUnknownTriggerWarning\') }}</p>\n        <p>{{ $tc(\'sw-flow.flowNotification.textIntroduce\') }}</p>\n        <ul>\n            <li>{{ $tc(\'sw-flow.flowNotification.textGuide1\') }}</li>\n            <li>{{ $tc(\'sw-flow.flowNotification.textGuide2\') }}</li>\n            <li>{{ $tc(\'sw-flow.flowNotification.textGuide3\') }}</li>\n        </ul>\n    </sw-alert>\n\n    <sw-card\n        class="sw-flow-detail-general__general-card"\n        position-identifier="sw-flow-detail-general"\n        :class="{\'sw-flow-detail-general__template\': isTemplate }"\n        :title="$tc(\'sw-flow.detail.labelGeneralCard\')"\n        :is-loading="isLoading"\n    >\n        \n        {% block sw_flow_detail_general_information_name %}\n        <sw-text-field\n            v-model:value="flow.name"\n            class="sw-flow-detail-general__general-name"\n            :required="!isTemplate"\n            :disabled="!acl.can(\'flow.editor\')"\n            :label="$tc(\'sw-flow.detail.labelGeneralInformationName\')"\n            :placeholder="$tc(\'sw-flow.detail.placeholderGeneralInformationName\')"\n            :error="flowNameError"\n            name="sw-field--flow-name"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_detail_general_information_description %}\n        <sw-textarea-field\n            v-model:value="flow.description"\n            name="sw-field--flow-description"\n            class="sw-flow-detail-general__general-description"\n            :disabled="!acl.can(\'flow.editor\')"\n            :label="$tc(\'sw-flow.detail.labelGeneralInformationDescription\')"\n            :placeholder="$tc(\'sw-flow.detail.placeholderGeneralInformationDescription\')"\n        />\n        {% endblock %}\n\n        <sw-container\n            columns="repeat(auto-fit, minmax(250px, 1fr))"\n            gap="0 30px"\n        >\n            \n            {% block sw_flow_detail_general_information_priority %}\n            <sw-number-field\n                v-if="!isFlowTemplate"\n                v-model:value="flow.priority"\n                class="sw-flow-detail-general__general-priority"\n                :disabled="!acl.can(\'flow.editor\')"\n                :label="$tc(\'sw-flow.detail.labelGeneralInformationPriority\')"\n                name="sw-field--flow-priority"\n            />\n            {% endblock %}\n\n            \n            {% block sw_flow_detail_general_information_active %}\n            <sw-switch-field\n                v-if="!isFlowTemplate"\n                v-model:value="flow.active"\n                name="sw-field--flow-active"\n                class="sw-flow-detail-general__general-active"\n                :disabled="!acl.can(\'flow.editor\') || isUnknownTrigger"\n                :label="$tc(\'sw-flow.detail.labelGeneralInformationActive\')"\n            />\n            {% endblock %}\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],props:{isLoading:{type:Boolean,required:!1,default:!1},isNewFlow:{type:Boolean,required:!1,default:!1},isTemplate:{type:Boolean,required:!1,default:!1},isUnknownTrigger:{type:Boolean,required:!1,default:!1}},computed:{logGridColumns(){return[{property:"dataExecuted",label:this.$tc("sw-flow.detail.labelLogDateExecuted"),naturalSorting:!0,primary:!0},{property:"trigger",label:this.$tc("sw-flow.detail.labelLogTrigger"),sortable:!1},{property:"triggerValue",label:this.$tc("sw-flow.detail.labelLogTriggerValue"),sortable:!1},{property:"actions",label:this.$tc("sw-flow.detail.labelLogActions"),sortable:!1},{property:"success",label:this.$tc("sw-flow.detail.labelLogSuccess"),sortable:!1}]},isFlowTemplate(){return this.$route.query?.type==="template"},...i("swFlowState",["flow"]),...o("flow",["name"])}}},999451:function(e,l,n){var a=n(327021);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),n(745346).Z("1afed614",a,!0,{})}}]);