(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[66899],{76807:function(){},66899:function(n,s,r){"use strict";r.r(s),r.d(s,{default:function(){return a}}),r(4350);var a={template:'\n{% block sw_extension_ratings_summary %}\n<div class="sw-extension-ratings-summary">\n    \n    {% block sw_extension_ratings_summary_grid %}\n    <div class="sw-extension-ratings-summary__grid">\n        \n        {% block sw_extension_ratings_summary_grid_average_rating %}\n        <h3 class="sw-extension-ratings-summary__average">\n            {{ summary.averageRating }}\n        </h3>\n        {% endblock %}\n\n        \n        {% block sw_extension_ratings_summary_grid_label %}\n        <p>\n            {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-ratings-summary.labelRating\', summary.numberOfRatings, { numberOfRatings: summary.numberOfRatings }) }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_extension_ratings_summary_grid_rating_rows %}\n        <div class="sw-extension-ratings-summary__rows">\n            <template\n                v-for="ratingGroup in summary.ratingAssignment"\n                :key="ratingGroup.rating"\n            >\n                \n                {% block sw_extension_ratings_summary_grid_rating_rows_content %}\n                <sw-extension-rating-stars\n                    :rating="Number(ratingGroup.rating)"\n                    :size="12"\n                />\n                {% endblock %}\n            </template>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_extension_ratings_summary_grid_rating_progress_bars %}\n        <div class="sw-extension-ratings-summary__progress-bars">\n            \n            {% block sw_extension_ratings_summary_grid_rating_progress_bars_count_rows %}\n            <div class="sw-extension-ratings-summary__rows">\n                <template\n                    v-for="ratingGroup in summary.ratingAssignment"\n                    :key="ratingGroup.rating"\n                >\n                    \n                    {% block sw_extension_ratings_summary_grid_rating_progress_bars_count_rows_count %}\n                    <span\n                    >\n                        {{ ratingGroup.count }}\n                    </span>\n                    {% endblock %}\n                </template>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_extension_ratings_summary_grid_rating_progress_bars_progress_bar_rows %}\n            <div class="sw-extension-ratings-summary__rows">\n                <template\n                    v-for="ratingGroup in summary.ratingAssignment"\n                    :key="ratingGroup.rating"\n                >\n                    \n                    {% block sw_extension_ratings_summary_grid_rating_progress_bars_progress_bar_rows_progress_bar %}\n                    <sw-progress-bar\n                        :value="ratingGroup.count"\n                        :max-value="maxProgressValue"\n                    />\n                    {% endblock %}\n                </template>\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{summary:{type:Object,required:!0}},data(){return{maxRating:5}},computed:{maxProgressValue(){return 0===this.summary.numberOfRatings?1:this.summary.numberOfRatings}}}},4350:function(n,s,r){var a=r(76807);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.id,a,""]]),a.locals&&(n.exports=a.locals),r(45346).Z("240887ab",a,!0,{})}}]);