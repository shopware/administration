(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[80569],{505505:function(){},380569:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return t}}),a(756499);var t=Shopware.Component.wrapComponentConfig({template:'<sw-card\n    class="sw-generic-seo-general-card"\n    position-identifier="sw-generic-seo-general-card"\n    :title="$tc(\'sw-landing-page.base.seo.titleGeneralInformation\')"\n>\n    <sw-text-field\n        class="sw-generic-seo-general-card__seo-meta-title-input"\n        maxlength="255"\n        :value="seoMetaTitle"\n        :label="$tc(\'sw-landing-page.base.seo.labelMetaTitle\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaTitle\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderMetaTitle\')"\n        @update:value="emitSeoMetaTitle"\n    />\n\n    <sw-text-field\n        class="sw-generic-seo-general-card__seo-url-input"\n        maxlength="255"\n        :value="seoUrl"\n        :label="$tc(\'sw-landing-page.base.seo.labelUrl\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderUrl\')"\n        @update:value="emitSeoUrl"\n    />\n\n    <sw-textarea-field\n        class="sw-generic-seo-general-card__seo-meta-description-input"\n        :value="seoMetaDescription"\n        maxlength="255"\n        :label="$tc(\'sw-landing-page.base.seo.labelMetaDescription\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaDescription\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderMetaDescription\')"\n        @update:value="emitSeoMetaDescription"\n    />\n\n    <div class="sw-generic-seo-general-card__google-preview-container">\n        <div class="sw-generic-seo-general-card__google-preview-header">\n            {{ $tc(\'sw-landing-page.base.seo.searchResultPreview\') }}\n        </div>\n\n        <div class="sw-generic-seo-general-card__google-preview">\n            <a\n                class="sw-generic-seo-general-card__google-preview-link"\n                href="#"\n            >\n                https://www.example.com &gt; {{ seoUrl }}\n            </a>\n            <h3 class="sw-generic-seo-general-card__google-preview-title">\n                {{ seoMetaTitle }}\n            </h3>\n            <p class="sw-generic-seo-general-card__google-preview-description">\n                {{ seoMetaDescription }}\n            </p>\n        </div>\n    </div>\n</sw-card>\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],props:{seoMetaTitle:{type:String,required:!1,default:""},seoMetaDescription:{type:String,required:!1,default:""},seoUrl:{type:String,required:!1,default:""}},methods:{emitSeoMetaTitle(e){this.$emit("update:seo-meta-title",e)},emitSeoMetaDescription(e){this.$emit("update:seo-meta-description",e)},emitSeoUrl(e){this.$emit("update:seo-url",e)}}})},756499:function(e,n,a){var t=a(505505);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),a(745346).Z("33d31476",t,!0,{})}}]);