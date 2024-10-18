"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27240],{828094:function(n,s){s.Z='\n{% block sw_extension_permissions_details_modal %}\n<sw-modal\n    class="sw-extension-permissions-details-modal"\n    :title="modalTitle"\n    v-on="listeners"\n>\n    \n    {% block sw_extension_permissions_details_modal_content %}\n    \n    {% block sw_extension_permissions_details_modal_table %}\n    <table class="sw-extension-permissions-details-modal__table">\n        \n        {% block sw_extension_permissions_details_modal_table_head %}\n        <thead class="sw-extension-permissions-details-modal__operations">\n            \n            {% block sw_extension_permissions_details_modal_table_head_row %}\n            <tr class="sw-extension-permissions-details-modal__grid-columns">\n                <td></td>\n                <td\n                    v-for="operation in operations"\n                    :key="operation.label"\n                    class="sw-extension-permissions-details-modal__operation-header"\n                >\n                    {{ operation.label }}\n                </td>\n            </tr>\n            {% endblock %}\n        </thead>\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_details_modal_table_body %}\n        <tbody>\n            \n            {% block sw_extension_permissions_details_modal_table_permissions %}\n            <template\n                v-for="(permissionCategory, category) in permissions"\n                :key="`permission-${category}`"\n            >\n                \n                {% block sw_extension_permissions_details_modal_permissions_category %}\n                <tr\n                    :id="`permission-${category}`"\n                    class="sw-extension-permissions-details-modal__category"\n                >\n                    <td>{{ categoryLabel(category) }}</td>\n                </tr>\n                {% endblock %}\n\n                \n                {% block sw_extension_permissions_details_modal_permission_row %}\n                <tr\n                    v-for="(permissions, entity) in permissionCategory"\n                    :key="entity"\n                    class="sw-extension-permissions-details-modal__grid-columns"\n                >\n                    \n                    {% block sw_extension_permissions_details_modal_permission_entity %}\n                    <td class="sw-extension-permissions-details-modal__entity-label">\n                        {{ entityLabel(category, entity) }}\n                    </td>\n                    {% endblock %}\n\n                    \n                    {% block sw_extension_permissions_details_modal_permission_operation %}\n                    <td\n                        v-for="operation in operations"\n                        :key="operation.operation"\n                        class="sw-extension-permissions-details-modal__operation"\n                    >\n                        <sw-icon\n                            v-if="permissions.includes(operation.operation)"\n                            name="regular-checkmark-xs"\n                            size="12px"\n                            color="#37D046"\n                        />\n\n                        <sw-icon\n                            v-else-if="category !== \'additional_privileges\'"\n                            name="regular-times-s"\n                            size="12px"\n                            color="#DE294C"\n                        />\n                    </td>\n                    {% endblock %}\n                </tr>\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </tbody>\n        {% endblock %}\n    </table>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_details_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_extension_permissions_details_modal_footer_inner %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="close"\n        >\n            {{ $tc(\'global.sw-modal.labelClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n'},127240:function(n,s,e){e.r(s);var i=e(828094);s.default={template:i.Z,compatConfig:Shopware.compatConfig,mixins:["sw-extension-error"],props:{extension:{type:Object,required:!0}},computed:{extensionCardClasses(){return{"sw-self-maintained-extension-card":!0,...this.$super("extensionCardClasses")}},permissions(){return Object.keys(this.extension.permissions).length?this.extension.permissions:null},isInstalled(){return null!==this.extension.installedAt}},methods:{async changeExtensionStatus(){if(this.isActive){await this.activateExtension();return}await this.deactivateExtension()},async installAndActivateExtension(){this.isLoading=!0;try{await this.shopwareExtensionService.installAndActivateExtension(this.extension.name,this.extension.type),await this.clearCacheAndReloadPage()}catch(n){this.showExtensionErrors(n)}finally{this.isLoading=!1}},async installExtension(){this.isLoading=!0;try{await this.shopwareExtensionService.installExtension(this.extension.name,this.extension.type),await this.clearCacheAndReloadPage()}catch(n){this.showExtensionErrors(n)}finally{this.isLoading=!1}},async activateExtension(){try{this.isLoading=!0,await this.shopwareExtensionService.activateExtension(this.extension.name,this.extension.type),this.extension.active=!0,await this.clearCacheAndReloadPage()}catch(n){this.extension.active=!1,this.showExtensionErrors(n)}finally{this.isLoading=!1}},async deactivateExtension(){try{this.isLoading=!0,await this.shopwareExtensionService.deactivateExtension(this.extension.name,this.extension.type),this.extension.active=!1,await this.clearCacheAndReloadPage()}catch(n){this.extension.active=!0,this.showExtensionErrors(n)}finally{this.isLoading=!1}},async removeExtension(){try{this.showRemovalModal=!1,this.isLoading=!0,await this.shopwareExtensionService.removeExtension(this.extension.name,this.extension.type),this.extension.active=!1,await this.clearCacheAndReloadPage()}catch(n){this.showExtensionErrors(n)}finally{this.isLoading=!1}}}}}}]);