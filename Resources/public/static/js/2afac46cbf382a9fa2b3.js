(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9663],{488373:function(){},909663:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}}),i(153473);var n={template:'\n{% block sw_import_export_edit_profile_import_settings %}\n<div class="sw-import-export-edit-profile-import-settings">\n    \n    {% block sw_import_export_edit_profile_import_settings_headline %}\n    <h3 class="sw-import-export-edit-profile-import-settings__headline">\n        {{ $tc(\'sw-import-export.profile.importSettingsHeadline\') }}\n    </h3>\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_import_settings_create_switch %}\n    <sw-switch-field\n        v-model:value="profile.config.createEntities"\n        class="sw-import-export-edit-profile-import-settings__create-switch"\n        :label="$tc(\'sw-import-export.profile.createEntitiesLabel\')"\n        :disabled="profile.systemDefault"\n        @update:value="onChange($event, \'updateEntities\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_import_settings_update_switch %}\n    <sw-switch-field\n        v-model:value="profile.config.updateEntities"\n        class="sw-import-export-edit-profile-import-settings__update-switch"\n        :label="$tc(\'sw-import-export.profile.updateEntitiesLabel\')"\n        :disabled="profile.systemDefault"\n        @update:value="onChange($event, \'createEntities\')"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,props:{profile:{type:Object,required:!0}},methods:{onChange(e,t){!1===e&&(this.profile.config[t]=!0)}}}},153473:function(e,t,i){var n=i(488373);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),i(745346).Z("2bbc31a9",n,!0,{})}}]);