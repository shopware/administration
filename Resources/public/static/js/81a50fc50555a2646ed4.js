(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[445],{LtSg:function(n,i,o){var t=o("fvUe");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,o("P8hj").default)("48218c85",t,!0,{})},fvUe:function(n,i,o){},"qv/w":function(n,i,o){"use strict";o.r(i);o("LtSg"),i.default={template:'\n{% block sw_plugin_box %}\n<div class="sw-plugin-box">\n    \n    {% block sw_plugin_box_container %}\n    <sw-container\n        columns="3fr 1fr"\n        gap="0px 30px"\n        class="sw-plugin-box__container"\n    >\n        \n        {% block sw_plugin_box_container_plugin_data %}\n        <sw-container :class="{ \'has--no-icon\' : !plugin.icon }">\n            \n            {% block sw_plugin_box_container_plugin_data_icon %}\n            <img\n                v-if="!!plugin.icon"\n                class="sw-plugin-box__icon"\n                :src="`data:image/png;base64, ${plugin.icon}`"\n                alt=""\n            >\n            {% endblock %}\n            \n            {% block sw_plugin_box_container_plugin_data_description %}\n            <div class="sw-plugin-box__description">\n                \n                {% block sw_plugin_box_container_plugin_data_description_label %}\n                <p class="sw-plugin-box__label">\n                    {{ plugin.translated.label }}\n                </p>\n                {% endblock %}\n                \n                {% block sw_plugin_box_container_plugin_data_description_author %}\n                <p class="sw-plugin-box__author">\n                    {{ plugin.author }}\n                </p>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n        \n        {% block sw_plugin_box_container_button %}\n        <sw-button\n            v-if="hasPluginConfig"\n            variant="ghost"\n            size="small"\n            class="sw-plugin-box__button"\n            :router-link="{ name: \'sw.extension.config\', params: { namespace: plugin.name } }"\n        >\n            {{ $tc(\'sw-plugin-box.buttonPluginSettings\') }}\n        </sw-button>\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["systemConfigApiService","repositoryFactory"],props:{pluginId:{type:String,required:!0}},data:function(){return{plugin:{},hasPluginConfig:!1}},computed:{pluginRepository:function(){return this.repositoryFactory.create("plugin")}},watch:{"plugin.name":{handler:function(){this.plugin.name&&!this.hasPluginConfig&&this.checkPluginConfig()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var n=this;this.pluginRepository.get(this.pluginId).then((function(i){n.plugin=i}))},checkPluginConfig:function(){var n=this;this.systemConfigApiService.checkConfig("".concat(this.plugin.name,".config")).then((function(i){n.hasPluginConfig=i})).catch((function(){n.hasPluginConfig=!1}))}}}}}]);