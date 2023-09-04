(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[228],{"7FP2":function(e,n,t){"use strict";t.r(n);var s=t("7yzw"),r=t.n(s),i=t("92Mt"),a=t.n(i);t("gVw9"),n.default={template:'\n{% block sw_extension_ratings_card %}\n<sw-meteor-card\n    class="sw-extension-ratings-card"\n    :is-loading="isLoading"\n    :title="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.cardTitle\')"\n>\n    \n    {% block sw_extension_ratings_card_has_reviews %}\n    <template v-if="hasReviews">\n        \n        {% block sw_extension_ratings_card_has_reviews_summary %}\n        <sw-extension-ratings-summary :summary="summary" />\n        {% endblock %}\n\n        \n        {% block sw_extension_ratings_card_has_reviews_wrapper %}\n        <div class="sw-extension-ratings-card__reviews">\n            \n            {% block sw_extension_ratings_card_has_reviews_wrapper_review %}\n            <sw-extension-review\n                v-for="(review, index) in reviews"\n                :key="`sw-extension-ratings-card__reviews-review-${index}`"\n                :producer-name="producerName"\n                :review="review"\n            />\n            {% endblock %}\n\n            \n            {% block sw_extension_ratings_card_has_reviews_wrapper_more_button %}\n            <sw-button\n                v-if="canShowMore"\n                size="small"\n                @click="loadMoreReviews"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.labelMoreReviewsBtn\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_ratings_card_empty_state %}\n    <template v-else>\n        \n        {% block sw_extension_ratings_card_empty_state_content %}\n        {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.labelNoReviews\') }}\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_ratings_card_installed_and_licensed_headline %}\n    <h3\n        v-if="isInstalledAndLicensed && !isLoading"\n        class="sw-extension-ratings-card__footer-headline"\n    >\n        {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-card.footerHeadline\') }}\n    </h3>\n    {% endblock %}\n\n    \n    {% block sw_extension_ratings_card_footer %}\n    <template\n        v-if="isInstalledAndLicensed && !isLoading"\n        #footer\n    >\n        \n        {% block sw_extension_ratings_card_footer_review_creation %}\n        <sw-extension-review-creation\n            :extension="extension"\n            @created="$emit(\'update-extension\')"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-meteor-card>\n{% endblock %}\n',mixins:["sw-extension-error"],props:{extension:{type:Object,required:!0},producerName:{type:String,required:!0},isInstalledAndLicensed:{type:Boolean,required:!1,default:!1}},data:function(){return{reviews:[],isLoading:!1,criteriaPage:1,criteriaLimit:4,summary:null,numberOfRatings:0}},computed:{canShowMore:function(){return this.summary.numberOfRatings>this.reviews.length},numberOfRatingsHasChanged:function(){return this.numberOfRatings!==this.summary.numberOfRatings},extensionStoreDataService:function(){return Shopware.Service("extensionStoreDataService")},hasReviews:function(){return this.reviews.length>0}},watch:{extension:function(){this.fetchReviews()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.fetchReviews()},fetchReviews:function(){var e=arguments,n=this;return r()(a.a.mark((function t(){var s,r,i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.length>0&&void 0!==e[0]&&e[0],n.isLoading=!0,t.prev=2,t.next=5,n.getReviews();case 5:if(r=t.sent,i=r.reviews,o=r.summary,n.summary=o,!s||!n.numberOfRatingsHasChanged){t.next=16;break}return n.criteriaPage=1,n.criteriaLimit=4,n.reviews=[],t.next=15,n.fetchReviews();case 15:return t.abrupt("return");case 16:n.numberOfRatings=n.summary.numberOfRatings,n.reviews=n.reviews.concat(i),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(2),n.showExtensionErrors(t.t0);case 23:return t.prev=23,n.isLoading=!1,t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[2,20,23,26]])})))()},loadMoreReviews:function(){var e=this;return r()(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.criteriaPage+=1,n.next=3,e.fetchReviews(!0);case 3:case"end":return n.stop()}}),n)})))()},getReviews:function(){var e=this;return r()(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.extensionStoreDataService.getReviews(e.criteriaPage,e.criteriaLimit,e.extension.id));case 1:case"end":return n.stop()}}),n)})))()}}}},gVw9:function(e,n,t){var s=t("oW1d");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t("P8hj").default)("430323d7",s,!0,{})},oW1d:function(e,n,t){}}]);