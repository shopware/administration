(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[263],{"9f10":function(e,t,n){var o=n("TZ2+");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("f22f8900",o,!0,{})},PZ0s:function(e,t,n){"use strict";n.r(t);var o=n("7yzw"),i=n.n(o),r=n("CsSd"),a=n.n(r),s=n("92Mt"),l=n.n(s);n("9f10");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=Shopware,f=w.Component,d=w.Mixin,p=w.Context,m=w.State,h=w.Utils,g=w.Service,S=Shopware.Data,v=S.Criteria,y=S.EntityCollection,F=Shopware.Utils.object.cloneDeep,b=f.getComponentHelper(),_=b.mapState,T=b.mapGetters,C=b.mapPropertyErrors;t.default={template:'\n{% block sw_flow_detail %}\n<sw-page class="sw-flow-detail">\n    \n    {% block sw_flow_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(flow, \'name\', $tc(\'sw-flow.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_flow_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_flow_detail_smart_bar_actions_save %}\n        <sw-button-process\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'flow.editor\'),\n                position: \'bottom\',\n                showOnDisabledElements: true\n            }"\n            class="sw-flow-detail__save"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!acl.can(\'flow.editor\')"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_flow_content %}\n    <template #content>\n        \n        {% block sw_flow_leave_page_modal %}\n        <sw-flow-leave-page-modal\n            v-if="showLeavePageWarningModal"\n            @page-leave-cancel="onLeaveModalClose"\n            @page-leave-confirm="onLeaveModalConfirm"\n        />\n        {% endblock %}\n\n        <sw-card-view :class="{\'sw-flow-detail__template\': isTemplate }">\n            \n            {% block sw_flow_tabs_header %}\n            <sw-tabs position-identifier="sw-flow-detail">\n                \n                {% block sw_flow_tabs_header_general %}\n                <sw-tabs-item\n                    class="sw-flow-detail__tab-general"\n                    :route="routeDetailTab(\'general\')"\n                >\n                    {{ $tc(\'sw-flow.page.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_flow_tabs_header_builder %}\n                <sw-tabs-item\n                    class="sw-flow-detail__tab-flow"\n                    :route="routeDetailTab(\'flow\')"\n                >\n                    {{ $tc(\'sw-flow.page.tabFlow\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_flow_tabs_header_extension %}{% endblock %}\n            </sw-tabs>\n            {% endblock %}\n            <sw-alert\n                v-if="isTemplate"\n                variant="warning"\n                class="sw-flow-detail__warning"\n            >\n                {{ $tc(\'sw-flow.flowNotification.messageWarningSave\') }}\n            </sw-alert>\n            \n            {% block sw_flow_tabs_content %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                {% if VUE3 %}\n                <router-view\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        :is-loading="isLoading"\n                        :is-new-flow="isNewFlow"\n                        :is-template="isTemplate"\n                        :is-unknown-trigger="isUnknownTrigger"\n                    />\n                </router-view>\n                {% else %}\n                <router-view\n                    :is-loading="isLoading"\n                    :is-new-flow="isNewFlow"\n                    :is-template="isTemplate"\n                    :is-unknown-trigger="isUnknownTrigger"\n                />\n                {% endif %}\n            </template>\n            {% endblock %}\n        </sw-card-view>\n\n        \n        {% block sw_flow_detail_modal_extension %}{% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["acl","repositoryFactory","feature","flowBuilderService"],mixins:[d.getByName("placeholder"),d.getByName("notification")],props:{flowId:{type:String,required:!1,default:null}},data:function(){return{isLoading:!1,isSaveSuccessful:!1,showLeavePageWarningModal:!1,nextRoute:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:u(u(u({identifier:function(){var e;return null===(e=this.flow)||void 0===e?void 0:e.name},flowRepository:function(){return this.repositoryFactory.create("flow")},flowTemplateRepository:function(){return this.repositoryFactory.create("flow_template")},flowSequenceRepository:function(){return this.repositoryFactory.create("flow_sequence")},appFlowActionRepository:function(){return this.repositoryFactory.create("app_flow_action")},isNewFlow:function(){return!this.flowId},flowCriteria:function(){var e=new v(1,25);return e.addAssociation("sequences.rule"),e.getAssociation("sequences").addSorting(v.sort("displayGroup","ASC")).addSorting(v.sort("parentId","ASC")).addSorting(v.sort("trueCase","ASC")).addSorting(v.sort("position","ASC")),e},flowTemplateCriteria:function(){return new v(1,25)},documentTypeRepository:function(){return this.repositoryFactory.create("document_type")},documentTypeCriteria:function(){var e=new v(1,100);return e.addSorting(v.sort("name","ASC")),e},mailTemplateRepository:function(){return this.repositoryFactory.create("mail_template")},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},mailTemplateIdsCriteria:function(){var e=new v(1,25);return e.addAssociation("mailTemplateType"),e.addFilter(v.equalsAny("id",this.mailTemplateIds)),e},customerGroupRepository:function(){return this.repositoryFactory.create("customer_group")},customerGroupCriteria:function(){var e=new v(1,100);return e.addSorting(v.sort("name","ASC")),e},appFlowActionCriteria:function(){var e=new v(1,25);return e.addAssociation("app"),e},stateMachineStateRepository:function(){return this.repositoryFactory.create("state_machine_state")},stateMachineStateCriteria:function(){var e=new v(1,null);return e.addSorting({field:"name",order:"ASC"}),e.addAssociation("stateMachine"),e.addFilter(v.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),e},customFieldSetCriteria:function(){var e=new v(1,25);return e.addFilter(v.equalsAny("id",this.customFieldSetIds)),e},customFieldCriteria:function(){var e=new v(1,25);return e.addFilter(v.equalsAny("id",this.customFieldIds)),e},ruleRepository:function(){return this.repositoryFactory.create("rule")},isTemplate:function(){var e;return"template"===(null===(e=this.$route.query)||void 0===e?void 0:e.type)},isUnknownTrigger:function(){var e=this;return!(!this.flowId||this.isLoading)&&!this.triggerEvents.some((function(t){return t.name===e.flow.eventName}))}},_("swFlowState",["flow","triggerEvents"])),T("swFlowState",["sequences","mailTemplateIds","customFieldSetIds","customFieldIds","hasFlowChanged"])),C("flow",["name","eventName"])),watch:{flowId:function(){this.$route.params.flowTemplateId||this.getDetailFlow()}},created:function(){this.createdComponent()},beforeRouteLeave:function(e,t,n){this.flow._isNew?n():this.hasFlowChanged?(this.nextRoute=n,this.showLeavePageWarningModal=!0):n()},beforeDestroy:function(){this.beforeDestroyComponent()},methods:{createdComponent:function(){g("flowBuilderService").addLabels({entity:"sw-flow.labelDescription.labelEntity",tagIds:"sw-flow.labelDescription.labelTag"}),Shopware.ExtensionAPI.publishData({id:"sw-flow-detail__flow",path:"flow",scope:this}),this.getAppFlowAction(),this.isTemplate?this.getDetailFlowTemplate():this.flowId?this.getDetailFlow():this.createNewFlow()},beforeDestroyComponent:function(){m.dispatch("swFlowState/resetFlowState")},routeDetailTab:function(e){return e?this.isNewFlow?{name:"sw.flow.create.".concat(e)}:this.isTemplate?{name:"sw.flow.detail.".concat(e),query:{type:"template"}}:{name:"sw.flow.detail.".concat(e)}:{}},createNewFlow:function(){if(this.$route.params.flowTemplateId)return this.createFromFlowTemplate();var e=this.flowRepository.create();return e.id=h.createId(),e.priority=0,e.eventName="",m.commit("swFlowState/setFlow",e)},getDetailFlow:function(){var e=this;return this.isLoading=!0,Shopware.State.dispatch("swFlowState/fetchTriggerActions"),this.flowRepository.get(this.flowId,p.api,this.flowCriteria).then((function(t){m.commit("swFlowState/setFlow",t),m.commit("swFlowState/setOriginFlow",F(t)),e.getDataForActionDescription()})).catch((function(){e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageError")})})).finally((function(){e.isLoading=!1}))},getAppFlowAction:function(){return this.appFlowActionRepository.search(this.appFlowActionCriteria,Shopware.Context.api).then((function(e){m.commit("swFlowState/setAppActions",e)}))},getDetailFlowTemplate:function(){var e=this;return this.isLoading=!0,this.flowTemplateRepository.get(this.flowId,p.api,this.flowTemplateCriteria).then((function(t){m.commit("swFlowState/setFlow",t),m.commit("swFlowState/setOriginFlow",F(t)),e.getDataForActionDescription(),e.getRuleDataForFlowTemplate()})).catch((function(){e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageError")})})).finally((function(){e.isLoading=!1}))},onSave:function(){var e=this;return i()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.removeAllSelectors(),!e.validateEmptySequence().length){t.next=5;break}return e.createNotificationWarning({message:e.$tc("sw-flow.flowNotification.messageRequiredEmptyFields")}),t.abrupt("return");case 5:if(e.isSaveSuccessful=!1,e.isLoading=!0,!e.isTemplate){t.next=11;break}return e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageWarningSave")}),e.isLoading=!1,t.abrupt("return");case 11:if("function"==typeof e.flow.isNew&&e.flow.isNew()||e.isTemplate){t.next=14;break}return t.next=14,e.updateSequences();case 14:e.flowRepository.save(e.flow).then((function(){"function"==typeof e.flow.isNew&&e.flow.isNew()||e.$route.params.flowTemplateId?(e.createNotificationSuccess({message:e.$tc("sw-flow.flowNotification.messageCreateSuccess")}),e.$router.push({name:"sw.flow.detail",params:{id:e.flow.id}})):e.getDetailFlow(),e.isSaveSuccessful=!0})).catch((function(){e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageSaveError")}),e.handleFieldValiationError()})).finally((function(){e.isLoading=!1}));case 15:case"end":return t.stop()}}),t)})))()},updateSequences:function(){var e=this;return i()(l.a.mark((function t(){var n,o,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.sequences.map((function(t){return t.flowId=e.flow.id,t})),t.next=3,e.flowSequenceRepository.sync(n);case 3:if(!((o=e.getDeletedSequenceIds()).length>0)){t.next=7;break}return t.next=7,e.flowSequenceRepository.syncDeleted(o);case 7:return t.next=9,e.flowRepository.get(e.flowId,p.api);case 9:i=t.sent,Object.keys(i).forEach((function(t){"sequences"!==t&&(i[t]=e.flow[t])})),m.commit("swFlowState/setFlow",i);case 12:case"end":return t.stop()}}),t)})))()},getDeletedSequenceIds:function(){var e=this.sequences.map((function(e){return e.id}));return this.flow.getOrigin().sequences.filter((function(t){return!e.includes(t.id)})).map((function(e){return e.id}))},handleFieldValiationError:function(){if(this.flowNameError||this.flowEventNameError){var e=this.$router.history.current.name,t=("sw.flow.create.flow"===e||"sw.flow.detail.flow"===e)&&this.flowEventNameError,n=("sw.flow.create.general"===e||"sw.flow.detail.general"===e)&&this.flowNameError;t||n||(this.flowId?this.$router.push({name:this.flowNameError?"sw.flow.detail.general":"sw.flow.detail.flow",params:{flowId:this.flowId}}):this.$router.push({name:this.flowNameError?"sw.flow.create.general":"sw.flow.create.flow"}))}},saveFinish:function(){this.isLoading=!1,this.isSaveSuccessful=!1},onLeaveModalClose:function(){this.nextRoute(!1),this.nextRoute=null,this.showLeavePageWarningModal=!1},onLeaveModalConfirm:function(){var e=this;this.showLeavePageWarningModal=!1,this.$nextTick((function(){e.nextRoute()}))},removeAllSelectors:function(){var e=this.sequences.filter((function(e){return null!==e.ruleId||null!==e.actionName}));m.commit("swFlowState/setSequences",e)},validateEmptySequence:function(){var e=this.sequences.reduce((function(e,t){return""!==t.ruleId&&""!==t.actionName||e.push(t.id),e}),[]);return m.commit("swFlowState/setInvalidSequences",e),e},getDataForActionDescription:function(){var e=this;if(!this.sequences)return null;var t=[];this.sequences.some((function(t){return t.actionName===e.flowBuilderService.getActionName("SET_ORDER_STATE")}))&&t.push(this.stateMachineStateRepository.search(this.stateMachineStateCriteria).then((function(e){m.commit("swFlowState/setStateMachineState",e)}))),this.sequences.some((function(t){return t.actionName===e.flowBuilderService.getActionName("GENERATE_DOCUMENT")}))&&t.push(this.documentTypeRepository.search(this.documentTypeCriteria).then((function(e){Shopware.State.commit("swFlowState/setDocumentTypes",e)}))),this.sequences.some((function(t){return t.actionName===e.flowBuilderService.getActionName("MAIL_SEND")}))&&t.push(this.mailTemplateRepository.search(this.mailTemplateIdsCriteria).then((function(e){Shopware.State.commit("swFlowState/setMailTemplates",e)}))),this.sequences.some((function(t){return t.actionName===e.flowBuilderService.getActionName("CHANGE_CUSTOMER_GROUP")}))&&t.push(this.customerGroupRepository.search(this.customerGroupCriteria).then((function(e){Shopware.State.commit("swFlowState/setCustomerGroups",e)})));var n=[this.flowBuilderService.getActionName("SET_ORDER_CUSTOM_FIELD"),this.flowBuilderService.getActionName("SET_CUSTOMER_CUSTOM_FIELD"),this.flowBuilderService.getActionName("SET_CUSTOMER_GROUP_CUSTOM_FIELD")];return this.sequences.some((function(e){return n.includes(e.actionName)}))&&(t.push(this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(e){Shopware.State.commit("swFlowState/setCustomFieldSets",e)}))),t.push(this.customFieldRepository.search(this.customFieldCriteria).then((function(e){Shopware.State.commit("swFlowState/setCustomFields",e)})))),Promise.all(t)},createFromFlowTemplate:function(){var e=this,t=this.flowRepository.create();return t.id=h.createId(),t.priority=0,this.flowTemplateRepository.get(this.$route.params.flowTemplateId,p.api,this.flowTemplateCriteria).then((function(n){var o,i,r,a;t.name=n.name,t.eventName=null===(o=n.config)||void 0===o?void 0:o.eventName,t.description=null===(i=n.config)||void 0===i?void 0:i.description,t.sequences=e.buildSequencesFromConfig(null!==(r=null===(a=n.config)||void 0===a?void 0:a.sequences)&&void 0!==r?r:[]),m.commit("swFlowState/setFlow",t),m.commit("swFlowState/setOriginFlow",F(t)),e.getDataForActionDescription(),e.getRuleDataForFlowTemplate()})).catch((function(){e.createNotificationError({message:e.$tc("sw-flow.flowNotification.messageError")})})).finally((function(){e.isLoading=!1}))},createSequenceEntity:function(e){var t=this.flowSequenceRepository.create();return Object.keys(e).forEach((function(n){t[n]="trueCase"!==n?"config"!==n?e[n]:u({},e[n]):Boolean(e[n])})),t},buildSequencesFromConfig:function(e){var t=this,n={};e=e.map((function(e){return e=t.createSequenceEntity(e),n[e.id]=h.createId(),e.id=n[e.id],e}));for(var o=0;o<e.length;o+=1)null!==e[o].parentId&&(e[o].parentId=n[e[o].parentId]);return e=g("flowBuilderService").rearrangeArrayObjects(e),new y(this.flowSequenceRepository.source,this.flowSequenceRepository.entityName,p.api,null,e)},getRuleDataForFlowTemplate:function(){var e=this,t=this.sequences.filter((function(e){return null!==e.ruleId})).map((function(e){return e.ruleId}));if(t.length){var n=new v(1,25);n.addFilter(v.equalsAny("id",t)),this.ruleRepository.search(n).then((function(t){var n=e.sequences.map((function(e){return e.ruleId&&(e.rule=t.find((function(t){return t.id===e.ruleId}))),e}));m.commit("swFlowState/setSequences",n),m.commit("swFlowState/setOriginFlow",F(e.flow))}))}}}}},"TZ2+":function(e,t,n){}}]);