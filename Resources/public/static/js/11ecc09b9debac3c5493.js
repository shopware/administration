(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[45167],{601169:function(){},945167:function(n,e,s){"use strict";s.r(e),s.d(e,{default:function(){return i}}),s(396254);var i=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_cms_product_box_preview %}\n<div\n    class="sw-cms-product-box-preview"\n    :class="{ \'has--text\': hasText }"\n>\n    <div class="sw-cms-product-box-preview__image">\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n            alt=""\n        >\n    </div>\n\n    <div v-if="hasText">\n        <div class="sw-cms-product-box-preview__name">\n            Lorem Ipsum\n        </div>\n\n        <div class="sw-cms-product-box-preview__description">\n            Lorem ipsum dolor sit amet conset...\n        </div>\n\n        <div class="sw-cms-product-box-preview__price">\n            19,90 €\n        </div>\n    </div>\n\n    <div class="sw-cms-product-box-preview__action">\n        Add to cart\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{hasText:{type:Boolean,required:!1,default(){return!1}}},computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}})},396254:function(n,e,s){var i=s(601169);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals),s(745346).Z("45dee81c",i,!0,{})}}]);