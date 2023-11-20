(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[65],{cNdd:function(e,t,n){"use strict";n.r(t);var a=n("CsSd"),i=n.n(a),o=n("7yzw"),s=n.n(o),r=n("92Mt"),c=n.n(r),l=Shopware.Data.Criteria,g={namespaced:!0,state:function(){return{landingPage:null,category:null,customFieldSets:[],landingPagesToDelete:void 0,categoriesToDelete:void 0}},mutations:{setActiveLandingPage:function(e,t){var n=t.landingPage;e.landingPage=n},setActiveCategory:function(e,t){var n=t.category;e.category=n},setCustomFieldSets:function(e,t){e.customFieldSets=t},setLandingPagesToDelete:function(e,t){var n=t.landingPagesToDelete;e.landingPagesToDelete=n},setCategoriesToDelete:function(e,t){var n=t.categoriesToDelete;e.categoriesToDelete=n}},actions:{setActiveLandingPage:function(e,t){(0,e.commit)("setActiveLandingPage",t)},loadActiveLandingPage:function(e,t){var n=e.commit,a=t.repository,i=t.id,o=t.apiContext,s=t.criteria;if("create"===i){var r=a.create(o);return r.cmsPageId=null,n("setActiveLandingPage",{landingPage:r}),Promise.resolve()}return s||(s=new l(1,25)),a.get(i,o,s).then((function(e){n("setActiveLandingPage",{landingPage:e})}))},setActiveCategory:function(e,t){(0,e.commit)("setActiveCategory",t)},loadActiveCategory:function(e,t){var n=e.commit,a=t.repository,i=t.id,o=t.apiContext,s=t.criteria;return s||(s=new l(1,25)),a.get(i,o,s).then((function(e){if(e.isColumn=!1,null!==e.parentId){var t=new l(1,25);return t.addAssociation("footerSalesChannels"),a.get(e.parentId,o,t).then((function(t){return e.parent=t,e.isColumn=void 0!==e.parent&&void 0!==e.parent.footerSalesChannels&&0!==e.parent.footerSalesChannels.length,Promise.resolve(e)}))}return Promise.resolve(e)})).then((function(e){n("setActiveCategory",{category:e})}))}}};n("fdHo");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Shopware,p=h.Context,y=h.Mixin,m=Shopware.Data,f=m.Criteria,w=m.ChangesetGenerator,v=m.EntityCollection,S=Shopware.Utils.object,P=S.cloneDeep,C=S.merge,b=Shopware.Utils.types;t.default={template:'\n{% block sw_category %}\n<sw-page\n    class="sw-category"\n    :class="pageClasses"\n>\n    <template #search-bar>\n        \n        {% block sw_category_search_bar %}\n        <sw-search-bar\n            ref="searchBar"\n            initial-search-type="category"\n            :initial-search="term"\n            type-search-always-in-container\n            @search="onSearch"\n        />\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-header>\n        \n        {% block sw_category_smart_bar_header %}\n        <h2 v-if="category">\n            {{ placeholder(category, \'name\') }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-category.general.headlineCategories\') }}\n        </h2>\n        {% endblock %}\n    </template>\n\n    <template #language-switch>\n        \n        {% block sw_category_language_switch %}\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="landingPageId === \'create\'"\n            @on-change="onChangeLanguage"\n        />\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-actions>\n        <template v-if="category || landingPage">\n            \n            {% block sw_category_smart_bar_abort %}\n            <sw-button\n                v-tooltip.bottom="tooltipCancel"\n                :disabled="isLoading"\n                @click="cancelEdit"\n            >\n                {{ $tc(\'sw-product.detail.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_category_smart_bar_save %}\n\n            \n            {% block sw_category_smart_bar_save_category %}\n            <sw-button-process\n                v-if="category"\n                v-tooltip.bottom="tooltipSave"\n                class="sw-category-detail__save-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                :disabled="isLoading || !acl.can(\'category.editor\')"\n                variant="primary"\n                {% if VUE3 %}\n                @update:process-success="saveFinish"\n                {% else %}\n                @process-finish="saveFinish"\n                {% endif %}\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-category.general.buttonSafeCategory\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_category_smart_bar_save_landing_page %}\n            <sw-button-process\n                v-if="landingPage"\n                v-tooltip.bottom="landingPageTooltipSave"\n                class="sw-category-detail__save-landing-page-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                :disabled="isLoading || !acl.can(\'landing_page.editor\')"\n                variant="primary"\n                {% if VUE3 %}\n                @update:process-success="saveFinish"\n                {% else %}\n                @process-finish="saveFinish"\n                {% endif %}\n                @click.prevent="onSaveLandingPage"\n            >\n                {{ $tc(\'sw-category.general.buttonSafeCategory\') }}\n            </sw-button-process>\n            {% endblock %}\n            {% endblock %}\n        </template>\n    </template>\n\n    <template #side-content>\n        \n        {% block sw_category_side_content %}\n\n        \n        {% block sw_category_collapse %}\n        <sw-sidebar-collapse\n            class="sw-category-detail__category-collapse"\n            :expand-on-loading="landingPageId === null"\n        >\n            <template #header>\n\n                \n                {% block sw_category_collapse_header %}\n                <div\n                    v-if="categoryCheckedItem > 0"\n                    class="sw-category-detail__collapse-selected-count"\n                >\n                    {{ $tc(`sw-category.general.treeHeadSelected`, 0, { count: categoryCheckedItem }) }}:\n                </div>\n                <div\n                    v-else\n                    class="sw-category-detail__collapse-headline"\n                >\n                    {{ $tc(`sw-category.general.treeHeadline`) }}\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #actions>\n\n                \n                {% block sw_category_collapse_actions %}\n                <div v-if="categoryCheckedItem > 0">\n                    <sw-button\n                        class="sw-tree-actions__delete_categories"\n                        variant="danger"\n                        size="small"\n                        @click="onCategoryDelete"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #content>\n\n                \n                {% block sw_category_tree %}\n                <sw-category-tree\n                    ref="categoryTree"\n                    :category-id="categoryId"\n                    :current-language-id="currentLanguageId"\n                    :allow-edit="acl.can(\'category.editor\')"\n                    :allow-create="acl.can(\'category.creator\')"\n                    :allow-delete="acl.can(\'category.deleter\')"\n                    @unsaved-changes="openChangeModal"\n                    @category-checked-elements-count="categoryCheckedElementsCount"\n                />\n                {% endblock %}\n\n            </template>\n        </sw-sidebar-collapse>\n        {% endblock %}\n\n        \n        {% block sw_landing_page_collapse %}\n        <sw-sidebar-collapse\n            class="sw-category-detail__landing-page-collapse"\n            :expand-on-loading="landingPageId !== null"\n        >\n            <template #header>\n\n                \n                {% block sw_landing_page_collapse_header %}\n                <div\n                    v-if="landingPageCheckedItem > 0"\n                    class="sw-category-detail__collapse-selected-count"\n                >\n                    {{ $tc(`sw-landing-page.general.treeHeadSelected`, 0, { count: landingPageCheckedItem }) }}:\n                </div>\n                <div\n                    v-else\n                    class="sw-category-detail__collapse-headline"\n                >\n                    {{ $tc(`sw-landing-page.general.treeHeadline`) }}\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #actions>\n\n                \n                {% block sw_landing_page_collapse_actions %}\n                <div v-if="landingPageCheckedItem > 0">\n                    <sw-button\n                        class="sw-tree-actions__delete_categories"\n                        variant="danger"\n                        size="small"\n                        @click="onLandingPageDelete"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #content>\n\n                \n                {% block sw_landing_page_tree %}\n                <sw-landing-page-tree\n                    ref="landingPageTree"\n                    :landing-page-id="landingPageId"\n                    :current-language-id="currentLanguageId"\n                    :allow-edit="acl.can(\'landing_page.editor\')"\n                    :allow-create="acl.can(\'landing_page.creator\')"\n                    :allow-delete="acl.can(\'landing_page.deleter\')"\n                    @unsaved-changes="openChangeModal"\n                    @landing-page-checked-elements-count="landingPageCheckedElementsCount"\n                />\n                {% endblock %}\n\n            </template>\n        </sw-sidebar-collapse>\n        {% endblock %}\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_category_content %}\n    <template #content>\n\n        <template v-if="isLoading">\n            <sw-skeleton variant="detail-bold" />\n            <sw-skeleton />\n        </template>\n\n        <template v-else>\n            \n            {% block sw_category_content_view %}\n            <sw-category-view\n                v-if="category"\n                ref="categoryView"\n                :is-loading="isLoading"\n                :type="category.type"\n            />\n            {% endblock %}\n\n            \n            {% block sw_category_content_entry_point_overwrite_modal %}\n            <sw-category-entry-point-overwrite-modal\n                v-if="showEntryPointOverwriteModal"\n                :sales-channels="entryPointOverwriteSalesChannels"\n                @cancel="cancelEntryPointOverwrite"\n                @confirm="confirmEntryPointOverwrite"\n            />\n            {% endblock %}\n\n            \n            {% block sw_landing_page_content_view %}\n            <sw-landing-page-view\n                v-if="landingPage"\n                ref="landingPageView"\n                :is-loading="isLoading"\n            />\n            {% endblock %}\n\n            \n            {% block sw_category_content_discard_changes_modal %}\n            <sw-discard-changes-modal\n                v-if="isDisplayingLeavePageWarning"\n                @keep-editing="onLeaveModalClose(nextRoute)"\n                @discard-changes="onLeaveModalConfirm(nextRoute)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_category_content_empty %}\n            <sw-empty-state\n                v-if="showEmptyState"\n                :title="$tc(\'sw-category.general.emptyStateHeadline\')"\n            >\n                <template #icon>\n                    <img\n                        :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                        :alt="$tc(\'sw-category.general.emptyStateHeadline\')"\n                    >\n                </template>\n            </sw-empty-state>\n        {% endblock %}\n\n        </template>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["acl","cmsService","repositoryFactory","seoUrlService"],mixins:[y.getByName("notification"),y.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.acl.can("category.editor")},method:"onSave"},ESCAPE:"cancelEdit"},props:{categoryId:{type:String,required:!1,default:null},landingPageId:{type:String,required:!1,default:null}},data:function(){return{term:"",isLoading:!1,isCustomFieldLoading:!1,isSaveSuccessful:!1,isMobileViewport:null,splitBreakpoint:1024,isDisplayingLeavePageWarning:!1,nextRoute:null,currentLanguageId:Shopware.Context.api.languageId,forceDiscardChanges:!1,categoryCheckedItem:0,landingPageCheckedItem:0,entryPointOverwriteConfirmed:!1,entryPointOverwriteSalesChannels:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{changesetGenerator:function(){return new w},showEmptyState:function(){return!this.category&&!this.landingPage},identifier:function(){return this.category?this.placeholder(this.category,"name"):""},landingPageRepository:function(){return this.repositoryFactory.create("landing_page")},categoryRepository:function(){return this.repositoryFactory.create("category")},cmsPageRepository:function(){return this.repositoryFactory.create("cms_page")},landingPage:function(){return Shopware.State.get("swCategoryDetail")?Shopware.State.get("swCategoryDetail").landingPage:{}},category:function(){return Shopware.State.get("swCategoryDetail")?Shopware.State.get("swCategoryDetail").category:{}},showEntryPointOverwriteModal:function(){return null!==this.entryPointOverwriteSalesChannels&&this.entryPointOverwriteSalesChannels.length},cmsPage:function(){return Shopware.State.get("cmsPageState").currentPage},cmsPageId:function(){return this.landingPage?this.landingPage.cmsPageId:this.category?this.category.cmsPageId:null},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria:function(){var e=new f(1,null);return e.addFilter(f.equals("relations.entityName","category")),e},customFieldSetLandingPageCriteria:function(){var e=new f(1,null);return e.addFilter(f.equals("relations.entityName","landing_page")),e},mediaRepository:function(){return this.repositoryFactory.create("media")},pageClasses:function(){return{"has--category":!!this.category,"is--mobile":!!this.isMobileViewport}},tooltipSave:function(){if(!this.acl.can("category.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("category.editor"),showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},landingPageTooltipSave:function(){if(!this.acl.can("landing_page.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("landing_page.editor"),showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},categoryCriteria:function(){var e=new f(1,1);return e.getAssociation("seoUrls").addFilter(f.equals("isCanonical",!0)),e.addAssociation("tags").addAssociation("media").addAssociation("navigationSalesChannels.homeCmsPage.previewMedia").addAssociation("serviceSalesChannels").addAssociation("footerSalesChannels").addAssociation("translations"),e},landingPageCriteria:function(){var e=new f(1,1);return e.addAssociation("tags"),e.addAssociation("salesChannels"),e},assetFilter:function(){return Shopware.Filter.getByName("asset")}},watch:{landingPageId:function(){this.setLandingPage()},categoryId:function(){this.setCategory()},cmsPageId:function(){this.isLoading||(this.category&&(this.category.slotConfig=null,Shopware.State.dispatch("cmsPageState/resetCmsPageState").then(this.getAssignedCmsPage)),this.landingPage&&(this.landingPage.slotConfig=null,Shopware.State.dispatch("cmsPageState/resetCmsPageState").then(this.getAssignedCmsPageForLandingPage)))}},beforeCreate:function(){Shopware.State.registerModule("swCategoryDetail",g),Shopware.State.dispatch("cmsPageState/resetCmsPageState")},created:function(){this.createdComponent()},beforeDestroy:function(){Shopware.State.unregisterModule("swCategoryDetail")},beforeRouteLeave:function(e,t,n){if(this.forceDiscardChanges)return this.forceDiscardChanges=!1,void n();if(this.category){var a=this.changesetGenerator.generate(this.category),i=a.changes,o=a.deletionQueue;if(null!==i){var s=["id","versionId"],r=Object.keys(i).filter((function(e){return!s.includes(e)})),c=o.length>0;("sw.cms.create"!==e.name||1!==r.length||"cmsPageId"!==r[0]||null!==i.cmsPageId||c)&&(0!==r.length||c)?(this.isDisplayingLeavePageWarning=!0,this.nextRoute=e,n(!1)):n()}else n()}else n()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-category-detail__category",path:"category",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-category-detail__cmsPage",path:"cmsPage",scope:this}),this.isLoading=!0,this.checkViewport(),this.registerListener(),null===this.categoryId?this.setLandingPage():this.setCategory()},categoryCheckedElementsCount:function(e){this.categoryCheckedItem=e},landingPageCheckedElementsCount:function(e){this.landingPageCheckedItem=e},registerListener:function(){this.$device.onResize({listener:this.checkViewport})},onSearch:function(e){0===e.length&&(e=void 0),this.term=e},checkViewport:function(){this.isMobileViewport=this.$device.getViewportWidth()<this.splitBreakpoint},getAssignedCmsPage:function(){var e=this;if(null===this.cmsPageId)return Promise.resolve(null);var t=this.cmsPageId,n=new f(1,1);return n.setIds([t]),n.addAssociation("previewMedia"),n.addAssociation("sections"),n.getAssociation("sections").addSorting(f.sort("position")),n.addAssociation("sections.blocks"),n.getAssociation("sections.blocks").addSorting(f.sort("position","ASC")).addAssociation("slots"),this.cmsPageRepository.search(n).then((function(n){var a=n.get(t);return t!==e.cmsPageId?null:(null!==e.category.slotConfig&&a.sections.forEach((function(t){t.blocks.forEach((function(t){t.slots.forEach((function(t){e.category.slotConfig[t.id]&&(null===t.config&&(t.config={}),C(t.config,P(e.category.slotConfig[t.id])))}))}))})),e.updateCmsPageDataMapping(),Shopware.State.commit("cmsPageState/setCurrentPage",a),e.cmsPage)}))},updateCmsPageDataMapping:function(){Shopware.State.commit("cmsPageState/setCurrentMappingEntity","category"),Shopware.State.commit("cmsPageState/setCurrentMappingTypes",this.cmsService.getEntityMappingTypes("category")),Shopware.State.commit("cmsPageState/setCurrentDemoEntity",this.category)},getAssignedCmsPageForLandingPage:function(){var e=this;if(null===this.cmsPageId)return Promise.resolve(null);var t=this.cmsPageId,n=new f(1,1);return n.setIds([t]),n.addAssociation("previewMedia"),n.addAssociation("sections"),n.getAssociation("sections").addSorting(f.sort("position")),n.addAssociation("sections.blocks"),n.getAssociation("sections.blocks").addSorting(f.sort("position","ASC")).getAssociation("slots").addAssociation("translations"),this.cmsPageRepository.search(n).then((function(n){var a=n.get(t);return t!==e.cmsPageId?null:(null!==e.landingPage.slotConfig&&a.sections.forEach((function(t){t.blocks.forEach((function(t){t.slots.forEach((function(t){e.landingPage.slotConfig[t.id]&&(null===t.config&&(t.config={}),C(t.config,P(e.landingPage.slotConfig[t.id])))}))}))})),e.updateCmsPageDataMappingForLandingPage(),Shopware.State.commit("cmsPageState/setCurrentPage",a),e.cmsPage)}))},updateCmsPageDataMappingForLandingPage:function(){Shopware.State.commit("cmsPageState/setCurrentMappingEntity","landing_page"),Shopware.State.commit("cmsPageState/setCurrentMappingTypes",this.cmsService.getEntityMappingTypes("landing_page")),Shopware.State.commit("cmsPageState/setCurrentDemoEntity",this.landingPage)},setLandingPage:function(){var e=this;return s()(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isLoading=!0,t.prev=1,null!==e.landingPageId){t.next=9;break}return Shopware.State.commit("shopwareApps/setSelectedIds",[]),t.next=6,Shopware.State.dispatch("swCategoryDetail/setActiveLandingPage",{landingPage:null});case 6:return t.next=8,Shopware.State.dispatch("cmsPageState/resetCmsPageState");case 8:return t.abrupt("return");case 9:return Shopware.State.commit("shopwareApps/setSelectedIds",[e.landingPageId]),t.next=12,Shopware.State.dispatch("swCategoryDetail/loadActiveLandingPage",{repository:e.landingPageRepository,apiContext:Shopware.Context.api,id:e.landingPageId,criteria:e.landingPageCriteria});case 12:return t.next=14,Shopware.State.dispatch("cmsPageState/resetCmsPageState");case 14:return t.next=16,e.getAssignedCmsPageForLandingPage();case 16:return t.next=18,e.loadLandingPageCustomFieldSet();case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(1),e.createNotificationError({title:e.$tc("global.default.error"),message:e.$tc("global.notification.unspecifiedSaveErrorMessage")});case 23:return t.prev=23,e.isLoading=!1,t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[1,20,23,26]])})))()},setCategory:function(){var e=this;return this.isLoading=!0,null===this.categoryId?(Shopware.State.commit("shopwareApps/setSelectedIds",[]),Shopware.State.dispatch("swCategoryDetail/setActiveCategory",{category:null}).then((function(){return Shopware.State.dispatch("cmsPageState/resetCmsPageState")})).then((function(){e.isLoading=!1}))):(Shopware.State.commit("shopwareApps/setSelectedIds",[this.categoryId]),Shopware.State.dispatch("swCategoryDetail/loadActiveCategory",{repository:this.categoryRepository,apiContext:Shopware.Context.api,id:this.categoryId,criteria:this.categoryCriteria}).then((function(){return Shopware.State.dispatch("cmsPageState/resetCmsPageState")})).then(this.getAssignedCmsPage).then(this.loadCustomFieldSet).then((function(){e.isLoading=!1})))},loadCustomFieldSet:function(){var e=this;return this.isCustomFieldLoading=!0,this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){return e.$store.commit("swCategoryDetail/setCustomFieldSets",t)})).finally((function(){e.isCustomFieldLoading=!0}))},loadLandingPageCustomFieldSet:function(){var e=this;return this.isCustomFieldLoading=!0,this.customFieldSetRepository.search(this.customFieldSetLandingPageCriteria).then((function(t){return e.$store.commit("swCategoryDetail/setCustomFieldSets",t)})).finally((function(){e.isCustomFieldLoading=!0}))},onSaveCategories:function(){return this.categoryRepository.save(this.category)},openChangeModal:function(e){this.nextRoute=e,this.isDisplayingLeavePageWarning=!0},onLeaveModalClose:function(){this.nextRoute=null,this.isDisplayingLeavePageWarning=!1},onLeaveModalConfirm:function(e){var t=this;Shopware.State.dispatch("error/removeApiError",{expression:"category"}),this.forceDiscardChanges=!0,this.isDisplayingLeavePageWarning=!1,this.$nextTick((function(){t.$router.push({name:e.name,params:e.params})}))},cancelEdit:function(){this.resetCategory()},resetCategory:function(){this.$router.push({name:"sw.category.index"})},onChangeLanguage:function(e){this.currentLanguageId=e,null!==this.landingPageId&&this.setLandingPage(),this.setCategory()},abortOnLanguageChange:function(){return this.landingPage?!!this.landingPage&&this.categoryRepository.hasChanges(this.landingPage):!!this.category&&this.categoryRepository.hasChanges(this.category)},saveOnLanguageChange:function(){return this.landingPage?this.onSaveLandingPage():this.onSave()},saveFinish:function(){this.isSaveSuccessful=!1},onSave:function(){var e=this;return s()(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isSaveSuccessful=!1,n=e.getCmsPageOverrides(),b.isPlainObject(n)&&(e.category.slotConfig=P(n)),e.entryPointOverwriteConfirmed){t.next=7;break}if(e.checkForEntryPointOverwrite(),!e.showEntryPointOverwriteModal){t.next=7;break}return t.abrupt("return",Promise.resolve());case 7:return e.isLoading=!0,t.next=10,e.updateSeoUrls();case 10:return t.abrupt("return",e.categoryRepository.save(e.category,u({},Shopware.Context.api)).then((function(){return e.isSaveSuccessful=!0,e.entryPointOverwriteConfirmed=!1,e.setCategory()})).catch((function(){e.isLoading=!1,e.entryPointOverwriteConfirmed=!1,e.createNotificationError({message:e.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})})));case 11:case"end":return t.stop()}}),t)})))()},checkForEntryPointOverwrite:function(){var e=this;this.entryPointOverwriteSalesChannels=new v("/sales_channel","sales_channel",p.api),this.category.navigationSalesChannels.forEach((function(t){null!==t.navigationCategoryId&&t.navigationCategoryId!==e.categoryId&&e.entryPointOverwriteSalesChannels.add(t)})),this.category.footerSalesChannels.forEach((function(t){null!==t.footerCategoryId&&t.footerCategoryId!==e.categoryId&&e.entryPointOverwriteSalesChannels.add(t)})),this.category.serviceSalesChannels.forEach((function(t){null!==t.serviceCategoryId&&t.serviceCategoryId!==e.categoryId&&e.entryPointOverwriteSalesChannels.add(t)}))},cancelEntryPointOverwrite:function(){this.entryPointOverwriteSalesChannels=null},confirmEntryPointOverwrite:function(){var e=this;this.entryPointOverwriteSalesChannels=null,this.entryPointOverwriteConfirmed=!0,this.$nextTick((function(){e.onSave()}))},onSaveLandingPage:function(){var e=this;this.isSaveSuccessful=!1;var t=this.getCmsPageOverrides();return b.isPlainObject(t)&&(this.landingPage.slotConfig=P(t)),"create"!==this.landingPageId&&0===this.landingPage.salesChannels.length?(this.addLandingPageSalesChannelError(),Promise.resolve()):(this.isLoading=!0,this.landingPageRepository.save(this.landingPage,Shopware.Context.api).then((function(){return e.isSaveSuccessful=!0,"create"===e.landingPageId?(e.$router.push({name:"sw.category.landingPageDetail",params:{id:e.landingPage.id}}),Promise.resolve()):e.setLandingPage()})).catch((function(){e.isLoading=!1,0!==e.landingPage.salesChannels.length?e.createNotificationError({message:e.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}):e.addLandingPageSalesChannelError()})))},addLandingPageSalesChannelError:function(){var e=new Shopware.Classes.ShopwareError({code:"landing_page_sales_channel_blank",detail:"This value should not be blank.",status:"400"});Shopware.State.dispatch("error/addApiError",{expression:"landing_page.".concat(this.landingPage.id,".salesChannels"),error:e}),this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})},getCmsPageOverrides:function(){if(null===this.cmsPage)return null;this.deleteSpecifcKeys(this.cmsPage.sections);var e=this.changesetGenerator.generate(this.cmsPage).changes,t={};return null===e||b.isArray(e.sections)&&e.sections.forEach((function(e){b.isArray(e.blocks)&&e.blocks.forEach((function(e){b.isArray(e.slots)&&e.slots.forEach((function(e){t[e.id]=e.config}))}))})),t},deleteSpecifcKeys:function(e){e&&e.forEach((function(e){e.blocks&&e.blocks.forEach((function(e){e.slots&&e.slots.forEach((function(e){e.config&&Object.values(e.config).forEach((function(e){e.entity&&delete e.entity,e.hasOwnProperty("required")&&delete e.required,e.type&&delete e.type}))}))}))}))},updateSeoUrls:function(){var e=this;if(!Shopware.State.list().includes("swSeoUrl"))return Promise.resolve();var t=Shopware.State.getters["swSeoUrl/getNewOrModifiedUrls"]();return Promise.all(t.map((function(t){return t.seoPathInfo?(t.isModified=!0,e.seoUrlService.updateCanonicalUrl(t,t.languageId)):Promise.resolve()})))},onLandingPageDelete:function(){Shopware.State.commit("swCategoryDetail/setLandingPagesToDelete",{landingPagesToDelete:null})},onCategoryDelete:function(){Shopware.State.commit("swCategoryDetail/setCategoriesToDelete",{categoriesToDelete:null})}}}},fdHo:function(e,t,n){var a=n("w+JX");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("21945f00",a,!0,{})},"w+JX":function(e,t,n){}}]);
//# sourceMappingURL=fd9d76be812504caed0e.js.map