(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[300],{"3Nea":function(e,t,n){var a=n("b/Xh");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("781f3cd6",a,!0,{})},"5wyV":function(e,t,n){"use strict";n.r(t);n("3Nea"),t.default={template:'\n{% block sw_media_tag %}\n<div class="sw-media-tag">\n    <sw-media-collapse\n        :title="$tc(\'global.sw-tag-field.title\')"\n        :expand-on-loading="true"\n    >\n        \n        {% block sw_media_tag_input %}\n        <template #content>\n            <sw-entity-tag-select\n                v-model="media.tags"\n                :disabled="disabled"\n                @change="handleChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],props:{media:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")}},methods:{handleChange:function(){this.mediaRepository.save(this.media)}}}},"b/Xh":function(e,t,n){}}]);
//# sourceMappingURL=cbe29e73bf127bb94ab3.js.map