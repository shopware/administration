(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[491],{"s/L2":function(o){o.exports=JSON.parse('{"sw.promotion.v2.detail.base":{"promotion":["name","validUntil"]}}')},"yX/c":function(o,n,t){"use strict";t.r(n);var e=t("J58c"),i=t.n(e),a=t("s/L2");function s(o,n){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),t.push.apply(t,e)}return t}var r=Shopware.Mixin,c=Shopware.Data.Criteria,l=Shopware.Component.getComponentHelper().mapPageErrors;n.default={template:'\n{% block sw_promotion_v2_detail %}\n<sw-page class="sw-promotion-v2-detail">\n\n    \n    {% block sw_promotion_v2_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(promotion, \'name\', $tc(\'sw-promotion-v2.detail.header.titleEdit\')) }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_promotion_v2_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            class="sw-promotion-v2-detail__cancel-action"\n            :disabled="promotion !== null && promotion.isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_detail_actions_save %}\n        <sw-button-process\n            v-model="isSaveSuccessful"\n            v-tooltip.bottom="tooltipSave"\n            class="sw-promotion-v2-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :disabled="isLoading || !acl.can(\'promotion.editor\')"\n            :process-success="isSaveSuccessful"\n            @process-finish="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="!promotionId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_promotion_v2_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(promotion, \'name\', $tc(\'sw-promotion-v2.detail.header.titleCreate\'))"\n                :is-new-entity="!promotionId"\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_content_tabs %}\n            <sw-tabs\n                v-if="!isCreateMode"\n                class="sw-promotion-v2-detail-page__tabs"\n                position-identifier="sw-promotion-detail"\n            >\n\n                \n                {% block sw_promotion_v2_detail_content_tabs_general %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.promotion.v2.detail.base\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-promotion-v2.detail.tabs.tabGeneral\')"\n                    :has-error="swPromotionV2DetailBaseError"\n                    :disabled="!promotionId"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.tabs.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_detail_content_tabs_conditions %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.promotion.v2.detail.conditions\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-promotion-v2.detail.tabs.tabConditions\')"\n                    :disabled="!promotionId"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.tabs.tabConditions\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_detail_content_tabs_discounts %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.promotion.v2.detail.discounts\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-promotion-v2.detail.tabs.tabDiscounts\')"\n                    :disabled="!promotionId"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.tabs.tabDiscounts\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_content_view %}\n            <div\n                v-if="isLoading"\n                class="sw-promotion-v2-detail__content-view-skeleton"\n            >\n                <sw-skeleton />\n                <sw-skeleton />\n            </div>\n\n            <router-view\n                v-else-if="promotion"\n                :promotion="promotion"\n                :is-create-mode="isCreateMode"\n                @clean-up-codes="onCleanUpCodes"\n                @generate-individual-codes-finish="onGenerateIndividualCodesFinish"\n                @delete-individual-codes-finish="onDeleteIndividualCodesFinish"\n            />\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_detail_change_code_type_modal %}\n            <sw-modal\n                v-if="!!showCodeTypeChangeModal"\n                class="sw-promotion-v2-detail__change-modal"\n                :title="$tc(\'sw-promotion-v2.detail.codeChangeModal.title\')"\n                @modal-close="onCloseCodeTypeChangeModal"\n            >\n\n                {{ $tc(\'sw-promotion-v2.detail.codeChangeModal.text\') }}\n\n                \n                {% block sw_promotion_v2_detail_change_code_type_modal_footer %}\n                <template #modal-footer>\n\n                    \n                    {% block sw_promotion_v2_detail_change_code_type_modal_footer_cancel_action %}\n                    <sw-button\n                        class="sw-promotion-v2-detail__change-modal-cancel-action"\n                        size="small"\n                        @click="onCloseCodeTypeChangeModal"\n                    >\n                        {{ $tc(\'global.default.cancel\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_promotion_v2_detail_change_code_type_modal_footer_confirm_action %}\n                    <sw-button\n                        class="sw-promotion-v2-detail__change-modal-confirm-action"\n                        size="small"\n                        variant="primary"\n                        @click="onConfirmSave"\n                    >\n                        {{ $tc(\'global.default.confirm\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n            </sw-modal>\n            {% endblock %}\n\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:["notification","placeholder",r.getByName("discard-detail-page-changes")("promotion")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.acl.can("promotion.editor")},method:"onSave"},ESCAPE:"onCancel"},props:{promotionId:{type:String,required:!1,default:function(){return null}}},data:function(){return{isLoading:!1,promotion:null,cleanUpIndividualCodes:!1,cleanUpFixedCode:!1,showCodeTypeChangeModal:!1,isSaveSuccessful:!1,saveCallbacks:[]}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:function(o){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i()(o,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))}))}return o}({identifier:function(){return this.placeholder(this.promotion,"name")},promotionRepository:function(){return this.repositoryFactory.create("promotion")},isCreateMode:function(){return"sw.promotion.v2.create.base"===this.$route.name},promotionCriteria:function(){var o=new c(1,1).addAssociation("discounts.promotionDiscountPrices").addAssociation("discounts.discountRules").addAssociation("salesChannels");return o.getAssociation("discounts").addSorting(c.sort("createdAt","ASC")),o.getAssociation("individualCodes").setLimit(25),o},tooltipSave:function(){if(!this.acl.can("promotion.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("category.editor"),showOnDisabledElements:!0};var o=this.$device.getSystemKey();return{message:"".concat(o," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},promotionGroupRepository:function(){return this.repositoryFactory.create("promotion_setgroup")}},l(a)),watch:{promotionId:function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){if(Shopware.ExtensionAPI.publishData({id:"sw-promotion-detail__promotion",path:"promotion",scope:this}),this.isLoading=!0,!this.promotionId)return Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.promotion=this.promotionRepository.create(),void(this.isLoading=!1);this.loadEntityData()},loadEntityData:function(){var o=this;return this.promotionRepository.get(this.promotionId,Shopware.Context.api,this.promotionCriteria).then((function(n){null!==n&&(o.promotion=n,!o.promotion||!o.promotion.discounts||o.promotion.length<1||(o.promotion.hasOrders=null!==n.orderCount&&n.orderCount>0,Shopware.State.commit("swPromotionDetail/setPromotion",o.promotion)))})).finally((function(){o.isLoading=!1}))},onChangeLanguage:function(){this.loadEntityData()},onSave:function(){this.promotionId?[this.cleanUpIndividualCodes,this.cleanUpFixedCode].some((function(o){return o}))?this.showCodeTypeChangeModal=!0:this.savePromotion():this.createPromotion()},onConfirmSave:function(){this.onCloseCodeTypeChangeModal(),this.savePromotion()},onCloseCodeTypeChangeModal:function(){this.showCodeTypeChangeModal=!1},createPromotion:function(){var o=this;return this.savePromotion().then((function(){o.$router.push({name:"sw.promotion.v2.detail",params:{id:o.promotion.id}})}))},savePromotion:function(){var o=this;return this.isLoading=!0,!0===this.cleanUpIndividualCodes&&(this.promotion.individualCodes=this.promotion.individualCodes.filter((function(){return!1}))),!0===this.cleanUpFixedCode&&(this.promotion.code=""),this.promotion.discounts&&this.promotion.discounts.forEach((function(o){"free"===o.type&&Object.assign(o,{type:"percentage",value:100,applierKey:"SELECT"})})),this.promotionRepository.save(this.promotion).then((function(){return o.loadEntityData(),o.savePromotionSetGroups()})).then((function(){Shopware.State.commit("swPromotionDetail/setSetGroupIdsDelete",[]),o.isSaveSuccessful=!0,o.loadEntityData()})).catch((function(){o.isLoading=!1,o.createNotificationError({message:o.$tc("global.notification.notificationSaveErrorMessage",0,{entityName:o.promotion.name})})})).finally((function(){o.cleanUpCodes(!1,!1)}))},savePromotionSetGroups:function(){var o=this,n=Shopware.State.get("swPromotionDetail").setGroupIdsDelete;if(null!==n){var t=n.map((function(n){return o.promotionGroupRepository.delete(n)}));return Promise.all(t)}return Promise.resolve()},saveFinish:function(){this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"sw.promotion.v2.index"})},onCleanUpCodes:function(o,n){this.cleanUpCodes(o,n)},cleanUpCodes:function(o,n){this.cleanUpIndividualCodes=o,this.cleanUpFixedCode=n},onGenerateIndividualCodesFinish:function(){this.savePromotion()},onDeleteIndividualCodesFinish:function(){this.savePromotion()}}}}}]);