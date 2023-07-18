(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[166],{FrVk:function(e,i,n){"use strict";n.r(i);var t=n("aohe"),l=(n("jn0Q"),Shopware),a=l.Mixin,s=l.Filter;i.default={template:'\n{% block sw_cms_element_image_gallery %}\n<div\n    class="sw-cms-el-image-gallery"\n    :class="[galleryPositionClass, currentDeviceViewClass]"\n    :style="verticalAlignStyle"\n>\n\n    \n    {% block sw_cms_element_image_gallery_grid %}\n    <div\n        ref="galleryItemHolder"\n        class="sw-cms-el-image-gallery__grid"\n    >\n\n        <template v-if="mediaUrls && mediaUrls.length">\n            <div class="sw-cms-el-image-gallery__item-holder">\n                \n                {% block sw_cms_element_image_gallery_selection %}\n                \n                <sw-media-list-selection-item-v2\n                    v-for="(sliderItem, index) in mediaUrls"\n                    v-if="index < galleryLimit"\n                    :key="index"\n                    :item="sliderItem.media"\n                    :class="activeMediaClass(sliderItem.media)"\n                    hide-actions\n                    hide-tooltip\n                    @click="onChangeGalleryImage(sliderItem.media, index)"\n                />\n                {% endblock %}\n            </div>\n        </template>\n\n        <template v-else>\n            \n            {% block sw_cms_element_image_gallery_empty %}\n            <div class="sw-cms-el-image-gallery__item-holder">\n                <img\n                    v-for="mediaItem in getPlaceholderItems()"\n                    :key="mediaItem.url"\n                    class="sw-cms-el-image-gallery__item-placeholder"\n                    :src="mediaItem.url"\n                    alt=""\n                >\n            </div>\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_cms_element_image_gallery_nav_arrow %}\n        <div\n            v-if="element.config.sliderItems.value.length > galleryLimit"\n            class="sw-cms-el-image-gallery__grid-arrow"\n        >\n            <sw-icon\n                name="regular-chevron-down"\n                size="20"\n            />\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_gallery_slider %}\n    <sw-cms-el-image-slider\n        :element="element"\n        :active-media="activeMedia"\n        @active-image-change="onChangeGalleryImage"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',mixins:[a.getByName("cms-element")],data:function(){return{galleryLimit:3,activeMedia:null}},computed:{currentDeviceView:function(){return this.cmsPageState.currentCmsDeviceView},galleryPositionClass:function(){return"is--preview-".concat(this.element.config.galleryPosition.value)},currentDeviceViewClass:function(){return this.currentDeviceView?"is--".concat(this.currentDeviceView):null},verticalAlignStyle:function(){return this.element.config.verticalAlign.value?"align-content: ".concat(this.element.config.verticalAlign.value,";"):null},mediaUrls:function(){var e,i,n,t=null===(e=this.element)||void 0===e?void 0:e.config;return t&&"default"!==t.source?"mapped"===t.source?this.getDemoValue(t.sliderItems.value)||[]:(null===(i=this.element)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.sliderItems)||[]:[]},isProductPage:function(){var e,i,n;return"product_detail"===(null!==(e=null===(i=this.cmsPageState)||void 0===i||null===(n=i.currentPage)||void 0===n?void 0:n.type)&&void 0!==e?e:"")},assetFilter:function(){return s.getByName("asset")}},watch:{currentDeviceView:function(){var e=this;"mobile"===this.currentDeviceView&&(this.galleryLimit=0),setTimeout((function(){e.setGalleryLimit()}),400)},"element.config.galleryPosition.value":{deep:!0,handler:function(){var e=this;this.$nextTick((function(){e.setGalleryLimit()}))}},"element.config.sliderItems.value":{handler:function(e){var i=this;e?this.$nextTick((function(){i.setGalleryLimit()})):this.element.config.sliderItems.value=[]}}},created:function(){this.createdComponent()},mounted:function(){this.mountedComponent()},methods:{createdComponent:function(){var e,i,n,t,l;this.initElementConfig("image-gallery"),this.initElementData("image-gallery"),!this.isProductPage||null!==(e=this.element)&&void 0!==e&&null!==(i=e.translated)&&void 0!==i&&null!==(n=i.config)&&void 0!==n&&n.sliderItems||null!==(t=this.element)&&void 0!==t&&null!==(l=t.data)&&void 0!==l&&l.sliderItems||(this.element.config.sliderItems.source="mapped",this.element.config.sliderItems.value="product.media",this.element.config.navigationDots.value="inside",this.element.config.zoom.value=!0,this.element.config.fullScreen.value=!0,this.element.config.displayMode.value="contain",this.element.config.minHeight.value="430px")},mountedComponent:function(){this.setGalleryLimit()},getPlaceholderItems:function(){var e,i,n=this;if("default"!==(null===(e=this.element)||void 0===e||null===(i=e.config)||void 0===i?void 0:i.source)){var l=t.a.MEDIA.previewMountain.slice(t.a.MEDIA.previewMountain.lastIndexOf("/")+1),a=t.a.MEDIA.previewGlasses.slice(t.a.MEDIA.previewGlasses.lastIndexOf("/")+1),s=t.a.MEDIA.previewPlant.slice(t.a.MEDIA.previewPlant.lastIndexOf("/")+1);return[{url:this.assetFilter("administration/static/img/cms/".concat(l))},{url:this.assetFilter("administration/static/img/cms/".concat(a))},{url:this.assetFilter("administration/static/img/cms/".concat(s))}]}return this.element.config.sliderItems.value.map((function(e){var i=e.fileName.slice(e.fileName.lastIndexOf("/")+1);return{url:n.assetFilter("/administration/static/img/cms/".concat(i))}}))},onChangeGalleryImage:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.sliderIndex=i,this.activeMedia=e},activeMediaClass:function(e){return this.activeMedia?{"is--active":e.id===this.activeMedia.id}:null},setGalleryLimit:function(){if(0!==this.element.config.sliderItems.value.length){var e=0,i=0;"underneath"===this.element.config.galleryPosition.value?(e=this.$refs.galleryItemHolder.offsetWidth-36,i=92):(e=this.$refs.galleryItemHolder.offsetHeight,i=64),this.galleryLimit=Math.floor(e/(i+8))}}}}},jn0Q:function(e,i,n){var t=n("sGh+");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n("ydqr").default)("78408e88",t,!0,{})},"sGh+":function(e,i,n){}}]);