(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[281],{"6QY8":function(e,t,i){"use strict";i.r(t);var n=i("6lmj"),s=i.n(n),r=(i("yA5Y"),Shopware.Mixin),o=Shopware.Utils,a=o.debounce,l=o.get,c=o.flow;t.default={template:'\n{% block sw_import_export_entity_path_select %}\n<sw-select-base\n    ref="selectBase"\n    class="sw-import-export-entity-path-select"\n    :is-loading="isLoading"\n    v-bind="$attrs"\n    @select-expanded="onSelectExpanded"\n    @select-collapsed="onSelectCollapsed"\n    v-on="$listeners"\n>\n    \n    {% block sw_import_export_entity_path_select_base %}\n    \n    {% block sw_import_export_entity_path_select_base_selection %}\n    <template #sw-select-selection="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">\n        \n        {% block sw_import_export_entity_path_select_base_selection_slot %}\n        <div class="sw-import-export-entity-path-select__selection">\n            \n            {% block sw_import_export_entity_path_select_single_selection_inner %}\n            \n            {% block sw_import_export_entity_path_select_single_selection_inner_label %}\n            <div\n                v-if="!isExpanded"\n                class="sw-import-export-entity-path-select__selection-text"\n                :class="selectionTextClasses"\n            >\n                <template v-if="singleSelection">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item: singleSelection, labelProperty, valueProperty, searchTerm, getKey }"\n                    >\n                        {{ getKey(singleSelection, labelProperty) }}\n                    </slot>\n                </template>\n                <template v-else>\n                    {{ placeholder }}\n                </template>\n            </div>\n            {% endblock %}\n            \n            {% block sw_import_export_entity_path_select_single_selection_inner_input %}\n            \n            <input\n                ref="swSelectInput"\n                v-model="searchInput"\n                class="sw-import-export-entity-path-select__selection-input"\n                :class="inputClasses"\n                type="text"\n                :placeholder="placeholder"\n                @input="onInputSearch"\n            >\n            {% endblock %}\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_import_export_entity_path_select_base_results %}\n    <template #results-list>\n        \n        {% block sw_import_export_entity_path_select_base_results_slot %}\n        <sw-select-result-list\n            ref="resultsList"\n            :options="visibleResults"\n            :is-loading="isLoading"\n            :empty-message="$tc(\'global.sw-single-select.messageNoResults\', 0, { term: searchInput })"\n            :focus-el="$refs.swSelectInput"\n            @paginate="$emit(\'paginate\')"\n            @item-select="setValue"\n        >\n            \n            {% block sw_import_export_entity_path_select_base_results_list %}\n            \n            {% block sw_import_export_entity_path_select_base_results_list_before %}\n            <template #before-item-list>\n                <slot name="before-item-list">\n                    <sw-select-result\n                        :selected="isSelected(notMappedItem)"\n                        v-bind="{ item: notMappedItem, index: -1 }"\n                        @item-select="setValue"\n                    >\n                        \n                        {% block sw_import_export_entity_path_select_base_results_list_not_mapped_label %}\n                        {{ notMappedItem.label }}\n                        {% endblock %}\n                    </sw-select-result>\n                    <hr class="sw-import-export-entity-path-select__listing-seperator">\n                </slot>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_import_export_entity_path_select_base_results_list_result %}\n            <template #result-item="{ item, index }">\n                <slot\n                    name="result-item"\n                    v-bind="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }"\n                >\n                    <sw-select-result\n                        :selected="isSelected(item)"\n                        v-bind="{ item, index }"\n                        @item-select="setValue"\n                    >\n                        \n                        {% block sw_import_export_entity_path_select_base_results_list_result_label %}\n                        <slot\n                            name="result-label-property"\n                            v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, getKey }"\n                        >\n                            <sw-highlight-text\n                                v-if="highlightSearchTerm"\n                                :text="getKey(item, labelProperty)"\n                                :search-term="searchTerm"\n                            />\n                            <template v-else>\n                                {{ getKey(item, labelProperty) }}\n                            </template>\n\n                            <sw-icon\n                                v-if="item.relation && item.relation !== \'many_to_many\'"\n                                name="regular-chevron-right-xxs"\n                                size="16px"\n                            />\n                        </slot>\n                        {% endblock %}\n                    </sw-select-result>\n                </slot>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_import_export_entity_path_select_base_results_list_after %}\n            <template #after-item-list>\n                <slot name="after-item-list"></slot>\n            </template>\n            {% endblock %}\n            {% endblock %}\n        </sw-select-result-list>\n        {% endblock %}\n    </template>\n    {% endblock %}\n    {% endblock %}\n</sw-select-base>\n{% endblock %}\n',inject:["feature"],mixins:[r.getByName("remove-api-error")],model:{prop:"value",event:"change"},props:{value:{required:!0},entityType:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1},highlightSearchTerm:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:""},valueProperty:{type:String,required:!1,default:"value"},searchFunction:{type:Function,required:!1,default:function(e){var t=this,i=e.options,n=e.labelProperty,s=e.searchTerm;return i.filter((function(e){var i=t.getKey(e,n);return!!i&&i.toLowerCase().includes(s.toLowerCase())}))}},currencies:{type:Array,required:!1,default:function(){return[{isoCode:"DEFAULT"}]}},languages:{type:Array,required:!1,default:function(){return[{locale:"DEFAULT"}]}},customFieldSets:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{labelProperty:"label",searchInput:"",actualSearch:"",isExpanded:!1,itemRecentlySelected:!1,priceProperties:["net","gross","currencyId","linked","listPrice.net","listPrice.gross","listPrice.linked"],visibilityProperties:["all","link","search"],notMappedItem:{label:this.$tc("sw-import-export.profile.mapping.notMapped"),relation:void 0,value:""}}},computed:{currentValue:{get:function(){return this.value||""},set:function(e){this.feature.isActive("VUE3")?this.$emit("update:value",e):this.$emit("change",e)}},inputClasses:function(){return{"is--expanded":this.isExpanded}},selectionTextClasses:function(){return{"is--placeholder":!this.singleSelection}},singleSelection:{get:function(){var e=this;return""===this.currentValue||null===this.currentValue?this.notMappedItem:this.results.find((function(t){return e.getKey(t,e.valueProperty)===e.currentValue}))},set:function(e){null===e&&(e=""),this.currentValue=this.getKey(e,this.valueProperty)}},visibleResults:function(){var e=this;if(this.singleSelection){var t=[];this.singleSelection.value!==this.notMappedItem.value&&t.push(this.singleSelection);var i=this.getKey(this.singleSelection,this.valueProperty);return this.results.forEach((function(n){e.getKey(n,e.valueProperty)!==i&&t.push(n)})),t}return this.results},actualPathPrefix:function(){return this.actualPathParts.length>0?this.actualPathParts.join("."):""},actualPathParts:function(){var e=this,t=this.isExpanded&&this.actualSearch?this.actualSearch.split("."):this.currentValue.split(".");return t.splice(-1,1),"customFields"===t[t.length-1]?t:t.filter((function(t){return!e.availableIsoCodes.includes(t)&&(!e.availableLocales.includes(t)&&!("translations"===t||"visibilities"===t||"price"===t||"listPrice"===t||"purchasePrices"===t))}))},currentEntity:function(){if(this.actualPathParts.length<1)return this.entityType;var e=this.actualPathParts;if(0===e.length)return this.entityType;var t=Shopware.EntityDefinition.get(this.entityType),i=!1;return e.forEach((function(e){var n=t.properties[e];if(n&&("translations"!==e||"one_to_many"!==n.relation)&&!("visibilities"===e&&"one_to_many"===n.relation||"media"===e&&"one_to_many"===n.relation||"assignedProducts"===e&&"one_to_many"===n.relation||"lineItems"===e&&"one_to_many"===n.relation||"price"===e&&"json_object"===n.type||"customFields"===e&&"json_object"===n.type)){var s=t.properties[e].entity;(i=Shopware.EntityDefinition.has(s))&&(t=Shopware.EntityDefinition.get(s))}})),i?t.entity:null},processFunctions:function(){return[this.processTranslations,this.processVisibilities,this.processMedia,this.processAssignedProducts,this.processPrice,this.processLineItems,this.processDeliveries,this.processProperties]},options:function(){var e,t="customFields"===this.actualPathParts[this.actualPathParts.length-1];if(null===this.currentEntity&&!t)return[];var i={definition:e=t?{properties:this.getCustomFields(this.currentEntity||this.entityType)}:Shopware.EntityDefinition.get(this.currentEntity),options:[],properties:Object.keys(e.properties),path:this.actualPathPrefix.length>0?this.actualPathPrefix.replace(/\.?$/,"."):this.actualPathPrefix},n=c(this.processFunctions)(i).options;return n.sort(this.sortOptions)},results:function(){return this.searchFunction({options:this.options,labelProperty:this.labelProperty,valueProperty:this.valueProperty,searchTerm:this.searchTerm})},availableIsoCodes:function(){return this.currencies.map((function(e){return e.isoCode}))},availableLocales:function(){return this.languages.map((function(e){return e.locale.code}))},searchTerm:function(){return this.actualSearch.split(".").pop()}},methods:{isSelected:function(e){return this.getKey(e,this.valueProperty)===this.value},onSelectExpanded:function(){var e=this;this.isExpanded=!0,this.searchInput=this.currentValue,this.$nextTick((function(){e.resetActiveItem(),e.$refs.swSelectInput.select(),e.$refs.swSelectInput.focus()}))},tryGetSearchText:function(e){return this.getKey(e,this.labelProperty,"")},onSelectCollapsed:function(){this.$attrs.disabled||(""!==this.searchInput||this.itemRecentlySelected||(this.$emit("before-selection-clear",this.singleSelection,this.value),this.currentValue=""),this.$refs.swSelectInput.blur(),this.searchInput="",this.actualSearch="",this.itemRecentlySelected=!1,this.isExpanded=!1)},closeResultList:function(){this.$refs.selectBase.collapse()},setValue:function(e){if(this.itemRecentlySelected=!0,this.singleSelection=e,e.relation&&"many_to_many"!==e.relation)return this.actualSearch="".concat(e.value,"."),this.searchInput=this.actualSearch,void this.$refs.swSelectInput.select();this.currentValue=e.value,this.closeResultList()},resetActiveItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.$refs.resultsList&&(this.singleSelection&&(e=1),this.$refs.resultsList.setActiveItemIndex(e))},onInputSearch:function(){this.debouncedSearch()},debouncedSearch:a((function(){this.search()}),300),search:function(){var e=this;this.$emit("search",this.searchInput),this.actualSearch=this.searchInput,this.$nextTick((function(){e.resetActiveItem()}))},getKey:function(e,t,i){return l(e,t,i)},processTranslations:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.translations;if(!o||"one_to_many"!==o.relation)return{properties:n,options:i,definition:t,path:r};var a=Shopware.EntityDefinition.get(o.entity),l=Object.keys(a.properties),c=[].concat(s()(i),s()(this.getTranslationProperties(r,l)));return{properties:n.filter((function(e){return!l.includes(e)&&"translations"!==e})),options:c,definition:t,path:r}},getTranslationProperties:function(e,t){e="".concat(e,"translations.");var i=[];return this.availableLocales.forEach((function(n){t.forEach((function(t){var s="".concat(e).concat(n,".").concat(t);"customFields"!==t?i.push({label:s,value:s}):i.push({label:s,value:s,relation:!0})}))})),i},processPrice:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.price;if(!o||"json_object"!==o.type)return{properties:n,options:i,definition:t,path:r};var a=[].concat(s()(i),s()(this.getPriceProperties(r)));return{properties:n.filter((function(e){return"price"!==e&&"purchasePrices"!==e})),options:a,definition:t,path:r}},getPriceProperties:function(e){return[].concat(s()(this.generatePriceProperties("price",e)),s()(this.generatePriceProperties("purchasePrices",e)))},generatePriceProperties:function(e,t){var i=this,n=[];return this.currencies.forEach((function(s){i.priceProperties.forEach((function(i){var r="".concat(t).concat(e,".").concat(s.isoCode,".").concat(i);n.push({label:r,value:r})}))})),n},processLineItems:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.lineItems;if(!o||"one_to_many"!==o.relation)return{definition:t,options:i,properties:n,path:r};var a=[].concat(s()(i),s()(this.generateLineItemProperties(r)));return{properties:n.filter((function(e){return"lineItems"!==e})),options:a,definition:t,path:r}},generateLineItemProperties:function(e){var t="".concat(e,"lineItems");return[{label:t,value:t}]},processDeliveries:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.deliveries;if(!o||"one_to_many"!==o.relation)return{properties:n,options:i,definition:t,path:r};var a=Shopware.EntityDefinition.get(o.entity),l=Object.keys(a.properties),c=[].concat(s()(i),s()(this.generateDeliveryProperties(r,l)));return{properties:n.filter((function(e){return"deliveries"!==e})),options:c,definition:t,path:r}},generateDeliveryProperties:function(e,t){var i=[];return t.forEach((function(t){var n="".concat(e,"deliveries.").concat(t);i.push({value:n,label:n})})),i},processProperties:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=s()(i);return n.forEach((function(e){var i="".concat(r).concat(e),n=t.properties[e];"one_to_many"!==n.relation&&o.push({label:i,value:i,relation:n.relation})})),{definition:t,options:o,properties:n,path:r}},processVisibilities:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.visibilities;if(!o||"one_to_many"!==o.relation)return{properties:n,options:i,definition:t,path:r};var a=[].concat(s()(i),s()(this.getVisibilityProperties(r)));return{properties:n.filter((function(e){return"visibilities"!==e})),options:a,definition:t,path:r}},getVisibilityProperties:function(e){var t=[];return this.visibilityProperties.forEach((function(i){var n="".concat(e,"visibilities.").concat(i);t.push({label:n,value:n})})),t},processMedia:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.media;if(!o||"one_to_many"!==o.relation)return{properties:n,options:i,definition:t,path:r};var a=[].concat(s()(i),s()(this.getMediaProperties(r)));return{properties:n.filter((function(e){return"media"!==e})),options:a,definition:t,path:r}},getMediaProperties:function(e){var t="".concat(e,"media");return[{label:t,value:t}]},processAssignedProducts:function(e){var t=e.definition,i=e.options,n=e.properties,r=e.path,o=t.properties.assignedProducts;if(!o||"one_to_many"!==o.relation)return{properties:n,options:i,definition:t,path:r};var a=[].concat(s()(i),s()(this.getAssignedProductsProperties(r)));return{properties:n.filter((function(e){return"assignedProducts"!==e})),options:a,definition:t,path:r}},getAssignedProductsProperties:function(e){var t="".concat(e,"assignedProducts");return[{label:t,value:t}]},sortOptions:function(e,t){return e.value>t.value?1:t.value>e.value?-1:0},getCustomFields:function(e){var t={};return this.customFieldSets.forEach((function(i){i.relations.filter((function(t){return t.entityName===e})).length>0&&i.customFields.forEach((function(e){t[e.name]={label:e.name,value:e.name}}))})),t}}}},Qqmf:function(e,t,i){},yA5Y:function(e,t,i){var n=i("Qqmf");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("P8hj").default)("64f5303d",n,!0,{})}}]);
//# sourceMappingURL=3f8ab782284330e57dbc.js.map