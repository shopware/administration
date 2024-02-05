(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27287],{12283:function(){},27287:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}}),n(4735);let{Context:i,Utils:a}=Shopware;var d={template:'\n{% block sw_media_modal_v2 %}\n<sw-modal\n    ref="swMediaModal"\n    class="sw-media-modal-v2"\n    variant="full"\n    :title="$tc(\'sw-media.sw-media-modal-v2.titleModal\')"\n    @modal-close="onEmitModalClosed"\n>\n\n    \n    {% block sw_media_modal_v2_content %}\n    <div class="sw-media-modal-v2__content">\n\n        \n        {% block sw_media_modal_v2_tabs %}\n        <sw-tabs\n            position-identifier="sw-media-modal"\n            variant="minimal"\n            :default-item="defaultTab"\n            class="sw-media-modal-v2__tabs"\n        >\n            <template #default="{ active }">\n\n                \n                {% block sw_media_modal_v2_tab_items %}\n                \n                {% block sw_media_modal_v2_tab_item_library %}\n                <sw-tabs-item\n                    :name="tabNameLibrary"\n                    :active-tab="active"\n                    :disabled="hasUploads"\n                >\n                    {{ $tc(\'sw-media.sw-media-modal-v2.labelTabItemLibrary\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_media_modal_v2_tab_item_upload %}\n                <sw-tabs-item\n                    :name="tabNameUpload"\n                    :active-tab="active"\n                    @click="resetSelection"\n                >\n                    {{ $tc(\'sw-media.sw-media-modal-v2.labelTabItemUpload\') }}\n                </sw-tabs-item>\n                {% endblock %}\n                {% endblock %}\n            </template>\n\n            <template #content="{ active }">\n\n                \n                {% block sw_media_modal_v2_tab_content %}\n                <div class="sw-media-modal-v2__tab-content">\n\n                    \n                    {% block sw_media_modal_v2_tab_content_library %}\n                    <template v-if="active === tabNameLibrary">\n\n                        \n                        {% block sw_media_modal_v2_navigation_and_search %}\n                        <div\n                            class="sw-media-modal-v2__breadcrumbs-and-search"\n                            :class="{\'sw-media-modal-v2__breadcrumbs-and-search--compact\': compact}"\n                        >\n\n                            \n                            {% block sw_media_modal_v2_folder_breadcrumbs %}\n                            <sw-media-breadcrumbs\n                                v-model:currentFolderId="folderId"\n                                :small="compact"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_media_modal_v2_search_field %}\n                            <sw-simple-search-field v-model:value="term" />\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n\n                        \n                        {% block sw_media_modal_v2_media_library %}\n                        <sw-media-library\n                            ref="mediaLibrary"\n                            :selection="selection"\n                            :folder-id="folderId"\n                            :term="term"\n                            :compact="compact"\n                            :allow-multi-select="allowMultiSelect"\n                            @update:selection="selection = $event"\n                            @media-folder-change="folderId = $event"\n                        />\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_v2_tab_content_upload %}\n                    <div\n                        v-if="active === tabNameUpload"\n                        class="sw-media-modal-v2__uploads-content"\n                    >\n\n                        \n                        {% block sw_media_modal_v2_upload_component %}\n                        <sw-upload-listener\n                            :upload-tag="uploadTag"\n                            @media-upload-add="onUploadsAdded"\n                            @media-upload-finish="onUploadFinished"\n                            @media-upload-fail="onUploadFailed"\n                        />\n\n                        <sw-media-upload-v2\n                            class="sw-media-modal-v2__upload-container"\n                            variant="regular"\n                            :file-accept="fileAccept"\n                            :upload-tag="uploadTag"\n                            :default-folder="entityContext"\n                            :target-folder="folderId"\n                            :allow-multi-select="allowMultiSelect"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_media_modal_v2_uploaded_items %}\n                        <sw-media-grid\n                            :presentation="compact ? \'list-preview\' : \'medium-preview\'"\n                            :class="{\'sw-media-modal-v2__upload-media-grid--compact\': compact }"\n                        >\n                            <sw-media-media-item\n                                v-for="upload in uploads"\n                                :key="`sw-media-modal-v2-upload-${upload.id}`"\n                                :item="upload"\n                                :show-context-menu-button="false"\n                                :show-selection-indicator="allowMultiSelect"\n                                :allow-multi-select="allowMultiSelect"\n                                :selected="checkMediaItem(upload)"\n                                :editable="false"\n                                :is-list="compact"\n                                @media-item-selection-remove="onMediaRemoveSelected"\n                                @media-item-selection-add="onMediaAddSelected"\n                                @media-item-click="onMediaItemSelect"\n                            />\n                        </sw-media-grid>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n            </template>\n            {% endblock %}\n        </sw-tabs>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_v2_media_sidebar %}\n        <sw-media-sidebar\n            :items="selection"\n            :current-folder-id="null"\n            @media-sidebar-items-delete="onItemsDeleted"\n            @media-sidebar-folder-items-dissolve="onMediaFoldersDissolved"\n            @media-sidebar-items-move="refreshList"\n            @media-item-selection-remove="onMediaRemoveSelected"\n        />\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_media_modal_v2_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_media_modal_v2_button_cancel %}\n        <sw-button @click="onEmitModalClosed">\n            {{ $tc(\'sw-media.sw-media-modal-v2.labelButtonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_v2_button_confirm_selection %}\n        <sw-button\n            variant="primary"\n            @click="onEmitSelection"\n        >\n            {{ $tc(\'sw-media.sw-media-modal-v2.labelButtonSaveSelection\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory","mediaService"],props:{initialFolderId:{type:String,required:!1,default:null},entityContext:{type:String,required:!1,default:null},defaultTab:{type:String,required:!1,validValues:["upload","library"],default:"library",validator(e){return["upload","library"].includes(e)}},allowMultiSelect:{type:Boolean,required:!1,default:!0},fileAccept:{type:String,required:!1,default:"image/*"}},data(){return{selection:[],uploads:[],folderId:this.initialFolderId,currentFolder:null,compact:!1,term:"",id:a.createId(),selectedMediaItem:{}}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},tabNameUpload(){return"upload"},tabNameLibrary(){return"library"},hasUploads(){return this.uploads.length>0},uploadTag(){return`sw-media-modal-v2--${this.id}`}},watch:{folderId(){this.fetchCurrentFolder()}},created(){this.createdComponent()},mounted(){this.mountedComponent()},beforeDestroy(){this.beforeDestroyComponent()},methods:{createdComponent(){this.fetchCurrentFolder(),this.addResizeListener()},mountedComponent(){this.getComponentWidth()},beforeDestroyComponent(){this.removeOnResizeListener()},async fetchCurrentFolder(){if(!this.folderId){this.currentFolder=null;return}this.currentFolder=await this.mediaFolderRepository.get(this.folderId,i.api)},addResizeListener(){window.addEventListener("resize",this.getComponentWidth)},removeOnResizeListener(){window.removeEventListener("resize",this.getComponentWidth)},getComponentWidth(){let e=this.$el.getBoundingClientRect().width;this.compact=e<=900},onEmitModalClosed(){this.$emit("modal-close")},onEmitSelection(){let e=this.selection.filter(e=>"media"===e.getEntityName());this.$emit("media-modal-selection-change",e),this.onEmitModalClosed()},refreshList(){this.$refs.mediaLibrary.refreshList()},onMediaRemoveSelected({item:e}){let t=this.selection.findIndex(t=>e.id===t.id);-1!==t&&this.selection.splice(t,1)},onMediaAddSelected({item:e}){this.selection.includes(e)||this.selection.push(e)},onMediaItemSelect({item:e}){this.allowMultiSelect||(this.selection=[e],this.selectedMediaItem=e)},resetSelection(){this.selection.splice(0,this.selection.length)},onItemsDeleted(e){this.onMediaFoldersDissolved(e.folderIds)},onMediaFoldersDissolved(e){this.currentFolder&&(e.some(e=>e===this.currentFolder.id)&&(this.folderId=this.currentFolder.parentId),this.refreshList())},async onUploadsAdded({data:e}){await this.mediaService.runUploads(this.uploadTag),await Promise.all(e.map(({targetId:e})=>new Promise(t=>{this.mediaRepository.get(e,i.api).then(e=>{this.uploads.push(e),t()})})))},async onUploadFinished({targetId:e}){let t=await this.mediaRepository.get(e,i.api);this.selectedMediaItem=t,this.uploads.some(e=>t.id===e.id)||this.uploads.push(t),this.allowMultiSelect?this.selection.some(e=>t.id===e.id)||this.selection.push(t):this.selection=[t]},onUploadFailed(e){this.uploads=this.uploads.filter(t=>t.id!==e.targetId)},selectMediaItem(e){this.allowMultiSelect||(this.selectedMediaItem=e,this.selection=[e])},checkMediaItem(e){return this.allowMultiSelect?this.selection.includes(e):e.id===this.selectedMediaItem.id}}}},4735:function(e,t,n){var i=n(12283);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),n(45346).Z("b276761e",i,!0,{})}}]);