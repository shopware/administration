(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[487],{"8Xlk":function(s,e,i){"use strict";i.r(e);var n=i("6lmj"),r=i.n(n);i("l7d1"),e.default={template:'\n{% block sw_users_permissions_detailed_permissions_grid %}\n<sw-card\n    class="sw-users-permissions-detailed-permissions-grid"\n    position-identifier="sw-users-permissions-detailed-permissions-grid"\n    :title="$tc(\'sw-users-permissions.roles.grid.title\')"\n>\n    <div class="sw-users-permissions-detailed-permissions-grid__grid">\n        \n        {% block sw_users_permissions_detailed_permissions_grid_header %}\n        <div class="sw-users-permissions-detailed-permissions-grid__entry sw-users-permissions-detailed-permissions-grid__entry-header">\n            \n            {% block sw_users_permissions_detailed_permissions_grid_header_title %}\n            <div class="sw-users-permissions-detailed-permissions-grid__title"></div>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_detailed_permissions_grid_header_roles %}\n            <div\n                v-for="permissionType in permissionTypes"\n                :key="permissionType"\n                class="sw-users-permissions-detailed-permissions-grid__checkbox-wrapper"\n            >\n                \n                {% block sw_users_permissions_detailed_permissions_grid_header_roles_name %}\n                {{ $tc(\'sw-privileges.permissionType.\' + permissionType) }}\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_users_permissions_detailed_permissions_grid_permissions %}\n        <div\n            v-for="entity in allEntities"\n            :key="entity"\n            :class="\'sw-users-permissions-detailed-permissions-grid__entry_\' + entity"\n            class="sw-users-permissions-detailed-permissions-grid__entry"\n        >\n            \n            {% block sw_users_permissions_detailed_permissions_grid_permissions_title %}\n            <div class="sw-users-permissions-detailed-permissions-grid__title">\n                {{ entity }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_users_permissions_detailed_permissions_grid_permissions_roles %}\n            <div\n                v-for="permissionType in permissionTypes"\n                :key="permissionType"\n                :class="\'sw-users-permissions-detailed-permissions-grid__role_\' + permissionType"\n                class="sw-users-permissions-detailed-permissions-grid__checkbox-wrapper"\n            >\n                \n                {% block sw_users_permissions_detailed_permissions_grid_permissions_roles_field %}\n                {# Checkbox are hardcoded for better performance #}\n                <div class="sw-field--checkbox">\n                    <div class="sw-field--checkbox__content">\n                        <div class="sw-field__checkbox">\n                            \n                            <input\n                                type="checkbox"\n                                :name="entity"\n                                :disabled="isEntityDisabled(entity, permissionType)"\n                                :checked="isEntitySelected(entity, permissionType)"\n                                @change="changePermissionForEntity(entity, permissionType)"\n                            >\n                            <div class="sw-field__checkbox-state">\n                                <span\n                                    class="sw-icon sw-icon--fill"\n                                    style="width: 16px; height: 16px;"\n                                >\n                                    <svg\n                                        xmlns="http://www.w3.org/2000/svg"\n                                        xmlns:xlink="http://www.w3.org/1999/xlink"\n                                        width="16"\n                                        height="16"\n                                        viewBox="0 0 16 16"\n                                    >\n                                        <defs>\n                                            <path\n                                                id="icons-small-default-checkmark-line-small-a"\n                                                d="M5.70710678,7.29289322 C5.31658249,6.90236893 4.68341751,6.90236893 4.29289322,7.29289322 C3.90236893,7.68341751 3.90236893,8.31658249 4.29289322,8.70710678 L6.29289322,10.7071068 C6.68341751,11.0976311 7.31658249,11.0976311 7.70710678,10.7071068 L11.7071068,6.70710678 C12.0976311,6.31658249 12.0976311,5.68341751 11.7071068,5.29289322 C11.3165825,4.90236893 10.6834175,4.90236893 10.2928932,5.29289322 L7,8.58578644 L5.70710678,7.29289322 Z"\n                                            />\n                                        </defs>\n                                        <use\n                                            fill="#758CA3"\n                                            fill-rule="evenodd"\n                                            xlink:href="#icons-small-default-checkmark-line-small-a"\n                                        />\n                                    </svg>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n</sw-card>\n{% endblock %}\n',inject:["privileges"],props:{role:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1},detailedPrivileges:{type:Array,required:!0}},computed:{allEntities:function(){var s=Shopware.Application.getContainer("factory").entityDefinition.getDefinitionRegistry();return r()(s.keys())},allGeneralSelectedPrivileges:function(){return this.privileges.getPrivilegesForAdminPrivilegeKeys(this.role.privileges)},permissionTypes:function(){return["read","update","create","delete"]}},methods:{isEntitySelected:function(s,e){var i="".concat(s,":").concat(e);return[].concat(r()(this.allGeneralSelectedPrivileges),r()(this.detailedPrivileges)).includes(i)},isEntityDisabled:function(s,e){if(this.disabled)return!0;var i="".concat(s,":").concat(e);return this.allGeneralSelectedPrivileges.includes(i)},changePermissionForEntity:function(s,e){var i="".concat(s,":").concat(e),n=this.detailedPrivileges.indexOf(i);n>=0?this.detailedPrivileges.splice(n,1):this.detailedPrivileges.push(i)}}}},"RXL/":function(s,e,i){},l7d1:function(s,e,i){var n=i("RXL/");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,i("P8hj").default)("15ab1bf8",n,!0,{})}}]);