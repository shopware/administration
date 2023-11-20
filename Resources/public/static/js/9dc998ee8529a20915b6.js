(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[141],{YDOo:function(n,e,i){"use strict";i.r(e);i("ZRrY");var t=i("D03b");e.default={template:'\n{% block sw_cms_page_form %}\n<div\n    v-responsive="{ \'is--compact\': el => el.width <= 1620, timeout: 100 }"\n    class="sw-cms-page-form"\n>\n\n    \n    {% block sw_cms_page_form_content %}\n    <template\n        v-for="section in page.sections"\n        {% if VUE3 %}\n        :key="section.id"\n        {% endif %}\n    >\n\n        \n        {% block sw_cms_page_form_section %}\n        <div\n            {% if VUE2 %}\n            :key="section.id"\n            {% endif %}\n            class="sw-cms-page-form__section"\n        >\n            <div class="sw-cms-page-form__section-actions">\n\n                \n                {% block sw_cms_page_form_section_name_wrapper %}\n                <div class="sw-cms-page-form__section-action sw-cms-page-form__section-name">\n\n                    \n                    {% block sw_cms_page_form_section_name_icon %}\n                    <sw-icon\n                        name="regular-layout"\n                        size="20"\n                        class="sw-cms-page-form__section-action-icon sw-cms-page-form__section-name-icon"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_page_form__section_name %}\n                    <span class="sw-cms-page-form__section-action-label sw-cms-page-form__section-name-label">\n                        {{ getSectionName(section) }}\n                    </span>\n                    {% endblock %}\n\n                    <div class="sw-cms-page-form__device-actions">\n                        <sw-icon :name="getDeviceActive(\'mobile\', section)" />\n\n                        <sw-icon :name="getDeviceActive(\'tablet\', section)" />\n\n                        <sw-icon :name="getDeviceActive(\'desktop\', section)" />\n                    </div>\n                </div>\n                {% endblock %}\n            </div>\n\n            \n            {% block sw_cms_page_form_section_empty_state_block %}\n            <sw-card\n                v-if="section.blocks.length === 0"\n                position-identifier="sw-cms-page-form-empty"\n                class="sw-cms-page-form__block-card is--empty"\n            >\n\n                \n                {% block sw_cms_page_form_section_empty_state_block_text %}\n                <p class="sw-cms-page-form__empty-state-text">\n                    {{ $tc(\'sw-cms.section.sectionEmptyState\') }}\n                </p>\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n\n            <template\n                v-for="(block, index) in section.blocks"\n                v-else\n                {% if VUE3 %}\n                :key="block.id"\n                {% endif %}\n            >\n\n                \n                {% block sw_cms_page_form_section_type_label_wrapper %}\n                <div\n                    v-if="displaySectionType(block)"\n                    {% if VUE2 %}\n                    :key="index"\n                    {% endif %}\n                    class="sw-cms-page-form__section-type"\n                >\n\n                    \n                    {% block sw_cms_page_form_section_type_label %}\n                    <div class="sw-cms-page-form__section-type-label">\n\n                        \n                        {% block sw_cms_page_form_section_type_label_icon %}\n                        <sw-icon\n                            v-if="block.sectionPosition !== \'main\'"\n                            size="20"\n                            name="default-sidebar-align-left"\n                            class="sw-cms-page-form__section-type-icon"\n                        />\n\n                        <sw-icon\n                            v-else\n                            size="20"\n                            name="default-sidebar-align-right"\n                            class="sw-cms-page-form__section-type-icon"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_page_form_section_type %}\n                        <span class="sw-cms-page-form__section-type-name">\n                            {{ getSectionPosition(block) }}\n                        </span>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    <hr class="sw-cms-page-form__section-divider">\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_cms_page_form_card %}\n                <sw-card\n                    {% if VUE2 %}\n                    :key="block.id"\n                    {% endif %}\n                    position-identifier="sw-cms-page-form-block"\n                    class="sw-cms-page-form__block-card"\n                    :title="$tc(getBlockTitle(block))"\n                >\n                    <template #header-right>\n                        <div class="sw-cms-page-form__block-device-actions">\n                            <sw-icon :name="getDeviceActive(\'mobile\', section, block)" />\n\n                            <sw-icon :name="getDeviceActive(\'tablet\', section, block)" />\n\n                            <sw-icon :name="getDeviceActive(\'desktop\', section, block)" />\n                        </div>\n                    </template>\n\n                    \n                    {% block sw_cms_page_form_card_content %}\n                    <div\n                        v-for="(element, blockIndex) in block.slots"\n                        :key="blockIndex"\n                        class="sw-cms-page-form__element-config"\n                    >\n\n                        <template v-if="displayNotification(section, block)">\n                            <sw-alert variant="info">\n                                {{ $tc(\'sw-cms.blocks.blockDisableState\') }}\n                            </sw-alert>\n                        </template>\n\n                        \n                        {% block sw_cms_page_form_element_config %}\n                        <component\n                            :is="cmsElements[element.type].configComponent"\n                            :element="element"\n                            @element-update="elementUpdate"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n            </template>\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["cmsService"],props:{page:{type:Object,required:!0},elementUpdate:{type:Function,required:!1,default:function(){}}},computed:{cmsBlocks:function(){return this.cmsService.getCmsBlockRegistry()},cmsElements:function(){return this.cmsService.getCmsElementRegistry()},slotPositions:function(){return t.a.SLOT_POSITIONS}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var n=this;this.page.sections.forEach((function(e){e.blocks.forEach((function(e){e.slots.sort((function(e,i){var t,s;return(null!==(t=n.slotPositions[e.slot])&&void 0!==t?t:n.slotPositions.default)-(null!==(s=n.slotPositions[i.slot])&&void 0!==s?s:n.slotPositions.default)})),e.visibility||(e.visibility={mobile:!0,tablet:!0,desktop:!0})})),e.visibility||(e.visibility={mobile:!0,tablet:!0,desktop:!0})}))},getBlockTitle:function(n){return"string"==typeof n.name&&0!==n.name.length?n.name:void 0!==this.cmsBlocks[n.type]?this.cmsBlocks[n.type].label:""},displaySectionType:function(n){var e=this.page.sections.find((function(e){return e.id===n.sectionId})).blocks;return 0!==e.filter((function(e){return e.sectionPosition!==n.sectionPosition})).length&&e.filter((function(e){return e.sectionPosition===n.sectionPosition})).reduce((function(n,e){return e.position<n.position?e:n}),n).id===n.id},getSectionName:function(n){return n.name?n.name:"sidebar"===n.type?this.$tc("sw-cms.section.isSidebar"):this.$tc("sw-cms.section.isDefault")},getSectionPosition:function(n){return"main"===n.sectionPosition?this.$tc("sw-cms.section.positionRight"):this.$tc("sw-cms.section.positionLeft")},getDeviceActive:function(n,e){var i,t,s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=o?(null==e||null===(i=e.visibility)||void 0===i?void 0:i[n])&&(null==o||null===(t=o.visibility)||void 0===t?void 0:t[n]):null==e||null===(s=e.visibility)||void 0===s?void 0:s[n];return c?"regular-".concat(n):"regular-".concat(n,"-slash")},displayNotification:function(n,e){var i=!(Object.values(null==n?void 0:n.visibility).indexOf(!0)>-1),t=!(Object.values(null==e?void 0:e.visibility).indexOf(!0)>-1);return i||t}}}},ZRrY:function(n,e,i){var t=i("ltCb");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,i("P8hj").default)("c54e80b2",t,!0,{})},ltCb:function(n,e,i){}}]);
//# sourceMappingURL=9dc998ee8529a20915b6.js.map