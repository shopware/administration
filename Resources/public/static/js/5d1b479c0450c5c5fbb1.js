(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[43648],{83376:function(){},43648:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var o=t(85787),d=t(10418),c=t(83802);t(67936);let{Mixin:a}=Shopware,{Criteria:r}=Shopware.Data,{mapGetters:i}=Shopware.Component.getComponentHelper();var s={template:'\n{% block sw_order_document_card %}\n<sw-card\n    v-show="!isDataLoading"\n    position-identifier="sw-order-document-card"\n    :title="$tc(\'sw-order.documentCard.cardTitle\')"\n    :class="documentCardStyles"\n    :is-loading="isDataLoading"\n    class="sw-order-detail-base__document-grid"\n>\n    <template #grid>\n        \n        {% block sw_order_document_card_header %}\n        <sw-card-section\n            divider="bottom"\n            :secondary="showCardFilter"\n            slim\n        >\n\n            \n            {% block sw_order_document_card_header_filter %}\n            <sw-card-filter\n                v-if="showCardFilter"\n                :placeholder="$tc(\'sw-order.documentCard.searchBarPlaceholder\')"\n                @sw-card-filter-term-change="onSearchTermChange"\n            >\n\n                <template #filter>\n                    \n                    {% block sw_order_document_card_header_create_document_context_button %}\n                    <sw-button\n                        v-if="!attachView"\n                        v-tooltip="{\n                            message: tooltipCreateDocumentButton,\n                            disabled: acl.can(\'document.viewer\') && !isEditing,\n                            showOnDisabledElements: true\n                        }"\n                        size="small"\n                        variant="ghost"\n                        :disabled="!acl.can(\'document.viewer\') || isEditing"\n                        class="sw-order-document-grid-button"\n                        @click="onShowSelectDocumentTypeModal"\n                    >\n\n                        \n                        {% block sw_order_document_card_header_create_document_button_label %}\n                        {{ $tc(\'sw-order.documentCard.labelCreateNew\') }}\n                        {% endblock %}\n\n                    </sw-button>\n                    {% endblock %}\n\n                </template>\n            </sw-card-filter>\n            {% endblock %}\n\n        </sw-card-section>\n        {% endblock %}\n\n        \n        {% block sw_order_document_card_grid %}\n        <sw-data-grid\n            v-if="!documentsEmpty"\n            :data-source="documents"\n            :columns="getDocumentColumns"\n            :full-page="false"\n            :show-settings="false"\n            :show-selection="false"\n            :show-actions="!attachView"\n            :is-loading="isLoading"\n            :allow-column-edit="false"\n            :allow-inline-edit="false"\n            identifier="sw-order-document-grid"\n        >\n\n            \n            {% block sw_order_document_card_grid_column_date %}\n            <template #column-createdAt="{ item }">\n                \n                {% block sw_order_document_card_grid_column_date_label %}\n                {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_order_document_card_grid_column_sent %}\n            <template #column-sent="{ item }">\n                \n                {% block sw_order_document_card_grid_column_sent_label %}\n                <sw-data-grid-column-boolean\n                    v-model:value="item.sent"\n                    :is-inline-edit="false"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_order_document_card_grid_column_attach %}\n            <template\n                v-if="attachView"\n                #column-attach="{ item }"\n            >\n                \n                {% block sw_order_document_card_grid_column_attach_label %}\n                <sw-data-grid-column-boolean\n                    v-model:value="item.attach"\n                    :is-inline-edit="true"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_order_document_card_grid_actions %}\n            <template\n                v-if="!attachView"\n                #actions="{ item }"\n            >\n                \n                {% block sw_order_document_card_grid_action_open %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\')"\n                    @click="onOpenDocument(item.id, item.deepLinkCode)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_open_label %}\n                    {{ $tc(\'sw-order.documentCard.labelOpenDocument\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_download %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\')"\n                    @click="onDownload(item.id, item.deepLinkCode)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_download_label %}\n                    {{ $tc(\'sw-order.documentCard.labelDownloadPdf\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_send %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\') || !acl.can(\'api_send_email\')"\n                    @click="onSendDocument(item.id)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_send_label %}\n                    {{ $tc(\'sw-order.documentCard.labelSendDocument\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_mark_sent %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\') || item.sent"\n                    @click="onMarkDocumentAsSent(item.id)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_mark_sent_label %}\n                    {{ $tc(\'sw-order.documentCard.labelMarkAsSent\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_order_document_card_grid_action_mark_unsent %}\n                <sw-context-menu-item\n                    :disabled="!acl.can(\'document.viewer\') || !item.sent"\n                    @click="onMarkDocumentAsUnsent(item.id)"\n                >\n                    \n                    {% block sw_order_document_card_grid_action_mark_unsent_label %}\n                    {{ $tc(\'sw-order.documentCard.labelMarkAsUnsent\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n        </sw-data-grid>\n        {% endblock %}\n\n    </template>\n\n    \n    {% block sw_order_document_card_grid_column_modal %}\n    <div v-if="showModal">\n        <component\n            :is="documentModal"\n            :current-document-type="currentDocumentType"\n            :order="order"\n            :is-loading-document="isLoadingDocument"\n            :is-loading-preview="isLoadingPreview"\n            @loading-document="onLoadingDocument"\n            @loading-preview="onLoadingPreview"\n            @page-leave="onCancelCreation"\n            @document-create="onCreateDocument"\n            @preview-show="onPreview"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_document_card_grid_column_document_type_modal %}\n    <sw-order-select-document-type-modal\n        v-if="showSelectDocumentTypeModal"\n        v-model:value="currentDocumentType"\n        :order="order"\n        @modal-close="onCloseSelectDocumentTypeModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_card_grid_column_document_send_modal %}\n    <sw-order-send-document-modal\n        v-if="showSendDocumentModal"\n        :document="sendDocument"\n        :order="order"\n        @modal-close="onCloseSendDocumentModal"\n        @document-sent="onDocumentSent"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_document_card_empty_state %}\n    <sw-empty-state\n        v-if="documentsEmpty"\n        :title="emptyStateTitle"\n        :show-description="false"\n    >/\n        <template #icon>\n            <img\n                :src="assetFilter(\'/administration/static/img/empty-states/order-empty-state.svg\')"\n                :alt="$tc(\'sw-order.list.messageEmpty\')"\n            >\n        </template>\n\n        <template #actions>\n            <sw-button\n                v-if="showCreateDocumentButton"\n                v-tooltip="{\n                    message: tooltipCreateDocumentButton,\n                    disabled: acl.can(\'document.viewer\') && !isEditing,\n                    showOnDisabledElements: true\n                }"\n                size="small"\n                variant="ghost"\n                :disabled="!acl.can(\'document.viewer\') || isEditing"\n                class="sw-order-document-grid-button"\n                @click="onShowSelectDocumentTypeModal"\n            >\n\n                \n                {% block sw_order_document_card_header_create_document_button_label %}\n                {{ $tc(\'sw-order.documentCard.labelCreateNew\') }}\n                {% endblock %}\n\n            </sw-button>\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["documentService","numberRangeService","repositoryFactory","feature","acl"],mixins:[a.getByName("listing"),a.getByName("placeholder"),a.getByName("notification")],props:{order:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1},attachView:{type:Boolean,required:!1,default:!1}},data(){return{documentsLoading:!1,cardLoading:!1,documents:[],documentTypes:null,showModal:!1,currentDocumentType:null,documentNumber:null,documentComment:"",term:"",attachment:{},isLoadingDocument:!1,isLoadingPreview:!1,showSelectDocumentTypeModal:!1,showSendDocumentModal:!1,sendDocument:null}},computed:{...i("swOrderDetail",["isEditing"]),creditItems(){let e=[];return this.order.lineItems.forEach(n=>{"credit"===n.type&&e.push(n)}),e},documentTypeRepository(){return this.repositoryFactory.create("document_type")},documentRepository(){return this.repositoryFactory.create("document")},documentsEmpty(){return 0===this.documents.length},documentModal(){let e=this.currentDocumentType.technicalName.replace(/_/g,"-");return`sw-order-document-settings-${e}-modal` in(0,c.FN)().appContext.components?`sw-order-document-settings-${e}-modal`:"sw-order-document-settings-modal"},documentCardStyles(){return`sw-order-document-card ${this.documentsEmpty?"sw-order-document-card--is-empty":""}`},documentTypeCriteria(){let e=new r(1,100);return e.addSorting(r.sort("name","ASC")),e},documentCriteria(){let e=new r(this.page,this.limit);return e.addSorting(r.sort("createdAt","DESC")),e.addAssociation("documentType"),e.addFilter(r.equals("order.id",this.order.id)),this.term&&(e.setTerm(this.term),e.addQuery(r.contains("config.documentDate",this.term),d.pp.HIGH_SEARCH_RANKING),e.addQuery(r.equals("config.documentNumber",this.term),d.pp.HIGH_SEARCH_RANKING)),e},getDocumentColumns(){let e=[{property:"createdAt",dataIndex:"createdAt",label:"sw-order.documentCard.labelDate",allowResize:!1,primary:!0},{property:"config.documentNumber",dataIndex:"config.documentNumber",label:"sw-order.documentCard.labelNumber",allowResize:!1},{property:"documentType.name",dataIndex:"documentType.name",label:"sw-order.documentCard.labelType",allowResize:!1},{property:"sent",dataIndex:"sent",label:"sw-order.documentCard.labelSent",allowResize:!1,align:"center"}];return this.attachView&&e.push({property:"attach",dataIndex:"attach",label:"sw-order.documentCard.labelAttach",allowResize:!1,align:"center"}),e},isDataLoading(){return this.isLoading||this.documentsLoading||this.cardLoading},showCardFilter(){return this.order?.documents?.length>0},showCreateDocumentButton(){return!this.order?.documents?.length},emptyStateTitle(){return this.order?.documents?.length>0?this.$tc("sw-order.documentCard.messageNoDocumentFound"):this.$tc("sw-order.documentCard.messageEmptyTitle")},tooltipCreateDocumentButton(){return this.acl.can("document.viewer")?this.$tc("sw-order.documentTab.tooltipSaveBeforeCreateDocument"):this.$tc("sw-privileges.tooltip.warning")},assetFilter(){return Shopware.Filter.getByName("asset")},dateFilter(){return Shopware.Filter.getByName("date")}},watch:{isDataLoading:{handler(e){this.$emit("update-loading",e)}}},created(){this.createdComponent()},methods:{createdComponent(){this.cardLoading=!0,this.documentTypeRepository.search(this.documentTypeCriteria).then(e=>{this.documentTypes=e,this.cardLoading=!1}),this.documentService.setListener(this.convertStoreEventToVueEvent)},convertStoreEventToVueEvent({action:e,payload:n}){if(e===o.DocumentEvents.DOCUMENT_FAILED){let e=n.detail;"DOCUMENT__NUMBER_ALREADY_EXISTS"===n.code&&(e=this.$tc("sw-order.documentCard.error.DOCUMENT__NUMBER_ALREADY_EXISTS",1,n.meta.parameters||{})),this.createNotificationError({message:e})}else e===o.DocumentEvents.DOCUMENT_FINISHED&&(this.showModal=!1,this.$nextTick().then(()=>{this.getList().then(()=>{this.$emit("document-save")})}))},getList(){return this.documentsLoading=!0,this.documentRepository.search(this.documentCriteria).then(e=>(this.total=e.total,this.documents=e,this.documentsLoading=!1,Promise.resolve()))},documentTypeAvailable(e){return"storno"!==e.technicalName&&"credit_note"!==e.technicalName||("storno"===e.technicalName||"credit_note"===e.technicalName&&0!==this.creditItems.length)&&this.invoiceExists()},invoiceExists(){return this.documents.some(e=>"invoice"===e.documentType.technicalName)},onSearchTermChange(e){this.term=e,this.getList()},createDocument(e,n,t,o,d){return this.documentService.createDocument(e,n,t,o,{},{},d)},onCancelCreation(){this.showModal=!1,this.currentDocumentType=null},onPrepareDocument(){this.showModal=!0},openDocument(e,n){this.documentService.getDocument(e,n,Shopware.Context.api,!0).then(e=>{if(e.data){let n=document.createElement("a");n.href=URL.createObjectURL(e.data),n.target="_blank",n.dispatchEvent(new MouseEvent("click")),n.remove()}})},downloadDocument(e,n){this.documentService.getDocument(e,n,Shopware.Context.api,!0).then(e=>{if(e.data){let n=e.headers["content-disposition"].split("filename=")[1],t=document.createElement("a");t.href=URL.createObjectURL(e.data),t.download=n,t.dispatchEvent(new MouseEvent("click")),t.remove()}})},markDocumentAsSent(e){let n=this.documents.get(e);n.sent=!0,this.documentRepository.save(n).then(()=>{this.getList()})},markDocumentAsUnsent(e){let n=this.documents.get(e);n.sent=!1,this.documentRepository.save(n).then(()=>{this.getList()})},async onCreateDocument(e,n,t=null,o=null){this.isLoadingDocument=!0,await this.$nextTick();try{let d=await this.createDocument(this.order.id,this.currentDocumentType.technicalName,e,t,o);if(!d)return;let c=Array.isArray(d)?d[0].documentId:d?.data?.documentId,a=Array.isArray(d)?d[0].documentDeepLink:d?.data?.documentDeepLink;if(e.documentMediaFileId){let n=await this.documentRepository.get(c,Shopware.Context.api);n.documentMediaFileId=e.documentMediaFileId,await this.documentRepository.save(n)}if("download"===n)this.downloadDocument(c,a);else if("send"===n){let e=new r(null,null);e.addAssociation("documentType"),this.documentRepository.get(c,Shopware.Context.api,e).then(e=>{e&&(this.sendDocument=e,this.showSendDocumentModal=!0)})}}finally{this.isLoadingDocument=!1}},onPreview(e){return this.isLoadingPreview=!0,this.documentService.getDocumentPreview(this.order.id,this.order.deepLinkCode,this.currentDocumentType.technicalName,e).then(e=>{if(e.data){let n=document.createElement("a");n.href=URL.createObjectURL(e.data),n.target="_blank",n.dispatchEvent(new MouseEvent("click")),n.remove()}return e}).finally(()=>{this.isLoadingPreview=!1})},onOpenDocument(e,n){this.openDocument(e,n)},onDownload(e,n){this.downloadDocument(e,n)},onSendDocument(e){this.sendDocument=this.documents.get(e),this.showSendDocumentModal=!0},onMarkDocumentAsSent(e){this.markDocumentAsSent(e)},onMarkDocumentAsUnsent(e){this.markDocumentAsUnsent(e)},onCloseSendDocumentModal(){this.sendDocument=null,this.showSendDocumentModal=!1},onDocumentSent(){this.markDocumentAsSent(this.sendDocument.id),this.onCloseSendDocumentModal()},onLoadingDocument(){this.isLoadingDocument=!0},onLoadingPreview(){this.isLoadingPreview=!0},onShowSelectDocumentTypeModal(){this.showSelectDocumentTypeModal=!0},onCloseSelectDocumentTypeModal(e){this.showSelectDocumentTypeModal=!1,e&&this.onPrepareDocument()}}}},67936:function(e,n,t){var o=t(83376);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),t(45346).Z("4404f711",o,!0,{})}}]);