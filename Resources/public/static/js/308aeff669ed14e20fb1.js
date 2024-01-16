(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[436],{Gz3R:function(t,e,i){},JvVc:function(t,e,i){var n=i("Gz3R");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("P8hj").default)("32e4f8c5",n,!0,{})},kLZJ:function(t,e,i){"use strict";i.r(e);var n=i("7yzw"),r=i.n(n),s=i("92Mt"),o=i.n(s),l=(i("JvVc"),Shopware.Mixin),a=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_listing_option_criteria_card %}\n<sw-card\n    class="sw-settings-listing-option-criteria-grid__criteria-card"\n    position-identifier="sw-settings-listing-option-criteria-grid"\n    :title="$tc(\'sw-settings-listing.base.criteria.title\')"\n>\n\n    \n    {% block sw_settings_listing_option_criteria_card_toolbar %}\n    <template #toolbar>\n\n        \n        {% block sw_settings_listing_option_criteria_card_toolbar_select %}\n        <sw-single-select\n            :value="selectedCriteria"\n            :options="criteriaOptions"\n            :placeholder="$tc(\'sw-settings-listing.base.criteria.selectPlaceholder\')"\n            value-property="value"\n            label-property="label"\n            show-clearable-button\n            {% if VUE3 %}\n            @update:value="onAddCriteria"\n            {% else %}\n            @change="onAddCriteria"\n            {% endif %}\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_criteria_card_grid %}\n    <sw-data-grid\n        v-if="productSortingEntity && productSortingEntity.fields.length > 0"\n        ref="dataGrid"\n        :columns="productSortingEntityColumns"\n        :data-source="sortedProductSortingFields"\n        :show-actions="true"\n        :allow-inline-edit="true"\n        :compact-mode="false"\n        :show-selection="false"\n        plain-appearance\n        item-identifier-property="field"\n        @inline-edit-save="onSaveInlineEdit"\n        @inline-edit-cancel="onCancelInlineEdit"\n    >\n\n        \n        {% block sw_settings_listing_option_criteria_card_grid_column_field %}\n        <template #column-field="{item, isInlineEdit}">\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_field_select %}\n            <sw-entity-single-select\n                v-if="item.field === \'customField\' || (isItemACustomField(item.field) && isInlineEdit)"\n                ref="customFieldSelection"\n                v-model="item.name"\n                :placeholder="$tc(\'global.sw-single-select.valuePlaceholder\')"\n                :criteria="customFieldCriteriaSingleSelect(item)"\n                :label-callback="getCustomFieldName"\n                entity="custom_field"\n                show-clearable-button\n                {% if VUE3 %}\n                @update:value="changeCustomField"\n                {% else %}\n                @change="changeCustomField"\n                {% endif %}\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_field_custom_field %}\n            <span v-else-if="isItemACustomField(item.field)">\n                {{ getCustomFieldLabelByCriteriaName(item.field) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_field_custom_criteria %}\n            <span v-else>\n                {{ getCriteriaSnippetByFieldName(item.field) }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_criteria_card_grid_column_order %}\n        <template #column-order="{item, isInlineEdit}">\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_order_text %}\n            <div v-if="!isInlineEdit">\n                {{ getOrderSnippet(item.order) }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_order_select %}\n            <sw-single-select\n                v-else\n                {% if VUE3 %}\n                v-model:value="item.order"\n                {% else %}\n                v-model="item.order"\n                {% endif %}\n                :options="orderOptions"\n                value-property="value"\n                label-property="label"\n                show-clearable-button\n                :placeholder="$tc(\'global.sw-single-select.valuePlaceholder\')"\n            />\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_criteria_card_grid_column_actions %}\n        <template #actions="{item}">\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_actions_delete %}\n            <sw-context-menu-item\n                variant="danger"\n                @click="onRemoveCriteria(item)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_criteria_card_empty_state %}\n    <sw-empty-state\n        v-else\n        class="sw-settings-listing-option-criteria-grid__criteria-empty-state"\n        title=""\n        :subline="$tc(\'sw-settings-listing.base.criteria.emptyStateSubline\')"\n    >\n\n        \n        {% block sw_settings_listing_option_criteria_card_empty_state_icon %}\n        <template #icon>\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                alt=""\n            >\n        </template>\n        {% endblock %}\n\n    </sw-empty-state>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[l.getByName("notification"),l.getByName("sw-inline-snippet")],props:{productSortingEntity:{type:Object,required:!0}},data:function(){return{customFields:[],selectedCriteria:null,customFieldSetIDs:null,notSortableCustomFields:["price","json","text","html"]}},computed:{customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldSetRelationsRepository:function(){return this.repositoryFactory.create("custom_field_set_relation")},customFieldCriteria:function(){var t=new a(1,25);return t.addFilter(a.not("and",[a.equalsAny("type",this.notSortableCustomFields)])),this.customFieldSetIDs&&t.addFilter(a.equalsAny("customFieldSetId",this.customFieldSetIDs)),this.getProductSortingFieldsByName().length&&t.addFilter(a.equalsAny("id",this.getProductSortingFieldsByName())),t},customFieldsRelationsCriteria:function(){var t=new a(1,25);return t.addFilter(a.equals("entityName","product")),t},sortedProductSortingFields:function(){return this.productSortingEntity.fields.sort((function(t,e){return t.priority===e.priority?0:t.priority<e.priority?1:-1}))},productSortingEntityColumns:function(){return[{property:"field",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.header.name"),inlineEdit:"string"},{property:"order",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.header.order"),inlineEdit:"string"},{property:"priority",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.header.priority"),inlineEdit:"number"}]},criteriaOptions:function(){var t=[{value:"product.name",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.name")},{value:"product.ratingAverage",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.ratingAverage")},{value:"product.productNumber",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.productNumber")},{value:"product.releaseDate",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.releaseDate")},{value:"product.stock",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.stock")},{value:"product.sales",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.sales")},{value:"customField",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.customField")},{value:"product.cheapestPrice",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.cheapestPrice")},{value:"product.price",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.price")}];return t.sort((function(t,e){return t.label.localeCompare(e.label)}))},orderOptions:function(){return[{label:this.$tc("global.default.ascending"),value:"asc"},{label:this.$tc("global.default.descending"),value:"desc"}]},assetFilter:function(){return Shopware.Filter.getByName("asset")}},watch:{productSortingEntity:{handler:function(){this.productSortingEntity&&this.productSortingEntity.fields&&this.productSortingEntity.fields.forEach((function(t){null===t.field&&(t.field="customField")}))},deep:!0}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var t=this;this.fetchCustomFieldSetIds().then((function(){t.fetchCustomFields()}))},fetchCustomFieldSetIds:function(){var t=this;return this.customFieldSetRelationsRepository.search(this.customFieldsRelationsCriteria).then((function(e){t.customFieldSetIDs=e.map((function(t){return t.customFieldSetId}))}))},fetchCustomFields:function(){var t=this;this.customFieldRepository.search(this.customFieldCriteria).then((function(e){t.customFields=e}))},isItemACustomField:function(t){var e=this.stripCustomFieldPath(t);return this.customFields.some((function(t){return t.name===e}))},getCustomFieldByName:function(t){return this.customFields.find((function(e){return e.name===t}))},onAddCriteria:function(t){var e=this;if(this.criteriaIsAlreadyUsed(t)){var i=this.getCriteriaSnippetByFieldName(t);this.createNotificationError({message:this.$t("sw-settings-listing.general.productSortingCriteriaGrid.options.criteriaAlreadyUsed",{criteriaName:i})})}else{this.$emit("criteria-add",t);var n=this.productSortingEntity.fields.find((function(e){return e.field===t}));this.$nextTick().then((function(){n&&e.$refs.dataGrid&&e.$refs.dataGrid.onDbClickCell(n)}))}},getOrderSnippet:function(t){return"asc"===t?this.$tc("global.default.ascending"):this.$tc("global.default.descending")},onRemoveCriteria:function(t){this.$emit("criteria-delete",t)},getCriteriaTemplate:function(t){return{field:t,order:"asc",priority:1,naturalSorting:0}},onSaveInlineEdit:function(t){if(null!==t.field){if("customFields"===t.field&&(t.field="customFields.".concat(t.field)),"customField"===t.field)return this.createNotificationError({message:this.$t("sw-settings-listing.general.productSortingCriteriaGrid.options.customFieldCriteriaNotNull")}),void this.filterEmptyCustomFields(t);this.$emit("inline-edit-save")}else this.createNotificationError({message:this.$t("sw-settings-listing.general.productSortingCriteriaGrid.options.customFieldCriteriaNotNull")})},onCancelInlineEdit:function(t){t&&"customField"===t.field?this.filterEmptyCustomFields(t):this.$emit("inline-edit-cancel",t)},filterEmptyCustomFields:function(t){this.productSortingEntity.fields=this.productSortingEntity.fields.filter((function(e){return e.field!==t.field}))},stripCustomFieldPath:function(t){return t.replace(/customFields\./,"")},getCriteriaSnippetByFieldName:function(t){return this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.".concat(t))},criteriaIsAlreadyUsed:function(t){return this.productSortingEntity.fields.some((function(e){return e.field===t}))},getCustomFieldLabelByCriteriaName:function(t){var e=this.stripCustomFieldPath(t),i=this.getCustomFieldByName(e);return this.getInlineSnippet(i.config.label)||e},getCustomFieldName:function(t){var e=t&&this.getInlineSnippet(t.config.label);return e||(null==t?void 0:t.name)},customFieldCriteriaSingleSelect:function(t){var e=new a(1,25);return e.addFilter(a.not("and",[a.equalsAny("type",this.notSortableCustomFields)])),this.customFieldSetIDs&&e.addFilter(a.equalsAny("customFieldSetId",this.customFieldSetIDs)),this.getProductSortingFieldsByName(t).length&&e.addFilter(a.not("AND",[a.equalsAny("id",this.getProductSortingFieldsByName(t))])),e},changeCustomField:function(t,e){var i=this;return r()(o.a.mark((function n(){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=i.sortedProductSortingFields.find((function(e){return"customField"===e.field||e.name===t}))).field="customFields.".concat(e.name),n.next=4,i.fetchCustomFields();case 4:i.onSaveInlineEdit(r.field);case 5:case"end":return n.stop()}}),n)})))()},getProductSortingFieldsByName:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.sortedProductSortingFields.filter((function(e){return t?/^customFields\./.test(e.field)&&e.field!==t.field:/^customFields\./.test(e.field)})).map((function(t){return t.name}))||{}}}}}}]);
//# sourceMappingURL=308aeff669ed14e20fb1.js.map