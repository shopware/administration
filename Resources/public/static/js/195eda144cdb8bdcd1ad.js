(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[36847],{235884:function(){},836847:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}}),n(805314);let{Mixin:i,Context:o}=Shopware,{Criteria:a}=Shopware.Data,{mapState:r,mapGetters:s}=Shopware.Component.getComponentHelper();var l={template:'\n\n{% block sw_product_variants_overview %}\n<div class="sw-product-variants-overview">\n\n    \n    {% block sw_product_variants_overview_option_list_toolbar %}\n    <div class="sw-configuration-option-list__toolbar">\n        \n        {% block sw_product_variants_overview_option_list_toolbar_container %}\n        <sw-container\n            columns="1fr minmax(min-content, max-content) minmax(min-content, 180px) minmax(min-content, 180px)"\n            gap="0 10px"\n        >\n\n            \n            {% block sw_product_variants_overview_option_list_toolbar_container_search_field %}\n            <sw-simple-search-field\n                v-model:value="term"\n                variant="form"\n                size="small"\n                @search-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_option_list_toolbar_container_filter_list %}\n            <div class="sw-product-variants-overview__filter-list-button">\n\n                \n                {% block sw_product_variants_overview_option_list_toolbar_container_filter_list_button %}\n                <sw-button @click="filterWindowOpen = !filterWindowOpen">\n                    {{ $tc(\'sw-product.variations.generatedFilterList\') }}\n                    <sw-icon name="regular-filter" />\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_option_list_toolbar_container_filter_context_menu %}\n                <sw-context-menu v-show="filterWindowOpen">\n                    <sw-container\n                        columns="1fr"\n                        gap="5px"\n                    >\n\n                        \n                        {% block sw_product_variants_overview_option_list_toolbar_container_filter_tree %}\n                        <sw-tree\n                            v-show="filterOptions.length"\n                            :sortable="false"\n                            :items="filterOptions"\n                            :searchable="false"\n                            :disable-context-menu="true"\n                            bind-items-to-folder\n                        >\n                            <template\n                                #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute, checkItem }"\n                            >\n                                <sw-tree-item\n                                    v-for="(item, index) in treeItems"\n                                    :key="item.id"\n                                    :sortable="false"\n                                    :item="item"\n                                    :disable-context-menu="true"\n                                    @check-item="filterOptionChecked"\n                                />\n                            </template>\n                        </sw-tree>\n                        {% endblock %}\n\n                        \n                        {% block sw_product_variants_overview_option_list_toolbar_container_filter_buttons %}\n                        <div class="sw-product-variants-overview__filter-buttons">\n                            \n                            {% block sw_product_variants_overview_option_list_toolbar_container_button_filter_reset %}\n                            <sw-button @click="resetFilterOptions()">\n                                {{ $tc(\'sw-product.variations.overview.filterReset\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_product_variants_overview_option_list_toolbar_container_button_update_list %}\n                            <sw-button\n                                variant="primary"\n                                @click="getList()"\n                            >\n                                {{ $tc(\'sw-product.variations.overview.filter\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n\n                    </sw-container>\n                </sw-context-menu>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_option_list_toolbar_buttons %}\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.creator\'),\n                    showOnDisabledElements: true\n                }"\n                variant="ghost"\n                :disabled="!acl.can(\'product.creator\')"\n                class="sw-product-variants__generate-action"\n                @click="$emit(\'generator-open\')"\n            >\n                {{ $tc(\'sw-product.variations.overview.generateVariants\') }}\n            </sw-button>\n\n            <sw-button\n                variant="ghost"\n                class="sw-product-variants__configure-storefront-action"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="$emit(\'delivery-open\')"\n            >\n                {{ $tc(\'sw-product.variations.overview.storefrontDelivery\') }}\n            </sw-button>\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_overview_data_grid %}\n    <sw-data-grid\n        ref="variantGrid"\n        class="sw-product-variants-overview__data-grid"\n        :data-source="variants"\n        :columns="variantColumns"\n        :show-settings="true"\n        :show-selection="acl.can(\'product.deleter\')"\n        :sort-by="sortBy"\n        :sort-direction="sortDirection"\n        :is-loading="isLoading"\n        :skeleton-item-amount="limit"\n        :allow-inline-edit="acl.can(\'product.editor\')"\n        identifier="product-variants-overview"\n        @column-sort="onSortColumn"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n\n        \n        {% block sw_product_variants_overview_data_grid_column_name %}\n        <template\n            #column-name="{ item }"\n        >\n            <template v-if="item.options">\n                <router-link\n                    :to="{ name: \'sw.product.detail.base\', params: { id: item.id } }"\n                    class="sw-product-variants-overview__variation-link"\n                    @click="onOptionEdit(item)"\n                >\n\n                    <sw-icon name="regular-link-xs" />\n\n                    <span\n                        v-for="(singleVariation, index) in item.options"\n                        :key="index"\n                        class="sw-product-variants-overview__single-variation"\n                    >\n                        {{ singleVariation.translated.name }}\n                    </span>\n                </router-link>\n            </template>\n\n            <sw-label\n                v-if="variantIsDigital(item)"\n                class="sw-product-variants-overview__digital-indicator"\n            >\n                {{ $tc(\'sw-product.variations.generatedListColumnContentProductState.is-download\') }}\n            </sw-label>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_price %}\n        <template\n            v-for="currency in currencies"\n            :key="`switch-${currency.isoCode}`"\n            #[`column-price.${currency.id}.net`]="{ item, compact, isInlineEdit }"\n        >\n\n            \n            {% block sw_product_variants_overview_data_grid_column_price_inline_edit %}\n            <template v-if="isInlineEdit">\n                \n                {% block sw_product_variants_overview_data_grid_column_price_inline_edit_inherit %}\n                <sw-inheritance-switch\n                    :is-inherited="isPriceFieldInherited(item, currency)"\n                    class="sw-product-detail-context-prices__inherited-icon"\n                    @inheritance-restore="onInheritanceRestore(item, currency)"\n                    @inheritance-remove="onInheritanceRemove(item, currency)"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_data_grid_column_price_inline_edit_price_field %}\n                <sw-price-field\n                    :value="item.price ? item.price : []"\n                    :default-price="getDefaultPriceForVariant(item, currency)"\n                    :tax-rate="productTaxRate"\n                    :label="false"\n                    :compact="compact"\n                    enable-inheritance\n                    :currency="currency"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_price_preview %}\n            <template v-else>\n                \n                {% block sw_product_variants_overview_data_grid_column_price_preview_inherit %}\n                <sw-inheritance-switch\n                    :key="`else-switch-${currency.isoCode}`"\n                    :is-inherited="isPriceFieldInherited(item, currency)"\n                    class="sw-product-detail-context-prices__inherited-icon"\n                    :disabled="true"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_data_grid_column_price_preview_price_field %}\n                <sw-price-preview\n                    :key="`else-price-field-${currency.isoCode}`"\n                    :value="item.price ? item.price : []"\n                    :default-price="getDefaultPriceForVariant(item, currency)"\n                    :tax-rate="productTaxRate"\n                    :currency="currency"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_stock %}\n        <template\n            #column-stock="{ item, isInlineEdit, compact }"\n        >\n            \n            {% block sw_product_variants_overview_data_grid_column_stock_inline_edit_field %}\n            <sw-number-field\n                v-if="isInlineEdit && (!variantIsDigital(item) || item.isCloseout === true)"\n                v-model:value="item.stock"\n                :size="compact ? \'small\' : \'default\'"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_stock_preview %}\n            <span v-else>\n                {{ item.stock }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_product_number %}\n        <template\n            #column-productNumber="{ item, isInlineEdit, compact }"\n        >\n            \n            {% block sw_product_variants_overview_data_grid_column_product_number_inline_edit %}\n            <sw-text-field\n                v-if="isInlineEdit"\n                v-model:value="item.productNumber"\n                :size="compact ? \'small\' : \'default\'"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_product_number_preview %}\n            <span\n                v-else\n                class="sw-product-variants-overview_product-number"\n            >\n                {{ item.productNumber }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_media %}\n        <template #column-media="{ item, isInlineEdit, compact }">\n            \n            {% block sw_product_variants_overview_data_grid_column_media_inline_edit %}\n            \n            {% block sw_product_variants_overview_data_grid_column_media_inherit %}\n            <sw-inheritance-switch\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="!isInlineEdit"\n                class="sw-product-variants-overview_media__inherited-icon"\n                @inheritance-restore="onMediaInheritanceRestore(item, isInlineEdit)"\n                @inheritance-remove="onMediaInheritanceRemove(item, isInlineEdit)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_media_content %}\n            <sw-product-variants-media-upload\n                :source="item"\n                :upload-tag="item.id"\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="isInlineEdit ? isMediaFieldInherited(item) : true"\n                :parent-product="product"\n            />\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        <template #column-downloads="{item, isInlineEdit, compact}">\n            <sw-upload-listener\n                :upload-tag="item.productNumber"\n                auto-upload\n                @media-upload-finish="(event) => successfulUpload(event, item)"\n            />\n\n            <sw-media-compact-upload-v2\n                v-if="productDownloadFolderId"\n                :upload-tag="item.productNumber"\n                :disabled="!isInlineEdit"\n                private-filesystem\n                allow-multi-select\n                add-files-on-multiselect\n                :disable-deletion-for-last-item="{\n                    value: true,\n                    helpText: $tc(\'sw-product.list.columnDownloadsTooltip\')\n                }"\n                :source-multiselect="getDownloadsSource(item)"\n                :target-folder-id="productDownloadFolderId"\n                file-accept="*/*"\n                @delete-item="(file) => removeFile(`${file.fileName}.${file.fileExtension}`, item)"\n            />\n        </template>\n\n        \n        {% block sw_product_variants_overview_data_grid_column_active %}\n        <template\n            #column-active="{ item, isInlineEdit }"\n        >\n            <template v-if="isInlineEdit">\n                <sw-data-grid-column-boolean\n                    v-model:value="item.active"\n                    :is-inline-edit="isInlineEdit"\n                    :disabled="isActiveFieldInherited(item)"\n                />\n\n                <sw-inheritance-switch\n                    :is-inherited="isActiveFieldInherited(item)"\n                    class="sw-product-variants-overview__active-inherited-icon"\n                    @inheritance-restore="onActiveInheritanceRestore(item)"\n                    @inheritance-remove="onActiveInheritanceRemove(item)"\n                />\n            </template>\n\n            <template v-else>\n                <sw-icon\n                    v-if="item.active === true"\n                    name="regular-checkmark-xs"\n                    size="12px"\n                    class="is--active"\n                />\n                <sw-icon\n                    v-else-if="item.active === false"\n                    name="regular-times-s"\n                    size="10px"\n                    class="is--inactive"\n                />\n                <sw-icon\n                    v-else\n                    key="inherit-icon"\n                    name="regular-link-horizontal"\n                    size="16px"\n                />\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_actions %}\n        <template\n            #actions="{ item }"\n        >\n            \n            {% block sw_product_variants_overview_actions_items %}\n            <sw-context-menu-item\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="onOptionEdit(item)"\n            >\n                {{ $tc(\'sw-product.variations.generatedListContextMenuEdit\') }}\n            </sw-context-menu-item>\n\n            <sw-context-menu-item\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.deleter\'),\n                    showOnDisabledElements: true\n                }"\n                variant="danger"\n                :disabled="!acl.can(\'product.deleter\')"\n                @click="onVariationDelete(item)"\n            >\n                {{ $tc(\'sw-product.variations.generatedListContextMenuDelete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_pagination %}\n        <template #pagination>\n            <sw-pagination\n                :page="page"\n                :limit="limit"\n                :total="total"\n                :total-visible="7"\n                @page-change="onPageChange"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_bulk %}\n        <template #bulk>\n            {% block sw_product_variants_overview_bulk_edit %}\n            <span\n                v-if="acl.can(\'product.editor\')"\n                class="link link-primary"\n                role="link"\n                tabindex="0"\n                @click="toggleBulkEditModal"\n            >\n                {{ $tc(\'global.default.bulkEdit\') }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_bulk_delete %}\n            <span\n                v-if="acl.can(\'product.deleter\')"\n                class="link link-danger sw-product-variants-overview__bulk-delete-action"\n                role="link"\n                tabindex="0"\n                @click="onClickBulkDelete"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_bulk_edit_modal %}\n        <template #bulk-modals="{ selection }">\n            <sw-bulk-edit-modal\n                v-if="showBulkEditModal"\n                class="sw-product-variants-overview__bulk-edit-modal"\n                :selection="selection"\n                :bulk-grid-edit-columns="variantColumns"\n                @edit-items="onEditItems"\n                @modal-close="toggleBulkEditModal"\n            >\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_name %}\n                <template #column-name="{ item }">\n                    <template v-if="item.options">\n                        <router-link\n                            class="sw-product-variants-overview__variation-link"\n                            :to="{ name: \'sw.product.detail.base\', params: { id: item.id } }"\n                            @click="onOptionEdit(item)"\n                        >\n                            <sw-icon\n                                class="sw-product-variants-overview__variation-link-icon"\n                                name="regular-link-xs"\n                            />\n                            <span\n                                v-for="(singleVariation, index) in item.options"\n                                :key="index"\n                                class="sw-product-variants-overview__variation-link-name"\n                            >\n                                {{ singleVariation.translated.name }}\n                            </span>\n                        </router-link>\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_price %}\n                <template\n                    v-for="currency in currencies"\n                    :key="currency.id"\n                    #[`column-price.${currency.id}.net`]="{ item }"\n                >\n                    <sw-inheritance-switch\n                        :key="`else-switch-${currency.isoCode}`"\n                        :is-inherited="isPriceFieldInherited(item, currency)"\n                        disabled\n                    />\n                    <sw-price-preview\n                        :key="`else-price-field-${currency.isoCode}`"\n                        :value="item.price ? item.price : []"\n                        :default-price="getDefaultPriceForVariant(item, currency)"\n                        :tax-rate="productTaxRate"\n                        :currency="currency"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_media %}\n                <template #column-media="{ item }">\n                    <sw-inheritance-switch\n                        class="sw-product-variants-overview_media__inherited-icon"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        disabled\n                    />\n                    <sw-product-variants-media-upload\n                        :source="item"\n                        :upload-tag="item.id"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        :parent-product="product"\n                        disabled\n                    />\n                </template>\n                {% endblock %}\n\n                <template #column-downloads="{item, isInlineEdit, compact}">\n                    <sw-upload-listener\n                        :upload-tag="item.productNumber"\n                        auto-upload\n                        @media-upload-finish="(event) => successfulUpload(event, item)"\n                    />\n\n                    <sw-media-compact-upload-v2\n                        v-if="productDownloadFolderId"\n                        :upload-tag="item.productNumber"\n                        :disabled="!isInlineEdit"\n                        private-filesystem\n                        allow-multi-select\n                        :disable-deletion-for-last-item="{\n                            value: true,\n                            helpText: $tc(\'sw-product.list.columnDownloadsTooltip\')\n                        }"\n                        :add-files-on-multiselect="true"\n                        :source-multiselect="getDownloadsSource(item)"\n                        :target-folder-id="productDownloadFolderId"\n                        file-accept="*/*"\n                        @delete-item="(file) => removeFile(`${file.fileName}.${file.fileExtension}`, item)"\n                    />\n                </template>\n\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_active %}\n                <template #column-active="{ item }">\n                    <sw-icon\n                        v-if="item.active === true"\n                        class="is--active"\n                        name="regular-checkmark-xs"\n                        small\n                    />\n                    <sw-icon\n                        v-else-if="item.active === false"\n                        class="is--inactive"\n                        name="regular-times-s"\n                        small\n                    />\n                    <sw-icon\n                        v-else\n                        key="inherit-icon"\n                        name="regular-link-horizontal"\n                        size="16"\n                    />\n                </template>\n                {% endblock %}\n            </sw-bulk-edit-modal>\n        </template>\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_overview_data_grid_action_modals %}\n    <sw-modal\n        v-if="showDeleteModal"\n        class="sw-product-variants-overview__delete-modal"\n        :title="$tc(\'global.default.warning\')"\n        variant="small"\n        @modal-close="onCloseDeleteModal"\n    >\n\n        <p\n            class="sw-product-variants-overview__modal--confirm-delete-text"\n        >\n            {{ toBeDeletedVariantIds.length > 1 ? $tc(\'sw-product.variations.generatedListDeleteModalMessagePlural\') : $tc(\'sw-product.variations.generatedListDeleteModalMessage\') }}\n        </p>\n\n        <template #modal-footer>\n            \n            {% block sw_product_variants_overview_data_grid_action_modals_buttons %}\n            <sw-button\n                class="sw-product-variants-overview__modal--cancel-button"\n                size="small"\n                :disabled="modalLoading"\n                @click="onCloseDeleteModal"\n            >\n                {{ $tc(\'sw-product.variations.generatedListDeleteModalButtonCancel\') }}\n            </sw-button>\n            <sw-button\n                variant="danger"\n                size="small"\n                :disabled="modalLoading"\n                @click="onConfirmDelete"\n            >\n                {{ $tc(\'sw-product.variations.generatedListDeleteModalButtonDelete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","feature","mediaService"],emits:["generator-open","delivery-open","variants-finish-update"],mixins:[i.getByName("notification"),i.getByName("listing")],props:{productEntity:{type:Object,required:!0},selectedGroups:{type:Array,required:!0},productStates:{type:Array,required:!1,default:()=>["all"]}},data(){return{sortBy:"name",sortDirection:"DESC",showDeleteModal:!1,modalLoading:!1,priceEdit:!1,filterOptions:[],activeFilter:[],includeOptions:[],filterWindowOpen:!1,showBulkEditModal:!1,toBeDeletedVariantIds:[],productDownloadFolderId:null}},computed:{...r("swProductDetail",["product","currencies","taxes","variants"]),...s("swProductDetail",["isLoading","defaultPrice","defaultCurrency","productTaxRate"]),productRepository(){return this.repositoryFactory.create("product")},productMediaRepository(){return this.repositoryFactory.create(this.product.media.entity)},mediaRepository(){return this.repositoryFactory.create("media")},productDownloadRepository(){return this.repositoryFactory.create("product_download")},variantColumns(){let e=[{property:"name",label:this.$tc("sw-product.variations.generatedListColumnVariation"),allowResize:!0},...this.currencyColumns,{property:"sales",dataIndex:"sales",label:this.$tc("sw-product.list.columnSales"),allowResize:!0,align:"right"},{property:"stock",label:this.$tc("sw-product.variations.generatedListColumnStock"),allowResize:!0,inlineEdit:"number",width:"125px",align:"right"},{property:"productNumber",label:this.$tc("sw-product.variations.generatedListColumnProductNumber"),allowResize:!0,inlineEdit:"string",width:"150px"},{property:"media",label:this.$tc("sw-product.detailBase.cardTitleMedia"),allowResize:!0,inlineEdit:!0,sortable:!1},{property:"active",label:this.$tc("sw-product.variations.generatedListColumnActive"),allowResize:!0,inlineEdit:"boolean",align:"center"}];return this.productStates.includes("is-download")&&e.splice(e.length-1,0,{property:"downloads",label:this.$tc("sw-product.variations.generatedListColumnDownload"),allowResize:!0,inlineEdit:!0,sortable:!1}),e},currencyColumns(){return this.currencies.sort((e,t)=>t.isSystemDefault?1:-1).map(e=>({property:`price.${e.id}.net`,label:e.translated.name||e.name,visible:e.isSystemDefault,allowResize:!0,primary:!1,rawData:!1,inlineEdit:"number",width:"250px"}))},canBeDeletedCriteria(){let e=new a(1,25),t=this.toBeDeletedVariantIds.map(e=>e.id);return e.addFilter(a.equalsAny("canonicalProductId",t)),e}},watch:{selectedGroups:{immediate:!0,handler(){this.selectedGroups&&0!==this.selectedGroups.length&&this.getFilterOptions()}},productStates(){this.getList()},"product.id":{handler(){this.getList()}}},created(){this.createdComponent()},methods:{async createdComponent(){this.productDownloadFolderId=await this.mediaService.getDefaultFolderId("product_download")},removeFile(e,t){1!==t.downloads.length&&(t.downloads=t.downloads.filter(t=>`${t.media.fileName}.${t.media.fileExtension}`!==e),this.productRepository.save(t))},mediaExists(e,t){return e.some(({id:e})=>e===t)},successfulUpload(e,t){this.mediaRepository.get(e.targetId,o.api).then(n=>{if(this.mediaExists(this.getDownloadsSource(t),e.targetId))return;let i=this.productDownloadRepository.create(o.api);i.mediaId=e.targetId,i.productId=t.id,i.media=n,Shopware.State.commit("swProductDetail/setVariants",this.variants.map(e=>(e.id===t.id&&(e.downloads.push(i),this.productRepository.save(e)),e)))})},getDownloadsSource(e){return e.downloads?e.downloads.map(e=>e.media):[]},getList(){return new Promise(e=>{if(this.product.parentId)return;Shopware.State.commit("swProductDetail/setLoading",["variants",!0]);let t=new a(1,25),n=this.productStates.filter(e=>"all"!==e),i=n.map(e=>a.equals("states",e));t.setTotalCountMode(1),t.setPage(this.page).setLimit(this.limit).addFilter(a.equals("product.parentId",this.product.id)).addFilter(a.multi("AND",i)),t.getAssociation("media").addSorting(a.sort("position")),t.getAssociation("options").addSorting(a.sort("groupId")).addSorting(a.sort("id")),n.includes("is-download")&&t.addAssociation("downloads.media"),this.buildSearchQuery(t),this.getFilterCriteria()&&this.getFilterCriteria().forEach(e=>{t.addFilter(e)}),"name"===this.sortBy?t.addSorting(a.sort("product.options.name",this.sortDirection)):t.addSorting(a.sort(this.sortBy,this.sortDirection)),this.productRepository.search(t).then(t=>{this.total=t.total,Shopware.State.commit("swProductDetail/setVariants",t),Shopware.State.commit("swProductDetail/setLoading",["variants",!1]),this.$emit("variants-finish-update",this.variants),e()})})},buildSearchQuery(e){return this.term&&(this.term.split(" ").forEach(t=>{e.addQuery(a.equals("product.options.name",t),3500),e.addQuery(a.contains("product.options.name",t),500)}),e.addQuery(a.contains("product.productNumber",this.term),5e3)),e},getFilterOptions(){let e=[...this.selectedGroups].sort((e,t)=>e.position-t.position).map((e,t)=>{let n=this.getOptionsForGroup(e.id);return{id:e.id,name:e.name,childCount:n.length,parentId:null,afterId:t>0?this.selectedGroups[t-1].id:null,storeObject:e}}),t=e.reduce((e,t)=>{let n=this.getOptionsForGroup(t.id);return[...e,...n.sort((e,t)=>e.position-t.position).map((e,t)=>{let i=e.option,o=null;return t>0&&(o=n[t-1].option.id),{id:i.id,name:i.name,childCount:0,parentId:i.groupId,afterId:o,storeObject:e}})]},[]);this.filterOptions=[...e,...t]},resetFilterOptions(){this.filterOptions=[],this.includeOptions=[],this.$nextTick(()=>{this.getFilterOptions(),this.getList()})},filterOptionChecked(e){e.checked?this.includeOptions.push({id:e.id,groupId:e.parentId}):this.includeOptions=this.includeOptions.filter(t=>t.id!==e.id)},getFilterCriteria(){return!(this.includeOptions.length<=0)&&this.includeOptions.reduce((e,t)=>{let n=e.find(e=>e.id===t.groupId);return n?n.options.push(t.id):e.push({id:t.groupId,options:[t.id]}),e},[]).map(e=>a.equalsAny("product.optionIds",e.options))},getOptionsForGroup(e){return this.product.configuratorSettings.filter(t=>!t.isDeleted&&t.option.groupId===e)},isPriceFieldInherited(e,t){return!e.price||!e.price.find(e=>e.currencyId===t.id)},isActiveFieldInherited(e){return null===e.active},isMediaFieldInherited(e){return!e.forceMediaInheritanceRemove&&(e.media?e.media.length<=0:!!e.media)},onInheritanceRestore(e,t){if(!e.price)return;let n=e.price.findIndex(e=>e.currencyId===t.id);n>=0&&(this.isCompatEnabled("INSTANCE_DELETE")?this.$delete(e.price,n):delete e.price[n]),(e.price.length<=0||Object.keys(e.price).length<=0)&&(e.price=null)},onActiveInheritanceRestore(e){e.active=null},onActiveInheritanceRemove(e){e.active=!0},onInheritanceRemove(e,t){e.price||(e.price=[]),t.isSystemDefault||this.onInheritanceRemove(e,this.defaultCurrency);let n=this.getDefaultPriceForVariant(e),i={currencyId:t.id,gross:n.gross*t.factor,linked:n.linked,net:n.net*t.factor};this.isCompatEnabled("INSTANCE_SET")?this.$set(e.price,e.price.length,i):e.price.push(i)},onMediaInheritanceRestore(e,t){t&&(e.forceMediaInheritanceRemove=!1,e.coverId=null,e.media.getIds().forEach(t=>{e.media.remove(t)}))},onMediaInheritanceRemove(e,t){t&&(e.forceMediaInheritanceRemove=!0,this.product.media.forEach(({id:t,mediaId:n,position:i})=>{let a=this.productMediaRepository.create(o.api);Object.assign(a,{mediaId:n,position:i,productId:this.product.id}),this.product.coverId===t&&(e.coverId=a.id),e.media.push(a)}))},getDefaultPriceForVariant(e){return e.price&&e.price.find(e=>e.currencyId===this.defaultCurrency.id)||this.defaultPrice},onVariationDelete(e){this.showDeleteModal=!0,this.toBeDeletedVariantIds.push(e)},onInlineEditSave(e){if(!this.productRepository.hasChanges(e))return;let t=e.options.reduce((e,t,n)=>`${e}${n>0?" - ":""}${t.translated.name}`,"");this.productRepository.save(e).then(()=>{let e=this.$tc("global.default.success"),n=this.$tc("sw-product.detail.messageSaveSuccess",0,{name:t});this.createNotificationSuccess({title:e,message:n}),this.getList()}).catch(()=>{let e=this.$tc("global.default.error"),t=this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");this.createNotificationError({title:e,message:t})})},onInlineEditCancel(){this.getList()},onCloseDeleteModal(){this.showDeleteModal=!1,this.toBeDeletedVariantIds=[]},onConfirmDelete(){this.modalLoading=!0,this.showDeleteModal=!1;let e=this.toBeDeletedVariantIds.map(e=>e.id);this.canVariantBeDeleted().then(t=>{if(!t){this.modalLoading=!1,this.toBeDeletedVariantIds=[],this.createNotificationError({message:this.$tc("sw-product.variations.generatedListMessageDeleteErrorCanonicalUrl")});return}this.updateVariantListingConfig(e),this.productRepository.syncDeleted(e).then(()=>{this.modalLoading=!1,this.toBeDeletedVariantIds=[],this.createNotificationSuccess({message:this.$tc("sw-product.variations.generatedListMessageDeleteSuccess")}),this.$refs.variantGrid.resetSelection(),this.getList()})})},async canVariantBeDeleted(){return 0===(await this.productRepository.search(this.canBeDeletedCriteria)).length},onOptionEdit(e){e?.id&&this.$router.push({name:"sw.product.detail",params:{id:e.id}})},isPriceEditing(e){this.priceEdit=e},toggleBulkEditModal(){this.showBulkEditModal=!this.showBulkEditModal},async onEditItems(){await this.$nextTick();let e="0",t=Object.values(this.$refs.variantGrid.selection).filter(e=>e.states.includes("is-download"));t.length>0&&(e=t.filter(e=>e.isCloseout).length!==t.length?"1":"2"),this.$router.push({name:"sw.bulk.edit.product",params:{parentId:this.product.id,includesDigital:e}})},onClickBulkDelete(){let e=this.$refs.variantGrid.selection;this.toBeDeletedVariantIds=Object.values(e),this.showDeleteModal=!0},variantIsDigital(e){return this.productStates.includes("all")&&e.states&&e.states.includes("is-download")},updateVariantListingConfig(e){e.length===this.variants.length&&(this.productEntity.variantListingConfig=null);let t=this.productEntity.variantListingConfig?.mainVariantId;t&&e.includes(t)&&(this.productEntity.variantListingConfig.mainVariantId=null,this.productEntity.variantListingConfig?.displayParent!==null&&(this.productEntity.variantListingConfig.displayParent=!0)),this.productRepository.save(this.productEntity)}}}},805314:function(e,t,n){var i=n(235884);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(745346).Z("e0cba032",i,!0,{})}}]);