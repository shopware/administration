(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[162],{"2x3D":function(s,e,n){},ZADR:function(s,e,n){"use strict";n.r(e);n("nu0c"),e.default={template:'\n{% block sw_cms_element_cross_selling_preview %}\n<div class="sw-cms-el-preview-cross-selling">\n    <h4>{{ $tc(\'sw-cms.elements.crossSelling.preview.label.crossSellingTitle\') }}</h4>\n    <div class="sw-cms-el-preview-cross-selling__slider">\n        <sw-icon\n            name="regular-chevron-left"\n            size="10"\n        />\n\n        \n        {% block sw_cms_element_cross_selling_preview_box %}\n        <div class="sw-cms-el-preview-cross-selling-box">\n            <div class="sw-cms-el-preview-cross-selling-box__image">\n                <img\n                    :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n                    alt=""\n                >\n            </div>\n\n            <div class="sw-cms-el-preview-cross-selling-box__info">\n                <div class="sw-cms-el-preview-cross-selling-box__skeleton-left"></div>\n                <div class="sw-cms-el-preview-cross-selling-box__skeleton-right"></div>\n            </div>\n\n            <div class="sw-cms-el-preview-cross-selling-box__action"></div>\n        </div>\n        {% endblock %}\n\n        <sw-icon\n            name="regular-chevron-right"\n            size="10"\n        />\n    </div>\n</div>\n{% endblock %}\n',computed:{assetFilter:function(){return Shopware.Filter.getByName("asset")}}}},nu0c:function(s,e,n){var i=n("2x3D");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);(0,n("P8hj").default)("3f9d9e1d",i,!0,{})}}]);