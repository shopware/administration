(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[655],{"/a+i":function(e,s,i){"use strict";i.r(s);var n=i("QGb3"),t=i.n(n),r=Shopware.Mixin;s.default={template:'\n{% block sw_users_permissions_role_detail %}\n<sw-page class="sw-users-permissions-role-detail">\n\n    \n    {% block sw_users_permissions_role_detail_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_users_permissions_role_detail_smart_bar_header_title %}\n        <h2 v-if="role && role.isNew() && role.name.length <= 0">\n            {{ $tc(\'sw-users-permissions.roles.general.labelCreateNewRole\') }}\n        </h2>\n        <h2 v-else-if="role">\n            {{ role.name }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-users-permissions.roles.detail.role\') }}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_users_permissions_role_detail_smart_bar_actions_button_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_detail_smart_bar_actions_button_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-users-permissions-role-detail__button-save"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || !acl.can(\'users_and_permissions.editor\')"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_detail_content %}\n    <template #content>\n        \n        {% block sw_users_permissions_role_detail_content_card_view %}\n        <sw-card-view>\n            \n            {% block sw_users_permissions_role_detail_content_card_view_tabs %}\n            <sw-tabs\n                default-item="general"\n                position-identifier="sw-users-permissions-role-detail-content"\n            >\n                <template #default="{ active }">\n                    <sw-tabs-item\n                        :route="{ name: \'sw.users.permissions.role.detail.general\', params: { id: $route.params.id } }"\n                        :title="$tc(\'sw-users-permissions.roles.tabs.general\')"\n                    >\n                        {{ $tc(\'sw-users-permissions.roles.tabs.general\') }}\n                    </sw-tabs-item>\n\n                    <sw-tabs-item\n                        :route="{ name: \'sw.users.permissions.role.detail.detailed-privileges\', params: { id: $route.params.id } }"\n                        :title="$tc(\'sw-users-permissions.roles.tabs.detailed\')"\n                    >\n                        {{ $tc(\'sw-users-permissions.roles.tabs.detailed\') }}\n                    </sw-tabs-item>\n                </template>\n            </sw-tabs>\n            {% endblock %}\n\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <router-view\n                v-else\n                :role="role"\n                :detailed-privileges="detailedPrivileges"\n            />\n        </sw-card-view>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_detail_content_verify_modal %}\n        <sw-verify-user-modal\n            v-if="confirmPasswordModal"\n            @verified="saveRole"\n            @close="onCloseConfirmPasswordModal"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","privileges","userService","loginService","acl","appAclService"],mixins:[r.getByName("notification")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data:function(){return{isLoading:!0,isSaveSuccessful:!1,role:null,confirmPasswordModal:!1,detailedPrivileges:[]}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{tooltipSave:function(){var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},languageId:function(){return Shopware.State.get("session").languageId},roleRepository:function(){return this.repositoryFactory.create("acl_role")},roleId:function(){return this.$route.params.id}},watch:{languageId:function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-users-permissions-role-detail__detailedPrivileges",path:"detailedPrivileges",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-users-permissions-role-detail__role",path:"role",scope:this}),this.roleId?this.getRole():this.createNewRole()},createNewRole:function(){this.isLoading=!0,this.role=this.roleRepository.create(),this.role.name="",this.role.description="",this.role.privileges=[],this.isLoading=!1},getRole:function(){var e=this;this.isLoading=!0,this.appAclService.addAppPermissions().then((function(){e.roleRepository.get(e.roleId).then((function(s){e.role=s;var i=e.privileges.filterPrivilegesRoles(e.role.privileges),n=e.privileges.getPrivilegesForAdminPrivilegeKeys(i);e.detailedPrivileges=e.role.privileges.filter((function(e){return!n.includes(e)})),e.role.privileges=i})).finally((function(){e.isLoading=!1}))}))},onSave:function(){this.confirmPasswordModal=!0},saveRole:function(e){var s=this;return this.isSaveSuccessful=!1,this.isLoading=!0,this.role.privileges=[].concat(t()(this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges)),t()(this.detailedPrivileges)).sort(),this.confirmPasswordModal=!1,this.roleRepository.save(this.role,e).then((function(){return s.updateCurrentUser()})).then((function(){s.role.isNew()&&s.$router.push({name:"sw.users.permissions.role.detail",params:{id:s.role.id}}),s.getRole(),s.isSaveSuccessful=!0})).catch((function(){s.createNotificationError({message:s.$tc("global.notification.notificationSaveErrorMessage",0,{entityName:s.role.name})}),s.role.privileges=s.privileges.filterPrivilegesRoles(s.role.privileges)})).finally((function(){s.isLoading=!1}))},updateCurrentUser:function(){return this.userService.getUser().then((function(e){var s=e.data;return delete s.password,Shopware.State.commit("setCurrentUser",s)}))},onCloseConfirmPasswordModal:function(){this.confirmPasswordModal=!1},saveFinish:function(){this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"sw.users.permissions.index"})}}}}}]);