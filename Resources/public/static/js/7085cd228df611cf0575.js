(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[66133],{597596:function(){},766133:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var n=i(796701);i(301914);let{Mixin:l,Filter:s}=Shopware;var a={template:'\n{% block sw_cms_element_image %}\n<div\n    class="sw-cms-el-image"\n    :style="horizontalAlign">\n    <div\n        class="sw-cms-el-image__content"\n        :class="displayModeClass"\n        :style="styles"\n    >\n        \n        {% block sw_cms_element_image_content %}\n        <img\n            :src="mediaUrl"\n            :style="imgStyles"\n            alt=""\n        >\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',inject:["feature"],mixins:[l.getByName("cms-element")],computed:{displayModeClass(){return"standard"===this.element.config.displayMode.value?null:`is--${this.element.config.displayMode.value}`},styles(){return{"min-height":"cover"===this.element.config.displayMode.value&&this.element.config.minHeight.value&&0!==this.element.config.minHeight.value?this.element.config.minHeight.value:"340px"}},imgStyles(){return{"align-self":this.element.config.verticalAlign.value||null}},horizontalAlign(){return{"justify-content":this.element.config.horizontalAlign?.value||null}},mediaUrl(){let e=n.Z.MEDIA.previewMountain.slice(n.Z.MEDIA.previewMountain.lastIndexOf("/")+1),t=this.assetFilter(`administration/static/img/cms/${e}`),i=this.element.data.media,l=this.element.config.media;if("mapped"===l.source){let e=this.getDemoValue(l.value);return e?.url?e.url:t}if("default"===l.source){let e=l.value?.slice(l.value.lastIndexOf("/")+1)??"";return this.assetFilter(`/administration/static/img/cms/${e}`)}return i?.id?this.element.data.media.url:i?.url?this.assetFilter(l.url):t},assetFilter(){return s.getByName("asset")},mediaConfigValue(){return this.element?.config?.sliderItems?.value}},watch:{cmsPageState:{deep:!0,handler(){this.$forceUpdate()}},mediaConfigValue(e){let t=this.element?.data?.media?.id;this.element?.config?.media?.source==="static"&&t&&e!==t&&(this.element.config.media.value=t)}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("image"),this.initElementData("image")}}}},301914:function(e,t,i){var n=i(597596);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),i(745346).Z("121342d4",n,!0,{})}}]);