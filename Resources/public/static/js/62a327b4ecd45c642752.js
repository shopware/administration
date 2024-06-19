(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[18491],{223651:function(){},67883:function(o,t,n){"use strict";n.d(t,{em:function(){return r},nv:function(){return e},sC:function(){return s}});var i=n(410323);let s={PERCENTAGE:"percentage",ABSOLUTE:"absolute",FIXED:"fixed",FIXED_UNIT:"fixed_unit"},e={CART:"cart",DELIVERY:"delivery",SET:"set",SETGROUP:"setgroup"},r={isEditingAllowed:function(o){if(null==o)return!1;if(!(0,i.nr)(o,"hasOrders"))throw Error("Promotion Property hasOrders does not exist. Please use the Hydrator before!");return!o.hasOrders}}},318491:function(o,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i=n(67883);n(830038);var s={template:'\n{% block sw_promotion_detail_discounts %}\n<div class="sw-promotion-detail-discounts">\n    \n    {% block sw_promotion_detail_discounts_card_add %}\n    <div\n        class="promotion-detail-discounts__action_add"\n        position-identifier="sw-promotion-detail-discounts"\n    >\n        \n        {% block sw_promotion_detail_discounts_actions_add %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'promotion.editor\'),\n                showOnDisabledElements: true\n            }"\n            :is-loading="isLoading"\n            variant="ghost"\n            :disabled="(promotion && promotion.hasOrders) || !acl.can(\'promotion.editor\')"\n            @click="onAddDiscount"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.buttonAddDiscount\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_promotion_detail_discounts_items %}\n    <ul class="sw-promotion-detail-discounts__discount-list">\n        \n        {% block sw_promotion_detail_discounts_item_form %}\n        <sw-promotion-discount-component\n            v-for="discount in discounts"\n            :key="discount.id"\n            :promotion="promotion"\n            :discount="discount"\n            @discount-delete="deleteDiscount"\n        />\n        {% endblock %}\n    </ul>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],data(){return{deleteDiscountId:null,repository:null}},computed:{promotion(){return Shopware.State.get("swPromotionDetail").promotion},isLoading:{get(){return Shopware.State.get("swPromotionDetail").isLoading},set(o){Shopware.State.commit("swPromotionDetail/setIsLoading",o)}},discounts(){return Shopware.State.get("swPromotionDetail").promotion&&Shopware.State.get("swPromotionDetail").promotion.discounts}},methods:{onAddDiscount(){let o=this.repositoryFactory.create(this.discounts.entity,this.discounts.source).create();o.promotionId=this.promotion.id,o.scope=i.nv.CART,o.type=i.sC.PERCENTAGE,o.value=.01,o.considerAdvancedRules=!1,o.sorterKey="PRICE_ASC",o.applierKey="ALL",o.usageKey="ALL",this.discounts.push(o)},deleteDiscount(o){if(o.isNew()){this.discounts.remove(o.id);return}this.isLoading=!0,this.repositoryFactory.create(this.discounts.entity,this.discounts.source).delete(o.id,this.discounts.context).then(()=>{this.discounts.remove(o.id),this.isLoading=!1})}}}},830038:function(o,t,n){var i=n(223651);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[o.id,i,""]]),i.locals&&(o.exports=i.locals),n(745346).Z("81be5f8c",i,!0,{})}}]);