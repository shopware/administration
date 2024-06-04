(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[62147],{821187:function(){},662147:function(t,i,e){"use strict";e.r(i),e.d(i,{default:function(){return s}}),e(896517);var s={template:'\n{% block sw_first_run_wizard_mailer_smtp %}\n<div class="sw-first-run-wizard-mailer-smtp">\n    <sw-loader v-if="isLoading" />\n\n    <h2>{{ $tc(\'sw-first-run-wizard.mailerSmtp.headline\') }}</h2>\n    <sw-settings-mailer-smtp :mailer-settings="mailerSettings" />\n</div>\n{% endblock %}\n',inject:["systemConfigApiService"],data(){return{isLoading:!1,mailerSettings:{"core.mailerSettings.emailAgent":null,"core.mailerSettings.host":null,"core.mailerSettings.port":null,"core.mailerSettings.username":null,"core.mailerSettings.password":null,"core.mailerSettings.encryption":"null","core.mailerSettings.authenticationMethod":"null","core.mailerSettings.senderAddress":null,"core.mailerSettings.deliveryAddress":null,"core.mailerSettings.disableDelivery":!1}}},computed:{buttonConfig(){return[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.mailer.selection",disabled:!1},{key:"configure-later",label:this.$tc("sw-first-run-wizard.general.buttonConfigureLater"),position:"right",variant:null,action:"sw.first.run.wizard.index.paypal.info",disabled:!1},{key:"next",label:this.$tc("sw-first-run-wizard.general.buttonNext"),position:"right",variant:"primary",action:this.saveMailerSettings.bind(this),disabled:!this.requiredFieldsFilled}]},requiredFieldsFilled(){return!!this.mailerSettings["core.mailerSettings.emailAgent"]&&!!this.mailerSettings["core.mailerSettings.host"]&&!!this.mailerSettings["core.mailerSettings.port"]}},watch:{mailerSettings:{deep:!0,handler(){this.updateButtons()}}},created(){this.createdComponent()},methods:{async createdComponent(){this.updateButtons(),this.setTitle(),await this.loadMailerSettings()},updateButtons(){this.$emit("buttons-update",this.buttonConfig)},setTitle(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.mailerSelection.modalTitle"))},async loadMailerSettings(){this.isLoading=!0,this.mailerSettings=await this.systemConfigApiService.getValues("core.mailerSettings"),this.mailerSettings["core.mailerSettings.emailAgent"]="smtp",this.isLoading=!1},saveMailerSettings(){return this.isLoading=!0,this.systemConfigApiService.saveValues(this.mailerSettings).then(()=>{this.$emit("frw-redirect","sw.first.run.wizard.index.paypal.info"),this.isLoading=!1}).catch(()=>{this.isLoading=!1})}}}},896517:function(t,i,e){var s=e(821187);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),e(745346).Z("06d8cac2",s,!0,{})}}]);