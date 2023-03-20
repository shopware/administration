(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[257],{WGdt:function(e,n,o){var t=o("kuRq");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,o("ydqr").default)("5308ecd3",t,!0,{})},bQnH:function(e,n,o){"use strict";o.r(n);var t=o("J58c"),l=o.n(t);o("WGdt");function s(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?s(Object(o),!0).forEach((function(n){l()(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var i=Shopware,d=i.Component,u=i.State,r=Shopware.Data.Criteria,a=Shopware.Utils,w=Shopware.Classes.ShopwareError,_=d.getComponentHelper(),f=_.mapState,b=_.mapGetters;n.default={template:'\n{% block sw_flow_sequence_condition %}\n<div class="sw-flow-sequence-condition">\n    \n    {% block sw_flow_sequence_condition_true_arrow %}\n    <div\n        v-if="!showHelpElement"\n        class="sw-flow-sequence-condition__true-arrow"\n        :class="arrowClasses(true)"\n    >\n        \n        {% block sw_flow_sequence_condition_true_arrow_line %}\n        <div class="sw-flow-sequence-condition__true-line"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_true_arrow_oval %}\n        <div class="sw-flow-sequence-condition__oval"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_true_arrow_icon %}\n        <sw-icon\n            v-if="showArrowIcon(true)"\n            name="regular-chevron-right-s"\n            small\n        />\n\n        <sw-context-button\n            v-else\n            class="arrow-action sw-flow-sequence-condition__true-action"\n            icon="regular-plus-xs"\n            :disabled="disabledAddSequence(true)"\n        >\n            \n            {% block sw_flow_sequence_condition_true_arrow_add_condition %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-true-condition"\n                :disabled="disabled"\n                @click="addIfCondition(true)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorIfCondition\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_true_arrow_add_action %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-true-action"\n                :disabled="disabled"\n                @click="addThenAction(true)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorThenAction\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_true_arrow_extension_options %}{% endblock %}\n        </sw-context-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_true_arrow_label %}\n        <sw-label\n            appearance="pill"\n            size="medium"\n            :caps="true"\n            :dismissable="false"\n            class="sw-flow-sequence-condition__true-label"\n        >\n            {{ $tc(\'sw-flow.detail.sequence.labelTrue\') }}\n        </sw-label>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition_false_arrow %}\n    <div\n        v-if="!showHelpElement"\n        class="sw-flow-sequence-condition__false-arrow"\n        :class="arrowClasses(false)"\n    >\n        \n        {% block sw_flow_sequence_condition_false_arrow_line %}\n        <div class="sw-flow-sequence-condition__false-line"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_false_arrow_oval %}\n        <div class="sw-flow-sequence-condition__oval"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_false_arrow_label %}\n        <sw-label\n            appearance="pill"\n            size="medium"\n            :caps="true"\n            :dismissable="false"\n            class="sw-flow-sequence-condition__false-label"\n        >\n            {{ $tc(\'sw-flow.detail.sequence.labelFalse\') }}\n        </sw-label>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_false_arrow_icon %}\n        <sw-icon\n            v-if="showArrowIcon(false)"\n            name="regular-chevron-down-s"\n            small\n        />\n\n        <sw-context-button\n            v-else\n            class="arrow-action sw-flow-sequence-condition__false-action"\n            icon="regular-plus-xs"\n            :disabled="disabledAddSequence(false)"\n        >\n            \n            {% block sw_flow_sequence_condition_false_arrow_add_condition %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-false-condition"\n                :disabled="disabled"\n                @click="addIfCondition(false)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorIfCondition\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_false_arrow_add_action %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-false-action"\n                :disabled="disabled"\n                @click="addThenAction(false)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorThenAction\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_false_arrow_extension_options %}{% endblock %}\n        </sw-context-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition_container %}\n    <div class="sw-flow-sequence-condition__container">\n        \n        {% block sw_flow_sequence_condition_card %}\n        <div class="sw-flow-sequence-condition__card">\n            \n            {% block sw_flow_sequence_condition_header %}\n            <div class="sw-flow-sequence-condition__header">\n                \n                {% block sw_flow_sequence_condition_title %}\n                <div class="sw-flow-sequence-condition__title-description">\n                    <h3 class="sw-flow-sequence-condition__title">\n                        {{ $tc(\'sw-flow.detail.sequence.conditionTitle\') }}\n                    </h3>\n\n                    <p class="sw-flow-sequence-condition__description">\n                        {{ $tc(\'sw-flow.detail.sequence.conditionDescription\') }}\n                    </p>\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_condition_context_button %}\n                <sw-context-button\n                    class="sw-flow-sequence-condition__context-button"\n                    :disabled="disabled"\n                >\n\n                    \n                    {% block sw_flow_sequence_condition_context_button_delete %}\n                    <sw-context-menu-item\n                        class="sw-flow-sequence-condition__delete-condition"\n                        variant="danger"\n                        @click="removeCondition"\n                    >\n                        {{ $tc(\'sw-flow.detail.sequence.contextButton.deleteCondition\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </sw-context-button>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_content %}\n            <div class="sw-flow-sequence-condition__content">\n\n                \n                {% block sw_flow_sequence_condition_rule %}\n                <div class="sw-flow-sequence-condition__rule">\n                    \n                    {% block sw_flow_sequence_condition_rule_empty %}\n                    <div\n                        v-if="!sequence.rule"\n                        class="sw-flow-sequence-condition__rule-empty"\n                    >\n                        <sw-icon\n                            size="12px"\n                            name="regular-rule-s"\n                        />\n                        <span class="sw-flow-sequence-condition__no-rule">\n                            {{ $tc(\'sw-flow.detail.sequence.noRule\') }}\n                        </span>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_flow_sequence_condition_rule_info %}\n                    <div\n                        v-else\n                        class="sw-flow-sequence-condition__rule-info"\n                    >\n                        \n                        {% block sw_flow_sequence_condition_rule_header %}\n                        <div class="sw-flow-sequence-condition__rule-header">\n                            <div class="sw-flow-sequence-condition__rule-icon">\n                                <sw-icon\n                                    size="12px"\n                                    name="regular-rule-s"\n                                />\n                            </div>\n\n                            \n                            {% block sw_flow_sequence_condition_rule_name %}\n                            <div class="sw-flow-sequence-condition__rule-name">\n\n                                <h3>{{ sequence.rule.name }}</h3>\n                            </div>\n                            {% endblock %}\n\n                            \n                            {% block sw_flow_sequence_condition_rule_context_button %}\n                            <sw-context-button\n                                class="sw-flow-sequence-condition__rule-context-button"\n                                :disabled="disabled"\n                            >\n\n                                \n                                {% block sw_flow_sequence_condition_rule_context_button_edit %}\n                                <sw-context-menu-item\n                                    class="sw-flow-sequence-condition__rule-edit"\n                                    @click="onEditRule"\n                                >\n                                    {{ $tc(\'sw-flow.rule.contextButton.editRule\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n\n                                \n                                {% block sw_flow_sequence_condition_rule_context_button_change %}\n                                <sw-context-menu-item\n                                    class="sw-flow-sequence-condition__rule-change"\n                                    @click="showRuleSelection = true"\n                                >\n                                    {{ $tc(\'sw-flow.rule.contextButton.changeRule\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n\n                                \n                                {% block sw_flow_sequence_condition_rule_context_button_delete %}\n                                <sw-context-menu-item\n                                    class="sw-flow-sequence-condition__rule-delete"\n                                    variant="danger"\n                                    @click="deleteRule"\n                                >\n                                    {{ $tc(\'sw-flow.rule.contextButton.deleteRule\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n                            </sw-context-button>\n                            {% endblock %}\n                        </div>\n\n                        {% endblock %}\n\n                        \n                        {% block sw_flow_sequence_condition_rule_description %}\n                        <div\n                            class="sw-flow-sequence-condition__rule-description"\n                            v-html="ruleDescription"\n                        >\n                        </div>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_condition_content_custom %}\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_condition_rule_selection %}\n                <div\n                    v-if="showRuleSelection || !sequence.ruleId"\n                    class="sw-flow-sequence-condition__select"\n                >\n                    <sw-entity-single-select\n                        class="sw-flow-sequence-condition__selection-rule"\n                        size="small"\n                        value=""\n                        entity="rule"\n                        :criteria="ruleCriteria"\n                        :placeholder="$tc(\'sw-flow.rule.placeholderSelectRule\')"\n                        :disabled="disabled"\n                        :error="fieldError"\n                        advanced-selection-component="sw-advanced-selection-rule"\n                        :advanced-selection-parameters="advanceSelectionParameters"\n                        :selection-disabling-method="isRuleDisabled"\n                        :disabled-selection-tooltip="{\n                            message: $t(\'sw-restricted-rules.restrictedAssignment.general\', {\n                                relation: $t(\'sw-restricted-rules.restrictedAssignment.flowSequences\'),\n                            }), }"\n                        @change="(id, rule) => onRuleChange(rule)"\n                    >\n                        <template #before-item-list>\n                            \n                            {% block sw_flow_sequence_condition_select_selection_before_list %}\n                            <ul class="sw-select-result__item-list">\n                                \n                                <li\n                                    class="sw-select-result sw-select-result__create-new-rule"\n                                    @click="onCreateNewRule"\n                                >\n                                    {{ $tc(\'sw-flow.rule.createNewRule\') }}\n                                </li>\n                            </ul>\n                            {% endblock %}\n                        </template>\n\n                        <template #result-label-property="{ item, labelProperty, getKey }">\n                            {{ getKey(item, labelProperty) }}\n                        </template>\n                    </sw-entity-single-select>\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_help_text %}\n        <div\n            v-if="showHelpElement"\n            class="sw-flow-sequence-condition__explains"\n        >\n            \n            {% block sw_flow_sequence_selector_title %}\n            <h4>{{ $tc(\'sw-flow.detail.sequence.conditionExplainsTitle\') }}</h4>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_selector_help_text %}\n            <p v-html="$tc(\'sw-flow.detail.sequence.conditionExplainsDescription\')"></p>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition_rule_modal %}\n    <sw-flow-rule-modal\n        v-if="showCreateRuleModal"\n        :rule-id="selectedRuleId"\n        @process-finish="onSaveRuleSuccess"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","flowBuilderService","feature"],props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{showCreateRuleModal:!1,showRuleSelection:!1,fieldError:null,showAddButton:!1,selectedRuleId:null}},computed:c(c(c({},f("swFlowState",["restrictedRules"])),{},{sequenceRepository:function(){return this.repositoryFactory.create("flow_sequence")},ruleRepository:function(){return this.repositoryFactory.create("rule")},ruleCriteria:function(){var e=new r(1,25);return e.addSorting(r.sort("name","ASC")),e},showHelpElement:function(){var e=this.sequence,n=e.parentId,o=e.ruleId,t=e.trueBlock,l=e.falseBlock;return!n&&!o&&!(t||l)},modalName:function(){return this.flowBuilderService.getActionModalName(this.actionModal)},ruleDescription:function(){var e,n;return null!==(e=this.sequence)&&void 0!==e&&null!==(n=e.rule)&&void 0!==n&&n.description?this.sequence.rule.description.replace(/\n/g,"<br>"):null},advanceSelectionParameters:function(){return{ruleAwareGroupKey:"flowConditions"}}},f("swFlowState",["invalidSequences"])),b("swFlowState",["sequences"])),watch:{sequence:{handler:function(e){var n=e.ruleId,o=e.parentId,t=e.trueBlock,l=e.falseBlock;this.setFieldError(),!o&&n&&(t||this.createSequence({parentId:this.sequence.id,trueCase:!0}),l||this.createSequence({parentId:this.sequence.id,trueCase:!1}))},immediate:!0}},methods:{onCreateNewRule:function(){this.showCreateRuleModal=!0},onCloseModal:function(){this.showCreateRuleModal=!1,this.selectedRuleId=null},onSaveRuleSuccess:function(e){this.onRuleChange(e)},onRuleChange:function(e){var n=this;e&&(u.commit("swFlowState/updateSequence",{id:this.sequence.id,rule:e,ruleId:e.id}),this.selectedRuleId&&(this.sequences.forEach((function(o){o.ruleId===n.selectedRuleId&&o.id!==n.sequence.id&&u.commit("swFlowState/updateSequence",{id:o.id,rule:e,ruleId:e.id})})),this.selectedRuleId=null),this.removeFieldError(),this.showRuleSelection=!1)},deleteRule:function(){u.commit("swFlowState/updateSequence",{id:this.sequence.id,rule:null,ruleId:""})},addIfCondition:function(e){this.createSequence({trueCase:e,ruleId:""})},addThenAction:function(e){this.createSequence({trueCase:e,actionName:""})},showArrowIcon:function(e){var n=this.sequence,o=n.trueBlock,t=n.falseBlock;if(e){if(!o)return!1;var l=Object.values(o)[0];return null!==l.actionName||null!==l.ruleId}if(!t)return!1;var s=Object.values(t)[0];return null!==s.actionName||null!==s.ruleId},disabledAddSequence:function(e){var n=this.sequence,o=n.trueBlock,t=n.falseBlock,l=n.parentId;return e?!!o&&(!l&&!this.showArrowIcon(e)):!!t&&(!l&&!this.showArrowIcon(e))},arrowClasses:function(e){return{"is--disabled":this.disabledAddSequence(e),"has--true-action":!this.sequence.trueBlock,"has--false-action":!this.sequence.falseBlock}},removeCondition:function(){var e=[this.sequence.id];!function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];n.trueBlock&&Object.values(n.trueBlock).forEach((function(n){n._isNew&&o.push(n.id),e(n,o)})),n.falseBlock&&Object.values(n.falseBlock).forEach((function(n){n._isNew&&o.push(n.id),e(n,o)}))}(this.sequence,e),u.commit("swFlowState/removeSequences",e)},createSequence:function(e){var n=this.sequenceRepository.create(),o=c(c({},n),{},{parentId:this.sequence.id,displayGroup:this.sequence.displayGroup,actionName:void 0!==e.actionName?e.actionName:null,ruleId:void 0!==e.ruleId?e.ruleId:null,config:{},position:1,trueCase:e.trueCase,id:a.createId()});n=Object.assign(n,o),u.commit("swFlowState/addSequence",n)},setFieldError:function(){var e;null!==(e=this.invalidSequences)&&void 0!==e&&e.includes(this.sequence.id)?this.fieldError=new w({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"}):this.fieldError=null},removeFieldError:function(){var e,n=this;if(this.fieldError){this.fieldError=null;var o=null===(e=this.invalidSequences)||void 0===e?void 0:e.filter((function(e){return n.sequence.id!==e}));u.commit("swFlowState/setInvalidSequences",o)}},toggleAddButton:function(){this.sequence.ruleId?this.showRuleSelection=!1:this.showAddButton=!this.showAddButton},onEditRule:function(){var e,n;this.selectedRuleId=null===(e=this.sequence)||void 0===e||null===(n=e.rule)||void 0===n?void 0:n.id,this.showCreateRuleModal=!0},isRuleDisabled:function(e){return this.restrictedRules.includes(e.id)}}}},kuRq:function(e,n,o){}}]);