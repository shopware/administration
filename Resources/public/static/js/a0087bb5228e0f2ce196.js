(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[538],{F074:function(e,t,s){"use strict";s.r(t);var o=Shopware.Data.Criteria;t.default={template:'\n{% block sw_customer_detail_base %}\n<div class="sw-customer-detail-base">\n    \n    {% block sw_customer_detail_base_info_holder %}\n    <div class="sw-customer-detail-base__info-holder">\n\n        \n        {% block sw_customer_detail_base_info_card %}\n        <sw-customer-card\n            :title="$tc(\'sw-customer.detailBase.labelAccountCard\')"\n            :customer="customer"\n            :edit-mode="customerEditMode"\n            :is-loading="isLoading"\n        >\n            \n            {% block sw_customer_detail_base_info_metadata %}\n            <sw-customer-base-info\n                :customer="customer"\n                :is-loading="isLoading"\n                :customer-edit-mode="customerEditMode"\n            />\n            {% endblock %}\n        </sw-customer-card>\n        {% endblock %}\n\n        \n        {% block sw_customer_detail_base_default_addresses_card %}\n        <sw-card\n            v-if="customer.defaultShippingAddress || customer.defaultBillingAddress"\n            :title="$tc(\'sw-customer.detailBase.labelAddressesCard\')"\n            position-identifier="sw-customer-detail-base-default-addresses"\n            class="sw-customer-detail-base__default-addresses"\n            :is-loading="customer.isLoading"\n        >\n            \n            {% block sw_customer_detail_base_default_addresses %}\n            <template #grid>\n                <sw-customer-default-addresses\n                    :customer-edit-mode="customerEditMode"\n                    :customer="customer"\n                />\n            </template>\n            {% endblock %}\n        </sw-card>\n        {% endblock %}\n\n        \n        {% block sw_customer_detail_custom_field_sets %}\n        <sw-card\n            v-if="!!customerCustomFieldSets && customerCustomFieldSets.length > 0"\n            position-identifier="sw-customer-detail-base-custom-field-sets"\n            :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n            :is-loading="customer.isLoading"\n        >\n            <sw-custom-field-set-renderer\n                :entity="customer"\n                :disabled="!customerEditMode"\n                :sets="customerCustomFieldSets"\n            />\n        </sw-card>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],props:{customer:{type:Object,required:!0},customerEditMode:{type:Boolean,required:!0,default:!1},isLoading:{type:Boolean,required:!1,default:!1}},data:function(){return{customerCustomFieldSets:null}},computed:{customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria:function(){var e=new o(1,25);return e.addFilter(o.equals("relations.entityName","customer")),e.getAssociation("customFields").addSorting(o.naturalSorting("config.customFieldPosition")),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;Shopware.State.commit("shopwareApps/setSelectedIds",this.customer.id?[this.customer.id]:[]),this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){e.customerCustomFieldSets=t}))}}}}}]);