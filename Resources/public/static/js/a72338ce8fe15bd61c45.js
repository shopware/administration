(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[320],{O8eX:function(t,e,a){"use strict";a.r(e);a("VPj2");var n=Shopware.Data.Criteria;e.default={template:'\n{% block sw_order_detail_state_card %}\n<sw-card\n    class="sw-order-detail-state-card"\n    position-identifier="sw-order-details-state"\n    :title="title"\n    :is-loading="isLoading"\n>\n\n    \n    {% block sw_order_detail_state_card_state %}\n    <div class="sw-order-detail-state-card__state">\n        <sw-container\n            class="sw-order-detail-state-card__state-container"\n            gap="16px"\n            columns="33% auto auto"\n        >\n\n            \n            {% block sw_order_detail_state_card_state_select %}\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :transition-options="stateOptions"\n                :state-type="entityName"\n                rounded-style\n                :placeholder="entity.stateMachineState.translated.name"\n                :label="stateLabel"\n                :background-style="stateSelectBackgroundStyle"\n                :disabled="disabled"\n                :is-loading="statesLoading"\n                @state-select="onStateSelected"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_detail_state_card_state_history_text %}\n            <div\n                v-if="lastStateChange"\n                class="sw-order-detail-state-card__state-history-text"\n            >\n                <i18n path="sw-order.stateCard.labelHistory">\n                    <template #time>\n                        <sw-time-ago :date="lastStateChange.createdAt" />\n                    </template>\n                    <template #author>\n                        {{ lastStateChange.user ? lastStateChange.user.firstName + \' \' + lastStateChange.user.lastName : $tc(\'sw-order.stateCard.labelSystemUser\') }}\n                    </template>\n                </i18n>\n            </div>\n            <div v-else></div>\n            {% endblock %}\n\n            \n            {% block sw_order_detail_state_card_state_history_button %}\n            <sw-external-link\n                class="sw-order-detail-state-card__state-history-button"\n                icon="regular-long-arrow-right"\n                @click="onShowStatusHistory"\n            >\n                {{ $tc(\'sw-order.stateCard.labelShowHistoryModal\') }}\n            </sw-external-link>\n            {% endblock %}\n\n        </sw-container>\n\n        \n        {% block sw_order_state_change_card_state_modal %}\n        <sw-order-state-change-modal\n            v-if="showStateChangeModal"\n            :order="order"\n            :is-loading="isLoading"\n            :technical-name="\'\'"\n            @page-leave="onLeaveModalClose"\n            @page-leave-confirm="onLeaveModalConfirm"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_state_change_card_divider %}\n    <hr class="sw-order-detail-state-card__divider">\n    {% endblock %}\n\n    \n    {% block sw_order_state_change_card_content %}\n    <sw-container\n        class="sw-order-detail-state-card__content"\n        columns="1fr 1fr"\n    >\n        <slot></slot>\n    </sw-container>\n    {% endblock %}\n\n</sw-card>\n{% endblock %}\n',inject:["acl","repositoryFactory","orderStateMachineService","stateMachineService","stateStyleDataProviderService"],mixins:["notification"],props:{order:{type:Object,required:!0},title:{type:String,required:!1,default:""},entity:{type:Object,required:!0},stateLabel:{type:String,required:!1,default:""},isLoading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{statesLoading:!1,stateOptions:[],lastStateChange:null,currentActionName:null,showStateChangeModal:!1,stateChangeModalConfirmed:!1}},computed:{stateMachineStateRepository:function(){return this.repositoryFactory.create("state_machine_state")},stateMachineHistoryRepository:function(){return this.repositoryFactory.create("state_machine_history")},stateMachineStateCriteria:function(){var t=new n(1,null);return t.addSorting({field:"name",order:"ASC"}),t.addAssociation("stateMachine"),t.addFilter(n.equals("state_machine_state.stateMachine.technicalName","".concat(this.entityName,".state"))),t},stateMachineHistoryCriteria:function(){var t=new n(1,1);return t.addFilter(n.equals("entityId.id",this.entity.id)),t.addFilter(n.equals("entityName",this.entityName)),t.addAssociation("user"),t.addSorting({field:"createdAt",order:"DESC"}),t},entityName:function(){return this.entity.getEntityName()},stateName:function(){return this.entity.stateMachineState.translated.name},stateSelectBackgroundStyle:function(){var t=this.entity.stateMachineState.technicalName;return this.stateStyleDataProviderService.getStyle("".concat(this.entityName,".state"),t).selectBackgroundStyle},stateTransitionMethod:function(){switch(this.entityName){case"order":return this.orderStateMachineService.transitionOrderState.bind(this.orderStateMachineService);case"order_transaction":return this.orderStateMachineService.transitionOrderTransactionState.bind(this.orderStateMachineService);case"order_delivery":return this.orderStateMachineService.transitionOrderDeliveryState.bind(this.orderStateMachineService);default:return null}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getTransitionOptions(),this.getLastChange()},onShowStatusHistory:function(){this.$emit("show-status-history")},getTransitionOptions:function(){var t=this;return this.statesLoading=!0,Promise.all([this.stateMachineStateRepository.search(this.stateMachineStateCriteria),this.stateMachineService.getState(this.entityName,this.entity.id)]).then((function(e){return t.stateOptions=t.buildTransitionOptions(e[0],e[1].data.transitions),t.statesLoading=!1,Promise.resolve()}))},buildTransitionOptions:function(t,e){var a=t.map((function(t,e){return{stateName:t.technicalName,id:e,name:t.translated.name,disabled:!0}}));return a.forEach((function(t){var a=e.filter((function(e){return e.toStateName===t.stateName}));a.length>=1&&(t.disabled=!1,t.id=a[0].actionName)})),a},onStateSelected:function(t,e){if(t&&e)return this.modalConfirmed?void(this.stateChangeModalConfirmed=!1):(this.currentActionName=e,void(this.showStateChangeModal=!0));this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"))},onLeaveModalClose:function(){this.stateChangeModalConfirmed=!1,this.currentActionName=null,this.showStateChangeModal=!1},onLeaveModalConfirm:function(t){var e=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.showStateChangeModal=!1,this.stateTransitionMethod(this.entity.id,this.currentActionName,{documentIds:t,sendMail:a}).then((function(){return e.getLastChange(),e.getTransitionOptions()})).then((function(){e.$emit("save-edits")})).catch((function(t){e.createStateChangeErrorNotification(t)})).finally((function(){e.stateChangeModalConfirmed=!1,e.currentActionName=null}))},createStateChangeErrorNotification:function(t){this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")+t})},getLastChange:function(){var t=this;this.lastStateChange=null,this.stateMachineHistoryRepository.search(this.stateMachineHistoryCriteria).then((function(e){t.lastStateChange=e.first()}))}}}},VPj2:function(t,e,a){var n=a("eaPD");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a("ydqr").default)("0b6a1181",n,!0,{})},eaPD:function(t,e,a){}}]);