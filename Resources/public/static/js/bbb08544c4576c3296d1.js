(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[72990],{581611:function(){},372990:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}}),n(515800);let{Mixin:o}=Shopware,{Criteria:r}=Shopware.Data;var i={template:'\n{% block sw_property_detail %}\n<sw-page class="sw-property-detail">\n\n    \n    {% block sw_property_detail_smart_bar_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_property_detail_smart_bar_header_title %}\n        <h2>{{ placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.textHeadline\')) }}</h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_property_detail_smart_bar_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-property-detail__back-action"\n            :disabled="isLoading || undefined"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-property.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_property_detail_smart_bar_actions_save %}\n        <sw-button-process\n            v-tooltip="tooltipSave"\n            class="sw-property-detail__save-action"\n            :is-loading="isLoading || undefined"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || !acl.can(\'property.editor\') || undefined"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-property.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :save-permission="acl.can(\'property.editor\')"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!isLoading">\n\n                \n                {% block sw_property_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_property_detail_content_detail_base %}\n                <sw-property-detail-base\n                    v-if="propertyGroup"\n                    :property-group="propertyGroup"\n                    :allow-edit="acl.can(\'property.editor\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_property_detail_content_option_list %}\n                <sw-property-option-list\n                    v-if="propertyGroup"\n                    ref="optionListing"\n                    :is-loading="isLoading || undefined"\n                    :option-repository="optionRepository"\n                    :property-group="propertyGroup"\n                />\n                {% endblock %}\n\n                \n                {% block sw_property_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-property-detail"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="propertyGroup"\n                        :disabled="!acl.can(\'property.editor\') || undefined"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </div>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[o.getByName("notification"),o.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("product.editor")},method:"onSave"},ESCAPE:"onCancel"},props:{groupId:{type:String,default:null}},data(){return{propertyGroup:null,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.propertyGroup,"name")},optionRepository(){return this.repositoryFactory.create(this.propertyGroup.options.entity,this.propertyGroup.options.source)},propertyRepository(){return this.repositoryFactory.create("property_group")},tooltipSave(){if(!this.acl.can("property.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("property.editor"),showOnDisabledElements:!0};let t=this.$device.getSystemKey();return{message:`${t} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},defaultCriteria(){let t=new r(this.page,this.limit);return t.addAssociation("options"),t.setTerm(this.term),t},useNaturalSorting(){return"property.name"===this.sortBy},showCustomFields(){return this.propertyGroup&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{groupId(){this.loadEntityData()}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-property-group-detail__propertyGroup",path:"propertyGroup",scope:this}),this.loadEntityData(),this.loadCustomFieldSets()},loadEntityData(){this.isLoading=!0,this.propertyRepository.get(this.groupId,Shopware.Context.api,this.defaultCriteria).then(t=>{this.propertyGroup=t,this.isLoading=!1}).catch(()=>{this.isLoading=!1})},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("property_group").then(t=>{this.customFieldSets=t})},saveFinish(){this.isSaveSuccessful=!1},saveOnLanguageChange(){return this.onSave()},abortOnLanguageChange(){return this.propertyRepository.hasChanges(this.propertyGroup)},onChangeLanguage(){this.loadEntityData()},onSave(){return this.isSaveSuccessful=!1,this.isLoading=!0,this.propertyRepository.save(this.propertyGroup).then(()=>{this.loadEntityData(),this.isLoading=!1,this.isSaveSuccessful=!0}).catch(t=>{throw this.createNotificationError({message:this.$tc("sw-property.detail.messageSaveError")}),this.isLoading=!1,t})},onCancel(){this.$router.push({name:"sw.property.index"})}}}},515800:function(t,e,n){var o=n(581611);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),n(745346).Z("59a86aa5",o,!0,{})}}]);