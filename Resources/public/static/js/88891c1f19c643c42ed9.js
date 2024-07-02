(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[58893],{190606:function(){},758893:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return i}}),s(735457);var t=s(796701),i={template:'\n{% block sw_cms_page_form %}\n<div\n    v-responsive="{ \'is--compact\': el => el.width <= 1620, timeout: 100 }"\n    class="sw-cms-page-form"\n>\n\n    \n    {% block sw_cms_page_form_content %}\n    <template\n        v-for="section in page.sections"\n        :key="section.id"\n    >\n\n        \n        {% block sw_cms_page_form_section %}\n        <div\n            class="sw-cms-page-form__section"\n        >\n            <div class="sw-cms-page-form__section-actions">\n\n                \n                {% block sw_cms_page_form_section_name_wrapper %}\n                <div class="sw-cms-page-form__section-action sw-cms-page-form__section-name">\n\n                    \n                    {% block sw_cms_page_form_section_name_icon %}\n                    <sw-icon\n                        name="regular-layout"\n                        size="20"\n                        class="sw-cms-page-form__section-action-icon sw-cms-page-form__section-name-icon"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_page_form__section_name %}\n                    <span class="sw-cms-page-form__section-action-label sw-cms-page-form__section-name-label">\n                        {{ getSectionName(section) }}\n                    </span>\n                    {% endblock %}\n\n                    <div class="sw-cms-page-form__device-actions">\n                        <sw-icon :name="getDeviceActive(\'mobile\', section)" />\n\n                        <sw-icon :name="getDeviceActive(\'tablet\', section)" />\n\n                        <sw-icon :name="getDeviceActive(\'desktop\', section)" />\n                    </div>\n                </div>\n                {% endblock %}\n            </div>\n\n            \n            {% block sw_cms_page_form_section_empty_state_block %}\n            <sw-card\n                v-if="section.blocks.length === 0"\n                position-identifier="sw-cms-page-form-empty"\n                class="sw-cms-page-form__block-card is--empty"\n            >\n\n                \n                {% block sw_cms_page_form_section_empty_state_block_text %}\n                <p class="sw-cms-page-form__empty-state-text">\n                    {{ $tc(\'sw-cms.section.sectionEmptyState\') }}\n                </p>\n                {% endblock %}\n            </sw-card>\n            {% endblock %}\n\n            <template\n                v-for="(block, index) in section.blocks"\n                v-else\n                :key="block.id"\n            >\n\n                \n                {% block sw_cms_page_form_section_type_label_wrapper %}\n                <div\n                    v-if="displaySectionType(block)"\n                    class="sw-cms-page-form__section-type"\n                >\n\n                    \n                    {% block sw_cms_page_form_section_type_label %}\n                    <div class="sw-cms-page-form__section-type-label">\n\n                        \n                        {% block sw_cms_page_form_section_type_label_icon %}\n                        <sw-icon\n                            v-if="block.sectionPosition !== \'main\'"\n                            size="20"\n                            name="regular-align-left-xs"\n                            class="sw-cms-page-form__section-type-icon"\n                        />\n\n                        <sw-icon\n                            v-else\n                            size="20"\n                            name="regular-align-right-xs"\n                            class="sw-cms-page-form__section-type-icon"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_page_form_section_type %}\n                        <span class="sw-cms-page-form__section-type-name">\n                            {{ getSectionPosition(block) }}\n                        </span>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    <hr class="sw-cms-page-form__section-divider">\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_cms_page_form_card %}\n                <sw-card\n                    position-identifier="sw-cms-page-form-block"\n                    class="sw-cms-page-form__block-card"\n                    :title="$tc(getBlockTitle(block))"\n                >\n                    <template #header-right>\n                        <div class="sw-cms-page-form__block-device-actions">\n                            <sw-icon :name="getDeviceActive(\'mobile\', section, block)" />\n\n                            <sw-icon :name="getDeviceActive(\'tablet\', section, block)" />\n\n                            <sw-icon :name="getDeviceActive(\'desktop\', section, block)" />\n                        </div>\n                    </template>\n\n                    \n                    {% block sw_cms_page_form_card_content %}\n                    <div\n                        v-for="(element, blockIndex) in block.slots"\n                        :key="blockIndex"\n                        class="sw-cms-page-form__element-config"\n                    >\n\n                        <template v-if="displayNotification(section, block)">\n                            <sw-alert variant="info">\n                                {{ $tc(\'sw-cms.blocks.blockDisableState\') }}\n                            </sw-alert>\n                        </template>\n\n                        \n                        {% block sw_cms_page_form_element_config %}\n                        <component\n                            :is="cmsElements[element.type].configComponent"\n                            :element="element"\n                            :element-data="cmsElements[element.type]"\n                            @element-update="elementUpdate"\n                        />\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n            </template>\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["cmsService"],props:{page:{type:Object,required:!0},elementUpdate:{type:Function,required:!1,default:()=>{}}},computed:{cmsBlocks(){return this.cmsService.getCmsBlockRegistry()},cmsElements(){return this.cmsService.getCmsElementRegistry()},slotPositions(){return t.Z.SLOT_POSITIONS}},created(){this.createdComponent()},methods:{createdComponent(){this.page.sections.forEach(e=>{e.blocks.forEach(e=>{e.slots.sort((e,n)=>(this.slotPositions[e.slot]??this.slotPositions.default)-(this.slotPositions[n.slot]??this.slotPositions.default)),e.visibility||(e.visibility={mobile:!0,tablet:!0,desktop:!0})}),e.visibility||(e.visibility={mobile:!0,tablet:!0,desktop:!0})})},getBlockTitle(e){return"string"==typeof e.name&&0!==e.name.length?e.name:void 0!==this.cmsBlocks[e.type]?this.cmsBlocks[e.type].label:""},displaySectionType(e){let n=this.page.sections.find(n=>n.id===e.sectionId).blocks;return 0!==n.filter(n=>n.sectionPosition!==e.sectionPosition).length&&n.filter(n=>n.sectionPosition===e.sectionPosition).reduce((e,n)=>n.position<e.position?n:e,e).id===e.id},getSectionName(e){return e.name?e.name:"sidebar"===e.type?this.$tc("sw-cms.section.isSidebar"):this.$tc("sw-cms.section.isDefault")},getSectionPosition(e){return"main"===e.sectionPosition?this.$tc("sw-cms.section.positionRight"):this.$tc("sw-cms.section.positionLeft")},getDeviceActive(e,n,s=null){return(s?n?.visibility?.[e]&&s?.visibility?.[e]:n?.visibility?.[e])?`regular-${e}`:`regular-${e}-slash`},displayNotification(e,n){let s=!(Object.values(e?.visibility).indexOf(!0)>-1),t=!(Object.values(n?.visibility).indexOf(!0)>-1);return s||t}}}},735457:function(e,n,s){var t=s(190606);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),s(745346).Z("68783391",t,!0,{})}}]);