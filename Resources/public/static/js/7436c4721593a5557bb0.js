(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[450],{E6zU:function(t,n,e){"use strict";e.r(n);e("vsha");var i=Shopware.Context,s=Shopware.Data.Criteria,a=Shopware.Utils.object.cloneDeep;n.default={template:'\n{% block sw_settings_rule_add_assignment_listing %}\n<sw-card\n    class="sw-settings-rule-add-assignment-listing__card"\n    position-identifier="sw-settings-rule-add-assignment-listing"\n>\n    <template #toolbar>\n        \n        {% block sw_settings_rule_add_assignment_listing_toolbar %}\n        <sw-card-filter @sw-card-filter-term-change="doSearch" />\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_settings_rule_add_assignment_listing_grid %}\n    <sw-data-grid\n        :is-loading="loading"\n        :data-source="items"\n        :columns="entityContext.addContext.gridColumns"\n        :is-record-selectable="isNotAssigned"\n        :show-actions="false"\n        @select-item="onSelectItem"\n    >\n        <template\n            #selection-content="{\n                item,\n                isSelected,\n                isRecordSelectable,\n                selectItem,\n                itemIdentifierProperty,\n            }"\n        >\n            \n            {% block sw_settings_rule_add_assignment_listing_checkbox %}\n            <div class="sw-data-grid__cell-content">\n                <sw-checkbox-field\n                    :disabled="!isRecordSelectable(item)"\n                    :value="isSelected(item[itemIdentifierProperty]) || !isNotAssigned(item)"\n                    {% if VUE3 %}\n                    @update:value="selectItem($event, item)"\n                    {% else %}\n                    @change="selectItem($event, item)"\n                    {% endif %}\n                />\n            </div>\n            {% endblock %}\n        </template>\n\n        <template #column-name="{ item }">\n            \n            {% block sw_settings_rule_add_assignment_listing_name %}\n            <sw-product-variant-info\n                v-if="item.variation"\n                :variations="item.variation"\n            >\n                {{ item.translated.name }}\n            </sw-product-variant-info>\n            <span v-else>\n                {{ item.translated.name }}\n            </span>\n            {% endblock %}\n        </template>\n\n        <template #column-active="{ item }">\n            \n            {% block sw_settings_rule_add_assignment_listing_active_flag %}\n            <sw-icon\n                v-if="item.active"\n                name="regular-checkmark-xs"\n                small\n                class="is--active"\n            />\n            <sw-icon\n                v-else\n                name="regular-times-s"\n                small\n                class="is--inactive"\n            />\n            {% endblock %}\n        </template>\n\n        <template #column-taxType="{ item }">\n            \n            {% block sw_settings_rule_add_assignment_listing_tax_type %}\n            {{ shippingTaxTypeLabel(item.taxType) }}\n            {% endblock %}\n        </template>\n\n        <template #pagination>\n            \n            {% block sw_settings_rule_add_assignment_listing_pagination %}\n            <sw-pagination\n                :limit="limit"\n                :page="page"\n                :total="total"\n                @page-change="paginate"\n            />\n            {% endblock %}\n        </template>\n    </sw-data-grid>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',props:{ruleId:{type:String,required:!0},entityContext:{type:Object,required:!0}},data:function(){return{loading:!0,repository:null,items:[],preselectedIds:[],limit:10,page:1,total:0}},computed:{criteria:function(){var t=new s(this.page,this.limit);return this.entityContext.addContext.association&&(t.addAssociation(this.entityContext.addContext.association),t.getAssociation(this.entityContext.addContext.association).addFilter(s.equals("id",this.ruleId))),"product"===this.entityContext.entityName&&t.addAssociation("options.group"),t},shippingCostTaxOptions:function(){return[{label:this.$tc("sw-settings-shipping.shippingCostOptions.auto"),value:"auto"},{label:this.$tc("sw-settings-shipping.shippingCostOptions.highest"),value:"highest"},{label:this.$tc("sw-settings-shipping.shippingCostOptions.fixed"),value:"fixed"}]}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.repository=this.entityContext.repository,this.doSearch()},onSelectItem:function(t,n,e){this.$emit("select-item",t,n,e)},isNotAssigned:function(t){return this.entityContext.addContext.association?t[this.entityContext.addContext.association].length<=0:t[this.entityContext.addContext.column]!==this.ruleId},paginate:function(t){var n=t.page,e=void 0===n?1:n,i=t.limit,s=void 0===i?25:i;return this.page=e,this.limit=s,this.doSearch()},doSearch:function(t){var n=this;this.loading=!0;var e,o=this.entityContext.api?this.entityContext.api():i.api,l=a(this.criteria);t&&l.addFilter(s.contains(null!==(e=this.entityContext.addContext.searchColumn)&&void 0!==e?e:"name",t));return this.repository.search(l,o).then((function(t){n.items=t,n.total=t.total})).finally((function(){n.loading=!1}))},shippingTaxTypeLabel:function(t){if(!t)return"";var n=this.shippingCostTaxOptions.find((function(n){return t===n.value}))||"";return null==n?void 0:n.label}}}},shxo:function(t,n,e){},vsha:function(t,n,e){var i=e("shxo");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e("P8hj").default)("1686d172",i,!0,{})}}]);