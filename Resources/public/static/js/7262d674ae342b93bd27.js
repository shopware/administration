(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[589],{DDOa:function(n,i,t){"use strict";t.r(i);i.default={template:'\n{% block sw_wizard_page_slot_default %}\n\n{% block sw_wizard_discount_selection %}\n<sw-promotion-v2-wizard-description>\n    {{ $tc(\'sw-promotion-v2.detail.discount-selection.description\') }}\n</sw-promotion-v2-wizard-description>\n{% endblock %}\n\n\n{% block sw_wizard_discount_selection_option_selection %}\n<sw-radio-field\n    {% if VUE3 %}\n    v-model:value="value"\n    {% else %}\n    v-model="value"\n    {% endif %}\n    :options="getSelectionOptions()"\n    block\n    {% if VUE3 %}\n    @update:value="onChangeSelection"\n    {% else %}\n    @change="onChangeSelection"\n    {% endif %}\n/>\n    {% endblock %}\n{% endblock %}\n',data:function(){return{value:"basic",modalTitle:this.$tc("sw-promotion-v2.detail.discount-selection.modalTitle")}},methods:{getSelectionOptions:function(){return[{value:"basic",name:this.$tc("sw-promotion-v2.detail.discount-selection.basic.name"),description:this.$tc("sw-promotion-v2.detail.discount-selection.basic.description")},{value:"buy-x-get-y",name:this.$tc("sw-promotion-v2.detail.discount-selection.buy-x-get-y.name"),description:this.$tc("sw-promotion-v2.detail.discount-selection.buy-x-get-y.description")},{value:"shipping-discount",name:this.$tc("sw-promotion-v2.detail.discount-selection.shipping-discount.name"),description:this.$tc("sw-promotion-v2.detail.discount-selection.shipping-discount.description")}]},onChangeSelection:function(n){this.$emit("change-selection",n)}}}}}]);
//# sourceMappingURL=7262d674ae342b93bd27.js.map