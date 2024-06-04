(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[32795],{584232:function(){},32795:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});let{Criteria:n}=Shopware.Data;var i={namespaced:!0,state(){return{landingPage:null,category:null,customFieldSets:[],landingPagesToDelete:void 0,categoriesToDelete:void 0}},mutations:{setActiveLandingPage(e,{landingPage:t}){e.landingPage=t},setActiveCategory(e,{category:t}){e.category=t},setCustomFieldSets(e,t){e.customFieldSets=t},setLandingPagesToDelete(e,{landingPagesToDelete:t}){e.landingPagesToDelete=t},setCategoriesToDelete(e,{categoriesToDelete:t}){e.categoriesToDelete=t}},actions:{setActiveLandingPage({commit:e},t){e("setActiveLandingPage",t)},loadActiveLandingPage({commit:e},{repository:t,id:a,apiContext:i,criteria:s}){if("create"===a){let a=t.create(i);return a.cmsPageId=null,e("setActiveLandingPage",{landingPage:a}),Promise.resolve()}return s||(s=new n(1,25)),t.get(a,i,s).then(t=>{e("setActiveLandingPage",{landingPage:t})})},setActiveCategory({commit:e},t){e("setActiveCategory",t)},loadActiveCategory({commit:e},{repository:t,id:a,apiContext:i,criteria:s}){return s||(s=new n(1,25)),t.get(a,i,s).then(e=>{if(e.isColumn=!1,null!==e.parentId){let a=new n(1,25);return a.addAssociation("footerSalesChannels"),t.get(e.parentId,i,a).then(t=>(e.parent=t,e.isColumn=void 0!==e.parent&&void 0!==e.parent.footerSalesChannels&&0!==e.parent.footerSalesChannels.length,Promise.resolve(e)))}return Promise.resolve(e)}).then(t=>{e("setActiveCategory",{category:t})})}}};a(471027);let{Context:s,Mixin:o}=Shopware,{Criteria:r,ChangesetGenerator:l,EntityCollection:g}=Shopware.Data,{cloneDeep:c,merge:d}=Shopware.Utils.object,h=Shopware.Utils.types;var p={template:'\n{% block sw_category %}\n<sw-page\n    class="sw-category"\n    :class="pageClasses"\n>\n    <template #search-bar>\n        \n        {% block sw_category_search_bar %}\n        <sw-search-bar\n            ref="searchBar"\n            initial-search-type="category"\n            :initial-search="term"\n            type-search-always-in-container\n            @search="onSearch"\n        />\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-header>\n        \n        {% block sw_category_smart_bar_header %}\n        <h2 v-if="category">\n            {{ placeholder(category, \'name\') }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-category.general.headlineCategories\') }}\n        </h2>\n        {% endblock %}\n    </template>\n\n    <template #language-switch>\n        \n        {% block sw_category_language_switch %}\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="landingPageId === \'create\'"\n            @on-change="onChangeLanguage"\n        />\n        {% endblock %}\n    </template>\n\n    <template #smart-bar-actions>\n        <template v-if="category || landingPage">\n            \n            {% block sw_category_smart_bar_abort %}\n            <sw-button\n                v-tooltip.bottom="tooltipCancel"\n                :disabled="isLoading"\n                @click="cancelEdit"\n            >\n                {{ $tc(\'sw-product.detail.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_category_smart_bar_save %}\n\n            \n            {% block sw_category_smart_bar_save_category %}\n            <sw-button-process\n                v-if="category"\n                v-tooltip.bottom="tooltipSave"\n                class="sw-category-detail__save-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                :disabled="isLoading || !acl.can(\'category.editor\')"\n                variant="primary"\n                @update:process-success="saveFinish"\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-category.general.buttonSafeCategory\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_category_smart_bar_save_landing_page %}\n            <sw-button-process\n                v-if="landingPage"\n                v-tooltip.bottom="landingPageTooltipSave"\n                class="sw-category-detail__save-landing-page-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                :disabled="isLoading || !acl.can(\'landing_page.editor\')"\n                variant="primary"\n                @update:process-success="saveFinish"\n                @click.prevent="onSaveLandingPage"\n            >\n                {{ $tc(\'sw-category.general.buttonSafeCategory\') }}\n            </sw-button-process>\n            {% endblock %}\n            {% endblock %}\n        </template>\n    </template>\n\n    <template #side-content>\n        \n        {% block sw_category_side_content %}\n\n        \n        {% block sw_category_collapse %}\n        <sw-sidebar-collapse\n            class="sw-category-detail__category-collapse"\n            :expand-on-loading="landingPageId === null"\n        >\n            <template #header>\n\n                \n                {% block sw_category_collapse_header %}\n                <div\n                    v-if="categoryCheckedItem > 0"\n                    class="sw-category-detail__collapse-selected-count"\n                >\n                    {{ $tc(`sw-category.general.treeHeadSelected`, 0, { count: categoryCheckedItem }) }}:\n                </div>\n                <div\n                    v-else\n                    class="sw-category-detail__collapse-headline"\n                >\n                    {{ $tc(`sw-category.general.treeHeadline`) }}\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #actions>\n\n                \n                {% block sw_category_collapse_actions %}\n                <div v-if="categoryCheckedItem > 0">\n                    <sw-button\n                        class="sw-tree-actions__delete_categories"\n                        variant="danger"\n                        size="small"\n                        @click="onCategoryDelete"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #content>\n\n                \n                {% block sw_category_tree %}\n                <sw-category-tree\n                    ref="categoryTree"\n                    :category-id="categoryId"\n                    :current-language-id="currentLanguageId"\n                    :allow-edit="acl.can(\'category.editor\')"\n                    :allow-create="acl.can(\'category.creator\')"\n                    :allow-delete="acl.can(\'category.deleter\')"\n                    @unsaved-changes="openChangeModal"\n                    @category-checked-elements-count="categoryCheckedElementsCount"\n                />\n                {% endblock %}\n\n            </template>\n        </sw-sidebar-collapse>\n        {% endblock %}\n\n        \n        {% block sw_landing_page_collapse %}\n        <sw-sidebar-collapse\n            class="sw-category-detail__landing-page-collapse"\n            :expand-on-loading="landingPageId !== null"\n        >\n            <template #header>\n\n                \n                {% block sw_landing_page_collapse_header %}\n                <div\n                    v-if="landingPageCheckedItem > 0"\n                    class="sw-category-detail__collapse-selected-count"\n                >\n                    {{ $tc(`sw-landing-page.general.treeHeadSelected`, 0, { count: landingPageCheckedItem }) }}:\n                </div>\n                <div\n                    v-else\n                    class="sw-category-detail__collapse-headline"\n                >\n                    {{ $tc(`sw-landing-page.general.treeHeadline`) }}\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #actions>\n\n                \n                {% block sw_landing_page_collapse_actions %}\n                <div v-if="landingPageCheckedItem > 0">\n                    <sw-button\n                        class="sw-tree-actions__delete_categories"\n                        variant="danger"\n                        size="small"\n                        @click="onLandingPageDelete"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </sw-button>\n                </div>\n                {% endblock %}\n\n            </template>\n\n            <template #content>\n\n                \n                {% block sw_landing_page_tree %}\n                <sw-landing-page-tree\n                    ref="landingPageTree"\n                    :landing-page-id="landingPageId"\n                    :current-language-id="currentLanguageId"\n                    :allow-edit="acl.can(\'landing_page.editor\')"\n                    :allow-create="acl.can(\'landing_page.creator\')"\n                    :allow-delete="acl.can(\'landing_page.deleter\')"\n                    @unsaved-changes="openChangeModal"\n                    @landing-page-checked-elements-count="landingPageCheckedElementsCount"\n                />\n                {% endblock %}\n\n            </template>\n        </sw-sidebar-collapse>\n        {% endblock %}\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_category_content %}\n    <template #content>\n\n        <template v-if="isLoading">\n            <sw-skeleton variant="detail-bold" />\n            <sw-skeleton />\n        </template>\n\n        <template v-else>\n            \n            {% block sw_category_content_view %}\n            <sw-category-view\n                v-if="category"\n                ref="categoryView"\n                :is-loading="isLoading"\n                :type="category.type"\n            />\n            {% endblock %}\n\n            \n            {% block sw_category_content_entry_point_overwrite_modal %}\n            <sw-category-entry-point-overwrite-modal\n                v-if="showEntryPointOverwriteModal"\n                :sales-channels="entryPointOverwriteSalesChannels"\n                @cancel="cancelEntryPointOverwrite"\n                @confirm="confirmEntryPointOverwrite"\n            />\n            {% endblock %}\n\n            \n            {% block sw_landing_page_content_view %}\n            <sw-landing-page-view\n                v-if="landingPage"\n                ref="landingPageView"\n                :is-loading="isLoading"\n            />\n            {% endblock %}\n\n            \n            {% block sw_category_content_discard_changes_modal %}\n            <sw-discard-changes-modal\n                v-if="isDisplayingLeavePageWarning"\n                @keep-editing="onLeaveModalClose(nextRoute)"\n                @discard-changes="onLeaveModalConfirm(nextRoute)"\n            />\n            {% endblock %}\n\n            \n            {% block sw_category_content_empty %}\n            <sw-empty-state\n                v-if="showEmptyState"\n                :title="$tc(\'sw-category.general.emptyStateHeadline\')"\n            >\n                <template #icon>\n                    <img\n                        :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                        :alt="$tc(\'sw-category.general.emptyStateHeadline\')"\n                    >\n                </template>\n            </sw-empty-state>\n        {% endblock %}\n\n        </template>\n    </template>\n    {% endblock %}\n\n</sw-page>\n{% endblock %}\n',inject:["acl","cmsService","repositoryFactory","seoUrlService"],mixins:[o.getByName("notification"),o.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("category.editor")},method:"onSave"},ESCAPE:"cancelEdit"},props:{categoryId:{type:String,required:!1,default:null},landingPageId:{type:String,required:!1,default:null}},data(){return{term:"",isLoading:!1,isCustomFieldLoading:!1,isSaveSuccessful:!1,isMobileViewport:null,splitBreakpoint:1024,isDisplayingLeavePageWarning:!1,nextRoute:null,currentLanguageId:Shopware.Context.api.languageId,forceDiscardChanges:!1,categoryCheckedItem:0,landingPageCheckedItem:0,entryPointOverwriteConfirmed:!1,entryPointOverwriteSalesChannels:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{changesetGenerator(){return new l},showEmptyState(){return!this.category&&!this.landingPage},identifier(){return this.category?this.placeholder(this.category,"name"):""},landingPageRepository(){return this.repositoryFactory.create("landing_page")},categoryRepository(){return this.repositoryFactory.create("category")},cmsPageRepository(){return this.repositoryFactory.create("cms_page")},landingPage(){return Shopware.State.get("swCategoryDetail")?Shopware.State.get("swCategoryDetail").landingPage:{}},category(){return Shopware.State.get("swCategoryDetail")?Shopware.State.get("swCategoryDetail").category:{}},showEntryPointOverwriteModal(){return null!==this.entryPointOverwriteSalesChannels&&this.entryPointOverwriteSalesChannels.length},cmsPage(){return Shopware.State.get("cmsPageState").currentPage},cmsPageId(){return this.landingPage?this.landingPage.cmsPageId:this.category?this.category.cmsPageId:null},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria(){let e=new r(1,null);return e.addFilter(r.equals("relations.entityName","category")),e},customFieldSetLandingPageCriteria(){let e=new r(1,null);return e.addFilter(r.equals("relations.entityName","landing_page")),e},mediaRepository(){return this.repositoryFactory.create("media")},pageClasses(){return{"has--category":!!this.category,"is--mobile":!!this.isMobileViewport}},tooltipSave(){if(!this.acl.can("category.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("category.editor"),showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},landingPageTooltipSave(){if(!this.acl.can("landing_page.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("landing_page.editor"),showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},categoryCriteria(){let e=new r(1,1);return e.getAssociation("seoUrls").addFilter(r.equals("isCanonical",!0)),e.addAssociation("tags").addAssociation("media").addAssociation("navigationSalesChannels.homeCmsPage.previewMedia").addAssociation("serviceSalesChannels").addAssociation("footerSalesChannels").addAssociation("translations"),e},landingPageCriteria(){let e=new r(1,1);return e.addAssociation("tags"),e.addAssociation("salesChannels"),e},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{landingPageId(){this.setLandingPage()},categoryId(){this.setCategory()},cmsPageId(){!this.isLoading&&(this.category&&Shopware.State.dispatch("cmsPageState/resetCmsPageState").then(this.getAssignedCmsPage),this.landingPage&&Shopware.State.dispatch("cmsPageState/resetCmsPageState").then(this.getAssignedCmsPageForLandingPage))}},beforeCreate(){Shopware.State.registerModule("swCategoryDetail",i),Shopware.State.dispatch("cmsPageState/resetCmsPageState")},created(){this.createdComponent()},beforeDestroy(){Shopware.State.unregisterModule("swCategoryDetail")},beforeRouteLeave(e,t,a){if(this.forceDiscardChanges){this.forceDiscardChanges=!1,a();return}if(!this.category){a();return}let{changes:n,deletionQueue:i}=this.changesetGenerator.generate(this.category);if(null===n){a();return}let s=["id","versionId"],o=Object.keys(n).filter(e=>!s.includes(e)),r=i.length>0;if("sw.cms.create"===e.name&&1===o.length&&"cmsPageId"===o[0]&&null===n.cmsPageId&&!r||0===o.length&&!r){a();return}this.isDisplayingLeavePageWarning=!0,this.nextRoute=e,a(!1)},methods:{createdComponent(){if(Shopware.ExtensionAPI.publishData({id:"sw-category-detail__category",path:"category",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-category-detail__cmsPage",path:"cmsPage",scope:this}),this.isLoading=!0,this.checkViewport(),this.registerListener(),null!==this.categoryId){this.setCategory();return}this.setLandingPage()},categoryCheckedElementsCount(e){this.categoryCheckedItem=e},landingPageCheckedElementsCount(e){this.landingPageCheckedItem=e},registerListener(){this.$device.onResize({listener:this.checkViewport})},onSearch(e){0===e.length&&(e=void 0),this.term=e},checkViewport(){this.isMobileViewport=this.$device.getViewportWidth()<this.splitBreakpoint},getAssignedCmsPage(){if(null===this.cmsPageId)return Promise.resolve(null);let e=this.cmsPageId,t=new r(1,1);return t.setIds([e]),t.addAssociation("previewMedia"),t.addAssociation("sections"),t.getAssociation("sections").addSorting(r.sort("position")),t.addAssociation("sections.blocks"),t.getAssociation("sections.blocks").addSorting(r.sort("position","ASC")).addAssociation("slots"),this.cmsPageRepository.search(t).then(t=>{let a=t.get(e);return e!==this.cmsPageId?null:(null!==this.category.slotConfig&&a.sections.forEach(e=>{e.blocks.forEach(e=>{e.slots.forEach(e=>{this.category.slotConfig[e.id]&&(null===e.config&&(e.config={}),d(e.config,c(this.category.slotConfig[e.id])))})})}),this.updateCmsPageDataMapping(),Shopware.State.commit("cmsPageState/setCurrentPage",a),this.cmsPage)})},updateCmsPageDataMapping(){Shopware.State.commit("cmsPageState/setCurrentMappingEntity","category"),Shopware.State.commit("cmsPageState/setCurrentMappingTypes",this.cmsService.getEntityMappingTypes("category")),Shopware.State.commit("cmsPageState/setCurrentDemoEntity",this.category)},getAssignedCmsPageForLandingPage(){if(null===this.cmsPageId)return Promise.resolve(null);let e=this.cmsPageId,t=new r(1,1);return t.setIds([e]),t.addAssociation("previewMedia"),t.addAssociation("sections"),t.getAssociation("sections").addSorting(r.sort("position")),t.addAssociation("sections.blocks"),t.getAssociation("sections.blocks").addSorting(r.sort("position","ASC")).getAssociation("slots").addAssociation("translations"),this.cmsPageRepository.search(t).then(t=>{let a=t.get(e);return e!==this.cmsPageId?null:(null!==this.landingPage.slotConfig&&a.sections.forEach(e=>{e.blocks.forEach(e=>{e.slots.forEach(e=>{this.landingPage.slotConfig[e.id]&&(null===e.config&&(e.config={}),d(e.config,c(this.landingPage.slotConfig[e.id])))})})}),this.updateCmsPageDataMappingForLandingPage(),Shopware.State.commit("cmsPageState/setCurrentPage",a),this.cmsPage)})},updateCmsPageDataMappingForLandingPage(){Shopware.State.commit("cmsPageState/setCurrentMappingEntity","landing_page"),Shopware.State.commit("cmsPageState/setCurrentMappingTypes",this.cmsService.getEntityMappingTypes("landing_page")),Shopware.State.commit("cmsPageState/setCurrentDemoEntity",this.landingPage)},async setLandingPage(){this.isLoading=!0;try{if(null===this.landingPageId){Shopware.State.commit("shopwareApps/setSelectedIds",[]),await Shopware.State.dispatch("swCategoryDetail/setActiveLandingPage",{landingPage:null}),await Shopware.State.dispatch("cmsPageState/resetCmsPageState");return}Shopware.State.commit("shopwareApps/setSelectedIds",[this.landingPageId]),await Shopware.State.dispatch("swCategoryDetail/loadActiveLandingPage",{repository:this.landingPageRepository,apiContext:Shopware.Context.api,id:this.landingPageId,criteria:this.landingPageCriteria}),await Shopware.State.dispatch("cmsPageState/resetCmsPageState"),await this.getAssignedCmsPageForLandingPage(),await this.loadLandingPageCustomFieldSet()}catch{this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})}finally{this.isLoading=!1}},setCategory(){return(this.isLoading=!0,null===this.categoryId)?(Shopware.State.commit("shopwareApps/setSelectedIds",[]),Shopware.State.dispatch("swCategoryDetail/setActiveCategory",{category:null}).then(()=>Shopware.State.dispatch("cmsPageState/resetCmsPageState")).then(()=>{this.isLoading=!1})):(Shopware.State.commit("shopwareApps/setSelectedIds",[this.categoryId]),Shopware.State.dispatch("swCategoryDetail/loadActiveCategory",{repository:this.categoryRepository,apiContext:Shopware.Context.api,id:this.categoryId,criteria:this.categoryCriteria}).then(()=>Shopware.State.dispatch("cmsPageState/resetCmsPageState")).then(this.getAssignedCmsPage).then(this.loadCustomFieldSet).then(()=>{this.isLoading=!1}))},loadCustomFieldSet(){return this.isCustomFieldLoading=!0,this.customFieldSetRepository.search(this.customFieldSetCriteria).then(e=>this.$store.commit("swCategoryDetail/setCustomFieldSets",e)).finally(()=>{this.isCustomFieldLoading=!0})},loadLandingPageCustomFieldSet(){return this.isCustomFieldLoading=!0,this.customFieldSetRepository.search(this.customFieldSetLandingPageCriteria).then(e=>this.$store.commit("swCategoryDetail/setCustomFieldSets",e)).finally(()=>{this.isCustomFieldLoading=!0})},onSaveCategories(){return this.categoryRepository.save(this.category)},openChangeModal(e){this.nextRoute=e,this.isDisplayingLeavePageWarning=!0},onLeaveModalClose(){this.nextRoute=null,this.isDisplayingLeavePageWarning=!1},onLeaveModalConfirm(e){Shopware.State.dispatch("error/removeApiError",{expression:"category"}),this.forceDiscardChanges=!0,this.isDisplayingLeavePageWarning=!1,this.$nextTick(()=>{this.$router.push({name:e.name,params:e.params})})},cancelEdit(){this.resetCategory()},resetCategory(){this.$router.push({name:"sw.category.index"})},onChangeLanguage(e){this.currentLanguageId=e,null!==this.landingPageId&&this.setLandingPage(),this.setCategory()},abortOnLanguageChange(){return this.landingPage?!!this.landingPage&&this.categoryRepository.hasChanges(this.landingPage):!!this.category&&this.categoryRepository.hasChanges(this.category)},saveOnLanguageChange(){return this.landingPage?this.onSaveLandingPage():this.onSave()},saveFinish(){this.isSaveSuccessful=!1},async onSave(){this.isSaveSuccessful=!1;let e=this.getCmsPageOverrides();return(h.isPlainObject(e)&&(this.category.slotConfig=c(e)),!this.entryPointOverwriteConfirmed&&(this.checkForEntryPointOverwrite(),this.showEntryPointOverwriteModal))?Promise.resolve():(this.isLoading=!0,await this.updateSeoUrls(),this.categoryRepository.save(this.category,{...Shopware.Context.api}).then(()=>(this.isSaveSuccessful=!0,this.entryPointOverwriteConfirmed=!1,this.setCategory())).catch(()=>{this.isLoading=!1,this.entryPointOverwriteConfirmed=!1,this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})}))},checkForEntryPointOverwrite(){this.entryPointOverwriteSalesChannels=new g("/sales_channel","sales_channel",s.api),this.category.navigationSalesChannels.forEach(e=>{null!==e.navigationCategoryId&&e.navigationCategoryId!==this.categoryId&&this.entryPointOverwriteSalesChannels.add(e)}),this.category.footerSalesChannels.forEach(e=>{null!==e.footerCategoryId&&e.footerCategoryId!==this.categoryId&&this.entryPointOverwriteSalesChannels.add(e)}),this.category.serviceSalesChannels.forEach(e=>{null!==e.serviceCategoryId&&e.serviceCategoryId!==this.categoryId&&this.entryPointOverwriteSalesChannels.add(e)})},cancelEntryPointOverwrite(){this.entryPointOverwriteSalesChannels=null},confirmEntryPointOverwrite(){this.entryPointOverwriteSalesChannels=null,this.entryPointOverwriteConfirmed=!0,this.$nextTick(()=>{this.onSave()})},onSaveLandingPage(){this.isSaveSuccessful=!1;let e=this.getCmsPageOverrides();return(h.isPlainObject(e)&&(this.landingPage.slotConfig=c(e)),"create"!==this.landingPageId&&0===this.landingPage.salesChannels.length)?(this.addLandingPageSalesChannelError(),Promise.resolve()):(this.isLoading=!0,this.landingPageRepository.save(this.landingPage,Shopware.Context.api).then(()=>(this.isSaveSuccessful=!0,"create"===this.landingPageId)?(this.$router.push({name:"sw.category.landingPageDetail",params:{id:this.landingPage.id}}),Promise.resolve()):this.setLandingPage()).catch(()=>{if(this.isLoading=!1,0===this.landingPage.salesChannels.length){this.addLandingPageSalesChannelError();return}this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})}))},addLandingPageSalesChannelError(){let e=new Shopware.Classes.ShopwareError({code:"landing_page_sales_channel_blank",detail:"This value should not be blank.",status:"400"});Shopware.State.dispatch("error/addApiError",{expression:`landing_page.${this.landingPage.id}.salesChannels`,error:e}),this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})},getCmsPageOverrides(){if(null===this.cmsPage)return null;this.deleteSpecifcKeys(this.cmsPage.sections);let{changes:e}=this.changesetGenerator.generate(this.cmsPage),t={};return null===e||h.isArray(e.sections)&&e.sections.forEach(e=>{h.isArray(e.blocks)&&e.blocks.forEach(e=>{h.isArray(e.slots)&&e.slots.forEach(e=>{t[e.id]=e.config})})}),t},deleteSpecifcKeys(e){e&&e.forEach(e=>{e.blocks&&e.blocks.forEach(e=>{e.slots&&e.slots.forEach(e=>{e.config&&Object.values(e.config).forEach(e=>{e.entity&&delete e.entity,e.hasOwnProperty("required")&&delete e.required,e.type&&delete e.type})})})})},updateSeoUrls(){return Shopware.State.list().includes("swSeoUrl")?Promise.all(Shopware.State.getters["swSeoUrl/getNewOrModifiedUrls"]().map(e=>e.seoPathInfo?(e.isModified=!0,this.seoUrlService.updateCanonicalUrl(e,e.languageId)):Promise.resolve())):Promise.resolve()},onLandingPageDelete(){Shopware.State.commit("swCategoryDetail/setLandingPagesToDelete",{landingPagesToDelete:null})},onCategoryDelete(){Shopware.State.commit("swCategoryDetail/setCategoriesToDelete",{categoriesToDelete:null})}}}},471027:function(e,t,a){var n=a(584232);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(745346).Z("bef8892c",n,!0,{})}}]);