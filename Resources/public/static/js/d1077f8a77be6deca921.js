(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[132],{"08Eh":function(l,n,c){var e=c("BWKM");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[l.i,e,""]]),e.locals&&(l.exports=e.locals);(0,c("ydqr").default)("66c45682",e,!0,{})},"5cdD":function(l,n,c){"use strict";c.r(n);c("08Eh"),n.default={template:'\n{% block sw_cms_block_layout_config %}\n<div class="sw-cms-block-layout-config">\n    \n    {% block sw_cms_block_layout_config_css_class %}\n    <sw-text-field\n        v-model="block.cssClass"\n        :label="$tc(\'sw-cms.detail.label.cssClassField\')"\n        :help-text="$tc(\'sw-cms.detail.helpText.cssClassField\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_block_layout_config_top_margin_field %}\n    <sw-text-field\n        v-model="block.marginTop"\n        :label="$tc(\'sw-cms.detail.label.blockTopMarginField\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_block_layout_config_bottom_margin_field %}\n    <sw-text-field\n        v-model="block.marginBottom"\n        :label="$tc(\'sw-cms.detail.label.blockBottomMarginField\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_block_layout_config_left_margin_field %}\n    <sw-text-field\n        v-model="block.marginLeft"\n        :label="$tc(\'sw-cms.detail.label.blockLeftMarginField\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_block_layout_config_right_margin_field %}\n    <sw-text-field\n        v-model="block.marginRight"\n        :label="$tc(\'sw-cms.detail.label.blockRightMarginField\')"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["cmsService"],props:{block:{type:Object,required:!0}}}},BWKM:function(l,n,c){}}]);