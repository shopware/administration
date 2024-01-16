(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[463],{"3Ahi":function(i,e,t){var n=t("hKA7");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);(0,t("P8hj").default)("55925999",n,!0,{})},Gf0Z:function(i,e,t){"use strict";t.r(e);var n=t("CsSd"),r=t.n(n);t("3Ahi");function s(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),t.push.apply(t,n)}return t}function c(i){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r()(i,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(t,e))}))}return i}var p=Shopware,o=p.Mixin,a=p.Data.Criteria,l=p.Context,u=Shopware.Utils.object.cloneDeep,d=Shopware.Component.getComponentHelper(),h=d.mapState,g=d.mapGetters;e.default={template:'\n{% block sw_settings_shipping_price_matrices %}\n<div class="sw-settings-shipping-price-matrices">\n    \n    {% block sw_settings_shipping_price_matrices_price_matrix %}\n    <sw-settings-shipping-price-matrix\n        v-for="priceGroup in shippingPriceGroups"\n        :key="priceGroup.ruleId"\n        :price-group="priceGroup"\n        :disabled="disabled"\n        @duplicate-price-matrix="onDuplicatePriceMatrix"\n        @delete-price-matrix="onDeletePriceMatrix"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_detail_advanced_prices_actions %}\n    <div class="sw-settings-shipping-price-matrices__actions">\n        \n        {% block sw_settings_shipping_detail_advanced_prices_actions_add_button %}\n        <sw-button\n            v-tooltip="{\n                showDelay: 300,\n                showOnDisabledElements: true,\n                message: $tc(\'sw-settings-shipping.priceMatrix.newMatrixAlreadyExists\'),\n                disabled: !newPriceMatrixExists\n            }"\n            :disabled="newPriceMatrixExists || disabled"\n            class="sw-settings-shipping-price-matrices__actions-add-matrix"\n            @click="onAddNewPriceGroup"\n        >\n            {{ $tc(\'sw-settings-shipping.priceMatrix.buttonAddAdditionalPriceMatrix\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","ruleConditionDataProviderService","feature"],mixins:[o.getByName("notification"),o.getByName("placeholder")],props:{disabled:{type:Boolean,required:!1,default:!1}},computed:c(c(c({},h("swShippingDetail",["shippingMethod"])),g("swShippingDetail",["shippingPriceGroups","usedRules","unrestrictedPriceMatrixExists","newPriceMatrixExists"])),{},{ruleRepository:function(){return this.repositoryFactory.create("rule")},ruleFilter:function(){var i=new a(1,500);return i.addFilter(a.multi("OR",[a.contains("rule.moduleTypes.types","price"),a.equals("rule.moduleTypes",null)])),i},shippingPriceRepository:function(){return this.repositoryFactory.create("shipping_method_price")},isLoaded:function(){return this.currencies.length&&this.shippingMethod}}),methods:{onAddNewPriceGroup:function(){var i=this.shippingPriceRepository.create(l.api);i.shippingMethodId=this.shippingMethod.id,i.quantityStart=1,i.ruleId=null,this.unrestrictedPriceMatrixExists&&(i._inNewMatrix=!0),this.shippingMethod.prices.add(i)},onDeletePriceMatrix:function(i){this.shippingMethod.prices=this.shippingMethod.prices.filter((function(e){return i.isNew?!e._inNewMatrix:e.ruleId!==i.ruleId}))},onDuplicatePriceMatrix:function(i){var e,t=this,n=[];i.prices.forEach((function(i){var e=t.shippingPriceRepository.create(l.api);t.unrestrictedPriceMatrixExists&&(e._inNewMatrix=!0),e.ruleId=null,e.calculation=i.calculation,e.calculationRule=i.calculationRule,e.calculationRuleId=i.calculationRuleId,e.shippingMethodId=i.shippingMethodId,e.currencyPrice=u(i.currencyPrice),e.quantityStart=i.quantityStart,e.quantityEnd=i.quantityEnd,n.push(e)})),(e=this.shippingMethod.prices).push.apply(e,n)}}}},hKA7:function(i,e,t){}}]);
//# sourceMappingURL=c7c1724b4a253942a22e.js.map