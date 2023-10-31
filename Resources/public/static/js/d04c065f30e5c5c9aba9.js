(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[377],{"8TUr":function(e,n,t){},SOng:function(e,n,t){var i=t("8TUr");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("92bc62b8",i,!0,{})},g3Ao:function(e,n,t){"use strict";t.r(n);var i=t("7yzw"),o=t.n(i),r=t("6lmj"),a=t.n(r),s=t("CsSd"),c=t.n(s),l=t("92Mt"),d=t.n(l);t("SOng");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=Shopware,v=m.Mixin,_=m.Context,w=Shopware.Data.Criteria,f=Shopware.Component.getComponentHelper(),h=f.mapState,b=f.mapGetters;n.default={template:'\n\n{% block sw_product_variants_overview %}\n<div class="sw-product-variants-overview">\n\n    \n    {% block sw_product_variants_overview_option_list_toolbar %}\n    <div class="sw-configuration-option-list__toolbar">\n        \n        {% block sw_product_variants_overview_option_list_toolbar_container %}\n        <sw-container\n            columns="1fr minmax(min-content, max-content) minmax(min-content, 180px) minmax(min-content, 180px)"\n            gap="0 10px"\n        >\n\n            \n            {% block sw_product_variants_overview_option_list_toolbar_container_search_field %}\n            <sw-simple-search-field\n                v-model="term"\n                variant="form"\n                size="small"\n                @search-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_option_list_toolbar_container_filter_list %}\n            <div class="sw-product-variants-overview__filter-list-button">\n\n                \n                {% block sw_product_variants_overview_option_list_toolbar_container_filter_list_button %}\n                <sw-button @click="filterWindowOpen = !filterWindowOpen">\n                    {{ $tc(\'sw-product.variations.generatedFilterList\') }}\n                    <sw-icon name="regular-filter" />\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_option_list_toolbar_container_filter_context_menu %}\n                <sw-context-menu v-show="filterWindowOpen">\n                    <sw-container\n                        columns="1fr"\n                        gap="5px"\n                    >\n\n                        \n                        {% block sw_product_variants_overview_option_list_toolbar_container_filter_tree %}\n                        <sw-tree\n                            v-show="filterOptions.length"\n                            :sortable="false"\n                            :items="filterOptions"\n                            :searchable="false"\n                            :disable-context-menu="true"\n                            bind-items-to-folder\n                        >\n                            <template\n                                #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute, checkItem }"\n                            >\n                                <sw-tree-item\n                                    v-for="(item, index) in treeItems"\n                                    :key="item.id"\n                                    :sortable="false"\n                                    :item="item"\n                                    :disable-context-menu="true"\n                                    @check-item="filterOptionChecked"\n                                />\n                            </template>\n                        </sw-tree>\n                        {% endblock %}\n\n                        \n                        {% block sw_product_variants_overview_option_list_toolbar_container_filter_buttons %}\n                        <div class="sw-product-variants-overview__filter-buttons">\n                            \n                            {% block sw_product_variants_overview_option_list_toolbar_container_button_filter_reset %}\n                            <sw-button @click="resetFilterOptions()">\n                                {{ $tc(\'sw-product.variations.overview.filterReset\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_product_variants_overview_option_list_toolbar_container_button_update_list %}\n                            <sw-button\n                                variant="primary"\n                                @click="getList()"\n                            >\n                                {{ $tc(\'sw-product.variations.overview.filter\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n\n                    </sw-container>\n                </sw-context-menu>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_option_list_toolbar_buttons %}\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.creator\'),\n                    showOnDisabledElements: true\n                }"\n                variant="ghost"\n                :disabled="!acl.can(\'product.creator\')"\n                class="sw-product-variants__generate-action"\n                @click="$emit(\'generator-open\')"\n            >\n                {{ $tc(\'sw-product.variations.overview.generateVariants\') }}\n            </sw-button>\n\n            <sw-button\n                variant="ghost"\n                class="sw-product-variants__configure-storefront-action"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="$emit(\'delivery-open\')"\n            >\n                {{ $tc(\'sw-product.variations.overview.storefrontDelivery\') }}\n            </sw-button>\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_overview_data_grid %}\n    <sw-data-grid\n        ref="variantGrid"\n        class="sw-product-variants-overview__data-grid"\n        :data-source="variants"\n        :columns="variantColumns"\n        :show-settings="true"\n        :show-selection="acl.can(\'product.deleter\')"\n        :sort-by="sortBy"\n        :sort-direction="sortDirection"\n        :is-loading="isLoading"\n        :skeleton-item-amount="limit"\n        :allow-inline-edit="acl.can(\'product.editor\')"\n        identifier="product-variants-overview"\n        @column-sort="onSortColumn"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n\n        \n        {% block sw_product_variants_overview_data_grid_column_name %}\n        <template\n            #column-name="{ item }"\n        >\n            <template v-if="item.options">\n                <router-link\n                    :to="{ name: \'sw.product.detail.base\', params: { id: item.id } }"\n                    class="sw-product-variants-overview__variation-link"\n                    @click="onOptionEdit(item)"\n                >\n\n                    <sw-icon name="regular-link-xs" />\n\n                    <span\n                        v-for="(singleVariation, index) in item.options"\n                        :key="index"\n                        class="sw-product-variants-overview__single-variation"\n                    >\n                        {{ singleVariation.translated.name }}\n                    </span>\n                </router-link>\n            </template>\n\n            <sw-label\n                v-if="variantIsDigital(item)"\n                class="sw-product-variants-overview__digital-indicator"\n            >\n                {{ $tc(\'sw-product.variations.generatedListColumnContentProductState.is-download\') }}\n            </sw-label>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_price %}\n        <template\n            v-for="currency in currencies"\n            #[`column-price.${currency.id}.net`]="{ item, compact, isInlineEdit }"\n        >\n\n            \n            {% block sw_product_variants_overview_data_grid_column_price_inline_edit %}\n            <template v-if="isInlineEdit">\n                \n                {% block sw_product_variants_overview_data_grid_column_price_inline_edit_inherit %}\n                <sw-inheritance-switch\n                    :key="`switch-${currency.isoCode}`"\n                    :is-inherited="isPriceFieldInherited(item, currency)"\n                    class="sw-product-detail-context-prices__inherited-icon"\n                    @inheritance-restore="onInheritanceRestore(item, currency)"\n                    @inheritance-remove="onInheritanceRemove(item, currency)"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_data_grid_column_price_inline_edit_price_field %}\n                <sw-price-field\n                    :key="`price-field-${currency.isoCode}`"\n                    :price="item.price ? item.price : []"\n                    :default-price="getDefaultPriceForVariant(item, currency)"\n                    :tax-rate="productTaxRate"\n                    :label="false"\n                    :compact="compact"\n                    enable-inheritance\n                    :currency="currency"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_price_preview %}\n            <template v-else>\n                \n                {% block sw_product_variants_overview_data_grid_column_price_preview_inherit %}\n                <sw-inheritance-switch\n                    :key="`else-switch-${currency.isoCode}`"\n                    :is-inherited="isPriceFieldInherited(item, currency)"\n                    class="sw-product-detail-context-prices__inherited-icon"\n                    :disabled="true"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_data_grid_column_price_preview_price_field %}\n                <sw-price-preview\n                    :key="`else-price-field-${currency.isoCode}`"\n                    :price="item.price ? item.price : []"\n                    :default-price="getDefaultPriceForVariant(item, currency)"\n                    :tax-rate="productTaxRate"\n                    :currency="currency"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_stock %}\n        <template\n            #column-stock="{ item, isInlineEdit, compact }"\n        >\n            \n            {% block sw_product_variants_overview_data_grid_column_stock_inline_edit_field %}\n            <sw-number-field\n                v-if="isInlineEdit && (!variantIsDigital(item) || item.isCloseout === true)"\n                {% if VUE3 %}\n                v-model:value="item.stock"\n                {% else %}\n                v-model="item.stock"\n                {% endif %}\n                :size="compact ? \'small\' : \'default\'"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_stock_preview %}\n            <span v-else>\n                {{ item.stock }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_product_number %}\n        <template\n            #column-productNumber="{ item, isInlineEdit, compact }"\n        >\n            \n            {% block sw_product_variants_overview_data_grid_column_product_number_inline_edit %}\n            <sw-text-field\n                v-if="isInlineEdit"\n                {% if VUE3 %}\n                v-model:value="item.productNumber"\n                {% else %}\n                v-model="item.productNumber"\n                {% endif %}\n                :size="compact ? \'small\' : \'default\'"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_product_number_preview %}\n            <span\n                v-else\n                class="sw-product-variants-overview_product-number"\n            >\n                {{ item.productNumber }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_data_grid_column_media %}\n        <template #column-media="{ item, isInlineEdit, compact }">\n            \n            {% block sw_product_variants_overview_data_grid_column_media_inline_edit %}\n            \n            {% block sw_product_variants_overview_data_grid_column_media_inherit %}\n            <sw-inheritance-switch\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="!isInlineEdit"\n                class="sw-product-variants-overview_media__inherited-icon"\n                @inheritance-restore="onMediaInheritanceRestore(item, isInlineEdit)"\n                @inheritance-remove="onMediaInheritanceRemove(item, isInlineEdit)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_data_grid_column_media_content %}\n            <sw-product-variants-media-upload\n                :source="item"\n                :upload-tag="item.id"\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="isInlineEdit ? isMediaFieldInherited(item) : true"\n                :parent-product="product"\n            />\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        <template #column-downloads="{item, isInlineEdit, compact}">\n            <sw-upload-listener\n                :upload-tag="item.productNumber"\n                auto-upload\n                @media-upload-finish="(event) => successfulUpload(event, item)"\n            />\n\n            <sw-media-compact-upload-v2\n                :upload-tag="item.productNumber"\n                :disabled="!isInlineEdit"\n                private-filesystem\n                allow-multi-select\n                add-files-on-multiselect\n                :disable-deletion-for-last-item="{\n                    value: true,\n                    helpText: $tc(\'sw-product.list.columnDownloadsTooltip\')\n                }"\n                :source-multiselect="getDownloadsSource(item)"\n                default-folder="product_download"\n                file-accept="*/*"\n                @delete-item="(file) => removeFile(`${file.fileName}.${file.fileExtension}`, item)"\n            />\n        </template>\n\n        \n        {% block sw_product_variants_overview_data_grid_column_active %}\n        <template\n            #column-active="{ item, isInlineEdit }"\n        >\n            <template v-if="isInlineEdit">\n                <sw-data-grid-column-boolean\n                    v-model="item.active"\n                    :is-inline-edit="isInlineEdit"\n                    :disabled="isActiveFieldInherited(item)"\n                />\n\n                <sw-inheritance-switch\n                    :is-inherited="isActiveFieldInherited(item)"\n                    class="sw-product-variants-overview__active-inherited-icon"\n                    @inheritance-restore="onActiveInheritanceRestore(item)"\n                    @inheritance-remove="onActiveInheritanceRemove(item)"\n                />\n            </template>\n\n            <template v-else>\n                <sw-icon\n                    v-if="item.active === true"\n                    name="regular-checkmark-xs"\n                    size="12px"\n                    class="is--active"\n                />\n                <sw-icon\n                    v-else-if="item.active === false"\n                    name="regular-times-s"\n                    size="10px"\n                    class="is--inactive"\n                />\n                <sw-icon\n                    v-else\n                    key="inherit-icon"\n                    name="regular-link-horizontal"\n                    size="16px"\n                />\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_actions %}\n        <template\n            #actions="{ item }"\n        >\n            \n            {% block sw_product_variants_overview_actions_items %}\n            <sw-context-menu-item\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.editor\'),\n                    showOnDisabledElements: true\n                }"\n                :disabled="!acl.can(\'product.editor\')"\n                @click="onOptionEdit(item)"\n            >\n                {{ $tc(\'sw-product.variations.generatedListContextMenuEdit\') }}\n            </sw-context-menu-item>\n\n            <sw-context-menu-item\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'product.deleter\'),\n                    showOnDisabledElements: true\n                }"\n                variant="danger"\n                :disabled="!acl.can(\'product.deleter\')"\n                @click="onVariationDelete(item)"\n            >\n                {{ $tc(\'sw-product.variations.generatedListContextMenuDelete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_pagination %}\n        <template #pagination>\n            <sw-pagination\n                :page="page"\n                :limit="limit"\n                :total="total"\n                :total-visible="7"\n                @page-change="onPageChange"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_bulk %}\n        <template #bulk>\n            {% block sw_product_variants_overview_bulk_edit %}\n            <span\n                v-if="acl.can(\'product.editor\')"\n                class="link link-primary"\n                role="link"\n                tabindex="0"\n                @click="toggleBulkEditModal"\n            >\n                {{ $tc(\'global.default.bulkEdit\') }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_overview_bulk_delete %}\n            <span\n                v-if="acl.can(\'product.deleter\')"\n                class="link link-danger sw-product-variants-overview__bulk-delete-action"\n                role="link"\n                tabindex="0"\n                @click="onClickBulkDelete"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_overview_bulk_edit_modal %}\n        <template #bulk-modals="{ selection }">\n            <sw-bulk-edit-modal\n                v-if="showBulkEditModal"\n                class="sw-product-variants-overview__bulk-edit-modal"\n                :selection="selection"\n                :bulk-grid-edit-columns="variantColumns"\n                @edit-items="onEditItems"\n                @modal-close="toggleBulkEditModal"\n            >\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_name %}\n                <template #column-name="{ item }">\n                    <template v-if="item.options">\n                        <router-link\n                            class="sw-product-variants-overview__variation-link"\n                            :to="{ name: \'sw.product.detail.base\', params: { id: item.id } }"\n                            @click="onOptionEdit(item)"\n                        >\n                            <sw-icon\n                                class="sw-product-variants-overview__variation-link-icon"\n                                name="regular-link-xs"\n                            />\n                            <span\n                                v-for="(singleVariation, index) in item.options"\n                                :key="index"\n                                class="sw-product-variants-overview__variation-link-name"\n                            >\n                                {{ singleVariation.translated.name }}\n                            </span>\n                        </router-link>\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_price %}\n                <template\n                    v-for="currency in currencies"\n                    #[`column-price.${currency.id}.net`]="{ item }"\n                >\n                    <sw-inheritance-switch\n                        :key="`else-switch-${currency.isoCode}`"\n                        :is-inherited="isPriceFieldInherited(item, currency)"\n                        disabled\n                    />\n                    <sw-price-preview\n                        :key="`else-price-field-${currency.isoCode}`"\n                        :price="item.price ? item.price : []"\n                        :default-price="getDefaultPriceForVariant(item, currency)"\n                        :tax-rate="productTaxRate"\n                        :currency="currency"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_media %}\n                <template #column-media="{ item }">\n                    <sw-inheritance-switch\n                        class="sw-product-variants-overview_media__inherited-icon"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        disabled\n                    />\n                    <sw-product-variants-media-upload\n                        :source="item"\n                        :upload-tag="item.id"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        :parent-product="product"\n                        disabled\n                    />\n                </template>\n                {% endblock %}\n\n                <template #column-downloads="{item, isInlineEdit, compact}">\n                    <sw-upload-listener\n                        :upload-tag="item.productNumber"\n                        auto-upload\n                        @media-upload-finish="(event) => successfulUpload(event, item)"\n                    />\n\n                    <sw-media-compact-upload-v2\n                        :upload-tag="item.productNumber"\n                        :disabled="!isInlineEdit"\n                        private-filesystem\n                        allow-multi-select\n                        :disable-deletion-for-last-item="{\n                            value: true,\n                            helpText: $tc(\'sw-product.list.columnDownloadsTooltip\')\n                        }"\n                        :add-files-on-multiselect="true"\n                        :source-multiselect="getDownloadsSource(item)"\n                        default-folder="product_download"\n                        file-accept="*/*"\n                        @delete-item="(file) => removeFile(`${file.fileName}.${file.fileExtension}`, item)"\n                    />\n                </template>\n\n                \n                {% block sw_product_variants_overview_bulk_edit_modal_column_active %}\n                <template #column-active="{ item }">\n                    <sw-icon\n                        v-if="item.active === true"\n                        class="is--active"\n                        name="regular-checkmark-xs"\n                        small\n                    />\n                    <sw-icon\n                        v-else-if="item.active === false"\n                        class="is--inactive"\n                        name="regular-times-s"\n                        small\n                    />\n                    <sw-icon\n                        v-else\n                        key="inherit-icon"\n                        name="regular-link-horizontal"\n                        size="16"\n                        multicolor\n                    />\n                </template>\n                {% endblock %}\n            </sw-bulk-edit-modal>\n        </template>\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_overview_data_grid_action_modals %}\n    <sw-modal\n        v-if="showDeleteModal"\n        class="sw-product-variants-overview__delete-modal"\n        :title="$tc(\'global.default.warning\')"\n        variant="small"\n        @modal-close="onCloseDeleteModal"\n    >\n\n        <p\n            class="sw-product-variants-overview__modal--confirm-delete-text"\n        >\n            {{ toBeDeletedVariantIds.length > 1 ? $tc(\'sw-product.variations.generatedListDeleteModalMessagePlural\') : $tc(\'sw-product.variations.generatedListDeleteModalMessage\') }}\n        </p>\n\n        <template #modal-footer>\n            \n            {% block sw_product_variants_overview_data_grid_action_modals_buttons %}\n            <sw-button\n                class="sw-product-variants-overview__modal--cancel-button"\n                size="small"\n                :disabled="modalLoading"\n                @click="onCloseDeleteModal"\n            >\n                {{ $tc(\'sw-product.variations.generatedListDeleteModalButtonCancel\') }}\n            </sw-button>\n            <sw-button\n                variant="danger"\n                size="small"\n                :disabled="modalLoading"\n                @click="onConfirmDelete"\n            >\n                {{ $tc(\'sw-product.variations.generatedListDeleteModalButtonDelete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl","feature"],mixins:[v.getByName("notification"),v.getByName("listing")],props:{selectedGroups:{type:Array,required:!0},productStates:{type:Array,required:!1,default:function(){return["all"]}}},data:function(){return{sortBy:"name",sortDirection:"DESC",showDeleteModal:!1,modalLoading:!1,priceEdit:!1,filterOptions:[],activeFilter:[],includeOptions:[],filterWindowOpen:!1,showBulkEditModal:!1,toBeDeletedVariantIds:[]}},computed:p(p(p({},h("swProductDetail",["product","currencies","taxes","variants"])),b("swProductDetail",["isLoading","defaultPrice","defaultCurrency","productTaxRate"])),{},{productRepository:function(){return this.repositoryFactory.create("product")},productMediaRepository:function(){return this.repositoryFactory.create(this.product.media.entity)},mediaRepository:function(){return this.repositoryFactory.create("media")},productDownloadRepository:function(){return this.repositoryFactory.create("product_download")},variantColumns:function(){var e=[{property:"name",label:this.$tc("sw-product.variations.generatedListColumnVariation"),allowResize:!0}].concat(a()(this.currencyColumns),[{property:"sales",dataIndex:"sales",label:this.$tc("sw-product.list.columnSales"),allowResize:!0,align:"right"},{property:"stock",label:this.$tc("sw-product.variations.generatedListColumnStock"),allowResize:!0,inlineEdit:"number",width:"125px",align:"right"},{property:"productNumber",label:this.$tc("sw-product.variations.generatedListColumnProductNumber"),allowResize:!0,inlineEdit:"string",width:"150px"},{property:"media",label:this.$tc("sw-product.detailBase.cardTitleMedia"),allowResize:!0,inlineEdit:!0,sortable:!1},{property:"active",label:this.$tc("sw-product.variations.generatedListColumnActive"),allowResize:!0,inlineEdit:"boolean",align:"center"}]);return this.productStates.includes("is-download")&&e.splice(e.length-1,0,{property:"downloads",label:this.$tc("sw-product.variations.generatedListColumnDownload"),allowResize:!0,inlineEdit:!0,sortable:!1}),e},currencyColumns:function(){return this.currencies.sort((function(e,n){return n.isSystemDefault?1:-1})).map((function(e){return{property:"price.".concat(e.id,".net"),label:e.translated.name||e.name,visible:e.isSystemDefault,allowResize:!0,primary:!1,rawData:!1,inlineEdit:"number",width:"250px"}}))},canBeDeletedCriteria:function(){var e=new w(1,25),n=this.toBeDeletedVariantIds.map((function(e){return e.id}));return e.addFilter(w.equalsAny("canonicalProductId",n)),e}}),watch:{selectedGroups:{immediate:!0,handler:function(){this.selectedGroups&&0!==this.selectedGroups.length&&this.getFilterOptions()}},productStates:function(){this.getList()},"product.id":{handler:function(){this.getList()}}},methods:{removeFile:function(e,n){1!==n.downloads.length&&(n.downloads=n.downloads.filter((function(n){return"".concat(n.media.fileName,".").concat(n.media.fileExtension)!==e})),this.productRepository.save(n))},mediaExists:function(e,n){return e.some((function(e){return e.id===n}))},successfulUpload:function(e,n){var t=this;this.mediaRepository.get(e.targetId,_.api).then((function(i){if(!t.mediaExists(t.getDownloadsSource(n),e.targetId)){var o=t.productDownloadRepository.create(_.api);o.mediaId=e.targetId,o.productId=n.id,o.media=i,Shopware.State.commit("swProductDetail/setVariants",t.variants.map((function(e){return e.id===n.id&&(e.downloads.push(o),t.productRepository.save(e)),e})))}}))},getDownloadsSource:function(e){return e.downloads?e.downloads.map((function(e){return e.media})):[]},getList:function(){var e=this;return new Promise((function(n){if(!e.product.parentId){Shopware.State.commit("swProductDetail/setLoading",["variants",!0]);var t=new w(1,25),i=e.productStates.filter((function(e){return"all"!==e})),o=i.map((function(e){return w.equals("states",e)}));t.setTotalCountMode(1),t.setPage(e.page).setLimit(e.limit).addFilter(w.equals("product.parentId",e.product.id)).addFilter(w.multi("AND",o)),t.getAssociation("media").addSorting(w.sort("position")),t.getAssociation("options").addSorting(w.sort("groupId")).addSorting(w.sort("id")),i.includes("is-download")&&t.addAssociation("downloads.media"),e.buildSearchQuery(t),e.getFilterCriteria()&&e.getFilterCriteria().forEach((function(e){t.addFilter(e)})),"name"===e.sortBy?t.addSorting(w.sort("product.options.name",e.sortDirection)):t.addSorting(w.sort(e.sortBy,e.sortDirection)),e.productRepository.search(t).then((function(t){e.total=t.total,Shopware.State.commit("swProductDetail/setVariants",t),Shopware.State.commit("swProductDetail/setLoading",["variants",!1]),e.$emit("variants-finish-update",e.variants),n()}))}}))},buildSearchQuery:function(e){return this.term?(this.term.split(" ").forEach((function(n){e.addQuery(w.equals("product.options.name",n),3500),e.addQuery(w.contains("product.options.name",n),500)})),e):e},getFilterOptions:function(){var e=this,n=a()(this.selectedGroups).sort((function(e,n){return e.position-n.position})).map((function(n,t){var i=e.getOptionsForGroup(n.id);return{id:n.id,name:n.name,childCount:i.length,parentId:null,afterId:t>0?e.selectedGroups[t-1].id:null,storeObject:n}})),t=n.reduce((function(n,t){var i=e.getOptionsForGroup(t.id),o=i.sort((function(e,n){return e.position-n.position})).map((function(e,n){var t=e.option,o=null;return n>0&&(o=i[n-1].option.id),{id:t.id,name:t.name,childCount:0,parentId:t.groupId,afterId:o,storeObject:e}}));return[].concat(a()(n),a()(o))}),[]);this.filterOptions=[].concat(a()(n),a()(t))},resetFilterOptions:function(){var e=this;this.filterOptions=[],this.includeOptions=[],this.$nextTick((function(){e.getFilterOptions(),e.getList()}))},filterOptionChecked:function(e){e.checked?this.includeOptions.push({id:e.id,groupId:e.parentId}):this.includeOptions=this.includeOptions.filter((function(n){return n.id!==e.id}))},getFilterCriteria:function(){return!(this.includeOptions.length<=0)&&this.includeOptions.reduce((function(e,n){var t=e.find((function(e){return e.id===n.groupId}));return t?t.options.push(n.id):e.push({id:n.groupId,options:[n.id]}),e}),[]).map((function(e){return w.equalsAny("product.optionIds",e.options)}))},getOptionsForGroup:function(e){return this.product.configuratorSettings.filter((function(n){return!n.isDeleted&&n.option.groupId===e}))},isPriceFieldInherited:function(e,n){return!e.price||!e.price.find((function(e){return e.currencyId===n.id}))},isActiveFieldInherited:function(e){return null===e.active},isMediaFieldInherited:function(e){return!e.forceMediaInheritanceRemove&&(e.media?e.media.length<=0:!!e.media)},onInheritanceRestore:function(e,n){if(e.price){var t=e.price.findIndex((function(e){return e.currencyId===n.id}));t>=0&&this.$delete(e.price,t),e.price.length<=0&&(e.price=null)}},onActiveInheritanceRestore:function(e){e.active=null},onActiveInheritanceRemove:function(e){e.active=!0},onInheritanceRemove:function(e,n){e.price||(e.price=[]),n.isSystemDefault||this.onInheritanceRemove(e,this.defaultCurrency);var t=this.getDefaultPriceForVariant(e),i={currencyId:n.id,gross:t.gross*n.factor,linked:t.linked,net:t.net*n.factor};this.$set(e.price,e.price.length,i)},onMediaInheritanceRestore:function(e,n){n&&(e.forceMediaInheritanceRemove=!1,e.coverId=null,e.media.getIds().forEach((function(n){e.media.remove(n)})))},onMediaInheritanceRemove:function(e,n){var t=this;n&&(e.forceMediaInheritanceRemove=!0,this.product.media.forEach((function(n){var i=n.id,o=n.mediaId,r=n.position,a=t.productMediaRepository.create(_.api);Object.assign(a,{mediaId:o,position:r,productId:t.product.id}),t.product.coverId===i&&(e.coverId=a.id),e.media.push(a)})))},getDefaultPriceForVariant:function(e){var n=this;return e.price&&e.price.find((function(e){return e.currencyId===n.defaultCurrency.id}))||this.defaultPrice},onVariationDelete:function(e){this.showDeleteModal=!0,this.toBeDeletedVariantIds.push(e)},onInlineEditSave:function(e){var n=this;if(this.productRepository.hasChanges(e)){var t=e.options.reduce((function(e,n,t){return"".concat(e).concat(t>0?" - ":"").concat(n.translated.name)}),"");this.productRepository.save(e).then((function(){var e=n.$tc("global.default.success"),i=n.$tc("sw-product.detail.messageSaveSuccess",0,{name:t});n.createNotificationSuccess({title:e,message:i}),n.getList()})).catch((function(){var e=n.$tc("global.default.error"),t=n.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");n.createNotificationError({title:e,message:t})}))}},onInlineEditCancel:function(){this.getList()},onCloseDeleteModal:function(){this.showDeleteModal=!1,this.toBeDeletedVariantIds=[]},onConfirmDelete:function(){var e=this;this.modalLoading=!0,this.showDeleteModal=!1;var n=this.toBeDeletedVariantIds.map((function(e){return e.id}));this.canVariantBeDeleted().then((function(t){if(!t)return e.modalLoading=!1,e.toBeDeletedVariantIds=[],void e.createNotificationError({message:e.$tc("sw-product.variations.generatedListMessageDeleteErrorCanonicalUrl")});e.productRepository.syncDeleted(n).then((function(){e.modalLoading=!1,e.toBeDeletedVariantIds=[],e.createNotificationSuccess({message:e.$tc("sw-product.variations.generatedListMessageDeleteSuccess")}),e.$refs.variantGrid.resetSelection(),e.getList()}))}))},canVariantBeDeleted:function(){var e=this;return o()(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.productRepository.search(e.canBeDeletedCriteria);case 2:return t=n.sent,n.abrupt("return",0===t.length);case 4:case"end":return n.stop()}}),n)})))()},onOptionEdit:function(e){null!=e&&e.id&&this.$router.push({name:"sw.product.detail",params:{id:e.id}})},isPriceEditing:function(e){this.priceEdit=e},toggleBulkEditModal:function(){this.showBulkEditModal=!this.showBulkEditModal},onEditItems:function(){var e=this;return o()(d.a.mark((function n(){var t,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$nextTick();case 2:t="0",(i=Object.values(e.$refs.variantGrid.selection).filter((function(e){return e.states.includes("is-download")}))).length>0&&(t=i.filter((function(e){return e.isCloseout})).length!==i.length?"1":"2"),e.$router.push({name:"sw.bulk.edit.product",params:{parentId:e.product.id,includesDigital:t}});case 6:case"end":return n.stop()}}),n)})))()},onClickBulkDelete:function(){var e=this.$refs.variantGrid.selection;this.toBeDeletedVariantIds=Object.values(e),this.showDeleteModal=!0},variantIsDigital:function(e){return this.productStates.includes("all")&&e.states&&e.states.includes("is-download")}}}}}]);