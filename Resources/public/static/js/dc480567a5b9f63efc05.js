(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[44],{"3Yr5":function(e,i,n){var t=n("zHXt");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,n("P8hj").default)("08899646",t,!0,{})},"9xoA":function(e,i,n){"use strict";n.r(i);var t=n("7yzw"),o=n.n(t),r=n("92Mt"),a=n.n(r),l=(n("3Yr5"),Shopware),s=l.Context,c=l.Filter,u=Shopware.Utils.fileReader;i.default={template:'\n{% block sw_media_preview_v2 %}\n<div\n    v-tooltip.bottom="{ message: mediaName, disabled: hideTooltip }"\n    class="sw-media-preview-v2"\n    :class="mediaPreviewClasses"\n>\n\n    \n    {% block sw_media_preview_v2_no_media %}\n    <template v-if="!source">\n        \n        {% block sw_media_preview_v2_no_media_icon %}\n        <sw-icon\n            name="regular-image"\n            size="16px"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_preview_v2_file_types %}\n    <template v-else>\n        \n        {% block sw_media_preview_v2_file_type_check %}\n        <template v-if="mimeTypeGroup === \'image\'">\n            \n            {% block sw_media_preview_v2_file_type_image %}\n            \n            <img\n                v-if="!imagePreviewFailed"\n                class="sw-media-preview-v2__item"\n                :class="transparencyClass"\n                :src="previewUrl"\n                :alt="alt"\n                :srcset="sourceSet"\n                :sizes="`${width}px`"\n                draggable="false"\n                @click="$emit(\'click\')"\n                @error="showEvent"\n            >\n            <img\n                v-else\n                class="sw-media-preview-v2__item"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n                multicolor\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="isPlayable && mimeTypeGroup === \'video\'">\n            \n            {% block sw_media_preview_v2_file_type_video %}\n            <img\n                v-if="mediaIsPrivate"\n                class="sw-media-preview-v2__item"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            \n            <video\n                :controls="showControls"\n                :autoplay="autoplay"\n                controlsList="nodownload"\n                class="sw-media-preview-v2__item"\n            >\n                <source\n                    :src="previewUrl"\n                    :type="mimeType"\n                >\n                {{ $tc(\'global.sw-media-preview-v2.fallbackVideoTagSupport\') }}\n            </video>\n            <button\n                v-if="!showControls && !mediaIsPrivate"\n                class="sw-media-preview-v2__play-button"\n                @click="onPlayClick"\n            >\n                <sw-icon\n                    class="sw-media-preview-v2__play-icon"\n                    name="multicolor-action-play"\n                    multicolor\n                />\n            </button>\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n                multicolor\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="isPlayable && mimeTypeGroup === \'audio\'">\n            \n            {% block sw_media_preview_v2_file_type_audio %}\n            <img\n                class="sw-media-preview-v2__item"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            \n            <audio\n                :controls="showControls"\n                :autoplay="autoplay"\n                controlsList="nodownload"\n                class="sw-media-preview-v2__item sw-media-preview-v2__item--audio"\n            >\n                <source\n                    :src="previewUrl"\n                    :type="mimeType"\n                >\n                {{ $tc(\'global.sw-media-preview-v2.fallbackAudioTagSupport\') }}\n            </audio>\n            <button\n                v-if="!showControls"\n                class="sw-media-preview-v2__play-button"\n                @click="onPlayClick"\n            >\n                <sw-icon\n                    class="sw-media-preview-v2__play-icon"\n                    name="multicolor-action-play"\n                    multicolor\n                />\n            </button>\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n                multicolor\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="isUrl && !urlPreviewFailed">\n            <img\n                :src="previewUrl"\n                class="sw-media-preview-v2__item"\n                draggable="false"\n                :alt="mimeType"\n                @error="removeUrlPreview"\n            >\n        </template>\n\n        <template v-else>\n            \n            {% block sw_media_preview_v2_file_type_placeholder %}\n            <img\n                class="sw-media-preview-v2__item sw-media-preview-v2__placeholder"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            {% endblock %}\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n                multicolor\n            />\n        </template>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],playableVideoFormats:["video/mp4","video/ogg","video/webm"],playableAudioFormats:["audio/mp3","audio/mpeg","audio/ogg","audio/wav"],placeholderThumbnailsBasePath:"/administration/static/img/media-preview/",placeHolderThumbnails:{application:{"adobe.illustrator":"icons-multicolor-file-thumbnail-ai",illustrator:"icons-multicolor-file-thumbnail-ai",postscript:"icons-multicolor-file-thumbnail-ai",msword:"icons-multicolor-file-thumbnail-doc","vnd.openxmlformats-officedocument.wordprocessingml.document":"icons-multicolor-file-thumbnail-doc",pdf:"icons-multicolor-file-thumbnail-pdf","vnd.ms-excel":"icons-multicolor-file-thumbnail-xls","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"icons-multicolor-file-thumbnail-xls","vnd.ms-powerpoint":"icons-multicolor-file-thumbnail-ppt","vnd.openxmlformats-officedocument.presentationml.presentation":"icons-multicolor-file-thumbnail-ppt"},video:{"x-msvideo":"icons-multicolor-file-thumbnail-avi",quicktime:"icons-multicolor-file-thumbnail-mov",mp4:"icons-multicolor-file-thumbnail-mp4"},text:{csv:"icons-multicolor-file-thumbnail-csv",plain:"icons-multicolor-file-thumbnail-csv"},image:{gif:"icons-multicolor-file-thumbnail-gif",jpeg:"icons-multicolor-file-thumbnail-jpg","svg+xml":"icons-multicolor-file-thumbnail-svg"}},props:{source:{required:!0},showControls:{type:Boolean,required:!1,default:!1},autoplay:{type:Boolean,required:!1,default:!1},transparency:{type:Boolean,required:!1,default:!0},useThumbnails:{type:Boolean,required:!1,default:!0},hideTooltip:{type:Boolean,required:!1,default:!0},mediaIsPrivate:{type:Boolean,required:!1,default:!1}},data:function(){return{trueSource:null,width:0,dataUrl:"",urlPreviewFailed:!1,imagePreviewFailed:!1}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")},mediaPreviewClasses:function(){return{"is--icon":this.isIcon,"is--no-media":!this.source}},transparencyClass:function(){return{"shows--transparency":this.canBeTransparent}},canBeTransparent:function(){return!!this.transparency&&(this.isIcon||"image"===this.mimeTypeGroup)},mimeType:function(){return this.trueSource?this.trueSource instanceof File?this.trueSource.type:this.trueSource instanceof URL?"application/octet-stream":this.trueSource.mimeType:""},mimeTypeGroup:function(){return this.mimeType?this.mimeType.split("/")[0]:""},isPlayable:function(){return!!this.$options.playableVideoFormats.includes(this.mimeType)||!!this.$options.playableAudioFormats.includes(this.mimeType)},isIcon:function(){return/.*svg.*/.test(this.mimeType)},placeholderIcon:function(){if(!this.mimeType)return"icons-multicolor-file-thumbnail-broken";var e=this.$options.placeHolderThumbnails[this.mimeTypeGroup];if(e){var i=e["".concat(this.mimeType.split("/")[1])];if(i)return i}return"icons-multicolor-file-thumbnail-normal"},placeholderIconPath:function(){return"".concat(this.$options.placeholderThumbnailsBasePath).concat(this.placeholderIcon,".svg")},lockIsVisible:function(){return this.width>40},previewUrl:function(){return this.isFile?(this.getDataUrlFromFile(),this.dataUrl):this.isUrl?this.trueSource.href:this.trueSource.url},isUrl:function(){return this.trueSource instanceof URL},isFile:function(){return this.trueSource instanceof File},alt:function(){return this.trueSource.alt?this.trueSource.alt:this.trueSource.fileName},mediaName:function(){return this.trueSource?this.mediaNameFilter(this.trueSource,this.trueSource.fileName):this.$tc("global.sw-media-preview-v2.textNoMedia")},mediaNameFilter:function(){return c.getByName("mediaName")},assetFilter:function(){return c.getByName("asset")},sourceSet:function(){if(this.isFile||this.isUrl)return"";if(0===this.trueSource.thumbnails.length)return"";var e=[];return this.trueSource.thumbnails.forEach((function(i){var n=encodeURI(i.url);e.push("".concat(n," ").concat(i.width,"w"))})),e.join(", ")}},watch:{source:function(){this.urlPreviewFailed=!1,this.imagePreviewFailed=!1,this.fetchSourceIfNecessary()}},created:function(){this.createdComponent()},mounted:function(){this.mountedComponent()},methods:{createdComponent:function(){this.fetchSourceIfNecessary()},mountedComponent:function(){this.width=this.$el.offsetWidth},fetchSourceIfNecessary:function(){var e=this;return o()(a.a.mark((function i(){return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(e.source){i.next=2;break}return i.abrupt("return");case 2:if("string"!=typeof e.source){i.next=8;break}return i.next=5,e.mediaRepository.get(e.source,s.api);case 5:e.trueSource=i.sent,i.next=10;break;case 8:e.trueSource=e.source,e.source[0]&&(e.trueSource=e.source[0]);case 10:case"end":return i.stop()}}),i)})))()},onPlayClick:function(e){e.shiftKey||e.ctrlKey||(e.stopPropagation(),this.$emit("media-preview-play",{originalDomEvent:e,item:this.trueSource}))},getDataUrlFromFile:function(){var e=this;return o()(a.a.mark((function i(){return a.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if("image"===e.mimeTypeGroup){i.next=2;break}return i.abrupt("return");case 2:return i.next=4,u.readAsDataURL(e.trueSource);case 4:e.dataUrl=i.sent;case 5:case"end":return i.stop()}}),i)})))()},removeUrlPreview:function(){this.urlPreviewFailed=!0},showEvent:function(){this.isFile||(this.imagePreviewFailed=!0)}}}},zHXt:function(e,i,n){}}]);