(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[205],{"8VHQ":function(e,i,a){},HHkQ:function(e,i,a){"use strict";a.r(i);var n=a("7yzw"),t=a.n(n),o=a("92Mt"),s=a.n(o),d=(a("X0U9"),Shopware.Utils.createId);i.default=Shopware.Component.wrapComponentConfig({template:'<sw-card\n    class="sw-generic-social-media-card"\n    position-identifier="sw-generic-social-media-card"\n    :title="$tc(\'sw-landing-page.base.seo.titleSocialMedia\')"\n>\n    <sw-text-field\n        class="sw-generic-social-media-card__og-title-input"\n        maxlength="255"\n        :value="ogTitle"\n        :label="$tc(\'sw-landing-page.base.seo.labelSocialMediaTitle\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaTitle\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSocialMediaTitle\')"\n        {% if VUE3 %}\n        @update:value="emitOgTitle"\n        {% else %}\n        @input="emitOgTitle"\n        {% endif %}\n    />\n\n    <sw-textarea-field\n        class="sw-generic-social-media-card__og-description-input"\n        :value="ogDescription"\n        maxlength="255"\n        :label="$tc(\'sw-landing-page.base.seo.labelSocialMediaDescription\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaDescription\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderSocialMediaDescription\')"\n        {% if VUE3 %}\n        @update:value="emitOgDescription"\n        {% else %}\n        @input="emitOgDescription"\n        {% endif %}\n    />\n\n    <sw-media-upload-v2\n        class="sw-generic-social-media-card__og-image-upload"\n        variant="regular"\n        :upload-tag="uploadTag"\n        :source="ogImageEntity"\n        :allow-multi-select="false"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        @media-upload-sidebar-open="onOpenMediaModal"\n        @media-upload-remove-image="removeOgImage"\n    />\n\n    <sw-upload-listener\n        class="sw-generic-social-media-card__og-image-upload-listener"\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n\n    <div class="sw-generic-social-media-card__media-preview">\n        <div class="sw-generic-social-media-card__media-preview-title">\n            {{ $tc(\'sw-landing-page.base.seo.socialMediaPreview\') }} &lt;= 600px\n        </div>\n\n        <div\n            class="sw-generic-social-media-card__media-preview-container media-preview--sm"\n        >\n            <img\n                v-if="ogImageEntity?.url"\n                class="sw-generic-social-media-card__media-preview-image"\n                :src="ogImageEntity?.url"\n                :alt="ogImageEntity?.alt"\n            >\n            <div class="sw-generic-social-media-card__media-preview-content">\n                <a\n                    class="sw-generic-social-media-card__media-preview-content-link"\n                    href="#"\n                >example.com</a>\n                <h3 class="sw-generic-social-media-card__media-preview-content-title">\n                    {{ ogTitle }}\n                </h3>\n                <p class="sw-generic-social-media-card__media-preview-content-description">\n                    {{ ogDescription }}\n                </p>\n            </div>\n        </div>\n    </div>\n\n    <div class="sw-generic-social-media-card__media-preview">\n        <div class="sw-generic-social-media-card__media-preview-title">\n            {{ $tc(\'sw-landing-page.base.seo.socialMediaPreview\') }} &gt; 600px\n        </div>\n\n        <div class="sw-generic-social-media-card__media-preview-container media-preview--lg">\n            <img\n                v-if="ogImageEntity?.url"\n                class="sw-generic-social-media-card__media-preview-image"\n                :src="ogImageEntity?.url"\n                :alt="ogImageEntity?.alt"\n            >\n            <div class="sw-generic-social-media-card__media-preview-content">\n                <a\n                    class="sw-generic-social-media-card__media-preview-content-link"\n                    href="#"\n                >\n                    example.com\n                </a>\n                <h3 class="sw-generic-social-media-card__media-preview-content-title">\n                    {{ ogTitle }}\n                </h3>\n            </div>\n        </div>\n    </div>\n\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        class="sw-generic-social-media-card__media-modal"\n        variant="regular"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :allow-multi-select="false"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseMediaModal"\n    />\n</sw-card>\n',inject:["repositoryFactory"],props:{ogTitle:{type:String,required:!1,default:""},ogDescription:{type:String,required:!1,default:""},ogImageId:{type:String,required:!1,default:null}},data:function(){return{ogImageEntity:null,mediaModalIsOpen:!1}},created:function(){this.onCreated()},watch:{ogImageId:{handler:function(){this.loadOgImage()}}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},uploadTag:function(){return"sw-generic-social-media-card-".concat(d().substring(0,8))}},methods:{onCreated:function(){this.loadOgImage()},loadOgImage:function(){var e=this;return t()(s.a.mark((function i(){var a;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e.ogImageId){i.next=2;break}return i.abrupt("return");case 2:if(e.ogImageId!==(null===(a=e.ogImageEntity)||void 0===a?void 0:a.id)){i.next=4;break}return i.abrupt("return");case 4:return i.next=6,e.mediaRepository.get(e.ogImageId);case 6:e.ogImageEntity=i.sent;case 7:case"end":return i.stop()}}),i)})))()},removeOgImage:function(){this.ogImageEntity=null,this.emitMediaId(null)},onOpenMediaModal:function(){this.mediaModalIsOpen=!0},onCloseMediaModal:function(){this.mediaModalIsOpen=!1},onImageUpload:function(e){var i=e.targetId;this.emitMediaId(i)},onSelectionChanges:function(e){if(1===e.length){var i=e[0];this.ogImageEntity=i,this.emitMediaId(i.id)}else this.removeOgImage()},emitMediaId:function(e){this.$emit("update:og-image-id",e)},emitOgTitle:function(e){this.$emit("update:og-title",e)},emitOgDescription:function(e){this.$emit("update:og-description",e)}}})},X0U9:function(e,i,a){var n=a("8VHQ");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("P8hj").default)("e6643654",n,!0,{})}}]);