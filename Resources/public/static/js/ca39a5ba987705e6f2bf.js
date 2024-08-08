(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[395],{ePUm:function(t,n,e){},vG2e:function(t,n,e){var o=e("ePUm");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("P8hj").default)("1533b936",o,!0,{})},zxGt:function(t,n,e){"use strict";e.r(n);e("vG2e");var o=Shopware,i=o.State,r=o.Mixin;n.default={template:'\n{% block sw_property_option_list %}\n<sw-card\n    :is-loading="isLoading"\n    class="sw-property-option-list"\n    position-identifier="sw-property-option-list"\n    :title="$tc(\'sw-property.detail.cardTitle\')"\n>\n\n    \n    {% block sw_property_option_list_toolbar %}\n    <div class="sw-property-option-list__toolbar">\n\n        \n        {% block sw_property_option_list_toolbar_container %}\n        <sw-container\n            columns="1fr 32px minmax(100px, 200px)"\n            gap="0 10px"\n        >\n\n            \n            {% block sw_property_option_list_toolbar_search %}\n            <sw-simple-search-field\n                v-model="term"\n                size="small"\n                variant="form"\n                @search-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_property_option_list_toolbar_delete %}\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'property.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="deleteButtonDisabled || !acl.can(\'property.editor\')"\n                square\n                size="small"\n                class="sw-property-option-list__delete-button"\n                @click="onDeleteOptions"\n            >\n                <sw-icon\n                    name="regular-trash"\n                    small\n                />\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_property_option_list_toolbar_add %}\n            <sw-container v-tooltip="tooltipAdd">\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'property.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    :disabled="disableAddButton"\n                    size="small"\n                    class="sw-property-option-list__add-button"\n                    @click="onAddOption(propertyGroup)"\n                >\n                    {{ $tc(\'sw-property.detail.addOption\') }}\n                </sw-button>\n            </sw-container>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_property_option_list_grid %}\n    <template #grid>\n        <sw-one-to-many-grid\n            ref="grid"\n            :is-loading="isLoading"\n            :collection="propertyGroup.options"\n            :data-source="dataSource"\n            :columns="getGroupColumns()"\n            :full-page="false"\n            :local-mode="propertyGroup.isNew()"\n            :allow-inline-edit="allowInlineEdit"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            @selection-change="onGridSelectionChanged"\n        >\n\n            <template #column-name="{ item, isInlineEdit }">\n                <template v-if="isInlineEdit">\n                    <sw-text-field\n                        {% if VUE3 %}\n                        v-model:value="item.name"\n                        {% else %}\n                        v-model="item.name"\n                        {% endif %}\n                        size="small"\n                    />\n                </template>\n\n                <a\n                    v-else\n                    class="sw-settings-option-detail__link"\n                    role="button"\n                    tabindex="0"\n                    @click="onOptionEdit(item)"\n                    @keydown.enter="onOptionEdit(item)"\n                >\n                    {{ item.translated.name }}\n                </a>\n            </template>\n\n            \n            {% block sw_settings_property_list_grid_columns_actions %}\n            <template #more-actions="{ item }">\n                \n                {% block sw_settings_property_list_grid_columns_actions_edit %}\n                <sw-context-menu-item\n                    class="sw-property-option-list__edit-action"\n                    :disabled="!acl.can(\'property.editor\')"\n                    @click="onOptionEdit(item)"\n                >\n                    {{ $tc(\'sw-property.list.contextMenuView\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_property_list_grid_columns_actions_delete %}\n            <template #delete-action="{ item }">\n                <sw-context-menu-item\n                    variant="danger"\n                    :disabled="!acl.can(\'property.editor\')"\n                    @click="onSingleOptionDelete(item.id)"\n                >\n                    {{ $tc(\'sw-property.list.contextMenuDelete\') }}\n                </sw-context-menu-item>\n            </template>\n            {% endblock %}\n        </sw-one-to-many-grid>\n        {% endblock %}\n    </template>\n    \n    {% block sw_property_option_list_detail %}\n    <sw-property-option-detail\n        v-if="currentOption"\n        :current-option="currentOption"\n        :allow-edit="acl.can(\'property.editor\')"\n        @save-option-edit="onSaveOption"\n        @cancel-option-edit="onCancelOption"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_option_list_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[r.getByName("listing")],props:{propertyGroup:{type:Object,required:!0},optionRepository:{type:Object,required:!0}},data:function(){return{isLoading:!1,currentOption:null,term:null,naturalSorting:!0,selection:null,deleteButtonDisabled:!0,sortBy:"name",sortDirection:"ASC",showDeleteModal:!1}},computed:{isSystemLanguage:function(){return i.get("context").api.systemLanguageId===this.currentLanguage},currentLanguage:function(){return i.get("context").api.languageId},allowInlineEdit:function(){return!!this.acl.can("property.editor")},tooltipAdd:function(){return{message:this.$tc("sw-property.detail.addOptionNotPossible"),disabled:this.isSystemLanguage}},disableAddButton:function(){return this.propertyGroup.isLoading||!this.isSystemLanguage||!this.acl.can("property.editor")},dataSource:function(){return this.propertyGroup.options&&this.propertyGroup.options.slice(0,this.limit)}},watch:{currentLanguage:function(){this.refreshOptionList()}},methods:{onSearch:function(){this.propertyGroup.options.criteria.setTerm(this.term),this.refreshOptionList()},onGridSelectionChanged:function(t,n){this.selection=t,this.deleteButtonDisabled=n<=0},onOptionDelete:function(t){return t.isNew()?(this.propertyGroup.options.remove(t.id),Promise.resolve()):this.optionRepository.delete(t.id)},onSingleOptionDelete:function(t){this.$refs.grid.deleteItem(t)},onDeleteOptions:function(){var t=this;this.selection&&Promise.allSettled(Object.values(this.selection).map((function(n){return t.onOptionDelete(n)}))).then((function(){t.refreshOptionList()}))},onAddOption:function(){return!!this.isSystemLanguage&&(this.currentOption=this.optionRepository.create(),!0)},onCancelOption:function(){this.currentOption=null,this.$refs.grid.load()},onSaveOption:function(){return this.propertyGroup.isNew()?this.saveGroupLocal():this.saveGroupRemote()},saveGroupLocal:function(){return this.currentOption.isNew()&&(this.propertyGroup.options.has(this.currentOption.id)||this.propertyGroup.options.add(this.currentOption),this.currentOption=null),Promise.resolve()},saveGroupRemote:function(){var t=this;return this.optionRepository.save(this.currentOption).then((function(){t.currentOption=null,t.$refs.grid.load()}))},refreshOptionList:function(){var t=this;this.isLoading=!0,this.$refs.grid.load().then((function(){t.isLoading=!1}))},onOptionEdit:function(t){var n=t;n._isNew=!1,this.currentOption=n},getGroupColumns:function(){return[{property:"name",label:this.$tc("sw-property.detail.labelOptionName"),routerLink:"sw.property.detail",inlineEdit:"string",primary:!0},{property:"colorHexCode",label:this.$tc("sw-property.detail.labelOptionColor")},{property:"position",label:this.$tc("sw-property.detail.labelOptionPosition"),inlineEdit:"number"}]}}}}}]);