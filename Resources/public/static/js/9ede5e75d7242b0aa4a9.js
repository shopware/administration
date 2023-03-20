(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[500],{gu7f:function(e,t,i){"use strict";i.r(t);var r=i("J58c"),o=i.n(r);function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){o()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var a=Shopware,c=a.Context,l=a.Utils,u=a.Mixin,s=Shopware.Data.Criteria,p=Shopware.Component.getComponentHelper().mapState,f=l.types.isEmpty;t.default={template:'\n{% block sw_bulk_edit_product_media %}\n<div class="sw-bulk-edit-product-media">\n    \n    {% block sw_bulk_edit_product_media_form %}\n    <sw-bulk-edit-product-media-form\n        :disabled="disabled"\n        @media-open="showMediaModal = true"\n    />\n    {% endblock %}\n\n    \n    {% block sw_bulk_edit_product_media_modal %}\n    <sw-media-modal-v2\n        v-if="showMediaModal"\n        :initial-folder-id="mediaDefaultFolderId"\n        :entity-context="product.getEntityName()"\n        @media-modal-selection-change="onAddMedia"\n        @modal-close="showMediaModal = false"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[u.getByName("notification")],props:{disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{showMediaModal:!1,mediaDefaultFolderId:null}},computed:n(n({},p("swProductDetail",["product"])),{},{productMediaRepository:function(){return this.repositoryFactory.create("product_media")},mediaDefaultFolderRepository:function(){return this.repositoryFactory.create("media_default_folder")},mediaDefaultFolderCriteria:function(){var e=new s(1,1);return e.addAssociation("folder"),e.addFilter(s.equals("entity","product")),e}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadMediaDefaultFolder()},loadMediaDefaultFolder:function(){var e=this;this.getMediaDefaultFolderId().then((function(t){e.mediaDefaultFolderId=t}))},getMediaDefaultFolderId:function(){return this.mediaDefaultFolderRepository.search(this.mediaDefaultFolderCriteria,c.api).then((function(e){var t,i=e.first();return null===i?null:null!==(t=i.folder)&&void 0!==t&&t.id?i.folder.id:null}))},onAddMedia:function(e){var t=this;f(e)||e.forEach((function(e){t.addMedia(e).catch((function(e){var i=e.fileName;t.createNotificationError({message:t.$tc("sw-product.mediaForm.errorMediaItemDuplicated",0,{fileName:i})})}))}))},addMedia:function(e){if(this.isExistingMedia(e))return Promise.reject(e);var t=this.productMediaRepository.create(Shopware.Context.api);return t.mediaId=e.id,t.media={url:e.url,id:e.id},this.product.media.add(t),Promise.resolve()},isExistingMedia:function(e){return this.product.media.some((function(t){var i=t.id,r=t.mediaId;return i===e.id||r===e.id}))}}}}}]);