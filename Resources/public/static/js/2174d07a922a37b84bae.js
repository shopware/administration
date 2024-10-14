(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[36814],{900937:function(){},736814:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}}),s(14140);let{Mixin:i}=Shopware,{debounce:r,get:n,flow:l}=Shopware.Utils;var a={template:'\n{% block sw_import_export_entity_path_select %}\n<sw-select-base\n    ref="selectBase"\n    class="sw-import-export-entity-path-select"\n    :is-loading="isLoading"\n    v-bind="$attrs"\n    @select-expanded="onSelectExpanded"\n    @select-collapsed="onSelectCollapsed"\n    v-on="listeners"\n>\n    \n    {% block sw_import_export_entity_path_select_base %}\n    \n    {% block sw_import_export_entity_path_select_base_selection %}\n    <template #sw-select-selection="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">\n        \n        {% block sw_import_export_entity_path_select_base_selection_slot %}\n        <div class="sw-import-export-entity-path-select__selection">\n            \n            {% block sw_import_export_entity_path_select_single_selection_inner %}\n            \n            {% block sw_import_export_entity_path_select_single_selection_inner_label %}\n            <div\n                v-if="!isExpanded"\n                class="sw-import-export-entity-path-select__selection-text"\n                :class="selectionTextClasses"\n            >\n                <template v-if="singleSelection">\n                    <slot\n                        name="selection-label-property"\n                        v-bind="{ item: singleSelection, labelProperty, valueProperty, searchTerm, getKey }"\n                    >\n                        {{ getKey(singleSelection, labelProperty) }}\n                    </slot>\n                </template>\n                <template v-else>\n                    {{ placeholder }}\n                </template>\n            </div>\n            {% endblock %}\n            \n            {% block sw_import_export_entity_path_select_single_selection_inner_input %}\n            \n            <input\n                ref="swSelectInput"\n                v-model="searchInput"\n                class="sw-import-export-entity-path-select__selection-input"\n                :class="inputClasses"\n                type="text"\n                :placeholder="placeholder"\n                @input="onInputSearch"\n            >\n            {% endblock %}\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_import_export_entity_path_select_base_results %}\n    <template #results-list>\n        \n        {% block sw_import_export_entity_path_select_base_results_slot %}\n        <sw-select-result-list\n            ref="resultsList"\n            :options="visibleResults"\n            :is-loading="isLoading"\n            :empty-message="$tc(\'global.sw-single-select.messageNoResults\', 0, { term: searchInput })"\n            :focus-el="$refs.swSelectInput"\n            :popover-classes="resultListClasses"\n            @paginate="$emit(\'paginate\')"\n            @item-select="setValue"\n        >\n            \n            {% block sw_import_export_entity_path_select_base_results_list %}\n            \n            {% block sw_import_export_entity_path_select_base_results_list_before %}\n            <template #before-item-list>\n                <slot name="before-item-list">\n                    <sw-select-result\n                        :selected="isSelected(notMappedItem)"\n                        v-bind="{ item: notMappedItem, index: -1 }"\n                        @item-select="setValue"\n                    >\n                        \n                        {% block sw_import_export_entity_path_select_base_results_list_not_mapped_label %}\n                        {{ notMappedItem.label }}\n                        {% endblock %}\n                    </sw-select-result>\n                    <hr class="sw-import-export-entity-path-select__listing-seperator">\n                </slot>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_import_export_entity_path_select_base_results_list_result %}\n            <template #result-item="{ item, index }">\n                <slot\n                    name="result-item"\n                    v-bind="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }"\n                >\n                    <sw-select-result\n                        :selected="isSelected(item)"\n                        v-bind="{ item, index }"\n                        @item-select="setValue"\n                    >\n                        \n                        {% block sw_import_export_entity_path_select_base_results_list_result_label %}\n                        <slot\n                            name="result-label-property"\n                            v-bind="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, getKey }"\n                        >\n                            <sw-highlight-text\n                                v-if="highlightSearchTerm"\n                                :text="getKey(item, labelProperty)"\n                                :search-term="searchTerm"\n                            />\n                            <template v-else>\n                                {{ getKey(item, labelProperty) }}\n                            </template>\n\n                            <sw-icon\n                                v-if="item.relation && item.relation !== \'many_to_many\'"\n                                name="regular-chevron-right-xxs"\n                                size="16px"\n                            />\n                        </slot>\n                        {% endblock %}\n                    </sw-select-result>\n                </slot>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_import_export_entity_path_select_base_results_list_after %}\n            <template #after-item-list>\n                <slot name="after-item-list"></slot>\n            </template>\n            {% endblock %}\n            {% endblock %}\n        </sw-select-result-list>\n        {% endblock %}\n    </template>\n    {% endblock %}\n    {% endblock %}\n</sw-select-base>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["feature"],emits:["paginate","update:value","before-selection-clear","search"],mixins:[i.getByName("remove-api-error")],props:{value:{required:!0},entityType:{type:String,required:!0},isLoading:{type:Boolean,required:!1,default:!1},highlightSearchTerm:{type:Boolean,required:!1,default:!0},placeholder:{type:String,required:!1,default:""},valueProperty:{type:String,required:!1,default:"value"},searchFunction:{type:Function,required:!1,default({options:e,labelProperty:t,searchTerm:s}){return e.filter(e=>{let i=this.getKey(e,t);return!!i&&(!s||(this.actualPathPrefix?!!i.split(this.actualPathPrefix)[1].match(RegExp(s.split(this.actualPathPrefix)[1].replaceAll(/\./g,"([-.\\w]*)"),"gi")):i.match(RegExp(s.replaceAll(/\./g,"([-.\\w]*)"),"gi"))))})}},currencies:{type:Array,required:!1,default(){return[{isoCode:"DEFAULT"}]}},languages:{type:Array,required:!1,default(){return[{locale:{code:"DEFAULT"}}]}},customFieldSets:{type:Array,required:!1,default(){return[]}}},data(){return{labelProperty:"label",searchInput:"",actualSearch:"",isExpanded:!1,itemRecentlySelected:!1,priceProperties:["net","gross","currencyId","linked","listPrice.net","listPrice.gross","listPrice.linked"],visibilityProperties:["all","link","search"],notMappedItem:{label:this.$t("sw-import-export.profile.mapping.notMapped"),relation:void 0,value:""}}},computed:{currentValue:{get(){return this.value||""},set(e){this.$emit("update:value",e)}},inputClasses(){return{"is--expanded":this.isExpanded}},selectionTextClasses(){return{"is--placeholder":!this.singleSelection}},resultListClasses(){return["sw-import-export-entity-path-select__result-list"]},singleSelection:{get(){return""===this.currentValue||null===this.currentValue?this.notMappedItem:this.results.find(e=>this.getKey(e,this.valueProperty)===this.currentValue)},set(e){null===e&&(e=""),this.currentValue=this.getKey(e,this.valueProperty)}},visibleResults(){if(this.singleSelection){let e=[];this.singleSelection.value!==this.notMappedItem.value&&e.push(this.singleSelection);let t=this.getKey(this.singleSelection,this.valueProperty);return this.results.forEach(s=>{this.getKey(s,this.valueProperty)!==t&&e.push(s)}),e}return this.results},actualPathPrefix(){let e="",t=this.entityType;return this.actualPathParts.forEach(s=>{if(!t)return;if("customFields"===s||this.lowerCaseIsoCodes.includes(s.toLowerCase())||this.lowerCaseLocales.includes(s.toLowerCase())){e=e.concat(s,".");return}let i=Shopware.EntityDefinition.get(t);if(!i.properties[s]?.entity){t="";return}e=e.concat(s,"."),t=i.properties[s].entity}),e},actualPathParts(){let e=this.isExpanded?this.actualSearch.split("."):this.currentValue.split(".");return(e.splice(-1,1),"customFields"===e[e.length-1])?e:e.filter(e=>!(this.lowerCaseIsoCodes.includes(e.toLowerCase())||this.lowerCaseLocales.includes(e.toLowerCase()))&&!["translations","visibilities","price","listPrice","purchasePrices"].includes(e))},currentEntity(){if(0===this.actualPathParts.length)return this.entityType;let e=this.actualPathParts,t=Shopware.EntityDefinition.get(this.entityType),s=!1;return(e.forEach(e=>{let i=t.properties[e];if(!i||"translations"===e&&"one_to_many"===i.relation||"visibilities"===e&&"one_to_many"===i.relation||"media"===e&&"one_to_many"===i.relation||"assignedProducts"===e&&"one_to_many"===i.relation||"lineItems"===e&&"one_to_many"===i.relation||"categories"===e&&"many_to_many"===i.relation||"price"===e&&"json_object"===i.type||"customFields"===e&&"json_object"===i.type)return;let r=t.properties[e].entity;(s=Shopware.EntityDefinition.has(r))&&(t=Shopware.EntityDefinition.get(r))}),s)?t.entity:null},processFunctions(){return[this.processTranslations,this.processVisibilities,this.processMedia,this.processAssignedProducts,this.processPrice,this.processLineItems,this.processTransactions,this.processDeliveries,this.processProperties,this.processCategories]},options(){let e;let t="customFields"===this.actualPathParts[this.actualPathParts.length-1];if(null===this.currentEntity&&!t)return[];let s={definition:e=t?{properties:this.getCustomFields(this.currentEntity||this.entityType)}:Shopware.EntityDefinition.get(this.currentEntity),options:[],properties:Object.keys(e.properties),path:this.actualPathPrefix},{options:i}=l(this.processFunctions)(s);return i.sort(this.sortOptions)},results(){return this.searchFunction({options:this.options,labelProperty:this.labelProperty,valueProperty:this.valueProperty,searchTerm:this.actualSearch})},availableIsoCodes(){return this.currencies.map(e=>e.isoCode)},lowerCaseIsoCodes(){return this.availableIsoCodes.map(e=>e.toLowerCase())},availableLocales(){return this.languages.map(e=>e.locale.code)},lowerCaseLocales(){return this.availableLocales.map(e=>e.toLowerCase())},searchTerm(){return this.actualSearch.split(".").pop()},listeners(){return this.isCompatEnabled("INSTANCE_LISTENERS")?this.$listeners:{}}},methods:{isSelected(e){return this.getKey(e,this.valueProperty)===this.value},onSelectExpanded(){this.isExpanded=!0,this.searchInput=this.currentValue,this.$nextTick(()=>{this.resetActiveItem(),this.$refs.swSelectInput.select(),this.$refs.swSelectInput.focus(),this.search()})},tryGetSearchText(e){return this.getKey(e,this.labelProperty,"")},onSelectCollapsed(){this.$attrs.disabled||(""!==this.searchInput||this.itemRecentlySelected||(this.$emit("before-selection-clear",this.singleSelection,this.value),this.currentValue=""),this.$refs.swSelectInput.blur(),this.searchInput="",this.actualSearch="",this.itemRecentlySelected=!1,this.isExpanded=!1)},closeResultList(){this.$refs.selectBase.collapse()},setValue(e){if(this.itemRecentlySelected=!0,this.singleSelection=e,e.relation&&"many_to_many"!==e.relation){this.actualSearch=`${e.value}.`,this.searchInput=this.actualSearch,this.$refs.swSelectInput.select();return}this.currentValue=e.value,this.closeResultList()},resetActiveItem(e=0){this.$refs.resultsList&&(this.singleSelection&&(e=1),this.$refs.resultsList.setActiveItemIndex(e))},onInputSearch(){this.debouncedSearch()},debouncedSearch:r(function(){this.search()},300),search(){this.$emit("search",this.searchInput),this.actualSearch=this.searchInput,this.$nextTick(()=>{this.resetActiveItem()})},getKey(e,t,s){return n(e,t,s)},processTranslations({definition:e,options:t,properties:s,path:i}){let r=e.properties.translations;if(!r||"one_to_many"!==r.relation)return{properties:s,options:t,definition:e,path:i};let n=Object.keys(Shopware.EntityDefinition.get(r.entity).properties),l=[...t,...this.getTranslationProperties(i,n)];return{properties:s.filter(e=>!n.includes(e)&&"translations"!==e),options:l,definition:e,path:i}},getTranslationProperties(e,t){e=`${e}translations.`;let s=[];return this.availableLocales.forEach(i=>{t.forEach(t=>{let r=`${e}${i}.${t}`;if("customFields"===t){s.push({label:r,value:r,relation:!0});return}s.push({label:r,value:r})})}),s},processPrice({definition:e,options:t,properties:s,path:i}){let r=e.properties.price;if(!r||"json_object"!==r.type)return{properties:s,options:t,definition:e,path:i};let n=[...t,...this.getPriceProperties(i)];return{properties:s.filter(e=>"price"!==e&&"purchasePrices"!==e),options:n,definition:e,path:i}},getPriceProperties(e){return[...this.generatePriceProperties("price",e),...this.generatePriceProperties("purchasePrices",e)]},generatePriceProperties(e,t){let s=[];return this.currencies.forEach(i=>{this.priceProperties.forEach(r=>{let n=`${t}${e}.${i.isoCode}.${r}`;s.push({label:n,value:n})})}),s},processLineItems({definition:e,options:t,properties:s,path:i}){let r=e.properties.lineItems;if(!r||"one_to_many"!==r.relation)return{definition:e,options:t,properties:s,path:i};let n=[...t,...this.generateLineItemProperties(i)];return{properties:s.filter(e=>"lineItems"!==e),options:n,definition:e,path:i}},generateLineItemProperties(e){let t=`${e}lineItems`;return[{label:t,value:t}]},processTransactions({definition:e,options:t,properties:s,path:i}){let r=e.properties.transactions;if(!r||"one_to_many"!==r.relation)return{definition:e,options:t,properties:s,path:i};let n=Object.keys(Shopware.EntityDefinition.get(r.entity).properties),l=[...t,...this.generateTransactionsProperties(i,n)];return{properties:s.filter(e=>"transactions"!==e),options:l,definition:e,path:i}},generateTransactionsProperties(e,t){return t.reduce((t,s)=>{let i=`${e}transactions.${s}`;return t.push({value:i,label:i}),t},[])},processDeliveries({definition:e,options:t,properties:s,path:i}){let r=e.properties.deliveries;if(!r||"one_to_many"!==r.relation)return{properties:s,options:t,definition:e,path:i};let n=Object.keys(Shopware.EntityDefinition.get(r.entity).properties),l=[...t,...this.generateDeliveryProperties(i,n)];return{properties:s.filter(e=>"deliveries"!==e),options:l,definition:e,path:i}},generateDeliveryProperties(e,t){return t.reduce((t,s)=>{let i=`${e}deliveries.${s}`;return t.push({value:i,label:i}),t},[])},processProperties({definition:e,options:t,properties:s,path:i}){let r=[...t];return s.forEach(t=>{let s=`${i}${t}`,n=e.properties[t];"one_to_many"!==n.relation&&r.push({label:s,value:s,relation:n.relation})}),{definition:e,options:r,properties:s,path:i}},processVisibilities({definition:e,options:t,properties:s,path:i}){let r=e.properties.visibilities;if(!r||"one_to_many"!==r.relation)return{properties:s,options:t,definition:e,path:i};let n=[...t,...this.getVisibilityProperties(i)];return{properties:s.filter(e=>"visibilities"!==e),options:n,definition:e,path:i}},getVisibilityProperties(e){return this.visibilityProperties.reduce((t,s)=>{let i=`${e}visibilities.${s}`;return t.push({label:i,value:i}),t},[])},processMedia({definition:e,options:t,properties:s,path:i}){let r=e.properties.media;if(!r||"one_to_many"!==r.relation)return{properties:s,options:t,definition:e,path:i};let n=[...t,...this.getMediaProperties(i)];return{properties:s.filter(e=>"media"!==e),options:n,definition:e,path:i}},getMediaProperties(e){let t=`${e}media`;return[{label:t,value:t}]},processAssignedProducts({definition:e,options:t,properties:s,path:i}){let r=e.properties.assignedProducts;if(!r||"one_to_many"!==r.relation)return{properties:s,options:t,definition:e,path:i};let n=[...t,...this.getAssignedProductsProperties(i)];return{properties:s.filter(e=>"assignedProducts"!==e),options:n,definition:e,path:i}},getAssignedProductsProperties(e){let t=`${e}assignedProducts`;return[{label:t,value:t}]},processCategories({definition:e,options:t,properties:s,path:i}){let r=e.properties.categories;if(r?.relation!=="one_to_many")return{properties:s,options:t,definition:e,path:i};let n=[...t,...this.getCategoryProperties(i)];return{properties:s.filter(e=>"categories"!==e),options:n,definition:e,path:i}},getCategoryProperties(e){let t=`${e}categories`;return[{label:t,value:t}]},sortOptions(e,t){return e.value>t.value?1:t.value>e.value?-1:0},getCustomFields(e){let t={};return this.customFieldSets.forEach(s=>{s.relations.filter(t=>t.entityName===e).length>0&&s.customFields.forEach(e=>{t[e.name]={label:e.name,value:e.name}})}),t}}}},14140:function(e,t,s){var i=s(900937);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),s(745346).Z("678ec190",i,!0,{})}}]);