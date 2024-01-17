(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[303],{PtVc:function(e,n,t){},QqPP:function(e,n,t){var i=t("PtVc");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("P8hj").default)("94016250",i,!0,{})},eVXR:function(e,n,t){"use strict";t.r(n);t("QqPP"),n.default={template:'\n{% block sw_media_display_options %}\n<div class="sw-media-display-options">\n    \n    {% block sw_media_display_options_presentation %}\n    <sw-select-field\n        v-if="!hidePresentation"\n        name="presentation"\n        size="small"\n        aside\n        :label="$tc(\'sw-media.presentation.labelPresentation\')"\n        :value="presentation"\n        {% if VUE3 %}\n        @update:value="onPresentationChanged"\n        {% else %}\n        @change="onPresentationChanged"\n        {% endif %}\n    >\n\n        \n        {% block sw_media_display_options_presentations_options %}\n        <option\n            v-for="previewType in previewOptions"\n            :key="previewType.value"\n            :value="previewType.value"\n        >\n            {{ previewType.name }}\n        </option>\n\n        <slot name="additional-preview-options"></slot>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_media_display_options_sorting %}\n    <sw-select-field\n        name="sortType"\n        size="small"\n        aside\n        :label="$tc(\'sw-media.sorting.labelSort\')"\n        :value="sortingConCat"\n        {% if VUE3 %}\n        @update:value="onSortingChanged"\n        {% else %}\n        @change="onSortingChanged"\n        {% endif %}\n    >\n\n        \n        {% block sw_media_display_options_sorting_options %}\n        <option\n            v-for="sortOption in sortOptions"\n            :key="sortOption.value"\n            :value="sortOption.value"\n        >\n            {{ sortOption.name }}\n        </option>\n\n        <slot name="additional-sorting"></slot>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{presentation:{type:String,required:!1,default:"medium-preview",validValues:["small-preview","medium-preview","large-preview","list-preview"],validator:function(e){return["small-preview","medium-preview","large-preview","list-preview"].includes(e)}},sorting:{type:Object,required:!1,default:function(){return{sortBy:"createdAt",sortDirection:"asc"}}},hidePresentation:{type:Boolean,required:!1,default:!1}},computed:{sortingConCat:function(){return"".concat(this.sorting.sortBy,":").concat(this.sorting.sortDirection)},sortOptions:function(){return[{value:"createdAt:asc",name:this.$tc("sw-media.sorting.labelSortByCreatedAsc")},{value:"createdAt:desc",name:this.$tc("sw-media.sorting.labelSortByCreatedDsc")},{value:"fileName:asc",name:this.$tc("sw-media.sorting.labelSortByNameAsc")},{value:"fileName:desc",name:this.$tc("sw-media.sorting.labelSortByNameDsc")},{value:"fileSize:asc",name:this.$tc("sw-media.sorting.labelSortBySizeAsc")},{value:"fileSize:desc",name:this.$tc("sw-media.sorting.labelSortBySizeDsc")}]},previewOptions:function(){return[{value:"small-preview",name:this.$tc("sw-media.presentation.labelPresentationSmall")},{value:"medium-preview",name:this.$tc("sw-media.presentation.labelPresentationMedium")},{value:"large-preview",name:this.$tc("sw-media.presentation.labelPresentationLarge")},{value:"list-preview",name:this.$tc("sw-media.presentation.labelPresentationList")}]}},methods:{onSortingChanged:function(e){var n=e.split(":");this.$emit("media-sorting-change",{sortBy:n[0],sortDirection:n[1]})},onPresentationChanged:function(e){this.$emit("media-presentation-change",e)}}}}}]);