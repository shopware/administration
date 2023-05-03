(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[576],{kaAP:function(e,r,t){"use strict";t.r(r);var n=t("J58c"),a=t.n(n);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var s=Shopware.Component.getComponentHelper(),c=s.mapPropertyErrors,l=s.mapState;r.default={template:'\n{% block sw_product_settings_form %}\n<div class="sw-product-settings-form">\n    \n    {% block sw_product_settings_form_content %}\n    <sw-container\n        columns="1fr 1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_settings_form_release_date_field %}\n        <sw-inherit-wrapper\n            v-model="product.releaseDate"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.releaseDate"\n        >\n            <template #content="props">\n\n                <sw-datepicker\n                    :map-inheritance="props"\n                    date-type="datetime"\n                    :disabled="props.isInherited || !allowEdit"\n                    :error="productReleaseDateError"\n                    :label="$tc(\'sw-product.settingsForm.labelReleaseDate\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderReleaseDate\')"\n                    :value="props.currentValue"\n                    @input="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_settings_form_ean_field %}\n        <sw-inherit-wrapper\n            v-model="product.ean"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.ean"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="text"\n                    :map-inheritance="props"\n                    :error="productEanError"\n                    :label="$tc(\'sw-product.settingsForm.labelEan\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderEan\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @change="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_settings_form_manufacturer_number_field %}\n        <sw-inherit-wrapper\n            v-model="product.manufacturerNumber"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.manufacturerNumber"\n        >\n            <template #content="props">\n\n                <sw-field\n                    type="text"\n                    :map-inheritance="props"\n                    :error="productManufacturerNumberError"\n                    :label="$tc(\'sw-product.settingsForm.labelManufacturerNumber\')"\n                    :placeholder="$tc(\'sw-product.settingsForm.placeholderManufacturerNumber\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @input="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{allowEdit:{type:Boolean,required:!1,default:!0}},computed:o(o({},l("swProductDetail",["product","parentProduct"])),c("product",["releaseDate","stock","minPurchase","maxPurchase","ean","manufacturerNumber","shippingFree","markAsTopseller"]))}}}]);