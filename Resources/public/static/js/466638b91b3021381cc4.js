(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[18303],{46553:function(){},618303:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(298430);var s={template:'\n{% block sw_product_settings_mode %}\n<sw-context-button\n    v-tooltip="{ message: $tc(\'sw-product.general.tooltipModeSettings\') }"\n    class="sw-product-settings-mode"\n    :menu-width="300"\n    :auto-close="false"\n>\n    <template #button>\n        \n        {% block sw_product_settings_mode_trigger %}\n        <sw-button\n            class="sw-product-settings-mode__trigger"\n            size="x-small"\n            square\n            :aria-label="$tc(\'sw-product.general.tooltipModeSettings\')"\n        >\n            \n            {% block sw_product_settings_mode_trigger_icon %}\n            <sw-icon\n                name="regular-bars-s"\n                size="16px"\n            />\n            {% endblock %}\n        </sw-button>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_product_settings_mode_content %}\n    \n    {% block sw_product_settings_mode_main %}\n    <div class="sw-product-settings-mode__container">\n        \n        {% block sw_product_settings_mode_advanced_switch %}\n        <sw-switch-field\n            v-model:value="advancedMode.enabled"\n            class="sw-product-settings-mode__advanced-mode"\n            size="medium"\n            :label="$tc(advancedMode.label)"\n            @update:value="onChangeSetting"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_settings_mode_devider %}\n    <sw-context-menu-divider />\n    {% endblock %}\n\n    \n    {% block sw_product_settings_mode_list %}\n    <transition-group\n        class="sw-product-settings-mode__container sw-product-settings-mode__list"\n        name="item-list"\n        tag="div"\n    >\n        \n        {% block sw_product_settings_mode_item %}\n        <div\n            v-for="(item, index) in settings"\n            :key="item.key"\n            class="sw-product-settings-mode__item"\n        >\n            \n            {% block sw_product_settings_mode_item_visibility_checkbox %}\n            <sw-checkbox-field\n                v-model:value="item.enabled"\n                :disabled="!advancedMode.enabled"\n                :label="$tc(item.label)"\n                @update:value="onChangeSettingItem"\n            />\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </transition-group>\n    {% endblock %}\n\n    \n    {% block sw_product_settings_mode_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n    {% endblock %}\n</sw-context-button>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["settings-change","settings-item-change"],props:{modeSettings:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!0}},computed:{advancedMode(){return this.modeSettings.value.advancedMode},settings(){switch(this.$route.name){case"sw.product.detail.base":return this.modeSettings.value.settings.filter(({name:e})=>"general"===e);case"sw.product.detail.specifications":return this.modeSettings.value.settings.filter(({name:e})=>"specifications"===e);default:return this.modeSettings.value.settings}}},methods:{onChangeSetting(){this.$emit("settings-change")},onChangeSettingItem(){this.$emit("settings-item-change")}}}},298430:function(e,n,t){var s=t(46553);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(745346).Z("213d40b7",s,!0,{})}}]);