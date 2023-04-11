(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[431],{"7iXM":function(n,e,t){var a=t("8wEo");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t("ydqr").default)("09f7d5ac",a,!0,{})},"8wEo":function(n,e,t){},"bt/N":function(n,e,t){"use strict";t.r(e);t("7iXM");var a=Shopware.Mixin,l=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_list %}\n\n{% block sw_settings_language_index %}\n<sw-page class="sw-settings-language-list">\n\n    \n    {% block sw_settings_language_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="language"\n            :placeholder="$tc(\'sw-settings-language.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_list_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_settings_language_list_smart_bar_header_title %}\n        <h2>\n\n            \n            {% block sw_settings_language_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-language.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_language_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n\n        </h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_language_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: allowCreate,\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-language-list__button-create"\n            variant="primary"\n            :disabled="!allowCreate"\n            :router-link="{ name: \'sw.settings.language.create\' }"\n        >\n            {{ $tc(\'sw-settings-language.list.buttonAddLanguage\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_list_content %}\n    <template #content>\n        <sw-entity-listing\n            key="language-listing"\n            class="sw-settings-language-list-grid"\n            detail-route="sw.settings.language.detail"\n            :is-loading="isLoading"\n            :repository="languageRepository"\n            :columns="getColumns"\n            :items="languages"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            :disable-data-fetching="true"\n            :allow-view="allowView"\n            :allow-edit="allowEdit"\n            :allow-inline-edit="allowInlineEdit"\n            :allow-delete="allowDelete"\n            @column-sort="onSortColumn"\n            @page-change="onPageChange"\n        >\n\n            \n            {% block sw_settings_language_list_content_list_content %}\n            \n            {% block sw_settings_language_list_content_list_columns %}\n            \n            {% block sw_settings_language_list_content_list_column_name %}\n            <template #column-name="{ item, column, compact, isInlineEdit }">\n                <sw-field\n                    v-if="isInlineEdit"\n                    v-model="item.name"\n                    :size="compact ? \'small\' : \'default\'"\n                />\n                <router-link\n                    v-else\n                    :title="$tc(\'sw-settings-language.list.contextMenuEdit\')"\n                    :to="{ name: \'sw.settings.language.detail\', params: { id: item.id } }"\n                >\n                    {{ item.name }}\n                </router-link>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_settings_language_list_content_list_column_locale %}\n            <template #column-locale="{ item, column, compact, isInlineEdit }">\n                {{ item.locale.translated.name }}, {{ item.locale.translated.territory }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_settings_language_list_content_list_column_id %}\n            <template #column-id="{ item, column, compact, isInlineEdit }">\n                <sw-icon\n                    v-if="isDefault(item.id)"\n                    name="regular-checkmark-xs"\n                    small\n                    class="is--default"\n                />\n                <div v-else></div>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_settings_language_list_content_list_column_parent %}\n            <template #column-parent="{ item, column, compact, isInlineEdit }">\n                {{ getParentName(item) }}\n            </template>\n            {% endblock %}\n            {% endblock %}\n\n            \n            {% block sw_settings_language_list_content_list_delete %}\n            \n            {% block sw_settings_language_list_content_list_delete_action %}\n            <template #delete-action="{ item, showDelete }">\n                <sw-context-menu-item\n                    v-tooltip.bottom="tooltipDelete(item.id)"\n                    class="sw-settings-language-list__delete-action"\n                    variant="danger"\n                    :disabled="isDefault(item.id) || !allowDelete"\n                    @click="showDelete(item.id)"\n                >\n                    {{ $tc(\'global.default.delete\') }}\n                </sw-context-menu-item>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_settings_language_list_content_list_delete_confirm_action %}\n            <template #delete-confirm-text="{ item }">\n                {{ $tc(\'sw-settings-language.list.textDeleteConfirm\', 1, { name: item.name } ) }}\n            </template>\n            {% endblock %}\n            {% endblock %}\n            {% endblock %}\n\n        </sw-entity-listing>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_language_list_grid_sidebar %}\n    <template #sidebar>\n        <sw-sidebar :propagate-width="true">\n\n            \n            {% block sw_settings_language_list_grid_sidebar_filter %}\n            <sw-sidebar-item\n                icon="regular-filter"\n                :title="$tc(\'sw-settings-language.list.titleSidebarFilter\')"\n            >\n                <sw-collapse expand-on-loading>\n\n                    \n                    {% block sw_settings_language_list_grid_sidebar_filter_header %}\n                    <template #header="{ expanded }">\n                        <div class="sw-settings-language-list__collapse-header">\n\n                            \n                            {% block sw_settings_language_list_grid_sidebar_filter_header_title %}\n                            <h4 class="sw-settings-language-list__collapse-title">\n                                {{ $tc(\'sw-settings-language.list.titleSidebarQuickFilter\') }}\n                            </h4>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_language_list_grid_sidebar_filter_header_icon %}\n                            \n                            {% block sw_settings_language_list_grid_sidebar_filter_header_icon_expanded %}\n                            <sw-icon\n                                v-if="expanded"\n                                key="filter-collapse-expanded-indicator"\n                                class="sw-media-collapse__button"\n                                name="regular-chevron-down-xxs"\n                                size="12px"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_language_list_grid_sidebar_filter_header_icon_not_expanded %}\n                            <sw-icon\n                                v-else\n                                key="filter-collapse-expanded-indicator"\n                                class="sw-media-collapse__button"\n                                name="regular-chevron-right-xxs"\n                                size="12px"\n                            />\n                            {% endblock %}\n                            {% endblock %}\n\n                        </div>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_language_list_grid_sidebar_filter_content %}\n                    <template #content>\n\n                        \n                        {% block sw_settings_language_list_grid_sidebar_filter_content_root_languages %}\n                        <sw-field\n                            v-model="filterRootLanguages"\n                            type="switch"\n                            class="sw-settings-language-list__filterField"\n                            :label="$tc(\'sw-settings-language.list.textFilterRootLanguages\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_language_list_grid_sidebar_filter_content_inherited_languages %}\n                        <sw-field\n                            v-model="filterInheritedLanguages"\n                            type="switch"\n                            class="sw-settings-language-list__filterField"\n                            :label="$tc(\'sw-settings-language.list.textFilterInheritedLanguages\')"\n                        />\n                        {% endblock %}\n\n                    </template>\n                    {% endblock %}\n\n                </sw-collapse>\n            </sw-sidebar-item>\n            {% endblock %}\n\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n\n</sw-page>\n    {% endblock %}\n{% endblock %}\n',inject:["repositoryFactory","acl","feature"],mixins:[a.getByName("listing"),a.getByName("notification")],data:function(){return{languages:null,parentLanguages:null,total:0,filterRootLanguages:!1,filterInheritedLanguages:!1,isLoading:!0,sortBy:"name",sortDirection:"DESC"}},metaInfo:function(){return{title:this.$createTitle()}},computed:{listingCriteria:function(){var n=new l(this.page,this.limit);return n.addAssociation("locale"),n.addAssociation("translationCode"),this.sortBy&&n.addSorting(l.sort(this.sortBy,this.sortDirection)),this.filterRootLanguages&&n.addFilter(l.equals("parentId",null)),this.filterInheritedLanguages&&n.addFilter(l.not("AND",[l.equals("parentId",null)])),n},languageRepository:function(){return this.repositoryFactory.create("language")},getColumns:function(){return[{property:"name",label:"sw-settings-language.list.columnName",dataIndex:"name",inlineEdit:!0},{property:"locale",dataIndex:"locale.id",label:"sw-settings-language.list.columnLocaleName"},{property:"translationCode.code",label:"sw-settings-language.list.columnIsoCode"},{property:"parent",dataIndex:"parent.id",label:"sw-settings-language.list.columnInherit"},{property:"id",label:"sw-settings-language.list.columnDefault"}]},allowCreate:function(){return this.acl.can("language.creator")},allowView:function(){return this.acl.can("language.viewer")},allowEdit:function(){return this.acl.can("language.editor")},allowInlineEdit:function(){return this.acl.can("language.editor")},allowDelete:function(){return this.acl.can("language.deleter")}},methods:{getList:function(){var n=this;return this.isLoading=!0,this.languageRepository.search(this.listingCriteria).then((function(e){n.total=e.total||n.total;var t=new l(1,n.limit),a={};return e.forEach((function(n){n.parentId&&(a[n.parentId]=!0)})),t.setIds(Object.keys(a)),n.languageRepository.search(t).then((function(t){n.languages=e,n.parentLanguages=t,n.isLoading=!1}))}))},getParentName:function(n){return null===n.parentId?"-":this.parentLanguages.get(n.parentId).name},isDefault:function(n){return!!Shopware.Context.api.systemLanguageId&&Shopware.Context.api.systemLanguageId.includes(n)},tooltipDelete:function(n){return this.acl.can("language.deleter")||this.isDefault(n)?{message:"",disabled:!0}:{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("language.deleter"),showOnDisabledElements:!0}}}}}}]);