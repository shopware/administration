(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[64796],{428320:function(){},664796:function(o,n,i){"use strict";i.r(n),i.d(n,{default:function(){return e}}),i(363421);let{State:t}=Shopware;var e={template:'\n{% block sw_order_create_invalid_promotion_modal %}\n<sw-modal\n    :title="$tc(\'sw-order.invalidPromotionModal.modalTitle\')"\n    variant="small"\n    class="sw-order-create-invalid-promotion-modal"\n    @modal-close="onClose"\n>\n\n    \n    {% block sw_order_create_invalid_promotion_modal_description %}\n    <p class="sw-order-create-invalid-promotion-modal__description">\n        {{ $tc(\'sw-order.invalidPromotionModal.modalDescription\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_order_create_invalid_promotion_modal_lists %}\n    <template\n        v-for="item in invalidPromotionCodes"\n        :key="item.code"\n    >\n        <li>\n            - <strong>{{ item.code }}</strong>\n        </li>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_create_invalid_promotion_modal_actions %}\n    <template #modal-footer>\n\n        \n        {% block sw_order_create_invalid_promotion_modal_actions_confirm %}\n        <sw-button\n            variant="primary"\n            size="small"\n            @click="onConfirm"\n        >\n            {{ $tc(\'sw-order.invalidPromotionModal.buttonConfirm\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n\n',compatConfig:Shopware.compatConfig,emits:["close","confirm"],computed:{invalidPromotionCodes(){return t.getters["swOrder/invalidPromotionCodes"]}},methods:{onClose(){this.$emit("close")},onConfirm(){this.$emit("confirm")}}}},363421:function(o,n,i){var t=i(428320);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[o.id,t,""]]),t.locals&&(o.exports=t.locals),i(745346).Z("2d6fdd96",t,!0,{})}}]);