(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[132],{PyRW:function(t,i,s){},r0KX:function(t,i,s){"use strict";s.r(i);s("vFBV");var e=Shopware,n=e.Filter,o=e.State;i.default={template:'\n{% block sw_cms_block %}\n<div\n    class="sw-cms-block"\n    :class="customBlockClass"\n    :style="blockStyles"\n>\n    <sw-cms-visibility-toggle\n        v-if="isVisible"\n        :text="toggleButtonText"\n        :is-collapsed="isCollapsed"\n        :class="expandedClass"\n        @toggle="toggleVisibility"\n    />\n    \n    {% block sw_cms_block_content %}\n    <div\n        v-if="!isCollapsed || !isVisible"\n        class="sw-cms-block__content"\n        :class="expandedClass"\n        :style="blockPadding"\n    >\n        <slot>\n        \n        {% block sw_cms_block_slot_default %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_block_overlay %}\n    <div\n        v-if="!disabled"\n        class="sw-cms-block__config-overlay"\n        :class="overlayClasses"\n        role="button"\n        tabindex="0"\n        @click="onBlockOverlayClick"\n        @keydown.enter="onBlockOverlayClick"\n    ></div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["cmsService"],props:{block:{type:Object,required:!0,default:function(){return{}}},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},hasWarnings:{type:Boolean,required:!1,default:!1},hasErrors:{type:Boolean,required:!1,default:!1}},data:function(){return{backgroundUrl:null,isCollapsed:!0}},computed:{customBlockClass:function(){var t,i,s={"has--warning":!this.hasErrors&&this.hasWarnings,"has--error":this.hasErrors};return this.block.cssClass?null===(t=this.block)||void 0===t||null===(i=t.cssClass)||void 0===i?void 0:i.split(" ").reduce((function(t,i){return t[i]=!0,t}),s):s},blockStyles:function(){var t=null;return this.block.backgroundMedia&&(t=this.block.backgroundMedia.id?'url("'.concat(this.block.backgroundMedia.url,'")'):"url('".concat(this.assetFilter(this.block.backgroundMedia.url),"')")),{"background-color":this.block.backgroundColor||"transparent","background-image":t,"background-size":this.block.backgroundMediaMode}},blockPadding:function(){return{"padding-top":this.block.marginTop||"0px","padding-bottom":this.block.marginBottom||"0px","padding-left":this.block.marginLeft||"0px","padding-right":this.block.marginRight||"0px"}},overlayClasses:function(){return{"is--active":this.active}},toolbarClasses:function(){return{"is--active":this.active}},assetFilter:function(){return n.getByName("asset")},isVisible:function(){var t=o.get("cmsPageState").currentCmsDeviceView;return"desktop"===t&&!this.block.visibility.desktop||"tablet-landscape"===t&&!this.block.visibility.tablet||"mobile"===t&&!this.block.visibility.mobile},toggleButtonText:function(){return this.$tc("sw-cms.sidebar.contentMenu.visibilityBlockTextButton",!this.isCollapsed)},expandedClass:function(){return{"is--expanded":this.isVisible&&!this.isCollapsed}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.block.backgroundMediaMode||(this.block.backgroundMediaMode="cover")},onBlockOverlayClick:function(){this.block.locked||this.$emit("block-overlay-click")},toggleVisibility:function(){this.isCollapsed=!this.isCollapsed}}}},vFBV:function(t,i,s){var e=s("PyRW");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s("P8hj").default)("2d673c52",e,!0,{})}}]);
//# sourceMappingURL=a62d6062e1a7a8059cdb.js.map