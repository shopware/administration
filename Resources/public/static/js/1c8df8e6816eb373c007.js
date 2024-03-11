(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9059],{86066:function(){},9059:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return d}}),n(26956);let{Component:t,Mixin:i}=Shopware,{Criteria:a}=Shopware.Data,{mapPropertyErrors:r}=t.getComponentHelper(),{warn:l}=Shopware.Utils.debug,{ShopwareError:o}=Shopware.Classes;var d={template:'\n{% block sw_settings_user_detail %}\n<sw-page class="sw-settings-user-detail">\n    \n    {% block sw_settings_user_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="!isLoading">\n            {{ fullName }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_user_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_user_detail_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-users-permissions.users.user-detail.labelButtonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_user_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-user-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || !acl.can(\'users_and_permissions.editor\')"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-users-permissions.users.user-detail.labelButtonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_user_detail_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_user_detail_content_inner %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n                {%  block sw_setting_user_detail_card_basic_information %}\n                <sw-card\n                    position-identifier="sw-users-permissions-user-detail"\n                    :title="$tc(\'sw-users-permissions.users.user-detail.labelCard\')"\n                    :is-loading="isLoading"\n                >\n                    \n                    {% block sw_settings_user_detail_content_grid %}\n                    <div\n                        v-if="user"\n                        class="sw-settings-user-detail__grid"\n                    >\n                        \n                        {% block sw_settings_user_detail_content_first_name %}\n                        <sw-text-field\n                            v-model:value="user.firstName"\n                            name="sw-field--user-firstName"\n                            class="sw-settings-user-detail__grid-firstName"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            :error="userFirstNameError"\n                            required\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelFirstName\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_content_last_name %}\n                        <sw-text-field\n                            v-model:value="user.lastName"\n                            name="sw-field--user-lastName"\n                            class="sw-settings-user-detail__grid-lastName"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            :error="userLastNameError"\n                            required\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelLastName\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_content_email %}\n                        <sw-text-field\n                            v-model:value.trim="user.email"\n                            name="sw-field--user-email"\n                            class="sw-settings-user-detail__grid-eMail"\n                            :error="userEmailError"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            required\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelEmail\')"\n                            @update:value="checkEmail()"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_content_username %}\n                        <sw-text-field\n                            v-model:value="user.username"\n                            name="sw-field--user-username"\n                            class="sw-settings-user-detail__grid-username"\n                            :error-message="isUsernameUsed ? $tc(\'sw-users-permissions.users.user-detail.errorUsernameUsed\') : \'\'"\n                            :error="userUsernameError"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            required\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelUsername\')"\n                            @update:value="checkUsername"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_content_media_upload %}\n                        <sw-upload-listener\n                            :upload-tag="user.id"\n                            auto-upload\n                            @media-upload-finish="setMediaItem"\n                        />\n                        <sw-media-upload-v2\n                            class="sw-settings-user-detail__grid-profile-picture"\n                            :source="avatarMedia"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelProfilePicture\')"\n                            :upload-tag="user.id"\n                            :allow-multi-select="false"\n                            :source-context="user"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            variant="regular"\n                            default-folder="user"\n                            @media-upload-remove-image="onUnlinkLogo"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_content_password %}\n                        <sw-password-field\n                            class="sw-settings-user-detail__grid-password"\n                            :value="user.password"\n                            name="sw-field--user-password"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelPassword\')"\n                            :copy-able="false"\n                            :error="userPasswordError"\n                            @update:value="setPassword"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_grid_content_language %}\n                        <sw-select-field\n                            v-model:value="user.localeId"\n                            name="sw-field--user-localeId"\n                            class="sw-settings-user-detail__grid-language"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelLanguage\')"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            :error="userLocaleIdError"\n                            required\n                            :placeholder="$tc(\'sw-users-permissions.users.user-detail.labelLanguagePlaceholder\')"\n                        >\n                            <option\n                                v-for="language in languages"\n                                :key="language.locale.id"\n                                :value="language.locale.id"\n                                :selected="language.locale.id === user.localeId"\n                            >\n                                {{ language.customLabel }}\n                            </option>\n                        </sw-select-field>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_grid_content_timezone %}\n                        <sw-single-select\n                            v-model:value="user.timeZone"\n                            name="sw-field--user-timeZone"\n                            class="sw-settings-user-detail__grid-timezone"\n                            :options="timezoneOptions"\n                            required\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelTimezone\')"\n                            :is-loading="timezoneOptions.length <= 0"\n                            :disabled="!acl.can(\'user.update_profile\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_grid_content_acl_is_admin %}\n                        <sw-switch-field\n                            v-model:value="user.admin"\n                            name="sw-field--user-admin"\n                            class="sw-settings-user-detail__grid-is-admin"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelAdministrator\')"\n                            :disabled="isCurrentUser || !acl.can(\'users_and_permissions.editor\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_grid_content_job_title %}\n                        <sw-text-field\n                            v-model:value="user.title"\n                            name="sw-field--user-title"\n                            class="sw-settings-user-detail__grid-jobTitle"\n                            :disabled="!acl.can(\'users_and_permissions.editor\')"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelJobTitle\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_user_detail_grid_content_acl_roles %}\n                        <sw-entity-multi-select\n                            v-model:entityCollection="user.aclRoles"\n                            v-tooltip="{\n                                showDelay: 300,\n                                message: $tc(\'sw-users-permissions.users.user-detail.disabledRoleSelectWarning\'),\n                                disabled: !user.admin || !acl.can(\'users_and_permissions.editor\')\n                            }"\n                            name="sw-field--user-aclRoles"\n                            class="sw-settings-user-detail__grid-aclRoles"\n                            :label="$tc(\'sw-users-permissions.users.user-detail.labelRoles\')"\n                            :disabled="user.admin || !acl.can(\'users_and_permissions.editor\')"\n                            :criteria="aclRoleCriteria"\n                            label-property="name"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_user_detail_content_confirm_password_modal %}\n                    <sw-verify-user-modal\n                        v-if="confirmPasswordModal"\n                        @verified="saveUser"\n                        @close="onCloseConfirmPasswordModal"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                {%  block sw_setting_user_detail_card_integrations %}\n                <sw-card\n                    :title="$tc(\'sw-users-permissions.users.user-detail.labelIntegrationsCard\')"\n                    position-identifier="sw-users-permissions-user-detail"\n                >\n                    \n                    {% block sw_settings_user_detail_grid_toolbar %}\n                    <template #toolbar>\n                        \n                        {% block sw_settings_user_detail_grid_add_key %}\n                        <sw-button\n                            variant="primary"\n                            size="small"\n                            :disabled="!$route.params.id || !acl.can(\'users_and_permissions.editor\')"\n                            @click="addAccessKey"\n                        >\n                            {{ $tc(\'sw-users-permissions.users.user-detail.addAccessKey\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_user_detail_key_grid %}\n                    <template #grid>\n                        \n                        {% block sw_settings_user_detail_key_grid_content %}\n                        <sw-data-grid\n                            :is-loading="isLoading"\n                            :data-source="integrations"\n                            :columns="integrationColumns"\n                            identifier="user-grid"\n                            :show-settings="true"\n                            :skeleton-item-amount="skeletonItemAmount"\n                        >\n\n                            \n                            {% block sw_settings_user_detail_grid_columns_actions %}\n                            <template #actions="{ item }">\n                                \n                                {% block sw_settings_user_detail_grid_columns_actions_edit %}\n                                <sw-context-menu-item\n                                    class="sw-settings-user-detail__grid-context-menu-edit sw-product-list__edit-action"\n                                    :disabled="!acl.can(\'users_and_permissions.editor\')"\n                                    @click="onShowDetailModal(item.id)"\n                                >\n                                    {{ $tc(\'sw-users-permissions.users.user-detail.contextMenuEdit\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_user_detail_grid_columns_actions_delete %}\n                                <sw-context-menu-item\n                                    class="sw-settings-user-detail__grid-context-menu-delete"\n                                    :disabled="!acl.can(\'users_and_permissions.editor\')"\n                                    variant="danger"\n                                    @click="showDeleteModal = item.id"\n                                >\n                                    {{ $tc(\'sw-users-permissions.users.user-detail.contextMenuDelete\') }}\n                                </sw-context-menu-item>\n                                {% endblock %}\n                            </template>\n                            {% endblock %}\n                        </sw-data-grid>\n                        <sw-empty-state\n                            v-if="integrations.length === 0"\n                            :absolute="false"\n                            :title="$tc(\'sw-users-permissions.users.user-detail.noAccessKeysTitle\')"\n                            :subline="$tc(\'sw-users-permissions.users.user-detail.noAccessKeysSubline\')"\n                            auto-height\n                        />\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </sw-card-view>\n\n        \n        {% block sw_settings_user_detail_grid_inner_slot_delete_modal %}\n        <sw-modal\n            v-if="showDeleteModal"\n            :title="$tc(\'global.default.warning\')"\n            @modal-close="onCloseDeleteModal"\n        >\n            \n            {% block sw_settings_user_detail_grid_inner_slot_delete_modal_confirm_text %}\n            <p>\n                {{ $tc(\'sw-users-permissions.users.user-detail.modal.confirmDelete\') }}\n            </p>\n            {% endblock %}\n\n            \n            {% block sw_settings_user_detail_grid_inner_slot_delete_modal_footer %}\n            <template #modal-footer>\n                <sw-button\n                    size="small"\n                    @click="onCloseDeleteModal"\n                >\n                    {{ $tc(\'sw-users-permissions.users.user-detail.modal.buttonCancel\') }}\n                </sw-button>\n                <sw-button\n                    size="small"\n                    variant="danger"\n                    @click="onConfirmDelete(showDeleteModal)"\n                >\n                    {{ $tc(\'sw-users-permissions.users.user-detail.modal.buttonDelete\') }}\n                </sw-button>\n            </template>\n            {% endblock %}\n        </sw-modal>\n        {% endblock %}\n\n        \n        {% block sw_settings_user_detail_detail_modal %}\n        <sw-modal\n            v-if="currentIntegration"\n            size="550px"\n            class="sw-settings-user-detail__detail"\n            :is-loading="isModalLoading"\n            :title="showSecretAccessKey ? $tc(\'global.default.warning\') : $tc(\'sw-users-permissions.users.user-detail.modal.detailModalTitleEdit\')"\n            @modal-close="onCloseDetailModal"\n        >\n            \n            {% block sw_settings_user_detail_detail_modal_inner %}\n\n            \n            {% block sw_settings_user_detail_detail_modal_inner_field_access_key %}\n            <sw-text-field\n                v-model:value="currentIntegration.accessKey"\n                :label="$tc(\'sw-users-permissions.users.user-detail.modal.idFieldLabel\')"\n                :disabled="true"\n                :copy-able="true"\n                :copy-able-tooltip="true"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_user_detail_detail_modal_inner_field_secret_access_key %}\n            \n            {% block sw_settings_user_detail_detail_modal_inner_field_secret_access_key_field %}\n            <sw-text-field\n                v-if="showSecretAccessKey"\n                v-model:value="currentIntegration.secretAccessKey"\n                :label="$tc(\'sw-users-permissions.users.user-detail.modal.secretFieldLabel\')"\n                :disabled="true"\n                :password-toggle-able="false"\n                :copy-able="showSecretAccessKey"\n                :copy-able-tooltip="true"\n            />\n\n            <sw-password-field\n                v-else\n                v-model:value="currentIntegration.secretAccessKey"\n                :label="$tc(\'sw-users-permissions.users.user-detail.modal.secretFieldLabel\')"\n                :disabled="true"\n                :password-toggle-able="false"\n                :copy-able="showSecretAccessKey"\n                :copy-able-tooltip="true"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_user_detail_detail_modal_inner_field_secret_access_key_button %}\n            <sw-button\n                v-if="!showSecretAccessKey"\n                class="sw-settings-user-detail__secret-help-text-button sw-field"\n                variant="danger"\n                :block="true"\n                @click="addAccessKey"\n            >\n                {{ $tc(\'sw-users-permissions.users.user-detail.modal.buttonCreateNewApiKeys\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_settings_user_detail_detail_modal_inner_field_help_text %}\n            <sw-alert\n                v-if="!showSecretAccessKey"\n                variant="warning"\n                class="sw-settings-user-detail__secret-help-text-alert"\n            >\n                {{ $tc(\'sw-users-permissions.users.user-detail.modal.hintCreateNewApiKeys\') }}\n            </sw-alert>\n            {% endblock %}\n            {% endblock %}\n\n            \n            {% block sw_settings_user_detail_detail_modal_inner_help_text %}\n            <sw-alert\n                v-else\n                variant="warning"\n                class="sw-settings-user-detail__secret-help-text-alert"\n            >\n                {{ $tc(\'sw-users-permissions.users.user-detail.modal.secretHelpText\') }}\n            </sw-alert>\n            {% endblock %}\n\n            \n            {% block sw_settings_user_detail_detail_modal_inner_footer %}\n            <template #modal-footer>\n                \n                {% block sw_settings_user_detail_detail_modal_inner_footer_cancel %}\n                <sw-button\n                    size="small"\n                    :disabled="isModalLoading"\n                    @click="onCloseDetailModal"\n                >\n                    {{ $tc(\'sw-users-permissions.users.user-detail.modal.buttonCancel\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_settings_user_detail_detail_modal_inner_footer_apply %}\n                <sw-button\n                    size="small"\n                    class="sw-settings-user-detail__save-action"\n                    :disabled="isModalLoading && !!currentIntegration.label"\n                    variant="primary"\n                    @click="onSaveIntegration"\n                >\n                    {{ showSecretAccessKey ? $tc(\'sw-users-permissions.users.user-detail.modal.buttonApply\') : $tc(\'sw-users-permissions.users.user-detail.modal.buttonApplyEdit\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n            {% endblock %}\n            {% endblock %}\n        </sw-modal>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["userService","loginService","userValidationService","integrationService","repositoryFactory","acl"],mixins:[i.getByName("notification"),i.getByName("salutation")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data(){return{isLoading:!1,userId:"",user:null,currentUser:null,languages:[],integrations:[],currentIntegration:null,mediaItem:null,newPassword:"",newPasswordConfirm:"",isEmailUsed:!1,isEmailAlreadyInUse:!1,isUsernameUsed:!1,isIntegrationsLoading:!1,isSaveSuccessful:!1,isModalLoading:!1,showSecretAccessKey:!1,showDeleteModal:null,skeletonItemAmount:3,confirmPasswordModal:!1,timezoneOptions:[]}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{...r("user",["firstName","lastName","email","username","localeId","password"]),identifier(){return this.fullName},fullName(){return this.salutation(this.user,this.$tc("sw-users-permissions.users.user-detail.labelNewUser"))},userRepository(){return this.repositoryFactory.create("user")},userCriteria(){let e=new a(1,25);return e.addAssociation("accessKeys"),e.addAssociation("locale"),e.addAssociation("aclRoles"),e},aclRoleCriteria(){let e=new a(1,25);return e.addFilter(a.equals("app.id",null)),e.addFilter(a.equals("deletedAt",null)),e},languageRepository(){return this.repositoryFactory.create("language")},languageCriteria(){let e=new a(1,500);return e.addAssociation("locale"),e.addSorting(a.sort("locale.name","ASC")),e.addSorting(a.sort("locale.territory","ASC")),e},localeRepository(){return this.repositoryFactory.create("locale")},avatarMedia(){return this.mediaItem},isError(){return this.isEmailAlreadyInUse||this.isUsernameUsed||!this.hasLanguage},hasLanguage(){return this.user&&this.user.localeId},disableConfirm(){return this.newPassword!==this.newPasswordConfirm||""===this.newPassword||null===this.newPassword},isCurrentUser(){return!!this.user&&!!this.currentUser&&this.userId===this.currentUser.id},mediaRepository(){return this.repositoryFactory.create("media")},integrationColumns(){return[{property:"accessKey",label:this.$tc("sw-users-permissions.users.user-detail.labelAccessKey")}]},languageId(){return Shopware.State.get("session").languageId},tooltipSave(){let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}}},watch:{languageId(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(Shopware.ExtensionAPI.publishData({id:"sw-users-permissions-user-detail__currentUser",path:"currentUser",scope:this}),this.isLoading=!0,!this.languageId){this.isLoading=!1;return}this.timezoneOptions=Shopware.Service("timezoneService").getTimezoneOptions(),Promise.all([new Promise(e=>{Shopware.State.commit("context/setApiLanguageId",this.languageId),e(this.languageId)}),this.loadLanguages(),this.loadUser(),this.loadCurrentUser()]).then(()=>{this.isLoading=!1})},loadLanguages(){return this.languageRepository.search(this.languageCriteria).then(e=>(this.languages=[],e.forEach(e=>{e.customLabel=`${e.locale.translated.name} (${e.locale.translated.territory})`,this.languages.push(e)}),this.languages))},loadUser(){return this.userId=this.$route.params.id,this.userRepository.get(this.userId,Shopware.Context.api,this.userCriteria).then(e=>{this.user=e,this.user.avatarId&&(this.mediaItem=this.user.avatarMedia),this.keyRepository=this.repositoryFactory.create(e.accessKeys.entity,this.user.accessKeys.source),this.loadKeys()})},loadCurrentUser(){return this.userService.getUser().then(e=>{this.currentUser=e.data})},loadKeys(){this.integrations=this.user.accessKeys},addAccessKey(){let e=this.keyRepository.create();this.isModalLoading=!0,e.quantityStart=1,this.integrationService.generateKey({},{},!0).then(s=>{e.accessKey=s.accessKey,e.secretAccessKey=s.secretAccessKey,this.currentIntegration=e,this.isModalLoading=!1,this.showSecretAccessKey=!0})},checkEmail(){return this.user.email?this.userValidationService.checkUserEmail({email:this.user.email,id:this.user.id}).then(({emailIsUnique:e})=>{this.isEmailUsed=!e,this.isEmailAlreadyInUse=!e}):Promise.resolve()},checkUsername(){return this.userValidationService.checkUserUsername({username:this.user.username,id:this.user.id}).then(({usernameIsUnique:e})=>{this.isUsernameUsed=!e})},setMediaItem({targetId:e}){this.mediaRepository.get(e).then(s=>{this.mediaItem=s,this.user.avatarMedia=s,this.user.avatarId=e})},onUnlinkLogo(){this.mediaItem=null,this.user.avatarMedia=null,this.user.avatarId=null},onSearch(e){this.term=e,this.clearSelection()},saveFinish(){this.isSaveSuccessful=!1},onSave(){this.confirmPasswordModal=!0},saveUser(e){this.isSaveSuccessful=!1,this.isLoading=!0;let s=[];return this.currentUser.id===this.user.id&&(s=[Shopware.Service("localeHelper").setLocaleWithId(this.user.localeId)]),Promise.all(s).then(this.checkEmail().then(()=>{if(this.isEmailAlreadyInUse){let e=`user.${this.user.id}.email`,s=new o({code:"USER_EMAIL_ALREADY_EXISTS",detail:this.$tc("sw-users-permissions.users.user-detail.errorEmailUsed")});return Shopware.State.commit("error/addApiError",{expression:e,error:s}),Promise.resolve()}this.isLoading=!0;let s=this.$tc("global.default.error"),n=this.$tc("sw-users-permissions.users.user-detail.notification.saveError.message",0,{name:this.fullName});return this.userRepository.save(this.user,e).then(()=>this.updateCurrentUser()).then(()=>{this.createdComponent(),this.confirmPasswordModal=!1,this.isSaveSuccessful=!0}).catch(e=>{throw this.createNotificationError({title:s,message:n}),l(this._name,e.message,e.response),this.isLoading=!1,e}).finally(()=>{this.isLoading=!1})}).catch(()=>Promise.reject()).finally(()=>{this.isLoading=!1}))},updateCurrentUser(){return this.userService.getUser().then(e=>{let s=e.data;return delete s.password,Shopware.State.commit("setCurrentUser",s)})},onCancel(){this.$router.push({name:"sw.users.permissions.index"})},setPassword(e){if("string"==typeof e&&e.length<=0){this.$delete(this.user,"password");return}this.$set(this.user,"password",e)},onShowDetailModal(e){if(!e){this.addAccessKey();return}this.currentIntegration=this.user.accessKeys.get(e)},onCloseDetailModal(){this.currentIntegration=null,this.showSecretAccessKey=!1,this.isModalLoading=!1},onSaveIntegration(){this.currentIntegration&&(this.user.accessKeys.has(this.currentIntegration.id)||this.user.accessKeys.add(this.currentIntegration),this.onCloseDetailModal())},onCloseDeleteModal(){this.showDeleteModal=null},onConfirmDelete(e){e&&(this.onCloseDeleteModal(),this.user.accessKeys.remove(e))},onCloseConfirmPasswordModal(){this.confirmPasswordModal=!1}}}},26956:function(e,s,n){var t=n(86066);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),n(45346).Z("256bfe8e",t,!0,{})}}]);