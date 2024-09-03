(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[77735],{317794:function(){},877735:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return d}}),t(183527);let{Component:n,Mixin:a,Context:l}=Shopware,{Criteria:s}=Shopware.Data,{mapPropertyErrors:o}=n.getComponentHelper();var d={template:'\n{% block sw_media_modal_folder_settings %}\n<sw-modal\n    v-if="!!mediaFolder"\n    class="sw-media-modal-folder-settings"\n    :class="modalClass"\n    :title="mediaFolder.name"\n    variant="large"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_media_modal_folder_settings_tabs %}\n    <sw-tabs\n        position-identifier="sw-media-modal-folder-settings"\n        :is-small="false"\n        default-item="settings"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_media_modal_folder_settings_tab_item_settings %}\n            <sw-tabs-item\n                class="sw-media-folder-settings__settings-tab"\n                name="settings"\n                :active-tab="active"\n                :has-error="!!mediaFolderNameError"\n                :native="true"\n            >\n                {{ $tc(\'global.sw-media-modal-folder-settings.labelSettings\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_media_modal_folder_settings_tab_item_thumbnails %}\n            <sw-tabs-item\n                class="sw-media-folder-settings__thumbnails-tab"\n                name="thumbnails"\n                :active-tab="active"\n                :native="true"\n            >\n                {{ $tc(\'global.sw-media-modal-folder-settings.labelThumbnails\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            \n            {% block sw_media_modal_folder_settings_tab_content_settings %}\n            <sw-container\n                v-if="active === \'settings\'"\n                columns="1fr 1fr"\n                gap="32px"\n            >\n                \n                {% block sw_media_modal_folder_settings_name_field %}\n                <sw-text-field\n                    v-model:value="mediaFolder.name"\n                    :disabled="disabled"\n                    :error="mediaFolderNameError"\n                    :label="$tc(\'global.sw-media-modal-folder-settings.labelFolderName\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_media_modal_folder_settings_default_folder %}\n                <sw-entity-single-select\n                    id="defaultFolder"\n                    :disabled="disabled"\n                    entity="media_default_folder"\n                    :placeholder="$tc(\'global.sw-media-modal-folder-settings.placeholderDefaultFolder\')"\n                    :value="mediaFolder.defaultFolderId ? mediaFolder.defaultFolderId : \'\'"\n                    :label="$tc(\'global.sw-media-modal-folder-settings.labelDefaultFolder\')"\n                    show-clearable-button\n                    @update:value="onInputDefaultFolder"\n                >\n\n                    <template #selection-label-property="{ item: item }">\n                        {{ getItemName(item) }}\n                    </template>\n\n                    <template #result-item="{ isSelected, setValue, item, index, searchTerm, highlightSearchTerm }">\n                        <sw-select-result\n                            :selected="isSelected(item)"\n                            v-bind="{ item, index }"\n                            @item-select="setValue"\n                        >\n                            <sw-highlight-text\n                                v-if="highlightSearchTerm"\n                                :text="getItemName(item)"\n                                :search-term="searchTerm"\n                            />\n                            <template v-else>\n                                {{ getItemName(item) }}\n                            </template>\n                        </sw-select-result>\n                    </template>\n                </sw-entity-single-select>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_media_modal_folder_settings_tab_content_thumbnails %}\n            <sw-container\n                v-if="active === \'thumbnails\'"\n                class="sw-media-modal-folder-settings__thumbnails-container"\n                columns="1fr 1fr"\n                gap="32px"\n            >\n\n                \n                {% block sw_media_modal_folder_settings_tab_content_thumbnails_left_container %}\n                <div class="sw-media-modal-folder-settings__thumbnails-left-container">\n                    \n                    {% block sw_media_modal_folder_settings_inherit_settings_field %}\n                    <sw-field\n                        v-model:value="mediaFolder.useParentConfiguration"\n                        type="switch"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelInheritSettings\')"\n                        :disabled="mediaFolder.parentId === null"\n                        @update:value="onChangeInheritance"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_generate_thumbnails_field %}\n                    <sw-field\n                        v-model:value="configuration.createThumbnails"\n                        type="switch"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelGenerateThumbnails\')"\n                        :disabled="mediaFolder.useParentConfiguration || disabled"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_keep_proportions_field %}\n                    <sw-switch-field\n                        v-model:value="configuration.keepAspectRatio"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelKeepProportions\')"\n                        :disabled="notEditable"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_thumbnails_quality_field %}\n                    <sw-number-field\n                        v-model:value="configuration.thumbnailQuality"\n                        number-type="int"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelThumbnailQuality\')"\n                        :min="0"\n                        :max="100"\n                        :step="1"\n                        :disabled="notEditable"\n                        autocomplete="off"\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_media_modal_folder_settings_tab_content_thumbnails_right_container %}\n                <div class="sw-media-modal-folder-settings__thumbnails-right-container">\n                    \n                    {% block sw_media_modal_folder_settings_thumbnail_list_caption %}\n                    <div class="sw-media-modal-folder-settings__thumbnails-list-caption">\n                        \n                        <label>{{ $tc(\'global.sw-media-modal-folder-settings.labelThumbnailSize\') }}</label>\n\n                        {# @deprecated tag:v6.7.0 - Remove the block #}\n                        \n                        {% block sw_media_modal_folder_settings_edit_thumbnail_list_button %}\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_thumbnail_list_container %}\n                    <div class="sw-media-modal-folder-settings__thumbnails-list-container">\n                        <sw-media-add-thumbnail-form\n                            v-if="!notEditable"\n                            :disabled="disabled"\n                            @on-input="checkIfThumbnailExists"\n                            @thumbnail-form-size-add="addThumbnail"\n                        />\n\n                        \n                        {% block sw_media_modal_folder_settings_thumbnail_list %}\n                        <ul class="sw-media-modal-folder-settings__thumbnails-list">\n\n                            \n                            {% block sw_media_modal_folder_settings_thumbnail_size %}\n                            <li\n                                v-for="(size, index) in thumbnailSizes"\n                                :key="`thumbnail-size-${index}`"\n                                class="sw-media-modal-folder-settings__thumbnail-size-entry"\n                                :class="\'sw-media-modal-folder-settings__entry--\' + index"\n                            >\n\n                                \n                                {% block sw_media_modal_folder_settings_thumbnail_size_switch %}\n                                <sw-switch-field\n                                    :value="isThumbnailSizeActive(size)"\n                                    :name="thumbnailSizeCheckboxName(size)"\n                                    :label="thumbnailSizeFilter(size)"\n                                    :disabled="notEditable"\n                                    @update:value="onChangeThumbnailSize($event, size)"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_media_modal_folder_settings_thumbnail_size_delete_button %}\n                                <button\n                                    v-tooltip="{\n                                        message: $tc(\'global.sw-media-modal-folder-settings.tooltipCanNotDeleteThumbnailSize\'),\n                                        disabled: size.deletable,\n                                        showOnDisabledElements: true\n                                    }"\n                                    class="sw-media-modal-folder-settings__delete-thumbnail"\n                                    :title="$tc(\'global.default.delete\')"\n                                    :aria-label="$tc(\'global.default.delete\')"\n                                    :disabled="!size.deletable"\n                                    @click="deleteThumbnail(size)"\n                                >\n                                    <sw-icon\n                                        name="regular-times-s"\n                                        small\n                                        size="12px"\n                                    />\n                                </button>\n                                {% endblock %}\n                            </li>\n                            {% endblock %}\n                        </ul>\n                        {% endblock %}\n\n                        {# @deprecated tag:v6.7.0 - Remove the block #}\n                        \n                        {% block sw_media_modal_folder_settings_add_thumbnail_size_form %}\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_media_modal_folder_settings_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_media_modal_folder_settings_cancel_button %}\n        <sw-button\n            size="small"\n            @click="onClickCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_folder_settings_confirm_button %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: !disabled,\n                showOnDisabledElements: true\n            }"\n            class="sw-media-modal-folder-settings__confirm"\n            size="small"\n            :disabled="disabled"\n            variant="primary"\n            @click="onClickSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["media-settings-modal-save","media-settings-modal-close"],mixins:[a.getByName("notification")],props:{mediaFolderId:{required:!0,type:String},disabled:{required:!1,type:Boolean,default:!1}},data(){return{modalClass:"sw-media-modal-folder-settings--shows-overflow",unusedThumbnailSizes:[],thumbnailSizes:[],isEditThumbnails:!1,parent:null,configuration:null,mediaFolderConfigurationThumbnailSizeRepository:null,originalConfiguration:null,mediaFolder:null}},computed:{mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},mediaDefaultFolderRepository(){return this.repositoryFactory.create("media_default_folder")},mediaThumbnailSizeRepository(){return this.repositoryFactory.create("media_thumbnail_size")},mediaFolderConfigurationRepository(){return this.repositoryFactory.create("media_folder_configuration")},unusedMediaThumbnailSizeCriteria(){let e=new s(1,null);return e.addFilter(s.equals("mediaFolderConfigurations.mediaFolders.id",null)),e},mediaThumbnailSizeCriteria(){let e=new s(1,null);return e.addSorting(s.sort("width")),e},notEditable(){return this.mediaFolder.useParentConfiguration||!this.configuration.createThumbnails||this.disabled},thumbnailListClass(){},labelToggleButton(){},thumbnailSizeFilter(){return Shopware.Filter.getByName("thumbnailSize")},...o("mediaFolder",["name"])},created(){this.createdComponent()},methods:{async createdComponent(){this.mediaFolder=await this.loadMediaFolder(),await this.getUnusedThumbnailSizes(),await this.getThumbnailSizes(),this.configuration=await this.mediaFolderConfigurationRepository.get(this.mediaFolder.configurationId,l.api),this.mediaFolderConfigurationThumbnailSizeRepository=this.repositoryFactory.create(this.configuration.mediaThumbnailSizes.entity,this.configuration.mediaThumbnailSizes.source),this.configuration.mediaThumbnailSizes=await this.mediaFolderConfigurationThumbnailSizeRepository.search(new s(1,25),l.api),null!==this.mediaFolder.parentId&&(this.parent=await this.mediaFolderRepository.get(this.mediaFolder.parentId,l.api),this.parent.configuration=await this.mediaFolderConfigurationRepository.get(this.parent.configurationId,l.api))},getItemName(e){let i=`global.entities.${e.entity}`;return`${e.entity} (${this.$tc(i)})`},async getUnusedThumbnailSizes(){let e=await this.mediaThumbnailSizeRepository.searchIds(this.unusedMediaThumbnailSizeCriteria);this.unusedThumbnailSizes=e.data},async getThumbnailSizes(){this.thumbnailSizes=await this.mediaThumbnailSizeRepository.search(this.mediaThumbnailSizeCriteria),this.thumbnailSizes.forEach(e=>{e.deletable=!!this.unusedThumbnailSizes.find(i=>i===e.id)})},toggleEditThumbnails(){},async addThumbnail({width:e,height:i}){if(this.checkIfThumbnailExists({width:e,height:i})){this.createNotificationError({message:this.$tc("global.sw-media-modal-folder-settings.notification.error.messageThumbnailSizeExisted")});return}let t=this.mediaThumbnailSizeRepository.create(l.api);t.width=e,t.height=i,await this.mediaThumbnailSizeRepository.save(t,l.api),await this.getUnusedThumbnailSizes(),this.getThumbnailSizes()},checkIfThumbnailExists({width:e,height:i}){return this.thumbnailSizes.some(t=>t.width===e&&t.height===i)},async deleteThumbnail(e){await this.mediaFolderConfigurationThumbnailSizeRepository.get(e.id,l.api)&&await this.mediaFolderConfigurationThumbnailSizeRepository.delete(e.id,l.api),this.configuration.mediaThumbnailSizes.remove(e.id),await this.mediaThumbnailSizeRepository.delete(e.id,l.api),await this.getUnusedThumbnailSizes(),this.getThumbnailSizes()},isThumbnailSizeActive(e){return!!this.configuration.mediaThumbnailSizes&&this.configuration.mediaThumbnailSizes.some(i=>i.id===e.id)},thumbnailSizeCheckboxName(e){return`thumbnail-size-${e.width}-${e.height}-active`},onActiveTabChanged(e){if("settings"===e){this.modalClass="sw-media-modal-folder-settings--shows-overflow";return}this.modalClass=""},onChangeThumbnailSize(e,i){if(!0===e){this.configuration.mediaThumbnailSizes.add(i);return}this.configuration.mediaThumbnailSizes.remove(i.id)},async onChangeInheritance(e){if(!0===e){this.originalConfiguration=this.configuration,this.configuration=this.parent.configuration;return}if(this.originalConfiguration){this.configuration=this.originalConfiguration;return}let i=this.mediaFolderConfigurationRepository.create();Object.keys(this.configuration).forEach(e=>{"id"!==e&&(i[e]=this.configuration[e])}),this.configuration=i},async onClickSave(){this.mediaFolder.configurationId=this.configuration.id,null===this.configuration.keepAspectRatio&&(this.configuration.keepAspectRatio=!1),null===this.configuration.createThumbnails&&(this.configuration.createThumbnails=!1),this.mediaFolder.defaultFolderId?await this.ensureUniqueDefaultFolder(this.mediaFolder.id,this.mediaFolder.defaultFolderId):this.mediaFolder.defaultFolderId=null;try{await this.mediaFolderConfigurationRepository.save(this.configuration).then(()=>{this.originalConfiguration&&this.configuration.id===this.parent.configuration.id&&this.mediaFolderConfigurationRepository.delete(this.originalConfiguration.id)}),this.mediaFolder&&this.mediaFolder.getEntityName&&await this.mediaFolderRepository.save(this.mediaFolder,l.api),this.createNotificationSuccess({title:this.$root.$tc("global.default.success"),message:this.$root.$tc("global.sw-media-modal-folder-settings.notification.success.message")}),this.$nextTick(()=>{this.$emit("media-settings-modal-save",this.mediaFolder)})}catch(e){this.createNotificationError({title:this.$root.$tc("global.default.error"),message:this.$root.$tc("global.sw-media-modal-folder-settings.notification.error.message")})}},async ensureUniqueDefaultFolder(e,i){let t=new s(1,25).addFilter(s.multi("and",[s.equals("defaultFolderId",i),s.not("or",[s.equals("id",e)])])),n=await this.mediaFolderRepository.search(t,l.api);await Promise.all(n.map(e=>(e.defaultFolderId=null,this.mediaFolderRepository.save(e,l.api))))},onClickCancel(e){this.mediaFolderRepository.discard(this.mediaFolder),this.closeModal(e)},closeModal(e){this.$emit("media-settings-modal-close",{originalDomEvent:e})},onInputDefaultFolder(e){this.mediaFolder.defaultFolderId=e},loadMediaFolder(){return this.mediaFolderRepository.get(this.mediaFolderId,l.api)}}}},183527:function(e,i,t){var n=t(317794);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),t(745346).Z("297ff47b",n,!0,{})}}]);