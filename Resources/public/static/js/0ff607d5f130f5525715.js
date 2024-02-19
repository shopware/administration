(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[264],{"5lp9":function(n,t,e){"use strict";e.r(t);var a=e("7yzw"),o=e.n(a),s=e("92Mt"),l=e.n(s),i=(e("tCzR"),Shopware.Data.Criteria);t.default=Shopware.Component.wrapComponentConfig({template:'<sw-page class="sw-flow-list-index">\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="flow"\n            :placeholder="$tc(\'sw-flow.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n\n    <template #smart-bar-header>\n        <h2>\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-flow.list.textHeadline\') }}\n\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n        </h2>\n    </template>\n\n    <template #smart-bar-actions>\n        \n        {% block sw_flow_index_smart_bar_actions_extension %}\n        {% endblock %}\n\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'flow.creator\'),\n                position: \'bottom\',\n                showOnDisabledElements: true\n            }"\n            class="sw-flow-list__create"\n            variant="primary"\n            :router-link="{ name: \'sw.flow.create\' }"\n            :disabled="!acl.can(\'flow.creator\')"\n        >\n            {{ $tc(\'sw-flow.list.buttonAddFlow\') }}\n        </sw-button>\n    </template>\n\n    <template #content>\n        <sw-card-view>\n            <sw-tabs\n                class="sw-flow-list__tab"\n                position-identifier="sw-flow-listing"\n                :small="false"\n            >\n                <sw-tabs-item\n                    class="sw-flow-listing__tab-my-flows"\n                    name="flows"\n                    :title="$tc(\'sw-flow.general.tabMyFlows\')"\n                    :route="{ name: \'sw.flow.index.flows\'}"\n                >\n                    {{ $tc(\'sw-flow.general.tabMyFlows\') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item\n                    class="sw-flow-listing__tab-flow-templates"\n                    name="templates"\n                    :title="$tc(\'sw-flow.general.tabFlowTemplates\')"\n                    :route="{ name: \'sw.flow.index.templates\'}"\n                >\n                    {{ $tc(\'sw-flow.general.tabFlowTemplates\') }}\n                </sw-tabs-item>\n\n                \n                {% block sw_flow_tabs_header_extension %}{% endblock %}\n\n                <template #content="{ active }">\n                    <template v-if="isLoading">\n                        <sw-skeleton />\n                        <sw-skeleton />\n                    </template>\n\n                    <template v-else>\n                        {% if VUE3 %}\n                        <router-view\n                            v-slot="{ Component }"\n                        >\n                            <component\n                                :is="Component"\n                                :is-loading="isLoading"\n                                :search-term="term"\n                                @on-update-total="onUpdateTotalFlow"\n                            />\n                        </router-view>\n                        {% else %}\n                        <router-view\n                            :is-loading="isLoading"\n                            :search-term="term"\n                            @on-update-total="onUpdateTotalFlow"\n                        />\n                        {% endif %}\n                    </template>\n                </template>\n            </sw-tabs>\n        </sw-card-view>\n\n        \n        {% block sw_flow_index_modal_content_custom %}\n        {% endblock %}\n    </template>\n</sw-page>\n',inject:["acl","repositoryFactory"],data:function(){return{isLoading:!1,term:"",total:0,showUploadModal:!1}},metaInfo:function(){return{title:this.$createTitle()}},computed:{flowRepository:function(){return this.repositoryFactory.create("flow")},flowCriteria:function(){return new i(1,null)}},created:function(){this.createComponent()},methods:{createComponent:function(){this.getTotal()},getTotal:function(){var n=this;return o()(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.flowRepository.searchIds(n.flowCriteria);case 2:e=t.sent,a=e.total,n.total=a;case 5:case"end":return t.stop()}}),t)})))()},onUpdateTotalFlow:function(n){this.total=n},onSearch:function(n){this.term=n}}})},ZHg3:function(n,t,e){},tCzR:function(n,t,e){var a=e("ZHg3");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e("P8hj").default)("61a251cf",a,!0,{})}}]);