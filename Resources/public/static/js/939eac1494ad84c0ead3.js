(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[454],{"K/Ip":function(t,e,n){},Uuud:function(t,e,n){var i=n("K/Ip");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("P8hj").default)("c195584a",i,!0,{})},jI7k:function(t,e,n){"use strict";n.r(e);var i=n("7yzw"),s=n.n(i),r=n("92Mt"),l=n.n(r),a=(n("Uuud"),Shopware.Mixin),o=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_list %}\n\n{% block sw_settings_rule_index %}\n<sw-page class="sw-settings-rule-list">\n\n    \n    {% block sw_settings_rule_list_search_bar %}\n    <template #search-bar>\n        <sw-search-bar\n            initial-search-type="rule"\n            :placeholder="$tc(\'sw-settings-rule.general.placeholderSearchBar\')"\n            :initial-search="term"\n            @search="onSearch"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_list_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_rule_list_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_rule_list_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }} <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            /> {{ $tc(\'sw-settings-rule.list.textHeadline\') }}\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_list_smart_bar_header_title_amount %}\n            <span\n                v-if="!isLoading"\n                class="sw-page__smart-bar-amount"\n            >\n                ({{ total }})\n            </span>\n            {% endblock %}\n        </h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_rule_list_smart_bar_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_rule_list_smart_bar_actions_add %}\n        <sw-button\n            v-tooltip="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'rule.creator\'),\n                showOnDisabledElements: true\n            }"\n            :router-link="{ name: \'sw.settings.rule.create\' }"\n            :disabled="!acl.can(\'rule.creator\')"\n            variant="primary"\n        >\n            {{ $tc(\'sw-settings-rule.list.buttonAddRule\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    <template #language-switch>\n        <sw-language-switch\n            @on-change="onChangeLanguage"\n        />\n    </template>\n\n    \n    {% block sw_settings_rule_list_content %}\n    <template #content>\n        \n        {% block sw_settings_rule_list_content_card %}\n        <div class="sw-settings-rule-list__content">\n            \n            {% block sw_settings_rule_list_grid %}\n            <sw-entity-listing\n                v-if="isLoading || rules"\n                ref="swRuleGrid"\n                identifier="sw-settings-rule-list"\n                class="sw-rule-list-grid"\n                :items="rules"\n                :columns="getRuleColumns()"\n                :repository="ruleRepository"\n                :is-loading="isLoading"\n                :full-page="true"\n                :show-selection="acl.can(\'rule.deleter\')"\n                :allow-edit="acl.can(\'rule.editor\')"\n                :allow-delete="acl.can(\'rule.deleter\')"\n                detail-route="sw.settings.rule.detail"\n                :disable-data-fetching="true"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                @column-sort="onSortColumn"\n                @page-change="onPageChange"\n                @inline-edit-save="onInlineEditSave"\n                @items-delete-finish="getList"\n            >\n\n                \n                {% block sw_settings_rule_list_grid_column_tags %}\n                <template #column-tags="{ item }">\n                    <span class="sw-data-grid__cell-value">\n                        <sw-label\n                            v-for="tag in item.tags"\n                            :key="tag.id"\n                        >\n                            {{ tag.name }}\n                        </sw-label>\n                    </span>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_rule_list_grid_column_assignments %}\n                <template\n                    v-for="(propertyName, index) in assignmentProperties"\n                    {% if VUE3 %}\n                    :key="index"\n                    {% endif %}\n                    #[`column-${propertyName}`]="{ item }"\n                >\n                    <span\n                        {% if VUE2 %}\n                        :key="index"\n                        {% endif %}\n                        class="sw-data-grid__cell-value"\n                    >\n                        {{ getCounts(propertyName, item.id) }}\n                        {{ $tc(`sw-settings-rule.list.assignments.${propertyName}`, getCounts(propertyName, item.id)) }}\n                    </span>\n                </template>\n                {% endblock %}\n\n                <template #column-invalid="{item}">\n                    <template v-if="item.invalid">\n                        {{ $tc(\'sw-settings-rule.list.invalid\') }}\n                    </template>\n                    <template v-else>\n                        {{ $tc(\'sw-settings-rule.list.valid\') }}\n                    </template>\n                </template>\n\n                <template #column-updatedAt="{item}">\n                    {{ dateFilter(item.updatedAt) }}\n                </template>\n\n                <template #column-createdAt="{item}">\n                    {{ dateFilter(item.createdAt) }}\n                </template>\n\n                \n                {% block sw_settings_rule_list_grid_columns_actions %}\n                <template #more-actions="{ item }">\n                    \n                    {% block sw_settings_rule_list_grid_columns_actions_duplicate %}\n                    <sw-context-menu-item\n                        :disabled="!acl.can(\'rule.creator\')"\n                        @click="onDuplicate(item)"\n                    >\n                        {{ $tc(\'sw-settings-rule.list.contextMenuDuplicate\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n                {% endblock %}\n            </sw-entity-listing>\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_list_empty_message %}\n            <sw-empty-state\n                v-else-if="!isLoading && !total"\n                :title="$tc(\'sw-settings-rule.list.messageEmpty\')"\n            />\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_settings_rule_list_sidebar %}\n    <template #sidebar>\n        <sw-sidebar>\n            \n            {% block sw_settings_rule_list_sidebar_refresh %}\n            <sw-sidebar-item\n                icon="regular-undo"\n                :title="$tc(\'sw-settings-rule.list.titleSidebarItemRefresh\')"\n                @click="onRefresh"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_rule_list_sidebar_filter %}\n            <sw-sidebar-filter-panel\n                entity="rule"\n                :store-key="storeKey"\n                :active-filter-number="activeFilterNumber"\n                :filters="listFilters"\n                :defaults="defaultFilters"\n                @criteria-changed="updateCriteria"\n            />\n        {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n    {% endblock %}\n</sw-page>\n    {% endblock %}\n{% endblock %}\n',inject:["repositoryFactory","acl","filterFactory","ruleConditionDataProviderService","filterService"],mixins:[a.getByName("listing"),a.getByName("notification")],data:function(){return{rules:null,isLoading:!1,sortBy:"name",storeKey:"grid.filter.rule",activeFilterNumber:0,defaultFilters:["conditions","conditionGroups","assignments","tags"],filterCriteria:[]}},metaInfo:function(){return{title:this.$createTitle()}},computed:{getRuleDefinition:function(){return Shopware.EntityDefinition.get("rule")},ruleRepository:function(){return this.repositoryFactory.create("rule")},conditionFilterOptions:function(){var t=this,e=this.ruleConditionDataProviderService.getConditions().map((function(e){return{value:e.type,label:t.$tc(e.label)}}));return e.sort((function(t,e){return t.label.localeCompare(e.label)})),e},groupFilterOptions:function(){var t=this,e=[];return Object.values(this.ruleConditionDataProviderService.getGroups()).forEach((function(n){var i=t.ruleConditionDataProviderService.getByGroup(n.id).map((function(t){return t.type})).join("|");e.push({value:i,label:t.$tc(n.name)})})),e.sort((function(t,e){return t.label.localeCompare(e.label)})),e},associationFilterOptions:function(){var t=this,e=[];return this.assignmentProperties.forEach((function(n){e.push({value:n,label:t.$tc("sw-settings-rule.filter.assignmentFilter.values.".concat(n))})})),e.sort((function(t,e){return t.label.localeCompare(e.label)})),e},listFilters:function(){var t={conditionGroups:{property:"conditions.type",label:this.$tc("sw-settings-rule.filter.groupFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.groupFilter.placeholder"),type:"multi-select-filter",options:this.groupFilterOptions},conditions:{property:"conditions.type",label:this.$tc("sw-settings-rule.filter.conditionFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.conditionFilter.placeholder"),type:"multi-select-filter",options:this.conditionFilterOptions},assignments:{existingType:!0,property:"conditions",label:this.$tc("sw-settings-rule.filter.assignmentFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.assignmentFilter.placeholder"),type:"multi-select-filter",options:this.associationFilterOptions},tags:{property:"tags",label:this.$tc("sw-settings-rule.filter.tagFilter.label"),placeholder:this.$tc("sw-settings-rule.filter.tagFilter.placeholder"),criteria:new o(1,25).addSorting(o.sort("name"))}};return this.filterFactory.create("rule",t)},listCriteria:function(){var t=new o(this.page,this.limit);t.setTerm(this.term);var e=["createdAt","updatedAt"].includes(this.sortBy),n=o.sort(this.sortBy,this.sortDirection,e);return this.assignmentProperties.includes(this.sortBy)&&(n.field+=".id",n.type="count"),t.addSorting(n),t.addAssociation("tags"),this.setAggregations(t),this.filterCriteria.forEach((function(e){t.addFilter(e)})),t},assignmentProperties:function(){var t=this,e=[];return Object.keys(this.getRuleDefinition.properties).forEach((function(n){if("conditions"!==n&&"tags"!==n){var i=t.getRuleDefinition.properties[n];"many_to_many"!==i.relation&&"one_to_many"!==i.relation||e.push(n)}})),e},dateFilter:function(){return Shopware.Filter.getByName("date")}},methods:{setAggregations:function(t){var e=this;Object.keys(this.getRuleDefinition.properties).forEach((function(n){if("conditions"!==n&&"tags"!==n){var i=e.getRuleDefinition.properties[n];"many_to_many"!==i.relation&&"one_to_many"!==i.relation||t.addAggregation(o.terms(n,"id",null,null,o.count(n,"rule.".concat(n,".id"))))}}))},getCounts:function(t,e){var n=this.rules.aggregations[t].buckets.filter((function(t){return t.key===e}))[0];return n[t]&&n[t].count?n[t].count:0},getList:function(){var t=this;return s()(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.filterService.mergeWithStoredFilters(t.storeKey,t.listCriteria);case 3:n=e.sent,t.activeFilterNumber=n.filters.length,t.ruleRepository.search(n).then((function(e){return t.total=e.total,t.rules=e,t.isLoading=!1,e})).catch((function(){t.isLoading=!1}));case 6:case"end":return e.stop()}}),e)})))()},onChangeLanguage:function(t){Shopware.State.commit("context/setApiLanguageId",t),this.getList()},onDuplicate:function(t){var e=this,n={overwrites:{name:"".concat(t.name," ").concat(this.$tc("global.default.copy")),createdAt:null}};this.ruleRepository.clone(t.id,Shopware.Context.api,n).then((function(t){e.$router.push({name:"sw.settings.rule.detail",params:{id:t.id}})}))},onInlineEditSave:function(t,e){var n=this;this.isLoading=!0,t.then((function(){n.isLoading=!1,n.createNotificationSuccess({message:n.$tc("sw-settings-rule.detail.messageSaveSuccess",0,{name:e.name})})})).catch((function(){n.getList(),n.createNotificationError({message:n.$tc("sw-settings-rule.detail.messageSaveError")})}))},updateCriteria:function(t){return this.page=1,this.filterCriteria=t,this.getList()},getRuleColumns:function(){var t=[{property:"name",dataIndex:"name",inlineEdit:"string",label:"sw-settings-rule.list.columnName",routerLink:"sw.settings.rule.detail",width:"250px",allowResize:!0,primary:!0},{property:"priority",label:"sw-settings-rule.list.columnPriority",inlineEdit:"number",allowResize:!0},{property:"description",label:"sw-settings-rule.list.columnDescription",width:"250px",allowResize:!0},{property:"updatedAt",label:"sw-settings-rule.list.columnDateUpdated",align:"right",allowResize:!0},{property:"createdAt",label:"sw-settings-rule.list.columnDateCreated",align:"right",allowResize:!0},{property:"invalid",label:"sw-settings-rule.list.columnStatus",allowResize:!0},{property:"tags",label:"sw-settings-rule.list.columnTags",width:"250px",allowResize:!0,sortable:!1,visible:!1}];return this.assignmentProperties.forEach((function(e){var n=e.charAt(0).toUpperCase()+e.slice(1);t.push({property:"".concat(e),label:"sw-settings-rule.list.column".concat(n),width:"250px",allowResize:!0,sortable:!0,visible:!1})})),t}}}}}]);