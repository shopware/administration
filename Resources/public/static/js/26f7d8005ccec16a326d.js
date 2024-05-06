"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[38433],{38433:function(n,s,e){e.r(s),e.d(s,{default:function(){return t}});let{Mixin:a}=Shopware;var t={template:'\n{% block sw_settings_basic_information_index %}\n<sw-page class="sw-settings-basic-information">\n\n    \n    {% block sw_settings_basic_information_search_bar %}\n    <template #search-bar>\n        <sw-search-bar />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_basic_information_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_basic_information_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_basic_information_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-basic-information.general.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_basic_information_smart_bar_header_amount %}\n            <span\n                v-if="false"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_basic_information_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_basic_information_actions_save %}\n        <sw-button-process\n            class="sw-settings-basic-information__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="isLoading"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click="onSave"\n        >\n            {{ $tc(\'sw-settings-basic-information.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_settings_basic_information_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <sw-system-config\n                v-show="!isLoading"\n                ref="systemConfig"\n                sales-channel-switchable\n                domain="core.basicInformation"\n                @loading-changed="onLoadingChanged"\n            />\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',mixins:[a.getByName("notification")],data(){return{isLoading:!1,isSaveSuccessful:!1}},metaInfo(){return{title:this.$createTitle()}},methods:{saveFinish(){this.isSaveSuccessful=!1},onSave(){this.isSaveSuccessful=!1,this.isLoading=!0,this.$refs.systemConfig.saveAll().then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0}).catch(n=>{this.isLoading=!1,this.createNotificationError({message:n})})},onLoadingChanged(n){this.isLoading=n},abortOnLanguageChange(){return!0},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(n){Shopware.State.commit("context/setApiLanguageId",n),this.$refs.systemConfig.createdComponent()}}}}}]);