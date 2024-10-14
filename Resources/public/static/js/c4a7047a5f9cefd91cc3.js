(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[84777],{334522:function(){},784777:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}}),s(966247);let{Component:t,Mixin:o,Filter:i}=Shopware,{mapPropertyErrors:c}=t.getComponentHelper();var l=Shopware.Component.wrapComponentConfig({template:'\n{% block sw_cms_section %}\n<div\n    class="sw-cms-section"\n    :class="[sectionClasses, customSectionClass, sectionTypeClass]"\n>\n\n    \n    {% block sw_cms_section_actions %}\n    <sw-cms-section-actions\n        :section="section"\n        :disabled="disabled || undefined"\n    />\n    {% endblock %}\n\n    <div\n        class="sw-cms-section__wrapper"\n        :style="sectionStyles"\n    >\n        <sw-cms-visibility-toggle\n            v-if="isVisible"\n            :text="toggleButtonText"\n            :is-collapsed="isCollapsed"\n            :class="expandedClass"\n            @toggle="toggleVisibility"\n        />\n        \n        {% block sw_cms_section_sidebar %}\n        <div\n            v-if="isSideBarType && (!isCollapsed || !isVisible)"\n            class="sw-cms-section__sidebar"\n            :class="sectionSidebarClasses"\n        >\n\n            <template v-if="sideBarEmpty">\n                \n                {% block sw_cms_section_sidebar_block_empty %}\n                <div\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(blockCount, \'sidebar\') }"\n                    class="sw-cms-section__empty-stage"\n                    role="button"\n                    tabindex="0"\n                    @click="openBlockBar"\n                    @keydown.enter="openBlockBar"\n                >\n\n                    <sw-icon\n                        name="regular-plus-circle"\n                        size="24"\n                    />\n                    <p>{{ $tc(\'sw-cms.detail.label.addBlocks\') }}</p>\n                </div>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_cms_section_sidebar_add_first_block %}\n                <sw-cms-stage-add-block\n                    v-if="isSystemDefaultLanguage && !disabled"\n                    :key="0"\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(0, \'sidebar\') }"\n                    @stage-block-add="onAddSectionBlock"\n                />\n                {% endblock %}\n\n                <template\n                    v-for="(block, index) in sideBarBlocks"\n                    :key="block.id"\n                >\n                    \n                    {% block sw_cms_section_sidebar_block %}\n                    <sw-cms-block\n                        class="sw-cms-stage-block"\n                        :block="block"\n                        :disabled="disabled || undefined"\n                        :active="selectedBlock !== null && selectedBlock.id === block.id"\n                        :has-errors="hasBlockErrors(block)"\n                        @block-overlay-click="onBlockSelection(block)"\n                    >\n\n                        \n                        {% block sw_cms_section_sidebar_block_component %}\n                        <component :is="`sw-cms-block-${block.type}`">\n                            \n                            {% block sw_cms_section_content_block_slot %}\n                            <template\n                                v-for="el in block.slots"\n                                :key="el.id"\n                                #[el.slot]\n                            >\n                                <sw-cms-slot\n                                    :element="el"\n                                    :disabled="disabled || undefined"\n                                    :active="selectedBlock !== null && selectedBlock.id === block.id"\n                                />\n                            </template>\n                            {% endblock %}\n                        </component>\n                        {% endblock %}\n                    </sw-cms-block>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_section_add_sidebar_block %}\n                    <sw-cms-stage-add-block\n                        v-if="isSystemDefaultLanguage && !disabled"\n                        :key="index + 1"\n                        v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(block.position + 1, \'sidebar\') }"\n                        @stage-block-add="onAddSectionBlock"\n                    />\n                    {% endblock %}\n                </template>\n            </template>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_section_content %}\n        <div\n            v-if="!isCollapsed || !isVisible"\n            class="sw-cms-section__content"\n            :class="sectionContentClasses"\n        >\n            <template v-if="mainContentEmpty">\n                \n                {% block sw_cms_section_content_block_empty %}\n                <div\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(blockCount, \'main\') }"\n                    class="sw-cms-section__empty-stage"\n                    role="button"\n                    tabindex="0"\n                    @click="openBlockBar"\n                    @keydown.enter="openBlockBar"\n                >\n\n                    <sw-icon\n                        name="regular-plus-circle"\n                        size="24"\n                    />\n                    <p>{{ $tc(\'sw-cms.detail.label.addBlocks\') }}</p>\n                </div>\n                {% endblock %}\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_cms_section_content_add_first_block %}\n                <sw-cms-stage-add-block\n                    v-if="isSystemDefaultLanguage && !disabled"\n                    :key="0"\n                    v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(0) }"\n                    @stage-block-add="onAddSectionBlock"\n                />\n                {% endblock %}\n\n                <template\n                    v-for="(block, index) in mainContentBlocks"\n                    :key="block.id"\n                >\n                    \n                    {% block sw_cms_section_content_block %}\n                    <sw-cms-block\n                        class="sw-cms-stage-block"\n                        :block="block"\n                        :disabled="disabled || undefined"\n                        :active="selectedBlock !== null && selectedBlock.id === block.id"\n                        :has-errors="hasBlockErrors(block)"\n                        @block-overlay-click="onBlockSelection(block)"\n                    >\n\n                        \n                        {% block sw_cms_section_content_block_component %}\n                        <component\n                            :is="`sw-cms-block-${block.type}`"\n                            :block="block"\n                        >\n                            \n                            {% block sw_cms_section_content_block_component_slot %}\n                            <template\n                                v-for="el in block.slots"\n                                :key="el.id"\n                                #[el.slot]\n                            >\n                                <sw-cms-slot\n                                    :element="el"\n                                    :disabled="disabled || undefined"\n                                    :active="selectedBlock !== null && selectedBlock.id === block.id"\n                                />\n                            </template>\n                            {% endblock %}\n                        </component>\n                        {% endblock %}\n                    </sw-cms-block>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_section_add_content_block %}\n                    <sw-cms-stage-add-block\n                        v-if="isSystemDefaultLanguage && !disabled"\n                        :key="index + 1"\n                        v-droppable="{ dragGroup: \'cms-stage\', data: getDropData(block.position + 1) }"\n                        @stage-block-add="onAddSectionBlock"\n                    />\n                    {% endblock %}\n                </template>\n            </template>\n        </div>\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["cmsService","repositoryFactory"],provide(){return{swCmsSectionEmitPageConfigOpen:this.emitPageConfigOpen.bind(this)}},emits:["page-config-open","block-duplicate"],mixins:[o.getByName("cms-state")],props:{page:{type:Object,required:!0},section:{type:Object,required:!0},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data(){return{isCollapsed:!0,pageSlotconfigError:null}},computed:{blockRepository(){return this.repositoryFactory.create("cms_block")},slotRepository(){return this.repositoryFactory.create("cms_slot")},sectionClasses(){return{"is--active":this.active,"is--boxed":"boxed"===this.section.sizingMode}},sectionTypeClass(){return`is--${this.section.type}`},customSectionClass(){return this.section.cssClass},sectionStyles(){let e=null;if(this.section.backgroundMedia){let n=this.section.backgroundMedia.url;e=this.section.backgroundMedia.id?`url("${n}")`:`url('${this.assetFilter(n)}')`}return{"background-color":this.section.backgroundColor||"transparent","background-image":e,"background-size":this.section.backgroundMediaMode}},sectionSidebarClasses(){return{"is--empty":this.sideBarEmpty,"is--hidden":this.sectionMobileAndHidden,"is--expanded":this.expandedClass}},sectionMobileAndHidden(){return"mobile"===Shopware.Store.get("cmsPageState").currentCmsDeviceView&&"hidden"===this.section.mobileBehavior},isSideBarType(){return"sidebar"===this.section.type},sideBarEmpty(){return 0===this.sideBarBlocks.length},blockCount(){return this.section.blocks.length},mainContentEmpty(){return 0===this.mainContentBlocks.length},sideBarBlocks(){return this.section.blocks.filter(e=>this.blockTypeExists(e.type)&&"sidebar"===e.sectionPosition).sort((e,n)=>e.position-n.position)},mainContentBlocks(){return this.section.blocks.filter(e=>this.blockTypeExists(e.type)&&"sidebar"!==e.sectionPosition).sort((e,n)=>e.position-n.position)},assetFilter(){return i.getByName("asset")},blockTypes(){return Object.keys(this.cmsService.getCmsBlockRegistry())},isVisible(){let e=Shopware.Store.get("cmsPageState").currentCmsDeviceView,n=this.section.visibility;return"desktop"===e&&!n.desktop||"tablet-landscape"===e&&!n.tablet||"mobile"===e&&!n.mobile},toggleButtonText(){return this.$tc("sw-cms.sidebar.contentMenu.visibilitySectionTextButton",this.isCollapsed?0:1)},expandedClass(){return{"is--expanded":this.isVisible&&!this.isCollapsed}},sectionContentClasses(){return{"is--empty":this.mainContentEmpty,"is--expanded":this.isVisible&&!this.isCollapsed}},...c("page",["slots","slotConfig"])},created(){this.createdComponent()},methods:{createdComponent(){this.section.backgroundMediaMode||(this.section.backgroundMediaMode="cover")},openBlockBar(){this.disabled||this.$emit("page-config-open","blocks")},emitPageConfigOpen(e){this.$emit("page-config-open",e)},onAddSectionBlock(){this.openBlockBar()},onBlockSelection(e){Shopware.Store.get("cmsPageState").setBlock(e),this.$emit("page-config-open","itemConfig")},onBlockDuplicate(e,n){this.$emit("block-duplicate",e,n)},onBlockDelete(e){this.section.blocks.remove(e),this.selectedBlock&&this.selectedBlock.id===e&&Shopware.Store.get("cmsPageState").removeSelectedBlock(),this.updateBlockPositions()},updateBlockPositions(){this.section.blocks.forEach((e,n)=>{e.position=n})},getDropData(e,n="main"){return{dropIndex:e,section:this.section,sectionPosition:n}},blockTypeExists(e){return this.blockTypes.includes(e)},hasBlockErrors(e){return[this.hasUniqueBlockErrors(e),this.hasSlotConfigErrors(e)].some(e=>e)},hasUniqueBlockErrors(e){let n=this.pageSlotsError?.parameters?.elements;return!!n&&n.some(n=>n.blockIds.includes(e.id))},hasSlotConfigErrors(e){let n=this.pageSlotconfigError?.parameters?.elements;return!!n&&n.some(n=>n.blockId===e.id)},toggleVisibility(){this.isCollapsed=!this.isCollapsed}}})},966247:function(e,n,s){var t=s(334522);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),s(745346).Z("2015064f",t,!0,{})}}]);