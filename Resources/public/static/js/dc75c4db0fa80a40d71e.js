(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[153],{URzD:function(s,e,n){"use strict";n.r(e);n("loS9"),e.default={template:'\n{% block sw_cms_stage_section_selection %}\n<div class="sw-cms-stage-section-selection">\n\n    \n    {% block sw_cms_stage_section_selection__sidebar %}\n    \n    <div\n        class="sw-cms-stage-section-selection__sidebar"\n        @click="selectSection(\'sidebar\')"\n    >\n        <div class="sw-cms-stage-section-selection__sidebar-preview">\n            <div class="sw-cms-stage-section-selection__sidebar-preview-inner">\n                <div class="sw-cms-stage-section-selection__sidebar-preview-placeholder"></div>\n                <div class="sw-cms-stage-section-selection__sidebar-preview-placeholder"></div>\n            </div>\n        </div>\n        {{ $tc(\'sw-cms.section.sidebar\') }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_stage_section_selection__fullwidth %}\n    \n    <div\n        class="sw-cms-stage-section-selection__default"\n        @click="selectSection(\'default\')"\n    >\n        <div class="sw-cms-stage-section-selection__default-preview">\n            <div class="sw-cms-stage-section-selection__default-preview-inner"></div>\n        </div>\n        {{ $tc(\'sw-cms.section.fullWidth\') }}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',methods:{selectSection:function(s){this.$emit("section-select",s)}}}},loS9:function(s,e,n){var i=n("sFIr");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);(0,n("P8hj").default)("3217465a",i,!0,{})},sFIr:function(s,e,n){}}]);