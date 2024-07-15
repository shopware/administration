(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[32968],{158664:function(){},732968:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}}),s(67429);let{Mixin:n}=Shopware;var i={template:'\n{% block sw_settings_search_excluded_search_terms %}\n<sw-card\n    :title="$tc(\'sw-settings-search.generalTab.labelExcludedSearchTerms\')"\n    class="sw-settings-search-excluded-search-terms"\n    position-identifier="sw-settings-search-excluded-search-terms"\n>\n    <template #grid>\n        \n        {% block sw_settings_search_excluded_search_terms_empty_state %}\n        <sw-empty-state\n            v-if="showEmptyState"\n            :title="$tc(\'sw-settings-search.generalTab.textEmptyStateExcludedSearchTerms\')"\n            :show-description="false"\n            :has-action-slot="true"\n            :absolute="false"\n            class="sw-empty-state"\n        >\n            <template #icon>\n                \n                {% block sw_settings_search_excluded_search_terms_empty_state_image %}\n                <img\n                    :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                    :alt="$tc(\'sw-settings-search.generalTab.textEmptyStateExcludedSearchTerms\')"\n                >\n                {% endblock %}\n            </template>\n\n            <template #actions>\n                \n                {% block sw_settings_search_excluded_search_terms_empty_state_action %}\n                <sw-button\n                    class="sw-settings-search-excluded-search-terms__action-add"\n                    variant="ghost"\n                    size="small"\n                    :disabled="!acl.can(\'product_search_config.creator\')"\n                    @click="addExcludedSearchTerms"\n                >\n                    {{ $tc(\'sw-settings-search.generalTab.buttonAddExcludedSearch\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_settings_search_excluded_search_terms_grid %}\n        <div v-if="!showEmptyState">\n            \n            {% block sw_settings_search_excluded_search_terms_header_bar %}\n            <sw-container\n                class="sw-settings-search-excluded-search-terms__header-bar"\n                columns="1fr auto"\n                gap="10px"\n                align="center"\n            >\n                \n                {% block sw_settings_search_excluded_search_terms_filter %}\n                <sw-card-filter\n                    ref="itemFilter"\n                    :placeholder="$tc(\'sw-settings-search.generalTab.textPlaceholderTermsFilter\')"\n                    @sw-card-filter-term-change="onSearchTermChange"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_search_excluded_search_terms_actions %}\n                <div class="sw-settings-search-excluded-search-terms-group-actions">\n                    \n                    {% block sw_settings_search_excluded_search_terms_add_button %}\n                    <sw-button\n                        class="sw-settings-search-excluded-search-terms__insert-button"\n                        variant="ghost"\n                        size="small"\n                        :disabled="!acl.can(\'product_search_config.creator\')"\n                        @click="onInsertTerm"\n                    >\n                        {{ $tc(\'sw-settings-search.generalTab.buttonAddExcludedSearchTerms\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_search_excluded_search_terms_reset_button %}\n                    <sw-button\n                        class="sw-settings-search-excluded-search-terms__reset-button"\n                        size="small"\n                        :disabled="!acl.can(\'product_search_config.creator\')"\n                        :is-loading="isLoading"\n                        @click="onResetExcludedSearchTermDefault"\n                    >\n                        {{ $tc(\'sw-settings-search.generalTab.buttonResetDefault\') }}\n                    </sw-button>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_settings_search_excluded_search_terms_grid_list %}\n            <sw-container>\n                <sw-data-grid\n                    v-if="items.length !== 0"\n                    ref="dataGrid"\n                    :data-source="items"\n                    :allow-inline-edit="acl.can(\'product_search_config.editor\')"\n                    :is-loading="isLoading || isExcludedTermsLoading"\n                    :columns="getSearchableGeneralColumns"\n                    class="sw-settings-search__grid sw-settings-search-excluded-search-terms_grid"\n                    @inline-edit-save="onSaveEdit"\n                    @inline-edit-cancel="onCancelEdit"\n                    @select-item="selectionChanged"\n                >\n                    <template #bulk>\n                        <sw-button\n                            variant="danger"\n                            size="small"\n                            :disabled="!acl.can(\'product_search_config.deleter\')"\n                            @click="onBulkDeleteExcludedTerm()"\n                        >\n                            {{ $tc(\'global.default.delete\') }}\n                        </sw-button>\n                    </template>\n\n                    <template #actions="{ item }">\n                        \n                        {% block sw_search_excluded_terms_column_actions %}\n                        <sw-context-menu-item\n                            variant="danger"\n                            :disabled="!acl.can(\'product_search_config.deleter\')"\n                            @click="onDeleteExcludedTerm([item])"\n                        >\n                            {{ $tc(\'global.default.delete\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n                    </template>\n\n                    <template #pagination>\n                        \n                        {% block sw_search_excluded_terms_list_pagination %}\n                        <sw-pagination\n                            :page="page"\n                            :limit="limit"\n                            :total="total"\n                            :total-visible="7"\n                            @page-change="onPagePagination"\n                        />\n                        {% endblock %}\n                    </template>\n                </sw-data-grid>\n                \n                {% block sw_search_excliuded_terms_no_results %}\n                <div v-if="items.length === 0">\n                    <p class="sw-settings-search__no-data-results">\n                        {{ $tc(\'sw-settings-search.generalTab.labelExcludedSearchTermsNoResults\') }}\n                    </p>\n                </div>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n</sw-card>\n{% endblock %}\n',inject:["excludedSearchTermService","repositoryFactory","acl"],mixins:[n.getByName("notification")],props:{searchConfigs:{type:Object,required:!1,default:null},isExcludedTermsLoading:{type:Boolean,required:!1,default:!1}},data(){return{items:[],originalItems:[],showEmptyState:!1,page:1,limit:10,total:0,searchTerm:"",isLoading:!1,isAddingItem:!1,responseMessage:""}},computed:{searchRepository(){return this.repositoryFactory.create("product_search_config")},getSearchableGeneralColumns(){return[{property:"value",label:"sw-settings-search.generalTab.textColumnSearchTerm",inlineEdit:"string",sortable:!1}]},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{searchConfigs(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(this.isLoading=!0,void 0===this.searchConfigs.excludedTerms||null===this.searchConfigs.excludedTerms||this.searchConfigs.excludedTerms.length<=0){this.resetData(),this.showEmptyState=!0,this.isLoading=!1;return}this.originalItems=this.searchConfigs.excludedTerms,this.renderComponent()},resetData(){this.originalItems=[],this.items=[],this.page=1,this.total=0},addExcludedSearchTerms(){this.showEmptyState=!1},onInsertTerm(){this.isAddingItem=!0,this.searchTerm="",this.$refs.itemFilter.term="",this.page=1,this.renderComponent(),this.items.unshift({id:null,value:""}),this.$refs.dataGrid.onDbClickCell(this.items[0]),this.$emit("edit-change",!0)},renderComponent(){if(this.originalItems.length<=0){this.isLoading=!1,this.items=[];return}let e=this.filterItems();if(this.total=e.length,this.total<=0){this.items=[],this.showEmptyState=!1,this.isLoading=!1;return}this.items=this.sliceItems(e),this.items.length<=0&&(this.page-=1,this.renderComponent()),this.showEmptyState=!1,this.isLoading=!1},filterItems(){return this.originalItems.filter(e=>e.search(this.searchTerm)>=0)},sliceItems(e){let t=(this.page-1)*this.limit;return e.slice(t,t+this.limit).map((e,t)=>({id:t,value:e}))},onPagePagination(e){this.page=e.page,this.limit=e.limit,this.isAddingItem=!1,this.renderComponent()},onDeleteExcludedTerm(e){this.responseMessage=this.$tc("sw-settings-search.notification.deleteExcludedTermSuccess"),this.isLoading=!0;let t=e.filter(e=>""!==e.value).map(e=>e.value);if(t.length<=0){this.renderComponent();return}this.originalItems=this.originalItems.filter(e=>!t.find(t=>t===e)),this.saveConfig()},onSearchTermChange(e){this.page=1,this.searchTerm=e,""===e&&this.isAddingItem||(this.isAddingItem=!1,this.renderComponent())},selectionChanged(e){this.selection=e},onSaveEdit(e){if(this.isLoading=!0,""===e.value){this.createNotificationError({message:this.$tc("sw-settings-search.notification.excludedTermRequired")}),this.renderComponent();return}let t=this.getOriginItem(e);if(this.originalItems.find(s=>s===e.value&&s!==t)){this.createNotificationError({message:this.$tc("sw-settings-search.notification.excludedTermAlreadyExists")}),this.renderComponent();return}if(this.isAddingItem){this.responseMessage=this.$tc("sw-settings-search.notification.createExcludedTermSuccess"),this.originalItems.unshift(e.value),this.saveConfig();return}this.responseMessage=this.$tc("sw-settings-search.notification.updateExcludedTermSuccess"),this.originalItems[e.id]=e.value,this.saveConfig()},getOriginItem(e){let t=this.filterItems(),s=this.sliceItems(t).find(t=>t.id===e.id);return s?s.value:null},onCancelEdit(){this.renderComponent(),this.$emit("edit-change",!1)},onBulkDeleteExcludedTerm(){this.onDeleteExcludedTerm(Object.values(this.selection))},saveConfig(){return this.searchConfigs.excludedTerms=this.originalItems,this.searchRepository.save(this.searchConfigs).then(()=>{this.createNotificationSuccess({message:this.responseMessage}),this.isAddingItem=!1,this.renderComponent(),this.$emit("edit-change",!1)}).catch(e=>{this.createNotificationError({message:e})}).finally(()=>{this.isLoading=!1})},onResetExcludedSearchTermDefault(){this.excludedSearchTermService.resetExcludedSearchTerm().then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-search.notification.resetToDefaultExcludedTermSuccess")}),this.$emit("data-load")}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-search.notification.resetToDefaultExcludedTermError")})})}}}},67429:function(e,t,s){var n=s(158664);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),s(745346).Z("3bf6eb18",n,!0,{})}}]);