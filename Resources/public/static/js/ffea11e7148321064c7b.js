(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[617],{hKzr:function(t,e,n){"use strict";n.r(e);var s=n("7yzw"),r=n.n(s),o=n("92Mt"),i=n.n(o),a=Shopware.Mixin,l=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_customer_group_list %}\n<sw-page class="sw-settings-customer-group-list">\n\n    \n    {% block sw_settings_customer_group_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="customer_group"\n            :placeholder="$tc(\'sw-settings-customer-group.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_customer_group_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_customer_group_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-customer-group.general.mainMenuItemGeneral\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_customer_group_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading && customerGroups && total"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onRefresh" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_list_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_customer_group_list_actions_create %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'customer_groups.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-customer-group-list__create"\n            variant="primary"\n            :disabled="!acl.can(\'customer_groups.creator\')"\n            :router-link="{ name: \'sw.settings.customer.group.create\' }"\n        >\n            {{ $tc(\'sw-settings-customer-group.general.buttonCreate\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_list_cardview %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_customer_group_list_card_content %}\n            <sw-card\n                position-identifier="sw-settings-customer-group-list"\n            >\n\n                \n                {% block sw_settings_customer_group_list_grid %}\n                <template #grid>\n                    <sw-entity-listing\n                        v-if="isLoading || entitySearchable"\n                        ref="listing"\n                        class="sw-settings-customer-group-list-grid"\n                        identifier="sw-settings-customer-group-list"\n                        detail-route="sw.settings.customer.group.detail"\n                        :repository="customerGroupRepository"\n                        :criteria-limit="limit"\n                        :is-loading="isLoading"\n                        :items="customerGroups"\n                        :columns="columns"\n                        :sort-by="currentSortBy"\n                        :sort-direction="sortDirection"\n                        :full-page="false"\n                        :allow-view="acl.can(\'customer_groups.viewer\')"\n                        :allow-edit="acl.can(\'customer_groups.editor\')"\n                        :allow-inline-edit="acl.can(\'customer_groups.editor\')"\n                        :allow-delete="acl.can(\'customer_groups.deleter\')"\n                        :show-selection="acl.can(\'customer_groups.deleter\')"\n                        @column-sort="onSortColumn"\n                        @page-change="onPageChange"\n                    >\n\n                        <template #bulk-modal-delete-items>\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="deleteCustomerGroups"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-button>\n                        </template>\n\n                        <template #delete-action="{ item }">\n                            <sw-context-menu-item\n                                class="sw-settings-customer-group-list-grid__delete-action"\n                                variant="danger"\n                                :disabled="!acl.can(\'customer_groups.deleter\')"\n                                @click="onContextMenuDelete(item)"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-context-menu-item>\n                        </template>\n\n                        <template #delete-modal-delete-item="{ item }">\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="deleteCustomerGroup(item)"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-button>\n                        </template>\n\n                        \n                        {% block sw_settings_customer_group_list_grid_column_display_gross %}\n                        <template #column-displayGross="{ item }">\n                            \n                            {% block sw_settings_customer_group_list_grid_column_display_gross_inner %}\n                            {{ $tc(\'sw-settings-customer-group.detail.fieldDisplayGrossValues\', item.displayGross) }}\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-entity-listing>\n                </template>\n                {% endblock %}\n\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n\n        \n        {% block sw_settings_customer_group_list_empty_state %}\n        <sw-empty-state\n            v-if="!isLoading && !total && isValidTerm(term)"\n            :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n        >\n            <template #default>\n                {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                <router-link\n                    class="sw-empty-state__description-link"\n                    :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                >\n                    {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                </router-link>\n                {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[a.getByName("listing"),a.getByName("placeholder"),a.getByName("notification")],data:function(){return{isLoading:!1,sortBy:"name",limit:10,customerGroups:null,sortDirection:"ASC",searchConfigEntity:"customer_group"}},metaInfo:function(){return{title:this.$createTitle()}},computed:{columns:function(){return this.getColumns()},customerGroupRepository:function(){return this.repositoryFactory.create("customer_group")},allCustomerGroupsCriteria:function(){var t=new l(this.page,this.limit);return t.setTerm(this.term),t.addSorting(l.sort(this.sortBy,this.sortDirection)),t}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getList()},getList:function(){var t=this;return r()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.addQueryScores(t.term,t.allCustomerGroupsCriteria);case 3:if(n=e.sent,t.entitySearchable){e.next=8;break}return t.isLoading=!1,t.total=0,e.abrupt("return");case 8:t.freshSearchTerm&&n.resetSorting(),t.customerGroupRepository.search(n).then((function(e){t.total=e.total,t.customerGroups=e,t.isLoading=!1}));case 10:case"end":return e.stop()}}),e)})))()},getColumns:function(){return[{property:"name",label:"sw-settings-customer-group.list.columnName",inlineEdit:"string",routerLink:"sw.settings.customer.group.detail",primary:!0},{property:"displayGross",label:"sw-settings-customer-group.list.columnDisplayGross",inlineEdit:"boolean"}]},customerGroupCriteriaWithFilter:function(t){var e=new l(1,this.limit);return e.addFilter(l.equalsAny("id",t)),e},createErrorNotification:function(){return this.createNotificationError({message:this.$tc("sw-settings-customer-group.notification.errorMessageCannotDeleteCustomerGroup")})},customerGroupCanBeDeleted:function(t){var e=0===t.customers.length,n=0===t.salesChannels.length;return e&&n},deleteCustomerGroup:function(t){var e=this;this.$refs.listing.deleteId=null,this.customerGroupCanBeDeleted(t)||this.createErrorNotification(),this.customerGroupRepository.delete(t.id).then((function(){e.$refs.listing.resetSelection(),e.$refs.listing.doSearch()}))},deleteCustomerGroups:function(){var t=this,e=Object.values(this.$refs.listing.selection).map((function(t){return t.id}));this.customerGroupRepository.search(this.customerGroupCriteriaWithFilter(e)).then((function(e){e.reduce((function(e,n){return e||(e=!t.customerGroupCanBeDeleted(n))}),!1)&&t.createErrorNotification(),t.$refs.listing.deleteItems()}))},onContextMenuDelete:function(t){this.$refs.listing.deleteId=t.id}}}}}]);