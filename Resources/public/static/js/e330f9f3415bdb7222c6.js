(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[67288],{99981:function(){},667288:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return d}}),n(128935);let{Context:t,Filter:a}=Shopware;var d={template:'\n{% block sw_media_breadcrumbs %}\n<nav\n    class="sw-media-breadcrumbs"\n    :class="swMediaBreadcrumbsClasses"\n>\n    \n    {% block sw_media_breadcrumbs_root_folder %}\n    \n    <a\n        class="sw-media-breadcrumbs__button-back-to-root"\n        role="button"\n        tabindex="0"\n        @click="onBreadcrumbsItemClicked(null)"\n        @keydown.enter="onBreadcrumbsItemClicked(null)"\n    >\n        <img\n            v-if="!small"\n            :src="assetFilter(\'/administration/static/img/media/multicolor-folder-breadcrumbs-back-to-root.svg\')"\n            alt="Folder breadcrumbs back-to-root">\n        <img\n            v-else\n            :src="assetFilter(\'/administration/static/img/media/multicolor-folder-breadcrumbs.svg\')"\n            alt="Folder breadcrumbs">\n    </a>\n    {% endblock %}\n\n    \n    {% block sw_media_breadcrumbs_parent_folder %}\n    <a\n        v-if="parentFolder"\n        class="sw-media-breadcrumbs__entry sw-media-breadcrumbs__parent-folder"\n        role="button"\n        tabindex="0"\n        @click="onBreadcrumbsItemClicked(parentFolder.id)"\n        @keydown.enter="onBreadcrumbsItemClicked(parentFolder.id)"\n    >\n        <sw-icon\n            class="sw-media-breadcrumbs__arrow-separator"\n            name="regular-chevron-right-xxs"\n        />\n        {{ parentFolder.name }}\n    </a>\n    {% endblock %}\n\n    \n    {% block sw_media_breadcrumbs_current_folder %}\n    <span\n        v-if="currentFolder"\n        class="sw-media-breadcrumbs__entry sw-media-breadcrumbs__current-folder"\n    >\n        <sw-icon\n            class="sw-media-breadcrumbs__arrow-separator"\n            name="regular-chevron-right-xxs"\n        />\n        {{ currentFolder.name }}\n    </span>\n    {% endblock %}\n</nav>\n{% endblock %}\n',inject:["repositoryFactory","feature"],props:{currentFolderId:{type:String,required:!1,default:null},small:{type:Boolean,required:!1,default:!1}},data(){return{currentFolder:null,parentFolder:null}},computed:{mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},rootFolder(){let e=this.mediaFolderRepository.create(t.api);return e.name=this.$tc("sw-media.index.rootFolderName"),e.id=null,e},swMediaBreadcrumbsClasses(){return{"is--small":this.small}},assetFilter(){return a.getByName("asset")}},watch:{currentFolderId(){this.updateFolder()}},created(){this.createdComponent()},methods:{createdComponent(){this.updateFolder()},async updateFolder(){this.currentFolderId?(this.currentFolder=await this.mediaFolderRepository.get(this.currentFolderId,t.api),this.currentFolder&&this.currentFolder.parentId?this.parentFolder=await this.mediaFolderRepository.get(this.currentFolder.parentId,t.api):this.parentFolder=this.rootFolder):(this.currentFolder=this.rootFolder,this.parentFolder=null)},onBreadcrumbsItemClicked(e){this.$emit("update:currentFolderId",e)}}}},128935:function(e,r,n){var t=n(99981);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),n(745346).Z("08309b42",t,!0,{})}}]);