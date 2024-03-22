(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67271],{57409:function(){},67271:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return n}}),a(7577);let{Mixin:i}=Shopware;var n=Shopware.Component.wrapComponentConfig({template:'<sw-page\n    class="sw-generic-custom-entity-detail"\n    :header-border-color="entityAccentColor"\n>\n    <template #smart-bar-header>\n        <h2 class="sw-generic-custom-entity-detail__title">\n            {{ placeholder(customEntityData, titlePropertyName, $tc(`${customEntityName}.moduleTitle`)) }}\n        </h2>\n    </template>\n\n    <template #smart-bar-actions>\n        <sw-button-process\n            class="sw-generic-custom-entity-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            variant="primary"\n            :disabled="isLoading"\n            @update:process-success="saveFinish"\n            @click="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n    </template>\n\n    <template #language-switch>\n        <sw-language-switch @on-change="onChangeLanguage" />\n    </template>\n\n    <template #content>\n        <sw-card-view>\n            <sw-tabs\n                v-if="detailTabs"\n                class="sw-generic-custom-entity-detail__tabs"\n                position-identifier="sw-generic-custom-entity-detail-tabs"\n                :default-item="mainTabName"\n                :small="false"\n            >\n                <template #default="{ active }">\n                    <sw-tabs-item\n                        v-for="tab in detailTabs"\n                        :key="`tab-item-${tab.name}`"\n                        class="sw-generic-custom-entity-detail__tab-item"\n                        :name="tab.name"\n                        :active-tab="active"\n                    >\n                        {{ getLabel(\'tabs\', tab.name) }}\n                    </sw-tabs-item>\n\n                    <sw-tabs-item\n                        v-if="customEntityDataDefinition?.flags?.[\'cms-aware\']"\n                        class="sw-generic-custom-entity-detail__tab-item"\n                        name="cms-aware-tab-layout"\n                        :active-tab="active"\n                    >\n                        {{ $tc(\'sw-custom-entity.detail.tabs.layout\') }}\n                    </sw-tabs-item>\n\n                    <sw-tabs-item\n                        v-if="customEntityDataDefinition?.flags?.[\'cms-aware\']"\n                        class="sw-generic-custom-entity-detail__tab-item"\n                        name="cms-aware-tab-seo"\n                        :active-tab="active"\n                    >\n                        {{ $tc(\'sw-custom-entity.detail.tabs.seo\') }}\n                    </sw-tabs-item>\n                </template>\n\n                <template #content="{ active }">\n                    <template\n                        v-for="tab in detailTabs"\n                        :key="`tab-${tab.name}`"\n                    >\n                        <div\n                            v-if="active === tab.name"\n                            class="sw-generic-custom-entity-detail__tab"\n                        >\n                            <sw-card\n                                v-for="card in tab.cards"\n                                :key="`card-${card.name}`"\n                                class="sw-generic-custom-entity-detail__card"\n                                position-identifier="`sw-generic-custom-entity-detail-tab-${card.name}`"\n                                :title="getLabel(\'cards\', card.name)"\n                            >\n                                <template v-if="!isLoading">\n                                    <sw-custom-entity-input-field\n                                        v-for="field in card.fields"\n                                        :key="field.ref"\n                                        v-model:value="customEntityData[field.ref]"\n                                        class="sw-generic-custom-entity-detail__field"\n                                        :type="getType(field.ref)"\n                                        :label="getLabel(\'fields\', field.ref)"\n                                        :placeholder="getPlaceholder(\'fields\', field.ref)"\n                                        :help-text="getHelpText(\'fields\', field.ref)"\n                                    />\n                                </template>\n                            </sw-card>\n                        </div>\n                    </template>\n\n                    <sw-generic-cms-page-assignment\n                        v-if="active === \'cms-aware-tab-layout\'"\n                        :cms-page-id="customEntityData?.swCmsPageId"\n                        :slot-overrides="customEntityData?.swSlotConfig"\n                        class="sw-generic-custom-entity-detail__tab sw-generic-custom-entity-detail__tab-cms-aware"\n                        @update:cms-page-id="updateCmsPageId"\n                        @update:slot-overrides="updateCmsSlotOverwrites"\n                        @create-layout="onCreateLayout"\n                    />\n\n                    <template\n                        v-else-if="active === \'cms-aware-tab-seo\'"\n                    >\n                        <sw-generic-seo-general-card\n                            :seo-meta-title="customEntityData?.swSeoMetaTitle"\n                            :seo-meta-description="customEntityData?.swSeoMetaDescription"\n                            :seo-url="customEntityData?.swSeoUrl"\n                            @update:seo-meta-title="updateSeoMetaTitle"\n                            @update:seo-meta-description="updateSeoMetaDescription"\n                            @update:seo-url="updateSeoUrl"\n                        />\n\n                        <sw-generic-social-media-card\n                            :og-title="customEntityData?.swOgTitle"\n                            :og-description="customEntityData?.swOgDescription"\n                            :og-image-id="customEntityData?.swOgImageId"\n                            @update:og-title="updateOgTitle"\n                            @update:og-description="updateOgDescription"\n                            @update:og-image-id="updateOgImageId"\n                        />\n                    </template>\n                </template>\n            </sw-tabs>\n        </sw-card-view>\n    </template>\n</sw-page>\n',inject:["customEntityDefinitionService","repositoryFactory","acl"],mixins:[i.getByName("placeholder"),i.getByName("notification")],data(){return{isLoading:!0,isSaveSuccessful:!1,customEntityData:null,customEntityDataInstances:void 0}},computed:{customEntityDataId(){return this.$route.params?.id},customEntityName(){return this.$route.params.entityName||""},customEntityDataDefinition(){return this.customEntityName?this.customEntityDefinitionService.getDefinitionByName(this.customEntityName)??null:null},customEntityDataRepository(){return null===this.customEntityDataDefinition?null:this.repositoryFactory.create(this.customEntityDataDefinition.entity)},customEntityProperties(){return this.customEntityDataDefinition?.properties},adminConfig(){return this.customEntityDataDefinition?.flags["admin-ui"]},entityAccentColor(){return this.adminConfig?.color},detailTabs(){return this.customEntityDataDefinition?.flags["admin-ui"]?.detail?.tabs??[]},mainTabName(){return this.detailTabs?.[0]?.name},titlePropertyName(){return this.detailTabs?.[0]?.cards?.[0].fields?.[0]?.ref}},created(){this.createdComponent()},methods:{createdComponent(){this.initializeCustomEntity()},initializeCustomEntity(){null!==this.adminConfig&&(this.$route.meta.$module.icon=this.adminConfig?.icon),this.loadData()},async loadData(){this.isLoading=!0;try{if(!this.customEntityDataRepository)throw Error(`Custom entity repository for "${this.customEntityName}" not found`);if(!this.customEntityDataId){this.customEntityData=this.customEntityDataRepository.create(),this.isLoading=!1;return}this.customEntityData=await this.customEntityDataRepository.get(this.customEntityDataId)}catch(t){console.error(t),this.createNotificationError({message:this.$tc("global.notification.notificationLoadingDataErrorMessage")})}finally{this.isLoading=!1}},async onSave(){return(this.isLoading=!0,this.customEntityData)?this.customEntityDataRepository?.save(this.customEntityData).then(async()=>{this.isSaveSuccessful=!0,!this.customEntityDataId&&this.customEntityData?.id&&await this.$router.push({name:"sw.custom.entity.detail",params:{id:this.customEntityData.id}}),this.loadData()}).finally(()=>{this.isLoading=!1}):Promise.reject()},saveFinish(){this.isSaveSuccessful=!1},onChangeLanguage(t){Shopware.State.commit("context/setApiLanguageId",t),this.loadData()},getFieldTranslation(t,e,a="",i=!1){let n=[this.customEntityName,t,e].join(".").concat(a);return i&&!this.$te(n)?"":this.$tc(n)},getLabel(t,e){return this.getFieldTranslation(t,e)},getPlaceholder(t,e){return this.getFieldTranslation(t,e,"Placeholder",!0)},getHelpText(t,e){return this.getFieldTranslation(t,e,"HelpText",!0)},getType(t){return this.customEntityProperties?.[t]?.type||""},updateCmsPageId(t){this.customEntityData&&(this.customEntityData.swCmsPageId=t)},updateCmsSlotOverwrites(t){this.customEntityData&&(this.customEntityData.swSlotConfig=t)},updateSeoMetaTitle(t){this.customEntityData&&(this.customEntityData.swSeoMetaTitle=t)},updateSeoMetaDescription(t){this.customEntityData&&(this.customEntityData.swSeoMetaDescription=t)},updateSeoUrl(t){this.customEntityData&&(this.customEntityData.swSeoUrl=t)},updateOgTitle(t){this.customEntityData&&(this.customEntityData.swOgTitle=t)},updateOgDescription(t){this.customEntityData&&(this.customEntityData.swOgDescription=t)},updateOgImageId(t){this.customEntityData&&(this.customEntityData.swOgImageId=t)},onCreateLayout(){this.customEntityData&&this.$router.push({name:"sw.cms.create",params:{id:this.customEntityData.id,type:this.customEntityName}})}}})},7577:function(t,e,a){var i=a(57409);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),a(45346).Z("a8f6c164",i,!0,{})}}]);