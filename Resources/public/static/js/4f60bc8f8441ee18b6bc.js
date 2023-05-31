(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[307],{"3jRA":function(e,n,t){},O31a:function(e,n,t){"use strict";t.r(n);var a=t("HZZ/"),r=t.n(a),i=t("hJxD"),d=t.n(i),o=(t("O9Kj"),Shopware.Context);n.default={template:'\n{% block sw_media_index %}\n<sw-page class="sw-media-index">\n\n    \n    {% block sw_media_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="media"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_index_smart_bar %}\n    \n    {% block sw_media_index_bread_crumb_navigation %}\n    <template #smart-bar-back>\n        <div class="sw-media-index__navigation">\n\n            <template v-if="parentFolder">\n                \n                {% block sw_media_index_bread_crumb_navigation_icon %}\n                <router-link :to="{ name: \'sw.media.index\', params: { folderId: null } }">\n                    <img\n                        :src="\'/administration/static/img/media/folder--back--breadcrumb.svg\' | asset"\n                        class="sw-media-index__navigation-breadcrumb"\n                        alt="Folder back breadcrumb"\n                    >\n                </router-link>\n                {% endblock %}\n\n                \n                {% block sw_media_index_bread_crumb_navigation_parent%}\n                <router-link class="sw-media-index__navigation-label"\n                             :to="{ name: \'sw.media.index\', params: { folderId: parentFolder.id } }">\n                    {{ parentFolder.name }}\n                </router-link>\n                {% endblock %}\n            </template>\n        </div>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_index_smart_bar_header %}\n    <template\n        v-if="currentFolder"\n        #smart-bar-header\n    >\n        <h2>\n            \n            {% block sw_media_index_smart_bar_heading %}\n            {{ currentFolder.name }}\n            {% endblock %}\n        </h2>\n    </template>\n    {% endblock %}\n\n    <template #smart-bar-actions>\n        \n        {% block sw_media_index_smart_bar_media_upload %}\n        <sw-media-upload-v2\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'media.creator\'),\n                showOnDisabledElements: true\n            }"\n            :disabled="!acl.can(\'media.creator\')"\n            variant="compact"\n            :file-accept="fileAccept"\n            :target-folder-id="routeFolderId"\n            :upload-tag="uploadTag"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_index_language_switch %}\n    <template #language-switch>\n        <sw-language-switch @on-change="reloadList" />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_index_page_content %}\n    <template #content>\n        <div class="sw-media-index__page-content">\n            \n            {% block sw_media_index_listing_grid %}\n            <sw-upload-listener\n                :upload-tag="uploadTag"\n                @media-upload-add="onUploadsAdded"\n                @media-upload-finish="onUploadFinished"\n                @media-upload-fail="onUploadFailed"\n                @media-upload-cancel="reloadList"\n            />\n            <sw-media-library\n                ref="mediaLibrary"\n                v-model="selectedItems"\n                class="sw-media-index__media-library"\n                :folder-id="routeFolderId"\n                :pending-uploads="uploads"\n                :term="term"\n                editable\n                @media-folder-change="updateRoute"\n            />\n            {% endblock %}\n\n            \n            {% block sw_media_index_sidebar %}\n            <sw-media-sidebar\n                :items="selectedItems"\n                :current-folder-id="routeFolderId"\n                editable\n                @media-sidebar-folder-renamed="updateFolder"\n                @media-sidebar-items-delete="onItemsDeleted"\n                @media-sidebar-folder-items-dissolve="onMediaFoldersDissolved"\n                @media-sidebar-items-move="reloadList"\n                @media-item-replaced="reloadList"\n                @media-item-selection-remove="onMediaUnselect"\n            />\n            {% endblock %}\n\n            \n            {% block sw_media_index_list_grid_loader %}\n            <sw-loader v-if="isLoading" />\n            {% endblock %}\n        </div>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","mediaService","acl"],props:{routeFolderId:{type:String,default:null},fileAccept:{type:String,required:!1,default:"*/*"}},data:function(){return{isLoading:!1,selectedItems:[],uploads:[],term:this.$route.query?this.$route.query.term:"",uploadTag:"upload-tag-sw-media-index",parentFolder:null,currentFolder:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:{mediaFolderRepository:function(){return this.repositoryFactory.create("media_folder")},mediaRepository:function(){return this.repositoryFactory.create("media")},rootFolder:function(){var e=this.mediaFolderRepository.create(o.api);return e.name=this.$tc("sw-media.index.rootFolderName"),e.id=null,e}},watch:{routeFolderId:function(){this.term=null,this.updateFolder()}},created:function(){this.createdComponent()},destroyed:function(){this.destroyedComponent()},methods:{createdComponent:function(){this.updateFolder()},updateFolder:function(){var e=this;return r()(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.routeFolderId){n.next=5;break}e.currentFolder=e.rootFolder,e.parentFolder=null,n.next=15;break;case 5:return n.next=7,e.mediaFolderRepository.get(e.routeFolderId,o.api);case 7:if(e.currentFolder=n.sent,!e.currentFolder||!e.currentFolder.parentId){n.next=14;break}return n.next=11,e.mediaFolderRepository.get(e.currentFolder.parentId,o.api);case 11:e.parentFolder=n.sent,n.next=15;break;case 14:e.parentFolder=e.rootFolder;case 15:case"end":return n.stop()}}),n)})))()},destroyedComponent:function(){this.$root.$off("search",this.onSearch)},onUploadsAdded:function(){var e=this;return r()(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.mediaService.runUploads(e.uploadTag);case 2:e.reloadList();case 3:case"end":return n.stop()}}),n)})))()},onUploadFinished:function(e){var n=e.targetId;this.uploads=this.uploads.filter((function(e){return e.id!==n}))},onUploadFailed:function(e){var n=e.targetId;this.uploads=this.uploads.filter((function(e){return n!==e.id}))},onChangeLanguage:function(){this.clearSelection()},onSearch:function(e){this.term=e,this.clearSelection()},onItemsDeleted:function(e){this.onMediaFoldersDissolved(e.folderIds)},onMediaFoldersDissolved:function(e){if(this.clearSelection(),e.includes(this.routeFolderId)){var n=null;return this.parentFolder&&(n=this.parentFolder.id),void this.$router.push({name:"sw.media.index",params:{folderId:n}})}this.reloadList()},reloadList:function(){this.$refs.mediaLibrary.refreshList()},clearSelection:function(){this.selectedItems.splice(0,this.selectedItems.length)},onMediaUnselect:function(e){var n=e.item,t=this.selectedItems.findIndex((function(e){return e===n}));t>-1&&this.selectedItems.splice(t,1)},updateRoute:function(e){this.term=this.$route.query?this.$route.query.term:"",this.$router.push({name:"sw.media.index",params:{folderId:e}})}}}},O9Kj:function(e,n,t){var a=t("3jRA");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,t("ydqr").default)("43cef37a",a,!0,{})}}]);