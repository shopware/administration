(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[231],{"8r2Y":function(e,n,t){var r=t("awXx");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t("P8hj").default)("07952e24",r,!0,{})},awXx:function(e,n,t){},pMMM:function(e,n,t){"use strict";t.r(n);var r=t("7yzw"),i=t.n(r),s=t("92Mt"),a=t.n(s),o=(t("8r2Y"),Shopware.Classes.ShopwareError);n.default={template:'\n{% block sw_extension_review_creation %}\n<div class="sw-extension-review-creation">\n    \n    {% block sw_extension_review_creation_inputs %}\n    <sw-extension-review-creation-inputs\n        :errors="errors"\n        @changed="onChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_review_creation_gtc_checkbox %}\n    <sw-gtc-checkbox\n        {% if VUE3 %}\n        v-model:value="tocAccepted"\n        {% else %}\n        v-model="tocAccepted"\n        {% endif %}\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_review_creation_buttons %}\n    <div class="sw-extension-review-creation__buttons">\n        \n        {% block sw_extension_review_creation_buttons_submit_button %}\n        <sw-button-process\n            class="sw-extension-review-creation__submit"\n            variant="primary"\n            size="small"\n            :is-loading="isLoading"\n            :process-success="isCreatedSuccessful"\n            :disabled="disabled"\n            {% if VUE3 %}\n            @update:process-success="emitCreated"\n            {% else %}\n            @process-finish="emitCreated"\n            {% endif %}\n            @click="handleCreateReview"\n        >\n            {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation.submitBtn\') }}\n        </sw-button-process>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["extensionStoreActionService"],mixins:["sw-extension-error"],props:{extension:{type:Object,required:!0}},data:function(){return{tocAccepted:!1,isLoading:!1,isCreatedSuccessful:!1,headline:null,rating:null,text:null,errors:{headlineError:null,ratingError:null}}},computed:{currentUser:function(){return Shopware.State.get("session").currentUser},userName:function(){return this.currentUser?"".concat(this.currentUser.firstName," ").concat(this.currentUser.lastName).trim():""},installedVersion:function(){var e=this;return Shopware.State.get("shopwareExtensions").myExtensions.data.find((function(n){return n.name===e.extension.name})).version},hasError:function(){return null!==this.errors.headlineError||null!==this.errors.ratingError},disabled:function(){return this.hasError||!this.tocAccepted}},watch:{headline:function(){this.validateHeadline()},rating:function(){this.validateRating()}},methods:{handleCreateReview:function(){var e=this;return i()(a.a.mark((function n(){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.isLoading=!0,e.validateInputs(),!e.hasError){n.next=5;break}return e.isLoading=!1,n.abrupt("return");case 5:return t={extensionId:e.extension.id,authorName:e.userName,headline:e.headline,rating:e.rating,text:e.text,tocAccepted:e.tocAccepted,version:e.installedVersion},n.next=8,e.createReview(t);case 8:e.isLoading=!1;case 9:case"end":return n.stop()}}),n)})))()},createReview:function(e){var n=this;return i()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.extensionStoreActionService.rateExtension(e);case 3:n.isCreatedSuccessful=!0,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n.showExtensionErrors(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},validateInputs:function(){this.validateHeadline(),this.validateRating()},validateHeadline:function(){null!==this.headline&&""!==this.headline?this.errors.headlineError=null:this.errors.headlineError=new o({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},validateRating:function(){null!==this.rating&&0!==this.rating?this.errors.ratingError=null:this.errors.ratingError=new o({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},onChange:function(e,n){this[e]=n},emitCreated:function(){this.$emit("created"),this.isCreatedSuccessful=!1}}}}}]);