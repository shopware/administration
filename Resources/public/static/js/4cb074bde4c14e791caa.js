(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[38423],{720185:function(){},938423:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}}),r(407178);let{Mixin:a}=Shopware,{Criteria:n,EntityCollection:i}=Shopware.Data,{mapGetters:s,mapState:o}=Shopware.Component.getComponentHelper(),{cloneDeep:d}=Shopware.Utils.object;var l={template:'\n{% block sw_order_detail_base_general_info %}\n<div class="sw-order-general-info">\n    \n    {% block sw_order_detail_base_general_info_summary %}\n    <div class="sw-order-general-info__summary">\n        \n        {% block sw_order_detail_base_general_info_summary_main %}\n        <div class="sw-order-general-info__summary-main">\n            \n            {% block sw_order_detail_base_general_info_summary_main_header %}\n            <div class="sw-order-general-info__summary-main-header">\n                {{ order.orderNumber }} -\n                <router-link\n                    class="sw-order-general-info__summary-main-header-link"\n                    :to="{ name: \'sw.customer.detail\', params: { id: order.orderCustomer.customerId } }">\n                    {{ order.orderCustomer.firstName }} {{ order.orderCustomer.lastName }}\n                </router-link>\n                ({{ emailIdnFilter(order.orderCustomer.email) }})\n            </div>\n            {% endblock %}\n            \n            {% block sw_order_detail_base_general_info_summary_main_total %}\n            <div class="sw-order-general-info__summary-main-total">\n                {{ currencyFilter(order.amountTotal, order.currency.isoCode, order.totalRounding.decimals) }}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_base_general_info_summary_sub %}\n        <div class="sw-order-general-info__summary-sub">\n            \n            {% block sw_order_detail_base_general_info_summary_sub_description %}\n            <div class="sw-order-general-info__summary-sub-description">\n                {{ $tc(\'sw-order.generalTab.info.summary.on\') }}\n                {{ dateFilter(order.orderDateTime, {\n                hour: \'2-digit\',\n                minute: \'2-digit\',\n                day: \'2-digit\',\n                month: \'2-digit\',\n                year: \'numeric\'\n                }) }}\n                {{ $tc(\'sw-order.generalTab.info.summary.with\') }}\n                {{ order.transactions.last().paymentMethod.translated.distinguishableName }}\n                <template v-if="order.deliveries.last()">\n                    {{ $tc(\'sw-order.generalTab.info.summary.and\') }}\n                    {{ order.deliveries.last().shippingMethod.translated.name }}\n                </template>\n            </div>\n            {% endblock %}\n            \n            {% block sw_order_detail_base_general_info_summary_sub_last_changed %}\n            <div class="sw-order-general-info__summary-sub-last-changed">\n                \n                {% block sw_order_detail_base_general_info_summary_sub_last_changed_time %}\n                <div\n                    v-if="lastChangedDateTime"\n                    class="sw-order-general-info__summary-sub-last-changed-time"\n                >\n                    {{ $tc(\'sw-order.generalTab.info.summary.lastChanged\') }}:\n                    {{ dateFilter(lastChangedDateTime, {\n                    hour: \'2-digit\',\n                    minute: \'2-digit\',\n                    day: \'2-digit\',\n                    month: \'2-digit\',\n                    year: \'numeric\'\n                    }) }}\n                </div>\n                {% endblock %}\n                \n                {% block sw_order_detail_base_general_info_summary_sub_last_changed_user %}\n                <div\n                    v-if="lastChangedUser"\n                    class="sw-order-general-info__summary-sub-last-changed-user"\n                >\n                    {{ $tc(\'sw-order.generalTab.info.summary.by\') }}\n                    {{ lastChangedUser.firstName }} {{ lastChangedUser.lastName }}\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_state_change_card_modal %}\n    <sw-order-state-change-modal\n        v-if="showModal"\n        :order="order"\n        :is-loading="isLoading"\n        :technical-name="\'\'"\n        @page-leave="onLeaveModalClose"\n        @page-leave-confirm="onLeaveModalConfirm"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_detail_base_general_info_order_states %}\n    <div class="sw-order-general-info__order-states">\n        \n        {% block sw_order_detail_base_general_info_order_states_payment %}\n        <div class="sw-order-general-info__order-state">\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-order-general-info__order-state-payment"\n                :transition-options="paymentStateOptions"\n                state-type="order_transaction"\n                rounded-style\n                :placeholder="transaction.stateMachineState.translated.name"\n                :label="$tc(\'sw-order.stateCard.headlineTransactionState\')"\n                :background-style="backgroundStyle(\'order_transaction\')"\n                :disabled="!acl.can(\'order.editor\')"\n                @state-select="onStateSelected"\n            />\n        </div>\n        {% endblock %}\n        \n        {% block sw_order_detail_base_general_info_order_states_shipping %}\n        <div\n            v-if="delivery"\n            class="sw-order-general-info__order-state"\n        >\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-order-general-info__order-state-delivery"\n                :transition-options="deliveryStateOptions"\n                state-type="order_delivery"\n                rounded-style\n                :placeholder="delivery.stateMachineState.translated.name"\n                :label="$tc(\'sw-order.stateCard.headlineDeliveryState\')"\n                :background-style="backgroundStyle(\'order_delivery\')"\n                :disabled="!acl.can(\'order.editor\')"\n                @state-select="onStateSelected"\n            />\n        </div>\n        {% endblock %}\n        \n        {% block sw_order_detail_base_general_info_order_states_order %}\n        <div class="sw-order-general-info__order-state">\n            <sw-order-state-select-v2\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'order.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-order-general-info__order-state-order"\n                :transition-options="orderStateOptions"\n                rounded-style\n                state-type="order"\n                :placeholder="order.stateMachineState.translated.name"\n                :label="$tc(\'sw-order.stateCard.headlineOrderState\')"\n                :background-style="backgroundStyle(\'order\')"\n                :disabled="!acl.can(\'order.editor\')"\n                @state-select="onStateSelected"\n            />\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_base_general_info_order_tags %}\n    <sw-entity-tag-select\n        class="sw-order-general-info__order-tags"\n        size="small"\n        :entity-collection="tagCollection"\n        :disabled="!acl.can(\'order.editor\')"\n        :placeholder="$tc(\'sw-order.generalTab.tagSelect.placeholder\')"\n        :always-show-placeholder="true"\n        @item-add="onTagAdd"\n        @item-remove="onTagRemove"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl","repositoryFactory","stateMachineService","orderStateMachineService","stateStyleDataProviderService"],emits:["save-edits"],mixins:[a.getByName("notification")],props:{order:{type:Object,required:!0}},data(){return{currentActionName:null,currentStateType:null,deliveryStateOptions:[],liveOrder:null,modalConfirmed:!1,orderStateOptions:[],paymentStateOptions:[],showModal:!1,tagCollection:null}},computed:{...s("swOrderDetail",["isLoading"]),...o("swOrderDetail",["savedSuccessful"]),lastChangedUser(){if(this.liveOrder){if(this.liveOrder.updatedBy)return this.liveOrder.updatedBy;if(this.liveOrder.createdBy)return this.liveOrder.createdBy}return null},lastChangedDateTime(){if(this.liveOrder){if(this.liveOrder.updatedAt)return this.liveOrder.updatedAt;if(this.liveOrder.createdAt)return this.liveOrder.createdAt}return null},lastChangedByCriteria(){let e=new n(1,25);return e.setIds([this.order.id]),e.addAssociation("createdBy").addAssociation("updatedBy"),e},orderRepository(){return this.repositoryFactory.create("order")},orderTagRepository(){return this.repositoryFactory.create(this.order.tags.entity,this.order.tags.source)},stateMachineStateRepository(){return this.repositoryFactory.create("state_machine_state")},stateMachineStateCriteria(){let e=new n(1,null);return e.addSorting({field:"name",order:"ASC"}),e.addAssociation("stateMachine"),e.addFilter(n.equalsAny("state_machine_state.stateMachine.technicalName",["order.state","order_transaction.state","order_delivery.state"])),e},transaction(){for(let e=0;e<this.order.transactions.length;e+=1)if(!["cancelled","failed"].includes(this.order.transactions[e].stateMachineState.technicalName))return this.order.transactions[e];return this.order.transactions.last()},delivery(){return this.order.deliveries[0]},currencyFilter(){return Shopware.Filter.getByName("currency")},dateFilter(){return Shopware.Filter.getByName("date")},emailIdnFilter(){return Shopware.Filter.getByName("decode-idn-email")}},watch:{savedSuccessful(){this.savedSuccessful&&this.getLiveOrder()},"order.id"(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){let e=d(this.order.tags);this.tagCollection=new i(this.order.tags.source,this.order.tags.entity,Shopware.Context.api,null,e,e.length),this.getLiveOrder(),this.getTransitionOptions()},getLiveOrder(){this.orderRepository.search(this.lastChangedByCriteria,Shopware.Context.api).then(e=>{e&&e.first()&&(this.liveOrder=e.first())})},onTagAdd(e){this.orderTagRepository.assign(e.id).then(()=>{this.tagCollection.add(e)})},onTagRemove(e){this.orderTagRepository.delete(e.id).then(()=>{this.tagCollection.remove(e.id)})},getAllStates(){return this.stateMachineStateRepository.search(this.stateMachineStateCriteria)},buildTransitionOptions(e,t,r){let a=t.filter(t=>t.stateMachine.technicalName===e).map((e,t)=>({stateName:e.technicalName,id:t,name:e.translated.name,disabled:!0}));return a.forEach(e=>{let t=r.filter(t=>t.toStateName===e.stateName);t.length>=1&&(e.disabled=!1,e.id=t[0].actionName)}),a},backgroundStyle(e){let t;switch(e){case"order_transaction":t=this.transaction.stateMachineState.technicalName;break;case"order_delivery":t=this.delivery.stateMachineState.technicalName;break;case"order":t=this.order.stateMachineState.technicalName;break;default:return null}return this.stateStyleDataProviderService.getStyle(`${e}.state`,t).selectBackgroundStyle},getTransitionOptions(){Shopware.State.commit("swOrderDetail/setLoading",["states",!0]);let e=[this.stateMachineService.getState("order",this.order.id)];return this.transaction&&e.push(this.stateMachineService.getState("order_transaction",this.transaction.id)),this.delivery&&e.push(this.stateMachineService.getState("order_delivery",this.delivery.id)),Promise.all([this.getAllStates(),...e]).then(e=>{let t=e[0],r=e[1];if(this.orderStateOptions=this.buildTransitionOptions("order.state",t,r.data.transitions),this.transaction){let r=e[2];this.paymentStateOptions=this.buildTransitionOptions("order_transaction.state",t,r.data.transitions)}if(this.delivery){let r=e[3];this.deliveryStateOptions=this.buildTransitionOptions("order_delivery.state",t,r.data.transitions)}return Promise.resolve()}).finally(()=>{Shopware.State.commit("swOrderDetail/setLoading",["states",!1])})},onStateSelected(e,t){if(!e||!t){this.createStateChangeErrorNotification(this.$tc("sw-order.stateCard.labelErrorNoAction"));return}if(!this.modalConfirmed){this.currentActionName=t,this.currentStateType=e,this.showModal=!0;return}this.modalConfirmed=!1},onLeaveModalClose(){this.modalConfirmed=!1,this.currentActionName=null,this.currentStateType=null,this.showModal=!1},onLeaveModalConfirm(e,t=!0){this.showModal=!1;let r=null;switch(this.currentStateType){case"order_transaction":r=this.orderStateMachineService.transitionOrderTransactionState(this.transaction.id,this.currentActionName,{documentIds:e,sendMail:t});break;case"order_delivery":r=this.orderStateMachineService.transitionOrderDeliveryState(this.delivery.id,this.currentActionName,{documentIds:e,sendMail:t});break;case"order":r=this.orderStateMachineService.transitionOrderState(this.order.id,this.currentActionName,{documentIds:e,sendMail:t});break;default:this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")});return}r&&r.then(()=>{this.loadHistory()}).catch(e=>{this.createStateChangeErrorNotification(e)}),this.currentActionName=null,this.currentStateType=null},loadHistory(){this.statesLoading=!0,this.modalConfirmed=!1,this.getTransitionOptions().then(()=>{this.swOrderDetailOnSaveEdits?this.swOrderDetailOnSaveEdits():this.$emit("save-edits")}).catch(e=>{this.createNotificationError(e)})},createStateChangeErrorNotification(e){this.createNotificationError({message:this.$tc("sw-order.stateCard.labelErrorStateChange")+e})}}}},407178:function(e,t,r){var a=r(720185);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),r(745346).Z("af32484c",a,!0,{})}}]);