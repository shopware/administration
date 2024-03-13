(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[12988],{1902:function(){},12988:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(48746);let{Component:i,Data:o,Context:a}=Shopware,{Criteria:l}=o,{mapState:s,mapGetters:d}=i.getComponentHelper();var r={template:'<div class="sw-product-detail-reviews">\n    \n    {% block sw_product_detail_reviews %}\n    <div v-if="isLoading">\n        <sw-skeleton />\n        <sw-skeleton />\n    </div>\n\n    <sw-card\n        v-if="!isLoading"\n        class="sw-product-detail-reviews__list"\n        position-identifier="sw-product-detail-reviews"\n        :title="cardTitle"\n    >\n        \n        {% block sw_product_detail_reviews_data %}\n        <template\n            v-if="total"\n            #grid\n        >\n            <sw-data-grid\n                ref="gridReview"\n                :data-source="dataSource"\n                :columns="reviewColumns"\n                :is-loading="isLoading"\n                :show-selection="false"\n                :show-actions="true"\n            >\n                \n                {% block sw_product_detail_reviews_data_stars %}\n                <template #column-points="{ item }">\n                    \n                    {% block sw_product_detail_reviews_data_stars_content %}\n\n                    <sw-rating-stars :value="item.points" />\n\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_reviews_data_status %}\n                <template #column-status="{ item }">\n                    <sw-data-grid-column-boolean\n                        v-model:value="item.status"\n                        :is-inline-edit="false"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_reviews_data_created_at %}\n                <template #column-createdAt="{ item }">\n                    {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\' }) }}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_reviews_data_action %}\n                <template #actions="{ item }">\n                    \n                    {% block sw_product_detail_reviews_data_action_edit %}\n                    <sw-context-menu-item\n                        class="sw-product-detail-reviews__action-edit"\n                        :disabled="!acl.can(\'product.editor\')"\n                        :router-link="{ name: \'sw.review.detail\', params: { id: item.id } }"\n                    >\n                        {{ $tc(\'sw-product.reviewForm.contextMenuEdit\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_detail_reviews_data_action_delete %}\n                    <sw-context-menu-item\n                        class="sw-product-detail-reviews__action-delete"\n                        variant="danger"\n                        :disabled="!acl.can(\'product.editor\')"\n                        @click="onStartReviewDelete(item)"\n                    >\n                        {{ $tc(\'sw-product.reviewForm.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_reviews_data_pagination %}\n                <template #pagination>\n                    <sw-pagination\n                        :total="total"\n                        :limit="limit"\n                        :page="page"\n                        :total-visible="7"\n                        :steps="[10]"\n                        @page-change="onChangePage"\n                    />\n                </template>\n                {% endblock %}\n            </sw-data-grid>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_reviews_empty_state %}\n\n        <sw-empty-state\n            v-if="!total"\n            :title="$tc(\'sw-product.reviewForm.messageEmptyTitle\')"\n            :subline="$tc(\'sw-product.reviewForm.messageEmptySubline\')"\n            :absolute="false"\n            empty-module\n        >\n            <template #icon>\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                    :alt="$tc(\'sw-product.reviewForm.messageEmptyTitle\')"\n                >\n            </template>\n\n            <template #actions>\n                \n                {% block sw_product_detail_reviews_empty_state_button %}\n                <sw-button\n                    variant="ghost"\n                    :router-link="{ name: \'sw.review.index\' }"\n                >\n                    {{ $tc(\'sw-product.reviewForm.emptyStateButton\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_reviews_modal_delete %}\n        <sw-modal\n            v-if="showReviewDeleteModal"\n            variant="small"\n            :title="$tc(\'sw-product.reviewForm.modal.confirmTitle\')"\n            @modal-close="onCancelReviewDelete"\n        >\n            \n            {% block sw_product_detail_reviews_modal_delete_body %}\n            <p>{{ $tc(\'sw-product.reviewForm.modal.confirmText\') }}</p>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_reviews_modal_delete_footer %}\n            <template #modal-footer>\n                \n                {% block sw_product_detail_reviews_modal_delete_button_cancel %}\n                <sw-button\n                    size="small"\n                    @click="onCancelReviewDelete"\n                >\n                    {{ $tc(\'sw-product.reviewForm.modal.buttonCancel\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_reviews_modal_delete_button_confirm %}\n                <sw-button\n                    size="small"\n                    variant="danger"\n                    @click="onConfirmReviewDelete"\n                >\n                    {{ $tc(\'sw-product.reviewForm.modal.buttonDelete\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </sw-modal>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n',inject:["repositoryFactory","acl"],data(){return{showReviewDeleteModal:!1,deleteReviewId:null,dataSource:[],page:1,limit:10,total:0}},computed:{...s("swProductDetail",["product"]),...d("swProductDetail",["isLoading"]),cardTitle(){return this.total?this.$tc("sw-product.reviews.cardTitleReviews"):null},reviewRepository(){return this.repositoryFactory.create("product_review")},reviewCriteria(){let e=new l(this.page,this.limit);return e.addFilter(l.equals("productId",this.product.id)),e.setTotalCountMode(1),e},reviewColumns(){return[{property:"points",dataIndex:"points",label:this.$tc("sw-product.reviewForm.labelPoints")},{property:"status",dataIndex:"status",label:this.$tc("sw-product.reviewForm.labelStatus"),align:"center"},{property:"createdAt",dataIndex:"createdAt",label:this.$tc("sw-product.reviewForm.labelCreatedAt")},{property:"title",dataIndex:"title",label:this.$tc("sw-product.reviewForm.labelTitle"),routerLink:"sw.review.detail"}]},assetFilter(){return Shopware.Filter.getByName("asset")},dateFilter(){return Shopware.Filter.getByName("date")}},watch:{"product.id":{immediate:!0,handler(e){e&&this.getReviews()}}},created(){this.createdComponent()},methods:{createdComponent(){this.getReviews()},getReviews(){this.product&&this.product.id&&this.reviewRepository.search(this.reviewCriteria,a.api).then(e=>{this.total=e.total,this.dataSource=e,this.total>0&&this.dataSource.length<=0&&(this.page=1===this.page?1:this.page-1,this.getReviews())})},onStartReviewDelete(e){this.deleteReviewId=e.id,this.onShowReviewDeleteModal()},onCancelReviewDelete(){this.deleteReviewId=null,this.onCloseReviewDeleteModal()},onShowReviewDeleteModal(){this.showReviewDeleteModal=!0},onCloseReviewDeleteModal(){this.showReviewDeleteModal=!1},onConfirmReviewDelete(){this.onCloseReviewDeleteModal(),this.reviewRepository.delete(this.deleteReviewId,a.api).then(()=>{this.deleteReviewId=null,this.getReviews()})},onChangePage(e){this.page=e.page,this.limit=e.limit,this.getReviews()}}}},48746:function(e,t,n){var i=n(1902);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(45346).Z("6dc7fd30",i,!0,{})}}]);