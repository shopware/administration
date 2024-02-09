(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[342],{K6sI:function(e,t,n){var r=n("eDSz");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("56a3747c",r,!0,{})},eDSz:function(e,t,n){},rwpI:function(e,t,n){"use strict";n.r(t);var r=n("6lmj"),i=n.n(r),o=n("7yzw"),s=n.n(o),a=n("CsSd"),d=n.n(a),c=n("92Mt"),l=n.n(c),u=(n("K6sI"),{namespaced:!0,state:function(){return{order:null,loading:{order:!1,states:!1},editing:!1,savedSuccessful:!1,versionContext:null,orderAddressIds:[]}},getters:{isLoading:function(e){return Object.values(e.loading).some((function(e){return e}))},isEditing:function(e){return e.editing}},mutations:{setOrder:function(e,t){e.order=t},setLoading:function(e,t){var n=t[0],r=t[1];"boolean"==typeof r&&void 0!==e.loading[n]&&(e.loading[n]=r)},setEditing:function(e,t){e.editing=t},setSavedSuccessful:function(e,t){e.savedSuccessful=t},setVersionContext:function(e,t){e.versionContext=t},setOrderAddressIds:function(e,t){if(t){var n=t.orderAddressId,r=t.customerAddressId;e.orderAddressIds.some((function(e){return e.orderAddressId===n}))?e.orderAddressIds.forEach((function(e){e.orderAddressId===n&&(e.customerAddressId=r)})):e.orderAddressIds.push(t)}else e.orderAddressIds=[]}}});function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){d()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=Shopware,f=m.State,w=m.Mixin,p=Shopware.Data.Criteria,v=Shopware.Component.getComponentHelper().mapState,b=Shopware.Classes.ApiService;t.default={template:'\n{% block sw_order_detail %}\n<sw-page\n    v-if="orderId"\n    class="sw-order-detail"\n>\n    \n    {% block sw_order_detail_header %}\n    <template #smart-bar-header>\n\n        \n        {% block sw_order_detail_header_title %}\n        <h2 v-if="orderIdentifier">\n            {{ $tc(\'sw-order.detail.textHeadline\') }} {{ orderIdentifier }}\n\n            \n            {% block sw_order_detail_header_label_manual_order %}\n            <sw-label\n                v-if="createdById"\n                appearance="pill"\n                size="small"\n                class="sw-order-detail__manual-order-label"\n            >\n                {{ $tc(\'sw-order.detail.labelManualOrder\') }}\n            </sw-label>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_header_title_new %}\n        <h2 v-else>\n            {{ $tc(\'sw-order.detail.textHeadlineNew\') }}\n        </h2>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_order_detail_actions_slot_smart_bar_actions %}\n        \n        {% block sw_order_detail_actions_abort %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-detail__smart-bar-cancel-button"\n            :disabled="isLoading || !acl.can(\'order.editor\')"\n            @click="onCancelEditing"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_order_detail_actions_save %}\n        <sw-button-process\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'order.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-order-detail__smart-bar-save-button"\n            variant="primary"\n            :disabled="isLoading || !acl.can(\'order.editor\')"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            {% if VUE3 %}\n            @update:process-success="saveEditsFinish"\n            {% else %}\n            @process-finish="saveEditsFinish"\n            {% endif %}\n            @click.prevent="onSaveEdits"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n        {% endblock %}\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_order_detail_content %}\n    <template #content>\n        \n        {% block sw_order_detail_content_leave_page_modal %}\n        <sw-order-leave-page-modal\n            v-if="isDisplayingLeavePageWarning"\n            @page-leave-cancel="onLeaveModalClose"\n            @page-leave-confirm="onLeaveModalConfirm"\n        />\n        {% endblock %}\n        <sw-card-view>\n\n            <sw-alert\n                v-if="isOrderEditing"\n                class="sw-order-detail__unsaved-warning"\n                variant="warning"\n            >\n                {{ $tc(\'sw-order.detail.textUnsavedOrderWarning\') }}\n            </sw-alert>\n            \n            {% block sw_order_detail_content_tabs %}\n            <sw-tabs\n                v-if="showTabs"\n                class="sw-order-detail__tabs"\n                :class="{ \'has-warning\': showWarningTabStyle }"\n                position-identifier="sw-order-detail"\n            >\n\n                \n                {% block sw_order_detail_content_tabs_general %}\n                <sw-tabs-item\n                    class="sw-order-detail__tabs-tab-general"\n                    :route="{ name: \'sw.order.detail.general\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-order.detail.tabGeneral\')"\n                >\n                    {{ $tc(\'sw-order.detail.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_order_detail_content_tabs_details %}\n                <sw-tabs-item\n                    class="sw-order-detail__tabs-tab-details"\n                    :route="{ name: \'sw.order.detail.details\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-order.detail.tabDetails\')"\n                >\n                    {{ $tc(\'sw-order.detail.tabDetails\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_order_detail_content_tabs_documents %}\n                <sw-tabs-item\n                    class="sw-order-detail__tabs-tab-documents"\n                    :class="{ \'has-warning\': isOrderEditing }"\n                    :route="{ name: \'sw.order.detail.documents\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-order.detail.tabDocuments\')"\n                >\n                    {{ $tc(\'sw-order.detail.tabDocuments\') }}\n\n                    <sw-icon\n                        v-if="isOrderEditing"\n                        v-tooltip="{ message: $tc(\'sw-order.documentTab.tooltipSaveBeforeCreateDocument\') }"\n                        class="sw-order-detail__tab-warning-badge"\n                        name="solid-exclamation-circle"\n                        size="12px"\n                    />\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_order_detail_content_tabs_extension %}{% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_order_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            {# v-show is used here as underlying components influence the loading state and v-if would destroy this behaviour #}\n            <router-view\n                v-if="order"\n                v-show="!isLoading"\n                ref="baseComponent"\n                :order-id="orderId"\n                :is-editing="isEditing"\n                :is-loading="isLoading"\n                :is-save-successful="isSaveSuccessful"\n                {% if VUE3 %}\n                @identifier-change.native="updateIdentifier"\n                @created-by-id-change.native="updateCreatedById"\n                @loading-change.native="onUpdateLoading"\n                @editing-change.native="onUpdateEditing"\n                @save-and-recalculate.native="onSaveAndRecalculate"\n                @recalculate-and-reload.native="onRecalculateAndReload"\n                @reload-entity-data.native="reloadEntityData"\n                @save-and-reload.native="onSaveAndReload"\n                @save-edits.native="onSaveEdits"\n                @error.native="onError"\n                {% else %}\n                @identifier-change="updateIdentifier"\n                @created-by-id-change="updateCreatedById"\n                @loading-change="onUpdateLoading"\n                @editing-change="onUpdateEditing"\n                @save-and-recalculate="onSaveAndRecalculate"\n                @recalculate-and-reload="onRecalculateAndReload"\n                @reload-entity-data="reloadEntityData"\n                @save-and-reload="onSaveAndReload"\n                @save-edits="onSaveEdits"\n                @error="onError"\n                {% endif %}\n            />\n            {% endblock %}\n\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","orderService","feature"],mixins:[w.getByName("notification")],props:{orderId:{type:String,required:!1,default:null}},data:function(){return{identifier:"",isEditing:!1,isLoading:!0,isSaveSuccessful:!1,createdById:"",isDisplayingLeavePageWarning:!1,nextRoute:null,hasNewVersionId:!1,hasOrderDeepEdit:!1}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:g(g({},v("swOrderDetail",["order","versionContext","orderAddressIds","editing"])),{},{orderIdentifier:function(){return null!==this.order?this.order.orderNumber:""},orderChanges:function(){return!!this.order&&this.orderRepository.hasChanges(this.order)},showTabs:function(){return this.$route.meta.$module.routes.detail.children.length>1},showWarningTabStyle:function(){return this.isOrderEditing&&"sw.order.detail.documents"===this.$route.name},isOrderEditing:function(){var e;return this.orderChanges||this.hasOrderDeepEdit||(null===(e=this.orderAddressIds)||void 0===e?void 0:e.length)>0},orderRepository:function(){return this.repositoryFactory.create("order")},orderCriteria:function(){var e=new p(1,25);return e.addAssociation("currency").addAssociation("orderCustomer.salutation").addAssociation("language"),e.getAssociation("lineItems").addFilter(p.equals("parentId",null)).addSorting(p.sort("position","ASC")),e.getAssociation("lineItems.children").addSorting(p.naturalSorting("label")),e.addAssociation("salesChannel"),e.addAssociation("addresses.country").addAssociation("addresses.countryState").addAssociation("deliveries.shippingMethod").addAssociation("deliveries.shippingOrderAddress").addAssociation("transactions.paymentMethod").addAssociation("documents.documentType").addAssociation("tags"),e.addAssociation("stateMachineState"),e.getAssociation("deliveries").addAssociation("stateMachineState").addSorting(p.sort("shippingCosts.unitPrice","DESC")),e.getAssociation("transactions").addAssociation("stateMachineState").addSorting(p.sort("createdAt")),e.addAssociation("billingAddress"),e}}),watch:{orderId:function(){this.createdComponent()},isOrderEditing:function(e){this.updateEditing(e)}},beforeCreate:function(){f.registerModule("swOrderDetail",u)},beforeDestroy:function(){this.beforeDestroyComponent(),f.unregisterModule("swOrderDetail")},beforeRouteLeave:function(e,t,n){this.isOrderEditing?(this.nextRoute=n,this.isDisplayingLeavePageWarning=!0):n()},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-order-detail-base__order",path:"order",scope:this}),window.addEventListener("beforeunload",this.beforeDestroyComponent),Shopware.State.commit("shopwareApps/setSelectedIds",this.orderId?[this.orderId]:[]),f.commit("swOrderDetail/setVersionContext",Shopware.Context.api),this.createNewVersionId()},beforeDestroyComponent:function(){var e=this;return s()(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasNewVersionId){t.next=5;break}return n=e.versionContext,f.commit("swOrderDetail/setVersionContext",Shopware.Context.api),t.next=5,e.orderRepository.deleteVersion(e.orderId,n.versionId,n);case 5:case"end":return t.stop()}}),t)})))()},updateIdentifier:function(e){this.identifier=e},updateCreatedById:function(e){this.createdById=e},onChangeLanguage:function(){this.$root.$emit("language-change")},saveEditsFinish:function(){this.isSaveSuccessful=!1,this.isEditing=!1},onStartEditing:function(){this.$root.$emit("order-edit-start")},onSaveEdits:function(){var e=this;return s()(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoading=!0,null===(n=e.orderAddressIds)||void 0===n||!n.length){t.next=4;break}return t.next=4,Promise.all(i()(e.orderAddressIds.filter((function(e){return e.orderAddressId!==e.customerAddressId})).map((function(t){return e.changeOrderAddress(t)})))).then((function(){f.commit("swOrderDetail/setOrderAddressIds",!1)})).catch((function(t){e.createNotificationError({message:t})}));case 4:e.orderRepository.save(e.order,e.versionContext).then((function(){return e.hasOrderDeepEdit=!1,e.orderRepository.mergeVersion(e.versionContext.versionId,e.versionContext)})).catch((function(t){e.onError("error",t)})).finally((function(){return f.commit("swOrderDetail/setVersionContext",Shopware.Context.api),e.createNewVersionId().then((function(){f.commit("swOrderDetail/setLoading",["order",!1]),f.commit("swOrderDetail/setSavedSuccessful",!0),e.isLoading=!1}))})),e.$root.$emit("order-edit-save");case 6:case"end":return t.stop()}}),t)})))()},onCancelEditing:function(){var e=this;this.isLoading=!0,f.commit("swOrderDetail/setLoading",["order",!0]);var t=this.versionContext;return f.commit("swOrderDetail/setVersionContext",Shopware.Context.api),this.hasNewVersionId=!1,this.orderRepository.deleteVersion(this.orderId,t.versionId,t).then((function(){e.hasOrderDeepEdit=!1,f.commit("swOrderDetail/setOrderAddressIds",!1)})).catch((function(t){e.onError("error",t)})).finally((function(){return e.missingProductLineItems=[],e.convertedProductLineItems=[],e.createNewVersionId().then((function(){f.commit("swOrderDetail/setLoading",["order",!1])}))}))},onSaveAndRecalculate:function(){var e=this;return f.commit("swOrderDetail/setLoading",["order",!0]),this.orderRepository.save(this.order,this.versionContext).then((function(){return e.orderService.recalculateOrder(e.orderId,e.versionContext.versionId,{},{})})).then((function(){return e.reloadEntityData()})).catch((function(t){e.onError("error",t)})).finally((function(){return Shopware.State.commit("swOrderDetail/setLoading",["order",!1]),Promise.resolve()}))},onRecalculateAndReload:function(){var e=this;return f.commit("swOrderDetail/setLoading",["order",!0]),this.orderService.recalculateOrder(this.orderId,this.versionContext.versionId,{},{}).then((function(){return e.reloadEntityData()})).catch((function(t){e.onError("error",t)})).finally((function(){return Shopware.State.commit("swOrderDetail/setLoading",["order",!1]),Promise.resolve()}))},onSaveAndReload:function(){var e=this;return f.commit("swOrderDetail/setLoading",["order",!0]),this.orderRepository.save(this.order,this.versionContext).then((function(){return e.reloadEntityData()})).catch((function(t){e.onError("error",t)})).finally((function(){return Shopware.State.commit("swOrderDetail/setLoading",["order",!1]),Promise.resolve()}))},onUpdateLoading:function(e){this.isLoading=e},onUpdateEditing:function(e){this.isEditing=e},onError:function(e){var t=null;try{t=e.response.data.errors[0].detail}catch(e){t=""}this.createNotificationError({message:this.$tc("sw-order.detail.messageRecalculationError")+t})},onLeaveModalClose:function(){this.nextRoute(!1),this.nextRoute=null,this.isDisplayingLeavePageWarning=!1},onLeaveModalConfirm:function(){var e=this;this.isDisplayingLeavePageWarning=!1,this.$nextTick((function(){e.nextRoute()}))},reloadEntityData:function(){var e=this;return f.commit("swOrderDetail/setLoading",["order",!0]),this.orderRepository.get(this.orderId,this.versionContext,this.orderCriteria).then((function(t){return"sw.order.detail.documents"!==e.$route.name&&(e.hasOrderDeepEdit=!0),f.commit("swOrderDetail/setOrder",t),f.commit("swOrderDetail/setLoading",["order",!1]),e.isLoading=!1,Promise.resolve()})).catch((function(){return Shopware.State.commit("swOrderDetail/setLoading",["order",!1]),Promise.reject()}))},createNewVersionId:function(){var e=this;return this.orderRepository.createVersion(this.orderId,this.versionContext).then((function(t){e.hasNewVersionId=!0,f.commit("swOrderDetail/setVersionContext",t),e.orderRepository.get(e.orderId,t,e.orderCriteria).then((function(t){return f.commit("swOrderDetail/setOrder",t),f.commit("swOrderDetail/setLoading",["order",!1]),e.isLoading=!1,Promise.resolve()})).catch((function(){return Shopware.State.commit("swOrderDetail/setLoading",["order",!1]),Promise.reject()}))}))},changeOrderAddress:function(e){var t=e.orderAddressId,n=e.customerAddressId;return this.orderService.changeOrderAddress(t,n,{},b.getVersionHeader(this.order.versionId))},updateEditing:function(e){f.commit("swOrderDetail/setEditing",e)}}}}}]);