(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[4273],{810267:function(){},704273:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}}),r(643076);var n={namespaced:!0,state(){return{order:null,loading:{order:!1,states:!1},editing:!1,savedSuccessful:!1,versionContext:null,orderAddressIds:[]}},getters:{isLoading:e=>Object.values(e.loading).some(e=>e),isEditing:e=>e.editing},mutations:{setOrder(e,t){e.order=t},setLoading(e,t){let r=t[0],n=t[1];"boolean"==typeof n&&void 0!==e.loading[r]&&(e.loading[r]=n)},setEditing(e,t){e.editing=t},setSavedSuccessful(e,t){e.savedSuccessful=t},setVersionContext(e,t){e.versionContext=t},setOrderAddressIds(e,t){if(!t){e.orderAddressIds=[];return}let{orderAddressId:r,customerAddressId:n,type:i}=t;if(!e.orderAddressIds.some(e=>e.orderAddressId===r&&e.type===i)){e.orderAddressIds.push(t);return}e.orderAddressIds.forEach(e=>{e.orderAddressId===r&&e.type===i&&(e.customerAddressId=n)})}}};let{State:i,Mixin:s}=Shopware,{Criteria:o}=Shopware.Data,{mapState:d}=Shopware.Component.getComponentHelper(),a=Shopware.Classes.ApiService;var l={template:'\n{% block sw_order_detail %}\n<sw-page\n    v-if="orderId"\n    class="sw-order-detail"\n>\n    \n    {% block sw_order_detail_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_order_detail_header_title %}\n        <h2 v-if="orderIdentifier">\n            {{ $tc(\'sw-order.detail.textHeadline\') }} {{ orderIdentifier }}\n\n            \n            {% block sw_order_detail_header_label_manual_order %}\n            <sw-label\n                v-if="createdById"\n                appearance="pill"\n                size="small"\n                class="sw-order-detail__manual-order-label"\n            >\n                {{ $tc(\'sw-order.detail.labelManualOrder\') }}\n            </sw-label>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_header_title_new %}\n        <h2 v-else>\n            {{ $tc(\'sw-order.detail.textHeadlineNew\') }}\n        </h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_order_detail_actions_slot_smart_bar_actions %}\n        \n        {% block sw_order_detail_actions_abort %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-detail__smart-bar-cancel-button"\n            :disabled="isLoading || !acl.can(\'order.editor\')"\n            @click="onCancelEditing"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_actions_save %}\n        <sw-button-process\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-detail__smart-bar-save-button"\n            variant="primary"\n            :disabled="isLoading || !acl.can(\'order.editor\')"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            @update:process-success="saveEditsFinish"\n            @click.prevent="onSaveEdits"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_content %}\n    <template #content>\n        \n        {% block sw_order_detail_content_leave_page_modal %}\n        <sw-order-leave-page-modal\n            v-if="isDisplayingLeavePageWarning"\n            @page-leave-cancel="onLeaveModalClose"\n            @page-leave-confirm="onLeaveModalConfirm"\n        />\n        {% endblock %}\n        <sw-card-view>\n\n            <sw-alert\n                v-if="isOrderEditing"\n                class="sw-order-detail__alert"\n                variant="warning"\n            >\n                {{ $tc(\'sw-order.detail.textUnsavedOrderWarning\') }}\n            </sw-alert>\n\n            <sw-alert\n                v-if="missingProductLineItems.length > 0"\n                class="sw-order-detail__alert"\n                variant="warning"\n            >\n                {{ $tc(\'sw-order.detailBase.textMissingProductLineItems\') }}\n\n                <ul class="sw_order_detail_base__missing_products_alert-list">\n                    <li\n                        v-for="lineItem in missingProductLineItems"\n                        :key="lineItem.id"\n                    >\n                        {{ lineItem.label }}\n                    </li>\n                </ul>\n\n                {{ $tc(\'sw-order.detailBase.textMissingProductLineItemsDescription\') }}\n            </sw-alert>\n\n            <sw-alert\n                v-if="convertedProductLineItems.length > 0"\n                class="sw-order-detail__alert"\n                variant="info"\n            >\n                {{ $tc(\'sw-order.detailBase.textConvertedProductLineItems\') }}\n\n                <ul class="sw_order_detail_base__converted_products_alert-list">\n                    <li\n                        v-for="lineItem in convertedProductLineItems"\n                        :key="lineItem.id"\n                    >\n                        {{ lineItem.label }}\n                    </li>\n                </ul>\n\n                {{ $tc(\'sw-order.detailBase.textConvertedProductLineItemsDescription\') }}\n            </sw-alert>\n\n            \n            {% block sw_order_detail_content_tabs %}\n            <sw-tabs\n                v-if="showTabs"\n                class="sw-order-detail__tabs"\n                :class="{ \'has-warning\': showWarningTabStyle }"\n                position-identifier="sw-order-detail"\n            >\n\n                \n                {% block sw_order_detail_content_tabs_general %}\n                <sw-tabs-item\n                    class="sw-order-detail__tabs-tab-general"\n                    :route="{ name: \'sw.order.detail.general\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-order.detail.tabGeneral\')"\n                >\n                    {{ $tc(\'sw-order.detail.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_order_detail_content_tabs_details %}\n                <sw-tabs-item\n                    class="sw-order-detail__tabs-tab-details"\n                    :route="{ name: \'sw.order.detail.details\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-order.detail.tabDetails\')"\n                >\n                    {{ $tc(\'sw-order.detail.tabDetails\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_order_detail_content_tabs_documents %}\n                <sw-tabs-item\n                    class="sw-order-detail__tabs-tab-documents"\n                    :class="{ \'has-warning\': isOrderEditing }"\n                    :route="{ name: \'sw.order.detail.documents\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-order.detail.tabDocuments\')"\n                >\n                    {{ $tc(\'sw-order.detail.tabDocuments\') }}\n\n                    <sw-icon\n                        v-if="isOrderEditing"\n                        v-tooltip="{ message: $tc(\'sw-order.documentTab.tooltipSaveBeforeCreateDocument\') }"\n                        class="sw-order-detail__tab-warning-badge"\n                        name="solid-exclamation-circle"\n                        size="12px"\n                    />\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_order_detail_content_tabs_extension %}{% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            <sw-extension-component-section\n                position-identifier="sw-order-detail__before-content"\n            />\n\n            \n            {% block sw_order_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <router-view\n                v-if="order"\n                v-show="!isLoading"\n                ref="baseComponent"\n                :order-id="orderId"\n                :is-editing="isEditing"\n                :is-loading="isLoading"\n                :is-save-successful="isSaveSuccessful"\n                @identifier-change.native="updateIdentifier"\n                @created-by-id-change.native="updateCreatedById"\n                @loading-change.native="onUpdateLoading"\n                @editing-change.native="onUpdateEditing"\n                @save-and-recalculate.native="onSaveAndRecalculate"\n                @recalculate-and-reload.native="onRecalculateAndReload"\n                @reload-entity-data.native="reloadEntityData"\n                @save-and-reload.native="onSaveAndReload"\n                @save-edits.native="onSaveEdits"\n                @error.native="onError"\n            />\n            {% endblock %}\n\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","orderService","feature"],mixins:[s.getByName("notification")],props:{orderId:{type:String,required:!1,default:null}},data(){return{identifier:"",isEditing:!1,isLoading:!0,isSaveSuccessful:!1,createdById:"",isDisplayingLeavePageWarning:!1,nextRoute:null,hasNewVersionId:!1,hasOrderDeepEdit:!1,missingProductLineItems:[],promotionsToDelete:[]}},metaInfo(){return{title:this.$createTitle(this.orderIdentifier)}},computed:{...d("swOrderDetail",["order","versionContext","orderAddressIds","editing","loading"]),orderIdentifier(){return null!==this.order?this.order.orderNumber:""},orderChanges(){return!!this.order&&this.orderRepository.hasChanges(this.order)},showTabs(){return this.$route.meta.$module.routes.detail.children.length>1},showWarningTabStyle(){return this.isOrderEditing&&"sw.order.detail.documents"===this.$route.name},isOrderEditing(){return this.orderChanges||this.hasOrderDeepEdit||this.orderAddressIds?.length>0},orderRepository(){return this.repositoryFactory.create("order")},automaticPromotions(){return this.order.lineItems.filter(e=>"promotion"===e.type&&null===e.referencedId)},orderCriteria(){let e=new o(1,25);return e.addAssociation("currency").addAssociation("orderCustomer.salutation").addAssociation("language"),e.getAssociation("lineItems").addFilter(o.equals("parentId",null)).addSorting(o.sort("position","ASC")),e.getAssociation("lineItems.children").addSorting(o.sort("position","ASC")),e.addAssociation("salesChannel"),e.addAssociation("addresses.country").addAssociation("addresses.countryState").addAssociation("deliveries.shippingMethod").addAssociation("deliveries.shippingOrderAddress").addAssociation("transactions.paymentMethod").addAssociation("documents.documentType").addAssociation("tags"),e.addAssociation("stateMachineState"),e.getAssociation("deliveries").addAssociation("stateMachineState").addSorting(o.sort("shippingCosts.unitPrice","DESC")),e.getAssociation("transactions").addAssociation("stateMachineState").addSorting(o.sort("createdAt")),e.addAssociation("billingAddress"),e},convertedProductLineItems(){return this.order?.lineItems?.filter(e=>e.payload?.isConvertedProductLineItem&&"custom"===e.type&&!this.missingProductLineItems.includes(e))||[]}},watch:{orderId(){this.createdComponent()},isOrderEditing(e){this.updateEditing(e)}},beforeCreate(){i.registerModule("swOrderDetail",n)},beforeUnmount(){this.beforeDestroyComponent(),i.unregisterModule("swOrderDetail")},beforeRouteLeave(e,t,r){this.isOrderEditing?(this.nextRoute=r,this.isDisplayingLeavePageWarning=!0):r()},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-order-detail-base__order",path:"order",scope:this}),window.addEventListener("beforeunload",this.beforeDestroyComponent),Shopware.State.commit("shopwareApps/setSelectedIds",this.orderId?[this.orderId]:[]),this.createNewVersionId()},async beforeDestroyComponent(){if(this.hasNewVersionId){let e=this.versionContext;i.commit("swOrderDetail/setVersionContext",Shopware.Context.api),this.hasNewVersionId=!1,await this.orderRepository.deleteVersion(this.orderId,e.versionId,e)}},updateIdentifier(e){this.identifier=e},updateCreatedById(e){this.createdById=e},onChangeLanguage(){this.$root.$emit("language-change")},saveEditsFinish(){this.isSaveSuccessful=!1,this.isEditing=!1},onStartEditing(){this.$root.$emit("order-edit-start")},async onSaveEdits(){this.isLoading=!0,await this.handleOrderAddressUpdate(this.orderAddressIds),this.promotionsToDelete.length>0&&(this.order.lineItems=this.order.lineItems.filter(e=>!this.promotionsToDelete.includes(e.id))),await this.orderRepository.save(this.order,this.versionContext).then(()=>(this.hasOrderDeepEdit=!1,this.promotionsToDelete=[],this.orderRepository.mergeVersion(this.versionContext.versionId,this.versionContext))).then(()=>this.createNewVersionId()).then(()=>{i.commit("swOrderDetail/setSavedSuccessful",!0)}).catch(e=>{this.onError("error",e),this.isLoading=!1}),this.$root.$emit("order-edit-save")},async handleOrderAddressUpdate(e){let t=[];e.forEach(e=>{if(e.customerAddressId===e.orderAddressId)return;let r={customerAddressId:e.customerAddressId,type:e.type};"shipping"===e.type&&(r.deliveryId=this.order.deliveries[0].id),t.push(r)}),0!==t.length&&await this.updateOrderAddresses(t).then(()=>{i.commit("swOrderDetail/setOrderAddressIds",!1)}).catch(e=>{this.createNotificationError({message:e})})},onCancelEditing(){this.isLoading=!0,i.commit("swOrderDetail/setLoading",["order",!0]);let e=this.versionContext;return i.commit("swOrderDetail/setVersionContext",Shopware.Context.api),this.hasNewVersionId=!1,this.orderRepository.deleteVersion(this.orderId,e.versionId,e).then(()=>{this.hasOrderDeepEdit=!1,i.commit("swOrderDetail/setOrderAddressIds",!1)}).catch(e=>{this.onError("error",e)}).finally(()=>(this.missingProductLineItems=[],this.createNewVersionId().then(()=>{i.commit("swOrderDetail/setLoading",["order",!1])})))},async onSaveAndRecalculate(){i.commit("swOrderDetail/setLoading",["order",!0]),this.isLoading=!0,this.order.lineItems=this.order.lineItems.filter(e=>!this.automaticPromotions.includes(e));try{await this.orderRepository.save(this.order,this.versionContext),await this.orderService.recalculateOrder(this.orderId,this.versionContext.versionId,{},{}),await this.orderService.toggleAutomaticPromotions(this.orderId,this.versionContext.versionId,!1),await this.reloadEntityData()}catch(e){this.onError("error",e)}finally{this.isLoading=!1,Shopware.State.commit("swOrderDetail/setLoading",["order",!1])}},async onRecalculateAndReload(){i.commit("swOrderDetail/setLoading",["order",!0]);try{this.promotionsToDelete=this.automaticPromotions.map(e=>e.id),await this.orderService.recalculateOrder(this.orderId,this.versionContext.versionId,{},{}),await this.orderService.toggleAutomaticPromotions(this.orderId,this.versionContext.versionId,!1),await this.reloadEntityData(),this.order.lineItems=this.order.lineItems.filter(e=>!this.promotionsToDelete.includes(e.id))}catch(e){this.onError("error",e),this.promotionsToDelete=[]}finally{Shopware.State.commit("swOrderDetail/setLoading",["order",!1])}},onSaveAndReload(){return i.commit("swOrderDetail/setLoading",["order",!0]),this.orderRepository.save(this.order,this.versionContext).then(()=>this.reloadEntityData()).catch(e=>{this.onError("error",e)}).finally(()=>{Shopware.State.commit("swOrderDetail/setLoading",["order",!1])})},onUpdateLoading(e){this.isLoading=e},onUpdateEditing(e){this.isEditing=e},onError(e){let t=null;try{t=e.response.data.errors[0].detail}catch(e){t=""}this.createNotificationError({message:this.$tc("sw-order.detail.messageRecalculationError")+t})},onLeaveModalClose(){this.nextRoute(!1),this.nextRoute=null,this.isDisplayingLeavePageWarning=!1},onLeaveModalConfirm(){this.isDisplayingLeavePageWarning=!1,this.$nextTick(()=>{this.nextRoute()})},reloadEntityData(e=!0){return i.commit("swOrderDetail/setLoading",["order",!0]),this.orderRepository.get(this.orderId,this.versionContext,this.orderCriteria).then(t=>{"sw.order.detail.documents"!==this.$route.name&&e&&(this.hasOrderDeepEdit=!0),i.commit("swOrderDetail/setOrder",t)}).finally(()=>{Shopware.State.commit("swOrderDetail/setLoading",["order",!1]),this.isLoading=!1})},createNewVersionId(){return i.commit("swOrderDetail/setVersionContext",Shopware.Context.api),this.hasNewVersionId=!1,this.orderRepository.createVersion(this.orderId,this.versionContext).then(e=>(this.hasNewVersionId=!0,i.commit("swOrderDetail/setVersionContext",e),this.reloadEntityData(!1))).then(()=>this.convertMissingProductLineItems())},updateOrderAddresses(e){return this.orderService.updateOrderAddresses(this.orderId,e,{},a.getVersionHeader(this.order.versionId))},updateEditing(e){i.commit("swOrderDetail/setEditing",e)},convertMissingProductLineItems(){return(this.missingProductLineItems=this.order?.lineItems?.filter(e=>null===e.productId&&"product"===e.type)||[],0===this.missingProductLineItems.length)?Promise.resolve():(this.missingProductLineItems.forEach(e=>{e.type="custom",e.productId=null,e.referencedId=null,e.payload.isConvertedProductLineItem=!0}),this.orderRepository.save(this.order,this.versionContext))}}}},643076:function(e,t,r){var n=r(810267);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),r(745346).Z("79c5712c",n,!0,{})}}]);