(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[485],{BTnA:function(e,s,n){"use strict";n.r(s);n("YJgM");var i=Shopware,t=i.Data,o=i.Mixin,l=t.Criteria;s.default={template:'\n{% block sw_users_permissions_role_listing %}\n<sw-card\n    class="sw-users-permissions-role-listing"\n    position-identifier="sw-users-permissions-role-listing"\n    :title="$tc(\'sw-users-permissions.roles.general.cardLabel\')"\n>\n\n    \n    {% block sw_users_permissions_role_listing_toolbar %}\n    <div class="sw-users-permissions-role-listing__toolbar">\n        <sw-container\n            columns="1fr minmax(100px, 200px)"\n            gap="0 10px"\n        >\n            \n            {% block sw_users_permissions_role_listing_toolbar_search_field %}\n            <sw-simple-search-field\n                v-model="term"\n                size="small"\n                variant="form"\n                @search-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_role_listing_toolbar_add_role_button %}\n            <sw-button\n                :router-link="{ name: \'sw.users.permissions.role.detail\' }"\n                variant="ghost"\n                size="small"\n                :disabled="!acl.can(\'users_and_permissions.creator\')"\n                class="sw-users-permissions-role-listing__add-role-button"\n            >\n                {{ $tc(\'sw-users-permissions.roles.general.labelCreateNewRole\') }}\n            </sw-button>\n            {% endblock %}\n        </sw-container>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_listing_verify_modal %}\n    <sw-verify-user-modal\n        v-if="confirmPasswordModal"\n        @verified="deleteRole"\n        @close="onCloseConfirmPasswordModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_listing_grid %}\n    <sw-data-grid\n        v-if="showListingResults"\n        :data-source="roles"\n        :columns="rolesColumns"\n        identifier="roles-grid"\n        :show-settings="true"\n        :show-selection="false"\n        :is-loading="isLoading"\n        @column-sort="onSortColumn"\n    >\n\n        \n        {% block sw_users_permissions_role_listing_grid_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_users_permissions_role_listing_grid_actions_edit %}\n            <sw-context-menu-item\n                :router-link="{ name: \'sw.users.permissions.role.detail\', params: { id: item.id } }"\n                class="sw-users-permissions-role-listing__context-menu-edit"\n                :disabled="!acl.can(\'users_and_permissions.editor\')"\n            >\n                {{ $tc(\'sw-users-permissions.roles.role-grid.contextMenuEdit\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_role_listing_grid_actions_delete %}\n            <sw-context-menu-item\n                variant="danger"\n                class="sw-users-permissions-role-listing__context-menu-delete"\n                :disabled="!acl.can(\'users_and_permissions.deleter\')"\n                @click="onDelete(item)"\n            >\n                {{ $tc(\'sw-users-permissions.roles.role-grid.contextMenuDelete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_listing_grid_columns %}\n        <template #column-name="{ item }">\n            \n            {% block sw_users_permissions_role_listing_grid_columns_name %}\n            <router-link :to="{ name: \'sw.users.permissions.role.detail\', params: { id: item.id } }">\n                {{ item.name }}\n            </router-link>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_listing_grid_action_modals %}\n        <template #action-modals="{ item }">\n            \n            {% block sw_users_permissions_role_listing_grid_actions_modals_modal %}\n            <sw-modal\n                v-if="getItemToDelete(item)"\n                :title="$tc(\'sw-users-permissions.roles.role-grid.titleModalDelete\')"\n                variant="small"\n                @modal-close="onCloseDeleteModal"\n            >\n                \n                {% block sw_users_permissions_role_listing_grid_actions_modals_modal_delete_text %}\n                <p class="sw-users-permissions-role-listing__confirm-delete-text">\n                    {{ $tc(\'sw-users-permissions.roles.role-grid.textModalDelete\', 0, { name: item.name }) }}\n                </p>\n                {% endblock %}\n\n                \n                {% block sw_users_permissions_role_listing_grid_actions_modals_modal_footer %}\n                <template #modal-footer>\n                    \n                    {% block sw_users_permissions_role_listing_grid_actions_modals_modal_close_delete %}\n                    <sw-button\n                        size="small"\n                        @click="onCloseDeleteModal"\n                    >\n                        {{ $tc(\'sw-users-permissions.roles.role-grid.labelButtonCancel\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_users_permissions_role_listing_grid_actions_modals_modal_confirm_delete %}\n                    <sw-button\n                        variant="danger"\n                        size="small"\n                        @click="onConfirmDelete(item)"\n                    >\n                        {{ $tc(\'sw-users-permissions.roles.role-grid.labelButtonDelete\') }}\n                    </sw-button>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n            </sw-modal>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        <template #pagination>\n            \n            {% block sw_users_permissions_role_listing_grid_pagination %}\n            <sw-pagination\n                :page="page"\n                :limit="limit"\n                :total="total"\n                :auto-hide="true"\n                @page-change="onPageChange"\n            />\n            {% endblock %}\n        </template>\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_listing_empty_state %}\n    <sw-empty-state\n        v-else\n        :absolute="false"\n        :title="$tc(\'sw-users-permissions.roles.role-grid.messageEmptyTitle\')"\n        :subline="$tc(\'sw-users-permissions.roles.role-grid.messageEmptySubline\')"\n    />\n    {% endblock %}\n\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[o.getByName("listing"),o.getByName("notification")],data:function(){return{roles:[],isLoading:!1,itemToDelete:null,confirmDelete:null,disableRouteParams:!0,confirmPasswordModal:!1}},computed:{rolesColumns:function(){return[{property:"name",label:this.$tc("sw-users-permissions.roles.role-grid.labelName")},{property:"description",label:this.$tc("sw-users-permissions.roles.role-grid.labelDescription")}]},roleRepository:function(){return this.repositoryFactory.create("acl_role")},roleCriteria:function(){var e=new l(this.page,this.limit);return e.addFilter(l.equals("app.id",null)),e.addFilter(l.equals("deletedAt",null)),this.term&&e.setTerm(this.term),this.sortBy&&e.addSorting(l.sort(this.sortBy,this.sortDirection||"ASC")),e},showListingResults:function(){return!this.isLoading&&(this.roles&&this.roles.length>0||this.term&&this.term.length<=0)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.$emit("get-list")},getList:function(){var e=this;return this.isLoading=!0,this.roles=[],this.roleRepository.search(this.roleCriteria).then((function(s){e.total=s.total,e.roles=s})).finally((function(){e.isLoading=!1}))},onSearch:function(e){this.term=e,this.$emit("get-list")},getItemToDelete:function(e){return!!this.itemToDelete&&this.itemToDelete.id===e.id},onDelete:function(e){this.itemToDelete=e},onCloseDeleteModal:function(){this.itemToDelete=null},onConfirmDelete:function(){this.confirmDelete=this.itemToDelete,this.onCloseDeleteModal(),this.confirmPasswordModal=!0},deleteRole:function(e){var s=this;this.confirmPasswordModal=!1;var n=this.confirmDelete;this.confirmDelete=null,this.roleRepository.delete(n.id,e).then((function(){s.createNotificationSuccess({message:s.$tc("sw-users-permissions.roles.role-grid.notification.deleteSuccess.message",0,{name:n.name})}),s.$emit("get-list")})).catch((function(){s.createNotificationError({message:s.$tc("sw-users-permissions.roles.role-grid.notification.deleteError.message",0,{name:n.name})})}))},onCloseConfirmPasswordModal:function(){this.confirmPasswordModal=!1}}}},YJgM:function(e,s,n){var i=n("hVyj");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("ydqr").default)("d38a142c",i,!0,{})},hVyj:function(e,s,n){}}]);