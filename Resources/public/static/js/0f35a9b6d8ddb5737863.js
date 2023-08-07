(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[366],{Dv75:function(n,t,e){"use strict";e.r(t);var i=e("7yzw"),o=e.n(i),a=e("6lmj"),r=e.n(a),l=e("92Mt"),c=e.n(l),s=(e("uvnA"),Shopware),d=s.Mixin,u=s.Context,p=Shopware.Data.Criteria;t.default={template:'\n\n{% block sw_product_variant_modal %}\n<sw-modal\n    class="sw-product-variant-modal"\n    :title="modalTitle"\n    variant="full"\n    @modal-close="$emit(\'modal-close\')"\n>\n\n    \n    {% block sw_product_variant_modal_body %}\n\n    \n    {% block sw_product_variant_modal_toolbar %}\n    <div class="sw-configuration-option-list__toolbar">\n        \n        {% block sw_product_variant_modal_toolbar_container %}\n        <sw-container\n            columns="1fr minmax(50px, max-content)"\n            gap="0 16px"\n        >\n\n            \n            {% block sw_product_variant_modal_body_label_search %}\n            <sw-simple-search-field\n                v-model="searchTerm"\n                class="sw-product-variant-modal__search"\n                size="small"\n                variant="form"\n                @search-term-change="onSearchTermChange"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_option_list_toolbar_container_filter_list %}\n            <div class="sw-product-variant-modal__filter-list-button">\n\n                \n                {% block sw_product_variant_modal_option_list_toolbar_container_filter_list_button %}\n                <sw-button\n                    class="sw-product-variant-modal__button-filter"\n                    @click="toggleFilterMenu"\n                >\n                    {{ $tc(\'sw-product.variations.generatedFilterList\') }}\n                    <sw-icon name="regular-filter" />\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_option_list_toolbar_container_filter_context_menu %}\n                <sw-context-menu\n                    v-show="filterWindowOpen"\n                    class="sw-product-variant-modal__filter-context-menu"\n                >\n                    <sw-container\n                        columns="1fr"\n                        gap="5px"\n                    >\n\n                        \n                        {% block sw_product_variant_modal_option_list_toolbar_container_filter_tree %}\n                        <sw-tree\n                            v-show="filterOptions.length"\n                            :sortable="false"\n                            :items="filterOptions"\n                            :searchable="false"\n                            disable-context-menu\n                            bind-items-to-folder\n                        >\n                            <template #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute, checkItem}">\n                                <sw-tree-item\n                                    v-for="(item, index) in treeItems"\n                                    :key="item.id"\n                                    :sortable="false"\n                                    :item="item"\n                                    disable-context-menu\n                                    @check-item="filterOptionChecked"\n                                />\n                            </template>\n                        </sw-tree>\n                        {% endblock %}\n\n                        \n                        {% block sw_product_variant_modal_option_list_toolbar_container_filter_buttons %}\n                        <div class="sw-product-variant-modal__filter-buttons">\n                            \n                            {% block sw_product_variant_modal_option_list_toolbar_container_button_filter_reset %}\n                            <sw-button\n                                class="sw-product-variant-modal__reset-filter"\n                                @click="resetFilterOptions"\n                            >\n                                {{ $tc(\'sw-product.variations.overview.filterReset\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_product_variant_modal_option_list_toolbar_container_button_update_list %}\n                            <sw-button\n                                variant="primary"\n                                @click="fetchProductVariants"\n                            >\n                                {{ $tc(\'sw-product.variations.overview.filter\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n\n                    </sw-container>\n                </sw-context-menu>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_body_grid %}\n    <sw-data-grid\n        v-if="productVariants.length > 0"\n        ref="variantGrid"\n        :is-loading="isLoading"\n        :columns="gridColumns"\n        :data-source="productVariants"\n        :sort-by="sortBy"\n        :sort-direction="sortDirection"\n        :allow-inline-edit="acl.can(\'product.editor\')"\n        show-settings\n        @column-sort="onSortColumn"\n        @inline-edit-save="onInlineEditSave"\n        @inline-edit-cancel="onInlineEditCancel"\n    >\n\n        \n        {% block sw_product_variant_modal_body_grid_bulk %}\n        <template #bulk>\n            \n            {% block sw_product_variant_modal_body_grid_bulk_edit %}\n            <span\n                v-if="acl.can(\'product.editor\')"\n                class="link link-primary sw-product-variant-modal__bulk-edit-action"\n                @click="toggleBulkEditModal"\n            >\n                {{ $tc(\'global.default.bulkEdit\') }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_bulk_delete %}\n            <span\n                v-if="acl.can(\'product.deleter\')"\n                class="link link-danger sw-product-variant-modal__bulk-delete-action"\n                @click="onClickBulkDelete"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_bulk_edit_modal %}\n        <template #bulk-modals="{ selection }">\n            <sw-bulk-edit-modal\n                v-if="showBulkEditModal"\n                class="sw-product-variant-modal__bulk-edit-modal"\n                :selection="selection"\n                :bulk-grid-edit-columns="gridColumns"\n                @edit-items="onEditItems"\n                @modal-close="toggleBulkEditModal"\n            >\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_name %}\n                <template #column-name="{ item }">\n                    <sw-media-preview-v2 :source="getItemMedia(item)" />\n                    <router-link :to="{ name: \'sw.product.detail\', params: { id: item.id } }">\n                        <span\n                            v-if="item.translated.name"\n                            class="sw-product-variant-modal__variant-name"\n                        >\n                            {{ item.translated.name }}\n                        </span>\n                        <sw-product-variant-info\n                            v-else\n                            class="sw-product-variant-modal__variant-options"\n                            :variations="item.variation"\n                            :show-tooltip="false"\n                            :ommit-parenthesis="true"\n                            seperator=", "\n                        />\n                    </router-link>\n                    <sw-product-variant-info\n                        v-if="item.translated.name"\n                        :variations="item.variation"\n                        :show-tooltip="false"\n                    />\n                    <sw-label\n                        v-if="variantIsDigital(item)"\n                        class="sw-product-variant-modal__digital-indicator"\n                    >\n                        {{ $tc(\'sw-product.variations.generatedListColumnContentProductState.is-download\') }}\n                    </sw-label>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_price %}\n                <template #column-price="{ item }">\n                    <sw-inheritance-switch\n                        class="sw-product-variant-modal__price-inheritance-switch"\n                        :is-inherited="item.price === null"\n                        disabled\n                    />\n                    <sw-price-preview\n                        :price="item.price ? item.price : []"\n                        :default-price="productEntity.price[0]"\n                        :tax-rate="productEntity.tax"\n                        :currency="currency"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_stock %}\n                <template #column-stock="{ item }">\n                    {{ item.stock }}\n                    <sw-color-badge :variant="item.stock | stockColorVariant" />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_active %}\n                <template #column-active="{ item }">\n                    <sw-icon\n                        v-if="item.active === true"\n                        class="sw-icon--product-status is--active"\n                        name="regular-checkmark-xs"\n                        small\n                    />\n                    <sw-icon\n                        v-else-if="item.active === false"\n                        class="sw-icon--product-status is--inactive"\n                        name="regular-times-s"\n                        small\n                    />\n                    <sw-icon\n                        v-else\n                        key="inherit-icon"\n                        name="regular-link-horizontal"\n                        size="16"\n                        multicolor\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_bulk_edit_modal_column_media %}\n                <template #column-media="{ item }">\n                    <sw-inheritance-switch\n                        class="sw-product-variant-modal__media-inherited-icon"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        disabled\n                    />\n                    <sw-product-variants-media-upload\n                        :source="item"\n                        :upload-tag="item.id"\n                        :is-inherited="isMediaFieldInherited(item)"\n                        :parent-product="productEntity"\n                        disabled\n                    />\n                </template>\n                {% endblock %}\n            </sw-bulk-edit-modal>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_name %}\n        <template #column-name="{item, isInlineEdit}">\n\n            \n            {% block sw_product_variant_modal_body_grid_column_name_inline_edit %}\n            <sw-text-field\n                v-if="isInlineEdit"\n                v-model="item.name"\n                :placeholder="$tc(\'sw-product.list.variantModalInlineEditProductNamePlaceholder\')"\n                size="small"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_name_content %}\n            <template v-else>\n                \n                {% block sw_product_variant_modal_body_grid_column_name_content_media_preview %}\n                <sw-media-preview-v2 :source="getItemMedia(item)" />\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_body_grid_column_name_content_name %}\n                <router-link :to="{ name: \'sw.product.detail\', params: { id: item.id } }">\n                    <span\n                        v-if="item.translated.name"\n                        class="sw-product-variant-modal__variant-name"\n                    >\n                        {{ item.translated.name }}\n                    </span>\n\n                    <sw-product-variant-info\n                        v-else\n                        class="sw-product-variant-modal__variant-options"\n                        :variations="item.variation"\n                        :show-tooltip="false"\n                        :ommit-parenthesis="true"\n                        seperator=", "\n                    />\n                </router-link>\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_body_grid_column_name_content_options %}\n                <sw-product-variant-info\n                    v-if="item.translated.name"\n                    :variations="item.variation"\n                    :show-tooltip="false"\n                />\n                {% endblock %}\n\n                <sw-label\n                    v-if="variantIsDigital(item)"\n                    class="sw-product-variant-modal__digital-indicator"\n                >\n                    {{ $tc(\'sw-product.variations.generatedListColumnContentProductState.is-download\') }}\n                </sw-label>\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_price %}\n        <template #column-price="{item, isInlineEdit}">\n            <template v-if="isInlineEdit">\n                <sw-inheritance-switch\n                    :is-inherited="item.price === null"\n                    class="sw-product-variant-modal__price-inheritance-switch"\n                    @inheritance-restore="onInheritanceRestore(item, currency)"\n                    @inheritance-remove="onInheritanceRemove(item, currency)"\n                />\n\n                <sw-price-field\n                    :price="item.price ? item.price : []"\n                    :default-price="productEntity.price[0]"\n                    :tax-rate="productEntity.tax"\n                    :label="false"\n                    :compact="true"\n                    :disable-suffix="true"\n                    enable-inheritance\n                    :currency="currency"\n                />\n            </template>\n\n            <template v-else>\n                <sw-inheritance-switch\n                    :is-inherited="item.price === null"\n                    class="sw-product-variant-modal__price-inheritance-switch"\n                    disabled\n                />\n\n                <sw-price-preview\n                    :price="item.price ? item.price : []"\n                    :default-price="productEntity.price[0]"\n                    :tax-rate="productEntity.tax"\n                    :currency="currency"\n                />\n            </template>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_stock %}\n        <template #column-stock="{item, isInlineEdit}">\n\n            \n            {% block sw_product_variant_modal_body_grid_column_stock_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit"\n                v-model="item.stock"\n                :placeholder="$tc(\'sw-product.list.variantModalInlineEditStockPlaceholder\')"\n                size="small"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_stock_content %}\n            <template v-else>\n                {{ item.stock }}\n                <sw-color-badge :variant="item.stock | stockColorVariant" />\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_active %}\n        <template #column-active="{item, isInlineEdit}">\n\n            \n            {% block sw_product_variant_modal_body_grid_column_active_inline_edit %}\n            <template v-if="isInlineEdit">\n                <sw-checkbox-field\n                    v-model="item.active"\n                    :disabled="item.active === null"\n                />\n\n                <sw-inheritance-switch\n                    :is-inherited="item.active === null"\n                    class="sw-product-variant-modal__active-inheritance-switch"\n                    @inheritance-restore="item.active = null"\n                    @inheritance-remove="item.active = true"\n                />\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_active_content %}\n            <template v-else>\n\n                \n                {% block sw_product_variant_modal_body_grid_column_active_content_icon_active %}\n                <sw-icon\n                    v-if="item.active === true"\n                    name="regular-checkmark-xs"\n                    small\n                    class="sw-icon--product-status is--active"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variant_modal_body_grid_column_active_content_icon_not_active %}\n                <sw-icon\n                    v-else-if="item.active === false"\n                    name="regular-times-s"\n                    small\n                    class="sw-icon--product-status is--inactive"\n                />\n                {% endblock %}\n\n                <sw-icon\n                    v-else\n                    key="inherit-icon"\n                    :multicolor="true"\n                    name="regular-link-horizontal"\n                    size="16"\n                />\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_column_media %}\n        <template\n            #column-media="{ item, isInlineEdit, compact }"\n        >\n            \n            {% block sw_product_variant_modal_body_grid_column_media_inline_edit %}\n            \n            {% block sw_product_variant_modal_body_grid_column_media_inherit %}\n            <sw-inheritance-switch\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="!isInlineEdit"\n                class="sw-product-variant-modal__media-inherited-icon"\n                @inheritance-restore="onMediaInheritanceRestore(item, isInlineEdit)"\n                @inheritance-remove="onMediaInheritanceRemove(item, isInlineEdit)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_column_media_content %}\n            <sw-product-variants-media-upload\n                :source="item"\n                :upload-tag="item.id"\n                :is-inherited="isMediaFieldInherited(item)"\n                :disabled="isInlineEdit ? isMediaFieldInherited(item) : true"\n                :parent-product="productEntity"\n            />\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_actions %}\n        <template #actions="{item}">\n\n            \n            {% block sw_product_variant_modal_body_grid_actions_edit %}\n            <sw-context-menu-item @click="visitProduct(item.id)">\n                {{ contextMenuEditText }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_grid_actions_delete %}\n            <sw-context-menu-item\n                v-tooltip.left="getNoPermissionsTooltip(\'product.deleter\')"\n                variant="danger"\n                :disabled="!acl.can(\'product.deleter\')"\n                @click="onDeleteVariant(item)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_grid_pagination %}\n        <template #pagination>\n            <sw-pagination\n                v-if="productVariants.length !== 0"\n                ref="pagination"\n                :page="paginationPage"\n                :limit="paginationLimit"\n                :total="productVariants.total"\n                @page-change="onPageChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_body_empty_state %}\n    <sw-empty-state\n        v-else\n        title=""\n        :subline="$tc(\'sw-product.list.variantGridEmptyStateSubline\')"\n        :absolute="false"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_body_delete_modal %}\n    <sw-modal\n        v-if="showDeleteModal"\n        class="sw-product-variant-modal__delete-modal"\n        :title="$tc(\'sw-product.list.variantDeleteModalTitle\')"\n        variant="small"\n        @modal-close="closeDeleteModal"\n    >\n\n        \n        {% block sw_product_variant_modal_body_delete_modal_body_multiple %}\n        <template v-if="toBeDeletedVariants.length > 1">\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_body_multiple_text %}\n            <p>{{ $t(\'sw-product.list.multipleVariantsDeleteModalText\', { amount: toBeDeletedVariants.length }) }}</p>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_body_multiple_subline %}\n            <p class="sw-product-variant-modal__delete-modal-subline">\n                ({{ $tc(\'sw-product.list.multipleVariantsDeleteModalSubline\') }})\n            </p>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_delete_modal_body_single %}\n        <p v-else>\n            {{ $t(\'sw-product.list.variantDeleteModalText\', { variantName: buildVariantName(toBeDeletedVariants[0]) }) }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_body_delete_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_footer_close %}\n            <sw-button\n                size="small"\n                @click="closeDeleteModal"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_product_variant_modal_body_delete_modal_footer_confirm %}\n            <sw-button-process\n                variant="danger"\n                size="small"\n                :animation-timeout="750"\n                :process-success="isDeletionOver"\n                :is-loading="isDeleteButtonLoading"\n                @click="deleteVariants"\n                @process-finish="closeDeleteModal"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-button-process>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_product_variant_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_product_variant_modal_footer_visit_main_product %}\n        <div\n            class="sw-product-variant-modal__main-product-link"\n            @click="visitProduct(productEntity.id)"\n        >\n            {{ openMainProductText }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_variant_modal_footer_close_button %}\n        <sw-button\n            size="small"\n            @click="$emit(\'modal-close\')"\n        >\n            {{ $tc(\'global.sw-modal.labelClose\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[d.getByName("notification")],props:{productEntity:{type:Object,required:!0}},data:function(){return{productVariants:[],currency:null,paginationLimit:25,paginationPage:1,toBeDeletedVariants:[],showDeleteModal:!1,searchTerm:"",isDeleteButtonLoading:!1,isDeletionOver:!1,sortDirection:"ASC",sortBy:"productNumber",isLoading:!1,groups:[],filterOptions:[],includeOptions:[],filterWindowOpen:!1,showBulkEditModal:!1}},computed:{modalTitle:function(){return this.$t("sw-product.list.variantModalTitle",{productName:this.productEntity.translated.name})},openMainProductText:function(){return this.$t("sw-product.list.openMainProduct",{productName:this.productEntity.translated.name})},productRepository:function(){return this.repositoryFactory.create("product")},productMediaRepository:function(){return this.repositoryFactory.create(this.productEntity.media.entity)},currencyRepository:function(){return this.repositoryFactory.create("currency")},groupRepository:function(){return this.repositoryFactory.create("property_group")},contextMenuEditText:function(){return this.acl.can("product.editor")?this.$tc("global.default.edit"):this.$tc("global.default.view")},filterCriteria:function(){return this.includeOptions.length<=0?[]:this.includeOptions.reduce((function(n,t){var e=n.find((function(n){return n.id===t.groupId}));return e?e.options.push(t.id):n.push({id:t.groupId,options:[t.id]}),n}),[]).map((function(n){return p.equalsAny("product.optionIds",n.options)}))},productVariantCriteria:function(){var n=new p(this.paginationPage,this.paginationLimit),t=this.productEntity.id;(n.addFilter(p.equals("parentId",t)),this.searchTerm&&n.setTerm(this.searchTerm),n.getAssociation("options").addAssociation("group"),n.addAssociation("cover"),n.addAssociation("media"),this.searchTerm)&&this.searchTerm.split(" ").forEach((function(t){n.addQuery(p.equals("product.options.name",t),3500),n.addQuery(p.contains("product.options.name",t),500)}));return this.filterCriteria&&this.filterCriteria.forEach((function(t){n.addFilter(t)})),n.addSorting(p.sort(this.sortBy,this.sortDirection,!0)),n},gridColumns:function(){var n;return[{property:"name",dataIndex:"name",label:this.$tc("sw-product.list.columnName"),routerLink:"sw.product.detail",inlineEdit:"string",allowResize:!0},{property:"sales",dataIndex:"sales",label:this.$tc("sw-product.list.columnSales"),allowResize:!0,align:"right"},{property:"price",dataIndex:"price.".concat((null===(n=this.currency)||void 0===n?void 0:n.id)||"",".net"),label:"sw-product.list.columnPrice",allowResize:!0,width:"250px",inlineEdit:"number",align:"right"},{property:"stock",dataIndex:"stock",label:"sw-product.list.columnInStock",allowResize:!0,inlineEdit:"number",align:"right"},{property:"active",dataIndex:"active",label:"sw-product.list.columnActive",allowResize:!0,inlineEdit:"boolean",align:"center"},{property:"productNumber",dataIndex:"productNumber",label:"sw-product.list.columnProductNumber",allowResize:!0,align:"right"},{property:"media",dataIndex:"media",label:this.$tc("sw-product.list.columnMedia"),allowResize:!0,inlineEdit:!0,sortable:!1}]},canBeDeletedCriteria:function(){var n=new p(1,25),t=this.toBeDeletedVariants.map((function(n){return n.id}));return n.addFilter(p.equalsAny("canonicalProductId",t)),n},groupCriteria:function(){return new p(1,100)},selectedGroups:function(){var n,t,e=null===(n=this.productEntity)||void 0===n?void 0:n.configuratorSettings.reduce((function(n,t){return n.indexOf(t.option.groupId)<0&&n.push(t.option.groupId),n}),[]);return null===(t=this.groups)||void 0===t?void 0:t.filter((function(n){return e.indexOf(n.id)>=0}))},filterOptionsListing:function(){var n=this,t=r()(this.selectedGroups).sort((function(n,t){return n.position-t.position})).map((function(t,e){var i=n.getOptionsForGroup(t.id);return{id:t.id,name:t.name,childCount:i.length,parentId:null,afterId:e>0?n.selectedGroups[e-1].id:null,storeObject:t}})),e=t.reduce((function(t,e){var i=n.getOptionsForGroup(e.id),o=i.sort((function(n,t){return n.position-t.position})).map((function(n,t){var e=n.option,o=null;return t>0&&(o=i[t-1].option.id),{id:e.id,name:e.name,childCount:0,parentId:e.groupId,afterId:o,storeObject:n}}));return[].concat(r()(t),r()(o))}),[]);return[].concat(r()(t),r()(e))}},watch:{selectedGroups:function(){this.filterOptions=this.filterOptionsListing}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.fetchProductVariants(),this.fetchSystemCurrency(),this.loadGroups()},fetchSystemCurrency:function(){var n=this,t=Shopware.Context.app.systemCurrencyId;this.currencyRepository.get(t).then((function(t){n.currency=t}))},fetchProductVariants:function(){var n=this;return this.isLoading=!0,this.productRepository.search(this.productVariantCriteria).then((function(t){n.productVariants=t})).finally((function(){n.isLoading=!1}))},getDefaultPriceForVariant:function(n){var t=this;return n.price&&n.price.find((function(n){return n.currencyId===t.defaultCurrency.id}))||this.defaultPrice},onInheritanceRestore:function(n,t){if(n.price){var e=n.price.findIndex((function(n){return n.currencyId===t.id}));e>=0&&this.$delete(n.price,e),n.price.length<=0&&(n.price=null)}},onInheritanceRemove:function(n,t){n.price||(n.price=[]);var e=this.productEntity.price[0],i={currencyId:t.id,gross:e.gross*t.factor,linked:e.linked,net:e.net*t.factor};this.$set(n.price,n.price.length,i)},sortOptions:function(n){return r()(n).sort((function(n,t){return n.position===t.position?n.name>t.name?1:-1:n.position>t.position?1:-1}))},buildVariantOptions:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=n.options,a=this.sortOptions(o),r=a.reduce((function(n,e){var o=e.translated.name,a=e.group.translated.name;return n.concat(i?"":a,i?"":": ",o,t)}),"").slice(0,-t.length);return e?r:"(".concat(r,")")},buildVariantName:function(n){var t=this.buildVariantOptions(n),e=n.translated.name||this.productEntity.translated.name;return"".concat(e," ").concat(t)},getVariantPrice:function(n){var t=n.price;return t?t[0]:this.productEntity.price[0]},onPageChange:function(n){var t=n.limit,e=void 0===t?25:t,i=n.page,o=void 0===i?1:i;this.paginationLimit=e,this.paginationPage=o,this.fetchProductVariants()},visitProduct:function(n){var t=this;this.$emit("modal-close"),this.$nextTick().then((function(){t.$router.push({name:"sw.product.detail",params:{id:n}})}))},getItemMedia:function(n){return n.cover?n.cover.media:this.productEntity.cover?this.productEntity.cover.media:null},deleteVariants:function(){var n=this;this.isDeleteButtonLoading=!0;var t=this.toBeDeletedVariants.map((function(n){return n.id})),e=this.toBeDeletedVariants[0].translated.name||this.productEntity.translated.name,i=t.length;this.canVariantsBeDeleted().then((function(o){if(!o)return n.isDeleteButtonLoading=!1,n.isDeletionOver=!0,void n.createNotificationError({message:n.$tc("sw-product.list.notificationVariantDeleteErrorCanonicalUrl",i,{variantName:e})});n.productRepository.syncDeleted(t).then((function(){n.createNotificationSuccess({message:n.$tc("sw-product.list.notificationVariantDeleteSuccess",i,{variantName:e,amount:i})}),n.$refs.variantGrid.resetSelection(),n.fetchProductVariants()})).catch((function(){n.createNotificationError({message:n.$tc("sw-product.list.notificationVariantDeleteError",i,{variantName:e,amount:i})})})).finally((function(){n.isDeleteButtonLoading=!1,n.isDeletionOver=!0}))}))},canVariantsBeDeleted:function(){var n=this;return o()(c.a.mark((function t(){var e;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.productRepository.search(n.canBeDeletedCriteria);case 2:return e=t.sent,t.abrupt("return",0===e.length);case 4:case"end":return t.stop()}}),t)})))()},onInlineEditSave:function(n){var t=this,e=this.buildVariantName(n);this.productRepository.save(n).then((function(){t.createNotificationSuccess({message:t.$t("sw-product.list.notificationVariantSaveSuccess",{variantName:e})}),t.fetchProductVariants()}))},onInlineEditCancel:function(){this.fetchProductVariants()},onClickBulkDelete:function(){var n=this.$refs.variantGrid.selection;this.toBeDeletedVariants=Object.values(n),this.showDeleteModal=!0},closeDeleteModal:function(){this.showDeleteModal=!1,this.toBeDeletedVariants=[],this.isDeletionOver=!1},onDeleteVariant:function(n){this.toBeDeletedVariants.push(n),this.showDeleteModal=!0},onSearchTermChange:function(){this.fetchProductVariants()},onSortColumn:function(n){this.sortBy===n.dataIndex?this.sortDirection="ASC"===this.sortDirection?"DESC":"ASC":this.sortBy=n.dataIndex,this.fetchProductVariants()},getNoPermissionsTooltip:function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:t,disabled:this.acl.can(n)}},isMediaFieldInherited:function(n){return!n.forceMediaInheritanceRemove&&(n.media?n.media.length<=0:!!n.media)},onMediaInheritanceRestore:function(n,t){t&&(n.forceMediaInheritanceRemove=!1,n.coverId=null,n.media.getIds().forEach((function(t){n.media.remove(t)})))},onMediaInheritanceRemove:function(n,t){var e=this;t&&(n.forceMediaInheritanceRemove=!0,this.productEntity.media.forEach((function(t){var i=t.id,o=t.mediaId,a=t.position,r=t.media,l=e.productMediaRepository.create(u.api);Object.assign(l,{mediaId:o,position:a,productId:e.productEntity.id,media:r}),e.productEntity.coverId===i&&(n.coverId=l.id),n.media.push(l)})))},loadGroups:function(){var n=this;return this.groupRepository.search(this.groupCriteria).then((function(t){n.groups=t}))},resetFilterOptions:function(){var n=this;this.filterOptions=[],this.includeOptions=[],this.$nextTick((function(){n.filterOptions=n.filterOptionsListing,n.fetchProductVariants()}))},filterOptionChecked:function(n){n.checked?this.includeOptions.push({id:n.id,groupId:n.parentId}):this.includeOptions=this.includeOptions.filter((function(t){return t.id!==n.id}))},getOptionsForGroup:function(n){var t;return null===(t=this.productEntity)||void 0===t?void 0:t.configuratorSettings.filter((function(t){return!t.isDeleted&&t.option.groupId===n}))},toggleFilterMenu:function(){this.filterWindowOpen=!this.filterWindowOpen},toggleBulkEditModal:function(){this.showBulkEditModal=!this.showBulkEditModal},onEditItems:function(){var n=this;return o()(c.a.mark((function t(){var e,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$nextTick();case 2:e="0",(i=Object.values(n.$refs.variantGrid.selection).filter((function(n){return n.states.includes("is-download")}))).length>0&&(e=i.filter((function(n){return n.isCloseout})).length!==i.length?"1":"2"),n.$router.push({name:"sw.bulk.edit.product",params:{parentId:n.productEntity.id,includesDigital:e}});case 6:case"end":return t.stop()}}),t)})))()},variantIsDigital:function(n){return n.states&&n.states.includes("is-download")}}}},"qO+S":function(n,t,e){},uvnA:function(n,t,e){var i=e("qO+S");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,e("P8hj").default)("b3f4aeac",i,!0,{})}}]);