(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[226],{JPyJ:function(n,e,t){},yB9H:function(n,e,t){"use strict";t.r(e);t("yqn8"),e.default={template:'\n{% block sw_extension_review_creation %}\n<sw-modal\n    class="sw-extension-rating-modal"\n    :title="$tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation-inputs.title\')"\n    variant="small"\n    @modal-close="emitClose"\n>\n    \n    {% block sw_extension_rating_modal_slot_default %}\n    <template #default>\n        \n        {% block sw_extension_rating_modal_slot_default_creation_inputs %}\n        <sw-extension-review-creation-inputs\n            :errors="errors"\n            @changed="onChange"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_rating_modal_slot_footer %}\n    <template #modal-footer>\n        \n        {% block sw_extension_rating_modal_slot_footer_gtc_checkbox %}\n        <sw-gtc-checkbox\n            {% if VUE3 %}\n            v-model:value="tocAccepted"\n            {% else %}\n            v-model="tocAccepted"\n            {% endif %}\n        />\n        {% endblock %}\n\n        \n        {% block sw_extension_rating_modal_slot_footer_buttons %}\n        <div class="sw-extension-rating-modal__buttons">\n            \n            {% block sw_extension_rating_modal_slot_footer_buttons_cancel %}\n            <sw-button\n                size="small"\n                :disabled="isLoading"\n                @click="emitClose"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_extension_rating_modal_slot_footer_buttons_submit %}\n            <sw-button-process\n                variant="primary"\n                size="small"\n                :is-loading="isLoading"\n                :process-success="isCreatedSuccessful"\n                :disabled="disabled"\n                {% if VUE3 %}\n                @update:process-success="emitClose"\n                {% else %}\n                @process-finish="emitClose"\n                {% endif %}\n                @click="handleCreateReview"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-ratings.sw-extension-review-creation.submitBtn\') }}\n            </sw-button-process>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',methods:{emitClose:function(){this.$emit("modal-close")}}}},yqn8:function(n,e,t){var o=t("JPyJ");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,t("P8hj").default)("9a9eeb96",o,!0,{})}}]);