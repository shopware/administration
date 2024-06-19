(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[10427],{492817:function(){},410427:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}}),t(23929);let{deepCopyObject:l}=Shopware.Utils.object;var o={template:'\n{% block sw_cms_slot %}\n<div\n    :id="slotElementId"\n    class="sw-cms-slot"\n    :class="componentClasses"\n>\n\n    \n    {% block sw_cms_slot_content %}\n\n    \n    {% block sw_cms_slot_content_component %}\n    <component\n        :is="elementConfig.component"\n        v-if="elementConfig && elementConfig.component"\n        v-model:element="element"\n        :element-data="elementConfig"\n        :disabled="disabled"\n    />\n    {% endblock %}\n\n    {# This is just a quick inline design which needs to be refactored for a real design implementation #}\n    <div\n        v-else-if="elementNotFound"\n        class="sw-cms-slot__element-not-found"\n        style="\n            width: 100%;\n            min-height: 250px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: #fbe5ea;\n            border: 1px solid #de294c;\n            border-radius: 4px;\n            gap: 16px;\n        "\n    >\n        <sw-icon\n            name="regular-exclamation-circle"\n            color="#de294c"\n        />\n\n        <div>\n            <p style="color: #de294c;">\n                <strong>Element could not be load</strong>\n            </p>\n            <p style="color: #de294c; margin-top: 6px;">\n                Please try again or select another element.\n            </p>\n        </div>\n    </div>\n\n    <div v-else>\n        <sw-skeleton-bar style="width: 100%; min-height: 250px;" />\n    </div>\n\n    \n    {% block sw_cms_slot_content_preview_overlay %}\n    <div\n        v-if="!active"\n        class="sw-cms-slot__preview-overlay"\n    ></div>\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_overlay %}\n    <div\n        v-if="active"\n        class="sw-cms-slot__overlay"\n    >\n        \n        {% block sw_cms_slot_content_overlay_content %}\n        <div class="sw-cms-slot__actions">\n            \n            {% block sw_cms_slot_content_overlay_action_settings %}\n            <div\n                v-tooltip.bottom="tooltipDisabled"\n                class="sw-cms-slot__settings-action"\n                :class="cmsSlotSettingsClasses"\n                role="button"\n                tabindex="0"\n                @click="onSettingsButtonClick"\n                @keydown.enter="onSelectElement(element.name)"\n            >\n                <sw-icon\n                    name="regular-cog"\n                    size="16"\n                />\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_cms_slot_content_overlay_action_swap %}\n            <div\n                v-if="elementConfig?.removable !== false"\n                class="sw-cms-slot__element-action"\n                role="button"\n                tabindex="0"\n                @click="onElementButtonClick"\n                @keydown.enter="onSelectElement(element.name)"\n            >\n                <sw-icon\n                    name="regular-repeat"\n                    size="16"\n                />\n            </div>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_settings_modal %}\n    <sw-modal\n        v-if="showElementSettings"\n        class="sw-cms-slot__config-modal"\n        :variant="modalVariant"\n        :title="$tc(\'sw-cms.detail.title.elementSettingsModal\')"\n        @modal-close="onCloseSettingsModal"\n    >\n        \n        {% block sw_cms_slot_content_settings_modal_component %}\n        <component\n            :is="elementConfig.configComponent"\n            ref="elementComponentRef"\n            v-model:element="element"\n            :element-data="elementConfig"\n        />\n        {% endblock %}\n\n        \n        {% block sw_cms_slot_content_settings_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_cms_slot_content_settings_modal_action_confirm %}\n            <sw-button\n                variant="primary"\n                @click="onCloseSettingsModal"\n            >\n                {{ $tc(\'sw-cms.detail.label.buttonElementSettingsConfirm\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_cms_slot_content_element_modal %}\n    <sw-modal\n        v-if="showElementSelection"\n        :title="$tc(\'sw-cms.detail.title.elementChangeModal\')"\n        @modal-close="onCloseElementModal"\n    >\n        \n        {% block sw_cms_slot_content_element_modal_selection %}\n        <div class="sw-cms-slot__modal-container">\n            \n            {% block sw_cms_slot_content_element_modal_selection_groups %}\n            <sw-sidebar-collapse\n                v-for="cmsElementGroup in groupedCmsElements"\n                :key="cmsElementGroup.title"\n                expand-on-loading\n                expand-chevron-direction="up"\n            >\n                <template #header>\n                    {{ $tc(cmsElementGroup.title) }}\n                </template>\n\n                <template #content>\n                    <div class="sw-cms-slot__element-selection">\n                        \n                        {% block sw_cms_slot_content_element_modal_selection_element %}\n                        <template\n                            v-for="element in cmsElementGroup.items"\n                            :key="element.name"\n                        >\n                            <div\n                                v-if="!element.hidden && element.previewComponent"\n                                class="element-selection__element-wrapper"\n                            >\n                                <div class="element-selection__element">\n                                    \n                                    {% block sw_cms_slot_content_element_modal_selection_element_component %}\n                                    <component\n                                        :is="element.previewComponent"\n                                        class="sw-cms-slot__element-preview"\n                                        :element-data="element"\n                                    />\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_cms_slot_content_element_modal_selection_element_overlay %}\n                                    <div\n                                        class="element-selection__overlay element-selection__overlay-action-select"\n                                        role="button"\n                                        tabindex="0"\n                                        @click="onSelectElement(element)"\n                                        @keydown.enter="onSelectElement(element)"\n                                    >\n                                        <sw-icon\n                                            name="regular-repeat"\n                                            size="28"\n                                        />\n                                    </div>\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_cms_slot_content_element_modal_selection_element_overlay_favorite %}\n                                    <div\n                                        class="element-selection__overlay element-selection__overlay-action-favorite"\n                                        role="button"\n                                        tabindex="0"\n                                        @click="onToggleElementFavorite(element.name)"\n                                        @keydown.enter="onToggleElementFavorite(element.name)"\n                                    >\n                                        <sw-icon\n                                            v-if="cmsElementFavorites.isFavorite(element.name)"\n                                            name="solid-heart"\n                                            size="28"\n                                        />\n                                        <sw-icon\n                                            v-else\n                                            name="regular-heart"\n                                            size="28"\n                                        />\n                                    </div>\n                                {% endblock %}\n                                </div>\n\n                                \n                                {% block sw_cms_slot_content_element_modal_selection_element_label %}\n                                <span class="element-selection__label">{{ $tc(element.label) }}</span>\n                            {% endblock %}\n                            </div>\n                        </template>\n                        {% endblock %}\n                    </div>\n                </template>\n            </sw-sidebar-collapse>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_slot_content_element_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_cms_slot_content_element_modal_action_abort %}\n            <sw-button @click="onCloseElementModal">\n                {{ $tc(\'sw-cms.detail.label.buttonElementChangeAbort\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["cmsService","cmsElementFavorites"],props:{element:{type:Object,required:!0,default(){return{}}},active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},data(){return{showElementSettings:!1,showElementSelection:!1,elementNotFound:!1}},computed:{slotElementId(){return this.element.id},cmsServiceState(){return this.cmsService.getCmsServiceState()},elementConfig(){return this.cmsServiceState.elementRegistry[this.element.type]},cmsElements(){let e=Shopware.State.get("cmsPageState").currentPageType;return Object.fromEntries(Object.entries(this.cmsService.getCmsElementRegistry()).filter(([n])=>this.cmsService.isElementAllowedInPageType(n,e)))},groupedCmsElements(){let e=[],n=Object.values(this.cmsElements).sort((e,n)=>e.name.localeCompare(n.name)),t=n.filter(e=>this.cmsElementFavorites.isFavorite(e.name)),l=n.filter(e=>!this.cmsElementFavorites.isFavorite(e.name));return t.length&&e.push({title:"sw-cms.elements.general.switch.groups.favorites",items:t}),e.push({title:"sw-cms.elements.general.switch.groups.all",items:l}),e},componentClasses(){let e=`sw-cms-slot-${this.element.slot}`;return{"is--disabled":this.disabled,[e]:!!this.element.slot}},cmsSlotSettingsClasses(){return this.elementConfig?.defaultConfig&&!this.element?.locked?null:"is--disabled"},tooltipDisabled(){return this.elementConfig?.disabledConfigInfoTextKey?{message:this.$tc(this.elementConfig.disabledConfigInfoTextKey),disabled:!!this.elementConfig.defaultConfig&&!this.element.locked}:{message:this.$tc("sw-cms.elements.general.config.tab.settings"),disabled:!0}},modalVariant(){return"html"===this.element.type?"full":"large"}},mounted(){this.mountedComponent()},methods:{mountedComponent(){setTimeout(()=>{this.elementConfig||(this.elementNotFound=!0)},1e4)},onSettingsButtonClick(){!this.elementConfig?.defaultConfig||this.element?.locked||(this.showElementSettings=!0)},onCloseSettingsModal(){let e=this.$refs.elementComponentRef;e&&e.handleUpdateContent&&e.handleUpdateContent(),this.showElementSettings=!1},onElementButtonClick(){this.showElementSelection=!0},onCloseElementModal(){this.showElementSelection=!1},onSelectElement(e){this.element.data=l(e?.defaultData||{}),this.element.config=l(e?.defaultConfig||{}),this.element.type=e.name,this.element.locked=!1,this.element.translated?.config&&(this.element.translated.config={}),this.showElementSelection=!1},onToggleElementFavorite(e){this.cmsElementFavorites.update(!this.cmsElementFavorites.isFavorite(e),e)},elementInElementGroup(e,n){return"favorite"!==n||this.cmsElementFavorites.isFavorite(e.name)}}}},23929:function(e,n,t){var l=t(492817);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),t(745346).Z("7229594f",l,!0,{})}}]);