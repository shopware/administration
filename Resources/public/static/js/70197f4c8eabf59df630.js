(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[256],{"5Tkm":function(e,n,t){},"Be/G":function(e,n,t){var o=t("5Tkm");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("P8hj").default)("3ece02a5",o,!0,{})},MPxW:function(e,n,t){"use strict";t.r(n);var o=t("6lmj"),i=t.n(o),l=t("CsSd"),r=t.n(l),s=t("JHj9");t("Be/G");function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=Shopware,u=d.Component,p=d.Mixin,f=d.Context,w=Shopware.Data.Criteria,m=u.getComponentHelper().mapPropertyErrors;n.default={template:'\n{% block sw_flow_rule_modal %}\n<sw-modal\n    class="sw-flow-rule-modal"\n    variant="large"\n    :title="modalTitle"\n    :is-loading="isLoading"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_rule_modal_tabs %}\n    <sw-tabs\n        default-item="detail"\n        position-identifier="sw-flow-rule-modal"\n    >\n        \n        {% block sw_flow_rule_headers %}\n        <template #default="{ active }">\n            \n            {% block sw_flow_rule_modal_tab_detail %}\n            <sw-tabs-item\n                class="sw-flow-rule-modal__tab-detail"\n                v-bind="$props"\n                name="detail"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-flow.modals.rule.tabDetail\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_rule_modal_tab_rule %}\n            <sw-tabs-item\n                class="sw-flow-rule-modal__tab-rule"\n                v-bind="$props"\n                name="rule"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-flow.modals.rule.tabRule\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_flow_rule_modal_content %}\n        <template #content="{ active }">\n            <div class="sw-flow-rule-modal__content">\n                \n                {% block sw_flow_rule_modal_tab_detail_content %}\n                <template v-if="active === \'detail\' && rule">\n                    <sw-container\n                        columns="2fr 1fr"\n                        gap="0px 32px"\n                    >\n                        \n                        {% block sw_flow_rule_modal_detail_name %}\n                        <sw-text-field\n                            v-model="rule.name"\n                            class="sw-flow-rule-modal__name"\n                            required\n                            :label="$tc(\'sw-flow.modals.rule.labelName\')"\n                            :placeholder="$tc(\'sw-flow.modals.rule.placeholderName\')"\n                            :error="ruleNameError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_flow_rule_modal_detail_priority %}\n                        <sw-number-field\n                            v-model="rule.priority"\n                            class="sw-flow-rule-modal__priority"\n                            required\n                            :label="$tc(\'sw-flow.modals.rule.labelPriority\')"\n                            :placeholder="$tc(\'sw-flow.modals.rule.placeholderPriority\')"\n                            :error="rulePriorityError"\n                        />\n                    {% endblock %}\n                    </sw-container>\n\n                    \n                    {% block sw_flow_rule_modal_detail_description %}\n                    <sw-textarea-field\n                        v-model="rule.description"\n                        class="sw-flow-rule-modal__description"\n                        :label="$tc(\'sw-flow.modals.rule.labelDescription\')"\n                        :placeholder="$tc(\'sw-flow.modals.rule.placeholderDescription\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_flow_rule_modal_detail_type %}\n                    <sw-multi-select\n                        v-model="moduleTypes"\n                        class="sw-flow-rule-modal__type"\n                        value-property="id"\n                        label-property="name"\n                        :label="$tc(\'sw-flow.modals.rule.labelType\')"\n                        :placeholder="$tc(\'sw-flow.modals.rule.placeholderType\')"\n                        :options="availableModuleTypes"\n                    >\n                        <template #selection-label-property="{ item }">\n                            {{ $tc(item.name) }}\n                        </template>\n\n                        <template #result-label-property="{ item }">\n                            {{ $tc(item.name) }}\n                        </template>\n                    </sw-multi-select>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_flow_rule_modal_tab_rule_content %}\n                <div v-show="active === \'rule\'">\n                    \n                    {% block sw_flow_rule_modal_conditions_card %}\n                    <sw-condition-tree\n                        v-if="conditionRepository"\n                        class="sw-flow-rule-modal__rule"\n                        association-field="ruleId"\n                        :initial-conditions="conditions"\n                        :condition-repository="conditionRepository"\n                        :condition-data-provider-service="ruleConditionDataProviderService"\n                        :association-value="rule.id"\n                        :association-entity="rule"\n                        :root-condition="null"\n                        @conditions-changed="onConditionsChanged"\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </div>\n        </template>\n        {% endblock %}\n    </sw-tabs>\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_flow_rule_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-rule-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_rule_modal_footer_save_button %}\n        <sw-button-process\n            class="sw-flow-rule-modal__save-button"\n            variant="primary"\n            size="small"\n            :is-loading="isSaveLoading"\n            :process-success="isSaveSuccessful"\n            @click="onSaveRule"\n        >\n            {{ $tc(\'sw-flow.modals.rule.buttonAddRule\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","ruleConditionDataProviderService","ruleConditionsConfigApiService","feature"],mixins:[p.getByName("placeholder"),p.getByName("notification")],props:{ruleId:{type:String,required:!1,default:null}},data:function(){return{isLoading:!1,isSaveLoading:!1,isSaveSuccessful:!1,rule:null,conditions:null,conditionTree:null,deletedIds:[]}},computed:c(c({modalTitle:function(){return this.ruleId?this.$tc("sw-flow.modals.rule.labelEditRule"):this.$tc("sw-flow.modals.rule.labelAddNewRule")},ruleRepository:function(){return this.repositoryFactory.create("rule")},conditionRepository:function(){var e,n,t,o;return this.rule?this.repositoryFactory.create(null===(e=this.rule)||void 0===e||null===(n=e.conditions)||void 0===n?void 0:n.entity,null===(t=this.rule)||void 0===t||null===(o=t.conditions)||void 0===o?void 0:o.source):null},appScriptConditionRepository:function(){return this.repositoryFactory.create("app_script_condition")},availableModuleTypes:function(){return this.ruleConditionDataProviderService.getModuleTypes((function(e){return e}))},moduleTypes:{get:function(){return this.rule&&this.rule.moduleTypes?this.rule.moduleTypes.types:[]},set:function(e){null!==e&&0!==e.length?this.rule.moduleTypes={types:e}:this.rule.moduleTypes=null}},scopesOfRuleAwarenessKey:function(){var e,n="flowTrigger.".concat(this.flow.eventName),t=this.ruleConditionDataProviderService.getAwarenessConfigurationByAssignmentName(n);return null!==(e=null==t?void 0:t.scopes)&&void 0!==e?e:void 0}},Object(s.e)("swFlowState",["flow"])),m("rule",["name","priority"])),created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.isLoading=!0,this.loadConditionData().then((function(n){if(e.ruleConditionDataProviderService.addScriptConditions(n),!e.ruleId)return e.isLoading=!1,void e.createRule();e.loadRule(e.ruleId).then((function(){e.isLoading=!1}))}))},loadConditionData:function(){var e=c(c({},f.api),{},{languageId:Shopware.State.get("session").languageId}),n=new w(1,500);return Promise.all([this.appScriptConditionRepository.search(n,e),this.ruleConditionsConfigApiService.load()]).then((function(e){return e[0]}))},createRule:function(){var e;this.rule=this.ruleRepository.create(),this.conditions=null===(e=this.rule)||void 0===e?void 0:e.conditions,this.conditionTree=this.conditions,this.rule.flowSequences=[],this.rule.flowSequences.push({flow:{eventName:this.flow.eventName}})},loadRule:function(e){var n=this;return this.isLoading=!0,this.conditions=null,this.ruleRepository.get(e,f.api).then((function(e){n.rule=e,n.loadConditions()}))},loadConditions:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=c(c({},f.api),{},{inheritance:!0});if(null===n)return this.conditionRepository.search(new w(1,25),t).then((function(n){return e.loadConditions(n)}));if(n.total<=n.length)return this.conditions=n,Promise.resolve();var o=new w(n.criteria.page+1,n.criteria.limit);return"product"===n.entity&&o.addAssociation("options.group"),this.conditionRepository.search(o,n.context).then((function(t){return n.push.apply(n,i()(t)),n.criteria=t.criteria,n.total=t.total,e.loadConditions(n)}))},syncConditions:function(){var e=this;return this.conditionRepository.sync(this.conditionTree,f.api).then((function(){return e.deletedIds.length>0?e.conditionRepository.syncDeleted(e.deletedIds,f.api).then((function(){e.deletedIds=[]})):Promise.resolve()}))},onConditionsChanged:function(e){var n=e.conditions,t=e.deletedIds;this.conditionTree=n,this.deletedIds=[].concat(i()(this.deletedIds),i()(t))},getRuleDetail:function(){var e,n=this;return null!==(e=this.rule)&&void 0!==e&&e.id?this.ruleRepository.get(this.rule.id).then((function(e){n.$emit("process-finish",e)})).catch((function(){n.$emit("process-finish",null)})).finally((function(){n.onClose()})):null},onSaveRule:function(){var e=this;if(this.isSaveSuccessful=!1,this.isSaveLoading=!0,this.rule.isNew())return this.rule.flowSequences=[],this.rule.conditions=this.conditionTree,void this.saveRule().then((function(){Shopware.State.dispatch("error/resetApiErrors"),e.getRuleDetail(),e.isSaveSuccessful=!0})).catch((function(){e.showErrorNotification()})).finally((function(){e.isSaveLoading=!1}));this.saveRule().then(this.syncConditions).then((function(){Shopware.State.dispatch("error/resetApiErrors"),e.getRuleDetail(),e.isSaveSuccessful=!0})).catch((function(){e.showErrorNotification()})).finally((function(){e.isSaveLoading=!1}))},saveRule:function(){return this.ruleRepository.save(this.rule,f.api)},showErrorNotification:function(){this.createNotificationError({message:this.$tc("sw-settings-rule.detail.messageSaveError",0,{name:this.rule.name})})},onClose:function(){this.$emit("modal-close")}}}}}]);