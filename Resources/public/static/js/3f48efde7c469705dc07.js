(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[131],{CssK:function(n,c,e){"use strict";e.r(c);var o=e("XkwL"),l=e.n(o),i=(e("aBYd"),Shopware.Mixin);c.default={template:'\n{% block sw_cms_block_config %}\n<div class="sw-cms-block-config">\n\n    \n    {% block sw_cms_block_config__quickactions %}\n    <ul\n        class="sw-cms-block-config__quickactions-list"\n        :class="quickactionClasses"\n    >\n        \n        {% block sw_cms_block_config__quickaction_duplicate %}\n        \n        <li\n            class="sw-cms-block-config__quickaction"\n            @click="onBlockDuplicate"\n        >\n            <sw-icon\n                name="regular-duplicate"\n                size="16"\n            />\n            {{ $tc(\'global.default.duplicate\') }}\n        </li>\n        {% endblock %}\n\n        \n        {% block sw_cms_block_config__quickaction_delete %}\n        \n        <li\n            class="sw-cms-block-config__quickaction is--danger"\n            @click="onBlockDelete"\n        >\n            <sw-icon\n                name="regular-trash"\n                size="16"\n            />\n            {{ $tc(\'sw-cms.general.buttonDelete\') }}\n        </li>\n        {% endblock %}\n    </ul>\n    {% endblock %}\n\n    \n    {% block sw_cms_block_config__settings %}\n    <div class="sw-cms-section-config__settings">\n\n        \n        {% block sw_cms_block_config_name_field %}\n        <sw-text-field\n            v-model="block.name"\n            :label="$tc(\'sw-cms.detail.label.blockNameField\')"\n            :placeholder="$tc(\'sw-cms.detail.label.blockNameFieldPlaceholder\')"\n            :help-text="$tc(\'sw-cms.detail.tooltip.blockNameField\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_block_config_background_color_field %}\n        <sw-colorpicker\n            v-model="block.backgroundColor"\n            :label="$tc(\'sw-cms.detail.label.backgroundColorLabel\')"\n            :placeholder="$tc(\'sw-cms.detail.label.backgroundColorField\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_block_config_background_image_field %}\n        <sw-media-compact-upload-v2\n            :source="block && block.backgroundMedia && block.backgroundMedia.id ? block.backgroundMedia : null"\n            :upload-tag="uploadTag"\n            :label="$tc(\'sw-cms.detail.label.backgroundMediaLabel\')"\n            :default-folder="cmsPageState.pageEntityName"\n            :allow-multi-select="false"\n            @media-upload-remove-image="removeMedia"\n            @selection-change="onSetBackgroundMedia"\n        />\n        <sw-upload-listener\n            :upload-tag="uploadTag"\n            auto-upload\n            @media-upload-finish="successfulUpload"\n        />\n\n        \n        {% block sw_cms_block_config_background_image_position_field %}\n        <sw-select-field\n            v-model="block.backgroundMediaMode"\n            :label="$tc(\'sw-cms.detail.label.backgroundMediaMode\')"\n            :disabled="!block.backgroundMediaId"\n        >\n            <option value="auto">\n                {{ $tc(\'sw-cms.detail.label.backgroundMediaModeAuto\') }}\n            </option>\n            <option value="contain">\n                {{ $tc(\'sw-cms.detail.label.backgroundMediaModeContain\') }}\n            </option>\n            <option value="cover">\n                {{ $tc(\'sw-cms.detail.label.backgroundMediaModeCover\') }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","cmsService"],mixins:[i.getByName("cms-state")],props:{block:{type:Object,required:!0}},computed:{uploadTag:function(){return"cms-block-media-config-".concat(this.block.id)},mediaRepository:function(){return this.repositoryFactory.create("media")},cmsPageState:function(){return Shopware.State.get("cmsPageState")},cmsBlocks:function(){return this.cmsService.getCmsBlockRegistry()},blockConfig:function(){return this.cmsBlocks[this.block.type]},quickactionsDisabled:function(){return!this.isSystemDefaultLanguage||!1===this.blockConfig.removable},quickactionClasses:function(){return{"is--disabled":this.quickactionsDisabled}}},methods:{onSetBackgroundMedia:function(n){var c=l()(n,1)[0];this.block.backgroundMediaId=c.id,this.block.backgroundMedia=c},successfulUpload:function(n){var c=this;this.block.backgroundMediaId=n.targetId,this.mediaRepository.get(n.targetId).then((function(n){c.block.backgroundMedia=n}))},removeMedia:function(){this.block.backgroundMediaId=null,this.block.backgroundMedia=null},onBlockDelete:function(){this.quickactionsDisabled||this.$emit("block-delete",this.block)},onBlockDuplicate:function(){this.quickactionsDisabled||this.$emit("block-duplicate",this.block)}}}},aBYd:function(n,c,e){var o=e("iGbE");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e("ydqr").default)("0147977c",o,!0,{})},iGbE:function(n,c,e){}}]);