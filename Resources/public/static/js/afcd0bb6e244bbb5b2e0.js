(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[44],{"3NYE":function(e,t,i){var n=i("zwm4");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("ydqr").default)("3e208d08",n,!0,{})},zJt2:function(e,t,i){"use strict";i.r(t);var n=i("HZZ/"),a=i.n(n),r=i("hJxD"),d=i.n(r),s=(i("3NYE"),Shopware.Context),o=Shopware.Data.Criteria;t.default={template:'\n{% block sw_sidebar_media_item %}\n<sw-sidebar-item\n    ref="sidebarItem"\n    class="sw-sidebar-media-item"\n    icon="regular-image"\n    :title="$tc(\'global.sw-sidebar-media-item.title\')"\n    :disabled="disabled"\n    v-on="additionalEventListeners"\n>\n\n    \n    {% block sw_sidebar_media_item_content %}\n    <div class="sw-sidebar-media-item__content">\n        \n        {% block sw_sidebar_media_item_search_field %}\n        <sw-simple-search-field\n            v-model="term"\n            @search-term-change="onSearchTermChange"\n        />\n        {% endblock %}\n\n        \n        {% block sw_sidebar_media_item_folder_navigation %}\n        <sw-media-breadcrumbs\n            v-if="!term.length"\n            v-model="mediaFolderId"\n            small\n        />\n        {% endblock %}\n\n        \n        {% block sw_sidebar_media_item_media_item_list %}\n        \n        {% block sw_sidebar_media_item_media_item_list_folder_item %}\n        \n        <sw-media-folder-item\n            v-for="folder in subFolders"\n            v-if="!term.length"\n            :key="folder.id"\n            :item="folder"\n            :show-selection-indicator="false"\n            :show-context-menu-button="true"\n            :selected="false"\n            :is-list="true"\n            @media-item-click="onNavigateToFolder(folder.id)"\n            @media-folder-delete="handleFolderGridItemDelete"\n        />\n        {% endblock %}\n\n        \n        {% block sw_sidebar_media_item_media_item_list_media_item %}\n        <sw-media-media-item\n            v-for="mediaItem in mediaItems"\n            :key="mediaItem.id"\n            v-draggable="{ dragGroup: \'media\', data: { mediaItem } }"\n            :item="mediaItem"\n            :show-selection-indicator="false"\n            :show-context-menu-button="true"\n            :selected="false"\n            :is-list="true"\n            @media-item-delete="handleMediaGridItemDelete"\n        >\n\n            \n            {% block sw_sidebar_media_item_context_items %}\n            <slot\n                name="context-menu-items"\n                :mediaItem="mediaItem"\n            ></slot>\n        {% endblock %}\n        </sw-media-media-item>\n        {% endblock %}\n\n        \n        {% block sw_sidebar_media_item_load_more_button %}\n        <sw-button\n            v-if="showMore"\n            size="small"\n            block\n            class="sw-sidebar-media-item__load-more-button"\n            @click="onLoadMore"\n        >\n\n            {{ $tc(\'global.sw-sidebar-media-item.labelLoadMore\') }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n\n        \n        {% block sw_sidebar_media_item_loader %}\n        <sw-loader v-if="isLoading" />\n        {% endblock %}\n    </div>\n    {% endblock %}\n</sw-sidebar-item>\n{% endblock %}\n',inject:["repositoryFactory"],props:{initialFolderId:{type:String,required:!1,default:null},isParentLoading:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{isLoading:!0,mediaFolderId:this.initialFolderId,mediaItems:[],subFolders:[],page:1,limit:25,total:0,term:""}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},mediaFolderRepository:function(){return this.repositoryFactory.create("media_folder")},showMore:function(){return this.itemsLoaded<this.total},itemsLoaded:function(){return this.mediaItems.length},additionalEventListeners:function(){return this.$listeners}},watch:{initialFolderId:function(){this.mediaFolderId=this.initialFolderId},mediaFolderId:function(){this.initializeContent()},isParentLoading:function(){this.getList()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initializeContent()},onSearchTermChange:function(e){this.term=e,this.page=1,this.getList()},initializeContent:function(){this.disabled||(this.page=1,this.term="",this.mediaItems=[],this.getSubFolders(),this.getList())},getSubFolders:function(){var e=this;return a()(d.a.mark((function t(){var i,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=new o(1,50)).addFilter(o.equals("parentId",e.mediaFolderId)),t.next=4,e.mediaFolderRepository.search(i,s.api);case 4:return n=t.sent,e.subFolders=n,t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})))()},handleFolderGridItemDelete:function(){this.getSubFolders()},handleMediaGridItemDelete:function(){var e=this,t=this.page;this.page=1,this.getList().then((function(){for(;e.page<t;)e.page+=1,e.extendList()}))},onLoadMore:function(){this.page+=1,this.extendList()},extendList:function(){var e=this;return a()(d.a.mark((function t(){var i,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.getListingCriteria(),t.next=3,e.mediaRepository.search(i,s.api);case 3:return n=t.sent,e.mediaItems=e.mediaItems.concat(n),t.abrupt("return",e.mediaItems);case 6:case"end":return t.stop()}}),t)})))()},getList:function(){var e=this;return a()(d.a.mark((function t(){var i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.isParentLoading){t.next=2;break}return t.abrupt("return",null);case 2:return e.isLoading=!0,i=e.getListingCriteria(),t.next=6,e.mediaRepository.search(i,s.api);case 6:return e.mediaItems=t.sent,e.total=e.mediaItems.total,e.isLoading=!1,t.abrupt("return",e.mediaItems);case 10:case"end":return t.stop()}}),t)})))()},getListingCriteria:function(){var e=new o(this.page,this.limit);return this.term.length||e.addFilter(o.equals("mediaFolderId",this.mediaFolderId)),this.term&&(e.term=this.term),e.addSorting(o.sort("uploadedAt","DESC")),e},openContent:function(){this.$refs.sidebarItem.openContent()},onNavigateToFolder:function(e){this.mediaFolderId=e}}}},zwm4:function(e,t,i){}}]);