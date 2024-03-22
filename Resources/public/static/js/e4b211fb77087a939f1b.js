(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[54553],{28054:function(){},54553:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return t}}),i(27655);var t={template:'\n{% block sw_extension_review_creation_inputs %}\n<div class="sw-extension-review-creation-inputs">\n    \n    {% block sw_extension_review_creation_inputs_grid %}\n    <div class="sw-extension-review-creation-inputs__grid">\n        \n        {% block sw_extension_review_creation_inputs_grid_headline_input %}\n        <sw-text-field\n            v-model:value="headline"\n            :label="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation-inputs.labelHeadline\')"\n            :placeholder="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation-inputs.placeholderHeadline\')"\n            :error="errors.headlineError"\n            required\n        />\n        {% endblock %}\n\n        \n        {% block sw_extension_review_creation_inputs_grid_rating_wrapper %}\n        <div class="sw-extension-review-creation-inputs__rating">\n            \n            {% block sw_extension_review_creation_inputs_grid_rating_wrapper_input %}\n            <sw-extension-select-rating\n                v-model:value="rating"\n                :error="errors.ratingError"\n                required\n                :label="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation-inputs.labelRating\')"\n            />\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_extension_review_creation_inputs_description_input %}\n    <sw-textarea-field\n        v-model:value="text"\n        :label="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation-inputs.labelText\')"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{errors:{type:Object,required:!1,default:()=>({headlineError:null,ratingError:null})}},data(){return{headline:null,rating:null,text:null}},watch:{headline(n){this.$emit("changed","headline",n)},rating(n){this.$emit("changed","rating",n)},text(n){this.$emit("changed","text",n)}}}},27655:function(n,e,i){var t=i(28054);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),i(45346).Z("01911444",t,!0,{})}}]);