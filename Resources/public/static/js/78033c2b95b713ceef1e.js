(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[61992],{483987:function(){},461992:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}}),t(468361);var a={template:'\n{% block sw_payment_card %}\n<sw-card\n    position-identifier="sw-payment-card"\n    class="sw-payment-card"\n    :title="paymentMethod.translated.distinguishableName"\n>\n    <div class="sw-payment-card_content">\n\n        \n        {% block sw_payment_card_preview %}\n        <img\n            v-if="previewUrl"\n            class="sw-payment-card__preview"\n            :src="previewUrl"\n            :alt="paymentMethod.media.translated.alt"\n        >\n        {% endblock %}\n\n        \n        {% block sw_payment_card_description %}\n        <div class="sw-payment-card__description">\n            <span v-html="paymentMethod.translated.description"></span>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_payment_card_link %}\n        <sw-internal-link\n            :router-link="{ name: \'sw.settings.payment.detail\', params: { id: paymentMethod.id }}"\n            :disabled="!acl.can(\'payment.editor\') || undefined"\n            hide-icon\n        >\n            {{ $tc(\'sw-settings-payment.overview.editDetails\') }}\n        </sw-internal-link>\n        {% endblock %}\n\n        \n        {% block sw_payment_card_toggle %}\n        <sw-switch-field\n            v-tooltip="{ message: $tc(\'sw-settings-payment.overview.missingEditorPermission\'), disabled: acl.can(\'payment.editor\') }"\n            :value="paymentMethod.active"\n            :disabled="!acl.can(\'payment.editor\') || undefined"\n            :label="$tc(\'sw-settings-payment.overview.activeToggle\')"\n            @update:value="setPaymentMethodActive(!paymentMethod.active)"\n        />\n        {% endblock %}\n\n    </div>\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["acl"],emits:["set-payment-active"],props:{paymentMethod:{type:Object,required:!0}},computed:{previewUrl(){return this.paymentMethod.media?this.paymentMethod.media.url:null}},methods:{async setPaymentMethodActive(e){this.paymentMethod.active=e,this.$emit("set-payment-active",this.paymentMethod)}}}},468361:function(e,n,t){var a=t(483987);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),t(745346).Z("acafd2d0",a,!0,{})}}]);