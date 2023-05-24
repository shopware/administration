(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[584],{cuCh:function(e,n,r){"use strict";r.r(n);var s=r("XkwL"),t=r.n(s),a=r("HZZ/"),i=r.n(a),o=r("J58c"),c=r.n(o),l=r("hJxD"),d=r.n(l),u=r("o+SG"),f=r("2p/5"),h={namespaced:!0,state:function(){return{searchPreferences:[],userSearchPreferences:null}},mutations:{setSearchPreferences:function(e,n){e.searchPreferences=n},setUserSearchPreferences:function(e,n){e.userSearchPreferences=n}}};function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){c()(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var m=Shopware,g=m.Component,v=m.Mixin,S=m.State,b=Shopware.Data.Criteria,P=g.getComponentHelper(),_=P.mapState,k=P.mapPropertyErrors;n.default={template:'\n{% block sw_profile_index %}\n<sw-page class="sw-profile-index">\n    <template #smart-bar-back>\n        \n        {% block sw_profile_index_smart_bar_back %}\n        <span></span>\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-header>\n        \n        {% block sw_profile_index_headline %}\n        <h2>{{ $tc(\'sw-profile.general.headlineProfile\') }}</h2>\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-actions>\n        \n        {% block sw_profile_index_actions %}\n        <sw-button-process\n            class="sw-profile__save-action"\n            variant="primary"\n            :is-loading="isLoading || isUserLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || isUserLoading || !acl.can(\'user.update_profile\')"\n            @process-finish="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-profile.index.buttonSaveLabel\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_profile_index_tabs %}\n            <sw-tabs\n                position-identifier="sw-profile-index"\n            >\n                \n                {% block sw_profile_index_tabs_item_general %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.profile.index.general\' }"\n                    :title="$tc(\'sw-profile.tabGeneral.title\')"\n                >\n                    {{ $tc(\'sw-profile.tabGeneral.title\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_profile_index_tabs_item_search_preferences %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.profile.index.searchPreferences\' }"\n                    :title="$tc(\'sw-profile.tabSearchPreferences.title\')"\n                >\n                    {{ $tc(\'sw-profile.tabSearchPreferences.title\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_profile_index_router_view %}\n            <template v-if="isUserLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <router-view\n                v-else\n                v-bind="{\n                    user,\n                    timezoneOptions,\n                    languages,\n                    newPassword,\n                    newPasswordConfirm,\n                    avatarMediaItem,\n                    isUserLoading,\n                    languageId,\n                    isDisabled,\n                    userRepository,\n                }"\n                @new-password-change="onChangeNewPassword"\n                @new-password-confirm-change="onChangeNewPasswordConfirm"\n                @media-upload="setMediaItem"\n                @media-remove="onUnlinkAvatar"\n                @media-open="openMediaModal"\n            />\n            {% endblock %}\n        </sw-card-view>\n\n        \n        {% block sw_profile_index_content_confirm_password_modal %}\n        <sw-verify-user-modal\n            v-if="confirmPasswordModal"\n            @verified="onVerifyPasswordFinished"\n            @close="onCloseConfirmPasswordModal"\n        />\n\n        {# @deprecated tag:v6.6.0 - will be removed #}\n        \n        {% block sw_profile_index_content_confirm_password_modal_input__confirm_password %}\n        {% endblock %}\n\n        {# @deprecated tag:v6.6.0 - will be removed #}\n        \n        {% block sw_profile_index_content_confirm_password_modal_footer %}\n        {% endblock %}\n\n        {# @deprecated tag:v6.6.0 - will be removed #}\n        \n        {% block sw_profile_index_content_confirm_password_modal_actions_cancel %}\n        {% endblock %}\n\n        {# @deprecated tag:v6.6.0 - will be removed #}\n        \n        {% block sw_profile_index_content_confirm_password_modal_actions_change %}\n        {% endblock %}\n\n        {% endblock %}\n\n        \n        {% block sw_profile_index_media_upload_actions_media_modal %}\n        <sw-media-modal-v2\n            v-if="showMediaModal"\n            :allow-multi-select="false"\n            :initial-folder-id="mediaDefaultFolderId"\n            :entity-context="user.getEntityName()"\n            @modal-close="showMediaModal = false"\n            @media-modal-selection-change="onMediaSelectionChange"\n        />\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',inject:["userService","loginService","mediaDefaultFolderService","repositoryFactory","acl","searchPreferencesService","searchRankingService","userConfigService"],mixins:[v.getByName("notification")],data:function(){return{user:{username:"",email:""},languages:[],imageSize:140,newPassword:null,newPasswordConfirm:null,confirmPassword:null,avatarMediaItem:null,uploadTag:"sw-profile-upload-tag",isLoading:!1,isUserLoading:!0,isSaveSuccessful:!1,confirmPasswordModal:!1,mediaDefaultFolderId:null,showMediaModal:!1,timezoneOptions:[]}},metaInfo:function(){return{title:this.$createTitle()}},computed:w(w(w({},_("swProfile",["searchPreferences"])),k("user",["email","timeZone"])),{},{userSearchPreferences:{get:function(){return S.get("swProfile").userSearchPreferences},set:function(e){S.commit("swProfile/setUserSearchPreferences",e)}},isDisabled:function(){return!0},userRepository:function(){return this.repositoryFactory.create("user")},languageRepository:function(){return this.repositoryFactory.create("language")},localeRepository:function(){return this.repositoryFactory.create("locale")},mediaRepository:function(){return this.repositoryFactory.create("media")},userMediaCriteria:function(){return this.user.id,null},languageId:function(){return Shopware.State.get("session").languageId}}),watch:{$route:function(e){e&&"sw.profile.index.searchPreferences"!==e.name&&this.resetGeneralData()},"user.avatarMedia.id":function(){var e;null!==(e=this.user.avatarMedia)&&void 0!==e&&e.id&&this.acl.can("media.creator")&&this.setMediaItem({targetId:this.user.avatarMedia.id})},languageId:function(){this.createdComponent()}},beforeCreate:function(){S.registerModule("swProfile",h)},created:function(){this.createdComponent()},beforeMount:function(){this.beforeMountComponent()},beforeDestroy:function(){S.unregisterModule("swProfile")},methods:{createdComponent:function(){var e=this;this.isUserLoading=!0;var n=new Promise((function(n){n(e.languageId)}));this.userPromise=this.getUserData(),this.timezoneOptions=Shopware.Service("timezoneService").getTimezoneOptions();var r=[n,this.userPromise];this.acl.can("media.creator")&&this.getMediaDefaultFolderId().then((function(n){e.mediaDefaultFolderId=n})).catch((function(){e.mediaDefaultFolderId=null})),Promise.all(r).then((function(){e.loadLanguages()})).then((function(){e.isUserLoading=!1}))},beforeMountComponent:function(){var e=this;this.userPromise.then((function(n){e.user=n}))},loadLanguages:function(){var e=this,n=Shopware.Application.getContainer("factory").locale,r=Array.from(n.getLocaleRegistry().keys()),s=new b(1,500);return s.addAssociation("locale"),s.addSorting(b.sort("locale.name","ASC")),s.addSorting(b.sort("locale.territory","ASC")),s.addFilter(b.equalsAny("locale.code",r)),this.languageRepository.search(s).then((function(n){e.languages=[];var r=[],s="";return n.forEach((function(n){n.customLabel="".concat(n.locale.translated.name," (").concat(n.locale.translated.territory,")"),e.languages.push(n),r.push(n.localeId),n.locale.code===Shopware.Context.app.fallbackLocale&&(s=n.localeId)})),r.includes(e.user.localeId)||(e.user.localeId=s),e.isUserLoading=!1,e.languages}))},loadTimezones:function(){},getUserData:function(){var e=this;return i()(d.a.mark((function n(){var r,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r=e.$route.params.user)){n.next=3;break}return n.abrupt("return",e.userRepository.get(r.id));case 3:return n.next=5,e.userService.getUser();case 5:return s=n.sent,n.abrupt("return",e.userRepository.get(s.data.id));case 7:case"end":return n.stop()}}),n)})))()},resetGeneralData:function(){this.newPassword=null,this.newPasswordConfirm=null,this.createdComponent(),this.beforeMountComponent()},saveFinish:function(){var e=this;return i()(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isSaveSuccessful=!1,n.next=3,e.getUserData();case 3:e.user=n.sent;case 4:case"end":return n.stop()}}),n)})))()},onSave:function(){if("sw.profile.index.searchPreferences"!==this.$route.name){if(!1!==this.checkEmail()){var e=this.checkPassword();null!==e&&!0!==e||(this.confirmPasswordModal=!0)}}else this.saveUserSearchPreferences()},checkEmail:function(){return!(!this.user.email||!Object(u.b)(this.user.email))||(this.createErrorMessage(this.$tc("sw-profile.index.notificationInvalidEmailErrorMessage")),!1)},checkPassword:function(){return this.newPassword&&this.newPassword.length>0?this.newPassword!==this.newPasswordConfirm?(this.createErrorMessage(this.$tc("sw-profile.index.notificationPasswordErrorMessage")),!1):(this.user.password=this.newPassword,!0):null},createErrorMessage:function(e){this.createNotificationError({message:e})},saveUser:function(e){var n=this;if(!this.acl.can("user:editor")){var r=this.userRepository.getSyncChangeset([this.user]);return delete r.changeset[0].changes.id,void this.userService.updateUser(r.changeset[0].changes).then(i()(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.updateCurrentUser();case 2:n.isLoading=!1,n.isSaveSuccessful=!0,Shopware.Service("localeHelper").setLocaleWithId(n.user.localeId);case 5:case"end":return e.stop()}}),e)})))).catch((function(e){var r;S.dispatch("error/addApiError",{expression:"user.".concat(null===(r=n.user)||void 0===r?void 0:r.id,".password"),error:new Shopware.Classes.ShopwareError(e.response.data.errors[0])}),n.createNotificationError({message:n.$tc("sw-profile.index.notificationSaveErrorMessage")}),n.isLoading=!1,n.isSaveSuccessful=!1}))}"string"==typeof e&&((e=w({},Shopware.Context.api)).authToken.access=e),this.userRepository.save(this.user,e).then(i()(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.updateCurrentUser();case 2:Shopware.Service("localeHelper").setLocaleWithId(n.user.localeId),n.newPassword?n.loginService.loginByUsername(n.user.username,n.newPassword).then((function(){n.isSaveSuccessful=!0})).catch((function(){n.handleUserSaveError()})).finally((function(){n.isLoading=!1})):(n.isLoading=!1,n.isSaveSuccessful=!0),n.confirmPassword="",n.newPassword="",n.newPasswordConfirm="";case 7:case"end":return e.stop()}}),e)})))).catch((function(){n.handleUserSaveError(),n.isLoading=!1,n.isSaveSuccessful=!1}))},updateCurrentUser:function(){return this.userService.getUser().then((function(e){var n=e.data;return delete n.password,Shopware.State.commit("setCurrentUser",n)}))},setMediaItem:function(e){var n=this,r=e.targetId;this.mediaRepository.get(r).then((function(e){n.avatarMediaItem=e})),this.user.avatarId=r},onDropMedia:function(e){this.setMediaItem({targetId:e.id})},onSubmitConfirmPassword:function(){},onCloseConfirmPasswordModal:function(){this.confirmPassword="",this.confirmPasswordModal=!1},onUnlinkAvatar:function(){this.avatarMediaItem=null,this.user.avatarId=null},openMediaModal:function(){this.showMediaModal=!0},handleUserSaveError:function(){this.$route.name.includes("sw.profile.index")&&this.createNotificationError({message:this.$tc("sw-profile.index.notificationSaveErrorMessage")}),this.isLoading=!1},onChangeNewPassword:function(e){this.newPassword=e},onChangeNewPasswordConfirm:function(e){this.newPasswordConfirm=e},onMediaSelectionChange:function(e){var n=t()(e,1)[0];this.avatarMediaItem=n,this.user.avatarId=n.id},getMediaDefaultFolderId:function(){return this.mediaDefaultFolderService.getDefaultFolderId("user")},saveUserSearchPreferences:function(){var e,n=this;return this.userSearchPreferences=null!==(e=this.userSearchPreferences)&&void 0!==e?e:this.searchPreferencesService.createUserSearchPreferences(),this.userSearchPreferences.value=this.searchPreferences.map((function(e){var r=e.entityName,s=e._searchable,t=e.fields;return c()({},r,w({_searchable:s},n.searchPreferencesService.processSearchPreferencesFields(t)))})),this.searchRankingService.clearCacheUserSearchConfiguration(),this.isLoading=!0,this.isSaveSuccessful=!1,this.userConfigService.upsert(c()({},f.a,this.userSearchPreferences.value)).then((function(){n.isLoading=!1,n.isSaveSuccessful=!0})).catch((function(e){n.isLoading=!1,n.isSaveSuccessful=!1,n.createNotificationError({message:e.message})}))},onVerifyPasswordFinished:function(e){this.confirmPasswordModal=!1,this.isSaveSuccessful=!1,this.isLoading=!0,this.saveUser(e)}}}}}]);