(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[470],{"8U4Q":function(t,e,n){var s=n("EXxQ");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n("P8hj").default)("1adcdc58",s,!0,{})},EXxQ:function(t,e,n){},uyIN:function(t,e,n){"use strict";n.r(e);var s=n("7yzw"),i=n.n(s),o=n("92Mt"),l=n.n(o),a=(n("8U4Q"),Shopware),c=a.Mixin,r=a.Data.Criteria;e.default={template:'\n{% block sw_settings_snippet_set_list %}\n<sw-page class="sw-settings-snippet-set-list">\n    \n    {% block sw_settings_snippet_set_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            :initial-search-type="$tc(\'sw-settings-snippet.general.searchBarTitleSets\')"\n            :placeholder="$tc(\'sw-settings-snippet.general.placeholderSearchBarSets\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_set_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_snippet_set_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_snippet_set_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-snippet.general.mainMenuItemGeneral\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_set_list_card %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_snippet_set_list_card_title %}\n            <sw-card position-identifier="sw-settings-snippet-set-list-title">\n                <h3>{{ $tc(\'sw-settings-snippet.setList.title\') }}</h3>\n                <p>{{ $tc(\'sw-settings-snippet.setList.description\') }}</p>\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_settings_snippet_set_list_card_list %}\n            <sw-card\n                position-identifier="sw-settings-snippet-set-list-card-list"\n                :is-loading="isLoading"\n                :title="$tc(\'sw-settings-snippet.setList.cardTitle\')"\n            >\n                \n                {% block sw_settings_snippet_set_list_card_list_container %}\n                <sw-container columns="1fr">\n                    <sw-card-section divider="bottom">\n                        \n                        {% block sw_settings_snippet_set_list_card_list_container_header %}\n                        <div class="sw-settings-snippet-set-list__actions">\n                            \n                            {% block sw_settings_snippet_set_list_card_list_container_header_btn_export %}\n                            <sw-button\n                                v-if="false"\n                                size="small"\n                                variant="ghost"\n                                disabled\n                            >\n                                {{ $tc(\'sw-settings-snippet.setList.buttonExport\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_card_list_container_header_btn_edit_set %}\n                            <sw-button\n                                v-tooltip="getNoPermissionsTooltip(\'snippet.editor\')"\n                                class="sw-settings-snippet-set-list__edit-set-action"\n                                size="small"\n                                variant="primary"\n                                :disabled="!acl.can(\'snippet.editor\') || !snippetsEditable"\n                                @click="onEditSnippetSets"\n                            >\n                                {{ $tc(\'sw-settings-snippet.setList.buttonEditSet\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_card_list_container_header_btn_split %}\n                            <sw-button-group\n                                v-tooltip="getNoPermissionsTooltip(\'snippet.creator\', false)"\n                                class="sw-settings-snippet-set-list__action-split"\n                                split-button\n                            >\n                                \n                                {% block sw_settings_snippet_set_list_card_list_container_header_btn_add_set %}\n                                <sw-button\n                                    class="sw-settings-snippet-set-list__action-add"\n                                    size="small"\n                                    variant="ghost"\n                                    :disabled="!acl.can(\'snippet.creator\')"\n                                    @click="onAddSnippetSet"\n                                >\n                                    {{ $tc(\'sw-settings-snippet.setList.buttonAddSet\') }}\n                                </sw-button>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_set_list_card_list_btn_copy_split %}\n                                <sw-context-button\n                                    headline="hi"\n                                    :disabled="!acl.can(\'snippet.creator\')"\n                                >\n\n                                    \n                                    {% block sw_settings_snippet_set_list_card_btn_copy %}\n                                    <template #button>\n                                        <sw-button\n                                            class="sw-settings-snippet-set-list__action-context-menu"\n                                            size="small"\n                                            variant="ghost"\n                                            :disabled="!acl.can(\'snippet.creator\')"\n                                            square\n                                        >\n                                            \n                                            {% block sw_settings_snippet_set_list_card_btn_copy_icon %}\n                                            <sw-icon\n                                                name="regular-chevron-down-xs"\n                                                size="16"\n                                            />\n                                            {% endblock %}\n                                        </sw-button>\n                                    </template>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_card_copy_context_menu %}\n                                    <sw-context-menu-item variant="headline">\n                                        {{ $tc(\'sw-settings-snippet.setList.splitButtonDuplicateContent\') }}\n                                    </sw-context-menu-item>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_card_copy_context_divider %}\n                                    <sw-context-menu-divider />\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_card_copy_context_menu_items %}\n                                    <sw-context-menu-item\n                                        v-for="set in snippetSets"\n                                        :key="set.id"\n                                        @click="onClone(set.id)"\n                                    >\n                                        {{ set.name }}\n                                    </sw-context-menu-item>\n                                    {% endblock %}\n                                </sw-context-button>\n                                {% endblock %}\n                            </sw-button-group>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n                    </sw-card-section>\n                </sw-container>\n                {% endblock %}\n\n                \n                {% block sw_settings_snippet_set_list_card_list_grid %}\n                <template #grid>\n                    <sw-grid\n                        ref="snippetSetList"\n                        :items="snippetSets"\n                        :sort-direction="sortDirection"\n                        :sort-by="sortBy"\n                        :selectable="acl.can(\'snippet.editor\')"\n                        :allow-inline-edit="acl.can(\'snippet.editor\')"\n                        table\n                        @inline-edit-finish="onInlineEditSave"\n                        @inline-edit-cancel="onInlineEditCancel"\n                        @sw-grid-select-item="onSelectionChanged"\n                        @sw-grid-select-all="onSelectionChanged"\n                        @sort-column="onSortColumn"\n                    >\n                        \n                        {% block sw_settings_snippet_set_list_card_list_grid_template %}\n                        <template\n                            #columns="{ item }"\n                        >\n                            \n                            {% block sw_settings_snippet_set_list_card_list_grid_column_name %}\n                            <sw-grid-column\n                                flex="minmax(200px, 1fr)"\n                                class="sw-settings-snippet-set__column-name"\n                                :label="$tc(\'sw-settings-snippet.setList.columnName\')"\n                                data-index="name"\n                                editable\n                                truncate\n                                sortable\n                            >\n\n                                \n                                {% block sw_settings_snippet_set_list_card_list_grid_column_name_link %}\n                                <router-link :to="{ name: \'sw.settings.snippet.list\', query: { ids: [item.id] } }">\n                                    {{ item.name }}\n                                </router-link>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_set_list_card_list_grid_column_name_editor %}\n                                <template #inline-edit>\n                                    <sw-text-field\n                                        ref="nameEditor"\n                                        {% if VUE3 %}\n                                        v-model:value="item.name"\n                                        {% else %}\n                                        v-model="item.name"\n                                        {% endif %}\n                                        name="sw-field--item-name"\n                                        :placeholder="$tc(\'sw-settings-snippet.setList.placeholderName\')"\n                                    />\n                                </template>\n                                {% endblock %}\n                            </sw-grid-column>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_card_list_grid_column_changed %}\n                            <sw-grid-column\n                                flex="1fr"\n                                class="sw-settings-snippet-set-file__column-changed-at"\n                                sortable\n                                :label="$tc(\'sw-settings-snippet.setList.columnChangedAt\')"\n                                data-index="createdAt"\n                            >\n                                \n                                {% block sw_settings_snippet_set_list_card_list_grid_column_changed_date %}\n                                <div v-if="item.updatedAt">\n                                    {{ dateFilter(item.updatedAt) }}\n                                </div>\n                                <div v-else>\n                                    {{ dateFilter(item.createdAt) }}\n                                </div>\n                                {% endblock %}\n                            </sw-grid-column>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_card_list_grid_column_base_file %}\n                            <sw-grid-column\n                                flex="minmax(200px, 1fr)"\n                                class="sw-settings-snippet-set-file__column-base-file"\n                                sortable\n                                :label="$tc(\'sw-settings-snippet.setList.columnBaseFile\')"\n                                data-index="baseFile"\n                                truncate\n                            >\n                                {{ item.baseFile }}\n\n                                \n                                {% block sw_settings_snippet_set_list_card_list_grid_column_base_file_editor %}\n                                <template #inline-edit>\n                                    <sw-select-field\n                                        {% if VUE3 %}\n                                        v-model:value="item.baseFile"\n                                        {% else %}\n                                        v-model="item.baseFile"\n                                        {% endif %}\n                                    >\n                                        <option\n                                            v-for="file in baseFiles"\n                                            :key="file.name"\n                                            :value="file.name"\n                                        >\n                                            {{ file.name }}\n                                        </option>\n                                    </sw-select-field>\n                                </template>\n                                {% endblock %}\n                            </sw-grid-column>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_card_list_grid_column_base_action %}\n                            <sw-grid-column\n                                flex="100px"\n                                align="center"\n                            >\n                                \n                                {% block sw_settings_snippet_set_list_card_list_grid_column_base_action_buttons %}\n                                <sw-context-button>\n                                    \n                                    {% block sw_settings_snippet_set_list_card_list_grid_column_base_action_btn_edit %}\n                                    <sw-context-menu-item\n                                        class="sw-setting-snippet-set-list__edit-action"\n                                        :router-link="{ name: \'sw.settings.snippet.list\', query: { ids: [item.id] } }"\n                                    >\n                                        {{ contextMenuEditSnippet }}\n                                    </sw-context-menu-item>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_card_list_grid_column_base_action_btn_clone %}\n                                    <sw-context-menu-item\n                                        v-tooltip.left="getNoPermissionsTooltip(\'snippet.editor\')"\n                                        :disabled="!acl.can(\'snippet.creator\')"\n                                        @click="onClone(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-snippet.setList.contextMenuClone\') }}\n                                    </sw-context-menu-item>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_card_list_grid_column_base_action_btn_delete %}\n                                    <sw-context-menu-item\n                                        v-tooltip.left="getNoPermissionsTooltip(\'snippet.deleter\')"\n                                        variant="danger"\n                                        :disabled="!acl.can(\'snippet.deleter\')"\n                                        @click="onDeleteSet(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-snippet.setList.contextMenuDelete\') }}\n                                    </sw-context-menu-item>\n                                    {% endblock %}\n                                </sw-context-button>\n                                {% endblock %}\n                            </sw-grid-column>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_columns_delete_modal %}\n                            <sw-modal\n                                v-if="showDeleteModal === item.id"\n                                :title="$tc(\'global.default.warning\')"\n                                variant="small"\n                                @modal-close="onCloseDeleteModal"\n                            >\n                                \n                                {% block sw_settings_snippet_set_list_delete_modal_confirm_delete_text %}\n                                <p class="sw-settings-snippet-set-list__confirm-delete-text">\n                                    {{ $tc(\'sw-settings-snippet.setList.textDeleteConfirm\', 0, { name: item.name }) }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_set_list_delete_modal_footer %}\n                                <template #modal-footer>\n                                    \n                                    {% block sw_settings_snippet_set_list_delete_modal_cancel %}\n                                    <sw-button\n                                        size="small"\n                                        @click="onCloseDeleteModal"\n                                    >\n                                        {{ $tc(\'sw-settings-snippet.setList.buttonCancel\') }}\n                                    </sw-button>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_delete_modal_confirm %}\n                                    <sw-button\n                                        variant="danger"\n                                        size="small"\n                                        @click="onConfirmDelete(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-snippet.setList.buttonDelete\') }}\n                                    </sw-button>\n                                    {% endblock %}\n                                </template>\n                                {% endblock %}\n                            </sw-modal>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_snippet_set_list_columns_clone_modal %}\n                            <sw-modal\n                                v-if="showCloneModal === item.id"\n                                :title="$tc(\'sw-settings-snippet.setList.modalTitleClone\')"\n                                variant="small"\n                                @modal-close="closeCloneModal"\n                            >\n                                \n                                {% block sw_settings_snippet_set_list_clone_modal_confirm_delete_text %}\n                                <p class="sw-settings-snippet-set-list__confirm-delete-text">\n                                    {{ $tc(\'sw-settings-snippet.setList.textCloneConfirm\', 0, { name: item.name }) }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_snippet_set_list_clone_modal_footer %}\n                                <template #modal-footer>\n                                    \n                                    {% block sw_settings_snippet_set_list_clone_modal_cancel %}\n                                    <sw-button\n                                        size="small"\n                                        @click="closeCloneModal"\n                                    >\n                                        {{ $tc(\'sw-settings-snippet.setList.buttonCancel\') }}\n                                    </sw-button>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_snippet_set_list_clone_modal_confirm %}\n                                    <sw-button\n                                        variant="primary"\n                                        size="small"\n                                        @click="onConfirmClone(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-snippet.setList.buttonClone\') }}\n                                    </sw-button>\n                                    {% endblock %}\n                                </template>\n                                {% endblock %}\n                            </sw-modal>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_snippet_set_list_card_list_grid_pagination %}\n                        <template #pagination>\n                            \n                            {% block sw_settings_snippet_set_list_card_list_grid_pagination_bar %}\n                            <sw-pagination\n                                :offset="offset"\n                                :limit="limit"\n                                :total="total"\n                                :total-visible="7"\n                                :page="page"\n                                @page-change="onPageChange"\n                            />\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-grid>\n                </template>\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["snippetSetService","repositoryFactory","acl","feature"],mixins:[c.getByName("sw-settings-list")],data:function(){return{isLoading:!1,entityName:"snippetSet",sortBy:"name",sortDirection:"ASC",offset:0,baseFiles:[],snippetSets:[],showDeleteModal:!1,showCloneModal:!1,snippetsEditable:!1,selection:{}}},metaInfo:function(){return{title:this.$createTitle()}},computed:{snippetSetRepository:function(){return this.repositoryFactory.create("snippet_set")},snippetSetCriteria:function(){var t=new r(this.page,this.limit);return t.addSorting(r.sort("name","ASC")),this.term&&t.setTerm(this.term),t},contextMenuEditSnippet:function(){return this.acl.can("snippet.editor")?this.$tc("global.default.edit"):this.$tc("global.default.view")},dateFilter:function(){return Shopware.Filter.getByName("date")}},methods:{getList:function(){var t=this;return this.isLoading=!0,this.loadBaseFiles().then((function(){return t.snippetSetRepository.search(t.snippetSetCriteria).then((function(e){t.total=e.total,t.snippetSets=e,t.isLoading=!1}))}))},loadBaseFiles:function(){var t=this;return this.snippetSetService.getBaseFiles().then((function(e){t.baseFiles=e.items}))},onAddSnippetSet:function(){var t=this,e=this.snippetSetRepository.create();e.baseFile=Object.values(this.baseFiles)[0].name,0===this.snippetSets.splice(0,0,e).length&&this.$nextTick((function(){var n=t.$refs.snippetSetList.$children.find((function(n){return t.feature.isActive("VUE3")&&"AsyncComponentWrapper"===n.$options.name&&(n=n.$children[0]),void 0!==n.item&&n.item.id===e.id}));return!!n&&(t.feature.isActive("VUE3")&&"AsyncComponentWrapper"===n.$options.name&&(n=n.$children[0]),n.isEditingActive=!0,!0)}))},onInlineEditSave:function(t){var e=this;this.isLoading=!0;var n=Object.values(this.baseFiles).find((function(e){return e.name===t.baseFile}));n&&null!==n.iso?(t.iso=n.iso,this.snippetSetRepository.save(t).then((function(){e.createInlineSuccessNote(t.name)})).catch((function(){e.createInlineErrorNote(t.name),e.getList()})).finally((function(){e.isLoading=!1}))):(this.isLoading=!1,this.createInlineErrorNote(t.name),this.getList())},onEditSnippetSets:function(){if(this.snippetsEditable){var t=Object.keys(this.snippetSelection);this.$router.push({name:"sw.settings.snippet.list",query:{ids:t}})}else this.createNotEditableErrorNote()},onSelectionChanged:function(t){this.snippetSelection=t,this.snippetSelectionCount=Object.keys(t).length,this.snippetsEditable=this.snippetSelectionCount>=1},onInlineEditCancel:function(){this.getList()},onDeleteSet:function(t){this.showDeleteModal=t},onConfirmDelete:function(t){var e=this;return this.showDeleteModal=!1,this.snippetSetRepository.delete(t).then((function(){e.getList(),e.createDeleteSuccessNote()})).catch((function(){e.onCloseDeleteModal(),e.createDeleteErrorNote()}))},onClone:function(t){this.showCloneModal=t},closeCloneModal:function(){this.showCloneModal=!1},onConfirmClone:function(t){var e=this;return i()(l.a.mark((function n(){var s,i,o,a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.prev=1,n.next=4,e.snippetSetRepository.clone(t);case 4:return s=n.sent,n.next=7,e.snippetSetRepository.get(s.id);case 7:if(i=n.sent){n.next=10;break}return n.abrupt("return");case 10:for(i.name="".concat(i.name," ").concat(e.$tc("sw-settings-snippet.general.copyName")),o=i.name,a=function(t){return t.name===i.name},c=1;e.snippetSets.some(a);)c+=1,i.name="".concat(o," (").concat(c,")");return n.prev=15,n.next=18,e.snippetSetRepository.save(i);case 18:e.createCloneSuccessNote(),n.next=26;break;case 21:return n.prev=21,n.t0=n.catch(15),n.next=25,e.snippetSetRepository.delete(i.id);case 25:e.createCloneErrorNote();case 26:return n.prev=26,e.getList(),n.finish(26);case 29:n.next=34;break;case 31:n.prev=31,n.t1=n.catch(1),e.createCloneErrorNote();case 34:return n.prev=34,e.isLoading=!1,e.closeCloneModal(),n.finish(34);case 38:case"end":return n.stop()}}),n,null,[[1,31,34,38],[15,21,26,29]])})))()},createDeleteSuccessNote:function(){this.createNotificationSuccess({message:this.$tc("sw-settings-snippet.setList.deleteNoteSuccessMessage")})},createDeleteErrorNote:function(){this.createNotificationError({message:this.$tc("sw-settings-snippet.setList.deleteNoteErrorMessage")})},createInlineSuccessNote:function(t){this.createNotificationSuccess({message:this.$tc("sw-settings-snippet.setList.inlineEditSuccessMessage",0,{name:t})})},createInlineErrorNote:function(t){this.createNotificationError({message:this.$tc("sw-settings-snippet.setList.inlineEditErrorMessage",null!==t,{name:t})})},createCloneSuccessNote:function(){this.createNotificationSuccess({message:this.$tc("sw-settings-snippet.setList.cloneSuccessMessage")})},createCloneErrorNote:function(){this.createNotificationError({message:this.$tc("sw-settings-snippet.setList.cloneErrorMessage")})},createNotEditableErrorNote:function(){this.createNotificationError({message:this.$tc("sw-settings-snippet.setList.notEditableNoteErrorMessage")})},getNoPermissionsTooltip:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{showDelay:300,appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t),message:this.$tc("sw-privileges.tooltip.warning")}}}}}}]);