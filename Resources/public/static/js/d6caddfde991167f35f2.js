(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[85952],{876896:function(){},985952:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return r}}),o(455649);let{Component:l,State:s}=Shopware,{Criteria:t}=Shopware.Data,i=Shopware.Utils,{ShopwareError:c}=Shopware.Classes,{mapState:d,mapGetters:u}=l.getComponentHelper();var r={template:'\n{% block sw_flow_sequence_condition %}\n<div class="sw-flow-sequence-condition">\n    \n    {% block sw_flow_sequence_condition_true_arrow %}\n    <div\n        v-if="!showHelpElement"\n        class="sw-flow-sequence-condition__true-arrow"\n        :class="arrowClasses(true)"\n    >\n        \n        {% block sw_flow_sequence_condition_true_arrow_line %}\n        <div class="sw-flow-sequence-condition__true-line"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_true_arrow_oval %}\n        <div class="sw-flow-sequence-condition__oval"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_true_arrow_icon %}\n        <sw-icon\n            v-if="showArrowIcon(true)"\n            name="regular-chevron-right-s"\n            small\n        />\n\n        <sw-context-button\n            v-else\n            class="arrow-action sw-flow-sequence-condition__true-action"\n            icon="regular-plus-xs"\n            :disabled="disabledAddSequence(true) || undefined"\n        >\n            \n            {% block sw_flow_sequence_condition_true_arrow_add_condition %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-true-condition"\n                :disabled="disabled || undefined"\n                @click="addIfCondition(true)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorIfCondition\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_true_arrow_add_action %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-true-action"\n                :disabled="disabled || undefined"\n                @click="addThenAction(true)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorThenAction\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_true_arrow_extension_options %}{% endblock %}\n        </sw-context-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_true_arrow_label %}\n        <sw-label\n            appearance="pill"\n            size="medium"\n            :caps="true"\n            :dismissable="false"\n            class="sw-flow-sequence-condition__true-label"\n        >\n            {{ $tc(\'sw-flow.detail.sequence.labelTrue\') }}\n        </sw-label>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition_false_arrow %}\n    <div\n        v-if="!showHelpElement"\n        class="sw-flow-sequence-condition__false-arrow"\n        :class="arrowClasses(false)"\n    >\n        \n        {% block sw_flow_sequence_condition_false_arrow_line %}\n        <div class="sw-flow-sequence-condition__false-line"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_false_arrow_oval %}\n        <div class="sw-flow-sequence-condition__oval"></div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_false_arrow_label %}\n        <sw-label\n            appearance="pill"\n            size="medium"\n            :caps="true"\n            :dismissable="false"\n            class="sw-flow-sequence-condition__false-label"\n        >\n            {{ $tc(\'sw-flow.detail.sequence.labelFalse\') }}\n        </sw-label>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_false_arrow_icon %}\n        <sw-icon\n            v-if="showArrowIcon(false)"\n            name="regular-chevron-down-s"\n            small\n        />\n\n        <sw-context-button\n            v-else\n            class="arrow-action sw-flow-sequence-condition__false-action"\n            icon="regular-plus-xs"\n            :disabled="disabledAddSequence(false) || undefined"\n        >\n            \n            {% block sw_flow_sequence_condition_false_arrow_add_condition %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-false-condition"\n                :disabled="disabled || undefined"\n                @click="addIfCondition(false)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorIfCondition\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_false_arrow_add_action %}\n            <sw-context-menu-item\n                class="sw-flow-sequence-condition__add-false-action"\n                :disabled="disabled || undefined"\n                @click="addThenAction(false)"\n            >\n                {{ $tc(\'sw-flow.detail.sequence.selectorThenAction\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_false_arrow_extension_options %}{% endblock %}\n        </sw-context-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition_container %}\n    <div class="sw-flow-sequence-condition__container">\n        \n        {% block sw_flow_sequence_condition_card %}\n        <div class="sw-flow-sequence-condition__card">\n            \n            {% block sw_flow_sequence_condition_header %}\n            <div class="sw-flow-sequence-condition__header">\n                \n                {% block sw_flow_sequence_condition_title %}\n                <div class="sw-flow-sequence-condition__title-description">\n                    <h3 class="sw-flow-sequence-condition__title">\n                        {{ $tc(\'sw-flow.detail.sequence.conditionTitle\') }}\n                    </h3>\n\n                    <p class="sw-flow-sequence-condition__description">\n                        {{ $tc(\'sw-flow.detail.sequence.conditionDescription\') }}\n                    </p>\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_condition_context_button %}\n                <sw-context-button\n                    class="sw-flow-sequence-condition__context-button"\n                    :disabled="disabled || undefined"\n                >\n\n                    \n                    {% block sw_flow_sequence_condition_context_button_delete %}\n                    <sw-context-menu-item\n                        class="sw-flow-sequence-condition__delete-condition"\n                        variant="danger"\n                        @click="removeCondition"\n                    >\n                        {{ $tc(\'sw-flow.detail.sequence.contextButton.deleteCondition\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </sw-context-button>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_condition_content %}\n            <div class="sw-flow-sequence-condition__content">\n\n                \n                {% block sw_flow_sequence_condition_rule %}\n                <div class="sw-flow-sequence-condition__rule">\n                    \n                    {% block sw_flow_sequence_condition_rule_empty %}\n                    <div\n                        v-if="!sequence.rule"\n                        class="sw-flow-sequence-condition__rule-empty"\n                    >\n                        <sw-icon\n                            size="12px"\n                            name="regular-rule-s"\n                        />\n                        <span class="sw-flow-sequence-condition__no-rule">\n                            {{ $tc(\'sw-flow.detail.sequence.noRule\') }}\n                        </span>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_flow_sequence_condition_rule_info %}\n                    <div\n                        v-else\n                        class="sw-flow-sequence-condition__rule-info"\n                    >\n                        \n                        {% block sw_flow_sequence_condition_rule_header %}\n                        <div class="sw-flow-sequence-condition__rule-header">\n                            <div class="sw-flow-sequence-condition__rule-icon">\n                                <sw-icon\n                                    size="12px"\n                                    name="regular-rule-s"\n                                />\n                            </div>\n\n                            \n                            {% block sw_flow_sequence_condition_rule_name %}\n                            <div class="sw-flow-sequence-condition__rule-name">\n                                <h3>{{ sequence.rule.name }}</h3>\n                            </div>\n                            {% endblock %}\n\n                            \n                            {% block sw_flow_sequence_condition_rule_context_button %}\n                            <sw-context-button\n                                class="sw-flow-sequence-condition__rule-context-button"\n                                :disabled="disabled || undefined"\n                            >\n\n                                \n                                {% block sw_flow_sequence_condition_rule_context_button_edit %}\n                                <sw-context-menu-item\n                                    class="sw-flow-sequence-condition__rule-edit"\n                                    @click="onEditRule"\n                                >\n                                    {{ $tc(\'sw-flow.rule.contextButton.editRule\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n\n                                \n                                {% block sw_flow_sequence_condition_rule_context_button_change %}\n                                <sw-context-menu-item\n                                    class="sw-flow-sequence-condition__rule-change"\n                                    @click="showRuleSelection = true"\n                                >\n                                    {{ $tc(\'sw-flow.rule.contextButton.changeRule\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n\n                                \n                                {% block sw_flow_sequence_condition_rule_context_button_delete %}\n                                <sw-context-menu-item\n                                    class="sw-flow-sequence-condition__rule-delete"\n                                    variant="danger"\n                                    @click="deleteRule"\n                                >\n                                    {{ $tc(\'sw-flow.rule.contextButton.deleteRule\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n                            </sw-context-button>\n                            {% endblock %}\n                        </div>\n\n                        {% endblock %}\n\n                        \n                        {% block sw_flow_sequence_condition_rule_description %}\n                        <div\n                            class="sw-flow-sequence-condition__rule-description"\n                            v-html="ruleDescription"\n                        >\n                        </div>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_condition_content_custom %}\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_condition_rule_selection %}\n                <div\n                    v-if="showRuleSelection || !sequence.ruleId"\n                    class="sw-flow-sequence-condition__select"\n                >\n                    <sw-entity-single-select\n                        class="sw-flow-sequence-condition__selection-rule"\n                        size="small"\n                        value=""\n                        entity="rule"\n                        :criteria="ruleCriteria"\n                        :placeholder="$tc(\'sw-flow.rule.placeholderSelectRule\')"\n                        :disabled="disabled || undefined"\n                        :error="fieldError"\n                        advanced-selection-component="sw-advanced-selection-rule"\n                        :advanced-selection-parameters="advanceSelectionParameters"\n                        :selection-disabling-method="isRuleDisabled"\n                        :disabled-selection-tooltip="{\n                            message: $t(\'sw-restricted-rules.restrictedAssignment.general\', {\n                                relation: $t(\'sw-restricted-rules.restrictedAssignment.flowSequences\'),\n                            }), }"\n                        @update:value="(id, rule) => onRuleChange(rule)"\n                    >\n                        <template #before-item-list>\n                            \n                            {% block sw_flow_sequence_condition_select_selection_before_list %}\n                            <ul class="sw-select-result__item-list">\n                                <li\n                                    class="sw-select-result sw-select-result__create-new-rule"\n                                    role="button"\n                                    tabindex="0"\n                                    @click="onCreateNewRule"\n                                    @keydown.enter="onCreateNewRule"\n                                >\n                                    {{ $tc(\'sw-flow.rule.createNewRule\') }}\n                                </li>\n                            </ul>\n                            {% endblock %}\n                        </template>\n\n                        <template #result-label-property="{ item, labelProperty, getKey }">\n                            {{ getKey(item, labelProperty) }}\n                        </template>\n                    </sw-entity-single-select>\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_condition_help_text %}\n        <div\n            v-if="showHelpElement"\n            class="sw-flow-sequence-condition__explains"\n        >\n            \n            {% block sw_flow_sequence_selector_title %}\n            <h4>{{ $tc(\'sw-flow.detail.sequence.conditionExplainsTitle\') }}</h4>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_selector_help_text %}\n            <p v-html="$tc(\'sw-flow.detail.sequence.conditionExplainsDescription\')"></p>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_sequence_condition_rule_modal %}\n    <sw-flow-rule-modal\n        v-if="showCreateRuleModal"\n        :rule-id="selectedRuleId"\n        @process-finish="onSaveRuleSuccess"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","flowBuilderService","feature"],props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data(){return{showCreateRuleModal:!1,showRuleSelection:!1,fieldError:null,showAddButton:!1,selectedRuleId:null}},computed:{...d("swFlowState",["restrictedRules","flow"]),sequenceRepository(){return this.repositoryFactory.create("flow_sequence")},ruleRepository(){return this.repositoryFactory.create("rule")},ruleCriteria(){let e=new t(1,25);return e.addSorting(t.sort("name","ASC")),e},showHelpElement(){let{parentId:e,ruleId:n,trueBlock:o,falseBlock:l}=this.sequence;return!e&&!n&&!(o||l)},modalName(){return this.flowBuilderService.getActionModalName(this.actionModal)},ruleDescription(){return this.sequence?.rule?.description?this.sequence.rule.description.replace(/\n/g,"<br>"):null},advanceSelectionParameters(){return{ruleAwareGroupKey:`flowTrigger.${this.flow.eventName}`}},...d("swFlowState",["invalidSequences","flow"]),...u("swFlowState",["sequences"])},watch:{sequence:{handler(e){let{ruleId:n,parentId:o,trueBlock:l,falseBlock:s}=e;this.setFieldError(),!o&&n&&(l||this.createSequence({parentId:this.sequence.id,trueCase:!0}),s||this.createSequence({parentId:this.sequence.id,trueCase:!1}))},immediate:!0}},methods:{onCreateNewRule(){this.showCreateRuleModal=!0},onCloseModal(){this.showCreateRuleModal=!1,this.selectedRuleId=null},onSaveRuleSuccess(e){this.onRuleChange(e)},onRuleChange(e){e&&(s.commit("swFlowState/updateSequence",{id:this.sequence.id,rule:e,ruleId:e.id}),this.selectedRuleId&&(this.sequences.forEach(n=>{n.ruleId===this.selectedRuleId&&n.id!==this.sequence.id&&s.commit("swFlowState/updateSequence",{id:n.id,rule:e,ruleId:e.id})}),this.selectedRuleId=null),this.removeFieldError(),this.showRuleSelection=!1)},deleteRule(){s.commit("swFlowState/updateSequence",{id:this.sequence.id,rule:null,ruleId:""})},addIfCondition(e){this.createSequence({trueCase:e,ruleId:""})},addThenAction(e){this.createSequence({trueCase:e,actionName:""})},showArrowIcon(e){let{trueBlock:n,falseBlock:o}=this.sequence;if(e){if(!n)return!1;let e=Object.values(n)[0];return null!==e.actionName||null!==e.ruleId}if(!o)return!1;let l=Object.values(o)[0];return null!==l.actionName||null!==l.ruleId},disabledAddSequence(e){let{trueBlock:n,falseBlock:o,parentId:l}=this.sequence;return e?!!n&&!l&&!this.showArrowIcon(e):!!o&&!l&&!this.showArrowIcon(e)},arrowClasses(e){return{"is--disabled":this.disabledAddSequence(e),"has--true-action":!this.sequence.trueBlock,"has--false-action":!this.sequence.falseBlock}},removeCondition(){let e=[this.sequence.id],n=(e,o=[])=>{e.trueBlock&&Object.values(e.trueBlock).forEach(e=>{e._isNew&&o.push(e.id),n(e,o)}),e.falseBlock&&Object.values(e.falseBlock).forEach(e=>{e._isNew&&o.push(e.id),n(e,o)})};n(this.sequence,e),s.commit("swFlowState/removeSequences",e)},createSequence(e){let n=this.sequenceRepository.create(),o={...n,parentId:this.sequence.id,displayGroup:this.sequence.displayGroup,actionName:void 0!==e.actionName?e.actionName:null,ruleId:void 0!==e.ruleId?e.ruleId:null,config:{},position:1,trueCase:e.trueCase,id:i.createId()};n=Object.assign(n,o),s.commit("swFlowState/addSequence",n)},setFieldError(){if(!this.invalidSequences?.includes(this.sequence.id)){this.fieldError=null;return}this.fieldError=new c({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},removeFieldError(){if(!this.fieldError)return;this.fieldError=null;let e=this.invalidSequences?.filter(e=>this.sequence.id!==e);s.commit("swFlowState/setInvalidSequences",e)},toggleAddButton(){if(this.sequence.ruleId){this.showRuleSelection=!1;return}this.showAddButton=!this.showAddButton},onEditRule(){this.selectedRuleId=this.sequence?.rule?.id,this.showCreateRuleModal=!0},isRuleDisabled(e){return this.restrictedRules.includes(e.id)}}}},455649:function(e,n,o){var l=o(876896);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),o(745346).Z("7c98e50d",l,!0,{})}}]);