(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[465],{"01Wp":function(e,i,t){"use strict";t.r(i);var n=t("6lmj"),r=t.n(n),s=t("CsSd"),c=t.n(s);t("7hlL");function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){c()(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var p=Shopware,o=p.Mixin,u=p.Context,d=p.Data.Criteria,h=Shopware.Utils.object.cloneDeep,g=Shopware.Component.getComponentHelper(),m=g.mapState,_=g.mapGetters;i.default={template:'\n{% block sw_settings_shipping_price_matrix %}\n<sw-card\n    :title="cardTitle"\n    :is-loading="isLoading"\n    class="sw-settings-shipping-price-matrix"\n    position-identifier="sw-settings-shipping-price-matrix"\n>\n    \n    {% block sw_settings_shipping_price_matrix_topbar_alert %}\n    <sw-alert\n        v-if="priceGroup.isNew"\n        class="sw-settings-shipping-price-matrix__new-matrix-alert"\n        variant="warning"\n        :title="$tc(\'global.default.warning\')"\n        :closable="false"\n    >\n        {{ $tc(\'sw-settings-shipping.priceMatrix.newMatrixAlertMessage\') }}\n    </sw-alert>\n    {% endblock %}\n    \n    {% block sw_settings_shipping_price_matrix_topbar %}\n    <sw-container\n        columns="1fr 160px 35px"\n        gap="0px 24px"\n        class="sw-settings-shipping-price-matrix__top-container"\n    >\n        \n        {% block sw_settings_shipping_price_matrix_topbar_rule_select %}\n        <sw-select-rule-create\n            class="sw-settings-shipping-price-matrix__top-container-rule-select"\n            :rule-id="priceGroup.ruleId"\n            :rule-filter="ruleFilterCriteria"\n            size="small"\n            :disabled="disabled"\n            :placeholder="mainRulePlaceholder"\n            rule-aware-group-key="shippingMethodPrices"\n            :restricted-rule-ids="usedRules"\n            :restricted-rule-ids-tooltip-label="$tc(\'sw-settings-shipping.priceMatrix.ruleAlreadyUsed\')"\n            @save-rule="onSaveMainRule"\n        />\n        {% endblock %}\n\n        \n        {% block sw_settings_shipping_price_matrix_topbar_new_price %}\n        <sw-button\n            size="x-small"\n            class="sw-settings-shipping-price-matrix__top-container-add-new-rule"\n            :variant="!showDataGrid ? \'\': \'ghost\'"\n            :disabled="!showDataGrid || disabled"\n            @click="onAddNewShippingPrice"\n        >\n            <template v-if="isRuleMatrix">\n                {{ $tc(\'sw-settings-shipping.priceMatrix.addNewRule\') }}\n            </template>\n            <template v-else>\n                {{ $tc(\'sw-settings-shipping.priceMatrix.addNewShippingPrice\') }}\n            </template>\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_shipping_price_matrix_topbar_context_button %}\n        <sw-context-button\n            :disabled="!showDataGrid || disabled"\n            class="sw-settings-shipping-price-matrix__price-group-context"\n        >\n            \n            {% block sw_settings_shipping_price_matrix_topbar_context_button_duplicate %}\n            <sw-context-menu-item\n                v-tooltip="{\n                    showDelay: 300,\n                    showOnDisabledElements: true,\n                    message: $tc(\'sw-settings-shipping.priceMatrix.newMatrixAlreadyExists\'),\n                    disabled: !newPriceMatrixExists\n                }"\n                :disabled="newPriceMatrixExists"\n                class="sw-settings-shipping-price-matrix__action-duplicate"\n                @click="$emit(\'duplicate-price-matrix\', priceGroup)"\n            >\n                {{ $tc(\'sw-settings-shipping.priceMatrix.duplicateMatrixContextLabel\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_settings_shipping_price_matrix_topbar_context_button_delete %}\n            <sw-context-menu-item\n                class="sw-settings-shipping-price-matrix__action-delete"\n                variant="danger"\n                @click="onDeletePriceMatrix"\n            >\n                {{ $tc(\'sw-settings-shipping.priceMatrix.deleteMatrixContextLabel\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </sw-context-button>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_price_matrix_price_grid %}\n    <sw-data-grid\n        v-if="showDataGrid"\n        :data-source="priceGroup.prices"\n        :columns="ruleColumns"\n        :show-selection="false"\n        :show-settings="true"\n        :compact-mode="true"\n    >\n        \n        {% block sw_settings_shipping_price_matrix_price_grid_column_calculcation_rule %}\n        <template\n            #column-calculationRule="{ item, itemIndex, compact }"\n        >\n            <sw-select-rule-create\n                class="sw-settings-shipping-price-matrix__column-calculation-rule-select"\n                size="small"\n                :disabled="disabled"\n                :rule-id="item.calculationRuleId"\n                :rule-filter="shippingRuleFilterCriteria"\n                :placeholder="$tc(\'sw-settings-shipping.priceMatrix.chooseCustomRule\')"\n                rule-aware-group-key="shippingMethodPriceCalculations"\n                :restricted-rule-ids="usedCalculationRules"\n                :restricted-rule-ids-tooltip-label="$tc(\'sw-settings-shipping.priceMatrix.ruleAlreadyUsedInMatrix\')"\n                @save-rule="(ruleId) => onSaveCustomShippingRule(ruleId, item)"\n            >\n                <template #rule-modal="{ showRuleModal, onSaveRule, onCloseRuleModal }">\n                    <sw-price-rule-modal\n                        v-if="showRuleModal"\n                        rule-aware-group-key="shippingMethodPriceCalculations"\n                        @save="onSaveRule"\n                        @modal-close="onCloseRuleModal"\n                    />\n                </template>\n            </sw-select-rule-create>\n        </template>\n        {% endblock %}\n        \n        {% block sw_settings_shipping_price_matrix_price_grid_column_quantity_start %}\n        <template\n            #column-quantityStart="{ item, itemIndex, compact }"\n        >\n            <sw-number-field\n                {% if VUE3 %}\n                v-model:value="item.quantityStart"\n                {% else %}\n                v-model="item.quantityStart"\n                {% endif %}\n                :disabled="disabled"\n                :name="`sw-field--${item.id}-quantity-start`"\n                :number-type="numberFieldType"\n                :size="compact ? \'small\' : \'default\'"\n                :min="priceGroup.prices[itemIndex - 1] ? priceGroup.prices[itemIndex - 1].quantityEnd : 0"\n                :max="item.quantityEnd ? item.quantityEnd : null"\n                :digits="3"\n            />\n        </template>\n        {% endblock %}\n        \n        {% block sw_settings_shipping_price_matrix_price_grid_column_quantity_end %}\n        <template\n            #column-quantityEnd="{ item, itemIndex, compact }"\n        >\n            <sw-number-field\n                {% if VUE3 %}\n                v-model:value="item.quantityEnd"\n                {% else %}\n                v-model="item.quantityEnd"\n                {% endif %}\n                :disabled="disabled"\n                :name="`sw-field--${item.id}-quantity-end`"\n                :number-type="numberFieldType"\n                :size="compact ? \'small\' : \'default\'"\n                :placeholder="$tc(\'sw-settings-shipping.priceMatrix.any\')"\n                :validation="item.quantityEnd === null || item.quantityEnd > item.quantityStart"\n                :min="item.quantityStart"\n                :digits="3"\n                {% if VUE3 %}\n                @update:value="onQuantityEndChange(item)"\n                {% else %}\n                @change="onQuantityEndChange(item)"\n                {% endif %}\n            />\n        </template>\n        {% endblock %}\n        \n        {% block sw_settings_shipping_price_matrix_price_grid_currencies_list %}\n        <template\n            v-for="currency in currencies"\n            #[`column-price-${currency.isoCode}`]="{ item, column, compact }"\n        >\n            <sw-inherit-wrapper\n                :key="currency.isoCode"\n                class="sw-settings-shipping-price-matrix__price"\n                :value="getPrice(item, currency)"\n                :has-parent="!currency.isSystemDefault"\n                :inherited-value="currency.isSystemDefault ? null : convertDefaultPriceToCurrencyPrice(item, currency)"\n                @input="setPrice(item, currency, $event)"\n            >\n                <template #content="props">\n\n                    <sw-inheritance-switch\n                        v-if="!currency.isSystemDefault"\n                        class="sw-settings-shipping-price-matrix__price-inherit-icon"\n                        :is-inherited="props.isInherited"\n                        :disabled="disabled"\n                        @inheritance-restore="props.restoreInheritance"\n                        @inheritance-remove="props.removeInheritance"\n                    />\n\n                    <sw-number-field\n                        {% if VUE3 %}\n                        v-model:value="props.currentValue.gross"\n                        {% else %}\n                        v-model="props.currentValue.gross"\n                        {% endif %}\n                        :name="`sw-field--${item.id}-${currency.id}-gross`"\n                        :size="compact ? \'small\' : \'default\'"\n                        class="sw-settings-shipping-price-matrix__price-input"\n                        :digits="50"\n                        :disabled="props.isInherited || disabled"\n                    />\n                    <sw-number-field\n                        {% if VUE3 %}\n                        v-model:value="props.currentValue.net"\n                        {% else %}\n                        v-model="props.currentValue.net"\n                        {% endif %}\n                        :name="`sw-field--${item.id}-${currency.id}-net`"\n                        :size="compact ? \'small\' : \'default\'"\n                        class="sw-settings-shipping-price-matrix__price-input"\n                        :digits="50"\n                        :disabled="props.isInherited || disabled"\n                    />\n                </template>\n            </sw-inherit-wrapper>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_settings_shipping_price_matrix_price_grid_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_settings_shipping_price_matrix_price_grid_actions_delete %}\n            <sw-context-menu-item\n                :disabled="disableDeleteButton || disabled"\n                variant="danger"\n                @click="onDeleteShippingPrice(item)"\n            >\n                {{ $tc(\'sw-settings-shipping.priceMatrix.contextMenuDeletePrice\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-data-grid>\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_price_matrix_empty %}\n    <div\n        v-else\n        class="sw-settings-shipping-price-matrix__empty"\n    >\n        \n        {% block sw_settings_shipping_price_matrix_empty_text %}\n        <p class="sw-settings-shipping-price-matrix__empty-text">\n            {{ $tc(\'sw-settings-shipping.priceMatrix.emptyText\') }}\n        </p>\n        {% endblock %}\n        <sw-container\n            columns="1fr 10px 1fr"\n            gap="0px 24px"\n        >\n            \n            {% block sw_settings_shipping_price_matrix_empty_property_store %}\n            <sw-single-select\n                class="sw-settings-shipping-price-matrix__empty--select-property"\n                :options="calculationTypes"\n                :value="priceGroup.calculation"\n                :disabled="disabled"\n                size="small"\n                show-clearable-button\n                :placeholder="$tc(\'sw-settings-shipping.priceMatrix.selectProperty\')"\n                {% if VUE3 %}\n                @update:value="onCalculationChange"\n                {% else %}\n                @change="onCalculationChange"\n                {% endif %}\n            />\n            {% endblock %}\n\n            <p class="sw-settings-shipping-price-matrix__empty-text-or">\n                {{ $tc(\'sw-settings-shipping.priceMatrix.textOr\') }}\n            </p>\n\n            \n            {% block sw_settings_shipping_price_matrix_empty_rule_select %}\n            <sw-select-rule-create\n                size="small"\n                :disabled="disabled"\n                :placeholder="$tc(\'sw-settings-shipping.priceMatrix.chooseCustomRule\')"\n                rule-aware-group-key="shippingMethodPriceCalculations"\n                :restricted-rule-ids="usedCalculationRules"\n                :restricted-rule-ids-tooltip-label="$tc(\'sw-settings-shipping.priceMatrix.ruleAlreadyUsedInMatrix\')"\n                @save-rule="(ruleId) => { onSaveCustomShippingRule(ruleId) }"\n            >\n                <template #rule-modal="{ showRuleModal, onSaveRule, onCloseRuleModal }">\n                    <sw-price-rule-modal\n                        v-if="showRuleModal"\n                        rule-aware-group-key="shippingMethodPriceCalculations"\n                        @save="onSaveRule"\n                        @modal-close="onCloseRuleModal"\n                    />\n                </template>\n            </sw-select-rule-create>\n            {% endblock %}\n        </sw-container>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_shipping_price_matrix_delete_modal %}\n    <sw-modal\n        v-if="showDeleteModal"\n        :title="$tc(\'global.default.warning\')"\n        variant="small"\n        @modal-close="onCloseDeleteModal"\n    >\n        \n        {% block sw_settings_shipping_price_matrix_delete_modal_confirm_delete_text %}\n        <p class="sw-settings-shipping-price-matrix__confirm-delete-text">\n            {{ confirmDeleteText }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_settings_shipping_price_matrix_delete_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_settings_shipping_price_matrix_delete_modal_cancel %}\n            <sw-button\n                size="small"\n                @click="onCloseDeleteModal"\n            >\n                {{ $tc(\'sw-settings-shipping.priceMatrix.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_settings_shipping_price_matrix_delete_modal_confirm %}\n            <sw-button\n                variant="danger"\n                size="small"\n                @click="onConfirmDeleteShippingPrice"\n            >\n                {{ $tc(\'sw-settings-shipping.priceMatrix.buttonDelete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","feature"],mixins:[o.getByName("placeholder"),o.getByName("notification")],props:{priceGroup:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{calculationTypes:[{label:this.$tc("sw-settings-shipping.priceMatrix.calculationLineItemCount"),value:1},{label:this.$tc("sw-settings-shipping.priceMatrix.calculationPrice"),value:2},{label:this.$tc("sw-settings-shipping.priceMatrix.calculationWeight"),value:3},{label:this.$tc("sw-settings-shipping.priceMatrix.calculationVolume"),value:4}],showDeleteModal:!1,isLoading:!1}},computed:l(l(l({},m("swShippingDetail",["shippingMethod","currencies"])),_("swShippingDetail",["defaultCurrency","usedRules","unrestrictedPriceMatrixExists","newPriceMatrixExists"])),{},{ruleRepository:function(){return this.repositoryFactory.create("rule")},shippingPriceRepository:function(){return this.repositoryFactory.create("shipping_method_price")},labelQuantityStart:function(){return{1:"sw-settings-shipping.priceMatrix.columnQuantityStart",2:"sw-settings-shipping.priceMatrix.columnPriceStart",3:"sw-settings-shipping.priceMatrix.columnWeightStart",4:"sw-settings-shipping.priceMatrix.columnVolumeStart"}[this.priceGroup.calculation]||"sw-settings-shipping.priceMatrix.columnQuantityStart"},labelQuantityEnd:function(){return{1:"sw-settings-shipping.priceMatrix.columnQuantityEnd",2:"sw-settings-shipping.priceMatrix.columnPriceEnd",3:"sw-settings-shipping.priceMatrix.columnWeightEnd",4:"sw-settings-shipping.priceMatrix.columnVolumeEnd"}[this.priceGroup.calculation]||"sw-settings-shipping.priceMatrix.columnQuantityEnd"},numberFieldType:function(){return{1:"int",2:"float",3:"float",4:"float"}[this.priceGroup.calculation]||"float"},confirmDeleteText:function(){var e=this.priceGroup.rule?this.priceGroup.rule.name:"";return this.$tc("sw-settings-shipping.priceMatrix.textDeleteConfirm",Number(!!this.priceGroup.rule),{name:e})},ruleColumns:function(){var e=[];return this.isRuleMatrix?e.push({property:"calculationRule",label:"sw-settings-shipping.priceMatrix.columnCalculationRule",allowResize:!0,primary:!0,rawData:!0,width:"250px"}):(e.push({property:"quantityStart",label:this.labelQuantityStart,allowResize:!0,primary:!0,rawData:!0}),e.push({property:"quantityEnd",label:this.labelQuantityEnd,allowResize:!0,rawData:!0,primary:!0,width:"130px"})),e.push.apply(e,r()(this.currencyColumns)),e},currencyColumns:function(){var e=this;return this.currencies.map((function(i){var t=i.translated.name||i.name;return t="".concat(t," ").concat(e.$tc("sw-settings-shipping.priceMatrix.labelGrossNet")),{property:"price-".concat(i.isoCode),label:t,visible:!0,allowResize:!0,primary:!!i.isSystemDefault,rawData:!1,width:"200px"}}))},showDataGrid:function(){return!!this.priceGroup.calculation||this.priceGroup.prices.some((function(e){return e.calculationRuleId}))},disableDeleteButton:function(){return this.priceGroup.prices.length<=1},ruleFilterCriteria:function(){var e=new d(1,25);return e.addFilter(d.multi("OR",[d.contains("rule.moduleTypes.types","price"),d.equals("rule.moduleTypes",null)])),e.addAssociation("conditions").addSorting(d.sort("name","ASC",!1)),e},shippingRuleFilterCriteria:function(){var e=new d(1,25);return e.addFilter(d.multi("OR",[d.contains("rule.moduleTypes.types","shipping"),d.equals("rule.moduleTypes",null)])),e.addAssociation("conditions"),e},isRuleMatrix:function(){return!this.priceGroup.calculation},usedCalculationRules:function(){var e=[];return this.isRuleMatrix?(this.priceGroup.prices.forEach((function(i){e.includes(i.calculationRuleId)||e.push(i.calculationRuleId)})),e):e},mainRulePlaceholder:function(){return this.priceGroup.isNew?this.$tc("sw-settings-shipping.priceMatrix.chooseOrCreateRule"):this.$tc("sw-settings-shipping.priceMatrix.noRestriction")},cardTitle:function(){return this.priceGroup.rule||this.priceGroup.isNew?this.priceGroup.rule?this.priceGroup.rule.name:this.$tc("sw-settings-shipping.priceMatrix.titleCard"):this.$tc("sw-settings-shipping.priceMatrix.noRestriction")}}),methods:{onAddNewShippingPrice:function(){var e=this.priceGroup.prices[this.priceGroup.prices.length-1],i=this.shippingPriceRepository.create(u.api);i.shippingMethodId=this.shippingMethod.id,i.ruleId=this.priceGroup.ruleId,i.currencyPrice=h(e.currencyPrice),e._inNewMatrix&&(i._inNewMatrix=!0),this.isRuleMatrix||(e.quantityEnd||(e.quantityEnd=e.quantityStart),i.calculation=e.calculation,1===this.priceGroup.calculation?i.quantityStart=e.quantityEnd+1>1?e.quantityEnd+1:2:i.quantityStart=e.quantityEnd,i.quantityEnd=null),this.shippingMethod.prices.push(i)},onSaveMainRule:function(e){var i=this;e||!this.unrestrictedPriceMatrixExists||this.priceGroup.ruleId===e?this.ruleRepository.get(e,u.api).then((function(t){i.priceGroup.prices.forEach((function(i){i.ruleId=e,i.rule=t,i._inNewMatrix&&delete i._inNewMatrix}))})):this.createNotificationError({message:this.$tc("sw-settings-shipping.priceMatrix.unrestrictedRuleAlreadyExistsMessage")})},onSaveCustomShippingRule:function(e,i){var t=this;i||(i=this.priceGroup.prices[0]),this.$nextTick((function(){t.isLoading=!0})),this.ruleRepository.get(e,u.api).then((function(n){i.calculationRuleId=e,i.calculationRule=n,t.isLoading=!1}))},onCalculationChange:function(e){var i=this;this.priceGroup.prices.forEach((function(t){t.calculation=Number(e),t.ruleId=i.priceGroup.ruleId}))},onDeletePriceMatrix:function(){this.showDeleteModal=!0},onConfirmDeleteShippingPrice:function(){var e=this;this.showDeleteModal=!1,this.$nextTick((function(){e.$emit("delete-price-matrix",e.priceGroup)}))},onCloseDeleteModal:function(){this.showDeleteModal=!1},onDeleteShippingPrice:function(e){if(this.priceGroup.prices.length<=1)this.createNotificationInfo({message:this.$tc("sw-settings-shipping.priceMatrix.deletionNotPossibleMessage")});else{var i=this.priceGroup.prices.indexOf(e);if(void 0===e.quantityEnd||null===e.quantityEnd)this.priceGroup.prices[i-1].quantityEnd=null;else this.priceGroup.prices[i+1].quantityStart=e.quantityStart;this.shippingMethod.prices.remove(e.id)}},convertDefaultPriceToCurrencyPrice:function(e,i){var t=this;e.currencyPrice||this.initCurrencyPrice(e);var n=e.currencyPrice.find((function(e){return e.currencyId===t.defaultCurrency.id}));return this.convertPrice(n,i)},initCurrencyPrice:function(e){e.currencyPrice=[{currencyId:this.defaultCurrency.id,gross:0,linked:!1,net:0}]},getPrice:function(e,i){var t=this.getPriceOfCurrency(e,i);return t||null},setPrice:function(e,i,t){if(t){var n={currencyId:i.id,gross:t.gross,linked:!1,net:t.net};e.currencyPrice.push(n)}else e.currencyPrice=e.currencyPrice.filter((function(e){return e.currencyId!==i.id}))},getPriceOfCurrency:function(e,i){return e.currencyPrice||this.initCurrencyPrice(e),e.currencyPrice.find((function(e){return e.currencyId===i.id}))},convertPrice:function(e,i){return{net:e.net*i.factor,gross:e.gross*i.factor,currencyId:i.id,linked:!1}},onQuantityEndChange:function(e){this.priceGroup.prices.indexOf(e)+1===this.priceGroup.prices.length&&this.onAddNewShippingPrice()}}}},"2Zxk":function(e,i,t){},"7hlL":function(e,i,t){var n=t("2Zxk");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t("P8hj").default)("4785c832",n,!0,{})}}]);