(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[8],{Etqn:function(e,n,t){var o=t("Lnfe");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("P8hj").default)("77cbe451",o,!0,{})},I0tY:function(e){e.exports=JSON.parse('{"sw.customer.detail.base":{"customer":["salutationId","firstName","lastName","email","groupId","salesChannelId","defaultPaymentMethodId","customerNumber","password","vatIds","company","passwordNew","passwordConfirm"]}}')},Lnfe:function(e,n,t){},PMCM:function(e,n,t){"use strict";n.a=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},hWnA:function(e,n,t){"use strict";t.r(n);var o=t("6lmj"),a=t.n(o),r=t("CsSd"),s=t.n(r),c=(t("Etqn"),t("I0tY")),l=t("PMCM");function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){s()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=Shopware,u=m.Mixin,_=m.Defaults,w=Shopware.Component.getComponentHelper().mapPropertyErrors,p=Shopware.Data.Criteria;n.default={template:'\n{% block sw_customer_card %}\n<sw-card\n    class="sw-customer-card"\n    position-identifier="sw-customer"\n    :title="title"\n    :is-loading="isLoading"\n>\n    \n    {% block sw_customer_card_rows %}\n    <template #grid>\n        <sw-container rows="auto auto">\n            \n            {% block sw_customer_card_row_primary %}\n            <sw-card-section divider="bottom">\n                \n                {% block sw_customer_card_metadata_container %}\n                <sw-container\n                    columns="80px 1fr max-content"\n                    gap="0px 30px"\n                >\n                    \n                    {% block sw_customer_card_avatar %}\n                    <sw-avatar\n                        size="80px"\n                        :source-context="customer"\n                        :first-name="customer.firstName"\n                        :last-name="customer.lastName"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_customer_card_metadata %}\n                    <div class="sw-customer-card__metadata">\n                        \n                        {% block sw_customer_card_metadata_customer_name %}\n                        \n                        {% block sw_custsomer_card_metadata_customer_name_label %}\n                        <template v-if="!editMode">\n                            <div\n                                v-if="customer"\n                                class="sw-customer-card__metadata-customer-name"\n                            >\n                                {{ fullName }}\n                                <sw-label\n                                    v-if="customer.guest"\n                                    appearance="pill"\n                                    size="small"\n                                    class="sw-customer-card__metadata-customer-guest-label"\n                                >\n                                    {{ $tc(\'sw-customer.card.labelGuest\') }}\n                                </sw-label>\n                            </div>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_name_editor %}\n                        <div v-else>\n                            <sw-container\n                                columns="1fr 1fr"\n                                gap="10px"\n                            >\n                                \n                                {% block sw_customer_card_account_type_field %}\n                                <sw-single-select\n                                    {% if VUE3 %}\n                                    v-model:value="customer.accountType"\n                                    {% else %}\n                                    v-model="customer.accountType"\n                                    {% endif %}\n                                    class="sw-customer-card__account-type-select"\n                                    :label="$tc(\'sw-customer.customerType.labelAccountType\')"\n                                    :placeholder="$tc(\'sw-customer.customerType.placeholderAccountType\')"\n                                    :options="accountTypeOptions"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_salutation %}\n                                <sw-entity-single-select\n                                    {% if VUE3 %}\n                                    v-model:value="customer.salutationId"\n                                    {% else %}\n                                    v-model="customer.salutationId"\n                                    {% endif %}\n                                    class="sw-customer-card__salutation-select"\n                                    entity="salutation"\n                                    label-property="displayName"\n                                    :label="$tc(\'sw-customer.card.labelSalutation\')"\n                                    :criteria="salutationCriteria"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_title %}\n                                <sw-text-field\n                                    {% if VUE3 %}\n                                    v-model:value="customer.title"\n                                    {% else %}\n                                    v-model="customer.title"\n                                    {% endif %}\n                                    :label="$tc(\'sw-customer.card.labelTitle\')"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderTitle\')"\n                                />\n                                {% endblock %}\n                            </sw-container>\n\n                            <sw-container\n                                columns="1fr 1fr"\n                                gap="10px"\n                            >\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_first_name %}\n                                <sw-text-field\n                                    {% if VUE3 %}\n                                    v-model:value="customer.firstName"\n                                    {% else %}\n                                    v-model="customer.firstName"\n                                    {% endif %}\n                                    :label="$tc(\'sw-customer.card.labelFirstName\')"\n                                    validation="required"\n                                    required\n                                    :error="customerFirstNameError"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderFirstName\')"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_customer_card_metadata_customer_name_editor_last_name %}\n                                <sw-text-field\n                                    {% if VUE3 %}\n                                    v-model:value="customer.lastName"\n                                    {% else %}\n                                    v-model="customer.lastName"\n                                    {% endif %}\n                                    :label="$tc(\'sw-customer.card.labelLastName\')"\n                                    validation="required"\n                                    required\n                                    :error="customerLastNameError"\n                                    :placeholder="$tc(\'sw-customer.card.placeholderLastName\')"\n                                />\n                                {% endblock %}\n                            </sw-container>\n\n                            \n                            {% block sw_customer_card_metadata_customer_name_editor_company %}\n                            <sw-text-field\n                                {% if VUE3 %}\n                                v-model:value="customer.company"\n                                {% else %}\n                                v-model="customer.company"\n                                {% endif %}\n                                :required="isBusinessAccountType"\n                                :error="customerCompanyError"\n                                :label="$tc(\'sw-customer.card.labelCompany\')"\n                                :placeholder="$tc(\'sw-customer.card.placeholderCompany\')"\n                            />\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_vat_ids %}\n                        <sw-text-field\n                            v-if="editMode && isBusinessAccountType"\n                            {% if VUE3 %}\n                            v-model:value="customer.vatIds[0]"\n                            {% else %}\n                            v-model="customer.vatIds[0]"\n                            {% endif %}\n                            name="vatId"\n                            :label="$tc(\'sw-customer.card.labelVatId\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderVatId\')"\n                            :error="customerVatIdsError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_email %}\n                        \n                        {% block sw_customer_card_metadata_customer_email_label %}\n                        <div\n                            v-if="customer.email && !editMode"\n                            class="sw-customer-card__metadata-item "\n                        >\n                            <a\n                                class="sw-customer-card-email-link"\n                                :href="getMailTo(customer.email)"\n                            >{{ customer.email }}</a>\n                        </div>\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_email_editor %}\n                        <sw-email-field\n                            v-else\n                            {% if VUE3 %}\n                            v-model:value="customer.email"\n                            {% else %}\n                            v-model="customer.email"\n                            {% endif %}\n                            validation="required"\n                            required\n                            :label="$tc(\'sw-customer.card.labelEmail\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderEmail\')"\n                            :error="customerEmailError"\n                        />\n                        {% endblock %}\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_password %}\n                        <sw-password-field\n                            v-if="editMode"\n                            {% if VUE3 %}\n                            v-model:value="customer.passwordNew"\n                            {% else %}\n                            v-model="customer.passwordNew"\n                            {% endif %}\n                            autocomplete="new-password"\n                            :disabled="customer.guest"\n                            :label="$tc(\'sw-profile.index.labelNewPassword\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderNewPassword\')"\n                            :error="customerPasswordError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_password_confirm %}\n                        <sw-password-field\n                            v-if="editMode"\n                            {% if VUE3 %}\n                            v-model:value="customer.passwordConfirm"\n                            {% else %}\n                            v-model="customer.passwordConfirm"\n                            {% endif %}\n                            autocomplete="new-password"\n                            :disabled="customer.guest"\n                            :label="$tc(\'sw-profile.index.labelNewPasswordConfirm\')"\n                            :placeholder="$tc(\'sw-customer.card.placeholderNewPasswordConfirm\')"\n                            :error="customerPasswordConfirmError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_customer_tag %}\n                        <sw-entity-tag-select\n                            {% if VUE3 %}\n                            v-model:entityCollection="customer.tags"\n                            {% else %}\n                            v-model="customer.tags"\n                            {% endif %}\n                            :label="editMode ? $tc(\'sw-customer.baseForm.labelTags\') : \'\'"\n                            class="sw-customer-card__tag-select"\n                            :disabled="!editMode"\n                            :size="editMode ? \'default\' : \'medium\'"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_metadata_additional %}\n                        <slot name="metadata-additional">\n                            \n                            {% block sw_customer_card_slot_metadata_additional %}{% endblock %}\n                        </slot>\n                        {% endblock %}\n\n                        \n                        {% block sw_customer_card_actions %}\n                        <div\n                            v-if="hasActionSlot"\n                            class="sw-customer-card__actions"\n                        >\n                            <slot name="actions">\n                                \n                                {% block sw_customer_card_slot_actions %}{% endblock %}\n                            </slot>\n                        </div>\n                        {% endblock %}\n                    </div>\n\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n            </sw-card-section>\n            {% endblock %}\n\n            \n            {% block sw_customer_card_row_secondary %}\n            <sw-card-section\n                secondary\n                slim\n            >\n                <slot name="default">\n                    \n                    {% block sw_customer_card_slot_default %}{% endblock %}\n                </slot>\n            </sw-card-section>\n            {% endblock %}\n        </sw-container>\n    </template>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[u.getByName("salutation")],props:{customer:{type:Object,required:!0},title:{type:String,required:!0},editMode:{type:Boolean,required:!1,default:!1},isLoading:{type:Boolean,required:!1,default:!1}},computed:i(i({hasActionSlot:function(){var e;return!(null===(e=this.$slots.actions)||void 0===e||!e[0])},hasAdditionalDataSlot:function(){var e;return!(null===(e=this.$slots["data-additional"])||void 0===e||!e[0])},hasSummarySlot:function(){var e;return!(null===(e=this.$slots.summary)||void 0===e||!e[0])},moduleColor:function(){return this.$route.meta.$module?this.$route.meta.$module.color:""},fullName:function(){var e={name:this.salutation(this.customer),company:this.customer.company};return Object.values(e).filter((function(e){return null!==e})).join(" - ").trim()},salutationCriteria:function(){var e=new p(1,25);return e.addFilter(p.not("or",[p.equals("id",_.defaultSalutationId)])),e}},w("customer",a()(c["sw.customer.detail.base"].customer))),{},{accountTypeOptions:function(){return[{value:l.a.ACCOUNT_TYPE_PRIVATE,label:this.$tc("sw-customer.customerType.labelPrivate")},{value:l.a.ACCOUNT_TYPE_BUSINESS,label:this.$tc("sw-customer.customerType.labelBusiness")}]},isBusinessAccountType:function(){var e;return(null===(e=this.customer)||void 0===e?void 0:e.accountType)===l.a.ACCOUNT_TYPE_BUSINESS}}),watch:{"customer.accountType":function(e){e!==l.a.ACCOUNT_TYPE_BUSINESS&&this.customerCompanyError&&Shopware.State.dispatch("error/removeApiError",{expression:"customer.".concat(this.customer.id,".company")})}},methods:{getMailTo:function(e){return"mailto:".concat(e)}}}}}]);
//# sourceMappingURL=b29012e70cbaa5f3475f.js.map