(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[57720],{19586:function(){},57720:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return i}}),e(75020);var i={template:'\n{% block sw_first_run_wizard_modal %}\n<sw-modal\n    :title="title"\n    :variant="variant"\n    :closable="isClosable"\n    class="sw-first-run-wizard-modal"\n    @modal-close="closeModal"\n>\n    \n    {% block sw_first_run_wizard_modal_content %}\n    <div class="sw-first-run-wizard-modal-content">\n        <sw-container\n            :class="{\'one\': !showSteps, \'two\': showSteps}"\n            class="sw-first-run-wizard-modal-content__columns"\n        >\n            \n            {% block sw_first_run_wizard_modal_content_steps %}\n            <div\n                v-if="showSteps"\n                class="sw-first-run-wizard-modal-content__steps"\n            >\n                <sw-step-display\n                    :item-index="stepIndex"\n                    :item-variant="stepVariant"\n                    :initial-item-variants="stepInitialItemVariants"\n                >\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.dataImport\') }}\n                    </sw-step-item>\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.defaults\') }}\n                    </sw-step-item>\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.mailer\') }}\n                    </sw-step-item>\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.setupPaypal\') }}\n                    </sw-step-item>\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.plugins\') }}\n                    </sw-step-item>\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.shopware\') }}\n                    </sw-step-item>\n                    <sw-step-item>\n                        {{ $tc(\'sw-first-run-wizard.stepItemTitle.store\') }}\n                    </sw-step-item>\n                </sw-step-display>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_first_run_wizard_modal_content_page %}\n            <div class="sw-first-run-wizard-modal-content__page">\n                <router-view\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        class="sw-first-run-wizard-modal__component"\n                        @buttons-update="updateButtons"\n                        @frw-redirect="redirect"\n                        @frw-set-title="setTitle"\n                        @frw-finish="finishFRW"\n                        @extension-activated="onExtensionActivated"\n                    />\n                </router-view>\n            </div>\n            {% endblock %}\n\n            <sw-loader\n                v-if="showLoader"\n                class="sw-first-run-wizard-modal__loader"\n            />\n        </sw-container>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_first_run_wizard_modal_footer %}\n    <template #modal-footer>\n        <div class="sw-first-run-wizard-modal__footer">\n            \n            {% block sw_first_run_wizard_modal_footer_left %}\n            <div class="footer-left">\n                <sw-button\n                    v-for="button in buttons.left"\n                    :key="button.key"\n                    :variant="button.variant"\n                    :disabled="button.disabled"\n                    size="small"\n                    @click="onButtonClick(button.action)"\n                >\n                    {{ button.label }}\n                </sw-button>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_first_run_wizard_modal_footer_right %}\n            <div class="footer-right">\n                <sw-button\n                    v-for="button in buttons.right"\n                    :key="button.key"\n                    :variant="button.variant"\n                    :disabled="button.disabled"\n                    size="small"\n                    @click="onButtonClick(button.action)"\n                >\n                    {{ button.label }}\n                </sw-button>\n            </div>\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["firstRunWizardService"],data(){return{title:"No title defined",buttonConfig:[],showLoader:!1,wasNewExtensionActivated:!1,stepVariant:"info",currentStep:{name:"",variant:"large",navigationIndex:0},stepper:{welcome:{name:"sw.first.run.wizard.index.welcome",variant:"large",navigationIndex:0},"data-import":{name:"sw.first.run.wizard.index.data-import",variant:"large",navigationIndex:1},defaults:{name:"sw.first.run.wizard.index.defaults",variant:"large",navigationIndex:2},"mailer.selection":{name:"sw.first.run.wizard.index.mailer.selection",variant:"large",navigationIndex:3},"mailer.smtp":{name:"sw.first.run.wizard.index.mailer.smtp",variant:"large",navigationIndex:3},"mailer.local":{name:"sw.first.run.wizard.index.mailer.local",variant:"large",navigationIndex:3},"paypal.info":{name:"sw.first.run.wizard.index.paypal.info",variant:"large",navigationIndex:4},"paypal.credentials":{name:"sw.first.run.wizard.index.paypal.credentials",variant:"large",navigationIndex:4},plugins:{name:"sw.first.run.wizard.index.plugins",variant:"large",navigationIndex:5},"shopware.account":{name:"sw.first.run.wizard.index.shopware.account",variant:"large",navigationIndex:6},"shopware.domain":{name:"sw.first.run.wizard.index.shopware.domain",variant:"large",navigationIndex:6},store:{name:"sw.first.run.wizard.index.store",variant:"large",navigationIndex:7},finish:{name:"sw.first.run.wizard.index.finish",variant:"large",navigationIndex:8}}}},metaInfo(){return{title:this.title}},computed:{columns(){return this.showSteps?"1fr 4fr":"1fr"},variant(){let{variant:t}=this.currentStep;return t},showSteps(){let{navigationIndex:t}=this.currentStep;return 0!==t},buttons(){return{right:this.buttonConfig.filter(t=>"right"===t.position),left:this.buttonConfig.filter(t=>"left"===t.position)}},stepIndex(){let{navigationIndex:t}=this.currentStep;return t<1?0:t-1},stepInitialItemVariants(){let{navigationIndex:t}=this.currentStep,n=Array(Object.values(this.stepper).reduce((t,n)=>Math.max(t,n.navigationIndex),0)+1).fill("disabled");return n.every((e,i)=>!(i>t)&&(n[i]="info",i>0&&(n[i-1]="success"),!0)),n.splice(0,1),n},isClosable(){return!Shopware.Context.app.firstRunWizard}},watch:{$route(t){this.handleRouteUpdate(t)}},mounted(){let t=this.$route.name.replace("sw.first.run.wizard.index.","");this.currentStep=this.stepper[t]},created(){this.createdComponent()},methods:{handleRouteUpdate(t){let n=t.name.replace("sw.first.run.wizard.index.","");this.currentStep=this.stepper[n]},createdComponent(){this.firstRunWizardService.setFRWStart()},updateButtons(t){this.buttonConfig=t},onButtonClick(t){if("string"==typeof t){this.redirect(t);return}"function"==typeof t&&t.call()},redirect(t){this.$router.push({name:t})},setTitle(t){this.title=t},finishFRW(){this.firstRunWizardService.setFRWFinish().then(()=>{document.location.href=document.location.origin+document.location.pathname})},onExtensionActivated(){this.wasNewExtensionActivated=!0},async closeModal(){this.isClosable&&(this.showLoader=!0,await this.$nextTick(),await this.$router.push({name:"sw.settings.index.system"}),this.wasNewExtensionActivated&&window.location.reload())}}}},75020:function(t,n,e){var i=e(19586);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),e(45346).Z("afcb0c94",i,!0,{})}}]);