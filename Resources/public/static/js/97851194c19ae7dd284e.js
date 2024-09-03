(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[37254],{315634:function(){},37254:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}}),n(749258);let{Mixin:a}=Shopware,{Criteria:s}=Shopware.Data;var i={template:'\n{% block sw_settings_list %}\n\n{% block sw_settings_tax_index %}\n<sw-page class="sw-settings-tax-list">\n    \n    {% block sw_settings_tax_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="tax"\n            :placeholder="$tc(\'sw-settings-tax.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_tax_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_tax_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }} <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-tax.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_tax_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_tax_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_tax_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'tax.creator\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-tax-list__button-create"\n            variant="primary"\n            :disabled="!acl.can(\'tax.creator\') || undefined"\n            :router-link="{ name: \'sw.settings.tax.create\' }"\n        >\n            {{ $tc(\'sw-settings-tax.list.buttonAddTax\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_settings_tax_list_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_tax_list_content_card %}\n            <sw-card\n                position-identifier="sw-settings-tax-list-content"\n                class="sw-tax-card"\n                :title="$tc(\'sw-settings-tax.list.taxCardTitle\')"\n                :is-loading="isLoading"\n            >\n                <template #grid>\n                    \n                    {% block sw_settings_tax_list_grid %}\n                    <sw-entity-listing\n                        ref="swSettingsTaxGrid"\n                        class="sw-settings-tax-list-grid"\n                        detail-route="sw.settings.tax.detail"\n                        :items="tax"\n                        :columns="getTaxColumns()"\n                        :repository="taxRepository"\n                        :full-page="false"\n                        :show-selection="false"\n                        :is-loading="isLoading"\n                        :allow-view="acl.can(\'tax.viewer\') || undefined"\n                        :allow-edit="acl.can(\'tax.editor\') || undefined"\n                        :allow-inline-edit="acl.can(\'tax.editor\') || undefined"\n                        :allow-delete="acl.can(\'tax.deleter\') || undefined"\n                        :disable-data-fetching="true"\n                        :sort-by="sortBy"\n                        :sort-direction="sortDirection"\n                        @column-sort="onSortColumn"\n                        @page-change="onPageChange"\n                        @inline-edit-save="onInlineEditSave"\n                        @inline-edit-cancel="onInlineEditCancel"\n                    >\n                        \n                        {% block sw_settings_tax_list_grid_column_default_name %}\n                        <template #column-name="{ item, column, isInlineEdit, compact }">\n                            {# if it is not a default tax, the default slot content will be rendered #}\n                            <router-link\n                                v-if="isShopwareDefaultTax(item)"\n                                class="sw-data-grid__cell-value"\n                                :to="{ name: column.routerLink, params: { id: item.id } }"\n                            >\n                                {{ getLabel(item) }}\n                            </router-link>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tax_list_grid_column_default_tax_rate %}\n                        <template #column-taxRate="{ item, isInlineEdit, compact }">\n                            <template v-if="isInlineEdit">\n                                <sw-number-field\n                                    v-model:value="item.taxRate"\n                                    :digits="3"\n                                    :size="compact ? \'small\' : \'default\'"\n                                >\n                                    <template #suffix>\n                                        <span>\n                                            <span v-html="$sanitize($tc(\'sw-settings-tax.general.taxRateSymbol\'))"></span>\n                                        </span>\n                                    </template>\n                                </sw-number-field>\n                            </template>\n                            <template v-else>\n                                {{ item.taxRate }}%\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tax_list_grid_column_default %}\n                        <template #column-default="{ item, isInlineEdit }">\n                            <template v-if="isInlineEdit">\n                                \n                                {% block sw_settings_tax_list_grid_column_default_editor %}\n                                <sw-checkbox-field\n                                    :value="isSelectedDefaultRate(item)"\n                                    @update:value="value => setSelectedDefaultRate(value, item.id)"\n                                />\n                                {% endblock %}\n                            </template>\n                            <template v-else>\n                                \n                                {% block sw_settings_tax_list_grid_column_default_label %}\n                                <sw-icon\n                                    v-if="isSelectedDefaultRate(item)"\n                                    name="regular-checkmark-xs"\n                                    small\n                                    class="is--active"\n                                />\n                                <div v-else></div>\n                                {% endblock %}\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tax_list_grid_columns_actions %}\n                        <template #actions="{ item }">\n                            \n                            {% block sw_settings_tax_list_grid_columns_actions_edit %}\n                            <sw-context-menu-item\n                                class="sw-tax-list__edit-action"\n                                :disabled="!acl.can(\'tax.editor\') || undefined"\n                                :router-link="{\n                                    name: \'sw.settings.tax.detail\',\n                                    params: { id: item.id, edit: \'edit\' }\n                                }"\n                            >\n                                {{ $tc(\'sw-settings-tax.list.contextMenuEdit\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_tax_list_grid_columns_actions_delete %}\n                            <sw-context-menu-item\n                                class="sw-tax-list__delete-action"\n                                variant="danger"\n                                :disabled="!acl.can(\'tax.deleter\') || undefined"\n                                @click="onDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-tax.list.contextMenuDelete\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tax_list_grid_action_modals %}\n                        <template #action-modals="{ item }">\n                            \n                            {% block sw_settings_tax_list_delete_modal %}\n                            <sw-modal\n                                v-if="showDeleteModal === item.id"\n                                :title="$tc(\'global.default.warning\')"\n                                variant="small"\n                                @modal-close="onCloseDeleteModal"\n                            >\n                                \n                                {% block sw_settings_tax_list_delete_modal_confirm_delete_text %}\n                                <p class="sw-settings-tax-list__confirm-delete-text">\n                                    {{ $tc(\'sw-settings-tax.list.textDeleteConfirm\', 0, { name: item.name }) }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_tax_list_delete_modal_footer %}\n                                <template #modal-footer>\n                                    \n                                    {% block sw_settings_tax_list_delete_modal_cancel %}\n                                    <sw-button\n                                        size="small"\n                                        @click="onCloseDeleteModal"\n                                    >\n                                        {{ $tc(\'sw-settings-tax.list.buttonCancel\') }}\n                                    </sw-button>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_settings_tax_list_delete_modal_confirm %}\n                                    <sw-button\n                                        variant="danger"\n                                        size="small"\n                                        @click="onConfirmDelete(item.id)"\n                                    >\n                                        {{ $tc(\'sw-settings-tax.list.buttonDelete\') }}\n                                    </sw-button>\n                                    {% endblock %}\n                                </template>\n                                {% endblock %}\n                            </sw-modal>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-entity-listing>\n                    {% endblock %}\n                </template>\n            </sw-card>\n            {% endblock %}\n\n            <sw-card\n                position-identifier="sw-settings-tax-provider-list-content"\n                class="sw-settings-tax-provider-list-content"\n                :title="$tc(\'sw-settings-tax.list.taxProvider.cardTitle\')"\n                :is-loading="isLoading"\n            >\n                <template #grid>\n                    <template v-if="showChangePriority">\n                        <div class="sw-settings-tax-provider-list-content__bg">\n                            <sw-button-process\n                                class="sw-settings-tax-provider-list-button__change-priority"\n                                :disabled="isLoading"\n                                :is-loading="isLoading"\n                                :process-success="false"\n                                variant="ghost"\n                                @click="showSortingModal = true"\n                            >\n                                {{ $tc(\'sw-settings-tax.list.taxProvider.changePriorityButton\') }}\n                            </sw-button-process>\n                        </div>\n                    </template>\n\n                    <template v-if="!isLoading">\n                        <sw-empty-state\n                            v-if="noTaxProvidersFound"\n                            :title="$tc(\'sw-settings-tax.list.taxProvider.messageEmptyTitle\')"\n                            :absolute="false"\n                            :show-description="false"\n                        />\n\n                        <div\n                            v-else\n                            class="sw-tax-provider-items"\n                        >\n                            <template\n                                v-for="taxProvider in taxProviders"\n                                :key="taxProvider.id"\n                            >\n                                <div\n                                    class="sw-tax-provider-item"\n                                >\n                                    <div class="sw-tax-provider__name">\n                                        {{ taxProvider.translated.name }}\n                                    </div>\n\n                                    <div class="sw-tax-provider__link">\n                                        <router-link\n                                            class="sw-tax-provider__show-detail-link"\n                                            :to="editLink(taxProvider.id)"\n                                            :disabled="!acl.can(\'tax.editor\') || undefined"\n                                        >\n                                            {{ $tc(\'sw-settings-tax.list.taxProvider.editDetailsLink\') }}\n                                        </router-link>\n                                    </div>\n\n                                    <sw-switch-field\n                                        :label="$tc(\'sw-settings-tax.list.taxProvider.labelActive\')"\n                                        :disabled="!acl.can(\'tax.editor\') || undefined"\n                                        :value="taxProvider.active"\n                                        @update:value="onChangeTaxProviderActive(taxProvider)"\n                                    />\n                                </div>\n                            </template>\n                        </div>\n                    </template>\n\n                    <template v-else>\n                        <sw-skeleton />\n                    </template>\n                </template>\n            </sw-card>\n\n            <sw-settings-tax-provider-sorting-modal\n                v-if="showSortingModal"\n                :tax-providers="taxProviders"\n                @modal-close="showSortingModal = false"\n                @modal-save="loadTaxProviders"\n            />\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n    {% endblock %}\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","systemConfigApiService"],mixins:[a.getByName("listing"),a.getByName("notification")],data(){return{tax:null,taxProviders:null,sortBy:"position",isLoading:!1,sortDirection:"ASC",naturalSorting:!1,showDeleteModal:!1,defaultTaxRateId:null,selectedDefaultTaxRateId:null,showSortingModal:!1}},metaInfo(){return{title:this.$createTitle()}},computed:{taxRepository(){return this.repositoryFactory.create("tax")},taxProviderRepository(){return this.repositoryFactory.create("tax_provider")},taxProviderCriteria(){let t=new s(this.page,this.limit);return t.addSorting(s.sort("priority","DESC")),t},showChangePriority(){return this.taxProviders?.length>1},noTaxProvidersFound(){return this.taxProviders?.length<1}},methods:{getList(){let t=new s(this.page,this.limit);this.isLoading=!0,this.naturalSorting="name"===this.sortBy,t.setTerm(this.term),t.addSorting(s.sort(this.sortBy,this.sortDirection,this.naturalSorting)),"name"!==this.sortBy&&t.addSorting(s.sort("name","ASC",!0)),this.getDefaultTaxRate().then(t=>{this.defaultTaxRateId=t,this.selectedDefaultRate=t}),this.taxRepository.search(t).then(t=>(this.total=t.total,this.tax=t,this.isLoading=!1,t)).catch(()=>{this.isLoading=!1}),this.loadTaxProviders()},editLink(t){return{name:"sw.settings.tax.tax_provider.detail",params:{id:t}}},onChangeLanguage(t){Shopware.State.commit("context/setApiLanguageId",t),this.getList()},async onInlineEditSave(t,e){t.then(()=>{if(this.selectedDefaultTaxRateId===this.defaultTaxRateId){this.createNotificationSuccess({message:this.$tc("sw-settings-tax.detail.messageSaveSuccess",0,{name:e.name})});return}this.systemConfigApiService.saveValues({"core.tax.defaultTaxRate":this.selectedDefaultTaxRateId}).then(()=>{this.defaultTaxRateId=this.selectedDefaultTaxRateId,this.createNotificationSuccess({message:this.$tc("sw-settings-tax.detail.messageSaveSuccess",0,{name:e.name})})}).catch(()=>{this.getList(),this.createNotificationError({message:this.$tc("sw-settings-tax.detail.messageSaveError")})})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-tax.detail.messageSaveError")})})},async onInlineEditCancel(t){await t,this.selectedDefaultTaxRateId=null,this.getDefaultTaxRate().then(t=>{this.defaultTaxRateId=t})},onDelete(t){this.showDeleteModal=t},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(t){return this.showDeleteModal=!1,this.taxRepository.delete(t).then(()=>{this.getList()})},getTaxColumns(){return[{property:"name",dataIndex:"name",inlineEdit:"string",label:"sw-settings-tax.list.columnName",routerLink:"sw.settings.tax.detail",width:"250px",primary:!0},{property:"taxRate",inlineEdit:"number",label:"sw-settings-tax.list.columnDefaultTaxRate"},{property:"default",inlineEdit:"boolean",label:"sw-settings-tax.list.columnDefault"}]},isShopwareDefaultTax(t){return this.$te(`global.tax-rates.${t.name}`,"en-GB")},getLabel(t){return this.isShopwareDefaultTax(t)?this.$tc(`global.tax-rates.${t.name}`):t.name},isSelectedDefaultRate(t){return this.defaultTaxRateId===t.id},setSelectedDefaultRate(t,e){this.selectedDefaultTaxRateId=t?e:null},getDefaultTaxRate(){return this.systemConfigApiService.getValues("core.tax").then(t=>t["core.tax.defaultTaxRate"]??null).catch(()=>null)},loadTaxProviders(){this.isLoading=!0,this.taxProviderRepository.search(this.taxProviderCriteria).then(t=>{this.taxProviders=t}).finally(()=>{this.isLoading=!1})},onChangeTaxProviderActive(t){t.active=!t.active,this.taxProviderRepository.save(t,Shopware.Context.api).then(()=>{let e=t.active?"active":"inactive";this.createNotificationSuccess({message:this.$tc(`sw-settings-tax.list.taxProvider.statusChangedSuccess.${e}`,0,{name:t.translated.name})})})}}}},749258:function(t,e,n){var a=n(315634);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),n(745346).Z("de7fc852",a,!0,{})}}]);