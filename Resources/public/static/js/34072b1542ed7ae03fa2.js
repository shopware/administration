(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[62307],{461684:function(){},862307:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}}),t(945154);var i={template:'\n{% block sw_media_display_options %}\n<div class="sw-media-display-options">\n    \n    {% block sw_media_display_options_presentation %}\n    <sw-select-field\n        v-if="!hidePresentation"\n        name="presentation"\n        size="small"\n        aside\n        :label="$tc(\'sw-media.presentation.labelPresentation\')"\n        :value="presentation"\n        @update:value="onPresentationChanged"\n    >\n\n        \n        {% block sw_media_display_options_presentations_options %}\n        <option\n            v-for="previewType in previewOptions"\n            :key="previewType.value"\n            :value="previewType.value"\n        >\n            {{ previewType.name }}\n        </option>\n\n        <slot name="additional-preview-options"></slot>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_media_display_options_sorting %}\n    <sw-select-field\n        name="sortType"\n        size="small"\n        aside\n        :label="$tc(\'sw-media.sorting.labelSort\')"\n        :value="sortingConCat"\n        @update:value="onSortingChanged"\n    >\n\n        \n        {% block sw_media_display_options_sorting_options %}\n        <option\n            v-for="sortOption in sortOptions"\n            :key="sortOption.value"\n            :value="sortOption.value"\n        >\n            {{ sortOption.name }}\n        </option>\n\n        <slot name="additional-sorting"></slot>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["media-sorting-change","media-presentation-change"],props:{presentation:{type:String,required:!1,default:"medium-preview",validValues:["small-preview","medium-preview","large-preview","list-preview"],validator(e){return["small-preview","medium-preview","large-preview","list-preview"].includes(e)}},sorting:{type:Object,required:!1,default:()=>({sortBy:"createdAt",sortDirection:"asc"})},hidePresentation:{type:Boolean,required:!1,default:!1}},computed:{sortingConCat(){return`${this.sorting.sortBy}:${this.sorting.sortDirection}`},sortOptions(){return[{value:"createdAt:asc",name:this.$tc("sw-media.sorting.labelSortByCreatedAsc")},{value:"createdAt:desc",name:this.$tc("sw-media.sorting.labelSortByCreatedDsc")},{value:"fileName:asc",name:this.$tc("sw-media.sorting.labelSortByNameAsc")},{value:"fileName:desc",name:this.$tc("sw-media.sorting.labelSortByNameDsc")},{value:"fileSize:asc",name:this.$tc("sw-media.sorting.labelSortBySizeAsc")},{value:"fileSize:desc",name:this.$tc("sw-media.sorting.labelSortBySizeDsc")}]},previewOptions(){return[{value:"small-preview",name:this.$tc("sw-media.presentation.labelPresentationSmall")},{value:"medium-preview",name:this.$tc("sw-media.presentation.labelPresentationMedium")},{value:"large-preview",name:this.$tc("sw-media.presentation.labelPresentationLarge")},{value:"list-preview",name:this.$tc("sw-media.presentation.labelPresentationList")}]}},methods:{onSortingChanged(e){let n=e.split(":");this.$emit("media-sorting-change",{sortBy:n[0],sortDirection:n[1]})},onPresentationChanged(e){this.$emit("media-presentation-change",e)}}}},945154:function(e,n,t){var i=t(461684);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(745346).Z("3b4edd7d",i,!0,{})}}]);