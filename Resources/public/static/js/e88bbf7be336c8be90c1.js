(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9011],{71785:function(){},9011:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var i=n(70881);n(59042);let{Service:r}=Shopware,{Criteria:s}=Shopware.Data;var a={template:'\n{% block sw_order_product_select %}\n<span class="sw-order-product-select">\n    \n    {% block sw_order_product_select_blank_item %}\n    <sw-text-field\n        v-if="isShownItemLabelInput"\n        v-model:value="item.label"\n        v-bind="$attrs"\n        size="small"\n        :placeholder="$tc(\'sw-order.detailBase.columnProductName\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_product_select_existing_product %}\n    \n    <sw-entity-single-select\n        v-else-if="isShownProductSelect"\n        v-model:value="product"\n        class="sw-order-product-select__single-select"\n        :context="contextWithInheritance"\n        :criteria="productCriteria"\n        entity="product"\n        size="small"\n        show-clearable-button\n        @update:value="onItemChanged"\n    >\n        <template #selection-label-property="{ item }">\n            <slot\n                name="selection-label-property"\n                v-bind="{ item }"\n            >\n                \n                {% block sw_order_product_select_results_variant_info %}\n                <sw-product-variant-info :variations="item.variation">\n                    {{ item.translated.name || item.name }}\n                </sw-product-variant-info>\n                {% endblock %}\n            </slot>\n        </template>\n\n        <template #result-item="{ item, index }">\n            <slot\n                name="result-item"\n                v-bind="{ item, index }"\n            >\n                <sw-select-result\n                    v-bind="{ item, index }"\n                >\n                    \n                    {% block sw_order_product_select_results_list_result_label %}\n                    <sw-product-variant-info :variations="item.variation">\n                        {{ item.translated.name || item.name }}\n                    </sw-product-variant-info>\n                    {% endblock %}\n                </sw-select-result>\n            </slot>\n        </template>\n    </sw-entity-single-select>\n    {% endblock %}\n\n    \n    {% block sw_order_product_show_product %}\n    <template v-else>\n        <span class="sw-order-product-select__label">\n            {{ item.label }}\n        </span>\n    </template>\n    {% endblock %}\n</span>\n{% endblock %}\n',props:{item:{type:Object,required:!0},salesChannelId:{type:String,required:!0,default:""},taxStatus:{type:String,required:!0,default:""}},data(){return{product:null}},computed:{productRepository(){return r("repositoryFactory").create("product")},lineItemTypes(){return i.S},lineItemPriceTypes(){return i.F},isShownProductSelect(){return this.item._isNew&&this.item.type===this.lineItemTypes.PRODUCT},isShownItemLabelInput(){return this.item.type!==this.lineItemTypes.PRODUCT},contextWithInheritance(){return{...Shopware.Context.api,inheritance:!0}},productCriteria(){let e=new s(1,25);return e.addAssociation("options.group"),e.addFilter(s.multi("OR",[s.equals("childCount",0),s.equals("childCount",null)])),e.addFilter(s.equals("visibilities.salesChannelId",this.salesChannelId)),e.addFilter(s.equals("active",!0)),e}},methods:{onItemChanged(e){this.productRepository.get(e,this.contextWithInheritance).then(e=>{this.item.identifier=e.id,this.item.label=e.name,this.item.priceDefinition.price="gross"===this.taxStatus?e.price[0].gross:e.price[0].net,this.item.priceDefinition.type=this.lineItemPriceTypes.QUANTITY,this.item.price.taxRules[0].taxRate=e.tax.taxRate,this.item.price.unitPrice="...",this.item.price.totalPrice="...",this.item.price.quantity=1,this.item.unitPrice="...",this.item.totalPrice="...",this.item.precision=2,this.item.priceDefinition.taxRules[0].taxRate=e.tax.taxRate})}}}},59042:function(e,t,n){var i=n(71785);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(45346).Z("cb70e49a",i,!0,{})}}]);