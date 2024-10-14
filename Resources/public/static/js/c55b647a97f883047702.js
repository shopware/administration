(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[98223],{705858:function(){},798223:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return l}}),s(753078);let{Mixin:n,Filter:t}=Shopware;var l={template:'\n{% block sw_cms_element_image_slider %}\n<div\n    class="sw-cms-el-image-slider"\n    :class="outsideNavArrows"\n    :style="verticalAlignStyle"\n>\n    \n    {% block sw_cms_element_image_slider_img %}\n    <div\n        class="sw-cms-el-image-slider__image-box"\n        :class="[displayModeClass, navDotsClass]"\n        :style="styles"\n    >\n        \n        <video\n            v-if="activeMedia?.mediaType?.name === \'VIDEO\'"\n            class="sw-cms-el-image-slider__video"\n            :src="activeMedia?.url"\n            controls\n        >\n            {{ $tc(\'global.sw-media-preview-v2.fallbackVideoTagSupport\') }}\n        </video>\n        <img\n            v-else\n            class="sw-cms-el-image-slider__image"\n            :src="imgSrc"\n            alt=""\n        >\n    </div>\n    {% endblock %}\n\n    <template v-if="element.data !== null">\n        \n        {% block sw_cms_element_image_slider_nav %}\n        <div class="sw-cms-el-image-slider__navigation">\n            \n            {% block sw_cms_element_image_slider_nav_dots %}\n            <div\n                v-if="element.config.navigationDots.value !== null"\n                class="sw-cms-el-image-slider__navigation-dots"\n                :class="navDotsClass"\n            >\n                <div class="sw-cms-el-image-slider__navigation-buttons">\n                    <template v-if="sliderItems?.length > 0">\n                        <div\n                            v-for="(sliderItem, index) in sliderItems"\n                            :key="index"\n                            :class="activeButtonClass(sliderItem.media.url)"\n                            class="sw-cms-el-image-slider__navigation-button"\n                            role="button"\n                            tabindex="0"\n                            @click="setSliderItem(sliderItem.media, index)"\n                            @keydown.enter="setSliderItem(sliderItem.media, index)"\n                        ></div>\n                    </template>\n                    <template v-else>\n                        <div class="sw-cms-el-image-slider__navigation-button is--active"></div>\n                        <div class="sw-cms-el-image-slider__navigation-button"></div>\n                        <div class="sw-cms-el-image-slider__navigation-button"></div>\n                    </template>\n                </div>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_image_slider_nav_arrows %}\n            <div\n                v-if="element.config.navigationArrows.value !== null"\n                class="sw-cms-el-image-slider__navigation-arrows"\n                :class="[navArrowsClass, navDotsClass]"\n            >\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-left"\n                    size="24"\n                    @click="setSliderArrowItem(-1)"\n                />\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-right"\n                    size="24"\n                    @click="setSliderArrowItem()"\n                />\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    <template v-else>\n        \n        {% block sw_cms_element_image_slider_nav_default %}\n        <div class="sw-cms-el-image-slider__navigation">\n            <div class="sw-cms-el-image-slider__navigation-arrows is--nav-outside">\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-left"\n                    size="24"\n                />\n                <sw-icon\n                    class="sw-cms-el-image-slider__navigation-button"\n                    name="regular-chevron-right"\n                    size="24"\n                />\n            </div>\n        </div>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],emits:["active-image-change"],mixins:[n.getByName("cms-element")],props:{activeMedia:{type:[Object,null],required:!1,default:null}},data(){return{columnCount:7,columnWidth:90,sliderPos:0,imgPath:"/administration/static/img/cms/preview_mountain_large.jpg",imgSrc:""}},computed:{gridAutoRows(){return`grid-auto-rows: ${this.columnWidth}`},uploadTag(){return`cms-element-media-config-${this.element.id}`},sliderItems(){let e=this.element?.config?.sliderItems,i=this.element?.data?.sliderItems;return e?.source==="mapped"?this.getDemoValue(e.value)||[]:i?.length>0?i:[]},displayModeClass(){return"standard"===this.element.config.displayMode.value?null:`is--${this.element.config.displayMode.value}`},styles(){return"cover"===this.element.config.displayMode.value&&0!==this.element.config.minHeight.value?{"min-height":this.element.config.minHeight.value}:{}},outsideNavArrows(){return"outside"===this.element.config.navigationArrows.value?"has--outside-arrows":null},navDotsClass(){return this.element.config.navigationDots.value?`is--dot-${this.element.config.navigationDots.value}`:null},navArrowsClass(){return this.element.config.navigationArrows.value?`is--nav-${this.element.config.navigationArrows.value}`:null},verticalAlignStyle(){return this.element.config.verticalAlign.value?`align-self: ${this.element.config.verticalAlign.value};`:null},assetFilter(){return t.getByName("asset")}},watch:{sliderItems:{handler(e){e?.length>0?(this.imgSrc=e[0].media.url,this.$emit("active-image-change",e[0].media)):this.imgSrc=this.assetFilter(this.imgPath)},deep:!0},activeMedia(){this.sliderPos=this.activeMedia.sliderIndex,this.imgSrc=this.activeMedia.url}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("image-slider"),this.initElementData("image-slider"),this.sliderItems?.length>0?(this.imgSrc=this.sliderItems[0].media.url,this.$emit("active-image-change",this.sliderItems[this.sliderPos].media)):this.imgSrc=this.assetFilter(this.imgPath)},setSliderItem(e,i){this.imgSrc=e.url,this.sliderPos=i,this.$emit("active-image-change",e,i)},activeButtonClass(e){return{"is--active":this.imgSrc===e}},setSliderArrowItem(e=1){this.sliderItems.length<2||(this.sliderPos+=e,this.sliderPos<0&&(this.sliderPos=this.sliderItems.length-1),this.sliderPos>this.sliderItems.length-1&&(this.sliderPos=0),this.imgSrc=this.sliderItems[this.sliderPos].media.url,this.$emit("active-image-change",this.sliderItems[this.sliderPos].media,this.sliderPos))}}}},753078:function(e,i,s){var n=s(705858);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),s(745346).Z("6b74c599",n,!0,{})}}]);