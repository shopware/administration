(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[414],{"T/Au":function(n,e,t){"use strict";t.r(e);t("qCha"),e.default={template:'\n{% block sw_settings_country_currency_hamburger_menu %}\n<sw-context-button\n    :menu-width="300"\n    :auto-close="false"\n    :auto-close-outside-click="true"\n>\n    <template #button>\n\n        \n        {% block sw_settings_country_currency_hamburger_menu_trigger %}\n        <sw-button\n            class="sw-settings-country-currency-hamburger-menu__button"\n            size="x-small"\n            square\n        >\n\n            \n            {% block sw_country_currency_hamburger_menu_icon %}\n            <sw-icon\n                name="regular-bars-s"\n                small\n            />\n            {% endblock %}\n\n        </sw-button>\n        {% endblock %}\n\n    </template>\n\n    \n    {% block sw_country_currency_hamburger_menu_list %}\n    <div class="sw-settings-country-currency-hamburger-menu__wrapper">\n\n        \n        {% block sw_country_currency_hamburger_menu_item %}\n        <div\n            v-for="(item) in options"\n            :key="item.key"\n            class="sw-settings-country-currency-hamburger-menu__item"\n        >\n\n            \n            {% block sw_country_currency_hamburger_menu_item_visibility_checkbox %}\n            <sw-checkbox-field\n                v-model="item.checked"\n                :label="item.name"\n                :disabled="item.disabled || !acl.can(\'country.editor\')"\n                @change="onCheckCurrency(item.id, item.checked)"\n            />\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_country_currency_hamburger_menu_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n\n</sw-context-button>\n{% endblock %}\n',inject:["acl"],props:{isLoading:{type:Boolean,required:!1,default:!1},options:{type:Array,required:!0}},methods:{onCheckCurrency:function(n,e){this.$emit("currency-change",n,e)}}}},qCha:function(n,e,t){var c=t("vo9s");c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[n.i,c,""]]),c.locals&&(n.exports=c.locals);(0,t("ydqr").default)("18eb0d8d",c,!0,{})},vo9s:function(n,e,t){}}]);