(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[5375],{144538:function(){},105375:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}}),i(476229);let{Mixin:s,Context:l}=Shopware,{Criteria:o}=Shopware.Data;var n={template:'\n{% block sw_custom_field_detail %}\n<sw-modal\n    class="sw-custom-field-detail"\n    :title="modalTitle"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_custom_field_detail_modal %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="20px"\n    >\n        \n        {% block sw_custom_field_detail_modal_type %}\n        <sw-select-field\n            v-model:value="currentCustomField.config.customFieldType"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelCustomFieldType\')"\n            :placeholder="$tc(\'sw-settings-custom-field.customField.detail.placeholderCustomFieldType\')"\n            class="sw-custom-field-detail__modal-type"\n            type="select"\n            :help-text="$tc(\'sw-settings-custom-field.general.tooltipType\')"\n            :disabled="!currentCustomField._isNew || !acl.can(\'custom_field.editor\')"\n        >\n            <option\n                v-for="(option, key) in fieldTypes"\n                :key="key"\n                :value="key"\n            >\n                {{ $tc(`sw-settings-custom-field.types.${key}`) }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n\n        \n        {% block sw_custom_field_detail_modal_technical_name %}\n        <sw-text-field\n            v-model:value="currentCustomField.name"\n            class="sw-custom-field-detail__technical-name"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelTechnicalName\')"\n            :help-text="$tc(\'sw-settings-custom-field.general.tooltipTechnicalName\')"\n            :disabled="!currentCustomField._isNew || !acl.can(\'custom_field.editor\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_custom_field_detail_modal_position %}\n        <sw-number-field\n            v-model:value="currentCustomField.config.customFieldPosition"\n            class="sw-custom-field-detail__modal-position"\n            :help-text="$tc(\'sw-settings-custom-field.customField.detail.tooltipCustomFieldPosition\')"\n            number-type="int"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelCustomFieldPosition\')"\n            :disabled="!acl.can(\'custom_field.editor\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_custom_field_detail_modal_required %}\n        <sw-switch-field\n            v-model:value="required"\n            bordered\n            :help-text="$tc(\'sw-settings-custom-field.customField.detail.tooltipRequired\')"\n            class="sw-custom-field-detail__switch"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelRequired\')"\n            required\n            :disabled="!acl.can(\'custom_field.editor\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_custom_field_detail_modal_allow_customer_write %}\n        <sw-switch-field\n            v-model:value="currentCustomField.allowCustomerWrite"\n            bordered\n            :help-text="$tc(\'sw-settings-custom-field.customField.detail.tooltipAllowCustomerWrite\')"\n            class="sw-custom-field-detail__allow-customer-write"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelAllowCustomerWrite\')"\n            :disabled="!acl.can(\'custom_field.editor\')"\n        />\n        {% endblock %}\n\n        <sw-switch-field\n            v-if="isProductCustomField"\n            v-model:value="currentCustomField.allowCartExpose"\n            v-tooltip="getCartExposeTooltipConfig()"\n            bordered\n            :help-text="$tc(\'sw-settings-custom-field.customField.detail.tooltipAllowCartExpose\')"\n            class="sw-custom-field-detail__allow-cart-expose"\n            :label="$tc(\'sw-settings-custom-field.customField.detail.labelAllowCartExpose\')"\n            :disabled="!acl.can(\'custom_field.editor\') || disableCartExpose"\n        />\n\n        \n        {% block sw_custom_field_detail_modal_snippet_info  %}\n        <sw-alert class="sw-custom-field-detail__info">\n            {{ $tc(\'sw-settings-custom-field.customField.detail.infoText\', 0, { name: currentCustomField.name }) }}\n        </sw-alert>\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_custom_field_detail_modal_render_component %}\n    <div v-if="currentCustomField.config.customFieldType?.length > 0">\n        <component\n            :is="renderComponentName"\n            :current-custom-field="currentCustomField"\n            :set="set"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_custom_field_detail_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_custom_field_detail_modal_footer_cancel %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-custom-field.customField.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_custom_field_detail_modal_footer_save %}\n        <sw-button\n            class="sw-custom-field-detail__footer-save"\n            variant="primary"\n            size="small"\n            :disabled="!canSave || !acl.can(\'custom_field.editor\')"\n            @click="onSave"\n        >\n            {{ labelSaveButton }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","customFieldDataProviderService","SwCustomFieldListIsCustomFieldNameUnique","acl"],mixins:[s.getByName("notification")],props:{currentCustomField:{type:Object,required:!0},set:{type:Object,required:!0}},data(){return{fieldTypes:{},required:!1,disableCartExpose:!0}},computed:{locales(){return this.set.config.translated&&!0===this.set.config.translated?Object.keys(this.$root.$i18n.messages):[this.$root.$i18n.fallbackLocale]},canSave(){return this.currentCustomField.config.customFieldType},renderComponentName(){return this.fieldTypes[this.currentCustomField.config.customFieldType]?.configRenderComponent},modalTitle(){return this.currentCustomField._isNew?this.$tc("sw-settings-custom-field.customField.detail.titleNewCustomField"):this.$tc("sw-settings-custom-field.customField.detail.titleEditCustomField")},labelSaveButton(){return this.currentCustomField._isNew?this.$tc("sw-settings-custom-field.customField.detail.buttonSaveApply"):this.$tc("sw-settings-custom-field.customField.detail.buttonEditApply")},isProductCustomField(){return!!this.set.relations&&0!==this.set.relations.filter(e=>"product"===e.entityName).length},ruleConditionRepository(){return this.repositoryFactory.create("rule_condition")}},watch:{required(e){if(e){this.currentCustomField.config.validation="required";return}this.currentCustomField.config.hasOwnProperty("validation")&&this.$delete(this.currentCustomField.config,"validation")}},created(){this.createdComponent()},methods:{createdComponent(){if(this.fieldTypes=this.customFieldDataProviderService.getTypes(),this.currentCustomField.config||this.$set(this.currentCustomField,"config",{}),this.currentCustomField.config.hasOwnProperty("customFieldType")||this.$set(this.currentCustomField.config,"customFieldType",""),this.currentCustomField.name||(this.currentCustomField.name=`${this.set.name.toLowerCase()}_`),this.currentCustomField.config.hasOwnProperty("validation")&&(this.required="required"===this.currentCustomField.config.validation),this.currentCustomField.config.hasOwnProperty("customFieldPosition")||this.$set(this.currentCustomField.config,"customFieldPosition",1),!this.currentCustomField.allowCartExpose){this.disableCartExpose=!1;return}let e=new o(1,1);e.addFilter(o.multi("AND",[o.equals("type","cartLineItemCustomField"),o.equals("value.renderedField.name",this.currentCustomField.name)])),this.ruleConditionRepository.search(e,l.api).then(e=>{this.disableCartExpose=e.length>0})},onCancel(){this.$emit("custom-field-edit-cancel",this.currentCustomField)},onSave(){if(this.applyTypeConfiguration(),!this.currentCustomField._isNew){this.$emit("custom-field-edit-save",this.currentCustomField);return}if("entity"===this.currentCustomField.config.customFieldType&&!this.currentCustomField.config.entity){this.createEntityTypeRequiredNotification();return}this.SwCustomFieldListIsCustomFieldNameUnique(this.currentCustomField).then(e=>{if(e){this.$emit("custom-field-edit-save",this.currentCustomField);return}this.createNameNotUniqueNotification()})},createNameNotUniqueNotification(){let e=this.$tc("global.default.error"),t=this.$tc("sw-settings-custom-field.set.detail.messageNameNotUnique");this.createNotificationError({title:e,message:t})},createEntityTypeRequiredNotification(){let e=this.$tc("global.default.error"),t=this.$tc("sw-settings-custom-field.set.detail.entityTypeRequired");this.createNotificationError({title:e,message:t})},applyTypeConfiguration(){let e=this.currentCustomField.config.customFieldType;this.currentCustomField.type||(this.currentCustomField.type=this.fieldTypes[e].type||e),this.currentCustomField.config={...this.fieldTypes[e].config,...this.currentCustomField.config}},getCartExposeTooltipConfig(){return this.disableCartExpose?{disabled:!1,width:260,message:this.$t("sw-settings-custom-field.customField.detail.tooltipCartExposeDisabled")}:{message:"",disabled:!0}}}}},476229:function(e,t,i){var s=i(144538);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),i(745346).Z("47ad17d4",s,!0,{})}}]);