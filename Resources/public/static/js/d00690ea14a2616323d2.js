(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[13993],{83452:function(){},13993:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o}}),e(79854);let{Mixin:s}=Shopware;var o={template:'\n{% block sw_settings_payment_sorting_modal %}\n<sw-modal\n    class="sw-settings-payment-sorting-modal"\n    :title="$tc(\'sw-settings-payment.sorting-modal.modalTitle\')"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_settings_payment_sorting_modal_content %}\n    <template #body>\n\n        \n        {% block sw_settings_payment_sorting_modal_content_subtitle %}\n        <div class="sw-modal__body sw-settings-payment-sorting-modal__subtitle">\n            {{ $tc(\'sw-settings-payment.sorting-modal.subTitle\') }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_settings_payment_sorting_modal_content_list %}\n        <div class="sw-modal__body">\n            <sw-sortable-list\n                class="sw-settings-payment-sorting-modal__payment-method-list"\n                :items="sortedPaymentMethods"\n                :scroll-on-drag="true"\n                :scroll-on-drag-conf="scrollOnDragConf"\n                @items-sorted="onSort"\n            >\n                \n                {% block sw_settings_payment_sorting_modal_content_payment_method %}\n                <template #item="{ item: paymentMethod }">\n                    <div\n                        class="sw-settings-payment-sorting-modal__payment-method-list-item"\n                        :class="!paymentMethod.active ? \'is--disabled\' : \'\'"\n                    >\n                        \n                        {% block sw_settings_payment_sorting_modal_content_payment_method_action %}\n                        <sw-icon\n                            class="sw-settings-payment-sorting-modal__payment-method-list-item__action"\n                            name="regular-grip-vertical"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_settings_payment_sorting_modal_content_payment_method_icon %}\n                        <img\n                            v-if="isShopwareDefaultPaymentMethod(paymentMethod)"\n                            class="sw-settings-payment-sorting-modal__payment-method-list-item__icon"\n                            :src="assetFilter(\'/administration/static/img/checkout/shopware_payment_method.svg\')"\n                            alt=""\n                        >\n                        <sw-media-preview-v2\n                            v-else\n                            class="sw-settings-payment-sorting-modal__payment-method-list-item__icon"\n                            :source="paymentMethod.media ? paymentMethod.media : null"\n                        />\n                        {% endblock %}\n                        \n                        {% block sw_settings_payment_sorting_modal_content_payment_method_name %}\n                        <div class="sw-settings-payment-sorting-modal__payment-method-list-item__name">\n                            {{ paymentMethod.translated.distinguishableName }}\n                        </div>\n                        {% endblock %}\n                    </div>\n                </template>\n                {% endblock %}\n            </sw-sortable-list>\n        </div>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_payment_sorting_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_settings_payment_sorting_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-settings-payment-sorting-modal__cancel-button"\n            @click="closeModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_payment_sorting_modal_footer_save_button %}\n        <sw-button-process\n            class="sw-settings-payment-sorting-modal__save-button"\n            variant="primary"\n            :is-loading="isSaving"\n            :disabled="!acl.can(\'category.editor\')"\n            :process-success="false"\n            @click="applyChanges"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n</sw-modal>\n{% endblock %}\n',inject:["acl","repositoryFactory","feature"],mixins:[s.getByName("notification")],props:{paymentMethods:{type:Array,required:!0}},data(){return{isSaving:!1,originalPaymentMethods:[...this.paymentMethods],sortedPaymentMethods:[...this.paymentMethods],scrollOnDragConf:{speed:50,margin:130,accelerationMargin:-10}}},computed:{paymentMethodRepository(){return this.repositoryFactory.create("payment_method")},assetFilter(){return Shopware.Filter.getByName("asset")}},methods:{closeModal(){this.$emit("modal-close")},applyChanges(){return this.isSaving=!0,this.sortedPaymentMethods.map((t,n)=>(t.position=n+1,t)),this.paymentMethodRepository.saveAll(this.sortedPaymentMethods,Shopware.Context.api).then(()=>{this.isSaving=!1,this.$emit("modal-close"),this.$emit("modal-save"),this.createNotificationSuccess({message:this.$tc("sw-settings-payment.sorting-modal.saveSuccessful")})}).catch(()=>{this.createNotificationError({message:this.$tc("sw-settings-payment.sorting-modal.errorMessage")})})},onSort(t){this.sortedPaymentMethods=t},isShopwareDefaultPaymentMethod(t){return["Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\DebitPayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\InvoicePayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\CashPayment","Shopware\\Core\\Checkout\\Payment\\Cart\\PaymentHandler\\PrePayment"].includes(t.handlerIdentifier)}}}},79854:function(t,n,e){var s=e(83452);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),e(45346).Z("566aee2e",s,!0,{})}}]);