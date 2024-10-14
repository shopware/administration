(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[14449],{831162:function(){},614449:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}}),i(323600);let{Context:a,Mixin:s,Filter:l}=Shopware;var n={template:'\n{% block sw_media_modal_delete %}\n<sw-modal\n    variant="small"\n    class="sw-media-modal-delete"\n    :title="snippets.modalTitle"\n    @modal-close="closeDeleteModal($event)"\n>\n\n    \n    {% block sw_media_modal_body %}\n    <div v-if="mediaQuickInfo">\n        <p>{{ $tc(\'global.sw-media-modal-delete.mediaQuickInfoMessage\') }}</p>\n        <sw-media-quickinfo-usage\n            :item="mediaQuickInfo"\n            router-link-target="_blank"\n        />\n    </div>\n    <div v-if="mediaInUsages && mediaInUsages.length > 0">\n        <p>{{ $tc(\'global.sw-media-modal-delete.mediaInUsagesMessage\') }}</p>\n        <sw-media-media-item\n            v-for="mediaInUsage in mediaInUsages"\n            :key="`sw-media-modal-delete-${mediaInUsage.id}`"\n            class="sw-media-modal-delete__media-list-item"\n            :item="mediaInUsage"\n            :is-list="true"\n            :editable="false"\n            :selected="false"\n            :show-selection-indicator="false"\n            :show-context-menu-button="false"\n        />\n    </div>\n    <p v-html="$sanitize(snippets.deleteMessage)"></p>\n    {% endblock %}\n\n    \n    {% block sw_media_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_media_modal_delete_cancel_button %}\n        <sw-button\n            size="small"\n            @click="closeDeleteModal($event)"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_delete_confirm_button %}\n        <sw-button\n            class="sw-media-modal-delete__confirm"\n            size="small"\n            variant="danger"\n            @click="deleteSelection($event)"\n        >\n            {{ $tc(\'global.default.delete\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["media-delete-modal-close","media-delete-modal-items-delete"],mixins:[s.getByName("notification")],props:{itemsToDelete:{required:!0,type:Array,validator(e){return 0!==e.length}}},data(){return{mediaItems:[],folders:[],notificationId:null}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},mediaNameFilter(){return l.getByName("mediaName")},snippets(){return this.mediaItems.length>0&&this.folders.length>0?{successOverall:"global.sw-media-modal-delete.notification.successOverall.message.mediaAndFolder",errorOverall:this.$tc("global.sw-media-modal-delete.notification.errorOverall.message.mediaAndFolder"),modalTitle:this.$tc("global.default.warning"),deleteMessage:this.$tc("global.sw-media-modal-delete.deleteMessage.mediaAndFolder",this.itemsToDelete.length,{mediaCount:this.mediaItems.length,folderCount:this.folders.length})}:this.mediaItems.length>0?{successOverall:"global.sw-media-modal-delete.notification.successOverall.message.media",errorOverall:this.$tc("global.sw-media-modal-delete.notification.errorOverall.message.media"),modalTitle:this.$tc("global.default.warning"),deleteMessage:this.$tc("global.sw-media-modal-delete.deleteMessage.media",this.mediaItems.length,{name:this.mediaNameFilter(this.mediaItems[0]),count:this.mediaItems.length})}:{successOverall:"global.sw-media-modal-delete.notification.successOverall.message.folder",errorOverall:this.$tc("global.sw-media-modal-delete.notification.errorOverall.message.folder"),modalTitle:this.$tc("global.default.warning"),deleteMessage:this.$tc("global.sw-media-modal-delete.deleteMessage.folder",this.folders.length,{name:this.folders[0].name,count:this.folders.length})}},mediaQuickInfo(){return 1===this.mediaItems.length&&this._checkInUsage(this.mediaItems[0])?this.mediaItems[0]:null},mediaInUsages(){return this.mediaItems.length<=1?[]:this.mediaItems.filter(e=>this._checkInUsage(e))}},created(){this.createdComponent()},methods:{createdComponent(){this.mediaItems=this.itemsToDelete.filter(e=>"media"===e.getEntityName()),this.folders=this.itemsToDelete.filter(e=>"media_folder"===e.getEntityName())},closeDeleteModal(e){this.$emit("media-delete-modal-close",{originalDomEvent:e})},getEntityRepository(e){return"media"===e?this.mediaRepository:"media_folder"===e?this.mediaFolderRepository:null},_deleteSelection(e){let t=e.getEntityName(),i=this.getEntityRepository(t);return e.isLoading=!0,i.delete(e.id,a.api).then(()=>!0).catch(()=>{let t="media"===e.getEntityName(),i="global.sw-media-modal-delete.notification.errorSingle.message",a=t?this.$tc(`${i}.media`,1,{name:this.mediaNameFilter(e)}):this.$tc(`${i}.folder`,1,{name:e.name});return this.createNotificationError({message:a}),!1}).finally(()=>{e.isLoading=!1})},async deleteSelection(){let e=this.itemsToDelete.map(e=>this._deleteSelection(e).catch(()=>!1)),t=await Promise.all(e),i=t.reduce((e,t)=>(e.success=t?e.success+=1:e.success,e.failure=t?e.failure:e.failure+=1,e),{success:0,failure:0});i.success>0&&this.updateSuccessNotification(i.success,i.failure,t.length),this.$emit("media-delete-modal-items-delete",{mediaIds:this.mediaItems.map(e=>e.id),folderIds:this.folders.map(e=>e.id)})},async updateSuccessNotification(e,t,i){let a={message:this.$tc(this.snippets.successOverall,e,{count:e,total:i}),growl:e+t===i};if(null!==this.notificationId){await Shopware.State.dispatch("notification/updateNotification",{uuid:this.notificationId,...a}),e+t===i&&(this.notificationId=null);return}let s=await Shopware.State.dispatch("notification/createNotification",{variant:"success",...a});e+t<i&&(this.notificationId=s)},_checkInUsage(e){return!!e.avatarUsers?.[0]||["categories","productMedia","productManufacturers","mailTemplateMedia","documentBaseConfigs","paymentMethods","shippingMethods","cmsBlocks","cmsSections","cmsPages"].some(t=>e[t].length>0)}}}},323600:function(e,t,i){var a=i(831162);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),i(745346).Z("03811526",a,!0,{})}}]);