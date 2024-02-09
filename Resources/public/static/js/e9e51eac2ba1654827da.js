(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[244],{"78/b":function(n,t,i){var e=i("8aMd");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,i("P8hj").default)("68f0303c",e,!0,{})},"8aMd":function(n,t,i){},Bw1O:function(n,t,i){"use strict";i.r(t);var e=i("7yzw"),s=i.n(e),r=i("92Mt"),a=i.n(r);i("78/b"),t.default={template:'\n{% block sw_first_run_wizard_mailer_selection %}\n<div class="sw-first-run-wizard-mailer-selection">\n    <sw-loader v-if="isLoading" />\n\n    <img\n        class="sw-first-run-wizard-mailer-selection__illustration"\n        :src="assetFilter(\'/administration/static/img/first-run-wizard/mailer-selection.svg\')"\n        alt=""\n    >\n\n    <h4 class="sw-first-run-wizard-mailer-selection__headline">\n        <strong>\n            {{ $tc(\'sw-first-run-wizard.mailerSelection.headline\') }}\n        </strong>\n    </h4>\n    <p>\n        {{ $tc(\'sw-first-run-wizard.mailerSelection.description\') }}\n    </p>\n\n    <p class="sw-first-run-wizard-mailer-selection__subline">\n        <strong>\n            {{ $tc(\'sw-first-run-wizard.mailerSelection.chooseSubline\') }}\n        </strong>\n    </p>\n\n    <div class="sw-first-run-wizard-mailer-selection__selections">\n        <div\n            class="sw-first-run-wizard-mailer-selection__selection"\n            :class="{ \'is--selected\': mailAgent === \'local\' }"\n            role="button"\n            tabindex="0"\n            @click="setMailAgent(\'local\')"\n            @keydown.enter="setMailAgent(\'local\')"\n        >\n\n            <sw-help-text\n                class="sw-first-run-wizard-mailer-selection__help-text"\n                :text="$tc(\'sw-first-run-wizard.mailerSelection.localOptionHelptext\')"\n            />\n\n            <sw-icon\n                name="regular-paper-plane"\n                class="sw-first-run-wizard-mailer-selection__selection-icon"\n            />\n            <p>\n                {{ $tc(\'sw-first-run-wizard.mailerSelection.localOption\') }}\n                <br>\n                <span class="sw-first-run-wizard-mailer-selection__text-light">\n                    {{ $tc(\'sw-first-run-wizard.mailerSelection.localOptionSubline\') }}\n                </span>\n            </p>\n\n        </div>\n\n        <div\n            class="sw-first-run-wizard-mailer-selection__selection"\n            :class="{ \'is--selected\': mailAgent === \'smtp\' }"\n            role="button"\n            tabindex="0"\n            @click="setMailAgent(\'smtp\')"\n            @keydown.enter="setMailAgent(\'smtp\')"\n        >\n\n            <sw-icon\n                name="regular-server"\n                class="sw-first-run-wizard-mailer-selection__selection-icon"\n            />\n            <p>\n                {{ $tc(\'sw-first-run-wizard.mailerSelection.smtpOption\') }}\n            </p>\n\n        </div>\n    </div>\n\n    <p class="sw-first-run-wizard-mailer-selection__note">\n        <span class="sw-first-run-wizard-mailer-selection__text-light">\n            {{ $tc(\'sw-first-run-wizard.mailerSelection.configurationNote\') }}\n        </span>\n    </p>\n</div>\n{% endblock %}\n',inject:["systemConfigApiService"],data:function(){return{mailAgent:null,isLoading:!1}},computed:{nextLabel:function(){return this.$tc("sw-first-run-wizard.general.buttonNext")},buttonConfig:function(){return[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.defaults",disabled:!1},{key:"configure-later",label:this.$tc("sw-first-run-wizard.general.buttonConfigureLater"),position:"right",variant:null,action:"sw.first.run.wizard.index.paypal.info",disabled:!1},{key:"next",label:this.nextLabel,position:"right",variant:"primary",action:this.handleSelection.bind(this),disabled:!this.mailAgent}]},assetFilter:function(){return Shopware.Filter.getByName("asset")}},watch:{buttonConfig:function(){this.updateButtons()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.updateButtons(),this.setTitle()},updateButtons:function(){this.$emit("buttons-update",this.buttonConfig)},setTitle:function(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.mailerSelection.modalTitle"))},handleSelection:function(){var n=this;return s()(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.isLoading=!0,"smtp"===n.mailAgent&&(n.$emit("frw-redirect","sw.first.run.wizard.index.mailer.smtp"),n.isLoading=!1),"local"===n.mailAgent&&(n.$emit("frw-redirect","sw.first.run.wizard.index.mailer.local"),n.isLoading=!1);case 3:case"end":return t.stop()}}),t)})))()},setMailAgent:function(n){this.mailAgent=n}}}}}]);