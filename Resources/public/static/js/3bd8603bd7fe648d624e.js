(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[51472],{344610:function(){},751472:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return s}}),t(400816);let{Context:l,Filter:n}=Shopware,{fileReader:o}=Shopware.Utils;var s={template:'\n{% block sw_media_preview_v2 %}\n<div\n    v-tooltip.bottom="{ message: mediaName, disabled: hideTooltip }"\n    class="sw-media-preview-v2"\n    :class="mediaPreviewClasses"\n>\n    \n    {% block sw_media_preview_v2_no_media %}\n    <template v-if="!source">\n        \n        {% block sw_media_preview_v2_no_media_icon %}\n        <sw-icon\n            name="regular-image"\n            size="16px"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_media_preview_v2_file_types %}\n    <template v-else>\n        \n        {% block sw_media_preview_v2_file_type_check %}\n        <template v-if="mimeTypeGroup === \'image\'">\n            \n            {% block sw_media_preview_v2_file_type_image %}\n            \n            <img\n                v-if="!imagePreviewFailed"\n                class="sw-media-preview-v2__item"\n                :class="transparencyClass"\n                :src="previewUrl"\n                :alt="alt"\n                :srcset="sourceSet"\n                :sizes="`${width}px`"\n                draggable="false"\n                @click="$emit(\'click\')"\n                @error="showEvent"\n            >\n            <img\n                v-else\n                class="sw-media-preview-v2__item sw-media-preview-v2__placeholder"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="isPlayable && mimeTypeGroup === \'video\'">\n            \n            {% block sw_media_preview_v2_file_type_video %}\n            <img\n                v-if="mediaIsPrivate"\n                class="sw-media-preview-v2__item sw-media-preview-v2__placeholder"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            \n            <video\n                :controls="showControls"\n                :autoplay="autoplay"\n                controlsList="nodownload"\n                class="sw-media-preview-v2__item"\n            >\n                <source\n                    :src="previewUrl"\n                    :type="mimeType"\n                >\n                {{ $tc(\'global.sw-media-preview-v2.fallbackVideoTagSupport\') }}\n            </video>\n            <button\n                v-if="!showControls && !mediaIsPrivate"\n                class="sw-media-preview-v2__play-button"\n                @click="onPlayClick"\n            >\n                <sw-icon\n                    class="sw-media-preview-v2__play-icon"\n                    name="regular-play"\n                />\n            </button>\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="isPlayable && mimeTypeGroup === \'audio\'">\n            \n            {% block sw_media_preview_v2_file_type_audio %}\n            <img\n                class="sw-media-preview-v2__item sw-media-preview-v2__placeholder"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            \n            <audio\n                :controls="showControls"\n                :autoplay="autoplay"\n                controlsList="nodownload"\n                class="sw-media-preview-v2__item sw-media-preview-v2__item--audio"\n            >\n                <source\n                    :src="previewUrl"\n                    :type="mimeType"\n                >\n                {{ $tc(\'global.sw-media-preview-v2.fallbackAudioTagSupport\') }}\n            </audio>\n            <button\n                v-if="!showControls"\n                class="sw-media-preview-v2__play-button"\n                @click="onPlayClick"\n            >\n                <sw-icon\n                    class="sw-media-preview-v2__play-icon"\n                    name="regular-play"\n                />\n            </button>\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n            />\n            {% endblock %}\n        </template>\n\n        <template v-else-if="(isUrl || isRelativePath) && !urlPreviewFailed">\n            <img\n                :src="previewUrl"\n                class="sw-media-preview-v2__item"\n                draggable="false"\n                :alt="mimeType"\n                @error="removeUrlPreview"\n            >\n        </template>\n\n        <template v-else>\n            \n            {% block sw_media_preview_v2_file_type_placeholder %}\n            <img\n                class="sw-media-preview-v2__item sw-media-preview-v2__placeholder"\n                :src="assetFilter(placeholderIconPath)"\n                :alt="mimeType"\n            >\n            {% endblock %}\n            <sw-icon\n                v-if="mediaIsPrivate && lockIsVisible"\n                class="sw-media-preview-v2__locked-icon sw-icon--small"\n                name="regular-lock"\n            />\n        </template>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","feature"],playableVideoFormats:["video/mp4","video/ogg","video/webm"],playableAudioFormats:["audio/mp3","audio/mpeg","audio/ogg","audio/wav"],placeholderThumbnailsBasePath:"/administration/static/img/media-preview/",placeHolderThumbnails:{application:{"adobe.illustrator":"icons-multicolor-file-thumbnail-ai",illustrator:"icons-multicolor-file-thumbnail-ai",postscript:"icons-multicolor-file-thumbnail-ai",msword:"icons-multicolor-file-thumbnail-doc","vnd.openxmlformats-officedocument.wordprocessingml.document":"icons-multicolor-file-thumbnail-doc",pdf:"icons-multicolor-file-thumbnail-pdf","vnd.ms-excel":"icons-multicolor-file-thumbnail-xls","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"icons-multicolor-file-thumbnail-xls","vnd.ms-powerpoint":"icons-multicolor-file-thumbnail-ppt","vnd.openxmlformats-officedocument.presentationml.presentation":"icons-multicolor-file-thumbnail-ppt",glb:"icons-multicolor-file-thumbnail-glb","octet-stream":"icons-multicolor-file-thumbnail-glb"},video:{"x-msvideo":"icons-multicolor-file-thumbnail-avi",quicktime:"icons-multicolor-file-thumbnail-mov",mp4:"icons-multicolor-file-thumbnail-mp4"},text:{csv:"icons-multicolor-file-thumbnail-csv",plain:"icons-multicolor-file-thumbnail-csv"},image:{gif:"icons-multicolor-file-thumbnail-gif",jpeg:"icons-multicolor-file-thumbnail-jpg","svg+xml":"icons-multicolor-file-thumbnail-svg"},model:{"gltf-binary":"icons-multicolor-file-thumbnail-glb"}},props:{source:{required:!0},showControls:{type:Boolean,required:!1,default:!1},autoplay:{type:Boolean,required:!1,default:!1},transparency:{type:Boolean,required:!1,default:!0},useThumbnails:{type:Boolean,required:!1,default:!0},hideTooltip:{type:Boolean,required:!1,default:!0},mediaIsPrivate:{type:Boolean,required:!1,default:!1}},data(){return{trueSource:null,width:0,dataUrl:"",urlPreviewFailed:!1,imagePreviewFailed:!1}},computed:{mediaRepository(){return this.repositoryFactory.create("media")},mediaPreviewClasses(){return{"is--icon":this.isIcon,"is--no-media":!this.source}},transparencyClass(){return{"shows--transparency":this.canBeTransparent}},canBeTransparent(){return!!this.transparency&&(this.isIcon||"image"===this.mimeTypeGroup)},mimeType(){return this.trueSource?this.trueSource instanceof File?this.trueSource.type:this.trueSource instanceof URL?"application/octet-stream":this.trueSource.mimeType:""},mimeTypeGroup(){return this.mimeType?this.mimeType.split("/")[0]:""},isPlayable(){return!!this.$options.playableVideoFormats.includes(this.mimeType)||this.$options.playableAudioFormats.includes(this.mimeType)},isIcon(){return/.*svg.*/.test(this.mimeType)},placeholderIcon(){if(!this.mimeType)return"icons-multicolor-file-thumbnail-broken";let e=this.$options.placeHolderThumbnails[this.mimeTypeGroup];if(e){let i=e[`${this.mimeType.split("/")[1]}`];if(i)return i}return"icons-multicolor-file-thumbnail-normal"},placeholderIconPath(){return`${this.$options.placeholderThumbnailsBasePath}${this.placeholderIcon}.svg`},lockIsVisible(){return this.width>40},previewUrl(){return this.isFile?(this.getDataUrlFromFile(),this.dataUrl):this.isUrl?this.trueSource.href:this.isRelativePath?this.trueSource:this.trueSource.url},isUrl(){return this.trueSource instanceof URL},isFile(){return this.trueSource instanceof File},isRelativePath(){return"string"==typeof this.trueSource},alt(){return this.trueSource.alt?this.trueSource.alt:this.trueSource.fileName},mediaName(){return this.trueSource?this.mediaNameFilter(this.trueSource,this.trueSource.fileName):this.$tc("global.sw-media-preview-v2.textNoMedia")},mediaNameFilter(){return n.getByName("mediaName")},assetFilter(){return n.getByName("asset")},sourceSet(){if(this.isFile||this.isUrl||0===this.trueSource.thumbnails.length)return"";let e=[];return this.trueSource.thumbnails.forEach(i=>{let t=encodeURI(i.url);e.push(`${t} ${i.width}w`)}),e.join(", ")}},watch:{source(){this.urlPreviewFailed=!1,this.imagePreviewFailed=!1,this.fetchSourceIfNecessary()}},created(){this.createdComponent()},mounted(){this.mountedComponent()},methods:{createdComponent(){this.fetchSourceIfNecessary()},mountedComponent(){this.width=this.$el.offsetWidth},async fetchSourceIfNecessary(){if(this.source){if("string"!=typeof this.source){this.trueSource=this.source[0]??this.source;return}try{this.trueSource=await this.mediaRepository.get(this.source,l.api)}catch{this.trueSource=this.source}}},onPlayClick(e){e.shiftKey||e.ctrlKey||(e.stopPropagation(),this.$emit("media-preview-play",{originalDomEvent:e,item:this.trueSource}))},async getDataUrlFromFile(){"image"===this.mimeTypeGroup&&(this.dataUrl=await o.readAsDataURL(this.trueSource))},removeUrlPreview(){this.urlPreviewFailed=!0},showEvent(){this.isFile||(this.imagePreviewFailed=!0)}}}},400816:function(e,i,t){var l=t(344610);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),t(745346).Z("e37ea4a0",l,!0,{})}}]);