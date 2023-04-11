(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[567],{y9hF:function(e,t,n){"use strict";n.r(t);var r=n("QGb3"),s=n.n(r),o=n("HZZ/"),i=n.n(o),a=n("J58c"),d=n.n(a),c=n("hJxD"),l=n.n(c);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Shopware,p=h.Component,f=h.State,g=h.Utils,w=h.Data,y=h.Service,_=h.Mixin,b=w.Criteria,C=g.get,v=g.format,A=g.array,x=p.getComponentHelper().mapGetters;t.default={template:'\n{% block sw_order_create %}\n<sw-card-view>\n    \n    {% block sw_order_create_address_modal %}\n    <sw-order-create-address-modal\n        v-if="showAddressModal"\n        :address="address"\n        :add-address-modal-title="addAddressModalTitle"\n        :edit-address-modal-title="editAddressModalTitle"\n        :customer="customer"\n        :cart="cart"\n        @close-modal="closeModal"\n        @set-customer-address="setCustomerAddress"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_promotion_modal %}\n    <sw-order-create-promotion-modal\n        v-if="showPromotionModal"\n        :is-loading="isLoading"\n        :currency="currency"\n        :sales-channel-id="customer.salesChannelId"\n        @close="onClosePromotionModal"\n        @save="onSavePromotionModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_details %}\n    <sw-card\n        :title="$tc(\'sw-order.createBase.labelDetailsCard\')"\n        :is-loading="isLoadingDetail"\n        position-identifier="sw-order-create-base-details"\n        class="sw-order-create__card"\n    >\n        <template #grid>\n            <sw-container\n                type="row"\n                class="sw-order-user-card"\n            >\n                <sw-card-section>\n                    \n                    {% block sw_order_create_details_header %}\n                    <sw-order-create-details-header\n                        :customer="customer"\n                        :order-date="orderDate"\n                        :cart-price="cartPrice"\n                        :currency="currency"\n                        @on-select-existing-customer="onSelectExistingCustomer"\n                    />\n                    {% endblock %}\n                    \n                    {% block sw_order_create_details_body %}\n                    <sw-order-create-details-body\n                        :customer="customer"\n                        :is-customer-active="isCustomerActive"\n                        @on-edit-billing-address="onEditBillingAddress"\n                        @on-edit-shipping-address="onEditShippingAddress"\n                    />\n                    {% endblock %}\n                </sw-card-section>\n                <sw-card-section\n                    secondary\n                    divider="top"\n                >\n                    \n                    {% block sw_order_create_details_footer %}\n                    <sw-order-create-details-footer\n                        :customer="customer"\n                        :is-customer-active="isCustomerActive"\n                        :cart="cart"\n                        @loading-change="updateLoading"\n                    />\n                    {% endblock %}\n                </sw-card-section>\n            </sw-container>\n        </template>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_order_create_base_line_items_card %}\n    <sw-card\n        :title="$tc(\'sw-order.createBase.cardTitleLineItems\')"\n        :is-loading="isLoading"\n        position-identifier="sw-order-create-base-line-items"\n        class="sw-order-create__card sw-order-create-base__line-item-grid-card"\n    >\n        \n        {% block sw_order_create_base_line_items_card_rows %}\n        <template #grid>\n            <sw-container type="row">\n                \n                {% block sw_order_create_base_line_items_grid %}\n                <sw-order-line-items-grid-sales-channel\n                    ref="sw-order-line-item-grid-sales-channel"\n                    :cart="cart"\n                    :currency="currency"\n                    :sales-channel-id="salesChannelId"\n                    :is-loading="isLoading"\n                    :is-customer-active="isCustomerActive"\n                    editable\n                    @on-save-item="onSaveItem"\n                    @on-remove-items="onRemoveItems"\n                />\n                {% endblock %}\n\n                \n                {% block sw_order_create_base_line_items_summary %}\n                <sw-card-section\n                    v-show="cartLineItems.length"\n                    divider="top"\n                    secondary\n                    slim\n                >\n                    <sw-container\n                        columns="1fr 1fr"\n                        class="sw-order-create-summary"\n                    >\n                        <div>\n                            \n                            {% block sw_order_create_base_line_items_switch_promotions %}\n                            <sw-switch-field\n                                v-model="disabledAutoPromotionVisibility"\n                                class="sw-order-create-summary__switch-promotions"\n                                :label="$tc(\'sw-order.promotionModal.labelTitle\')"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_order_create_base_line_items_voucher_field %}\n                            <sw-order-promotion-tag-field\n                                v-model="promotionCodeTags"\n                                :disabled="!hasLineItem"\n                                :currency="currency"\n                                :label="$tc(\'sw-order.createBase.labelAddPromotion\')"\n                                :placeholder="$tc(\'sw-order.createBase.placeholderAddPromotion\')"\n                                :error="promotionError"\n                                @on-remove-code="onRemoveExistingCode"\n                            />\n                            {% endblock %}\n                        </div>\n                        <sw-description-list\n                            grid="1fr 1fr"\n                            class="sw-order-create-summary__data"\n                        >\n                            \n                            {% block sw_order_create_base_line_items_summary_entries %}\n                            \n                            {% block sw_order_create_base_line_items_summary_amount %}\n                            <dt>{{ $tc(\'sw-order.createBase.summaryLabelAmount\') }}</dt>\n                            <dd>{{ (cartPrice ? cartPrice.positionPrice : 0) | currency(currency.shortName) }}</dd>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_shipping_cost %}\n                            <template v-if="cartDelivery">\n                                <dt>{{ $tc(\'sw-order.createBase.summaryLabelShippingCosts\') }}</dt>\n                                <dd>\n                                    <sw-order-saveable-field\n                                        v-tooltip="{\n                                            showDelay: 300,\n                                            message: shippingCostsDetail,\n                                            disabled: taxStatus === \'tax-free\'\n                                        }"\n                                        type="number"\n                                        editable\n                                        :value="cartDelivery.shippingCosts.totalPrice"\n                                        @value-change="onShippingChargeEdited"\n                                    >\n                                        {{ cartDelivery.shippingCosts.totalPrice | currency(currency.shortName) }}\n                                    </sw-order-saveable-field>\n                                </dd>\n                            </template>\n                            \n                            <template\n                                v-for="(delivery, index) in cartDeliveryDiscounts"\n                                v-if="cartDeliveryDiscounts"\n                            >\n                                <dt :key="`dt-${index}`">\n                                    {{ $tc(\'sw-order.createBase.discountLabelShippingCosts\') }}\n                                </dt>\n                                <dd :key="`dd-${index}`">\n                                    {{ delivery.shippingCosts.totalPrice | currency(currency.shortName) }}\n                                </dd>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_amount_without_tax %}\n                            <template v-if="taxStatus !== \'tax-free\'">\n                                <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountWithoutTaxes\') }}</strong></dt>\n                                <dd><strong>{{ (cartPrice ? cartPrice.netPrice : 0) | currency(currency.shortName) }}</strong></dd>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_taxes %}\n                            <template v-if="taxStatus !== \'tax-free\'">\n                                <template v-for="(calculatedTax, index) in filteredCalculatedTaxes">\n                                    <dt :key="`dt-${index}`">\n                                        {{ $tc(\'sw-order.createBase.summaryLabelTaxes\', 1, { taxRate: calculatedTax.taxRate }) }}\n                                    </dt>\n                                    <dd :key="`dd-${index}`">\n                                        {{ calculatedTax.tax | currency(currency.shortName) }}\n                                    </dd>\n                                </template>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_amount_total %}\n                            <template v-if="taxStatus !== \'tax-free\'">\n                                <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountTotal\') }}</strong></dt>\n                                <dd><strong>{{ orderTotal | currency(currency.shortName) }}</strong></dd>\n                                <template v-if="displayRounded">\n                                    <dt><strong>{{ $tc(\'sw-order.createBase.summaryLabelAmountTotalRounded\') }}</strong></dt>\n                                    <dd><strong>{{ cart.price.totalPrice | currency(currency.shortName) }}</strong></dd>\n                                </template>\n                            </template>\n                            {% endblock %}\n\n                            \n                            {% block sw_order_create_base_line_items_summary_amount_free_tax %}\n                            <template v-if="taxStatus === \'tax-free\'">\n                                <dt><strong>{{ $tc(\'sw-order.detailBase.summaryLabelAmount\') }}</strong></dt>\n                                <dd><strong>{{ cart.price.totalPrice | currency(currency.shortName) }}</strong></dd>\n                            </template>\n                            {% endblock %}\n                            {% endblock %}\n                        </sw-description-list>\n                    </sw-container>\n                </sw-card-section>\n                {% endblock %}\n            </sw-container>\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</sw-card-view>\n{% endblock %}\n',inject:["feature"],mixins:[_.getByName("notification")],data:function(){return{isLoading:!1,isLoadingDetail:!1,address:{data:null},showAddressModal:!1,addAddressModalTitle:null,editAddressModalTitle:null,promotionError:null,showPromotionModal:!1,disabledAutoPromotionChecked:!1}},computed:m(m({},x("swOrder",["cartErrors"])),{},{customerRepository:function(){return y("repositoryFactory").create("customer")},customerAddressRepository:function(){return y("repositoryFactory").create("customer_address")},currencyRepository:function(){return y("repositoryFactory").create("currency")},customerAddressCriteria:function(){var e=new b(1,25);return e.addAssociation("salutation"),e.addAssociation("country"),e.addAssociation("countryState"),e},defaultCriteria:function(){var e=new b(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel").addAssociation("defaultPaymentMethod").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags"),e},orderDate:function(){var e=new Date;return v.date(e)},customer:function(){return f.get("swOrder").customer},salesChannelId:function(){var e,t;return null!==(e=null===(t=this.customer)||void 0===t?void 0:t.salesChannelId)&&void 0!==e?e:""},isCustomerActive:function(){return f.getters["swOrder/isCustomerActive"]},cart:function(){return f.get("swOrder").cart},cartLineItems:function(){return this.cart.lineItems},cartAutomaticPromotionItems:function(){return this.cartLineItems.filter((function(e){return"promotion"===e.type&&""===e.payload.code}))},cartPrice:function(){return this.cart.price},currency:function(){return f.get("swOrder").context.currency},cartDelivery:function(){return C(this.cart,"deliveries[0]",null)},promotionCodeTags:{get:function(){return f.get("swOrder").promotionCodes},set:function(e){f.commit("swOrder/setPromotionCodes",e)}},cartDeliveryDiscounts:function(){return A.slice(this.cart.deliveries,1)||[]},filteredCalculatedTaxes:function(){return this.cartPrice&&this.cartPrice.calculatedTaxes?this.sortByTaxRate(this.cartPrice.calculatedTaxes).filter((function(e){return 0!==e.tax})):[]},promotionCodeLineItems:function(){return this.cartLineItems.filter((function(e){return"promotion"===e.type&&C(e,"payload.code")}))},hasLineItem:function(){return this.cartLineItems.filter((function(e){return e.hasOwnProperty("id")})).length>0},shippingCostsDetail:function(){var e=this;if(!this.cartDelivery)return null;var t=this.sortByTaxRate(this.cartDelivery.shippingCosts.calculatedTaxes).map((function(t){return e.$tc("sw-order.createBase.shippingCostsTax",0,{taxRate:t.taxRate,tax:v.currency(t.tax,e.currency.shortName)})}));return"".concat(this.$tc("sw-order.createBase.tax"),"<br>").concat(t.join("<br>"))},disabledAutoPromotionVisibility:{get:function(){return this.disabledAutoPromotionChecked},set:function(e){this.switchAutomaticPromotions(e)}},taxStatus:function(){return C(this.cart,"price.taxStatus","")},displayRounded:function(){return!!this.cartPrice&&this.cartPrice.rawTotal!==this.cartPrice.totalPrice},orderTotal:function(){return this.cartPrice?this.displayRounded?this.cartPrice.rawTotal:this.cartPrice.totalPrice:0}}),watch:{cart:{deep:!0,handler:"updatePromotionList"},promotionCodeTags:{handler:"handlePromotionCodeTags"},cartErrors:{handler:function(e){var t=this;e&&0!==e.length&&Object.values(e).forEach((function(e){switch(e.level){case 0:t.createNotificationSuccess({message:e.message});break;case 10:t.createNotificationWarning({message:e.message});break;default:t.createNotificationError({message:e.message})}}))}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this.$route.params.customer;e&&(f.commit("swOrder/setCustomer",e),this.onSelectExistingCustomer(e.id))},createCart:function(e){return i()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.dispatch("swOrder/createCart",{salesChannelId:e});case 2:case"end":return t.stop()}}),t)})))()},loadCart:function(){var e=this;return i()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.cart.token&&0!==e.cart.lineItems.length){t.next=2;break}return t.abrupt("return");case 2:e.updateLoading(!0),f.dispatch("swOrder/getCart",{salesChannelId:e.customer.salesChannelId,contextToken:e.cart.token}).finally((function(){return e.updateLoading(!1)}));case 4:case"end":return t.stop()}}),t)})))()},onSelectExistingCustomer:function(e){var t=this;return i()(l.a.mark((function n(){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoadingDetail=!0,n.prev=1,n.next=4,t.customerRepository.get(e,Shopware.Context.api,t.defaultCriteria);case 4:if(r=n.sent,t.cart.token){n.next=8;break}return n.next=8,t.createCart(r.salesChannelId);case 8:return t.setCustomer(r),t.setCurrency(r),n.next=12,t.updateCustomerContext();case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),t.createNotificationError({message:t.$tc("sw-order.create.messageSwitchCustomerError")});case 17:return n.prev=17,t.isLoadingDetail=!1,n.finish(17);case 20:case"end":return n.stop()}}),n,null,[[1,14,17,20]])})))()},updateCustomerContext:function(){var e=this;return i()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.dispatch("swOrder/updateCustomerContext",{customerId:e.customer.id,salesChannelId:e.customer.salesChannelId,contextToken:e.cart.token});case 2:case"end":return t.stop()}}),t)})))()},setCustomer:function(e){f.dispatch("swOrder/selectExistingCustomer",{customer:e})},setCurrency:function(e){this.currencyRepository.get(e.salesChannel.currencyId).then((function(e){f.commit("swOrder/setCurrency",e)}))},onEditBillingAddress:function(){var e="billingAddress",t=this.customer.billingAddress?this.customer.billingAddress:this.customer.defaultBillingAddress;this.addAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleAddBillingAddress"),this.editAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleEditBillingAddress"),this.address={contextId:"billingAddressId",contextDataKey:e,contextDataDefaultId:"defaultBillingAddressId",data:t},this.showAddressModal=!0},onEditShippingAddress:function(){var e="shippingAddress",t=this.customer.shippingAddress?this.customer.shippingAddress:this.customer.defaultShippingAddress;this.addAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleAddShippingAddress"),this.editAddressModalTitle=this.$tc("sw-order.addressSelection.modalTitleEditShippingAddress"),this.address={contextId:"shippingAddressId",contextDataKey:e,contextDataDefaultId:"defaultShippingAddressId",data:t},this.showAddressModal=!0},setCustomerAddress:function(e){var t=this,n=e.contextId,r=e.data;this.customer[n]=r.id;var s=[{id:this.customer.billingAddressId,dataKey:"billingAddress"},{id:this.customer.shippingAddressId,dataKey:"shippingAddress"},{id:this.customer.defaultBillingAddressId,dataKey:"defaultBillingAddress"},{id:this.customer.defaultShippingAddressId,dataKey:"defaultShippingAddress"}];this.customerAddressRepository.get(r.id,Shopware.Context.api,this.customerAddressCriteria).then((function(e){s.forEach((function(n){n.id===r.id&&(t.customer[n.dataKey]=e)})),t.setCustomer(t.customer)}))},closeModal:function(){this.showAddressModal=!1,this.address.data=null},save:function(){this.closeModal()},onSaveItem:function(e){var t=this;this.updateLoading(!0),f.dispatch("swOrder/saveLineItem",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,item:e}).finally((function(){return t.updateLoading(!1)}))},onRemoveItems:function(e){var t=this;this.updateLoading(!0),f.dispatch("swOrder/removeLineItems",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,lineItemKeys:e}).then((function(){e.forEach((function(e){var n=t.promotionCodeTags.find((function(t){return t.discountId===e}));n&&(t.promotionCodeTags=t.promotionCodeTags.filter((function(e){return e.discountId!==n.discountId})))}))})).finally((function(){return t.updateLoading(!1)}))},updateLoading:function(e){this.isLoading=e},sortByTaxRate:function(e){return e.sort((function(e,t){return e.taxRate-t.taxRate}))},onSubmitCode:function(e){var t=this;this.updateLoading(!0),f.dispatch("swOrder/addPromotionCode",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,code:e}).finally((function(){return t.updateLoading(!1)}))},onRemoveExistingCode:function(e){e.isInvalid?this.promotionCodeTags=this.promotionCodeTags.filter((function(t){return t.code!==e.code})):this.onRemoveItems([e.discountId])},updatePromotionList:function(){var e=this;this.promotionCodeTags=this.promotionCodeTags.map((function(t){var n=e.promotionCodeLineItems.find((function(e){return e.payload.code===t.code}));return n?m(m({},n.payload),{},{isInvalid:!1}):m(m({},t),{},{isInvalid:!0})})),this.promotionCodeLineItems.forEach((function(t){e.promotionCodeTags.find((function(e){return e.code===t.payload.code}))||(e.promotionCodeTags=[].concat(s()(e.promotionCodeTags),[m(m({},t.payload),{},{isInvalid:!1})]))}))},handlePromotionCodeTags:function(e,t){if(this.promotionError=null,!(e.length<t.length)){var n=this.promotionCodeTags.length,r=this.promotionCodeTags[n-1];e.length>t.length&&this.onSubmitCode(r.code),n>0&&r.isInvalid&&(this.promotionError={detail:this.$tc("sw-order.createBase.textInvalidPromotionCode")})}},onShippingChargeEdited:function(e){var t=this,n=Math.abs(e);this.cartDelivery.shippingCosts.unitPrice=n,this.cartDelivery.shippingCosts.totalPrice=n,this.updateLoading(!0),f.dispatch("swOrder/modifyShippingCosts",{salesChannelId:this.customer.salesChannelId,contextToken:this.cart.token,shippingCosts:this.cartDelivery.shippingCosts}).catch((function(e){t.$emit("error",e)})).finally((function(){t.updateLoading(!1)}))},switchAutomaticPromotions:function(e){this.disabledAutoPromotionChecked=e,this.showPromotionModal=e,this.showPromotionModal||this.enableAutomaticPromotions()},enableAutomaticPromotions:function(){var e=this;this.updateLoading(!0);var t={salesChannelId:this.customer.salesChannelId};y("cartStoreService").enableAutomaticPromotions(this.cart.token,t).then((function(){e.loadCart()}))},onClosePromotionModal:function(){this.showPromotionModal=!1,this.disabledAutoPromotionChecked=!1},onSavePromotionModal:function(){this.showPromotionModal=!1,this.disabledAutoPromotionChecked=!0,this.loadCart()}}}}}]);