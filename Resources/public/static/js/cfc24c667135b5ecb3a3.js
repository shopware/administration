(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[429],{"59d9":function(e,t,n){},tJzE:function(e,t,n){"use strict";n.r(t);var r=n("7yzw"),o=n.n(r),s=n("CsSd"),i=n.n(s),a=n("92Mt"),c=n.n(a);n("z7q5");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=Shopware.Mixin,g=Shopware.Data.Criteria,p=Shopware.Component.getComponentHelper().mapPropertyErrors,m=Shopware.Classes.ShopwareError,_=Shopware.Utils.types;t.default={template:'\n{% block sw_settings_customer_group_detail %}\n<sw-page class="sw-settings-customer-group-detail">\n\n    \n    {% block sw_settings_customer_group_detail_search_bar %}\n    <template #search-bar></template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_customer_group_detail_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_customer_group_detail_smart_bar_header_title_text %}\n            {{ placeholder(customerGroup, \'name\', $tc(\'sw-settings-customer-group.detail.placeholderNewCustomerGroup\')) }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="customerGroupId == null"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_customer_group_detail_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-settings-customer-group-detail__cancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-customer-group.general.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_customer_group_detail_actions_save %}\n        <sw-button-process\n            v-model="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-customer-group-detail__save"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="!allowSave"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-customer-group.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_cardview %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            <template v-else>\n                \n                {% block sw_settings_customer_group_detail_content_language_info %}\n                <sw-language-info :entity-description="entityDescription" />\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_content_card %}\n                <sw-card\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-customer-group.detail.cardTitle\')"\n                    position-identifier="sw-settings-customer-group-detail-content"\n                >\n                    <template v-if="!isLoading">\n                        <sw-container\n                            columns="repeat(2, minmax(250px, 1fr))"\n                            gap="0px 30px"\n                        >\n                            \n                            {% block sw_settings_customer_group_detail_content_card_name %}\n                            <sw-text-field\n                                v-model="customerGroup.name"\n                                class="sw-settings-customer-group-detail__name"\n                                required\n                                validation="required"\n                                :label="$tc(\'sw-settings-customer-group.detail.fieldNameLabel\')"\n                                :error="customerGroupNameError"\n                                :placeholder="placeholder(customerGroup, \'name\', $tc(\'sw-settings-customer-group.detail.placeholderName\'))"\n                                :disabled="!acl.can(\'customer_groups.editor\')"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_customer_group_detail_content_card_display_gross %}\n                            <sw-boolean-radio-group\n                                v-model="customerGroup.displayGross"\n                                bordered\n                                :label="$tc(\'sw-settings-customer-group.detail.fieldDisplayGrossLabel\')"\n                                :label-option-true="$tc(\'sw-settings-customer-group.detail.fieldDisplayGrossValues\', true)"\n                                :label-option-false="$tc(\'sw-settings-customer-group.detail.fieldDisplayGrossValues\', false)"\n                                :disabled="!acl.can(\'customer_groups.editor\')"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_customer_group_detail_content_card_registration_form %}\n                            <sw-switch-field\n                                v-model="customerGroup.registrationActive"\n                                class="sw-settings-customer-group-detail__registration-form-switch"\n                                :label="$tc(\'sw-settings-customer-group.detail.registrationForm\')"\n                                :disabled="!acl.can(\'customer_groups.editor\')"\n                            />\n                            {% endblock %}\n                        </sw-container>\n                    </template>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_content_registration_card %}\n                <sw-card\n                    v-if="customerGroup && customerGroup.registrationActive"\n                    position-identifier="sw-settings-customer-group-detail-content-registration-card"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-customer-group.registration.formTitle\')"\n                >\n                    <div class="sw-settings-customer-group-detail-content-registration-card__info-text">\n                        {{ $tc(\'sw-settings-customer-group.registration.infoText\') }}\n                    </div>\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_title %}\n                    <sw-text-field\n                        v-model="customerGroup.registrationTitle"\n                        required\n                        validation="required"\n                        :label="$tc(\'sw-settings-customer-group.registration.title\')"\n                        :placeholder="placeholder(customerGroup, \'registrationTitle\', $tc(\'sw-settings-customer-group.registration.placeholderTitle\'))"\n                        :error="registrationTitleError"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_introduction %}\n                    <sw-text-editor\n                        v-model="customerGroup.registrationIntroduction"\n                        :label="$tc(\'sw-settings-customer-group.registration.introduction\')"\n                        :placeholder="placeholder(customerGroup, \'registrationIntroduction\', $tc(\'sw-settings-customer-group.registration.placeholderIntroduction\'))"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                        sanitize-input\n                        sanitize-field-name="customer_group_translation.registrationIntroduction"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_seo_meta_description %}\n                    <sw-textarea-field\n                        v-model="customerGroup.registrationSeoMetaDescription"\n                        :label="$tc(\'sw-settings-customer-group.registration.seoMetaDescription\')"\n                        :placeholder="placeholder(customerGroup, \'registrationSeoMetaDescription\', $tc(\'sw-settings-customer-group.registration.placeholderSeoMetaDescription\'))"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_only_companies_can_register %}\n                    <sw-switch-field\n                        v-model="customerGroup.registrationOnlyCompanyRegistration"\n                        :label="$tc(\'sw-settings-customer-group.registration.onlyCompaniesCanRegister\')"\n                        :help-text="$tc(\'sw-settings-customer-group.registration.onlyCompaniesCanRegisterHelpText\')"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_content_registration_url_card %}\n                <sw-card\n                    v-if="customerGroup && customerGroup.registrationActive"\n                    position-identifier="sw-settings-customer-group-detail-content-registration-url-card"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-customer-group.registration.linkUrlsTitle\')"\n                >\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_url_card_sales_channel %}\n                    <sw-entity-multi-select\n                        v-model="customerGroup.registrationSalesChannels"\n                        class="sw-settings-customer-group-detail__sales-channel"\n                        :label="$tc(\'sw-settings-customer-group.registration.availabilitySalesChannel\')"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_technical_urls %}\n                    <sw-text-field\n                        v-if="customerGroupId"\n                        v-model="technicalUrl"\n                        :label="$tc(\'sw-settings-customer-group.registration.technicalUrl\')"\n                        :copyable="true"\n                        :disabled="true"\n                        :help-text="$tc(\'sw-settings-customer-group.registration.technicalUrlHelpText\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_url_card_seo_url %}\n                    <div\n                        v-for="seoUrl in seoUrls"\n                        :key="seoUrl.id"\n                    >\n                        \n                        {% block sw_settings_customer_group_detail_content_registration_url_card_seo_url_inner %}\n                        \n                        <sw-text-field\n                            v-model="getSeoUrl(seoUrl)"\n                            :label="$tc(\'sw-settings-customer-group.registration.seoUrlLabel\', 0, { salesChannelName: seoUrl.salesChannel.translated.name})"\n                            :copyable="true"\n                            :disabled="true"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-customer-group-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="customerGroup"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[d.getByName("notification"),d.getByName("placeholder"),d.getByName("discard-detail-page-changes")("customerGroup")],props:{customerGroupId:{type:String,required:!1,default:null}},shortcuts:{"SYSTEMKEY+S":{active:function(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data:function(){return{isLoading:!1,customerGroup:null,isSaveSuccessful:!1,openSeoModal:!1,registrationTitleError:null,seoUrls:[],customFieldSets:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:u(u({identifier:function(){return this.placeholder(this.customerGroup,"name","")},customerGroupRepository:function(){return this.repositoryFactory.create("customer_group")},seoUrlRepository:function(){return this.repositoryFactory.create("seo_url")},seoUrlCriteria:function(){var e,t=new g(1,25);if(null!==(e=this.customerGroup)&&void 0!==e&&e.registrationSalesChannels.length){var n,r=null===(n=this.customerGroup.registrationSalesChannels)||void 0===n?void 0:n.getIds();t.addFilter(g.equalsAny("salesChannelId",r))}return t.addFilter(g.equals("pathInfo","/customer-group-registration/".concat(this.customerGroupId))),t.addFilter(g.equals("languageId",Shopware.Context.api.languageId)),t.addFilter(g.equals("isCanonical",!0)),t.addAssociation("salesChannel.domains"),t.addGroupField("seoPathInfo"),t.addGroupField("salesChannelId"),t},entityDescription:function(){return this.placeholder(this.customerGroup,"name",this.$tc("sw-settings-customer-group.detail.placeholderNewCustomerGroup"))},tooltipSave:function(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},hasRegistration:{get:function(){return this.customerGroup&&void 0!==this.customerGroup.registration},set:function(e){this.customerGroup.registration=e?this.customerGroupRegistrationRepository.create():null}},technicalUrl:function(){return"".concat("124c71d524604ccbad6042edce3ac799","/customer-group-registration/").concat(this.customerGroupId,"#")}},p("customerGroup",["name"])),{},{allowSave:function(){return this.customerGroup&&this.customerGroup.isNew()?this.acl.can("customer_groups.creator"):this.acl.can("customer_groups.editor")},showCustomFields:function(){return this.customerGroup&&this.customFieldSets&&this.customFieldSets.length>0}}),watch:{customerGroupId:function(){this.customerGroupId||this.createdComponent()},"customerGroup.registrationTitle":function(){this.registrationTitleError=null},"customerGroup.registrationSalesChannels":function(){this.loadSeoUrls()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;if(this.isLoading=!0,this.customerGroupId){this.loadSeoUrls(),this.loadCustomFieldSets();var t=new g(1,25);return t.addAssociation("registrationSalesChannels"),void this.customerGroupRepository.get(this.customerGroupId,Shopware.Context.api,t).then((function(t){e.customerGroup=t,e.isLoading=!1}))}Shopware.State.commit("context/resetLanguageToDefault"),this.customerGroup=this.customerGroupRepository.create(),this.isLoading=!1},loadSeoUrls:function(){var e=this;return o()(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==(n=e.customerGroup)&&void 0!==n&&n.registrationSalesChannels.length){t.next=3;break}return e.seoUrls=[],t.abrupt("return");case 3:return t.next=5,e.seoUrlRepository.search(e.seoUrlCriteria);case 5:e.seoUrls=t.sent;case 6:case"end":return t.stop()}}),t)})))()},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("customer_group").then((function(t){e.customFieldSets=t}))},onChangeLanguage:function(){this.createdComponent()},onCancel:function(){this.$router.push({name:"sw.settings.customer.group.index"})},getSeoUrl:function(e){var t="";return e.salesChannel.domains.forEach((function(n){n.languageId===e.languageId&&(t=n.url)})),"".concat(t,"/").concat(e.seoPathInfo)},onSave:function(){var e=this;return o()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isSaveSuccessful=!1,e.isLoading=!0,Shopware.Context.api.languageId!==Shopware.Context.api.systemLanguageId||!e.customerGroup.registrationActive||!_.isEmpty(e.customerGroup.registrationTitle)){t.next=8;break}return e.createNotificationError({message:e.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),e.registrationTitleError=new m({code:"CUSTOMER_GROUP_REGISTERATION_MISSING_TITLE",detail:e.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),e.isLoading=!1,e.isSaveSuccessful=!1,t.abrupt("return");case 8:return t.prev=8,t.next=11,e.customerGroupRepository.save(e.customerGroup);case 11:return e.isSaveSuccessful=!0,e.customerGroupId||(e.customerGroupId=e.customerGroup.id,e.$router.push({name:"sw.settings.customer.group.detail",params:{id:e.customerGroup.id}})),t.next=15,e.createdComponent();case 15:e.customerGroup=t.sent,t.next=22;break;case 18:t.prev=18,t.t0=t.catch(8),e.isLoading=!1,e.createNotificationError({message:e.$tc("sw-settings-customer-group.detail.notificationErrorMessage")});case 22:case"end":return t.stop()}}),t,null,[[8,18]])})))()}}}},z7q5:function(e,t,n){var r=n("59d9");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("14d49a9c",r,!0,{})}}]);