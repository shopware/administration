(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[391],{FY2t:function(o,n,t){"use strict";t.r(n);t("cJ+b");var e=Shopware.Data.Criteria;n.default={template:'\n{% block sw_promotion_v2_cart_condition_form %}\n<div class="sw-promotion-v2-cart-condition-form">\n\n    \n    {% block sw_promotion_v2_cart_condition_form_rules_field %}\n    <sw-promotion-v2-rule-select\n        v-if="promotion"\n        {% if VUE3 %}\n        v-model:collection="promotion.cartRules"\n        {% else %}\n        v-model="promotion.cartRules"\n        {% endif %}\n        class="sw-promotion-v2-cart-condition-form__rule-select-cart"\n        :local-mode="promotion.isNew()"\n        :criteria="ruleFilter"\n        :label="$tc(\'sw-promotion-v2.detail.conditions.preConditions.labelCartConditionSelect\')"\n        :placeholder="$tc(\'sw-promotion-v2.detail.conditions.preConditions.placeholderCartConditionSelect\')"\n        :rule-scope="[\'checkout\', \'global\', \'lineItem\']"\n        rule-aware-group-key="cartPromotions"\n        :disabled="isEditingDisabled"\n    />\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_cart_condition_form_use_setgroups_field %}\n    <sw-switch-field\n        {% if VUE3 %}\n        v-model:value="promotion.useSetGroups"\n        {% else %}\n        v-model="promotion.useSetGroups"\n        {% endif %}\n        class="sw-promotion-v2-cart-condition-form__use-setgroups"\n        :disabled="!acl.can(\'promotion.editor\')"\n        :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.switchGroupsEnabled\')"\n    />\n    {% endblock %}\n\n    <template v-if="promotion.useSetGroups">\n\n        \n        {% block sw_promotion_v2_cart_condition_setgroup_card %}\n        <sw-card\n            v-for="(group, index) in promotion.setgroups"\n            :id="`sw-promotion-v2-cart-condition-form__setgroup-card-${index + 1}`"\n            :key="group.id"\n            position-identifier="sw-promotion-cart-condition-setgroup"\n            class="sw-promotion-v2-cart-condition-form__setgroup-card"\n        >\n\n            \n            {% block sw_promotion_v2_cart_condition_setgroup_card_context_action %}\n            <template #context-actions>\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_card_context_action_duplicate %}\n                <sw-context-menu-item\n                    :disabled="isEditingDisabled"\n                    @click="duplicateSetGroup(group)"\n                >\n                    {{ $tc(\'global.default.duplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_card_context_action_delete %}\n                <sw-context-menu-item\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'promotion.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="danger"\n                    :disabled="isEditingDisabled"\n                    @click="deleteSetGroup(group)"\n                >\n                    {{ $tc(\'global.default.delete\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_cart_condition_setgroup_card_title %}\n            <div class="sw-promotion-v2-cart-condition-form__setgroup-card-title">\n                {{ $tc(\'sw-promotion-v2.detail.conditions.setgroups.titleName\') }} {{ index + 1 }}\n            </div>\n            {% endblock %}\n\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 30px"\n            >\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_mode_field %}\n                <sw-select-field\n                    {% if VUE3 %}\n                    v-model:value="group.packagerKey"\n                    {% else %}\n                    v-model="group.packagerKey"\n                    {% endif %}\n                    class="sw-promotion-v2-cart-condition-form__setgroup-mode"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelMode\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="packager in packagers"\n                        :key="packager.key"\n                        :value="packager.key"\n                    >\n                        {{ packager.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_value_field %}\n                <sw-number-field\n                    {% if VUE3 %}\n                    v-model:value="group.value"\n                    {% else %}\n                    v-model="group.value"\n                    {% endif %}\n                    class="sw-promotion-v2-cart-condition-form__setgroup-value"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelValue\')"\n                    :disabled="isEditingDisabled"\n                />\n                {% endblock %}\n\n            </sw-container>\n\n            <sw-container\n                columns="1fr 1fr"\n                gap="0px 30px"\n            >\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_sorting_field %}\n                <sw-select-field\n                    {% if VUE3 %}\n                    v-model:value="group.sorterKey"\n                    {% else %}\n                    v-model="group.sorterKey"\n                    {% endif %}\n                    class="sw-promotion-v2-cart-condition-form__setgroup-sorting"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelSorting\')"\n                    :disabled="isEditingDisabled"\n                >\n                    <option\n                        v-for="sorter in sorters"\n                        :key="sorter.key"\n                        :value="sorter.key"\n                    >\n                        {{ sorter.name }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n            </sw-container>\n\n            <sw-container\n                columns="1fr"\n                gap="0px 30px"\n            >\n\n                \n                {% block sw_promotion_v2_cart_condition_setgroup_rules_field %}\n                <sw-promotion-v2-rule-select\n                    {% if VUE3 %}\n                    v-model:collection="group.setGroupRules"\n                    {% else %}\n                    v-model="group.setGroupRules"\n                    {% endif %}\n                    class="sw-promotion-v2-cart-condition-form__setgroup-rules"\n                    :label="$tc(\'sw-promotion-v2.detail.conditions.setgroups.labelRules\')"\n                    :placeholder="$tc(\'sw-promotion-v2.detail.conditions.setgroups.placeholder\')"\n                    :criteria="ruleFilter"\n                    :rule-scope="[\'checkout\', \'global\', \'lineItem\']"\n                    :disabled="isEditingDisabled"\n                    rule-aware-group-key="promotionSetGroups"\n                />\n                {% endblock %}\n\n            </sw-container>\n        </sw-card>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_cart_condition_add_group_button %}\n        <div class="sw-promotion-v2-cart-condition-form__add-group-button-container">\n            <sw-button\n                variant="ghost"\n                class="sw-promotion-v2-cart-condition-form__add-group-button"\n                :disabled="isEditingDisabled"\n                @click="addSetGroup"\n            >\n                {{ $tc(\'sw-promotion-v2.detail.conditions.setgroups.buttonAddGroup\') }}\n            </sw-button>\n        </div>\n        {% endblock %}\n\n    </template>\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl","promotionSyncService","feature"],props:{promotion:{type:Object,required:!1,default:null},restrictedRules:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{packagerKeys:[],sorterKeys:[]}},computed:{promotionGroupRepository:function(){return this.repositoryFactory.create("promotion_setgroup")},ruleFilter:function(){var o=new e(1,25);return o.addAssociation("conditions").addSorting(e.sort("name","ASC",!1)),o},packagers:function(){var o=this,n=[];return this.packagerKeys.forEach((function(t){n.push({key:t,name:o.$tc("sw-promotion-v2.detail.conditions.setgroups.packager.".concat(t))})})),n},sorters:function(){var o=this,n=[];return this.sorterKeys.forEach((function(t){n.push({key:t,name:o.$tc("sw-promotion-v2.detail.conditions.setgroups.sorter.".concat(t))})})),n},isEditingDisabled:function(){return null===this.promotion||!this.acl.can("promotion.editor")}},watch:{promotion:function(){this.loadSetGroups()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var o=this;this.promotion&&this.loadSetGroups(),this.promotionSyncService.loadPackagers().then((function(n){o.packagerKeys=n})),this.promotionSyncService.loadSorters().then((function(n){o.sorterKeys=n}))},loadSetGroups:function(){var o=this,n=new e(1,25);n.addFilter(e.equals("promotionId",this.promotion.id)),this.promotionGroupRepository.search(n).then((function(n){o.promotion.setgroups=n}))},addSetGroup:function(){var o=this.promotionGroupRepository.create();o.promotionId=this.promotion.id,o.value=2,o.packagerKey="COUNT",o.sorterKey="PRICE_ASC",this.promotion.setgroups.push(o)},duplicateSetGroup:function(o){var n=this.promotionGroupRepository.create();n.promotionId=o.promotionId,n.value=o.value,n.packagerKey=o.packagerKey,n.sorterKey=o.sorterKey,this.promotion.setgroups.push(n)},deleteSetGroup:function(o){var n=Shopware.State.get("swPromotionDetail").setGroupIdsDelete;n.push(o.id),Shopware.State.commit("swPromotionDetail/setSetGroupIdsDelete",n),this.promotion.setgroups=this.promotion.setgroups.filter((function(n){return n.id!==o.id}))}}}},Ps5P:function(o,n,t){},"cJ+b":function(o,n,t){var e=t("Ps5P");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);(0,t("P8hj").default)("c0c0e6cc",e,!0,{})}}]);
//# sourceMappingURL=5be9120e55202c0d16dc.js.map