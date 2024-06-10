(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[473],{"+mlS":function(t,n,e){},"2f2n":function(t,n,e){var s=e("+mlS");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("P8hj").default)("bc8ce026",s,!0,{})},pN0P:function(t,n,e){"use strict";e.r(n);var s=e("c1oF"),i=e.n(s),l=(e("2f2n"),Shopware.Mixin),a=Shopware.Data.Criteria;n.default={template:'\n{% block sw_settings_list %}\n\n{% block sw_settings_tag_index %}\n<sw-page class="sw-settings-tag-list">\n    \n    {% block sw_settings_tag_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="tag"\n            :placeholder="$tc(\'sw-settings-tag.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_tag_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_tag_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_tag_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }} <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-tag.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_tag_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_tag_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_tag_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'tag.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-tag-list__button-create"\n            variant="primary"\n            :disabled="!acl.can(\'tag.creator\')"\n            @click="onDetail(null)"\n        >\n            {{ $tc(\'sw-settings-tag.list.buttonAddTag\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_tag_list_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_tag_list_content_card %}\n            <sw-card\n                class="sw-settings-tag-list__content"\n                position-identifier="sw-settings-tag-list-content"\n            >\n                <template #toolbar>\n                    \n                    {% block sw_settings_tag_list_grid_toolbar_search %}\n                    <sw-card-filter\n                        ref="swCardFilter"\n                        :placeholder="$tc(\'sw-settings-tag.list.searchPlaceholder\')"\n                        @sw-card-filter-term-change="onSearch"\n                    />\n                    {% endblock %}\n                    \n                    {% block sw_settings_tag_list_grid_toolbar_filter %}\n                    <sw-context-button\n                        :menu-width="300"\n                        :auto-close="false"\n                        :auto-close-outside-click="true"\n                        :z-index="1000"\n                        :additional-context-menu-classes="{ \'sw-settings-tag-list__filter\': true }"\n                    >\n                        <template #button>\n                            \n                            {% block sw_settings_tag_list_grid_toolbar_filter_menu_trigger %}\n                            <sw-button\n                                class="sw-settings-tag-list__filter-menu-trigger"\n                                size="small"\n                            >\n                                <sw-icon\n                                    name="regular-filter-s"\n                                    size="16"\n                                />\n                                {{ $tc(\'sw-settings-tag.list.filter\') }}\n                            </sw-button>\n                            <i\n                                v-if="filterCount > 0"\n                                class="filter-badge"\n                            >\n                                {{ filterCount }}\n                            </i>\n                            {% endblock %}\n                        </template>\n\n                        \n                        {% block sw_settings_tag_list_grid_toolbar_filter_header %}\n                        <h3>{{ $tc(\'sw-settings-tag.list.filter\') }}</h3>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_toolbar_filter_divider %}\n                        <sw-context-menu-divider />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_toolbar_filter_duplicate %}\n                        <sw-switch-field\n                            {% if VUE3 %}\n                            v-model:value="duplicateFilter"\n                            {% else %}\n                            v-model="duplicateFilter"\n                            {% endif %}\n                            :label="$tc(\'sw-settings-tag.list.filterDuplicate\')"\n                            {% if VUE3 %}\n                            @update:value="onFilter"\n                            {% else %}\n                            @change="onFilter"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_toolbar_filter_empty %}\n                        <sw-switch-field\n                            {% if VUE3 %}\n                            v-model:value="emptyFilter"\n                            {% else %}\n                            v-model="emptyFilter"\n                            {% endif %}\n                            :label="$tc(\'sw-settings-tag.list.filterEmpty\')"\n                            {% if VUE3 %}\n                            @update:value="onFilter"\n                            {% else %}\n                            @change="onFilter"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_toolbar_filter_assignment %}\n                        <sw-multi-select\n                            {% if VUE3 %}\n                            v-model:value="assignmentFilter"\n                            {% else %}\n                            v-model="assignmentFilter"\n                            {% endif %}\n                            class="sw-settings-tag-list__filter-assignment-select"\n                            :label="$tc(\'sw-settings-tag.list.filterAssignemnt\')"\n                            :placeholder="$tc(\'sw-settings-tag.list.placeholderFilterAssignemnt\')"\n                            :options="assignmentFilterOptions"\n                            :disabled="emptyFilter"\n                            {% if VUE3 %}\n                            @update:value="onFilter"\n                            {% else %}\n                            @change="onFilter"\n                            {% endif %}\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_toolbar_filter_footer %}\n                        <div class="sw-settings-tag-list__filter-footer">\n                            <a\n                                href="#"\n                                @click.prevent="resetFilters"\n                            >\n                                {{ $tc(\'sw-settings-tag.list.resetFilters\') }}\n                            </a>\n                        </div>\n                        {% endblock %}\n                    </sw-context-button>\n                    {% endblock %}\n                </template>\n\n                <template #grid>\n                    \n                    {% block sw_settings_tag_list_grid %}\n                    <sw-entity-listing\n                        v-if="isLoading || total > 0"\n                        ref="swSettingsTagGrid"\n                        class="sw-settings-tag-list__grid"\n                        identifier="sw-settings-tag-list"\n                        :items="tags"\n                        :columns="tagColumns"\n                        :repository="tagRepository"\n                        :full-page="total > 0"\n                        :plain-appearance="true"\n                        :compact-mode="true"\n                        :show-selection="true"\n                        :is-loading="isLoading"\n                        :allow-view="acl.can(\'tag.viewer\')"\n                        :allow-edit="acl.can(\'tag.editor\')"\n                        :allow-delete="acl.can(\'tag.deleter\')"\n                        :disable-data-fetching="true"\n                        :sort-by="sortBy"\n                        :sort-direction="sortDirection"\n                        @column-sort="onSortColumn"\n                        @page-change="onPageChange"\n                    >\n                        \n                        {% block sw_settings_tag_list_grid_bulk %}\n                        <template #bulk-additional="{ selectionCount }">\n                            \n                            <a\n                                v-if="selectionCount > 1 && acl.can(\'tag.creator\') && acl.can(\'tag.deleter\')"\n                                class="link"\n                                role="button"\n                                tabindex="0"\n                                @click="showBulkMergeModal = true"\n                            >\n                                {{ $tc(\'sw-settings-tag.list.bulkMerge\') }}\n                            </a>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_bulk_merge_modal %}\n                        <template #bulk-modals-additional="{ selection, ids }">\n                            <sw-modal\n                                v-if="showBulkMergeModal"\n                                variant="large"\n                                :title="$tc(\'sw-settings-tag.list.bulkMergeTitle\')"\n                                @modal-close="onCloseBulkMergeModal"\n                            >\n                                <slot\n                                    name="bulk-modal-merge-confirm-text"\n                                    v-bind="{ selection, ids }"\n                                >\n                                    <sw-alert variant="info">\n                                        {{ $tc(\'sw-settings-tag.list.bulkMergeNotice\') }}\n                                    </sw-alert>\n                                    <p class="sw-settings-tag-list__confirm-bulk-merge-text">\n                                        <span v-if="!bulkMergeProgress.isRunning">\n                                            {{ $tc(\'sw-settings-tag.list.bulkMergeMessage\') }}\n                                        </span>\n                                        <span v-else>\n                                            {{ $tc(\'sw-settings-tag.list.bulkMerging\') }}\n                                        </span>\n                                        <span\n                                            v-for="(id, index) in ids"\n                                            :key="index"\n                                            class="confirm-bulk-merge-text__label"\n                                        >\n                                            <sw-label v-tooltip="{ message: selection[id].name }">\n                                                {{ selection[id].name }}\n                                            </sw-label>&nbsp;{{ getBulkMergeMessageGlue(ids, id) }}\n                                        </span>\n                                        <span\n                                            v-if="bulkMergeProgress.isRunning"\n                                            class="confirm-bulk-merge-text__label-into"\n                                        >\n                                            <sw-label v-tooltip="{ message: duplicateName }">{{ duplicateName }}</sw-label>&nbsp;.\n                                        </span>\n                                    </p>\n                                    <p v-if="bulkMergeProgress.isRunning">\n                                        {{ $tc(\'sw-settings-tag.list.bulkMergeTimeNotice\') }}\n                                    </p>\n                                    <p v-else>\n                                        {{ $tc(\'sw-settings-tag.list.bulkMergeNoUndoNotice\') }}\n                                    </p>\n                                </slot>\n\n                                \n                                {% block sw_settings_tag_list_merge_modal_confirm_name_input %}\n                                <slot name="bulk-modal-merge-confirm-name-input">\n                                    <p\n                                        v-if="!bulkMergeProgress.isRunning"\n                                        class="sw-settings-tag-list__confirm-bulk-merge-name-input"\n                                    >\n                                        <sw-text-field\n                                            {% if VUE3 %}\n                                            v-model:value="duplicateName"\n                                            {% else %}\n                                            v-model="duplicateName"\n                                            {% endif %}\n                                            :label="$tc(\'sw-settings-tag.list.bulkMergeName\')"\n                                            :placeholder="$tc(\'sw-settings-tag.list.placeholderTagName\')"\n                                            maxlength="255"\n                                            required\n                                        />\n                                    </p>\n                                </slot>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_tag_list_merge_modal_progress %}\n                                <slot name="bulk-modal-merge-progress">\n                                    <div\n                                        v-if="bulkMergeProgress.isRunning"\n                                        class="sw-settings-tag-list__bulk-merge-progress"\n                                    >\n                                        <sw-loader\n                                            class="sw-settings-tag-list__bulk-merge-progress-icon"\n                                            size="44px"\n                                        />\n                                    </div>\n                                </slot>\n                                {% endblock %}\n\n                                <template #modal-footer>\n                                    <slot\n                                        name="bulk-modal-merge-footer"\n                                        v-bind="{ selection }"\n                                    >\n                                        <sw-button\n                                            size="small"\n                                            @click="onCloseBulkMergeModal"\n                                        >\n                                            {{ $tc(\'global.default.cancel\') }}\n                                        </sw-button>\n\n                                        <sw-button\n                                            variant="primary"\n                                            size="small"\n                                            :is-loading="isLoading"\n                                            :disabled="!duplicateName || bulkMergeProgress.isRunning"\n                                            @click="onMergeTags(selection)"\n                                        >\n                                            {{ $tc(\'sw-settings-tag.list.bulkMerge\') }}\n                                        </sw-button>\n                                    </slot>\n                                </template>\n                            </sw-modal>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_column_default_name %}\n                        <template #column-name="{ item, column }">\n                            <sw-label v-tooltip="{ message: item.name }">\n                                {{ item.name }}\n                            </sw-label>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_column_assignments %}\n                        <template\n                            v-for="(propertyName, index) in assignmentProperties"\n                            {% if VUE3 %}\n                            :key="index"\n                            {% endif %}\n                            #[`column-${propertyName}`]="{ item }"\n                        >\n                            <span\n                                {% if VUE2 %}\n                                :key="index"\n                                {% endif %}\n                                class="sw-data-grid__cell-value"\n                            >\n                                {{ getPropertyCounting(propertyName, item.id) }}\n                                {{ $tc(`sw-settings-tag.list.assignments.content.${propertyName}`, getPropertyCounting(propertyName, item.id)) }}\n                            </span>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_columns_actions %}\n                        <template #actions="{ item }">\n                            \n                            {% block sw_settings_tag_list_grid_columns_actions_edit %}\n                            <sw-context-menu-item\n                                class="sw-settings-tag-list__edit-action"\n                                :disabled="!acl.can(\'tag.editor\')"\n                                @click="onDetail(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-tag.list.contextMenuEdit\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_tag_list_grid_columns_actions_duplicate %}\n                            <sw-context-menu-item\n                                :disabled="!acl.can(\'tag.creator\')"\n                                class="sw-settings-tag-list__duplicate-action"\n                                @click="onDuplicate(item)"\n                            >\n                                {{ $tc(\'sw-settings-tag.list.contextMenuDuplicate\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_tag_list_grid_columns_actions_delete %}\n                            <sw-context-menu-item\n                                class="sw-settings-tag-list__delete-action"\n                                variant="danger"\n                                :disabled="!acl.can(\'tag.deleter\')"\n                                @click="onDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-tag.list.contextMenuDelete\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tag_list_grid_action_modals %}\n                        <template #action-modals="{ item }">\n                            \n                            {% block sw_settings_tag_list_delete_modal %}\n                            <sw-modal\n                                v-if="showDeleteModal === item.id"\n                                :title="$tc(\'global.default.warning\')"\n                                variant="small"\n                                @modal-close="onCloseDeleteModal"\n                            >\n                                \n                                {% block sw_settings_tag_list_delete_modal_confirm_delete_text %}\n                                <p class="sw-settings-tag-list__confirm-delete-text">\n                                    {{ $tc(\'sw-settings-tag.list.textDeleteConfirm\', 0, { name: item.name }) }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_tag_list_delete_modal_footer %}\n                                <template #modal-footer>\n                                    \n                                    {% block sw_settings_tag_list_delete_modal_cancel %}\n                                    <sw-button\n                                        size="small"\n                                        @click="onCloseDeleteModal"\n                                    >\n                                        {{ $tc(\'sw-settings-tag.list.buttonCancel\') }}\n                                    </sw-button>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_tag_list_delete_modal_confirm %}\n                                    <sw-button\n                                        variant="danger"\n                                        size="small"\n                                        @click="onConfirmDelete(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-tag.list.buttonDelete\') }}\n                                    </sw-button>\n                                    {% endblock %}\n                                </template>\n                                {% endblock %}\n                            </sw-modal>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_tag_list_duplicate_modal %}\n                            <sw-modal\n                                v-if="showDuplicateModal === item.id"\n                                :title="$tc(\'sw-settings-tag.list.contextMenuDuplicate\')"\n                                variant="small"\n                                @modal-close="onCloseDuplicateModal"\n                            >\n                                \n                                {% block sw_settings_tag_list_delete_modal_confirm_duplicate_input %}\n                                <p class="sw-settings-tag-list__confirm-duplicate-input">\n                                    <sw-text-field\n                                        {% if VUE3 %}\n                                        v-model:value="duplicateName"\n                                        {% else %}\n                                        v-model="duplicateName"\n                                        {% endif %}\n                                        :label="$tc(\'sw-settings-tag.list.columnName\')"\n                                        :placeholder="$tc(\'sw-settings-tag.list.placeholderTagName\')"\n                                        maxlength="255"\n                                        required\n                                    />\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_tag_list_duplicate_modal_footer %}\n                                <template #modal-footer>\n                                    \n                                    {% block sw_settings_tag_list_duplicate_modal_cancel %}\n                                    <sw-button\n                                        size="small"\n                                        @click="onCloseDuplicateModal"\n                                    >\n                                        {{ $tc(\'sw-settings-tag.list.buttonCancel\') }}\n                                    </sw-button>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_tag_list_duplicate_modal_confirm %}\n                                    <sw-button\n                                        variant="primary"\n                                        size="small"\n                                        :disabled="!duplicateName"\n                                        @click="onConfirmDuplicate(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-tag.list.buttonAddTag\') }}\n                                    </sw-button>\n                                    {% endblock %}\n                                </template>\n                                {% endblock %}\n                            </sw-modal>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_tag_list_detail_edit_modal %}\n                            <sw-settings-tag-detail-modal\n                                v-if="showDetailModal === item.id"\n                                :edited-tag="item"\n                                :counts="getCounts(item.id)"\n                                :property="detailProperty"\n                                :entity="detailEntity"\n                                @finish="onSaveFinish"\n                                @close="onCloseDetailModal"\n                            />\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-entity-listing>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_tag_list_empty_state %}\n                    <sw-empty-state\n                        v-else\n                        :absolute="false"\n                        :show-description="false"\n                        :title="$tc(\'sw-settings-tag.list.titleEmptyStateList\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_tag_list_detail_add_modal %}\n                    <sw-settings-tag-detail-modal\n                        v-if="showDetailModal === true"\n                        @finish="onSaveFinish"\n                        @close="onCloseDetailModal"\n                    />\n                    {% endblock %}\n                </template>\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n{% endblock %}\n',inject:["repositoryFactory","acl","tagApiService"],mixins:[l.getByName("listing"),l.getByName("notification")],data:function(){return{tags:null,sortBy:"name",isLoading:!1,sortDirection:"ASC",showDeleteModal:!1,showDuplicateModal:!1,showBulkMergeModal:!1,duplicateName:null,showDetailModal:!1,detailProperty:null,detailEntity:null,assignmentFilter:null,emptyFilter:!1,duplicateFilter:!1,bulkMergeProgress:{isRunning:!1,currentAssignment:null,progress:0,total:0}}},metaInfo:function(){return{title:this.$createTitle()}},computed:{tagRepository:function(){return this.repositoryFactory.create("tag")},tagDefinition:function(){return Shopware.EntityDefinition.get("tag")},assignmentProperties:function(){var t=[];return Object.entries(this.tagDefinition.properties).forEach((function(n){var e=i()(n,2),s=e[0];"many_to_many"===e[1].relation&&t.push(s)})),t},tagCriteria:function(){var t=new a(this.page,this.limit);t.setTerm(this.term),this.setAggregations(t);var n="createdAt"===this.sortBy,e=a.sort(this.sortBy,this.sortDirection,n);return this.assignmentProperties.includes(this.sortBy)&&(e.field+=".id",e.type="count"),t.addSorting(e),t},tagColumns:function(){var t=this,n=[{property:"name",dataIndex:"name",label:"sw-settings-tag.list.columnName",routerLink:"sw.settings.tag.detail",width:"200px",primary:!0,allowResize:!0}];return this.assignmentProperties.forEach((function(e){n.push({property:"".concat(e),label:t.$tc("sw-settings-tag.list.assignments.header.".concat(e)),width:"250px",allowResize:!0,sortable:!0})})),n},assignmentFilterOptions:function(){var t=this,n=[];return Object.entries(this.tagDefinition.properties).forEach((function(e){var s=i()(e,2),l=s[0];"many_to_many"===s[1].relation&&n.push({value:l,label:t.$tc("sw-settings-tag.list.assignments.filter.".concat(l))})})),n.sort((function(t,n){return t.label>n.label?1:n.label>t.label?-1:0})),n},hasAssignmentFilter:function(){return this.assignmentFilter&&this.assignmentFilter.length>0},filterCount:function(){var t=0;return(this.hasAssignmentFilter||this.emptyFilter)&&(t+=1),this.duplicateFilter&&(t+=1),t}},methods:{setAggregations:function(t){Object.entries(this.tagDefinition.properties).forEach((function(n){var e=i()(n,2),s=e[0];"many_to_many"===e[1].relation&&t.addAggregation(a.terms(s,"id",null,null,a.count(s,"tag.".concat(s,".id"))))}))},getList:function(){var t,n=this;(this.isLoading=!0,this.$refs.swCardFilter&&this.$refs.swCardFilter.term!==this.term)&&(this.$refs.swCardFilter.term=null!==(t=this.term)&&void 0!==t?t:"");this.duplicateFilter||this.emptyFilter||this.hasAssignmentFilter?this.tagApiService.filterIds(this.tagCriteria.parse(),{duplicateFilter:this.duplicateFilter,emptyFilter:this.emptyFilter,assignmentFilter:this.assignmentFilter}).then((function(t){var e=t.total,s=t.ids;if(n.total=e,0===e)return n.tags=null,void(n.isLoading=!1);var i=new a(1,n.limit);i.setIds(s),i.setTotalCountMode(0),i.aggregations=n.tagCriteria.aggregations,i.associations=n.tagCriteria.associations,n.tagRepository.search(i).then((function(t){return t.total=e,n.tags=n.sortByIdsOrder(t,s),n.isLoading=!1,t})).catch((function(){n.isLoading=!1}))})).catch((function(){n.isLoading=!1})):this.tagRepository.search(this.tagCriteria).then((function(t){return n.total=t.total,n.tags=t,n.isLoading=!1,t})).catch((function(){n.isLoading=!1}))},sortByIdsOrder:function(t,n){return t.sort((function(t,e){return n.indexOf(t.id)>n.indexOf(e.id)?1:-1})),t},getCounts:function(t){var n=this,e={};return Object.entries(this.tagDefinition.properties).forEach((function(s){var l=i()(s,2),a=l[0];if("many_to_many"===l[1].relation){var o=n.tags.aggregations[a].buckets.filter((function(n){return n.key===t}))[0];if(!o[a]||!o[a].count)return;e[a]=o[a].count}})),e},getPropertyCounting:function(t,n){if(!this.tags.aggregations[t])return 0;var e=this.tags.aggregations[t].buckets.filter((function(t){return t.key===n}))[0];return e&&e[t]&&e[t].count?e[t].count:0},onDelete:function(t){this.showDeleteModal=t},onCloseDeleteModal:function(){this.showDeleteModal=!1},onConfirmDelete:function(t){var n=this;return this.showDeleteModal=!1,this.$nextTick().then((function(){n.isLoading=!0})),this.tagRepository.delete(t).then((function(){n.getList()}))},onDuplicate:function(t){this.showDuplicateModal=t.id,this.duplicateName="".concat(t.name," ").concat(this.$tc("global.default.copy"))},onCloseDuplicateModal:function(){this.showDuplicateModal=!1,this.duplicateName=null},onConfirmDuplicate:function(t){var n=this;this.showDuplicateModal=!1,this.$nextTick().then((function(){n.isLoading=!0}));var e={cloneChildren:!1,overwrites:{name:this.duplicateName}};return this.tagRepository.clone(t,Shopware.Context.api,e).then((function(){n.duplicateName=null,n.getList()})).catch((function(){n.isLoading=!1,n.duplicateName=null,n.createNotificationError({message:n.$tc("global.notification.unspecifiedSaveErrorMessage")})}))},onDetail:function(t,n,e){this.showDetailModal=null==t||t,n&&e&&(this.detailProperty=n,this.detailEntity=e)},onCloseDetailModal:function(){this.showDetailModal=!1,this.detailProperty=null,this.detailEntity=null},onCloseBulkMergeModal:function(){this.bulkMergeProgress.isRunning=!1,this.showBulkMergeModal=!1,this.duplicateName=null},onMergeTags:function(t){var n=this;return this.tagApiService.merge(Object.keys(t),this.duplicateName,this.tagDefinition.properties,this.bulkMergeProgress).then((function(){n.duplicateName=null,n.$refs.swSettingsTagGrid.resetSelection(),n.bulkMergeProgress.isRunning=!1,n.showBulkMergeModal=!1,n.$nextTick().then((function(){n.isLoading=!0})),n.onFilter()})).catch((function(){n.bulkMergeProgress.isRunning=!1,n.createNotificationError({message:n.$tc("global.notification.unspecifiedSaveErrorMessage")})}))},getBulkMergeMessageGlue:function(t,n){return t.length-1===t.indexOf(n)?this.bulkMergeProgress.isRunning?this.$tc("sw-settings-tag.list.bulkMergeInto"):this.$tc("sw-settings-tag.list.bulkMergeMessageFinal"):t.length-2===t.indexOf(n)?this.$tc("sw-settings-tag.list.bulkMergeMessageAnd"):","},onSaveFinish:function(){var t=this;this.onCloseDetailModal(),this.$nextTick().then((function(){t.getList()}))},onFilter:function(){this.assignmentFilter&&this.emptyFilter&&(this.assignmentFilter=null),this.page=1,this.getList()},resetFilters:function(){this.assignmentFilter=null,this.emptyFilter=!1,this.duplicateFilter=!1,this.onFilter()}}}}}]);