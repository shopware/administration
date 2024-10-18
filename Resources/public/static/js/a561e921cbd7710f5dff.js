(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[4676],{7446:function(){},504676:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}}),t(142623);let{Criteria:i}=Shopware.Data;var a={template:'\n{% block sw_review_detail %}\n<sw-page class="sw-review-detail">\n\n    \n    {% block sw_review_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(review, \'title\', $tc(\'sw-review.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_review_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_review_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-review-detail__save-action"\n            variant="primary"\n            :disabled="isLoading || !acl.can(\'review.editor\') || undefined"\n            :process-success="isSaveSuccessful"\n            @update:process-success="onSaveFinish"\n            @click="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_review_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton variant="detail-bold" />\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_review_detail_basic_info_card %}\n                <sw-card\n                    v-if="review"\n                    position-identifier="sw-review-detail-basic-info"\n                    :title="$tc(\'sw-review.detail.cardTitleReviewInfo\')"\n                >\n\n                    \n                    {% block sw_customer_card_rows %}\n                    <template #grid>\n                        <sw-container rows="auto auto">\n\n                            \n                            {% block sw_customer_card_row_primary %}\n                            <sw-card-section divider="bottom">\n\n                                \n                                {% block sw_customer_card_metadata_container %}\n                                <sw-container>\n\n                                    \n                                    {% block sw_customer_card_metadata %}\n                                    <div class="sw-review-detail__metadata">\n\n                                        \n                                        {% block sw_customer_card_metadata_customer_name %}\n                                        \n                                        {% block sw_custsomer_card_metadata_customer_name_label %}\n                                        <div class="sw-review-detail__metadata-review-headline">\n                                            <sw-container\n                                                columns="auto 150px"\n                                                gap="0px 15px"\n                                            >\n                                                <div class="sw-review-detail__metadata-review-title">\n                                                    {{ review.title }}\n                                                </div>\n                                                <div\n                                                    v-if="stars"\n                                                    class="sw-review-detail__metadata-review-stars"\n                                                >\n                                                    <sw-rating-stars\n                                                        :value="review.points"\n                                                        class="star-count-display"\n                                                    />\n                                                    <div class="star-count-description">\n                                                        {{ $tc(`sw-review.detail.review${Math.round(stars)}PointRatingText`) }}\n                                                    </div>\n                                                </div>\n                                            </sw-container>\n                                        </div>\n                                        <p class="sw-review-detail__metadata-review-content">\n                                            {{ review.content }}\n                                        </p>\n                                        {% endblock %}\n                                        {% endblock %}\n                                    </div>\n                                    {% endblock %}\n                                </sw-container>\n                                {% endblock %}\n                            </sw-card-section>\n                            {% endblock %}\n\n                            \n                            {% block sw_customer_card_row_secondary %}\n                            <sw-card-section\n                                secondary\n                                slim\n                            >\n                                <slot name="default">\n\n                                    <sw-container\n                                        class="sw-review-base-info"\n                                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                                        gap="0px 15px"\n                                    >\n                                        <div class="sw-review-base-info-columns">\n\n                                            \n                                            {% block sw_customer_base_metadata_created_at %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_created_at_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelCreatedAt\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_created_at_content %}\n                                                <dd>\n                                                    {{ dateFilter(review.createdAt, { hour: \'2-digit\', minute: \'2-digit\', second: \'2-digit\' }) }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n\n                                            \n                                            {% block sw_customer_base_metadata_sales_channel %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_sales_channel_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelSalesChannel\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_sales_channel_content %}\n                                                <dd>\n                                                    {{ review.salesChannel.name }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n\n                                            \n                                            {% block sw_customer_base_metadata_product %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_product_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelProduct\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_product_content %}\n                                                <dd>{{ review.product.translated.name }}</dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n                                        </div>\n                                        <div class="sw-review-base-info-columns">\n\n                                            \n                                            {% block sw_customer_base_metadata_customer %}\n                                            <sw-description-list>\n\n                                                \n                                                {% block sw_customer_base_metadata_customer_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelCustomer\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_customer_content %}\n                                                <dd v-if="review.customer">\n                                                    {{ salutation(review.customer) }}\n                                                </dd>\n                                                <dd v-else>\n                                                    {{ review.externalUser }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n\n                                            \n                                            {% block sw_customer_base_metadata_email %}\n                                            <sw-description-list>\n                                                \n                                                {% block sw_customer_base_metadata_email_label %}\n                                                <dt class="sw-review-base-info__label">\n                                                    {{ $tc(\'sw-review.detail.labelEmail\') }}\n                                                </dt>\n                                                {% endblock %}\n\n                                                \n                                                {% block sw_customer_base_metadata_email_content %}\n                                                <dd v-if="review.customer">\n                                                    {{ emailIdnFilter(review.customer.email) }}\n                                                </dd>\n                                                <dd v-else>\n                                                    {{ review.externalEmail }}\n                                                </dd>\n                                                {% endblock %}\n                                            </sw-description-list>\n                                            {% endblock %}\n                                        </div>\n                                    </sw-container>\n                                </slot>\n                            </sw-card-section>\n                            {% endblock %}\n                        </sw-container>\n                    </template>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                <sw-card\n                    v-if="review"\n                    position-identifier="sw-review-detail-properties"\n                    class="sw-review-properties"\n                    :title="$tc(\'sw-review.detail.cardTitleReviewProperties\')"\n                >\n\n                    \n                    {% block sw_review_detail_basic_info_card_description_list %}\n                    <sw-container\n                        columns="1fr 1fr"\n                        gap="16px"\n                    >\n\n                        \n                        {% block sw_review_detail_description_list_language %}\n                        <sw-entity-single-select\n                            id="language"\n                            v-model:value="review.languageId"\n                            name="sw-field--review-languageId"\n                            entity="language"\n                            class="sw-review__language-select"\n                            required\n                            show-clearable-button\n                            :disabled="!acl.can(\'review.editor\') || undefined"\n                            :label="$tc(\'sw-review.detail.labelLanguage\')"\n                            :criteria="languageCriteria"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_review_detail_description_list_status %}\n                        <sw-switch-field\n                            v-model:value="review.status"\n                            name="sw-field--review-status"\n                            class="status-switch"\n                            :disabled="!acl.can(\'review.editor\') || undefined"\n                            :label="$tc(\'sw-review.detail.labelStatus\')"\n                            bordered\n                        />\n                        {% endblock %}\n                    </sw-container>\n                    {% endblock %}\n                </sw-card>\n\n                <sw-card\n                    v-if="review"\n                    position-identifier="sw-review-detail-comment"\n                    :title="$tc(\'sw-review.detail.labelComment\')"\n                >\n\n                    \n                    {% block sw_review_detail_basic_info_card_comment %}\n                    <sw-textarea-field\n                        v-model:value="review.comment"\n                        name="sw-field--review-comment"\n                        class="sw-review__comment-field"\n                        :disabled="!acl.can(\'review.editor\') || undefined"\n                        :label="$tc(\'sw-review.detail.titleCardComment\')"\n                        :placeholder="$tc(\'sw-review.detail.placeholderComment\')"\n                    />\n                    {% endblock %}\n                </sw-card>\n\n                \n                {% block sw_review_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-review-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="review"\n                        :disabled="!acl.can(\'review.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:["placeholder","notification","salutation"],shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("review.editor")},method:"onSave"},ESCAPE:"onCancel"},data(){return{isLoading:null,isSaveSuccessful:!1,reviewId:null,review:{},customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.review.title},repository(){return this.repositoryFactory.create("product_review")},stars(){return this.review.points>=0?this.review.points:0},languageCriteria(){let e=new i(1,25);return e.addSorting(i.sort("name","ASC",!1)),e},tooltipSave(){if(!this.acl.can("review.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:!0,showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},showCustomFields(){return this.review&&this.customFieldSets&&this.customFieldSets.length>0},dateFilter(){return Shopware.Filter.getByName("date")},emailIdnFilter(){return Shopware.Filter.getByName("decode-idn-email")}},watch:{"$route.params.id"(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-review-detail__review",path:"review",scope:this}),this.$route.params.id&&(this.reviewId=this.$route.params.id,this.loadEntityData(),this.loadCustomFieldSets())},loadEntityData(){this.isLoading=!0;let e=new i(1,25);e.addAssociation("customer"),e.addAssociation("salesChannel"),e.addAssociation("product");let n={...Shopware.Context.api,inheritance:!0};this.repository.get(this.reviewId,n,e).then(e=>{this.review=e,this.isLoading=!1})},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("product_review").then(e=>{this.customFieldSets=e})},onSave(){this.isSaveSuccessful=!1;let e=this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");this.repository.save(this.review).then(()=>{this.isSaveSuccessful=!0}).catch(()=>{this.createNotificationError({message:e})})},onSaveFinish(){this.loadEntityData(),this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.review.index"})}}}},142623:function(e,n,t){var i=t(7446);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("996fe136",i,!0,{})}}]);