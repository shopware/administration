(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[45],{"76vw":function(e,n,a){"use strict";a.r(n);var t=a("6lmj"),i=a.n(t),o=a("CsSd"),l=a.n(o),r=a("7yzw"),s=a.n(r),d=a("92Mt"),p=a.n(d);a("sopS");function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){l()(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var m,v=Shopware,f=v.Mixin,b=v.Context,_=Shopware.Utils.fileReader,w=Shopware.Utils.format.fileSize,g={extensionByType:m={"image/jpeg":["jpg","jpeg"],"image/png":["png"],"image/webp":["webp"],"image/gif":["gif"],"image/svg+xml":["svg"],"image/bmp":["bmp"],"image/tiff":["tif","tiff"],"application/postscript":["eps"],"video/webm":["webm"],"video/x-matroska":["mkv"],"video/x-flv":["flv"],"video/ogg":["ogv"],"audio/ogg":["ogg","ogv","oga"],"video/quicktime":["mov"],"video/mp4":["mp4"],"audio/mp4":["mp4"],"video/x-msvideo":["avi"],"video/x-ms-wmv":["wmv"],"application/pdf":["pdf"],"audio/aac":["aac"],"video/mp3":["mp3"],"audio/mp3":["mp3"],"audio/wav":["wav"],"audio/x-flac":["flac"],"text/plain":["txt"],"application/msword":["doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":["docx"],"image/vnd.microsoft.icon":["ico"],"application/zip":["zip"],"application/vnd.rar":["rar"],"application/json":["json"],"application/xml":["xml"],"application/x-shockwave-flash":["swf"],"application/octet-stream":["bin"],"application/x-rar-compressed":["rar"],"application/x-tar":["tar"],"application/x-gzip":["gzip"],"application/x-bzip2":["bz2"],"application/x-7z-compressed":["7z"],"application/x-zip-compressed":["zip"],"application/vnd.android.package-archive":["apk"],"application/vnd.apple.keynote":["key"],"application/vnd.apple.pages":["pages"],"application/vnd.apple.numbers":["numbers"],"application/vnd.ms-excel":["xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":["xlsx"],"application/vnd.ms-powerpoint":["ppt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":["pptx"],"application/vnd.oasis.opendocument.text":["odt"],"application/vnd.oasis.opendocument.spreadsheet":["ods"],"application/vnd.oasis.opendocument.presentation":["odp"]},checkByExtension:function(e,n,a){if("*"===n)return!0;var t=n.replace(/\s/g,"").split(","),i=Object.assign(m,a);return t.some((function(n){var a=e.name.split(".").at(-1);return!!a&&n===a&&!!i.hasOwnProperty(e.type)&&i[e.type].includes(a)}))},checkByType:function(e,n){if("*/*"===n)return!0;var a=n.replace(/\s/g,"").split(","),t=e.type.split("/");return a.some((function(a){var i=a.split("/");return"model/gltf-binary"===n&&"glb"===e.name.split(".").at(-1)&&""===e.type||(i[0]===t[0]||"*"===i[0])&&("*"===i[1]||i[1]===t[1])}))}},h=g.checkByExtension,k=g.checkByType,x="file-upload",y="url-upload";n.default={template:'\n{% block sw_media_upload_v2 %}\n<div class="sw-media-upload-v2">\n    \n    {% block sw_media_upload_v2_compact %}\n    <div\n        v-if="variant == \'compact\'"\n        class="sw-media-upload-v2__content"\n    >\n        <sw-button-group\n            split-button\n        >\n            \n            {% block sw_media_upload_v2_compact_button_file_upload %}\n            <sw-button\n                class="sw-media-upload-v2__button-compact-upload"\n                :disabled="disabled"\n                variant="primary"\n                @click="onClickUpload"\n            >\n                {{ buttonFileUploadLabel }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_compact_button_context_menu %}\n            <sw-context-button\n                v-if="uploadUrlFeatureEnabled"\n                :disabled="disabled"\n                class="sw-media-upload-v2__button-open-context-menu"\n            >\n                <template #button>\n                    <sw-button\n                        :disabled="disabled"\n                        square\n                        variant="primary"\n                        class="sw-media-upload-v2__button-context-menu"\n                    >\n                        <sw-icon name="regular-chevron-down-xs" />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_media_upload_v2_compact_button_context_menu_actions %}\n                <sw-context-menu-item\n                    class="sw-media-upload-v2__button-url-upload"\n                    @click="useUrlUpload"\n                >\n                    {{ $tc(\'global.sw-media-upload-v2.buttonUrlUpload\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n\n        \n        {% block sw_media_upload_v2_compact_url_form %}\n        <sw-media-url-form\n            v-if="isUrlUpload"\n            variant="modal"\n            @modal-close="useFileUpload"\n            @media-url-form-submit="onUrlUpload"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_upload_v2_regular %}\n    <div\n        v-if="variant == \'regular\' || variant == \'small\'"\n        class="sw-media-upload-v2__content"\n    >\n        \n        {% block sw_media_upload_v2_regular_header %}\n        <div class="sw-media-upload-v2__header">\n            \n            {% block sw_media_upload_v2_regular_header_label %}\n            \n            <label\n                v-if="label"\n                class="sw-media-upload-v2__label"\n                :class="swFieldLabelClasses"\n            >\n                {{ label }}\n            </label>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_regular_header_helptext %}\n            <sw-help-text\n                v-if="helpText"\n                class="sw-media-upload-v2__help-text"\n                :text="helpText"\n            />\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_regular_header_switch %}\n            <sw-context-button\n                v-if="!source && uploadUrlFeatureEnabled"\n                class="sw-media-upload-v2__switch-mode"\n                :disabled="disabled"\n            >\n                \n                {% block sw_media_upload_v2_regular_header_switch_file_upload %}\n                <sw-context-menu-item\n                    v-if="!isFileUpload"\n                    :disabled="disabled"\n                    class="sw-media-upload-v2__button-file-upload"\n                    @click="useFileUpload"\n                >\n                    {{ buttonFileUploadLabel }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_media_upload_v2_regular_header_switch_url_upload %}\n                <sw-context-menu-item\n                    v-if="!isUrlUpload"\n                    class="sw-media-upload-v2__button-url-upload"\n                    @click="useUrlUpload"\n                >\n                    {{ $t(\'global.sw-media-upload-v2.buttonUrlUpload\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_media_upload_v2_regular_drop_zone %}\n        <div\n            ref="dropzone"\n            v-droppable="{ dragGroup: \'media\', onDrop: onDropMedia, validDropCls: \'is--active\' }"\n            class="sw-media-upload-v2__dropzone"\n            :class="isDragActiveClass"\n        >\n\n            \n            {% block sw_media_upload_v2_preview %}\n            <template v-if="variant === \'regular\'">\n                \n                {% block sw_media_upload_v2_regular_preview_file %}\n                <sw-media-preview-v2\n                    v-if="showPreview && (source || preview)"\n                    class="sw-media-upload-v2__preview"\n                    :source="source || preview"\n                />\n                {% endblock %}\n                \n                {% block sw_media_upload_v2_regular_preview_fallback %}\n                <div\n                    v-else\n                    class="sw-media-upload-v2__preview is--fallback"\n                >\n                    <sw-icon\n                        class="sw-media-upload-v2__fallback-icon"\n                        name="regular-image"\n                    />\n                </div>\n                {% endblock %}\n            </template>\n\n            <template v-if="!showPreview && variant === \'regular\'">\n                \n                {% block sw_media_upload_v2_regular_caption %}\n                <div class="sw-media-upload-v2__upload-caption">\n                    <sw-icon name="regular-cloud-upload" />\n                    {{ $tc(\'global.sw-media-upload-v2.caption\') }}\n                </div>\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_media_upload_v2_actions %}\n            <div\n                class="sw-media-upload-v2__actions"\n                :class="{ \'has--source\': source, \'is--small\': variant === \'small\' }"\n            >\n\n                <div\n                    v-if="source"\n                    class="sw-media-upload-v2__file-info"\n                >\n                    <div class="sw-media-upload-v2__file-headline">\n                        {{ mediaNameFilter(source, source.name) }}\n                    </div>\n                    <sw-icon\n                        v-if="!disabled"\n                        class="sw-media-upload-v2__remove-icon"\n                        name="regular-times-xs"\n                        @click="onRemoveMediaItem"\n                    />\n                </div>\n\n                <template v-else>\n                    \n                    {% block sw_media_upload_v2_regular_actions_url %}\n                    <sw-media-url-form\n                        v-if="isUrlUpload"\n                        class="sw-media-upload-v2__url-form"\n                        variant="inline"\n                        @media-url-form-submit="onUrlUpload"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_upload_v2_regular_actions_add %}\n                    <template v-if="isFileUpload">\n                        \n                        {% block sw_media_upload_v2_regular_media_sidebar_button %}\n                        <sw-button\n                            v-if="hasOpenMediaButtonListener"\n                            class="sw-media-upload-v2__button open-media-sidebar"\n                            :class="{ \'is--small\': variant === \'small\'}"\n                            variant="primary"\n                            size="small"\n                            :square="variant === \'small\'"\n                            :disabled="disabled"\n                            @click="onClickOpenMediaSidebar"\n                        >\n                            <sw-icon\n                                v-if="variant === \'small\'"\n                                name="regular-plus"\n                                size="16px"\n                            />\n                            <template v-else>\n                                {{ $tc(\'global.sw-media-upload-v2.buttonOpenMedia\') }}\n                            </template>\n                        </sw-button>\n                        {% endblock %}\n\n                        \n                        {% block sw_media_upload_v2_regular_upload_button %}\n                        <sw-button\n                            class="sw-media-upload-v2__button upload"\n                            :class="{ \'is--small\': variant === \'small\'}"\n                            variant="ghost"\n                            size="small"\n                            :disabled="disabled"\n                            @click="onClickUpload"\n                        >\n                            {{ buttonFileUploadLabel }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </template>\n\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_upload_v2_file_input %}\n    <form\n        ref="fileForm"\n        class="sw-media-upload-v2__form"\n    >\n        \n        <input\n            id="files"\n            ref="fileInput"\n            class="sw-media-upload-v2__file-input"\n            type="file"\n            :accept="extensionAccept ? \'*/*\' : fileAccept"\n            :multiple="multiSelect"\n            @change="onFileInputChange"\n        >\n    </form>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","mediaService","configService","feature"],mixins:[f.getByName("notification")],props:{source:{type:[Object,String,File],required:!1,default:null},variant:{type:String,required:!1,validValues:["compact","regular","small"],validator:function(e){return["compact","regular","small"].includes(e)},default:"regular"},uploadTag:{type:String,required:!0},allowMultiSelect:{type:Boolean,required:!1,default:!0},addFilesOnMultiselect:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null},buttonLabel:{type:String,required:!1,default:""},defaultFolder:{type:String,required:!1,validator:function(e){return e.length>0},default:null},targetFolderId:{type:String,required:!1,default:null},helpText:{type:String,required:!1,default:null},sourceContext:{type:Object,required:!1,default:null},fileAccept:{type:String,required:!1,default:"*/*"},extensionAccept:{type:String,required:!1,default:null},maxFileSize:{type:Number,required:!1,default:null},disabled:{type:Boolean,required:!1,default:!1},privateFilesystem:{type:Boolean,required:!1,default:!1},useFileData:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1}},data:function(){return{multiSelect:this.allowMultiSelect,inputType:x,preview:null,isDragActive:!1,defaultFolderId:null,isUploadUrlFeatureEnabled:!1,isLoading:!1}},computed:{defaultFolderRepository:function(){return this.repositoryFactory.create("media_default_folder")},mediaRepository:function(){return this.repositoryFactory.create("media","",{keepApiErrors:!0})},showPreview:function(){return!this.multiSelect},hasOpenMediaButtonListener:function(){return this.feature.isActive("VUE3")?Object.keys(this.$listeners).includes("mediaUploadSidebarOpen"):Object.keys(this.$listeners).includes("media-upload-sidebar-open")},isDragActiveClass:function(){return{"is--active":this.isDragActive,"is--multi":"regular"===this.variant&&!!this.multiSelect,"is--small":"small"===this.variant}},mediaFolderId:function(){return this.defaultFolderId||this.targetFolderId},isUrlUpload:function(){return this.inputType===y},isFileUpload:function(){return this.inputType===x},uploadUrlFeatureEnabled:function(){return this.isUploadUrlFeatureEnabled},swFieldLabelClasses:function(){return{"is--required":this.required}},buttonFileUploadLabel:function(){return""===this.buttonLabel?this.$tc("global.sw-media-upload-v2.buttonFileUpload"):this.buttonLabel},mediaNameFilter:function(){return Shopware.Filter.getByName("mediaName")}},watch:{defaultFolder:function(){var e=this;return s()(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getDefaultFolderId();case 2:e.defaultFolderId=n.sent;case 3:case"end":return n.stop()}}),n)})))()},disabled:function(e){e&&(this.isDragActive=!1)}},created:function(){this.createdComponent()},mounted:function(){this.mountedComponent()},beforeDestroy:function(){this.beforeDestroyComponent()},methods:{createdComponent:function(){var e=this;return s()(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.mediaService.addListener(e.uploadTag,e.handleMediaServiceUploadEvent),!e.mediaFolderId){n.next=3;break}return n.abrupt("return");case 3:if(!e.defaultFolder){n.next=9;break}return e.isLoading=!0,n.next=7,e.getDefaultFolderId();case 7:e.defaultFolderId=n.sent,e.isLoading=!1;case 9:e.configService.getConfig().then((function(n){e.isUploadUrlFeatureEnabled=n.settings.enableUrlFeature}));case 10:case"end":return n.stop()}}),n)})))()},mountedComponent:function(){var e=this;this.$refs.dropzone&&(["dragover","drop"].forEach((function(n){window.addEventListener(n,e.stopEventPropagation,!1)})),this.$refs.dropzone.addEventListener("drop",this.onDrop),window.addEventListener("dragenter",this.onDragEnter),window.addEventListener("dragleave",this.onDragLeave))},beforeDestroyComponent:function(){var e=this;this.mediaService.removeByTag(this.uploadTag),this.mediaService.removeListener(this.uploadTag,this.handleMediaServiceUploadEvent),["dragover","drop"].forEach((function(n){window.addEventListener(n,e.stopEventPropagation,!1)})),window.removeEventListener("dragenter",this.onDragEnter),window.removeEventListener("dragleave",this.onDragLeave)},onDrop:function(e){if(!this.disabled){var n=Array.from(e.dataTransfer.files);this.isDragActive=!1,0!==n.length&&this.handleFileCheck(n)}},onDropMedia:function(e){this.disabled||this.$emit("media-drop",e.mediaItem)},onDragEnter:function(){this.disabled||(this.isDragActive=!0)},onDragLeave:function(e){0!==e.screenX||0!==e.screenY?e.target.closest(".sw-media-upload-v2__dropzone")||(this.isDragActive=!1):this.isDragActive=!1},stopEventPropagation:function(e){e.preventDefault(),e.stopPropagation()},onClickUpload:function(){this.$refs.fileInput.click()},useUrlUpload:function(){this.inputType=y},useFileUpload:function(){this.inputType=x},onClickOpenMediaSidebar:function(){this.$emit("media-upload-sidebar-open")},onRemoveMediaItem:function(){this.disabled||(this.preview=null,this.$emit("media-upload-remove-image"))},onUrlUpload:function(e){var n=this;return s()(p.a.mark((function a(){var t,i,o,l;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=e.url,i=e.fileExtension,n.multiSelect||(n.mediaService.removeByTag(n.uploadTag),n.preview=t),a.prev=2,o=_.getNameAndExtensionFromUrl(t),a.next=10;break;case 6:return a.prev=6,a.t0=a.catch(2),n.createNotificationError({title:n.$tc("global.default.error"),message:n.$tc("global.sw-media-upload-v2.notification.invalidUrl.message")}),a.abrupt("return");case 10:return i&&(o.extension=i),l=n.getMediaEntityForUpload(),a.next=14,n.mediaRepository.save(l,b.api);case 14:n.mediaService.addUpload(n.uploadTag,u({src:t,targetId:l.id,isPrivate:l.private},o)),n.useFileUpload();case 16:case"end":return a.stop()}}),a,null,[[2,6]])})))()},onFileInputChange:function(){var e=Array.from(this.$refs.fileInput.files);e.length&&(this.handleFileCheck(e),this.$refs.fileForm.reset())},handleUpload:function(e){var n=this;return s()(p.a.mark((function a(){var t,o;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.multiSelect?(n.preview||(n.preview=[]),n.addFilesOnMultiselect?n.preview=[].concat(i()(n.preview),i()(e)):n.preview=e):(n.mediaService.removeByTag(n.uploadTag),e=[e.pop()],n.preview=e[0]),t=[],o=e.map((function(e){var a=_.getNameAndExtensionFromFile(e),i=a.fileName,o=a.extension,l=n.getMediaEntityForUpload();return t.push(l),{src:e,targetId:l.id,fileName:i,extension:o,isPrivate:l.private}})),a.next=5,n.mediaRepository.saveAll(t,b.api);case 5:return a.next=7,n.mediaService.addUploads(n.uploadTag,o);case 7:case"end":return a.stop()}}),a)})))()},getMediaEntityForUpload:function(){var e=this.mediaRepository.create();return e.mediaFolderId=this.mediaFolderId,e.private=this.privateFilesystem,e},getDefaultFolderId:function(){var e=this;return s()(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",e.mediaService.getDefaultFolderId(e.defaultFolder));case 1:case"end":return n.stop()}}),n)})))()},handleMediaServiceUploadEvent:function(e){"media-upload-fail"===e.action&&this.onRemoveMediaItem()},checkFileSize:function(e){return null===this.maxFileSize||e.size<=this.maxFileSize||e.fileSize<=this.maxFileSize||(this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-media-upload-v2.notification.invalidFileSize.message",0,{name:e.name||e.fileName,limit:w(this.maxFileSize)})}),!1)},checkFileType:function(e){var n=this;return!!(n.extensionAccept?h(e,n.extensionAccept):n.fileAccept&&k(e,n.fileAccept))||(this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("global.sw-media-upload-v2.notification.invalidFileType.message",0,{name:e.name||e.fileName,supportedTypes:this.extensionAccept||this.fileAccept})}),!1)},handleFileCheck:function(e){var n=this,a=e.filter((function(e){return n.checkFileSize(e)&&n.checkFileType(e)}));this.useFileData?(this.preview=this.multiSelect?null:a[0],this.$emit("media-upload-add-file",a)):this.handleUpload(a)}}}},KX0X:function(e,n,a){},sopS:function(e,n,a){var t=a("KX0X");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,a("P8hj").default)("4994e5df",t,!0,{})}}]);