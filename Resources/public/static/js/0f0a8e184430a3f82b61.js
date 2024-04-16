(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[634],{UyJb:function(e,t,n){"use strict";n.r(t);var s=Shopware.Mixin,i=Shopware.Data.Criteria;t.default={template:'\n{% block sw_settings_search_searchable_content_customfields %}\n<div class="sw-settings-search__searchable-content-customfields">\n    \n    {% block sw_settings_search_searchable_content_customfields_empty_state %}\n    <sw-empty-state\n        v-if="isEmpty"\n        :title="$tc(\'sw-settings-search.generalTab.textEmptyStateSearchableContent\')"\n        :show-description="false"\n        :has-action-slot="true"\n        :absolute="false"\n    >\n        <template #icon>\n            \n            {% block sw_settings_search_searchable_content_customfields_state_image %}\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                :alt="$tc(\'sw-settings-search.generalTab.textEmptyStateSearchableContent\')"\n            >\n            {% endblock %}\n        </template>\n\n        <template #actions>\n            \n            {% block sw_settings_search_searchable_content_customfields_empty_state_action %}\n            <sw-button\n                variant="ghost"\n                size="small"\n                :disabled="!acl.can(\'product_search_config.creator\')"\n                @click="onAddField"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.buttonAddContent\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n\n    \n    {% block sw_settings_search_searchable_content_customfields_grid %}\n    <sw-entity-listing\n        v-if="!isEmpty"\n        ref="customGrid"\n        class="sw-settings-search__searchable-content-list"\n        :columns="columns"\n        :repository="repository"\n        :allow-column-edit="false"\n        :full-page="false"\n        :show-settings="false"\n        :show-selection="false"\n        :is-loading="isLoading"\n        :items="searchConfigs"\n        :allow-inline-edit="acl.can(\'product_search_config.editor\')"\n        :allow-edit="acl.can(\'product_search_config.editor\')"\n        :allow-delete="acl.can(\'product_search_config.deleter\')"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n        \n        {% block sw_settings_search_searchable_content_customfields_field %}\n        <template #column-field="{ item, isInlineEdit }">\n            <template v-if="item._isNew && isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_field_editor %}\n                <sw-entity-single-select\n                    {% if VUE3 %}\n                    v-model:value="currentCustomFieldId"\n                    {% else %}\n                    v-model="currentCustomFieldId"\n                    {% endif %}\n                    class="sw-settings-search-custom-field-select"\n                    entity="custom_field"\n                    :criteria="customFieldFilteredCriteria"\n                    show-clearable-button\n                    {% if VUE3 %}\n                    @update:value="(id, customfield) => onSelectCustomField(customfield)"\n                    {% else %}\n                    @change="(id, customfield) => onSelectCustomField(customfield)"\n                    {% endif %}\n                >\n\n                    <template #selection-label-property="{ item }">\n                        {{ showCustomFieldWithSet(item) }}\n                    </template>\n\n                    <template #result-label-property="{ item }">\n                        {{ showCustomFieldWithSet(item) }}\n                    </template>\n\n                </sw-entity-single-select>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_customfields_field_label %}\n                {{ getMatchingCustomFields(item.field) }}\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_ranking %}\n        <template #column-ranking="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_ranking_editor %}\n                <sw-number-field\n                    {% if VUE3 %}\n                    v-model:value="item.ranking"\n                    {% else %}\n                    v-model="item.ranking"\n                    {% endif %}\n                    number-type="int"\n                    size="small"\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_searchable %}\n        <template #column-searchable="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_searchable_editor %}\n                <sw-checkbox-field\n                    {% if VUE3 %}\n                    v-model:value="item.searchable"\n                    {% else %}\n                    v-model="item.searchable"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_customfields_searchable_label %}\n                <sw-icon\n                    v-if="item.searchable"\n                    class="is--active"\n                    name="regular-checkmark-xs"\n                    small\n                />\n                <sw-icon\n                    v-else\n                    class="is--inactive"\n                    name="regular-times-s"\n                    small\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_tokenize %}\n        <template #column-tokenize="{ item, isInlineEdit }">\n            <template v-if="isInlineEdit">\n                \n                {% block sw_settings_search_searchable_content_customfields_tokenize_editor %}\n                <sw-checkbox-field\n                    {% if VUE3 %}\n                    v-model:value="item.tokenize"\n                    {% else %}\n                    v-model="item.tokenize"\n                    {% endif %}\n                />\n                {% endblock %}\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_search_searchable_content_customfields_tokenize_label %}\n                <sw-icon\n                    v-if="item.tokenize"\n                    class="is--active"\n                    name="regular-checkmark-xs"\n                    small\n                />\n                <sw-icon\n                    v-else\n                    class="is--inactive"\n                    name="regular-times-s"\n                    small\n                />\n                {% endblock %}\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_searchable_content_customfields_columns_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_settings_search_searchable_content_customfields_columns_actions_edit %}\n            <sw-context-menu-item\n                class="sw-settings-search__searchable-content-list-action sw-settings-search__searchable-content-list-reset"\n                :disabled="!acl.can(\'product_search_config.editor\')"\n                @click="onResetRanking(item)"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.list.textResetRanking\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_settings_search_searchable_content_customfields_columns_actions_delete %}\n            <sw-context-menu-item\n                class="sw-settings-search__searchable-content-list-action sw-settings-search__searchable-content-list-remove"\n                :disabled="!acl.can(\'product_search_config.deleter\')"\n                @click="onRemove(item)"\n            >\n                {{ $tc(\'sw-settings-search.generalTab.list.textRemove\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-entity-listing>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[s.getByName("notification"),s.getByName("sw-inline-snippet")],props:{isEmpty:{type:Boolean,required:!0},columns:{type:Array,required:!0},repository:{type:Object,required:!0},searchConfigs:{type:Array,required:!1,default:function(){return null}},isLoading:{type:Boolean,required:!1,default:!1}},data:function(){return{customFields:[],currentCustomFieldId:null,addedCustomFieldIds:[]}},computed:{customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},customFieldFilteredCriteria:function(){var e=this,t=new i(1,25);return t.addAssociation("customFieldSet"),this.searchConfigs?(this.searchConfigs.forEach((function(t){null!=t&&t.customFieldId&&e.addedCustomFieldIds.push(t.customFieldId)})),0===this.addedCustomFieldIds.length||t.addFilter(i.not("AND",[i.equalsAny("id",this.addedCustomFieldIds)])),t):t},customFieldCriteria:function(){var e=new i(1,25);return e.addAssociation("customFieldSet"),e},assetFilter:function(){return Shopware.Filter.getByName("asset")}},watch:{searchConfigs:function(e){e[0]&&e[0]._isNew&&this.$refs.customGrid&&(this.$refs.customGrid.enableInlineEdit(),this.$refs.customGrid.onDbClickCell(this.$refs.customGrid.records[0]))}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.customFieldRepository.search(this.customFieldCriteria).then((function(t){e.customFields=t})).catch((function(){e.createNotificationError({message:e.$tc("sw-settings-search.notification.loadError")})}))},showCustomFieldWithSet:function(e){var t="";null!=e&&e.customFieldSet&&(t=this.getInlineSnippet(e.customFieldSet.config.label)||e.customFieldSet.name);var n=this.getInlineSnippet(e.config.label)||e.name;return"".concat(t," - ").concat(n)},getMatchingCustomFields:function(e){if(!e)return"";var t=e.replace("customFields.",""),n=this.customFields.find((function(e){return e.name===t}));return n?this.showCustomFieldWithSet(n):t},onSelectCustomField:function(e){var t=this.searchConfigs.find((function(e){return e._isNew}));t.field="customFields.".concat(e.name),t.customFieldId=this.currentCustomFieldId},onAddField:function(){this.$emit("config-add")},onInlineEditSave:function(e){var t=this;e.then((function(){t.createNotificationSuccess({message:t.$tc("sw-settings-search.notification.saveSuccess")})})).catch((function(){t.createNotificationError({message:t.$tc("sw-settings-search.notification.saveError")})})).finally((function(){t.currentCustomFieldId=null,t.$emit("data-load")}))},onInlineEditCancel:function(){this.currentCustomFieldId=null,this.$emit("data-load")},onResetRanking:function(e){if(!e.field)return this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")}),void this.$emit("data-load");var t=this.searchConfigs.find((function(t){return t.field===e.field}));t?(t.ranking=0,this.$emit("config-save")):this.createNotificationError({message:this.$tc("sw-settings-search.notification.saveError")})},onRemove:function(e){e.field?this.$emit("config-delete",e.id):this.$emit("data-load")}}}}}]);