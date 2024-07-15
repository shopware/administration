(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[21218],{93696:function(){},221218:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(542136);var s={template:'\n{% block sw_category_view %}\n<sw-card-view\n    class="sw-category-view"\n    position-identifier="sw-category-view"\n>\n    \n    {% block sw_category_view_language_info %}\n    <sw-language-info\n        :entity-description="placeholder(category, \'name\', $tc(\'sw-manufacturer.detail.textHeadline\'))"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_view_column_info %}\n    <sw-alert\n        v-if="category.isColumn"\n        class="swag-category-view__column-info"\n        variant="info"\n    >\n        <div class="swag-category-view__column-info-header">\n            {{ $tc(\'sw-category.view.columnInfoHeader\') }}\n        </div>\n        <div class="swag-category-view__column-info-content">\n            {{ $tc(\'sw-category.view.columnInfo\') }}\n        </div>\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_category_view_tabs %}\n    <sw-tabs\n        v-if="!isLoading"\n        position-identifier="sw-category-view"\n        class="sw-customer-detail-page__tabs"\n    >\n        \n        {% block sw_category_view_tabs_general %}\n        <sw-tabs-item\n            class="sw-category-detail__tab-base"\n            :route="{ name: \'sw.category.detail.base\' }"\n            :title="$tc(\'sw-category.view.general\')"\n        >\n            {{ $tc(\'sw-category.view.general\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_category_view_tabs_products %}\n        <sw-tabs-item\n            v-show="isPage && !isCustomEntity"\n            class="sw-category-detail__tab-products"\n            :route="{ name: \'sw.category.detail.products\' }"\n            :title="$tc(\'sw-category.view.products\')"\n        >\n            {{ $tc(\'sw-category.view.products\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        <sw-tabs-item\n            v-show="isCustomEntity"\n            class="sw-category-detail__tab-custom-entity"\n            :route="{ name: \'sw.category.detail.customEntity\' }"\n            :title="$tc(\'sw-category.view.customEntity\')"\n        >\n            {{ $tc(\'sw-category.view.customEntity\') }}\n        </sw-tabs-item>\n\n        \n        {% block sw_category_view_tabs_cms %}\n        <sw-tabs-item\n            v-show="cmsPage || isPage"\n            class="sw-category-detail__tab-cms"\n            :route="{ name: \'sw.category.detail.cms\' }"\n            :title="$tc(\'sw-category.view.cms\')"\n        >\n            {{ $tc(\'sw-category.view.cms\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_category_view_tabs_seo %}\n        <sw-tabs-item\n            v-show="isPage"\n            class="sw-category-detail__tab-seo"\n            :route="{ name: \'sw.category.detail.seo\' }"\n            :title="$tc(\'sw-category.view.seo\')"\n        >\n            {{ $tc(\'sw-category.view.seo\') }}\n        </sw-tabs-item>\n        {% endblock %}\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_category_view_content %}\n    <router-view\n        v-slot="{ Component }"\n    >\n        <component\n            :is="Component"\n            :is-loading="isLoading"\n        />\n    </router-view>\n    {% endblock %}\n</sw-card-view>\n{% endblock %}\n',inject:["acl"],mixins:["placeholder"],props:{isLoading:{type:Boolean,required:!0,default:!1},type:{type:String,required:!1,default:"page"}},computed:{category(){return Shopware.State.get("swCategoryDetail").category},cmsPage(){return"folder"!==this.type&&"link"!==this.type&&Shopware.Store.get("cmsPageState").currentPage},isPage(){return"folder"!==this.type&&"link"!==this.type},isCustomEntity(){return"custom_entity"===this.type}}}},542136:function(e,t,n){var s=n(93696);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),n(745346).Z("7fc87052",s,!0,{})}}]);