(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[14046],{889800:function(){},314046:function(s,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}}),n(270622);var i={template:'\n{% block sw_cms_element_cross_selling_preview %}\n<div class="sw-cms-el-preview-cross-selling">\n    <h4>{{ $tc(\'sw-cms.elements.crossSelling.preview.label.crossSellingTitle\') }}</h4>\n    <div class="sw-cms-el-preview-cross-selling__slider">\n        <sw-icon\n            name="regular-chevron-left"\n            size="10"\n        />\n\n        \n        {% block sw_cms_element_cross_selling_preview_box %}\n        <div class="sw-cms-el-preview-cross-selling-box">\n            <div class="sw-cms-el-preview-cross-selling-box__image">\n                <img\n                    :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n                    alt=""\n                >\n            </div>\n\n            <div class="sw-cms-el-preview-cross-selling-box__info">\n                <div class="sw-cms-el-preview-cross-selling-box__skeleton-left"></div>\n                <div class="sw-cms-el-preview-cross-selling-box__skeleton-right"></div>\n            </div>\n\n            <div class="sw-cms-el-preview-cross-selling-box__action"></div>\n        </div>\n        {% endblock %}\n\n        <sw-icon\n            name="regular-chevron-right"\n            size="10"\n        />\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},270622:function(s,e,n){var i=n(889800);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[s.id,i,""]]),i.locals&&(s.exports=i.locals),n(745346).Z("2c5c4c0a",i,!0,{})}}]);