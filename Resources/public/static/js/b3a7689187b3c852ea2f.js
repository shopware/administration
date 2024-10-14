(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[60164],{672388:function(){},160164:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var i=t(102908);t(263243);let{Utils:r}=Shopware,{get:s,format:l}=r;var o={template:'\n{% block sw_order_line_items_grid %}\n<sw-container\n    type="row"\n    class="sw-order-line-items-grid"\n>\n\n    \n    {% block sw_order_line_items_grid_actions %}\n    <sw-container\n        class="sw-order-line-items-grid__actions-container"\n        columns="1fr auto"\n        gap="16px"\n    >\n\n        \n        {% block sw_order_line_items_grid_line_item_filter %}\n        <div align="left">\n            <sw-card-filter\n                ref="itemFilter"\n                :placeholder="$tc(\'sw-order.createBase.placeholderSearchBarItem\')"\n                @sw-card-filter-term-change="onSearchTermChange"\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_create_actions %}\n        <div align="right">\n\n            \n            {% block sw_order_line_items_grid_create_actions_button_group %}\n            <sw-button-group :disabled="isLoading || undefined">\n\n                \n                {% block sw_order_line_items_grid_add_existing_product %}\n                <sw-button\n                    class="sw-order-line-items-grid__actions-container-add-product-btn"\n                    variant="ghost"\n                    size="small"\n                    :disabled="!editable || undefined"\n                    @click="onInsertExistingItem"\n                >\n                    {{ $tc(\'sw-order.detailBase.buttonAddProduct\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_create_actions_dropdown %}\n                <sw-context-button>\n                    <template #button>\n                        <sw-button\n                            variant="ghost"\n                            size="small"\n                            square\n                        >\n                            <sw-icon\n                                name="regular-chevron-down-xs"\n                                decorative\n                            />\n                        </sw-button>\n                    </template>\n\n                    \n                    {% block sw_order_line_items_grid_create_actions_dropdown_menu_item %}\n                    <sw-context-menu-item\n                        v-tooltip.left="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: editable,\n                            showOnDisabledElements: true\n                        }"\n                        class="sw-order-line-items-grid__create-custom-item"\n                        :disabled="!editable || undefined"\n                        @click="onInsertBlankItem"\n                    >\n                        {{ $tc(\'sw-order.detailBase.buttonAddBlankProduct\') }}\n                    </sw-context-menu-item>\n                    <sw-context-menu-item\n                        v-tooltip.left="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: canCreateDiscounts,\n                            showOnDisabledElements: true\n                        }"\n                        class="sw-order-line-items-grid__can-create-discounts-button"\n                        :disabled="!canCreateDiscounts || undefined"\n                        @click="onInsertCreditItem"\n                    >\n                        {{ $tc(\'sw-order.detailBase.buttonAddCredit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                </sw-context-button>\n                {% endblock %}\n\n            </sw-button-group>\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_order_line_items_grid_grid %}\n    <sw-data-grid\n        ref="dataGrid"\n        class="sw-order-line-items-grid__data-grid"\n        identifier="sw-order-line-item-grid"\n        :data-source="orderLineItems"\n        :columns="getLineItemColumns"\n        show-settings\n        :show-selection="editable"\n        :is-loading="isLoading"\n        :allow-inline-edit="editable"\n        :is-record-editable="(item) => !isPromotionItem(item)"\n        @inline-edit-cancel="onInlineEditCancel"\n        @inline-edit-save="onInlineEditSave"\n        @selection-change="onSelectionChanged"\n    >\n\n        \n        {% block sw_order_line_items_grid_grid_columns %}\n        \n        {% block sw_order_line_items_grid_grid_columns_label %}\n        <template #column-label="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_label_inline_edit %}\n            <sw-order-product-select\n                v-if="isInlineEdit"\n                name="sw-field--item-label"\n                :sales-channel-id="salesChannelId"\n                :tax-status="taxStatus"\n                :item="item"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_label_link %}\n            <div\n                v-else-if="!isInlineEdit && (isProductItem(item) || isContainerItem(item))"\n                class="sw-order-line-items-grid__item-product"\n            >\n\n                \n                {% block sw_order_line_items_grid_grid_columns_label_nested_modal_button %}\n                <sw-button\n                    v-if="hasChildren(item)"\n                    v-tooltip="{ message: $tc(\'sw-order.detailBase.tooltipNestedLineItemsButton\') }"\n                    class="sw-order-line-items-grid__item-nested-indicator"\n                    size="x-small"\n                    @click="openNestedLineItemsModal(item)"\n                >\n\n                    \n                    {% block sw_order_line_items_grid_grid_columns_label_nested_modal_button_icon %}\n                    <sw-icon\n                        class="sw-order-line-items-grid__nested-indicator-icon"\n                        name="regular-list-xs"\n                        size="14px"\n                    />\n                    {% endblock %}\n\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_column_payload_options %}\n                \n                {% block sw_order_line_items_grid_column_payload_options_link %}\n                <router-link\n                    v-if="item.payload && item.payload.options"\n                    class="sw-order-line-items-grid__item-payload-options"\n                    :title="$tc(\'sw-order.detailBase.contextMenuShowProduct\')"\n                    :to="{ name: \'sw.product.detail\', params: { id: item.productId } }"\n                >\n                    <sw-product-variant-info :variations="item.payload.options">\n                        <div class="sw-order-line-items-grid__item-label">\n                            {{ item.label }}\n                        </div>\n                    </sw-product-variant-info>\n                </router-link>\n                {% endblock %}\n\n                \n                {% block sw_order_line_items_grid_column_payload_options_linkless %}\n                <div\n                    v-else\n                    class="sw-order-line-items-grid__item-payload-options"\n                >\n                    <span class="sw-order-line-items-grid__item-label">\n                        {{ item.label }}\n                    </span>\n                </div>\n                {% endblock %}\n                {% endblock %}\n\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_label_content %}\n            <template v-else>\n                <span class="sw-order-line-items-grid__item-label">\n                    {{ item.label }}\n                </span>\n            </template>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_unit_price %}\n        <template #column-unitPrice="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_unit_price_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && !itemCreatedFromProduct(item.id)"\n                v-model:value="item.priceDefinition.price"\n                name="sw-field--item-priceDefinition-price"\n                placeholder="0"\n                size="small"\n                :min="getMinItemPrice(item.id)"\n                :digits="order.itemRounding.decimals"\n                @update:value="checkItemPrice($event, item)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_unit_price_content %}\n            <span v-else>{{ currencyFilter(item.unitPrice, order.currency.isoCode, order.itemRounding.decimals) }}</span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_total_price %}\n        <template #column-totalPrice="{ item }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_total_price_content %}\n            <span>\n                {{ currencyFilter(item.totalPrice, order.currency.isoCode, order.itemRounding.decimals) }}\n            </span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_quantity %}\n        <template #column-quantity="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_quantity_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && !isCreditItem(item.id)"\n                v-model:value="item.quantity"\n                name="sw-field--item-quantity"\n                number-type="int"\n                :min="1"\n                size="small"\n                placeholder="0"\n                @update:value="updateItemQuantity(item)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_quantity_content %}\n            <span v-else>\n                {{ item.quantity }} x\n            </span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_columns_tax %}\n\n        <template #column-price.taxRules[0]="{ item, isInlineEdit }">\n\n            \n            {% block sw_order_line_items_grid_grid_columns_tax_inline_edit %}\n            <sw-number-field\n                v-if="isInlineEdit && showTaxRulesInlineEdit(item)"\n                key="order-line-item-tax-edit-default"\n                v-model:value="item.priceDefinition.taxRules[0].taxRate"\n                name="sw-field--item-priceDefinition-taxRules[0]-taxRate"\n                size="small"\n                placeholder="0"\n            />\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_tax_content_tooltip %}\n            <span\n                v-else-if="hasMultipleTaxes(item)"\n                v-tooltip="tooltipTaxDetail(item)"\n                class="sw-order-line-items-grid__item-tax-tooltip"\n            >\n                {{ showTaxValue(item) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_columns_tax_content %}\n            <span v-else-if="item.price && item.price.taxRules.length">\n                {{ showTaxValue(item) }}\n            </span>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_actions %}\n        <template #actions="{ item, itemIndex }">\n            \n            {% block sw_order_line_items_grid_grid_actions_show %}\n            <sw-context-menu-item\n                :disabled="!isProductItem(item) || undefined"\n                :router-link="{ name: \'sw.product.detail\', params: { id: item.productId } }"\n            >\n\n                \n                {% block sw_order_line_items_grid_grid_actions_show_label %}\n                {{ $tc(\'sw-order.detailBase.contextMenuShowProduct\') }}\n                {% endblock %}\n\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_actions_extension %}{% endblock %}\n\n            \n            {% block sw_order_line_items_grid_grid_actions_delete %}\n            <sw-context-menu-item\n                v-tooltip.left="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: editable,\n                    showOnDisabledElements: true\n                }"\n                variant="danger"\n                class="sw_order_line_items_grid-item__delete-action"\n                :disabled="!editable || undefined"\n                @click="onDeleteItem(item, itemIndex)"\n            >\n                \n                {% block sw_order_line_items_grid_grid_actions_delete_label %}\n                {{ $tc(\'sw-order.detailBase.contextMenuDelete\') }}\n                {% endblock %}\n\n            </sw-context-menu-item>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_grid_actions_modals %}\n        <template #action-modals="{ item }">\n            \n            {% block sw_order_line_items_grid_grid_actions_modals_items %}{% endblock %}\n            <sw-modal\n                v-if="showDeleteModal === item.id"\n                class="sw-order-line-items-grid__delete-item-modal"\n                :title="$tc(\'global.default.warning\')"\n                variant="small"\n                @modal-close="onCloseDeleteModal"\n            >\n                <p class="sw-order-list__confirm-delete-text">\n                    {{ $tc(\'sw-order.detailBase.textDeleteLineItemConfirm\', 0, { label: `${item.label}` }) }}\n                </p>\n\n                <template #modal-footer>\n                    <sw-button\n                        size="small"\n                        class="sw_order_line_items_grid-actions_modal__close-action"\n                        @click="onCloseDeleteModal"\n                    >\n                        {{ $tc(\'global.default.cancel\') }}\n                    </sw-button>\n\n                    <sw-button\n                        variant="danger"\n                        size="small"\n\n                        class="sw_order_line_items_grid-actions_modal__confirm-action"\n                        @click="onConfirmDelete(item.id)"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </template>\n            </sw-modal>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_order_line_items_grid_bulk_actions %}\n        <template #bulk>\n\n            \n            {% block sw_order_line_items_grid_bulk_actions_delete %}\n            <a\n                class="link link-danger"\n                role="link"\n                tabindex="0"\n                @click="onDeleteSelectedItems"\n                @keydown.enter="onDeleteSelectedItems"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </a>\n            {% endblock %}\n\n            \n            {% block sw_order_line_items_grid_bulk_actions_extension %}{% endblock %}\n        </template>\n        {% endblock %}\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_order_line_items_nested_line_item_modal %}\n    <sw-order-nested-line-items-modal\n        v-if="nestedLineItemsModal"\n        :line-item="nestedLineItemsModal"\n        :order="order"\n        @modal-close="closeNestedLineItemsModal"\n    />\n    {% endblock %}\n\n</sw-container>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","orderService","acl","feature"],emits:["item-edit","existing-item-edit","item-cancel","item-delete"],props:{order:{type:Object,required:!0},context:{type:Object,required:!0},editable:{type:Boolean,required:!1,default:!0}},data(){return{isLoading:!1,selectedItems:{},searchTerm:"",nestedLineItemsModal:null,showDeleteModal:!1}},computed:{canCreateDiscounts(){return this.acl.can("orders.create_discounts")},orderLineItemRepository(){return this.repositoryFactory.create("order_line_item")},orderLineItems(){if(!this.searchTerm)return this.order.lineItems;let e=this.searchTerm.split(/[\W_]+/ig);return this.order.lineItems.filter(n=>{if(!n.label)return!1;let t=[n.label.toLowerCase()];return this.isProductNumberColumnVisible&&n.payload?.productNumber&&t.push(n.payload.productNumber.toLowerCase()),e.every(e=>t.some(n=>n.includes(e.toLowerCase())))})},lineItemTypes(){return i.S},taxStatus(){return s(this.order,"taxStatus","")},unitPriceLabel(){return"net"===this.taxStatus?this.$tc("sw-order.detailBase.columnPriceNet"):"tax-free"===this.taxStatus?this.$tc("sw-order.detailBase.columnPriceTaxFree"):this.$tc("sw-order.detailBase.columnPriceGross")},getLineItemColumns(){let e=[{property:"quantity",dataIndex:"quantity",label:"sw-order.detailBase.columnQuantity",allowResize:!1,align:"right",inlineEdit:!0,width:"90px"},{property:"label",dataIndex:"label",label:"sw-order.detailBase.columnProductName",allowResize:!1,primary:!0,inlineEdit:!0,multiLine:!0},{property:"payload.productNumber",dataIndex:"payload.productNumber",label:"sw-order.detailBase.columnProductNumber",allowResize:!1,align:"left",visible:!1},{property:"unitPrice",dataIndex:"unitPrice",label:this.unitPriceLabel,allowResize:!1,align:"right",inlineEdit:!0,width:"120px"}];return"tax-free"!==this.taxStatus&&e.push({property:"price.taxRules[0]",label:"sw-order.detailBase.columnTax",allowResize:!1,align:"right",inlineEdit:!0,width:"90px"}),[...e,{property:"totalPrice",dataIndex:"totalPrice",label:"gross"===this.taxStatus?"sw-order.detailBase.columnTotalPriceGross":"sw-order.detailBase.columnTotalPriceNet",allowResize:!1,align:"right",width:"120px"}]},salesChannelId(){return this.order?.salesChannelId??""},isProductNumberColumnVisible(){return this.$refs.dataGrid?.currentColumns.find(e=>"payload.productNumber"===e.property)?.visible},currencyFilter(){return Shopware.Filter.getByName("currency")}},methods:{onInlineEditSave(e){return new Promise(n=>{e.isNew()?e.type===this.lineItemTypes.PRODUCT?this.orderService.addProductToOrder(this.order.id,this.order.versionId,e.identifier,e.quantity).then(e=>{this.$emit("item-edit"),n(e)}):e.type===this.lineItemTypes.CREDIT?this.orderService.addCreditItemToOrder(this.order.id,this.order.versionId,e).then(e=>{this.$emit("item-edit"),n(e)}):this.orderService.addCustomLineItemToOrder(this.order.id,this.order.versionId,e).then(e=>{this.$emit("item-edit"),n(e)}):(this.$emit("existing-item-edit"),n())})},onInlineEditCancel(){this.$emit("item-cancel")},createNewOrderLineItem(){let e=this.orderLineItemRepository.create();return e.versionId=this.order.versionId,e.priceDefinition={isCalculated:!1,taxRules:[{taxRate:0,percentage:100}],price:0},e.price={taxRules:[{taxRate:0}],unitPrice:0,quantity:1,totalPrice:0},e.quantity=1,e.unitPrice="...",e.totalPrice="...",e.precision=2,e.label="",e.payload={productNumber:""},e},onInsertBlankItem(){let e=this.createNewOrderLineItem();e.description="custom line item",e.type=this.lineItemTypes.CUSTOM,this.order.lineItems.unshift(e)},onInsertExistingItem(){let e=this.createNewOrderLineItem();e.type=this.lineItemTypes.PRODUCT,this.order.lineItems.unshift(e)},onInsertCreditItem(){let e=this.createNewOrderLineItem();e.description="credit line item",e.type=this.lineItemTypes.CREDIT,this.order.lineItems.unshift(e)},onSelectionChanged(e){this.selectedItems=e},onDeleteSelectedItems(){let e=[];if(Object.values(this.selectedItems).forEach(n=>{if(n.isNew()){let e=this.order.lineItems.findIndex(e=>n.id===e?.id);this.order.lineItems.splice(e,1);return}e.push(this.orderLineItemRepository.delete(n.id,this.context))}),!e.length){this.selectedItems={},this.$refs.dataGrid.resetSelection();return}Promise.all(e).then(()=>{this.$emit("item-delete"),this.selectedItems={},this.$refs.dataGrid.resetSelection()})},onDeleteItem(e,n){if(e.isNew()){this.order.lineItems.splice(n,1);return}this.showDeleteModal=e.id},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(){this.orderLineItemRepository.delete(this.showDeleteModal,this.context).then(()=>{this.$emit("item-delete")}),this.showDeleteModal=!1},itemCreatedFromProduct(e){let n=this.orderLineItems.find(n=>n.id===e);return n.isNew()&&n.type===this.lineItemTypes.PRODUCT},onSearchTermChange(e){this.searchTerm=e.toLowerCase()},isCreditItem(e){return this.orderLineItems.find(n=>n.id===e).type===this.lineItemTypes.CREDIT},isProductItem(e){return e.type===this.lineItemTypes.PRODUCT},isPromotionItem(e){return e.type===this.lineItemTypes.PROMOTION},isContainerItem(e){return e.type===this.lineItemTypes.CONTAINER},getMinItemPrice(e){return this.isCreditItem(e)?null:0},showTaxValue(e){return(this.isCreditItem(e.id)||this.isPromotionItem(e))&&e.price.taxRules.length>1?this.$tc("sw-order.detailBase.textCreditTax"):`${e.price.taxRules[0].taxRate} %`},checkItemPrice(e,n){if(this.isCreditItem(n.id)){n.priceDefinition.price=-1*Math.abs(e);return}n.priceDefinition.price=e},tooltipTaxDetail(e){let n=[...e.price.calculatedTaxes].sort((e,n)=>e.taxRate-n.taxRate).map(e=>this.$tc("sw-order.detailBase.taxDetail",0,{taxRate:e.taxRate,tax:l.currency(e.tax,this.order.currency.isoCode)}));return{showDelay:300,message:`${this.$tc("sw-order.detailBase.tax")}<br>${n.join("<br>")}`}},openNestedLineItemsModal(e){this.nestedLineItemsModal=e},closeNestedLineItemsModal(){this.nestedLineItemsModal=null},hasChildren(e){return e.children&&e.children.length>0},hasMultipleTaxes(e){return s(e,"price.calculatedTaxes")&&e.price.calculatedTaxes.length>1},updateItemQuantity(e){e.type===this.lineItemTypes.CUSTOM&&(e.priceDefinition.quantity=e.quantity)},showTaxRulesInlineEdit(e){return!this.itemCreatedFromProduct(e.id)&&e.priceDefinition&&e.priceDefinition.taxRules&&!this.isCreditItem(e.id)}}}},263243:function(e,n,t){var i=t(672388);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("10828d76",i,!0,{})}}]);