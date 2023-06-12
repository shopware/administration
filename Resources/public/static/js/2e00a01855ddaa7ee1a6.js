(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[592],{x1r1:function(e,o,n){"use strict";n.r(o);var t=n("J58c"),i=n.n(t);function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){i()(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}var l=Shopware.Mixin,r=Shopware.Component.getComponentHelper().mapPropertyErrors;o.default={template:'\n{% block sw_promotion_v2_detail_base %}\n<div class="sw-promotion-v2-detail-base">\n\n    \n    {% block sw_promotion_v2_detail_base_general_card %}\n    <sw-card\n        v-if="promotion"\n        position-identifier="sw-promotion-detail-base-general"\n        class="sw-promotion-v2-detail-base__card-general"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-promotion-v2.detail.base.general.cardTitle\')"\n    >\n\n        \n        {% block sw_promotion_v2_detail_base_general_name %}\n        <sw-container\n            columns="2fr 1fr"\n            gap="0 32px"\n        >\n            <sw-text-field\n                v-model="promotion.name"\n                class="sw-promotion-v2-detail-base__field-name"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.nameLabel\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                required\n                :error="promotionNameError"\n                :placeholder="placeholder(promotion, \'name\', $tc(\'sw-promotion-v2.detail.base.general.namePlaceholder\'))"\n            />\n\n            <sw-number-field\n                v-model="promotion.priority"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.priorityLabel\')"\n            />\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_general_valid_container %}\n        <sw-container\n            columns="1fr 1fr"\n            gap="0 32px"\n        >\n\n            \n            {% block sw_promotion_v2_detail_base_general_valid_from %}\n            <sw-datepicker\n                v-model="promotion.validFrom"\n                class="sw-promotion-v2-detail-base__field-valid-from"\n                date-type="datetime-local"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.validFromLabel\')"\n                :placeholder-text="$tc(\'sw-promotion-v2.detail.base.general.validFromPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_base_general_valid_until %}\n            <sw-datepicker\n                v-model="promotion.validUntil"\n                class="sw-promotion-v2-detail-base__field-valid-until"\n                date-type="datetime-local"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.validUntilLabel\')"\n                :placeholder-text="$tc(\'sw-promotion-v2.detail.base.general.validUntilPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :error="promotionValidUntilError"\n            />\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_general_max_uses %}\n        <sw-container\n            columns="1fr 1fr"\n            gap="0 32px"\n        >\n\n            \n            {% block sw_promotion_v2_detail_base_general_max_uses_global %}\n            <sw-number-field\n                v-model="promotion.maxRedemptionsGlobal"\n                class="sw-promotion-v2-detail-base__field-max-uses-global"\n                number-type="int"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.maxUsesGlobalLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.general.maxUsesGlobalPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                allow-empty\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_base_general_max_uses_customer %}\n            <sw-number-field\n                v-model="promotion.maxRedemptionsPerCustomer"\n                class="sw-promotion-v2-detail-base__field-max-uses-per-customer"\n                number-type="int"\n                :label="$tc(\'sw-promotion-v2.detail.base.general.maxUsesPerCustomerLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.general.maxUsesPerCustomerPlaceholder\')"\n                :disabled="!acl.can(\'promotion.editor\')"\n                allow-empty\n            />\n            {% endblock %}\n\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_general_active %}\n        <sw-switch-field\n            v-model="promotion.active"\n            class="sw-promotion-v2-detail-base__field-active"\n            :label="$tc(\'sw-promotion-v2.detail.base.general.activeLabel\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n            bordered\n        />\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_base_codes_card %}\n    <sw-card\n        v-if="promotion && !isCreateMode"\n        class="sw-promotion-v2-detail-base__card-codes"\n        position-identifier="sw-promotion-detail-base-codes"\n        :is-loading="isLoading"\n        :title="$tc(\'sw-promotion-v2.detail.base.codes.cardTitle\')"\n    >\n\n        \n        {% block sw_promotion_v2_detail_base_codes_select %}\n        <sw-select-field\n            v-model="selectedCodeType"\n            class="sw-promotion-v2-detail-base__field-code-type"\n            :label="$tc(\'sw-promotion-v2.detail.base.codes.codeTypeLabel\')"\n            :disabled="!acl.can(\'promotion.editor\')"\n            @change="onChangeCodeType"\n        >\n\n            \n            {% block sw_promotion_v2_detail_base_codes_select_options %}\n            <option\n                v-for="option in codeTypeOptions"\n                :key="option.value"\n                :value="option.value"\n                :selected="option.value === selectedCodeType"\n            >\n                {{ option.label }}\n            </option>\n            {% endblock %}\n\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_codes_type_fixed %}\n        <template v-if="selectedCodeType === CODE_TYPES.FIXED">\n\n            \n            {% block sw_promotion_v2_detail_base_codes_type_fixed_code %}\n            <sw-text-field\n                v-model="promotion.code"\n                class="sw-promotion-v2-detail-base__fixed-field-code"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :label="$tc(\'sw-promotion-v2.detail.base.codes.fixed.codeLabel\')"\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.codes.fixed.codePlaceholder\')"\n                copyable\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_base_codes_type_fixed_generate %}\n            <sw-button-process\n                class="sw-promotion-v2-detail-base__fixed-generate-button"\n                :is-loading="isGenerating"\n                :disabled="!acl.can(\'promotion.editor\')"\n                :process-success="isGenerateSuccessful"\n                @process-finish="generateFinish"\n                @click.prevent="onGenerateCodeFixed"\n            >\n                {{ $tc(\'sw-promotion-v2.detail.base.codes.fixed.generateButton\') }}\n            </sw-button-process>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_base_codes_type_individual %}\n        <template v-else-if="selectedCodeType === CODE_TYPES.INDIVIDUAL">\n\n            \n            {% block sw_promotion_v2_detail_base_codes_type_individual_codes_behavior %}\n            <sw-promotion-v2-individual-codes-behavior\n                :promotion="promotion"\n                @generate-finish="$emit(\'generate-individual-codes-finish\')"\n                @delete-finish="$emit(\'delete-individual-codes-finish\')"\n            />\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_promotion_detail_custom_field_sets %}\n    <sw-card\n        v-if="showCustomFields"\n        position-identifier="sw-promotion-detail-base-custom-field-sets"\n        :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n        :is-loading="isLoading"\n    >\n        <sw-custom-field-set-renderer\n            :entity="promotion"\n            :disabled="!acl.can(\'promotion.editor\')"\n            :sets="customFieldSets"\n        />\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["acl","promotionCodeApiService","customFieldDataProviderService"],mixins:[l.getByName("placeholder")],props:{promotion:{type:Object,required:!1,default:function(){return null}},isLoading:{type:Boolean,required:!1,default:function(){return!1}},isCreateMode:{type:Boolean,required:!0}},data:function(){return{selectedCodeType:"0",isGenerating:!1,isGenerateSuccessful:!1,codeSortProperty:"code",codeSortDirection:"ASC",CODE_TYPES:Object.freeze({NONE:"0",FIXED:"1",INDIVIDUAL:"2"}),customFieldSets:null}},computed:a(a({codeTypeOptions:function(){var e=this;return Object.entries(this.CODE_TYPES).map((function(o){return Object.create({label:e.$tc("sw-promotion-v2.detail.base.codes.".concat(o[0].toLowerCase(),".description")),value:o[1]})}))}},r("promotion",["name","validUntil"])),{},{showCustomFields:function(){return this.customFieldSets&&this.customFieldSets.length>0}}),watch:{promotion:function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){if(this.promotion){if(this.loadCustomFieldSets(),this.promotion.useCodes&&this.promotion.useIndividualCodes)return this.setNewCodeType(this.CODE_TYPES.INDIVIDUAL),void this.initialSort();this.setNewCodeType(this.promotion.useCodes?this.CODE_TYPES.FIXED:this.CODE_TYPES.NONE)}},initialSort:function(){var e=this;this.promotion.individualCodes.sort((function(o,n){var t=o[e.codeSortProperty],i=n[e.codeSortProperty],s=null;return"string"==typeof t&&"string"==typeof i&&(s=t.toUpperCase()>i.toUpperCase()),"number"==typeof t&&"number"==typeof i&&(s=t-i>0),null!==s?"DESC"===e.codeSortDirection?s?-1:1:s?1:-1:0}))},onChangeCodeType:function(e){var o=e!==this.CODE_TYPES.INDIVIDUAL&&null!==this.promotion.individualCodes&&this.promotion.individualCodes.length>0,n=e!==this.CODE_TYPES.FIXED&&null!==this.promotion.code&&this.promotion.code.length>0;this.$emit("clean-up-codes",o,n),this.setNewCodeType(e)},setNewCodeType:function(e){this.promotion.useCodes=e!==this.CODE_TYPES.NONE,this.promotion.useIndividualCodes=e===this.CODE_TYPES.INDIVIDUAL,this.selectedCodeType=e},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("promotion").then((function(o){e.customFieldSets=o}))},onGenerateCodeFixed:function(){var e=this;this.isGenerating=!0,this.promotionCodeApiService.generateCodeFixed().then((function(o){e.promotion.code=o,e.isGenerateSuccessful=!0})).finally((function(){e.isGenerating=!1}))},generateFinish:function(){this.isGenerateSuccessful=!1}}}}}]);