(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[343],{"25qh":function(e,t,r){var n=r("4cEt");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("P8hj").default)("56f0307b",n,!0,{})},"4cEt":function(e,t,r){},aJV4:function(e,t,r){"use strict";r.r(t);var n=r("7yzw"),i=r.n(n),l=r("92Mt"),a=r.n(l),o=(r("25qh"),Shopware.Mixin),s=Shopware.Data.Criteria;t.default={template:'\n{% block sw_order_list %}\n<sw-page class="sw-order-list">\n    \n    {% block sw_order_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="order"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_order_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_order_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-order.list.textOrders\') }}\n            {% endblock %}\n\n            \n            {% block sw_order_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_order_list_smart_bar_actions_slot %}\n\n        \n        {% block sw_order_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-list__add-order"\n            :disabled="!acl.can(\'order.creator\')"\n            variant="primary"\n            :router-link="{ name: \'sw.order.create\' }"\n        >\n            {{ $tc(\'sw-order.list.buttonAddOrder\') }}\n        </sw-button>\n        {% endblock %}\n\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_list_content %}\n    <template #content>\n\n        \n        {% block sw_order_list_content_slot %}\n        <div class="sw-order-list__content">\n\n            \n            {% block sw_order_list_grid %}\n            <sw-data-grid\n                v-if="entitySearchable"\n                ref="orderGrid"\n                :data-source="orders"\n                :columns="orderColumns"\n                :full-page="true"\n                :show-settings="true"\n                :show-selection="true"\n                :sort-by="currentSortBy"\n                :sort-direction="sortDirection"\n                :is-loading="isLoading"\n                :allow-column-edit="true"\n                identifier="sw-order-list"\n                :disable-data-fetching="true"\n                :maximum-select-items="100"\n                @column-sort="onSortColumn"\n                @page-change="onPageChange"\n                @selection-change="updateSelection"\n            >\n\n                \n                {% block sw_order_list_grid_columns %}\n                \n                {% block sw_order_list_grid_columns_order_number %}\n                <template #column-orderNumber="{ item }">\n                    \n                    {% block sw_order_list_grid_order_number_link %}\n                    <router-link :to="{ name: \'sw.order.detail\', params: { id: item.id } }">\n                        {{ item.orderNumber }}\n                    </router-link>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_label_manual_order %}\n                    <sw-label\n                        v-if="item.createdById"\n                        appearance="pill"\n                        size="small"\n                        class="sw-order-list__manual-order-label"\n                    >\n                        {{ $tc(\'sw-order.list.labelManualOrder\') }}\n                    </sw-label>\n                    {% endblock %}\n\n                    <sw-button\n                        v-if="item.customerComment"\n                        v-tooltip="{ message: item.customerComment }"\n                        class="sw-order-list__tooltip-order-comment"\n                        size="x-small"\n                    >\n                        <sw-icon\n                            name="regular-comments"\n                            size="14px"\n                        />\n                    </sw-button>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_customer_name %}\n                <template #column-orderCustomer.firstName="{ item }">\n                    <router-link\n                        v-if="item.orderCustomer"\n                        :to="{ name: \'sw.customer.detail\', params: { id: item.orderCustomer.customerId } }"\n                    >\n                        {{ item.orderCustomer.lastName }}, {{ item.orderCustomer.firstName }}\n                    </router-link>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_billing_address %}\n                <template #column-billingAddressId="{ item }">\n                    {{ item.billingAddress.street }},\n                    {{ item.billingAddress.zipcode }}\n                    {{ item.billingAddress.city }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_amount %}\n                <template #column-amountTotal="{ item }">\n                    {{ currencyFilter(item.amountTotal, item.currency.translated.shortName) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_state %}\n                <template #column-stateMachineState.name="{ item }">\n                    <div\n                        class="sw-order-list__state"\n                    >\n                        <sw-color-badge\n                            :color="getVariantFromOrderState(item)"\n                            rounded\n                        />\n\n                        {{ item.stateMachineState.translated.name }}\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_transaction_state %}\n                <template #column-transactions.last().stateMachineState.name="{ item }">\n                    <div\n                        v-if="item.transactions && item.transactions[0]"\n                        class="sw-order-list__state"\n                    >\n                        <sw-color-badge\n                            v-if="item.transactions && item.transactions[0]"\n                            :color="getVariantFromPaymentState(item)"\n                            rounded\n                        />\n\n                        {{ transaction(item).stateMachineState.translated.name }}\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_delivery_state %}\n                <template #column-deliveries[0].stateMachineState.name="{ item }">\n                    <div\n                        v-if="item.deliveries && item.deliveries[0]"\n                        class="sw-order-list__state"\n                    >\n                        <sw-color-badge\n                            v-if="item.deliveries && item.deliveries[0]"\n                            :color="getVariantFromDeliveryState(item)"\n                            rounded\n                        />\n\n                        {{ item.deliveries[0].stateMachineState.translated.name }}\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_order_date %}\n                <template #column-orderDateTime="{ item }">\n                    <sw-time-ago :date="item.orderDateTime" />\n                </template>\n                {% endblock %}\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_columns_actions %}\n                <template #actions="{ item }">\n                    \n                    {% block sw_order_list_grid_columns_actions_view %}\n                    <sw-context-menu-item\n                        class="sw-order-list__order-view-action"\n                        :router-link="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                    >\n                        {{ $tc(\'sw-order.list.contextMenuView\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_list_grid_columns_actions_delete %}\n                    <sw-context-menu-item\n                        variant="danger"\n                        :disabled="disableDeletion(item)"\n                        @click="onDelete(item.id)"\n                    >\n                        {{ $tc(\'sw-order.list.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_grid_action_modals %}\n                <template #action-modals="{ item }">\n                    \n                    {% block sw_order_list_delete_modal %}\n                    <sw-modal\n                        v-if="showDeleteModal === item.id"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="small"\n                        @modal-close="onCloseDeleteModal"\n                    >\n                        \n                        {% block sw_order_list_delete_modal_confirm_delete_text %}\n                        <p class="sw-order-list__confirm-delete-text">\n                            {{ $tc(\'sw-order.list.textDeleteConfirm\', 0, { orderNumber: `${item.orderNumber}` }) }}\n                        </p>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_delete_modal_footer %}\n                        <template #modal-footer>\n                            \n                            {% block sw_order_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'sw-order.list.buttonCancel\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_delete_modal_confirm %}\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="onConfirmDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-order.list.buttonDelete\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                <template #pagination>\n                    \n                    {% block sw_order_list_grid_pagination %}\n                    <sw-pagination\n                        :page="page"\n                        :limit="limit"\n                        :total="total"\n                        :total-visible="7"\n                        @page-change="onPageChange"\n                    />\n                    {% endblock %}\n                </template>\n\n                \n                {% block sw_order_list_bulk_selected_actions_content %}\n                <template #bulk>\n                    \n                    {% block sw_order_list_bulk_selected_actions_content_bulk_edit %}\n                    <a\n                        v-if="acl.can(\'order.editor\')"\n                        class="link link-primary"\n                        role="link"\n                        tabindex="0"\n                        @click="showBulkEditModal = true"\n                        @keydown.enter="showBulkEditModal = true"\n                    >\n                        {{ $tc(\'global.sw-bulk-edit-modal.bulkEdit\') }}\n                    </a>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_order_list_bulk_edit_modal %}\n                <template #bulk-modals="{ selection }">\n                    <sw-bulk-edit-modal\n                        v-if="showBulkEditModal"\n                        ref="bulkEditModal"\n                        class="sw-order-bulk-edit-modal"\n                        :selection="selection"\n                        :bulk-grid-edit-columns="orderColumns"\n                        @edit-items="onBulkEditItems"\n                        @modal-close="showBulkEditModal = false"\n                    >\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_order_number %}\n                        <template #column-orderNumber="{ item }">\n                            \n                            {% block sw_order_list_bulk_edit_grid_order_number_link %}\n                            <router-link\n                                :to="{ name: \'sw.order.detail\', params: { id: item.id } }"\n                                target="_blank"\n                                rel="noreferrer noopener"\n                            >\n                                {{ item.orderNumber }}\n                            </router-link>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_list_bulk_edit_grid_label_manual_order %}\n                            <sw-label\n                                v-if="item.createdById"\n                                appearance="pill"\n                                size="small"\n                                class="sw-order-bulk_edit__manual-order-label"\n                            >\n                                {{ $tc(\'sw-order.list.labelManualOrder\') }}\n                            </sw-label>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_customer_name %}\n                        <template #column-orderCustomer.firstName="{ item }">\n                            <router-link\n                                v-if="item.orderCustomer"\n                                :to="{ name: \'sw.customer.detail\', params: { id: item.orderCustomer.customerId } }"\n                                target="_blank"\n                                rel="noreferrer noopener"\n                            >\n                                {{ item.orderCustomer.lastName }}, {{ item.orderCustomer.firstName }}\n                            </router-link>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_billing_address %}\n                        <template #column-billingAddressId="{ item }">\n                            {{ item.billingAddress.street }},\n                            {{ item.billingAddress.zipcode }}\n                            {{ item.billingAddress.city }}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_amount %}\n                        <template #column-amountTotal="{ item }">\n                            {{ currencyFilter(item.amountTotal, item.currency.translated.shortName) }}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_state %}\n                        <template #column-stateMachineState.name="{ item }">\n                            <sw-label\n                                :variant="getVariantFromOrderState(item)"\n                                appearance="pill"\n                            >\n                                {{ item.stateMachineState.translated.name }}\n                            </sw-label>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_transaction_state %}\n                        <template #column-transactions.last().stateMachineState.name="{ item }">\n                            <sw-label\n                                v-if="item.transactions && item.transactions[0]"\n                                :variant="getVariantFromPaymentState(item)"\n                                appearance="pill"\n                            >\n                                {{ item.transactions.last().stateMachineState.translated.name }}\n                            </sw-label>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_delivery_state %}\n                        <template #column-deliveries[0].stateMachineState.name="{ item }">\n                            <sw-label\n                                v-if="item.deliveries && item.deliveries[0]"\n                                :variant="getVariantFromDeliveryState(item)"\n                                appearance="pill"\n                            >\n                                {{ item.deliveries[0].stateMachineState.translated.name }}\n                            </sw-label>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_list_bulk_edit_grid_columns_order_date %}\n                        <template #column-orderDateTime="{ item }">\n                            {{ dateFilter(item.orderDateTime, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                        </template>\n                        {% endblock %}\n                    </sw-bulk-edit-modal>\n                </template>\n                {% endblock %}\n            </sw-data-grid>\n            {% endblock %}\n\n            \n            {% block sw_order_list_empty_state %}\n            <template v-if="!isLoading && !total">\n                <sw-empty-state\n                    v-if="filterCriteria.length || isValidTerm(term)"\n                    :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                >\n                    <template #icon>\n                        <img\n                            :src="assetFilter(\'/administration/static/img/empty-states/order-empty-state.svg\')"\n                            :alt="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                        >\n                    </template>\n\n                    <template #default>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                        <router-link\n                            class="sw-empty-state__description-link"\n                            :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                        >\n                            {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                        </router-link>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                    </template>\n                </sw-empty-state>\n                <sw-empty-state\n                    v-else\n                    :title="$tc(\'sw-order.list.messageEmpty\')"\n                >\n                    <template #icon>\n                        <img\n                            :src="assetFilter(\'/administration/static/img/empty-states/order-empty-state.svg\')"\n                            :alt="$tc(\'sw-order.list.messageEmpty\')"\n                        >\n                    </template>\n                </sw-empty-state>\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_order_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar class="sw-order-list__sidebar">\n            \n            {% block sw_order_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-order.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_list_sidebar_filter %}\n            <sw-sidebar-filter-panel\n                entity="customer"\n                :store-key="storeKey"\n                :filters="listFilters"\n                :defaults="defaultFilters"\n                :active-filter-number="activeFilterNumber"\n                @criteria-changed="updateCriteria"\n            />\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","stateStyleDataProviderService","acl","filterFactory","feature"],mixins:[o.getByName("listing")],data:function(){return{orders:[],sortBy:"orderDateTime",sortDirection:"DESC",isLoading:!1,filterLoading:!1,showDeleteModal:!1,availableAffiliateCodes:[],availableCampaignCodes:[],availablePromotionCodes:[],filterCriteria:[],defaultFilters:["affiliate-code-filter","campaign-code-filter","promotion-code-filter","document-filter","order-date-filter","order-value-filter","status-filter","payment-status-filter","delivery-status-filter","payment-method-filter","shipping-method-filter","sales-channel-filter","billing-country-filter","customer-group-filter","shipping-country-filter","customer-group-filter","tag-filter","line-item-filter"],storeKey:"grid.filter.order",activeFilterNumber:0,showBulkEditModal:!1,searchConfigEntity:"order"}},metaInfo:function(){return{title:this.$createTitle()}},computed:{orderRepository:function(){return this.repositoryFactory.create("order")},orderColumns:function(){return this.getOrderColumns()},orderCriteria:function(){var e=this,t=new s(this.page,this.limit);return t.setTerm(this.term),this.sortBy.split(",").forEach((function(r){t.addSorting(s.sort(r,e.sortDirection))})),this.filterCriteria.forEach((function(e){t.addFilter(e)})),t.addAssociation("addresses"),t.addAssociation("billingAddress"),t.addAssociation("salesChannel"),t.addAssociation("orderCustomer"),t.addAssociation("currency"),t.addAssociation("documents"),t.addAssociation("stateMachineState"),t.getAssociation("transactions").addAssociation("stateMachineState").addSorting(s.sort("createdAt")),t.getAssociation("deliveries").addAssociation("stateMachineState").addAssociation("shippingMethod"),t},filterSelectCriteria:function(){var e=new s(1,1);return e.addAggregation(s.terms("affiliateCodes","affiliateCode",null,null,null)),e.addAggregation(s.terms("campaignCodes","campaignCode",null,null,null)),e.addAggregation(s.terms("promotionCodes","lineItems.payload.code",null,null,null)),e},listFilterOptions:function(){return{"sales-channel-filter":{property:"salesChannel",label:this.$tc("sw-order.filters.salesChannelFilter.label"),placeholder:this.$tc("sw-order.filters.salesChannelFilter.placeholder")},"order-value-filter":{property:"amountTotal",type:"number-filter",label:this.$tc("sw-order.filters.orderValueFilter.label"),fromFieldLabel:null,toFieldLabel:null,fromPlaceholder:this.$tc("global.default.from"),toPlaceholder:this.$tc("global.default.to")},"payment-status-filter":{property:"transactions.stateMachineState",criteria:this.getStatusCriteria("order_transaction.state"),label:this.$tc("sw-order.filters.paymentStatusFilter.label"),placeholder:this.$tc("sw-order.filters.paymentStatusFilter.placeholder")},"delivery-status-filter":{property:"deliveries.stateMachineState",criteria:this.getStatusCriteria("order_delivery.state"),label:this.$tc("sw-order.filters.deliveryStatusFilter.label"),placeholder:this.$tc("sw-order.filters.deliveryStatusFilter.placeholder")},"status-filter":{property:"stateMachineState",criteria:this.getStatusCriteria("order.state"),label:this.$tc("sw-order.filters.statusFilter.label"),placeholder:this.$tc("sw-order.filters.statusFilter.placeholder")},"order-date-filter":{property:"orderDateTime",label:this.$tc("sw-order.filters.orderDateFilter.label"),dateType:"date",fromFieldLabel:null,toFieldLabel:null,showTimeframe:!0},"tag-filter":{property:"tags",label:this.$tc("sw-order.filters.tagFilter.label"),placeholder:this.$tc("sw-order.filters.tagFilter.placeholder")},"affiliate-code-filter":{property:"affiliateCode",type:"multi-select-filter",label:this.$tc("sw-order.filters.affiliateCodeFilter.label"),placeholder:this.$tc("sw-order.filters.affiliateCodeFilter.placeholder"),valueProperty:"key",labelProperty:"key",options:this.availableAffiliateCodes},"campaign-code-filter":{property:"campaignCode",type:"multi-select-filter",label:this.$tc("sw-order.filters.campaignCodeFilter.label"),placeholder:this.$tc("sw-order.filters.campaignCodeFilter.placeholder"),valueProperty:"key",labelProperty:"key",options:this.availableCampaignCodes},"promotion-code-filter":{property:"lineItems.payload.code",type:"multi-select-filter",label:this.$tc("sw-order.filters.promotionCodeFilter.label"),placeholder:this.$tc("sw-order.filters.promotionCodeFilter.placeholder"),valueProperty:"key",labelProperty:"key",options:this.availablePromotionCodes},"document-filter":{property:"documents",label:this.$tc("sw-order.filters.documentFilter.label"),placeholder:this.$tc("sw-order.filters.documentFilter.placeholder"),optionHasCriteria:this.$tc("sw-order.filters.documentFilter.textHasCriteria"),optionNoCriteria:this.$tc("sw-order.filters.documentFilter.textNoCriteria")},"payment-method-filter":{property:"transactions.paymentMethod",label:this.$tc("sw-order.filters.paymentMethodFilter.label"),placeholder:this.$tc("sw-order.filters.paymentMethodFilter.placeholder")},"shipping-method-filter":{property:"deliveries.shippingMethod",label:this.$tc("sw-order.filters.shippingMethodFilter.label"),placeholder:this.$tc("sw-order.filters.shippingMethodFilter.placeholder")},"billing-country-filter":{property:"billingAddress.country",label:this.$tc("sw-order.filters.billingCountryFilter.label"),placeholder:this.$tc("sw-order.filters.billingCountryFilter.placeholder")},"shipping-country-filter":{property:"deliveries.shippingOrderAddress.country",label:this.$tc("sw-order.filters.shippingCountryFilter.label"),placeholder:this.$tc("sw-order.filters.shippingCountryFilter.placeholder")},"customer-group-filter":{property:"orderCustomer.customer.group",label:this.$tc("sw-order.filters.customerGroupFilter.label"),placeholder:this.$tc("sw-order.filters.customerGroupFilter.placeholder")},"line-item-filter":{property:"lineItems.product",label:this.$tc("sw-order.filters.productFilter.label"),placeholder:this.$tc("sw-order.filters.productFilter.placeholder"),criteria:this.productCriteria,displayVariants:!0}}},listFilters:function(){return this.filterFactory.create("order",this.listFilterOptions)},productCriteria:function(){var e=new s(1,25);return e.addAssociation("options.group"),e},currencyFilter:function(){return Shopware.Filter.getByName("currency")},dateFilter:function(){return Shopware.Filter.getByName("date")},assetFilter:function(){return Shopware.Filter.getByName("asset")}},watch:{orderCriteria:{handler:function(){this.getList()},deep:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadFilterValues()},onEdit:function(e){null!=e&&e.id&&this.$router.push({name:"sw.order.detail",params:{id:e.id}})},onInlineEditSave:function(e){e.save()},onChangeLanguage:function(){this.getList()},getList:function(){var e=this;return i()(a.a.mark((function t(){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,Shopware.Service("filterService").mergeWithStoredFilters(e.storeKey,e.orderCriteria);case 3:return r=t.sent,t.next=6,e.addQueryScores(e.term,r);case 6:if(r=t.sent,e.activeFilterNumber=r.filters.length,e.entitySearchable){t.next=12;break}return e.isLoading=!1,e.total=0,t.abrupt("return");case 12:return e.freshSearchTerm&&r.resetSorting(),t.prev=13,t.next=16,e.orderRepository.search(r);case 16:n=t.sent,e.total=n.total,e.orders=n,e.isLoading=!1,t.next=25;break;case 22:t.prev=22,t.t0=t.catch(13),e.isLoading=!1;case 25:case"end":return t.stop()}}),t,null,[[13,22]])})))()},getBillingAddress:function(e){return e.addresses.find((function(t){return t.id===e.billingAddressId}))},disableDeletion:function(e){return!this.acl.can("order.deleter")||e.documents.length>0},getOrderColumns:function(){return[{property:"orderNumber",label:"sw-order.list.columnOrderNumber",routerLink:"sw.order.detail",allowResize:!0,primary:!0},{property:"salesChannel.name",label:"sw-order.list.columnSalesChannel",allowResize:!0},{property:"orderCustomer.firstName",dataIndex:"orderCustomer.lastName,orderCustomer.firstName",label:"sw-order.list.columnCustomerName",allowResize:!0},{property:"billingAddressId",dataIndex:"billingAddress.street",label:"sw-order.list.columnBillingAddress",allowResize:!0},{property:"amountTotal",label:"sw-order.list.columnAmount",align:"right",allowResize:!0},{property:"stateMachineState.name",label:"sw-order.list.columnState",allowResize:!0},{property:"transactions.last().stateMachineState.name",dataIndex:"transactions.stateMachineState.name",label:"sw-order.list.columnTransactionState",allowResize:!0},{property:"deliveries[0].stateMachineState.name",dataIndex:"deliveries.stateMachineState.name",label:"sw-order.list.columnDeliveryState",allowResize:!0},{property:"orderDateTime",label:"sw-order.list.orderDate",allowResize:!0},{property:"affiliateCode",inlineEdit:"string",label:"sw-order.list.columnAffiliateCode",allowResize:!0,visible:!1},{property:"campaignCode",inlineEdit:"string",label:"sw-order.list.columnCampaignCode",allowResize:!0,visible:!1}]},getVariantFromOrderState:function(e){return this.stateStyleDataProviderService.getStyle("order.state",e.stateMachineState.technicalName).colorCode},getVariantFromPaymentState:function(e){for(var t=e.transactions.last().stateMachineState.technicalName,r=0;r<e.transactions.length;r+=1)if(!["cancelled","failed"].includes(e.transactions[r].stateMachineState.technicalName)){t=e.transactions[r].stateMachineState.technicalName;break}return this.stateStyleDataProviderService.getStyle("order_transaction.state",t).colorCode},getVariantFromDeliveryState:function(e){return this.stateStyleDataProviderService.getStyle("order_delivery.state",e.deliveries[0].stateMachineState.technicalName).colorCode},loadFilterValues:function(){var e=this;return this.filterLoading=!0,this.orderRepository.search(this.filterSelectCriteria).then((function(t){var r,n,i,l=t.aggregations,a=l.affiliateCodes,o=l.campaignCodes,s=l.promotionCodes;return e.availableAffiliateCodes=null!==(r=null==a?void 0:a.buckets.filter((function(e){return e.key.length>0})))&&void 0!==r?r:[],e.availableCampaignCodes=null!==(n=null==o?void 0:o.buckets.filter((function(e){return e.key.length>0})))&&void 0!==n?n:[],e.availablePromotionCodes=null!==(i=null==s?void 0:s.buckets.filter((function(e){return e.key.length>0})))&&void 0!==i?i:[],e.filterLoading=!1,l})).catch((function(){e.filterLoading=!1}))},onDelete:function(e){this.showDeleteModal=e},onCloseDeleteModal:function(){this.showDeleteModal=!1},onConfirmDelete:function(e){var t=this;return this.showDeleteModal=!1,this.orderRepository.delete(e).then((function(){t.$refs.orderGrid.resetSelection(),t.getList()}))},updateCriteria:function(e){this.page=1,this.filterCriteria=e},getStatusCriteria:function(e){var t=new s(1,25);return t.addFilter(s.equals("stateMachine.technicalName",e)),t},onBulkEditItems:function(){var e=this;return i()(a.a.mark((function t(){var r,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$nextTick();case 2:r=Object.values(e.$refs.orderGrid.selection).filter((function(e){return!e.deliveries[0]})),n=r.length>0?"1":"0",e.$router.push({name:"sw.bulk.edit.order",params:{excludeDelivery:n}});case 5:case"end":return t.stop()}}),t)})))()},transaction:function(e){for(var t=0;t<e.transactions.length;t+=1)if(!["cancelled","failed"].includes(e.transactions[t].stateMachineState.technicalName))return e.transactions[t];return e.transactions.last()}}}}}]);