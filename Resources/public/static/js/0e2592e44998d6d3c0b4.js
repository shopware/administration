(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[361],{"I/b6":function(e,r,n){var t=n("SDym");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n("ydqr").default)("538379b0",t,!0,{})},SDym:function(e,r,n){},wp6Y:function(e,r,n){"use strict";n.r(r);var t=n("QGb3"),i=n.n(t),c=n("J58c"),a=n.n(c);n("I/b6");function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var u=Shopware.Mixin,p=Shopware.Component.getComponentHelper(),l=p.mapPropertyErrors,d=p.mapState,h=p.mapGetters;r.default={template:'\n{% block sw_product_price_form %}\n<div class="sw-product-price-form">\n    \n    {% block sw_product_price_form_fields %}\n    <sw-container\n        columns="1fr 2fr"\n        gap="0px 30px"\n        class="sw-product-price-form__prices"\n    >\n\n        \n        {% block sw_product_price_form_tax_field %}\n        <sw-inherit-wrapper\n            ref="taxIdInheritation"\n            v-model="product.taxId"\n            :inherited-value="parentProduct.taxId"\n            :has-parent="!!parentProduct.taxId"\n            :help-text="taxRateHelpText"\n            :label="$tc(\'sw-product.priceForm.labelTaxRate\')"\n            class="sw-product-price-form__tax-rate"\n            required\n        >\n            <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n                <sw-field\n                    type="select"\n                    name="sw-field--product-taxId"\n                    :placeholder="$tc(\'sw-product.priceForm.placeholderTaxRate\')"\n                    validation="required"\n                    :disabled="isInherited || !allowEdit"\n                    :value="currentValue"\n                    :error="productTaxIdError"\n                    @change="updateCurrentValue"\n                >\n                    <option\n                        v-for="tax in taxes"\n                        :key="tax.id"\n                        :value="tax.id"\n                        :selected="currentValue === tax.id"\n                    >\n                        {{ getTaxLabel(tax) }}\n                    </option>\n                </sw-field>\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_price_form_price_field %}\n        <sw-inherit-wrapper\n            v-if="!isLoading"\n            v-model="prices"\n            label=" "\n            class="sw-product-price-form__price-list"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentPrices"\n            :custom-remove-inheritance-function="removePriceInheritation"\n            :custom-inheritation-check-function="inheritationCheckFunction"\n        >\n            <template #content="{ currentValue, isInherited }">\n                <sw-list-price-field\n                    vertical\n                    :price="currentValue.price"\n                    :purchase-prices="currentValue.purchasePrices"\n                    :tax-rate="productTaxRate"\n                    :disabled="isInherited || !allowEdit"\n                    :error="productPriceError ? productPriceError[0] : null"\n                    :currency="defaultCurrency"\n                    :show-setting-price="showModeSetting"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_product_price_form_link %}\n    <sw-container\n        columns="1fr"\n        justify="end"\n        class="sw-product-price-form__links"\n    >\n        \n        {% block sw_product_price_form_advanced_prices_link %}\n        <router-link\n            v-if="!product._isNew"\n            :to="{ name: \'sw.product.detail.prices\', params: { id: $route.params.id } }"\n            class="sw-card__quick-link"\n        >\n            {{ $tc(\'sw-product.detailBase.linkAdvancedPrices\') }} <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </router-link>\n        {% endblock %}\n\n        \n        {% block sw_product_price_form_maintain_currencies_link %}\n        \n        <a\n            v-if="product.price"\n            class="sw-card__quick-link"\n            @click.prevent="displayMaintainCurrencies = true"\n        >\n            {{ $tc(\'sw-product.detailBase.linkMaintainCurrencyPrices\') }} <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_product_price_form_maintain_currencies_modal %}\n    <sw-maintain-currencies-modal\n        v-if="displayMaintainCurrencies"\n        :currencies="currencies"\n        :prices="product.price"\n        :default-price="defaultPrice"\n        :tax-rate="productTaxRate"\n        :disabled="!allowEdit"\n        @modal-close="onMaintainCurrenciesClose"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',mixins:[u.getByName("placeholder")],props:{allowEdit:{type:Boolean,required:!1,default:!0}},data:function(){return{displayMaintainCurrencies:!1}},computed:s(s(s(s({},h("swProductDetail",["isLoading","defaultPrice","defaultCurrency","productTaxRate","showModeSetting"])),d("swProductDetail",["product","parentProduct","taxes","currencies"])),l("product",["taxId","price","purchasePrices"])),{},{taxRateHelpText:function(){return this.$tc("sw-product.priceForm.taxRateHelpText.label",0,{link:"<sw-internal-link\n                           :router-link=".concat(JSON.stringify({name:"sw.settings.tax.index"}),'\n                           :inline="true">\n                           ').concat(this.$tc("sw-product.priceForm.taxRateHelpText.linkText"),"\n                      </sw-internal-link>")})},prices:{get:function(){var e={price:[],purchasePrices:[]};return this.product&&Array.isArray(this.product.price)&&(e.price=i()(this.product.price)),this.product&&Array.isArray(this.product.purchasePrices)&&(e.purchasePrices=i()(this.product.purchasePrices)),e},set:function(e){this.product.price=(null==e?void 0:e.price)||null,this.product.purchasePrices=(null==e?void 0:e.purchasePrices)||null}},parentPrices:function(){return{price:this.product.price||this.parentProduct.price,purchasePrices:this.product.purchasePrices||this.parentProduct.purchasePrices}}}),methods:{removePriceInheritation:function(e){var r,n,t=this,i=null===(r=e.price)||void 0===r?void 0:r.find((function(e){return e.currencyId===t.defaultCurrency.id})),c=null===(n=e.purchasePrices)||void 0===n?void 0:n.find((function(e){return e.currencyId===t.defaultCurrency.id})),a={price:[],purchasePrices:[]};return i&&a.price.push({currencyId:i.currencyId,gross:i.gross,net:i.net,linked:i.linked,listPrice:i.listPrice?i.listPrice:null,regulationPrice:i.regulationPrice?i.regulationPrice:null}),c&&a.purchasePrices.push({currencyId:c.currencyId,gross:c.gross,net:c.net,linked:c.linked}),a},inheritationCheckFunction:function(){return!this.prices.price.length&&!this.prices.purchasePrices.length},onMaintainCurrenciesClose:function(e){this.product.price=e,this.displayMaintainCurrencies=!1},keymonitor:function(e){if(","===e.key){var r=e.currentTarget.value;e.currentTarget.value=r.replace(/.$/,".")}},getTaxLabel:function(e){return this.$te("global.tax-rates.".concat(e.name))?this.$tc("global.tax-rates.".concat(e.name)):e.name}}}}}]);