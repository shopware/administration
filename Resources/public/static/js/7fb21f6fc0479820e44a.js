(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[406],{"T0+M":function(e,n,t){var s=t("XHe6");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("P8hj").default)("02f8384b",s,!0,{})},XHe6:function(e,n,t){},lWVF:function(e,n,t){"use strict";t.r(n);var s=t("CsSd"),a=t.n(s),l=t("7yzw"),i=t.n(l),r=t("92Mt"),o=t.n(r);t("T0+M");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=Shopware,m=u.Mixin,p=u.Defaults,h=Shopware.Data.Criteria;n.default={template:'\n{% block sw_sales_channel_list %}\n<sw-page class="sw-sales-channel-list">\n    \n    {% block sw_sales_channel_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="sales_channel"\n            :placeholder="$tc(\'sw-sales-channel.list.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_sales_channel_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_sales_channel_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-sales-channel.list.title\') }}\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_list_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_sales_channel_list_smart_bar_actions %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'sales_channel.creator\'),\n                showOnDisabledElements: true\n            }"\n            :disabled="!acl.can(\'sales_channel.creator\')"\n            variant="primary"\n            @click="onAddSalesChannel"\n        >\n            {{ $tc(\'sw-sales-channel.list.buttonAddSalesChannel\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_list_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_sales_channel_list_content_card %}\n            <sw-card\n                v-if="entitySearchable && total > 0"\n                position-identifier="sw-sales-channel-list"\n                :title="$tc(\'sw-sales-channel.list.title\')"\n                :subtitle="$tc(\'sw-sales-channel.list.subTitle\')"\n            >\n                \n                {% block sw_sales_channel_list_grid %}\n                <template #grid>\n                    <sw-entity-listing\n                        :is-loading="isLoading"\n                        identifier="sw-sales-channel-list"\n                        :columns="salesChannelColumns"\n                        :repository="salesChannelRepository"\n                        :items="salesChannels"\n                        :full-page="false"\n                        :show-selection="false"\n                        :sort-by="currentSortBy"\n                        :sort-direction="sortDirection"\n                        :plain-appearance="true"\n                        :show-settings="true"\n                        :allow-column-edit="true"\n                    >\n                        \n                        {% block sw_sales_channel_list_grid_column_name %}\n                        <template #column-name="{ item }">\n                            <sw-icon\n                                :name="item.type.iconName"\n                                size="18px"\n                            />\n                            <router-link\n                                :to="{\n                                    name: \'sw.sales.channel.detail\',\n                                    params: { id: item.id }\n                                }"\n                            >{{ item.translated.name || item.name }}</router-link>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_list_grid_column_product_visibilites %}\n                        <template #column-product_visibilities="{ item }">\n                            {{ getCountForSalesChannel(item.id) }}\n                            {{ $tc(\'sw-sales-channel.list.productsCount\', getCountForSalesChannel(item.id)) }}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_list_grid_column_status %}\n                        <template #column-status="{ item }">\n                            <template v-if="item.maintenance">\n                                <sw-status color="orange">\n                                    {{ $tc(\'sw-sales-channel.list.status.maintenance\') }}\n                                </sw-status>\n                            </template>\n\n                            <template v-else-if="item.active">\n                                <sw-status color="green">\n                                    {{ $tc(\'sw-sales-channel.list.status.online\') }}\n                                </sw-status>\n                            </template>\n\n                            <template v-else>\n                                <sw-status color="gray">\n                                    {{ $tc(\'sw-sales-channel.list.status.offline\') }}\n                                </sw-status>\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_list_grid_column_created_at %}\n                        <template #column-createdAt="{ item }">\n                            {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_list_grid_column_favorite %}\n                        <template #column-id="{ item }">\n                            <sw-switch-field\n                                v-tooltip.right="{ message: $tc(\'sw-sales-channel.detail.favouriteLabel\') }"\n                                class="favorite-switch"\n                                :disabled="!acl.can(\'user_config:create\') || !acl.can(\'user_config:update\')"\n                                :value="isFavorite(item.id)"\n                                {% if VUE3 %}\n                                @update:value="(isFavorite) => { salesChannelFavoritesService?.update(isFavorite, item.id) }"\n                                {% else %}\n                                @change="(isFavorite) => { salesChannelFavoritesService?.update(isFavorite, item.id) }"\n                                {% endif %}\n                            />\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_list_grid_actions %}\n                        <template #actions="{ item }">\n                            \n                            {% block sw_sales_channel_list_grid_actions_item_detail %}\n                            <sw-context-menu-item\n                                :router-link="{\n                                    name: \'sw.sales.channel.detail\',\n                                    params: { id: item.id }\n                                }"\n                            >\n                                {{ $tc(\'sw-sales-channel.list.contextMenuEdit\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n\n                            \n                            {% block sw_sales_channel_list_grid_actions_item_open_storefront %}\n                            <sw-context-menu-item\n                                v-if="isStorefrontSalesChannel(item)"\n                                :disabled="!item.active || !checkForDomainLink(item)"\n                                @click.prevent="openStorefrontLink(item.domainLink)"\n                            >\n                                {{ $tc(\'sw-sales-channel.general.tooltipOpenStorefront\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-entity-listing>\n                </template>\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_list_empty_state %}\n            <template v-if="!isLoading && !total">\n                <sw-empty-state\n                    v-if="isValidTerm(term)"\n                    :style="{ minHeight: \'200px\' }"\n                    :title="$tc(\'sw-empty-state.messageNoResultTitle\')"\n                >\n                    <template #default>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineBefore\') }}\n                        <router-link\n                            class="sw-empty-state__description-link"\n                            :to="{ name: \'sw.profile.index.searchPreferences\' }"\n                        >\n                            {{ $tc(\'sw-empty-state.messageNoResultSublineLink\') }}\n                        </router-link>\n                        {{ $tc(\'sw-empty-state.messageNoResultSublineAfter\') }}\n                    </template>\n                </sw-empty-state>\n            </template>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","domainLinkService"],mixins:[m.getByName("listing")],data:function(){return{salesChannels:null,productsForSalesChannel:{},isLoading:!0,sortBy:"name",searchConfigEntity:"sales_channel",lastSortedColumn:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{salesChannelColumns:function(){var e=[{property:"name",dataIndex:"name",allowResize:!0,routerLink:"sw.sales.channel.detail",label:"sw-sales-channel.list.columnName",primary:!0},{property:"product_visibilities",dataIndex:"product_visibilities",allowResize:!0,sortable:!1,label:"sw-sales-channel.list.productsLabel"},{property:"status",dataIndex:"status",allowResize:!0,sortable:!1,label:"sw-sales-channel.list.columnStatus"},{property:"id",dataIndex:"id",allowResize:!0,sortable:!1,label:"sw-sales-channel.list.columnFavourite",align:"center"},{property:"createdAt",dataIndex:"createdAt",allowResize:!0,label:"sw-sales-channel.list.columnCreatedAt"}];return e.splice(1,0,{property:"type.name",dataIndex:"type.name",allowResize:!0,label:"sw-sales-channel.list.columnType"}),e},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},salesChannelCriteria:function(){var e=new h(this.page,this.limit);return e.setTerm(this.term),e.addSorting(h.sort(this.sortBy,this.sortDirection,this.naturalSorting)),e.addAssociation("type"),e.addAssociation("domains"),e.addAggregation(h.terms("sales_channel","id",null,null,h.count("visible_products","sales_channel.productVisibilities.id"))),e},salesChannelFavoritesService:function(){return Shopware.Service("salesChannelFavorites")},dateFilter:function(){return Shopware.Filter.getByName("date")}},methods:{onAddSalesChannel:function(){this.$root.$emit("on-add-sales-channel")},getList:function(){var e=this;return i()(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.addQueryScores(e.term,e.salesChannelCriteria);case 3:if(t=n.sent,e.entitySearchable){n.next=8;break}return e.isLoading=!1,e.total=0,n.abrupt("return",!1);case 8:return e.freshSearchTerm&&t.resetSorting(),n.abrupt("return",e.salesChannelRepository.search(t).then((function(n){var t,s;e.salesChannels=n,e.setProductAggregations(null===(t=n.aggregations)||void 0===t||null===(s=t.sales_channel)||void 0===s?void 0:s.buckets),e.total=n.total,e.isLoading=!1})));case 10:case"end":return n.stop()}}),n)})))()},setProductAggregations:function(e){this.productsForSalesChannel=e.reduce((function(e,n){var t;return d(d({},e),{},a()({},n.key,null===(t=n.visible_products)||void 0===t?void 0:t.count))}),{})},getCountForSalesChannel:function(e){var n;return null!==(n=this.productsForSalesChannel[e])&&void 0!==n?n:0},checkForDomainLink:function(e){var n=this.domainLinkService.getDomainLink(e);return null!==n&&(e.domainLink=n,!0)},openStorefrontLink:function(e){window.open(e,"_blank")},isFavorite:function(e){return this.salesChannelFavoritesService.isFavorite(e)},isStorefrontSalesChannel:function(e){return e.type.id===p.storefrontSalesChannelTypeId}}}}}]);
//# sourceMappingURL=7fb21f6fc0479820e44a.js.map