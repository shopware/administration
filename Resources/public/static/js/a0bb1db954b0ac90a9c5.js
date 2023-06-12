(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[623],{"5yPo":function(n,s,i){"use strict";i.r(s);var e=Shopware.Mixin;s.default={template:'\n{% block sw_settings_login_registration_index %}\n<sw-page class="sw-settings-login-registration">\n\n    \n    {% block sw_settings_login_registration_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_login_registration_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_login_registration_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_login_registration_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-login-registration.general.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_login_registration_smart_bar_header_amount %}\n            <span\n                v-if="false"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_login_registration_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_login_registration_actions_save %}\n        <sw-button-process\n            class="sw-settings-login-registration__save-action"\n            :is-loading="isLoading || systemConfigLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading || systemConfigLoading"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-login-registration.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_login_registration_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="systemConfigLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <div v-show="!systemConfigLoading">\n                \n                {% block sw_setting_login_registration_system_config %}\n                <sw-system-config\n                    ref="systemConfig"\n                    sales-channel-switchable\n                    domain="core.loginRegistration"\n                    @loading-changed="onLoginRegistrationLoadingChanged"\n                />\n                {% endblock %}\n\n                \n                {% block sw_setting_login_registration_system_wide %}\n                <sw-system-config\n                    ref="systemConfigSystemWide"\n                    :sales-channel-switchable="false"\n                    domain="core.systemWideLoginRegistration"\n                    @loading-changed="onSystemWideLoadingChanged"\n                />\n                {% endblock %}\n            </div>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',mixins:[e.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1,coreLoginRegistrationLoading:!1,coreSystemWideLoginRegistrationLoading:!1}},metaInfo:function(){return{title:this.$createTitle()}},computed:{systemConfigLoading:function(){return this.coreLoginRegistrationLoading||this.coreSystemWideLoginRegistrationLoading}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},onSave:function(){var n=this;this.isSaveSuccessful=!1,this.isLoading=!0,Promise.all([this.$refs.systemConfig.saveAll(),this.$refs.systemConfigSystemWide.saveAll()]).then((function(){n.isLoading=!1,n.isSaveSuccessful=!0})).catch((function(s){n.isLoading=!1,n.createNotificationError({message:s})}))},onLoginRegistrationLoadingChanged:function(n){this.coreLoginRegistrationLoading=n},onSystemWideLoadingChanged:function(n){this.coreSystemWideLoginRegistrationLoading=n}}}}}]);