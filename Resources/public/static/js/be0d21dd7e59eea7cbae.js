(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[201],{DItw:function(e,t,n){},QmCP:function(e,t,n){var i=n("DItw");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("P8hj").default)("101b75a4",i,!0,{})},eKaq:function(e,t,n){"use strict";n.r(t);var i=n("6lmj"),s=n.n(i),o=n("7yzw"),a=n.n(o),c=n("CsSd"),r=n.n(c),l=n("92Mt"),d=n.n(l),p=n("D03b");n("QmCP");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=Shopware,h=m.Component,f=m.Mixin,y=m.Utils,v=h.getComponentHelper().mapPropertyErrors,S=Shopware.Classes.ShopwareError,_=Shopware.Utils.debounce,w=Shopware.Utils.object,b=w.cloneDeep,k=w.getObjectDiff,E=Shopware.Utils.debug.warn,C=Shopware.Data.Criteria;t.default={template:'\n{% block sw_cms_detail %}\n<sw-page\n    class="sw-cms-detail"\n    :show-search-bar="false"\n    :show-smart-bar="false"\n>\n    \n    {% block sw_cms_detail_content %}\n    <template #content>\n        <div class="sw-cms-detail__content">\n            \n            {% block sw_cms_detail_toolbar %}\n            <sw-cms-toolbar>\n                \n                {% block sw_cms_detail_toolbar_language_switch %}\n                <template #language-switch>\n                    <sw-language-switch\n                        :disabled="isLoading || page.locked"\n                        :allow-edit="acl.can(\'cms.editor\')"\n                        :save-changes-function="saveOnLanguageChange"\n                        :abort-change-function="abortOnLanguageChange"\n                        @on-change="onChangeLanguage"\n                    />\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_toolbar_title %}\n                <template #title>\n                    <div class="sw-cms-detail__page-info">\n                        \n                        {% block sw_cms_detail_toolbar_back_button %}\n                        <router-link\n                            :to="{ name: \'sw.cms.index\' }"\n                            class="sw-cms-detail__back-btn"\n                        >\n                            <sw-icon name="regular-times" />\n                        </router-link>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_toolbar_page_name %}\n                        <h2 class="sw-cms-detail__page-name">\n                            {{ placeholder(page, \'name\') }}\n                        </h2>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_toolbar_page_type %}\n                        <div\n                            v-if="page.type"\n                            class="sw-cms-detail__page-type"\n                        >\n                            {{ $tc(pageType?.title) }}\n                        </div>\n                        {% endblock %}\n\n                        <div\n                            v-if="isDefaultLayout"\n                            class="sw-cms-detail__page-defaults"\n                        >\n                            {{ $tc(\'sw-cms.detail.label.defaultLayout\') }}\n                        </div>\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_toolbar_device_actions %}\n                <template #tools>\n                    <div\n                        v-if="pageHasSections"\n                        class="sw-cms-detail__device-actions"\n                    >\n                        \n                        {% block sw_cms_detail_toolbar_device_actions_mobile %}\n                        <sw-icon\n                            name="regular-mobile"\n                            :class="{ \'is--active\': currentDeviceView === \'mobile\' }"\n                            @click="onDeviceViewChange(\'mobile\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_toolbar_device_actions_tablet_landscape %}\n                        <sw-icon\n                            name="regular-tablet"\n                            :class="{ \'is--active\': currentDeviceView === \'tablet-landscape\' }"\n                            @click="onDeviceViewChange(\'tablet-landscape\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_toolbar_device_actions_desktop %}\n                        <sw-icon\n                            name="regular-desktop"\n                            :class="{ \'is--active\': currentDeviceView === \'desktop\' }"\n                            @click="onDeviceViewChange(\'desktop\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_toolbar_device_actions_form %}\n                        <sw-icon\n                            name="regular-bars-square"\n                            :class="{ \'is--active\': currentDeviceView === \'form\', \'is--disabled\': !acl.can(\'cms.editor\') }"\n                            @click="onDeviceViewChange(\'form\')"\n                        />\n                        {% endblock %}\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_toolbar_actions %}\n                <template #actions>\n                    <div class="sw-cms-detail__actions">\n\n                        \n                        {% block sw_cms_detail_toolbar_actions_save %}\n                        <sw-button-process\n                            v-tooltip.bottom="tooltipSave"\n                            class="sw-cms-detail__save-action"\n                            :is-loading="isLoading"\n                            :process-success="isSaveSuccessful"\n                            :disabled="isLoading || page.locked || !acl.can(\'cms.editor\')"\n                            variant="primary"\n                            {% if VUE3 %}\n                            @update:process-success="saveFinish"\n                            {% else %}\n                            @process-finish="saveFinish"\n                            {% endif %}\n                            @click="onSave"\n                        >\n                            {{ $tc(\'sw-cms.detail.label.buttonSave\') }}\n                        </sw-button-process>\n                        {% endblock %}\n                    </div>\n                </template>\n                {% endblock %}\n            </sw-cms-toolbar>\n            {% endblock %}\n\n            \n            {% block sw_cms_detail_stage_container %}\n            <div class="sw-cms-detail__stage-container">\n                <sw-overlay v-if="page.locked" />\n\n                \n                {% block sw_cms_detail_stage_form_view %}\n                <div\n                    v-if="currentDeviceView === \'form\'"\n                    class="sw-cms-detail__page-form"\n                >\n                    \n                    {% block sw_cms_detail_page_notification %}\n                    <div\n                        v-if="page.locked"\n                        class="sw-cms-detail__page-notification"\n                    >\n                        <sw-alert\n                            class="sw-cms-detail__page-notification-alert"\n                            variant="info"\n                        >\n                            {{ $tc(\'sw-cms.detail.label.lockedNotification\') }}\n                        </sw-alert>\n                    </div>\n                    {% endblock %}\n\n                    <sw-cms-page-form\n                        v-if="!isLoading"\n                        :page="page"\n                    />\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_stage_wrapper %}\n                <div\n                    v-else\n                    class="sw-cms-detail__stage"\n                >\n\n                    \n                    {% block sw_cms_detail_toolbar_notification %}\n                    \n                    {% block sw_cms_detail_toolbar_notification_errors %}\n                    <div\n                        v-if="hasPageErrors"\n                        class="sw-cms-detail__page-notification"\n                    >\n                        <sw-alert\n                            class="sw-cms-detail__page-notification-alert is--error"\n                            variant="error"\n                        >\n                            {{ $tc(\'sw-cms.detail.notification.errorCollectionText\') }}\n                            <li\n                                v-for="(error, index) in pageErrors"\n                                :key="index"\n                            >\n                                {{ error.detail }}\n                            </li>\n                        </sw-alert>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_detail_toolbar_notification_warnings %}\n                    <div\n                        v-if="validationWarnings.length > 0"\n                        class="sw-cms-detail__page-notification"\n                    >\n                        <sw-alert\n                            class="sw-cms-detail__page-notification-alert is--warning"\n                            variant="warning"\n                        >\n                            {{ $tc(\'sw-cms.detail.notification.warningCollectionText\') }}\n                            <li\n                                v-for="(warning, index) in validationWarnings"\n                                :key="index"\n                            >\n                                {{ warning }}\n                            </li>\n                        </sw-alert>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_detail_toolbar_notification_infos %}\n                    <div\n                        v-if="page.locked"\n                        class="sw-cms-detail__page-notification is--info"\n                    >\n                        <sw-alert\n                            class="sw-cms-detail__page-notification-alert"\n                            variant="info"\n                        >\n                            {{ $tc(\'sw-cms.detail.label.lockedNotification\') }}\n                        </sw-alert>\n                    </div>\n                    {% endblock %}\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_detail_stage_empty_stage %}\n                    <div\n                        v-if="!isLoading && !pageHasSections"\n                        class="sw-cms-detail__empty-stage"\n                    >\n\n                        \n                        {% block sw_cms_detail_stage_empty_stade_content %}\n                        <div class="sw-cms-detail__empty-stage-content">\n                            <h2 class="sw-cms-detail__empty-stage-headline">\n                                {{ $tc(\'sw-cms.detail.label.headlineEmptyState\') }}\n                            </h2>\n                            <p class="sw-cms-detail__empty-stage-claim">\n                                {{ $tc(\'sw-cms.detail.label.claimEmptyState\') }}\n                            </p>\n                            <sw-cms-stage-add-section\n                                :key="0"\n                                :disabled="!acl.can(\'cms.editor\')"\n                                :force-choose="true"\n                                @stage-section-add="addAdditionalSection($event, 0)"\n                            />\n                        </div>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_detail_stage %}\n                    <div\n                        v-else\n                        :id="`page-${page.id}`"\n                        class="sw-cms-stage"\n                        :class="cmsStageClasses"\n                    >\n\n                        \n                        {% block sw_cms_detail_stage_add_first_section %}\n                        <sw-cms-stage-add-section\n                            :key="0"\n                            :disabled="!acl.can(\'cms.editor\')"\n                            @stage-section-add="addAdditionalSection($event, 0)"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_stage_content %}\n                        <template v-if="!isLoading">\n                            <template v-for="(section, index) in page.sections">\n\n                                \n                                {% block sw_cms_detail_stage_content_section %}\n                                <sw-cms-section\n                                    :key="section.id"\n                                    class="sw-cms-stage-section"\n                                    :page="page"\n                                    :section="section"\n                                    :active="selectedSection !== null && selectedSection.id === section.id"\n                                    :disabled="!acl.can(\'cms.editor\')"\n                                    @page-config-open="pageConfigOpen"\n                                    @block-duplicate="onBlockDuplicate"\n                                />\n                                {% endblock %}\n                            </template>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_detail_stage_add_last_section %}\n                        <sw-cms-stage-add-section\n                            :key="page.sections.length + 1"\n                            :disabled="!acl.can(\'cms.editor\')"\n                            @stage-section-add="addAdditionalSection($event, page.sections.length)"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_sidebar %}\n                <sw-cms-sidebar\n                    ref="cmsSidebar"\n                    :page="page"\n                    :demo-entity="currentMappingEntity"\n                    :demo-entity-id-prop="demoEntityId"\n                    :disabled="!acl.can(\'cms.editor\')"\n                    @demo-entity-change="onDemoEntityChange"\n                    @block-duplicate="onBlockDuplicate"\n                    @section-duplicate="onSectionDuplicate"\n                    @block-stage-drop="onPageUpdate"\n                    @page-type-change="onPageTypeChange"\n                    @page-update="onPageUpdate"\n                    @page-save="onPageSave"\n                    @open-layout-assignment="onOpenLayoutAssignment"\n                    @open-layout-set-as-default="onOpenLayoutSetAsDefault"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_layout_assignment_modal %}\n                <sw-cms-layout-assignment-modal\n                    v-if="showLayoutAssignmentModal"\n                    :page="page"\n                    @modal-close="closeLayoutAssignmentModal"\n                />\n                {% endblock %}\n\n                <sw-confirm-modal\n                    v-if="showLayoutSetAsDefaultModal"\n                    class="sw-cms-detail__confirm-set-as-default-modal"\n                    :title="$tc(\'sw-cms.components.setDefaultLayoutModal.title\')"\n                    :text="$tc(\'sw-cms.components.setDefaultLayoutModal.infoText\')"\n                    @confirm="onConfirmLayoutSetAsDefault"\n                    @cancel="onCloseLayoutSetAsDefault"\n                    @close="onCloseLayoutSetAsDefault"\n                />\n\n                \n                {% block sw_cms_detail_missing_element_modal %}\n                <sw-cms-missing-element-modal\n                    v-if="showMissingElementModal"\n                    :missing-elements="missingElements"\n                    @modal-close="onCloseMissingElementModal"\n                    @modal-save="onSaveMissingElementModal"\n                    @modal-dont-remind-change="onChangeDontRemindCheckbox"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_detail_loader %}\n                <sw-loader v-if="isLoading" />\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","entityFactory","entityHydrator","loginService","cmsService","cmsDataResolverService","acl","appCmsService","systemConfigApiService","cmsPageTypeService"],mixins:[f.getByName("cms-state"),f.getByName("notification"),f.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":"onSave"},data:function(){return{pageId:null,pageOrigin:null,page:{sections:[]},salesChannels:[],isLoading:!1,isSaveSuccessful:!1,currentSalesChannelKey:null,selectedBlockSectionId:null,currentMappingEntity:null,currentMappingEntityRepo:null,demoEntityId:null,validationWarnings:[],productDetailBlocks:[{type:"cross-selling",elements:[{slot:"content",type:"cross-selling",config:{}}]},{type:"product-description-reviews",elements:[{slot:"content",type:"product-description-reviews",config:{}}]},{type:"gallery-buybox",elements:[{slot:"left",type:"image-gallery",config:{}},{slot:"right",type:"buy-box",config:{}}]},{type:"product-heading",elements:[{slot:"left",type:"product-name",config:{}},{slot:"right",type:"manufacturer-logo",config:{}}]}],showLayoutAssignmentModal:!1,showLayoutSetAsDefaultModal:!1,isDefaultLayout:!1,showMissingElementModal:!1,missingElements:[]}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:g({identifier:function(){return this.placeholder(this.page,"name")},pageRepository:function(){return this.repositoryFactory.create("cms_page")},sectionRepository:function(){return this.repositoryFactory.create("cms_section")},blockRepository:function(){return this.repositoryFactory.create("cms_block")},slotRepository:function(){return this.repositoryFactory.create("cms_slot")},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},defaultFolderRepository:function(){return this.repositoryFactory.create("media_default_folder")},cmsBlocks:function(){return this.cmsService.getCmsBlockRegistry()},productRepository:function(){return this.repositoryFactory.create("product")},cmsStageClasses:function(){return["is--".concat(this.currentDeviceView)]},cmsPageTypeSettings:function(){var e=p.a.TYPE_MAPPING_ENTITIES;return e.hasOwnProperty(this.page.type)?e[this.page.type]:{entity:null,mode:"static"}},blockConfigDefaults:function(){return{name:null,marginBottom:null,marginTop:null,marginLeft:null,marginRight:null,sizingMode:"boxed"}},tooltipSave:function(){if(!this.acl.can("cms.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("cms.editor"),showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},addBlockTitle:function(){return this.isSystemDefaultLanguage?this.$tc("sw-cms.detail.sidebar.titleBlockOverview"):this.$tc("sw-cms.general.disabledAddingBlocksToolTip")},pageHasSections:function(){return this.page.sections.length>0},loadPageCriteria:function(){var e=new C(1,1),t=C.sort("position","ASC",!0);return e.getAssociation("sections").addSorting(t).addAssociation("backgroundMedia").getAssociation("blocks").addSorting(t).addAssociation("backgroundMedia").addAssociation("slots"),e.getAssociation("categories").setLimit(25),e.getAssociation("landingPages").setLimit(25),e.getAssociation("products").setLimit(25),e.getAssociation("products.manufacturer").setLimit(25),e},demoProductCriteria:function(){var e=new C(1,25);return e.addAssociation("media"),e.addAssociation("deliveryTime"),e.addAssociation("manufacturer.media"),e},currentDeviceView:function(){return this.cmsPageState.currentCmsDeviceView},isProductPage:function(){return this.page.type===p.a.PAGE_TYPES.PRODUCT_DETAIL},requiredFieldErrors:function(){return[this.pageNameError].filter((function(e){return!!e}))},pageErrors:function(){return[this.requiredFieldErrors.find((function(e){return!!e})),this.pageSectionsError,this.pageBlocksError,this.pageSlotsError,this.pageSlotConfigError].filter((function(e){return!!e}))},hasPageErrors:function(){return this.pageErrors.length>0},pageType:function(){this.cmsPageTypeService.getType(this.page.type)}},v("page",["name","sections","blocks","slots","slotConfig"])),created:function(){this.createdComponent()},beforeDestroy:function(){this.beforeDestroyedComponent()},methods:{createdComponent:function(){var e=this;Shopware.ExtensionAPI.publishData({id:"sw-cms-detail__page",path:"page",scope:this}),Shopware.State.commit("adminMenu/collapseSidebar");var t=Shopware.State.getters["context/isSystemDefaultLanguage"];if(this.$store.commit("cmsPageState/setIsSystemDefaultLanguage",t),this.resetCmsPageState(),this.$route.params.id){this.pageId=this.$route.params.id,this.isLoading=!0;Shopware.State.commit("shopwareApps/setSelectedIds",[this.pageId]);var n=new C(1,25);n.addFilter(C.equals("typeId","8A243080F92E4C719546314B577CF82B")),this.salesChannelRepository.search(n).then((function(t){e.salesChannels=t,e.salesChannels.length>0&&(e.currentSalesChannelKey=e.salesChannels[0].id,e.loadPage(e.pageId))}))}this.acl.can("system_config.read")&&this.getDefaultLayouts(),this.setPageContext()},setPageContext:function(){this.getDefaultFolderId().then((function(e){Shopware.State.commit("cmsPageState/setDefaultMediaFolderId",e)}))},resetCmsPageState:function(){Shopware.State.dispatch("cmsPageState/resetCmsPageState")},getDefaultFolderId:function(){var e=new C(1,1);return e.addAssociation("folder"),e.addFilter(C.equals("entity",this.cmsPageState.pageEntityName)),this.defaultFolderRepository.search(e).then((function(e){var t,n=e.first();return null!==(t=n.folder)&&void 0!==t&&t.id?n.folder.id:null}))},beforeDestroyedComponent:function(){Shopware.State.commit("cmsPageState/removeCurrentPage"),Shopware.State.commit("cmsPageState/removeSelectedBlock"),Shopware.State.commit("cmsPageState/removeSelectedSection")},loadPage:function(e){var t=this;return this.isLoading=!0,this.pageRepository.get(e,Shopware.Context.api,this.loadPageCriteria).then((function(e){t.page={sections:[]},t.page=e,Shopware.State.commit("cmsPageState/setCurrentPageType",e.type),t.cmsDataResolverService.resolve(t.page).then((function(){if(t.updateSectionAndBlockPositions(),Shopware.State.commit("cmsPageState/setCurrentPage",t.page),t.updateDataMapping(),t.pageOrigin=b(t.page),t.selectedBlock){var e=t.selectedBlock.id,n=t.selectedBlock.sectionId;t.page.sections.forEach((function(i){i.id===n&&i.blocks.forEach((function(i){i.id===e&&t.setSelectedBlock(n,i)}))}))}Shopware.ExtensionAPI.publishData({id:"sw-cms-detail__page",path:"page",scope:t}),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.createNotificationError({title:e.message,message:e.response}),E(t._name,e.message,e.response)}))})).catch((function(e){t.isLoading=!1,t.createNotificationError({title:e.message,message:e.response.statusText}),E(t._name,e.message,e.response)}))},updateDataMapping:function(){var e=this.cmsPageTypeSettings.entity;if(!e)return Shopware.State.commit("cmsPageState/removeCurrentMappingEntity"),Shopware.State.commit("cmsPageState/removeCurrentMappingTypes"),Shopware.State.commit("cmsPageState/removeCurrentDemoEntity"),Shopware.State.commit("cmsPageState/removeCurrentDemoProducts"),this.currentMappingEntity=null,this.currentMappingEntityRepo=null,void(this.demoEntityId=null);this.cmsPageState.currentMappingEntity!==e&&(Shopware.State.commit("cmsPageState/setCurrentMappingEntity",e),Shopware.State.commit("cmsPageState/setCurrentMappingTypes",this.cmsService.getEntityMappingTypes(e)),this.currentMappingEntity=e,this.currentMappingEntityRepo=this.repositoryFactory.create(e),this.loadFirstDemoEntity())},onDeviceViewChange:function(e){("form"!==e||this.acl.can("cms.editor"))&&(Shopware.State.commit("cmsPageState/setCurrentCmsDeviceView",e),"form"===e&&this.setSelectedBlock(null,null))},setSelectedBlock:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.selectedBlockSectionId=e,this.$store.dispatch("cmsPageState/setBlock",t)},onChangeLanguage:function(){var e=this;return this.isLoading=!0,this.salesChannelRepository.search(new C(1,25)).then((function(t){e.salesChannels=t;var n=Shopware.State.getters["context/isSystemDefaultLanguage"];return e.$store.commit("cmsPageState/setIsSystemDefaultLanguage",n),e.loadPage(e.pageId)}))},abortOnLanguageChange:function(){return Object.keys(k(this.page,this.pageOrigin)).length>0},saveOnLanguageChange:function(){return this.onSave()},loadDemoProduct:function(e){var t=this;return a()(d.a.mark((function n(){var i,s,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=C.fromCriteria(t.demoProductCriteria)).setLimit(1),e&&i.setIds([e]),s=g(g({},Shopware.Context.api),{},{inheritance:!0}),n.next=6,t.productRepository.search(i,s);case 6:o=n.sent,Shopware.State.commit("cmsPageState/setCurrentDemoEntity",o[0]);case 8:case"end":return n.stop()}}),n)})))()},loadDemoCategory:function(e){var t=this;return a()(d.a.mark((function n(){var i,s,o;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=new C(1,1),e&&i.setIds([e]),n.next=4,t.repositoryFactory.create("category").search(i);case 4:s=n.sent,o=s[0],t.demoEntityId=o.id,Shopware.State.commit("cmsPageState/setCurrentDemoEntity",o),t.loadDemoCategoryProducts(o),o.mediaId&&t.loadDemoCategoryMedia(o);case 10:case"end":return n.stop()}}),n)})))()},loadDemoCategoryProducts:function(e){var t=this;return a()(d.a.mark((function n(){var i,s;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(i=C.fromCriteria(t.demoProductCriteria)).setLimit(8),n.next=4,t.repositoryFactory.create(e.products.entity,e.products.source).search(i);case 4:s=n.sent,Shopware.State.commit("cmsPageState/setCurrentDemoProducts",s);case 6:case"end":return n.stop()}}),n)})))()},loadDemoCategoryMedia:function(e){var t=this;return a()(d.a.mark((function n(){var i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.repositoryFactory.create("media").get(e.mediaId);case 2:i=n.sent,e.media=i,Shopware.State.commit("cmsPageState/setCurrentDemoEntity",e);case 5:case"end":return n.stop()}}),n)})))()},loadFirstDemoEntity:function(){var e;"category"===(null===(e=this.cmsPageTypeSettings)||void 0===e?void 0:e.entity)&&this.loadDemoCategory()},onDemoEntityChange:function(e){var t,n=null===(t=this.cmsPageTypeSettings)||void 0===t?void 0:t.entity;Shopware.State.commit("cmsPageState/removeCurrentDemoEntity"),Shopware.State.commit("cmsPageState/removeCurrentDemoProducts"),"product"!==n?"category"===n&&this.loadDemoCategory(e):e&&this.loadDemoProduct(e)},addFirstSection:function(e,t){this.onAddSection(e,t)},addAdditionalSection:function(e,t){this.onAddSection(e,t),this.onSave()},onAddSection:function(e,t){if(e&&"undefined"!==t){var n=this.sectionRepository.create();n.type=e,n.sizingMode="boxed",n.position=t,n.pageId=this.page.id,n.visibility={desktop:!0,tablet:!0,mobile:!0},this.page.sections.splice(t,0,n),this.updateSectionAndBlockPositions()}},onCloseBlockConfig:function(){this.$store.commit("cmsPageState/removeSelectedItem")},pageConfigOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.$refs.cmsSidebar.$refs;if("blocks"!==e)"itemConfig"!==e?t.pageConfigSidebar.openContent():t.itemConfigSidebar.openContent();else{if(!this.isSystemDefaultLanguage)return;t.blockSelectionSidebar.openContent()}},saveFinish:function(){this.isSaveSuccessful=!1},onPageSave:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.onPageUpdate(),e?this.debouncedPageSave():this.onSave()},debouncedPageSave:_((function(){this.onSave()}),800),onSave:function(){return this.isSaveSuccessful=!1,this.pageIsValid()?this.onSaveEntity():(this.createNotificationError({message:this.$tc("sw-cms.detail.notification.pageInvalid")}),Promise.reject())},onSaveEntity:function(){var e=this;return this.isLoading=!0,this.deleteEntityAndRequiredConfigKey(this.page.sections),this.pageRepository.save(this.page,Shopware.Context.api,!1).then((function(){return e.isLoading=!1,e.isSaveSuccessful=!0,e.loadPage(e.page.id)})).catch((function(t){return e.isLoading=!1,e.createNotificationError({message:t.message}),Promise.reject(t)}))},addError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.property,n=void 0===t?null:t,i=e.payload,s=void 0===i?{}:i,o=e.code,a=void 0===o?p.a.REQUIRED_FIELD_ERROR_CODE:o,c=e.message,r=void 0===c?"":c,l="cms_page.".concat(this.page.id,".").concat(n),d=new S({code:a,detail:r,meta:{parameters:s}});Shopware.State.commit("error/addApiError",{expression:l,error:d})},getError:function(e){return Shopware.State.getters["error/getApiError"](this.page,e)},getSlotValidations:function(){var e=this,t={},n=[];return this.page.sections.forEach((function(i){i.blocks.forEach((function(i){i.backgroundMedia=null,i.slots.forEach((function(o){if(e.page.type===p.a.PAGE_TYPES.PRODUCT_DETAIL&&e.isProductPageElement(o)){var a=y.string.camelCase(o.type);t.hasOwnProperty(a)?(t[a].count+=1,t[a].blockIds.push(i.id),t[a].slotIds.push(o.id)):t[a]={type:a,count:1,blockIds:[i.id],slotIds:[o.id]}}else n.push.apply(n,s()(e.checkRequiredSlotConfigField(o,i)))}))}))})),{requiredMissingSlotConfigs:n,uniqueSlotCount:t}},pageIsValid:function(){"true"===localStorage.getItem("cmsMissingElementDontRemind")&&(this.cmsMissingElementDontRemind=!0),this.validationWarnings=[],Shopware.State.dispatch("error/resetApiErrors");var e=[this.missingFieldsValidation(),this.listingPageValidation(),this.pageSectionCountValidation(),this.slotValidation()].every((function(e){return e}));return!this.cmsMissingElementDontRemind&&e&&this.validationWarnings.length>0&&(this.showMissingElementModal=!0),e},missingFieldsValidation:function(){return!(this.isSystemDefaultLanguage&&!this.page.name||!this.page.type)||(this.addError({property:"name",message:this.$tc("sw-cms.detail.notification.messageMissingFields")}),!1)},listingPageValidation:function(){return this.page.type!==p.a.PAGE_TYPES.LISTING||(this.page.sections.some((function(e){return e.blocks.some((function(e){return"product-listing"===e.type}))}))?(this.cmsBlocks["product-listing"].hidden=!0,!0):(this.addError({property:"blocks",code:"listingBlockNotFound",message:this.$tc("sw-cms.detail.notification.messageMissingProductListing")}),this.cmsBlocks["product-listing"].hidden=!1,!1))},pageSectionCountValidation:function(){return this.page.sections.length>=1||(this.addError({property:"sections",code:"noSectionsFound",message:this.$tc("sw-cms.detail.notification.messageMissingSections")}),!1)},slotValidation:function(){var e=this,t=!0,n=this.getSlotValidations(),i=n.requiredMissingSlotConfigs,s=n.uniqueSlotCount,o=[],a=[];if(this.page.type===p.a.PAGE_TYPES.PRODUCT_DETAIL){if(p.a.UNIQUE_SLOTS.forEach((function(n){var i;(null==s||null===(i=s[n])||void 0===i?void 0:i.count)>1?(s[n].label=e.$tc("sw-cms.elements.".concat(n,".label")),o.push(g({},s[n])),t=!1):null!=s&&s[n]||a.push(e.$tc("sw-cms.elements.".concat(n,".label")))})),o.length>0){var c=p.a.UNIQUE_SLOTS.map((function(t){return e.$tc("sw-cms.elements.".concat(t,".label"))})).join(", "),r=this.$tc("sw-cms.detail.notification.messageRedundantElements",0,{names:c});this.addError({property:"slots",code:"uniqueSlotsOnlyOnce",message:r,payload:{elements:o}})}var l;if(a.length>0)(l=this.validationWarnings).push.apply(l,a)}return i.length>0&&(this.addError({property:"slotConfig",code:"requiredConfigMissing",message:this.$tc("sw-cms.detail.notification.messageMissingBlockFields"),payload:{elements:i}}),t=!1),t},deleteEntityAndRequiredConfigKey:function(e){e.forEach((function(e){e.blocks.forEach((function(e){e.slots.forEach((function(e){Object.values(e.config).forEach((function(e){e.entity&&delete e.entity,e.hasOwnProperty("required")&&delete e.required}))}))}))}))},checkRequiredSlotConfigField:function(e,t){return Object.keys(e.config).reduce((function(n,i){var s=g({},e.config[i]);return s.required&&(null===s.value||s.value.length<1)&&(s.name="".concat(e.type,".").concat(i),s.blockId=t.id,n.push(s)),n}),[])},updateSectionAndBlockPositions:function(){var e=this;this.page.sections.forEach((function(t,n){t.position=n,e.updateBlockPositions(t)}))},updateBlockPositions:function(e){e.blocks.forEach((function(e,t){e.position=t}))},onPageUpdate:function(){this.updateSectionAndBlockPositions(),this.updateDataMapping()},onBlockDuplicate:function(e,t){var n=this;return a()(d.a.mark((function i(){var s,o,a,c,r,l,p;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return s=t.position,o=void 0===s?0:s,a={overwrites:{position:e.position+1},cloneChildren:!0},i.next=4,n.blockRepository.clone(e.id,Shopware.Context.api,a);case 4:return c=i.sent,r=c.id,i.next=8,n.blockRepository.get(r);case 8:l=i.sent,(p=n.page.sections[o]).blocks.splice(l.position,0,l),n.updateBlockPositions(p),n.onSave();case 13:case"end":return i.stop()}}),i)})))()},onSectionDuplicate:function(e){var t=this;return a()(d.a.mark((function n(){var i,s,o,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={overwrites:{position:e.position+1},cloneChildren:!0},n.next=3,t.sectionRepository.clone(e.id,Shopware.Context.api,i);case 3:return s=n.sent,o=s.id,n.next=7,t.sectionRepository.get(o);case 7:a=n.sent,t.page.sections.splice(a.position,0,a),t.updateSectionAndBlockPositions(e),t.onSave();case 11:case"end":return n.stop()}}),n)})))()},onPageTypeChange:function(e){"string"==typeof e&&(Shopware.State.commit("cmsPageState/setCurrentPageType",e),this.page.type=e),this.page.type===p.a.PAGE_TYPES.LISTING?this.processProductListingType():this.page.sections.forEach((function(e){e.blocks.forEach((function(t){"product-listing"===t.type&&e.blocks.remove(t.id)}))})),this.page.type===p.a.PAGE_TYPES.PRODUCT_DETAIL&&this.processProductDetailType(),this.checkSlotMappings(),this.onPageUpdate()},processProductListingType:function(){var e=this.blockRepository.create(),t=[{blockId:e.id,slot:"content",type:"product-listing",config:{}}];this.processBlock(e,"product-listing"),this.processElements(e,t)},processProductDetailType:function(){var e=this;this.productDetailBlocks.forEach((function(t){var n=e.blockRepository.create();t.elements.forEach((function(e){e.blockId=n.id})),e.processBlock(n,t.type),e.processElements(n,t.elements)}))},processBlock:function(e,t){var n=this.cmsBlocks[t].defaultConfig;this.isProductPage&&n&&(n=g(g({},n),{},{marginLeft:"0",marginRight:"0",marginTop:"gallery-buybox"===t||"product-description-reviews"===t?"20px":"0",marginBottom:"product-heading"===t||"product-description-reviews"===t?"20px":"0"})),e.type=t,e.position=0,e.sectionId=this.page.sections[0].id,e.sectionPosition="main",Object.assign(e,b(this.blockConfigDefaults),b(n||{}))},processElements:function(e,t){var n=this;t.forEach((function(t){var i=n.slotRepository.create();i.blockId=t.blockId,i.slot=t.slot,i.type=t.type,i.config=t.config,e.slots.push(i)})),this.page.sections[0].blocks.splice(0,0,e)},checkSlotMappings:function(){var e=this;this.page.sections.forEach((function(t){t.blocks.forEach((function(t){t.slots.forEach((function(t){Object.keys(t.config).forEach((function(n){var i;"mapped"===(null===(i=t.config[n])||void 0===i?void 0:i.source)&&(t.config[n].value.split(".")[0]!==e.demoEntity&&(t.config[n].value=null,t.config[n].source="static"))}))}))}))}))},isProductPageElement:function(e){return p.a.UNIQUE_SLOTS_KEBAB.includes(e.type)},onOpenLayoutAssignment:function(){this.openLayoutAssignmentModal()},openLayoutAssignmentModal:function(){this.showLayoutAssignmentModal=!0},closeLayoutAssignmentModal:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.showLayoutAssignmentModal=!1,t&&this.$nextTick((function(){e.onSaveEntity()}))},onOpenLayoutSetAsDefault:function(){this.showLayoutSetAsDefaultModal=!0},onCloseLayoutSetAsDefault:function(){this.showLayoutSetAsDefaultModal=!1},onConfirmLayoutSetAsDefault:function(){var e=this;return a()(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="category_cms_page","product_detail"===e.page.type&&(n="product_cms_page"),t.next=4,e.systemConfigApiService.saveValues(r()({},"core.cms.default_".concat(n),e.pageId));case 4:e.isDefaultLayout=!0,e.showLayoutSetAsDefaultModal=!1;case 6:case"end":return t.stop()}}),t)})))()},getDefaultLayouts:function(){var e=this;return a()(d.a.mark((function t(){var n,i,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.systemConfigApiService.getValues("core.cms");case 2:n=t.sent,i=n["core.cms.default_category_cms_page"],s=n["core.cms.default_product_cms_page"],[i,s].includes(e.pageId)&&(e.isDefaultLayout=!0);case 6:case"end":return t.stop()}}),t)})))()},onCloseMissingElementModal:function(){var e=this;this.showMissingElementModal=!1,this.cmsMissingElementDontRemind=!1,this.$nextTick((function(){e.loadPage(e.pageId)}))},onSaveMissingElementModal:function(){var e=this;this.cmsMissingElementDontRemind&&localStorage.setItem("cmsMissingElementDontRemind",!0),this.showMissingElementModal=!1,this.$nextTick((function(){e.onSaveEntity()}))},onChangeDontRemindCheckbox:function(){this.cmsMissingElementDontRemind=!this.cmsMissingElementDontRemind}}}}}]);