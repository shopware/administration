"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[72680],{72680:function(t,s,i){i.r(s),s.default={methods:{createdComponent(){this.isLoading=!0,Shopware.State.commit("context/resetLanguageToDefault"),this.customerGroup=this.customerGroupRepository.create(),this.isLoading=!1},async onSave(){if(this.isSaveSuccessful=!1,this.isLoading=!0,this.validateSaveRequest())try{await this.customerGroupRepository.save(this.customerGroup),this.isSaveSuccessful=!0,this.$router.push({name:"sw.settings.customer.group.detail",params:{id:this.customerGroup.id}})}catch(t){this.isLoading=!1,this.createNotificationError({message:this.$tc("sw-settings-customer-group.detail.notificationErrorMessage")})}}}}}}]);