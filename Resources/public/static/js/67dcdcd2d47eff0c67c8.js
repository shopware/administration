(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[300],{IAhZ:function(e,t,n){"use strict";n.r(t);n("m3yE"),t.default={template:'\n{% block sw_media_tag %}\n<div class="sw-media-tag">\n    <sw-media-collapse\n        :title="$tc(\'global.sw-tag-field.title\')"\n        :expand-on-loading="true"\n    >\n        \n        {% block sw_media_tag_input %}\n        <template #content>\n            <sw-entity-tag-select\n                v-model="media.tags"\n                :disabled="disabled"\n                @change="handleChange"\n            />\n        </template>\n        {% endblock %}\n    </sw-media-collapse>\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],props:{media:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{mediaRepository:function(){return this.repositoryFactory.create("media")}},methods:{handleChange:function(){this.mediaRepository.save(this.media)}}}},dlz7:function(e,t,n){},m3yE:function(e,t,n){var a=n("dlz7");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("ydqr").default)("58d6dcd4",a,!0,{})}}]);