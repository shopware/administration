(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[23],{"0Kar":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var s=n("0MM5"),r=n.n(s),o=n("CTyi"),i=n.n(o),a=Shopware.Data.Criteria,u=function(){function t(e,n,s){r()(this,t),this.component=e,this.propertyGroupRepository=n,this.customFieldRepository=s,this.entities={property:[],customField:[]}}return i()(t,[{key:"fetchPropertyGroupEntities",value:function(t){return this._fetchEntities(t,"property","id",this.propertyGroupRepository)}},{key:"fetchCustomFieldEntities",value:function(t){return this._fetchEntities(t,"customField","name",this.customFieldRepository)}},{key:"_fetchEntities",value:function(t,e,n,s){var r=this;if(!t||t.length<1)return Promise.resolve();var o=t.filter((function(t){return t.type===e})).map((function(t){return t[n]}));if(o.length<1)return Promise.resolve();var i=new a(1,25);return i.addFilter(a.equalsAny(n,o)),s.search(i,Shopware.Context.api).then((function(t){r.entities[e]=t}))}},{key:"getNameTranslation",value:function(t){if("product"===t.type)return this.component.$tc("sw-settings-product-feature-sets.modal.label.".concat(t.name));if("property"===t.type)return this.entities.property.filter((function(e){return e.id===t.id})).map((function(t){return t.translated.name})).pop();if("customField"===t.type){var e=Shopware.State.get("session").currentLocale,n=Shopware.Context.app.fallbackLocale;return this.entities.customField.filter((function(e){return e.name===t.name})).map((function(t){return t.config.label[e]||t.config.label[n]})).pop()}return"referencePrice"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.label.referencePrice"):""}},{key:"getTypeTranslation",value:function(t){return"product"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textProductInfoLabel"):"property"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textPropertyLabel"):"customField"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textCustomFieldLabel"):"referencePrice"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textReferencePriceLabel"):""}}]),t}()},BF44:function(t,e,n){"use strict";n.r(e);var s=n("0Kar"),r=(n("WqLY"),Shopware.Data.Criteria);e.default={template:'\n{% block sw_product_feature_set_card %}\n<sw-card\n    :title="$tc(\'sw-settings-product-feature-sets.valuesCard.cardTitle\')"\n    class="sw-settings-product-feature-sets-values-card"\n    position-identifier="sw-settings-product-feature-sets-values-card"\n    :class="valuesCardClasses"\n    :is-loading="isLoading || valuesLoading || cardLoading"\n>\n\n    <template #grid>\n        <div v-if="!valuesEmpty && !disabled">\n            \n            {% block sw_product_feature_set_toolbar %}\n            <div class="sw-product-feature-set__toolbar">\n\n                \n                {% block sw_product_feature_set_toolbar_container %}\n                <sw-container\n                    columns="1fr 32px minmax(100px, 200px)"\n                    gap="0 10px"\n                >\n\n                    \n                    {% block sw_product_feature_set_toolbar_search %}\n                    <sw-simple-search-field\n                        v-model="term"\n                        size="small"\n                        variant="form"\n                        :disabled="!allowEdit"\n                        @search-term-change="onSearch"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_feature_set_toolbar_delete %}\n                    <sw-button\n                        :disabled="deleteButtonDisabled || !allowEdit"\n                        square\n                        size="small"\n                        class="sw-product-feature-set__delete-button"\n                        @click="onDeleteFields"\n                    >\n                        <sw-icon\n                            name="regular-trash"\n                            small\n                        />\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_feature_set_toolbar_add %}\n                    <sw-container>\n                        <sw-button\n                            :disabled="isLoading || !allowEdit"\n                            variant="ghost"\n                            size="small"\n                            class="sw-product-feature-set__add-button"\n                            @click="onAddField"\n                        >\n                            {{ $tc(\'sw-settings-product-feature-sets.valuesCard.labelCreateNew\') }}\n                        </sw-button>\n                    </sw-container>\n                    {% endblock %}\n\n                </sw-container>\n                {% endblock %}\n\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_product_feature_set_card_grid %}\n            <sw-data-grid\n                :data-source="values"\n                :columns="getColumns()"\n                :show-selection="allowEdit"\n                :show-actions="false"\n                :is-loading="isLoading"\n                identifier="sw-product-feature-set-grid"\n                @selection-change="onGridSelectionChanged"\n            >\n\n                \n                {% block sw_settings_product_feature_set_card_grid_column_name %}\n                <template #column-name="{ item }">\n                    {{ featureGridTranslationService.getNameTranslation(item) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_product_feature_set_card_grid_column_type %}\n                <template #column-type="{ item }">\n                    {{ featureGridTranslationService.getTypeTranslation(item) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_product_feature_set_card_grid_column_position %}\n                <template #column-position="{ item }">\n                    <sw-data-grid-column-position\n                        ref="columnPosition"\n                        v-model="values"\n                        :show-value="false"\n                        :item="item"\n                        :disabled="!allowEdit"\n                        @position-changed="onPositionChange"\n                    />\n                </template>\n                {% endblock %}\n\n            </sw-data-grid>\n            {% endblock %}\n\n        </div>\n    </template>\n\n    \n    {% block sw_product_feature_set_card_empty_state %}\n    <template v-if="valuesEmpty || disabled">\n\n        <div class="sw-settings-product-feature-set-card__empty-state">\n            \n            {% block sw_product_feature_set_card_empty_state_image %}\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                alt=""\n            >\n            {% endblock %}\n\n            \n            {% block sw_product_feature_set_card_empty_state_label %}\n            <div class="sw-settings-product-feature-set-card__empty-state--label">\n                <p v-if="disabled">\n                    {{ $tc(\'sw-settings-product-feature-sets.valuesCard.createStateDescription\') }}\n                </p>\n                <p v-else>\n                    {{ $tc(\'sw-settings-product-feature-sets.valuesCard.emptyStateDescription\') }}\n                </p>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_product_feature_set_card_empty_state_button %}\n            <sw-button\n                variant="ghost"\n                size="small"\n                :disabled="disabled"\n                @click="showModal = true"\n            >\n                {{ $tc(\'sw-settings-product-feature-sets.valuesCard.labelCreateNew\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_feature_set_card_grid_column_modal %}\n    <sw-settings-product-feature-sets-modal\n        v-if="showModal"\n        :product-feature-set="productFeatureSet"\n        @modal-close="onModalClose"\n    />\n    {% endblock %}\n\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory"],props:{productFeatureSet:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},disabled:{type:Boolean,required:!1,default:!1},allowEdit:{type:Boolean,required:!1,default:!0}},data:function(){return{valuesLoading:!1,cardLoading:!1,values:[],selection:null,deleteButtonDisabled:!0,term:"",showModal:!1,currentValue:null,translationService:null}},computed:{productFeatureSetRepository:function(){return this.repositoryFactory.create("product_feature_set")},propertyGroupRepository:function(){return this.repositoryFactory.create("property_group")},customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},valuesEmpty:function(){return 0===this.values.length},valuesCardClasses:function(){return{"is--empty":this.valuesEmpty}},productFeatureSetCriteria:function(){var t=new r(1,25);return t.addFilter(r.equals("product_feature_set.id",this.productFeatureSet.id)),t},featureGridTranslationService:function(){return null===this.translationService&&(this.translationService=new s.a(this,this.propertyGroupRepository,this.customFieldRepository)),this.translationService},assetFilter:function(){return Shopware.Filter.getByName("asset")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getList()},onAddField:function(){this.onShowFeatureModal()},onGridSelectionChanged:function(t,e){this.selection=t,this.deleteButtonDisabled=e<=0},onSearch:function(){this.doSearch()},doSearch:function(){var t=this;this.term||this.getList(),this.values=this.productFeatureSet.features.filter((function(e){return e.name.match(t.term)||e.type.match(t.term)}))},getList:function(){var t=this;this.valuesLoading=!0,this.values=[],this.productFeatureSet.features&&(this.values=this.productFeatureSet.features,this.term&&this.doSearch()),this.values.sort((function(t,e){return t.position-e.position})),Promise.all([this.featureGridTranslationService.fetchPropertyGroupEntities(this.values),this.featureGridTranslationService.fetchCustomFieldEntities(this.values)]).then((function(){t.valuesLoading=!1}))},onModalClose:function(){var t=this;this.showModal=!1,this.currentValue=null,this.$nextTick((function(){return t.getList()}))},onShowFeatureModal:function(){this.showModal=!0},onDeleteFields:function(){if(this.selection){var t=Object.keys(this.selection);this.productFeatureSet.features=this.productFeatureSet.features.filter((function(e){return!t.includes(e.id)})),this.resetPositions(),this.getList()}},onPositionChange:function(t){this.$set(this.productFeatureSet,"features",t)},resetPositions:function(){this.productFeatureSet.features.forEach((function(t,e){t.position=e+1}))},getColumns:function(){return[{property:"name",label:"sw-settings-product-feature-sets.valuesCard.labelValue",primary:!0},{property:"type",label:"sw-settings-product-feature-sets.valuesCard.labelType"},{property:"position",label:"sw-settings-product-feature-sets.valuesCard.labelPosition"}]}}}},WqLY:function(t,e,n){var s=n("q+DN");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,n("P8hj").default)("75da99c0",s,!0,{})},"q+DN":function(t,e,n){}}]);
//# sourceMappingURL=33b6de0466a5b9007e35.js.map