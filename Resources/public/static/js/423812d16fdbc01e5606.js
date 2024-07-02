"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[94779],{894779:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});let{Component:n,State:a,Mixin:i,Utils:s}=Shopware,{get:c,format:o,array:d}=s;var l=n.wrapComponentConfig({template:'<div class="sw-order-create-general">\n    <sw-card\n        class="sw-order-create-general__general-info"\n        position-identifier="sw-order-create-general-info"\n        :title="$tc(\'sw-order.createBase.generalTab.labelGeneralInfoCard\')"\n    >\n        <sw-order-create-general-info\n            :cart="cart"\n            :context="context"\n            :is-loading="isLoading"\n        />\n    </sw-card>\n\n    <sw-extension-component-section\n        position-identifier="sw-order-create-base-line-items__before"\n    />\n\n    <sw-card\n        class="sw-order-create-general__line-items"\n        position-identifier="sw-order-create-line-items"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-order.createBase.generalTab.labelLineItemsCard\')"\n    >\n        <template #grid>\n            <sw-order-line-items-grid-sales-channel\n                editable\n                :cart="cart"\n                :currency="currency"\n                :sales-channel-id="context.salesChannel.id"\n                :is-loading="isLoading"\n                :is-customer-active="isCustomerActive"\n                @on-save-item="onSaveItem"\n                @on-remove-items="onRemoveItems"\n            />\n\n            <sw-card-section\n                v-show="cart.lineItems.length"\n                divider="top"\n                slim\n            >\n\n                <sw-container\n                    class="sw-order-create-summary"\n                    columns="1fr 1fr"\n                >\n                    <sw-description-list\n                        class="sw-order-create-summary__data"\n                        grid="1fr 1fr"\n                    >\n                        <dt>{{ $tc(\'sw-order.createBase.summaryLabelAmount\') }}</dt>\n                        <dd>{{ currencyFilter(cart.price ? cart.price.positionPrice : 0, currency.isoCode, currency.totalRounding.decimals) }}</dd>\n\n                        <template v-if="cartDelivery">\n                            <dt>{{ $tc(\'sw-order.createBase.summaryLabelShippingCosts\') }}</dt>\n                            <dd>\n                                <sw-order-saveable-field\n                                    v-tooltip="{\n                                        showDelay: 300,\n                                        message: shippingCostsDetail,\n                                        disabled: taxStatus === \'tax-free\'\n                                    }"\n                                    type="number"\n                                    editable\n                                    :value="cartDelivery.shippingCosts.totalPrice"\n                                    @value-change="onShippingChargeEdited"\n                                    @update:value="onShippingChargeUpdated"\n                                >\n                                    {{ currencyFilter(cartDelivery.shippingCosts.totalPrice, currency.isoCode, currency.totalRounding.decimals) }}\n                                </sw-order-saveable-field>\n                            </dd>\n                        </template>\n\n                        <template\n                            v-for="(delivery, index) in cartDeliveryDiscounts"\n                            :key="index"\n                        >\n                            <dt\n                            >\n                                {{ $tc(\'sw-order.createBase.discountLabelShippingCosts\') }}\n                            </dt>\n                            <dd\n                            >\n                                {{ currencyFilter(delivery.shippingCosts.totalPrice, currency.isoCode, currency.totalRounding.decimals) }}\n                            </dd>\n                        </template>\n\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountWithoutTaxes\') }}</strong></dt>\n                            <dd>\n                                <strong>{{ currencyFilter(cart.price ? cart.price.netPrice : 0, currency.isoCode, currency.totalRounding.decimals) }}</strong>\n                            </dd>\n                        </template>\n\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <template\n                                v-for="(calculatedTax, index) in filteredCalculatedTaxes"\n                                :key="index"\n                            >\n                                <dt\n                                >\n                                    {{ $tc(\'sw-order.createBase.summaryLabelTaxes\', 1, { taxRate: calculatedTax.taxRate }) }}\n                                </dt>\n                                <dd\n                                >\n                                    {{ currencyFilter(calculatedTax.tax, currency.isoCode, currency.totalRounding.decimals) }}\n                                </dd>\n                            </template>\n                        </template>\n\n                        <template v-if="taxStatus !== \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountTotal\') }}</strong></dt>\n                            <dd>\n                                <strong>{{ currencyFilter(orderTotal, currency.isoCode, currency.totalRounding.decimals) }}</strong>\n                            </dd>\n                            <template v-if="displayRounded">\n                                <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountTotalRounded\') }}</strong>\n                                </dt>\n                                <dd>\n                                    <strong>{{ currencyFilter(cart.price ? cart.price.totalPrice : 0, currency.isoCode, currency.totalRounding.decimals) }}</strong>\n                                </dd>\n                            </template>\n                        </template>\n\n                        <template v-if="taxStatus === \'tax-free\'">\n                            <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</strong></dt>\n                            <dd>\n                                <strong>{{ currencyFilter(cart.price ? cart.price.totalPrice : 0, currency.isoCode, currency.totalRounding.decimals) }}</strong>\n                            </dd>\n                        </template>\n                    </sw-description-list>\n                </sw-container>\n            </sw-card-section>\n        </template>\n    </sw-card>\n\n    <sw-extension-component-section\n        position-identifier="sw-order-create-base-line-items__after"\n    />\n</div>\n',mixins:[i.getByName("notification"),i.getByName("cart-notification")],data(){return{isLoading:!1}},computed:{customer(){return a.get("swOrder").customer},cart(){return a.get("swOrder").cart},currency(){return a.get("swOrder").context.currency},context(){return a.get("swOrder").context},isCustomerActive(){return a.getters["swOrder/isCustomerActive"]},cartDelivery(){return c(this.cart,"deliveries[0]",null)},cartDeliveryDiscounts(){return d.slice(this.cart.deliveries,1)||[]},taxStatus(){return c(this.cart,"price.taxStatus","")},shippingCostsDetail(){if(!this.cartDelivery)return null;let e=this.sortByTaxRate(this.cartDelivery.shippingCosts.calculatedTaxes).map(e=>this.$tc("sw-order.createBase.shippingCostsTax",0,{taxRate:e.taxRate,tax:o.currency(e.tax,this.currency.isoCode,this.currency.totalRounding?.decimals)}));return`${this.$tc("sw-order.createBase.tax")}<br>${e.join("<br>")}`},filteredCalculatedTaxes(){return this.cart.price&&this.cart.price.calculatedTaxes?this.sortByTaxRate(this.cart.price.calculatedTaxes??[]).filter(e=>0!==e.tax):[]},displayRounded(){return!!this.cart.price&&this.cart.price.rawTotal!==this.cart.price.totalPrice},orderTotal(){return this.cart.price?this.displayRounded?this.cart.price.rawTotal:this.cart.price.totalPrice:0},currencyFilter(){return Shopware.Filter.getByName("currency")}},created(){this.createdComponent()},methods:{createdComponent(){if(!this.customer){this.$nextTick(()=>{this.$router.push({name:"sw.order.create.initial"})});return}this.isLoading=!0,this.loadCart().finally(()=>{this.isLoading=!1})},onSaveItem(e){return this.isLoading=!0,a.dispatch("swOrder/saveLineItem",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token,item:e}).finally(()=>{this.isLoading=!1})},onShippingChargeEdited(){this.isLoading=!0,a.dispatch("swOrder/modifyShippingCosts",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token,shippingCosts:this.cartDelivery.shippingCosts}).catch(e=>{this.$emit("error",e)}).finally(()=>{this.isLoading=!1})},onRemoveItems(e){return this.isLoading=!0,a.dispatch("swOrder/removeLineItems",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token,lineItemKeys:e}).then(()=>{e.forEach(e=>{let t=a.get("swOrder").promotionCodes.find(t=>t.discountId===e);t&&a.commit("swOrder/setPromotionCodes",a.get("swOrder").promotionCodes.filter(e=>e.discountId!==t.discountId))})}).finally(()=>{this.isLoading=!1})},loadCart(){return a.dispatch("swOrder/getCart",{salesChannelId:this.customer?.salesChannelId,contextToken:this.cart.token})},sortByTaxRate(e){return e.sort((e,t)=>e.taxRate-t.taxRate)},onShippingChargeUpdated(e){let t=Math.abs(e);this.cartDelivery.shippingCosts.unitPrice=t,this.cartDelivery.shippingCosts.totalPrice=t}}})}}]);