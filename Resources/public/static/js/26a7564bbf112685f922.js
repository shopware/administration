(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[52688],{795597:function(){},52688:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return l}}),i(150168);let{Component:a,Mixin:o,Context:d}=Shopware,{mapPropertyErrors:s}=a.getComponentHelper();var l={template:'\n{% block sw_media_folder_info %}\n<div class="sw-media-folder-info">\n    \n    {% block sw_media_quickinfo_folder_quickactions %}\n    <sw-media-collapse\n        v-if="editable"\n        :title="$tc(\'sw-media.sidebar.sections.actions\')"\n        :expand-on-loading="true"\n    >\n\n        \n        {% block sw_media_quickinfo_folder_quickactions_content %}\n        <template #content>\n            <ul class="sw-media-sidebar__quickactions-list">\n                \n                {% block sw_media_quickinfo_folder_quickactions_move %}\n                <li\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--move"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalMove"\n                    @keydown.enter="openModalMove"\n                >\n                    <sw-icon\n                        class="sw-media-sidebar__quickactions-icon"\n                        small\n                        name="regular-file-export"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.move\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_folder_quickactions_settings %}\n                <li\n                    class="sw-media-sidebar__quickaction quickaction--settings"\n                    role="button"\n                    tabindex="0"\n                    @click="openFolderSettings"\n                    @keydown.enter="openFolderSettings"\n                >\n                    <sw-icon\n                        class="sw-media-sidebar__quickactions-icon"\n                        small\n                        name="regular-cog"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.settings\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_folder_quickactions_dissolve %}\n                <li\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--dissolve"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openFolderDissolve"\n                    @keydown.enter="openFolderDissolve"\n                >\n                    <sw-icon\n                        class="sw-media-sidebar__quickactions-icon"\n                        small\n                        name="regular-spinner-star"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.dissolve\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_folder_quickactions_delete %}\n                <li\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'media.deleter\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="quickaction--delete is--danger"\n                    :class="quickActionClasses(!acl.can(\'media.deleter\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalDelete"\n                    @keydown.enter="openModalDelete"\n                >\n                    <sw-icon\n                        class="sw-media-sidebar__quickactions-icon is--danger"\n                        small\n                        name="regular-trash"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.delete\') }}\n                </li>\n                {% endblock %}\n            </ul>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_folder_metadata %}\n    <sw-media-collapse\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.metadata\')"\n    >\n\n        \n        {% block sw_media_quickinfo_folder_metadata_content %}\n        <template #content>\n            <dl class="sw-media-sidebar__metadata-list">\n                \n                {% block sw_media_quickinfo_folder_metadata_content_base %}\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-name"\n                    :class="nameItemClasses"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.name\')"\n                    :truncated="false"\n                >\n                    <sw-confirm-field\n                        v-if="editable"\n                        ref="inlineEditFieldName"\n                        :disabled="!acl.can(\'media.creator\')"\n                        compact\n                        :value="mediaFolder.name"\n                        :error="mediaFolderNameError"\n                        @input="onChangeFolderName"\n                    />\n                    <template v-else>\n                        {{ mediaFolder.name }}\n                    </template>\n                </sw-media-quickinfo-metadata-item>\n\n                <sw-media-quickinfo-metadata-item\n                    class="sw-media-quickinfo-metadata-createdAt"\n                    :label-name="$tc(\'sw-media.sidebar.metadata.createdAt\')"\n                >\n                    {{ createdAt }}\n                </sw-media-quickinfo-metadata-item>\n                {% endblock %}\n            </dl>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_folder_info_settings_modal %}\n    <sw-media-modal-folder-settings\n        v-if="showFolderSettings"\n        :disabled="!acl.can(\'media.editor\')"\n        :media-folder-id="mediaFolder.id"\n        @media-settings-modal-save="closeFolderSettings"\n        @media-settings-modal-close="closeFolderSettings"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_folder_info_dissolve_modal %}\n    <sw-media-modal-folder-dissolve\n        v-if="showFolderDissolve"\n        :items-to-dissolve="[mediaFolder]"\n        @media-folder-dissolve-modal-dissolve="onFolderDissolved"\n        @media-folder-dissolve-modal-close="closeFolderDissolve"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_folder_info_move_modal %}\n    <sw-media-modal-move\n        v-if="showModalMove"\n        :items-to-move="[mediaFolder]"\n        @media-move-modal-close="closeModalMove"\n        @media-move-modal-items-move="onFolderMoved"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_folder_info_modal_delete %}\n    <sw-media-modal-delete\n        v-if="showModalDelete"\n        :items-to-delete="[mediaFolder]"\n        @media-delete-modal-close="closeModalDelete"\n        @media-delete-modal-items-delete="deleteSelectedItems"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],emits:["media-folder-renamed"],mixins:[o.getByName("media-sidebar-modal-mixin")],props:{mediaFolder:{type:Object,required:!0,validator(e){return"media_folder"===e.getEntityName()}},editable:{type:Boolean,required:!1,default:!1}},computed:{mediaFolderRepository(){return this.repositoryFactory.create("media_folder")},createdAt(){return Shopware.Utils.format.date(this.mediaFolder.createdAt)},...s("mediaFolder",["name"]),nameItemClasses(){return{"has--error":!!this.mediaFolderNameError}}},methods:{async onChangeFolderName(e){this.mediaFolder.name=e,await this.mediaFolderRepository.save(this.mediaFolder,d.api),this.$emit("media-folder-renamed")},quickActionClasses(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]}}}},150168:function(e,n,i){var a=i(795597);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),i(745346).Z("0220b9ea",a,!0,{})}}]);