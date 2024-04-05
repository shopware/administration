(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[70585],{79033:function(){},70585:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}}),i(41577);let{debounce:n,createId:o,object:{cloneDeep:p}}=Shopware.Utils,a=Shopware.Data.Criteria;var s={template:'\n{% block sw_import_export_edit_profile_modal_mapping %}\n<div class="sw-import-export-edit-profile-modal-mapping">\n\n    \n    {% block sw_import_export_edit_profile_modal_mapping_toolbar %}\n    <div class="sw-import-export-edit-profile-modal-mapping__toolbar">\n        \n        {% block sw_import_export_edit_profile_modal_mapping_toolbar_search_field %}\n        <sw-simple-search-field\n            v-model:value="searchTerm"\n            size="small"\n            variant="form"\n            :disabled="!mappingsExist"\n            @search-term-change="onSearch"\n        />\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_toolbar_add_mapping %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-import-export.profile.addMappingTooltipText\'),\n                disabled: addMappingEnabled,\n                showOnDisabledElements: true\n            }"\n            class="sw-import-export-edit-profile-modal-mapping__add-action"\n            variant="ghost"\n            :disabled="profile.systemDefault || !addMappingEnabled"\n            size="small"\n            @click="onAddMapping"\n        >\n            {{ $tc(\'sw-import-export.profile.addMappingLabel\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_modal_mapping_grid %}\n    <sw-data-grid\n        v-if="mappingsExist"\n        :data-source="sortedMappings"\n        :compact-mode="false"\n        :show-selection="false"\n        :show-actions="!profile.systemDefault"\n        :columns="mappingColumns"\n        plain-appearance\n        class="sw-import-export-edit-profile-modal-mapping__grid"\n    >\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_grid_csv_name_column %}\n        <template #column-csvName="{ item, itemIndex }">\n            <sw-text-field\n                v-model:value="item.mappedKey"\n                :name="`mappedKey-${itemIndex}`"\n                :disabled="profile.systemDefault"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_grid_entry_column %}\n        <template #column-entry="{ item }">\n            <sw-import-export-entity-path-select\n                v-model:value="item.key"\n                :languages="languages"\n                :currencies="currencies"\n                :entity-type="profile.sourceEntity"\n                :disabled="profile.systemDefault"\n                :custom-field-sets="customFieldSets"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_grid_required_column %}\n        <template #column-required="{ item }">\n            <sw-switch-field\n                v-show="isRequiredBySystem(item)"\n                class="sw-import-export-edit-profile-modal-mapping__required-by-user-switch"\n                :value="true"\n                :disabled="true"\n            />\n            <sw-switch-field\n                v-show="!isRequiredBySystem(item)"\n                v-model:value="item.requiredByUser"\n                class="sw-import-export-edit-profile-modal-mapping__required-by-user-switch"\n                :disabled="profile.systemDefault"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_grid_default_value_column %}\n        <template #column-defaultValue="{ item, itemIndex }">\n            <sw-switch-field\n                v-model:value="item.useDefaultValue"\n                :name="`useDefaultValue-${itemIndex}`"\n                :disabled="isDefaultValueCheckboxDisabled()"\n                class="sw-import-export-edit-profile-modal-mapping__default-value-switch"\n            />\n\n            <sw-text-field\n                v-model:value="item.defaultValue"\n                :name="`defaultValue-${itemIndex}`"\n                :disabled="isDefaultValueTextFieldDisabled(item)"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_grid_position_column %}\n        <template #column-position="{ item, itemIndex }">\n\n            \n            {% block sw_import_export_edit_profile_modal_mapping_grid_position_column_button_group %}\n            <sw-button-group>\n                \n                {% block sw_import_export_edit_profile_modal_mapping_grid_position_column_button_group_up %}\n                <sw-button\n                    size="x-small"\n                    square\n                    :disabled="isFirstMapping(item) || !!searchTerm"\n                    @click="updateSorting(itemIndex, \'up\')"\n                >\n                    \n                    {% block sw_import_export_edit_profile_modal_mapping_grid_position_column_button_group_up_icon %}\n                    <sw-icon\n                        name="regular-chevron-up-xxs"\n                        size="14px"\n                    />\n                    {% endblock %}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_import_export_edit_profile_modal_mapping_grid_position_column_button_group_down %}\n                <sw-button\n                    size="x-small"\n                    square\n                    :disabled="isLastMapping(item) || !!searchTerm"\n                    @click="updateSorting(itemIndex, \'down\')"\n                >\n                    \n                    {% block sw_import_export_edit_profile_modal_mapping_grid_position_column_button_group_down_icon %}\n                    <sw-icon\n                        name="regular-chevron-down-xxs"\n                        size="14px"\n                    />\n                    {% endblock %}\n                </sw-button>\n                {% endblock %}\n            </sw-button-group>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_modal_mapping_grid_context_menu_delete %}\n        <template #actions="{ item }">\n            <sw-context-menu-item\n                variant="danger"\n                :disabled="profile.systemDefault"\n                @click="onDeleteMapping(item.id)"\n            >\n                {{ $tc(\'sw-import-export.profile.deleteMappingLabel\') }}\n            </sw-context-menu-item>\n        </template>\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_modal_mapping_empty_state %}\n    <sw-empty-state\n        v-else\n        class="sw-import-export-edit-profile-modal-mapping__empty-state"\n        :title="$tc(\'sw-import-export.profile.mappingEmptyState\')"\n        :absolute="false"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","feature"],mixins:[Shopware.Mixin.getByName("notification")],props:{profile:{type:Object,required:!1,default:null},systemRequiredFields:{type:Object,required:!1,default(){return{}}}},data(){return{searchTerm:null,mappings:[],currencies:[],languages:[],customFieldSets:[],addMappingEnabled:!1}},computed:{languageRepository(){return this.repositoryFactory.create("language")},currencyRepository(){return this.repositoryFactory.create("currency")},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},languageCriteria(){let e=new a(1,500);return e.addAssociation("locale"),e},currencyCriteria(){return new a(1,500)},customFieldSetCriteria(){let e=new a(1,500);return e.addAssociation("relations"),e.addAssociation("customFields"),e},mappingColumns(){let e=[{property:"csvName",label:"sw-import-export.profile.mapping.fileValueLabel",allowResize:!0,primary:!0},{property:"entry",label:"sw-import-export.profile.mapping.entityLabel",allowResize:!0,width:"300px"}];return"export"!==this.profile.type&&(e=[...e,{property:"required",label:"sw-import-export.profile.mapping.isRequired",allowResize:!0,align:"center"},{property:"defaultValue",label:"sw-import-export.profile.mapping.defaultValue",allowResize:!0,width:"300px"}]),this.profile.systemDefault||(e=[...e,{property:"position",label:"sw-import-export.profile.mapping.position",allowResize:!1,align:"center"}]),e},mappingsExist(){return this.profile.mapping.length>0},sortedMappings(){return this.profile.mapping.sort((e,t)=>e.position>t.position?1:e.position<t.position?-1:0)}},watch:{profile:{handler(e){this.toggleAddMappingActionState(e.sourceEntity)},deep:!0}},created(){this.createdComponent()},methods:{createdComponent(){this.toggleAddMappingActionState(this.profile.sourceEntity),this.languageRepository.search(this.languageCriteria).then(e=>{this.languages=e,this.languages.push({locale:{code:"DEFAULT"}})}),this.currencyRepository.search(this.currencyCriteria).then(e=>{this.currencies=e,this.currencies.push({isoCode:"DEFAULT"})}),this.customFieldSetRepository.search(this.customFieldSetCriteria).then(e=>{this.customFieldSets=e}),this.loadMappings()},toggleAddMappingActionState(e){this.addMappingEnabled=!!e},onDeleteMapping(e){this.profile.mapping=this.profile.mapping.filter(t=>t.id!==e),this.loadMappings()},loadMappings(){if(this.searchTerm){let e=this.searchTerm.toLowerCase();this.mappings=this.profile.mapping.filter(t=>!!(t.key.toLowerCase().includes(e)||t.mappedKey.toLowerCase().includes(e)));return}this.mappings=[],this.profile.mapping.forEach(e=>{e.id||(e.id=o()),this.mappings.push(e)})},onAddMapping(){this.profile.sourceEntity&&(this.profile.mapping.forEach(e=>{e.position+=1}),this.profile.mapping.unshift({id:o(),key:"",mappedKey:"",position:0}),this.loadMappings())},onSearch(){this.debouncedSearch()},debouncedSearch:n(function(){this.loadMappings()},100),isDefaultValueCheckboxDisabled(){return this.profile.systemDefault},isDefaultValueTextFieldDisabled(e){return this.profile.systemDefault||!e.useDefaultValue},isRequiredBySystem(e){return!!e&&!!e.key&&void 0!==this.systemRequiredFields[e.key]},updateSorting(e,t){let i=p(this.sortedMappings),n=i[e];if("up"===t&&e>0){let t=i[e-1];this.swapItems(t,n),this.$emit("update-mapping",i);return}let o=i.length;if("down"===t&&o-1){let t=i[e+1];this.swapItems(n,t),this.$emit("update-mapping",i)}},swapItems(e,t){let i=e.position;e.position=t.position,t.position=i},isFirstMapping(e){return 0===e.position},isLastMapping(e){let t=this.profile.mapping.length-1;return e.position===t}}}},41577:function(e,t,i){var n=i(79033);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),i(45346).Z("1bd93874",n,!0,{})}}]);