(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[233],{FiDs:function(e,n,i){},Nb05:function(e,n,i){"use strict";i.r(n);i("dW46");var s=Shopware.Utils.format.date;n.default={template:'\n{% block sw_extension_review %}\n<div class="sw-extension-review">\n    \n    {% block sw_extension_review_headline %}\n    <h4 class="sw-extension-review__headline">\n        {{ review.headline }}\n    </h4>\n    {% endblock %}\n\n    \n    {% block sw_extension_review_stars %}\n    <sw-extension-rating-stars\n        :rating="review.rating"\n        :size="12"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_review_text %}\n    <p\n        v-if="review.text"\n        class="sw-extension-review__text"\n    >\n        {{ review.text }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_extension_review_meta_data %}\n    <p class="sw-extension-review__meta-data">\n        \n        {% block sw_extension_review_meta_data_date %}\n        <span class="sw-extension-review__comma">\n            {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review.labelLastChangeDate\',\n                   0, { lastChangeDate: lastChangeDate, author: review.authorName }) }}\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_extension_review_meta_data_version %}\n        <span v-if="review.version">\n            {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review.labelExtensionVersion\',\n                   0, { extensionVersion: review.version }) }}\n        </span>\n        {% endblock %}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_extension_review_replies %}\n    <template v-if="reviewHasReplies">\n        \n        {% block sw_extension_review_replies_loop %}\n        <sw-extension-review-reply\n            v-for="(reply, index) in review.replies"\n            :key="`sw-extension-review__reply-${index}`"\n            :producer-name="producerName"\n            :reply="reply"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{review:{type:Object,required:!0},producerName:{type:String,required:!0}},computed:{lastChangeDate:function(){return null!==this.review.lastChangeDate?s(this.review.lastChangeDate,{month:"numeric",year:"numeric",hour:void 0,minute:void 0}):null},reviewHasReplies:function(){return this.review.replies&&this.review.replies.length>0}}}},dW46:function(e,n,i){var s=i("FiDs");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i("ydqr").default)("44a50585",s,!0,{})}}]);