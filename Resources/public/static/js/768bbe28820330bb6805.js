"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[96985],{496985:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});let t=Shopware.Utils,s=(e,n,a)=>{e.name.includes("sw.sales.channel.create")&&!e.params.id&&(e.params.id=t.createId()),a()};var l={template:"\n{% block sw_sales_channel_detail_content_tabs %}{% endblock %}\n\n\n{% block sw_sales_channel_detail_language_switch %}\n\n<template #language-switch>\n    <sw-language-switch disabled />\n</template>\n{% endblock %}\n\n\n{% block sw_sales_channel_detail_content_language_info %}\n<sw-language-info\n    :entity-description=\"placeholder(salesChannel, 'name', $tc('sw-sales-channel.detail.textHeadline'))\"\n    is-new-entity\n/>\n{% endblock %}\n",beforeRouteEnter:s,beforeRouteUpdate:s,computed:{allowSaving(){return this.acl.can("sales_channel.creator")}},methods:{createdComponent(){this.$route.params.typeId&&(Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.salesChannel=this.salesChannelRepository.create(),this.salesChannel.typeId=this.$route.params.typeId,this.salesChannel.active=!1,this.$super("createdComponent"))},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.sales.channel.detail",params:{id:this.salesChannel.id}})},onSave(){this.$super("onSave")}}}}}]);