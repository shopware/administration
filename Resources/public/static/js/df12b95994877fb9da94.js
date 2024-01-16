(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[169],{"1E3i":function(e,i,s){},BTtl:function(e,i,s){"use strict";s.r(i);s("hkkn");var n=Shopware,t=n.Mixin,l=n.Filter;i.default={template:'\n{% block sw_cms_element_image_slider %}\n<div\n    class="sw-cms-el-image-slider"\n    :class="outsideNavArrows"\n    :style="verticalAlignStyle"\n>\n    \n    {% block sw_cms_element_image_slider_img %}\n    <div\n        class="sw-cms-el-image-slider__image-box"\n        :class="[displayModeClass, navDotsClass]"\n        :style="styles"\n    >\n        <img\n            class="sw-cms-el-image-slider__image"\n            :src="imgSrc"\n            alt=""\n        >\n    </div>\n    {% endblock %}\n\n    <template v-if="element.data !== null">\n        \n        {% block sw_cms_element_image_slider_nav %}\n        <div class="sw-cms-el-image-slider__navigation">\n            \n            {% block sw_cms_element_image_slider_nav_dots %}\n            <div\n                v-if="element.config.navigationDots.value !== null"\n                class="sw-cms-el-image-slider__navigation-dots"\n                :class="navDotsClass"\n            >\n                <div class="sw-cms-el-image-slider__navigation-buttons">\n                    <template v-if="sliderItems && sliderItems.length > 0">\n                        <div\n                            v-for="(sliderItem, index) in sliderItems"\n                            :key="index"\n                            :class="activeButtonClass(sliderItem.media.url)"\n                            class="sw-cms-el-image-slider__navigation-button"\n                            role="button"\n                            tabindex="0"\n                            @click="setSliderItem(sliderItem.media, index)"\n                            @keydown.enter="setSliderItem(sliderItem.media, index)"\n                        ></div>\n                    </template>\n                    <template v-else>\n                        <div class="sw-cms-el-image-slider__navigation-button is--active"></div>\n                        <div class="sw-cms-el-image-slider__navigation-button"></div>\n                        <div class="sw-cms-el-image-slider__navigation-button"></div>\n                    </template>\n                </div>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_image_slider_nav_arrows %}\n            <div\n                v-if="element.config.navigationArrows.value !== null"\n                class="sw-cms-el-image-slider__navigation-arrows"\n                :class="[navArrowsClass, navDotsClass]"\n            >\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-left"\n                    size="24"\n                    @click="setSliderArrowItem(-1)"\n                />\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-right"\n                    size="24"\n                    @click="setSliderArrowItem()"\n                />\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    <template v-else>\n        \n        {% block sw_cms_element_image_slider_nav_default %}\n        <div class="sw-cms-el-image-slider__navigation">\n            <div class="sw-cms-el-image-slider__navigation-arrows is--nav-outside">\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-left"\n                    size="24"\n                />\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-right"\n                    size="24"\n                />\n            </div>\n        </div>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',inject:["feature"],mixins:[t.getByName("cms-element")],props:{activeMedia:{type:[Object,null],required:!1,default:null}},data:function(){return{columnCount:7,columnWidth:90,sliderPos:0,imgPath:"/administration/static/img/cms/preview_mountain_large.jpg",imgSrc:""}},computed:{gridAutoRows:function(){return"grid-auto-rows: ".concat(this.columnWidth)},uploadTag:function(){return"cms-element-media-config-".concat(this.element.id)},sliderItems:function(){var e,i,s;return"mapped"===(null===(e=this.element)||void 0===e||null===(i=e.config)||void 0===i||null===(s=i.sliderItems)||void 0===s?void 0:s.source)?this.getDemoValue(this.element.config.sliderItems.value)||[]:this.element.data&&this.element.data.sliderItems&&this.element.data.sliderItems.length>0?this.element.data.sliderItems:[]},displayModeClass:function(){return"standard"===this.element.config.displayMode.value?null:"is--".concat(this.element.config.displayMode.value)},styles:function(){return"cover"===this.element.config.displayMode.value&&this.element.config.minHeight.value&&0!==this.element.config.minHeight.value?{"min-height":this.element.config.minHeight.value}:{}},outsideNavArrows:function(){return"outside"===this.element.config.navigationArrows.value?"has--outside-arrows":null},navDotsClass:function(){return this.element.config.navigationDots.value?"is--dot-".concat(this.element.config.navigationDots.value):null},navArrowsClass:function(){return this.element.config.navigationArrows.value?"is--nav-".concat(this.element.config.navigationArrows.value):null},verticalAlignStyle:function(){return this.element.config.verticalAlign.value?"align-self: ".concat(this.element.config.verticalAlign.value,";"):null},assetFilter:function(){return l.getByName("asset")}},watch:{sliderItems:{handler:function(){this.sliderItems&&this.sliderItems.length>0?(this.imgSrc=this.sliderItems[0].media.url,this.$emit("active-image-change",this.sliderItems[0].media)):this.imgSrc=this.assetFilter(this.imgPath)},deep:!0},activeMedia:function(){this.sliderPos=this.activeMedia.sliderIndex,this.imgSrc=this.activeMedia.url}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("image-slider"),this.initElementData("image-slider"),this.sliderItems&&this.sliderItems.length>0?(this.imgSrc=this.sliderItems[0].media.url,this.$emit("active-image-change",this.sliderItems[this.sliderPos].media)):this.imgSrc=this.assetFilter(this.imgPath)},setSliderItem:function(e,i){this.imgSrc=e.url,this.sliderPos=i,this.$emit("active-image-change",e,i)},activeButtonClass:function(e){return{"is--active":this.imgSrc===e}},setSliderArrowItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.sliderItems.length<2||(this.sliderPos+=e,this.sliderPos<0&&(this.sliderPos=this.sliderItems.length-1),this.sliderPos>this.sliderItems.length-1&&(this.sliderPos=0),this.imgSrc=this.sliderItems[this.sliderPos].media.url,this.$emit("active-image-change",this.sliderItems[this.sliderPos].media,this.sliderPos))}}}},hkkn:function(e,i,s){var n=s("1E3i");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("P8hj").default)("6f9a43bc",n,!0,{})}}]);
//# sourceMappingURL=df12b95994877fb9da94.js.map