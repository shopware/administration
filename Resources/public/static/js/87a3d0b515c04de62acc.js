(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[3979],{2973:function(){},3979:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return i}}),l(73178);let{Mixin:t}=Shopware;var i={template:'\n{% block sw_cms_element_image_config %}\n<div class="sw-cms-el-config-image">\n    \n    {% block sw_cms_element_image_config_media_upload %}\n    <sw-cms-mapping-field\n        v-model:config="element.config.media"\n        :label="$tc(\'sw-cms.elements.image.label\')"\n        value-types="entity"\n        entity="media"\n    >\n        <sw-media-upload-v2\n            variant="regular"\n            :upload-tag="uploadTag"\n            :source="previewSource"\n            :allow-multi-select="false"\n            :default-folder="cmsPageState.pageEntityName"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            @media-upload-sidebar-open="onOpenMediaModal"\n            @media-upload-remove-image="onImageRemove"\n        />\n\n        <template #preview="{ demoValue }">\n            <div class="sw-cms-el-config-image__mapping-preview">\n                <img\n                    v-if="demoValue.url"\n                    :src="demoValue.url"\n                    alt=""\n                >\n                <sw-alert\n                    v-else\n                    class="sw-cms-el-config-image__preview-info"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </template>\n    </sw-cms-mapping-field>\n\n    <sw-upload-listener\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_config_display_mode %}\n    <sw-select-field\n        v-model:value="element.config.displayMode.value"\n        class="sw-cms-el-config-image__display-mode"\n        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n        @update:value="onChangeDisplayMode"\n    >\n        <option value="standard">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n        </option>\n        <option value="cover">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n        </option>\n        <option value="stretch">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStretch\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    <template v-if="element.config.displayMode.value === \'cover\'">\n        \n        {% block sw_cms_element_image_config_min_height %}\n        <sw-text-field\n            v-model:value="element.config.minHeight.value"\n            :label="$tc(\'sw-cms.elements.image.config.label.minHeight\')"\n            :placeholder="$tc(\'sw-cms.elements.image.config.placeholder.enterMinHeight\')"\n            @update:value="onChangeMinHeight"\n        />\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_cms_element_image_config_vertical_align %}\n    <sw-select-field\n        v-model:value="element.config.verticalAlign.value"\n        :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n        :disabled="element.config.displayMode.value === \'cover\'"\n    >\n        <option value="flex-start">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n        </option>\n        <option value="center">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n        </option>\n        <option value="flex-end">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    {% block sw_cms_element_image_config_horizontal_align %}\n    <sw-select-field\n        v-model:value="element.config.horizontalAlign.value"\n        :label="$tc(\'sw-cms.elements.general.config.label.horizontalAlign\')"\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.horizontalAlign\')"\n        :disabled="element.config.displayMode.value === \'cover\'"\n    >\n        <option value="flex-start">\n            {{ $tc(\'sw-cms.elements.general.config.label.horizontalAlignLeft\') }}\n        </option>\n        <option value="center">\n            {{ $tc(\'sw-cms.elements.general.config.label.horizontalAlignCenter\') }}\n        </option>\n        <option value="flex-end">\n            {{ $tc(\'sw-cms.elements.general.config.label.horizontalAlignRight\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_config_link %}\n    <div class="sw-cms-el-config-image__link">\n        <sw-dynamic-url-field\n            v-model:value="element.config.url.value"\n        />\n        <sw-switch-field\n            v-model:value="element.config.newTab.value"\n            class="sw-cms-el-config-image__link-tab"\n            :label="$tc(\'sw-cms.elements.image.config.label.linkNewTab\')"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_image_config_media_modal %}\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        variant="full"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :entity-context="cmsPageState.entityName"\n        :allow-multi-select="false"\n        :initial-folder-id="cmsPageState.defaultMediaFolderId"\n        @media-upload-remove-image="onImageRemove"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[t.getByName("cms-element")],data(){return{mediaModalIsOpen:!1,initialFolderId:null}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},uploadTag(){return`cms-element-media-config-${this.element.id}`},previewSource(){return this.element?.data?.media?.id?this.element.data.media:this.element.config.media.value}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("image")},async onImageUpload({targetId:e}){let n=await this.mediaRepository.get(e);this.element.config.media.value=n.id,this.element.config.media.source="static",this.updateElementData(n),this.$emit("element-update",this.element)},onImageRemove(){this.element.config.media.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal(){this.mediaModalIsOpen=!1},onSelectionChanges(e){let n=e[0];this.element.config.media.value=n.id,this.element.config.media.source="static",this.updateElementData(n),this.$emit("element-update",this.element)},updateElementData(e=null){let n=null===e?null:e.id;this.element.data?(this.$set(this.element.data,"mediaId",n),this.$set(this.element.data,"media",e)):this.$set(this.element,"data",{mediaId:n,media:e})},onOpenMediaModal(){this.mediaModalIsOpen=!0},onChangeMinHeight(e){this.element.config.minHeight.value=null===e?"":e,this.$emit("element-update",this.element)},onChangeDisplayMode(e){"cover"===e&&(this.element.config.verticalAlign.value=null,this.element.config.horizontalAlign.value=null),this.$emit("element-update",this.element)}}}},73178:function(e,n,l){var t=l(2973);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),l(45346).Z("ab3e88ce",t,!0,{})}}]);