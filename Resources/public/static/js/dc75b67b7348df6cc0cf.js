(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[25086],{789968:function(){},225086:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return s}}),i(947235);let{Mixin:n}=Shopware,{Criteria:r}=Shopware.Data;var s={template:'\n{% block sw_settings_listing_option_criteria_card %}\n<sw-card\n    class="sw-settings-listing-option-criteria-grid__criteria-card"\n    position-identifier="sw-settings-listing-option-criteria-grid"\n    :title="$tc(\'sw-settings-listing.base.criteria.title\')"\n>\n\n    \n    {% block sw_settings_listing_option_criteria_card_toolbar %}\n    <template #toolbar>\n\n        \n        {% block sw_settings_listing_option_criteria_card_toolbar_select %}\n        <sw-single-select\n            :value="selectedCriteria"\n            :options="criteriaOptions"\n            :placeholder="$tc(\'sw-settings-listing.base.criteria.selectPlaceholder\')"\n            value-property="value"\n            label-property="label"\n            show-clearable-button\n            @update:value="onAddCriteria"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_criteria_card_grid %}\n    <sw-data-grid\n        v-if="productSortingEntity && productSortingEntity.fields.length > 0"\n        ref="dataGrid"\n        :columns="productSortingEntityColumns"\n        :data-source="sortedProductSortingFields"\n        :show-actions="true"\n        :allow-inline-edit="true"\n        :compact-mode="false"\n        :show-selection="false"\n        plain-appearance\n        item-identifier-property="field"\n        @inline-edit-save="onSaveInlineEdit"\n        @inline-edit-cancel="onCancelInlineEdit"\n    >\n\n        \n        {% block sw_settings_listing_option_criteria_card_grid_column_field %}\n        <template #column-field="{item, isInlineEdit}">\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_field_select %}\n            <sw-entity-single-select\n                v-if="item.field === \'customField\' || (isItemACustomField(item.field) && isInlineEdit)"\n                ref="customFieldSelection"\n                v-model:value="item.name"\n                :placeholder="$tc(\'global.sw-single-select.valuePlaceholder\')"\n                :criteria="customFieldCriteriaSingleSelect(item)"\n                :label-callback="getCustomFieldName"\n                entity="custom_field"\n                show-clearable-button\n                @update:value="changeCustomField"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_field_custom_field %}\n            <span v-else-if="isItemACustomField(item.field)">\n                {{ getCustomFieldLabelByCriteriaName(item.field) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_field_custom_criteria %}\n            <span v-else>\n                {{ getCriteriaSnippetByFieldName(item.field) }}\n            </span>\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_criteria_card_grid_column_order %}\n        <template #column-order="{item, isInlineEdit}">\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_order_text %}\n            <div v-if="!isInlineEdit">\n                {{ getOrderSnippet(item.order) }}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_order_select %}\n            <sw-single-select\n                v-else\n                v-model:value="item.order"\n                :options="orderOptions"\n                value-property="value"\n                label-property="label"\n                :placeholder="$tc(\'global.sw-single-select.valuePlaceholder\')"\n            />\n            {% endblock %}\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_option_criteria_card_grid_column_actions %}\n        <template #actions="{item}">\n\n            \n            {% block sw_settings_listing_option_criteria_card_grid_column_actions_delete %}\n            <sw-context-menu-item\n                variant="danger"\n                @click="onRemoveCriteria(item)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_option_criteria_card_empty_state %}\n    <sw-empty-state\n        v-else\n        class="sw-settings-listing-option-criteria-grid__criteria-empty-state"\n        title=""\n        :subline="$tc(\'sw-settings-listing.base.criteria.emptyStateSubline\')"\n    >\n\n        \n        {% block sw_settings_listing_option_criteria_card_empty_state_icon %}\n        <template #icon>\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                alt=""\n            >\n        </template>\n        {% endblock %}\n\n    </sw-empty-state>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["criteria-add","criteria-delete","inline-edit-save","inline-edit-cancel"],mixins:[n.getByName("notification"),n.getByName("sw-inline-snippet")],props:{productSortingEntity:{type:Object,required:!0}},data(){return{customFields:[],selectedCriteria:null,customFieldSetIDs:null,notSortableCustomFields:["price","json","text","html"]}},computed:{customFieldRepository(){return this.repositoryFactory.create("custom_field")},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},customFieldSetRelationsRepository(){return this.repositoryFactory.create("custom_field_set_relation")},customFieldCriteria(){let t=new r(1,25);return t.addFilter(r.not("and",[r.equalsAny("type",this.notSortableCustomFields)])),this.customFieldSetIDs&&t.addFilter(r.equalsAny("customFieldSetId",this.customFieldSetIDs)),this.getProductSortingFieldsByName().length&&t.addFilter(r.equalsAny("id",this.getProductSortingFieldsByName())),t},customFieldsRelationsCriteria(){let t=new r(1,25);return t.addFilter(r.equals("entityName","product")),t},sortedProductSortingFields(){return this.productSortingEntity.fields.sort((t,e)=>t.priority===e.priority?0:t.priority<e.priority?1:-1)},productSortingEntityColumns(){return[{property:"field",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.header.name"),inlineEdit:"string"},{property:"order",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.header.order"),inlineEdit:"string"},{property:"priority",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.header.priority"),inlineEdit:"number"}]},criteriaOptions(){return[{value:"product.name",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.name")},{value:"product.ratingAverage",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.ratingAverage")},{value:"product.productNumber",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.productNumber")},{value:"product.releaseDate",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.releaseDate")},{value:"product.stock",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.stock")},{value:"product.sales",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.sales")},{value:"customField",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.customField")},{value:"product.cheapestPrice",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.cheapestPrice")},{value:"product.price",label:this.$tc("sw-settings-listing.general.productSortingCriteriaGrid.options.label.product.price")}].sort((t,e)=>t.label.localeCompare(e.label))},orderOptions(){return[{label:this.$tc("global.default.ascending"),value:"asc"},{label:this.$tc("global.default.descending"),value:"desc"}]},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{productSortingEntity:{handler(){this.productSortingEntity&&this.productSortingEntity.fields&&this.productSortingEntity.fields.forEach(t=>{null===t.field&&(t.field="customField")})},deep:!0}},created(){this.createdComponent()},methods:{createdComponent(){this.fetchCustomFieldSetIds().then(()=>{this.fetchCustomFields()})},fetchCustomFieldSetIds(){return this.customFieldSetRelationsRepository.search(this.customFieldsRelationsCriteria).then(t=>{this.customFieldSetIDs=t.map(t=>t.customFieldSetId)})},fetchCustomFields(){this.customFieldRepository.search(this.customFieldCriteria).then(t=>{this.customFields=t})},isItemACustomField(t){let e=this.stripCustomFieldPath(t);return this.customFields.some(t=>t.name===e)},getCustomFieldByName(t){return this.customFields.find(e=>e.name===t)},onAddCriteria(t){if(!this.criteriaIsAlreadyUsed(t)){this.$emit("criteria-add",t);let e=this.productSortingEntity.fields.find(e=>e.field===t);this.$nextTick().then(()=>{e&&this.$refs.dataGrid&&this.$refs.dataGrid.onDbClickCell(e)});return}let e=this.getCriteriaSnippetByFieldName(t);this.createNotificationError({message:this.$t("sw-settings-listing.general.productSortingCriteriaGrid.options.criteriaAlreadyUsed",{criteriaName:e})})},getOrderSnippet(t){return"asc"===t?this.$tc("global.default.ascending"):this.$tc("global.default.descending")},onRemoveCriteria(t){this.$emit("criteria-delete",t)},getCriteriaTemplate(t){return{field:t,order:"asc",priority:1,naturalSorting:0}},onSaveInlineEdit(t){if(null===t.field){this.createNotificationError({message:this.$t("sw-settings-listing.general.productSortingCriteriaGrid.options.customFieldCriteriaNotNull")});return}if("customFields"===t.field&&(t.field=`customFields.${t.field}`),"customField"===t.field){this.createNotificationError({message:this.$t("sw-settings-listing.general.productSortingCriteriaGrid.options.customFieldCriteriaNotNull")}),this.filterEmptyCustomFields(t);return}this.$emit("inline-edit-save")},onCancelInlineEdit(t){t&&"customField"===t.field?this.filterEmptyCustomFields(t):this.$emit("inline-edit-cancel",t)},filterEmptyCustomFields(t){this.productSortingEntity.fields=this.productSortingEntity.fields.filter(e=>e.field!==t.field)},stripCustomFieldPath(t){return t.replace(/customFields\./,"")},getCriteriaSnippetByFieldName(t){return this.$tc(`sw-settings-listing.general.productSortingCriteriaGrid.options.label.${t}`)},criteriaIsAlreadyUsed(t){return this.productSortingEntity.fields.some(e=>e.field===t)},getCustomFieldLabelByCriteriaName(t){let e=this.stripCustomFieldPath(t),i=this.getCustomFieldByName(e);return this.getInlineSnippet(i.config.label)||e},getCustomFieldName(t){return t&&this.getInlineSnippet(t.config.label)||t?.name},customFieldCriteriaSingleSelect(t){let e=new r(1,25);return e.addFilter(r.not("and",[r.equalsAny("type",this.notSortableCustomFields)])),this.customFieldSetIDs&&e.addFilter(r.equalsAny("customFieldSetId",this.customFieldSetIDs)),this.getProductSortingFieldsByName(t).length&&e.addFilter(r.not("AND",[r.equalsAny("id",this.getProductSortingFieldsByName(t))])),e},async changeCustomField(t,e){let i=this.sortedProductSortingFields.find(e=>"customField"===e.field||e.name===t);i.field=`customFields.${e.name}`,await this.fetchCustomFields(),this.onSaveInlineEdit(i.field)},getProductSortingFieldsByName(t=null){return this.sortedProductSortingFields.filter(e=>t?/^customFields\./.test(e.field)&&e.field!==t.field:/^customFields\./.test(e.field)).map(t=>t.name)||{}}}}},947235:function(t,e,i){var n=i(789968);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),i(745346).Z("4b76bf00",n,!0,{})}}]);