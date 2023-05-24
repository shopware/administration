(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[577],{"G+f1":function(e,n,r){"use strict";r.r(n);var t=r("J58c"),i=r.n(t);function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i()(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var s=Shopware.Mixin,l=Shopware.Component.getComponentHelper(),a=l.mapState,c=l.mapPropertyErrors,d=l.mapGetters;n.default={template:'\n{% block sw_product_deliverability_form %}\n<div class="product-deliverability-form">\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_deliverability_form_stock_field %}\n        <sw-field\n            v-model="product.stock"\n            type="number"\n            name="sw-field--product-stock"\n            number-type="int"\n            :disabled="!allowEdit"\n            :label="$tc(\'sw-product.settingsForm.labelStock\')"\n            :placeholder="$tc(\'sw-product.settingsForm.placeholderStock\')"\n            :error="productStockError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_available_stock_field %}\n        <sw-field\n            v-model="product.availableStock"\n            type="number"\n            name="sw-field--product-available-stock"\n            number-type="int"\n            :disabled="true"\n            :label="$tc(\'sw-product.settingsForm.labelAvailableStock\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_is_closeout_field %}\n        <sw-inherit-wrapper\n            v-model="product.isCloseout"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.isCloseout"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="switch"\n                    name="sw-field--product-is-closeout"\n                    :error="productIsCloseoutError"\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelIsCloseout\')"\n                    :help-text="$tc(\'sw-product.settingsForm.isCloseoutHelpText\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @change="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_deliverability_form_delivery_time_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model="product.deliveryTimeId"\n            :inherited-value="parentProduct.deliveryTimeId"\n            :has-parent="!!parentProduct.id"\n            :label="$tc(\'sw-product.settingsForm.labelDeliveryTime\')"\n        >\n            <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n                <sw-entity-single-select\n                    id="deliveryTimeId"\n                    :key="isInherited"\n                    :value="currentValue"\n                    entity="delivery_time"\n                    :disabled="isInherited || !allowEdit"\n                    class="product-deliverability-form__delivery-time"\n                    :error="productDeliveryTimeIdError"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderDeliveryTime\')"\n                    show-clearable-button\n                    @change="updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_restock_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model="product.restockTime"\n            class="sw-product-deliverability__restock-field"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.restockTime"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="number"\n                    name="sw-field--product-restock-time"\n                    :map-inheritance="props"\n                    number-type="int"\n                    allow-empty\n                    :min="0"\n                    :disabled="props.isInherited || !allowEdit"\n                    :label="$tc(\'sw-product.settingsForm.labelRestockTime\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderRestockTime\')"\n                    :value="props.currentValue"\n                    :error="productRestockTimeError"\n                    @change="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_shipping_free_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model="product.shippingFree"\n            class="sw-product-deliverability__shipping-free"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.shippingFree"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="switch"\n                    :map-inheritance="props"\n                    :error="productShippingFreeError"\n                    :label="$tc(\'sw-product.settingsForm.labelShippingFree\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @change="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_deliverability_form_min_purchase_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model="product.minPurchase"\n            class="sw-product-deliverability__min-purchase"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.minPurchase"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="number"\n                    :map-inheritance="props"\n                    number-type="int"\n                    :min="1"\n                    :error="productMinPurchaseError"\n                    :label="$tc(\'sw-product.settingsForm.labelMinPurchase\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderMinPurchase\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @change="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_purchase_steps_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model="product.purchaseSteps"\n            class="sw-product-deliverability__purchase-step"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.purchaseSteps"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="number"\n                    :map-inheritance="props"\n                    number-type="int"\n                    :min="1"\n                    :error="productPurchaseStepsError"\n                    :label="$tc(\'sw-product.settingsForm.labelPurchaseSteps\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderPurchaseSteps\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @change="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_deliverability_form_max_purchase_field %}\n        <sw-inherit-wrapper\n            v-if="showModeSetting"\n            v-model="product.maxPurchase"\n            class="sw-product-deliverability__max-purchase"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.maxPurchase"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="number"\n                    :map-inheritance="props"\n                    number-type="int"\n                    :allow-empty="true"\n                    :min="0"\n                    :error="productMaxPurchaseError"\n                    :label="$tc(\'sw-product.settingsForm.labelMaxPurchase\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderMaxPurchase\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @change="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n</div>\n{% endblock %}\n',mixins:[s.getByName("placeholder")],props:{allowEdit:{type:Boolean,required:!1,default:!0}},computed:p(p(p({},a("swProductDetail",["product","parentProduct","loading"])),d("swProductDetail",["showModeSetting"])),c("product",["stock","deliveryTimeId","isCloseout","maxPurchase","purchaseSteps","minPurchase","shippingFree","restockTime"])),created:function(){this.createdComponent()},methods:{createdComponent:function(){void 0===this.product.stock&&(this.product.stock=0)}}}}}]);