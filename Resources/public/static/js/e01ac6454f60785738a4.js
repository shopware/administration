"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[23072],{23072:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});let{Mixin:s}=Shopware,{Criteria:i}=Shopware.Data;var l={template:'\n{% block sw_settings_list %}\n<sw-page class="sw-settings-logging-list">\n\n    \n    {% block sw_settings_logging_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="Logs"\n            :placeholder="$tc(\'sw-settings-logging.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_logging_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_logging_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_logging_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-logging.list.title\') }}\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_logging_list_smart_bar_actions %}\n    <template #smart-bar-actions></template>\n    {% endblock %}\n\n    \n    {% block sw_settings_logging_list_content %}\n    <template #content>\n        \n        {% block sw_settings_logging_list_content_listing %}\n        <sw-entity-listing\n            :data-source="logs"\n            :columns="logColumns"\n            :full-page="true"\n            :show-settings="true"\n            :show-selection="false"\n            :show-actions="true"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            :is-loading="isLoading"\n            :allow-column-edit="true"\n            :repository="logEntryRepository"\n            identifier="sw-log-entry-list"\n        >\n\n            <template\n                #column-createdAt="{ item }"\n            >\n                \n                {% block sw_settings_logging_list_column_created_at %}\n                {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n                {% endblock %}\n            </template>\n\n            <template\n                #column-level="{ item }"\n            >\n                \n                {% block sw_settings_logging_list_column_level %}\n                {{ logLevelToString(item.level) }} ({{ item.level }})\n                {% endblock %}\n            </template>\n\n            <template\n                #column-context="{ item }"\n            >\n                \n                {% block sw_settings_logging_list_column_context %}\n                <a\n                    role="button"\n                    tabindex="0"\n                    @click="showInfoModal(item)"\n                    @keydown.enter="showInfoModal(item)">\n                    {{ item.context }}\n                </a>\n                {% endblock %}\n            </template>\n\n            <template #pagination>\n                \n                {% block sw_settings_logging_list_content_listing_pagination %}\n                <sw-pagination\n                    :page="page"\n                    :limit="limit"\n                    :total="total"\n                    :total-visible="7"\n                    @page-change="onPageChange"\n                />\n                {% endblock %}\n            </template>\n\n            <template\n                #actions="{ item }"\n            >\n                \n                {% block sw_settings_logging_list_content_listing_actions %}\n                <sw-context-menu-item @click="showInfoModal(item)">\n                    \n                    {% block sw_settings_logging_list_content_listing_action_show_label %}\n                    {{ $tc(\'sw-settings-logging.list.actionShowInfo\') }}\n                    {% endblock %}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n\n        </sw-entity-listing>\n        {% endblock %}\n\n        \n        {% block sw_settings_logging_list_content_info_modal %}\n        <component\n            :is="modalNameFromLogEntry"\n            v-if="displayedLog !== null"\n            :log-entry="displayedLog"\n            @close="closeInfoModal"\n        />\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_logging_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar class="sw-settings-logging-list__sidebar">\n            \n            {% block sw_settings_logging_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-settings-logging.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[s.getByName("sw-settings-list"),s.getByName("placeholder")],data(){return{entityName:"log_entry",sortBy:"log_entry.createdAt",sortDirection:"DESC",isLoading:!0,logs:[],displayedLog:null,logLevels:{Debug:100,Info:200,Notice:250,Warning:300,Error:400,Critical:500,Alert:550,Emergency:600}}},metaInfo(){return{title:this.$createTitle()}},computed:{logEntryRepository(){return this.repositoryFactory.create("log_entry")},logColumns(){return this.getLogColumns()},modalNameFromLogEntry(){let t=this.displayedLog.message.replace(/[._]/g,"-");return this.$options.components[`sw-settings-logging-${t}-info`]?`sw-settings-logging-${t}-info`:"sw-settings-logging-entry-info"},dateFilter(){return Shopware.Filter.getByName("date")}},methods:{showInfoModal(t){this.displayedLog=t},closeInfoModal(){this.displayedLog=null},getList(){this.isLoading=!0;let t=new i(this.page,this.limit);return t.setTerm(this.term),t.addSorting(i.sort(this.sortBy,this.sortDirection)),this.logEntryRepository.search(t).then(t=>(this.total=t.total,this.logs=t,this.isLoading=!1,t)).catch(()=>{this.isLoading=!1})},logLevelToString(t){let n=Object.values(this.logLevels).map(n=>Math.abs(n-t)),e=Object.keys(this.logLevels)[n.findIndex(t=>t===Math.min(...n))];return this.$tc(`sw-settings-logging.list.level${e}`)},getLogColumns(){return[{property:"createdAt",dataIndex:"createdAt",label:"sw-settings-logging.list.columnDate",allowResize:!0,primary:!0},{property:"message",dataIndex:"message",label:"sw-settings-logging.list.columnMessage",allowResize:!0},{property:"level",dataIndex:"level",label:"sw-settings-logging.list.columnLevel",allowResize:!0},{property:"context",dataIndex:"context",label:"sw-settings-logging.list.columnContent",allowResize:!0}]}}}}}]);