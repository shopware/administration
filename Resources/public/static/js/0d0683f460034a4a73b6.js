(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[424],{ayzf:function(e,t,n){"use strict";n.r(t);var i=n("4fmW"),s=n.n(i),l=(n("bm1K"),Shopware.Data.Criteria),o=Shopware.Mixin,d=Shopware.Utils.types;t.default={template:'\n{% block sw_custom_field_list %}\n<sw-card\n    class="sw-custom-field-list"\n    position-identifier="sw-custom-field-list"\n>\n    \n    {% block sw_custom_field_list_toolbar %}\n    <div class="sw-custom-field-list__toolbar">\n        <sw-container\n            columns="1fr 32px minmax(100px, 200px)"\n            gap="0 10px"\n        >\n            \n            {% block sw_custom_field_list_toolbar_searchfield %}\n            <sw-simple-search-field\n                v-model="term"\n                size="small"\n                variant="form"\n                :delay="500"\n                @search-term-change="onSearchTermChange"\n            />\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_toolbar_delete %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'custom_field.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="deleteButtonDisabled || !acl.can(\'custom_field.editor\')"\n                square\n                size="small"\n                class="sw-custom-field-list__delete-button"\n                @click="onDeleteCustomFields"\n            >\n                <sw-icon\n                    name="regular-trash"\n                    small\n                />\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_toolbar_add %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'custom_field.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="set.isLoading || !acl.can(\'custom_field.editor\')"\n                size="small"\n                class="sw-custom-field-list__add-button"\n                @click="onAddCustomField(set)"\n            >\n                {{ $tc(\'sw-settings-custom-field.set.detail.addCustomField\') }}\n            </sw-button>\n            {% endblock %}\n        </sw-container>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_grid %}\n    <sw-grid\n        v-if="(customFields && customFields.length > 0) || term"\n        ref="grid"\n        class="sw-custom-field-list__grid"\n        :items="customFields"\n        :is-fullpage="false"\n        table\n        :selectable="acl.can(\'custom_field.editor\')"\n        @inline-edit-finish="onInlineEditFinish"\n        @inline-edit-cancel="onInlineEditCancel"\n        @sw-grid-select-item="selectionChanged"\n        @sw-grid-select-all="selectionChanged"\n    >\n        <template\n            #columns="{ item }"\n        >\n\n            \n            {% block sw_custom_field_list_grid_column_label %}\n            <sw-grid-column\n                data-index="label"\n                truncate\n                flex="minmax(150px, 1fr)"\n                :label="$tc(\'sw-settings-custom-field.customField.list.labelCustomFieldLabel\')"\n            >\n                <span\n                    class="sw-custom-field-list__custom-field-label"\n                    role="textbox"\n                    tabindex="0"\n                    @click="onCustomFieldEdit(item)"\n                    @keydown.enter="onCustomFieldEdit(item)"\n                >\n                    {{ getInlineSnippet(item.config.label) || item.name }}\n                </span>\n\n                <template #inline-edit>\n                    <sw-text-field\n                        :value="getInlineSnippet(item.config.label) || item.name"\n                        disabled\n                    />\n                </template>\n            </sw-grid-column>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_grid_column_type %}\n            <sw-grid-column\n                data-index="type"\n                truncate\n                flex="minmax(150px, 200px)"\n                :label="$tc(\'sw-settings-custom-field.customField.list.labelCustomFieldType\')"\n            >\n                {{ $tc(`sw-settings-custom-field.types.${item.config.customFieldType || item.type}`) }}\n\n                <template #inline-edit>\n                    <sw-text-field\n                        :value="$tc(`sw-settings-custom-field.types.${item.config.customFieldType || item.type}`)"\n                        disabled\n                    />\n                </template>\n            </sw-grid-column>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_grid_column_custom_field_position %}\n            <sw-grid-column\n                data-index="position"\n                flex="minmax(50px, 100px)"\n                :editable="acl.can(\'custom_field.editor\')"\n                :label="$tc(\'sw-settings-custom-field.customField.list.labelCustomFieldPosition\')"\n            >\n                {{ item.config.customFieldPosition }}\n\n                \n                {% block sw_custom_field_list_grid_column_custom_field_position_edit %}\n                <template #inline-edit>\n                    <sw-number-field\n                        {% if VUE3 %}\n                        v-model:value="item.config.customFieldPosition"\n                        {% else %}\n                        v-model="item.config.customFieldPosition"\n                        {% endif %}\n                        number-type="int"\n                    />\n                </template>\n                {% endblock %}\n            </sw-grid-column>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_grid_column_actions %}\n            <sw-grid-column\n                flex="minmax(100px, 100px)"\n                align="center"\n            >\n                <sw-context-button>\n                    \n                    {% block sw_custom_field_list_grid_column_actions_edit %}\n                    <sw-context-menu-item\n                        class="sw-custom-field-list__edit-action"\n                        :disabled="item.isDeleted || !acl.can(\'custom_field.editor\')"\n                        @click="onCustomFieldEdit(item)"\n                    >\n                        {{ $tc(\'sw-settings-custom-field.customField.list.contextMenuCustomFieldView\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_custom_field_list_grid_column_actions_reset_delete %}\n                    <sw-context-menu-item\n                        v-if="item.isDeleted"\n                        variant="success"\n                        :disabled="!acl.can(\'custom_field.editor\')"\n                    >\n                        {{ $tc(\'sw-settings-custom-field.customField.list.contextMenuCustomFieldResetDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_custom_field_list_grid_column_actions_delete %}\n                    <sw-context-menu-item\n                        v-else\n                        variant="danger"\n                        class="sw-custom-field-list__delete-action"\n                        :disabled="!acl.can(\'custom_field.editor\')"\n                        @click="onCustomFieldDelete(item)"\n                    >\n                        {{ $tc(\'sw-settings-custom-field.customField.list.contextMenuCustomFieldDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </sw-context-button>\n            </sw-grid-column>\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_custom_field_list_grid_pagination %}\n        <template #pagination>\n            <sw-pagination\n                :limit="limit"\n                :page="page"\n                :auto-hide="false"\n                :total="customFields.total"\n                :steps="[limit]"\n                @page-change="onPageChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-grid>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_empty_state %}\n    <sw-empty-state\n        v-else-if="!set.isLoading"\n        :absolute="false"\n        :title="$tc(\'sw-settings-custom-field.set.detail.messageCustomFieldsEmpty\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_custom_field_detail %}\n    <sw-custom-field-detail\n        v-if="currentCustomField"\n        :set="set"\n        :current-custom-field="currentCustomField"\n        @custom-field-edit-save="onSaveCustomField"\n        @custom-field-edit-cancel="onCancelCustomField"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_custom_field_delete %}\n    <sw-modal\n        v-if="deleteCustomField"\n        :title="$tc(\'sw-settings-custom-field.customField.list.titleDeleteAction\', deleteCustomField.length)"\n        variant="small"\n        @modal-close="onCancelDeleteCustomField"\n    >\n\n        \n        {% block sw_custom_field_list_custom_field_delete_text %}\n        <p class="sw-custom-field-delete__description">\n            {{ $tc(\'sw-settings-custom-field.customField.list.textDeleteActionConfirmation\', deleteCustomField.length, { count: deleteCustomField.length }) }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_custom_field_list_custom_field_delete_actions %}\n        <template #modal-footer>\n            \n            {% block sw_custom_field_list_custom_field_delete_action_cancel %}\n            <sw-button\n                size="small"\n                @click="onCancelDeleteCustomField"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_custom_field_delete_action_confirm %}\n            <sw-button\n                variant="danger"\n                size="small"\n                @click="onDeleteCustomField"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],provide:function(){return{SwCustomFieldListIsCustomFieldNameUnique:this.isCustomFieldNameUnique}},mixins:[o.getByName("sw-inline-snippet"),o.getByName("notification")],props:{set:{type:Object,required:!0}},data:function(){return{term:"",isLoading:!1,currentCustomField:null,deleteButtonDisabled:!0,disableRouteParams:!0,deleteCustomField:null,customFields:null,page:1,total:0,limit:10}},computed:{customFieldRepository:function(){return this.repositoryFactory.create(this.set.customFields.entity,this.set.customFields.source)},globalCustomFieldRepository:function(){return this.repositoryFactory.create("custom_field")}},watch:{isLoading:function(e){this.$emit("loading-changed",e)}},created:function(){this.createdComponent()},methods:{onSearchTermChange:function(){this.loadCustomFields()},createdComponent:function(){this.loadCustomFields()},loadCustomFields:function(){var e=this;this.isLoading=!0;var t=new l(this.page,this.limit);return t.addFilter(l.equals("customFieldSetId",this.set.id)),t.addSorting(l.sort("config.customFieldPosition","ASC",!0)),this.term&&t.setTerm(this.term),this.customFieldRepository.search(t).then((function(t){return e.customFields=t,e.total=t.total,t})).finally((function(){e.isLoading=!1}))},selectionChanged:function(e){this.deleteButtonDisabled=Object.keys(e).length<=0},onCustomFieldDelete:function(e){this.deleteCustomField=e},onDeleteCustomFields:function(){this.deleteCustomField=Array.from(Object.values(this.$refs.grid.getSelection()))},onAddCustomField:function(){var e=this.customFieldRepository.create();this.onCustomFieldEdit(e)},onCancelCustomField:function(){this.customFieldRepository.discard(this.currentCustomField),this.currentCustomField=null},onInlineEditFinish:function(e){this.onSaveCustomField(e)},onSaveCustomField:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentCustomField;return this.removeEmptyProperties(t.config),this.customFieldRepository.save(t).finally((function(){e.currentCustomField=null,e.$nextTick((function(){e.loadCustomFields()}))}))},onInlineEditCancel:function(e){this.customFieldRepository.discard(e)},onCustomFieldEdit:function(e){this.currentCustomField=e},removeEmptyProperties:function(e){var t=this;Object.keys(e).forEach((function(n){["number","boolean"].includes(s()(e[n]))||((d.isObject(e[n])||d.isArray(e[n]))&&t.removeEmptyProperties(e[n]),(d.isEmpty(e[n])||void 0===e[n])&&e[null!==n]&&t.$delete(e,n))}))},isCustomFieldNameUnique:function(e){var t=new l(1,25);return t.addFilter(l.equals("name",e.name)),this.globalCustomFieldRepository.search(t).then((function(e){return 0===e.length}))},onPageChange:function(e){this.page=e.page,this.loadCustomFields()},onCancelDeleteCustomField:function(){this.deleteCustomField=null},onDeleteCustomField:function(){var e=this,t=[];return Array.isArray(this.deleteCustomField)?this.deleteCustomField.forEach((function(e){return t.push(e.id)})):t.push(this.deleteCustomField.id),this.globalCustomFieldRepository.syncDeleted(t,Shopware.Context.api).then((function(){e.deleteButtonDisabled=!0,e.deleteCustomField=null,e.$nextTick((function(){e.loadCustomFields()}))}))}}}},bm1K:function(e,t,n){var i=n("nYVv");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("613e2897",i,!0,{})},nYVv:function(e,t,n){}}]);
//# sourceMappingURL=0d0683f460034a4a73b6.js.map