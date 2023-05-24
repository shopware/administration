(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[632],{"2+Bm":function(t,n,a){"use strict";a.r(n);var s=Shopware.Mixin,e=Shopware.Data.Criteria;n.default={template:'\n{% block sw_settings_salutation_list %}\n<sw-page class="sw-settings-salutation-list">\n\n    \n    {% block sw_settings_salutation_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="salutation"\n            :placeholder="$tc(\'sw-settings-salutation.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_salutation_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_salutation_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-salutation.general.mainMenuItemGeneral\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_salutation_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading && salutations && total"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onRefresh" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_list_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_salutation_list_actions_create %}\n        <sw-button\n            v-tooltip.bottom="tooltipAdd"\n            class="sw-settings-salutation-list__create"\n            variant="primary"\n            :disabled="!acl.can(\'salutation.creator\')"\n            :router-link="{ name: \'sw.settings.salutation.create\' }"\n        >\n            {{ $tc(\'sw-settings-salutation.general.buttonCreate\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_salutation_list_cardview %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_salutation_list_card_content %}\n            <sw-card\n                position-identifier="sw-settings-salutation-list-content"\n            >\n\n                \n                {% block sw_settings_salutation_list_grid %}\n                <template #grid>\n                    <sw-entity-listing\n                        class="sw-settings-salutation-list-grid"\n                        :repository="salutationRepository"\n                        :is-loading="isLoading"\n                        :items="salutations"\n                        :columns="columns"\n                        identifier="sw-settings-salutation-list"\n                        :sort-by="sortBy"\n                        :sort-direction="sortDirection"\n                        :full-page="false"\n                        detail-route="sw.settings.salutation.detail"\n                        :disable-data-fetching="true"\n                        :show-selection="acl.can(\'salutation.deleter\')"\n                        :allow-edit="acl.can(\'salutation.editor\')"\n                        :allow-inline-edit="acl.can(\'salutation.editor\')"\n                        :allow-view="acl.can(\'salutation.viewer\')"\n                        :allow-delete="acl.can(\'salutation.deleter\')"\n                        @column-sort="onSortColumn"\n                        @page-change="onPageChange"\n                    />\n                </template>\n                {% endblock %}\n\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[s.getByName("listing"),s.getByName("placeholder")],data:function(){return{isLoading:!1,limit:10,salutations:null,sortBy:"salutationKey",sortDirection:"ASC"}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return this.getColumns()},salutationRepository:function(){return this.repositoryFactory.create("salutation")},tooltipAdd:function(){return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("salutation.creator"),showOnDisabledElements:!0}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getList()},getList:function(){var t=this;this.isLoading=!0;var n=new e(this.page,this.limit);n.setTerm(this.term),n.addSorting(e.sort("salutationKey","ASC",!1)),this.salutationRepository.search(n).then((function(n){t.total=n.total,t.salutations=n,t.isLoading=!1}))},getColumns:function(){return[{property:"salutationKey",label:"sw-settings-salutation.list.columnSalutationKey",inlineEdit:"string",routerLink:"sw.settings.salutation.detail",primary:!0},{property:"displayName",label:"sw-settings-salutation.list.columnDisplayName",inlineEdit:"string",primary:!0},{property:"letterName",label:"sw-settings-salutation.list.columnLetterName",inlineEdit:"string"}]}}}}}]);