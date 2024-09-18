(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[66226],{981119:function(){},566226:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return s}}),t(350972);let{Component:i}=Shopware,{ChangesetGenerator:r}=Shopware.Data,{mapState:n}=i.getComponentHelper();var s={template:'\n{% block sw_order_promotion_field %}\n<div class="sw-order-promotion-field">\n\n    \n    {% block sw_order_promotion_field_codes %}\n    <sw-order-promotion-tag-field\n        v-model:value="promotionCodeTags"\n        :disabled="!hasLineItem || isLoading || !acl.can(\'order.editor\') || undefined"\n        :currency="currency"\n        :label="$tc(\'sw-order.detailsTab.promotionsField.labelPromotions\')"\n        :placeholder="$tc(\'sw-order.detailsTab.promotionsField.placeholderPromotions\')"\n        :error="promotionError"\n        @on-remove-code="onRemoveExistingCode"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_promotion_field_switch %}\n    <sw-switch-field\n        v-model:value="disabledAutoPromotions"\n        :disabled="isLoading || !acl.can(\'order.editor\') || undefined"\n        :label="$tc(\'sw-order.detailsTab.promotionsField.labelToggleAutomaticPromotions\')"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","orderService","acl"],emits:["loading-change","error","reload-entity-data"],mixins:["notification"],props:{isLoading:{type:Boolean,required:!1,default:!1}},data(){return{promotionError:null,disabledAutoPromotions:!1}},computed:{...n("swOrderDetail",["order","versionContext"]),orderLineItemRepository(){return this.repositoryFactory.create("order_line_item")},hasLineItem(){return this.order.lineItems.filter(e=>e.hasOwnProperty("id")).length>0},currency(){return this.order.currency},manualPromotions(){return this.order.lineItems.filter(e=>"promotion"===e.type&&null!==e.referencedId)},automaticPromotions(){return this.order.lineItems.filter(e=>"promotion"===e.type&&null===e.referencedId)},promotionCodeTags:{get(){return this.manualPromotions.map(e=>e.payload)},set(e){let o=this.manualPromotions;if(this.promotionError=null,e.length<o.length)return;let t=o.length,i=e[t];e.length>o.length&&this.onSubmitCode(i.code),t>0&&i.isInvalid&&(this.promotionError={detail:this.$tc("sw-order.createBase.textInvalidPromotionCode")})}},hasAutomaticPromotions(){return this.automaticPromotions.length>0},changesetGenerator(){return new r},hasOrderUnsavedChanges(){return null!==this.changesetGenerator.generate(this.order).changes}},watch:{disabledAutoPromotions(e,o){o!==this.hasAutomaticPromotions&&this.toggleAutomaticPromotions(e)},automaticPromotions(){this.disabledAutoPromotions=!this.hasAutomaticPromotions}},created(){this.createdComponent()},methods:{createdComponent(){this.disabledAutoPromotions=!this.hasAutomaticPromotions},deleteAutomaticPromotions(){if(0===this.automaticPromotions.length)return Promise.resolve();let e=[];return this.automaticPromotions.forEach(o=>{e.push(this.orderLineItemRepository.delete(o.id,this.versionContext))}),Promise.all(e).then(()=>{this.automaticPromotions.forEach(e=>{this.createNotificationSuccess({message:this.$tc("sw-order.detailBase.textPromotionRemoved",0,{promotion:e.label})})})}).catch(e=>{this.$emit("loading-change",!1),this.$emit("error",e)})},toggleAutomaticPromotions(e){if(this.$emit("loading-change",!0),this.hasOrderUnsavedChanges){this.$emit("loading-change",!1),this.handleUnsavedOrderChangesResponse(),this.$nextTick(()=>{this.disabledAutoPromotions=!e});return}this.deleteAutomaticPromotions().then(()=>this.orderService.toggleAutomaticPromotions(this.order.id,this.order.versionId,e)).then(e=>{this.handlePromotionResponse(e),this.$emit("reload-entity-data")}).catch(e=>{this.$emit("loading-change",!1),this.$emit("error",e)})},onSubmitCode(e){if(this.$emit("loading-change",!0),this.hasOrderUnsavedChanges){this.$emit("loading-change",!1),this.handleUnsavedOrderChangesResponse();return}this.orderService.addPromotionToOrder(this.order.id,this.order.versionId,e).then(e=>{this.handlePromotionResponse(e),this.$emit("reload-entity-data")}).catch(e=>{this.$emit("loading-change",!1),this.$emit("error",e)})},handlePromotionResponse(e){Object.values(e.data.errors).forEach(e=>{switch(e.level){case 0:this.createNotificationSuccess({message:e.message});break;case 10:this.createNotificationWarning({message:e.message});break;default:this.createNotificationError({message:e.message})}})},handleUnsavedOrderChangesResponse(){this.createNotificationWarning({message:this.$tc("sw-order.detailBase.textUnsavedChanges",0)})},onRemoveExistingCode(e){if(this.$emit("loading-change",!0),this.hasOrderUnsavedChanges){this.$emit("loading-change",!1),this.handleUnsavedOrderChangesResponse();return}let o=this.order.lineItems.find(o=>"promotion"===o.type&&o.payload.code===e.code);this.orderLineItemRepository.delete(o.id,this.versionContext).then(()=>{this.$emit("reload-entity-data")}).catch(e=>{this.$emit("loading-change",!1),this.$emit("error",e)})},getLineItemByPromotionCode(e){return this.order.lineItems.find(o=>"promotion"===o.type&&o.payload.code===e)}}}},350972:function(e,o,t){var i=t(981119);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("cc381742",i,!0,{})}}]);