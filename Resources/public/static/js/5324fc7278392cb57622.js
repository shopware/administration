"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[7085],{307085:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});let s=Shopware.Utils;var a={template:"\n{% block sw_settings_country_detail_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch disabled />\n</template>\n{% endblock %}\n\n\n{% block sw_settings_country_detail_content_language_info %}\n<sw-language-info\n    :entity-description=\"placeholder(country, 'name', $tc('sw-settings-country.detail.textHeadline'))\"\n    is-new-entity\n/>\n{% endblock %}\n",beforeRouteEnter(t,e,n){t.name.includes("sw.settings.country.create")&&!t.params.id&&(t.params.id=s.createId()),n()},methods:{createdComponent(){Shopware.Context.api.languageId=Shopware.Context.api.systemLanguageId,this.$route.params.id&&(this.country=this.countryRepository.create(Shopware.Context.api,this.$route.params.id),this.country.customerTax={amount:0,currencyId:Shopware.Context.app.systemCurrencyId,enabled:!1},this.country.companyTax={amount:0,currencyId:Shopware.Context.app.systemCurrencyId,enabled:!1},this.countryId=this.country.id,this.countryStateRepository=this.repositoryFactory.create(this.country.states.entity,this.country.states.source))},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.settings.country.detail",params:{id:this.country.id}})}}}}}]);