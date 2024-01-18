(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[484],{"4JNw":function(e,i,s){},pm9V:function(e,i,s){var n=s("4JNw");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,s("P8hj").default)("0b3583d8",n,!0,{})},rTje:function(e,i,s){"use strict";s.r(i);s("pm9V"),i.default={template:'\n{% block sw_users_permissions_additional_permissions %}\n<sw-card\n    class="sw-users-permissions-additional-permissions"\n    position-identifier="sw-users-permissions-additional-permissions"\n    :title="$tc(\'sw-users-permissions.roles.additional-permissions.title\')"\n>\n    \n    {% block sw_users_permissions_additional_permissions_additional_privileges %}\n    <template\n        v-for="privilege in additionalPermissions"\n        {% if VUE3 %}\n        :key="`head-${privilege.key}`"\n        {% endif %}\n    >\n        \n        {% block sw_users_permissions_additional_permissions_additional_privileges_headline %}\n        <h4\n            {% if VUE2 %}\n            :key="`head-${privilege.key}`"\n            {% endif %}\n            :class="\'sw-users-permissions-additional-permissions_\' + privilege.key"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_additional_privileges_headline_content %}\n            <strong>\n                {{ $tc(\'sw-privileges.additional_permissions.\' + privilege.key + \'.label\') }}\n            </strong>\n            {% endblock %}\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_additional_permissions_additional_privileges_switches %}\n        <div\n            {% if VUE2 %}\n            :key="`body-${privilege.key}`"\n            {% endif %}\n            class="sw-users-permissions-additional-permissions__switches"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_additional_privileges_switches_content %}\n            <template\n                v-for="(value, roleName) in privilege.roles"\n                {% if VUE3 %}\n                :key="roleName"\n                {% endif %}\n            >\n                \n                {% block sw_users_permissions_additional_permissions_additional_privileges_switches_content_switch %}\n                <sw-switch-field\n                    {% if VUE2 %}\n                    :key="roleName"\n                    {% endif %}\n                    :disabled="disabled"\n                    :class="\'sw_users_permissions_additional_permissions_\' + privilege.key + \'_\' + roleName"\n                    :value="isPrivilegeSelected(privilege.key + \'.\' + roleName)"\n                    :label="$tc(\'sw-privileges.additional_permissions.\' + privilege.key + \'.\' + roleName)"\n                    :bordered="true"\n                    {% if VUE3 %}\n                    @update:value="onSelectPrivilege(privilege.key + \'.\' + roleName, $event)"\n                    {% else %}\n                    @change="onSelectPrivilege(privilege.key + \'.\' + roleName, $event)"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_additional_permissions_app_privileges %}\n    <template\n        v-for="privilege in appPermissions"\n        {% if VUE3 %}\n        :key="privilege.key"\n        {% endif %}\n    >\n        \n        {% block sw_users_permissions_additional_permissions_app_privileges_headline %}\n        <h4\n            :key="`head-${privilege.key}`"\n            class="sw-users-permissions-additional-permissions-app"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_app_privileges_headline_content %}\n            <strong>\n                {{ $tc(\'sw-privileges.additional_permissions.app.label\') }}\n            </strong>\n            {% endblock %}\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_additional_permissions_app_privileges_switches %}\n        <div\n            {% if VUE2 %}\n            :key="`body-${privilege.key}`"\n            {% endif %}\n            class="sw-users-permissions-additional-permissions__switches"\n        >\n            \n            {% block sw_users_permissions_additional_permissions_app_privileges_switches_content %}\n            <template\n                v-for="(key, roleName) in privilege.roles"\n                {% if VUE3 %}\n                :key="roleName"\n                {% endif %}\n            >\n                \n                {% block sw_users_permissions_additional_permissions_app_privileges_switches_content_switch %}\n                <sw-switch-field\n                    v-if="roleName === \'all\'"\n                    {% if VUE2 %}\n                    :key="roleName"\n                    {% endif %}\n                    :disabled="disabled"\n                    class="sw_users_permissions_additional_permissions_app_all"\n                    :value="isPrivilegeSelected(\'app.\' + roleName)"\n                    :label="$tc(\'sw-privileges.additional_permissions.app.all\')"\n                    :bordered="true"\n                    {% if VUE3 %}\n                    @update:value="changeAllAppPermissionsForKey(\'app.\' + roleName, $event)"\n                    {% else %}\n                    @change="changeAllAppPermissionsForKey(\'app.\' + roleName, $event)"\n                    {% endif %}\n                />\n\n                <sw-switch-field\n                    v-else\n                    {% if VUE2 %}\n                    :key="roleName"\n                    {% endif %}\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.additional_permissions.app.disabledCheckboxMessage\'),\n                        disabled: !isPrivilegeSelected(\'app.all\') || disabled,\n                        showOnDisabledElements: false\n                    }"\n                    :disabled="isPrivilegeSelected(\'app.all\') || disabled"\n                    :class="\'sw_users_permissions_additional_permissions_app_\' + roleName"\n                    :value="isPrivilegeSelected(\'app.\' + roleName)"\n                    :label="roleName"\n                    :bordered="true"\n                    {% if VUE3 %}\n                    @update:value="onSelectPrivilege(\'app.\' + roleName, $event)"\n                    {% else %}\n                    @change="onSelectPrivilege(\'app.\' + roleName, $event)"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["privileges"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{}},computed:{additionalPermissions:function(){return this.privileges.getPrivilegesMappings().filter((function(e){return"additional_permissions"===e.category&&"app"!==e.key}))},appPermissions:function(){return this.privileges.getPrivilegesMappings().filter((function(e){return"additional_permissions"===e.category&&"app"===e.key}))}},methods:{isPrivilegeSelected:function(e){return!!this.role.privileges&&this.role.privileges.includes(e)},onSelectPrivilege:function(e,i){i?this.role.privileges.push(e):this.role.privileges=this.role.privileges.filter((function(i){return i!==e}))},changeAllAppPermissionsForKey:function(e,i){var s=this;this.appPermissions.forEach((function(e){Object.keys(e.roles).forEach((function(e){var n="app.".concat(e);if(i){if(s.role.privileges.includes(n))return;s.role.privileges.push(n)}else s.role.privileges=s.role.privileges.filter((function(e){return e!==n}))}))}))}}}}}]);