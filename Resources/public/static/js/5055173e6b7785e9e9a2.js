(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[413],{"2dtC":function(e,n,t){var r=t("vn2P");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t("ydqr").default)("463f57ff",r,!0,{})},N5zI:function(e,n,t){"use strict";t.r(n);var r=t("QGb3"),c=t.n(r),i=t("J58c"),s=t.n(i),u=(t("2dtC"),Shopware.Utils);n.default={template:'\n{% block sw_settings_country_currency_dependent_modal %}\n<sw-modal\n    class="sw-settings-country-currency-dependent-modal"\n    :title="$tc(\'sw-settings-country.detail.currencyDependentValues\')"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_settings_country_currency_dependent_modal_content %}\n    <sw-data-grid\n        class="sw-settings-country-currency-dependent-modal__grid"\n        :data-source="currencyDependsValue"\n        :is-loading="isLoading"\n        :show-selection="false"\n        :plain-appearance="true"\n        :columns="countryCurrencyColumns"\n    >\n\n        \n        {% block sw_settings_country_currency_dependent_modal_content_hamburger_menu %}\n        <template #customSettings>\n            <sw-settings-country-currency-hamburger-menu\n                :options="menuOptions"\n                @currency-change="changeCurrencyDependentRow"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block  sw_settings_country_currency_dependent_modal_content_currency_name %}\n        <template #column-currencyId="{ item }">\n            <div class="sw-settings-country-currency-dependent-modal__inheritance-wrapper">\n                \n                <label>{{ getCurrencyNameById(item.currencyId) }}</label>\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_currency_dependent_grid_column_value %}\n        <template #column-amount="{ item }">\n            <sw-number-field\n                v-model="item.amount"\n                class="sw-settings-country-currency-dependent-modal__input"\n                :min="0"\n                :disabled="!item.enabled || !acl.can(\'country.editor\')"\n                @change="reCalculatorInherited(item)"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_currency_dependent_grid_column_is_base_currency %}\n        <template #column-enabled="{ item }">\n            <sw-radio-field\n                :value="checkBox"\n                :name="radioButtonName"\n                :options="[{ value: item.enabled }]"\n                :disabled="!acl.can(\'country.editor\')"\n                @change="onChangeBaseCurrency(item)"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_currency_dependent_column_actions %}\n        <template #actions="{ item }">\n\n            \n            {% block sw_settings_country_currency_dependent_grid_column_action_delete %}\n            <sw-context-menu-item\n                variant="danger"\n                :disabled="item.enabled || !acl.can(\'country.editor\')"\n                @click="changeCurrencyDependentRow(item.currencyId, false)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_settings_country_currency_dependent_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_country_currency_dependent_modal_close %}\n        <sw-button\n            class="sw-settings-country-currency-dependent-modal__cancel-button"\n            size="small"\n            :disabled="!acl.can(\'country.editor\')"\n            @click="closeModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n\n        <sw-button\n            class="sw-settings-country-currency-dependent-modal__save-button"\n            variant="primary"\n            size="small"\n            :disabled="!acl.can(\'country.editor\')"\n            @click="saveModal"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","acl"],props:{currencyDependsValue:{type:Array,required:!0},countryId:{type:String,required:!0},userConfig:{type:Object,required:!0},userConfigValues:{type:Object,required:!0},menuOptions:{type:Array,required:!0},taxFreeType:{type:String,required:!1,default:""},isLoading:{type:Boolean,required:!0}},data:function(){return{inputId:u.createId(),checkBox:!0,basedItem:{}}},computed:{currentUserId:function(){return Shopware.State.get("session").currentUser.id},currencyTaxFreeDependentRepository:function(){return this.repositoryFactory.create("country_currency_tax_free_dependent_value")},radioButtonName:function(){return"sw-settings-country-currency-dependent-modal-boolean-radio-".concat(this.inputId)},countryCurrencyColumns:function(){return[{property:"currencyId",label:"",inlineEdit:"string",primary:!0},{property:"amount",label:this.$tc("sw-settings-country.detail.taxFreeFrom"),inlineEdit:"string",primary:!0},{property:"enabled",label:this.$tc("sw-settings-country.detail.baseCurrency"),inlineEdit:"string"}]}},methods:{closeModal:function(){this.$emit("modal-close")},saveModal:function(){this.createUserConfigValue(),this.closeModal(),this.$emit("modal-save")},changeCurrencyDependentRow:function(e,n){n?this.addCurrencyDependentRow(e):this.removeCurrencyDependentRow(e)},addCurrencyDependentRow:function(e){var n={amount:this.calculateInheritedPrice(e),enabled:!1,currencyId:e};this.currencyDependsValue.push(n)},removeCurrencyDependentRow:function(e){var n=this.currencyDependsValue.find((function(n){return n.currencyId===e}));n&&(this.currencyDependsValue.splice(this.currencyDependsValue.indexOf(n),1),this.userConfigValues[this.taxFreeType]&&this.userConfigValues[this.taxFreeType].splice(this.userConfigValues[this.taxFreeType].indexOf(e),1),this.updateCheckBoxHamburgerMenu(e))},updateCheckBoxHamburgerMenu:function(e){this.menuOptions.forEach((function(n){n.id===e&&(n.checked=!1)}))},onChangeBaseCurrency:function(e){e.enabled=!0,this.currencyDependsValue.forEach((function(n){n.enabled=n.currencyId===e.currencyId})),this.userConfigValues[this.taxFreeType]&&this.userConfigValues[this.taxFreeType].splice(this.userConfigValues[this.taxFreeType].indexOf(e.currencyId),1),this.menuOptions.forEach((function(n){n.disabled=n.id===e.currencyId})),this.checkBox=!0,this.basedItem=e,this.$emit("base-item-change",this.basedItem)},calculateInheritedPrice:function(e){var n=this.currencyDependsValue.find((function(e){return!0===e.enabled}));return n?this.getPriceByCurrency(n,e):0},reCalculatorInherited:function(e){var n=this;this.currencyDependsValue.forEach((function(t){!1===t.enabled&&(t.amount=n.getPriceByCurrency(e,t.currencyId))}))},getPriceByCurrency:function(e,n){var t=this.getCurrencyById(n),r=this.getCurrencyById(e.currencyId);return t.factor&&r.factor?e.amount/r.factor*t.factor:0},createUserConfigValue:function(){return this.userConfig.isNew()?this.createNewUserConfig():this.updateExistedValue()},createNewUserConfig:function(){var e=this;this.userConfig.value=s()({},this.countryId,s()({},this.taxFreeType,[])),this.currencyDependsValue.forEach((function(n){n.enabled||e.userConfig.value[e.countryId][e.taxFreeType].push(n.currencyId)}))},updateExistedValue:function(){var e=this.userConfigValues[this.taxFreeType];e||(this.userConfigValues[this.taxFreeType]=[],e=this.userConfigValues[this.taxFreeType]),this.currencyDependsValue.forEach((function(n){n.enabled||e.push(n.currencyId)})),this.userConfig.value[this.countryId][this.taxFreeType]=c()(new Set(e))},getCurrencyNameById:function(e){var n,t=this.menuOptions.find((function(n){return n.id===e}));return null!==(n=null==t?void 0:t.name)&&void 0!==n?n:""},getCurrencyById:function(e){return this.menuOptions.find((function(n){return n.id===e}))||{}}}}},vn2P:function(e,n,t){}}]);