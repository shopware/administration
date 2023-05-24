(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[495],{n7y3:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n("GeFe"),r=n.n(s),i=n("Zvb3"),o=n.n(i),a=Shopware.Data.Criteria,c=function(){function t(e,n,s){r()(this,t),this.component=e,this.propertyGroupRepository=n,this.customFieldRepository=s,this.entities={property:[],customField:[]}}return o()(t,[{key:"fetchPropertyGroupEntities",value:function(t){return this._fetchEntities(t,"property","id",this.propertyGroupRepository)}},{key:"fetchCustomFieldEntities",value:function(t){return this._fetchEntities(t,"customField","name",this.customFieldRepository)}},{key:"_fetchEntities",value:function(t,e,n,s){var r=this;if(!t||t.length<1)return Promise.resolve();var i=t.filter((function(t){return t.type===e})).map((function(t){return t[n]}));if(i.length<1)return Promise.resolve();var o=new a(1,25);return o.addFilter(a.equalsAny(n,i)),s.search(o,Shopware.Context.api).then((function(t){r.entities[e]=t}))}},{key:"getNameTranslation",value:function(t){if("product"===t.type)return this.component.$tc("sw-settings-product-feature-sets.modal.label.".concat(t.name));if("property"===t.type)return this.entities.property.filter((function(e){return e.id===t.id})).map((function(t){return t.translated.name})).pop();if("customField"===t.type){var e=Shopware.State.get("session").currentLocale,n=Shopware.Context.app.fallbackLocale;return this.entities.customField.filter((function(e){return e.name===t.name})).map((function(t){return t.config.label[e]||t.config.label[n]})).pop()}return"referencePrice"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.label.referencePrice"):""}},{key:"getTypeTranslation",value:function(t){return"product"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textProductInfoLabel"):"property"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textPropertyLabel"):"customField"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textCustomFieldLabel"):"referencePrice"===t.type?this.component.$tc("sw-settings-product-feature-sets.modal.textReferencePriceLabel"):""}}]),t}()},oonH:function(t,e,n){"use strict";n.r(e);var s=n("QGb3"),r=n.n(s),i=n("n7y3"),o=Shopware.Mixin,a=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_list %}\n\n{% block sw_settings_product_feature_set_index %}\n<sw-page class="sw-settings-product-feature-sets-list">\n\n    \n    {% block sw_settings_product_feature_set_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="feature_set"\n            :placeholder="$tc(\'sw-settings-product-feature-sets.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_product_feature_set_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_product_feature_set_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_product_feature_set_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }} <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-product-feature-sets.list.textHeadline\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_product_feature_set_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_product_feature_set_list_smart_bar_actions_add %}\n        <sw-button\n            :router-link="{ name: \'sw.settings.product.feature.sets.create\' }"\n            :disabled="!acl.can(\'product_feature_sets.creator\')"\n            class="sw-settings-product-feature-sets-list-grid__create-button"\n            variant="primary"\n        >\n            {{ $tc(\'sw-settings-product-feature-sets.list.buttonAddEssentialCharacteristics\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_product_feature_set_list_smart_bar_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    <template #content>\n        \n        {% block sw_settings_product_feature_set_list_content %}\n        <div class="sw-product-feature-sets-list__content">\n\n            <sw-entity-listing\n                v-if="isLoading || productFeatureSets"\n                ref="swSettingsProductFeatureSetsGrid"\n                class="sw-settings-product-feature-sets-list-grid"\n                :items="productFeatureSets"\n                :columns="getProductFeatureSetsColumns()"\n                :repository="productFeatureSetsRepository"\n                detail-route="sw.settings.product.feature.sets.detail"\n                :disable-data-fetching="true"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                :allow-inline-edit="acl.can(\'product_feature_sets.editor\')"\n                :allow-edit="acl.can(\'product_feature_sets.editor\')"\n                :allow-view="acl.can(\'product_feature_sets.viewer\')"\n                :allow-delete="acl.can(\'product_feature_sets.deleter\')"\n                :is-loading="isLoading"\n                @page-change="onPageChange"\n                @column-sort="onSortColumn"\n                @inline-edit-save="onInlineEditSave"\n            >\n\n                <template #column-features="{ item }">\n                    <span v-if="item.features">\n                        {{ renderFeaturePreview(item.features) }}\n                    </span>\n                </template>\n\n                \n                {% block sw_settings_product_feature_set_list_grid_columns_actions %}\n                <template #actions="{ item }">\n\n                    \n                    {% block sw_settings_product_feature_set_list_grid_columns_actions_edit %}\n                    <sw-context-menu-item\n                        :router-link="{ name: \'sw.settings.product.feature.sets.detail\', params: { id: item.id, edit: \'edit\' }}"\n                        :disabled="!acl.can(\'product_feature_sets.editor\')"\n                        class="sw-product-feature-sets-list__edit-action"\n                    >\n                        {{ $tc(\'sw-settings-product-feature-sets.list.contextMenuEdit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_product_feature_set_list_grid_columns_actions_delete %}\n                    <sw-context-menu-item\n                        :disabled="item.isSystemDefault || !acl.can(\'product_feature_sets.deleter\')"\n                        variant="danger"\n                        class="sw-product-feature-sets-list__delete-action"\n                        @click="onDelete(item.id)"\n                    >\n                        {{ $tc(\'sw-settings-product-feature-sets.list.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_product_feature_set_list_grid_action_modals %}\n                <template #action-modals="{ item }">\n\n                    \n                    {% block sw_settings_product_feature_set_list_delete_modal %}\n                    <sw-modal\n                        v-if="showDeleteModal"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="small"\n                        @modal-close="onCloseDeleteModal"\n                    >\n\n                        \n                        {% block sw_settings_product_feature_set_list_delete_modal_confirm_delete_text %}\n                        <p class="sw-settings-product-feature-sets-list__confirm-delete-text">\n                            {{ $tc(\'sw-settings-product-feature-sets.list.textDeleteConfirm\', 0, { name: item.name }) }}\n                        </p>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_product_feature_set_list_delete_modal_footer %}\n                        <template #modal-footer>\n\n                            \n                            {% block sw_settings_product_feature_set_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'sw-settings-product-feature-sets.list.buttonCancel\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_product_feature_set_list_delete_modal_confirm %}\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="onConfirmDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-product-feature-sets.list.buttonDelete\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n            </sw-entity-listing>\n\n        </div>\n        {% endblock %}\n\n    </template>\n\n</sw-page>\n    {% endblock %}\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[o.getByName("listing"),o.getByName("notification")],data:function(){return{entityName:"product_feature_set",productFeatureSets:null,sortBy:"product_feature_set.name",isLoading:!1,sortDirection:"ASC",naturalSorting:!0,showDeleteModal:!1,translationService:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{productFeatureSetsRepository:function(){return this.repositoryFactory.create("product_feature_set")},propertyGroupRepository:function(){return this.repositoryFactory.create("property_group")},customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},featureGridTranslationService:function(){return null===this.translationService&&(this.translationService=new i.a(this,this.propertyGroupRepository,this.customFieldRepository)),this.translationService}},methods:{metaInfo:function(){return{title:this.$createTitle()}},getList:function(){var t=this;this.isLoading=!0,this.naturalSorting="name"===this.sortBy;var e=new a(this.page,this.limit);e.setTerm(this.term),e.addSorting(a.sort(this.sortBy,this.sortDirection,this.naturalSorting)),this.productFeatureSetsRepository.search(e).then((function(e){return t.total=e.total,t.productFeatureSets=e,e})).then((function(e){var n=e.reduce((function(t,e){return e.features&&e.features.length&&(t=[].concat(r()(t),r()(e.features||[]))),t}),[]);return Promise.all([t.featureGridTranslationService.fetchPropertyGroupEntities(n),t.featureGridTranslationService.fetchCustomFieldEntities(n)])})).then((function(){t.isLoading=!1}))},onChangeLanguage:function(t){Shopware.State.commit("context/setApiLanguageId",t),this.getList()},onInlineEditSave:function(t,e){var n=this;t.then((function(){n.createNotificationSuccess({message:n.$tc("sw-settings-product-feature-sets.detail.messageSaveSuccess",0,{name:e.name})})})).catch((function(){n.getList(),n.createNotificationError({message:n.$tc("sw-settings-product-feature-sets.detail.messageSaveError")})}))},onDelete:function(t){this.showDeleteModal=t},onCloseDeleteModal:function(){this.showDeleteModal=!1},onConfirmDelete:function(t){var e=this;return this.showDeleteModal=!1,this.productFeatureSetsRepository.delete(t).then((function(){e.getList()}))},getProductFeatureSetsColumns:function(){return[{property:"name",inlineEdit:"string",label:"sw-settings-product-feature-sets.list.columnTemplate",routerLink:"sw.settings.product.feature.sets.detail",allowResize:!0,primary:!0},{property:"description",inlineEdit:"string",label:"sw-settings-product-feature-sets.list.columnDescription",allowResize:!0},{property:"features",label:"sw-settings-product-feature-sets.list.columnValues",allowResize:!0}]},renderFeaturePreview:function(t){var e=this;if(!t.length)return null;var n=t.slice(0,4).map((function(t){return e.featureGridTranslationService.getNameTranslation(t)})).join(", ");return t.length>4?"".concat(n,", ..."):n}}}}}]);