"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[73462],{573462:function(t,e,o){o.r(e),o.d(e,{default:function(){return i}});let{Component:s,Mixin:n}=Shopware,{Criteria:a}=Shopware.Data,{mapState:l}=s.getComponentHelper();var i={template:'\n{% block sw_flow_set_order_state_modal %}\n<sw-modal\n    class="sw-flow-set-order-state-modal"\n    :title="$tc(\'sw-flow.modals.status.titleSetStatus\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_set_order_state_modal_content %}\n    \n    {% block sw_flow_set_order_state_modal_payment_status %}\n    <sw-select-field\n        v-model:value="config.order_transaction"\n        name="sw-field--config-order_transaction"\n        class="sw-flow-set-order-state-modal__payment-status"\n        :options="paymentOptions"\n        :label="$tc(\'sw-flow.modals.status.labelPaymentStatus\')"\n        :placeholder="$tc(\'sw-flow.modals.status.placeholderPaymentStatus\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_set_order_state_modal_delivery_status %}\n    <sw-select-field\n        v-model:value="config.order_delivery"\n        name="sw-field--config-order_delivery"\n        class="sw-flow-set-order-state-modal__delivery-status"\n        :options="deliveryOptions"\n        :label="$tc(\'sw-flow.modals.status.labelDeliveryStatus\')"\n        :placeholder="$tc(\'sw-flow.modals.status.placeholderDeliveryStatus\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_set_order_state_modal_order_status %}\n    <sw-select-field\n        v-model:value="config.order"\n        name="sw-field--config-order"\n        class="sw-flow-set-order-state-modal__order-status"\n        :options="orderOptions"\n        :label="$tc(\'sw-flow.modals.status.labelOrderStatus\')"\n        :placeholder="$tc(\'sw-flow.modals.status.placeholderOrderStatus\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_flow_set_order_state_modal_force_transition %}\n    <sw-checkbox-field\n        v-model:value="config.force_transition"\n        name="sw-field--config-force_transition"\n        class="sw-flow-set-order-state-modal__force-transition"\n        :label="$tc(\'sw-flow.modals.status.forceTransition\')"\n        :help-text="$tc(\'sw-flow.modals.status.forceTransitionHelpText\')"\n    />\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_flow_set_order_state_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_set_order_state_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-set-order-state-modal__cancel-button"\n            size="small"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_order_state_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-set-order-state-modal__save-button"\n            variant="primary"\n            size="small"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["modal-close","process-finish"],mixins:[n.getByName("notification")],props:{sequence:{type:Object,required:!0}},data(){return{paymentOptions:[],deliveryOptions:[],orderOptions:[],config:{order:"",order_delivery:"",order_transaction:"",force_transition:!1}}},computed:{stateMachineStateRepository(){return this.repositoryFactory.create("state_machine_state")},stateMachineStateCriteria(){let t=new a(1,null);return t.addSorting({field:"name",order:"ASC"}),t.addAssociation("stateMachine"),t.addFilter(a.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),t},...l("swFlowState",["stateMachineState"])},created(){this.createdComponent()},methods:{createdComponent(){this.config=this.sequence?.config?{...this.sequence?.config}:this.config,this.stateMachineState.length?this.generateOptions(this.stateMachineState):this.getAllStates()},getAllStates(){return this.stateMachineStateRepository.search(this.stateMachineStateCriteria).then(t=>{this.generateOptions(t),Shopware.State.commit("swFlowState/setStateMachineState",t)})},generateOptions(t){this.paymentOptions=this.buildTransitionOptions("order_transaction.state",t),this.deliveryOptions=this.buildTransitionOptions("order_delivery.state",t),this.orderOptions=this.buildTransitionOptions("order.state",t)},buildTransitionOptions(t,e){return e.filter(e=>e.stateMachine.technicalName===t).map(t=>({id:t.technicalName,name:t.translated.name}))},onClose(){this.$emit("modal-close")},onAddAction(){if(!this.config.order&&!this.config.order_delivery&&!this.config.order_transaction){this.createNotificationError({message:this.$tc("sw-flow.modals.status.messageNoStatusError")});return}let t={...this.sequence,config:this.config};this.$emit("process-finish",t)}}}}}]);