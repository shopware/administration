(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[2],{"04Ng":function(e,n){e.exports=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e}},"5lWk":function(e,n,t){var i=t("KebS");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("497f50dd",i,!0,{})},"CxK+":function(e,n,t){var i=t("+qnA"),o=t("kTaK");e.exports=function(e,n){return e&&i(e,n,o)}},GNJM:function(e,n,t){var i=t("CwEn"),o=t("T3YI"),c=t("69IG"),s=t("szVY"),a=t("04Ng"),l=t("NV2A"),r=t("WvrD"),u=t("hvnE"),d=t("pgo4");e.exports=function(e,n,t){n=n.length?i(n,(function(e){return d(e)?function(n){return o(n,1===e.length?e[0]:e)}:e})):[u];var p=-1;n=i(n,l(c));var f=s(e,(function(e,t,o){return{criteria:i(n,(function(n){return n(e)})),index:++p,value:e}}));return a(f,(function(e,n){return r(e,n,t)}))}},KebS:function(e,n,t){},MTAh:function(e,n,t){var i=t("GNJM"),o=t("pgo4");e.exports=function(e,n,t,c){return null==e?[]:(o(n)||(n=null==n?[]:[n]),o(t=c?void 0:t)||(t=null==t?[]:[t]),i(e,n,t))}},W4et:function(e,n,t){var i=t("uKn5");e.exports=function(e,n){if(e!==n){var t=void 0!==e,o=null===e,c=e==e,s=i(e),a=void 0!==n,l=null===n,r=n==n,u=i(n);if(!l&&!u&&!s&&e>n||s&&a&&r&&!l&&!u||o&&a&&r||!t&&r||!c)return 1;if(!o&&!s&&!u&&e<n||u&&t&&c&&!o&&!s||l&&t&&c||!a&&c||!r)return-1}return 0}},WvrD:function(e,n,t){var i=t("W4et");e.exports=function(e,n,t){for(var o=-1,c=e.criteria,s=n.criteria,a=c.length,l=t.length;++o<a;){var r=i(c[o],s[o]);if(r)return o>=l?r:r*("desc"==t[o]?-1:1)}return e.index-n.index}},hQDD:function(e,n,t){"use strict";t.r(n);var i=t("4fmW"),o=t.n(i),c=t("c1oF"),s=t.n(c),a=t("CsSd"),l=t.n(a),r=t("MTAh"),u=t.n(r),d=t("oBAG"),p=t.n(d),f=(t("5lWk"),t("znJE"));function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=Shopware,h=v.Component,_=v.State,g=v.Mixin,A=Shopware.Utils,b=A.object.cloneDeep,S=Shopware.Classes.ShopwareError,q=h.getComponentHelper(),F=q.mapState,y=q.mapGetters,k=A.string.snakeCase,D=Shopware.Data.Criteria;n.default={template:'\n{% block sw_flow_sequence_action %}\n<div\n    class="sw-flow-sequence-action"\n    :class="actionClasses"\n>\n    \n    {% block sw_flow_sequence_action_card %}\n    <div class="sw-flow-sequence-action__card">\n        \n        {% block sw_flow_sequence_action_header %}\n        <div class="sw-flow-sequence-action__header">\n            \n            {% block sw_flow_sequence_action_title %}\n            <div class="sw-flow-sequence-action__title-description">\n                <h3 class="sw-flow-sequence-action__title">\n                    {{ $tc(\'sw-flow.detail.sequence.actionTitle\') }}\n                </h3>\n\n                <p class="sw-flow-sequence-action__description">\n                    {{ $tc(\'sw-flow.detail.sequence.actionDescription\') }}\n                </p>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_action_context_menu %}\n            <sw-context-button\n                class="sw-flow-sequence-action__context-button"\n                :class="actionClasses"\n                :disabled="disabled"\n            >\n                \n                {% block sw_flow_sequence_action_remove_action_container %}\n                <sw-context-menu-item\n                    variant="danger"\n                    class="sw-flow-sequence-action__delete-action-container"\n                    @click="removeActionContainer"\n                >\n                    {{ $tc(\'sw-flow.detail.sequence.contextButton.deleteActionContainer\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_flow_sequence_action_content %}\n        <div class="sw-flow-sequence-action__content">\n            \n            {% block sw_flow_sequence_action_actions %}\n            <div class="sw-flow-sequence-action__actions">\n                \n                {% block sw_flow_sequence_action_actions_empty %}\n                <div\n                    v-if="sequenceData.length === 1 && !sequence.actionName"\n                    class="sw-flow-sequence-action__actions-empty"\n                >\n                    <sw-icon\n                        size="12px"\n                        name="regular-minus-xs"\n                    />\n                    <span class="sw-flow-sequence-action__no-action">\n                        {{ $tc(\'sw-flow.detail.sequence.noActions\') }}\n                    </span>\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_flow_sequence_action_actions_list %}\n                <ul\n                    v-else\n                    class="sw-flow-sequence-action__action-list"\n                >\n                    \n                    {% block sw_flow_sequence_action_actions_transition_group %}\n                    <transition-group\n                        name="list"\n                        tag="div"\n                    >\n                        \n                        {% block sw_flow_sequence_action_actions_item %}\n                        <li\n                            v-for="(item, key) in sequenceData"\n                            :key="item.id"\n                            v-tooltip="{\n                                message: $tc(\'sw-flow.actions.tooltipActionDisabled\'),\n                                disabled: !item.disabled\n                            }"\n                            class="sw-flow-sequence-action__action-item"\n                            :class="{\'sw-flow-sequence-action__disabled\': item.disabled}"\n                            role="button"\n                            tabindex="0"\n                            @click="(event) => onEditAction(item, event.target, key)"\n                            @keydown.enter="(event) => onEditAction(item, event.target, key)"\n                        >\n                            <sw-flow-sequence-action-error\n                                v-if="!isValidAction(item.actionName)"\n                                :sequence="item"\n                            >\n                                <template #content>\n                                    <div class="sw-flow-sequence-action__error-action">\n                                        <div class="sw-flow-sequence-action__error-action-title">\n                                            <sw-icon\n                                                name="regular-question-circle-s"\n                                                size="14px"\n                                                class="sw-icon-action"\n                                            />\n\n                                            {{ $tc(\'sw-flow.actions.unknownLabel\') }}\n                                        </div>\n\n                                        <p>\n                                            {{ $tc(\'sw-flow.actions.warningText\') }}\n                                        </p>\n                                    </div>\n                                </template>\n                            </sw-flow-sequence-action-error>\n\n                            <div v-else>\n                                \n                                {% block sw_flow_sequence_action_actions_item_header %}\n                                <div class="sw-flow-sequence-action__action-header">\n                                    <div class="sw-flow-sequence-action__action-icon">\n                                        <sw-icon\n                                            v-if="!item.iconRaw"\n                                            :name="`${item.icon}`"\n                                            size="12px"\n                                            class="sw-icon-action"\n                                        />\n\n                                        <img\n                                            v-else\n                                            class="sw-flow-sequence-action__icon-raw sw-icon"\n                                            :src="`data:image/png;base64, ${item.iconRaw}`"\n                                            alt=""\n                                        >\n                                    </div>\n\n                                    \n                                    {% block sw_flow_sequence_action_actions_item_name %}\n                                    <div class="sw-flow-sequence-action__action-name">\n                                        <h3>{{ item.label }}</h3>\n                                    </div>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_flow_sequence_action_actions_item_context_button %}\n                                    <sw-context-button\n                                        ref="contextButton"\n                                        class="sw-flow-sequence-action__context-button"\n                                        :disabled="disabled || item.disabled"\n                                    >\n                                        \n                                        {% block sw_flow_sequence_action_actions_item_button_edit %}\n                                        <sw-context-menu-item\n                                            v-if="isNotStopFlow(item)"\n                                            class="sw-flow-sequence-action__edit-action"\n                                            @click="(event) => onEditAction(item, event.target, key)"\n                                        >\n                                            {{ $tc(\'sw-flow.actions.contextButton.editAction\') }}\n                                        </sw-context-menu-item>\n                                        {% endblock %}\n\n                                        \n                                        {% block sw_flow_sequence_action_actions_item_button_delete %}\n                                        <sw-context-menu-item\n                                            variant="danger"\n                                            class="sw-flow-sequence-action__delete-action"\n                                            @click="removeAction(item.id)"\n                                        >\n                                            {{ $tc(\'sw-flow.actions.contextButton.deleteAction\') }}\n                                        </sw-context-menu-item>\n                                        {% endblock %}\n\n                                        \n                                        {% block sw_flow_sequence_action_actions_item_button_move_up %}\n                                        <sw-context-menu-item\n                                            v-if="showMoveOption(item, \'up\')"\n                                            class="sw-flow-sequence-action__move-up"\n                                            @click="moveAction(item, \'up\', key)"\n                                        >\n                                            {{ $tc(\'sw-flow.actions.contextButton.moveUpAction\') }}\n                                        </sw-context-menu-item>\n                                        {% endblock %}\n\n                                        \n                                        {% block sw_flow_sequence_action_actions_item_button_move_down %}\n                                        <sw-context-menu-item\n                                            v-if="showMoveOption(item, \'down\')"\n                                            class="sw-flow-sequence-action__move-down"\n                                            @click="moveAction(item, \'down\', key)"\n                                        >\n                                            {{ $tc(\'sw-flow.actions.contextButton.moveDownAction\') }}\n                                        </sw-context-menu-item>\n                                        {% endblock %}\n                                    </sw-context-button>\n                                    {% endblock %}\n                                </div>\n                                {% endblock %}\n                            </div>\n\n                            \n                            {% block sw_flow_sequence_action_actions_item_description %}\n                            <div\n                                class="sw-flow-sequence-action__action-description"\n                                v-html="getActionDescriptions(item)"\n                            >\n                            </div>\n                            {% endblock %}\n\n                            \n                            {% block sw_flow_sequence_action_item_custom %}\n                            {% endblock %}\n\n                        </li>\n                        {% endblock %}\n                    </transition-group>\n                    {% endblock %}\n                </ul>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_flow_sequence_action_add_select %}\n            <div\n                v-if="showAddAction && !disabled"\n                class="sw-flow-sequence-action__select"\n            >\n                \n                {% block sw_flow_sequence_action_list %}\n                <sw-grouped-single-select\n                    class="sw-flow-sequence-action__selection-action"\n                    size="small"\n                    value=""\n                    :placeholder="$tc(\'sw-flow.actions.placeholderSelectAction\')"\n                    :options="actionOptions"\n                    :groups="groups"\n                    :popover-classes="[\'sw-flow-sequence-action__popover\']"\n                    :error="fieldError"\n                    :disabled="isUnknownTrigger"\n                    {% if VUE3 %}\n                    @update:value="openDynamicModal"\n                    {% else %}\n                    @change="openDynamicModal"\n                    {% endif %}\n                >\n                    <template #result-item="{ item, index, labelProperty, highlightSearchTerm, isSelected, setValue, getKey }">\n                        <sw-select-result\n                            v-tooltip="{\n                                message: $tc(\'sw-flow.actions.tooltipActionDisabled\'),\n                                disabled: !item.disabled\n                            }"\n                            :selected="isSelected(item)"\n                            v-bind="{ item, index }"\n                            :class="[stopFlowStyle(item.value), {\'sw-flow-sequence-action__disabled\': item.disabled}]"\n                            @item-select="setValue"\n                        >\n                            \n                            {% block sw_flow_sequence_action_select_results_list_result_label %}\n                            <sw-icon\n                                v-if="!item.iconRaw"\n                                :name="`${item.icon}`"\n                                size="12px"\n                                class="sw-icon-action"\n                            />\n\n                            <img\n                                v-else\n                                class="sw-flow-sequence-action__icon-raw"\n                                :src="`data:image/png;base64, ${item.iconRaw}`"\n                                alt=""\n                            >\n\n                            <sw-highlight-text\n                                v-if="highlightSearchTerm"\n                                :text="getKey(item, labelProperty)"\n                            />\n\n                            <template v-else>\n                                {{ getKey(item, labelProperty) }}\n                            </template>\n                            {% endblock %}\n                        </sw-select-result>\n                    </template>\n                </sw-grouped-single-select>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    <div\n        v-if="errorArrow"\n        class="sw-flow-sequence-action__true-arrow"\n    >\n        <div class="sw-flow-sequence-action__true-line"></div>\n        <div class="sw-flow-sequence-action__oval"></div>\n        <sw-icon\n            name="regular-chevron-right-s"\n            small\n        />\n\n    </div>\n\n    \n    {% block sw_flow_sequence_action_modal %}\n    <sw-flow-sequence-modal\n        :sequence="currentSequence"\n        :action="selectedAction"\n        :modal-name="modalName"\n        @process-finish="onSaveActionSuccess"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","flowBuilderService","feature"],mixins:[g.getByName("sw-inline-snippet")],props:{sequence:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},isUnknownTrigger:{type:Boolean,required:!1,default:!1}},data:function(){return{fieldError:null,selectedAction:"",currentSequence:{},appFlowActions:[],isAppAction:!1}},computed:m(m({sequenceRepository:function(){return this.repositoryFactory.create("flow_sequence")},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},appFlowActionRepository:function(){return this.repositoryFactory.create("app_flow_action")},actionOptions:function(){var e=this,n=this.availableActions.map((function(n){return e.getActionTitle(n)}));return this.sortActionOptions(n)},groups:function(){var e=this,n=this.actionGroups.map((function(n){return{id:n,label:e.$tc("sw-flow.actions.group.".concat(n))}}));if(this.appActions.length){var t,i,o,c=this.appActions[0];if(!this.actionGroups.find((function(e){var n;return e===(null==c||null===(n=c.app)||void 0===n?void 0:n.name)})))n.unshift({id:"".concat(null==c||null===(t=c.app)||void 0===t?void 0:t.name[0].toLowerCase()).concat(null==c||null===(i=c.app)||void 0===i?void 0:i.name.slice(1)),label:null==c||null===(o=c.app)||void 0===o?void 0:o.label})}return p()(n,["label"])},sequenceData:function(){var e=this;return this.sequence.id?[m(m({},this.sequence),this.getActionTitle(this.sequence.actionName))]:this.sortByPosition(Object.values(this.sequence).map((function(n){return m(m({},n),e.getActionTitle(n.actionName))})))},showAddAction:function(){var e=this;return!(this.sequence.actionName===this.stopFlowActionName||this.sequenceData.some((function(n){return n.actionName===e.stopFlowActionName})))},stopFlowActionName:function(){return this.flowBuilderService.getActionName("STOP_FLOW")},actionClasses:function(){return{"is--stop-flow":!this.showAddAction,"has--arrow":this.errorArrow}},errorArrow:function(){return!this.isValidAction(this.sequence)&&this.sequence.actionName&&this.sequence.trueBlock},modalName:function(){return this.getSelectedAppAction(this.selectedAction)?"sw-flow-app-action-modal":this.flowBuilderService.getActionModalName(this.selectedAction)},currentLocale:function(){return Shopware.State.get("session").currentLocale},actionDescription:function(){var e,n=this;return e={},l()(e,f.a.STOP_FLOW,(function(){return n.$tc("sw-flow.actions.textStopFlowDescription")})),l()(e,f.a.SET_ORDER_STATE,(function(e){return n.getSetOrderStateDescription(e)})),l()(e,f.a.GENERATE_DOCUMENT,(function(e){return n.getGenerateDocumentDescription(e)})),l()(e,f.a.MAIL_SEND,(function(e){return n.getMailSendDescription(e)})),l()(e,f.a.CHANGE_CUSTOMER_GROUP,(function(e){return n.getCustomerGroupDescription(e)})),l()(e,f.a.CHANGE_CUSTOMER_STATUS,(function(e){return n.getCustomerStatusDescription(e)})),l()(e,f.a.SET_CUSTOMER_CUSTOM_FIELD,(function(e){return n.getCustomFieldDescription(e)})),l()(e,f.a.SET_CUSTOMER_GROUP_CUSTOM_FIELD,(function(e){return n.getCustomFieldDescription(e)})),l()(e,f.a.SET_ORDER_CUSTOM_FIELD,(function(e){return n.getCustomFieldDescription(e)})),l()(e,f.a.ADD_CUSTOMER_AFFILIATE_AND_CAMPAIGN_CODE,(function(e){return n.getAffiliateAndCampaignCodeDescription(e)})),l()(e,f.a.ADD_ORDER_AFFILIATE_AND_CAMPAIGN_CODE,(function(e){return n.getAffiliateAndCampaignCodeDescription(e)})),l()(e,f.a.APP_FLOW_ACTION,(function(e,t){return n.getAppFlowActionDescription(e,t)})),e}},F("swFlowState",["invalidSequences","stateMachineState","documentTypes","mailTemplates","customerGroups","customFieldSets","customFields","triggerEvent","triggerActions"])),y("swFlowState",["availableActions","actionGroups","sequences","appActions","getSelectedAppAction","hasAvailableAction"])),watch:{sequence:{handler:function(){this.setFieldError()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){},openDynamicModal:function(e){var n=this.getSelectedAppAction(e);n&&(this.isAppAction=!0,this.currentSequence.propsAppFlowAction=n),e!==this.stopFlowActionName?this.selectedAction=e:this.addAction({name:this.stopFlowActionName,config:null})},getSelectedAppFlowAction:function(e){return this.appFlowActions.find((function(n){return n.name===e}))},onSaveActionSuccess:function(e){var n=e.config,t=e.id,i=null==n?void 0:n.entity,o=this.selectedAction,c=this.flowBuilderService.mapActionType(this.selectedAction);c&&i&&(i=k(i).replace("_","."),o=c.replace("entity",i)),t?this.editAction({name:o,config:n}):this.addAction({name:o,config:n}),this.onCloseModal()},onCloseModal:function(){this.currentSequence={},this.selectedAction="",this.isAppAction=!1,this.$delete(this.sequence,"propsAppFlowAction")},addAction:function(e){if(e.name){var n=this.getSelectedAppAction(e.name);if(!this.sequence.actionName&&this.sequence.id){var t={id:this.sequence.id,actionName:e.name,config:e.config};n&&(t.appFlowActionId=n.id),_.commit("swFlowState/updateSequence",t)}else{var i=this.sequenceData[this.sequenceData.length-1],o=this.sequenceRepository.create(),c=m(m({},o),{},{parentId:i.parentId,trueCase:i.trueCase,displayGroup:i.displayGroup,ruleId:null,actionName:e.name,position:i.position+1,config:e.config,id:A.createId()});n&&(c.appFlowActionId=n.id),o=Object.assign(o,c),_.commit("swFlowState/addSequence",o)}this.removeFieldError()}},editAction:function(e){e.name&&_.commit("swFlowState/updateSequence",{id:this.currentSequence.id,actionName:e.name,config:e.config})},removeAction:function(e){var n,t=this.sequences.find((function(n){return n.id===e}));null!=t&&t.id&&this.sequences.filter((function(n){return n.parentId===t.parentId&&n.trueCase===t.trueCase&&n.id!==e})).forEach((function(e,n){_.commit("swFlowState/updateSequence",{id:e.id,position:n+1})}));this.isAppDisabled(this.getSelectedAppAction(null===(n=this.sequence[e])||void 0===n?void 0:n.actionName))||_.commit("swFlowState/removeSequences",[e])},actionsWithoutStopFlow:function(){var e=this;if(this.sequence.id)return[m({},this.sequence)];var n=Object.values(this.sequence);return this.sortByPosition(n.filter((function(n){return n.actionName!==e.stopFlowActionName})))},showMoveOption:function(e,n){var t=this.actionsWithoutStopFlow();return!(t.length<=1)&&(("up"!==n||t[0].position!==e.position)&&(("down"!==n||t[t.length-1].position!==e.position)&&e.actionName!==this.stopFlowActionName))},moveAction:function(e,n,t){if(!this.isAppDisabled(this.getSelectedAppAction(e.actionName))){var i=this.actionsWithoutStopFlow(),o=i.findIndex((function(n){return n.position===e.position})),c="up"===n?i[o-1]:i[o+1],s=b(c);_.commit("swFlowState/updateSequence",{id:c.id,position:e.position}),_.commit("swFlowState/updateSequence",{id:e.id,position:s.position});var a="up"===n?t-1:t+1,l=this.$refs.contextButton,r=[l[a],l[t]];l[t]=r[0],l[a]=r[1]}},onEditAction:function(e,n,t){e.actionName&&e.actionName===this.stopFlowActionName||this.hasAvailableAction(e.actionName)&&null!=e&&e.actionName&&n&&(this.$refs.contextButton[t]&&this.$refs.contextButton[t].$el.contains(n)||this.isAppDisabled(this.getSelectedAppAction(e.actionName))||(e.propsAppFlowAction=this.getSelectedAppAction(e.actionName),this.currentSequence=e,this.selectedAction=e.actionName))},removeActionContainer:function(){var e=this.sequence.id?[this.sequence.id]:Object.keys(this.sequence);_.commit("swFlowState/removeSequences",e)},getActionTitle:function(e){if(!e)return null;var n,t,i,o,c=this.getSelectedAppAction(e);if(c)return{label:c.label||(null===(n=c.translated)||void 0===n?void 0:n.label),icon:c.swIcon,iconRaw:c.icon,value:c.name,disabled:!(null!==(t=c.app)&&void 0!==t&&t.active),group:"".concat(null===(i=c.app)||void 0===i?void 0:i.name[0].toLowerCase()).concat(null===(o=c.app)||void 0===o?void 0:o.name.slice(1))};var s=this.flowBuilderService.getActionTitle(e);return m(m({},s),{},{label:this.$tc(s.label),group:this.flowBuilderService.getActionGroupMapping(e)})},getAppFlowAction:function(){var e=this,n=new D(1,25);return n.addAssociation("app"),this.appFlowActionRepository.search(n,Shopware.Context.api).then((function(n){e.appFlowActions=n}))},sortByPosition:function(e){return e.sort((function(e,n){return e.position-n.position}))},stopFlowStyle:function(e){return{"is--stop-flow":e===this.stopFlowActionName}},convertTagString:function(e){return e.toString().replace(/,/g,", ")},getActionDescription:function(e){var n=e.actionName,t=e.config;return n&&this.hasAvailableAction(n)?this.getSelectedAppFlowAction(n)?this.actionDescription[f.a.APP_FLOW_ACTION](t,n):n.includes("tag")&&(n.includes("add")||n.includes("remove"))?"".concat(this.$tc("sw-flow.actions.labelTo",0,{entity:this.capitalize(t.entity)}),"<br>").concat(this.$tc("sw-flow.actions.labelTag",0,{tagNames:this.convertTagString(Object.values(t.tagIds))})):"function"==typeof this.actionDescription[n]||this.isAppAction?this.actionDescription[n](t):"":""},getActionDescriptions:function(e){if(!e.actionName)return"";var n={appActions:this.appActions,customerGroups:this.customerGroups,customFieldSets:this.customFieldSets,customFields:this.customFields,stateMachineState:this.stateMachineState,documentTypes:this.documentTypes,mailTemplates:this.mailTemplates};return this.flowBuilderService.getActionDescriptions(n,e,this)},setFieldError:function(){var e;null!==(e=this.invalidSequences)&&void 0!==e&&e.includes(this.sequence.id)?this.fieldError=new S({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"}):this.fieldError=null},removeFieldError:function(){var e,n=this;if(this.fieldError){this.fieldError=null;var t=null===(e=this.invalidSequences)||void 0===e?void 0:e.filter((function(e){return n.sequence.id!==e}));_.commit("swFlowState/setInvalidSequences",t)}},isNotStopFlow:function(e){return e.actionName!==this.stopFlowActionName},getSetOrderStateDescription:function(e){var n=[];if(e.order){var t,i=this.stateMachineState.find((function(n){return n.technicalName===e.order&&"order.state"===n.stateMachine.technicalName})),o=(null==i||null===(t=i.translated)||void 0===t?void 0:t.name)||"";n.push("".concat(this.$tc("sw-flow.modals.status.labelOrderStatus"),": ").concat(o))}if(e.order_delivery){var c,s=this.stateMachineState.find((function(n){return n.technicalName===e.order_delivery&&"order_delivery.state"===n.stateMachine.technicalName})),a=(null==s||null===(c=s.translated)||void 0===c?void 0:c.name)||"";n.push("".concat(this.$tc("sw-flow.modals.status.labelDeliveryStatus"),": ").concat(a))}if(e.order_transaction){var l,r=this.stateMachineState.find((function(n){return n.technicalName===e.order_transaction&&"order_transaction.state"===n.stateMachine.technicalName})),u=(null==r||null===(l=r.translated)||void 0===l?void 0:l.name)||"";n.push("".concat(this.$tc("sw-flow.modals.status.labelPaymentStatus"),": ").concat(u))}var d=e.force_transition?this.$tc("global.default.yes"):this.$tc("global.default.no");return n.push("".concat(this.$tc("sw-flow.modals.status.forceTransition"),": ").concat(d)),n.join("<br>")},getGenerateDocumentDescription:function(e){var n=this;e.documentType&&(e={documentTypes:[e]});var t=e.documentTypes.map((function(e){var t,i;return null===(t=n.documentTypes.find((function(n){return n.technicalName===e.documentType})))||void 0===t||null===(i=t.translated)||void 0===i?void 0:i.name}));return this.convertTagString(t)},getCustomerGroupDescription:function(e){var n,t=this.customerGroups.find((function(n){return n.id===e.customerGroupId}));return null==t||null===(n=t.translated)||void 0===n?void 0:n.name},getCustomerStatusDescription:function(e){return e.active?this.$tc("sw-flow.modals.customerStatus.active"):this.$tc("sw-flow.modals.customerStatus.inactive")},getMailSendDescription:function(e){var n,t=this.mailTemplates.find((function(n){return n.id===e.mailTemplateId})),i=this.$tc("sw-flow.actions.labelTemplate",0,{template:null==t||null===(n=t.mailTemplateType)||void 0===n?void 0:n.name}),o=null==t?void 0:t.description;return o&&(o=o.length>60?"".concat(o.substring(0,60),"..."):o,i="".concat(i,"<br>").concat(this.$tc("sw-flow.actions.labelDescription",0,{description:o}))),i},getCustomFieldDescription:function(e){var n=this.customFieldSets.find((function(n){return n.id===e.customFieldSetId})),t=this.customFields.find((function(n){return n.id===e.customFieldId}));return n&&t?"".concat(this.$tc("sw-flow.actions.labelCustomFieldSet",0,{customFieldSet:this.getInlineSnippet(n.config.label)||n.name}),"<br>").concat(this.$tc("sw-flow.actions.labelCustomField",0,{customField:this.getInlineSnippet(t.config.label)||t.name}),"<br>").concat(this.$tc("sw-flow.actions.labelCustomFieldOption",0,{customFieldOption:e.optionLabel})):""},getAffiliateAndCampaignCodeDescription:function(e){var n=this.$tc("sw-flow.actions.labelTo",0,{entity:this.capitalize(e.entity)});return(e.affiliateCode.upsert||null!=e.affiliateCode.value)&&(n="".concat(n,"<br>").concat(this.$tc("sw-flow.actions.labelAffiliateCode",0,{affiliateCode:e.affiliateCode.value||""}))),(e.campaignCode.upsert||null!=e.campaignCode.value)&&(n="".concat(n,"<br>").concat(this.$tc("sw-flow.actions.labelCampaignCode",0,{campaignCode:e.campaignCode.value||""}))),n},capitalize:function(e){return"".concat(e.slice(0,1).toUpperCase()).concat(e.slice(1))},getAppFlowActionDescription:function(e,n){var t=this,i=m({},e),c="";return Object.entries(i).forEach((function(e){var a=s()(e,1)[0];if("object"===o()(i[a])&&i[a].length>1){var l="";return i[a].forEach((function(e){var i=t.formatValuePreview(a,n,e);l="".concat(l,"- ").concat(i,"<br/>")})),void(c="".concat(c).concat(t.convertLabelPreview(a,n),":<br/> ").concat(l))}var r=t.formatValuePreview(a,n,i[a]);c="".concat(c).concat(t.convertLabelPreview(a,n),": ").concat(r,"<br/>")})),c},formatValuePreview:function(e,n,t){var i=this.getSelectedAppFlowAction(n);if(void 0===i)return t;var o=i.config.find((function(n){return n.name===e}));if(void 0===o)return t;if(["password"].includes(o.type))return t.replace(/([^;])/g,"*");if(["single-select","multi-select"].includes(o.type)){var c,s,a="string"==typeof t?t:t[0],l=o.options.find((function(e){return e.value===a}));return void 0===l?t:null!==(c=null!==(s=l.label[this.currentLocale])&&void 0!==s?s:o.label["en-GB"])&&void 0!==c?c:t}return["datetime","date","time"].includes(o.type)?new Date(t):["colorpicker"].includes(o.type)?'<span class="sw-color-badge is--default" style="background: '.concat(t,';"></span> ').concat(t):t},convertLabelPreview:function(e,n){var t,i,o=this.getSelectedAppFlowAction(n);if(void 0===o)return e;var c=o.config.find((function(n){return n.name===e}));return void 0===c?e:null!==(t=null!==(i=c.label[this.currentLocale])&&void 0!==i?i:c.label["en-GB"])&&void 0!==t?t:e},isAppDisabled:function(e){return!!e&&!e.app.active},getStopFlowIndex:function(e){var n=this;return e.map((function(e,t){return e.group===n.flowBuilderService.getGroup("GENERAL")&&t})).filter((function(e){return e>0})).pop()||e.length},sortActionOptions:function(e){var n=this,t=e.pop();(e=u()(e,["group","label"])).forEach((function(t){t.group&&t.group!==n.flowBuilderService.getGroup("GENERAL")||(t.group=t.group||n.flowBuilderService.getGroup("GENERAL"),e.push(e.splice(e.findIndex((function(e){return e.group===n.flowBuilderService.getGroup("GENERAL")})),1)[0]))})),e=p()(e,["group","label"],["esc","esc"]);var i=this.getStopFlowIndex(e)+1;return e.splice(i,0,t),e},isValidAction:function(e){return e&&this.hasAvailableAction(e)}}}},"n8W+":function(e,n,t){var i=t("5oDr");e.exports=function(e,n){return function(t,o){if(null==t)return t;if(!i(t))return e(t,o);for(var c=t.length,s=n?c:-1,a=Object(t);(n?s--:++s<c)&&!1!==o(a[s],s,a););return t}}},oBAG:function(e,n,t){var i=t("7LHL"),o=t("GNJM"),c=t("PFal"),s=t("FGqd"),a=c((function(e,n){if(null==e)return[];var t=n.length;return t>1&&s(e,n[0],n[1])?n=[]:t>2&&s(n[0],n[1],n[2])&&(n=[n[0]]),o(e,i(n,1),[])}));e.exports=a},pgjS:function(e,n,t){var i=t("CxK+"),o=t("n8W+")(i);e.exports=o},szVY:function(e,n,t){var i=t("pgjS"),o=t("5oDr");e.exports=function(e,n){var t=-1,c=o(e)?Array(e.length):[];return i(e,(function(e,i,o){c[++t]=n(e,i,o)})),c}}}]);
//# sourceMappingURL=f59e69d945001d61b130.js.map