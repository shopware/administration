(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[321],{"2ehh":function(e,n,t){"use strict";t.r(n);var o=t("7yzw"),c=t.n(o),r=t("CsSd"),d=t.n(r),i=t("92Mt"),a=t.n(i),s=t("TtzT"),u=t("9y8l"),l=t("Ef7E");t("JnAV");function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){d()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=Shopware.Mixin,w=Shopware.Data.Criteria,p=Shopware.Component.getComponentHelper().mapGetters;n.default={template:'\n{% block sw_order_document_card %}\n<sw-card\n    {% if VUE3 %}\n    v-show="!isDataLoading"\n    {% endif %}\n    position-identifier="sw-order-document-card"\n    :title="$tc(\'sw-order.documentCard.cardTitle\')"\n    :class="documentCardStyles"\n    :is-loading="isDataLoading"\n    {% if VUE3 %}\n    class="sw-order-detail-base__document-grid"\n    {% endif %}\n>\n    <template #grid>\n        \n        {% block sw_order_document_card_header %}\n        <sw-card-section\n            divider="bottom"\n            :secondary="showCardFilter"\n            slim\n        >\n\n            \n            {% block sw_order_document_card_header_filter %}\n            <sw-card-filter\n                v-if="showCardFilter"\n                :placeholder="$tc(\'sw-order.documentCard.searchBarPlaceholder\')"\n                @sw-card-filter-term-change="onSearchTermChange"\n            >\n\n                <template #filter>\n                    \n                    {% block sw_order_document_card_header_create_document_context_button %}\n                    <sw-button\n                        v-if="!attachView"\n                        v-tooltip="{\n                            message: tooltipCreateDocumentButton,\n                            disabled: acl.can(\'document.viewer\') && !isEditing,\n                            showOnDisabledElements: true\n                        }"\n                        size="small"\n                        variant="ghost"\n                        :disabled="!acl.can(\'document.viewer\') || isEditing"\n                        class="sw-order-document-grid-button"\n                        @click="onShowSelectDocumentTypeModal"\n                    >\n\n                        \n                        {% block sw_order_document_card_header_create_document_button_label %}\n                        {{ $tc(\'sw-order.documentCard.labelCreateNew\') }}\n                        {% endblock %}\n\n                    </sw-button>\n                    {% endblock %}\n\n                </template>\n            </sw-card-filter>\n            {% endblock %}\n\n        </sw-card-section>\n        {% endblock %}\n\n        \n        {% block sw_order_document_card_grid %}\n        <sw-data-grid\n            v-if="!documentsEmpty"\n            :data-source="documents"\n            :columns="getDocumentColumns"\n            :full-page="false"\n            :show-settings="false"\n            :show-selection="false"\n            :show-actions="!attachView"\n            :is-loading="isLoading"\n            :allow-column-edit="false"\n            :allow-inline-edit="false"\n            identifier="sw-order-document-grid"\n        >\n\n            \n            {% block sw_order_document_card_grid_column_date %}\n            <template #column-createdAt="{ item }">\n                \n                {% block sw_order_document_card_grid_column_date_label %}\n                {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_order_document_card_grid_column_sent %}\n            <template #column-sent="{ item }">\n                \n                {% block sw_order_document_card_grid_column_sent_label %}\n                <sw-data-grid-column-boolean\n                    v-model="item.sent"\n                    :is-inline-edit="false"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_order_document_card_grid_column_attach %}\n            <template\n                v-if="attachView"\n                #column-attach="{ item }"\n            >\n                \n                {% block sw_order_document_card_grid_column_attach_label %}\n                <sw-data-grid-column-boolean\n                    v-model="item.attach"\n                    :is-inline-edit="true"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_order_document_card_grid_actions %}\n            <template\n                v-if="!attachView"\n                #actions="{ item }"\n            >\n                \n                {% block sw_order_document_card_grid_action_open %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\')"\n                    @click="onOpenDocument(item.id, item.deepLinkCode)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_open_label %}\n                    {{ $tc(\'sw-order.documentCard.labelOpenDocument\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_download %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\')"\n                    @click="onDownload(item.id, item.deepLinkCode)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_download_label %}\n                    {{ $tc(\'sw-order.documentCard.labelDownloadPdf\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_send %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\')"\n                    @click="onSendDocument(item.id)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_send_label %}\n                    {{ $tc(\'sw-order.documentCard.labelSendDocument\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_mark_sent %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\') || item.sent"\n                    @click="onMarkDocumentAsSent(item.id)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_mark_sent_label %}\n                    {{ $tc(\'sw-order.documentCard.labelMarkAsSent\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_mark_unsent %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\') || !item.sent"\n                    @click="onMarkDocumentAsUnsent(item.id)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_mark_unsent_label %}\n                    {{ $tc(\'sw-order.documentCard.labelMarkAsUnsent\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n        </sw-data-grid>\n        {% endblock %}\n\n    </template>\n\n    \n    {% block sw_order_document_card_grid_column_modal %}\n    {% if VUE3 %}\n    <div v-if="showModal">\n    {% endif %}\n        <component\n            :is="documentModal"\n            {% if VUE2 %}\n            v-if="showModal"\n            {% endif %}\n            :current-document-type="currentDocumentType"\n            :order="order"\n            :is-loading-document="isLoadingDocument"\n            :is-loading-preview="isLoadingPreview"\n            @loading-document="onLoadingDocument"\n            @loading-preview="onLoadingPreview"\n            @page-leave="onCancelCreation"\n            @document-create="onCreateDocument"\n            @preview-show="onPreview"\n        />\n    {% if VUE3 %}\n    </div>\n    {% endif %}\n    {% endblock %}\n\n    \n    {% block sw_order_document_card_grid_column_document_type_modal %}\n    <sw-order-select-document-type-modal\n        v-if="showSelectDocumentTypeModal"\n        {% if VUE3 %}\n        v-model:value="currentDocumentType"\n        {% else %}\n        v-model="currentDocumentType"\n        {% endif %}\n        :order="order"\n        @modal-close="onCloseSelectDocumentTypeModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_card_grid_column_document_send_modal %}\n    <sw-order-send-document-modal\n        v-if="showSendDocumentModal"\n        :document="sendDocument"\n        :order="order"\n        @modal-close="onCloseSendDocumentModal"\n        @document-sent="onDocumentSent"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_card_empty_state %}\n    <sw-empty-state\n        v-if="documentsEmpty"\n        :title="emptyStateTitle"\n        :show-description="false"\n    >/\n        <template #icon>\n            <img\n                :src="assetFilter(\'/administration/static/img/empty-states/order-empty-state.svg\')"\n                :alt="$tc(\'sw-order.list.messageEmpty\')"\n            >\n        </template>\n\n        <template #actions>\n            <sw-button\n                v-if="showCreateDocumentButton"\n                v-tooltip="{\n                    message: tooltipCreateDocumentButton,\n                    disabled: acl.can(\'document.viewer\') && !isEditing,\n                    showOnDisabledElements: true\n                }"\n                size="small"\n                variant="ghost"\n                :disabled="!acl.can(\'document.viewer\') || isEditing"\n                class="sw-order-document-grid-button"\n                @click="onShowSelectDocumentTypeModal"\n            >\n\n                \n                {% block sw_order_document_card_header_create_document_button_label %}\n                {{ $tc(\'sw-order.documentCard.labelCreateNew\') }}\n                {% endblock %}\n\n            </sw-button>\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["documentService","numberRangeService","repositoryFactory","feature","acl"],mixins:[_.getByName("listing"),_.getByName("placeholder"),_.getByName("notification")],props:{order:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1},attachView:{type:Boolean,required:!1,default:!1}},data:function(){return{documentsLoading:!1,cardLoading:!1,documents:[],documentTypes:null,showModal:!1,currentDocumentType:null,documentNumber:null,documentComment:"",term:"",attachment:{},isLoadingDocument:!1,isLoadingPreview:!1,showSelectDocumentTypeModal:!1,showSendDocumentModal:!1,sendDocument:null}},computed:h(h({},p("swOrderDetail",["isEditing"])),{},{creditItems:function(){var e=[];return this.order.lineItems.forEach((function(n){"credit"===n.type&&e.push(n)})),e},documentTypeRepository:function(){return this.repositoryFactory.create("document_type")},documentRepository:function(){return this.repositoryFactory.create("document")},documentsEmpty:function(){return 0===this.documents.length},documentModal:function(){var e=this.currentDocumentType.technicalName.replace(/_/g,"-");if(this.feature.isActive("VUE3")){if("sw-order-document-settings-".concat(e,"-modal")in Object(l.k)().appContext.components)return"sw-order-document-settings-".concat(e,"-modal")}else if(this.$options.components["sw-order-document-settings-".concat(e,"-modal")])return"sw-order-document-settings-".concat(e,"-modal");return"sw-order-document-settings-modal"},documentCardStyles:function(){return"sw-order-document-card ".concat(this.documentsEmpty?"sw-order-document-card--is-empty":"")},documentTypeCriteria:function(){var e=new w(1,100);return e.addSorting(w.sort("name","ASC")),e},documentCriteria:function(){var e=new w(this.page,this.limit);return e.addSorting(w.sort("createdAt","DESC")),e.addAssociation("documentType"),e.addFilter(w.equals("order.id",this.order.id)),this.term?(e.setTerm(this.term),e.addQuery(w.contains("config.documentDate",this.term),u.c.HIGH_SEARCH_RANKING),e.addQuery(w.equals("config.documentNumber",this.term),u.c.HIGH_SEARCH_RANKING),e):e},getDocumentColumns:function(){var e=[{property:"createdAt",dataIndex:"createdAt",label:"sw-order.documentCard.labelDate",allowResize:!1,primary:!0},{property:"config.documentNumber",dataIndex:"config.documentNumber",label:"sw-order.documentCard.labelNumber",allowResize:!1},{property:"documentType.name",dataIndex:"documentType.name",label:"sw-order.documentCard.labelType",allowResize:!1},{property:"sent",dataIndex:"sent",label:"sw-order.documentCard.labelSent",allowResize:!1,align:"center"}];return this.attachView&&e.push({property:"attach",dataIndex:"attach",label:"sw-order.documentCard.labelAttach",allowResize:!1,align:"center"}),e},isDataLoading:function(){return this.isLoading||this.documentsLoading||this.cardLoading},showCardFilter:function(){var e,n;return(null===(e=this.order)||void 0===e||null===(n=e.documents)||void 0===n?void 0:n.length)>0},showCreateDocumentButton:function(){var e,n;return!(null!==(e=this.order)&&void 0!==e&&null!==(n=e.documents)&&void 0!==n&&n.length)},emptyStateTitle:function(){var e,n;return(null===(e=this.order)||void 0===e||null===(n=e.documents)||void 0===n?void 0:n.length)>0?this.$tc("sw-order.documentCard.messageNoDocumentFound"):this.$tc("sw-order.documentCard.messageEmptyTitle")},tooltipCreateDocumentButton:function(){return this.acl.can("document.viewer")?this.$tc("sw-order.documentTab.tooltipSaveBeforeCreateDocument"):this.$tc("sw-privileges.tooltip.warning")},assetFilter:function(){return Shopware.Filter.getByName("asset")},dateFilter:function(){return Shopware.Filter.getByName("date")}}),watch:{isDataLoading:{handler:function(e){this.$emit("update-loading",e)}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.cardLoading=!0,this.documentTypeRepository.search(this.documentTypeCriteria).then((function(n){e.documentTypes=n,e.cardLoading=!1})),this.documentService.setListener(this.convertStoreEventToVueEvent)},convertStoreEventToVueEvent:function(e){var n=this,t=e.action,o=e.payload;if(t===s.DocumentEvents.DOCUMENT_FAILED){var c=o.detail;if("DOCUMENT__NUMBER_ALREADY_EXISTS"===o.code){c=this.$tc("sw-order.documentCard.error.DOCUMENT__NUMBER_ALREADY_EXISTS",1,o.meta.parameters||{})}this.createNotificationError({message:c})}else t===s.DocumentEvents.DOCUMENT_FINISHED&&(this.showModal=!1,this.$nextTick().then((function(){n.getList().then((function(){n.$emit("document-save")}))})))},getList:function(){var e=this;return this.documentsLoading=!0,this.documentRepository.search(this.documentCriteria).then((function(n){return e.total=n.total,e.documents=n,e.documentsLoading=!1,Promise.resolve()}))},documentTypeAvailable:function(e){return"storno"!==e.technicalName&&"credit_note"!==e.technicalName||("storno"===e.technicalName||"credit_note"===e.technicalName&&0!==this.creditItems.length)&&this.invoiceExists()},invoiceExists:function(){return this.documents.some((function(e){return"invoice"===e.documentType.technicalName}))},onSearchTermChange:function(e){this.term=e,this.getList()},createDocument:function(e,n,t,o,c){return this.documentService.createDocument(e,n,t,o,{},{},c)},onCancelCreation:function(){this.showModal=!1,this.currentDocumentType=null},onPrepareDocument:function(){this.showModal=!0},openDocument:function(e,n){this.documentService.getDocument(e,n,Shopware.Context.api,!0).then((function(e){if(e.data){var n=document.createElement("a");n.href=URL.createObjectURL(e.data),n.target="_blank",n.dispatchEvent(new MouseEvent("click")),n.remove()}}))},downloadDocument:function(e,n){this.documentService.getDocument(e,n,Shopware.Context.api,!0).then((function(e){if(e.data){var n=e.headers["content-disposition"].split("filename=")[1],t=document.createElement("a");t.href=URL.createObjectURL(e.data),t.download=n,t.dispatchEvent(new MouseEvent("click")),t.remove()}}))},markDocumentAsSent:function(e){var n=this,t=this.documents.get(e);t.sent=!0,this.documentRepository.save(t).then((function(){n.getList()}))},markDocumentAsUnsent:function(e){var n=this,t=this.documents.get(e);t.sent=!1,this.documentRepository.save(t).then((function(){n.getList()}))},onCreateDocument:function(e,n){var t=arguments,o=this;return c()(a.a.mark((function c(){var r,d,i,s,u,l,m,h,_;return a.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r=t.length>2&&void 0!==t[2]?t[2]:null,d=t.length>3&&void 0!==t[3]?t[3]:null,o.isLoadingDocument=!0,c.next=5,o.$nextTick();case 5:return c.prev=5,c.next=8,o.createDocument(o.order.id,o.currentDocumentType.technicalName,e,r,d);case 8:if(u=c.sent){c.next=11;break}return c.abrupt("return");case 11:if(l=Array.isArray(u)?u[0].documentId:null==u||null===(i=u.data)||void 0===i?void 0:i.documentId,m=Array.isArray(u)?u[0].documentDeepLink:null==u||null===(s=u.data)||void 0===s?void 0:s.documentDeepLink,!e.documentMediaFileId){c.next=20;break}return c.next=16,o.documentRepository.get(l,Shopware.Context.api);case 16:return(h=c.sent).documentMediaFileId=e.documentMediaFileId,c.next=20,o.documentRepository.save(h);case 20:"download"===n?o.downloadDocument(l,m):"send"===n&&((_=new w(null,null)).addAssociation("documentType"),o.documentRepository.get(l,Shopware.Context.api,_).then((function(e){e&&(o.sendDocument=e,o.showSendDocumentModal=!0)})));case 21:return c.prev=21,o.isLoadingDocument=!1,c.finish(21);case 24:case"end":return c.stop()}}),c,null,[[5,,21,24]])})))()},onPreview:function(e){var n=this;return this.isLoadingPreview=!0,this.documentService.getDocumentPreview(this.order.id,this.order.deepLinkCode,this.currentDocumentType.technicalName,e).then((function(e){if(e.data){var n=document.createElement("a");n.href=URL.createObjectURL(e.data),n.target="_blank",n.dispatchEvent(new MouseEvent("click")),n.remove()}return e})).finally((function(){n.isLoadingPreview=!1}))},onOpenDocument:function(e,n){this.openDocument(e,n)},onDownload:function(e,n){this.downloadDocument(e,n)},onSendDocument:function(e){this.sendDocument=this.documents.get(e),this.showSendDocumentModal=!0},onMarkDocumentAsSent:function(e){this.markDocumentAsSent(e)},onMarkDocumentAsUnsent:function(e){this.markDocumentAsUnsent(e)},onCloseSendDocumentModal:function(){this.sendDocument=null,this.showSendDocumentModal=!1},onDocumentSent:function(){this.markDocumentAsSent(this.sendDocument.id),this.onCloseSendDocumentModal()},onLoadingDocument:function(){this.isLoadingDocument=!0},onLoadingPreview:function(){this.isLoadingPreview=!0},onShowSelectDocumentTypeModal:function(){this.showSelectDocumentTypeModal=!0},onCloseSelectDocumentTypeModal:function(e){this.showSelectDocumentTypeModal=!1,e&&this.onPrepareDocument()}}}},JnAV:function(e,n,t){var o=t("dNTG");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("P8hj").default)("044c9c27",o,!0,{})},dNTG:function(e,n,t){}}]);
//# sourceMappingURL=6dce0e8ae2136f81db1b.js.map