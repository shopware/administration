(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[172],{"0Pl8":function(e,i,t){var n=t("xcsl");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("P8hj").default)("8d175f14",n,!0,{})},aHED:function(e,i,t){"use strict";t.r(i);var n=t("D03b"),l=(t("0Pl8"),Shopware),a=l.Mixin,s=l.Filter;i.default={template:'\n{% block sw_cms_element_image %}\n<div\n    class="sw-cms-el-image"\n    :style="horizontalAlign">\n    <div\n        class="sw-cms-el-image__content"\n        :class="displayModeClass"\n        :style="styles"\n    >\n        \n        {% block sw_cms_element_image_content %}\n        <img\n            :src="mediaUrl"\n            :style="imgStyles"\n            alt=""\n        >\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',inject:["feature"],mixins:[a.getByName("cms-element")],computed:{displayModeClass:function(){return"standard"===this.element.config.displayMode.value?null:"is--".concat(this.element.config.displayMode.value)},styles:function(){return{"min-height":"cover"===this.element.config.displayMode.value&&this.element.config.minHeight.value&&0!==this.element.config.minHeight.value?this.element.config.minHeight.value:"340px"}},imgStyles:function(){return{"align-self":this.element.config.verticalAlign.value||null}},horizontalAlign:function(){var e;return{"justify-content":(null===(e=this.element.config.horizontalAlign)||void 0===e?void 0:e.value)||null}},mediaUrl:function(){var e=n.a.MEDIA.previewMountain.slice(n.a.MEDIA.previewMountain.lastIndexOf("/")+1),i=this.assetFilter("administration/static/img/cms/".concat(e)),t=this.element.data.media,l=this.element.config.media;if("mapped"===l.source){var a=this.getDemoValue(l.value);return null!=a&&a.url?a.url:i}if("default"===l.source){var s,o,c=null!==(s=null===(o=l.value)||void 0===o?void 0:o.slice(l.value.lastIndexOf("/")+1))&&void 0!==s?s:"";return this.assetFilter("/administration/static/img/cms/".concat(c))}return null!=t&&t.id?this.feature.isActive("MEDIA_PATH")||this.feature.isActive("v6.6.0.0")?this.element.data.media.url:"".concat(this.element.data.media.url,"?").concat(Shopware.Utils.createId()):null!=t&&t.url?this.assetFilter(l.url):i},assetFilter:function(){return s.getByName("asset")},mediaConfigValue:function(){var e,i,t;return null===(e=this.element)||void 0===e||null===(i=e.config)||void 0===i||null===(t=i.sliderItems)||void 0===t?void 0:t.value}},watch:{cmsPageState:{deep:!0,handler:function(){this.$forceUpdate()}},mediaConfigValue:function(e){var i,t,n,l,a,s,o=null===(i=this.element)||void 0===i||null===(t=i.data)||void 0===t||null===(n=t.media)||void 0===n?void 0:n.id;"static"===(null===(l=this.element)||void 0===l||null===(a=l.config)||void 0===a||null===(s=a.media)||void 0===s?void 0:s.source)&&o&&e!==o&&(this.element.config.media.value=o)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("image"),this.initElementData("image")}}}},xcsl:function(e,i,t){}}]);