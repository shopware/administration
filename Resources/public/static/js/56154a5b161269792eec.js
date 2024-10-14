(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74212],{834036:function(){},374212:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return i}}),n(487151);var i={template:'\n{% block sw_settings_mailer_index %}\n<sw-page class="sw-settings-mailer">\n\n    \n    {% block sw_settings_mailer_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_mailer_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_mailer_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-mailer.general.textHeadline\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_mailer_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_mailer_actions_save %}\n        <sw-button-process\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            variant="primary"\n            @update:process-success="onSaveFinish"\n            @click="saveMailerSettings"\n        >\n            {{ $tc(\'sw-settings-mailer.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_mailer_content %}\n    <template #content>\n        <sw-card-view>\n            <sw-skeleton v-if="isLoading" />\n\n            <sw-card\n                v-else\n                position-identifier="sw-settings-mailer-configuration"\n                :is-loading="isLoading"\n                :title="$tc(\'sw-settings-mailer.mailer-configuration.card-title\')"\n            >\n\n                \n                {% block sw_settings_mailer_first_configuration %}\n                <div\n                    v-if="isFirstConfiguration"\n                    class="sw-settings-mailer__first-configuration"\n                >\n                    \n                    {% block sw_settings_mailer_first_configuration_headline %}\n                    <h4 class="sw-settings-mailer__headline">\n                        <strong>\n                            {{ $tc(\'sw-settings-mailer.first-configuration.headline\') }}\n                        </strong>\n                    </h4>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_mailer_first_configuration_description %}\n                    <p>\n                        {{ $tc(\'sw-settings-mailer.first-configuration.description\') }}\n                    </p>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_settings_mailer_headline_agent %}\n                <p class="sw-settings-mailer__headline">\n                    {{ $tc(\'sw-settings-mailer.mailer-configuration.agent\') }}\n                </p>\n                {% endblock %}\n\n                <div class="sw-settings-mailer__radio-selection">\n                    \n                    {% block sw_settings_mailer_agent_options %}\n                    <sw-select-field\n                        v-model:value="mailerSettings[\'core.mailerSettings.emailAgent\']"\n                    >\n                        <option value="local">\n                            {{ $tc(\'sw-settings-mailer.mailer-configuration.local-agent\') }}\n                        </option>\n                        <option value="smtp">\n                            {{ $tc(\'sw-settings-mailer.mailer-configuration.smtp-server\') }}\n                        </option>\n                        <option value="">\n                            {{ $tc(\'sw-settings-mailer.mailer-configuration.env-file\') }}\n                        </option>\n                    </sw-select-field>\n\n                    <sw-radio-field\n                        v-if="mailerSettings[\'core.mailerSettings.emailAgent\'] === \'local\'"\n                        v-model:value="mailerSettings[\'core.mailerSettings.sendMailOptions\']"\n                        :options="emailSendmailOptions"\n                    />\n                    {% endblock %}\n                </div>\n\n                <p v-html="$tc(\'sw-settings-mailer.helpText\')"></p>\n                <sw-switch-field\n                    v-if="!isSmtpMode"\n                    v-model:value="mailerSettings[\'core.mailerSettings.disableDelivery\']"\n                    size="small"\n                    :label="$tc(\'sw-settings-mailer.card-smtp.disable-delivery\')"\n                />\n            </sw-card>\n\n            \n            {% block sw_settings_mailer_smtp %}\n            <sw-card\n                v-if="isSmtpMode"\n                position-identifier="sw-settings-mailer-smtp-settings"\n                :is-loading="isLoading"\n                title="SMTP server"\n                class="sw-settings-mailer__input-fields"\n            >\n\n                \n                {% block sw_settings_mailer_smtp_settings %}\n                <sw-settings-mailer-smtp\n                    :mailer-settings="mailerSettings"\n                    :host-error="smtpHostError"\n                    :port-error="smtpPortError"\n                    @host-changed="resetSmtpHostError"\n                    @port-changed="resetSmtpPortError"\n                />\n                {% endblock %}\n\n            </sw-card>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["systemConfigApiService"],mixins:["notification"],data(){return{isLoading:!0,isSaveSuccessful:!1,isFirstConfiguration:!1,mailerSettings:{"core.mailerSettings.emailAgent":null,"core.mailerSettings.host":null,"core.mailerSettings.port":null,"core.mailerSettings.username":null,"core.mailerSettings.password":null,"core.mailerSettings.encryption":"null","core.mailerSettings.senderAddress":null,"core.mailerSettings.deliveryAddress":null,"core.mailerSettings.disableDelivery":!1},smtpHostError:null,smtpPortError:null}},metaInfo(){return{title:this.$createTitle()}},computed:{emailSendmailOptions(){return[{value:"-bs",name:this.$tc("sw-settings-mailer.sendmail.sync")},{value:"-t -i",name:this.$tc("sw-settings-mailer.sendmail.async")}]},isSmtpMode(){return"smtp"===this.mailerSettings["core.mailerSettings.emailAgent"]}},created(){this.createdComponent()},methods:{async createdComponent(){await this.loadPageContent()},async loadPageContent(){await this.loadMailerSettings(),this.checkFirstConfiguration()},async loadMailerSettings(){this.isLoading=!0,this.mailerSettings=await this.systemConfigApiService.getValues("core.mailerSettings"),0===Object.keys(this.mailerSettings).length&&(this.mailerSettings={"core.mailerSettings.emailAgent":"","core.mailerSettings.sendMailOptions":"-t -i"}),this.isLoading=!1},async saveMailerSettings(){if(this.isLoading=!0,""===this.mailerSettings["core.mailerSettings.emailAgent"]&&(this.mailerSettings["core.mailerSettings.emailAgent"]=null),this.isSmtpMode&&this.validateSmtpConfiguration(),null!==this.smtpHostError||null!==this.smtpPortError){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-settings-mailer.card-smtp.error.notificationMessage")}),this.isLoading=!1;return}await this.systemConfigApiService.saveValues(this.mailerSettings),this.isLoading=!1},async onSaveFinish(){await this.loadPageContent()},checkFirstConfiguration(){this.isFirstConfiguration=!this.mailerSettings["core.mailerSettings.emailAgent"]},validateSmtpConfiguration(){this.smtpHostError=this.mailerSettings["core.mailerSettings.host"]?null:{detail:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")},this.smtpPortError="number"!=typeof this.mailerSettings["core.mailerSettings.port"]?{detail:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")}:null},resetSmtpHostError(){this.smtpHostError=null},resetSmtpPortError(){this.smtpPortError=null}}}},487151:function(t,e,n){var i=n(834036);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),n(745346).Z("5e192eb9",i,!0,{})}}]);