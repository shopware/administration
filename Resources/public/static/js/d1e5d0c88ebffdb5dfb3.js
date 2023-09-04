(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[382],{bAzK:function(t,s,e){"use strict";e.r(s);var n=e("CsSd"),o=e.n(n);e("ql5A");function i(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,n)}return e}function r(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?i(Object(e),!0).forEach((function(s){o()(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var l=Shopware.Data.Criteria,c=Shopware.Component.getComponentHelper(),a=c.mapState,d=c.mapGetters;s.default={template:'\n{% block sw_product_detail_cross_selling %}\n<div v-if="isLoading">\n    <sw-skeleton />\n    <sw-skeleton />\n</div>\n\n<div\n    v-else\n    class="sw-product-detail-cross-selling"\n>\n    \n    {% block sw_product_detail_cross_selling_items_wrapper %}\n    <template v-if="showCrossSellingCard">\n        \n        {% block sw_product_detail_cross_selling_items %}\n        <ul class="sw-product-detail-cross-selling__cross-selling-list">\n            <sw-product-cross-selling-form\n                v-for="item in product.crossSellings"\n                :key="item.id"\n                :cross-selling="item"\n                :allow-edit="acl.can(\'product.editor\')"\n            />\n        </ul>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_cross_selling_add %}\n        <sw-button\n            v-tooltip="{\n                message: onAddCrossSellingTooltipMessage,\n                disabled: acl.can(\'product.editor\') && isSystemDefaultLanguage,\n                showOnDisabledElements: true\n            }"\n            class="sw-product-detail-cross-selling__add-btn"\n            variant="ghost"\n            :disabled="!acl.can(\'product.editor\') || !isSystemDefaultLanguage"\n            @click="onAddCrossSelling"\n        >\n            {{ $tc(\'sw-product.crossselling.buttonAddCrossSelling\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_empty_state %}\n    <sw-card\n        v-else\n        position-identifier="sw-product-detail-cross-selling-empty-state"\n    >\n        <sw-empty-state\n            :title="$tc(\'sw-product.crossselling.cardTitleCrossSelling\')"\n            :subline="$tc(\'sw-product.crossselling.emptyStateDescription\')"\n            :absolute="false"\n            empty-module\n        >\n            <template #icon>\n                <img\n                    :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset"\n                    :alt="$tc(\'sw-product.crossselling.cardTitleCrossSelling\')"\n                >\n            </template>\n\n            \n            {% block sw_product_detail_empty_state_cross_selling_add %}\n            <template #actions>\n                <sw-button\n                    v-tooltip="{\n                        message: onAddCrossSellingTooltipMessage,\n                        disabled: acl.can(\'product.editor\') && isSystemDefaultLanguage,\n                        showOnDisabledElements: true\n                    }"\n                    variant="ghost"\n                    :disabled="!acl.can(\'product.editor\') || !isSystemDefaultLanguage"\n                    @click="onAddCrossSelling"\n                >\n                    {{ $tc(\'sw-product.crossselling.buttonAddCrossSelling\') }}\n                </sw-button>\n            </template>\n            {% endblock %}\n        </sw-empty-state>\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{allowEdit:{type:Boolean,required:!1,default:!0}},data:function(){return{crossSelling:null}},computed:r(r(r(r({},a("swProductDetail",["product"])),d("swProductDetail",["isLoading"])),d("context",["isSystemDefaultLanguage"])),{},{showCrossSellingCard:function(){return!this.isLoading&&this.product.crossSellings&&this.product.crossSellings.length>0},onAddCrossSellingTooltipMessage:function(){return this.isSystemDefaultLanguage?this.$tc("sw-privileges.tooltip.warning"):this.$tc("sw-product.crossselling.buttonAddCrossSellingLanguageWarning")}}),watch:{product:function(t){var s=this;t.crossSellings.forEach((function(t){t.assignedProducts.length>0||s.loadAssignedProducts(t)}))}},methods:{loadAssignedProducts:function(t){var s=this.repositoryFactory.create(t.assignedProducts.entity,t.assignedProducts.source),e=new l(1,25);return e.addFilter(l.equals("crossSellingId",t.id)).addSorting(l.sort("position","ASC")).addAssociation("product"),s.search(e,r(r({},Shopware.Context.api),{},{inheritance:!0})).then((function(s){t.assignedProducts=s})),t},onAddCrossSelling:function(){var t=this.repositoryFactory.create(this.product.crossSellings.entity,this.product.crossSellings.source);this.crossSelling=t.create(),this.crossSelling.productId=this.product.id,this.crossSelling.position=this.product.crossSellings.length+1,this.crossSelling.type="productStream",this.crossSelling.sortBy="name",this.crossSelling.sortDirection="ASC",this.crossSelling.limit=24,this.product.crossSellings.push(this.crossSelling)}}}},ql5A:function(t,s,e){var n=e("ysf+");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e("P8hj").default)("fa1a4e64",n,!0,{})},"ysf+":function(t,s,e){}}]);