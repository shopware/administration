(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[298],{CwSY:function(e,i,n){"use strict";n.r(i);var a=n("7yzw"),t=n.n(a),s=n("92Mt"),c=n.n(s),l=(n("gehN"),Shopware),o=l.Mixin,d=l.Context,m=l.Utils,r=m.dom,u=m.format;i.default={template:'\n{% block sw_media_quickinfo %}\n<div class="sw-media-quickinfo">\n    \n    {% block sw_media_quickinfo_broken_file %}\n    <sw-alert\n        v-if="!item.hasFile"\n        class="sw-media-quickinfo__alert-file-missing"\n        variant="warning"\n        :title="$tc(\'sw-media.sidebar.infoMissingFile.titleMissingFile\')"\n    >\n        {{ $tc(\'sw-media.sidebar.infoMissingFile.descriptionMissingFile\') }}\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_quickactions %}\n    <sw-media-collapse\n        v-if="editable"\n        :title="$tc(\'sw-media.sidebar.sections.actions\')"\n        :expand-on-loading="true"\n    >\n\n        <template #content>\n            \n            {% block sw_media_quickinfo_quickactions_content %}\n            <ul class="sw-media-sidebar__quickactions-list">\n                \n                {% block sw_media_quickinfo_quickactions_replace %}\n                \n                <li\n                    v-if="!item.private"\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--replace"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    @click="openModalReplace"\n                >\n                    <sw-icon\n                        small\n                        name="regular-files"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.replace\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_quickactions_download %}\n                <li\n                    v-if="item.hasFile"\n                    class="sw-media-sidebar__quickaction quickaction--download"\n                >\n                    <sw-external-link\n                        class="sw-media-sidebar__quickaction"\n                        :href="item.url"\n                        download\n                    >\n\n                        <sw-icon\n                            small\n                            name="regular-cloud-download"\n                            class="sw-media-sidebar__quickactions-icon"\n                        />\n                        {{ $tc(\'sw-media.sidebar.actions.download\') }}\n                    </sw-external-link>\n                </li>\n                {% endblock %}\n                \n                {% block sw_media_quickinfo_quickactions_move %}\n                \n                <li\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--move"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    @click="openModalMove"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-file-export"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.move\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_quickactions_copy_link %}\n                \n                <li\n                    v-if="item.hasFile"\n                    class="sw-media-sidebar__quickaction quickaction--copy-link"\n                    @click="copyLinkToClipboard"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-link"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.copyLink\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_quickactions_delete %}\n                \n                <li\n                    v-if="!item.private"\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.deleter\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--delete"\n                    :class="quickActionClasses(!acl.can(\'media.deleter\'))"\n                    @click="openModalDelete"\n                >\n                    <sw-icon\n                        small\n                        name="regular-trash"\n                        class="sw-media-sidebar__quickactions-icon is--danger"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.delete\') }}\n                </li>\n                {% endblock %}\n            </ul>\n            {% endblock %}\n        </template>\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_preview %}\n    <sw-media-collapse\n        v-if="item.hasFile"\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.preview\')"\n    >\n\n        \n        {% block sw_media_quickinfo_preview_content %}\n        <template #content>\n            <div>\n                \n                {% block sw_media_quickinfo_preview_item %}\n                <sw-media-preview-v2\n                    class="sw-media-quickinfo__media-preview"\n                    :source="item.id"\n                    :show-controls="true"\n                    :use-thumbnails="false"\n                />\n                {% endblock %}\n            </div>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_metadata %}\n    <sw-media-collapse\n        v-if="item.hasFile"\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.metadata\')"\n    >\n\n        \n        {% block sw_media_quickinfo_metadata_content %}\n        <template #content>\n            <dl class="sw-media-sidebar__metadata-list">\n                \n                {% block sw_media_quickinfo_metadata_content_base %}\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-name"\n                    :class="fileNameClasses"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.name\')"\n                    :truncated="false"\n                >\n\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldName"\n                        class="sw-media-quickinfo-metadata-name"\n                        :disabled="!acl.can(\'media.editor\')"\n                        compact\n                        :value="item.fileName"\n                        :error="fileNameError"\n                        @input="onChangeFileName"\n                        @remove-error="onRemoveFileNameError"\n                    /><template v-else>\n                        {{ item.fileName }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-file-type"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.fileType\')"\n                >\n                    {{ item.fileExtension.toUpperCase() }}\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-alt-field"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.altText\')"\n                    :truncated="false"\n                >\n\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldAlt"\n                        :disabled="!acl.can(\'media.editor\')"\n                        compact\n                        :placeholder="placeholder(item, \'alt\', $tc(\'sw-media.sidebar.metadata.altText\'))"\n                        :value="item.alt"\n                        @input="onSubmitAltText"\n                    /><template v-else>\n                        {{ placeholder(item, \'alt\') }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-alt-field"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.title\')"\n                    :truncated="false"\n                >\n\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldTitle"\n                        :disabled="!acl.can(\'media.editor\')"\n                        compact\n                        :value="item.title"\n                        :placeholder="placeholder(item, \'title\', $tc(\'sw-media.sidebar.metadata.title\'))"\n                        @input="onSubmitTitle"\n                    /><template v-else>\n                        {{ placeholder(item, \'title\') }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-mimeType"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.mimeType\')"\n                >\n                    {{ item.mimeType }}\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-size"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.fileSize\')"\n                >\n                    {{ fileSize }}\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-createdAt"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.createdAt\')"\n                >\n                    {{ createdAt }}\n                </sw-media-quickinfo-metadata-item>\n                {% endblock %}\n\n                <template v-if="item.metaData">\n                    \n                    {% block sw_media_quickinfo_metadata_specific_meta_data %}\n                    <template v-if="item.mediaType.name === \'IMAGE\'">\n                        \n                        {% block sw_media_quickinfo_metadata_content_image %}\n                        <sw-media-quickinfo-metadata-item\n                            v-if="item.metaData.width"\n                            class="sw-media-quickinfo-metadata-width"\n                            :label-name="$tc(\'sw-media.sidebar.metadata.width\')"\n                        >\n                            {{ item.metaData.width }}px\n                        </sw-media-quickinfo-metadata-item>\n\n                        <sw-media-quickinfo-metadata-item\n                            v-if="item.metaData.height"\n                            class="sw-media-quickinfo-metadata-height"\n                            :label-name="$tc(\'sw-media.sidebar.metadata.height\')"\n                        >\n                            {{ item.metaData.height }}px\n                        </sw-media-quickinfo-metadata-item>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </template>\n            </dl>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_tags %}\n    <sw-media-tag\n        :disabled="!acl.can(\'media.editor\')"\n        :media="item"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_usage %}\n    <sw-media-collapse\n        v-if="editable && item.hasFile"\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.usage\')"\n    >\n\n        <template #content>\n            <sw-media-quickinfo-usage :item="item" />\n        </template>\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_modal_replace %}\n    <sw-media-modal-replace\n        v-if="showModalReplace"\n        :item-to-replace="item"\n        @media-replace-modal-item-replaced="emitRefreshMediaLibrary"\n        @media-replace-modal-close="closeModalReplace"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_modal_delete %}\n    <sw-media-modal-delete\n        v-if="showModalDelete"\n        :items-to-delete="[item]"\n        @media-delete-modal-close="closeModalDelete"\n        @media-delete-modal-items-delete="deleteSelectedItems"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_move_modal %}\n    <sw-media-modal-move\n        v-if="showModalMove"\n        :items-to-move="[item]"\n        @media-move-modal-close="closeModalMove"\n        @media-move-modal-items-move="onFolderMoved"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_custom_field_sets %}\n    <sw-custom-field-set-renderer\n        :disabled="!acl.can(\'media.editor\')"\n        :entity="item"\n        variant="media-collapse"\n        :sets="customFieldSets"\n        :is-loading="isLoading"\n        :is-save-successful="isSaveSuccessful"\n        @save="onSaveCustomFields(item)"\n        @process-finish="saveFinish"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["mediaService","repositoryFactory","acl","customFieldDataProviderService"],mixins:[o.getByName("notification"),o.getByName("media-sidebar-modal-mixin"),o.getByName("placeholder")],props:{item:{required:!0,type:Object,validator:function(e){return"media"===e.getEntityName()}},editable:{type:Boolean,required:!1,default:!1}},data:function(){return{customFieldSets:[],isLoading:!1,isSaveSuccessful:!1,showModalReplace:!1,fileNameError:null}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},isMediaObject:function(){return"media"===this.item.type},fileSize:function(){return u.fileSize(this.item.fileSize)},createdAt:function(){var e=this.item.uploadedAt||this.item.createdAt;return u.date(e)},fileNameClasses:function(){return{"has--error":this.fileNameError}}},watch:{"item.id":{handler:function(){this.fileNameError=null}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadCustomFieldSets()},loadCustomFieldSets:function(){var e=this;return this.customFieldDataProviderService.getCustomFieldSets("media").then((function(i){e.customFieldSets=i}))},onSaveCustomFields:function(e){var i=this;return t()(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.isSaveSuccessful=!1,i.isLoading=!0,n.next=4,i.mediaRepository.save(e,d.api);case 4:i.isSaveSuccessful=!0,i.isLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},saveFinish:function(){this.isSaveSuccessful=!1},copyLinkToClipboard:function(){this.item&&(r.copyToClipboard(this.item.url),this.createNotificationSuccess({message:this.$tc("sw-media.general.notification.urlCopied.message")}))},onSubmitTitle:function(e){var i=this;return t()(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.item.title=e,n.prev=1,n.next=4,i.mediaRepository.save(i.item,d.api);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),i.$refs.inlineEditFieldTitle.cancelSubmit();case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},onSubmitAltText:function(e){var i=this;return t()(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.item.alt=e,n.prev=1,n.next=4,i.mediaRepository.save(i.item,d.api);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),i.$refs.inlineEditFieldAlt.cancelSubmit();case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},onChangeFileName:function(e){var i=this;return t()(c.a.mark((function n(){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(a=i.item).isLoading=!0,i.fileNameError=null,n.prev=3,n.next=6,i.mediaService.renameMedia(a.id,e).catch((function(e){var n=["CONTENT__MEDIA_EMPTY_FILE","CONTENT__MEDIA_ILLEGAL_FILE_NAME"];return e.response.data.errors.forEach((function(e){!i.fileNameError&&n.includes(e.code)&&(i.fileNameError=e)})),Promise.reject(e)}));case 6:a.fileName=e,i.createNotificationSuccess({message:i.$tc("global.sw-media-media-item.notification.renamingSuccess.message")}),i.$emit("media-item-rename-success",a),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),i.createNotificationError({message:i.$tc("global.sw-media-media-item.notification.renamingError.message")});case 14:return n.prev=14,a.isLoading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})))()},openModalReplace:function(){this.acl.can("media.editor")&&(this.showModalReplace=!0)},closeModalReplace:function(){this.showModalReplace=!1},emitRefreshMediaLibrary:function(){var e=this;this.closeModalReplace(),this.$nextTick((function(){e.$emit("media-item-replaced")}))},quickActionClasses:function(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]},onRemoveFileNameError:function(){this.fileNameError=null}}}},gehN:function(e,i,n){var a=n("w+Bw");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("566b4f36",a,!0,{})},"w+Bw":function(e,i,n){}}]);