(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[360],{"Cj/l":function(e,t,n){},WlW1:function(e,t,n){"use strict";n.r(t);var r=n("CsSd"),o=n.n(r);n("xHdR");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c=Shopware.Component.getComponentHelper().mapState;t.default={template:'\n{% block sw_product_detail_base_feature_set_form %}\n<div class="sw-product-feature-set-form__container">\n    \n    {% block sw_product_feature_set_form_container %}\n\n    \n    {% block sw_product_feature_set_form_description %}\n    <sw-container\n        rows="2em 4em 4em"\n        class="sw-product-feature-set-form__description"\n    >\n\n        \n        {% block sw_product_feature_set_form_description_title %}\n        <span class="sw-product-feature-set-form__description-title">\n            {{ $tc(\'sw-product.featureSets.descriptionTitle\') }}\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_product_feature_set_form_description_body %}\n        <p class="sw-product-feature-set-form__description-body">\n            {{ $tc(\'sw-product.featureSets.descriptionBody\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_product_feature_set_form_config_information %}\n        <i18n\n            tag="p"\n            path="sw-product.featureSets.configInformation"\n            class="sw-product-feature-set-form__description-config-info"\n        >\n            <span class="sw-product-feature-set-form__description-link">\n                <router-link\n                    :to="{ name: \'sw.settings.product.feature.sets.index\' }"\n                    class="sw-card__quick-link"\n                >\n                    {{ $tc(\'sw-product.featureSets.linkFeatureSetsConfig\') }}\n                </router-link>\n            </span>\n        </i18n>\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_product_feature_set_form_form %}\n    <sw-container class="sw-product-feature-set-form__form">\n\n        \n        {% block sw_product_feature_set_form_wrapper_input %}\n        <sw-inherit-wrapper\n            v-model="product.featureSetId"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.featureSetId"\n            :label="$tc(\'sw-product.featureSets.templateSelectFieldLabel\')"\n        >\n            <template #content="{ currentValue, isInherited, updateCurrentValue }">\n\n                \n                {% block sw_product_feature_set_form_input %}\n                <sw-entity-single-select\n                    :key="isInherited"\n                    entity="product_feature_set"\n                    :value="currentValue"\n                    :placeholder="$tc(\'sw-product.featureSets.templateSelectFieldPlaceholder\')"\n                    :disabled="isInherited || !allowEdit"\n                    show-clearable-button\n                    @change="updateCurrentValue"\n                />\n                {% endblock %}\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{allowEdit:{type:Boolean,required:!1,default:!0}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c("swProductDetail",["product","parentProduct","loading"]))}},xHdR:function(e,t,n){var r=n("Cj/l");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("c0709e9e",r,!0,{})}}]);