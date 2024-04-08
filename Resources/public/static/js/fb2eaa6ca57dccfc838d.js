(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[78098],{28619:function(){},78098:function(n,i,o){"use strict";o.r(i),o.d(i,{default:function(){return t}}),o(18737);var t={template:'\n{% block sw_plugin_box %}\n<div class="sw-plugin-box">\n    \n    {% block sw_plugin_box_container %}\n    <sw-container\n        columns="3fr 1fr"\n        gap="0px 30px"\n        class="sw-plugin-box__container"\n    >\n        \n        {% block sw_plugin_box_container_plugin_data %}\n        <sw-container :class="{ \'has--no-icon\' : !plugin.icon }">\n            \n            {% block sw_plugin_box_container_plugin_data_icon %}\n            <img\n                v-if="!!plugin.icon"\n                class="sw-plugin-box__icon"\n                :src="`data:image/png;base64, ${plugin.icon}`"\n                alt=""\n            >\n            {% endblock %}\n            \n            {% block sw_plugin_box_container_plugin_data_description %}\n            <div class="sw-plugin-box__description">\n                \n                {% block sw_plugin_box_container_plugin_data_description_label %}\n                <p class="sw-plugin-box__label">\n                    {{ plugin.translated.label }}\n                </p>\n                {% endblock %}\n                \n                {% block sw_plugin_box_container_plugin_data_description_author %}\n                <p class="sw-plugin-box__author">\n                    {{ plugin.author }}\n                </p>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n        \n        {% block sw_plugin_box_container_button %}\n        <sw-button\n            v-if="hasPluginConfig"\n            variant="ghost"\n            size="small"\n            class="sw-plugin-box__button"\n            :router-link="{ name: \'sw.extension.config\', params: { namespace: plugin.name } }"\n        >\n            {{ $tc(\'sw-plugin-box.buttonPluginSettings\') }}\n        </sw-button>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["systemConfigApiService","repositoryFactory"],props:{pluginId:{type:String,required:!0}},data(){return{plugin:{},hasPluginConfig:!1}},computed:{pluginRepository(){return this.repositoryFactory.create("plugin")}},watch:{"plugin.name":{handler(){this.plugin.name&&!this.hasPluginConfig&&this.checkPluginConfig()}}},created(){this.createdComponent()},methods:{createdComponent(){this.pluginRepository.get(this.pluginId).then(n=>{this.plugin=n})},checkPluginConfig(){this.systemConfigApiService.checkConfig(`${this.plugin.name}.config`).then(n=>{this.hasPluginConfig=n}).catch(()=>{this.hasPluginConfig=!1})}}}},18737:function(n,i,o){var t=o(28619);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),o(45346).Z("659e0922",t,!0,{})}}]);