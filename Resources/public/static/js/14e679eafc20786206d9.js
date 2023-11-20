(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[540],{aZHG:function(e,n,t){"use strict";t.r(n);n.default={template:"\n{% block sw_extension_my_extensions_index %}\n<sw-meteor-page\n    class=\"sw-extension-store-purchased\"\n    hide-icon\n>\n    \n    {% block sw_extension_my_extensions_index_smart_bar_header %}\n    <template #smart-bar-header>\n        {{ $tc('sw-extension.mainMenu.purchased') }}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_my_extensions_index_smart_bar_search_slot %}\n    <template #search-bar>\n        \n        {% block sw_extension_my_extensions_index_smart_bar_search_slot_search_bar %}\n        <sw-search-bar\n            initial-search-type=\"extension\"\n            :placeholder=\"$tc('sw-extension.my-extensions.listing.placeholderSearchBar')\"\n            @search=\"onSearch\"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_my_extensions_index_smart_bar_tabs %}\n    <template #page-tabs>\n        \n        {% block sw_extension_my_extensions_index_smart_bar_tabs_app %}\n        <sw-tabs-item :route=\"{ name: 'sw.extension.my-extensions.listing.app', query: queryParams }\">\n            {{ $tc('sw-extension.my-extensions.tabs.app') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_extension_my_extensions_index_smart_bar_tabs_theme %}\n        <sw-tabs-item :route=\"{ name: 'sw.extension.my-extensions.listing.theme', query: queryParams }\">\n            {{ $tc('sw-extension.my-extensions.tabs.theme') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_extension_my_extensions_index_smart_bar_tabs_recommendation %}\n        <sw-tabs-item :route=\"{ name: 'sw.extension.my-extensions.recommendation' }\">\n            {{ $tc('sw-extension.my-extensions.tabs.recommendation') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_extension_my_extensions_index_smart_bar_tabs_account %}\n        <sw-tabs-item :route=\"{ name: 'sw.extension.my-extensions.account' }\">\n            {{ $tc('sw-extension.my-extensions.tabs.shopwareAccount') }}\n        </sw-tabs-item>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_my_extensions_index_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_extension_my_extensions_index_smart_bar_actions_file_upload %}\n        <sw-extension-file-upload v-if=\"acl.can('system.plugin_upload')\" />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_my_extensions_index_body %}\n    <template #default>\n        <router-view />\n    </template>\n    {% endblock %}\n</sw-meteor-page>\n{% endblock %}\n\n",inject:["acl"],computed:{searchValue:{get:function(){return this.$route.query.term||""},set:function(e){this.updateRouteQueryTerm(e)}},queryParams:function(){return{term:this.searchValue||void 0,limit:this.$route.query.limit,page:1}}},methods:{onSearch:function(e){this.searchValue=e},updateRouteQueryTerm:function(e){var n=this.$route.query,t={name:this.$route.name,params:this.$route.params,query:{term:e||void 0,limit:this.$route.query.limit,page:1}};Shopware.Utils.types.isEmpty(n)?this.$router.replace(t):this.$router.push(t)}}}}}]);
//# sourceMappingURL=14e679eafc20786206d9.js.map