(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[373],{LFWJ:function(n,i,t){var e=t("eUgt");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,t("P8hj").default)("63a71098",e,!0,{})},eUgt:function(n,i,t){},ew3W:function(n,i,t){"use strict";t.r(i);var e=t("6lmj"),r=t.n(e),a=t("CsSd"),s=t.n(a);t("LFWJ");function o(n,i){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),t.push.apply(t,e)}return t}function d(n){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){s()(n,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))}))}return n}var l=Shopware.Data.Criteria;i.default={template:'\n{% block sw_product_variants_delivery_listing %}\n<div class="sw-product-variants-delivery-listing">\n    \n    {% block sw_product_variants_delivery_listing_mode %}\n    <div class="sw-product-variants-delivery-listing-mode">\n        \n        {% block sw_product_variants_delivery_listing_mode_selection %}\n        <sw-radio-field\n            :value="product.listingMode"\n            :options="listingModeOptions"\n            @change="updateListingMode"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_delivery_listing_config %}\n    <div class="sw-product-variants-delivery-listing-config">\n\n        \n        {% block sw_product_variants_delivery_listing_config_single %}\n        <div\n            class="sw-product-variants-delivery-listing-config-options"\n            :class="{ \'is--disabled\': isDisabledListingMode(\'single\') }"\n        >\n\n            \n            {% block sw_product_variants_delivery_variant_mode_selection %}\n            <sw-radio-field\n                class="sw-product-variants-delivery-listing_variant-selection"\n                :value="product.variantListingConfig.displayParent"\n                :options="mainVariantModeOptions"\n                :disabled="isDisabledListingMode(\'single\')"\n                @change="updateVariantMode"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_variants_delivery_listing_config_single_main_variant_label %}\n            <p>{{ $tc(\'sw-product.variations.deliveryModal.listingLabelMainVariant\') }}</p>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_delivery_listing_config_single_main_variant_select %}\n            <sw-entity-single-select\n                id="mainVariant"\n                :key="product.id"\n                class="sw-product-variants-delivery-listing_entity-select"\n                :value="mainVariant"\n                entity="product"\n                label-property="name"\n                :criteria="variantCriteria"\n                :context="context"\n                :disabled="isDisabledListingMode(\'single\')"\n                :placeholder="$tc(\'sw-product.variations.deliveryModal.listingPlaceholderSelectMainVariant\')"\n                show-clearable-button\n                @change="updateMainVariant"\n                @select-collapsed="onSelectCollapsed"\n                @search-term-change="onSearchTermChange"\n            >\n                <template #selection-label-property="{ item }">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item }"\n                    >\n                        <sw-product-variant-info\n                            :variations="item.variation"\n                        >\n                            {{ item.name || item.translated.name }}\n                        </sw-product-variant-info>\n                    </slot>\n                </template>\n\n                <template #result-item="{ item, index }">\n                    <slot\n                        name="result-item"\n                        v-bind="{ item, index, isSelected }"\n                    >\n                        <li\n                            is="sw-select-result"\n                            :selected="isSelected(item)"\n                            v-bind="{ item, index }"\n                        >\n                            \n                            {% block sw_product_variants_results_list_result_label %}\n                            <span class="sw-select-result__result-item-text">\n                                <sw-product-variant-info\n                                    :variations="item.variation"\n                                >\n                                    {{ item.translated.name || item.name }}\n                                </sw-product-variant-info>\n                            </span>\n                            {% endblock %}\n                        </li>\n                    </slot>\n                </template>\n            </sw-entity-single-select>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_delivery_listing_config_single_main_variant_explanation %}\n            <div class="sw-product-variants-delivery-listing__option-explanation">\n                <p v-if="product.variantListingConfig.displayParent">\n                    {{ $tc(\'sw-product.variations.deliveryModal.listingExplanationModeMainProduct\') }}\n                </p>\n                <p v-else>\n                    {{ $tc(\'sw-product.variations.deliveryModal.listingExplanationModeSingle\') }}\n                </p>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_product_variants_delivery_listing_config_expanded %}\n        <div\n            class="sw-product-variants-delivery-listing-config-options"\n            :class="{ \'is--disabled\': isDisabledListingMode(\'expanded\') }"\n        >\n            \n            {% block sw_product_variants_delivery_listing_config_expanded_group_list %}\n            <dl>\n                \n                {% block sw_product_variants_delivery_listing_config_expanded_group_list_items %}\n                <dd\n                    v-for="group in selectedGroupsSorted"\n                    :key="group.id"\n                    :disabled="isDisabledListingMode(\'expanded\')"\n                    class="sw-product-variants-delivery-listing__groupElement"\n                >\n                    \n                    {% block sw_product_variants_delivery_listing_config_expanded_group_list_item %}\n                    <sw-checkbox-field\n                        :value="isActiveGroupInListing(group.id)"\n                        :disabled="isDisabledListingMode(\'expanded\')"\n                        :label="group.translated.name"\n                        @change="onChangeGroupListing($event, group.id)"\n                    />\n                    {% endblock %}\n                </dd>\n                {% endblock %}\n            </dl>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data:function(){return{searchTerm:""}},computed:{listingModeOptions:function(){return[{value:"single",name:this.$tc("sw-product.variations.deliveryModal.listingLabelModeSingle")},{value:"expanded",name:this.$tc("sw-product.variations.deliveryModal.listingLabelModeExpanded")}]},listingMode:function(){return this.mainVariant||!0===this.product.variantListingConfig.displayParent?"single":"expanded"},mainVariantModeOptions:function(){return[{value:!0,name:this.$tc("sw-product.variations.deliveryModal.listingLabelModeDisplayParent")},{value:!1,name:this.$tc("sw-product.variations.deliveryModal.listingLabelMainVariant")}]},mainVariant:function(){return this.product.variantListingConfig.mainVariantId},variantCriteria:function(){var n=new l(1,25);return n.addFilter(l.equals("product.parentId",this.product.id)),n.addAssociation("options.group"),"string"==typeof this.searchTerm&&this.searchTerm.length>0&&n.addQuery(l.contains("product.options.name",this.searchTerm),500),n},context:function(){var n=d(d({},Shopware.Context.api),{},{inheritance:!0});return n},selectedGroupsSorted:function(){var n=[],i=r()(this.selectedGroups);return this.product.variantListingConfig.configuratorGroupConfig&&this.product.variantListingConfig.configuratorGroupConfig.length>0&&(n=this.product.variantListingConfig.configuratorGroupConfig.reduce((function(n,t){var e=i.find((function(n){return n.id===t.id}));return e&&(n.push(e),i.splice(i.indexOf(e),1)),n}),[])),n=[].concat(r()(n),r()(i))}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.updateListingMode(this.listingMode)},updateListingMode:function(n){"expanded"===n&&(this.product.variantListingConfig.displayParent=!0),this.product.listingMode=n},updateVariantMode:function(n){this.product.variantListingConfig.displayParent=n},updateMainVariant:function(n){this.product.variantListingConfig.mainVariantId=n},isActiveGroupInListing:function(n){var i;if(!((null===(i=this.product.variantListingConfig)||void 0===i?void 0:i.configuratorGroupConfig)||[]).length)return!1;var t=this.product.variantListingConfig.configuratorGroupConfig.find((function(i){return i.id===n}));return!!t&&t.expressionForListings},onChangeGroupListing:function(n,i){var t,e=(null===(t=this.product.variantListingConfig)||void 0===t?void 0:t.configuratorGroupConfig)||[],r=e.find((function(n){return n.id===i}));r?r.expressionForListings=n:(e.push({id:i,expressionForListings:n,representation:"box"}),this.product.variantListingConfig.configuratorGroupConfig=e)},isActiveListingMode:function(n){return n===this.product.listingMode},isDisabledListingMode:function(n){return!this.isActiveListingMode(n)},isSelected:function(n){return this.mainVariant===n.id},onSearchTermChange:function(n){this.searchTerm=n},onSelectCollapsed:function(){this.searchTerm=""}}}}}]);