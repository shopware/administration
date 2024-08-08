(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[91197],{839567:function(){},791197:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(814942);let{Criteria:a}=Shopware.Data,{mapState:i}=Shopware.Component.getComponentHelper();var l={template:'\n{% block sw_landing_page_tree %}\n<div class="sw-landing-page-tree">\n\n    \n    {% block sw_landing_page_tree_inner %}\n    <sw-tree\n        v-if="!isLoadingInitialData"\n        ref="landingPageTree"\n        class="sw-landing-page-tree__inner"\n        :items="landingPages"\n        :sortable="false"\n        :searchable="false"\n        :translation-context="translationContext"\n        :on-change-route="changeLandingPage"\n        :disable-context-menu="disableContextMenu"\n        :allow-delete-categories="allowDelete"\n        :allow-create-categories="false"\n        :active-tree-item-id="landingPageId"\n        @batch-delete="deleteCheckedItems"\n        @delete-element="onDeleteLandingPage"\n        @editing-end="syncLandingPages"\n        @checked-elements-count="checkedElementsCount"\n    >\n\n        <template #headline>\n            <span></span>\n        </template>\n\n        <template\n            #items="{\n                treeItems,\n                sortable,\n                draggedItem,\n                newElementId,\n                checkItem,\n                translationContext,\n                onChangeRoute,\n                disableContextMenu\n            }"\n        >\n\n            \n            {% block sw_landing_page_tree_items %}\n            <sw-tree-item\n                v-for="item in treeItems"\n                :key="item.id"\n                :item="item"\n                :should-show-active-state="true"\n                :allow-duplicate="true"\n                :allow-new-categories="false"\n                :allow-delete-categories="allowDelete"\n                :active="item.active"\n                :translation-context="translationContext"\n                :on-change-route="onChangeRoute"\n                :sortable="sortable"\n                :dragged-item="draggedItem"\n                :disable-context-menu="disableContextMenu"\n                :display-checkbox="allowEdit"\n                :context-menu-tooltip-text="contextMenuTooltipText"\n                :new-element-id="newElementId"\n                :get-item-url="getLandingPageUrl"\n                @check-item="checkItem"\n            >\n                <template #grip>\n                    <span></span>\n                </template>\n\n                <template\n                    #actions="{\n                        onDuplicate,\n                        onChangeRoute,\n                        deleteElement,\n                        toolTip\n                    }"\n                >\n                    \n                    {% block sw_landing_page_tree_items_actions %}\n                    <sw-context-button\n                        v-tooltip="toolTip"\n                        class="sw-tree-item__context_button"\n                        :disabled="disableContextMenu"\n                    >\n\n                        \n                        {% block sw_landing_page_tree_items_actions_edit %}\n                        <sw-context-menu-item @click="onChangeRoute(item)">\n                            {{ $tc(\'global.default.edit\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_landing_page_tree_items_actions_duplicate %}\n                        <sw-context-menu-item\n                            class="sw-context-menu__duplicate-action"\n                            @click="onDuplicate(item)"\n                        >\n                            {{ $tc(`global.default.duplicate`) }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                        \n                        {% block sw_landing_page_tree_items_actions_delete %}\n                        <sw-context-menu-item\n                            class="sw-context-menu__group-button-delete"\n                            variant="danger"\n                            @click="deleteElement(item)"\n                        >\n                            {{ $tc(\'global.default.delete\') }}\n                        </sw-context-menu-item>\n                        {% endblock %}\n\n                    </sw-context-button>\n                    {% endblock %}\n\n                </template>\n            </sw-tree-item>\n            {% endblock %}\n\n        </template>\n    </sw-tree>\n    {% endblock %}\n\n    <div v-else>\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item" />\n        <sw-skeleton variant="tree-item" />\n    </div>\n\n    \n    {% block sw_landing_page_tree_action %}\n    <div class="sw-landing-page-tree__add-button">\n        <sw-button\n            class="sw-landing-page-tree__add-button-button"\n            :router-link="newLandingPageUrl()"\n            size="small"\n            variant="ghost"\n            :disabled="disableContextMenu || !acl.can(\'landing_page.creator\')"\n        >\n            {{ $tc(\'sw-landing-page.general.buttonCreate\') }}\n        </sw-button>\n    </div>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["repositoryFactory","syncService","acl"],mixins:["notification"],props:{landingPageId:{type:String,required:!1,default:null},currentLanguageId:{type:String,required:!0},allowEdit:{type:Boolean,required:!1,default:!0},allowCreate:{type:Boolean,required:!1,default:!0},allowDelete:{type:Boolean,required:!1,default:!0}},data(){return{loadedLandingPages:{},translationContext:"sw-landing-page",linkContext:"sw.category.landingPageDetail",isLoadingInitialData:!0}},computed:{...i("swCategoryDetail",["landingPagesToDelete"]),cmsLandingPageCriteria(){let e=new a(1,500);return e.addSorting(a.sort("name")),e},landingPage(){return Shopware.State.get("swCategoryDetail").landingPage},landingPageRepository(){return this.repositoryFactory.create("landing_page")},landingPages(){return Object.values(this.loadedLandingPages)},disableContextMenu(){return!this.allowEdit||this.currentLanguageId!==Shopware.Context.api.systemLanguageId},contextMenuTooltipText(){return this.allowEdit?null:this.$tc("sw-privileges.tooltip.warning")}},watch:{landingPagesToDelete(e){void 0!==e&&(this.$refs.landingPageTree.onDeleteElements(e),Shopware.State.commit("swCategoryDetail/setLandingPagesToDelete",{landingPagesToDelete:void 0}))},landingPage(e,n){if(!n&&this.isLoadingInitialData){this.loadLandingPages();return}null!==e&&n&&"create"!==this.landingPageId&&e.id===n.id&&this.landingPageRepository.get(e.id).then(e=>{this.$set(this.loadedLandingPages,e.id,e)})},currentLanguageId(){this.isLoadingInitialData=!0,this.loadedLandingPages={},this.loadLandingPages().finally(()=>{this.isLoadingInitialData=!1})}},created(){this.createdComponent()},methods:{createdComponent(){this.loadLandingPages().catch(()=>{this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})}).finally(()=>{this.isLoadingInitialData=!1})},loadLandingPages(){return this.landingPageRepository.search(this.cmsLandingPageCriteria).then(e=>{this.addLandingPages(e)})},checkedElementsCount(e){this.$emit("landing-page-checked-elements-count",e)},deleteCheckedItems(e){let n=Object.keys(e);this.landingPageRepository.syncDeleted(n).then(()=>{n.forEach(e=>this.removeFromStore(e))})},onDeleteLandingPage({data:e}){return e.isNew()?(this.$delete(this.loadedLandingPages,e.id),Promise.resolve()):this.landingPageRepository.delete(e.id).then(()=>{this.removeFromStore(e.id),e.id===this.landingPageId&&this.$router.push({name:"sw.category.index"})})},changeLandingPage(e){let n={name:"sw.category.landingPageDetail",params:{id:e.id}};this.landingPage&&this.landingPageRepository.hasChanges(this.landingPage)?this.$emit("unsaved-changes",n):this.$router.push(n)},duplicateElement(e){let n={cloneChildren:!1,overwrites:{name:`${e.data.name} ${this.$tc("global.default.copy")}`,url:`${e.data.url}-${this.$tc("global.default.copy")}`,active:!1}};this.landingPageRepository.clone(e.id,n,Shopware.Context.api).then(e=>{let n=new a(1,25);n.setIds([e.id]),this.landingPageRepository.search(n).then(e=>{e.forEach(e=>{e.childCount=0,e.parentId=null}),this.addLandingPages(e)})}).catch(()=>{this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})})},createNewElement(e,n,t=""){let a=this.createNewLandingPage(t);return this.addLandingPage(a),a},syncLandingPages(){return this.landingPageRepository.sync(this.landingPages)},createNewLandingPage(e){let n=this.landingPageRepository.create();return n.name=e,n.active=!1,n.save=()=>this.landingPageRepository.save(n).then(()=>{let e=new a(1,25);e.setIds([n.id].filter(e=>null!==e)),this.landingPageRepository.search(e).then(e=>{this.addLandingPages(e)})}),n},addLandingPage(e){e&&(this.loadedLandingPages={...this.loadedLandingPages,[e.id]:e})},addLandingPages(e){if(!e)return;let n=Object.entries(this.loadedLandingPages||{}),t=e.map(e=>[e.id,e]);this.loadedLandingPages=Object.fromEntries([...n,...t])},removeFromStore(e){this.loadedLandingPages=Object.fromEntries(Object.entries(this.loadedLandingPages||{}).filter(([n])=>n!==e))},getLandingPageUrl(e){return this.$router.resolve({name:this.linkContext,params:{id:e.id}}).href},newLandingPageUrl(){return{name:"sw.category.landingPageDetail",params:{id:"create"}}}}}},814942:function(e,n,t){var a=t(839567);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),t(745346).Z("7bbf3e80",a,!0,{})}}]);