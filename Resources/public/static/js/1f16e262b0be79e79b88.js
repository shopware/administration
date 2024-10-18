"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[54450],{354450:function(e,s,i){i.r(s),i.d(s,{default:function(){return n}});let{Mixin:t}=Shopware;var n={template:'\n{% block sw_users_permissions_role_detail %}\n<sw-page class="sw-users-permissions-role-detail">\n\n    \n    {% block sw_users_permissions_role_detail_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_users_permissions_role_detail_smart_bar_header_title %}\n        <h2 v-if="role && role.isNew() && role.name.length <= 0">\n            {{ $tc(\'sw-users-permissions.roles.general.labelCreateNewRole\') }}\n        </h2>\n        <h2 v-else-if="role">\n            {{ role.name }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-users-permissions.roles.detail.role\') }}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_users_permissions_role_detail_smart_bar_actions_button_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_detail_smart_bar_actions_button_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-users-permissions-role-detail__button-save"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || !acl.can(\'users_and_permissions.editor\') || undefined"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_detail_content %}\n    <template #content>\n        \n        {% block sw_users_permissions_role_detail_content_card_view %}\n        <sw-card-view>\n            \n            {% block sw_users_permissions_role_detail_content_card_view_tabs %}\n            <sw-tabs\n                default-item="general"\n                position-identifier="sw-users-permissions-role-detail-content"\n            >\n                <template #default="{ active }">\n                    <sw-tabs-item\n                        :route="{ name: \'sw.users.permissions.role.detail.general\', params: { id: $route.params.id } }"\n                        :title="$tc(\'sw-users-permissions.roles.tabs.general\')"\n                    >\n                        {{ $tc(\'sw-users-permissions.roles.tabs.general\') }}\n                    </sw-tabs-item>\n\n                    <sw-tabs-item\n                        :route="{ name: \'sw.users.permissions.role.detail.detailed-privileges\', params: { id: $route.params.id } }"\n                        :title="$tc(\'sw-users-permissions.roles.tabs.detailed\')"\n                    >\n                        {{ $tc(\'sw-users-permissions.roles.tabs.detailed\') }}\n                    </sw-tabs-item>\n                </template>\n            </sw-tabs>\n            {% endblock %}\n\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                <router-view\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        :role="role"\n                        :detailed-privileges="detailedPrivileges"\n                    />\n                </router-view>\n            </template>\n        </sw-card-view>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_detail_content_verify_modal %}\n        <sw-verify-user-modal\n            v-if="confirmPasswordModal"\n            @verified="saveRole"\n            @close="onCloseConfirmPasswordModal"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","privileges","userService","loginService","acl","appAclService"],mixins:[t.getByName("notification")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data(){return{isLoading:!0,isSaveSuccessful:!1,role:null,confirmPasswordModal:!1,detailedPrivileges:[]}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{tooltipSave(){let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},languageId(){return Shopware.State.get("session").languageId},roleRepository(){return this.repositoryFactory.create("acl_role")},roleId(){return this.$route.params.id}},watch:{languageId(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(Shopware.ExtensionAPI.publishData({id:"sw-users-permissions-role-detail__detailedPrivileges",path:"detailedPrivileges",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-users-permissions-role-detail__role",path:"role",scope:this}),!this.roleId){this.createNewRole();return}this.getRole()},createNewRole(){this.isLoading=!0,this.role=this.roleRepository.create(),this.role.name="",this.role.description="",this.role.privileges=[],this.isLoading=!1},getRole(){this.isLoading=!0,this.appAclService.addAppPermissions().then(()=>{this.roleRepository.get(this.roleId).then(e=>{this.role=e;let s=this.privileges.filterPrivilegesRoles(this.role.privileges),i=this.privileges.getPrivilegesForAdminPrivilegeKeys(s);this.detailedPrivileges=this.role.privileges.filter(e=>!i.includes(e)),this.role.privileges=s}).finally(()=>{this.isLoading=!1})})},onSave(){this.confirmPasswordModal=!0},saveRole(e){return this.isSaveSuccessful=!1,this.isLoading=!0,this.role.privileges=[...this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges),...this.detailedPrivileges].sort(),this.confirmPasswordModal=!1,this.roleRepository.save(this.role,e).then(()=>this.updateCurrentUser()).then(()=>{this.role.isNew()&&this.$router.push({name:"sw.users.permissions.role.detail",params:{id:this.role.id}}),this.getRole(),this.isSaveSuccessful=!0}).catch(()=>{this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessage",0,{entityName:this.role.name})}),this.role.privileges=this.privileges.filterPrivilegesRoles(this.role.privileges)}).finally(()=>{this.isLoading=!1})},updateCurrentUser(){return this.userService.getUser().then(e=>{let s=e.data;return delete s.password,Shopware.State.commit("setCurrentUser",s)})},onCloseConfirmPasswordModal(){this.confirmPasswordModal=!1},saveFinish(){this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.users.permissions.index"})}}}}}]);