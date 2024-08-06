"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[19346],{919346:function(t,e,s){s.r(e),s.d(e,{default:function(){return n}});let{Criteria:i}=Shopware.Data,a=Shopware.Utils;var n={template:'\n{% block sw_settings_custom_field_set_detail_content_detail_custom_field_list %}\n<sw-card\n    class="sw-settings-set-create__option-list-empty-state__wrapper"\n    position-identifier="sw-settings-custom-field-set-create"\n>\n\n    \n    {% block sw_settings_custom_field_set_detail_content_detail_custom_field_list_empty_state %}\n    <sw-empty-state\n        :absolute="false"\n        class="sw-settings-set-create__option-list-empty-state__empty-state"\n        :title="$tc(\'sw-settings-custom-field.set.detail.messageCustomFieldsEmpty\')"\n    >\n\n        <p>{{ $tc(\'sw-settings-custom-field.set.detail.emptyStateDescription\') }}</p>\n    </sw-empty-state>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',beforeRouteEnter(t,e,s){t.name.includes("sw.settings.custom.field.create")&&!t.params.id&&(t.params.id=a.createId()),s()},methods:{async createdComponent(){this.isLoading=!0,this.set=await this.customFieldSetRepository.create(Shopware.Context.api,this.$route.params.id),this.set.name="custom_",this.$set(this.set,"config",{}),this.setId=this.set.id,this.isLoading=!1},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.settings.custom.field.detail",params:{id:this.setId}})},onSave(){if(this.isLoading=!0,!this.set||!this.set.name){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")}),this.technicalNameError={detail:this.$tc("global.error-codes.c1051bb4-d103-4f74-8988-acbcafc7fdc3")},this.isLoading=!1;return}let t=new i(1,25);t.addFilter(i.equals("name",this.set.name)),this.customFieldSetRepository.search(t).then(t=>{if(0===t.length){this.$super("onSave");return}this.createNameNotUniqueNotification(),this.isLoading=!1})},createNameNotUniqueNotification(){this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-settings-custom-field.set.detail.messageNameNotUnique")}),this.technicalNameError={detail:this.$tc("sw-settings-custom-field.set.detail.messageNameNotUnique")}}}}}}]);