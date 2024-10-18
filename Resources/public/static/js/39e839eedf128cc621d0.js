"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[74649],{674649:function(o,t,n){n.r(t),n.d(t,{default:function(){return r}});var e=JSON.parse('{"sw.promotion.v2.detail.base":{"promotion":["name","validUntil"]}}');let{Mixin:i}=Shopware,{Criteria:a}=Shopware.Data,{mapPageErrors:s}=Shopware.Component.getComponentHelper();var r={template:'\n{% block sw_promotion_v2_detail %}\n<sw-page class="sw-promotion-v2-detail">\n\n    \n    {% block sw_promotion_v2_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(promotion, \'name\', $tc(\'sw-promotion-v2.detail.header.titleEdit\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_promotion_v2_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-promotion-v2-detail__cancel-action"\n            :disabled="promotion !== null && promotion.isLoading || undefined"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_actions_save %}\n        <sw-button-process\n            v-model:processSuccess="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-promotion-v2-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="isLoading || !acl.can(\'promotion.editor\') || undefined"\n            :process-success="isSaveSuccessful"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="!promotionId || undefined"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_promotion_v2_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(promotion, \'name\', $tc(\'sw-promotion-v2.detail.header.titleCreate\'))"\n                :is-new-entity="!promotionId"\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_content_tabs %}\n            <sw-tabs\n                v-if="!isCreateMode"\n                class="sw-promotion-v2-detail-page__tabs"\n                position-identifier="sw-promotion-detail"\n            >\n\n                \n                {% block sw_promotion_v2_detail_content_tabs_general %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.promotion.v2.detail.base\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-promotion-v2.detail.tabs.tabGeneral\')"\n                    :has-error="swPromotionV2DetailBaseError"\n                    :disabled="!promotionId || undefined"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.tabs.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_detail_content_tabs_conditions %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.promotion.v2.detail.conditions\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-promotion-v2.detail.tabs.tabConditions\')"\n                    :disabled="!promotionId || undefined"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.tabs.tabConditions\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_detail_content_tabs_discounts %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.promotion.v2.detail.discounts\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-promotion-v2.detail.tabs.tabDiscounts\')"\n                    :disabled="!promotionId || undefined"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.tabs.tabDiscounts\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_content_view %}\n            <div\n                v-if="isLoading && !promotion"\n                class="sw-promotion-v2-detail__content-view-skeleton"\n            >\n                <sw-skeleton />\n                <sw-skeleton />\n            </div>\n\n            <template v-else>\n                <router-view v-slot="{ Component }">\n                    <component\n                        :is="Component"\n                        :promotion="promotion"\n                        :is-create-mode="isCreateMode"\n                        @clean-up-codes="onCleanUpCodes"\n                        @generate-individual-codes-finish="onGenerateIndividualCodesFinish"\n                        @delete-individual-codes-finish="onDeleteIndividualCodesFinish"\n                    />\n                </router-view>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_change_code_type_modal %}\n            <sw-modal\n                v-if="!!showCodeTypeChangeModal"\n                class="sw-promotion-v2-detail__change-modal"\n                :title="$tc(\'sw-promotion-v2.detail.codeChangeModal.title\')"\n                @modal-close="onCloseCodeTypeChangeModal"\n            >\n\n                {{ $tc(\'sw-promotion-v2.detail.codeChangeModal.text\') }}\n\n                \n                {% block sw_promotion_v2_detail_change_code_type_modal_footer %}\n                <template #modal-footer>\n\n                    \n                    {% block sw_promotion_v2_detail_change_code_type_modal_footer_cancel_action %}\n                    <sw-button\n                        class="sw-promotion-v2-detail__change-modal-cancel-action"\n                        size="small"\n                        @click="onCloseCodeTypeChangeModal"\n                    >\n                        {{ $tc(\'global.default.cancel\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_promotion_v2_detail_change_code_type_modal_footer_confirm_action %}\n                    <sw-button\n                        class="sw-promotion-v2-detail__change-modal-confirm-action"\n                        size="small"\n                        variant="primary"\n                        @click="onConfirmSave"\n                    >\n                        {{ $tc(\'global.default.confirm\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n            </sw-modal>\n            {% endblock %}\n\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],mixins:["notification","placeholder",i.getByName("discard-detail-page-changes")("promotion")],shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("promotion.editor")},method:"onSave"},ESCAPE:"onCancel"},props:{promotionId:{type:String,required:!1,default(){return null}}},data(){return{isLoading:!1,promotion:null,cleanUpIndividualCodes:!1,cleanUpFixedCode:!1,showCodeTypeChangeModal:!1,isSaveSuccessful:!1,saveCallbacks:[]}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.promotion,"name")},promotionRepository(){return this.repositoryFactory.create("promotion")},isCreateMode(){return"sw.promotion.v2.create.base"===this.$route.name},promotionCriteria(){let o=new a(1,1).addAssociation("discounts.promotionDiscountPrices").addAssociation("discounts.discountRules").addAssociation("salesChannels");return o.getAssociation("discounts").addSorting(a.sort("createdAt","ASC")),o.getAssociation("individualCodes"),o},tooltipSave(){if(!this.acl.can("promotion.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("category.editor"),showOnDisabledElements:!0};let o=this.$device.getSystemKey();return{message:`${o} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},promotionGroupRepository(){return this.repositoryFactory.create("promotion_setgroup")},...s(e)},watch:{promotionId(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){if(Shopware.ExtensionAPI.publishData({id:"sw-promotion-detail__promotion",path:"promotion",scope:this}),this.isLoading=!0,!this.promotionId){Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.promotion=this.promotionRepository.create(),this.isLoading=!1;return}this.loadEntityData()},loadEntityData(){return this.promotionId?this.promotionRepository.get(this.promotionId,Shopware.Context.api,this.promotionCriteria).then(o=>{null!==o&&(this.promotion=o,this.promotion&&this.promotion.discounts&&!(this.promotion.length<1)&&(this.promotion.hasOrders=null!==o.orderCount&&o.orderCount>0,Shopware.State.commit("swPromotionDetail/setPromotion",this.promotion)))}).finally(()=>{this.isLoading=!1}):Promise.resolve()},onChangeLanguage(){this.loadEntityData()},onSave(){if(!this.promotionId){this.createPromotion();return}if(![this.cleanUpIndividualCodes,this.cleanUpFixedCode].some(o=>o)){this.savePromotion();return}this.showCodeTypeChangeModal=!0},onConfirmSave(){this.onCloseCodeTypeChangeModal(),this.savePromotion()},onCloseCodeTypeChangeModal(){this.showCodeTypeChangeModal=!1},createPromotion(){return this.savePromotion().then(()=>{this.$router.push({name:"sw.promotion.v2.detail",params:{id:this.promotion.id}})})},async savePromotion(){this.isLoading=!0,!0===this.cleanUpIndividualCodes&&(this.promotion.individualCodes=this.promotion.individualCodes.filter(()=>!1)),!0===this.cleanUpFixedCode&&(this.promotion.code=""),this.promotion.discounts&&this.promotion.discounts.forEach(o=>{"free"===o.type&&Object.assign(o,{type:"percentage",value:100,applierKey:"SELECT"})});try{await this.promotionRepository.save(this.promotion),await this.savePromotionSetGroups(),Shopware.State.commit("swPromotionDetail/setSetGroupIdsDelete",[]),this.isSaveSuccessful=!0,await this.loadEntityData()}catch(o){this.isLoading=!1,this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessage",0,{entityName:this.promotion.name})})}finally{this.cleanUpCodes(!1,!1)}},savePromotionSetGroups(){let o=Shopware.State.get("swPromotionDetail").setGroupIdsDelete;return null!==o?Promise.all(o.map(o=>this.promotionGroupRepository.delete(o))):Promise.resolve()},saveFinish(){this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.promotion.v2.index"})},onCleanUpCodes(o,t){this.cleanUpCodes(o,t)},cleanUpCodes(o,t){this.cleanUpIndividualCodes=o,this.cleanUpFixedCode=t},onGenerateIndividualCodesFinish(){this.savePromotion()},onDeleteIndividualCodesFinish(){this.savePromotion()}}}}}]);