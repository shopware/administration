(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[95361],{20370:function(){},95361:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return i}});var t=o(504);o(13548);var i={template:'\n{% block sw_import_export_edit_profile_indicators %}\n<div class="sw-import-export-edit-profile-indicators">\n\n    \n    {% block sw_import_export_edit_profile_indicators_headline %}\n    <h3>{{ $tc(\'sw-import-export.profile.indicatorHeadline\') }}</h3>\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_indicators_text %}\n    <p class="sw-import-export-edit-profile-indicators__text">\n        {{ $tc(\'sw-import-export.profile.csvDescriptionBlock\') }}\n    </p>\n    {% endblock %}\n\n    <sw-container\n        columns="repeat(2, 1fr)"\n        gap="0 32px"\n    >\n        \n        {% block sw_import_export_edit_profile_indicators_separator_field %}\n        <sw-single-select\n            v-model:value="profile.delimiter"\n            required\n            show-clearable-button\n            class="sw-import-export-edit-profile-indicators__separator-select"\n            :label="$tc(\'sw-import-export.profile.separatorFieldLabel\')"\n            :error="profileDelimiterError"\n            :disabled="profile.systemDefault"\n            :options="supportedDelimiter"\n        />\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_indicators_enclosure_field %}\n        <sw-single-select\n            v-model:value="profile.enclosure"\n            required\n            show-clearable-button\n            class="sw-import-export-edit-profile-indicators__enclosure-select"\n            :label="$tc(\'sw-import-export.profile.enclosureFieldLabel\')"\n            :error="profileEnclosureError"\n            :disabled="profile.systemDefault"\n            :options="supportedEnclosures"\n        />\n        {% endblock %}\n    </sw-container>\n</div>\n{% endblock %}\n',props:{profile:{type:Object,required:!0}},computed:{...(0,t.mapPropertyErrors)("profile",["delimiter","enclosure"]),supportedDelimiter(){return[{value:"^",label:this.$tc("sw-import-export.profile.caretsLabel")},{value:",",label:this.$tc("sw-import-export.profile.commasLabel")},{value:";",label:this.$tc("sw-import-export.profile.semicolonLabel")}]},supportedEnclosures(){return[{value:'"',label:this.$tc("sw-import-export.profile.doubleQuoteLabel")}]}}}},13548:function(e,r,o){var t=o(20370);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),o(45346).Z("fd70e9e6",t,!0,{})}}]);