(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[73960],{172612:function(){},573960:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var i=t(67883);t(925405);let{Mixin:o}=Shopware,{Criteria:s}=Shopware.Data,c=new class{getValueSuffix(e,n="?"){return e===i.sC.PERCENTAGE?"%":n}getMinValue(){return 0}getMaxValue(e){return e===i.sC.PERCENTAGE?100:null}getFixedValue(e,n){return n===i.sC.PERCENTAGE&&(e=e>100?this.getMaxValue(n):e),e<=this.getMinValue()&&(e=this.getMinValue()),e}};var a={template:'\n{% block sw_promotion_discount_component %}\n<sw-card\n    class="sw-promotion-discount-component"\n    position-identifier="sw-promotion-discount-component"\n    :title="$tc(\'sw-promotion.detail.main.discounts.card\')"\n>\n    <sw-context-button class="sw-promotion-discount-component__context-button">\n        \n        {% block sw_promotion_detail_discounts_item_context_button_delete %}\n        <sw-context-menu-item\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'promotion.editor\'),\n                showOnDisabledElements: true\n            }"\n            variant="danger"\n            class="sw-promotion-context-item__delete-action"\n            :disabled="isEditingDisabled"\n            @click="onShowDeleteModal"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.buttonDeleteDiscount\') }}\n        </sw-context-menu-item>\n        {% endblock %}\n    </sw-context-button>\n\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_promotion_discount_component_scope %}\n        <sw-select-field\n            ref="selectFieldScope"\n            v-model:value="discount.scope"\n            required\n            validation="required"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelScope\')"\n            :disabled="isEditingDisabled"\n            :is-loading="isLoading"\n            @update:value="onDiscountScopeChanged"\n        >\n            <option\n                v-for="scope in scopes"\n                :key="scope.key"\n                :value="scope.key"\n            >\n                {{ scope.name }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_discount_condition_consider_product_rules_field %}\n        <template v-if="displayAdvancedRuleOption">\n            <sw-switch-field\n                v-model:value="discount.considerAdvancedRules"\n                bordered\n                :label="$tc(\'sw-promotion.detail.main.discounts.flagProductScopeLabel\')"\n                :disabled="isEditingDisabled"\n            />\n        </template>\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_promotion_discount_condition_rules_form %}\n    <template v-if="!shippingScope && discount.considerAdvancedRules === true">\n        <div v-if="!isSetGroup">\n            <sw-promotion-v2-rule-select\n                v-model:collection="discount.discountRules"\n                class="sw-promotion-discount-component__select-discount-rules"\n                :local-mode="discount.isNew()"\n                :criteria="ruleFilter"\n                :label="$tc(\'sw-promotion.detail.main.discounts.labelRules\')"\n                :placeholder="$tc(\'sw-promotion.detail.main.discounts.placeholder\')"\n                :disabled="isEditingDisabled"\n                :restricted-rules="restrictedRules"\n                :restriction-snippet="promotionDiscountSnippet"\n                rule-aware-group-key="promotionDiscounts"\n            />\n        </div>\n\n        <sw-container\n            columns="1fr 1fr"\n            gap="0px 30px"\n        >\n            \n            {% block sw_promotion_cart_condition_setgroup_filter_apply_field %}\n            <sw-select-field\n                v-if="!isSet"\n                v-model:value="discount.applierKey"\n                :label="$tc(\'sw-promotion.detail.main.discounts.labelApplyCount\')"\n                :disabled="isEditingDisabled"\n            >\n                <option\n                    v-for="applier in graduationAppliers"\n                    :key="applier.key"\n                    :value="applier.key"\n                >\n                    {{ applier.name }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n            \n            {% block sw_promotion_cart_condition_setgroup_filter_usage_field %}\n            <sw-select-field\n                v-if="isMaxUsageVisible"\n                v-model:value="discount.usageKey"\n                :label="$tc(\'sw-promotion.detail.main.discounts.labelMaxCount\')"\n                :disabled="isEditingDisabled"\n            >\n                <option\n                    v-for="count in graduationCounts"\n                    :key="count.key"\n                    :value="count.key"\n                >\n                    {{ count.name }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n\n        </sw-container>\n\n        <template v-if="discount.applierKey!==\'ALL\'">\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 30px"\n            >\n                \n                {% block sw_promotion_cart_condition_setgroup_filter_sorting_field %}\n                <sw-select-field\n                    v-model:value="discount.sorterKey"\n                    :label="$tc(\'sw-promotion.detail.main.discounts.labelSorting\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="sorter in graduationSorters"\n                        :key="sorter.key"\n                        :value="sorter.key"\n                    >\n                        {{ sorter.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n                \n                {% block sw_promotion_cart_condition_setgroup_filter_picker_field %}\n                <sw-select-field\n                    v-if="isPickingModeVisible"\n                    v-model:value="discount.pickerKey"\n                    :label="$tc(\'sw-promotion.detail.main.discounts.labelPicking\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="picker in graduationPickers"\n                        :key="picker.key"\n                        :value="picker.key"\n                    >\n                        {{ picker.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n            </sw-container>\n        </template>\n\n    </template>\n    {% endblock %}\n\n    <sw-container\n        columns="1fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_promotion_discount_component_type %}\n        <sw-select-field\n            v-model:value="discount.type"\n            class="sw-promotion-discount-component__type-select"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelType\')"\n            :disabled="isEditingDisabled"\n            @update:value="onDiscountTypeChanged"\n        >\n            <option\n                v-for="type in types"\n                :key="type.key"\n                :value="type.key"\n            >\n                {{ type.name }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n        \n        {% block sw_promotion_discount_component_value %}\n        <sw-number-field\n            class="sw-promotion-discount-component__discount-value"\n            validation="required"\n            required\n            :digits="50"\n            :value="discount.value"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelValue\')"\n            :placeholder="$tc(\'sw-promotion.detail.main.discounts.placeholderValue\')"\n            :disabled="isEditingDisabled"\n            @update:value="onDiscountValueChanged"\n        >\n            <template #suffix>\n                {{ valueSuffix }}\n            </template>\n        </sw-number-field>\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_promotion_discount_max_value %}\n    <sw-container\n        v-if="showMaxValueSettings"\n        :key="1"\n        columns="1fr 1fr"\n        justify="end"\n    >\n        \n        {% block sw_promotion_discount_max_value_field %}\n        <sw-number-field\n            v-model:value="discount.maxValue"\n            :label="$tc(\'sw-promotion.detail.main.discounts.labelMaxValue\')"\n            :help-text="maxValueAdvancedPricesTooltip"\n            :disabled="isEditingDisabled"\n            @update:value="onMaxValueChanged"\n        >\n            <template #suffix>\n                {{ maxValueSuffix }}\n            </template>\n        </sw-number-field>\n        {% endblock %}\n        \n        {% block sw_promotion_discount_max_value_advanced_prices %}\n        <a\n            v-if="showMaxValueAdvancedPrices"\n            class="sw-card__quick-link advanced-prices"\n            role="button"\n            tabindex="0"\n            @click="onClickAdvancedPrices"\n            @keydown.enter="onClickAdvancedPrices"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.linkAdvancedPrices\') }}\n            <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_promotion_discount_advanced_prices_link %}\n    <sw-container\n        v-if="showAbsoluteAdvancedPricesSettings"\n        :key="2"\n        columns="1fr"\n        justify="end"\n    >\n        <a\n            class="sw-card__quick-link advanced-prices"\n            role="button"\n            tabindex="0"\n            @click="onClickAdvancedPrices"\n            @keydown.enter="onClickAdvancedPrices"\n        >\n            {{ $tc(\'sw-promotion.detail.main.discounts.linkAdvancedPrices\') }}\n            <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_promotion_discount_advanced_prices_modal %}\n    <sw-modal\n        v-if="displayAdvancedPrices"\n        :title="$tc(\'sw-promotion.detail.main.discounts.pricesModal.advancedPricesHeader\')"\n        class="sw-promotion-discount-form__advanced-prices-modal"\n        @modal-close="onCloseAdvancedPricesModal"\n    >\n\n        <sw-one-to-many-grid\n            :collection="discount.promotionDiscountPrices"\n            :local-mode="true"\n            :columns="currencyPriceColumns"\n            :show-selection="false"\n            :is-loading="isLoading"\n            :show-actions="!isEditingDisabled"\n        >\n\n            <template #column-currency.translated.name="{ item }">\n                <p>{{ item.currency.translated.name }}</p>\n            </template>\n\n            <template #column-price="{ item }">\n                <sw-number-field\n                    v-model:value="item.price"\n                    type="text"\n                    size="small"\n                    :disabled="isEditingDisabled"\n                >\n                    <template #suffix>\n                        {{ item.currency.symbol }}\n                    </template>\n                </sw-number-field>\n            </template>\n        </sw-one-to-many-grid>\n\n        <template #modal-footer>\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="onCloseAdvancedPricesModal"\n            >\n                {{ $tc(\'sw-promotion.detail.main.discounts.pricesModal.closeModal\') }}\n            </sw-button>\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_promotion_detail_discounts_modal_delete %}\n    <sw-modal\n        v-if="showDeleteModal"\n        variant="small"\n        :title="$tc(\'sw-promotion.detail.main.discounts.delete.confirmTitle\')"\n        class="sw-promotion-detail-discounts-modal"\n        @modal-close="onCloseDeleteModal"\n    >\n        \n        {% block sw_promotion_detail_discounts_modal_delete_text %}\n        <p>\n            {{ $tc(\'sw-promotion.detail.main.discounts.delete.confirmText\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_promotion_detail_discounts_modal_delete_footer %}\n        <template #modal-footer>\n            \n            {% block sw_promotion_detail_discounts_modal_delete_action_cancel %}\n            <sw-button\n                size="small"\n                @click="onCloseDeleteModal"\n            >\n                {{ $tc(\'sw-promotion.detail.main.discounts.delete.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_promotion_detail_discounts_modal_delete_action_delete %}\n            <sw-button\n                size="small"\n                variant="danger"\n                class="sw-promotion-discount-delete-button"\n                @click="onConfirmDelete"\n            >\n                {{ $tc(\'sw-promotion.detail.main.discounts.delete.buttonDelete\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","feature","ruleConditionDataProviderService"],emits:["discount-delete"],mixins:[o.getByName("placeholder")],props:{promotion:{type:Object,required:!0},discount:{type:Object,required:!0}},data(){return{displayAdvancedPrices:!1,currencies:[],defaultCurrency:null,isLoading:!1,showRuleModal:!1,showDeleteModal:!1,currencySymbol:null,allowProductRules:!1,cartScope:this.discount.scope===i.nv.CART,shippingScope:this.discount.scope===i.nv.DELIVERY,considerAdvancedRules:this.discount.considerAdvancedRules,availableSetGroups:[],syncService:null,httpClient:null,sorterKeys:[],pickerKeys:[],restrictedRules:[]}},computed:{advancedPricesRepo(){return this.repositoryFactory.create("promotion_discount_prices")},repositoryGroups(){return this.repositoryFactory.create("promotion_setgroup")},currencyRepository(){return this.repositoryFactory.create("currency")},ruleFilter(){let e=new s(1,25);return e.addAssociation("conditions"),e.addSorting(s.sort("name","ASC",!1)),e},currencyPriceColumns(){return[{property:"currency.translated.name",label:this.$tc("sw-promotion.detail.main.discounts.pricesModal.labelCurrency")},{property:"price",dataIndex:"price",label:this.$tc("sw-promotion.detail.main.discounts.pricesModal.labelPrice")}]},scopes(){let e=[{key:i.nv.CART,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeCart")},{key:i.nv.DELIVERY,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeDelivery")},{key:i.nv.SET,name:this.$tc("sw-promotion.detail.main.discounts.valueScopeSet")}],n=1;return this.availableSetGroups.forEach(()=>{let t=`${i.nv.SETGROUP}-${n}`,o=`${this.$tc("sw-promotion.detail.main.discounts.valueScopeSetGroup")}-${n}`;e.push({key:t,name:o}),n+=1}),e},types(){let e=[{key:i.sC.ABSOLUTE,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeAbsolute")},{key:i.sC.PERCENTAGE,name:this.$tc("sw-promotion.detail.main.discounts.valueTypePercentage")},{key:i.sC.FIXED_UNIT,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixedUnit")}];return this.cartScope||e.push({key:i.sC.FIXED,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixed")}),this.cartScope&&this.discount.considerAdvancedRules&&e.push({key:i.sC.FIXED,name:this.$tc("sw-promotion.detail.main.discounts.valueTypeFixed")}),e},valueSuffix(){return c.getValueSuffix(this.discount.type,this.currencySymbol)},maxValueSuffix(){return this.currencySymbol},showMaxValueSettings(){return this.discount.type===i.sC.PERCENTAGE},showAbsoluteAdvancedPricesSettings(){return this.discount.type===i.sC.ABSOLUTE||this.discount.type===i.sC.FIXED},showMaxValueAdvancedPrices(){return this.discount.type===i.sC.PERCENTAGE&&null!==this.discount.maxValue},maxValueAdvancedPricesTooltip(){return this.discount.type===i.sC.PERCENTAGE&&null!==this.discount.maxValue&&this.discount.promotionDiscountPrices.length>0?this.$tc("sw-promotion.detail.main.discounts.helpTextMaxValueAdvancedPrices"):""},isEditingDisabled(){return!this.acl.can("promotion.editor")||!i.em.isEditingAllowed(this.promotion)},displayAdvancedRuleOption(){return this.discount.scope!==i.nv.DELIVERY},graduationSorters(){let e=[];return this.sorterKeys.forEach(n=>{e.push({key:n,name:this.$tc(`sw-promotion-v2.detail.conditions.filter.sorter.${n}`)})}),e},graduationPickers(){let e=[];return this.pickerKeys.forEach(n=>{e.push({key:n,name:this.$tc(`sw-promotion-v2.detail.conditions.filter.picker.${n}`)})}),e},isSetGroup(){return this.discount.scope.split("-")[0]===i.nv.SETGROUP},isSet(){return this.discount.scope===i.nv.SET},graduationAppliers(){let e;let n=[{key:"ALL",name:this.$tc("sw-promotion-v2.detail.conditions.filter.applier.ALL")}],t=10,o=this.discount.scope.split("-");if(o[0]===i.nv.SETGROUP){let e=0;this.availableSetGroups.forEach(n=>{(e+=1)===parseInt(o[1],10)&&n.value<t&&"COUNT"===n.packagerKey&&(t=n.value)})}for(e=1;e<=t;e+=1)n.push({key:e,name:this.$tc("sw-promotion-v2.detail.conditions.filter.applier.SELECT",0,{count:e})});return n},graduationCounts(){let e;let n=[{key:"ALL",name:this.$tc("sw-promotion-v2.detail.conditions.filter.counter.ALL")}];for(e=1;e<10;e+=1)n.push({key:e,name:this.$tc("sw-promotion-v2.detail.conditions.filter.counter.SELECT",0,{count:e})});return n},isPickingModeVisible(){return!!this.discount.scope.startsWith(i.nv.SETGROUP)||this.discount.scope===i.nv.SET},isMaxUsageVisible(){return this.discount.scope!==i.nv.CART},promotionDiscountSnippet(){return this.$tc(this.ruleConditionDataProviderService.getAwarenessConfigurationByAssignmentName("promotionDiscounts").snippet,2)}},created(){this.createdComponent()},methods:{createdComponent(){this.syncService=Shopware.Service("syncService"),this.httpClient=this.syncService.httpClient,this.currencyRepository.search(new s(1,25)).then(e=>{this.currencies=e,this.defaultCurrency=this.currencies.find(e=>e.isSystemDefault),this.currencySymbol=this.defaultCurrency.symbol}),this.isLoading=!0,this.loadSetGroups().then(()=>{this.isLoading=!1}),this.loadSorters().then(e=>{this.sorterKeys=e}),this.loadPickers().then(e=>{this.pickerKeys=e}),this.loadRestrictedRules()},onDiscountScopeChanged(e){this.cartScope=e===i.nv.CART,this.shippingScope=e===i.nv.DELIVERY,e===i.nv.DELIVERY?this.discount.considerAdvancedRules=!1:this.discount.considerAdvancedRules=this.considerAdvancedRules,this.discount.pickerKey="",this.discount.usageKey="ALL",this.isPickingModeVisible&&(this.discount.pickerKey=this.pickerKeys[0])},onDiscountTypeChanged(){this.discount.value=c.getFixedValue(this.discount.value,this.discount.type)},onDiscountValueChanged(e){this.discount.value=c.getFixedValue(e,this.discount.type)},onMaxValueChanged(e){0===e&&(this.discount.maxValue=null,this.clearAdvancedPrices())},onClickAdvancedPrices(){this.currencies.forEach(e=>{this.isMemberOfCollection(e)||(this.showMaxValueAdvancedPrices?this.prepareAdvancedPrices(e,this.discount.maxValue):this.prepareAdvancedPrices(e,this.discount.value))}),this.displayAdvancedPrices=!0},prepareAdvancedPrices(e,n){let t=c.getMinValue();void 0!==n&&(t=n),(t*=e.factor)<c.getMinValue()&&(t=c.getMinValue());let i=this.advancedPricesRepo.create(Shopware.Context.api);i.discountId=this.discount.id,i.price=t,i.currencyId=e.id,i.currency=e,this.discount.promotionDiscountPrices.add(i)},clearAdvancedPrices(){let e;let n=this.discount.promotionDiscountPrices.getIds();for(e=0;e<n.length;e+=1)this.discount.promotionDiscountPrices.remove(n[e])},isMemberOfCollection(e){let n=!1,t=e.id;return this.discount.promotionDiscountPrices.forEach(i=>{i.currencyId===t&&(n=!0,i.currency=e)}),n},onCloseAdvancedPricesModal(){this.discount.type===i.sC.PERCENTAGE&&null===this.discount.maxValue?this.clearAdvancedPrices():this.discount.promotionDiscountPrices.forEach(e=>{e.price=c.getFixedValue(e.price,i.sC.ABSOLUTE)}),this.displayAdvancedPrices=!1},onShowDeleteModal(){this.showDeleteModal=!0},onCloseDeleteModal(){this.showDeleteModal=!1},onConfirmDelete(){this.onCloseDeleteModal(),this.$nextTick(()=>{this.$emit("discount-delete",this.discount)})},async loadSetGroups(){let e=new s(1,25);return e.addFilter(s.equals("promotionId",this.promotion.id)),await this.repositoryGroups.search(e).then(e=>{this.availableSetGroups=e}),!0},async loadSorters(){return this.httpClient.get("/_action/promotion/setgroup/sorter",{headers:this.syncService.getBasicHeaders()}).then(e=>e.data)},async loadPickers(){return this.httpClient.get("/_action/promotion/discount/picker",{headers:this.syncService.getBasicHeaders()}).then(e=>e.data)},loadRestrictedRules(){this.ruleConditionDataProviderService.getRestrictedRules("promotionSetGroups").then(e=>{this.restrictedRules=e})}}}},67883:function(e,n,t){"use strict";t.d(n,{em:function(){return c},nv:function(){return s},sC:function(){return o}});var i=t(410323);let o={PERCENTAGE:"percentage",ABSOLUTE:"absolute",FIXED:"fixed",FIXED_UNIT:"fixed_unit"},s={CART:"cart",DELIVERY:"delivery",SET:"set",SETGROUP:"setgroup"},c={isEditingAllowed:function(e){if(null==e)return!1;if(!(0,i.nr)(e,"hasOrders"))throw Error("Promotion Property hasOrders does not exist. Please use the Hydrator before!");return!e.hasOrders}}},925405:function(e,n,t){var i=t(172612);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("0e139732",i,!0,{})}}]);