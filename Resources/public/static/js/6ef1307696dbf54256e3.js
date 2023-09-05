(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[137],{"1pai":function(e,t,n){"use strict";n.r(t);var s=n("7yzw"),i=n.n(s),a=n("CsSd"),o=n.n(a),l=n("92Mt"),c=n.n(l),d=(n("gaZf"),Shopware.Mixin),r=Shopware.Data.Criteria;t.default={template:'\n{% block sw_cms_layout_modal %}\n<sw-modal\n    class="sw-cms-layout-modal"\n    variant="large"\n    :title="$tc(\'sw-cms.components.cmsLayoutModal.modalTitle\')"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_cms_layout_modal_header %}\n    <div class="sw-cms-layout-modal__header">\n\n        \n        {% block sw_cms_layout_modal_header_search %}\n        <sw-simple-search-field\n            class="sw-cms-layout-modal__header-search"\n            :placeholder="$tc(\'sw-cms.general.placeholderSearchBar\')"\n            :search-term="term"\n            @search-term-change="onSearch"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_layout_modal_header_sorting_container %}\n        <div class="sw-cms-layout-modal__actions-sorting">\n\n            \n            {% block sw_cms_layout_modal_header_sorting_select %}\n            <sw-sorting-select\n                class="sw-cms-layout-modal__header-sorting-select"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                @sorting-changed="onSort"\n            />\n            {% endblock %}\n\n            \n            {% block sw_cms_layout_modal_header_view_toggle %}\n            <div\n                class="sw-cms-layout-modal__actions-mode"\n                role="button"\n                tabindex="0"\n                @click="toggleListMode"\n                @keydown.enter="toggleListMode"\n            >\n\n                \n                {% block sw_cms_layout_modal_header_view_toogle_grid %}\n                <sw-icon\n                    v-if="listMode === \'grid\'"\n                    name="regular-view-normal"\n                    size="16"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_layout_modal_header_view_toogle_list %}\n                <sw-icon\n                    v-if="listMode === \'list\'"\n                    name="regular-view-grid"\n                    size="16"\n                />\n                {% endblock %}\n\n            </div>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_layout_modal_content %}\n    <div class="sw-cms-layout-modal__content">\n\n        \n        {% block sw_cms_layout_modal_loader %}\n        <sw-loader v-if="isLoading" />\n        {% endblock %}\n\n        \n        {% block sw_cms_layout_modal_content_container %}\n        <div v-else-if="listMode === \'grid\'">\n            <sw-container\n                columns="repeat(auto-fill, minmax(250px, 1fr))"\n                gap="24px"\n            >\n\n                \n                {% block sw_cms_layout_modal_content_listing %}\n                <div\n                    v-for="(cmsPage, index) in pages"\n                    :key="index"\n                    :class="gridItemClasses(cmsPage.id, index)"\n                >\n                    \n                    {% block sw_cms_layout_modal_content_listing_item %}\n\n                    \n                    {% block sw_cms_layout_modal_content_listing_item_checkbox %}\n                    <sw-checkbox-field\n                        :value="cmsPage.id === selectedPageObject?.id"\n                        class="sw-cms-layout-modal__content-checkbox"\n                        {% if VUE3 %}\n                        @update:value="selectItem(cmsPage)"\n                        {% else %}\n                        @change="selectItem(cmsPage)"\n                        {% endif %}\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_layout_modal_content_listing_item_inner %}\n                    <sw-cms-list-item\n                        :key="cmsPage.id"\n                        :page="cmsPage"\n                        :is-default="[defaultProductId, defaultCategoryId].includes(cmsPage.id)"\n                        @item-click="selectItem(cmsPage)"\n                    />\n                    {% endblock %}\n\n                    {% endblock %}\n                </div>\n            </sw-container>\n\n            \n            {% block sw_cms_layout_modal_content_pagination %}\n            <sw-pagination\n                class="sw-cms-layout-modal__content-pagination"\n                :page="page"\n                :limit="limit"\n                :total="total"\n                :auto-hide="false"\n                @page-change="onPageChange"\n            />\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n        <sw-data-grid\n            v-else-if="listMode === \'list\'"\n            class="sw-cms-list__list-data-grid"\n            identifier="sw-cms-list"\n            :is-loading="isLoading"\n            :limit="limit"\n            :data-source="pages"\n            :columns="columnConfig"\n            :skeleton-item-amount="limit"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            :allow-inline-edit="false"\n            :allow-column-edit="false"\n            :show-settings="false"\n            :show-actions="false"\n            :show-selection="true"\n            :maximum-select-items="1"\n            :pre-selection="gridPreSelection"\n            @selection-change="selectInGrid"\n            @column-sort="onSortColumn"\n        >\n\n            \n            {% block sw_cms_list_listing_list_data_grid_column_name %}\n            <template #column-name="{ item }">\n                <div\n                    role="button"\n                    tabindex="0"\n                    @click="selectItem(item)"\n                    @keydown.enter="selectItem(item)"\n                >\n                    {{ item.translated.name }}\n                </div>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_cms_list_listing_list_data_grid_column_type %}\n            <template #column-type="{ item }">\n                {{ getPageType(item) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_cms_list_listing_list_data_grid_column_created %}\n            <template #column-createdAt="{ item }">\n                {{ item.createdAt | date({ hour: \'2-digit\', minute: \'2-digit\' }) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_cms_list_listing_list_data_grid_column_updated %}\n            <template #column-updatedAt="{ item }">\n                {{ item.updatedAt | date({ hour: \'2-digit\', minute: \'2-digit\' }) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_cms_list_listing_list_data_grid_pagination %}\n            <template #pagination>\n                <sw-pagination\n                    :page="page"\n                    :limit="limit"\n                    :total="total"\n                    :auto-hide="false"\n                    @page-change="onPageChange"\n                />\n            </template>\n            {% endblock %}\n        </sw-data-grid>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_layout_modal_footer %}\n    <template #modal-footer>\n        <sw-button @click="closeModal">\n            {{ $tc(\'sw-cms.components.cmsLayoutModal.actionCancel\') }}\n        </sw-button>\n        <sw-button\n            variant="primary"\n            @click="selectLayout"\n        >\n            {{ $tc(\'sw-cms.components.cmsLayoutModal.actionConfirm\') }}\n        </sw-button>\n    </template>\n    {% endblock %}\n\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","systemConfigApiService","acl","cmsPageTypeService"],mixins:[d.getByName("listing")],props:{headline:{type:String,required:!1,default:""},cmsPageTypes:{type:Array,required:!1,default:function(){return[]}},preSelection:{type:Object,required:!1,default:function(){}}},data:function(){return{listMode:"grid",disableRouteParams:!0,sortBy:"createdAt",sortDirection:"DESC",limit:10,selectedPageObject:null,isLoading:!1,term:null,total:null,pages:[],defaultCategoryId:"",defaultProductId:""}},computed:{pageRepository:function(){return this.repositoryFactory.create("cms_page")},cmsPageCriteria:function(){var e=new r(this.page,this.limit);return e.addAssociation("previewMedia").addSorting(r.sort(this.sortBy,this.sortDirection)),this.cmsPageTypes.length&&e.addFilter(r.equalsAny("type",this.cmsPageTypes)),null!==this.term&&e.setTerm(this.term),e},columnConfig:function(){return[{property:"name",label:this.$tc("sw-cms.list.gridHeaderName"),inlineEdit:"string",primary:!0},{property:"type",label:this.$tc("sw-cms.list.gridHeaderType")},{property:"createdAt",label:this.$tc("sw-cms.list.gridHeaderCreated")},{property:"updatedAt",label:this.$tc("sw-cms.list.gridHeaderUpdated")}]},gridPreSelection:function(){var e;return null!==(e=this.selectedPageObject)&&void 0!==e&&e.id?o()({},this.selectedPageObject.id,this.selectedPageObject):{}}},watch:{preSelection:{handler:function(e){this.selectedPageObject=e},immediate:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.acl.can("system_config.read")&&this.getDefaultLayouts()},getList:function(){var e=this;return this.isLoading=!0,this.pageRepository.search(this.cmsPageCriteria).then((function(t){e.total=t.total,e.pages=t,e.isLoading=!1})).catch((function(){e.isLoading=!1}))},selectLayout:function(){var e;this.$emit("modal-layout-select",null===(e=this.selectedPageObject)||void 0===e?void 0:e.id,this.selectedPageObject),this.closeModal()},selectInGrid:function(e){var t=Object.values(e);0!==t.length?this.selectedPageObject=t[0]:this.selectedPageObject=null},selectItem:function(e){this.selectedPageObject=e},onSearch:function(e){(!e.length||e.length<=0)&&(this.term=null),this.page=1,this.getList()},toggleListMode:function(){this.listMode="grid"===this.listMode?"list":"grid"},gridItemClasses:function(e,t){var n;return[{"is--selected":e===(null===(n=this.selectedPageObject)||void 0===n?void 0:n.id)},"sw-cms-layout-modal__content-item","sw-cms-layout-modal__content-item--".concat(t)]},closeModal:function(){this.selectedPageObject=null,this.term=null,this.$emit("modal-close")},getPageType:function(e){var t,n=[this.defaultProductId,this.defaultCategoryId].includes(e.id),s=this.$tc("sw-cms.components.cmsListItem.defaultLayout"),i=this.$tc(null===(t=this.cmsPageTypeService.getType(e.type))||void 0===t?void 0:t.title);return n?"".concat(s," - ").concat(i):i},getDefaultLayouts:function(){var e=this;return i()(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.systemConfigApiService.getValues("core.cms");case 2:n=t.sent,e.defaultCategoryId=n["core.cms.default_category_cms_page"],e.defaultProductId=n["core.cms.default_product_cms_page"];case 5:case"end":return t.stop()}}),t)})))()}}}},gaZf:function(e,t,n){var s=n("otD6");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("P8hj").default)("f68c94a6",s,!0,{})},otD6:function(e,t,n){}}]);