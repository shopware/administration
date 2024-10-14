(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[14674],{417206:function(){},614674:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return o}}),i(728571);let{Mixin:t}=Shopware,{moveItem:l,object:{cloneDeep:a}}=Shopware.Utils,s=Shopware.Data.Criteria;var o={template:'\n{% block sw_cms_element_image_gallery_config %}\n<div class="sw-cms-el-config-image-gallery">\n    \n    {% block sw_cms_element_image_gallery_config_tabs %}\n    <sw-tabs\n        position-identifier="sw-cms-element-config-image-gallery"\n        class="sw-cms-el-config-image-gallery__tabs"\n        default-item="content"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_cms_element_image_gallery_config_tab_content %}\n            <sw-tabs-item\n                :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                name="content"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n            {% endblock %}\n            \n            {% block sw_cms_element_image_gallery_config_tab_options %}\n            <sw-tabs-item\n                :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n                name="settings"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            \n            {% block sw_cms_element_image_gallery_config_content %}\n            <sw-container\n                v-if="active === \'content\'"\n                class="sw-cms-el-config-image-gallery__tab-content"\n            >\n\n                \n                {% block sw_cms_element_image_gallery_config_media_selection %}\n                <sw-cms-mapping-field\n                    v-model:config="element.config.sliderItems"\n                    entity="product_media"\n                    value-types="entity"\n                    :label="$tc(\'sw-cms.elements.imageGallery.label\')"\n                >\n\n                    \n                    {% block sw_cms_element_image_gallery_config_media_list_selection %}\n                    <sw-media-list-selection-v2\n                        :entity-media-items="mediaItems"\n                        :entity="entity"\n                        :upload-tag="uploadTag"\n                        :default-folder="defaultFolderName"\n                        @upload-finish="onImageUpload"\n                        @item-remove="onItemRemove"\n                        @open-sidebar="onOpenMediaModal"\n                        @item-sort="onItemSort"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_image_gallery_config_media_mapping_preview %}\n                    <template #preview="{ demoValue }">\n\n                        \n                        {% block sw_cms_element_image_gallery_config_media_preview_list %}\n                        <div\n                            v-if="demoValue && demoValue.length"\n                            ref="demoMediaGrid"\n                            class="sw-cms-el-config-image-gallery__mapping-preview"\n                            :style="gridAutoRows"\n                        >\n\n                            \n                            {% block sw_cms_element_image_gallery_config_media_preview_item %}\n                            <div\n                                v-for="demo in demoValue"\n                                :key="demo.id"\n                                class="sw-cms-el-config-image-gallery__preview-image"\n                            >\n                                <img\n                                    :src="demo.media.url"\n                                    alt=""\n                                >\n                            </div>\n                            {% endblock %}\n                        </div>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_media_preview_info %}\n                        <sw-alert\n                            v-else\n                            class="sw-cms-el-config-image__preview-info"\n                            variant="info"\n                        >\n                            {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                        </sw-alert>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </sw-cms-mapping-field>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_image_gallery_config_media_modal %}\n                <sw-media-modal-v2\n                    v-if="mediaModalIsOpen"\n                    variant="full"\n                    :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n                    :entity-context="cmsPageState.entityName"\n                    :initial-folder-id="cmsPageState.defaultMediaFolderId"\n                    @media-upload-remove-image="onItemRemove"\n                    @media-modal-selection-change="onMediaSelectionChange"\n                    @modal-close="onCloseMediaModal"\n                />\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_image_gallery_config_settings %}\n            <sw-container\n                v-if="active === \'settings\'"\n                class="sw-cms-el-config-image-gallery__tab-settings"\n            >\n                <div class="sw-cms-el-config-image-gallery__settings-options">\n\n                    \n                    {% block sw_cms_element_image_gallery_config_settings_display_mode %}\n                    <div class="sw-cms-el-config-image-gallery__setting-option">\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_display_mode_select %}\n                        <sw-select-field\n                            v-model:value="element.config.displayMode.value"\n                            :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n                            class="sw-cms-el-config-image-gallery__setting-display-mode"\n                            @update:value="onChangeDisplayMode"\n                        >\n                            <option value="standard">\n                                {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n                            </option>\n                            <option value="cover">\n                                {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n                            </option>\n                            <option value="contain">\n                                {{ $tc(\'sw-cms.elements.general.config.label.displayModeContain\') }}\n                            </option>\n                        </sw-select-field>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_min_height %}\n                        <sw-text-field\n                            v-model:value="element.config.minHeight.value"\n                            :label="$tc(\'sw-cms.elements.image.config.label.minHeight\')"\n                            :placeholder="$tc(\'sw-cms.elements.image.config.placeholder.enterMinHeight\')"\n                            :help-text="$tc(\'sw-cms.elements.image.config.label.minHeightHelpText\')"\n                            :disabled="![\'cover\', \'contain\'].includes(element.config.displayMode.value)"\n                            @update:value="onChangeMinHeight"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_vertical_align %}\n                        <sw-select-field\n                            v-model:value="element.config.verticalAlign.value"\n                            :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                            :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                            :disabled="[\'cover\', \'contain\'].includes(element.config.displayMode.value)"\n                        >\n                            <option value="flex-start">\n                                {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                            </option>\n                            <option value="center">\n                                {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                            </option>\n                            <option value="flex-end">\n                                {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                            </option>\n                        </sw-select-field>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_image_gallery_config_settings_navigation %}\n                    <div class="sw-cms-el-config-image-gallery__setting-navigations sw-cms-el-config-image-gallery__setting-option">\n                        <div class="sw-cms-el-config-image-gallery__settings-navigation">\n\n                            \n                            {% block sw_cms_element_image_gallery_config_settings_navigation_arrow_position %}\n                            <sw-select-field\n                                v-model:value="element.config.navigationArrows.value"\n                                :label="$tc(\'sw-cms.elements.imageSlider.config.label.navigationArrows\')"\n                                @update:value="emitUpdateEl"\n                            >\n\n                                <option :value="null">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionNone\') }}\n                                </option>\n                                <option value="inside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionInside\') }}\n                                </option>\n                                <option value="outside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionOutside\') }}\n                                </option>\n                            </sw-select-field>\n                            {% endblock %}\n                        </div>\n\n                        <div class="sw-cms-el-config-image-gallery__settings-navigation">\n\n                            \n                            {% block sw_cms_element_image_gallery_config_settings_navigation_dots_position %}\n                            <sw-select-field\n                                v-model:value="element.config.navigationDots.value"\n                                :label="$tc(\'sw-cms.elements.imageSlider.config.label.navigationDots\')"\n                                @update:value="emitUpdateEl"\n                            >\n\n                                <option :value="null">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionNone\') }}\n                                </option>\n                                <option value="inside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionInside\') }}\n                                </option>\n                                <option value="outside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionOutside\') }}\n                                </option>\n                            </sw-select-field>\n                            {% endblock %}\n                        </div>\n\n                        <div class="sw-cms-el-config-image-gallery__settings-navigation">\n\n                            \n                            {% block sw_cms_element_image_gallery_config_settings_navigation_preview_position %}\n                            <sw-select-field\n                                v-model:value="element.config.galleryPosition.value"\n                                :label="$tc(\'sw-cms.elements.imageGallery.config.label.navigationPreview\')"\n                                @update:value="emitUpdateEl"\n                            >\n\n                                <option value="left">\n                                    {{ $tc(\'sw-cms.elements.imageGallery.config.label.navigationPreviewPositionLeft\') }}\n                                </option>\n                                <option value="underneath">\n                                    {{ $tc(\'sw-cms.elements.imageGallery.config.label.navigationPreviewPositionUnderneath\') }}\n                                </option>\n                            </sw-select-field>\n                            {% endblock %}\n                        </div>\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_image_gallery_config_settings_zoom_toggles %}\n                    <div class="sw-cms-el-config-image-gallery__setting-option">\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_toggle_zoom %}\n                        <sw-switch-field\n                            v-model:value="element.config.zoom.value"\n                            bordered\n                            :label="$tc(\'sw-cms.elements.imageGallery.config.label.zoom\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_toggle_fullscreen %}\n                        <sw-switch-field\n                            v-model:value="element.config.fullScreen.value"\n                            bordered\n                            :label="$tc(\'sw-cms.elements.imageGallery.config.label.fullscreen\')"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_image_gallery_config_settings_aspect_ratio_magnifier_over_gallery_toggles %}\n                    <div class="sw-cms-el-config-image-gallery__setting-option">\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_toggle_keep_aspect_ratio_on_zoom %}\n                        <sw-switch-field\n                            v-model:value="element.config.keepAspectRatioOnZoom.value"\n                            bordered\n                            :label="$tc(\'sw-cms.elements.imageGallery.config.label.keepAspectRatioOnZoom\')"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_toggle_magnifier_over_gallery %}\n                        <sw-switch-field\n                            v-model:value="element.config.magnifierOverGallery.value"\n                            bordered\n                            :label="$tc(\'sw-cms.elements.imageGallery.config.label.magnifierOverGallery\')"\n                            :help-text="$tc(\'sw-cms.elements.imageGallery.config.label.magnifierOverGalleryHelpText\')"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </div>\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","feature"],emits:["element-update"],mixins:[t.getByName("cms-element")],data(){return{mediaModalIsOpen:!1,initialFolderId:null,entity:this.element,mediaItems:[],columnWidth:"100px"}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},uploadTag(){return`cms-element-media-config-${this.element.id}`},defaultFolderName(){return this.cmsPageState._entityName},sliderItems(){return this.element.data&&this.element.data.sliderItems&&this.element.data.sliderItems.length>0?this.element.data.sliderItems:[]},sliderItemsConfigValue(){return this.element?.config?.sliderItems?.value},gridAutoRows(){return`grid-auto-rows: ${this.columnWidth}`},isProductPage(){return(this.cmsPageState?.currentPage?.type??"")==="product_detail"}},watch:{sliderItems(){this.updateColumnWidth()},sliderItemsConfigValue(e){if(!e){this.element.config.sliderItems.value=[];return}let n=this.element?.config?.sliderItems?.source==="mapped",i=e&&e.length===this.sliderItems.length;n||i||!this.sliderItems.length||(this.mediaItems=this.sliderItems.map(e=>e.media),this.element.config.sliderItems.value=this.sliderItems.map(e=>({mediaId:e.media.id,mediaUrl:e.media.url,newTab:e.newTab,url:e.url})))}},created(){this.createdComponent()},mounted(){this.mountedComponent()},methods:{async createdComponent(){this.initElementConfig("image-gallery");let{source:e,value:n}=this.element.config.sliderItems;if("static"===e&&n&&n.length>0){let e=n.map(e=>e.mediaId),i=new s(1,25);i.setIds(e);let t=await this.mediaRepository.search(i);this.mediaItems=e.map(e=>t.get(e))}this.initConfig()},mountedComponent(){this.updateColumnWidth()},initConfig(){!this.isProductPage||this.element?.translated?.config||this.element?.data?.sliderItems||(this.element.config.sliderItems.source="mapped",this.element.config.sliderItems.value="product.media",this.element.config.navigationDots.value="inside",this.element.config.zoom.value=!0,this.element.config.fullScreen.value=!0,this.element.config.keepAspectRatioOnZoom.value=!0,this.element.config.magnifierOverGallery.value=!1,this.element.config.displayMode.value="contain",this.element.config.minHeight.value="430px")},updateColumnWidth(){this.$refs.demoMediaGrid&&this.$nextTick(()=>{let e=window.getComputedStyle(this.$refs.demoMediaGrid,null).getPropertyValue("grid-template-columns").split(" ");this.columnWidth=e[0]})},onOpenMediaModal(){this.mediaModalIsOpen=!0},onCloseMediaModal(){this.mediaModalIsOpen=!1},onImageUpload(e){let n=this.element.config.sliderItems;"default"===n.source&&(n.value=[],n.source="static",this.mediaItems=[]),this.mediaItems.find(n=>n.id===e.id)&&(this.mediaItems=this.mediaItems.filter(n=>n.id!==e.id),n.value=n.value.filter(n=>n.mediaId!==e.id)),n.value.push({mediaUrl:e.url,mediaId:e.id,url:null,newTab:!1}),this.mediaItems.push(e),this.updateMediaDataValue(),this.emitUpdateEl()},onItemRemove(e,n){let i=e.id;this.element.config.sliderItems.value=this.element.config.sliderItems.value.filter((e,t)=>e.mediaId!==i||t!==n),this.mediaItems=this.mediaItems.filter((e,t)=>e.id!==i||t!==n),this.updateMediaDataValue(),this.emitUpdateEl()},onMediaSelectionChange(e){let n=this.element.config.sliderItems;"default"===n.source&&(n.value=[],n.source="static",this.mediaItems=[]),e.forEach(e=>{this.element.config.sliderItems.value.push({mediaUrl:e.url,mediaId:e.id,url:null,newTab:!1})}),this.mediaItems.push(...e),this.updateMediaDataValue(),this.emitUpdateEl()},updateMediaDataValue(){if(this.element.config.sliderItems.value){let e=a(this.element.config.sliderItems.value);e.forEach(e=>{this.mediaItems.forEach(n=>{e.mediaId===n.id&&(e.media=n)})}),this.element.data?this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element.data,"sliderItems",e):this.element.data.sliderItems=e:this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element,"data",{sliderItems:e}):this.element.data={sliderItems:e}}},onItemSort(e,n){l(this.mediaItems,e.position,n.position),l(this.element.config.sliderItems.value,e.position,n.position),this.updateMediaDataValue(),this.emitUpdateEl()},onChangeMinHeight(e){this.element.config.minHeight.value=null===e?"":e,this.$emit("element-update",this.element)},onChangeDisplayMode(e){["cover","contain"].includes(e)&&(this.element.config.verticalAlign.value=null),this.$emit("element-update",this.element)},emitUpdateEl(){this.$emit("element-update",this.element)}}}},728571:function(e,n,i){var t=i(417206);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),i(745346).Z("5d775aa5",t,!0,{})}}]);