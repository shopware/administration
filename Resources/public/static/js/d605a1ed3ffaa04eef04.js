(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[33978],{385399:function(){},533978:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}}),r(546714);let{Criteria:n}=Shopware.Data;var o={template:'\n{% block sw_customer_detail_order_card %}\n<sw-card\n    class="sw-customer-detail-order"\n    position-identifier="sw-customer-detail-order"\n>\n    \n    {% block sw_customer_detail_order_card_toolbar %}\n    <template #toolbar>\n        <sw-card-filter\n            v-if="(orders && orders.total > 0) || term"\n            :placeholder="$tc(\'sw-customer.detailOrder.searchbarPlaceholder\')"\n            @sw-card-filter-term-change="onChange"\n        >\n            <template #filter>\n                \n                {% block sw_customer_detail_order_add_button %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'order.creator\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="sw-customer-detail-order__add-order-action"\n                    size="small"\n                    :disabled="!acl.can(\'order.creator\')"\n                    @click="navigateToCreateOrder"\n                >\n                    <sw-icon\n                        name="regular-plus-circle-s"\n                        small\n                    />\n                    {{ $tc(\'sw-customer.detailOrder.buttonCreateOrder\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-card-filter>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_detail_order_card_grid %}\n    <template\n        v-if="(orders && orders.total > 0) || term"\n        #grid\n    >\n        <sw-entity-listing\n            :columns="orderColumns"\n            :repository="orderRepository"\n            :items="orders"\n            :allow-column-edit="false"\n            :show-settings="false"\n            :show-selection="false"\n            :full-page="false"\n            :is-loading="isLoading"\n        >\n            \n            {% block sw_customer_detail_order_card_grid_columns %}\n            \n            {% block sw_customer_detail_order_card_grid_columns_number %}\n            <template #column-orderNumber="{ item }">\n                <router-link :to="{ name: \'sw.order.detail\', params: { id: item.id } }">\n                    {{ item.orderNumber }}\n                </router-link>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_order_card_grid_columns_amount %}\n            <template #column-amountTotal="{ item }">\n                {{ currencyFilter(item.amountTotal, item.currency.isoCode) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_order_card_grid_columns_order_date_time %}\n            <template #column-orderDateTime="{ item }">\n                <sw-time-ago :date="item.orderDateTime" />\n            </template>\n            {% endblock %}\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_order_card_grid_columns_action %}\n            <template #actions="{ item }">\n                \n                {% block sw_customer_detail_order_card_grid_columns_action_button %}\n                <sw-context-menu-item\n                    class="sw-order-list-order-view-action"\n                    :router-link="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                >\n                    {{ $tc(\'sw-customer.detailOrder.columnContextOpenOrder\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </sw-entity-listing>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_detail_order_card_grid_empty_state %}\n    <template v-if="(!orders || orders.total === 0) && !isLoading && !term">\n        <sw-empty-state\n            :title="emptyTitle"\n            :absolute="false"\n            :subline="$tc(\'sw-customer.detailOrder.emptySubline\')"\n        >\n            <template #icon>\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/order-empty-state.svg\')"\n                    :alt="emptyTitle"\n                >\n            </template>\n\n            <template #actions>\n                \n                {% block sw_customer_detail_order_card_grid_empty_state_action %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'order.creator\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="ghost"\n                    class="sw-customer-detail-order__add-order-action"\n                    :disabled="!acl.can(\'order.creator\')"\n                    @click="navigateToCreateOrder"\n                >\n                    {{ $tc(\'sw-customer.detailOrder.buttonCreateOrder\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],props:{customer:{type:Object,required:!0}},data(){return{isLoading:!1,activeCustomer:this.customer,orders:null,term:"",sortBy:"orderDateTime",sortDirection:"DESC"}},computed:{orderColumns(){return this.getOrderColumns()},orderRepository(){return this.repositoryFactory.create("order")},emptyTitle(){return this.term?this.$tc("sw-customer.detailOrder.emptySearchTitle"):this.$tc("sw-customer.detailOrder.emptyTitle")},currencyFilter(){return Shopware.Filter.getByName("currency")},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{customer(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){this.isLoading=!0,this.orders?.criteria&&(this.orders.criteria=null),this.refreshList()},onChange(e){this.term=e,this.orders.criteria.setPage(1),this.orders.criteria.setTerm(e),this.refreshList()},getOrderColumns(){return[{property:"orderNumber",label:"sw-customer.detailOrder.columnNumber",align:"center"},{property:"amountTotal",label:"sw-customer.detailOrder.columnAmount",align:"right"},{property:"stateMachineState.name",label:"sw-customer.detailOrder.columnOrderState"},{property:"orderDateTime",label:"sw-customer.detailOrder.columnOrderDate",align:"center"}]},refreshList(){let e=new n(1,25);this.orders&&this.orders.criteria?e=this.orders.criteria:e.addFilter(n.equals("order.orderCustomer.customerId",this.customer.id)),e.addAssociation("stateMachineState").addAssociation("currency"),e.addSorting(n.sort(this.sortBy,this.sortDirection)),this.orderRepository.search(e).then(e=>{this.orders=e,this.isLoading=!1})},navigateToCreateOrder(){this.$router.push({name:"sw.order.create",params:{customer:this.customer}})}}}},546714:function(e,t,r){var n=r(385399);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),r(745346).Z("8642dda0",n,!0,{})}}]);