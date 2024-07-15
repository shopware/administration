(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9241],{260410:function(){},709241:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return s}}),o(777614);let{Mixin:e}=Shopware,{Criteria:i}=Shopware.Data;var s={template:'\n{% block sw_promotion_v2_list %}\n<sw-page class="sw-promotion-v2-list">\n\n    \n    {% block sw_promotion_v2_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="promotion"\n            :placeholder="$tc(\'sw-promotion-v2.list.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_promotion_v2_list_smart_bar_header_title %}\n        <h2>\n\n            \n            {% block sw_promotion_v2_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-promotion-v2.list.textTitle\') }}\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n\n        </h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_promotion_v2_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip="addButtonTooltip"\n            class="sw-promotion-v2-list__smart-bar-button-add"\n            variant="primary"\n            :router-link="{ name: \'sw.promotion.v2.create\' }"\n            :disabled="!acl.can(\'promotion.creator\')"\n        >\n            {{ $tc(\'sw-promotion-v2.list.buttonAddPromotion\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_content %}\n    <template #content>\n        <div class="sw-promotion-v2-list__content">\n\n            \n            {% block sw_promotion_v2_list_grid %}\n            <sw-entity-listing\n                v-if="entitySearchable"\n                :repository="promotionRepository"\n                :columns="promotionColumns"\n                :items="promotions"\n                detail-route="sw.promotion.v2.detail"\n                :is-loading="isLoading"\n                :allow-inline-edit="acl.can(\'promotion.editor\')"\n                :show-selection="acl.can(\'promotion.deleter\')"\n                :allow-edit="acl.can(\'promotion.editor\')"\n                :allow-view="acl.can(\'promotion.viewer\')"\n                allow-column-edit\n                full-page\n                @update-records="updateTotal"\n            >\n\n                \n                {% block sw_promotion_v2_list_grid_columns %}\n                \n                {% block sw_promotion_v2_list_grid_columns_active %}\n                <template #column-active="{ item }">\n                    <sw-icon\n                        v-if="item.active"\n                        class="sw-promotion-v2-list__icon-activity is--active"\n                        name="regular-checkmark-xs"\n                    />\n                    <sw-icon\n                        v-else\n                        class="sw-promotion-v2-list__icon-activity is--inactive"\n                        name="regular-times-s"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_list_grid_columns_valid_from %}\n                <template #column-validFrom="{ item }">\n                    {{ dateFilter(item.validFrom, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_list_grid_columns_valid_until %}\n                <template #column-validUntil="{ item }">\n                    {{ dateFilter(item.validUntil, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                </template>\n                {% endblock %}\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_list_grid_columns_actions %}\n                \n                {% block sw_promotion_v2_list_grid_columns_actions_delete %}\n                <template #delete-action="{ item, showDelete }">\n                    <sw-context-menu-item\n                        variant="danger"\n                        :disabled="(item && item.orderCount > 0) || !acl.can(\'promotion.deleter\')"\n                        @click="showDelete(item.id)"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-context-menu-item>\n                </template>\n                {% endblock %}\n                {% endblock %}\n\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_list_empty_state %}\n            <template v-if="!isLoading && !total">\n                <sw-promotion-v2-empty-state-hero\n                    v-if="isValidTerm(term)"\n                    :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                    :description="$tc(\'sw-empty-state.messageNoResultSubline\')"\n                />\n                <sw-promotion-v2-empty-state-hero\n                    v-else\n                    :title="$tc(\'sw-promotion-v2.list.titleEmpty\')"\n                    :description="$tc(\'sw-promotion-v2.list.descriptionEmpty\')"\n                >\n\n                    \n                    {% block sw_promotion_v2_list_empty_state_actions %}\n                    <template #actions>\n                        <sw-button\n                            v-tooltip="addButtonTooltip"\n                            class="sw-promotion-v2-list__empty-state-button-add"\n                            variant="primary"\n                            :router-link="{ name: \'sw.promotion.v2.create\' }"\n                            :disabled="!acl.can(\'promotion.creator\')"\n                        >\n                            {{ $tc(\'sw-promotion-v2.list.buttonAddPromotion\') }}\n                        </sw-button>\n                    </template>\n                    {% endblock %}\n\n                </sw-promotion-v2-empty-state-hero>\n            </template>\n            {% endblock %}\n\n        </div>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n\n            \n            {% block sw_promotion_v2_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-promotion-v2.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[e.getByName("listing")],data(){return{isLoading:!0,promotions:null,total:0,showDeleteModal:!1,sortBy:"createdAt",sortDirection:"DESC",searchConfigEntity:"promotion"}},metaInfo(){return{title:this.$createTitle()}},computed:{promotionRepository(){return this.repositoryFactory.create("promotion")},promotionCriteria(){return new i(this.page,this.limit).setTerm(this.term).addSorting(i.sort(this.sortBy,this.sortDirection))},promotionColumns(){return this.getPromotionColumns()},addButtonTooltip(){return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("promotion.creator"),showOnDisabledElements:!0,position:"bottom"}},dateFilter(){return Shopware.Filter.getByName("date")}},methods:{async getList(){this.isLoading=!0;let t=await this.addQueryScores(this.term,this.promotionCriteria);return this.entitySearchable?this.promotionRepository.search(t).then(t=>(this.isLoading=!1,this.total=t.total,this.promotions=t,this.promotions)):(this.isLoading=!1,this.total=0,!1)},onChangeLanguage(){this.getList()},getPromotionColumns(){return[{property:"name",label:"sw-promotion-v2.list.columnName",routerLink:"sw.promotion.v2.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"active",label:"sw-promotion-v2.list.columnActive",inlineEdit:"boolean",allowResize:!0,align:"center"},{property:"validFrom",label:"sw-promotion-v2.list.columnValidFrom",inlineEdit:"date",allowResize:!0,align:"center"},{property:"validUntil",label:"sw-promotion-v2.list.columnValidUntil",inlineEdit:"date",allowResize:!0,align:"center"}]},updateTotal({total:t}){this.total=t}}}},777614:function(t,n,o){var e=o(260410);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals),o(745346).Z("a6b49052",e,!0,{})}}]);