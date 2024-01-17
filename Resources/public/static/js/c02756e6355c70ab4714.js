(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[579],{TK1S:function(e,n,t){"use strict";t.r(n);var r=t("CsSd"),p=t.n(r);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){p()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var l=Shopware.Mixin,o=Shopware.Component.getComponentHelper(),c=o.mapPropertyErrors,d=o.mapState,u=o.mapGetters;n.default={template:'\n{% block sw_product_packaging_form %}\n<div class="sw-product-packaging-form">\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_packaging_form_width_field %}\n        <sw-inherit-wrapper\n            {% if VUE3 %}\n            v-model:value="product.width"\n            {% else %}\n            v-model="product.width"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.width"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelWidth\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderWidth\')"\n                    allow-empty\n                    :min="0"\n                    :error="productWidthError"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                >\n                    <template #suffix>\n                        <span>mm</span>\n                    </template>\n                </sw-number-field>\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_packaging_form_height_field %}\n        <sw-inherit-wrapper\n            {% if VUE3 %}\n            v-model:value="product.height"\n            {% else %}\n            v-model="product.height"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.height"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelHeight\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderHeight\')"\n                    allow-empty\n                    :min="0"\n                    :error="productHeightError"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                >\n                    <template #suffix>\n                        <span>mm</span>\n                    </template>\n                </sw-number-field>\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_settings_form_length_field %}\n        <sw-inherit-wrapper\n            {% if VUE3 %}\n            v-model:value="product.length"\n            {% else %}\n            v-model="product.length"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.length"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelLength\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderLength\')"\n                    allow-empty\n                    :min="0"\n                    :error="productLengthError"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                >\n                    <template #suffix>\n                        <span>mm</span>\n                    </template>\n                </sw-number-field>\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_settings_form_weight_field %}\n        <sw-inherit-wrapper\n            {% if VUE3 %}\n            v-model:value="product.weight"\n            {% else %}\n            v-model="product.weight"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.weight"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelWeight\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderWeight\')"\n                    allow-empty\n                    :min="0"\n                    :digits="3"\n                    :error="productWeightError"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                >\n                    <template #suffix>\n                        <span>kg</span>\n                    </template>\n                </sw-number-field>\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_price_form_purchase_unit_field %}\n        <sw-inherit-wrapper\n            v-show="showSettingPackaging"\n            {% if VUE3 %}\n            v-model:value="product.purchaseUnit"\n            {% else %}\n            v-model="product.purchaseUnit"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.purchaseUnit"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    class="sw-product-packaging-form__purchase-unit-field"\n                    :map-inheritance="props"\n                    number-type="float"\n                    allow-empty\n                    :min="0"\n                    :digits="3"\n                    :error="productPurchaseUnitError"\n                    :label="$tc(\'sw-product.priceForm.labelPurchaseUnit\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :placeholder="$tc(\'sw-product.priceForm.placeholderPurchaseUnit\')"\n                    :help-text="$tc(\'sw-product.packagingForm.purchaseUnitHelpText\')"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_price_form_unit_field %}\n        <sw-inherit-wrapper\n            v-show="showSettingPackaging"\n            {% if VUE3 %}\n            v-model:value="product.unitId"\n            {% else %}\n            v-model="product.unitId"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :label="$tc(\'sw-product.packagingForm.labelUnit\')"\n            :inherited-value="parentProduct.unitId"\n        >\n            <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n                <sw-entity-single-select\n                    :key="isInherited"\n                    :value="currentValue"\n                    entity="unit"\n                    :disabled="isInherited || !allowEdit"\n                    class="sw-select-product__select_unit"\n                    pointer="product.unit"\n                    :placeholder="$tc(\'sw-product.packagingForm.placeholderUnit\')"\n                    show-clearable-button\n                    {% if VUE3 %}\n                    @update:value="updateCurrentValue"\n                    {% else %}\n                    @change="updateCurrentValue"\n                    {% endif %}\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_price_form_pack_unit_field %}\n        <sw-inherit-wrapper\n            v-show="showSettingPackaging"\n            {% if VUE3 %}\n            v-model:value="product.packUnit"\n            {% else %}\n            v-model="product.packUnit"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.packUnit"\n        >\n            <template #content="props">\n\n                <sw-text-field\n                    class="sw-product-packaging-form__pack-unit-field"\n                    :map-inheritance="props"\n                    :error="productPackUnitError"\n                    :label="$tc(\'sw-product.priceForm.labelPackUnit\')"\n                    :placeholder="$tc(\'sw-product.priceForm.placeholderPackUnit\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :help-text="$tc(\'sw-product.packagingForm.packUnitHelpText\')"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @input="props.updateCurrentValue"\n                    {% endif %}\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_price_form_pack_unit_plural_field %}\n        <sw-inherit-wrapper\n            v-show="showSettingPackaging"\n            {% if VUE3 %}\n            v-model:value="product.packUnitPlural"\n            {% else %}\n            v-model="product.packUnitPlural"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.packUnitPlural"\n        >\n            <template #content="props">\n\n                <sw-text-field\n                    class="sw-product-packaging-form__pack-unit-plural-field"\n                    :map-inheritance="props"\n                    :error="productPackUnitPluralError"\n                    :label="$tc(\'sw-product.priceForm.labelPackUnitPlural\')"\n                    :placeholder="$tc(\'sw-product.priceForm.placeholderPackUnitPlural\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :help-text="$tc(\'sw-product.packagingForm.packUnitPluralHelpText\')"\n                    :value="props.currentValue"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @input="props.updateCurrentValue"\n                    {% endif %}\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_price_form_reference_unit_field %}\n        <sw-inherit-wrapper\n            v-show="showSettingPackaging"\n            {% if VUE3 %}\n            v-model:value="product.referenceUnit"\n            {% else %}\n            v-model="product.referenceUnit"\n            {% endif %}\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.referenceUnit"\n        >\n            <template #content="props">\n\n                <sw-number-field\n                    class="sw-product-packaging-form__reference-unit-field"\n                    :map-inheritance="props"\n                    number-type="float"\n                    allow-empty\n                    :min="0"\n                    :digits="3"\n                    :error="productReferenceUnitError"\n                    :disabled="props.isInherited || !allowEdit"\n                    :placeholder="$tc(\'sw-product.priceForm.placeholderReferenceUnit\')"\n                    :label="$tc(\'sw-product.priceForm.labelReferenceUnit\')"\n                    :value="props.currentValue"\n                    :help-text="$tc(\'sw-product.packagingForm.referenceUnitHelpText\')"\n                    {% if VUE3 %}\n                    @update:value="props.updateCurrentValue"\n                    {% else %}\n                    @change="props.updateCurrentValue"\n                    {% endif %}\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n</div>\n{% endblock %}\n',mixins:[l.getByName("placeholder")],props:{allowEdit:{type:Boolean,required:!1,default:!0},showSettingPackaging:{type:Boolean,required:!1,default:!0}},computed:i(i(i({},u("swProductDetail",["isLoading"])),d("swProductDetail",["product","parentProduct"])),c("product",["purchaseUnit","referenceUnit","packUnit","PackUnitPlural","width","height","length","weight"]))}}}]);