(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[62],{CiAI:function(e,t,n){},Ttq7:function(e,t,n){var r=n("CiAI");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("9a7f517a",r,!0,{})},uOV4:function(e,t,n){"use strict";n.r(t);var r=n("7yzw"),i=n.n(r),a=n("6lmj"),o=n.n(a),s=n("CsSd"),c=n.n(s),l=n("92Mt"),d=n.n(l);n("Ttq7");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Shopware.Data.Criteria,f=Shopware.Component.getComponentHelper().mapState;t.default={template:'\n{% block sw_category_tree %}\n<div class="sw-category-tree">\n    <sw-tree\n        v-if="!isLoadingInitialData"\n        ref="categoryTree"\n        class="sw-category-tree__inner"\n        after-id-property="afterCategoryId"\n        :items="categories"\n        :sortable="sortable"\n        :searchable="false"\n        :active-tree-item-id="categoryId"\n        :translation-context="translationContext"\n        :on-change-route="changeCategory"\n        :disable-context-menu="disableContextMenu"\n        :allow-delete-categories="allowDelete"\n        initially-expanded-root\n        @batch-delete="deleteCheckedItems"\n        @delete-element="onDeleteCategory"\n        @drag-end="onUpdatePositions"\n        @get-tree-items="onGetTreeItems"\n        @editing-end="syncSiblings"\n        @checked-elements-count="checkedElementsCount"\n    >\n\n        <template #headline>\n            <span></span>\n        </template>\n\n        \n        {% block sw_category_tree_items %}\n        <template\n            #items="{\n                treeItems,\n                sortable,\n                draggedItem,\n                newElementId,\n                checkItem,\n                translationContext,\n                onChangeRoute,\n                disableContextMenu,\n                selectedItemsPathIds,\n                checkedItemIds,\n            }"\n        >\n            <sw-tree-item\n                v-for="item in treeItems"\n                :key="item.id"\n                :item="item"\n                :should-show-active-state="true"\n                :allow-duplicate="false"\n                :allow-new-categories="allowCreate"\n                :allow-delete-categories="allowDelete"\n                :active="item.active"\n                :translation-context="translationContext"\n                :on-change-route="onChangeRoute"\n                :sortable="sortable"\n                :dragged-item="draggedItem"\n                :disable-context-menu="disableContextMenu"\n                :display-checkbox="allowEdit"\n                :context-menu-tooltip-text="contextMenuTooltipText"\n                :new-element-id="newElementId"\n                :get-item-url="getCategoryUrl"\n                :get-is-highlighted="isHighlighted"\n                :active-parent-ids="selectedItemsPathIds"\n                :active-item-ids="checkedItemIds"\n                @check-item="checkItem"\n            />\n        </template>\n        {% endblock %}\n    </sw-tree>\n\n    <div v-else>\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item-nested" />\n        <sw-skeleton variant="tree-item-nested" />\n        <sw-skeleton variant="tree-item-nested" />\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item-nested" />\n        <sw-skeleton variant="tree-item-nested" />\n    </div>\n</div>\n{% endblock %}\n',inject:["repositoryFactory","syncService"],mixins:["notification"],props:{categoryId:{type:String,required:!1,default:null},currentLanguageId:{type:String,required:!0},allowEdit:{type:Boolean,required:!1,default:!0},allowCreate:{type:Boolean,required:!1,default:!0},allowDelete:{type:Boolean,required:!1,default:!0}},data:function(){return{loadedCategories:{},translationContext:"sw-category",linkContext:"sw.category.detail",isLoadingInitialData:!0,loadedParentIds:[],sortable:this.allowEdit}},computed:g(g({},f("swCategoryDetail",["categoriesToDelete"])),{},{categoryRepository:function(){return this.repositoryFactory.create("category")},category:function(){return Shopware.State.get("swCategoryDetail").category},categories:function(){return Object.values(this.loadedCategories)},disableContextMenu:function(){return!this.allowEdit||this.currentLanguageId!==Shopware.Context.api.systemLanguageId},contextMenuTooltipText:function(){return this.allowEdit?null:this.$tc("sw-privileges.tooltip.warning")},criteria:function(){return new h(1,500).addAssociation("navigationSalesChannels").addAssociation("footerSalesChannels").addAssociation("serviceSalesChannels")},criteriaWithChildren:function(){var e=h.fromCriteria(this.criteria).setLimit(1);return e.associations.push({association:"children",criteria:h.fromCriteria(this.criteria)}),e},cmsPageRepository:function(){return this.repositoryFactory.create("cms_page")},productRepository:function(){return this.repositoryFactory.create("product")}}),watch:{categoriesToDelete:function(e){void 0!==e&&(this.$refs.categoryTree.onDeleteElements(e),Shopware.State.commit("swCategoryDetail/setCategoriesToDelete",{categoriesToDelete:void 0}))},allowEdit:function(e){this.sortable=e},category:function(e,t){var n=this;if(t||!this.isLoadingInitialData){if(null!==e&&t&&e.id===t.id){var r=[e.id].concat(o()(t.navigationSalesChannels.map((function(e){return e.navigationCategoryId}))),o()(t.footerSalesChannels.map((function(e){return e.footerCategoryId}))),o()(t.serviceSalesChannels.map((function(e){return e.serviceCategoryId})))),i=h.fromCriteria(this.criteria).setIds(r.filter((function(e,t,n){return null!==e&&n.indexOf(e)===t})));this.categoryRepository.search(i).then((function(e){n.addCategories(e)}))}}else this.openInitialTree()},currentLanguageId:function(){this.openInitialTree()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;null!==this.category&&this.openInitialTree(),this.categoryId||this.loadRootCategories().finally((function(){e.isLoadingInitialData=!1}))},openInitialTree:function(){var e=this;this.isLoadingInitialData=!0,this.loadedCategories={},this.loadedParentIds=[],this.loadRootCategories().then((function(){if(!e.category||null===e.category.path)return e.isLoadingInitialData=!1,Promise.resolve();var t=e.category.path.split("|").filter((function(e){return!!e})),n=[];return t.forEach((function(t){var r=e.categoryRepository.get(t,Shopware.Context.api,e.criteriaWithChildren).then((function(t){e.addCategories([t].concat(o()(t.children)))}));n.push(r)})),Promise.all(n).then((function(){e.isLoadingInitialData=!1}))}))},onUpdatePositions:Shopware.Utils.debounce((function(e){var t=this,n=e.draggedItem,r=e.oldParentId,i=e.newParentId;n.children.length>0&&(n.children.forEach((function(e){t.removeFromStore(e.id)})),this.loadedParentIds=this.loadedParentIds.filter((function(e){return e!==n.id}))),this.syncSiblings({parentId:i}).then((function(){r!==i&&t.syncSiblings({parentId:r}).then((function(){t.syncProducts(n.id)})),t.sortable=t.allowEdit}))}),400),syncProducts:function(e){var t=new h(1,50);return t.addFilter(h.multi("or",[h.equals("categoriesRo.id",e),h.equals("categories.id",e)])),this.productRepository.iterateIds(t,this.indexProducts)},indexProducts:function(e){var t=this.productRepository.buildHeaders();return Shopware.Application.getContainer("init").httpClient.post("/_action/index-products",{ids:e},{headers:t})},checkedElementsCount:function(e){this.$emit("category-checked-elements-count",e)},deleteCheckedItems:function(e){var t=this;return i()(d.a.mark((function n(){var r,i,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=Object.keys(e),!r.some((function(e){var n,r;return null!==(null===(n=t.loadedCategories[e])||void 0===n?void 0:n.navigationSalesChannels)&&(null===(r=t.loadedCategories[e])||void 0===r?void 0:r.navigationSalesChannels.length)>0}))){n.next=8;break}return t.createNotificationError({message:t.$tc("sw-category.general.errorNavigationEntryPointMultiple")}),i=r.map((function(e){return t.loadedCategories[e]})),r.forEach((function(e){t.$delete(t.loadedCategories,e)})),t.$nextTick((function(){t.addCategories(i)})),n.abrupt("return");case 8:return n.next=10,t.categoryRepository.syncDeleted(r,Shopware.Context.api);case 10:return a=r.map((function(e){return t.loadedCategories[e]})),n.next=13,t.fixSortingForCategories(a);case 13:r.forEach((function(e){t.removeFromStore(e)}));case 14:case"end":return n.stop()}}),n)})))()},onDeleteCategory:function(e){var t=this,n=e.data,r=e.children,a=e.checked;if(n.isNew())return this.$delete(this.loadedCategories,n.id),Promise.resolve();if(this.isErrorNavigationEntryPoint(n)){n.isDeleted=!1,r.length>0&&r.forEach((function(e){e.data.isDeleted=!1}));var o=this.getNextCategory(n);return o&&(o.afterCategoryId=n.id),this.loadedCategories=g({},this.loadedCategories),this.createNotificationError({message:this.entryPointWarningMessage(n)}),Promise.resolve()}return this.categoryRepository.delete(n.id).then(i()(d.a.mark((function e(){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.removeFromStore(n.id),null===n.parentId){e.next=6;break}return e.next=4,t.categoryRepository.get(n.parentId,Shopware.Context.api,t.criteria);case 4:r=e.sent,t.addCategory(r);case 6:return e.next=8,t.fixSortingForCategories([n],!0);case 8:n.id===t.categoryId&&t.$router.push({name:"sw.category.index"}),!0===a&&(t.$refs.categoryTree.checkedElementsCount-=1,t.$emit("category-checked-elements-count",t.$refs.categoryTree.checkedElementsCount));case 10:case"end":return e.stop()}}),e)}))))},fixSortingForCategories:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[];return e.forEach((function(i){var a=t.getNextCategory(i,n?"afterCategoryId":"id");a&&(a.afterCategoryId=i.afterCategoryId,e.find((function(e){return e.id===a.id}))||r.push(a))})),this.categoryRepository.saveAll(r)},getNextCategory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";return Object.values(this.loadedCategories).find((function(n){return n.parentId===e.parentId&&n.afterCategoryId===e[t]}))},changeCategory:function(e){var t={name:"sw.category.detail",params:{id:e.id}};this.category&&this.categoryRepository.hasChanges(this.category)?this.$emit("unsaved-changes",t):this.$router.push(t)},onGetTreeItems:function(e){var t=this;if(this.loadedParentIds.includes(e))return Promise.resolve();var n=h.fromCriteria(this.criteria);return n.addFilter(h.equals("parentId",e)),n.setIds([]),this.categoryRepository.search(n).then((function(n){t.addCategories(n),t.loadedParentIds.push(e)}))},getChildrenFromParent:function(e){return this.onGetTreeItems(e)},loadRootCategories:function(){var e=this,t=h.fromCriteria(this.criteria).addFilter(h.equals("parentId",null));return this.categoryRepository.search(t).then((function(t){e.addCategories(t)}))},createNewElement:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.sortable=!1,!t&&e&&(t=e.parentId);var r=this.createNewCategory(n,t);return this.addCategory(r),r},createNewCategory:function(e,t){var n=this,r=this.categoryRepository.create();return r.name=e,r.parentId=t,r.childCount=0,r.active=!1,r.visible=!0,r.save=function(){return n.categoryRepository.save(r).then((function(){var e=h.fromCriteria(n.criteria).setIds([r.id,t].filter((function(e){return null!==e})));n.categoryRepository.search(e).then((function(e){n.addCategories(e),n.sortable=n.allowEdit}))}))},r},syncSiblings:function(e){var t=this,n=e.parentId,r=this.categories.filter((function(e){return e.parentId===n}));return this.categoryRepository.sync(r).then((function(){return t.loadedParentIds=t.loadedParentIds.filter((function(e){return e!==n})),t.getChildrenFromParent(n)})).then((function(){t.categoryRepository.get(n,Shopware.Context.api,t.criteria).then((function(e){t.addCategory(e)}))}))},addCategory:function(e){e&&this.$set(this.loadedCategories,e.id,e)},addCategories:function(e){var t=this;e.forEach((function(e){t.$set(t.loadedCategories,e.id,e)}))},removeFromStore:function(e){var t=this,n=this.getDeletedIds(e);this.loadedParentIds=this.loadedParentIds.filter((function(e){return!n.includes(e)})),n.forEach((function(e){t.$delete(t.loadedCategories,e)}))},getDeletedIds:function(e){var t=this,n=[e];return Object.keys(this.loadedCategories).forEach((function(r){t.loadedCategories[r].parentId===e&&n.push.apply(n,o()(t.getDeletedIds(r)))})),n},getCategoryUrl:function(e){return this.$router.resolve({name:this.linkContext,params:{id:e.id}}).href},isHighlighted:function(e){var t=e.data;return null!==t.navigationSalesChannels&&t.navigationSalesChannels.length>0||null!==t.serviceSalesChannels&&t.serviceSalesChannels.length>0||null!==t.footerSalesChannels&&t.footerSalesChannels.length>0},isErrorNavigationEntryPoint:function(e){return[e.navigationSalesChannels,e.serviceSalesChannels,e.footerSalesChannels].some((function(e){return null!==e&&(null==e?void 0:e.length)>0}))},entryPointWarningMessage:function(e){var t=e.serviceSalesChannels,n=e.footerSalesChannels;return null!==t&&(null==t?void 0:t.length)>0?this.$tc("sw-category.general.errorNavigationEntryPoint",0,{entryPointLabel:this.$tc("sw-category.base.entry-point-card.types.labelServiceNavigation")}):null!==n&&(null==n?void 0:n.length)>0?this.$tc("sw-category.general.errorNavigationEntryPoint",0,{entryPointLabel:this.$tc("sw-category.base.entry-point-card.types.labelFooterNavigation")}):this.$tc("sw-category.general.errorNavigationEntryPoint",0,{entryPointLabel:this.$tc("sw-category.base.entry-point-card.types.labelMainNavigation")})}}}}}]);
//# sourceMappingURL=7b492d0e01d7a68ce6b7.js.map