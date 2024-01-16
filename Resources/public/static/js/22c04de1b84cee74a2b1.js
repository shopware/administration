(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[9],{"8Kvp":function(e,t,n){"use strict";n.r(t);var s=n("7yzw"),r=n.n(s),o=n("CsSd"),a=n.n(o),i=n("92Mt"),c=n.n(i),u=(n("n++L"),n("I0tY")),d=n("PMCM");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}var m=Shopware.Mixin,p=Shopware.Data.Criteria,w=Shopware.Classes.ShopwareError,f=Shopware.Component.getComponentHelper().mapPageErrors;t.default={template:'\n{% block sw_customer_detail %}\n<sw-page class="sw-customer-detail">\n    \n    {% block sw_customer_detail_header %}\n    <template\n        v-if="!isLoading"\n        #smart-bar-header\n    >\n        <h2>\n            {{ salutation(customer) }}\n        </h2>\n        <sw-label\n            v-if="customer?.createdById"\n            appearance="pill"\n            size="small"\n            class="sw-customer-detail__created-by-admin-label"\n        >\n            {{ $tc(\'sw-customer.detail.labelCreatedByAdmin\') }}\n        </sw-label>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_customer_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_customer_detail_actions_edit %}\n        <span v-if="!editMode">\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'customer.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-customer-detail__open-edit-mode-action"\n                variant="primary"\n                :disabled="isLoading || !acl.can(\'customer.editor\')"\n                @click.prevent="onActivateCustomerEditMode"\n            >\n                {{ $tc(\'sw-customer.detail.buttonEdit\') }}\n            </sw-button>\n        </span>\n        {% endblock %}\n\n        <span v-else>\n            \n            {% block sw_customer_detail_actions_cancel %}\n            <sw-button\n                :disabled="isLoading"\n                @click="onAbortButtonClick"\n            >\n                {{ $tc(\'sw-customer.detail.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_actions_save %}\n            <sw-button-process\n                class="sw-customer-detail__save-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                :disabled="isLoading"\n                variant="primary"\n                {% if VUE3 %}\n                @update:process-success="saveFinish"\n                {% else %}\n                @process-finish="saveFinish"\n                {% endif %}\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-customer.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n        </span>\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            :abort-change-function="abortOnLanguageChange"\n            :save-changes-function="saveOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_customer_detail_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_customer_detail_content_customer_group_registration %}\n            <div class="sw-customer-detail__customer-registration-alert">\n                <sw-alert\n                    v-if="customer && customer.requestedGroup"\n                    variant="info"\n                >\n                    \n                    {% block sw_customer_detail_content_customer_group_registration_content %}\n                    <div class="sw-customer-detail__customer-registration-alert-text">\n                        \n                        {% block sw_customer_detail_content_customer_group_registration_message %}\n                        {{ $tc(\'sw-customer.customerGroupRegistration.alert\', 0, { name: customer.requestedGroup.translated.name }) }}\n                        {% endblock %}\n                    </div>\n                    <div class="sw-customer-detail__customer-registration-alert-actions">\n                        \n                        {% block sw_customer_detail_content_customer_group_registration_actions %}\n                        <sw-button\n                            variant="danger"\n                            size="small"\n                            @click="declineCustomerGroupRegistration"\n                        >\n                            {{ $tc(\'sw-customer.customerGroupRegistration.decline\') }}\n                        </sw-button>\n\n                        <sw-button\n                            variant="primary"\n                            size="small"\n                            @click="acceptCustomerGroupRegistration"\n                        >\n                            {{ $tc(\'sw-customer.customerGroupRegistration.accept\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </sw-alert>\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_content_tabs %}\n            <sw-tabs\n                class="sw-customer-detail-page__tabs"\n                position-identifier="sw-customer-detail-tabs"\n            >\n                \n                {% block sw_customer_detail_content_tab_general %}\n                <sw-tabs-item\n                    class="sw-customer-detail__tab-general"\n                    :route="generalRoute"\n                    :title="$tc(\'sw-customer.detail.tabGeneral\')"\n                    :has-error="swCustomerDetailBaseError"\n                >\n                    {{ $tc(\'sw-customer.detail.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_customer_detail_content_tab_addresses %}\n                <sw-tabs-item\n                    class="sw-customer-detail__tab-addresses"\n                    :route="addressesRoute"\n                    :title="$tc(\'sw-customer.detail.tabAddresses\')"\n                >\n                    {{ $tc(\'sw-customer.detail.tabAddresses\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_customer_detail_content_tab_order %}\n                <sw-tabs-item\n                    class="sw-customer-detail__tab-order"\n                    :route="ordersRoute"\n                    :title="$tc(\'sw-customer.detailBase.labelOrderCard\')"\n                >\n                    {{ $tc(\'sw-customer.detailBase.labelOrderCard\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_customer_detail_content_tab_after %}{% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_customer_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            {% if VUE3 %}\n            <router-view\n                v-if="customer"\n                v-slot="{ Component }"\n            >\n                {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n                <component\n                    :is="Component"\n                    v-show="!isLoading"\n                    :customer="customer"\n                    :customer-edit-mode="editMode"\n                />\n            </router-view>\n            {% else %}\n            <router-view\n                v-if="customer"\n                v-show="!isLoading"\n                :customer="customer"\n                :customer-edit-mode="editMode"\n            />\n            {% endif %}\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","customerGroupRegistrationService","acl","customerValidationService"],mixins:[m.getByName("notification"),m.getByName("salutation"),m.getByName("discard-detail-page-changes")("customer")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onAbortButtonClick"},props:{customerId:{type:String,required:!0}},data:function(){return{isLoading:!1,isSaveSuccessful:!1,customer:null,customerAddressCustomFieldSets:[],customerCustomFieldSets:[],errorEmailCustomer:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({identifier:function(){return null!==this.customer?this.salutation(this.customer):""},customerRepository:function(){return this.repositoryFactory.create("customer")},editMode:{get:function(){return"boolean"==typeof this.$route.query.edit?this.$route.query.edit:"true"===this.$route.query.edit},set:function(e){this.$router.push({name:this.$route.name,query:{edit:e}})}},defaultCriteria:function(){var e=new p(1,25);return e.addAssociation("addresses").addAssociation("group").addAssociation("salutation").addAssociation("salesChannel").addAssociation("defaultPaymentMethod").addAssociation("lastPaymentMethod").addAssociation("defaultBillingAddress.country").addAssociation("defaultBillingAddress.countryState").addAssociation("defaultBillingAddress.salutation").addAssociation("defaultShippingAddress.country").addAssociation("defaultShippingAddress.countryState").addAssociation("defaultShippingAddress.salutation").addAssociation("tags").addAssociation("requestedGroup"),e.getAssociation("addresses").addSorting(p.sort("firstName"),"ASC",!1),e},generalRoute:function(){return{name:"sw.customer.detail.base",params:{id:this.customerId},query:{edit:this.editMode}}},addressesRoute:function(){return{name:"sw.customer.detail.addresses",params:{id:this.customerId},query:{edit:this.editMode}}},ordersRoute:function(){return{name:"sw.customer.detail.order",params:{id:this.customerId},query:{edit:this.editMode}}},emailHasChanged:function(){var e=this.customer.getOrigin();return!(!this.customer.isNew()&&e.email)||e.email!==this.customer.email},validCompanyField:function(){var e;return this.customer.accountType!==d.a.ACCOUNT_TYPE_BUSINESS||(null===(e=this.customer.company)||void 0===e?void 0:e.trim().length)},salutationRepository:function(){return this.repositoryFactory.create("salutation")},salutationCriteria:function(){var e=new p(1,1);return e.addFilter(p.equals("salutationKey","not_specified")),e}},f(u)),watch:{customerId:function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{loadCustomer:function(){var e=this;return r()(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getDefaultSalutation();case 2:n=t.sent,Shopware.ExtensionAPI.publishData({id:"sw-customer-detail__customer",path:"customer",scope:e}),e.isLoading=!0,e.customerRepository.get(e.customerId,Shopware.Context.api,e.defaultCriteria).then((function(t){var s,r;e.customer=t,null!==(s=e.customer)&&void 0!==s&&s.salutationId||(e.customer.salutationId=n),null===(r=e.customer.addresses)||void 0===r||r.map((function(e){return e.salutationId||(e.salutationId=n),e})),e.isLoading=!1}));case 6:case"end":return t.stop()}}),t)})))()},createdComponent:function(){var e=this;return r()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadCustomer();case 2:case"end":return t.stop()}}),t)})))()},saveFinish:function(){this.isSaveSuccessful=!1,this.editMode=!1,this.createdComponent(),this.isLoading=!1},validateEmail:function(){var e=this,t=this.customer,n=t.id,s=t.email,r=t.boundSalesChannelId;return this.customerValidationService.checkCustomerEmail({id:n,email:s,boundSalesChannelId:r}).then((function(t){return e.errorEmailCustomer&&Shopware.State.dispatch("error/addApiError",{expression:"customer.".concat(e.customer.id,".email"),error:null}),t})).catch((function(t){e.emailIsValid=!1,Shopware.State.dispatch("error/addApiError",{expression:"customer.".concat(e.customer.id,".email"),error:new w(t.response.data.errors[0])})}))},onSave:function(){var e=this;return r()(c.a.mark((function t(){var n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoading=!0,e.editMode){t.next=3;break}return t.abrupt("return",!1);case 3:if(n=!1,!e.customer.email||!e.emailHasChanged){t.next=9;break}return t.next=7,e.validateEmail();case 7:(s=t.sent)&&s.isValid||(n=!0);case 9:return e.validCompanyField||(e.createErrorMessageForCompanyField(),n=!0),t.next=12,e.validPassword(e.customer);case 12:if(t.sent){t.next=14;break}n=!0;case 14:if(!n){t.next=18;break}return e.createNotificationError({message:e.$tc("sw-customer.detail.messageSaveError")}),e.isLoading=!1,t.abrupt("return",!1);case 18:return e.isSaveSuccessful=!1,e.customer.birthday||(e.customer.birthday=null),e.customer.passwordNew&&(e.customer.password=e.customer.passwordNew),e.customer.accountType===d.a.ACCOUNT_TYPE_PRIVATE&&(e.customer.vatIds=[]),t.abrupt("return",e.customerRepository.save(e.customer).then((function(){e.isSaveSuccessful=!0,e.createNotificationSuccess({message:e.$tc("sw-customer.detail.messageSaveSuccess",0,{name:"".concat(e.customer.firstName," ").concat(e.customer.lastName)})})})).catch((function(t){throw e.createNotificationError({message:e.$tc("sw-customer.detail.messageSaveError")}),e.isLoading=!1,t})));case 23:case"end":return t.stop()}}),t)})))()},onAbortButtonClick:function(){var e=this;return r()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.discardChanges(),e.editMode=!1,t.next=4,e.loadCustomer();case 4:case"end":return t.stop()}}),t)})))()},onActivateCustomerEditMode:function(){this.editMode=!0},abortOnLanguageChange:function(){return this.customerRepository.hasChanges(this.customer)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(e){Shopware.State.commit("context/setApiLanguageId",e),this.createdComponent()},validPassword:function(e){var t=this;return r()(c.a.mark((function n(){var s,r,o;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=e.passwordNew,r=e.passwordConfirm,o=s!==r,!(s||r)||!o){n.next=6;break}return Shopware.State.dispatch("error/addApiError",{expression:"customer.".concat(t.customer.id,".passwordConfirm"),error:new w({detail:t.$tc("sw-customer.error.passwordDoNotMatch"),code:"password_not_match"})}),n.abrupt("return",!1);case 6:return n.abrupt("return",!0);case 7:case"end":return n.stop()}}),n)})))()},acceptCustomerGroupRegistration:function(){var e=this;this.customerGroupRegistrationService.accept(this.customer.id).then((function(){e.createNotificationSuccess({message:e.$tc("sw-customer.customerGroupRegistration.acceptMessage")})})).catch((function(){e.createNotificationError({message:e.$tc("sw-customer.customerGroupRegistration.errorMessage")})})).finally((function(){e.createdComponent()}))},declineCustomerGroupRegistration:function(){var e=this;this.customerGroupRegistrationService.decline(this.customer.id).then((function(){e.createNotificationSuccess({message:e.$tc("sw-customer.customerGroupRegistration.declineMessage")})})).catch((function(){e.createNotificationError({message:e.$tc("sw-customer.customerGroupRegistration.errorMessage")})})).finally((function(){e.createdComponent()}))},createErrorMessageForCompanyField:function(){this.isLoading=!1,Shopware.State.dispatch("error/addApiError",{expression:"customer.".concat(this.customer.id,".company"),error:new w({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})})},getDefaultSalutation:function(){var e=this;return r()(c.a.mark((function t(){var n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.salutationRepository.searchIds(e.salutationCriteria);case 2:return s=t.sent,t.abrupt("return",null===(n=s.data)||void 0===n?void 0:n[0]);case 4:case"end":return t.stop()}}),t)})))()}}}},I0tY:function(e){e.exports=JSON.parse('{"sw.customer.detail.base":{"customer":["salutationId","firstName","lastName","email","groupId","salesChannelId","defaultPaymentMethodId","customerNumber","password","vatIds","company","passwordNew","passwordConfirm"]}}')},PMCM:function(e,t,n){"use strict";t.a=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},"n++L":function(e,t,n){var s=n("rAVL");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n("P8hj").default)("aaa12200",s,!0,{})},rAVL:function(e,t,n){}}]);
//# sourceMappingURL=22c04de1b84cee74a2b1.js.map