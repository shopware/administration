(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[315],{DSqj:function(n,o,i){var t=i("MidE");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,i("P8hj").default)("03c2641b",t,!0,{})},MidE:function(n,o,i){},R6M0:function(n,o,i){"use strict";i.r(o);i("DSqj");var t=Shopware.State;o.default={template:'\n{% block sw_order_create_invalid_promotion_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.invalidPromotionModal.modalTitle\')"\n    variant="small"\n    class="sw-order-create-invalid-promotion-modal"\n    @modal-close="onClose"\n>\n\n    \n    {% block sw_order_create_invalid_promotion_modal_description %}\n    <p class="sw-order-create-invalid-promotion-modal__description">\n        {{ $tc(\'sw-order.invalidPromotionModal.modalDescription\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_order_create_invalid_promotion_modal_lists %}\n    <template\n        v-for="item in invalidPromotionCodes"\n        {% if VUE3 %}\n        :key="item.code"\n        {% endif %}\n    >\n        <li\n            {% if VUE2 %}\n            :key="item.code"\n            {% endif %}\n        >\n            - <strong>{{ item.code }}</strong>\n        </li>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_create_invalid_promotion_modal_actions %}\n    <template #modal-footer>\n\n        \n        {% block sw_order_create_invalid_promotion_modal_actions_confirm %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onConfirm"\n        >\n            {{ $tc(\'sw-order.invalidPromotionModal.buttonConfirm\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n\n',computed:{invalidPromotionCodes:function(){return t.getters["swOrder/invalidPromotionCodes"]}},methods:{onClose:function(){this.$emit("close")},onConfirm:function(){this.$emit("confirm")}}}}}]);