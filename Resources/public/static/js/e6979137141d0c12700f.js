(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[140],{"5c72":function(e,t,n){"use strict";n.r(t);var r=n("J58c"),i=n.n(r);n("Pl9f");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Shopware.Mixin,o=Shopware.Data.Criteria;t.default={template:'\n{% block sw_cms_page_select %}\n<div class="sw-cms-page-select">\n    <sw-entity-single-select\n        v-bind="bind"\n        ref="component"\n        v-model="currentValue"\n        class="sw-cms-page-select-box"\n        entity="cms_page"\n        :criteria="pageTypeCriteria"\n        show-clearable-button\n    />\n</div>\n{% endblock %}\n',inject:["cmsService"],mixins:[c.getByName("sw-inline-snippet")],props:{pageType:{type:String,required:!0},value:{type:String,required:!1,default:null}},data:function(){return{currentValue:this.value}},computed:{bind:function(){return s(s({},this.$attrs),this.translations)},translations:function(){return this.getTranslations()},pageTypeCriteria:function(){var e=new o(1,25);return e.addFilter(o.equals("type",this.pageType)),e}},watch:{currentValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(){this.currentValue=this.value}},methods:{getTranslations:function(){var e=this,t={};return["label","placeholder","helpText"].forEach((function(n){e.$attrs[n]&&""!==e.$attrs[n]&&(t[n]=e.getInlineSnippet(e.$attrs[n]))})),t}}}},Pl9f:function(e,t,n){var r=n("jk4q");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("ydqr").default)("774eeb84",r,!0,{})},jk4q:function(e,t,n){}}]);