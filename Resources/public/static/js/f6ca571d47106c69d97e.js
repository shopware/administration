(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[203],{EqbA:function(e,a,i){"use strict";i.r(a);var n=i("HZZ/"),t=i.n(n),o=i("hJxD"),s=i.n(o),d=(i("zb5W"),Shopware.Utils.createId);a.default=Shopware.Component.wrapComponentConfig({template:'<sw-card\n    class="sw-generic-social-media-card"\n    position-identifier="sw-generic-social-media-card"\n    :title="$tc(\'sw-landing-page.base.seo.titleSocialMedia\')"\n>\n    <sw-text-field\n        class="sw-generic-social-media-card__og-title-input"\n        maxlength="255"\n        :value="ogTitle"\n        :label="$tc(\'sw-landing-page.base.seo.labelSocialMediaTitle\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaTitle\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSocialMediaTitle\')"\n        @input="emitOgTitle"\n    />\n\n    <sw-textarea-field\n        class="sw-generic-social-media-card__og-description-input"\n        :value="ogDescription"\n        maxlength="255"\n        :label="$tc(\'sw-landing-page.base.seo.labelSocialMediaDescription\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaDescription\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSocialMediaDescription\')"\n        @input="emitOgDescription"\n    />\n\n    <sw-media-upload-v2\n        class="sw-generic-social-media-card__og-image-upload"\n        variant="regular"\n        :upload-tag="uploadTag"\n        :source="ogImageEntity"\n        :allow-multi-select="false"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        @media-upload-sidebar-open="onOpenMediaModal"\n        @media-upload-remove-image="removeOgImage"\n    />\n\n    <sw-upload-listener\n        class="sw-generic-social-media-card__og-image-upload-listener"\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n\n    <div class="sw-generic-social-media-card__media-preview">\n        <div class="sw-generic-social-media-card__media-preview-title">\n            {{ $tc(\'sw-landing-page.base.seo.socialMediaPreview\') }} &lt;= 600px\n        </div>\n\n        <div\n            class="sw-generic-social-media-card__media-preview-container media-preview--sm"\n        >\n            <img\n                v-if="ogImageEntity?.url"\n                class="sw-generic-social-media-card__media-preview-image"\n                :src="ogImageEntity?.url"\n                :alt="ogImageEntity?.alt"\n            >\n            <div class="sw-generic-social-media-card__media-preview-content">\n                <a\n                    class="sw-generic-social-media-card__media-preview-content-link"\n                    href="#"\n                >example.com</a>\n                <h3 class="sw-generic-social-media-card__media-preview-content-title">\n                    {{ ogTitle }}\n                </h3>\n                <p class="sw-generic-social-media-card__media-preview-content-description">\n                    {{ ogDescription }}\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class="sw-generic-social-media-card__media-preview">\n        <div class="sw-generic-social-media-card__media-preview-title">\n            {{ $tc(\'sw-landing-page.base.seo.socialMediaPreview\') }} &gt; 600px\n        </div>\n\n        <div class="sw-generic-social-media-card__media-preview-container media-preview--lg">\n            <img\n                v-if="ogImageEntity?.url"\n                class="sw-generic-social-media-card__media-preview-image"\n                :src="ogImageEntity?.url"\n                :alt="ogImageEntity?.alt"\n            >\n            <div class="sw-generic-social-media-card__media-preview-content">\n                <a\n                    class="sw-generic-social-media-card__media-preview-content-link"\n                    href="#"\n                >\n                    example.com\n                </a>\n                <h3 class="sw-generic-social-media-card__media-preview-content-title">\n                    {{ ogTitle }}\n                </h3>\n            </div>\n        </div>\n    </div>\n\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        class="sw-generic-social-media-card__media-modal"\n        variant="regular"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :allow-multi-select="false"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseMediaModal"\n    />\n</sw-card>\n',inject:["repositoryFactory"],props:{ogTitle:{type:String,required:!1,default:""},ogDescription:{type:String,required:!1,default:""},ogImageId:{type:String,required:!1,default:null}},data:function(){return{ogImageEntity:null,mediaModalIsOpen:!1}},created:function(){this.onCreated()},watch:{ogImageId:{handler:function(){this.loadOgImage()}}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},uploadTag:function(){return"sw-generic-social-media-card-".concat(d().substring(0,8))}},methods:{onCreated:function(){this.loadOgImage()},loadOgImage:function(){var e=this;return t()(s.a.mark((function a(){var i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.ogImageId){a.next=2;break}return a.abrupt("return");case 2:if(e.ogImageId!==(null===(i=e.ogImageEntity)||void 0===i?void 0:i.id)){a.next=4;break}return a.abrupt("return");case 4:return a.next=6,e.mediaRepository.get(e.ogImageId);case 6:e.ogImageEntity=a.sent;case 7:case"end":return a.stop()}}),a)})))()},removeOgImage:function(){this.ogImageEntity=null,this.emitMediaId(null)},onOpenMediaModal:function(){this.mediaModalIsOpen=!0},onCloseMediaModal:function(){this.mediaModalIsOpen=!1},onImageUpload:function(e){var a=e.targetId;this.emitMediaId(a)},onSelectionChanges:function(e){if(1===e.length){var a=e[0];this.ogImageEntity=a,this.emitMediaId(a.id)}else this.removeOgImage()},emitMediaId:function(e){this.$emit("update:og-image-id",e)},emitOgTitle:function(e){this.$emit("update:og-title",e)},emitOgDescription:function(e){this.$emit("update:og-description",e)}}})},xgwg:function(e,a,i){},zb5W:function(e,a,i){var n=i("xgwg");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("ydqr").default)("3ad36275",n,!0,{})}}]);