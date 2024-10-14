(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[70535],{574954:function(){},170535:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return o}}),n(826179);let{Mixin:s}=Shopware;var o={template:'\n{% block sw_media_quickinfo_multiple %}\n<div class="sw-media-quickinfo-multiple">\n    \n    {% block sw_media_quickinfo_multiple_quickactions %}\n    <sw-media-collapse\n        v-if="editable"\n        :title="$tc(\'sw-media.sidebar.sections.actions\')"\n        :expand-on-loading="true"\n    >\n\n        \n        {% block sw_media_quickinfo_multiple_quickactions_content %}\n        <template #content>\n            <ul class="sw-media-sidebar__quickactions-list">\n                \n                {% block sw_media_quickinfo_multiple_quickactions_move %}\n                <li\n                    class="quickaction--move"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalMove"\n                    @keydown.enter="openModalMove"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-file-export"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.move\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_multiple_quickactions_delete %}\n                <li\n                    v-if="!isPrivate"\n                    class="is--danger"\n                    :class="quickActionClasses(!acl.can(\'media.deleter\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openModalDelete"\n                    @keydown.enter="openModalDelete"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-trash"\n                        class="sw-media-sidebar__quickactions-icon is--danger"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.delete\') }}\n                </li>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_folder_quickactions_dissolve %}\n                <li\n                    v-if="!hasMedia"\n                    class="quickaction--dissolve"\n                    :class="quickActionClasses(!acl.can(\'media.editor\'))"\n                    role="button"\n                    tabindex="0"\n                    @click="openFolderDissolve"\n                    @keydown.enter="openFolderDissolve"\n                >\n\n                    <sw-icon\n                        small\n                        name="regular-spinner-star"\n                        class="sw-media-sidebar__quickactions-icon"\n                    />\n                    {{ $tc(\'sw-media.sidebar.actions.dissolve\') }}\n                </li>\n                {% endblock %}\n            </ul>\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_multiple_file_names %}\n    <sw-media-collapse\n        :expand-on-loading="true"\n        :title="$tc(\'sw-media.sidebar.sections.selectedFiles\')"\n    >\n\n        \n        {% block sw_media_quickinfo_multiple_file_names_content %}\n        <template #content>\n            \n            <label class="sw-media-quickinfo-multiple__second-headline">{{ getFileSizeLabel }}</label>\n            <sw-media-entity-mapper\n                v-for="mediaItem in items"\n                :key="mediaItem.id"\n                :item="mediaItem"\n                :selected="true"\n                :is-list="true"\n                :show-context-menu-button="false"\n                :show-selection-indicator="true"\n                @media-item-selection-remove="onRemoveItemFromSelection"\n            />\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_modal_delete %}\n    <sw-media-modal-delete\n        v-if="showModalDelete"\n        :items-to-delete="items"\n        @media-delete-modal-close="closeModalDelete"\n        @media-delete-modal-items-delete="deleteSelectedItems"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_folder_dissolve_modal %}\n    <sw-media-modal-folder-dissolve\n        v-if="!hasMedia && showFolderDissolve"\n        :items-to-dissolve="items"\n        @media-folder-dissolve-modal-dissolve="onFolderDissolved"\n        @media-folder-dissolve-modal-close="closeFolderDissolve"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_sidebar_folder_move_modal %}\n    <sw-media-modal-move\n        v-if="showModalMove"\n        :items-to-move="items"\n        @media-move-modal-close="closeModalMove"\n        @media-move-modal-items-move="onFolderMoved"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n\n',compatConfig:Shopware.compatConfig,emits:["media-item-selection-remove"],mixins:[s.getByName("media-sidebar-modal-mixin")],props:{items:{required:!0,type:Array},editable:{type:Boolean,required:!1,default:!1}},computed:{itemsIsAvailable(){return this.items.length>0},getFileSize(){let e=this.items.reduce((e,i)=>e+(i.fileSize||0),0);return Shopware.Utils.format.fileSize(e)},getFileSizeLabel(){return`${this.$tc("sw-media.sidebar.metadata.totalSize")}: ${this.getFileSize}`},hasFolder(){return this.items.some(e=>"media_folder"===e.getEntityName())},hasMedia(){return this.items.some(e=>"media"===e.getEntityName())},isPrivate(){return this.items.some(e=>!0===e.private)}},methods:{onRemoveItemFromSelection(e){this.$emit("media-item-selection-remove",e)},quickActionClassesDelete(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]},quickActionClasses(e){return["sw-media-sidebar__quickaction",{"sw-media-sidebar__quickaction--disabled":e}]}}}},826179:function(e,i,n){var s=n(574954);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),n(745346).Z("7b3b01c2",s,!0,{})}}]);