(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[422],{OTbu:function(n,e,i){var t=i("hHFp");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,i("ydqr").default)("0c6bba98",t,!0,{})},PSbJ:function(n,e,i){"use strict";i.r(e);i("OTbu"),e.default={template:'\n{% block sw_settings_price_rounding %}\n<div class="sw-settings-price-rounding">\n    \n    {% block sw_settings_price_rounding_header_warning %}\n    <sw-alert\n        v-if="showHeaderWarning"\n        class="sw-settings-price-rounding__header-warning"\n        variant="warning"\n    >\n        {{ $tc(\'sw-settings-currency.price-rounding.headerWarning\') }}\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_header_items %}\n    <div\n        role="heading"\n        aria-level="3"\n        class="sw-settings-price-rounding__headline"\n    >\n        {{ $tc(\'sw-settings-currency.price-rounding.itemsHeadline\') }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_subline_items %}\n    <p class="sw-settings-price-rounding__info-text">\n        {{ $tc(\'sw-settings-currency.price-rounding.itemsSubline\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_container_items %}\n    <sw-container\n        class="sw-settings-price-rounding__rounding-container"\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        gap="0px 30px"\n    >\n        \n        {% block sw_settings_price_rounding_container_items_decimals %}\n        <sw-number-field\n            v-model="itemRounding.decimals"\n            :label="$tc(\'sw-settings-currency.price-rounding.labelDecimals\')"\n            :help-text="$tc(\'sw-settings-currency.price-rounding.helpTextDecimals\')"\n            required\n            number-type="int"\n            :step="1"\n            :min="0"\n            :max="20"\n            @change="onChangeDecimals($event, \'itemRounding\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_price_rounding_container_items_interval %}\n        <sw-single-select\n            v-model="itemRounding.interval"\n            v-tooltip="{\n                message: $tc(\'sw-settings-currency.price-rounding.tooltipIntervalDisabled\'),\n                disabled: !itemIntervalDisabled,\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-price-rounding__item-interval-select"\n            :label="$tc(\'sw-settings-currency.price-rounding.labelInterval\')"\n            :help-text="$tc(\'sw-settings-currency.price-rounding.helpTextInterval\')"\n            :disabled="itemIntervalDisabled"\n            required\n            show-clearable-button\n            :options="intervalOptions"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_price_rounding_container_items_round_for_net %}\n        <sw-switch-field\n            v-model="itemRounding.roundForNet"\n            class="sw-settings-price-rounding__round-for-net-checkbox"\n            :label="$tc(\'sw-settings-currency.price-rounding.labelRoundForNet\')"\n            :help-text="$tc(\'sw-settings-currency.price-rounding.helpTextRoundForNet\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_spacer %}\n    <hr class="sw-settings-price-rounding__spacer">\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_header_grand %}\n    <div\n        role="heading"\n        aria-level="3"\n        class="sw-settings-price-rounding__headline"\n    >\n        {{ $tc(\'sw-settings-currency.price-rounding.grandHeadline\') }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_subline_grand %}\n    <p class="sw-settings-price-rounding__info-text">\n        {{ $tc(\'sw-settings-currency.price-rounding.grandSubline\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_header_info %}\n    <sw-alert\n        v-if="showHeaderInfo"\n        class="sw-settings-price-rounding__header-info"\n        variant="info"\n    >\n        {{ $tc(\'sw-settings-currency.price-rounding.headerInfo\') }}\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_settings_price_rounding_container_grand %}\n    <sw-container\n        class="sw-settings-price-rounding__rounding-container"\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        gap="0px 30px"\n    >\n        \n        {% block sw_settings_price_rounding_container_grand_decimals %}\n        <sw-number-field\n            v-model="totalRounding.decimals"\n            :label="$tc(\'sw-settings-currency.price-rounding.labelDecimals\')"\n            :help-text="$tc(\'sw-settings-currency.price-rounding.helpTextDecimals\')"\n            required\n            number-type="int"\n            :step="1"\n            :min="0"\n            :max="20"\n            @change="onChangeDecimals($event, \'totalRounding\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_price_rounding_container_grand_interval %}\n        <sw-single-select\n            v-model="totalRounding.interval"\n            v-tooltip="{\n                message: $tc(\'sw-settings-currency.price-rounding.tooltipIntervalDisabled\'),\n                disabled: !totalIntervalDisabled,\n                showOnDisabledElements: true\n            }"\n            class="sw-settings-price-rounding__grand-interval-select"\n            :label="$tc(\'sw-settings-currency.price-rounding.labelInterval\')"\n            :help-text="$tc(\'sw-settings-currency.price-rounding.helpTextInterval\')"\n            required\n            show-clearable-button\n            :disabled="totalIntervalDisabled"\n            :options="intervalOptions"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_price_rounding_container_grand_round_for_net %}\n        <sw-switch-field\n            v-model="totalRounding.roundForNet"\n            class="sw-settings-price-rounding__round-for-net-checkbox"\n            :label="$tc(\'sw-settings-currency.price-rounding.labelRoundForNet\')"\n            :help-text="$tc(\'sw-settings-currency.price-rounding.helpTextRoundForNet\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{itemRounding:{type:Object,required:!1,default:function(){return{}}},totalRounding:{type:Object,required:!1,default:function(){return{}}}},data:function(){return{intervalOptions:[{label:this.$tc("sw-settings-currency.price-rounding.labelIntervalNone"),value:.01},{label:"0.05",value:.05},{label:"0.10",value:.1},{label:"0.50",value:.5},{label:"1.00",value:1}]}},computed:{itemIntervalDisabled:function(){return this.itemRounding.decimals>2},totalIntervalDisabled:function(){return this.totalRounding.decimals>2},showHeaderInfo:function(){return.01!==this.totalRounding.interval||this.itemRounding.decimals!==this.totalRounding.decimals},showHeaderWarning:function(){return this.totalRounding.interval!==this.itemRounding.interval}},methods:{onChangeDecimals:function(n,e){n<=2||!["itemRounding","totalRounding"].includes(e)||(this[e].interval=.01)}}}},hHFp:function(n,e,i){}}]);