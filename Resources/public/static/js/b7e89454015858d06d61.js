(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[483],{"8A4V":function(t,n,e){var s=e("hsSM");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("P8hj").default)("9f5d8a62",s,!0,{})},bYAv:function(t,n,e){"use strict";e.r(n);var s=e("4fmW"),i=e.n(s),a=e("c1oF"),l=e.n(a),o=(e("8A4V"),Shopware.Utils.object.hasOwnProperty);n.default={template:'\n{% block sw_settings %}\n<sw-page\n    class="sw-settings-index"\n    :show-smart-bar="false"\n>\n\n    \n    {% block sw_settings_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_settings_content_tabs %}\n            <sw-tabs\n                class="sw-settings__tabs"\n                position-identifier="sw-settings-index"\n                :is-vertical="true"\n                :small="false"\n            >\n                <template #default="{ active }">\n                    \n                    {% block sw_settings_content_tab_shop %}\n                    <sw-tabs-item\n                        v-if="settingsGroups[\'shop\']"\n                        class="sw-settings__tab-shop"\n                        :route="{ name: \'sw.settings.index.shop\'}"\n                        name="shop"\n                        :active-tab="active"\n                        :title="$tc(\'sw-settings.index.tabShop\')"\n                    >\n                        {{ $tc(\'sw-settings.index.tabShop\') }}\n                    </sw-tabs-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_content_tab_system %}\n                    <sw-tabs-item\n                        v-if="settingsGroups[\'system\']"\n                        class="sw-settings__tab-system"\n                        name="system"\n                        :route="{ name: \'sw.settings.index.system\'}"\n                        :active-tab="active"\n                        :title="$tc(\'sw-settings.index.tabSystem\')"\n                    >\n                        {{ $tc(\'sw-settings.index.tabSystem\') }}\n                    </sw-tabs-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_content_tab_plugins %}\n                    <sw-tabs-item\n                        v-if="hasPluginConfig()"\n                        class="sw-settings__tab-plugins"\n                        name="plugins"\n                        :route="{ name: \'sw.settings.index.plugins\'}"\n                        :active-tab="active"\n                        :title="$tc(\'sw-settings.index.tabPlugins\')"\n                    >\n                        {{ $tc(\'sw-settings.index.tabPlugins\') }}\n                    </sw-tabs-item>\n                    {% endblock %}\n                </template>\n\n                <template #content="{ active }">\n                    \n                    {% block sw_settings_content_card %}\n                    \n                    {% block sw_settings_content_header %}\n                    <h1 class="sw-settings__content-header">\n                        {{ $tc(\'sw-settings.index.title\') }}\n                    </h1>\n                    {% endblock %}\n\n                    <sw-card\n                        class="sw-settings__card"\n                        position-identifier="sw-settings-index-content"\n                    >\n                        \n                        {% block sw_settings_content_card_content %}\n                        <slot\n                            v-for="(settingsItems, settingsGroup) in settingsGroups"\n                            {% if VUE3 %}\n                            :key="settingsGroup"\n                            {% endif %}\n                            :name="settingsGroup"\n                        >\n                            <div\n                                v-show="active === settingsGroup"\n                                :id="`sw-settings__content-grid-${settingsGroup}`"\n                                {% if VUE2 %}\n                                :key="settingsGroup"\n                                {% endif %}\n                                class="sw-settings__content-grid"\n                            >\n                                <sw-settings-item\n                                    v-for="settingsItem in settingsItems"\n                                    :id="settingsItem.id"\n                                    :key="settingsItem.name"\n                                    :label="getLabel(settingsItem)"\n                                    :to="getRouteConfig(settingsItem)"\n                                    :background-enabled="settingsItem.backgroundEnabled"\n                                >\n                                    <template #icon>\n                                        <component\n                                            :is="settingsItem.iconComponent"\n                                            v-if="settingsItem.iconComponent"\n                                        />\n                                        <sw-icon\n                                            v-else\n                                            :name="settingsItem.icon"\n                                        />\n                                    </template>\n                                </sw-settings-item>\n                            </div>\n                        </slot>\n                        {% endblock %}\n                    </sw-card>\n                    {% endblock %}\n                </template>\n            </sw-tabs>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["acl"],metaInfo:function(){return{title:this.$createTitle()}},computed:{settingsGroups:function(){var t=this,n=Object.entries(Shopware.State.get("settingsItems").settingsGroups);return n.reduce((function(n,e){var s=l()(e,2),i=s[0],a=s[1].filter((function(n){return!n.privilege||t.acl.can(n.privilege)})).sort((function(n,e){var s,i,a="string"==typeof n.label?n.label:null===(s=n.label)||void 0===s?void 0:s.label,l="string"==typeof e.label?e.label:null===(i=e.label)||void 0===i?void 0:i.label;return t.$tc(a).localeCompare(t.$tc(l))}));return a.length>0&&(n[i]=a),n}),{})}},methods:{hasPluginConfig:function(){return o(this.settingsGroups,"plugins")&&this.settingsGroups.plugins.length>0},getRouteConfig:function(t){return o(t,"to")?"string"==typeof t.to?{name:t.to}:"object"===i()(t.to)?t.to:{}:{}},getLabel:function(t){return o(t,"label")?"string"==typeof t.label?this.$tc(t.label):"object"!==i()(t.label)?"":o(t.label,"translated")&&o(t.label,"label")&&"string"==typeof t.label.label?t.label.translated?t.label.label:this.$tc(t.label.label):"":""}}}},hsSM:function(t,n,e){}}]);