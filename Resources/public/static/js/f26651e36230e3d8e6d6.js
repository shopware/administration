(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[488],{UjKB:function(e,s,i){},aCyM:function(e,s,i){var r=i("UjKB");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i("ydqr").default)("414b2bbf",r,!0,{})},kCWW:function(e,s,i){"use strict";i.r(s);i("aCyM"),s.default={template:'<div class="sw-users-permissions-role-view-detailed">\n    <sw-alert>\n        {{ $tc(\'sw-users-permissions.roles.view.detailed.alertText\') }}\n    </sw-alert>\n\n    <sw-users-permissions-detailed-permissions-grid\n        :role="role"\n        :detailed-privileges="detailedPrivileges"\n        :disabled="!acl.can(\'users_and_permissions.editor\')"\n    />\n\n    \n    {% block sw_users_permissions_role_role_view_general_card_view_additional_permissions %}\n    <sw-users-permissions-detailed-additional-permissions\n        :role="role"\n        :detailed-privileges="detailedPrivileges"\n        :disabled="!acl.can(\'users_and_permissions.editor\')"\n    />\n    {% endblock %}\n</div>\n',inject:["acl"],props:{role:{type:Object,required:!0},detailedPrivileges:{type:Array,required:!0}}}}}]);