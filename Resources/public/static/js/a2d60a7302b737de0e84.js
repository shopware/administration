(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[20],{"1Ife":function(n,e,t){var i=t("eOrh");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,t("ydqr").default)("6922fac8",i,!0,{})},"5/ls":function(n,e,t){"use strict";t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return c}));var i=t("IilT"),o={PERCENTAGE:"percentage",ABSOLUTE:"absolute",FIXED:"fixed",FIXED_UNIT:"fixed_unit"},s={CART:"cart",DELIVERY:"delivery",SET:"set",SETGROUP:"setgroup"},c={isEditingAllowed:function(n){if(null===n)return!1;if(void 0===n)return!1;if(!Object(i.g)(n,"hasOrders"))throw new Error("Promotion Property hasOrders does not exist. Please use the Hydrator before!");return!n.hasOrders}}},eOrh:function(n,e,t){},zyYv:function(n,e,t){"use strict";t.r(e);var i=t("HZZ/"),o=t.n(i),s=t("hJxD"),c=t.n(s),r=t("5/ls"),a=(t("1Ife"),t("GeFe")),l=t.n(a),d=t("Zvb3"),u=t.n(d),p=function(){function n(){l()(this,n)}return u()(n,[{key:"getValueSuffix",value:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return n===r.b.PERCENTAGE?"%":e}},{key:"getMinValue",value:function(){return 0}},{key:"getMaxValue",value:function(n){return n===r.b.PERCENTAGE?100:null}},{key:"getFixedValue",value:function(n,e){return e===r.b.PERCENTAGE&&(n=n>100?this.getMaxValue(e):n),n<=this.getMinValue()&&(n=this.getMinValue()),n}}]),n}(),m=Shopware.Mixin,f=Shopware.Data.Criteria,h=new p;e.default={template:'\n{% block sw_promotion_discount_component %}\n<sw-card\n    class="sw-promotion-discount-component"\n    position-identifier="sw-promotion-discount-component"\n    :title="$tc(\'sw-promotion.detail.main.discounts.card\')"\n>\n    <sw-context-button class="sw-promotion-discount-component__context-button">\n        \n        {% block sw_promotion_detail_discounts_item_context_button_delete %}\n        <sw-context-menu-item\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'promotion.editor\'),\n                showOnDisabledElements: true\n            }"\n            variant="danger"\n            class="sw-promotion-context-item__delete-action"\n            :disabled="isEditingDisabled"\n            @click="onShowDeleteModal"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.buttonDeleteDiscount\') }}\n        </sw-context-menu-item>\n        {% endblock %}\n    </sw-context-button>\n\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_promotion_discount_component_scope %}\n        <sw-select-field\n            ref="selectFieldScope"\n            v-model="discount.scope"\n            required\n            validation="required"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelScope\')"\n            :disabled="isEditingDisabled"\n            @change="onDiscountScopeChanged"\n        >\n            <option\n                v-for="scope in scopes"\n                :key="scope.key"\n                :value="scope.key"\n            >\n                {{ scope.name }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_discount_condition_consider_product_rules_field %}\n        <template v-if="displayAdvancedRuleOption">\n            <sw-field\n                v-model="discount.considerAdvancedRules"\n                type="switch"\n                bordered\n                :label="$tc(\'sw-promotion.detail.main.discounts.flagProductScopeLabel\')"\n                :disabled="isEditingDisabled"\n            />\n        </template>\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_promotion_discount_condition_rules_form %}\n    <template v-if="!shippingScope && discount.considerAdvancedRules === true">\n        <div v-if="!isSetGroup">\n            <sw-promotion-v2-rule-select\n                v-model="discount.discountRules"\n                class="sw-promotion-discount-component__select-discount-rules"\n                :local-mode="discount.isNew()"\n                :criteria="ruleFilter"\n                :label="$tc(\'sw-promotion.detail.main.discounts.labelRules\')"\n                :placeholder="$tc(\'sw-promotion.detail.main.discounts.placeholder\')"\n                :disabled="isEditingDisabled"\n                :restricted-rules="restrictedRules"\n                :restriction-snippet="promotionDiscountSnippet"\n                rule-aware-group-key="promotionDiscounts"\n            />\n        </div>\n\n        <sw-container\n            columns="1fr 1fr"\n            gap="0px 30px"\n        >\n            \n            {% block sw_promotion_cart_condition_setgroup_filter_apply_field %}\n            <sw-select-field\n                v-if="!isSet"\n                v-model="discount.applierKey"\n                :label="$tc(\'sw-promotion.detail.main.discounts.labelApplyCount\')"\n                :disabled="isEditingDisabled"\n            >\n                <option\n                    v-for="applier in graduationAppliers"\n                    :key="applier.key"\n                    :value="applier.key"\n                >\n                    {{ applier.name }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n            \n            {% block sw_promotion_cart_condition_setgroup_filter_usage_field %}\n            <sw-select-field\n                v-if="isMaxUsageVisible"\n                v-model="discount.usageKey"\n                :label="$tc(\'sw-promotion.detail.main.discounts.labelMaxCount\')"\n                :disabled="isEditingDisabled"\n            >\n                <option\n                    v-for="count in graduationCounts"\n                    :key="count.key"\n                    :value="count.key"\n                >\n                    {{ count.name }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n\n        </sw-container>\n\n        <template v-if="discount.applierKey!==\'ALL\'">\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 30px"\n            >\n                \n                {% block sw_promotion_cart_condition_setgroup_filter_sorting_field %}\n                <sw-select-field\n                    v-model="discount.sorterKey"\n                    :label="$tc(\'sw-promotion.detail.main.discounts.labelSorting\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="sorter in graduationSorters"\n                        :key="sorter.key"\n                        :value="sorter.key"\n                    >\n                        {{ sorter.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n                \n                {% block sw_promotion_cart_condition_setgroup_filter_picker_field %}\n                <sw-select-field\n                    v-if="isPickingModeVisible"\n                    v-model="discount.pickerKey"\n                    :label="$tc(\'sw-promotion.detail.main.discounts.labelPicking\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="picker in graduationPickers"\n                        :key="picker.key"\n                        :value="picker.key"\n                    >\n                        {{ picker.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n            </sw-container>\n        </template>\n\n    </template>\n    {% endblock %}\n\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_promotion_discount_component_type %}\n        <sw-select-field\n            v-model="discount.type"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelType\')"\n            :disabled="isEditingDisabled"\n            @change="onDiscountTypeChanged"\n        >\n            <option\n                v-for="type in types"\n                :key="type.key"\n                :value="type.key"\n            >\n                {{ type.name }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n        \n        {% block sw_promotion_discount_component_value %}\n        <sw-field\n            type="number"\n            class="sw-promotion-discount-component__discount-value"\n            validation="required"\n            required\n            :digits="50"\n            :value="discount.value"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelValue\')"\n            :placeholder="$tc(\'sw-promotion.detail.main.discounts.placeholderValue\')"\n            :disabled="isEditingDisabled"\n            @change="onDiscountValueChanged"\n        >\n            <template #suffix>\n                {{ valueSuffix }}\n            </template>\n        </sw-field>\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_promotion_discount_max_value %}\n    <sw-container\n        v-if="showMaxValueSettings"\n        :key="1"\n        columns="1fr 1fr"\n        justify="end"\n    >\n        \n        {% block sw_promotion_discount_max_value_field %}\n        <sw-field\n            v-model="discount.maxValue"\n            type="number"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelMaxValue\')"\n            :help-text="maxValueAdvancedPricesTooltip"\n            :disabled="isEditingDisabled"\n            @change="onMaxValueChanged"\n        >\n            <template #suffix>\n                {{ maxValueSuffix }}\n            </template>\n        </sw-field>\n        {% endblock %}\n        \n        {% block sw_promotion_discount_max_value_advanced_prices %}\n        \n        <a\n            v-if="showMaxValueAdvancedPrices"\n            class="sw-card__quick-link advanced-prices"\n            @click="onClickAdvancedPrices"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.linkAdvancedPrices\') }}\n            <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_promotion_discount_advanced_prices_link %}\n    <sw-container\n        v-if="showAbsoluteAdvancedPricesSettings"\n        :key="2"\n        columns="1fr"\n        justify="end"\n    >\n        \n        <a\n            class="sw-card__quick-link advanced-prices"\n            @click="onClickAdvancedPrices"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.linkAdvancedPrices\') }}\n            <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_promotion_discount_advanced_prices_modal %}\n    <sw-modal\n        v-if="displayAdvancedPrices"\n        :title="$tc(\'sw-promotion.detail.main.discounts.pricesModal.advancedPricesHeader\')"\n        class="sw-promotion-discount-form__advanced-prices-modal"\n        @modal-close="onCloseAdvancedPricesModal"\n    >\n\n        <sw-one-to-many-grid\n            :collection="discount.promotionDiscountPrices"\n            :local-mode="true"\n            :columns="currencyPriceColumns"\n            :show-selection="false"\n            :is-loading="isLoading"\n            :show-actions="!isEditingDisabled"\n        >\n\n            <template #column-currency.translated.name="{ item }">\n                <p>{{ item.currency.translated.name }}</p>\n            </template>\n\n            <template #column-price="{ item }">\n                <sw-number-field\n                    v-model="item.price"\n                    type="text"\n                    size="small"\n                    :disabled="isEditingDisabled"\n                >\n                    <template #suffix>\n                        {{ item.currency.symbol }}\n                    </template>\n                </sw-number-field>\n            </template>\n        </sw-one-to-many-grid>\n\n        <template #modal-footer>\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="onCloseAdvancedPricesModal"\n            >\n                {{ $tc(\'sw-promotion.detail.main.discounts.pricesModal.closeModal\') }}\n            </sw-button>\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_promotion_detail_discounts_modal_delete %}\n    <sw-modal\n        v-if="showDeleteModal"\n        variant="small"\n        :title="$tc(\'sw-promotion.detail.main.discounts.delete.confirmTitle\')"\n        class="sw-promotion-detail-discounts-modal"\n        @modal-close="onCloseDeleteModal"\n    >\n        \n        {% block sw_promotion_detail_discounts_modal_delete_text %}\n        <p>\n            {{ $tc(\'sw-promotion.detail.main.discounts.delete.confirmText\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_promotion_detail_discounts_modal_delete_footer %}\n        <template #modal-footer>\n            \n            {% block sw_promotion_detail_discounts_modal_delete_action_cancel %}\n            <sw-button\n                size="small"\n                @click="onCloseDeleteModal"\n            >\n                {{ $tc(\'sw-promotion.detail.main.discounts.delete.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_promotion_detail_discounts_modal_delete_action_delete %}\n            <sw-button\n                size="small"\n                variant="danger"\n                class="sw-promotion-discount-delete-button"\n                @click="onConfirmDelete"\n            >\n                {{ $tc(\'sw-promotion.detail.main.discounts.delete.buttonDelete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl","feature","ruleConditionDataProviderService"],mixins:[m.getByName("placeholder")],props:{promotion:{type:Object,required:!0},discount:{type:Object,required:!0}},data:function(){return{displayAdvancedPrices:!1,currencies:[],defaultCurrency:null,isLoading:!1,showRuleModal:!1,showDeleteModal:!1,currencySymbol:null,allowProductRules:!1,cartScope:this.discount.scope===r.a.CART,shippingScope:this.discount.scope===r.a.DELIVERY,considerAdvancedRules:this.discount.considerAdvancedRules,availableSetGroups:[],syncService:null,httpClient:null,sorterKeys:[],pickerKeys:[],restrictedRules:[]}},computed:{advancedPricesRepo:function(){return this.repositoryFactory.create("promotion_discount_prices")},repositoryGroups:function(){return this.repositoryFactory.create("promotion_setgroup")},currencyRepository:function(){return this.repositoryFactory.create("currency")},ruleFilter:function(){var n=new f(1,25);return n.addAssociation("conditions"),n.addSorting(f.sort("name","ASC",!1)),n},currencyPriceColumns:function(){return[{property:"currency.translated.name",label:this.$tc("sw-promotion.detail.main.discounts.pricesModal.labelCurrency")},{property:"price",dataIndex:"price",label:this.$tc("sw-promotion.detail.main.discounts.pricesModal.labelPrice")}]},scopes:function(){var n=this,e=[{key:r.a.CART,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeCart")},{key:r.a.DELIVERY,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeDelivery")},{key:r.a.SET,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeSet")}],t=1;if(this.availableSetGroups.forEach((function(){var i="".concat(r.a.SETGROUP,"-").concat(t),o="".concat(n.$tc("sw-promotion.detail.main.discounts.valueScopeSetGroup"),"-").concat(t);e.push({key:i,name:o}),t+=1})),this.availableSetGroups.length<=0){var i="".concat(this.$tc("sw-promotion.detail.main.discounts.valueScopeSetGroup"));e.push({key:r.a.SETGROUP,name:i})}return e},types:function(){var n=[{key:r.b.ABSOLUTE,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeAbsolute")},{key:r.b.PERCENTAGE,name:this.$tc("sw-promotion.detail.main.discounts.valueTypePercentage")},{key:r.b.FIXED_UNIT,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixedUnit")}];return this.cartScope||n.push({key:r.b.FIXED,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixed")}),this.cartScope&&this.discount.considerAdvancedRules&&n.push({key:r.b.FIXED,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixed")}),n},valueSuffix:function(){return h.getValueSuffix(this.discount.type,this.currencySymbol)},maxValueSuffix:function(){return this.currencySymbol},showMaxValueSettings:function(){return this.discount.type===r.b.PERCENTAGE},showAbsoluteAdvancedPricesSettings:function(){return this.discount.type===r.b.ABSOLUTE||this.discount.type===r.b.FIXED},showMaxValueAdvancedPrices:function(){return this.discount.type===r.b.PERCENTAGE&&null!==this.discount.maxValue},maxValueAdvancedPricesTooltip:function(){return this.discount.type===r.b.PERCENTAGE&&null!==this.discount.maxValue&&this.discount.promotionDiscountPrices.length>0?this.$tc("sw-promotion.detail.main.discounts.helpTextMaxValueAdvancedPrices"):""},isEditingDisabled:function(){return!this.acl.can("promotion.editor")||!r.c.isEditingAllowed(this.promotion)},displayAdvancedRuleOption:function(){return this.discount.scope!==r.a.DELIVERY},graduationSorters:function(){var n=this,e=[];return this.sorterKeys.forEach((function(t){e.push({key:t,name:n.$tc("sw-promotion-v2.detail.conditions.filter.sorter.".concat(t))})})),e},graduationPickers:function(){var n=this,e=[];return this.pickerKeys.forEach((function(t){e.push({key:t,name:n.$tc("sw-promotion-v2.detail.conditions.filter.picker.".concat(t))})})),e},isSetGroup:function(){return this.discount.scope.split("-")[0]===r.a.SETGROUP},isSet:function(){return this.discount.scope===r.a.SET},graduationAppliers:function(){var n,e=[{key:"ALL",name:this.$tc("sw-promotion-v2.detail.conditions.filter.applier.ALL")}],t=10,i=this.discount.scope.split("-");if(i[0]===r.a.SETGROUP){var o=0;this.availableSetGroups.forEach((function(n){(o+=1)===parseInt(i[1],10)&&n.value<t&&"COUNT"===n.packagerKey&&(t=n.value)}))}for(n=1;n<=t;n+=1)e.push({key:n,name:this.$tc("sw-promotion-v2.detail.conditions.filter.applier.SELECT",0,{count:n})});return e},graduationCounts:function(){var n,e=[{key:"ALL",name:this.$tc("sw-promotion-v2.detail.conditions.filter.counter.ALL")}];for(n=1;n<10;n+=1)e.push({key:n,name:this.$tc("sw-promotion-v2.detail.conditions.filter.counter.SELECT",0,{count:n})});return e},isPickingModeVisible:function(){return!!this.discount.scope.startsWith(r.a.SETGROUP)||this.discount.scope===r.a.SET},isMaxUsageVisible:function(){return this.discount.scope!==r.a.CART},promotionDiscountSnippet:function(){return this.$tc(this.ruleConditionDataProviderService.getAwarenessConfigurationByAssignmentName("promotionDiscounts").snippet,2)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var n=this;this.syncService=Shopware.Service("syncService"),this.httpClient=this.syncService.httpClient,this.currencyRepository.search(new f(1,25)).then((function(e){n.currencies=e,n.defaultCurrency=n.currencies.find((function(n){return n.isSystemDefault})),n.currencySymbol=n.defaultCurrency.symbol}));var e=this.discount.scope;this.loadSetGroups().then((function(){n.discount.scope=e})),this.loadSorters().then((function(e){n.sorterKeys=e})),this.loadPickers().then((function(e){n.pickerKeys=e})),this.loadRestrictedRules()},onDiscountScopeChanged:function(n){this.cartScope=n===r.a.CART,this.shippingScope=n===r.a.DELIVERY,n===r.a.DELIVERY?this.discount.considerAdvancedRules=!1:this.discount.considerAdvancedRules=this.considerAdvancedRules,this.discount.pickerKey="",this.discount.usageKey="ALL",this.isPickingModeVisible&&(this.discount.pickerKey=this.pickerKeys[0])},onDiscountTypeChanged:function(){this.discount.value=h.getFixedValue(this.discount.value,this.discount.type)},onDiscountValueChanged:function(n){this.discount.value=h.getFixedValue(n,this.discount.type)},onMaxValueChanged:function(n){0===n&&(this.discount.maxValue=null,this.clearAdvancedPrices())},onClickAdvancedPrices:function(){var n=this;this.currencies.forEach((function(e){n.isMemberOfCollection(e)||(n.showMaxValueAdvancedPrices?n.prepareAdvancedPrices(e,n.discount.maxValue):n.prepareAdvancedPrices(e,n.discount.value))})),this.displayAdvancedPrices=!0},prepareAdvancedPrices:function(n,e){var t=h.getMinValue();void 0!==e&&(t=e),(t*=n.factor)<h.getMinValue()&&(t=h.getMinValue());var i=this.advancedPricesRepo.create(Shopware.Context.api);i.discountId=this.discount.id,i.price=t,i.currencyId=n.id,i.currency=n,this.discount.promotionDiscountPrices.add(i)},clearAdvancedPrices:function(){var n,e=this.discount.promotionDiscountPrices.getIds();for(n=0;n<e.length;n+=1)this.discount.promotionDiscountPrices.remove(e[n])},isMemberOfCollection:function(n){var e=!1,t=n.id;return this.discount.promotionDiscountPrices.forEach((function(i){i.currencyId===t&&(e=!0,i.currency=n)})),e},onCloseAdvancedPricesModal:function(){this.discount.type===r.b.PERCENTAGE&&null===this.discount.maxValue?this.clearAdvancedPrices():this.discount.promotionDiscountPrices.forEach((function(n){n.price=h.getFixedValue(n.price,r.b.ABSOLUTE)})),this.displayAdvancedPrices=!1},onShowDeleteModal:function(){this.showDeleteModal=!0},onCloseDeleteModal:function(){this.showDeleteModal=!1},onConfirmDelete:function(){var n=this;this.onCloseDeleteModal(),this.$nextTick((function(){n.$emit("discount-delete",n.discount)}))},loadSetGroups:function(){var n=this;return o()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new f(1,25)).addFilter(f.equals("promotionId",n.promotion.id)),e.next=4,n.repositoryGroups.search(t).then((function(e){n.availableSetGroups=e}));case 4:return e.abrupt("return",!0);case 5:case"end":return e.stop()}}),e)})))()},loadSorters:function(){var n=this;return o()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.httpClient.get("/_action/promotion/setgroup/sorter",{headers:n.syncService.getBasicHeaders()}).then((function(n){return n.data})));case 1:case"end":return e.stop()}}),e)})))()},loadPickers:function(){var n=this;return o()(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.httpClient.get("/_action/promotion/discount/picker",{headers:n.syncService.getBasicHeaders()}).then((function(n){return n.data})));case 1:case"end":return e.stop()}}),e)})))()},loadRestrictedRules:function(){var n=this;this.ruleConditionDataProviderService.getRestrictedRules("promotionSetGroups").then((function(e){n.restrictedRules=e}))}}}}}]);