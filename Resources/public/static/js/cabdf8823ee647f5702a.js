(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[183],{"4Tp0":function(e,t,n){var i=n("x2v4");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("cea70694",i,!0,{})},"V7+W":function(e,t,n){"use strict";n.r(t);var i=n("c1oF"),r=n.n(i),s=n("6lmj"),o=n.n(s),l=(n("4Tp0"),Shopware.Mixin),c=Shopware.Data,a=c.Criteria,p=c.EntityCollection;t.default={template:'\n{% block sw_cms_element_product_listing_config %}\n<div class="sw-cms-el-config-product-listing">\n\n    <sw-tabs\n        position-identifier="sw-cms-element-config-product-listing"\n        default-item="content"\n    >\n        <template #default="{ active }">\n            <sw-tabs-item\n                name="content"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n\n            <sw-tabs-item\n                name="sorting"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.productListing.config.tab.sorting\') }}\n            </sw-tabs-item>\n\n            <sw-tabs-item\n                name="filter"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.productListing.config.tab.filter\') }}\n            </sw-tabs-item>\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            <template v-if="active === \'content\'">\n\n                \n                {% block sw_cms_element_product_listing_config_layout_select %}\n                <sw-select-field\n                    {% if VUE3 %}\n                    v-model:value="element.config.boxLayout.value"\n                    {% else %}\n                    v-model="element.config.boxLayout.value"\n                    {% endif %}\n                    :label="$tc(\'sw-cms.elements.productBox.config.label.layoutType\')"\n                >\n                    \n                    {% block sw_cms_element_product_listing_config_layout_select_options %}\n                    <option value="standard">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeStandard\') }}\n                    </option>\n                    <option value="image">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeImage\') }}\n                    </option>\n                    <option value="minimal">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeMinimal\') }}\n                    </option>\n                    {% endblock %}\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_info %}\n                <sw-alert variant="info">\n                    {{ $tc(\'sw-cms.elements.general.config.infoText.listingElement\') }}\n                </sw-alert>\n                {% endblock %}\n            </template>\n\n            <template v-if="active === \'sorting\'">\n                \n                {% block sw_cms_element_product_listing_config_show_sorting %}\n                <sw-switch-field\n                    {% if VUE3 %}\n                    v-model:value="element.config.showSorting.value"\n                    {% else %}\n                    v-model="element.config.showSorting.value"\n                    {% endif %}\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelShowSorting\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_use_default_sorting %}\n                <sw-switch-field\n                    {% if VUE3 %}\n                    v-model:value="element.config.useCustomSorting.value"\n                    {% else %}\n                    v-model="element.config.useCustomSorting.value"\n                    {% endif %}\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelUseCustomSortings\')"\n                    :help-text="$tc(\'sw-cms.elements.productListing.config.sorting.helpTextUseCustomSortings\')"\n                    class="sw-cms-el-config-product-listing-custom-sortings"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_default_sorting %}\n                <sw-entity-single-select\n                    v-if="showSortingGrid"\n                    :value="defaultSorting.id"\n                    entity="product_sorting"\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelDefaultSorting\')"\n                    :help-text="$tc(\'sw-cms.elements.productListing.config.sorting.helpTextDefaultSorting\')"\n                    :criteria="allProductSortingsCriteria"\n                    label-property="label"\n                    show-clearable-button\n                    @option-select="onDefaultSortingChange"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_available_sortings %}\n                <sw-entity-multi-select\n                    v-if="showSortingGrid"\n                    v-model="productSortings"\n                    class="sw-cms-el-config-product-listing-config-sorting-grid__select"\n                    :label="$tc(\'sw-cms.elements.productListing.config.sorting.labelProductSortings\')"\n                    label-property="label"\n                    :criteria="allProductSortingsCriteria"\n                    :hide-labels="true"\n                    :placeholder="$tc(\'sw-cms.elements.productListing.config.sorting.placeHolderProductSortings\')"\n                >\n                    <template #result-item="{ item, index, labelProperty, valueProperty, searchTerm, highlightSearchTerm, isSelected, addItem, getKey }">\n                        <slot\n                            name="result-item"\n                            v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, isSelected, addItem, getKey }"\n                        >\n                            <sw-select-result\n                                v-tooltip="{\n                                    showDelay: 300,\n                                    message: $tc(\'sw-cms.elements.productListing.config.sorting.defaultSortingInUse\'),\n                                    disabled: !isDefaultSorting(item)\n                                }"\n                                :selected="isSelected(item)"\n                                :disabled="isDefaultSorting(item)"\n                                v-bind="{ item, index }"\n                                @item-select="addItem"\n                            >\n                                \n                                {% block sw_entity_multi_select_base_results_list_result_label %}\n                                <slot\n                                    name="result-label-property"\n                                    v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, getKey }"\n                                >\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`)"\n                                        :search-term="searchTerm"\n                                    />\n                                    <template v-else>\n                                        {{ getKey(item,labelProperty) || getKey(item, `translated.${labelProperty}`) }}\n                                    </template>\n                                </slot>\n                                {% endblock %}\n                            </sw-select-result>\n                        </slot>\n                    </template>\n                </sw-entity-multi-select>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_sorting_grid %}\n                <sw-cms-el-config-product-listing-config-sorting-grid\n                    v-if="showSortingGrid"\n                    :product-sortings="productSortings"\n                    :default-sorting="defaultSorting"\n                />\n                {% endblock %}\n            </template>\n\n            <template v-if="active === \'filter\'">\n                \n                {% block sw_cms_element_product_listing_config_filter_info %}\n                <sw-alert variant="info">\n                    {{ $tc(\'sw-cms.elements.productListing.config.filter.infoText\') }}\n                </sw-alert>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_filter_by_wrapper %}\n                <sw-container\n                    columns="1fr 1fr"\n                    gap="0px 30px"\n                >\n                    \n                    {% block sw_cms_element_product_listing_config_filter_by_manufacturer %}\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="filterByManufacturer"\n                        {% else %}\n                        v-model="filterByManufacturer"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterByManufacturer\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_by_rating %}\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="filterByRating"\n                        {% else %}\n                        v-model="filterByRating"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterByRating\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_by_price %}\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="filterByPrice"\n                        {% else %}\n                        v-model="filterByPrice"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterByPrice\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_for_free_shipping %}\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="filterByFreeShipping"\n                        {% else %}\n                        v-model="filterByFreeShipping"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelFilterForFreeShipping\')"\n                    />\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_listing_config_filter_properties_wrapper %}\n                <div>\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_spacer %}\n                    <hr class="spacer">\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_properties_as_filter %}\n                    \n                    {% block sw_cms_element_product_listing_config_filter_properties_as_filter_switch %}\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="filterByProperties"\n                        {% else %}\n                        v-model="filterByProperties"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productListing.config.filter.labelUseFilterByProperties\')"\n                        :help-text="$tc(\'sw-cms.elements.productListing.config.filter.helpTextUseFilterByProperties\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_properties_as_filter_info_text %}\n                    <div\n                        class="sw-cms-el-config-product-listing-filter_properties_as_filter__description-text"\n                        v-html="$tc(\'sw-cms.elements.productListing.config.filter.descriptionTextUseFilterByProperties\')"\n                    ></div>\n                    {% endblock %}\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_property_search %}\n                    <sw-simple-search-field\n                        v-model="filterPropertiesTerm"\n                        class="sw-cms-element-product-listing-config-filter-property-search"\n                        variant="form"\n                        :disabled="showFilterGrid"\n                        @search-term-change="onFilterProperties"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_property_grid %}\n                    <div\n                        v-if="showPropertySelection"\n                        class="sw-cms-el-config-product-listing-property-grid"\n                        :class="gridClasses"\n                    >\n                        <sw-data-grid\n                            :data-source="properties"\n                            :columns="gridColumns"\n                            :compact-mode="true"\n                            :allow-inline-edit="false"\n                            :show-actions="false"\n                            :show-selection="false"\n                            plain-appearance\n                        >\n\n                            <template #column-status="{ item, column }">\n                                \n                                {% block sw_cms_element_product_listing_config_filter_property_grid_column_status %}\n                                <sw-switch-field\n                                    :disabled="column.disabled"\n                                    :value="item.active"\n                                    {% if VUE3 %}\n                                    @update:value="propertyStatusChanged(item.id)"\n                                    {% else %}\n                                    @change="propertyStatusChanged(item.id)"\n                                    {% endif %}\n                                />\n                            {% endblock %}\n                            </template>\n\n                            <template #pagination>\n                                \n                                {% block sw_cms_element_product_listing_config_filter_property_grid_pagination %}\n                                <sw-pagination\n                                    v-if="!disabled"\n                                    :page="propertiesPage"\n                                    :limit="propertiesLimit"\n                                    :total="propertiesTotal"\n                                    :auto-hide="false"\n                                    :steps="[]"\n                                    @page-change="onPropertiesPageChange"\n                                />\n                            {% endblock %}\n                            </template>\n                        </sw-data-grid>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_listing_config_filter_empty_state %}\n                    <sw-empty-state\n                        v-else\n                        :absolute="false"\n                        :title="$tc(\'sw-cms.elements.productListing.config.filter.gridEmptyStateLabel\')"\n                        :subline="$tc(\'sw-cms.elements.productListing.config.filter.gridEmptyStateHint\')"\n                    >\n                        <template #icon>\n                            <img\n                                :src="\'/administration/static/img/empty-states/products-empty-state.svg\' | asset"\n                                alt="$tc(\'sw-cms.elements.productListing.config.filter.gridEmptyStateLabel\')"\n                            >\n                        </template>\n                    </sw-empty-state>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </template>\n        </template>\n    </sw-tabs>\n</div>\n{% endblock %}\n',inject:["repositoryFactory","feature"],mixins:[l.getByName("cms-element")],data:function(){return{productSortings:[],defaultSorting:{},filters:[],filterPropertiesTerm:"",properties:[],propertiesPage:1,propertiesLimit:6,propertiesTotal:0}},computed:{showSortingGrid:function(){return this.element.config.useCustomSorting.value},showFilterGrid:function(){return!this.filterByProperties},productSortingRepository:function(){return this.repositoryFactory.create("product_sorting")},propertyRepository:function(){return this.repositoryFactory.create("property_group")},productSortingsCriteria:function(){var e=new a(1,25);return e.addFilter(a.equalsAny("key",o()(Object.keys(this.productSortingsConfigValue)))),e.addSorting(a.sort("priority","desc")),e},propertyCriteria:function(){var e=new a(this.propertiesPage,this.propertiesLimit);return e.setTerm(this.filterPropertiesTerm),e.addSorting(a.sort("name","ASC",!1)),e.addFilter(a.equals("filterable",!0)),e},allProductSortingsCriteria:function(){var e=new a(1,25);return e.addFilter(a.equals("locked",!1)),e},excludedDefaultSortingCriteria:function(){var e=new a(1,25);return this.defaultSorting.id&&e.addFilter(a.not("AND",[a.equals("id",this.defaultSorting.id)])),e.addFilter(a.equals("locked",!1)),e},productSortingsConfigValue:function(){return this.element.config.availableSortings.value},filterByManufacturer:{get:function(){return this.isActiveFilter("manufacturer-filter")},set:function(e){this.updateFilters("manufacturer-filter",e)}},filterByRating:{get:function(){return this.isActiveFilter("rating-filter")},set:function(e){this.updateFilters("rating-filter",e)}},filterByPrice:{get:function(){return this.isActiveFilter("price-filter")},set:function(e){this.updateFilters("price-filter",e)}},filterByFreeShipping:{get:function(){return this.isActiveFilter("shipping-free-filter")},set:function(e){this.updateFilters("shipping-free-filter",e)}},filterByProperties:{get:function(){return!this.isActiveFilter("property-filter")},set:function(e){this.updateFilters("property-filter",!e),this.sortProperties(this.properties)}},showPropertySelection:function(){return!this.properties.length<1},gridColumns:function(){return[{property:"status",label:"sw-cms.elements.productListing.config.filter.gridHeaderStatus",disabled:this.showFilterGrid,width:"70px"},{property:"name",label:"sw-cms.elements.productListing.config.filter.gridHeaderName"}]},gridClasses:function(){return{"is--disabled":this.showFilterGrid}}},watch:{productSortings:{handler:function(){this.element.config.availableSortings.value=this.transformProductSortings()},deep:!0},defaultSorting:function(){0===Object.keys(this.defaultSorting).length?this.element.config.defaultSorting.value="":this.element.config.defaultSorting.value=this.defaultSorting.key}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.initElementConfig("product-listing"),Shopware.Utils.types.isEmpty(this.productSortingsConfigValue)?this.productSortings=new p(this.productSortingRepository.route,this.productSortingRepository.schema.entity,Shopware.Context.api,this.productSortingsCriteria):this.fetchProductSortings().then((function(t){e.productSortings=t})),this.initDefaultSorting(),this.unpackFilters(),this.loadFilterableProperties()},fetchProductSortings:function(){var e=this;return this.productSortingRepository.search(this.productSortingsCriteria).then((function(t){return e.updateValuesFromConfig(t)}))},updateValuesFromConfig:function(e){return Object.entries(this.productSortingsConfigValue).forEach((function(t){var n=r()(t,2),i=n[0],s=n[1],o=e.find((function(e){return e.key===i}));o&&(o.priority=s)})),e},transformProductSortings:function(){var e={};return this.productSortings.forEach((function(t){e[t.key]=t.priority})),e},initDefaultSorting:function(){var e=this,t=this.element.config.defaultSorting.value;if(""!==t){var n=new a(1,25);n.addFilter(a.equals("key",t)),this.productSortingRepository.search(n).then((function(t){e.defaultSorting=t.first()}))}},loadFilterableProperties:function(){var e=this;return this.propertyRepository.search(this.propertyCriteria).then((function(t){e.propertiesTotal=t.total,e.properties=e.sortProperties(t)}))},sortProperties:function(e){var t=this;return e.forEach((function(e){t.filterByProperties?e.active=t.element.config.propertyWhitelist.value.includes(e.id):e.active=!0})),e.sort((function(e,t){return e.active===t.active||!e.active==!t.active?0:e.active?-1:1})),e},onDefaultSortingChange:function(e,t){t?(this.productSortings.has(t.id)||this.productSortings.add(t),this.defaultSorting=t):this.defaultSorting={}},isDefaultSorting:function(e){return this.defaultSorting.key===e.key},isActiveFilter:function(e){return this.filters.includes(e)},updateFilters:function(e,t){this.filters=t?[].concat(o()(this.filters),[e]):this.filters.reduce((function(t,n){return n===e?t:[].concat(o()(t),[n])}),[]),this.element.config.filters.value=this.filters.join()},unpackFilters:function(){if(void 0!==this.element.config.filters){var e=this.element.config.filters.value;null!==e&&""!==e&&(this.filters=e.split(","))}},onFilterProperties:function(){return this.propertiesPage=1,this.loadFilterableProperties()},onPropertiesPageChange:function(e){var t=e.limit,n=e.page;return this.propertiesLimit=t,this.propertiesPage=n,this.loadFilterableProperties()},propertyStatusChanged:function(e){var t=this.element.config.propertyWhitelist.value;t.includes(e)?this.element.config.propertyWhitelist.value=t.reduce((function(t,n){return n===e?t:[].concat(o()(t),[n])}),[]):this.element.config.propertyWhitelist.value=[].concat(o()(t),[e])}}}},x2v4:function(e,t,n){}}]);