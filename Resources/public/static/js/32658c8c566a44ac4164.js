(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[81585],{109894:function(){},281585:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(21465);let{Criteria:i}=Shopware.Data;var s={template:'\n{% block sw_promotion_v2_settings_discount_type %}\n<div class="sw-promotion-v2-settings-discount-type">\n    <sw-container\n        columns="1fr 1fr"\n        gap="20px"\n    >\n\n        \n        {% block sw_promotion_v2_settings_discount_type_type %}\n        <sw-select-field\n            v-model:value="discount.type"\n            class="sw-promotion-v2-settings-discount-type__field-select-discount-type"\n            :label="$tc(\'sw-promotion-v2.detail.discounts.settings.discountType.labelDiscountType\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n        >\n\n            \n            {% block sw_promotion_v2_settings_discount_type_type_options %}\n            <option\n                v-for="selection in getDiscountTypeSelection()"\n                :key="selection.value"\n                :disabled="selection.disabled"\n                :value="selection.value"\n            >\n                {{ selection.display }}\n            </option>\n            {% endblock %}\n\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_settings_discount_type_price %}\n        <sw-number-field\n            v-model:value="discount.value"\n            class="sw-promotion-v2-settings-discount-type__field-price"\n            :id-suffix="discount.id"\n            :min="0"\n            :max="discount.type === \'percentage\' ? 100 : null"\n            :label="labelValue"\n            :disabled="discount.type === \'free\' || !acl.can(\'promotion.editor\')"\n        >\n\n            \n            {% block sw_promotion_v2_settings_discount_type_price_suffix %}\n            <template #suffix>\n                <span v-if="isPercentageType">%</span>\n                <span v-else>{{ currencySymbol }}</span>\n            </template>\n            {% endblock %}\n\n        </sw-number-field>\n        {% endblock %}\n\n    </sw-container>\n\n    <sw-container\n        columns="1fr 1fr"\n        gap="20px"\n    >\n\n        \n        {% block sw_promotion_v2_settings_discount_type_apply_discount_to %}\n        <sw-select-field\n            v-model:value="discount.applierKey"\n            class="sw-promotion-v2-settings-discount-type__field-apply-discount-to"\n            :label="$tc(\'sw-promotion-v2.detail.discounts.settings.discountType.labelApplyDiscountTo\')"\n            :disabled="discount.type === \'free\' || !acl.can(\'promotion.editor\')"\n        >\n\n            \n            {% block sw_promotion_v2_settings_discount_type_apply_discount_to_options %}\n            <option\n                v-for="selection in getApplyDiscountToSelection()"\n                :key="selection.value"\n                :disabled="selection.disabled"\n                :value="selection.value"\n            >\n                {{ selection.display }}\n            </option>\n            {% endblock %}\n\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_settings_discount_type_max_discount_value %}\n        <sw-number-field\n            v-model:value="discount.maxValue"\n            class="sw-promotion-v2-settings-discount-type__field-max-discount"\n            :id-suffix="discount.id"\n            :label="$tc(\'sw-promotion-v2.detail.discounts.settings.discountType.labelMaxDiscountValue\')"\n            :disabled="discount.type !== \'percentage\' || !acl.can(\'promotion.editor\')"\n            allow-empty\n            @update:value="onMaxValueChanged"\n        >\n\n            \n            {% block sw_promotion_v2_settings_discount_type_max_discount_value_suffix %}\n            <template #suffix>\n                <span>{{ currencySymbol }}</span>\n            </template>\n            {% endblock %}\n\n        </sw-number-field>\n        {% endblock %}\n\n    </sw-container>\n\n    \n    {% block sw_promotion_v2_settings_discount_type_advanced_prices_link %}\n    <a\n        v-if="showAdvancedPricesLink"\n        class="sw-promotion-v2-settings-discount-type__advanced-prices"\n        role="button"\n        tabindex="0"\n        @click="onClickAdvancedPrices"\n        @keydown.enter="onClickAdvancedPrices"\n    >\n        {{ $tc(\'sw-promotion-v2.detail.discounts.pricesModal.linkAdvancedPrices\') }}\n        <sw-icon\n            name="regular-long-arrow-right"\n            small\n        />\n    </a>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal %}\n    <sw-modal\n        v-if="displayAdvancedPricesModal"\n        :title="$tc(\'sw-promotion-v2.detail.discounts.pricesModal.advancedPricesHeader\')"\n        class="sw-promotion-v2-settings-discounts-type__advanced-prices-modal"\n        @modal-close="onCloseAdvancedPricesModal"\n    >\n\n        \n        {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal_grid %}\n        <sw-one-to-many-grid\n            :collection="discount.promotionDiscountPrices"\n            :local-mode="true"\n            :columns="currencyPriceColumns"\n            :show-selection="false"\n            :show-actions="!acl.can(\'promotion.editor\')"\n        >\n\n            \n            {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal_grid_column_name %}\n            <template #column-currency.translated.name="{ item }">\n                <p class="sw-promotion-v2-settings-discounts-type__advances-prices-column-name">\n                    {{ item.currency.translated.name }}\n                </p>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal_grid_column_price %}\n            <template #column-price="{ item }">\n                <sw-number-field\n                    v-model:value="item.price"\n                    class="sw-promotion-v2-settings-discounts-type__advanced-prices-column-price"\n                    type="text"\n                    size="small"\n                    :disabled="!acl.can(\'promotion.editor\')"\n                >\n\n                    \n                    {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal_grid_column_price_suffix %}\n                    <template #suffix>\n                        {{ item.currency.symbol }}\n                    </template>\n                    {% endblock %}\n\n                </sw-number-field>\n            </template>\n            {% endblock %}\n\n        </sw-one-to-many-grid>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_promotion_v2_settings_discount_type_advanced_prices_modal_footer_button_close %}\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="onCloseAdvancedPricesModal"\n            >\n                {{ $tc(\'sw-promotion-v2.detail.discounts.pricesModal.closeModal\') }}\n            </sw-button>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n    </sw-modal>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["acl","repositoryFactory"],props:{discount:{type:Object,required:!0},discountScope:{type:String,required:!0,validator(e){return["basic","buy-x-get-y","shipping-discount"].includes(e)}},preselectedDiscountType:{type:String,required:!1,validator(e){return["fixed","fixed_unit","percentage","free"].includes(e)},default(){return"fixed"}},preselectedApplyDiscountTo:{type:String,required:!1,validator(e){return["ALL","SELECT"].includes(e)},default(){return"ALL"}}},data(){return{displayAdvancedPricesModal:!1,currencies:[],defaultCurrency:null,currencySymbol:null}},computed:{isPercentageType(){return["percentage","free"].includes(this.discount.type)},labelValue(){return this.$tc("sw-promotion-v2.detail.discounts.settings.discountType.labelValue",!this.isPercentageType)},showAdvancedPricesLink(){return["absolute","fixed","fixed_unit"].includes(this.discount.type)},currencyPriceColumns(){return[{property:"currency.translated.name",label:this.$tc("sw-promotion-v2.detail.discounts.pricesModal.labelCurrency")},{property:"price",dataIndex:"price",label:this.$tc("sw-promotion-v2.detail.discounts.pricesModal.labelPrice")}]},currencyRepository(){return this.repositoryFactory.create("currency")},advancedPricesRepo(){return this.repositoryFactory.create("promotion_discount_prices")},currencyCriteria(){return new i(1,25).addSorting(i.sort("name","ASC"))},showMaxValueAdvancedPrices(){return"percentage"===this.discount.type&&null!==this.discount.maxValue}},watch:{"discount.type"(e,n){if("percentage"===n&&(this.discount.maxValue=null),"free"===e){this.discount.applierKey="SELECT",this.discount.value=100;return}"absolute"===e?(this.discount.applierKey="SELECT",this.discount.usageKey="ALL"):"percentage"===e&&(this.discount.value=Math.min(this.discount.value,100))}},created(){this.createdComponent()},methods:{createdComponent(){if(this.currencyRepository.search(this.currencyCriteria).then(e=>{this.currencies=e,this.defaultCurrency=this.currencies.find(e=>e.isSystemDefault),this.currencySymbol=this.defaultCurrency.symbol}),!this.discount.isNew)return;let e={type:this.discount.type||this.preselectedDiscountType,applierKey:this.discount.applierKey||this.preselectedApplyDiscountTo};"basic"===this.discountScope?e={...e,scope:"cart"}:"buy-x-get-y"===this.discountScope?e={...e,scope:"set"}:"shipping-discount"===this.discountScope&&(e={...e,scope:"delivery"}),Object.assign(this.discount,e)},getDiscountTypeSelection(){let e="sw-promotion-v2.detail.discounts.settings.discountType.discountTypeSelection";return[{value:"percentage",display:this.$tc(`${e}.displayPercentage`)},{value:"delivery"===this.discount.scope?"absolute":"fixed",display:this.$tc(`${e}.displayFixedDiscount`)},{value:"fixed_unit",display:this.$tc(`${e}.displayFixedPrice`)},{value:"free",display:this.$tc(`${e}.displayFree`)}]},getApplyDiscountToSelection(){let e="sw-promotion-v2.detail.discounts.settings.discountType.applyDiscountTo";return[{value:"ALL",display:this.$tc(`${e}.displayTotalPrice`)},{value:"SELECT",display:this.$tc(`${e}.displayProductPrice`)}]},onClickAdvancedPrices(){this.currencies.forEach(e=>{this.setCurrencyForDiscountPrices(e)||(this.showMaxValueAdvancedPrices?this.prepareAdvancedPrices(e,this.discount.maxValue):this.prepareAdvancedPrices(e,this.discount.value))}),this.displayAdvancedPricesModal=!0},clearAdvancedPrices(){this.discount.promotionDiscountPrices.getIds().forEach(e=>{this.discount.promotionDiscountPrices.remove(e)})},setCurrencyForDiscountPrices(e){let n=e.id;return this.discount.promotionDiscountPrices.some(t=>t.currencyId===n&&(t.currency=e,!0))},prepareAdvancedPrices(e,n=0){let t=Math.max(n*e.factor,0),i=this.advancedPricesRepo.create();Object.assign(i,{discountId:this.discount.id,price:t,currencyId:e.id,currency:e}),this.discount.promotionDiscountPrices.add(i)},onMaxValueChanged(e){(null===e||0===e)&&(0===e&&(this.discount.maxValue=null),this.clearAdvancedPrices())},onCloseAdvancedPricesModal(){if("percentage"===this.discount.type&&null===this.discount.maxValue){this.clearAdvancedPrices(),this.displayAdvancedPricesModal=!1;return}this.discount.promotionDiscountPrices.forEach(e=>{"percentage"===this.discount.type&&(e.price=e.price>100?this.getMaxValue(this.discount.type):e.price),e.price<=0&&(e.price=0),e.price=Math.max(e.price,0)}),this.displayAdvancedPricesModal=!1}}}},21465:function(e,n,t){var i=t(109894);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("3b5034f0",i,!0,{})}}]);