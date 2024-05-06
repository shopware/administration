"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[2916],{2916:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});let{mapPropertyErrors:i}=Shopware.Component.getComponentHelper();var l={template:'\n{% block sw_profile_index_general %}\n<div class="sw-profile-index-general">\n    \n    {% block sw_profile_index_general_information %}\n    <sw-card\n        position-identifier="sw-profile-index-general"\n        :title="$tc(\'sw-profile.index.titleInfoCard\')"\n        :is-loading="isUserLoading || !languageId"\n    >\n        <sw-container v-bind="{ columns: \'repeat(auto-fit, minmax(250px, 1fr))\', gap: \'0 30px\' }">\n            \n            {% block sw_profile_index_general_information_firstname %}\n            <sw-text-field\n                v-model:value="user.firstName"\n                name="sw-field--user-firstName"\n                :label="$tc(\'sw-profile.index.labelFirstNameField\')"\n                :disabled="isDisabled || !acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_profile_index_general_information_lastname %}\n            <sw-text-field\n                v-model:value="user.lastName"\n                name="sw-field--user-lastName"\n                :label="$tc(\'sw-profile.index.labelLastNameField\')"\n                :disabled="isDisabled || !acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n        </sw-container>\n\n        <sw-container v-bind="{ columns: \'repeat(auto-fit, minmax(250px, 1fr))\', gap: \'0 30px\' }">\n            \n            {% block sw_profile_index_general_information_username %}\n            <sw-text-field\n                v-model:value="user.username"\n                name="sw-field--user-username"\n                :label="$tc(\'sw-profile.index.labelUsernameField\')"\n                :disabled="isDisabled || !acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_profile_index_general_information_language %}\n            <sw-select-field\n                v-model:value="user.localeId"\n                name="sw-field--user-localeId"\n                :label="$tc(\'sw-users-permissions.users.user-detail.labelLanguage\')"\n                :disabled="!acl.can(\'user.update_profile\')"\n                :placeholder="$tc(\'sw-users-permissions.users.user-detail.labelLanguagePlaceholder\')"\n            >\n                <option\n                    v-for="language in languages"\n                    :key="language.locale.id"\n                    :value="language.locale.id"\n                    :selected="user.localeId === language.locale.id"\n                >\n                    {{ language.customLabel }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n        </sw-container>\n\n        <sw-container v-bind="{ columns: \'repeat(auto-fit, minmax(250px, 1fr))\', gap: \'0 30px\' }">\n            \n            {% block sw_profile_index_general_information_email %}\n            <sw-text-field\n                v-model:value="user.email"\n                name="sw-field--user-email"\n                validation="email"\n                required\n                :label="$tc(\'sw-profile.index.labelEmailField\')"\n                :disabled="!acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_profile_index_general_information_timezone %}\n            <sw-single-select\n                v-model:value="user.timeZone"\n                name="sw-field--user-timeZone"\n                class="sw-profile--timezone"\n                :options="timezoneOptions"\n                required\n                :label="$tc(\'sw-users-permissions.users.user-detail.labelTimezone\')"\n                :is-loading="timezoneOptions.length <= 0"\n                :disabled="!acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_profile_index_general_image %}\n    <sw-card\n        v-if="acl.can(\'media.creator\')"\n        position-identifier="sw-profile-index-general-image"\n        :title="$tc(\'sw-profile.index.titleImageCard\')"\n        :is-loading="isUserLoading || !languageId"\n    >\n        \n        {% block sw_profile_index_general_image_content %}\n        <sw-upload-listener\n            auto-upload\n            upload-tag="sw-profile-upload-tag"\n            @media-upload-finish="onUploadMedia"\n        />\n        <sw-media-upload-v2\n            upload-tag="sw-profile-upload-tag"\n            :source="avatarMediaItem"\n            :source-context="user"\n            :default-folder="userRepository.schema.entity"\n            :label="$tc(\'sw-profile.index.labelUploadAvatar\')"\n            :disabled="!acl.can(\'user.update_profile\')"\n            :allow-multi-select="false"\n            @media-drop="onDropMedia"\n            @media-upload-sidebar-open="onOpenMedia"\n            @media-upload-remove-image="onRemoveMedia"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_profile_index_general_password %}\n    <sw-card\n        position-identifier="sw-profile-index-general-password"\n        :title="$tc(\'sw-profile.index.titlePasswordCard\')"\n        :is-loading="isUserLoading || !languageId"\n    >\n        \n        {% block sw_profile_index_general_password_new_password %}\n        <sw-password-field\n            v-model:value="computedNewPassword"\n            name="sw-field--computedNewPassword"\n            :label="$tc(\'sw-profile.index.labelNewPassword\')"\n            :disabled="!acl.can(\'user.update_profile\')"\n            :placeholder="$tc(\'sw-profile.index.placeholderNewPassword\')"\n            :error="userPasswordError"\n            autocomplete="off"\n        />\n        {% endblock %}\n\n        \n        {% block sw_profile_index_general_password_new_password_confirm %}\n        <sw-password-field\n            v-model:value="computedNewPasswordConfirm"\n            name="sw-field--computedNewPasswordConfirm"\n            :label="$tc(\'sw-profile.index.labelNewPasswordConfirm\')"\n            :disabled="!acl.can(\'user.update_profile\')"\n            :placeholder="$tc(\'sw-profile.index.placeholderNewPasswordConfirm\')"\n            :validation="computedNewPassword === computedNewPasswordConfirm"\n            autocomplete="off"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],props:{user:{type:Object,required:!0},languages:{type:Array,required:!0},newPassword:{type:String,required:!1,default:null},newPasswordConfirm:{type:String,required:!1,default:null},avatarMediaItem:{type:Object,required:!1,default:null},isUserLoading:{type:Boolean,required:!0},languageId:{type:String,required:!1,default:null},isDisabled:{type:Boolean,required:!0},userRepository:{type:Object,required:!0},timezoneOptions:{type:Array,required:!0}},computed:{...i("user",["password"]),computedNewPassword:{get(){return this.newPassword},set(e){this.$emit("new-password-change",e)}},computedNewPasswordConfirm:{get(){return this.newPasswordConfirm},set(e){this.$emit("new-password-confirm-change",e)}}},methods:{onUploadMedia(e){this.$emit("media-upload",{targetId:e.targetId})},onDropMedia(e){this.$emit("media-upload",{targetId:e.id})},onRemoveMedia(){this.$emit("media-remove")},onOpenMedia(){this.$emit("media-open")}}}}}]);