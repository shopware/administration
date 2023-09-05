(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[150],{"06J6":function(e,n,t){var l=t("b2f5");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,t("P8hj").default)("04e0e3f9",l,!0,{})},b2f5:function(e,n,t){},gjgp:function(e,n,t){"use strict";t.r(n);var l=t("CsSd"),o=t.n(l),s=t("c1oF"),i=t.n(s),c=(t("06J6"),Shopware.Utils.object.deepCopyObject);n.default={template:'\n{% block sw_cms_slot %}\n<div\n    :id="slotElementId"\n    class="sw-cms-slot"\n    :class="componentClasses"\n>\n\n    \n    {% block sw_cms_slot_content %}\n\n    \n    {% block sw_cms_slot_content_component %}\n    <component\n        :is="elementConfig.component"\n        v-model="element"\n        :element-data="elementConfig"\n        :disabled="disabled"\n    />\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_preview_overlay %}\n    <div\n        v-if="!active"\n        class="sw-cms-slot__preview-overlay"\n    ></div>\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_overlay %}\n    <div\n        v-if="active"\n        class="sw-cms-slot__overlay"\n    >\n        \n        {% block sw_cms_slot_content_overlay_content %}\n        <div class="sw-cms-slot__actions">\n            \n            {% block sw_cms_slot_content_overlay_action_settings %}\n            <div\n                v-tooltip.bottom="tooltipDisabled"\n                class="sw-cms-slot__settings-action"\n                :class="cmsSlotSettingsClasses"\n                role="button"\n                tabindex="0"\n                @click="onSettingsButtonClick"\n                @keydown.enter="onSelectElement(element.name)"\n            >\n                <sw-icon\n                    name="regular-cog"\n                    size="16"\n                />\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_cms_slot_content_overlay_action_swap %}\n            <div\n                v-if="elementConfig.removable !== false"\n                class="sw-cms-slot__element-action"\n                role="button"\n                tabindex="0"\n                @click="onElementButtonClick"\n                @keydown.enter="onSelectElement(element.name)"\n            >\n                <sw-icon\n                    name="regular-repeat"\n                    size="16"\n                />\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_settings_modal %}\n    <sw-modal\n        v-if="showElementSettings"\n        class="sw-cms-slot__config-modal"\n        variant="large"\n        :title="$tc(\'sw-cms.detail.title.elementSettingsModal\')"\n        @modal-close="onCloseSettingsModal"\n    >\n        \n        {% block sw_cms_slot_content_settings_modal_component %}\n        <component\n            :is="elementConfig.configComponent"\n            ref="elementComponentRef"\n            v-model="element"\n            :element-data="elementConfig"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_slot_content_settings_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_cms_slot_content_settings_modal_action_confirm %}\n            <sw-button\n                variant="primary"\n                @click="onCloseSettingsModal"\n            >\n                {{ $tc(\'sw-cms.detail.label.buttonElementSettingsConfirm\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_element_modal %}\n    <sw-modal\n        v-if="showElementSelection"\n        :title="$tc(\'sw-cms.detail.title.elementChangeModal\')"\n        @modal-close="onCloseElementModal"\n    >\n        \n        {% block sw_cms_slot_content_element_modal_selection %}\n        <div class="sw-cms-slot__modal-container">\n            \n            {% block sw_cms_slot_content_element_modal_selection_groups %}\n            <sw-sidebar-collapse\n                v-for="cmsElementGroup in groupedCmsElements"\n                :key="cmsElementGroup.title"\n                expand-on-loading\n                expand-chevron-direction="up"\n            >\n                <template #header>\n                    {{ $tc(cmsElementGroup.title) }}\n                </template>\n\n                <template #content>\n                    <div class="sw-cms-slot__element-selection">\n                        \n                        {% block sw_cms_slot_content_element_modal_selection_element %}\n                        <template\n                            v-for="element in cmsElementGroup.items"\n                        >\n                            <div\n                                v-if="!element.hidden && element.previewComponent"\n                                :key="element.name"\n                                class="element-selection__element-wrapper"\n                            >\n                                <div class="element-selection__element">\n                                    \n                                    {% block sw_cms_slot_content_element_modal_selection_element_component %}\n                                    <component\n                                        :is="element.previewComponent"\n                                        class="sw-cms-slot__element-preview"\n                                        :element-data="element"\n                                    />\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_cms_slot_content_element_modal_selection_element_overlay %}\n                                    <div\n                                        class="element-selection__overlay element-selection__overlay-action-select"\n                                        role="button"\n                                        tabindex="0"\n                                        @click="onSelectElement(element)"\n                                        @keydown.enter="onSelectElement(element)"\n                                    >\n                                        <sw-icon\n                                            name="regular-repeat"\n                                            size="28"\n                                        />\n                                    </div>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_cms_slot_content_element_modal_selection_element_overlay_favorite %}\n                                    <div\n                                        class="element-selection__overlay element-selection__overlay-action-favorite"\n                                        role="button"\n                                        tabindex="0"\n                                        @click="onToggleElementFavorite(element.name)"\n                                        @keydown.enter="onToggleElementFavorite(element.name)"\n                                    >\n                                        <sw-icon\n                                            v-if="cmsElementFavorites.isFavorite(element.name)"\n                                            name="solid-heart"\n                                            size="28"\n                                        />\n                                        <sw-icon\n                                            v-else\n                                            name="regular-heart"\n                                            size="28"\n                                        />\n                                    </div>\n                                {% endblock %}\n                                </div>\n\n                                \n                                {% block sw_cms_slot_content_element_modal_selection_element_label %}\n                                <span class="element-selection__label">{{ $tc(element.label) }}</span>\n                            {% endblock %}\n                            </div>\n                        </template>\n                        {% endblock %}\n                    </div>\n                </template>\n            </sw-sidebar-collapse>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_slot_content_element_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_cms_slot_content_element_modal_action_abort %}\n            <sw-button @click="onCloseElementModal">\n                {{ $tc(\'sw-cms.detail.label.buttonElementChangeAbort\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["cmsService","cmsElementFavorites"],props:{element:{type:Object,required:!0,default:function(){return{}}},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data:function(){return{showElementSettings:!1,showElementSelection:!1}},computed:{slotElementId:function(){return this.element.id},elementConfig:function(){return this.cmsService.getCmsElementConfigByName(this.element.type)},cmsElements:function(){var e=this,n=Shopware.State.get("cmsPageState").currentPageType,t=Object.entries(this.cmsService.getCmsElementRegistry()).filter((function(t){var l=i()(t,1)[0];return e.cmsService.isElementAllowedInPageType(l,n)}));return Object.fromEntries(t)},groupedCmsElements:function(){var e=this,n=[],t=Object.values(this.cmsElements).sort((function(e,n){return e.name.localeCompare(n.name)})),l=t.filter((function(n){return e.cmsElementFavorites.isFavorite(n.name)})),o=t.filter((function(n){return!e.cmsElementFavorites.isFavorite(n.name)}));return l.length&&n.push({title:"sw-cms.elements.general.switch.groups.favorites",items:l}),n.push({title:"sw-cms.elements.general.switch.groups.all",items:o}),n},componentClasses:function(){var e="sw-cms-slot-".concat(this.element.slot);return o()({"is--disabled":this.disabled},e,!!this.element.slot)},cmsSlotSettingsClasses:function(){return this.elementConfig.defaultConfig&&!this.element.locked?null:"is--disabled"},tooltipDisabled:function(){return this.elementConfig.disabledConfigInfoTextKey?{message:this.$tc(this.elementConfig.disabledConfigInfoTextKey),disabled:!!this.elementConfig.defaultConfig&&!this.element.locked}:{message:this.$tc("sw-cms.elements.general.config.tab.settings"),disabled:!0}}},methods:{onSettingsButtonClick:function(){this.elementConfig.defaultConfig&&!this.element.locked&&(this.showElementSettings=!0)},onCloseSettingsModal:function(){var e=this.$refs.elementComponentRef;e&&e.hasOwnProperty("handleUpdateContent")&&e.handleUpdateContent(),this.showElementSettings=!1},onElementButtonClick:function(){this.showElementSelection=!0},onCloseElementModal:function(){this.showElementSelection=!1},onSelectElement:function(e){this.element.data=c((null==e?void 0:e.defaultData)||{}),this.element.config=c((null==e?void 0:e.defaultConfig)||{}),this.element.type=e.name,this.element.locked=!1,this.showElementSelection=!1},onToggleElementFavorite:function(e){this.cmsElementFavorites.update(!this.cmsElementFavorites.isFavorite(e),e)},elementInElementGroup:function(e,n){return"favorite"!==n||this.cmsElementFavorites.isFavorite(e.name)}}}}}]);