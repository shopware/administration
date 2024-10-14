(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[24896],{541011:function(){},24896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n(679932);let{Mixin:r}=Shopware,{mapState:o,mapPropertyErrors:a,mapGetters:i}=Shopware.Component.getComponentHelper();var d={template:'<sw-container class="product-deliverability-downloadable-form">\n\n    <sw-inherit-wrapper\n        v-model:value="product.isCloseout"\n        :has-parent="!!parentProduct.id"\n        :inherited-value="parentProduct.isCloseout"\n        @update:value="onSwitchInput"\n    >\n        <template #content="props">\n\n            <sw-switch-field\n                class="product-deliverability-downloadable-form__manage-stock-switch"\n                name="sw-field--product-is-closeout"\n                :error="productIsCloseoutError"\n                :map-inheritance="props"\n                :label="$tc(\'sw-product.detailBase.manageStockLabel\')"\n                :help-text="$tc(\'sw-product.detailBase.manageStockTooltip\')"\n                :disabled="props.isInherited || disabled"\n                :value="props.currentValue"\n                @update:value="props.updateCurrentValue"\n            />\n\n        </template>\n    </sw-inherit-wrapper>\n\n    <sw-container\n        v-show="product.isCloseout"\n        columns="1fr 1fr"\n        gap="0px 30px"\n    >\n\n        <sw-number-field\n            v-model:value="product.stock"\n            name="sw-field--product-stock"\n            number-type="int"\n            :disabled="disabled"\n            :label="$tc(\'sw-product.settingsForm.labelStock\')"\n            :placeholder="$tc(\'sw-product.settingsForm.placeholderStock\')"\n            :error="productStockError"\n        />\n\n        <sw-number-field\n            v-model:value="product.availableStock"\n            name="sw-field--product-available-stock"\n            number-type="int"\n            :disabled="true"\n            :label="$tc(\'sw-product.settingsForm.labelAvailableStock\')"\n        />\n\n    </sw-container>\n\n    <sw-inherit-wrapper\n        v-if="showModeSetting"\n        v-model:value="product.deliveryTimeId"\n        :inherited-value="parentProduct.deliveryTimeId"\n        :has-parent="!!parentProduct.id"\n        :label="$tc(\'sw-product.settingsForm.labelDeliveryTime\')"\n    >\n        <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n            <sw-entity-single-select\n                id="deliveryTimeId"\n                :key="isInherited"\n                :value="currentValue"\n                entity="delivery_time"\n                :disabled="isInherited || disabled"\n                class="product-deliverability-downloadable-form__delivery-time"\n                :error="productDeliveryTimeIdError"\n                :placeholder="$tc(\'sw-product.settingsForm.placeholderDeliveryTime\')"\n                show-clearable-button\n                @update:value="updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n</sw-container>\n',compatConfig:Shopware.compatConfig,mixins:[r.getByName("placeholder")],props:{disabled:{type:Boolean,required:!1,default:!1}},data(){return{persistedStock:null}},computed:{...o("swProductDetail",["product","parentProduct","loading"]),...i("swProductDetail",["showModeSetting"]),...a("product",["stock","deliveryTimeId","isCloseout","maxPurchase"])},created(){this.createdComponent()},methods:{createdComponent(){void 0===this.product.stock&&(this.product.stock=0),this.persistedStock=this.product.stock},onSwitchInput(e){!1===e&&(this.product.stock=this.persistedStock)}}}},679932:function(e,t,n){var r=n(541011);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(745346).Z("57e0bc8b",r,!0,{})}}]);