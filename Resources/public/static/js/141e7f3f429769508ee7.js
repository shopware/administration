(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[149],{Mesm:function(e,n,l){"use strict";l.r(n);l("eB/E"),n.default={template:'\n{% block sw_cms_sidebar_navigator_element %}\n<div class="sw-cms-sidebar__navigator-element">\n\n    \n    {% block sw_cms_sidebar_sidebar_navigator_element_label %}\n    <div class="navigator-element__label">\n        {{ block.name ? block.name : block.type }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_sidebar_navigator_element_duplicate %}\n    \n    <div\n        v-if="duplicable && removable"\n        class="navigator-element__action-duplicate"\n        @click="onBlockDuplicate"\n    >\n        <sw-icon\n            name="regular-duplicate"\n            size="16"\n        />\n    </div>\n    <div\n        v-else\n        class="navigator-element__action-duplicate"\n    ></div>\n    {% endblock %}\n\n    \n    {% block sw_cms_sidebar_sidebar_navigator_element_delete %}\n    \n    <div\n        v-if="removable"\n        class="navigator-element__action-delete"\n        @click="onBlockDelete"\n    >\n        <sw-icon\n            name="regular-trash"\n            size="16"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{block:{type:Object,required:!0},removable:{type:Boolean,required:!1,default:!1},duplicable:{type:Boolean,required:!1,default:!0}},methods:{onBlockDuplicate:function(){this.$emit("block-duplicate",this.block)},onBlockDelete:function(){this.$emit("block-delete",this.block)}}}},YIo2:function(e,n,l){},"eB/E":function(e,n,l){var i=l("YIo2");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,l("P8hj").default)("27275256",i,!0,{})}}]);