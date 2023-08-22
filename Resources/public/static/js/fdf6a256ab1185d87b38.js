(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[170],{"+1o+":function(e,n,i){"use strict";i.r(n);var t=i("6lmj"),l=i.n(t),s=i("7yzw"),a=i.n(s),o=i("92Mt"),m=i.n(o),c=(i("c26m"),Shopware.Mixin),d=Shopware.Utils,g=d.moveItem,r=d.object.cloneDeep,f=Shopware.Data.Criteria;n.default={template:'\n{% block sw_cms_element_image_slider_config %}\n<div class="sw-cms-el-config-image-slider">\n    \n    {% block sw_cms_element_image_slider_config_tabs %}\n    <sw-tabs\n        position-identifier="sw-cms-element-config-image-slider"\n        class="sw-cms-el-config-image-slider__tabs"\n        default-item="content"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_cms_element_image_slider_config_tab_content %}\n            <sw-tabs-item\n                :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                name="content"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n            {% endblock %}\n            \n            {% block sw_cms_element_image_slider_config_tab_options %}\n            <sw-tabs-item\n                :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n                name="settings"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            \n            {% block sw_cms_element_image_slider_config_content %}\n            <sw-container\n                v-if="active === \'content\'"\n                class="sw-cms-el-config-image-slider__tab-content"\n            >\n                \n                {% block sw_cms_element_image_slider_config_media_selection %}\n                <sw-media-list-selection-v2\n                    :entity-media-items="mediaItems"\n                    :entity="entity"\n                    :upload-tag="uploadTag"\n                    :default-folder-name="defaultFolderName"\n                    @upload-finish="onImageUpload"\n                    @item-remove="onItemRemove"\n                    @open-sidebar="onOpenMediaModal"\n                    @item-sort="onItemSort"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_image_slider_config_media_modal %}\n                <sw-media-modal-v2\n                    v-if="mediaModalIsOpen"\n                    variant="regular"\n                    :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n                    :entity-context="cmsPageState.entityName"\n                    :initial-folder-id="cmsPageState.defaultMediaFolderId"\n                    @media-upload-remove-image="onItemRemove"\n                    @media-modal-selection-change="onMediaSelectionChange"\n                    @modal-close="onCloseMediaModal"\n                />\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_image_slider_config_settings %}\n            <sw-container\n                v-if="active === \'settings\'"\n                class="sw-cms-el-config-image-slider__tab-settings"\n            >\n                <div class="sw-cms-el-config-image-slider__settings-options">\n\n                    \n                    {% block sw_cms_element_image_gallery_config_settings_display_mode %}\n                    <div class="sw-cms-el-config-image-slider__setting-option">\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_display_mode_select %}\n                        <sw-select-field\n                            v-model="element.config.displayMode.value"\n                            :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n                            class="sw-cms-el-config-image-slider__setting-display-mode"\n                            @change="onChangeDisplayMode"\n                        >\n                            <option value="standard">\n                                {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n                            </option>\n                            <option value="cover">\n                                {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n                            </option>\n                            <option value="contain">\n                                {{ $tc(\'sw-cms.elements.general.config.label.displayModeContain\') }}\n                            </option>\n                        </sw-select-field>\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_min_height %}\n                        <sw-text-field\n                            v-model="element.config.minHeight.value"\n                            :label="$tc(\'sw-cms.elements.image.config.label.minHeight\')"\n                            :placeholder="$tc(\'sw-cms.elements.image.config.label.minHeight\')"\n                            :help-text="$tc(\'sw-cms.elements.image.config.label.minHeightHelpText\')"\n                            :disabled="element.config.displayMode.value !== \'cover\'"\n                            @input="onChangeMinHeight"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_image_gallery_config_settings_vertical_align %}\n                        <sw-select-field\n                            v-model="element.config.verticalAlign.value"\n                            :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                            :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                            :disabled="element.config.displayMode.value === \'cover\'"\n                        >\n                            <option value="flex-start">\n                                {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                            </option>\n                            <option value="center">\n                                {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                            </option>\n                            <option value="flex-end">\n                                {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                            </option>\n                        </sw-select-field>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_image_slider_config_settings_navigation %}\n                    <div class="sw-cms-el-config-image-slider__setting-navigations sw-cms-el-config-image-slider__setting-option">\n                        <div class="sw-cms-el-config-image-slider__settings-navigation">\n\n                            \n                            {% block sw_cms_element_image_slider_config_settings_navigation_arrow_position %}\n                            <sw-field\n                                v-model="element.config.navigationArrows.value"\n                                type="select"\n                                :label="$tc(\'sw-cms.elements.imageSlider.config.label.navigationArrows\')"\n                                @change="emitUpdateEl"\n                            >\n\n                                <option :value="null">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionNone\') }}\n                                </option>\n                                <option value="inside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionInside\') }}\n                                </option>\n                                <option value="outside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionOutside\') }}\n                                </option>\n                            </sw-field>\n                            {% endblock %}\n                        </div>\n\n                        <div class="sw-cms-el-config-image-slider__settings-navigation">\n\n                            \n                            {% block sw_cms_element_image_slider_config_settings_navigation_dots_position %}\n                            <sw-field\n                                v-model="element.config.navigationDots.value"\n                                type="select"\n                                :label="$tc(\'sw-cms.elements.imageSlider.config.label.navigationDots\')"\n                                @change="emitUpdateEl"\n                            >\n\n                                <option :value="null">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionNone\') }}\n                                </option>\n                                <option value="inside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionInside\') }}\n                                </option>\n                                <option value="outside">\n                                    {{ $tc(\'sw-cms.elements.imageSlider.config.label.navigationPositionOutside\') }}\n                                </option>\n                            </sw-field>\n                            {% endblock %}\n                        </div>\n                    </div>\n                    {% endblock %}\n\n                    <div class="sw-cms-el-config-image-slider__setting-slide">\n                        <sw-switch-field\n                            v-model="element.config.autoSlide.value"\n                            class="sw-cms-el-config-image-slider__setting-auto-slide"\n                            :label="$tc(\'sw-cms.elements.general.config.label.autoSlide\')"\n                            :help-text="$tc(\'sw-cms.elements.general.config.helpText.autoSlide\')"\n                            @change="onChangeAutoSlide"\n                        />\n                    </div>\n\n                    <div class="sw-cms-el-config-image-slider__setting-option">\n                        <div class="sw-cms-el-config-image-slider__setting-delay">\n                            <sw-number-field\n                                v-model="element.config.autoplayTimeout.value"\n                                class="sw-cms-el-config-image-slider__setting-delay-slide"\n                                number-type="int"\n                                :min="0"\n                                :max="9999999"\n                                :disabled="!showSlideConfig"\n                                :label="$tc(\'sw-cms.elements.general.config.label.autoplayTimeout\')"\n                                :placeholder="$tc(\'sw-cms.elements.general.config.label.autoplayTimeout\')"\n                                :help-text="$tc(\'sw-cms.elements.general.config.helpText.autoplayTimeout\')"\n                            />\n                        </div>\n                        <div class="sw-cms-el-config-image-slider__setting-speed">\n                            <sw-number-field\n                                v-model="element.config.speed.value"\n                                class="sw-cms-el-config-image-slider__setting-speed-slide"\n                                number-type="int"\n                                :min="0"\n                                :max="9999999"\n                                :disabled="!showSlideConfig"\n                                :label="$tc(\'sw-cms.elements.general.config.label.speed\')"\n                                :placeholder="$tc(\'sw-cms.elements.general.config.label.speed\')"\n                                :help-text="$tc(\'sw-cms.elements.general.config.helpText.speed\')"\n                            />\n                        </div>\n                    </div>\n\n                    \n                    {% block sw_cms_element_image_slider_config_settings_links %}\n                    <div class="sw-cms-el-config-image-slider__settings-links sw-cms-el-config-image-slider__setting-option">\n                        <div\n                            v-for="(sliderItem, index) in items"\n                            :key="index"\n                            class="sw-cms-el-config-image-slider__settings-link"\n                        >\n\n                            \n                            {% block sw_cms_element_image_slider_config_settings_link_url %}\n                            <sw-field\n                                :key="sliderItem.mediaId"\n                                v-model="sliderItem.url"\n                                class="sw-cms-el-config-image-slider__settings-link-input"\n                                :name="sliderItem.mediaUrl"\n                                type="text"\n                                :label="$tc(\'sw-cms.elements.image.config.label.linkTo\')"\n                                :placeholder="$tc(\'sw-cms.elements.image.config.placeholder.enterUrl\')"\n                            >\n                                <template #prefix>\n                                    <img\n                                        v-if="sliderItem.mediaUrl"\n                                        class="sw-cms-el-config-image-slider__settings-link-prefix"\n                                        :src="sliderItem.mediaUrl"\n                                        alt=""\n                                    >\n                                </template>\n                            </sw-field>\n                            {% endblock %}\n\n                            \n                            {% block sw_cms_element_image_slider_config_settings_link_target %}\n                            <sw-field\n                                v-model="sliderItem.newTab"\n                                class="sw-cms-el-config-image-slider__settings-link-tab"\n                                type="switch"\n                                :name="sliderItem.mediaId"\n                                :label="$tc(\'sw-cms.elements.image.config.label.linkNewTab\')"\n                            />\n                            {% endblock %}\n                        </div>\n                    </div>\n                    {% endblock %}\n                </div>\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[c.getByName("cms-element")],data:function(){return{mediaModalIsOpen:!1,initialFolderId:null,entity:this.element,mediaItems:[],showSlideConfig:!1}},computed:{uploadTag:function(){return"cms-element-media-config-".concat(this.element.id)},mediaRepository:function(){return this.repositoryFactory.create("media")},defaultFolderName:function(){return this.cmsPageState.pageEntityName},items:function(){return this.element.config&&this.element.config.sliderItems&&this.element.config.sliderItems.value?this.element.config.sliderItems.value:[]},speedDefault:function(){return this.cmsService.getCmsElementConfigByName("image-slider").defaultConfig.speed.value},autoplayTimeoutDefault:function(){return this.cmsService.getCmsElementConfigByName("image-slider").defaultConfig.autoplayTimeout.value}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;return a()(m.a.mark((function n(){var i,t,l,s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.initElementConfig("image-slider"),null!==(i=e.element.config.autoSlide)&&void 0!==i&&i.value&&(e.showSlideConfig=!0),!("default"!==e.element.config.sliderItems.source&&e.element.config.sliderItems.value.length>0)){n.next=10;break}return t=e.element.config.sliderItems.value.map((function(e){return e.mediaId})),(l=new f(1,25)).setIds(t),n.next=8,e.mediaRepository.search(l);case 8:s=n.sent,e.mediaItems=t.map((function(e){return s.get(e)}));case 10:case"end":return n.stop()}}),n)})))()},onImageUpload:function(e){var n=this.element.config.sliderItems;"default"===n.source&&(n.value=[],n.source="static"),n.value.push({mediaUrl:e.url,mediaId:e.id,url:null,newTab:!1}),this.mediaItems.push(e),this.updateMediaDataValue(),this.emitUpdateEl()},onItemRemove:function(e,n){var i=e.id,t=this.element.config.sliderItems.value;this.element.config.sliderItems.value=t.filter((function(e,t){return e.mediaId!==i||t!==n})),this.mediaItems=this.mediaItems.filter((function(e,t){return e.id!==i||t!==n})),this.updateMediaDataValue(),this.emitUpdateEl()},onCloseMediaModal:function(){this.mediaModalIsOpen=!1},onMediaSelectionChange:function(e){var n,i=this,t=this.element.config.sliderItems;"default"===t.source&&(t.value=[],t.source="static"),e.forEach((function(e){i.element.config.sliderItems.value.push({mediaUrl:e.url,mediaId:e.id,url:null,newTab:!1})})),(n=this.mediaItems).push.apply(n,l()(e)),this.updateMediaDataValue(),this.emitUpdateEl()},onItemSort:function(e,n){g(this.mediaItems,e.position,n.position),g(this.element.config.sliderItems.value,e.position,n.position),this.updateMediaDataValue(),this.emitUpdateEl()},updateMediaDataValue:function(){var e=this;if(this.element.config.sliderItems.value){var n=r(this.element.config.sliderItems.value);n.forEach((function(n){e.mediaItems.forEach((function(e){n.mediaId===e.id&&(n.media=e)}))})),this.element.data?this.$set(this.element.data,"sliderItems",n):this.$set(this.element,"data",{sliderItems:n})}},onOpenMediaModal:function(){this.mediaModalIsOpen=!0},onChangeMinHeight:function(e){this.element.config.minHeight.value=null===e?"":e,this.$emit("element-update",this.element)},onChangeAutoSlide:function(e){this.showSlideConfig=e,e||(this.element.config.autoplayTimeout.value=this.autoplayTimeoutDefault,this.element.config.speed.value=this.speedDefault)},onChangeDisplayMode:function(e){"cover"===e&&(this.element.config.verticalAlign.value=null),this.$emit("element-update",this.element)},emitUpdateEl:function(){this.$emit("element-update",this.element)}}}},c26m:function(e,n,i){var t=i("vEvM");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i("P8hj").default)("ae2e3aca",t,!0,{})},vEvM:function(e,n,i){}}]);