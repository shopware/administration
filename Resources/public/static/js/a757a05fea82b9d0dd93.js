(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[30379],{471270:function(){},630379:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}}),t(275118);let r=Shopware.Utils;var c={template:'\n{% block sw_settings_country_currency_dependent_modal %}\n<sw-modal\n    class="sw-settings-country-currency-dependent-modal"\n    :title="$tc(\'sw-settings-country.detail.currencyDependentValues\')"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_settings_country_currency_dependent_modal_content %}\n    <sw-data-grid\n        class="sw-settings-country-currency-dependent-modal__grid"\n        :data-source="currencyDependsValue"\n        :is-loading="isLoading"\n        :show-selection="false || undefined"\n        :plain-appearance="true"\n        :columns="countryCurrencyColumns"\n    >\n\n        \n        {% block sw_settings_country_currency_dependent_modal_content_hamburger_menu %}\n        <template #customSettings>\n            <sw-settings-country-currency-hamburger-menu\n                :options="menuOptions"\n                @currency-change="changeCurrencyDependentRow"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block  sw_settings_country_currency_dependent_modal_content_currency_name %}\n        <template #column-currencyId="{ item }">\n            <div class="sw-settings-country-currency-dependent-modal__inheritance-wrapper">\n                \n                <label>{{ getCurrencyNameById(item.currencyId) }}</label>\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_currency_dependent_grid_column_value %}\n        <template #column-amount="{ item }">\n            <sw-number-field\n                v-model:value="item.amount"\n                class="sw-settings-country-currency-dependent-modal__input"\n                :min="0"\n                :disabled="(!item.enabled || !acl.can(\'country.editor\')) || undefined"\n                @update:value="reCalculatorInherited(item)"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_currency_dependent_grid_column_is_base_currency %}\n        <template #column-enabled="{ item }">\n            <sw-radio-field\n                :value="checkBox"\n                :name="radioButtonName"\n                :options="[{ value: item.enabled }]"\n                :disabled="!acl.can(\'country.editor\') || undefined"\n                @update:value="onChangeBaseCurrency(item)"\n            />\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_currency_dependent_column_actions %}\n        <template #actions="{ item }">\n\n            \n            {% block sw_settings_country_currency_dependent_grid_column_action_delete %}\n            <sw-context-menu-item\n                variant="danger"\n                :disabled="(item.enabled || !acl.can(\'country.editor\')) || undefined"\n                @click="changeCurrencyDependentRow(item.currencyId, false)"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_settings_country_currency_dependent_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_settings_country_currency_dependent_modal_close %}\n        <sw-button\n            class="sw-settings-country-currency-dependent-modal__cancel-button"\n            size="small"\n            :disabled="!acl.can(\'country.editor\') || undefined"\n            @click="closeModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n\n        <sw-button\n            class="sw-settings-country-currency-dependent-modal__save-button"\n            variant="primary"\n            size="small"\n            :disabled="!acl.can(\'country.editor\') || undefined"\n            @click="saveModal"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],emits:["modal-close","modal-save","base-item-change"],props:{currencyDependsValue:{type:Array,required:!0},countryId:{type:String,required:!0},userConfig:{type:Object,required:!0},userConfigValues:{type:Object,required:!0},menuOptions:{type:Array,required:!0},taxFreeType:{type:String,required:!1,default:""},isLoading:{type:Boolean,required:!0}},data(){return{inputId:r.createId(),checkBox:!0,basedItem:{}}},computed:{currentUserId(){return Shopware.State.get("session").currentUser.id},currencyTaxFreeDependentRepository(){return this.repositoryFactory.create("country_currency_tax_free_dependent_value")},radioButtonName(){return`sw-settings-country-currency-dependent-modal-boolean-radio-${this.inputId}`},countryCurrencyColumns(){return[{property:"currencyId",label:"",inlineEdit:"string",primary:!0},{property:"amount",label:this.$tc("sw-settings-country.detail.taxFreeFrom"),inlineEdit:"string",primary:!0},{property:"enabled",label:this.$tc("sw-settings-country.detail.baseCurrency"),inlineEdit:"string"}]}},methods:{closeModal(){this.$emit("modal-close")},saveModal(){this.createUserConfigValue(),this.closeModal(),this.$emit("modal-save")},changeCurrencyDependentRow(e,n){if(n){this.addCurrencyDependentRow(e);return}this.removeCurrencyDependentRow(e)},addCurrencyDependentRow(e){let n={amount:this.calculateInheritedPrice(e),enabled:!1,currencyId:e};this.currencyDependsValue.push(n)},removeCurrencyDependentRow(e){let n=this.currencyDependsValue.find(n=>n.currencyId===e);n&&(this.currencyDependsValue.splice(this.currencyDependsValue.indexOf(n),1),this.userConfigValues[this.taxFreeType]&&this.userConfigValues[this.taxFreeType].splice(this.userConfigValues[this.taxFreeType].indexOf(e),1),this.updateCheckBoxHamburgerMenu(e))},updateCheckBoxHamburgerMenu(e){this.menuOptions.forEach(n=>{n.id===e&&(n.checked=!1)})},onChangeBaseCurrency(e){e.enabled=!0,this.currencyDependsValue.forEach(n=>{n.enabled=n.currencyId===e.currencyId}),this.userConfigValues[this.taxFreeType]&&this.userConfigValues[this.taxFreeType].splice(this.userConfigValues[this.taxFreeType].indexOf(e.currencyId),1),this.menuOptions.forEach(n=>{n.disabled=n.id===e.currencyId}),this.checkBox=!0,this.basedItem=e,this.$emit("base-item-change",this.basedItem)},calculateInheritedPrice(e){let n=this.currencyDependsValue.find(e=>!0===e.enabled);return n?this.getPriceByCurrency(n,e):0},reCalculatorInherited(e){this.currencyDependsValue.forEach(n=>{!1===n.enabled&&(n.amount=this.getPriceByCurrency(e,n.currencyId))})},getPriceByCurrency(e,n){let t=this.getCurrencyById(n),r=this.getCurrencyById(e.currencyId);return t.factor&&r.factor?e.amount/r.factor*t.factor:0},createUserConfigValue(){return this.userConfig.isNew()?this.createNewUserConfig():this.updateExistedValue()},createNewUserConfig(){this.userConfig.value={[this.countryId]:{[this.taxFreeType]:[]}},this.currencyDependsValue.forEach(e=>{e.enabled||this.userConfig.value[this.countryId][this.taxFreeType].push(e.currencyId)})},updateExistedValue(){let e=this.userConfigValues[this.taxFreeType];e||(this.userConfigValues[this.taxFreeType]=[],e=this.userConfigValues[this.taxFreeType]),this.currencyDependsValue.forEach(n=>{n.enabled||e.push(n.currencyId)}),this.userConfig.value[this.countryId][this.taxFreeType]=[...new Set(e)]},getCurrencyNameById(e){let n=this.menuOptions.find(n=>n.id===e);return n?.name??""},getCurrencyById(e){return this.menuOptions.find(n=>n.id===e)||{}}}}},275118:function(e,n,t){var r=t(471270);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),t(745346).Z("deaad558",r,!0,{})}}]);