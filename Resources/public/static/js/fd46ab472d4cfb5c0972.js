(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[585],{itI3:function(e,n,i){"use strict";i.r(n);var a=i("CsSd"),l=i.n(a);function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){l()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var s=Shopware.Component.getComponentHelper().mapPropertyErrors;n.default={template:'\n{% block sw_profile_index_general %}\n<div class="sw-profile-index-general">\n    \n    {% block sw_profile_index_general_information %}\n    <sw-card\n        position-identifier="sw-profile-index-general"\n        :title="$tc(\'sw-profile.index.titleInfoCard\')"\n        :is-loading="isUserLoading || !languageId"\n    >\n        <sw-container v-bind="{ columns: \'repeat(auto-fit, minmax(250px, 1fr))\', gap: \'0 30px\' }">\n            \n            {% block sw_profile_index_general_information_firstname %}\n            <sw-text-field\n                {% if VUE3 %}\n                v-model:value="user.firstName"\n                {% else %}\n                v-model="user.firstName"\n                {% endif %}\n                :label="$tc(\'sw-profile.index.labelFirstNameField\')"\n                :disabled="isDisabled || !acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_profile_index_general_information_lastname %}\n            <sw-text-field\n                {% if VUE3 %}\n                v-model:value="user.lastName"\n                {% else %}\n                v-model="user.lastName"\n                {% endif %}\n                :label="$tc(\'sw-profile.index.labelLastNameField\')"\n                :disabled="isDisabled || !acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n        </sw-container>\n\n        <sw-container v-bind="{ columns: \'repeat(auto-fit, minmax(250px, 1fr))\', gap: \'0 30px\' }">\n            \n            {% block sw_profile_index_general_information_username %}\n            <sw-text-field\n                {% if VUE3 %}\n                v-model:value="user.username"\n                {% else %}\n                v-model="user.username"\n                {% endif %}\n                :label="$tc(\'sw-profile.index.labelUsernameField\')"\n                :disabled="isDisabled || !acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_profile_index_general_information_language %}\n            <sw-select-field\n                {% if VUE3 %}\n                v-model:value="user.localeId"\n                {% else %}\n                v-model="user.localeId"\n                {% endif %}\n                :label="$tc(\'sw-users-permissions.users.user-detail.labelLanguage\')"\n                :disabled="!acl.can(\'user.update_profile\')"\n                :placeholder="$tc(\'sw-users-permissions.users.user-detail.labelLanguagePlaceholder\')"\n            >\n                <option\n                    v-for="language in languages"\n                    :key="language.locale.id"\n                    :value="language.locale.id"\n                    :selected="user.localeId === language.locale.id"\n                >\n                    {{ language.customLabel }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n        </sw-container>\n\n        <sw-container v-bind="{ columns: \'repeat(auto-fit, minmax(250px, 1fr))\', gap: \'0 30px\' }">\n            \n            {% block sw_profile_index_general_information_email %}\n            <sw-text-field\n                {% if VUE3 %}\n                v-model:value="user.email"\n                {% else %}\n                v-model="user.email"\n                {% endif %}\n                validation="email"\n                name="sw-field--email"\n                required\n                :label="$tc(\'sw-profile.index.labelEmailField\')"\n                :disabled="!acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_profile_index_general_information_timezone %}\n            <sw-single-select\n                {% if VUE3 %}\n                v-model:value="user.timeZone"\n                {% else %}\n                v-model="user.timeZone"\n                {% endif %}\n                class="sw-profile--timezone"\n                :options="timezoneOptions"\n                required\n                name="sw-field--timezone"\n                :label="$tc(\'sw-users-permissions.users.user-detail.labelTimezone\')"\n                :is-loading="timezoneOptions.length <= 0"\n                :disabled="!acl.can(\'user.update_profile\')"\n            />\n            {% endblock %}\n        </sw-container>\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_profile_index_general_image %}\n    <sw-card\n        v-if="acl.can(\'media.creator\')"\n        position-identifier="sw-profile-index-general-image"\n        :title="$tc(\'sw-profile.index.titleImageCard\')"\n        :is-loading="isUserLoading || !languageId"\n    >\n        \n        {% block sw_profile_index_general_image_content %}\n        <sw-upload-listener\n            auto-upload\n            upload-tag="sw-profile-upload-tag"\n            @media-upload-finish="onUploadMedia"\n        />\n        <sw-media-upload-v2\n            upload-tag="sw-profile-upload-tag"\n            :source="avatarMediaItem"\n            :source-context="user"\n            :default-folder="userRepository.schema.entity"\n            :label="$tc(\'sw-profile.index.labelUploadAvatar\')"\n            :disabled="!acl.can(\'user.update_profile\')"\n            :allow-multi-select="false"\n            @media-drop="onDropMedia"\n            @media-upload-sidebar-open="onOpenMedia"\n            @media-upload-remove-image="onRemoveMedia"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_profile_index_general_password %}\n    <sw-card\n        position-identifier="sw-profile-index-general-password"\n        :title="$tc(\'sw-profile.index.titlePasswordCard\')"\n        :is-loading="isUserLoading || !languageId"\n    >\n        \n        {% block sw_profile_index_general_password_new_password %}\n        <sw-password-field\n            {% if VUE3 %}\n            v-model:value="computedNewPassword"\n            {% else %}\n            v-model="computedNewPassword"\n            {% endif %}\n            :label="$tc(\'sw-profile.index.labelNewPassword\')"\n            :disabled="!acl.can(\'user.update_profile\')"\n            :placeholder="$tc(\'sw-profile.index.placeholderNewPassword\')"\n            :error="userPasswordError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_profile_index_general_password_new_password_confirm %}\n        <sw-password-field\n            {% if VUE3 %}\n            v-model:value="computedNewPasswordConfirm"\n            {% else %}\n            v-model="computedNewPasswordConfirm"\n            {% endif %}\n            :label="$tc(\'sw-profile.index.labelNewPasswordConfirm\')"\n            :disabled="!acl.can(\'user.update_profile\')"\n            :placeholder="$tc(\'sw-profile.index.placeholderNewPasswordConfirm\')"\n            :validation="computedNewPassword === computedNewPasswordConfirm"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl"],props:{user:{type:Object,required:!0},languages:{type:Array,required:!0},newPassword:{type:String,required:!1,default:null},newPasswordConfirm:{type:String,required:!1,default:null},avatarMediaItem:{type:Object,required:!1,default:null},isUserLoading:{type:Boolean,required:!0},languageId:{type:String,required:!1,default:null},isDisabled:{type:Boolean,required:!0},userRepository:{type:Object,required:!0},timezoneOptions:{type:Array,required:!0}},computed:r(r({},s("user",["password"])),{},{computedNewPassword:{get:function(){return this.newPassword},set:function(e){this.$emit("new-password-change",e)}},computedNewPasswordConfirm:{get:function(){return this.newPasswordConfirm},set:function(e){this.$emit("new-password-confirm-change",e)}}}),methods:{onUploadMedia:function(e){this.$emit("media-upload",{targetId:e.targetId})},onDropMedia:function(e){this.$emit("media-upload",{targetId:e.id})},onRemoveMedia:function(){this.$emit("media-remove")},onOpenMedia:function(){this.$emit("media-open")}}}}}]);