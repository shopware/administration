(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[533],{vliX:function(n,e,t){"use strict";t.r(e);var i=Shopware.Mixin;e.default={template:'\n{% block sw_cms_el_config_text %}\n<sw-tabs\n    position-identifier="sw-cms-element-config-text"\n    class="sw-cms-el-config-text__tabs"\n    default-item="content"\n>\n\n    <template #default="{ active }">\n        \n        {% block sw_cms_el_config_text_tab_content %}\n        <sw-tabs-item\n            :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n            name="content"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n        </sw-tabs-item>\n        {% endblock %}\n        \n        {% block sw_cms_el_text_config_tab_options %}\n        <sw-tabs-item\n            :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n            name="settings"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n        </sw-tabs-item>\n        {% endblock %}\n    </template>\n\n    <template\n        #content="{ active }"\n    >\n        \n        {% block sw_cms_el_text_config_content %}\n        <sw-container\n            v-if="active === \'content\'"\n            class="sw-cms-el-config-text__tab-content"\n        >\n            <sw-cms-mapping-field\n                v-model="element.config.content"\n                :label="$tc(\'sw-cms.elements.text.config.label.content\')"\n                value-types="string"\n            >\n                <sw-text-editor\n                    :value="element.config.content.value"\n                    :allow-inline-data-mapping="true"\n                    sanitize-input\n                    enable-transparent-background\n                    @input="onInput"\n                    @blur="onBlur"\n                />\n\n                <template #preview="{ demoValue }">\n                    <div class="sw-cms-el-config-text__mapping-preview">\n                        <div v-html="$sanitize(demoValue)"></div>\n                    </div>\n                </template>\n            </sw-cms-mapping-field>\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_text_config_settings %}\n        <sw-container\n            v-if="active === \'settings\'"\n            class="sw-cms-el-config-text__tab-settings"\n        >\n            \n            {% block sw_cms_el_text_config_settings_vertical_align %}\n            <sw-select-field\n                v-model="element.config.verticalAlign.value"\n                :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n            >\n                <option value="flex-start">\n                    {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                </option>\n                <option value="center">\n                    {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                </option>\n                <option value="flex-end">\n                    {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                </option>\n            </sw-select-field>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </template>\n</sw-tabs>\n{% endblock %}\n',mixins:[i.getByName("cms-element")],created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("text")},onBlur:function(n){this.emitChanges(n)},onInput:function(n){this.emitChanges(n)},emitChanges:function(n){n!==this.element.config.content.value&&(this.element.config.content.value=n,this.$emit("element-update",this.element))}}}}}]);