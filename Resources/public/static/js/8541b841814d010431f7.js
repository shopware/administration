(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[570],{XMGi:function(t,e,r){"use strict";r.r(e);var i=r("6lmj"),n=r.n(i),a=Shopware.Mixin,o=Shopware.Data.Criteria;e.default={template:'\n{% block sw_order_state_history_card %}\n<sw-card\n    :title="title"\n    :is-loading="isLoading || statesLoading"\n    class="sw-order-state-card"\n    position-identifier="sw-order-state-history-card"\n>\n    \n    {% block sw_order_state_change_card_modal %}\n    <sw-order-state-change-modal\n        v-if="showModal"\n        :order="order"\n        :is-loading="isLoading"\n        :technical-name="technicalName"\n        @page-leave="onLeaveModalClose"\n        @page-leave-confirm="onLeaveModalConfirm"\n    />\n    {% endblock %}\n    \n    {% block sw_order_state_history_card_container %}\n    <sw-container\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        gap="30px 30px"\n    >\n        \n        {% block sw_order_state_history_card_transaction %}\n        <sw-order-state-history-card-entry\n            v-if="transaction"\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-state-history-card__payment-state"\n            :disabled="!acl.can(\'order.editor\')"\n            :history="transactionHistory"\n            :transition-options="transactionOptions"\n            state-machine-name="order_transaction.state"\n            :title="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n            @state-select="onTransactionStateSelected"\n        />\n\n        <template v-else>\n            <div>\n                <h2>{{ $tc(\'sw-order.stateCard.headlineTransactionState\') }}</h2>\n                {{ $tc(\'sw-order.stateCard.labelNoTransactionState\') }}\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_state_history_card_delivery %}\n        <sw-order-state-history-card-entry\n            v-if="delivery"\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-state-history-card__delivery-state"\n            :history="deliveryHistory"\n            :disabled="!acl.can(\'order.editor\')"\n            :transition-options="deliveryOptions"\n            state-machine-name="order_delivery.state"\n            :title="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n            @state-select="onDeliveryStateSelected"\n        />\n\n        <template v-else>\n            <div>\n                <h2>{{ $tc(\'sw-order.stateCard.headlineDeliveryState\') }}</h2>\n                {{ $tc(\'sw-order.stateCard.labelNoDeliveryState\') }}\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_state_history_card_order%}\n        <sw-order-state-history-card-entry\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-state-history-card__order-state"\n            :history="orderHistory"\n            :disabled="!acl.can(\'order.editor\')"\n            :transition-options="orderOptions"\n            state-machine-name="order.state"\n            :title="$tc(\'sw-order.stateCard.headlineOrderState\')"\n            @state-select="onOrderStateSelected"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["orderService","stateMachineService","orderStateMachineService","repositoryFactory","acl","feature"],mixins:[a.getByName("notification")],props:{title:{type:String,required:!0},order:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},data:function(){return{showModal:!1,orderHistory:[],orderOptions:[],transactionHistory:[],transactionOptions:[],deliveryHistory:[],deliveryOptions:[],statesLoading:!0,modalConfirmed:!1,currentActionName:null,currentStateType:null,technicalName:""}},computed:{stateMachineStateRepository:function(){return this.repositoryFactory.create("state_machine_state")},mailTemplateRepository:function(){return this.repositoryFactory.create("mail_template")},stateMachineHistoryRepository:function(){return this.repositoryFactory.create("state_machine_history")},transaction:function(){for(var t=0;t<this.order.transactions.length;t+=1)if(!["cancelled","failed"].includes(this.order.transactions[t].stateMachineState.technicalName))return this.order.transactions[t];return this.order.transactions.last()},delivery:function(){return this.order.deliveries[0]},stateMachineHistoryCriteria:function(){var t,e,r=new o(1,null),i=[this.order.id].concat(n()((null===(t=this.order.transactions)||void 0===t?void 0:t.getIds())||[]),n()((null===(e=this.order.deliveries)||void 0===e?void 0:e.getIds())||[]));return r.addFilter(o.equalsAny("state_machine_history.entityId.id",i)),r.addFilter(o.equalsAny("state_machine_history.entityName",["order","order_transaction","order_delivery"])),r.addAssociation("fromStateMachineState"),r.addAssociation("toStateMachineState"),r.addAssociation("user"),r.addSorting({field:"state_machine_history.createdAt",order:"ASC"}),r}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadHistory()},loadHistory:function(){var t=this;this.statesLoading=!0,this.modalConfirmed=!1,Promise.all([this.getStateHistoryEntries(),this.getTransitionOptions()]).then((function(){t.$emit("options-change","order.states",t.orderOptions),t.transaction&&t.$emit("options-change","order_transaction.states",t.transactionOptions),t.delivery&&t.$emit("options-change","order_delivery.states",t.deliveryOptions)})).catch((function(e){t.createNotificationError(e)})).finally((function(){t.statesLoading=!1}))},getStateHistoryEntries:function(){var t=this;return this.stateMachineHistoryRepository.search(this.stateMachineHistoryCriteria).then((function(e){return t.orderHistory=t.buildStateHistory(t.order,t.fetchEntries([t.order.id],e)),t.transaction&&t.order.transactions&&(t.transactionHistory=t.buildStateHistory(t.transaction,t.fetchEntries(t.order.transactions.getIds(),e))),t.delivery&&t.order.deliveries&&(t.deliveryHistory=t.buildStateHistory(t.delivery,t.fetchEntries(t.order.deliveries.getIds(),e))),Promise.resolve(e)}))},fetchEntries:function(t,e){return t.length&&e.length?e.filter((function(e){return t.includes(e.entityId.id)})):[]},buildStateHistory:function(t,e){if(0===e.length)return[{state:t.stateMachineState,createdAt:t.createdAt,user:null}];var r=[];return r.push({state:e[0].fromStateMachineState,createdAt:e[0].createdAt,user:null}),e.forEach((function(t){r.push({state:t.toStateMachineState,createdAt:t.createdAt,user:t.user?t.user:null})})),r},getTransitionOptions:function(){var t=this,e=[this.stateMachineService.getState("order",this.order.id)];return this.transaction&&e.push(this.stateMachineService.getState("order_transaction",this.transaction.id)),this.delivery&&e.push(this.stateMachineService.getState("order_delivery",this.delivery.id)),Promise.all([this.getAllStates()].concat(e)).then((function(e){var r=e[0],i=e[1];if(t.orderOptions=t.buildTransitionOptions("order.state",r,i.data.transitions),t.transaction){var n=e[2];t.transactionOptions=t.buildTransitionOptions("order_transaction.state",r,n.data.transitions)}if(t.delivery){var a=e[3];t.deliveryOptions=t.buildTransitionOptions("order_delivery.state",r,a.data.transitions)}return Promise.resolve()}))},getAllStates:function(){return this.stateMachineStateRepository.search(this.stateMachineStateCriteria())},stateMachineStateCriteria:function(){var t=new o(1,null);return t.addSorting({field:"name",order:"ASC"}),t.addAssociation("stateMachine"),t.addFilter(o.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),t},buildTransitionOptions:function(t,e,r){var i=e.filter((function(e){return e.stateMachine.technicalName===t})).map((function(t,e){return{stateName:t.technicalName,id:e,name:t.translated.name,disabled:!0}}));return i.forEach((function(t){var e=r.filter((function(e){return e.toStateName===t.stateName}));e.length>=1&&(t.disabled=!1,t.id=e[0].actionName)})),i},onOrderStateSelected:function(t){if(t)return!1===this.modalConfirmed?(this.currentActionName=t,this.currentStateType="orderState",void(this.showModal=!0)):void(this.modalConfirmed=!1);this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"))},onCancelCreation:function(){this.showModal=!1},onTransactionStateSelected:function(t){if(t)return!1===this.modalConfirmed?(this.currentActionName=t,this.currentStateType="orderTransactionState",void(this.showModal=!0)):void(this.modalConfirmed=!1);this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"))},onDeliveryStateSelected:function(t){if(t)return!1===this.modalConfirmed?(this.currentActionName=t,this.currentStateType="orderDeliveryState",void(this.showModal=!0)):void(this.modalConfirmed=!1);this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"))},onLeaveModalClose:function(){this.modalConfirmed=!1,this.currentActionName=null,this.currentStateType=null,this.showModal=!1},onLeaveModalConfirm:function(t){var e=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.showModal=!1,"orderTransactionState"===this.currentStateType?this.orderStateMachineService.transitionOrderTransactionState(this.transaction.id,this.currentActionName,{documentIds:t,sendMail:r}).then((function(){e.$emit("order-state-change"),e.loadHistory()})).catch((function(t){e.createStateChangeErrorNotification(t)})):"orderState"===this.currentStateType?this.orderStateMachineService.transitionOrderState(this.order.id,this.currentActionName,{documentIds:t,sendMail:r}).then((function(){e.$emit("order-state-change"),e.loadHistory()})).catch((function(t){e.createStateChangeErrorNotification(t)})):"orderDeliveryState"===this.currentStateType&&this.orderStateMachineService.transitionOrderDeliveryState(this.delivery.id,this.currentActionName,{documentIds:t,sendMail:r}).then((function(){e.$emit("order-state-change"),e.loadHistory()})).catch((function(t){e.createStateChangeErrorNotification(t)})),this.currentActionName=null,this.currentStateType=null},createStateChangeErrorNotification:function(t){this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")+t})}}}}}]);
//# sourceMappingURL=8541b841814d010431f7.js.map