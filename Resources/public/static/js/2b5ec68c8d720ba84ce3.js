(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[299],{"4THO":function(e,t,i){var n=i("GkvX");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("P8hj").default)("50696d17",n,!0,{})},GkvX:function(e,t,i){},wnt7:function(e,t,i){"use strict";i.r(t);var n=i("7yzw"),r=i.n(n),a=i("92Mt"),s=i.n(a),d=(i("4THO"),Shopware),o=d.Filter,l=d.Context;t.default={template:'\n{% block sw_media_sidebar %}\n<div\n    class="sw-media-sidebar"\n    :class="mediaSidebarClasses"\n>\n    \n    {% block sw_media_sidebar_headline %}\n    <h3\n        v-if="headLine"\n        class="sw-media-sidebar__headline"\n    >\n        {{ headLine }}\n    </h3>\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_item_quickinfo_content %}\n    <div class="sw-media-sidebar__quickinfo-scroll-container">\n        <sw-media-quickinfo\n            v-if="isSingleFile && firstEntity.getEntityName() === \'media\'"\n            :item="firstEntity"\n            :editable="editable"\n            v-on="$listeners"\n            @update:item="onFirstItemUpdated"\n        />\n\n        <sw-media-folder-info\n            v-else-if="isSingleFile && firstEntity.getEntityName() === \'media_folder\'"\n            :media-folder="firstEntity"\n            :editable="editable"\n            v-on="$listeners"\n        />\n\n        <sw-media-quickinfo-multiple\n            v-else-if="isMultipleFile"\n            :editable="editable"\n            :items="items"\n            v-on="$listeners"\n        />\n\n        <sw-media-folder-info\n            v-else-if="currentFolder"\n            :media-folder="currentFolder"\n            :editable="editable"\n            @media-folder-renamed="onMediaFolderRenamed"\n            v-on="$listeners"\n        />\n\n        <sw-empty-state\n            v-else\n            :title="$tc(\'sw-media.sidebar.labelNoMediaSelected\')"\n        >\n            <template #icon>\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/media-empty-state.svg\')"\n                    :alt="$tc(\'sw-media.sidebar.labelNoMediaSelected\')"\n                >\n            </template>\n        </sw-empty-state>\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[Shopware.Mixin.getByName("notification")],props:{items:{required:!0,type:Array,validator:function(e){return 0===e.filter((function(e){return!["media","media_folder"].includes(e.getEntityName())})).length}},currentFolderId:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!1}},data:function(){return{currentFolder:null}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},mediaFolderRepository:function(){return this.repositoryFactory.create("media_folder")},mediaNameFilter:function(){return o.getByName("mediaName")},mediaSidebarClasses:function(){return{"no-headline":!this.headLine}},isSingleFile:function(){return 1===this.items.length},isMultipleFile:function(){return this.items.length>1},headLine:function(){return this.isSingleFile?"media"===this.firstEntity.getEntityName()?this.mediaNameFilter(this.firstEntity):this.firstEntity.name:this.isMultipleFile?this.getSelectedFilesCount:this.currentFolder?this.currentFolder.name:null},getSelectedFilesCount:function(){return"".concat(this.$tc("sw-media.sidebar.labelHeadlineMultiple",this.items.length,{count:this.items.length}))},firstEntity:function(){return this.items[0]},assetFilter:function(){return Shopware.Filter.getByName("asset")}},watch:{currentFolderId:function(){this.fetchCurrentFolder()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.fetchCurrentFolder()},fetchCurrentFolder:function(){var e=this;return r()(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.currentFolderId){t.next=3;break}return e.currentFolder=null,t.abrupt("return");case 3:return t.next=5,e.mediaFolderRepository.get(e.currentFolderId,l.api);case 5:e.currentFolder=t.sent;case 6:case"end":return t.stop()}}),t)})))()},onMediaFolderRenamed:function(){this.$emit("media-sidebar-folder-renamed")},onFirstItemUpdated:function(e){var t=this;return r()(s.a.mark((function i(){var n;return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.items[0],i.prev=1,n.isLoading=!0,Object.assign(t.items[0],e),i.next=6,t.mediaRepository.save(n,l.api);case 6:t.createNotificationSuccess({message:t.$tc("global.sw-media-media-item.notification.settingsSuccess.message")}),i.next=12;break;case 9:i.prev=9,i.t0=i.catch(1),t.createNotificationError({message:t.$tc("global.notification.unspecifiedSaveErrorMessage")});case 12:return i.prev=12,n.isLoading=!1,i.finish(12);case 15:case"end":return i.stop()}}),i,null,[[1,9,12,15]])})))()}}}}}]);