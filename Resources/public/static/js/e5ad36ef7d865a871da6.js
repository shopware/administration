(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[98189],{651624:function(){},898189:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return l}}),s(725010);var d=s(974071);let{Defaults:t,EntityDefinition:n}=Shopware,{Criteria:a}=Shopware.Data,{mapPropertyErrors:o}=Shopware.Component.getComponentHelper();var l={template:'\n{% block sw_customer_address_form %}\n<div class="sw-customer-address-form">\n    \n    {% block sw_customer_address_form_container %}\n    <sw-container\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        gap="0px 30px"\n    >\n        \n        {% block sw_customer_address_form_company_field %}\n        <sw-text-field\n            v-model:value="address.company"\n            name="sw-field--address-company"\n            :required="isBusinessAccountType"\n            :label="$tc(\'sw-customer.addressForm.labelCompany\')"\n            :error="disabled ? null : addressCompanyError"\n            :disabled="disabled"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderCompany\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_department_field %}\n        <sw-text-field\n            v-model:value="address.department"\n            name="sw-field--address-department"\n            :label="$tc(\'sw-customer.addressForm.labelDepartment\')"\n            :error="disabled ? null : addressDepartmentError"\n            :disabled="disabled"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderDepartment\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_salutation_title_container %}\n        \n        {% block sw_customer_address_form_salutation_field %}\n        <sw-entity-single-select\n            v-model:value="address.salutationId"\n            name="sw-field--address-salutationId"\n            class="sw-customer-address-form__salutation-select"\n            entity="salutation"\n            :label="$tc(\'sw-customer.addressForm.labelSalutation\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderSalutation\')"\n            :error="disabled ? null : addressSalutationIdError"\n            :disabled="disabled"\n            :criteria="salutationCriteria"\n            label-property="displayName"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_title_field %}\n        <sw-text-field\n            v-model:value="address.title"\n            name="sw-field--address-title"\n            :label="$tc(\'sw-customer.addressForm.labelTitle\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderTitle\')"\n            :error="disabled ? null : addressTitleError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_first_name_field %}\n        <sw-text-field\n            v-model:value="address.firstName"\n            name="sw-field--address-firstName"\n            :label="$tc(\'sw-customer.addressForm.labelFirstName\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderFirstName\')"\n            validation="required"\n            required\n            :error="disabled ? null : addressFirstNameError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_last_name_field %}\n        <sw-text-field\n            v-model:value="address.lastName"\n            name="sw-field--address-lastName"\n            :label="$tc(\'sw-customer.addressForm.labelLastName\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderLastName\')"\n            validation="required"\n            required\n            :error="disabled ? null : addressLastNameError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_street_field %}\n        <sw-text-field\n            v-model:value="address.street"\n            name="sw-field--address-street"\n            :label="$tc(\'sw-customer.addressForm.labelStreet\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderStreet\')"\n            validation="required"\n            required\n            :error="disabled ? null : addressStreetError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_additional_address_line_1_field %}\n        <sw-text-field\n            v-model:value="address.additionalAddressLine1"\n            name="sw-field--address-additionalAddressLine1"\n            :label="$tc(\'sw-customer.addressForm.labelAdditionalAddressLine1\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderAdditionalAddressLine1\')"\n            :error="disabled ? null : addressAdditionalAddressLine1Error"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_additional_address_line_2_field %}\n        <sw-text-field\n            v-model:value="address.additionalAddressLine2"\n            name="sw-field--address-additionalAddressLine2"\n            :label="$tc(\'sw-customer.addressForm.labelAdditionalAddressLine2\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderAdditionalAddressLine2\')"\n            :error="disabled ? null : addressAdditionalAddressLine2Error"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_zipcode_city_container %}\n        \n        {% block sw_customer_address_form_zipcode_field %}\n        <sw-text-field\n            v-model:value="address.zipcode"\n            name="sw-field--address-zipcode"\n            :label="$tc(\'sw-customer.addressForm.labelZipcode\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderZipcode\')"\n            validation="required"\n            :required="country && country.postalCodeRequired"\n            :error="disabled ? null : addressZipcodeError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_city_field %}\n        <sw-text-field\n            v-model:value="address.city"\n            name="sw-field--address-city"\n            :label="$tc(\'sw-customer.addressForm.labelCity\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderCity\')"\n            validation="required"\n            required\n            :error="disabled ? null : addressCityError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_country_field %}\n        <sw-entity-single-select\n            v-model:value="countryId"\n            name="sw-field--countryId"\n            class="sw-customer-address-form__country-select"\n            entity="country"\n            :criteria="countryCriteria"\n            :label="$tc(\'sw-customer.addressForm.labelCountry\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderCountry\')"\n            validation="required"\n            required\n            :error="disabled ? null : addressCountryIdError"\n            :disabled="disabled"\n            show-clearable-button\n        />\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_state_field %}\n        <div\n            v-if="countryId && hasStates"\n            class="sw-customer-address-form__state-select-placeholder"\n        >\n            <sw-entity-single-select\n                v-model:value="address.countryStateId"\n                name="sw-field--address-countryStateId"\n                class="sw-customer-address-form__state-select"\n                entity="country_state"\n                :criteria="stateCriteria"\n                :label="$tc(\'sw-customer.addressForm.labelState\')"\n                :placeholder="$tc(\'sw-customer.addressForm.placeholderState\')"\n                :required="country && country.forceStateInRegistration"\n                :error="disabled ? null : addressCountryStateIdError"\n                :disabled="disabled"\n                show-clearable-button\n            />\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_customer_address_form_phone_number_field %}\n        <sw-text-field\n            v-model:value="address.phoneNumber"\n            name="sw-field--address-phoneNumber"\n            :label="$tc(\'sw-customer.addressForm.labelPhoneNumber\')"\n            :placeholder="$tc(\'sw-customer.addressForm.placeholderPhoneNumber\')"\n            :error="disabled ? null : addressPhoneNumberError"\n            :disabled="disabled"\n        />\n        {% endblock %}\n\n        <slot v-bind="{ disabled }">\n            \n            {% block sw_customer_address_form_extension_slot %}\n            {% endblock %}\n        </slot>\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],props:{customer:{type:Object,required:!0},address:{type:Object,required:!0,default(){return this.addressRepository.create(this.context)}},disabled:{type:Boolean,required:!1,default:!1}},data(){return{country:null,states:[]}},computed:{addressRepository(){return this.repositoryFactory.create(this.customer.addresses.entity,this.customer.addresses.source)},countryRepository(){return this.repositoryFactory.create("country")},countryStateRepository(){return this.repositoryFactory.create("country_state")},...o("address",["company","department","salutationId","title","firstName","lastName","street","additionalAddressLine1","additionalAddressLine2","zipcode","city","countryId","phoneNumber","vatId","countryStateId","salutationId","city","street","zipcode","lastName","firstName"]),countryId:{get(){return this.address.countryId},set(e){this.address.countryId=e}},countryCriteria(){let e=new a(1,25);return e.addSorting(a.sort("position","ASC",!0)).addSorting(a.sort("name","ASC")),e},stateCriteria(){if(!this.countryId)return null;let e=new a(1,25);return e.addFilter(a.equals("countryId",this.countryId)).addSorting(a.sort("position","ASC",!0)).addSorting(a.sort("name","ASC")),e},salutationCriteria(){let e=new a(1,25);return e.addFilter(a.not("or",[a.equals("id",t.defaultSalutationId)])),e},hasStates(){return this.states.length>0},isBusinessAccountType(){return this.customer?.accountType===d.Z.ACCOUNT_TYPE_BUSINESS}},watch:{countryId:{immediate:!0,handler(e,r){return(void 0!==r&&(this.address.countryStateId=null),this.countryId)?this.countryRepository.get(this.countryId).then(e=>{this.country=e,this.address.country=this.country,this.getCountryStates()}):(this.country=null,Promise.resolve())}},"address.company"(e){e&&(this.customer.company=e)},"country.forceStateInRegistration"(e){e||Shopware.State.dispatch("error/removeApiError",{expression:`${this.address.getEntityName()}.${this.address.id}.countryStateId`}),n.get(this.address.getEntityName()).properties.countryStateId.flags.required=e},"country.postalCodeRequired"(e){e||Shopware.State.dispatch("error/removeApiError",{expression:`${this.address.getEntityName()}.${this.address.id}.zipcode`}),n.get(this.address.getEntityName()).properties.zipcode.flags.required=e}},methods:{getCountryStates(){return this.country?this.countryStateRepository.search(this.stateCriteria).then(e=>{this.states=e}):Promise.resolve()}}}},974071:function(e,r){"use strict";r.Z=Object.freeze({ACCOUNT_TYPE_PRIVATE:"private",ACCOUNT_TYPE_BUSINESS:"business"})},725010:function(e,r,s){var d=s(651624);d.__esModule&&(d=d.default),"string"==typeof d&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals),s(745346).Z("6f9549fa",d,!0,{})}}]);