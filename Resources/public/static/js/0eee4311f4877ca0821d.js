(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[5625],{171075:function(){},305625:function(i,s,e){"use strict";e.r(s),e.d(s,{default:function(){return n}}),e(318645);var n={template:'\n{% block sw_cms_preview_image_gallery %}\n<div class="sw-cms-preview-gallery">\n    <div class="sw-cms-preview-gallery-preview">\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_mountain_small.jpg\')"\n            alt=""\n        >\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_glasses_small.jpg\')"\n            alt=""\n        >\n        <img\n            :src="assetFilter(\'/administration/static/img/cms/preview_plant_small.jpg\')"\n            alt=""\n        >\n    </div>\n\n    <sw-cms-preview-image-slider />\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,computed:{assetFilter(){return Shopware.Filter.getByName("asset")}}}},318645:function(i,s,e){var n=e(171075);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[i.id,n,""]]),n.locals&&(i.exports=n.locals),e(745346).Z("23a861c1",n,!0,{})}}]);