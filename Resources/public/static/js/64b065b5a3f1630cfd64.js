(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[419],{"XgR+":function(t,n,e){"use strict";e.r(n);var s=e("CsSd"),o=e.n(s);e("cooi");function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,s)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){o()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var r=Shopware,c=r.Component,u=r.Mixin,l=c.getComponentHelper().mapPropertyErrors,d=Shopware.Data.Criteria;n.default={template:'\n{% block sw_settings_country_detail %}\n<sw-page class="sw-settings-country-detail">\n\n    \n    {% block sw_settings_country_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(country, \'name\', $tc(\'sw-settings-country.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_country_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_country_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: \'ESC\',\n                appearance: \'light\'\n            }"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-country.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_country_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-country-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!country || !allowSave"\n            variant="primary"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-country.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_country_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_country_detail_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_country_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(country, \'name\', $tc(\'sw-settings-country.detail.textHeadline\'))"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_country_tabs_header %}\n            <sw-tabs position-identifier="sw-settings-country-detail-header">\n                \n                {% block sw_setting_country_tabs_setting %}\n                <sw-tabs-item\n                    v-bind="$props"\n                    class="sw-settings-country__setting-tab"\n                    :route="{ name: isNewCountry ? \'sw.settings.country.create.general\' : \'sw.settings.country.detail.general\' }"\n                >\n                    {{ $tc(\'sw-settings-country.page.generalTab\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_setting_country_tabs_state %}\n                <sw-tabs-item\n                    v-bind="$props"\n                    class="sw-settings-country__state-tab"\n                    :route="{ name: isNewCountry ? \'sw.settings.country.create.state\' : \'sw.settings.country.detail.state\' }"\n                >\n                    {{ $tc(\'sw-settings-country.page.stateTab\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_setting_country_tabs_address_handling %}\n                <sw-tabs-item\n                    v-bind="$props"\n                    class="sw-settings-country__address-handling-tab"\n                    :route="{ name: isNewCountry ? \'sw.settings.country.create.address-handling\' : \'sw.settings.country.detail.address-handling\' }"\n                >\n                    {{ $tc(\'sw-settings-country.page.addressHandlingTab\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_setting_country_tabs_extension %}{% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_country_tabs_content %}\n                {% if VUE3 %}\n                <router-view\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        :country="country"\n                        :country-state-repository="countryStateRepository"\n                        :is-loading="isLoading"\n                        :user-config="userConfig"\n                        :user-config-values="userConfigValues"\n                        @modal-save="onSaveModal"\n                    />\n                </router-view>\n                {% else %}\n                <router-view\n                    :country="country"\n                    :country-state-repository="countryStateRepository"\n                    :is-loading="isLoading"\n                    :user-config="userConfig"\n                    :user-config-values="userConfigValues"\n                    @modal-save="onSaveModal"\n                />\n                {% endif %}\n                {% endblock %}\n\n                \n                {% block sw_settings_country_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-country-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="country"\n                        :disabled="!acl.can(\'country.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[u.getByName("notification"),u.getByName("placeholder"),u.getByName("discard-detail-page-changes")("country")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data:function(){return{country:{customerTax:{enabled:!1},companyTax:{enabled:!1}},countryId:null,isLoading:!1,countryStateRepository:null,isSaveSuccessful:!1,customFieldSets:null,userConfig:{value:{}},userConfigValues:{},showPreviewModal:!1,previewData:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:a(a({currentUserId:function(){return Shopware.State.get("session").currentUser.id},countryRepository:function(){return this.repositoryFactory.create("country")},userConfigRepository:function(){return this.repositoryFactory.create("user_config")},identifier:function(){return this.placeholder(this.country,"name")},stateColumns:function(){return this.getStateColumns()},isNewCountry:function(){return"function"==typeof this.country.isNew&&this.country.isNew()},allowSave:function(){return this.isNewCountry?this.acl.can("country.creator"):this.acl.can("country.editor")},tooltipSave:function(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};var t=this.$device.getSystemKey();return{message:"".concat(t," + S"),appearance:"light"}},userConfigCriteria:function(){return new d(1,25).addFilter(d.multi("AND",[d.equals("userId",this.currentUserId),d.equals("key","setting-country")]))}},l("country",["name"])),{},{showCustomFields:function(){return this.customFieldSets&&this.customFieldSets.length>0}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){this.$route.params.id&&(this.countryId=this.$route.params.id,Promise.all([this.loadEntityData(),this.loadCustomFieldSets(),this.loadUserConfig()]))},loadEntityData:function(){var t=this;return("function"!=typeof this.country.isNew||!this.country.isNew())&&(this.isLoading=!0,this.countryRepository.get(this.countryId).then((function(n){t.country=n,t.isLoading=!1,t.countryStateRepository=t.repositoryFactory.create(t.country.states.entity,t.country.states.source)})).catch((function(){t.isLoading=!1})))},loadCustomFieldSets:function(){var t=this;this.customFieldDataProviderService.getCustomFieldSets("country").then((function(n){t.customFieldSets=n}))},loadUserConfig:function(){var t=this;return this.userConfigRepository.search(this.userConfigCriteria,Shopware.Context.api).then((function(n){if(0===n.length)return t.userConfig=t.userConfigRepository.create(Shopware.Context.api),t.userConfig.userId=t.currentUserId,t.userConfig.key="setting-country",void(t.userConfig.value=[]);t.userConfig=n.first(),t.userConfigValues=t.userConfig.value[t.countryId],t.userConfigValues||(t.userConfig.value[t.countryId]={},t.userConfigValues=t.userConfig.value[t.countryId])}))},saveFinish:function(){this.isSaveSuccessful=!1},onSave:function(){var t=this;this.isSaveSuccessful=!1,this.isLoading=!0;var n=this.userConfig.value[this.countryId];return this.countryRepository.save(this.country,Shopware.Context.api).then((function(){n&&Object.keys(n).length>0&&t.userConfigRepository.save(t.userConfig,Shopware.Context.api).then((function(){t.loadUserConfig()})),t.loadEntityData(),t.isLoading=!1,t.isSaveSuccessful=!0})).catch((function(){t.isLoading=!1}))},onCancel:function(){this.$router.push({name:"sw.settings.country.index"})},abortOnLanguageChange:function(){return this.countryRepository.hasChanges(this.country)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(){this.loadEntityData()},getStateColumns:function(){return[{property:"name",label:this.$tc("sw-settings-country.detail.columnStateNameLabel"),inlineEdit:"string",primary:!0},{property:"shortCode",label:this.$tc("sw-settings-country.detail.columnStateShortCodeLabel"),inlineEdit:"string"}]},onSaveModal:function(){return this.onSave()}}}},cooi:function(t,n,e){var s=e("xV+Z");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("P8hj").default)("54654300",s,!0,{})},"xV+Z":function(t,n,e){}}]);