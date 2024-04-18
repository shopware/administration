(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[68076],{42392:function(){},68076:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var r=l(39815);l(28782);let i={IMPORT:"import",EXPORT:"export",IMPORT_EXPORT:"import-export"};var o={template:'\n{% block sw_import_export_edit_profile_general %}\n<div class="sw-import-export-edit-profile-general">\n    \n    {% block sw_import_export_edit_profile_general_text %}\n    <p class="sw-import-export-edit-profile-general__text">\n        {{ $tc(\'sw-import-export.profile.descriptionBlock\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_import_export_edit_profile_general_container %}\n    <sw-container\n        columns="1fr 1fr"\n        gap="0 32px"\n    >\n        \n        {% block sw_import_export_edit_profile_general_container_name %}\n        <sw-text-field\n            v-model:value="profile.label"\n            :label="$tc(\'sw-import-export.profile.profileNameFieldLabel\')"\n            required\n            :disabled="profile.systemDefault"\n            :error="profileNameError"\n            :placeholder="profile.translated.label"\n        />\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_general_container_object_type %}\n        <span\n            v-tooltip="{\n                message: $tc(\'sw-import-export.profile.objectTypeFieldTooltipText\'),\n                disabled: mappingLength <= 0,\n                showOnDisabledElements: false\n            }"\n            class="sw-import-export-edit-profile-general__object-type-field"\n        >\n            \n            {% block sw_import_export_edit_profile_general_container_object_type_select %}\n            <sw-single-select\n                ref="objectTypeSelect"\n                v-model:value="profile.sourceEntity"\n                class="sw-import-export-edit-profile-general__object-type-select"\n                :label="$tc(\'sw-import-export.profile.objectTypeFieldLabel\')"\n                required\n                :options="supportedEntities"\n                :disabled="profile.systemDefault || mappingLength > 0"\n                :error="profileSourceEntityError"\n                :show-clearable-button="!(profile.systemDefault || mappingLength > 0)"\n            >\n                <template\n                    #result-item="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }"\n                >\n                    \n                    {% block sw_import_export_edit_profile_general_container_object_type_select_result %}\n                    <sw-select-result\n                        v-tooltip="{\n                            showDelay: 300,\n                            message: $tc(\'sw-import-export.profile.objectTypeDisabledText\'),\n                            disabled: !shouldDisableObjectType(item)\n                        }"\n                        :disabled="item.disabled || shouldDisableObjectType(item)"\n                        :class="\'sw-select-option--\' + item.value"\n                        :selected="isSelected(item)"\n                        v-bind="{ item, index }"\n                        @item-select="setValue"\n                    >\n                        \n                        {% block sw_import_export_edit_profile_general_container_object_type_select_result_highlight %}\n                        <sw-highlight-text\n                            v-if="highlightSearchTerm && !isSelected(item)"\n                            :text="getKey(item, labelProperty)"\n                            :search-term="searchTerm"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_import_export_edit_profile_general_container_object_type_select_result_text %}\n                        <template v-else>\n                            {{ getKey(item, labelProperty) }}\n                        </template>\n                        {% endblock %}\n                    </sw-select-result>\n                    {% endblock %}\n                </template>\n            </sw-single-select>\n            {% endblock %}\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_import_export_edit_profile_general_container_type %}\n        <sw-single-select\n            v-model:value="profile.type"\n            class="sw-import-export-edit-profile-general__type-select"\n            :label="$tc(\'sw-import-export.profile.typeFieldLabel\')"\n            required\n            :options="supportedProfileTypes"\n            :disabled="profile.systemDefault"\n            :error="profileTypeError"\n            :show-clearable-button="!profile.systemDefault"\n        >\n            <template\n                #result-item="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }"\n            >\n                \n                {% block sw_import_export_edit_profile_general_container_type_result %}\n                <sw-select-result\n                    v-tooltip="{\n                        showDelay: 300,\n                        message: $tc(\'sw-import-export.profile.profileTypeDisabledText\'),\n                        disabled: !shouldDisableProfileType(item)\n                    }"\n                    :disabled="item.disabled || shouldDisableProfileType(item)"\n                    :class="\'sw-select-option--\' + item.value"\n                    :selected="isSelected(item)"\n                    v-bind="{ item, index }"\n                    @item-select="setValue"\n                >\n                    \n                    {% block sw_import_export_edit_profile_general_container_type_result_highlight %}\n                    <sw-highlight-text\n                        v-if="highlightSearchTerm && !isSelected(item)"\n                        :text="getKey(item, labelProperty)"\n                        :search-term="searchTerm"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_import_export_edit_profile_general_container_type_result_text %}\n                    <template v-else>\n                        {{ getKey(item, labelProperty) }}\n                    </template>\n                    {% endblock %}\n                </sw-select-result>\n                {% endblock %}\n            </template>\n        </sw-single-select>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n\n',inject:["feature"],props:{profile:{type:Object,required:!0}},computed:{...(0,r.mapPropertyErrors)("profile",["name","sourceEntity","type"]),supportedProfileTypes(){return[{value:i.IMPORT_EXPORT,label:this.$tc("sw-import-export.profile.types.importExportLabel")},{value:i.IMPORT,label:this.$tc("sw-import-export.profile.types.importLabel")},{value:i.EXPORT,label:this.$tc("sw-import-export.profile.types.exportLabel")}]},supportedEntities(){return[{value:"product",label:this.$tc("sw-import-export.profile.productLabel"),type:i.IMPORT_EXPORT},{value:"customer",label:this.$tc("sw-import-export.profile.customerLabel"),type:i.IMPORT_EXPORT},{value:"category",label:this.$tc("sw-import-export.profile.categoriesLabel"),type:i.IMPORT_EXPORT},{value:"order",label:this.$tc("sw-import-export.profile.orderLabel"),type:i.EXPORT},{value:"media",label:this.$tc("sw-import-export.profile.mediaLabel"),type:i.IMPORT_EXPORT},{value:"newsletter_recipient",label:this.$tc("sw-import-export.profile.newsletterRecipientLabel"),type:i.IMPORT_EXPORT},{value:"property_group_option",label:this.$tc("sw-import-export.profile.propertyLabel"),type:i.IMPORT_EXPORT},{value:"product_configurator_setting",label:this.$tc("sw-import-export.profile.configuratorSettingLabel"),type:i.IMPORT_EXPORT},{value:"product_cross_selling",label:this.$tc("sw-import-export.profile.productCrossSellingLabel"),type:i.IMPORT_EXPORT},{value:"promotion_discount",label:this.$tc("sw-import-export.profile.promotionDiscountLabel"),type:i.IMPORT_EXPORT},{value:"promotion_individual_code",label:this.$tc("sw-import-export.profile.promotionIndividualCodesLabel"),type:i.IMPORT_EXPORT},{value:"product_price",label:this.$tc("sw-import-export.profile.productPriceLabel"),type:i.IMPORT_EXPORT}]},mappingLength(){return this.profile.mapping?this.profile.mapping.length:0}},methods:{shouldDisableProfileType(e){if(!this.profile.sourceEntity)return!1;let t=this.supportedEntities.find(e=>e.value===this.profile.sourceEntity);return t.type!==i.IMPORT_EXPORT&&(t.type===i.IMPORT?e.value!==i.IMPORT:t.type!==i.EXPORT||e.value!==i.EXPORT)},shouldDisableObjectType(e){return!!this.profile.type&&(this.profile.type===i.IMPORT_EXPORT?e.type!==i.IMPORT_EXPORT:this.profile.type===i.IMPORT?![i.IMPORT,i.IMPORT_EXPORT].includes(e.type):this.profile.type!==i.EXPORT||![i.EXPORT,i.IMPORT_EXPORT].includes(e.type))}}}},28782:function(e,t,l){var r=l(42392);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),l(45346).Z("291fa2cc",r,!0,{})}}]);