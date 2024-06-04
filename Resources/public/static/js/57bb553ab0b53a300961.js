"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[24114],{824114:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});let{Mixin:t}=Shopware,{mapState:i,mapPropertyErrors:o,mapGetters:l}=Shopware.Component.getComponentHelper();var p={template:'\n{% block sw_product_deliverability_form %}\n<div class="product-deliverability-form">\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_deliverability_form_stock_field %}\n        <sw-number-field\n            v-model:value="product.stock"\n            name="sw-field--product-stock"\n            number-type="int"\n            :disabled="!allowEdit"\n            :label="$tc(\'sw-product.settingsForm.labelStock\')"\n            :placeholder="$tc(\'sw-product.settingsForm.placeholderStock\')"\n            :error="productStockError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_available_stock_field %}\n        <sw-number-field\n            v-model:value="product.availableStock"\n            name="sw-field--product-available-stock"\n            number-type="int"\n            :disabled="true"\n            :label="$tc(\'sw-product.settingsForm.labelAvailableStock\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_is_closeout_field %}\n        <sw-inherit-wrapper\n            v-model:value="product.isCloseout"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.isCloseout"\n        >\n            <template #content="props">\n\n                <sw-switch-field\n                    name="sw-field--product-is-closeout"\n                    :error="productIsCloseoutError"\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelIsCloseout\')"\n                    :help-text="$tc(\'sw-product.settingsForm.isCloseoutHelpText\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_deliverability_form_delivery_time_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model:value="product.deliveryTimeId"\n            :inherited-value="parentProduct.deliveryTimeId"\n            :has-parent="!!parentProduct.id"\n            :label="$tc(\'sw-product.settingsForm.labelDeliveryTime\')"\n        >\n            <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n                <sw-entity-single-select\n                    id="deliveryTimeId"\n                    :key="isInherited"\n                    :value="currentValue"\n                    entity="delivery_time"\n                    :disabled="isInherited || !allowEdit"\n                    class="product-deliverability-form__delivery-time"\n                    :error="productDeliveryTimeIdError"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderDeliveryTime\')"\n                    show-clearable-button\n                    @update:value="updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_restock_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model:value="product.restockTime"\n            class="sw-product-deliverability__restock-field"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.restockTime"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    name="sw-field--product-restock-time"\n                    :map-inheritance="props"\n                    number-type="int"\n                    allow-empty\n                    :min="0"\n                    :disabled="props.isInherited || !allowEdit"\n                    :label="$tc(\'sw-product.settingsForm.labelRestockTime\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderRestockTime\')"\n                    :value="props.currentValue"\n                    :error="productRestockTimeError"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_shipping_free_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model:value="product.shippingFree"\n            class="sw-product-deliverability__shipping-free"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.shippingFree"\n        >\n            <template #content="props">\n\n                <sw-switch-field\n                    :map-inheritance="props"\n                    :error="productShippingFreeError"\n                    :label="$tc(\'sw-product.settingsForm.labelShippingFree\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_deliverability_form_min_purchase_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model:value="product.minPurchase"\n            class="sw-product-deliverability__min-purchase"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.minPurchase"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    number-type="int"\n                    :min="1"\n                    :error="productMinPurchaseError"\n                    :label="$tc(\'sw-product.settingsForm.labelMinPurchase\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderMinPurchase\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_purchase_steps_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model:value="product.purchaseSteps"\n            class="sw-product-deliverability__purchase-step"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.purchaseSteps"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    number-type="int"\n                    :min="1"\n                    :error="productPurchaseStepsError"\n                    :label="$tc(\'sw-product.settingsForm.labelPurchaseSteps\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderPurchaseSteps\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_max_purchase_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model:value="product.maxPurchase"\n            class="sw-product-deliverability__max-purchase"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.maxPurchase"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    number-type="int"\n                    :allow-empty="true"\n                    :min="0"\n                    :error="productMaxPurchaseError"\n                    :label="$tc(\'sw-product.settingsForm.labelMaxPurchase\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderMaxPurchase\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n</div>\n{% endblock %}\n',mixins:[t.getByName("placeholder")],props:{allowEdit:{type:Boolean,required:!1,default:!0}},computed:{...i("swProductDetail",["product","parentProduct","loading"]),...l("swProductDetail",["showModeSetting"]),...o("product",["stock","deliveryTimeId","isCloseout","maxPurchase","purchaseSteps","minPurchase","shippingFree","restockTime"])},created(){this.createdComponent()},methods:{createdComponent(){void 0===this.product.stock&&(this.product.stock=0)}}}}}]);