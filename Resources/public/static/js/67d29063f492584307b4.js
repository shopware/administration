"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[91579],{91579:function(e,s,r){r.r(s),r.d(s,{default:function(){return u}});var a=r(624),t=r(10418),i={namespaced:!0,state(){return{searchPreferences:[],userSearchPreferences:null}},mutations:{setSearchPreferences(e,s){e.searchPreferences=s},setUserSearchPreferences(e,s){e.userSearchPreferences=s}}};let{Component:n,Mixin:o,State:l}=Shopware,{Criteria:c}=Shopware.Data,{mapState:d,mapPropertyErrors:h}=n.getComponentHelper();var u={template:'\n{% block sw_profile_index %}\n<sw-page class="sw-profile-index">\n    <template #smart-bar-back>\n        \n        {% block sw_profile_index_smart_bar_back %}\n        <span></span>\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-header>\n        \n        {% block sw_profile_index_headline %}\n        <h2>{{ $tc(\'sw-profile.general.headlineProfile\') }}</h2>\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-actions>\n        \n        {% block sw_profile_index_actions %}\n        <sw-button-process\n            class="sw-profile__save-action"\n            variant="primary"\n            :is-loading="isLoading || isUserLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || isUserLoading || !acl.can(\'user.update_profile\')"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-profile.index.buttonSaveLabel\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_profile_index_tabs %}\n            <sw-tabs\n                position-identifier="sw-profile-index"\n            >\n                \n                {% block sw_profile_index_tabs_item_general %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.profile.index.general\' }"\n                    :title="$tc(\'sw-profile.tabGeneral.title\')"\n                >\n                    {{ $tc(\'sw-profile.tabGeneral.title\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_profile_index_tabs_item_search_preferences %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.profile.index.searchPreferences\' }"\n                    :title="$tc(\'sw-profile.tabSearchPreferences.title\')"\n                >\n                    {{ $tc(\'sw-profile.tabSearchPreferences.title\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_profile_index_router_view %}\n            <template v-if="isUserLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                <router-view\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        v-bind="{\n                            user,\n                            timezoneOptions,\n                            languages,\n                            newPassword,\n                            newPasswordConfirm,\n                            avatarMediaItem,\n                            isUserLoading,\n                            languageId,\n                            isDisabled,\n                            userRepository,\n                        }"\n                        @new-password-change="onChangeNewPassword"\n                        @new-password-confirm-change="onChangeNewPasswordConfirm"\n                        @media-upload="setMediaItem"\n                        @media-remove="onUnlinkAvatar"\n                        @media-open="openMediaModal"\n                    />\n                </router-view>\n            </template>\n            {% endblock %}\n        </sw-card-view>\n\n        \n        {% block sw_profile_index_content_confirm_password_modal %}\n        <sw-verify-user-modal\n            v-if="confirmPasswordModal"\n            @verified="onVerifyPasswordFinished"\n            @close="onCloseConfirmPasswordModal"\n        />\n        {% endblock %}\n\n        \n        {% block sw_profile_index_media_upload_actions_media_modal %}\n        <sw-media-modal-v2\n            v-if="showMediaModal"\n            :allow-multi-select="false"\n            :initial-folder-id="mediaDefaultFolderId"\n            :entity-context="user.getEntityName()"\n            @modal-close="showMediaModal = false"\n            @media-modal-selection-change="onMediaSelectionChange"\n        />\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',inject:["userService","loginService","mediaDefaultFolderService","repositoryFactory","acl","searchPreferencesService","searchRankingService","userConfigService"],mixins:[o.getByName("notification")],data(){return{user:{username:"",email:""},languages:[],imageSize:140,newPassword:null,newPasswordConfirm:null,confirmPassword:null,avatarMediaItem:null,uploadTag:"sw-profile-upload-tag",isLoading:!1,isUserLoading:!0,isSaveSuccessful:!1,confirmPasswordModal:!1,mediaDefaultFolderId:null,showMediaModal:!1,timezoneOptions:[]}},metaInfo(){return{title:this.$createTitle()}},computed:{...d("swProfile",["searchPreferences"]),...h("user",["email","timeZone"]),userSearchPreferences:{get(){return l.get("swProfile").userSearchPreferences},set(e){l.commit("swProfile/setUserSearchPreferences",e)}},isDisabled(){return!0},userRepository(){return this.repositoryFactory.create("user")},languageRepository(){return this.repositoryFactory.create("language")},localeRepository(){return this.repositoryFactory.create("locale")},mediaRepository(){return this.repositoryFactory.create("media")},userMediaCriteria(){return this.user.id,null},languageId(){return Shopware.State.get("session").languageId}},watch:{$route(e){e&&"sw.profile.index.searchPreferences"!==e.name&&this.resetGeneralData()},"user.avatarMedia.id"(){this.user.avatarMedia?.id&&this.acl.can("media.creator")&&this.setMediaItem({targetId:this.user.avatarMedia.id})},languageId(){this.createdComponent()}},beforeCreate(){l.registerModule("swProfile",i)},created(){this.createdComponent()},beforeMount(){this.beforeMountComponent()},beforeDestroy(){l.unregisterModule("swProfile")},methods:{createdComponent(){this.isUserLoading=!0;let e=new Promise(e=>{e(this.languageId)});this.userPromise=this.getUserData(),this.timezoneOptions=Shopware.Service("timezoneService").getTimezoneOptions();let s=[e,this.userPromise];this.acl.can("media.creator")&&this.getMediaDefaultFolderId().then(e=>{this.mediaDefaultFolderId=e}).catch(()=>{this.mediaDefaultFolderId=null}),Promise.all(s).then(()=>{this.loadLanguages()}).then(()=>{this.isUserLoading=!1})},beforeMountComponent(){this.userPromise.then(e=>{this.user=e})},loadLanguages(){let e=Array.from(Shopware.Application.getContainer("factory").locale.getLocaleRegistry().keys()),s=new c(1,500);return s.addAssociation("locale"),s.addSorting(c.sort("locale.name","ASC")),s.addSorting(c.sort("locale.territory","ASC")),s.addFilter(c.equalsAny("locale.code",e)),this.languageRepository.search(s).then(e=>{this.languages=[];let s=[],r="";return e.forEach(e=>{e.customLabel=`${e.locale.translated.name} (${e.locale.translated.territory})`,this.languages.push(e),s.push(e.localeId),e.locale.code===Shopware.Context.app.fallbackLocale&&(r=e.localeId)}),s.includes(this.user.localeId)||(this.user.localeId=r),this.isUserLoading=!1,this.languages})},async getUserData(){let e=this.$route.params.user;if(e)return this.userRepository.get(e.id);let s=await this.userService.getUser();return this.userRepository.get(s.data.id)},resetGeneralData(){this.newPassword=null,this.newPasswordConfirm=null,this.createdComponent(),this.beforeMountComponent()},async saveFinish(){this.isSaveSuccessful=!1,this.user=await this.getUserData()},onSave(){if("sw.profile.index.searchPreferences"===this.$route.name){this.saveUserSearchPreferences();return}if(!1===this.checkEmail())return;let e=this.checkPassword();(null===e||!0===e)&&(this.confirmPasswordModal=!0)},checkEmail(){return!!(this.user.email&&(0,a.Do)(this.user.email))||(this.createErrorMessage(this.$tc("sw-profile.index.notificationInvalidEmailErrorMessage")),!1)},checkPassword(){return this.newPassword&&this.newPassword.length>0?this.newPassword!==this.newPasswordConfirm?(this.createErrorMessage(this.$tc("sw-profile.index.notificationPasswordErrorMessage")),!1):(this.user.password=this.newPassword,!0):null},createErrorMessage(e){this.createNotificationError({message:e})},saveUser(e){if(!this.acl.can("user:editor")){let e=this.userRepository.getSyncChangeset([this.user]);delete e.changeset[0].changes.id,this.userService.updateUser(e.changeset[0].changes).then(async()=>{await this.updateCurrentUser(),this.isLoading=!1,this.isSaveSuccessful=!0,Shopware.Service("localeHelper").setLocaleWithId(this.user.localeId)}).catch(e=>{l.dispatch("error/addApiError",{expression:`user.${this.user?.id}.password`,error:new Shopware.Classes.ShopwareError(e.response.data.errors[0])}),this.createNotificationError({message:this.$tc("sw-profile.index.notificationSaveErrorMessage")}),this.isLoading=!1,this.isSaveSuccessful=!1});return}this.userRepository.save(this.user,e).then(async()=>{await this.updateCurrentUser(),Shopware.Service("localeHelper").setLocaleWithId(this.user.localeId),this.newPassword?this.loginService.loginByUsername(this.user.username,this.newPassword).then(()=>{this.isSaveSuccessful=!0}).catch(()=>{this.handleUserSaveError()}).finally(()=>{this.isLoading=!1}):(this.isLoading=!1,this.isSaveSuccessful=!0),this.confirmPassword="",this.newPassword="",this.newPasswordConfirm=""}).catch(()=>{this.handleUserSaveError(),this.isLoading=!1,this.isSaveSuccessful=!1})},updateCurrentUser(){return this.userService.getUser().then(e=>{let s=e.data;return delete s.password,Shopware.State.commit("setCurrentUser",s)})},setMediaItem({targetId:e}){this.mediaRepository.get(e).then(e=>{this.avatarMediaItem=e}),this.user.avatarId=e},onDropMedia(e){this.setMediaItem({targetId:e.id})},onCloseConfirmPasswordModal(){this.confirmPassword="",this.confirmPasswordModal=!1},onUnlinkAvatar(){this.avatarMediaItem=null,this.user.avatarId=null},openMediaModal(){this.showMediaModal=!0},handleUserSaveError(){this.$route.name.includes("sw.profile.index")&&this.createNotificationError({message:this.$tc("sw-profile.index.notificationSaveErrorMessage")}),this.isLoading=!1},onChangeNewPassword(e){this.newPassword=e},onChangeNewPasswordConfirm(e){this.newPasswordConfirm=e},onMediaSelectionChange([e]){this.avatarMediaItem=e,this.user.avatarId=e.id},getMediaDefaultFolderId(){return this.mediaDefaultFolderService.getDefaultFolderId("user")},saveUserSearchPreferences(){return this.userSearchPreferences=this.userSearchPreferences??this.searchPreferencesService.createUserSearchPreferences(),this.userSearchPreferences.value=this.searchPreferences.map(({entityName:e,_searchable:s,fields:r})=>({[e]:{_searchable:s,...this.searchPreferencesService.processSearchPreferencesFields(r)}})),this.searchRankingService.clearCacheUserSearchConfiguration(),this.isLoading=!0,this.isSaveSuccessful=!1,this.userConfigService.upsert({[t.yz]:this.userSearchPreferences.value}).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0}).catch(e=>{this.isLoading=!1,this.isSaveSuccessful=!1,this.createNotificationError({message:e.message})})},onVerifyPasswordFinished(e){this.confirmPasswordModal=!1,this.isSaveSuccessful=!1,this.isLoading=!0,this.saveUser(e)}}}}}]);