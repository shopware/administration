(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[572],{"/BY6":function(e,t,r){"use strict";r.r(t);var n=r("J58c"),a=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=Shopware,d=s.Utils,l=s.Mixin,c=Shopware.Data.Criteria,u=d.format,m=d.array,p=Shopware.Component.getComponentHelper(),h=p.mapGetters,g=p.mapState,y=Shopware.Utils.object.cloneDeep;t.default={template:'\n{% block sw_order_detail_general %}\n<div class="sw-order-detail-general">\n    \n    {% block sw_order_detail_general_info_card %}\n    <sw-card\n        class="sw-order-detail-base__general-info"\n        position-identifier="sw-order-detail-general-info"\n        :title="$tc(\'sw-order.detailBase.cardTitleGeneralInfo\')"\n    >\n        \n        {% block sw_order_detail_general_info %}\n        <sw-order-general-info\n            ref="swOrderGeneralInfo"\n            :order="order"\n            @save-edits="onSaveEdits"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_general_line_items_card %}\n    <sw-card\n        class="sw-order-detail-general__line-item-grid-card"\n        position-identifier="sw-order-detail-general-line-items"\n        :title="$tc(\'sw-order.detailBase.cardTitleLineItems\')"\n    >\n\n        \n        {% block sw_order_detail_general_line_items_card_rows %}\n        <template #grid>\n            <sw-container type="row">\n                \n                {% block sw_order_detail_general_line_items_grid %}\n                <sw-order-line-items-grid\n                    ref="sw-order-line-item-grid"\n                    :order="order"\n                    :context="versionContext"\n                    :editable="acl.can(\'order.editor\')"\n                    @item-delete="recalculateAndReload"\n                    @item-edit="recalculateAndReload"\n                    @existing-item-edit="saveAndRecalculate"\n                    @item-added="recalculateAndReload"\n                    @item-cancel="recalculateAndReload"\n                />\n                {% endblock %}\n\n                \n                {% block sw_order_detail_general_line_items_summary %}\n                <sw-card-section\n                    divider="top"\n                    slim\n                >\n                    <sw-description-list\n                        class="sw-order-detail__summary"\n                        grid="1fr 1fr"\n                    >\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_entries %}\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount %}\n                        <dt>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</dt>\n                        <dd>{{ order.positionPrice | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}</dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_shipping_cost %}\n                        <template v-if="delivery">\n                            <dt>{{ $tc(\'sw-order.detailBase.summaryLabelShippingCosts\') }}</dt>\n                            <dd>\n                                <sw-order-saveable-field\n                                    v-tooltip="{\n                                        showDelay: 300,\n                                        message: shippingCostsDetail,\n                                        disabled: taxStatus === \'tax-free\'\n                                    }"\n                                    type="number"\n                                    :editable="acl.can(\'order.editor\')"\n                                    :value="delivery.shippingCosts.totalPrice"\n                                    @value-change="onShippingChargeEdited"\n                                >\n                                    {{ delivery.shippingCosts.totalPrice | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}\n                                </sw-order-saveable-field>\n                            </dd>\n                        </template>\n\n                        <template v-for="(delivery, index) in deliveryDiscounts">\n                            <dt :key="`delivery-discount-dt-${index}`">\n                                {{ $tc(\'sw-order.detailBase.discountLabelShippingCosts\') }}\n                            </dt>\n                            <dd :key="`delivery-discount-dd-${index}`">\n                                {{ delivery.shippingCosts.totalPrice | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}\n                            </dd>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount_without_tax %}\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmountWithoutTaxes\') }}</strong></dt>\n                            <dd><strong>{{ order.amountNet | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}</strong></dd>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_taxes %}\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <template v-for="(calculatedTax, index) in sortedCalculatedTaxes">\n                                <dt :key="`sorted-calculated-taxes-dt-${index}`">\n                                    {{ $tc(\'sw-order.detailBase.summaryLabelTaxes\', 1, { taxRate: calculatedTax.taxRate }) }}\n                                </dt>\n                                <dd :key="`sorted-calculated-taxes-dd-${index}`">\n                                    {{ calculatedTax.tax | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}\n                                </dd>\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount_total %}\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmountTotal\') }}</strong></dt>\n                            <dd><strong>{{ orderTotal | currency(order.currency.shortName, order.totalRounding.decimals) }}</strong></dd>\n                            <template v-if="displayRounded">\n                                <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmountTotalRounded\') }}</strong></dt>\n                                <dd><strong>{{ order.price.totalPrice | currency(order.currency.shortName, order.totalRounding.decimals) }}</strong></dd>\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount_free_tax %}\n                        <template v-if="taxStatus === \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</strong></dt>\n                            <dd><strong>{{ order.price.totalPrice | currency(order.currency.translated.shortName, order.totalRounding.decimals) }}</strong></dd>\n                        </template>\n                        {% endblock %}\n                    {% endblock %}\n                    </sw-description-list>\n                </sw-card-section>\n                {% endblock %}\n            </sw-container>\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","orderService","stateStyleDataProviderService","acl","feature"],mixins:[l.getByName("notification")],props:{orderId:{type:String,required:!0},isSaveSuccessful:{type:Boolean,required:!0}},data:function(){return{nextRoute:null,isDisplayingLeavePageWarning:!1,transactionOptions:[],orderOptions:[],deliveryOptions:[],customFieldSets:[],promotions:[],promotionError:null}},computed:o(o(o({},h("swOrderDetail",["isLoading"])),g("swOrderDetail",["order","versionContext"])),{},{orderRepository:function(){return this.repositoryFactory.create("order")},orderLineItemRepository:function(){return this.repositoryFactory.create("order_line_item")},delivery:function(){return this.order.deliveries[0]},deliveryDiscounts:function(){return m.slice(this.order.deliveries,1)||[]},transaction:function(){for(var e=0;e<this.order.transactions.length;e+=1)if(!["cancelled","failed"].includes(this.order.transactions[e].stateMachineState.technicalName))return this.order.transactions[e];return this.order.transactions.last()},shippingCostsDetail:function(){var e=this,t=this.sortByTaxRate(y(this.order.shippingCosts.calculatedTaxes)),r="".concat(t.map((function(t){return"".concat(e.$tc("sw-order.detailBase.shippingCostsTax",0,{taxRate:t.taxRate,tax:u.currency(t.tax,e.order.currency.shortName)}))})).join("<br>"));return"".concat(this.$tc("sw-order.detailBase.tax"),"<br>").concat(r)},sortedCalculatedTaxes:function(){return this.sortByTaxRate(y(this.order.price.calculatedTaxes)).filter((function(e){return 0!==e.tax}))},transactionOptionPlaceholder:function(){return this.isLoading?null:"".concat(this.$tc("sw-order.stateCard.headlineTransactionState"),":             ").concat(this.transaction.stateMachineState.translated.name)},transactionOptionsBackground:function(){return this.isLoading?null:this.stateStyleDataProviderService.getStyle("order_transaction.state",this.transaction.stateMachineState.technicalName).selectBackgroundStyle},orderOptionPlaceholder:function(){return this.isLoading?null:"".concat(this.$tc("sw-order.stateCard.headlineOrderState"),":             ").concat(this.order.stateMachineState.translated.name)},orderOptionsBackground:function(){return this.isLoading?null:this.stateStyleDataProviderService.getStyle("order.state",this.order.stateMachineState.technicalName).selectBackgroundStyle},deliveryOptionPlaceholder:function(){return this.isLoading?null:"".concat(this.$tc("sw-order.stateCard.headlineDeliveryState"),":             ").concat(this.delivery.stateMachineState.translated.name)},deliveryOptionsBackground:function(){return this.isLoading?null:this.stateStyleDataProviderService.getStyle("order_delivery.state",this.delivery.stateMachineState.technicalName).selectBackgroundStyle},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria:function(){var e=new c(1,100);return e.addAssociation("customFields"),e.getAssociation("customFields").addSorting(c.naturalSorting("config.customFieldPosition")),e.addFilter(c.equals("relations.entityName","order")),e},disabledAutoPromotionVisibility:{get:function(){return!this.hasAutomaticPromotions},set:function(e){this.toggleAutomaticPromotions(e)}},taxStatus:function(){return this.order.price.taxStatus},displayRounded:function(){return.01!==this.order.totalRounding.interval||this.order.totalRounding.decimals!==this.order.itemRounding.decimals},orderTotal:function(){return this.displayRounded?this.order.price.rawTotal:this.order.price.totalPrice},hasLineItem:function(){return this.order.lineItems.filter((function(e){return e.hasOwnProperty("id")})).length>0},currency:function(){return this.order.currency}}),methods:{sortByTaxRate:function(e){return e.sort((function(e,t){return e.taxRate-t.taxRate}))},onStateTransitionOptionsChanged:function(e,t){"order.states"===e?this.orderOptions=t:"order_transaction.states"===e?this.transactionOptions=t:"order_delivery.states"===e&&(this.deliveryOptions=t)},onShippingChargeEdited:function(e){this.delivery.shippingCosts.unitPrice=e,this.delivery.shippingCosts.totalPrice=e,this.saveAndRecalculate()},saveAndRecalculate:function(){this.$emit("save-and-recalculate")},onSaveEdits:function(){this.$emit("save-edits")},recalculateAndReload:function(){this.$emit("recalculate-and-reload")}}}}}]);