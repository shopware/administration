(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[245],{Dv5v:function(t,e,i){var n=i("Ks7O");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("ydqr").default)("4fb361ed",n,!0,{})},Ks7O:function(t,e,i){},bl9p:function(t,e,i){"use strict";i.r(e);var n=i("HZZ/"),r=i.n(n),s=i("hJxD"),a=i.n(s);i("Dv5v"),e.default={template:'\n{% block sw_first_run_wizard_mailer_smtp %}\n<div class="sw-first-run-wizard-mailer-smtp">\n    <sw-loader v-if="isLoading" />\n\n    <h2>{{ $tc(\'sw-first-run-wizard.mailerSmtp.headline\') }}</h2>\n    <sw-settings-mailer-smtp :mailer-settings="mailerSettings" />\n</div>\n{% endblock %}\n',inject:["systemConfigApiService"],data:function(){return{isLoading:!1,mailerSettings:{"core.mailerSettings.emailAgent":null,"core.mailerSettings.host":null,"core.mailerSettings.port":null,"core.mailerSettings.username":null,"core.mailerSettings.password":null,"core.mailerSettings.encryption":"null","core.mailerSettings.authenticationMethod":"null","core.mailerSettings.senderAddress":null,"core.mailerSettings.deliveryAddress":null,"core.mailerSettings.disableDelivery":!1}}},computed:{buttonConfig:function(){return[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.mailer.selection",disabled:!1},{key:"configure-later",label:this.$tc("sw-first-run-wizard.general.buttonConfigureLater"),position:"right",variant:null,action:"sw.first.run.wizard.index.paypal.info",disabled:!1},{key:"next",label:this.$tc("sw-first-run-wizard.general.buttonNext"),position:"right",variant:"primary",action:this.saveMailerSettings.bind(this),disabled:!this.requiredFieldsFilled}]},requiredFieldsFilled:function(){return!!this.mailerSettings["core.mailerSettings.emailAgent"]&&!!this.mailerSettings["core.mailerSettings.host"]&&!!this.mailerSettings["core.mailerSettings.port"]}},watch:{mailerSettings:{deep:!0,handler:function(){this.updateButtons()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var t=this;return r()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.updateButtons(),t.setTitle(),e.next=4,t.loadMailerSettings();case 4:case"end":return e.stop()}}),e)})))()},updateButtons:function(){this.$emit("buttons-update",this.buttonConfig)},setTitle:function(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.mailerSelection.modalTitle"))},loadMailerSettings:function(){var t=this;return r()(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.systemConfigApiService.getValues("core.mailerSettings");case 3:t.mailerSettings=e.sent,t.mailerSettings["core.mailerSettings.emailAgent"]="smtp",t.isLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},saveMailerSettings:function(){var t=this;return this.isLoading=!0,this.systemConfigApiService.saveValues(this.mailerSettings).then((function(){t.$emit("frw-redirect","sw.first.run.wizard.index.paypal.info"),t.isLoading=!1})).catch((function(){t.isLoading=!1}))}}}}}]);