(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[606],{uQhG:function(e,t,n){"use strict";n.r(t);t.default={template:'\n{% block sw_settings_custom_field_set_detail_base %}\n<sw-card\n    class="sw-settings-custom-field-set-detail-base"\n    position-identifier="sw-custom-field-detail-base"\n    :title="$tc(\'sw-settings-custom-field.set.detail.titleCardInformation\')"\n>\n    \n    {% block sw_settings_custom_field_set_detail_base_technical_name %}\n    <sw-text-field\n        {% if VUE3 %}\n        v-model:value="set.name"\n        {% else %}\n        v-model="set.name"\n        {% endif %}\n        class="sw-settings-custom-field-set-detail-base__technical-name"\n        :label="$tc(`sw-settings-custom-field.set.detail.labelTechnicalName`)"\n        :help-text="$tc(\'sw-settings-custom-field.general.tooltipTechnicalName\')"\n        :disabled="!set._isNew || !acl.can(\'custom_field.editor\')"\n        :error="technicalNameError"\n        required\n        @change="onTechnicalNameChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_position %}\n    <sw-number-field\n        {% if VUE3 %}\n        v-model:value="set.position"\n        {% else %}\n        v-model="set.position"\n        {% endif %}\n        class="sw-settings-custom-field-set-detail-base__base-postion"\n        :disabled="!acl.can(\'custom_field.editor\')"\n        :label="$tc(`sw-settings-custom-field.set.detail.labelPosition`)"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_translated %}\n    <sw-switch-field\n        v-if="set.config"\n        {% if VUE3 %}\n        v-model:value="set.config.translated"\n        {% else %}\n        v-model="set.config.translated"\n        {% endif %}\n        class="sw-settings-custom-field-set-detail-base__base-translation"\n        :disabled="!acl.can(\'custom_field.editor\')"\n        :label="$tc(\'sw-settings-custom-field.set.detail.labelCheckboxTranslated\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_labels %}\n    <sw-custom-field-translated-labels\n        v-if="set.config"\n        v-model="set.config"\n        :disabled="!acl.can(\'custom_field.editor\')"\n        :property-names="propertyNames"\n        :locales="locales"\n    />\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_multi_select %}\n    <sw-multi-select\n        id="entities"\n        class="sw-settings-custom-field-set-detail-base__label-entities"\n        :disabled="!acl.can(\'custom_field.editor\')"\n        :label="$tc(\'sw-settings-custom-field.set.detail.labelEntities\')"\n        :options="relationEntityNames"\n        value-property="entityName"\n        label-property="entityName"\n        :value="selectedRelationEntityNames"\n        :search-function="searchRelationEntityNames"\n        @item-add="onAddRelation"\n        @item-remove="onRemoveRelation"\n    >\n\n        <template #result-label-property="{ item }">\n            {{ $tc(`global.entities.${item.entityName}`, 2) }}\n        </template>\n\n        <template #selection-label-property="{ item }">\n            {{ $tc(`global.entities.${item.entityName}`, 2) }}\n        </template>\n\n    </sw-multi-select>\n    {% endblock %}\n\n    \n    {% block sw_settings_custom_field_set_detail_base_entities %}\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["customFieldDataProviderService","acl"],props:{set:{type:Object,required:!0,default:function(){return{}}},technicalNameError:{type:Object,required:!1,default:null}},data:function(){return{propertyNames:{label:this.$tc("sw-settings-custom-field.customField.detail.labelLabel")}}},computed:{locales:function(){return this.set.config.translated&&!0===this.set.config.translated?Object.keys(this.$root.$i18n.messages):[this.$root.$i18n.fallbackLocale]},customFieldSetRelationRepository:function(){if(this.set.relations)return Shopware.Service("repositoryFactory").create(this.set.relations.entity,this.set.relations.source)},selectedRelationEntityNames:function(){return this.set.relations?this.set.relations.map((function(e){return e.entityName})):[]},relationEntityNames:function(){var e=this;return this.set.relations?this.customFieldDataProviderService.getEntityNames().map((function(t){var n=e.customFieldSetRelationRepository.create();return n.entityName=t,e.$set(n,"searchField",{}),Object.keys(e.$root.$i18n.messages).forEach((function(s){e.$te("global.entities.".concat(t))&&e.$set(n.searchField,s,e.$tc("global.entities.".concat(t),2,s))})),n})):[]}},methods:{onAddRelation:function(e){this.set.relations.push(e)},onRemoveRelation:function(e){var t=this.set.relations.find((function(t){return t.entityName===e.entityName}));t&&this.set.relations.remove(t.id)},searchRelationEntityNames:function(e){var t=e.options,n=e.searchTerm.toLowerCase();return t.filter((function(e){return Object.values(e.searchField).some((function(e){return e.toLowerCase().includes(n)}))}))},onTechnicalNameChange:function(){this.$emit("reset-errors")}}}}}]);