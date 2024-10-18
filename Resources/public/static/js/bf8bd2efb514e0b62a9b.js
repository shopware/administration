(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[61223],{850977:function(){},261223:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return n}}),i(111943);var n={template:'\n{% block sw_users_permissions_detailed_permissions_grid %}\n<sw-card\n    class="sw-users-permissions-detailed-permissions-grid"\n    position-identifier="sw-users-permissions-detailed-permissions-grid"\n    :title="$tc(\'sw-users-permissions.roles.grid.title\')"\n>\n    <div class="sw-users-permissions-detailed-permissions-grid__grid">\n        \n        {% block sw_users_permissions_detailed_permissions_grid_header %}\n        <div class="sw-users-permissions-detailed-permissions-grid__entry sw-users-permissions-detailed-permissions-grid__entry-header">\n            \n            {% block sw_users_permissions_detailed_permissions_grid_header_title %}\n            <div class="sw-users-permissions-detailed-permissions-grid__title"></div>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_detailed_permissions_grid_header_roles %}\n            <div\n                v-for="permissionType in permissionTypes"\n                :key="permissionType"\n                class="sw-users-permissions-detailed-permissions-grid__checkbox-wrapper"\n            >\n                \n                {% block sw_users_permissions_detailed_permissions_grid_header_roles_name %}\n                {{ $tc(\'sw-privileges.permissionType.\' + permissionType) }}\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_detailed_permissions_grid_permissions %}\n        <div\n            v-for="entity in allEntities"\n            :key="entity"\n            :class="\'sw-users-permissions-detailed-permissions-grid__entry_\' + entity"\n            class="sw-users-permissions-detailed-permissions-grid__entry"\n        >\n            \n            {% block sw_users_permissions_detailed_permissions_grid_permissions_title %}\n            <div class="sw-users-permissions-detailed-permissions-grid__title">\n                {{ entity }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_detailed_permissions_grid_permissions_roles %}\n            <div\n                v-for="permissionType in permissionTypes"\n                :key="permissionType"\n                :class="\'sw-users-permissions-detailed-permissions-grid__role_\' + permissionType"\n                class="sw-users-permissions-detailed-permissions-grid__checkbox-wrapper"\n            >\n                \n                {% block sw_users_permissions_detailed_permissions_grid_permissions_roles_field %}\n                {# Checkbox are hardcoded for better performance #}\n                <div class="sw-field--checkbox">\n                    <div class="sw-field--checkbox__content">\n                        <div class="sw-field__checkbox">\n                            \n                            <input\n                                type="checkbox"\n                                :name="entity"\n                                :disabled="isEntityDisabled(entity, permissionType)"\n                                :checked="isEntitySelected(entity, permissionType)"\n                                @change="changePermissionForEntity(entity, permissionType)"\n                            >\n                            <div class="sw-field__checkbox-state">\n                                <span\n                                    class="sw-icon sw-icon--fill"\n                                    style="width: 16px; height: 16px;"\n                                >\n                                    <svg\n                                        xmlns="http://www.w3.org/2000/svg"\n                                        xmlns:xlink="http://www.w3.org/1999/xlink"\n                                        width="16"\n                                        height="16"\n                                        viewBox="0 0 16 16"\n                                    >\n                                        <defs>\n                                            <path\n                                                id="icons-small-default-checkmark-line-small-a"\n                                                d="M5.70710678,7.29289322 C5.31658249,6.90236893 4.68341751,6.90236893 4.29289322,7.29289322 C3.90236893,7.68341751 3.90236893,8.31658249 4.29289322,8.70710678 L6.29289322,10.7071068 C6.68341751,11.0976311 7.31658249,11.0976311 7.70710678,10.7071068 L11.7071068,6.70710678 C12.0976311,6.31658249 12.0976311,5.68341751 11.7071068,5.29289322 C11.3165825,4.90236893 10.6834175,4.90236893 10.2928932,5.29289322 L7,8.58578644 L5.70710678,7.29289322 Z"\n                                            />\n                                        </defs>\n                                        <use\n                                            fill="#758CA3"\n                                            fill-rule="evenodd"\n                                            xlink:href="#icons-small-default-checkmark-line-small-a"\n                                        />\n                                    </svg>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["privileges"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},detailedPrivileges:{type:Array,required:!0}},computed:{allEntities(){return[...Shopware.Application.getContainer("factory").entityDefinition.getDefinitionRegistry().keys()]},allGeneralSelectedPrivileges(){return this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges)},permissionTypes(){return["read","update","create","delete"]}},methods:{isEntitySelected(e,s){let i=`${e}:${s}`;return[...this.allGeneralSelectedPrivileges,...this.detailedPrivileges].includes(i)},isEntityDisabled(e,s){if(this.disabled)return!0;let i=`${e}:${s}`;return this.allGeneralSelectedPrivileges.includes(i)},changePermissionForEntity(e,s){let i=`${e}:${s}`,n=this.detailedPrivileges.indexOf(i);if(n>=0){this.detailedPrivileges.splice(n,1);return}this.detailedPrivileges.push(i)}}}},111943:function(e,s,i){var n=i(850977);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),i(745346).Z("70de76b3",n,!0,{})}}]);