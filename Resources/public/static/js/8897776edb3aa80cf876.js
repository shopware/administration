(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[37281],{738866:function(){},837281:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}}),n(779810);let{Context:a}=Shopware,{Criteria:s}=Shopware.Data;var l={template:'\n{% block sw_tax_rule_card %}\n<sw-card\n    :title="$tc(\'sw-settings-tax.taxRuleCard.cardTitle\')"\n    class="sw-tax-rule-card"\n    position-identifier="sw-tax-rule"\n    :class="taxRuleCardClasses"\n    :is-loading="isLoading || taxRulesLoading || cardLoading"\n>\n    <template #grid>\n        <template v-if="!taxRulesEmpty && !disabled">\n            \n            {% block sw_tax_rule_card_header %}\n            <sw-card-section\n                divider="bottom"\n                secondary\n                slim\n            >\n                \n                {% block sw_tax_rule_card_header_filter %}\n                <sw-card-filter\n                    :placeholder="$tc(\'sw-settings-tax.taxRuleCard.searchBarPlaceholder\')"\n                    @sw-card-filter-term-change="onSearchTermChange"\n                >\n                    <template #filter>\n                        \n                        {% block sw_tax_rule_card_header_create_rule_button %}\n                        <sw-button\n                            v-tooltip.bottom="{\n                                message: $tc(\'sw-privileges.tooltip.warning\'),\n                                disabled: acl.can(\'tax.editor\'),\n                                showOnDisabledElements: true\n                            }"\n                            class="sw-tax-rule-grid-button"\n                            size="small"\n                            :disabled="!acl.can(\'tax.editor\')"\n                            @click="showModal = true"\n                        >\n\n                            \n                            {% block sw_tax_rule_card_header_create_document_button_label %}\n                            {{ $tc(\'sw-settings-tax.taxRuleCard.labelCreateNew\') }}\n                            {% endblock %}\n\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                </sw-card-filter>\n                {% endblock %}\n\n            </sw-card-section>\n            {% endblock %}\n\n            \n            {% block sw_tax_rule_card_grid %}\n            <sw-data-grid\n                :data-source="taxRules"\n                :columns="getColumns"\n                :full-page="false"\n                :show-settings="true"\n                :show-selection="false"\n                :show-actions="true"\n                :is-loading="isLoading"\n                :allow-column-edit="false"\n                :allow-inline-edit="false"\n                v-bind="{sortBy, sortDirection}"\n                identifier="sw-tax-rule-grid"\n                @column-sort="onColumnSort"\n            >\n                \n                {% block sw_settings_tax_rule_grid_column_tax_rate %}\n                <template #column-taxRate="{ item, isInlineEdit, compact }">\n                    <template v-if="isInlineEdit">\n                        <sw-number-field\n                            v-model:value="item.taxRate"\n                            :digits="3"\n                            :size="compact ? \'small\' : \'default\'"\n                        >\n                            <template #suffix>\n                                <span>\n                                    <span v-html="$sanitize($tc(\'sw-settings-tax.general.taxRateSymbol\'))"></span>\n                                </span>\n                            </template>\n                        </sw-number-field>\n                    </template>\n                    <template v-else>\n                        {{ item.taxRate }}%\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_tax_rule_grid_column_tax_rule_type_type_name %}\n                <template #column-type.typeName="{ item }">\n                    <component\n                        :is="getTypeCellComponent(item)"\n                        v-if="getTypeCellComponent(item)"\n                        :tax-rule="item"\n                    />\n                    <template v-else>\n                        {{ item.type.typeName }}\n                    </template>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_tax_rule_grid_column_tax_rule_active_from %}\n                <template #column-activeFrom="{ item }">\n                    {{ dateFilter(item.activeFrom, {\n                    hour: \'2-digit\',\n                    minute: \'2-digit\',\n                    day: \'2-digit\',\n                    month: \'2-digit\',\n                    year: \'numeric\'\n                    }) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_tax_list_grid_columns_actions %}\n                <template #actions="{ item }">\n                    \n                    {% block sw_settings_tax_list_grid_columns_actions_edit %}\n                    <sw-context-menu-item\n                        class="sw-tax-list__edit-action"\n                        :disabled="!acl.can(\'tax.editor\')"\n                        @click="showRuleModal(item)"\n                    >\n                        {{ $tc(\'sw-settings-tax.list.contextMenuEdit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_tax_list_grid_columns_actions_delete %}\n                    <sw-context-menu-item\n                        class="sw-tax-list__delete-action"\n                        variant="danger"\n                        :disabled="!acl.can(\'tax.editor\')"\n                        @click="onDelete(item.id)"\n                    >\n                        {{ $tc(\'sw-settings-tax.list.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_tax_list_grid_action_modals %}\n                <template #action-modals="{ item }">\n                    \n                    {% block sw_settings_tax_list_delete_modal %}\n                    <sw-modal\n                        v-if="showDeleteModal === item.id"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="small"\n                        @modal-close="onCloseDeleteModal"\n                    >\n                        \n                        {% block sw_settings_tax_list_delete_modal_confirm_delete_text %}\n                        <p class="sw-settings-tax-list__confirm-delete-text">\n                            {{ $tc(\'sw-settings-tax.taxRuleCard.textDeleteConfirm\', 0, { name: item.country.name, type: item.type.typeName }) }}\n                        </p>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_tax_list_delete_modal_footer %}\n                        <template #modal-footer>\n                            \n                            {% block sw_settings_tax_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'sw-settings-tax.list.buttonCancel\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_tax_list_delete_modal_confirm %}\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="onConfirmDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-tax.list.buttonDelete\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_tax_list_grid_pagination %}\n                <template #pagination>\n                    <sw-pagination\n                        v-bind="{ page, limit, total }"\n                        :total-visible="7"\n                        @page-change="paginate"\n                    />\n                </template>\n                {% endblock %}\n\n            </sw-data-grid>\n            {% endblock %}\n        </template>\n    </template>\n\n    \n    {% block sw_tax_rule_card_grid_column_modal %}\n    <sw-settings-tax-rule-modal\n        v-if="showModal"\n        :tax="tax"\n        :current-rule="currentRule"\n        @modal-close="onModalClose"\n    />\n    {% endblock %}\n\n    \n    {% block sw_tax_rule_card_empty_state %}\n    <template v-if="taxRulesEmpty || disabled">\n        <div class="sw-settings-tax-rule-card__empty-state">\n            \n            {% block sw_tax_rule_card_empty_state_image %}\n            <img\n                :src="assetFilter(\'administration/static/img/empty-states/settings-empty-state.svg\')"\n                alt=""\n            >\n            {% endblock %}\n\n            \n            {% block sw_tax_rule_card_empty_state_label %}\n            <div class="sw-settings-tax-rule-card__empty-state--label">\n                <p v-if="disabled">\n                    {{ $tc(\'sw-settings-tax.taxRuleCard.createStateDescription\') }}\n                </p>\n                <p v-else>\n                    {{ $tc(\'sw-settings-tax.taxRuleCard.emptyStateDescription\') }}\n                </p>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_tax_rule_card_empty_state_button %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'tax.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-settings-tax-rule-card__empty-state--button"\n                variant="ghost"\n                size="small"\n                :disabled="disabled || !acl.can(\'tax.editor\')"\n                @click="showModal = true"\n            >\n                {{ $tc(\'sw-settings-tax.taxRuleCard.labelCreateNew\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl","feature"],props:{tax:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data(){return{taxRulesLoading:!1,cardLoading:!1,taxRules:[],showModal:!1,showDeleteModal:!1,currentRule:null,term:"",page:1,limit:25,sortBy:"country.name",sortDirection:"ASC",total:void 0}},computed:{taxRuleRepository(){return this.repositoryFactory.create("tax_rule")},taxRulesEmpty(){return 0===this.taxRules.length&&!this.term},taxRuleCardClasses(){return{"sw-tax-rule-card--is-empty":this.taxRulesEmpty}},taxRuleCriteria(){let t=new s(this.page,this.limit);return t.addSorting(s.sort(this.sortBy,this.sortDirection)),t.addAssociation("type"),t.addAssociation("country"),t.addFilter(s.equals("taxId",this.tax.id)),this.term&&t.addFilter(s.multi("OR",[s.contains("taxRate",this.term),s.contains("type.technicalName",this.term),s.contains("type.typeName",this.term),s.contains("country.name",this.term)])),t},getColumns(){return[{property:"country.name",dataIndex:"country.name",label:"sw-settings-tax.taxRuleCard.labelCountryName",primary:!0},{property:"type.typeName",dataIndex:"type.typeName",label:"sw-settings-tax.taxRuleCard.labelAppliesOn"},{property:"taxRate",dataIndex:"taxRate",label:"sw-settings-tax.taxRuleCard.labelTaxRate"},{property:"activeFrom",dataIndex:"activeFrom",label:"sw-settings-tax.taxRuleCard.labelActiveFrom"}]},assetFilter(){return Shopware.Filter.getByName("asset")},dateFilter(){return Shopware.Filter.getByName("date")}},created(){this.createdComponent()},methods:{createdComponent(){this.getList()},getList(){return this.taxRulesLoading=!0,this.taxRuleRepository.search(this.taxRuleCriteria,a.api).then(t=>(this.total=t.total,this.taxRules=t,this.taxRulesLoading=!1,Promise.resolve()))},paginate({page:t,limit:e}){this.page=t,this.limit=e,this.getList()},onColumnSort(t){"ASC"===this.sortDirection&&t.dataIndex===this.sortBy?this.sortDirection="DESC":this.sortDirection="ASC",this.sortBy=t.dataIndex,this.getList()},onSearchTermChange(t){this.term=t,this.getList()},onModalClose(){this.showModal=!1,this.currentRule=null,this.$nextTick(()=>this.getList())},showRuleModal(t){this.currentRule=t,this.showModal=!0},onDelete(t){this.showDeleteModal=t},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(t){return this.showDeleteModal=!1,this.taxRuleRepository.delete(t,a.api).then(()=>{this.getList()})},getTypeCellComponent(t){let e=t.type.technicalName.replace(/_/g,"-");return Shopware.Component.getComponentRegistry().get(`sw-settings-tax-rule-type-${e}-cell`)}}}},779810:function(t,e,n){var a=n(738866);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),n(745346).Z("4a2ecb64",a,!0,{})}}]);