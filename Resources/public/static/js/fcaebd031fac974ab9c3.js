(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[370],{34703:function(){},370:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return n}}),i(2673);var n={template:'\n{% block sw_cms_element_gallery_preview %}\n<div class="sw-cms-el-preview-gallery">\n    <div class="sw-cms-el-preview-gallery-preview">\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_mountain_small.jpg\')"\n            alt=""\n        >\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n            alt=""\n        >\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_plant_small.jpg\')"\n            alt=""\n        >\n    </div>\n\n    <sw-cms-el-preview-image-slider class="sw-cms-el-preview-gallery__slider" />\n</div>\n{% endblock %}\n',computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},2673:function(e,s,i){var n=i(34703);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),i(45346).Z("edf2b6f8",n,!0,{})}}]);