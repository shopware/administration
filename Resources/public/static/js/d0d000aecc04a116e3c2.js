(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[659],{C5y7:function(e,r,n){"use strict";n.r(r);var s=n("CsSd"),i=n.n(s);function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,s)}return n}var l=Shopware.Component.getComponentHelper().mapPropertyErrors;r.default={template:'<div class="sw-users-permissions-role-view-general">\n    \n    {% block sw_users_permissions_role_role_view_general_card_view_basic_information %}\n    <sw-card\n        :title="$tc(\'sw-users-permissions.roles.detail.basicInformation\')"\n        position-identifier="sw-users-permissions-role-view-general"\n    >\n        \n        {% block sw_users_permissions_role_role_view_general_card_view_basic_information_name %}\n        <sw-text-field\n            {% if VUE3 %}\n            v-model:value="role.name"\n            {% else %}\n            v-model="role.name"\n            {% endif %}\n            name="sw-field--role-name"\n            :error="roleNameError"\n            :disabled="!acl.can(\'users_and_permissions.editor\')"\n            :label="$tc(\'sw-users-permissions.roles.detail.labelName\')"\n            required\n        />\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_role_role_view_general_card_view_basic_information_description %}\n        <sw-textarea-field\n            {% if VUE3 %}\n            v-model:value="role.description"\n            {% else %}\n            v-model="role.description"\n            {% endif %}\n            name="sw-field--role-description"\n            :error="roleDescriptionError"\n            :disabled="!acl.can(\'users_and_permissions.editor\')"\n            :label="$tc(\'sw-users-permissions.roles.detail.labelDescription\')"\n        />\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_role_view_general_card_view_permissions %}\n    <sw-users-permissions-permissions-grid\n        :role="role"\n        :disabled="!acl.can(\'users_and_permissions.editor\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_role_role_view_general_card_view_additional_permissions %}\n    <sw-users-permissions-additional-permissions\n        :role="role"\n        :disabled="!acl.can(\'users_and_permissions.editor\')"\n    />\n    {% endblock %}\n</div>\n',inject:["acl"],props:{role:{type:Object,required:!0}},computed:function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i()(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},l("role",["name","description"]))}}}]);