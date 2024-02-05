"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[43926],{43926:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});let{Utils:r,Mixin:a}=Shopware,{format:i,array:d}=r,{mapGetters:s,mapState:o}=Shopware.Component.getComponentHelper(),{cloneDeep:l}=Shopware.Utils.object;var c={template:'\n{% block sw_order_detail_general %}\n<div class="sw-order-detail-general">\n    \n    {% block sw_order_detail_general_info_card %}\n    <sw-card\n        class="sw-order-detail-base__general-info"\n        position-identifier="sw-order-detail-general-info"\n        :title="$tc(\'sw-order.detailBase.cardTitleGeneralInfo\')"\n    >\n        \n        {% block sw_order_detail_general_info %}\n        <sw-order-general-info\n            ref="swOrderGeneralInfo"\n            :order="order"\n            @save-edits="onSaveEdits"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_general_line_items_card %}\n    <sw-extension-component-section\n        position-identifier="sw-order-detail-base-line-items__before"\n    />\n\n    <sw-card\n        class="sw-order-detail-general__line-item-grid-card"\n        position-identifier="sw-order-detail-general-line-items"\n        :title="$tc(\'sw-order.detailBase.cardTitleLineItems\')"\n    >\n\n        \n        {% block sw_order_detail_general_line_items_card_rows %}\n        <template #grid>\n            <sw-container type="row">\n                \n                {% block sw_order_detail_general_line_items_grid %}\n                <sw-order-line-items-grid\n                    ref="sw-order-line-item-grid"\n                    :order="order"\n                    :context="versionContext"\n                    :editable="acl.can(\'order.editor\')"\n                    @item-delete="recalculateAndReload"\n                    @item-edit="recalculateAndReload"\n                    @existing-item-edit="saveAndRecalculate"\n                    @item-cancel="recalculateAndReload"\n                />\n                {% endblock %}\n\n                \n                {% block sw_order_detail_general_line_items_summary %}\n                <sw-card-section\n                    divider="top"\n                    slim\n                >\n                    <sw-description-list\n                        class="sw-order-detail__summary"\n                        grid="1fr 1fr"\n                    >\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_entries %}\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount %}\n                        <dt>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</dt>\n                        <dd>{{ currencyFilter(order.positionPrice, currency.translated.isoCode, order.totalRounding.decimals) }}</dd>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_shipping_cost %}\n                        <template v-if="delivery">\n                            <dt>{{ $tc(\'sw-order.detailBase.summaryLabelShippingCosts\') }}</dt>\n                            <dd>\n                                <sw-order-saveable-field\n                                    v-tooltip="{\n                                        showDelay: 300,\n                                        message: shippingCostsDetail,\n                                        disabled: taxStatus === \'tax-free\'\n                                    }"\n                                    type="number"\n                                    :editable="acl.can(\'order.editor\')"\n                                    :value="delivery.shippingCosts.totalPrice"\n                                    @value-change="onShippingChargeEdited"\n                                >\n                                    {{ currencyFilter(delivery.shippingCosts.totalPrice, currency.translated.isoCode, order.totalRounding.decimals) }}\n                                </sw-order-saveable-field>\n                            </dd>\n                        </template>\n\n                        <template\n                            v-for="(delivery, index) in deliveryDiscounts"\n                            :key="index"\n                        >\n                            <dt\n                            >\n                                {{ $tc(\'sw-order.detailBase.discountLabelShippingCosts\') }}\n                            </dt>\n                            <dd\n                            >\n                                {{ currencyFilter(delivery.shippingCosts.totalPrice, currency.translated.isoCode, order.totalRounding.decimals) }}\n                            </dd>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount_without_tax %}\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmountWithoutTaxes\') }}</strong></dt>\n                            <dd><strong>{{ currencyFilter(order.amountNet, currency.translated.isoCode, order.totalRounding.decimals) }}</strong></dd>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_taxes %}\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <template\n                                v-for="(calculatedTax, index) in sortedCalculatedTaxes"\n                                :key="index"\n                            >\n                                <dt\n                                >\n                                    {{ $tc(\'sw-order.detailBase.summaryLabelTaxes\', 1, { taxRate: calculatedTax.taxRate }) }}\n                                </dt>\n                                <dd\n                                >\n                                    {{ currencyFilter(calculatedTax.tax, currency.translated.isoCode, order.totalRounding.decimals) }}\n                                </dd>\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount_total %}\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmountTotal\') }}</strong></dt>\n                            <dd><strong>{{ currencyFilter(orderTotal, currency.isoCode, order.totalRounding.decimals) }}</strong></dd>\n                            <template v-if="displayRounded">\n                                <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmountTotalRounded\') }}</strong></dt>\n                                <dd><strong>{{ currencyFilter(order.price.totalPrice, currency.isoCode, order.totalRounding.decimals) }}</strong></dd>\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_order_detail_general_line_items_summary_amount_free_tax %}\n                        <template v-if="taxStatus === \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</strong></dt>\n                            <dd><strong>{{ currencyFilter(order.price.totalPrice, currency.translated.isoCode, order.totalRounding.decimals) }}</strong></dd>\n                        </template>\n                        {% endblock %}\n                    {% endblock %}\n                    </sw-description-list>\n                </sw-card-section>\n                {% endblock %}\n            </sw-container>\n        </template>\n        {% endblock %}\n    </sw-card>\n\n    <sw-extension-component-section\n        position-identifier="sw-order-detail-base-line-items__after"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],mixins:[a.getByName("notification")],props:{orderId:{type:String,required:!0},isSaveSuccessful:{type:Boolean,required:!0}},computed:{...s("swOrderDetail",["isLoading"]),...o("swOrderDetail",["order","versionContext"]),delivery(){return this.order.deliveries[0]},deliveryDiscounts(){return d.slice(this.order.deliveries,1)||[]},shippingCostsDetail(){let e=this.sortByTaxRate(l(this.order.shippingCosts.calculatedTaxes)),t=`${e.map(e=>`${this.$tc("sw-order.detailBase.shippingCostsTax",0,{taxRate:e.taxRate,tax:i.currency(e.tax,this.order.currency.isoCode)})}`).join("<br>")}`;return`${this.$tc("sw-order.detailBase.tax")}<br>${t}`},sortedCalculatedTaxes(){return this.sortByTaxRate(l(this.order.price.calculatedTaxes)).filter(e=>0!==e.tax)},taxStatus(){return this.order.price.taxStatus},displayRounded(){return .01!==this.order.totalRounding.interval||this.order.totalRounding.decimals!==this.order.itemRounding.decimals},orderTotal(){return this.displayRounded?this.order.price.rawTotal:this.order.price.totalPrice},currency(){return this.order.currency},currencyFilter(){return Shopware.Filter.getByName("currency")}},methods:{sortByTaxRate(e){return e.sort((e,t)=>e.taxRate-t.taxRate)},onShippingChargeEdited(e){this.delivery.shippingCosts.unitPrice=e,this.delivery.shippingCosts.totalPrice=e,this.saveAndRecalculate()},saveAndRecalculate(){this.$emit("save-and-recalculate")},onSaveEdits(){this.$emit("save-edits")},recalculateAndReload(){this.$emit("recalculate-and-reload")}}}}}]);