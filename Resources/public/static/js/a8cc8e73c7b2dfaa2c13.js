(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[18],{MVGt:function(o,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i}));var e=n("5qLW"),r={PERCENTAGE:"percentage",ABSOLUTE:"absolute",FIXED:"fixed",FIXED_UNIT:"fixed_unit"},a={CART:"cart",DELIVERY:"delivery",SET:"set",SETGROUP:"setgroup"},i={isEditingAllowed:function(o){if(null===o)return!1;if(void 0===o)return!1;if(!Object(e.g)(o,"hasOrders"))throw new Error("Promotion Property hasOrders does not exist. Please use the Hydrator before!");return!o.hasOrders}}},t8aw:function(o,t,n){"use strict";n.r(t);var e=n("MVGt"),r=(n("u6F9"),Shopware),a=r.State,i=r.Utils,c=r.Service,s=i.format;t.default={template:'\n{% block sw_order_create_promotion_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.promotionModal.labelTitle\')"\n    class="sw-order-create-promotion-modal"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_order_create_promotion_modal_body %}\n    \n    {% block sw_order_create_promotion_modal_message %}\n    <p>{{ hasNoAutomaticPromotions ? $tc(\'sw-order.promotionModal.messageNoItems\') : $tc(\'sw-order.promotionModal.message\') }}</p>\n    {% endblock %}\n\n    \n    {% block sw_order_create_promotion_modal_promotions %}\n    <div\n        v-for="(item, index) in cartAutomaticPromotionItems"\n        :key="index"\n        class="sw-order-create-promotion-modal__promotion"\n    >\n        \n        {% block sw_order_create_promotion_modal_promotion_name %}\n        <strong class="sw-order-create-promotion-modal__promotion-name">{{ item.label }}</strong>\n        {% endblock %}\n\n        \n        {% block sw_order_create_promotion_modal_promotion_description %}\n        <p>{{ getDescription(item) }}</p>\n        {% endblock %}\n    </div>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_order_create_promotion_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_order_create_promotion_modal_footer_button_cancel %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_create_promotion_modal_footer_button_save %}\n        <sw-button\n            size="small"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="hasNoAutomaticPromotions"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-order.promotionModal.buttonDisable\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',props:{currency:{type:Object,required:!0},salesChannelId:{type:String,required:!1,default:null}},data:function(){return{isLoading:!1}},computed:{cart:function(){return a.get("swOrder").cart},cartAutomaticPromotionItems:function(){return this.cart.lineItems.filter((function(o){return"promotion"===o.type&&""===o.payload.code}))},hasNoAutomaticPromotions:function(){return 0===this.cartAutomaticPromotionItems.length}},methods:{onCancel:function(){this.$emit("close")},onSave:function(){this.disableAutomaticPromotions()},disableAutomaticPromotions:function(){var o=this;this.isLoading=!0;var t={salesChannelId:this.salesChannelId};c("cartStoreService").disableAutomaticPromotions(this.cart.token,t).then((function(){o.isLoading=!1,o.$emit("save")}))},getDescription:function(o){var t=o.price.totalPrice,n=o.payload,r=n.value,a=n.discountScope,i=n.discountType,c=n.groupId,l="sw-order.createBase.textPromotionDescription.".concat(a);if(a===e.a.CART&&i===e.b.ABSOLUTE&&Math.abs(t)<r)return this.$tc("".concat(l,".absoluteUpto"),0,{value:s.currency(Number(r),this.currency.shortName),totalPrice:s.currency(Math.abs(t),this.currency.shortName)});var d=i===e.b.PERCENTAGE?r:s.currency(Number(r),this.currency.shortName);return this.$tc("".concat(l,".").concat(i),0,{value:d,groupId:c})}}}},u6F9:function(o,t,n){var e=n("vaRI");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,n("P8hj").default)("6aaa0176",e,!0,{})},vaRI:function(o,t,n){}}]);
//# sourceMappingURL=a8cc8e73c7b2dfaa2c13.js.map