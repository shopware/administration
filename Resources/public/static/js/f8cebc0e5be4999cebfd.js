(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[63139],{651291:function(){},663139:function(s,n,e){"use strict";e.r(n),e.d(n,{default:function(){return i}}),e(28038);var i={template:'\n{% block sw_cms_product_box_preview %}\n<div\n    class="sw-cms-product-box-preview"\n    :class="{ \'has--text\': hasText }"\n>\n\n    <div class="sw-cms-product-box-preview__image">\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n            alt=""\n        >\n    </div>\n\n    <div v-if="hasText">\n        <div class="sw-cms-product-box-preview__name">\n            Lorem Ipsum\n        </div>\n\n        <div class="sw-cms-product-box-preview__description">\n            Lorem ipsum dolor sit amet conset...\n        </div>\n\n        <div class="sw-cms-product-box-preview__price">\n            19,90 €\n        </div>\n    </div>\n\n    <div class="sw-cms-product-box-preview__action">\n        Add to cart\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{hasText:{type:Boolean,default:!0,required:!1}},computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},28038:function(s,n,e){var i=e(651291);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[s.id,i,""]]),i.locals&&(s.exports=i.locals),e(745346).Z("36be1637",i,!0,{})}}]);