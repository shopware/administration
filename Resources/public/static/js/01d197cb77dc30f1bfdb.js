(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[36],{"9Oc8":function(e,n,t){},KcCs:function(e,n,t){var i=t("9Oc8");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("93495756",i,!0,{})},SGF0:function(e,n,t){"use strict";t.r(n);var i=t("7yzw"),o=t.n(i),a=t("92Mt"),l=t.n(a),s=(t("KcCs"),Shopware),d=s.Application,r=s.Mixin,m=s.Context;n.default={template:'\n{% block sw_media_folder_item %}\n<sw-media-base-item\n    class="sw-media-folder-item"\n    v-bind="$attrs"\n    :truncate-right="true"\n    :allow-multi-select="!isParent"\n    v-on="$listeners"\n>\n\n    \n    {% block sw_media_folder_item_preview %}\n    <template #preview="{ item }">\n        \n        {% block sw_media_folder_parent_icon%}\n        <img\n            v-if="isParent"\n            {% if VUE2 %}\n            key="sw-media-folder-preview"\n            {% endif %}\n            :src="assetFilter(\'/administration/static/img/media/folder--back.svg\')"\n            class="sw-media-folder-item__folder-thumbnails"\n            alt="Folder back"\n        >\n        {% endblock %}\n\n        \n        {% block sw_media_folder_default_icon%}\n        <span\n            v-else-if="!!item.defaultFolderId"\n            {% if VUE2 %}\n            key="sw-media-folder-preview"\n            {% endif %}\n        >\n            <img\n                :src="assetFilter(\'/administration/static/img/media/\' + iconName + \'.svg\')"\n                class="sw-media-folder-item__folder-thumbnails"\n                :alt="iconName"\n            >\n            <sw-icon\n                v-if="iconConfig.name"\n                class="sw-media-folder-item__folder-thumbnails is--inner"\n                v-bind="iconConfig"\n            />\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_media_folder_folder_icon%}\n        <img\n            v-else\n            {% if VUE2 %}\n            key="sw-media-folder-preview"\n            {% endif %}\n            :src="assetFilter(\'/administration/static/img/media/folder-thumbnail--large.svg\')"\n            class="sw-media-folder-item__folder-thumbnails"\n            alt="Folder thumbnail"\n        >\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_folder_name %}\n    <template #name="{ item, isInlineEdit, startInlineEdit, endInlineEdit }">\n        \n        {% block sw_media_base_item_name %}\n        <sw-text-field\n            v-if="!isParent && (isInlineEdit || item.isNew())"\n            v-autofocus\n            class="sw-media-base-item__name-field"\n            :value="item.name"\n            name="media-item-name"\n            @change="onChangeName($event, item, endInlineEdit)"\n            @blur="onBlur($event, item, endInlineEdit)"\n            @click.stop\n            {% if VUE3 %}\n            @keydown.enter.stop\n            {% endif %}\n            @keyup.esc="endInlineEdit"\n        />\n        <div\n            v-else\n            ref="itemName"\n            class="sw-media-base-item__name"\n            :title="item.name"\n        >\n            {{ item.name }}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_folder_meta_data %}\n    <template #metadata="{ item }">\n        <div class="sw-media-folder-item__metadata">\n            {{ dateFilter(item.createdAt) }}\n        </div>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_folder_item_context_menu %}\n    <template #context-menu="{ item, startInlineEdit, allowEdit, allowDelete }">\n        \n        {% block sw_media_folder_item_context_item_show_media %}\n        <sw-context-menu-item\n            class="sw-media-context-item__show-media-action"\n            @click="navigateToFolder(item.id)"\n        >\n            {{ $tc(\'global.sw-media-folder-item.labelContextMenuShowMedia\') }}\n        </sw-context-menu-item>\n        {% endblock %}\n\n        <slot>\n            \n            {% block sw_media_folder_item_additional_context_menu_slot %}{% endblock %}\n        </slot>\n\n        \n        {% block sw_media_folder_item_context_group_quick_actions %}\n        <div class="sw-context-menu__group">\n            \n            {% block sw_media_folder_item_context_item_show_settings %}\n            <sw-context-menu-item\n                class="sw-media-context-item__open-settings-action"\n                @click="openSettings"\n            >\n                {{ $tc(\'global.sw-media-folder-item.labelContextMenuShowSettings\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_media_folder_item_context_item_move %}\n            <sw-context-menu-item\n                :disabled="!allowEdit"\n                class="sw-media-context-item__move-folder-action"\n                @click="openMoveModal"\n            >\n                {{ $tc(\'global.sw-media-folder-item.labelContextMenuMove\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_media_folder_item_context_item_dissolve %}\n            <sw-context-menu-item\n                :disabled="!allowEdit"\n                class="sw-media-context-item__dissolve-folder-action"\n                @click="openDissolveModal"\n            >\n                {{ $tc(\'global.sw-media-folder-item.labelContextMenuDissolve\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_media_folder_item_context_item_rename_item %}\n            <sw-context-menu-item\n                :disabled="!allowEdit"\n                class="sw-media-context-item__rename-folder-action"\n                @click="startInlineEdit"\n            >\n                {{ $tc(\'global.sw-media-folder-item.labelContextMenuRename\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n\n            \n            {% block sw_media_folder_item_context_item_delete %}\n            <sw-context-menu-item\n                :disabled="!allowDelete"\n                class="sw-media-context-item__delete-folder-action"\n                variant="danger"\n                @click="openDeleteModal"\n            >\n                {{ $tc(\'global.default.delete\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_folder_modal_windows %}\n    <template #modal-windows="{ item, allowEdit, allowDelete }">\n        \n        {% block sw_media_folder_settings_modal %}\n        <sw-media-modal-folder-settings\n            v-if="showSettings"\n            :disabled="!allowEdit"\n            :media-folder-id="item.id"\n            @media-settings-modal-save="refreshIconConfig"\n            @media-settings-modal-close="closeSettings"\n        />\n        {% endblock %}\n\n        \n        {% block sw_media_folder_dissolve_modal %}\n        <sw-media-modal-folder-dissolve\n            v-if="showDissolveModal"\n            :items-to-dissolve="[item]"\n            @media-folder-dissolve-modal-dissolve="onFolderDissolved"\n            @media-folder-dissolve-modal-close="closeDissolveModal"\n        />\n        {% endblock %}\n\n        \n        {% block sw_media_folder_move_modal %}\n        <sw-media-modal-move\n            v-if="showMoveModal"\n            :items-to-move="[item]"\n            @media-move-modal-close="closeMoveModal"\n            @media-move-modal-items-move="onFolderMoved"\n        />\n        {% endblock %}\n\n        \n        {% block sw_media_folder_delete_modal %}\n        <sw-media-modal-delete\n            v-if="showDeleteModal"\n            :items-to-delete="[item]"\n            @media-delete-modal-items-delete="emitItemDeleted"\n            @media-delete-modal-close="closeDeleteModal"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-media-base-item>\n{% endblock %}\n',inheritAttrs:!1,inject:["repositoryFactory"],mixins:[r.getByName("notification")],props:{isParent:{type:Boolean,required:!1,default:!1}},data:function(){return{showSettings:!1,showDissolveModal:!1,showMoveModal:!1,showDeleteModal:!1,lastDefaultFolderId:null,iconConfig:{name:"",color:"inherit"}}},computed:{mediaFolderRepository:function(){return this.repositoryFactory.create("media_folder")},mediaDefaultFolderRepository:function(){return this.repositoryFactory.create("media_default_folder")},moduleFactory:function(){return d.getContainer("factory").module},mediaFolder:function(){return this.$attrs.item},iconName:function(){switch(this.iconConfig.name){case"regular-box":case"regular-products":return"multicolor-folder-thumbnail--green";case"regular-database":return"multicolor-folder-thumbnail--grey";case"regular-content":return"multicolor-folder-thumbnail--pink";case"regular-cog":return"multicolor-folder-thumbnail--grey";default:return"multicolor-folder-thumbnail"}},assetFilter:function(){return Shopware.Filter.getByName("asset")},dateFilter:function(){return Shopware.Filter.getByName("date")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getIconConfigFromFolder()},getIconConfigFromFolder:function(){var e=this;return o()(l.a.mark((function n(){var t,i,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((t=e.mediaFolder).defaultFolderId!==e.lastDefaultFolderId){n.next=3;break}return n.abrupt("return");case 3:return e.lastDefaultFolderId=t.defaultFolderId,n.next=6,e.mediaDefaultFolderRepository.get(t.defaultFolderId,m.api);case 6:if(i=n.sent){n.next=9;break}return n.abrupt("return");case 9:o=e.moduleFactory.getModuleByEntityName(i.entity),e.iconConfig.name=o.manifest.icon,e.iconConfig.color=o.manifest.color;case 12:case"end":return n.stop()}}),n)})))()},onChangeName:function(e,n,t){var i=this;return o()(l.a.mark((function o(){return l.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(e&&e.trim()){o.next=3;break}return i.rejectRenaming(n,"empty-name",t),o.abrupt("return");case 3:if(!e.includes("<")){o.next=6;break}return i.rejectRenaming(n,"invalid-name",t),o.abrupt("return");case 6:return n.name=e,o.prev=7,o.next=10,i.mediaFolderRepository.save(n,m.api);case 10:n._isNew=!1,o.next=16;break;case 13:o.prev=13,o.t0=o.catch(7),i.rejectRenaming(n,o.t0,t);case 16:return o.prev=16,t(),o.finish(16);case 19:case"end":return o.stop()}}),o,null,[[7,13,16,19]])})))()},onBlur:function(e,n,t){var i=e.target.value;i===n.name&&(i&&i.trim()?t():this.rejectRenaming(n,"empty-name",t))},rejectRenaming:function(e,n,t){if(n){var i=this.$tc("global.default.error"),o=this.$tc("global.sw-media-folder-item.notification.renamingError.message");"empty-name"===n?(i=this.$tc("global.default.error"),o=this.$tc("global.sw-media-folder-item.notification.errorBlankItemName.message")):"invalid-name"===n&&(i=this.$tc("global.default.error"),o=this.$tc("global.sw-media-folder-item.notification.errorInvalidItemName.message")),this.createNotificationError({title:i,message:o})}!0===e.isNew()&&this.$emit("media-folder-remove",[e.id]),t()},navigateToFolder:function(e){this.$router.push({name:"sw.media.index",params:{folderId:e}})},openSettings:function(){this.showSettings=!0},closeSettings:function(e){var n=this;this.showSettings=!1,"boolean"==typeof e&&!0===e&&this.$nextTick((function(){n.$emit("media-folder-changed")}))},openDissolveModal:function(){this.showDissolveModal=!0},closeDissolveModal:function(){this.showDissolveModal=!1},openDeleteModal:function(){this.showDeleteModal=!0},closeDeleteModal:function(){this.showDeleteModal=!1},emitItemDeleted:function(e){var n=this;this.closeDeleteModal(),this.$nextTick((function(){n.$emit("media-folder-delete",e.folderIds)}))},onFolderDissolved:function(e){var n=this;this.closeDissolveModal(),this.$nextTick((function(){n.$emit("media-folder-dissolve",e)}))},onFolderMoved:function(e){var n=this;this.closeMoveModal(),this.$nextTick((function(){n.$emit("media-folder-move",e)}))},openMoveModal:function(){this.showMoveModal=!0},closeMoveModal:function(){this.showMoveModal=!1},refreshIconConfig:function(){var e=this;return o()(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.getIconConfigFromFolder();case 2:e.closeSettings(!0);case 3:case"end":return n.stop()}}),n)})))()}}}}}]);
//# sourceMappingURL=01d197cb77dc30f1bfdb.js.map