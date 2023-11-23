(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[204],{"8/O+":function(e,n,t){var a=t("ODfV");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("P8hj").default)("661185ca",a,!0,{})},ODfV:function(e,n,t){},jBtB:function(e,n,t){"use strict";t.r(n);t("8/O+"),n.default=Shopware.Component.wrapComponentConfig({template:'<sw-card\n    class="sw-generic-seo-general-card"\n    position-identifier="sw-generic-seo-general-card"\n    :title="$tc(\'sw-landing-page.base.seo.titleGeneralInformation\')"\n>\n    <sw-text-field\n        class="sw-generic-seo-general-card__seo-meta-title-input"\n        maxlength="255"\n        :value="seoMetaTitle"\n        :label="$tc(\'sw-landing-page.base.seo.labelMetaTitle\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaTitle\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderMetaTitle\')"\n        {% if VUE3 %}\n        @update:value="emitSeoMetaTitle"\n        {% else %}\n        @input="emitSeoMetaTitle"\n        {% endif %}\n    />\n\n    <sw-text-field\n        class="sw-generic-seo-general-card__seo-url-input"\n        maxlength="255"\n        :value="seoUrl"\n        :label="$tc(\'sw-landing-page.base.seo.labelUrl\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderUrl\')"\n        {% if VUE3 %}\n        @update:value="emitSeoUrl"\n        {% else %}\n        @input="emitSeoUrl"\n        {% endif %}\n    />\n\n    <sw-textarea-field\n        class="sw-generic-seo-general-card__seo-meta-description-input"\n        :value="seoMetaDescription"\n        maxlength="255"\n        :label="$tc(\'sw-landing-page.base.seo.labelMetaDescription\')"\n        :help-text="$tc(\'sw-landing-page.base.seo.helpTextMetaDescription\')"\n        :placeholder="$tc(\'sw-landing-page.base.seo.placeholderMetaDescription\')"\n        {% if VUE3 %}\n        @update:value="emitSeoMetaDescription"\n        {% else %}\n        @input="emitSeoMetaDescription"\n        {% endif %}\n    />\n\n    <div class="sw-generic-seo-general-card__google-preview-container">\n        <div class="sw-generic-seo-general-card__google-preview-header">\n            {{ $tc(\'sw-landing-page.base.seo.searchResultPreview\') }}\n        </div>\n\n        <div class="sw-generic-seo-general-card__google-preview">\n            <a\n                class="sw-generic-seo-general-card__google-preview-link"\n                href="#"\n            >\n                https://www.example.com &gt; {{ seoUrl }}\n            </a>\n            <h3 class="sw-generic-seo-general-card__google-preview-title">\n                {{ seoMetaTitle }}\n            </h3>\n            <p class="sw-generic-seo-general-card__google-preview-description">\n                {{ seoMetaDescription }}\n            </p>\n        </div>\n    </div>\n</sw-card>\n',inject:["repositoryFactory"],props:{seoMetaTitle:{type:String,required:!1,default:""},seoMetaDescription:{type:String,required:!1,default:""},seoUrl:{type:String,required:!1,default:""}},methods:{emitSeoMetaTitle:function(e){this.$emit("update:seo-meta-title",e)},emitSeoMetaDescription:function(e){this.$emit("update:seo-meta-description",e)},emitSeoUrl:function(e){this.$emit("update:seo-url",e)}}})}}]);
//# sourceMappingURL=22261ed0fac7bacf9b74.js.map