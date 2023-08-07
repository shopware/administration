(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[41],{"1mi1":function(e,n,t){},DGPk:function(e,n,t){"use strict";t.r(n);var i=t("7yzw"),a=t.n(i),o=t("CsSd"),l=t.n(o),s=t("92Mt"),r=t.n(s);t("R895");function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}var c=Shopware,m=c.Component,u=c.Mixin,b=c.Context,f=Shopware.Data.Criteria,g=m.getComponentHelper().mapPropertyErrors;n.default={template:'\n{% block sw_media_modal_folder_settings %}\n<sw-modal\n    v-if="!!mediaFolder"\n    class="sw-media-modal-folder-settings"\n    :class="modalClass"\n    :title="mediaFolder.name"\n    variant="large"\n    @modal-close="closeModal"\n>\n\n    \n    {% block sw_media_modal_folder_settings_tabs %}\n    <sw-tabs\n        position-identifier="sw-media-modal-folder-settings"\n        :is-small="false"\n        default-item="settings"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_media_modal_folder_settings_tab_item_settings %}\n            <sw-tabs-item\n                class="sw-media-folder-settings__settings-tab"\n                name="settings"\n                :active-tab="active"\n                :has-error="!!mediaFolderNameError"\n                :native="true"\n            >\n                {{ $tc(\'global.sw-media-modal-folder-settings.labelSettings\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_media_modal_folder_settings_tab_item_thumbnails %}\n            <sw-tabs-item\n                class="sw-media-folder-settings__thumbnails-tab"\n                name="thumbnails"\n                :active-tab="active"\n                :native="true"\n            >\n                {{ $tc(\'global.sw-media-modal-folder-settings.labelThumbnails\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            \n            {% block sw_media_modal_folder_settings_tab_content_settings %}\n            <sw-container\n                v-if="active === \'settings\'"\n                columns="1fr 1fr"\n                gap="32px"\n            >\n                \n                {% block sw_media_modal_folder_settings_name_field %}\n                <sw-field\n                    v-model="mediaFolder.name"\n                    type="text"\n                    :disabled="disabled"\n                    :error="mediaFolderNameError"\n                    :label="$tc(\'global.sw-media-modal-folder-settings.labelFolderName\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_media_modal_folder_settings_default_folder %}\n                <sw-entity-single-select\n                    id="defaultFolder"\n                    :disabled="disabled"\n                    entity="media_default_folder"\n                    :placeholder="$tc(\'global.sw-media-modal-folder-settings.placeholderDefaultFolder\')"\n                    :value="mediaFolder.defaultFolderId ? mediaFolder.defaultFolderId : \'\'"\n                    :label="$tc(\'global.sw-media-modal-folder-settings.labelDefaultFolder\')"\n                    show-clearable-button\n                    @change="onInputDefaultFolder"\n                >\n\n                    <template #selection-label-property="{ item: item }">\n                        {{ getItemName(item) }}\n                    </template>\n\n                    <template #result-item="{ isSelected, setValue, item, index, searchTerm, highlightSearchTerm }">\n                        <li\n                            is="sw-select-result"\n                            :selected="isSelected(item)"\n                            v-bind="{ item, index }"\n                            @item-select="setValue"\n                        >\n                            <sw-highlight-text\n                                v-if="highlightSearchTerm"\n                                :text="getItemName(item)"\n                                :search-term="searchTerm"\n                            />\n                            <template v-else>\n                                {{ getItemName(item) }}\n                            </template>\n                        </li>\n                    </template>\n                </sw-entity-single-select>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_media_modal_folder_settings_tab_content_thumbnails %}\n            <sw-container\n                v-if="active === \'thumbnails\'"\n                class="sw-media-modal-folder-settings__thumbnails-container"\n                columns="1fr 1fr"\n                gap="32px"\n            >\n\n                \n                {% block sw_media_modal_folder_settings_tab_content_thumbnails_left_container %}\n                <div class="sw-media-modal-folder-settings__thumbnails-left-container">\n                    \n                    {% block sw_media_modal_folder_settings_inherit_settings_field %}\n                    <sw-field\n                        v-model="mediaFolder.useParentConfiguration"\n                        type="switch"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelInheritSettings\')"\n                        :disabled="mediaFolder.parentId === null"\n                        @change="onChangeInheritance"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_generate_thumbnails_field %}\n                    <sw-field\n                        v-model="configuration.createThumbnails"\n                        type="switch"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelGenerateThumbnails\')"\n                        :disabled="mediaFolder.useParentConfiguration || disabled"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_keep_proportions_field %}\n                    <sw-field\n                        v-model="configuration.keepAspectRatio"\n                        type="switch"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelKeepProportions\')"\n                        :disabled="notEditable"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_thumbnails_quality_field %}\n                    <sw-field\n                        v-model="configuration.thumbnailQuality"\n                        type="number"\n                        number-type="int"\n                        :label="$tc(\'global.sw-media-modal-folder-settings.labelThumbnailQuality\')"\n                        :min="0"\n                        :max="100"\n                        :step="1"\n                        :disabled="notEditable"\n                        autocomplete="off"\n                    />\n                    {% endblock %}\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_media_modal_folder_settings_tab_content_thumbnails_right_container %}\n                <div class="sw-media-modal-folder-settings__thumbnails-right-container">\n                    \n                    {% block sw_media_modal_folder_settings_thumbnail_list_caption %}\n                    <div class="sw-media-modal-folder-settings__thumbnails-list-caption">\n                        \n                        <label>{{ $tc(\'global.sw-media-modal-folder-settings.labelThumbnailSize\') }}</label>\n\n                        \n                        {% block sw_media_modal_folder_settings_edit_thumbnail_list_button %}\n                        <sw-button\n                            class="sw-media-modal-folder-settings__switch-mode"\n                            :disabled="notEditable"\n                            @click="toggleEditThumbnails"\n                        >\n                            {{ labelToggleButton }}\n                        </sw-button>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_media_modal_folder_settings_thumbnail_list_container %}\n                    <div class="sw-media-modal-folder-settings__thumbnails-list-container">\n                        \n                        {% block sw_media_modal_folder_settings_thumbnail_list %}\n                        <ul\n                            class="sw-media-modal-folder-settings__thumbnails-list"\n                            :class="thumbnailListClass"\n                        >\n\n                            \n                            {% block sw_media_modal_folder_settings_thumbnail_size %}\n                            <li\n                                v-for="(size, index) in thumbnailSizes"\n                                :key="`thumbnail-size-${index}`"\n                                class="sw-media-modal-folder-settings__thumbnail-size-entry"\n                                :class="\'sw-media-modal-folder-settings__entry--\' + index"\n                            >\n\n                                \n                                {% block sw_media_modal_folder_settings_thumbnail_size_switch %}\n                                <sw-field\n                                    type="switch"\n                                    :value="isThumbnailSizeActive(size)"\n                                    :name="thumbnailSizeCheckboxName(size)"\n                                    :label="size | thumbnailSize"\n                                    :disabled="notEditable"\n                                    @change="onChangeThumbnailSize($event, size)"\n                                />\n                                {% endblock %}\n\n                                \n                                {% block sw_media_modal_folder_settings_thumbnail_size_delete_button %}\n                                <button\n                                    v-if="isEditThumbnails"\n                                    class="sw-media-modal-folder-settings__delete-thumbnail"\n                                    :title="$tc(\'global.default.delete\')"\n                                    :aria-label="$tc(\'global.default.delete\')"\n                                    @click="deleteThumbnail(size)"\n                                >\n                                    <sw-icon\n                                        name="regular-times-s"\n                                        small\n                                        size="12px"\n                                    />\n                                </button>\n                                {% endblock %}\n                            </li>\n                            {% endblock %}\n                        </ul>\n                        {% endblock %}\n\n                        \n                        {% block sw_media_modal_folder_settings_add_thumbnail_size_form %}\n                        <sw-media-add-thumbnail-form\n                            v-if="!notEditable && isEditThumbnails"\n                            :disabled="disabled"\n                            @on-input="checkIfThumbnailExists"\n                            @thumbnail-form-size-add="addThumbnail"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n    \n    {% block sw_media_modal_folder_settings_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_media_modal_folder_settings_cancel_button %}\n        <sw-button\n            size="small"\n            @click="onClickCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_folder_settings_confirm_button %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: !disabled,\n                showOnDisabledElements: true\n            }"\n            class="sw-media-modal-folder-settings__confirm"\n            size="small"\n            :disabled="disabled || isEditThumbnails"\n            variant="primary"\n            @click="onClickSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[u.getByName("notification")],props:{mediaFolderId:{required:!0,type:String},disabled:{required:!1,type:Boolean,default:!1}},data:function(){return{modalClass:"sw-media-modal-folder-settings--shows-overflow",thumbnailSizes:[],isEditThumbnails:!1,parent:null,configuration:null,mediaFolderConfigurationThumbnailSizeRepository:null,originalConfiguration:null,mediaFolder:null}},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({mediaFolderRepository:function(){return this.repositoryFactory.create("media_folder")},mediaDefaultFolderRepository:function(){return this.repositoryFactory.create("media_default_folder")},mediaThumbnailSizeRepository:function(){return this.repositoryFactory.create("media_thumbnail_size")},mediaFolderConfigurationRepository:function(){return this.repositoryFactory.create("media_folder_configuration")},notEditable:function(){return this.mediaFolder.useParentConfiguration||!this.configuration.createThumbnails||this.disabled},thumbnailListClass:function(){return{"is--editable":this.isEditThumbnails}},labelToggleButton:function(){return this.isEditThumbnails?this.$tc("global.sw-media-modal-folder-settings.labelStopEdit"):this.$tc("global.sw-media-modal-folder-settings.labelEditList")}},g("mediaFolder",["name"])),created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;return a()(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadMediaFolder();case 2:return e.mediaFolder=n.sent,n.next=5,e.getThumbnailSizes();case 5:return n.next=7,e.mediaFolderConfigurationRepository.get(e.mediaFolder.configurationId,b.api);case 7:return e.configuration=n.sent,e.mediaFolderConfigurationThumbnailSizeRepository=e.repositoryFactory.create(e.configuration.mediaThumbnailSizes.entity,e.configuration.mediaThumbnailSizes.source),n.next=11,e.mediaFolderConfigurationThumbnailSizeRepository.search(new f(1,25),b.api);case 11:if(e.configuration.mediaThumbnailSizes=n.sent,null===e.mediaFolder.parentId){n.next=19;break}return n.next=15,e.mediaFolderRepository.get(e.mediaFolder.parentId,b.api);case 15:return e.parent=n.sent,n.next=18,e.mediaFolderConfigurationRepository.get(e.parent.configurationId,b.api);case 18:e.parent.configuration=n.sent;case 19:case"end":return n.stop()}}),n)})))()},getItemName:function(e){var n="global.entities.".concat(e.entity);return"".concat(e.entity," (").concat(this.$tc(n),")")},getThumbnailSizes:function(){var e=this;return a()(r.a.mark((function n(){var t;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new f(1,50).addSorting(f.sort("width")),n.next=3,e.mediaThumbnailSizeRepository.search(t,b.api);case 3:e.thumbnailSizes=n.sent;case 4:case"end":return n.stop()}}),n)})))()},toggleEditThumbnails:function(){this.isEditThumbnails=!this.isEditThumbnails},addThumbnail:function(e){var n=this;return a()(r.a.mark((function t(){var i,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.width,a=e.height,!n.checkIfThumbnailExists({width:i,height:a})){t.next=3;break}return t.abrupt("return");case 3:return(o=n.mediaThumbnailSizeRepository.create(b.api)).width=i,o.height=a,t.next=8,n.mediaThumbnailSizeRepository.save(o,b.api);case 8:n.getThumbnailSizes();case 9:case"end":return t.stop()}}),t)})))()},checkIfThumbnailExists:function(e){var n=e.width,t=e.height,i=this.thumbnailSizes.some((function(e){return e.width===n&&e.height===t}));return this.disabled=i,i},deleteThumbnail:function(e){var n=this;return a()(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.mediaFolderConfigurationThumbnailSizeRepository.get(e.id,b.api);case 2:if(!t.sent){t.next=5;break}return t.next=5,n.mediaFolderConfigurationThumbnailSizeRepository.delete(e.id,b.api);case 5:return n.configuration.mediaThumbnailSizes.remove(e.id),t.next=8,n.mediaThumbnailSizeRepository.delete(e.id,b.api);case 8:n.getThumbnailSizes();case 9:case"end":return t.stop()}}),t)})))()},isThumbnailSizeActive:function(e){return!!this.configuration.mediaThumbnailSizes&&this.configuration.mediaThumbnailSizes.some((function(n){return n.id===e.id}))},thumbnailSizeCheckboxName:function(e){return"thumbnail-size-".concat(e.width,"-").concat(e.height,"-active")},onActiveTabChanged:function(e){this.modalClass="settings"!==e?"":"sw-media-modal-folder-settings--shows-overflow"},onChangeThumbnailSize:function(e,n){!0!==e?this.configuration.mediaThumbnailSizes.remove(n.id):this.configuration.mediaThumbnailSizes.add(n)},onChangeInheritance:function(e){var n=this;return a()(r.a.mark((function t(){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e){t.next=4;break}return n.originalConfiguration=n.configuration,n.configuration=n.parent.configuration,t.abrupt("return");case 4:if(!n.originalConfiguration){t.next=7;break}return n.configuration=n.originalConfiguration,t.abrupt("return");case 7:i=n.mediaFolderConfigurationRepository.create(),Object.keys(n.configuration).forEach((function(e){"id"!==e&&(i[e]=n.configuration[e])})),n.configuration=i;case 10:case"end":return t.stop()}}),t)})))()},onClickSave:function(){var e=this;return a()(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.mediaFolder.configurationId=e.configuration.id,null===e.configuration.keepAspectRatio&&(e.configuration.keepAspectRatio=!1),null===e.configuration.createThumbnails&&(e.configuration.createThumbnails=!1),!e.mediaFolder.defaultFolderId){n.next=8;break}return n.next=6,e.ensureUniqueDefaultFolder(e.mediaFolder.id,e.mediaFolder.defaultFolderId);case 6:n.next=9;break;case 8:e.mediaFolder.defaultFolderId=null;case 9:return n.prev=9,n.next=12,e.mediaFolderConfigurationRepository.save(e.configuration).then((function(){e.originalConfiguration&&e.configuration.id===e.parent.configuration.id&&e.mediaFolderConfigurationRepository.delete(e.originalConfiguration.id)}));case 12:if(!e.mediaFolder||!e.mediaFolder.getEntityName){n.next=15;break}return n.next=15,e.mediaFolderRepository.save(e.mediaFolder,b.api);case 15:e.createNotificationSuccess({title:e.$root.$tc("global.default.success"),message:e.$root.$tc("global.sw-media-modal-folder-settings.notification.success.message")}),e.$nextTick((function(){e.$emit("media-settings-modal-save",e.mediaFolder)})),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(9),e.createNotificationError({title:e.$root.$tc("global.default.error"),message:e.$root.$tc("global.sw-media-modal-folder-settings.notification.error.message")});case 22:case"end":return n.stop()}}),n,null,[[9,19]])})))()},ensureUniqueDefaultFolder:function(e,n){var t=this;return a()(r.a.mark((function i(){var a,o;return r.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=new f(1,25).addFilter(f.multi("and",[f.equals("defaultFolderId",n),f.not("or",[f.equals("id",e)])])),i.next=3,t.mediaFolderRepository.search(a,b.api);case 3:return o=i.sent,i.next=6,Promise.all(o.map((function(e){return e.defaultFolderId=null,t.mediaFolderRepository.save(e,b.api)})));case 6:case"end":return i.stop()}}),i)})))()},onClickCancel:function(e){this.mediaFolderRepository.discard(this.mediaFolder),this.closeModal(e)},closeModal:function(e){this.$emit("media-settings-modal-close",{originalDomEvent:e})},onInputDefaultFolder:function(e){this.mediaFolder.defaultFolderId=e},loadMediaFolder:function(){return this.mediaFolderRepository.get(this.mediaFolderId,b.api)}}}},R895:function(e,n,t){var i=t("1mi1");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("9ade12b6",i,!0,{})}}]);