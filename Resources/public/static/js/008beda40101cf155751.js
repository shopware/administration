(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[38960],{304172:function(){},138960:function(t,a,n){"use strict";n.r(a),n.d(a,{default:function(){return s}}),n(98220);var s={template:'\n{% block sw_extension_rating_stars %}\n<div\n    class="sw-extension-rating-stars"\n    :class="editableClass"\n>\n    \n    {% block sw_extension_rating_stars_wrapper %}\n    <div class="sw-extension-rating-stars__wrapper">\n        \n        {% block sw_extension_rating_stars_wrapper_stars %}\n        <button\n            v-for="(ratingValue, key) in maxRating"\n            :key="key"\n            :disabled="!editable"\n            class="sw-extension-rating-stars__star"\n            :class="colorClass(key + 1)"\n            @click="addRating(key)"\n        >\n            \n            {% block sw_extension_rating_stars_wrapper_stars_full_star %}\n            <sw-icon\n                name="solid-star"\n                :style="starSize"\n            />\n            {% endblock %}\n\n            \n            {% block sw_extension_rating_stars_wrapper_stars_partial_star %}\n            <span\n                v-if="showPartialStar(key)"\n                class="sw-extension-rating-stars__partial-star"\n            >\n                \n                {% block sw_extension_rating_stars_wrapper_stars_partial_star_wrapper %}\n                <span\n                    class="sw-extension-rating-stars__partial-star-wrapper"\n                    :style="{ width: partialStarWidth }"\n                >\n                    <sw-icon\n                        name="solid-star"\n                        :size="partialStarSize"\n                    />\n                </span>\n                {% endblock %}\n            </span>\n            {% endblock %}\n        </button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["feature"],props:{editable:{type:Boolean,required:!1,default:!1},size:{type:Number,required:!1,default:8},rating:{type:Number,required:!1,default:0}},data(){return{maxRating:5,ratingValue:null}},computed:{editableClass(){return{"sw-extension-rating-stars--is-editable":this.editable}},sizeValue(){return this.editable&&8===this.size?this.defaultSizeForEditable:this.size},starSize(){return{width:`${this.sizeValue*this.scaleFactor}px`}},partialStarSize(){return`${this.sizeValue}px`},partialStarWidth(){return`${this.ratingValue%1*100}%`},defaultSizeForEditable(){return 17},scaleFactor(){return 1.25}},watch:{rating(t){this.ratingValue=t}},created(){this.createdComponent()},methods:{createdComponent(){this.ratingValue=this.rating},colorClass(t){return{"sw-extension-rating-stars__star--is-rated":this.maxRating+1-t<=this.ratingValue}},addRating(t){this.editable&&(this.ratingValue=this.maxRating-t,this.$emit("update:rating",this.ratingValue))},showPartialStar(t){return this.ratingValue%1!=0&&this.maxRating-Math.ceil(this.ratingValue)===t}}}},98220:function(t,a,n){var s=n(304172);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),n(745346).Z("55a2f3f7",s,!0,{})}}]);