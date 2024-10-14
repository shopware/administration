(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[21751],{147723:function(){},21751:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return l}}),e(493084);let{Mixin:i,Data:{Criteria:s}}=Shopware;var l={template:'\n{% block sw_settings_shipping_index %}\n<sw-page class="sw-settings-shipping-list">\n\n    \n    {% block sw_settings_shipping_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="shipping_method"\n            :placeholder="$tc(\'sw-settings-shipping.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_shipping_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_shipping_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }} <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-shipping.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_shipping_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_shipping_list_smart_bar_actions_add %}\n        <sw-button\n            :router-link="{ name: \'sw.settings.shipping.create\' }"\n            :disabled="!acl.can(\'shipping.creator\') || undefined"\n            variant="primary"\n        >\n            {{ $tc(\'sw-settings-shipping.list.buttonAddShippingMethod\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    <template #content>\n        \n        {% block sw_settings_shipping_list_content %}\n        <div class="sw-settings-shipping-list__content">\n            \n            {% block sw_settings_shipping_list_grid %}\n            <sw-entity-listing\n                v-if="entitySearchable"\n                ref="swSettingsTaxGrid"\n                :items="shippingMethods"\n                :columns="columns"\n                :repository="shippingRepository"\n                :sort-by="currentSortBy"\n                :sort-direction="sortDirection"\n                :full-page="false"\n                detail-route="sw.settings.shipping.detail"\n                :show-selection="undefined"\n                :show-settings="true"\n                :allow-inline-edit="false"\n                :allow-edit="acl.can(\'shipping.editor\') || undefined"\n                :allow-delete="acl.can(\'shipping.deleter\') || undefined"\n                :is-loading="isLoading"\n                @column-sort="onSortColumn"\n            >\n                \n                {% block sw_setting_shipping_list_grid_columns %}\n                \n                {% block sw_settings_shipping_list_grid_columns_active %}\n                <template\n                    #column-active="{ item, isInlineEdit }"\n                >\n                    \n                    {% block sw_settings_shipping_list_grid_columns_active_inline_edit %}\n                    <template v-if="isInlineEdit">\n                        <sw-checkbox-field\n                            v-model:value="item.active"\n                        />\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_shipping_list_grid_columns_active_content %}\n                    <template v-else>\n                        <sw-icon\n                            v-if="item.active"\n                            name="regular-checkmark-xs"\n                            small\n                            class="is--active"\n                        />\n                        <sw-icon\n                            v-else\n                            name="regular-times-s"\n                            small\n                            class="is--inactive"\n                        />\n                    </template>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_shipping_list_grid_columns_tax_type %}\n                <template #column-taxType="{ item, isInlineEdit }">\n                    \n                    {% block sw_settings_shipping_list_grid_columns_tax_type_inline_edit %}\n                    <template v-if="isInlineEdit">\n                        <sw-single-select\n                            v-model:value="item.taxType"\n                            required\n                            show-clearable-button\n                            size="small"\n                            :placeholder="$tc(\'sw-settings-shipping.list.placeholderTaxType\')"\n                            :options="shippingCostTaxOptions"\n                        />\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_shipping_list_grid_columns_tax_type_content %}\n                    <template v-else>\n                        {{ shippingTaxTypeLabel(item.taxType) }}\n                    </template>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_shipping_list_grid_columns_actions %}\n                <template #actions="{ item }">\n                    \n                    {% block sw_settings_shipping_list_grid_columns_actions_edit %}\n                    <sw-context-menu-item\n                        :router-link="{ name: \'sw.settings.shipping.detail\', params: { id: item.id, edit: \'edit\' }}"\n                        :disabled="!acl.can(\'shipping.editor\') || undefined"\n                        class="sw-settings-shipping-list__edit-action"\n                    >\n                        {{ $tc(\'sw-settings-shipping.list.contextMenuEdit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_shipping_list_grid_columns_actions_delete %}\n                    <sw-context-menu-item\n                        variant="danger"\n                        :disabled="!acl.can(\'shipping.deleter\') || undefined"\n                        @click="onDelete(item.id)"\n                    >\n                        {{ $tc(\'sw-settings-shipping.list.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n                {% endblock %}\n                \n                {% block sw_settings_shipping_list_grid_action_modals %}\n                <template #action-modals="{ item }">\n                    \n                    {% block sw_settings_shipping_list_delete_modal %}\n                    <sw-modal\n                        v-if="showDeleteModal === item.id"\n                        :title="$tc(\'global.default.warning\')"\n                        variant="small"\n                        @modal-close="onCloseDeleteModal"\n                    >\n                        \n                        {% block sw_settings_shipping_list_delete_modal_confirm_delete_text %}\n                        <p class="sw-settings-shipping-list__confirm-delete-text">\n                            {{ $tc(\'sw-settings-shipping.list.textDeleteConfirm\', 0, { name: item.name }) }}\n                        </p>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_shipping_list_delete_modal_footer %}\n                        <template #modal-footer>\n                            \n                            {% block sw_settings_shipping_list_delete_modal_cancel %}\n                            <sw-button\n                                size="small"\n                                @click="onCloseDeleteModal"\n                            >\n                                {{ $tc(\'sw-settings-shipping.list.buttonCancel\') }}\n                            </sw-button>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_shipping_list_delete_modal_confirm %}\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="onConfirmDelete(item.id)"\n                            >\n                                {{ $tc(\'sw-settings-shipping.list.buttonDelete\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-modal>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_settings_shipping_list_empty_state %}\n            <template v-if="!isLoading && !total">\n                <sw-empty-state\n                    v-if="isValidTerm(term)"\n                    :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                >\n                    <template #default>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                        <router-link\n                            class="sw-empty-state__description-link"\n                            :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                        >\n                            {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                        </router-link>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                    </template>\n                </sw-empty-state>\n\n                <sw-empty-state\n                    v-else\n                    :title="$tc(\'sw-settings-shipping.list.messageEmpty\')"\n                />\n            </template>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_settings_shipping_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n            \n            {% block sw_settings_shipping_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-settings-shipping.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],mixins:[i.getByName("listing"),i.getByName("notification")],data(){return{shippingMethods:null,isLoading:!1,sortBy:"name",sortDirection:"ASC",skeletonItemAmount:3,showDeleteModal:!1,searchConfigEntity:"shipping_method"}},metaInfo(){return{title:this.$createTitle()}},computed:{shippingRepository(){return this.repositoryFactory.create("shipping_method")},columns(){return[{property:"name",label:"sw-settings-shipping.list.columnName",inlineEdit:"string",routerLink:"sw.settings.shipping.detail",allowResize:!0,primary:!0},{property:"description",label:"sw-settings-shipping.list.columnDescription",inlineEdit:"string",allowResize:!0},{property:"taxType",label:"sw-settings-shipping.list.columnTaxType",inlineEdit:"string",allowResize:!0},{property:"active",label:"sw-settings-shipping.list.columnActive",inlineEdit:"boolean",allowResize:!0,align:"center"},{property:"position",label:"sw-settings-shipping.list.columnPosition",inlineEdit:"number",allowResize:!0,align:"center"}]},listingCriteria(){let n=new s(1,25);return this.term&&n.setTerm(this.term),n.addSorting(s.sort("name","ASC")),n},shippingCostTaxOptions(){return[{label:this.$tc("sw-settings-shipping.shippingCostOptions.auto"),value:"auto"},{label:this.$tc("sw-settings-shipping.shippingCostOptions.highest"),value:"highest"},{label:this.$tc("sw-settings-shipping.shippingCostOptions.fixed"),value:"fixed"}]}},methods:{async getList(){this.isLoading=!0;let n=await this.addQueryScores(this.term,this.listingCriteria);if(!this.entitySearchable){this.isLoading=!1,this.total=0;return}this.freshSearchTerm&&n.resetSorting(),this.shippingRepository.search(n).then(n=>(this.total=n.total,this.shippingMethods=n,n)).finally(()=>{this.isLoading=!1})},onInlineEditSave(n){this.isLoading=!0;let t=n.name||n.translated.name;return this.entityRepository.save(n).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-shipping.list.messageSaveSuccess",0,{name:t})})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-shipping.list.messageSaveError",0,{name:t})})}).finally(()=>{this.isLoading=!1})},onDelete(n){this.showDeleteModal=n},onConfirmDelete(n){let t=this.shippingMethods.find(t=>t.id===n).name;this.onCloseDeleteModal(),this.shippingRepository.delete(n).then(()=>{this.createNotificationSuccess({message:this.$tc("sw-settings-shipping.list.messageDeleteSuccess",0,{name:t})})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-shipping.list.messageDeleteError",0,{name:t})})}).finally(()=>{this.showDeleteModal=null,this.getList()})},onCloseDeleteModal(){this.showDeleteModal=!1},onChangeLanguage(n){Shopware.State.commit("context/setApiLanguageId",n),this.getList()},shippingTaxTypeLabel(n){if(!n)return"";let t=this.shippingCostTaxOptions.find(t=>n===t.value)||"";return t?.label}}}},493084:function(n,t,e){var i=e(147723);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals),e(745346).Z("5d4b8b08",i,!0,{})}}]);