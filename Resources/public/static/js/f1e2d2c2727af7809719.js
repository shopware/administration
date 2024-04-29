(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74996],{96957:function(){},74996:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(20403);let{Mixin:i}=Shopware,{Criteria:s}=Shopware.Data;var r={template:'\n{% block sw_review_list %}\n<sw-page class="sw-review-list">\n\n    \n    {% block sw_review_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="product_review"\n            :initial-search="term"\n            :placeholder="$tc(\'sw-review.list.placeholderSearchBar\')"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_list_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_review_list_smart_bar_header_title %}\n        <h2>\n\n            \n            {% block sw_review_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-review.list.textReviewOverview\') }}\n            {% endblock %}\n\n            \n            {% block sw_review_list_smart_bar_header_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ items.total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_list_content %}\n    <template #content>\n\n        \n        {% block sw_review_list_content_list %}\n        <sw-entity-listing\n            v-if="isLoading || items"\n            ref="listing"\n            detail-route="sw.review.detail"\n            :repository="repository"\n            :columns="columns"\n            :items="items"\n            :allow-edit="acl.can(\'review.editor\')"\n            :allow-delete="acl.can(\'review.deleter\')"\n            :show-selection="acl.can(\'review.deleter\')"\n            :disable-data-fetching="true"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            identifier="sw-review-list"\n            :is-loading="isLoading"\n            @page-change="onPageChange"\n            @column-sort="onSortColumn"\n        >\n\n            \n            {% block sw_review_list_content_list_status %}\n            <template #column-status="{ item }">\n                <sw-data-grid-column-boolean\n                    v-model:value="item.status"\n                    :is-inline-edit="false"\n                />\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_review_list_content_list_title %}\n            <template #column-title="{ item }">\n                <div class="sw-review-text_ellipsis">\n                    <router-link :to="{ name: \'sw.review.detail\', params: { id: item.id } }">\n                        {{ item.title }}\n                    </router-link>\n                </div>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_review_list_content_list_created_at %}\n            <template #column-createdAt="{ item }">\n                {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\' }) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_review_list_content_list_user %}\n            <template #column-user="{ item }">\n                <router-link\n                    v-if="item.customer"\n                    :to="{ name: \'sw.customer.detail\', params: { id: item.customerId } }"\n                >\n                    {{ item.customer.lastName }}, {{ item.customer.firstName }}\n                </router-link>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_review_list_content_list_product %}\n            <template #column-product="{ item }">\n                <template v-if="item.productId">\n                    <router-link :to="{ name: \'sw.product.detail\', params: { id: item.productId } }">\n                        {{ item.product.translated.name }}\n                    </router-link>\n                </template>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_review_list_content_list_points %}\n            <template #column-points="{ item }">\n                <sw-rating-stars :value="item.points" />\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_review_list_content_list_comment %}\n            <template #column-comment="{ item }">\n                \n                <sw-data-grid-column-boolean\n                    :value="item.comment && item.comment.length > 0"\n                    :is-inline-edit="false"\n                />\n            </template>\n            {% endblock %}\n        </sw-entity-listing>\n        {% endblock %}\n\n        \n        {% block sw_review_list_empty_state %}\n        <sw-empty-state\n            v-if="!isLoading && !total"\n            icon="regular-file-text"\n            :title="$tc(\'sw-review.list.messageEmpty\')"\n            :subline="$tc(\'sw-review.list.messageEmptySubline\')"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n\n            \n            {% block sw_review_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-review.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[i.getByName("listing")],data(){return{isLoading:!1,items:null,sortBy:"status,createdAt"}},metaInfo(){return{title:this.$createTitle()}},computed:{columns(){return[{property:"title",dataIndex:"title",label:"sw-review.list.columnTitle"},{property:"points",dataIndex:"points",label:"sw-review.list.columnPoints"},{property:"product",dataIndex:"product.name",label:"sw-review.list.columnProduct",routerLink:"sw.review.detail",primary:!0},{property:"user",dataIndex:"customer.lastName,customer.firstName",label:"sw-review.list.columnUser"},{property:"createdAt",dataIndex:"createdAt",label:"sw-review.list.columnCreatedAt"},{property:"status",dataIndex:"status",label:"sw-review.list.columnStatus",align:"center"},{property:"comment",dataIndex:"comment",label:"sw-review.list.columnComment",align:"center"}]},repository(){return this.repositoryFactory.create("product_review")},criteria(){let e=new s(this.page,this.limit);return e.setTerm(this.term),this.sortBy.split(",").forEach(t=>{e.addSorting(s.sort(t,this.sortDirection,this.naturalSorting))}),e.addAssociation("customer"),e.addAssociation("product"),e},dateFilter(){return Shopware.Filter.getByName("date")}},created(){this.createdComponent()},methods:{createdComponent(){this.getList()},getList(){this.isLoading=!0;let e={...Shopware.Context.api,inheritance:!0};return this.repository.search(this.criteria,e).then(e=>{this.total=e.total,this.items=e,this.isLoading=!1})},onDelete(e){this.$refs.listing.deleteItem(e),this.repository.search(this.criteria,{...Shopware.Context.api,inheritance:!0}).then(e=>{this.total=e.total,this.items=e})}}}},20403:function(e,t,n){var i=n(96957);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(45346).Z("7eb01c97",i,!0,{})}}]);