(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[197],{T2Np:function(e,n,t){var i=t("qqgi");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("ydqr").default)("48943234",i,!0,{})},UG9l:function(e,n,t){"use strict";t.r(n);var i=t("HZZ/"),o=t.n(i),l=t("hJxD"),a=t.n(l),s=(t("T2Np"),Shopware.Mixin);n.default={template:'\n{% block sw_cms_element_youtube_video_config %}\n<div class="sw-cms-el-config-youtube-video">\n\n    \n    {% block sw_cms_element_youtube_video_config_video_id %}\n    <sw-text-field\n        v-model="videoID"\n        class="sw-cms-el-config-youtube-video__video-id"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.videoId\')"\n        :placeholder="$tc(\'sw-cms.elements.vimeoVideo.config.placeholder.videoId\')"\n    />\n    {% endblock %}\n\n    <div class="sw-cms-el-config-youtube-video__switches">\n\n        \n        {% block sw_cms_element_youtube_video_config_autoplay %}\n        <sw-switch-field\n            v-model="element.config.autoPlay.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.autoPlay\')"\n            :help-text="$tc(\'sw-cms.elements.vimeoVideo.config.helpText.autoPlay\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_loop %}\n        <sw-switch-field\n            v-model="element.config.loop.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.loop\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_show_controls %}\n        <sw-switch-field\n            v-model="element.config.showControls.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.showControls\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_advanced_privacy_mode %}\n        <sw-switch-field\n            v-model="element.config.advancedPrivacyMode.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.advancedPrivacy\')"\n            :help-text="$tc(\'sw-cms.elements.vimeoVideo.config.helpText.advancedPrivacy\')"\n        />\n        {% endblock %}\n    </div>\n\n    <div class="sw-cms-el-config-youtube-video__start-and-end">\n\n        \n        {% block sw_cms_element_youtube_video_config_start %}\n        <sw-text-field\n            :value="startValue"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.start\')"\n            placeholder="0:00"\n            @change="setTimeValue($event, \'start\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_element_youtube_video_config_end %}\n        <sw-text-field\n            :value="endValue"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.end\')"\n            placeholder="0:00"\n            @change="setTimeValue($event, \'end\')"\n        />\n        {% endblock %}\n    </div>\n\n    \n    {% block sw_cms_element_youtube_video_config_display_mode %}\n    <sw-select-field\n        v-model="element.config.displayMode.value"\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n    >\n        <option value="standard">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n        </option>\n        <option value="streched">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStretch\') }}\n        </option>\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_youtube_video_config_needs_confirmation %}\n    <div class="sw-cms-el-config-youtube-video__confirmation">\n        <sw-switch-field\n            v-model="element.config.needsConfirmation.value"\n            :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.needsConfirmation\')"\n        />\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_youtube_video_config_preview_media %}\n    <sw-cms-mapping-field\n        v-if="element.config.needsConfirmation.value"\n        v-model="element.config.previewMedia"\n        :label="$tc(\'sw-cms.elements.vimeoVideo.config.label.previewImage\')"\n        value-types="entity"\n        entity="media"\n    >\n        <sw-media-upload-v2\n            variant="regular"\n            :upload-tag="uploadTag"\n            :source="previewSource"\n            :allow-multi-select="false"\n            :default-folder="cmsPageState.pageEntityName"\n            :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n            @media-upload-sidebar-open="onOpenMediaModal"\n            @media-upload-remove-image="onImageRemove"\n        />\n\n        \n        {% block sw_cms_element_youtube_video_config_preview_media_display %}\n        <template #preview="{ demoValue }">\n            <div class="sw-cms-el-config-image__mapping-preview">\n                <img\n                    v-if="demoValue.url"\n                    :src="demoValue.url"\n                    alt=""\n                >\n                <sw-alert\n                    v-else\n                    class="sw-cms-el-config-image__preview-info"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n                </sw-alert>\n            </div>\n        </template>\n        {% endblock %}\n    </sw-cms-mapping-field>\n\n    \n    {% block sw_cms_element_youtube_video_config_preview_media_upload_listener %}\n    <sw-upload-listener\n        :upload-tag="uploadTag"\n        auto-upload\n        @media-upload-finish="onImageUpload"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_element_youtube_video_config_preview_media_modal %}\n    <sw-media-modal-v2\n        v-if="mediaModalIsOpen"\n        variant="regular"\n        :caption="$tc(\'sw-cms.elements.general.config.caption.mediaUpload\')"\n        :entity-context="cmsPageState.entityName"\n        :allow-multi-select="false"\n        :initial-folder-id="cmsPageState.defaultMediaFolderId"\n        @media-upload-remove-image="onImageRemove"\n        @media-modal-selection-change="onSelectionChanges"\n        @modal-close="onCloseModal"\n    />\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[s.getByName("cms-element")],data:function(){return{mediaModalIsOpen:!1,initialFolderId:null}},computed:{startValue:function(){return this.convertTimeToInputFormat(this.element.config.start.value).string},endValue:function(){return this.convertTimeToInputFormat(this.element.config.end.value).string},videoID:{get:function(){return this.element.config.videoID.value},set:function(e){this.element.config.videoID.value=this.shortenLink(e)}},mediaRepository:function(){return this.repositoryFactory.create("media")},uploadTag:function(){return"cms-element-youtube-video-config-".concat(this.element.id)},previewSource:function(){return this.element.data&&this.element.data.previewMedia&&this.element.data.previewMedia.id?this.element.data.previewMedia:this.element.config.previewMedia.value}},created:function(){this.createdComponent()},methods:{setTimeValue:function(e,n){this.element.config[n].value=this.convertTimeToUrlFormat(e).string},createdComponent:function(){this.initElementConfig("youtube-video")},convertTimeToInputFormat:function(e){var n={},t=e;/^[0-9]*$/.test(e)||(t=0);var i=Math.floor(t/60),o=t-60*i;return n.minutes=i,n.seconds=o,1===o.toString().length&&(o="0".concat(o)),n.string="".concat(i,":").concat(o),n},convertTimeToUrlFormat:function(e){var n={},t=e;/[0-9]?[0-9]:[0-9][0-9]/.test(t)||(t="00:00");var i=t.split(":");return n.minutes=Number(i[0]),n.seconds=Number(i[1]),n.string=60*n.minutes+n.seconds,n},shortenLink:function(e){var n=e;if("shareLink"===(/https\:\/\/youtu\.be\//.test(n)?"shareLink":"urlLink")){var t=/\?/;if(n=n.replace(/https\:\/\/youtu\.be\//,""),t.test(n)){var i=t.exec(n).index;n=n.substring(0,i)}}else{var o=/https\:\/\/www\.youtube\.com\/watch\?v\=/,l=/\&/;if(o.test(n)&&(n=n.replace(o,"")),l.test(n)){var a=l.exec(n).index;n=n.substring(0,a)}}return n},onImageUpload:function(e){var n=this;return o()(a.a.mark((function t(){var i,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.targetId,t.next=3,n.mediaRepository.get(i);case 3:o=t.sent,n.element.config.previewMedia.value=o.id,n.updateElementData(o),n.$emit("element-update",n.element);case 7:case"end":return t.stop()}}),t)})))()},onImageRemove:function(){this.element.config.previewMedia.value=null,this.updateElementData(),this.$emit("element-update",this.element)},onCloseModal:function(){this.mediaModalIsOpen=!1},onSelectionChanges:function(e){var n=e[0];this.element.config.previewMedia.value=n.id,this.updateElementData(n),this.$emit("element-update",this.element)},updateElementData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$set(this.element.data,"previewMediaId",null===e?null:e.id),this.$set(this.element.data,"previewMedia",e)},onOpenMediaModal:function(){this.mediaModalIsOpen=!0}}}},qqgi:function(e,n,t){}}]);