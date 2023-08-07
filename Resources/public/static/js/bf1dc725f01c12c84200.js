(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[610],{"9Ux3":function(t,e,n){"use strict";n.r(e);var i=Shopware.Data.Criteria;e.default={template:'\n{% block sw_custom_field_type_base_content %}\n\n\n{% block sw_custom_field_type_select_options %}{% endblock %}\n\n\n{% block sw_custom_field_type_select_add_option %}{% endblock %}\n\n\n{% block sw_custom_field_type_select_multi %}{% endblock %}\n\n{% parent() %}\n\n\n{% block sw_custom_field_type_entity_type %}\n<sw-single-select\n    v-model="currentCustomField.config.entity"\n    :disabled="!currentCustomField._isNew"\n    :help-text="$tc(\'sw-settings-custom-field.customField.detail.helpTextEntitySelect\')"\n    :label="$tc(\'sw-settings-custom-field.customField.detail.labelEntityTypeSelect\')"\n    :options="sortedEntityTypes"\n    show-clearable-button\n    @change="onChangeEntityType"\n/>\n{% endblock %}\n\n\n{% block sw_custom_field_type_entity_multi %}\n<sw-field\n    v-model="multiSelectSwitch"\n    type="switch"\n    class="sw-custom-field-detail__switch"\n    :disabled="!currentCustomField._isNew"\n    :help-text="$tc(\'sw-settings-custom-field.customField.detail.helpTextMultiSelect\')"\n    :label="$tc(\'sw-settings-custom-field.customField.detail.labelMultiSelect\')"\n    @change="onChangeMultiSelectSwitch"\n/>\n    {% endblock %}\n\n{% endblock %}\n',inject:["repositoryFactory"],mounted:function(){var t=this;this.customEntityRepository.search(new i,Shopware.Context.api).then((function(e){t.customEntities=e}))},data:function(){return{customEntities:[]}},computed:{entityTypes:function(){var t=this,e=[{label:this.$tc("sw-settings-custom-field.customField.entity.product"),value:"product"},{label:this.$tc("sw-settings-custom-field.customField.entity.category"),value:"category"},{label:this.$tc("sw-settings-custom-field.customField.entity.shippingMethod"),value:"shipping_method"},{label:this.$tc("sw-settings-custom-field.customField.entity.paymentMethod"),value:"payment_method"},{label:this.$tc("sw-settings-custom-field.customField.entity.country"),value:"country"},{label:this.$tc("sw-settings-custom-field.customField.entity.customer"),value:"customer",config:{labelProperty:["firstName","lastName"]}},{label:this.$tc("sw-settings-custom-field.customField.entity.salesChannel"),value:"sales_channel"},{label:this.$tc("sw-settings-custom-field.customField.entity.manufacturer"),value:"product_manufacturer"},{label:this.$tc("sw-settings-custom-field.customField.entity.dynamicProductGroup"),value:"product_stream"},{label:this.$tc("sw-settings-custom-field.customField.entity.shoppingExperienceLayout"),value:"cms_page"}];return this.customFieldsAwareCustomEntities.forEach((function(n){e.push({label:t.$tc("".concat(n.name,".label")),value:n.name,config:{labelProperty:n.labelProperty}})})),e},customFieldsAwareCustomEntities:function(){return this.customEntities.filter((function(t){return t.customFieldsAware}))},customEntityRepository:function(){return this.repositoryFactory.create("custom_entity")},sortedEntityTypes:function(){return this.entityTypes.sort((function(t,e){return t.label.localeCompare(e.label)}))}},methods:{createdComponent:function(){this.currentCustomField.config.hasOwnProperty("componentName")||(this.currentCustomField.config.componentName="sw-entity-single-select"),this.multiSelectSwitch="sw-entity-multi-id-select"===this.currentCustomField.config.componentName},onChangeEntityType:function(t){var e=this.entityTypes.find((function(e){return e.value===t}));this.$delete(this.currentCustomField.config,"labelProperty"),e.hasOwnProperty("config")&&e.config.hasOwnProperty("labelProperty")&&(this.currentCustomField.config.labelProperty=e.config.labelProperty)},onChangeMultiSelectSwitch:function(t){this.currentCustomField.config.componentName=t?"sw-entity-multi-id-select":"sw-entity-single-select"}}}}}]);