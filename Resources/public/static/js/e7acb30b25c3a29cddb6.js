(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[28],{"6ZhR":function(e,t,n){"use strict";n.r(t);var i=n("J58c"),r=n.n(i),a=n("euUg"),s=n.n(a);n("p7Rc");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var c=Shopware.Filter;t.default={template:'\n{% block sw_image_slider %}\n<div\n    v-if="images.length > 0"\n    class="sw-image-slider"\n    :style="wrapperStyles"\n>\n\n    \n    {% block sw_image_slider_image_container %}\n    <div\n        class="sw-image-slider__image-container"\n        :style="containerStyles"\n    >\n\n        \n        {% block sw_image_slider_image_container_scrollable %}\n        <div\n            class="sw-image-slider__image-scrollable"\n            :style="scrollableContainerStyles"\n        >\n\n            \n            {% block sw_image_slider_images %}\n            <div\n                v-for="(image, index) in images"\n                :key="index"\n                class="sw-image-slider__element-wrapper"\n                :aria-hidden="isHiddenItem(index)"\n                :style="componentStyles"\n            >\n\n                \n                {% block sw_image_slider_image_images_container %}\n                \n                <div\n                    class="sw-image-slider__element-container"\n                    :class="elementClasses(index)"\n                    :style="elementStyles(image, index)"\n                    @click="onSetCurrentItem(index)"\n                >\n\n                    \n                    {% block sw_image_slider_image %}\n                    <img\n                        class="sw-image-slider__element-image"\n                        :class="imageClasses(index)"\n                        :style="[borderStyles(image), imageStyles]"\n                        :src="getImage(image)"\n                        :alt="imageAlt(index)"\n                    >\n                {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_image_slider_element_description %}\n                <div\n                    v-if="hasValidDescription(image)"\n                    class="sw-image-slider__element-description"\n                    :style="componentStyles"\n                >\n                    {{ image.description }}\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_image_slider_image_container_arrows %}\n        <template v-if="showArrows">\n\n            \n            {% block sw_image_slider_image_container_arrow_left %}\n            \n            <div\n                class="sw-image-slider__arrow arrow-left"\n                @click="goToPreviousImage"\n            >\n                <sw-icon name="regular-chevron-left" />\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_image_slider_image_container_arrow_right %}\n            \n            <div\n                class="sw-image-slider__arrow arrow-right"\n                @click="goToNextImage"\n            >\n                <sw-icon name="regular-chevron-right" />\n            </div>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_image_slider_button_container %}\n    <div\n        v-if="showButtons"\n        class="sw-image-slider__buttons"\n        :class="buttonClasses"\n    >\n\n        \n        {% block sw_image_slider_buttons %}\n        <button\n            v-for="(item, index) in buttonList"\n            :key="index"\n            class="sw-image-slider__buttons-element"\n            :class="{ \'is--active\': index === currentPageNumber }"\n            @click="setCurrentPageNumber(index)"\n        >\n            {{ imageAlt(index) }}\n        </button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{images:{type:Array,required:!0},canvasWidth:{type:Number,required:!1,default:0,validator:function(e){return e>=0}},canvasHeight:{type:Number,required:!1,default:0,validator:function(e){return e>=0}},gap:{type:Number,required:!1,default:20,validator:function(e){return e>=0}},elementPadding:{type:Number,required:!1,default:0,validator:function(e){return e>=0}},navigationType:{type:String,required:!1,default:"arrow",validator:function(e){return["arrow","button","all"].includes(e)}},enableDescriptions:{type:Boolean,required:!1,default:!1},overflow:{type:String,required:!1,default:"hidden",validator:function(e){return["hidden","visible"].includes(e)}},rewind:{type:Boolean,required:!1,default:!1},bordered:{type:Boolean,required:!1,default:!0},rounded:{type:Boolean,required:!1,default:!0},autoWidth:{type:Boolean,required:!1,default:!1},itemPerPage:{type:Number,required:!1,default:1},initialIndex:{type:Number,required:!1,default:0},arrowStyle:{type:String,required:!1,default:"inside",validator:function(e){return["inside","outside","none"].includes(e)}},buttonStyle:{type:String,required:!1,default:"outside",validator:function(e){return["inside","outside","none"].includes(e)}},displayMode:{type:String,required:!1,default:"cover",validator:function(e){return["contain","cover","none"].includes(e)}}},data:function(){return{currentPageNumber:0,currentItemIndex:0}},computed:{totalPage:function(){return Math.ceil(this.images.length/this.itemPerPage)},remainder:function(){return this.images.length%this.itemPerPage},buttonList:function(){var e=this;return 1===this.itemPerPage?this.images:this.images.filter((function(t,n){return n%e.itemPerPage==0}))},wrapperStyles:function(){return{width:this.canvasWidth?"".concat(this.canvasWidth,"px"):"100%"}},componentStyles:function(){return{width:this.autoWidth?"auto":"".concat(100/this.images.length,"%")}},containerStyles:function(){var e="outside"===this.arrowStyle?112:0;return{width:this.canvasWidth?"".concat(this.canvasWidth-e,"px"):"calc(100% - ".concat(e,"px)"),overflowX:this.overflow,margin:"outside"===this.arrowStyle?"0 56px":0}},scrollableContainerStyles:function(){if(1===this.itemPerPage||0===this.remainder||this.images.length<=this.itemPerPage)return{width:"".concat(100*this.totalPage,"%"),gap:"".concat(this.gap,"px"),transform:"translateX(-".concat(this.currentPageNumber/this.totalPage*100,"%)")};var e=100/this.images.length,t=this.currentPageNumber===this.totalPage-1?((this.currentPageNumber-1)*this.itemPerPage+this.remainder)*e:this.currentPageNumber*this.itemPerPage*e;return{width:"".concat(100*(this.totalPage-1+this.remainder/this.itemPerPage),"%"),gap:"".concat(this.gap,"px"),transform:"translateX(-".concat(t,"%)")}},imageStyles:function(){return{objectFit:this.displayMode}},buttonClasses:function(){return{"is--button-inside":"inside"===this.buttonStyle}},showButtons:function(){return this.images.length>=2&&this.images.length>this.itemPerPage&&["button","all"].includes(this.navigationType)},showArrows:function(){return this.images.length>this.itemPerPage&&["arrow","all"].includes(this.navigationType)}},watch:{initialIndex:{immediate:!0,handler:function(e){this.onSetCurrentItem(e)}}},methods:{setCurrentPageNumber:function(e){this.currentPageNumber=e},isImageObject:function(e){return"object"===s()(e)},hasValidDescription:function(e){return this.enableDescriptions&&this.isImageObject(e)&&e.hasOwnProperty("description")&&e.description.length>=1},getImage:function(e){var t=this.isImageObject(e)?e.src:e;try{new URL(t)}catch(e){return c.getByName("asset")(t)}return t},imageAlt:function(e){return this.$tc("sw-image-slider.imageAlt",0,{index:e+1,total:this.images.length})},goToPreviousImage:function(){this.currentPageNumber=this.rewind&&0===this.currentPageNumber?this.totalPage-1:Math.max(this.currentPageNumber-1,0),1===this.itemPerPage&&(this.currentItemIndex=this.currentPageNumber,this.$emit("image-change",this.currentPageNumber))},goToNextImage:function(){this.currentPageNumber=this.rewind&&this.currentPageNumber===this.totalPage-1?0:Math.min(this.currentPageNumber+1,this.totalPage-1),1===this.itemPerPage&&(this.currentItemIndex=this.currentPageNumber,this.$emit("image-change",this.currentPageNumber))},elementClasses:function(e){return[{"is--active":e===this.currentItemIndex&&this.itemPerPage>1},{"is--bordered":this.bordered},{"is--rounded":this.rounded}]},elementStyles:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({cursor:t===this.currentItemIndex?"default":"pointer",height:this.canvasHeight?"".concat(this.canvasHeight,"px"):"100%",padding:this.elementPadding?"".concat(this.elementPadding,"px"):0},this.borderStyles(e))},imageClasses:function(e){return{"is--active":e===this.currentItemIndex,"is--auto-width":this.autoWidth}},borderStyles:function(e){return this.hasValidDescription(e)?{borderBottomLeftRadius:0,borderBottomRightRadius:0}:{}},onSetCurrentItem:function(e){e!==this.currentItemIndex&&(this.currentPageNumber=Math.floor(e/this.itemPerPage),this.currentItemIndex=e,this.$emit("image-change",e))},isHiddenItem:function(e){return 1===this.itemPerPage?e!==this.currentItemIndex:this.currentPageNumber===this.totalPage-1?e<this.images.length-this.itemPerPage:this.currentPageNumber*this.itemPerPage>e||e>=(this.currentPageNumber+1)*this.itemPerPage}}}},p7Rc:function(e,t,n){var i=n("zzkr");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("ydqr").default)("de9bb7ec",i,!0,{})},zzkr:function(e,t,n){}}]);