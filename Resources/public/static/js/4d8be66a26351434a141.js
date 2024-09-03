(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[28073],{398173:function(){},928073:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}}),n(3583);let{Criteria:i}=Shopware.Data,{Mixin:s}=Shopware,l=Shopware.Utils.types;var o={template:'\n{% block sw_custom_field_list %}\n<sw-card\n    class="sw-custom-field-list"\n    position-identifier="sw-custom-field-list"\n>\n    \n    {% block sw_custom_field_list_toolbar %}\n    <div class="sw-custom-field-list__toolbar">\n        <sw-container\n            columns="1fr 32px minmax(100px, 200px)"\n            gap="0 10px"\n        >\n            \n            {% block sw_custom_field_list_toolbar_searchfield %}\n            <sw-simple-search-field\n                v-model:value="term"\n                size="small"\n                variant="form"\n                :delay="500"\n                @search-term-change="onSearchTermChange"\n            />\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_toolbar_delete %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'custom_field.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="deleteButtonDisabled || !acl.can(\'custom_field.editor\') || undefined"\n                square\n                size="small"\n                class="sw-custom-field-list__delete-button"\n                @click="onDeleteCustomFields"\n            >\n                <sw-icon\n                    name="regular-trash"\n                    small\n                />\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_toolbar_add %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'custom_field.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="set.isLoading || !acl.can(\'custom_field.editor\') || undefined"\n                size="small"\n                class="sw-custom-field-list__add-button"\n                @click="onAddCustomField(set)"\n            >\n                {{ $tc(\'sw-settings-custom-field.set.detail.addCustomField\') }}\n            </sw-button>\n            {% endblock %}\n        </sw-container>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_grid %}\n    <sw-grid\n        v-if="(customFields && customFields.length > 0) || term"\n        ref="grid"\n        class="sw-custom-field-list__grid"\n        :items="customFields"\n        :is-fullpage="false"\n        table\n        :selectable="acl.can(\'custom_field.editor\')"\n        @inline-edit-finish="onInlineEditFinish"\n        @inline-edit-cancel="onInlineEditCancel"\n        @sw-grid-select-item="selectionChanged"\n        @sw-grid-select-all="selectionChanged"\n    >\n        <template\n            #columns="{ item }"\n        >\n\n            \n            {% block sw_custom_field_list_grid_column_label %}\n            <sw-grid-column\n                data-index="label"\n                truncate\n                flex="minmax(150px, 1fr)"\n                :label="$tc(\'sw-settings-custom-field.customField.list.labelCustomFieldLabel\')"\n            >\n                <span\n                    class="sw-custom-field-list__custom-field-label"\n                    role="textbox"\n                    tabindex="0"\n                    @click="onCustomFieldEdit(item)"\n                    @keydown.enter="onCustomFieldEdit(item)"\n                >\n                    {{ getInlineSnippet(item.config.label) || item.name }}\n                </span>\n\n                <template #inline-edit>\n                    <sw-text-field\n                        :value="getInlineSnippet(item.config.label) || item.name"\n                        disabled\n                    />\n                </template>\n            </sw-grid-column>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_grid_column_type %}\n            <sw-grid-column\n                data-index="type"\n                truncate\n                flex="minmax(150px, 200px)"\n                :label="$tc(\'sw-settings-custom-field.customField.list.labelCustomFieldType\')"\n            >\n                {{ $tc(`sw-settings-custom-field.types.${item.config.customFieldType || item.type}`) }}\n\n                <template #inline-edit>\n                    <sw-text-field\n                        :value="$tc(`sw-settings-custom-field.types.${item.config.customFieldType || item.type}`)"\n                        disabled\n                    />\n                </template>\n            </sw-grid-column>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_grid_column_custom_field_position %}\n            <sw-grid-column\n                data-index="position"\n                flex="minmax(50px, 100px)"\n                :editable="acl.can(\'custom_field.editor\')"\n                :label="$tc(\'sw-settings-custom-field.customField.list.labelCustomFieldPosition\')"\n            >\n                {{ item.config.customFieldPosition }}\n\n                \n                {% block sw_custom_field_list_grid_column_custom_field_position_edit %}\n                <template #inline-edit>\n                    <sw-number-field\n                        v-model:value="item.config.customFieldPosition"\n                        number-type="int"\n                    />\n                </template>\n                {% endblock %}\n            </sw-grid-column>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_grid_column_actions %}\n            <sw-grid-column\n                flex="minmax(100px, 100px)"\n                align="center"\n            >\n                <sw-context-button>\n                    \n                    {% block sw_custom_field_list_grid_column_actions_edit %}\n                    <sw-context-menu-item\n                        class="sw-custom-field-list__edit-action"\n                        :disabled="item.isDeleted || !acl.can(\'custom_field.editor\') || undefined"\n                        @click="onCustomFieldEdit(item)"\n                    >\n                        {{ $tc(\'sw-settings-custom-field.customField.list.contextMenuCustomFieldView\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_custom_field_list_grid_column_actions_reset_delete %}\n                    <sw-context-menu-item\n                        v-if="item.isDeleted"\n                        variant="success"\n                        :disabled="!acl.can(\'custom_field.editor\') || undefined"\n                    >\n                        {{ $tc(\'sw-settings-custom-field.customField.list.contextMenuCustomFieldResetDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_custom_field_list_grid_column_actions_delete %}\n                    <sw-context-menu-item\n                        v-else\n                        variant="danger"\n                        class="sw-custom-field-list__delete-action"\n                        :disabled="!acl.can(\'custom_field.editor\')"\n                        @click="onCustomFieldDelete(item)"\n                    >\n                        {{ $tc(\'sw-settings-custom-field.customField.list.contextMenuCustomFieldDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </sw-context-button>\n            </sw-grid-column>\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_custom_field_list_grid_pagination %}\n        <template #pagination>\n            <sw-pagination\n                :limit="limit"\n                :page="page"\n                :auto-hide="false"\n                :total="customFields.total"\n                :steps="[limit]"\n                @page-change="onPageChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-grid>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_empty_state %}\n    <sw-empty-state\n        v-else-if="!set.isLoading"\n        :absolute="false"\n        :title="$tc(\'sw-settings-custom-field.set.detail.messageCustomFieldsEmpty\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_custom_field_detail %}\n    <sw-custom-field-detail\n        v-if="currentCustomField"\n        :set="set"\n        :current-custom-field="currentCustomField"\n        @custom-field-edit-save="onSaveCustomField"\n        @custom-field-edit-cancel="onCancelCustomField"\n    />\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_custom_field_delete %}\n    <sw-modal\n        v-if="deleteCustomField"\n        :title="$tc(\'sw-settings-custom-field.customField.list.titleDeleteAction\', deleteCustomField.length)"\n        variant="small"\n        @modal-close="onCancelDeleteCustomField"\n    >\n\n        \n        {% block sw_custom_field_list_custom_field_delete_text %}\n        <p class="sw-custom-field-delete__description">\n            {{ $tc(\'sw-settings-custom-field.customField.list.textDeleteActionConfirmation\', deleteCustomField.length, { count: deleteCustomField.length }) }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_custom_field_list_custom_field_delete_actions %}\n        <template #modal-footer>\n            \n            {% block sw_custom_field_list_custom_field_delete_action_cancel %}\n            <sw-button\n                size="small"\n                @click="onCancelDeleteCustomField"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_custom_field_list_custom_field_delete_action_confirm %}\n            <sw-button\n                variant="danger"\n                size="small"\n                @click="onDeleteCustomField"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_list_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],provide(){return{SwCustomFieldListIsCustomFieldNameUnique:this.isCustomFieldNameUnique}},emits:["loading-changed"],mixins:[s.getByName("sw-inline-snippet"),s.getByName("notification")],props:{set:{type:Object,required:!0}},data(){return{term:"",isLoading:!1,currentCustomField:null,deleteButtonDisabled:!0,disableRouteParams:!0,deleteCustomField:null,customFields:null,page:1,total:0,limit:10}},computed:{customFieldRepository(){return this.repositoryFactory.create(this.set.customFields.entity,this.set.customFields.source)},globalCustomFieldRepository(){return this.repositoryFactory.create("custom_field")}},watch:{isLoading(e){this.$emit("loading-changed",e)}},created(){this.createdComponent()},methods:{onSearchTermChange(){this.loadCustomFields()},createdComponent(){this.loadCustomFields()},loadCustomFields(){this.isLoading=!0;let e=new i(this.page,this.limit);return e.addFilter(i.equals("customFieldSetId",this.set.id)),e.addSorting(i.sort("config.customFieldPosition","ASC",!0)),this.term&&e.setTerm(this.term),this.customFieldRepository.search(e).then(e=>(this.customFields=e,this.total=e.total,e)).finally(()=>{this.isLoading=!1})},selectionChanged(e){this.deleteButtonDisabled=Object.keys(e).length<=0},onCustomFieldDelete(e){this.deleteCustomField=e},onDeleteCustomFields(){this.deleteCustomField=Array.from(Object.values(this.$refs.grid.getSelection()))},onAddCustomField(){let e=this.customFieldRepository.create();this.onCustomFieldEdit(e)},onCancelCustomField(){this.customFieldRepository.discard(this.currentCustomField),this.currentCustomField=null},onInlineEditFinish(e){this.onSaveCustomField(e)},onSaveCustomField(e=this.currentCustomField){return this.removeEmptyProperties(e.config),this.customFieldRepository.save(e).catch(e=>{let t=e?.response?.data?.errors?.[0]?.detail??"Error";this.createNotificationError({message:t})}).finally(()=>{this.currentCustomField=null,this.$nextTick(()=>{this.loadCustomFields()})})},onInlineEditCancel(e){this.customFieldRepository.discard(e)},onCustomFieldEdit(e){this.currentCustomField=e},removeEmptyProperties(e){Object.keys(e).forEach(t=>{!["number","boolean"].includes(typeof e[t])&&((l.isObject(e[t])||l.isArray(e[t]))&&this.removeEmptyProperties(e[t]),(l.isEmpty(e[t])||void 0===e[t])&&e[null!==t]&&(this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(e,t):delete e[t]))})},isCustomFieldNameUnique(e){let t=new i(1,25);return t.addFilter(i.equals("name",e.name)),this.globalCustomFieldRepository.search(t).then(e=>0===e.length)},onPageChange(e){this.page=e.page,this.loadCustomFields()},onCancelDeleteCustomField(){this.deleteCustomField=null},onDeleteCustomField(){let e=[];return Array.isArray(this.deleteCustomField)?this.deleteCustomField.forEach(t=>e.push(t.id)):e.push(this.deleteCustomField.id),this.globalCustomFieldRepository.syncDeleted(e,Shopware.Context.api).then(()=>{this.deleteButtonDisabled=!0,this.deleteCustomField=null,this.$nextTick(()=>{this.loadCustomFields()})})}}}},3583:function(e,t,n){var i=n(398173);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(745346).Z("4a4d31fe",i,!0,{})}}]);