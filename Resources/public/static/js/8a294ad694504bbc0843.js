(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[327],{UskL:function(e,n,t){var i=t("eI1Y");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("e99a025e",i,!0,{})},eI1Y:function(e,n,t){},vjC6:function(e,n,t){"use strict";t.r(n);var i=t("6lmj"),r=t.n(i),o=t("JvCW"),l=(t("UskL"),Shopware.Utils),s=l.get,d=l.format;n.default={template:'\n{% block sw_order_line_items_grid %}\n<sw-container\n    type="row"\n    class="sw-order-line-items-grid"\n>\n\n    \n    {% block sw_order_line_items_grid_actions %}\n    <sw-container\n        class="sw-order-line-items-grid__actions-container"\n        columns="1fr auto"\n        gap="16px"\n    >\n\n        \n        {% block sw_order_line_items_grid_line_item_filter %}\n        <div align="left">\n            <sw-card-filter\n                ref="itemFilter"\n                :placeholder="$tc(\'sw-order.createBase.placeholderSearchBarItem\')"\n                @sw-card-filter-term-change="onSearchTermChange"\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_create_actions %}\n        <div align="right">\n\n            \n            {% block sw_order_line_items_grid_create_actions_button_group %}\n            <sw-button-group :disabled="isLoading">\n\n                \n                {% block sw_order_line_items_grid_add_existing_product %}\n                <sw-button\n                    class="sw-order-line-items-grid__actions-container-add-product-btn"\n                    variant="ghost"\n                    size="small"\n                    :disabled="!editable"\n                    @click="onInsertExistingItem"\n                >\n                    {{ $tc(\'sw-order.detailBase.buttonAddProduct\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_create_actions_dropdown %}\n                <sw-context-button>\n                    <template #button>\n                        <sw-button\n                            variant="ghost"\n                            size="small"\n                            square\n                        >\n                            <sw-icon\n                                name="regular-chevron-down-xs"\n                                decorative\n                            />\n                        </sw-button>\n                    </template>\n\n                    \n                    {% block sw_order_line_items_grid_create_actions_dropdown_menu_item %}\n                    <sw-context-menu-item\n                        v-tooltip.left="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: editable,\n                            showOnDisabledElements: true\n                        }"\n                        class="sw-order-line-items-grid__create-custom-item"\n                        :disabled="!editable"\n                        @click="onInsertBlankItem"\n                    >\n                        {{ $tc(\'sw-order.detailBase.buttonAddBlankProduct\') }}\n                    </sw-context-menu-item>\n                    <sw-context-menu-item\n                        v-tooltip.left="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: canCreateDiscounts,\n                            showOnDisabledElements: true\n                        }"\n                        class="sw-order-line-items-grid__can-create-discounts-button"\n                        :disabled="!canCreateDiscounts"\n                        @click="onInsertCreditItem"\n                    >\n                        {{ $tc(\'sw-order.detailBase.buttonAddCredit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                </sw-context-button>\n                {% endblock %}\n\n            </sw-button-group>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_order_line_items_grid_grid %}\n    <sw-data-grid\n        ref="dataGrid"\n        class="sw-order-line-items-grid__data-grid"\n        identifier="sw-order-line-item-grid"\n        :data-source="orderLineItems"\n        :columns="getLineItemColumns"\n        show-settings\n        :show-selection="editable"\n        :is-loading="isLoading"\n        :allow-inline-edit="editable"\n        :is-record-editable="(item) => !isPromotionItem(item)"\n        @inline-edit-cancel="onInlineEditCancel"\n        @inline-edit-save="onInlineEditSave"\n        @selection-change="onSelectionChanged"\n    >\n\n        \n        {% block sw_order_line_items_grid_grid_columns %}\n        \n        {% block sw_order_line_items_grid_grid_columns_label %}\n        <template #column-label="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_label_inline_edit %}\n            <sw-order-product-select\n                v-if="isInlineEdit"\n                {% if VUE3 %}\n                name="sw-field--item-label"\n                {% endif %}\n                :sales-channel-id="salesChannelId"\n                :tax-status="taxStatus"\n                :item="item"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_label_link %}\n            <div\n                v-else-if="!isInlineEdit && isProductItem(item)"\n                class="sw-order-line-items-grid__item-product"\n            >\n\n                \n                {% block sw_order_line_items_grid_grid_columns_label_nested_modal_button %}\n                <sw-button\n                    v-if="hasChildren(item)"\n                    v-tooltip="{ message: $tc(\'sw-order.detailBase.tooltipNestedLineItemsButton\') }"\n                    class="sw-order-line-items-grid__item-nested-indicator"\n                    size="x-small"\n                    @click="openNestedLineItemsModal(item)"\n                >\n\n                    \n                    {% block sw_order_line_items_grid_grid_columns_label_nested_modal_button_icon %}\n                    <sw-icon\n                        class="sw-order-line-items-grid__nested-indicator-icon"\n                        name="regular-list-xs"\n                        size="14px"\n                    />\n                    {% endblock %}\n\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_column_payload_options %}\n                \n                {% block sw_order_line_items_grid_column_payload_options_link %}\n                <router-link\n                    v-if="item.payload && item.payload.options"\n                    class="sw-order-line-items-grid__item-payload-options"\n                    :title="$tc(\'sw-order.detailBase.contextMenuShowProduct\')"\n                    :to="{ name: \'sw.product.detail\', params: { id: item.productId } }"\n                >\n                    <sw-product-variant-info :variations="item.payload.options">\n                        <div class="sw-order-line-items-grid__item-label">\n                            {{ item.label }}\n                        </div>\n                    </sw-product-variant-info>\n                </router-link>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_column_payload_options_linkless %}\n                <div\n                    v-else\n                    class="sw-order-line-items-grid__item-payload-options"\n                >\n                    <span class="sw-order-line-items-grid__item-label">\n                        {{ item.label }}\n                    </span>\n                </div>\n                {% endblock %}\n                {% endblock %}\n\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_label_content %}\n            <template v-else>\n                <span class="sw-order-line-items-grid__item-label">\n                    {{ item.label }}\n                </span>\n            </template>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_unit_price %}\n        <template #column-unitPrice="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_unit_price_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && !itemCreatedFromProduct(item.id)"\n                {% if VUE3 %}\n                v-model:value="item.priceDefinition.price"\n                {% else %}\n                v-model="item.priceDefinition.price"\n                {% endif %}\n                {% if VUE3 %}\n                name="sw-field--item-priceDefinition-price"\n                {% endif %}\n                placeholder="0"\n                size="small"\n                :min="getMinItemPrice(item.id)"\n                :digits="order.itemRounding.decimals"\n                {% if VUE3 %}\n                @update:value="checkItemPrice($event, item)"\n                {% else %}\n                @change="checkItemPrice($event, item)"\n                {% endif %}\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_unit_price_content %}\n            <span v-else>{{ currencyFilter(item.unitPrice, order.currency.shortName, order.itemRounding.decimals) }}</span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_total_price %}\n        <template #column-totalPrice="{ item }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_total_price_content %}\n            <span>\n                {{ currencyFilter(item.totalPrice, order.currency.shortName, order.itemRounding.decimals) }}\n            </span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_quantity %}\n        <template #column-quantity="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_quantity_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && !isCreditItem(item.id)"\n                {% if VUE3 %}\n                v-model:value="item.quantity"\n                {% else %}\n                v-model="item.quantity"\n                {% endif %}\n                {% if VUE3 %}\n                name="sw-field--item-quantity"\n                {% endif %}\n                number-type="int"\n                :min="1"\n                size="small"\n                placeholder="0"\n                {% if VUE3 %}\n                @update:value="updateItemQuantity(item)"\n                {% else %}\n                @change="updateItemQuantity(item)"\n                {% endif %}\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_quantity_content %}\n            <span v-else>\n                {{ item.quantity }} x\n            </span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_tax %}\n\n        <template #column-price.taxRules[0]="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_tax_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && showTaxRulesInlineEdit(item)"\n                key="order-line-item-tax-edit-default"\n                {% if VUE3 %}\n                v-model:value="item.priceDefinition.taxRules[0].taxRate"\n                {% else %}\n                v-model="item.priceDefinition.taxRules[0].taxRate"\n                {% endif %}\n                {% if VUE3 %}\n                name="sw-field--item-priceDefinition-taxRules[0]-taxRate"\n                {% endif %}\n                size="small"\n                placeholder="0"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_tax_content_tooltip %}\n            <span\n                v-else-if="hasMultipleTaxes(item)"\n                v-tooltip="tooltipTaxDetail(item)"\n                class="sw-order-line-items-grid__item-tax-tooltip"\n            >\n                {{ showTaxValue(item) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_tax_content %}\n            <span v-else-if="item.price && item.price.taxRules.length">\n                {{ showTaxValue(item) }}\n            </span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_actions %}\n        <template #actions="{ item, itemIndex }">\n            \n            {% block sw_order_line_items_grid_grid_actions_show %}\n            <sw-context-menu-item\n                :disabled="!isProductItem(item)"\n                :router-link="{ name: \'sw.product.detail\', params: { id: item.productId } }"\n            >\n\n                \n                {% block sw_order_line_items_grid_grid_actions_show_label %}\n                {{ $tc(\'sw-order.detailBase.contextMenuShowProduct\') }}\n                {% endblock %}\n\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_actions_extension %}{% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_actions_delete %}\n            <sw-context-menu-item\n                v-tooltip.left="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: editable,\n                    showOnDisabledElements: true\n                }"\n                variant="danger"\n                class="sw_order_line_items_grid-item__delete-action"\n                :disabled="!editable"\n                @click="onDeleteItem(item, itemIndex)"\n            >\n                \n                {% block sw_order_line_items_grid_grid_actions_delete_label %}\n                {{ $tc(\'sw-order.detailBase.contextMenuDelete\') }}\n                {% endblock %}\n\n            </sw-context-menu-item>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_actions_modals %}\n        <template #action-modals="{ item }">\n            \n            {% block sw_order_line_items_grid_grid_actions_modals_items %}{% endblock %}\n            <sw-modal\n                v-if="showDeleteModal === item.id"\n                class="sw-order-line-items-grid__delete-item-modal"\n                :title="$tc(\'global.default.warning\')"\n                variant="small"\n                @modal-close="onCloseDeleteModal"\n            >\n                <p class="sw-order-list__confirm-delete-text">\n                    {{ $tc(\'sw-order.detailBase.textDeleteLineItemConfirm\', 0, { label: `${item.label}` }) }}\n                </p>\n\n                <template #modal-footer>\n                    <sw-button\n                        size="small"\n                        class="sw_order_line_items_grid-actions_modal__close-action"\n                        @click="onCloseDeleteModal"\n                    >\n                        {{ $tc(\'global.default.cancel\') }}\n                    </sw-button>\n\n                    <sw-button\n                        variant="danger"\n                        size="small"\n\n                        class="sw_order_line_items_grid-actions_modal__confirm-action"\n                        @click="onConfirmDelete(item.id)"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </template>\n            </sw-modal>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_bulk_actions %}\n        <template #bulk>\n\n            \n            {% block sw_order_line_items_grid_bulk_actions_delete %}\n            <a\n                class="link link-danger"\n                role="link"\n                tabindex="0"\n                @click="onDeleteSelectedItems"\n                @keydown.enter="onDeleteSelectedItems"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </a>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_bulk_actions_extension %}{% endblock %}\n        </template>\n        {% endblock %}\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_order_line_items_nested_line_item_modal %}\n    <sw-order-nested-line-items-modal\n        v-if="nestedLineItemsModal"\n        :line-item="nestedLineItemsModal"\n        :order="order"\n        @modal-close="closeNestedLineItemsModal"\n    />\n    {% endblock %}\n\n</sw-container>\n{% endblock %}\n',inject:["repositoryFactory","orderService","acl","feature"],props:{order:{type:Object,required:!0},context:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},data:function(){return{isLoading:!1,selectedItems:{},searchTerm:"",nestedLineItemsModal:null,showDeleteModal:!1}},computed:{canCreateDiscounts:function(){return this.acl.can("orders.create_discounts")},orderLineItemRepository:function(){return this.repositoryFactory.create("order_line_item")},orderLineItems:function(){var e=this;if(!this.searchTerm)return this.order.lineItems;var n=this.searchTerm.split(/[\W_]+/gi);return this.order.lineItems.filter((function(t){var i;if(!t.label)return!1;var r=[t.label.toLowerCase()];return e.isProductNumberColumnVisible&&null!==(i=t.payload)&&void 0!==i&&i.productNumber&&r.push(t.payload.productNumber.toLowerCase()),n.every((function(e){return r.some((function(n){return n.includes(e.toLowerCase())}))}))}))},lineItemTypes:function(){return o.a},taxStatus:function(){return s(this.order,"taxStatus","")},unitPriceLabel:function(){return"net"===this.taxStatus?this.$tc("sw-order.detailBase.columnPriceNet"):"tax-free"===this.taxStatus?this.$tc("sw-order.detailBase.columnPriceTaxFree"):this.$tc("sw-order.detailBase.columnPriceGross")},getLineItemColumns:function(){var e=[{property:"quantity",dataIndex:"quantity",label:"sw-order.detailBase.columnQuantity",allowResize:!1,align:"right",inlineEdit:!0,width:"90px"},{property:"label",dataIndex:"label",label:"sw-order.detailBase.columnProductName",allowResize:!1,primary:!0,inlineEdit:!0,multiLine:!0},{property:"payload.productNumber",dataIndex:"payload.productNumber",label:"sw-order.detailBase.columnProductNumber",allowResize:!1,align:"left",visible:!1},{property:"unitPrice",dataIndex:"unitPrice",label:this.unitPriceLabel,allowResize:!1,align:"right",inlineEdit:!0,width:"120px"}];return"tax-free"!==this.taxStatus&&e.push({property:"price.taxRules[0]",label:"sw-order.detailBase.columnTax",allowResize:!1,align:"right",inlineEdit:!0,width:"90px"}),[].concat(e,[{property:"totalPrice",dataIndex:"totalPrice",label:"gross"===this.taxStatus?"sw-order.detailBase.columnTotalPriceGross":"sw-order.detailBase.columnTotalPriceNet",allowResize:!1,align:"right",width:"120px"}])},salesChannelId:function(){var e,n;return null!==(e=null===(n=this.order)||void 0===n?void 0:n.salesChannelId)&&void 0!==e?e:""},isProductNumberColumnVisible:function(){var e,n;return null===(e=this.$refs.dataGrid)||void 0===e||null===(n=e.currentColumns.find((function(e){return"payload.productNumber"===e.property})))||void 0===n?void 0:n.visible},currencyFilter:function(){return Shopware.Filter.getByName("currency")}},methods:{onInlineEditSave:function(e){var n=this;return new Promise((function(t){e.isNew()?e.type===n.lineItemTypes.PRODUCT?n.orderService.addProductToOrder(n.order.id,n.order.versionId,e.identifier,e.quantity).then((function(e){n.$emit("item-edit"),t(e)})):e.type===n.lineItemTypes.CREDIT?n.orderService.addCreditItemToOrder(n.order.id,n.order.versionId,e).then((function(e){n.$emit("item-edit"),t(e)})):n.orderService.addCustomLineItemToOrder(n.order.id,n.order.versionId,e).then((function(e){n.$emit("item-edit"),t(e)})):(n.$emit("existing-item-edit"),t())}))},onInlineEditCancel:function(){this.$emit("item-cancel")},createNewOrderLineItem:function(){var e=this.orderLineItemRepository.create();return e.versionId=this.order.versionId,e.priceDefinition={isCalculated:!1,taxRules:[{taxRate:0,percentage:100}],price:0},e.price={taxRules:[{taxRate:0}],unitPrice:0,quantity:1,totalPrice:0},e.quantity=1,e.unitPrice="...",e.totalPrice="...",e.precision=2,e.label="",e.payload={productNumber:""},e},onInsertBlankItem:function(){var e=this.createNewOrderLineItem();e.description="custom line item",e.type=this.lineItemTypes.CUSTOM,this.order.lineItems.unshift(e)},onInsertExistingItem:function(){var e=this.createNewOrderLineItem();e.type=this.lineItemTypes.PRODUCT,this.order.lineItems.unshift(e)},onInsertCreditItem:function(){var e=this.createNewOrderLineItem();e.description="credit line item",e.type=this.lineItemTypes.CREDIT,this.order.lineItems.unshift(e)},onSelectionChanged:function(e){this.selectedItems=e},onDeleteSelectedItems:function(){var e=this,n=[];if(Object.values(this.selectedItems).forEach((function(t){if(t.isNew()){var i=e.order.lineItems.findIndex((function(e){return t.id===(null==e?void 0:e.id)}));return e.feature.isActive("VUE3")?void e.order.lineItems.splice(i,1):void e.$delete(e.order.lineItems,i)}n.push(e.orderLineItemRepository.delete(t.id,e.context))})),!n.length)return this.selectedItems={},void this.$refs.dataGrid.resetSelection();Promise.all(n).then((function(){e.$emit("item-delete"),e.selectedItems={},e.$refs.dataGrid.resetSelection()}))},onDeleteItem:function(e,n){if(e.isNew())return this.feature.isActive("VUE3")?void this.order.lineItems.splice(n,1):void this.$delete(this.order.lineItems,n);this.showDeleteModal=e.id},onCloseDeleteModal:function(){this.showDeleteModal=!1},onConfirmDelete:function(){var e=this;this.orderLineItemRepository.delete(this.showDeleteModal,this.context).then((function(){e.$emit("item-delete")})),this.showDeleteModal=!1},itemCreatedFromProduct:function(e){var n=this.orderLineItems.find((function(n){return n.id===e}));return n.isNew()&&n.type===this.lineItemTypes.PRODUCT},onSearchTermChange:function(e){this.searchTerm=e.toLowerCase()},isCreditItem:function(e){return this.orderLineItems.find((function(n){return n.id===e})).type===this.lineItemTypes.CREDIT},isProductItem:function(e){return e.type===this.lineItemTypes.PRODUCT},isPromotionItem:function(e){return e.type===this.lineItemTypes.PROMOTION},getMinItemPrice:function(e){return this.isCreditItem(e)?null:0},showTaxValue:function(e){return(this.isCreditItem(e.id)||this.isPromotionItem(e))&&e.price.taxRules.length>1?this.$tc("sw-order.detailBase.textCreditTax"):"".concat(e.price.taxRules[0].taxRate," %")},checkItemPrice:function(e,n){this.isCreditItem(n.id)?n.priceDefinition.price=-1*Math.abs(e):n.priceDefinition.price=e},tooltipTaxDetail:function(e){var n=this,t=r()(e.price.calculatedTaxes).sort((function(e,n){return e.taxRate-n.taxRate})).map((function(e){return n.$tc("sw-order.detailBase.taxDetail",0,{taxRate:e.taxRate,tax:d.currency(e.tax,n.order.currency.shortName)})}));return{showDelay:300,message:"".concat(this.$tc("sw-order.detailBase.tax"),"<br>").concat(t.join("<br>"))}},openNestedLineItemsModal:function(e){this.nestedLineItemsModal=e},closeNestedLineItemsModal:function(){this.nestedLineItemsModal=null},hasChildren:function(e){return e.children&&e.children.length>0},hasMultipleTaxes:function(e){return s(e,"price.calculatedTaxes")&&e.price.calculatedTaxes.length>1},updateItemQuantity:function(e){e.type===this.lineItemTypes.CUSTOM&&(e.priceDefinition.quantity=e.quantity)},showTaxRulesInlineEdit:function(e){return!this.itemCreatedFromProduct(e.id)&&e.priceDefinition&&e.priceDefinition.taxRules&&!this.isCreditItem(e.id)}}}}}]);
//# sourceMappingURL=8a294ad694504bbc0843.js.map