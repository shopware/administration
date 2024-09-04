(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[396],{E7S6:function(t,e,n){"use strict";n.r(e);n("L47F");var o=Shopware.Mixin,i=Shopware.Data.Criteria;e.default={template:'\n{% block sw_property_detail %}\n<sw-page class="sw-property-detail">\n\n    \n    {% block sw_property_detail_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_property_detail_smart_bar_header_title %}\n        <h2>{{ placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.textHeadline\')) }}</h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_property_detail_smart_bar_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-property-detail__back-action"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-property.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_property_detail_smart_bar_actions_save %}\n        <sw-button-process\n            v-tooltip="tooltipSave"\n            class="sw-property-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || !acl.can(\'property.editor\')"\n            variant="primary"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-property.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :save-permission="acl.can(\'property.editor\')"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n\n                \n                {% block sw_property_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_property_detail_content_detail_base %}\n                <sw-property-detail-base\n                    v-if="propertyGroup"\n                    :property-group="propertyGroup"\n                    :allow-edit="acl.can(\'property.editor\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_property_detail_content_option_list %}\n                <sw-property-option-list\n                    v-if="propertyGroup"\n                    ref="optionListing"\n                    :is-loading="isLoading"\n                    :option-repository="optionRepository"\n                    :property-group="propertyGroup"\n                />\n                {% endblock %}\n\n                \n                {% block sw_property_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-property-detail"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="propertyGroup"\n                        :disabled="!acl.can(\'property.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </div>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[o.getByName("notification"),o.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.acl.can("product.editor")},method:"onSave"},ESCAPE:"onCancel"},props:{groupId:{type:String,default:null}},data:function(){return{propertyGroup:null,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{identifier:function(){return this.placeholder(this.propertyGroup,"name")},optionRepository:function(){return this.repositoryFactory.create(this.propertyGroup.options.entity,this.propertyGroup.options.source)},propertyRepository:function(){return this.repositoryFactory.create("property_group")},tooltipSave:function(){if(!this.acl.can("property.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("property.editor"),showOnDisabledElements:!0};var t=this.$device.getSystemKey();return{message:"".concat(t," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},defaultCriteria:function(){var t=new i(this.page,this.limit);return t.addAssociation("options"),t.setTerm(this.term),t},useNaturalSorting:function(){return"property.name"===this.sortBy},showCustomFields:function(){return this.propertyGroup&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{groupId:function(){this.loadEntityData()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-property-group-detail__propertyGroup",path:"propertyGroup",scope:this}),this.loadEntityData(),this.loadCustomFieldSets()},loadEntityData:function(){var t=this;this.isLoading=!0,this.propertyRepository.get(this.groupId,Shopware.Context.api,this.defaultCriteria).then((function(e){t.propertyGroup=e,t.isLoading=!1})).catch((function(){t.isLoading=!1}))},loadCustomFieldSets:function(){var t=this;this.customFieldDataProviderService.getCustomFieldSets("property_group").then((function(e){t.customFieldSets=e}))},saveFinish:function(){this.isSaveSuccessful=!1},saveOnLanguageChange:function(){return this.onSave()},abortOnLanguageChange:function(){return this.propertyRepository.hasChanges(this.propertyGroup)},onChangeLanguage:function(){this.loadEntityData()},onSave:function(){var t=this;return this.isSaveSuccessful=!1,this.isLoading=!0,this.propertyRepository.save(this.propertyGroup).then((function(){t.loadEntityData(),t.isLoading=!1,t.isSaveSuccessful=!0})).catch((function(e){throw t.createNotificationError({message:t.$tc("sw-property.detail.messageSaveError")}),t.isLoading=!1,e}))},onCancel:function(){this.$router.push({name:"sw.property.index"})}}}},KroL:function(t,e,n){},L47F:function(t,e,n){var o=n("KroL");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("P8hj").default)("4fecd780",o,!0,{})}}]);