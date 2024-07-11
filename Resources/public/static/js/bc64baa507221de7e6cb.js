(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[143],{objB:function(e,t,n){var s=n("vJV/");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("P8hj").default)("49fe2d68",s,!0,{})},vHI3:function(e,t,n){"use strict";n.r(t);n("objB");var s=Shopware.Data.Criteria;t.default={template:'\n{% block sw_entity_many_to_many_assignment_card %}\n<div\n    class="sw-cms-product-assignment"\n    v-bind="$attrs"\n>\n    \n    {% block sw_cms_product_assignment_content %}\n    <div class="sw-cms-product-assignment__select-container">\n        \n        {% block sw_cms_product_assignment_select %}\n        <slot name="select">\n            <sw-select-base\n                v-bind="$attrs"\n                ref="selectBase"\n                class="sw-cms-product-assignment-select"\n                :disabled="disabled"\n                :label="selectLabel"\n                :is-loading="isLoadingResults"\n                v-on="$listeners"\n                @select-expanded="onSelectExpanded"\n                @select-collapsed="onSelectCollapsed"\n            >\n\n                <template #sw-select-selection="{ identification, error, disabled, size, expand, collapse }">\n                    \n                    {% block sw_cms_product_assignment_search_field %}\n                    <input\n                        ref="searchInput"\n                        tabindex="-1"\n                        :placeholder="placeholder"\n                        :value="searchTerm"\n                        :disabled="disabled"\n                        @input="onSearchTermChange"\n                    >\n                    {% endblock %}\n                </template>\n\n                <template #results-list>\n                    \n                    {% block sw_cms_product_assignment_results_list %}\n                    <sw-select-result-list\n                        ref="swSelectResultList"\n                        :options="resultCollection"\n                        :is-loading="isLoadingResults"\n                        :empty-message="$tc(\'global.sw-entity-many-to-many-select.messageNoResults\', 0, { term: searchTerm })"\n                        :focus-el="$refs.searchInput"\n                        @paginate="paginateResult"\n                        @item-select="onItemSelect"\n                    >\n\n                        \n                        {% block sw_cms_product_assignment_results_list_before %}\n                        <template #before-item-list>\n                            \n                            {% block sw_cms_product_assignment_results_list_before_content %}\n                            <slot name="before-item-list"></slot>\n                        {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_product_assignment_results_list_result %}\n                        <template #result-item="{ item, index }">\n                            \n                            {% block sw_cms_product_assignment_results_list_result_content %}\n                            <slot\n                                name="result-item"\n                                v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, isSelected, onItemSelect, getKey }"\n                            >\n\n                                \n                                {% block sw_cms_product_assignment_results_list_list_item %}\n                                <sw-select-result\n                                    :selected="isSelected(item)"\n                                    v-bind="{ item, index }"\n                                    @item-select="onItemSelect"\n                                >\n\n                                    \n                                    {% block sw_cms_product_assignment_results_list_list_item_label %}\n                                    <slot\n                                        name="result-label-property"\n                                        v-bind="{ item, index, labelProperty, valueProperty: \'id\', searchTerm, highlightSearchTerm, getKey }"\n                                    >\n\n                                        <sw-highlight-text\n                                            v-if="highlightSearchTerm"\n                                            :text="getKey(item, `translated.${labelProperty}`)"\n                                            :search-term="searchTerm"\n                                        />\n\n                                        <template v-else>\n                                            {{ getKey(item, `translated.${labelProperty}`) }}\n                                        </template>\n                                    </slot>\n                                {% endblock %}\n                                </sw-select-result>\n                            {% endblock %}\n                            </slot>\n                        {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_product_assignment_results_list_after %}\n                        <template #after-item-list>\n                            \n                            {% block sw_cms_product_assignment_results_list_after_content %}\n                            <slot name="after-item-list"></slot>\n                        {% endblock %}\n                        </template>\n                    {% endblock %}\n                    </sw-select-result-list>\n                    {% endblock %}\n                </template>\n            </sw-select-base>\n        </slot>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_product_assignment_grid %}\n    <sw-data-grid\n        class="sw-cms-product-assignment__grid"\n        :data-source="gridData"\n        :is-loading="isLoadingGrid"\n        :columns="columns"\n        :v-bind="$attrs"\n        :show-selection="false"\n        :plain-appearance="true"\n    >\n\n        \n        {% block sw_cms_product_assignment_grid_column %}\n        <template\n            v-for="column in columns"\n            #[`column-${column.property}`]="columnProps"\n        >\n            \n            {% block sw_cms_product_assignment_grid_column_content %}\n            <slot\n                :name="`column-${column.property}`"\n                v-bind="{ ...columnProps, searchTerm, highlightSearchTerm }"\n            ></slot>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_cms_product_assignment_grid_column_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_cms_product_assignment_grid_column_actions_content %}\n            <sw-context-menu-item\n                variant="danger"\n                :disabled="disabled"\n                @click="removeFromGrid(item)"\n            >\n                {{ $tc(\'global.entity-components.labelRemoveAssociation\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_cms_product_assignment_grid_footer %}\n        <template #pagination>\n            \n            {% block sw_cms_product_assignment_grid_footer_content %}\n            <sw-pagination\n                v-if="total > 0"\n                v-bind="{ limit, page, total }"\n                :steps="steps"\n                :auto-hide="false"\n                @page-change="paginateGrid"\n            />\n\n            <div\n                v-else\n                class="sw-cms-product-assignment__empty-state"\n            >\n                <slot name="empty-state"></slot>\n            </div>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n</div>\n{% endblock %}\n',data:function(){return{steps:[5]}},watch:{criteria:{immediate:!0,handler:function(){this.gridCriteria=s.fromCriteria(this.criteria),this.searchCriteria=s.fromCriteria(this.criteria),this.paginateGrid()}},entityCollection:function(){this.selectedIds=this.entityCollection.getIds(),this.paginateGrid()},languageId:function(){this.paginateGrid()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initData()},initData:function(){this.page=1,this.selectedIds=this.entityCollection.getIds()},searchItems:function(){var e=this;return this.searchRepository.search(this.searchCriteria,this.context).then((function(t){return new s(1,e.searchCriteria.limit).setIds(t.getIds()),t}))},onItemSelect:function(e){this.isSelected(e)?this.removeItem(e):(this.entityCollection.add(e),this.selectedIds=this.entityCollection.getIds(),this.gridData=this.entityCollection,this.$emit("change",this.entityCollection))},removeItem:function(e){return this.entityCollection.remove(e.id),this.selectedIds=this.entityCollection.getIds(),this.gridData=this.entityCollection,this.$emit("change",this.entityCollection),Promise.resolve()},onSelectCollapsed:function(){this.resultCollection=null,this.focusEl.blur(),this.paginateGrid()},paginateGrid:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.gridCriteria,t=e.page,n=e.limit;this.gridCriteria.page=t,this.gridCriteria.limit=n,this.isLoadingGrid=!0;var s=this.entityCollection.slice((t-1)*n,(t-1)*n+n);this.gridData=s,this.isLoadingGrid=!1,this.$emit("paginate",this.gridData)},removeFromGrid:function(e){var t=this;this.removeItem(e).then((function(){t.paginateGrid()}))}}}},"vJV/":function(e,t,n){}}]);