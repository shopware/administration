(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[72642],{89871:function(){},372642:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}}),s(615720);let{Mixin:n}=Shopware,{Criteria:o}=Shopware.Data,{mapPropertyErrors:r}=Shopware.Component.getComponentHelper(),{ShopwareError:i}=Shopware.Classes,a=Shopware.Utils.types;var l={template:'\n{% block sw_settings_customer_group_detail %}\n<sw-page class="sw-settings-customer-group-detail">\n\n    \n    {% block sw_settings_customer_group_detail_search_bar %}\n    <template #search-bar></template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_customer_group_detail_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_customer_group_detail_smart_bar_header_title_text %}\n            {{ placeholder(customerGroup, \'name\', $tc(\'sw-settings-customer-group.detail.placeholderNewCustomerGroup\')) }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="customerGroupId == null"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_customer_group_detail_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-settings-customer-group-detail__cancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-customer-group.general.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_customer_group_detail_actions_save %}\n        <sw-button-process\n            v-model:processSuccess="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-customer-group-detail__save"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="!allowSave"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-customer-group.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_customer_group_detail_cardview %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            <template v-else>\n                \n                {% block sw_settings_customer_group_detail_content_language_info %}\n                <sw-language-info :entity-description="entityDescription" />\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_content_card %}\n                <sw-card\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-customer-group.detail.cardTitle\')"\n                    position-identifier="sw-settings-customer-group-detail-content"\n                >\n                    <template v-if="!isLoading">\n                        <sw-container\n                            columns="repeat(2, minmax(250px, 1fr))"\n                            gap="0px 30px"\n                        >\n                            \n                            {% block sw_settings_customer_group_detail_content_card_name %}\n                            <sw-text-field\n                                v-model:value="customerGroup.name"\n                                name="sw-field--customerGroup-name"\n                                class="sw-settings-customer-group-detail__name"\n                                required\n                                validation="required"\n                                :label="$tc(\'sw-settings-customer-group.detail.fieldNameLabel\')"\n                                :error="customerGroupNameError"\n                                :placeholder="placeholder(customerGroup, \'name\', $tc(\'sw-settings-customer-group.detail.placeholderName\'))"\n                                :disabled="!acl.can(\'customer_groups.editor\')"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_customer_group_detail_content_card_display_gross %}\n                            <sw-boolean-radio-group\n                                v-model:value="customerGroup.displayGross"\n                                bordered\n                                :label="$tc(\'sw-settings-customer-group.detail.fieldDisplayGrossLabel\')"\n                                :label-option-true="$tc(\'sw-settings-customer-group.detail.fieldDisplayGrossValues\', 1)"\n                                :label-option-false="$tc(\'sw-settings-customer-group.detail.fieldDisplayGrossValues\', 0)"\n                                :disabled="!acl.can(\'customer_groups.editor\')"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_customer_group_detail_content_card_registration_form %}\n                            <sw-switch-field\n                                v-model:value="customerGroup.registrationActive"\n                                name="sw-field--customerGroup-registrationActive"\n                                class="sw-settings-customer-group-detail__registration-form-switch"\n                                :label="$tc(\'sw-settings-customer-group.detail.registrationForm\')"\n                                :disabled="!acl.can(\'customer_groups.editor\')"\n                            />\n                            {% endblock %}\n                        </sw-container>\n                    </template>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_content_registration_card %}\n                <sw-card\n                    v-if="customerGroup && customerGroup.registrationActive"\n                    position-identifier="sw-settings-customer-group-detail-content-registration-card"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-customer-group.registration.formTitle\')"\n                >\n                    <div class="sw-settings-customer-group-detail-content-registration-card__info-text">\n                        {{ $tc(\'sw-settings-customer-group.registration.infoText\') }}\n                    </div>\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_title %}\n                    <sw-text-field\n                        v-model:value="customerGroup.registrationTitle"\n                        name="sw-field--customerGroup-registrationTitle"\n                        required\n                        validation="required"\n                        :label="$tc(\'sw-settings-customer-group.registration.title\')"\n                        :placeholder="placeholder(customerGroup, \'registrationTitle\', $tc(\'sw-settings-customer-group.registration.placeholderTitle\'))"\n                        :error="registrationTitleError"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_introduction %}\n                    <sw-text-editor\n                        v-model:value="customerGroup.registrationIntroduction"\n                        :label="$tc(\'sw-settings-customer-group.registration.introduction\')"\n                        :placeholder="placeholder(customerGroup, \'registrationIntroduction\', $tc(\'sw-settings-customer-group.registration.placeholderIntroduction\'))"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                        sanitize-input\n                        sanitize-field-name="customer_group_translation.registrationIntroduction"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_seo_meta_description %}\n                    <sw-textarea-field\n                        v-model:value="customerGroup.registrationSeoMetaDescription"\n                        name="sw-field--customerGroup-registrationSeoMetaDescription"\n                        :label="$tc(\'sw-settings-customer-group.registration.seoMetaDescription\')"\n                        :placeholder="placeholder(customerGroup, \'registrationSeoMetaDescription\', $tc(\'sw-settings-customer-group.registration.placeholderSeoMetaDescription\'))"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_card_only_companies_can_register %}\n                    <sw-switch-field\n                        v-model:value="customerGroup.registrationOnlyCompanyRegistration"\n                        name="sw-field--customerGroup-registrationOnlyCompanyRegistration"\n                        :label="$tc(\'sw-settings-customer-group.registration.onlyCompaniesCanRegister\')"\n                        :help-text="$tc(\'sw-settings-customer-group.registration.onlyCompaniesCanRegisterHelpText\')"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_content_registration_url_card %}\n                <sw-card\n                    v-if="customerGroup && customerGroup.registrationActive"\n                    position-identifier="sw-settings-customer-group-detail-content-registration-url-card"\n                    :is-loading="isLoading"\n                    :title="$tc(\'sw-settings-customer-group.registration.linkUrlsTitle\')"\n                >\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_url_card_sales_channel %}\n                    <sw-entity-multi-select\n                        v-model:entityCollection="customerGroup.registrationSalesChannels"\n                        name="sw-field--customerGroup-registrationSalesChannels"\n                        class="sw-settings-customer-group-detail__sales-channel"\n                        :label="$tc(\'sw-settings-customer-group.registration.availabilitySalesChannel\')"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_technical_urls %}\n                    <sw-text-field\n                        v-if="customerGroupId"\n                        v-model:value="technicalUrl"\n                        name="sw-field--technicalUrl"\n                        :label="$tc(\'sw-settings-customer-group.registration.technicalUrl\')"\n                        :copyable="true"\n                        :disabled="true"\n                        :help-text="$tc(\'sw-settings-customer-group.registration.technicalUrlHelpText\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_customer_group_detail_content_registration_url_card_seo_url %}\n                    <div\n                        v-for="seoUrl in seoUrls"\n                        :key="seoUrl.id"\n                    >\n                        \n                        {% block sw_settings_customer_group_detail_content_registration_url_card_seo_url_inner %}\n                        \n                        <sw-text-field\n                            :value="getSeoUrl(seoUrl)"\n                            :label="$tc(\'sw-settings-customer-group.registration.seoUrlLabel\', 0, { salesChannelName: seoUrl.salesChannel.translated.name})"\n                            :copyable="true"\n                            :disabled="true"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_customer_group_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-customer-group-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="customerGroup"\n                        :disabled="!acl.can(\'customer_groups.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[n.getByName("notification"),n.getByName("placeholder"),n.getByName("discard-detail-page-changes")("customerGroup")],props:{customerGroupId:{type:String,required:!1,default:null}},shortcuts:{"SYSTEMKEY+S":{active(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data(){return{isLoading:!1,customerGroup:null,isSaveSuccessful:!1,openSeoModal:!1,registrationTitleError:null,seoUrls:[],customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.customerGroup,"name","")},customerGroupRepository(){return this.repositoryFactory.create("customer_group")},seoUrlRepository(){return this.repositoryFactory.create("seo_url")},seoUrlCriteria(){let e=new o(1,25);if(this.customerGroup?.registrationSalesChannels.length){let t=this.customerGroup.registrationSalesChannels?.getIds();e.addFilter(o.equalsAny("salesChannelId",t))}return e.addFilter(o.equals("pathInfo",`/customer-group-registration/${this.customerGroupId}`)),e.addFilter(o.equals("languageId",Shopware.Context.api.languageId)),e.addFilter(o.equals("isCanonical",!0)),e.addAssociation("salesChannel.domains"),e.addGroupField("seoPathInfo"),e.addGroupField("salesChannelId"),e},entityDescription(){return this.placeholder(this.customerGroup,"name",this.$tc("sw-settings-customer-group.detail.placeholderNewCustomerGroup"))},tooltipSave(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},hasRegistration:{get(){return this.customerGroup&&void 0!==this.customerGroup.registration},set(e){e?this.customerGroup.registration=this.customerGroupRegistrationRepository.create():this.customerGroup.registration=null}},technicalUrl(){return`124c71d524604ccbad6042edce3ac799/customer-group-registration/${this.customerGroupId}#`},...r("customerGroup",["name"]),allowSave(){return this.customerGroup&&this.customerGroup.isNew()?this.acl.can("customer_groups.creator"):this.acl.can("customer_groups.editor")},showCustomFields(){return this.customerGroup&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{customerGroupId(){this.customerGroupId||this.createdComponent()},"customerGroup.registrationTitle"(){this.registrationTitleError=null},"customerGroup.registrationSalesChannels"(){this.loadSeoUrls()}},created(){this.createdComponent()},methods:{createdComponent(){if(this.isLoading=!0,!this.customerGroupId){this.createNotificationError({message:this.$tc("global.notification.notificationLoadingDataErrorMessage")}),this.isLoading=!0;return}this.loadSeoUrls(),this.loadCustomFieldSets();let e=new o(1,25);e.addAssociation("registrationSalesChannels"),this.customerGroupRepository.get(this.customerGroupId,Shopware.Context.api,e).then(e=>{this.customerGroup=e,this.isLoading=!1})},async loadSeoUrls(){if(!this.customerGroup?.registrationSalesChannels?.length){this.seoUrls=[];return}this.seoUrls=await this.seoUrlRepository.search(this.seoUrlCriteria)},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("customer_group").then(e=>{this.customFieldSets=e})},onChangeLanguage(){this.createdComponent()},onCancel(){this.$router.push({name:"sw.settings.customer.group.index"})},getSeoUrl(e){let t="";return e.salesChannel.domains.forEach(s=>{s.languageId===e.languageId&&(t=s.url)}),`${t}/${e.seoPathInfo}`},validateSaveRequest(){return!(Shopware.Context.api.languageId===Shopware.Context.api.systemLanguageId&&this.customerGroup.registrationActive&&a.isEmpty(this.customerGroup.registrationTitle))||(this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),this.registrationTitleError=new i({code:"CUSTOMER_GROUP_REGISTERATION_MISSING_TITLE",detail:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),this.isLoading=!1,this.isSaveSuccessful=!1,!1)},async onSave(){if(this.isSaveSuccessful=!1,this.isLoading=!0,this.validateSaveRequest())try{await this.customerGroupRepository.save(this.customerGroup),await this.loadSeoUrls(),this.isSaveSuccessful=!0}catch(e){this.createNotificationError({message:this.$tc("sw-settings-customer-group.detail.notificationErrorMessage")})}finally{this.isLoading=!1}}}}},615720:function(e,t,s){var n=s(89871);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),s(745346).Z("7330f7c8",n,!0,{})}}]);