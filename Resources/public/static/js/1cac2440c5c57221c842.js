"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[69168],{769168:function(t,e,r){r.r(e),r.d(e,{default:function(){return n}});let{Mixin:i}=Shopware,{Criteria:a}=Shopware.Data;var n={template:'\n{% block sw_order_state_history_card %}\n<sw-card\n    :title="title"\n    :is-loading="isLoading || statesLoading"\n    class="sw-order-state-card"\n    position-identifier="sw-order-state-history-card"\n>\n    \n    {% block sw_order_state_change_card_modal %}\n    <sw-order-state-change-modal\n        v-if="showModal"\n        :order="order"\n        :is-loading="isLoading"\n        :technical-name="technicalName"\n        @page-leave="onLeaveModalClose"\n        @page-leave-confirm="onLeaveModalConfirm"\n    />\n    {% endblock %}\n    \n    {% block sw_order_state_history_card_container %}\n    <sw-container\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        gap="30px 30px"\n    >\n        \n        {% block sw_order_state_history_card_transaction %}\n        <sw-order-state-history-card-entry\n            v-if="transaction"\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-state-history-card__payment-state"\n            :disabled="!acl.can(\'order.editor\')"\n            :history="transactionHistory"\n            :transition-options="transactionOptions"\n            state-machine-name="order_transaction.state"\n            :title="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n            @state-select="onTransactionStateSelected"\n        />\n\n        <template v-else>\n            <div>\n                <h2>{{ $tc(\'sw-order.stateCard.headlineTransactionState\') }}</h2>\n                {{ $tc(\'sw-order.stateCard.labelNoTransactionState\') }}\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_state_history_card_delivery %}\n        <sw-order-state-history-card-entry\n            v-if="delivery"\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-state-history-card__delivery-state"\n            :history="deliveryHistory"\n            :disabled="!acl.can(\'order.editor\')"\n            :transition-options="deliveryOptions"\n            state-machine-name="order_delivery.state"\n            :title="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n            @state-select="onDeliveryStateSelected"\n        />\n\n        <template v-else>\n            <div>\n                <h2>{{ $tc(\'sw-order.stateCard.headlineDeliveryState\') }}</h2>\n                {{ $tc(\'sw-order.stateCard.labelNoDeliveryState\') }}\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_state_history_card_order%}\n        <sw-order-state-history-card-entry\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-state-history-card__order-state"\n            :history="orderHistory"\n            :disabled="!acl.can(\'order.editor\')"\n            :transition-options="orderOptions"\n            state-machine-name="order.state"\n            :title="$tc(\'sw-order.stateCard.headlineOrderState\')"\n            @state-select="onOrderStateSelected"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["orderService","stateMachineService","orderStateMachineService","repositoryFactory","acl","feature"],mixins:[i.getByName("notification")],props:{title:{type:String,required:!0},order:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},data(){return{showModal:!1,orderHistory:[],orderOptions:[],transactionHistory:[],transactionOptions:[],deliveryHistory:[],deliveryOptions:[],statesLoading:!0,modalConfirmed:!1,currentActionName:null,currentStateType:null,technicalName:""}},computed:{stateMachineStateRepository(){return this.repositoryFactory.create("state_machine_state")},mailTemplateRepository(){return this.repositoryFactory.create("mail_template")},stateMachineHistoryRepository(){return this.repositoryFactory.create("state_machine_history")},transaction(){for(let t=0;t<this.order.transactions.length;t+=1)if(!["cancelled","failed"].includes(this.order.transactions[t].stateMachineState.technicalName))return this.order.transactions[t];return this.order.transactions.last()},delivery(){return this.order.deliveries[0]},stateMachineHistoryCriteria(){let t=new a(1,null),e=[this.order.id,...this.order.transactions?.getIds()||[],...this.order.deliveries?.getIds()||[]];return t.addFilter(a.equalsAny("state_machine_history.referencedId",e)),t.addFilter(a.equalsAny("state_machine_history.entityName",["order","order_transaction","order_delivery"])),t.addAssociation("fromStateMachineState"),t.addAssociation("toStateMachineState"),t.addAssociation("user"),t.addSorting({field:"state_machine_history.createdAt",order:"ASC"}),t}},created(){this.createdComponent()},methods:{createdComponent(){this.loadHistory()},loadHistory(){this.statesLoading=!0,this.modalConfirmed=!1,Promise.all([this.getStateHistoryEntries(),this.getTransitionOptions()]).then(()=>{this.$emit("options-change","order.states",this.orderOptions),this.transaction&&this.$emit("options-change","order_transaction.states",this.transactionOptions),this.delivery&&this.$emit("options-change","order_delivery.states",this.deliveryOptions)}).catch(t=>{this.createNotificationError(t)}).finally(()=>{this.statesLoading=!1})},getStateHistoryEntries(){return this.stateMachineHistoryRepository.search(this.stateMachineHistoryCriteria).then(t=>(this.orderHistory=this.buildStateHistory(this.order,this.fetchEntries([this.order.id],t)),this.transaction&&this.order.transactions&&(this.transactionHistory=this.buildStateHistory(this.transaction,this.fetchEntries(this.order.transactions.getIds(),t))),this.delivery&&this.order.deliveries&&(this.deliveryHistory=this.buildStateHistory(this.delivery,this.fetchEntries(this.order.deliveries.getIds(),t))),Promise.resolve(t)))},fetchEntries(t,e){return t.length&&e.length?e.filter(e=>t.includes(e.referencedId)):[]},buildStateHistory(t,e){if(0===e.length)return[{state:t.stateMachineState,createdAt:t.createdAt,user:null}];let r=[];return r.push({state:e[0].fromStateMachineState,createdAt:e[0].createdAt,user:null}),e.forEach(t=>{r.push({state:t.toStateMachineState,createdAt:t.createdAt,user:t.user?t.user:null})}),r},getTransitionOptions(){let t=[this.stateMachineService.getState("order",this.order.id)];return this.transaction&&t.push(this.stateMachineService.getState("order_transaction",this.transaction.id)),this.delivery&&t.push(this.stateMachineService.getState("order_delivery",this.delivery.id)),Promise.all([this.getAllStates(),...t]).then(t=>{let e=t[0],r=t[1];if(this.orderOptions=this.buildTransitionOptions("order.state",e,r.data.transitions),this.transaction){let r=t[2];this.transactionOptions=this.buildTransitionOptions("order_transaction.state",e,r.data.transitions)}if(this.delivery){let r=t[3];this.deliveryOptions=this.buildTransitionOptions("order_delivery.state",e,r.data.transitions)}return Promise.resolve()})},getAllStates(){return this.stateMachineStateRepository.search(this.stateMachineStateCriteria())},stateMachineStateCriteria(){let t=new a(1,null);return t.addSorting({field:"name",order:"ASC"}),t.addAssociation("stateMachine"),t.addFilter(a.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),t},buildTransitionOptions(t,e,r){let i=e.filter(e=>e.stateMachine.technicalName===t).map((t,e)=>({stateName:t.technicalName,id:e,name:t.translated.name,disabled:!0}));return i.forEach(t=>{let e=r.filter(e=>e.toStateName===t.stateName);e.length>=1&&(t.disabled=!1,t.id=e[0].actionName)}),i},onOrderStateSelected(t){if(!t){this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"));return}if(!1===this.modalConfirmed){this.currentActionName=t,this.currentStateType="orderState",this.showModal=!0;return}this.modalConfirmed=!1},onCancelCreation(){this.showModal=!1},onTransactionStateSelected(t){if(!t){this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"));return}if(!1===this.modalConfirmed){this.currentActionName=t,this.currentStateType="orderTransactionState",this.showModal=!0;return}this.modalConfirmed=!1},onDeliveryStateSelected(t){if(!t){this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"));return}if(!1===this.modalConfirmed){this.currentActionName=t,this.currentStateType="orderDeliveryState",this.showModal=!0;return}this.modalConfirmed=!1},onLeaveModalClose(){this.modalConfirmed=!1,this.currentActionName=null,this.currentStateType=null,this.showModal=!1},onLeaveModalConfirm(t,e=!0){this.showModal=!1,"orderTransactionState"===this.currentStateType?this.orderStateMachineService.transitionOrderTransactionState(this.transaction.id,this.currentActionName,{documentIds:t,sendMail:e}).then(()=>{this.$emit("order-state-change"),this.loadHistory()}).catch(t=>{this.createStateChangeErrorNotification(t)}):"orderState"===this.currentStateType?this.orderStateMachineService.transitionOrderState(this.order.id,this.currentActionName,{documentIds:t,sendMail:e}).then(()=>{this.$emit("order-state-change"),this.loadHistory()}).catch(t=>{this.createStateChangeErrorNotification(t)}):"orderDeliveryState"===this.currentStateType&&this.orderStateMachineService.transitionOrderDeliveryState(this.delivery.id,this.currentActionName,{documentIds:t,sendMail:e}).then(()=>{this.$emit("order-state-change"),this.loadHistory()}).catch(t=>{this.createStateChangeErrorNotification(t)}),this.currentActionName=null,this.currentStateType=null},createStateChangeErrorNotification(t){this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")+t})}}}}}]);