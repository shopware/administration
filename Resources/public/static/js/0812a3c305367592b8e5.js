(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[243],{"0T/B":function(i,t,e){var n=e("5OH6");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);(0,e("P8hj").default)("7ab4dc7b",n,!0,{})},"5OH6":function(i,t,e){},nyrF:function(i,t,e){"use strict";e.r(t);var n=e("7yzw"),s=e.n(n),a=e("92Mt"),r=e.n(a);e("0T/B"),t.default={template:'\n{% block sw_first_run_wizard_mailer_local %}\n<div class="sw-first-run-wizard-mailer-local">\n    <sw-loader v-if="isLoading" />\n\n    <h2>{{ $tc(\'sw-first-run-wizard.mailerLocal.headline\') }}</h2>\n\n    <div class="sw-settings-mailer-local">\n        <sw-field\n            v-model="mailerSettings[\'core.mailerSettings.sendMailOptions\']"\n            type="radio"\n            :options="emailSendmailOptions"\n        />\n    </div>\n</div>\n{% endblock %}\n',inject:["systemConfigApiService"],data:function(){return{isLoading:!1,mailerSettings:{"core.mailerSettings.emailAgent":null,"core.mailerSettings.sendMailOptions":null}}},computed:{emailSendmailOptions:function(){return[{value:"-bs",name:this.$tc("sw-settings-mailer.sendmail.sync")},{value:"-t",name:this.$tc("sw-settings-mailer.sendmail.async")}]},buttonConfig:function(){return[{key:"back",label:this.$tc("sw-first-run-wizard.general.buttonBack"),position:"left",variant:null,action:"sw.first.run.wizard.index.mailer.selection",disabled:!1},{key:"configure-later",label:this.$tc("sw-first-run-wizard.general.buttonConfigureLater"),position:"right",variant:null,action:"sw.first.run.wizard.index.paypal.info",disabled:!1},{key:"next",label:this.$tc("sw-first-run-wizard.general.buttonNext"),position:"right",variant:"primary",action:this.saveMailerSettings.bind(this),disabled:!this.requiredFieldsFilled}]},requiredFieldsFilled:function(){return!!this.mailerSettings["core.mailerSettings.emailAgent"]&&!!this.mailerSettings["core.mailerSettings.sendMailOptions"]}},watch:{mailerSettings:{deep:!0,handler:function(){this.updateButtons()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var i=this;return s()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.updateButtons(),i.setTitle(),t.next=4,i.loadMailerSettings();case 4:case"end":return t.stop()}}),t)})))()},updateButtons:function(){this.$emit("buttons-update",this.buttonConfig)},setTitle:function(){this.$emit("frw-set-title",this.$tc("sw-first-run-wizard.mailerLocal.headline"))},loadMailerSettings:function(){var i=this;return s()(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.isLoading=!0,t.next=3,i.systemConfigApiService.getValues("core.mailerSettings");case 3:i.mailerSettings=t.sent,i.mailerSettings["core.mailerSettings.emailAgent"]="local",void 0!==(e=i.mailerSettings["core.mailerSettings.sendMailOptions"])&&""!==e||(i.mailerSettings["core.mailerSettings.sendMailOptions"]="-t"),i.isLoading=!1;case 8:case"end":return t.stop()}}),t)})))()},saveMailerSettings:function(){var i=this;return this.isLoading=!0,this.systemConfigApiService.saveValues(this.mailerSettings).then((function(){i.$emit("frw-redirect","sw.first.run.wizard.index.paypal.info"),i.isLoading=!1})).catch((function(){i.isLoading=!1}))}}}}}]);