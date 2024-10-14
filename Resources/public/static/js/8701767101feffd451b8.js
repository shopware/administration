"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[49541],{349541:function(e,n,d){d.r(n),d.d(n,{default:function(){return t}});let{mapGetters:a,mapState:o}=Shopware.Component.getComponentHelper();var t={template:'\n{% block sw_order_detail_documents %}\n<div>\n    \n    {% block sw_order_detail_documents_card %}\n    {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n    <sw-order-document-card\n        v-show="!isLoading"\n        :order="order"\n        @document-save="saveAndReload"\n        @update-loading="onUpdateLoading"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["save-and-reload","update-loading"],inject:{swOrderDetailOnSaveAndReload:{from:"swOrderDetailOnSaveAndReload",default:null},swOrderDetailOnLoadingChange:{from:"swOrderDetailOnLoadingChange",default:null}},computed:{...a("swOrderDetail",["isLoading"]),...o("swOrderDetail",["order","versionContext"])},methods:{saveAndReload(){this.$emit("save-and-reload"),this.swOrderDetailOnSaveAndReload&&this.swOrderDetailOnSaveAndReload()},onUpdateLoading(e){this.$emit("update-loading",e),this.swOrderDetailOnLoadingChange&&this.swOrderDetailOnLoadingChange(e)}}}}}]);