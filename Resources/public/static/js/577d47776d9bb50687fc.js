(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74312],{505495:function(){},374312:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return c}}),s(180311);let{Mixin:t}=Shopware;var c={template:'\n{% block sw_cms_element_product_description_reviews %}\n<div\n    class="sw-cms-el-product-description-reviews"\n    :style="alignStyle"\n>\n    \n    {% block sw_cms_element_product_description_reviews_tabs %}\n    <div class="sw-cms-el-product-description-reviews__tabs">\n        <h2 class="sw-cms-el-product-description-reviews__description-tab">\n            {{ $tc(\'sw-cms.elements.productDescriptionReviews.preview.label.description\') }}\n        </h2>\n        <h2 class="sw-cms-el-product-description-reviews__reviews-tab">\n            {{ $tc(\'sw-cms.elements.productDescriptionReviews.preview.label.reviews\') }}\n        </h2>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_description_reviews_placeholder %}\n    \n    {% block sw_cms_element_product_description_reviews_placeholder_header %}\n    <div\n        v-if="isProductPageType && !currentDemoEntity"\n        class="sw-cms-el-product-description-reviews__placeholder"\n    >\n        <div class="sw-cms-el-product-description-reviews__placeholder-title"></div>\n        <div class="sw-cms-el-product-description-reviews__placeholder-description"></div>\n        <div class="sw-cms-el-product-description-reviews__placeholder-description"></div>\n        <div class="sw-cms-el-product-description-reviews__placeholder-description"></div>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_description_reviews_placeholder_listing %}\n    <ul\n        v-if="isProductPageType && !currentDemoEntity"\n        class="sw-cms-el-product-description-reviews__placeholder-listing"\n    >\n        <li class="sw-cms-el-product-description-reviews__placeholder-item">\n            <div class="sw-cms-el-product-description-reviews__placeholder-left"></div>\n            <div class="sw-cms-el-product-description-reviews__placeholder-right"></div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__placeholder-item">\n            <div class="sw-cms-el-product-description-reviews__placeholder-left"></div>\n            <div class="sw-cms-el-product-description-reviews__placeholder-right"></div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__placeholder-item">\n            <div class="sw-cms-el-product-description-reviews__placeholder-left"></div>\n            <div class="sw-cms-el-product-description-reviews__placeholder-right"></div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__placeholder-item">\n            <div class="sw-cms-el-product-description-reviews__placeholder-left"></div>\n            <div class="sw-cms-el-product-description-reviews__placeholder-right"></div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__placeholder-item">\n            <div class="sw-cms-el-product-description-reviews__placeholder-left"></div>\n            <div class="sw-cms-el-product-description-reviews__placeholder-right"></div>\n        </li>\n    </ul>\n    {% endblock %}\n\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_description_reviews_detail %}\n    \n    {% block sw_cms_element_product_description_reviews_detail_header %}\n    <div\n        v-if="!isProductPageType || currentDemoEntity"\n        class="sw-cms-el-product-description-reviews__detail"\n    >\n        <h3 class="sw-cms-el-product-description-reviews__detail-title">\n            {{ placeholder(product, \'name\', product.name) }}\n        </h3>\n        <div class="sw-cms-el-product-description-reviews__detail-description">\n            {{ placeholder(product, \'description\', product.description) }}\n        </div>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_description_reviews_detail_listing %}\n    <ul\n        v-if="!isProductPageType || currentDemoEntity"\n        class="sw-cms-el-product-description-reviews__detail-listing"\n    >\n        <li class="sw-cms-el-product-description-reviews__detail-item">\n            <div class="sw-cms-el-product-description-reviews__detail-item-label">\n                property\n            </div>\n            <div class="sw-cms-el-product-description-reviews__detail-item-value">\n                property value\n            </div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__detail-item">\n            <div class="sw-cms-el-product-description-reviews__detail-item-label">\n                property\n            </div>\n            <div class="sw-cms-el-product-description-reviews__detail-item-value">\n                property value\n            </div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__detail-item">\n            <div class="sw-cms-el-product-description-reviews__detail-item-label">\n                property\n            </div>\n            <div class="sw-cms-el-product-description-reviews__detail-item-value">\n                property value\n            </div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__detail-item">\n            <div class="sw-cms-el-product-description-reviews__detail-item-label">\n                property\n            </div>\n            <div class="sw-cms-el-product-description-reviews__detail-item-value">\n                property value\n            </div>\n        </li>\n        <li class="sw-cms-el-product-description-reviews__detail-item">\n            <div class="sw-cms-el-product-description-reviews__detail-item-label">\n                property\n            </div>\n            <div class="sw-cms-el-product-description-reviews__detail-item-value">\n                property value\n            </div>\n        </li>\n    </ul>\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,mixins:[t.getByName("cms-element"),t.getByName("placeholder")],computed:{product(){return this.currentDemoEntity?this.currentDemoEntity:this.element.data&&this.element.data.product?this.element.data.product:{name:"Product information",description:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                  no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                                  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                  ipsum dolor sit amet.`}},pageType(){return this.cmsPageState?.currentPage?.type},isProductPageType(){return"product_detail"===this.pageType},alignStyle(){return this.element.config.alignment&&this.element.config.alignment.value?`align-content: ${this.element.config.alignment.value};`:null},currentDemoEntity(){return"product"===this.cmsPageState.currentMappingEntity?this.cmsPageState.currentDemoEntity:null}},watch:{pageType(e){this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"locked","product_detail"===e):this.element.locked="product_detail"===e}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("product-description-reviews"),this.initElementData("product-description-reviews"),this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"locked",this.isProductPageType):this.element.locked=this.isProductPageType}}}},180311:function(e,i,s){var t=s(505495);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),s(745346).Z("59db2281",t,!0,{})}}]);