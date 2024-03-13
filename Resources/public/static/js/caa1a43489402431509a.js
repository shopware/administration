"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[81306],{81306:function(n,e,t){t.r(e),t.d(e,{default:function(){return i}});var i={template:'\n{% block sw_settings_listing_option_general_info %}\n<sw-card\n    :title="$tc(\'sw-settings-listing.base.general.title\')"\n    position-identifier="sw-settings-listing-option-general-info"\n>\n\n    \n    {% block sw_settings_listing_option_general_info_container %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0 20px"\n    >\n\n        \n        {% block sw_settings_listing_option_general_info_name %}\n        <sw-text-field\n            v-model:value="sortingOption.label"\n            class="sw-settings-listing-edit__general-input"\n            :label="$tc(\'sw-settings-listing.base.general.labelName\')"\n            :placeholder="$tc(\'sw-settings-listing.base.general.placeholderName\')"\n            :required="true"\n            :error="labelError"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_general_info_technical_name %}\n        <sw-text-field\n            v-model:value="sortingOption.key"\n            name="sw-field--listing-option-technicalName"\n            class="sw-settings-listing-option-general-info__field-technical-name"\n            required\n            :label="$tc(\'sw-settings-listing.base.general.labelTechnicalName\')"\n            :placeholder="$tc(\'sw-settings-listing.base.general.placeholderTechnicalName\')"\n            :error="technicalNameError"\n            :help-text="$tc(\'sw-settings-listing.base.general.helpTextTechnicalName\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_general_info_active %}\n        <sw-switch-field\n            v-model:value="sortingOption.active"\n            v-tooltip="{\n                showDelay: 300,\n                message: $tc(\'sw-cms.elements.productListing.config.sorting.defaultSortingCantBeDisabled\'),\n                disabled: !isDefaultSorting\n            }"\n            :disabled="isDefaultSorting"\n            class="sw-settings-listing-edit__general-input"\n            :bordered="true"\n            :label="$tc(\'sw-settings-listing.base.general.labelActive\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',props:{sortingOption:{type:Object,required:!0},isDefaultSorting:{type:Boolean,required:!0},technicalNameError:{type:Object,required:!1,default:{}},labelError:{type:Object,required:!1,default:{}}}}}}]);