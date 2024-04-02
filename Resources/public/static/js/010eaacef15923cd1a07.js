(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[17230],{63911:function(){},17230:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return a}}),o(79470);let{Mixin:c,Utils:l}=Shopware;var a={template:'\n{% block sw_cms_block_config %}\n<div class="sw-cms-block-config">\n\n    \n    {% block sw_cms_block_config__quickactions %}\n    <ul\n        class="sw-cms-block-config__quickactions-list"\n        :class="quickactionClasses"\n    >\n        \n        {% block sw_cms_block_config__quickaction_duplicate %}\n        <li\n            class="sw-cms-block-config__quickaction"\n            role="button"\n            tabindex="0"\n            @click="onBlockDuplicate"\n            @keydown.enter="onBlockDuplicate"\n        >\n            <sw-icon\n                name="regular-duplicate"\n                size="16"\n            />\n            {{ $tc(\'global.default.duplicate\') }}\n        </li>\n        {% endblock %}\n\n        \n        {% block sw_cms_block_config__quickaction_delete %}\n        <li\n            class="sw-cms-block-config__quickaction is--danger"\n            role="button"\n            tabindex="0"\n            @click="onBlockDelete"\n            @keydown.enter="onBlockDelete"\n        >\n            <sw-icon\n                name="regular-trash"\n                size="16"\n            />\n            {{ $tc(\'sw-cms.general.buttonDelete\') }}\n        </li>\n        {% endblock %}\n    </ul>\n    {% endblock %}\n\n    \n    {% block sw_cms_block_config__settings %}\n    <div class="sw-cms-section-config__settings">\n\n        \n        {% block sw_cms_block_config_name_field %}\n        <sw-text-field\n            :value="block.name"\n            :label="$tc(\'sw-cms.detail.label.blockNameField\')"\n            :placeholder="$tc(\'sw-cms.detail.label.blockNameFieldPlaceholder\')"\n            :help-text="$tc(\'sw-cms.detail.tooltip.blockNameField\')"\n            @update:value="onBlockNameChange"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_block_config_background_color_field %}\n        <sw-colorpicker\n            v-model:value="block.backgroundColor"\n            :label="$tc(\'sw-cms.detail.label.backgroundColorLabel\')"\n            :placeholder="$tc(\'sw-cms.detail.label.backgroundColorField\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_block_config_background_image_field %}\n        <sw-media-compact-upload-v2\n            :source="block && block.backgroundMedia && block.backgroundMedia.id ? block.backgroundMedia : null"\n            :upload-tag="uploadTag"\n            :label="$tc(\'sw-cms.detail.label.backgroundMediaLabel\')"\n            :default-folder="cmsPageState.pageEntityName"\n            :allow-multi-select="false"\n            @media-upload-remove-image="removeMedia"\n            @selection-change="onSetBackgroundMedia"\n        />\n        <sw-upload-listener\n            :upload-tag="uploadTag"\n            auto-upload\n            @media-upload-finish="successfulUpload"\n        />\n\n        \n        {% block sw_cms_block_config_background_image_position_field %}\n        <sw-select-field\n            v-model:value="block.backgroundMediaMode"\n            :label="$tc(\'sw-cms.detail.label.backgroundMediaMode\')"\n            :disabled="!block.backgroundMediaId"\n        >\n            <option value="auto">\n                {{ $tc(\'sw-cms.detail.label.backgroundMediaModeAuto\') }}\n            </option>\n            <option value="contain">\n                {{ $tc(\'sw-cms.detail.label.backgroundMediaModeContain\') }}\n            </option>\n            <option value="cover">\n                {{ $tc(\'sw-cms.detail.label.backgroundMediaModeCover\') }}\n            </option>\n        </sw-select-field>\n        {% endblock %}\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","cmsService"],mixins:[c.getByName("cms-state")],props:{block:{type:Object,required:!0}},computed:{uploadTag(){return`cms-block-media-config-${this.block.id}`},mediaRepository(){return this.repositoryFactory.create("media")},cmsPageState(){return Shopware.State.get("cmsPageState")},cmsBlocks(){return this.cmsService.getCmsBlockRegistry()},blockConfig(){return this.cmsBlocks[this.block.type]},quickactionsDisabled(){return!this.isSystemDefaultLanguage||!1===this.blockConfig.removable},quickactionClasses(){return{"is--disabled":this.quickactionsDisabled}}},methods:{onSetBackgroundMedia([e]){this.block.backgroundMediaId=e.id,this.block.backgroundMedia=e},successfulUpload(e){this.block.backgroundMediaId=e.targetId,this.mediaRepository.get(e.targetId).then(e=>{this.block.backgroundMedia=e})},removeMedia(){this.block.backgroundMediaId=null,this.block.backgroundMedia=null},onBlockDelete(){this.quickactionsDisabled||this.$emit("block-delete",this.block)},onBlockDuplicate(){this.quickactionsDisabled||this.$emit("block-duplicate",this.block)},onBlockNameChange:l.debounce(function(e){this.block.name=e},400)}}},79470:function(e,n,o){var c=o(63911);c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[e.id,c,""]]),c.locals&&(e.exports=c.locals),o(45346).Z("67bbb359",c,!0,{})}}]);