(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[8630],{53031:function(){},8630:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return t}}),a(28959);var t={template:'\n{% block sw_landing_page_detail_cms %}\n<div class="sw-landing-page-detail__cms">\n\n    \n    {% block sw_landing_page_detail_cms_layout %}\n    <sw-category-layout-card\n        v-bind="{ cmsPage, isLoading }"\n        :category="landingPage"\n        :page-types="[\'landingpage\']"\n        :headline="$tc(\'sw-landing-page.base.cms.cmsLayoutModalHeadline\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_landing_page_detail_cms_form %}\n    <sw-cms-page-form\n        v-if="cmsPage"\n        :page="cmsPage"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',props:{isLoading:{type:Boolean,required:!0}},computed:{landingPage(){return Shopware.State.get("swCategoryDetail").landingPage},cmsPage(){return Shopware.State.get("cmsPageState").currentPage}}}},28959:function(n,e,a){var t=a(53031);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),a(45346).Z("275bf6ee",t,!0,{})}}]);