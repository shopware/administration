(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[588],{rayi:function(n,t,e){"use strict";e.r(t);var i=Shopware.Data.Criteria;t.default={template:'\n{% block sw_promotion_v2_settings_trigger %}\n<div class="sw-promotion-v2-settings-trigger-settings">\n\n    \n    {% block sw_promotion_v2_settings_trigger_description %}\n    <sw-promotion-v2-wizard-description\n        class="sw-promotion-v2-settings-trigger-settings__description"\n    >\n        {{ $tc(\'sw-promotion-v2.detail.discounts.wizard.shipping-discount.description\') }}\n    </sw-promotion-v2-wizard-description>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_settings_trigger_radio_switch %}\n    <sw-switch-field\n        v-model="useTrigger"\n        class="sw-promotion-v2-settings-trigger-settings__use-trigger"\n        :label="$tc(\'sw-promotion-v2.detail.discounts.settings.trigger.labelUseTrigger\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_settings_trigger_container %}\n    <sw-container v-if="useTrigger">\n\n        \n        {% block sw_promotion_v2_settings_trigger_select_trigger_type %}\n        <sw-select-field\n            v-model="triggerType"\n            class="sw-promotion-v2-settings-trigger-settings__trigger-type"\n            :label="$tc(\'sw-promotion-v2.detail.discounts.settings.trigger.labelNumberOfTriggers\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n        >\n\n            \n            {% block sw_promotion_v2_settings_trigger_select_trigger_amount_options %}\n            <option\n                v-for="selection in getTriggerSelection()"\n                :key="selection.value"\n                :value="selection.value"\n                :disabled="selection.disabled"\n            >\n                {{ selection.display }}\n            </option>\n            {% endblock %}\n\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_settings_trigger_rule_selection_selection %}\n        <sw-promotion-v2-rule-select\n            v-model="discount.discountRules"\n            local-mode\n            class="sw-promotion-v2-settings-trigger-settings__rule-selection"\n            :criteria="ruleCriteria"\n            :rule-scope="[\'cart\']"\n            :label="$tc(\'sw-promotion-v2.detail.discounts.settings.ruleSelection.labelSelection\')"\n            :placeholder="$tc(\'sw-promotion-v2.detail.discounts.settings.ruleSelection.placeholderSelection\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n        />\n        {% endblock %}\n\n    </sw-container>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["acl"],props:{discount:{type:Object,required:!0}},data:function(){return{useTrigger:this.discount.discountRules.length>0,triggerType:"single"}},computed:{ruleCriteria:function(){return new i(1,25).addSorting(i.sort("name","ASC",!1))}},watch:{"discount.discountRules":function(n){this.discount.considerAdvancedRules=n.length>0}},methods:{getTriggerSelection:function(){var n="sw-promotion-v2.detail.discounts.settings.trigger.triggerType";return[{value:"single",display:this.$tc("".concat(n,".displaySingleTrigger")),disabled:!1},{value:"multi",display:this.$tc("".concat(n,".displayMultiTrigger")),disabled:!0}]}}}}}]);