(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[328],{NssO:function(e,t,n){},"p9+p":function(e,t,n){var i=n("NssO");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("ydqr").default)("6e3d721e",i,!0,{})},tu1G:function(e,t,n){"use strict";n.r(t);var i=n("J58c"),r=n.n(i),o=n("Z8ce");n("p9+p");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a=Shopware.Service,l=Shopware.Data.Criteria;t.default={template:'\n{% block sw_order_product_select %}\n<span class="sw-order-product-select">\n    \n    {% block sw_order_product_select_blank_item %}\n    <sw-text-field\n        v-if="isShownItemLabelInput"\n        v-model="item.label"\n        size="small"\n        :placeholder="$tc(\'sw-order.detailBase.columnProductName\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_product_select_existing_product %}\n    \n    <sw-entity-single-select\n        v-else-if="isShownProductSelect"\n        v-model="product"\n        class="sw-order-product-select__single-select"\n        :context="contextWithInheritance"\n        :criteria="productCriteria"\n        entity="product"\n        size="small"\n        show-clearable-button\n        @change="onItemChanged"\n    >\n        <template #selection-label-property="{ item }">\n            <slot\n                name="selection-label-property"\n                v-bind="{ item }"\n            >\n                \n                {% block sw_order_product_select_results_variant_info %}\n                <sw-product-variant-info :variations="item.variation">\n                    {{ item.translated.name || item.name }}\n                </sw-product-variant-info>\n                {% endblock %}\n            </slot>\n        </template>\n\n        <template #result-item="{ item, index }">\n            <slot\n                name="result-item"\n                v-bind="{ item, index }"\n            >\n                <li\n                    is="sw-select-result"\n                    v-bind="{ item, index }"\n                >\n                    \n                    {% block sw_order_product_select_results_list_result_label %}\n                    <sw-product-variant-info :variations="item.variation">\n                        {{ item.translated.name || item.name }}\n                    </sw-product-variant-info>\n                    {% endblock %}\n                </li>\n            </slot>\n        </template>\n    </sw-entity-single-select>\n    {% endblock %}\n\n    \n    {% block sw_order_product_show_product %}\n    <template v-else>\n        <span class="sw-order-product-select__label">\n            {{ item.label }}\n        </span>\n    </template>\n    {% endblock %}\n</span>\n{% endblock %}\n',props:{item:{type:Object,required:!0},salesChannelId:{type:String,required:!0,default:""},taxStatus:{type:String,required:!0,default:""}},data:function(){return{product:null}},computed:{productRepository:function(){return a("repositoryFactory").create("product")},lineItemTypes:function(){return o.a},lineItemPriceTypes:function(){return o.b},isShownProductSelect:function(){return this.item._isNew&&this.item.type===this.lineItemTypes.PRODUCT},isShownItemLabelInput:function(){return this.item.type!==this.lineItemTypes.PRODUCT},contextWithInheritance:function(){return c(c({},Shopware.Context.api),{},{inheritance:!0})},productCriteria:function(){var e=new l(1,25);return e.addAssociation("options.group"),e.addFilter(l.multi("OR",[l.equals("product.childCount",0),l.equals("product.childCount",null)])),e.addFilter(l.equals("product.visibilities.salesChannelId",this.salesChannelId)),e}},methods:{onItemChanged:function(e){var t=this;this.productRepository.get(e,this.contextWithInheritance).then((function(e){t.item.identifier=e.id,t.item.label=e.name,t.item.priceDefinition.price="gross"===t.taxStatus?e.price[0].gross:e.price[0].net,t.item.priceDefinition.type=t.lineItemPriceTypes.QUANTITY,t.item.price.taxRules[0].taxRate=e.tax.taxRate,t.item.price.unitPrice="...",t.item.price.totalPrice="...",t.item.price.quantity=1,t.item.unitPrice="...",t.item.totalPrice="...",t.item.precision=2,t.item.priceDefinition.taxRules[0].taxRate=e.tax.taxRate}))}}}}}]);