(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[510],{FWmo:function(n,e,a){"use strict";a.r(e);var i=Shopware.Mixin;e.default={template:'\n{% block sw_landing_page_view %}\n<sw-card-view\n    class="sw-landing_page-view"\n    position-identifier="sw-landing-page-view"\n>\n\n    \n    {% block sw_landing_page_view_language_info %}\n    <sw-language-info\n        :entity-description="placeholder(landingPage, \'name\', $tc(\'sw-manufacturer.detail.textHeadline\'))"\n    />\n    {% endblock %}\n\n    \n    {% block sw_landing_page_view_tabs %}\n    <sw-tabs\n        v-if="!isLoading"\n        class="sw-customer-detail-page__tabs"\n        position-identifier="sw-landing-page-view"\n    >\n\n        \n        {% block sw_landing_page_view_tabs_general %}\n        <sw-tabs-item\n            class="sw-category-detail__tab-base"\n            :route="{ name: \'sw.category.landingPageDetail.base\' }"\n            :title="$tc(\'sw-landing-page.view.general\')"\n        >\n            {{ $tc(\'sw-landing-page.view.general\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_landing_page_view_tabs_cms %}\n        <sw-tabs-item\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'landing_page.editor\'),\n                showOnDisabledElements: true\n            }"\n            :disabled="!acl.can(\'landing_page.editor\')"\n            class="sw-landing-page-detail__tab-cms"\n            :route="{ name: \'sw.category.landingPageDetail.cms\' }"\n            :title="$tc(\'sw-landing-page.view.cms\')"\n        >\n            {{ $tc(\'sw-landing-page.view.cms\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_landing_page_view_content %}\n    <router-view :is-loading="isLoading" />\n    {% endblock %}\n\n</sw-card-view>\n{% endblock %}\n',inject:["acl"],mixins:[i.getByName("placeholder")],props:{isLoading:{type:Boolean,required:!0,default:!1}},computed:{landingPage:function(){return Shopware.State.get("swCategoryDetail").landingPage},cmsPage:function(){return Shopware.State.get("cmsPageState").currentPage}}}}}]);