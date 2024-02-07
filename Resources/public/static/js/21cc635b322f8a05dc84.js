(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[583],{BlTK:function(e,n,t){"use strict";t.r(n);var r=t("CsSd"),o=t.n(r);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=Shopware.Component.getComponentHelper(),c=s.mapState,l=s.mapGetters;n.default={template:'\n{% block sw_product_detail_seo %}\n<div v-if="isLoading">\n    <sw-skeleton variant="detail-bold" />\n    <sw-skeleton />\n</div>\n\n<div v-else>\n    \n    {% block sw_product_detail_seo_general %}\n    <sw-card\n        position-identifier="sw-product-detail-seo"\n        :title="$tc(\'sw-product.seo.cardTitleSeo\')"\n    >\n        \n        {% block sw_product_detail_seo_general_content %}\n        <sw-product-seo-form\n            ref="seoForm"\n            :allow-edit="acl.can(\'product.editor\')"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_seo_urls %}\n    <sw-seo-url\n        v-if="product.seoUrls"\n        :has-default-template="false"\n        :disabled="!acl.can(\'product.editor\')"\n        :urls="product.seoUrls"\n        @on-change-sales-channel="onChangeSalesChannel"\n    >\n        \n        {% block sw_product_detail_seo_urls_content %}\n        <template #seo-additional="props">\n            \n            {% block sw_product_detail_seo_urls_content_seo_additional %}\n            <sw-inherit-wrapper\n                v-if="product.mainCategories"\n                {% if VUE3 %}\n                v-model:value="productMainCategory"\n                {% else %}\n                v-model="productMainCategory"\n                {% endif %}\n                :has-parent="!!parentProduct.id && !!props.currentSalesChannelId && product.categories.length === 0"\n                :label="$tc(\'sw-seo-url.labelMainCategory\')"\n                :inherited-value="parentMainCategory"\n            >\n\n                <template #content="{ currentValue, isInherited }">\n                    \n                    {% block sw_product_detail_seo_urls_content_seo_additional_edit %}\n                    <sw-seo-main-category\n                        :current-sales-channel-id="props.currentSalesChannelId"\n                        :categories="categories"\n                        :main-categories="isInherited ? parentProduct.mainCategories : product.mainCategories"\n                        :overwrite-label="true"\n                        :allow-edit="acl.can(\'product.editor\') && !isInherited"\n                        @main-category-add="onAddMainCategory"\n                    />\n                    {% endblock %}\n                </template>\n\n            </sw-inherit-wrapper>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-seo-url>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["feature","acl"],data:function(){return{currentSalesChannelId:void 0}},computed:i(i(i({},c("swProductDetail",["product","parentProduct"])),l("swProductDetail",["isLoading"])),{},{categories:function(){var e;return this.product.categories.length>0?this.product.categories:null!==(e=this.parentProduct.categories)&&void 0!==e?e:[]},parentMainCategory:function(){var e=this;return this.parentProduct.mainCategories&&this.currentSalesChannelId?this.parentProduct.mainCategories.find((function(n){return n.salesChannelId===e.currentSalesChannelId})):null},productMainCategory:{get:function(){var e=this;return this.product.mainCategories.find((function(n){return n.salesChannelId===e.currentSalesChannelId}))},set:function(e){var n=this;!this.product.mainCategories||e?this.product.mainCategories.push(e):this.product.mainCategories=this.product.mainCategories.filter((function(e){return e.salesChannelId!==n.currentSalesChannelId}))}}}),methods:{onAddMainCategory:function(e){this.product.mainCategories&&this.product.mainCategories.push(e)},onChangeSalesChannel:function(e){this.currentSalesChannelId=e}}}}}]);