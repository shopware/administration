(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[274],{fbLt:function(t,e,i){},g5ru:function(t,e,i){"use strict";i.r(e);var o=i("7yzw"),n=i.n(o),r=i("6lmj"),s=i.n(r),a=i("92Mt"),l=i.n(a),c=(i("ohDV"),Shopware.Mixin),p=Shopware.Data.Criteria,d=Shopware.Utils.format;e.default={template:'\n{% block sw_import_export_activity %}\n<div class="sw-import-export-activity">\n    \n    {% block sw_import_export_activity_listing %}\n    <sw-entity-listing\n        v-if="showGrid"\n        :repository="logRepository"\n        :items="logs"\n        :columns="exportActivityColumns"\n        sort-by="createdAt"\n        sort-direction="DESC"\n        :show-selection="false"\n        :allow-column-edit="false"\n        :full-page="true"\n    >\n        \n        {% block sw_import_export_activity_listing_size %}\n        <template #column-file.size="{ item }">\n            {{ calculateFileSize(item.file.size) }}\n        </template>\n        {% endblock %}\n        \n        {% block sw_import_export_activity_listing_records %}\n        <template #column-records="{ item }">\n            {{ item.records }}\n        </template>\n        {% endblock %}\n        <template #column-label-invalidRecords="{ column }">\n            {{ $te(column.label) ? $tc(column.label) : column.label }}\n            <sw-help-text\n                class="sw-import-export-activity__invalid-records-help-text"\n                :text="$tc(\'sw-import-export.activity.invalidHelpText\')"\n            />\n        </template>\n        \n        {% block sw_import_export_activity_listing_invalid_records %}\n        <template #column-invalidRecords="{ item }">\n            <template v-if="item.invalidRecordsLog">\n                {{ item.invalidRecordsLog.records }}\n            </template>\n            <template v-else>\n                0\n            </template>\n        </template>\n        {% endblock %}\n        \n        {% block sw_import_export_activity_listing_createdAt %}\n        <template #column-createdAt="{ item }">\n            <sw-label\n                v-if="item.activity === \'dryrun\'"\n                size="small"\n                appearance="pill"\n            >\n                {{ $tc(\'sw-import-export.activity.dryrun\') }}\n            </sw-label>\n            <a\n                href="#"\n                @click.prevent="onShowLog(item)"\n            >\n                {{ dateFilter(item.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n            </a>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_activity_listing_state %}\n        <template #column-state="{ item }">\n            <sw-color-badge\n                v-if="item.state === \'failed\'"\n                variant="error"\n                rounded\n            />\n            <sw-color-badge\n                v-else-if="item.state === \'succeeded\'"\n                variant="success"\n                rounded\n            />\n            <sw-color-badge\n                v-else\n                rounded\n            />\n            <span :class="getStateClass(item.state)">{{ getStateLabel(item.state) }}</span>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_activity_listing_actions %}\n        <template #actions="{ item }">\n            \n            {% block sw_import_export_activity_listing_actions_show_results %}\n            <sw-context-menu-item\n                v-if="item.result && Object.keys(item.result).length"\n                class="sw-import-export-activity__results-action"\n                @click="onShowResult(item)"\n            >\n                {{ $tc(\'sw-import-export.activity.contextMenu.showResults\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_show_log_info %}\n            <sw-context-menu-item\n                v-if="type === \'export\'"\n                class="sw-import-export-activity__log-info-action"\n                @click="onShowLog(item)"\n            >\n                {{ $tc(\'sw-import-export.activity.contextMenu.showLogInfo\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_download_file %}\n            <a\n                class="sw-import-export-activity__download-action"\n                role="button"\n                tabindex="0"\n                @click="openProcessFileDownload(item)"\n                @keydown.enter="openProcessFileDownload(item)"\n            >\n                <sw-context-menu-item :disabled="type === \'export\' && item.state !== \'succeeded\'">\n                    {{ downloadFileText }}\n                </sw-context-menu-item>\n            </a>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_open_profile %}\n            <sw-context-menu-item @click="onOpenProfile(item.profileId)">\n                {{ $tc(\'sw-import-export.activity.contextMenu.showProfile\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_abort_process %}\n            <sw-context-menu-item\n                v-if="item.state === \'progress\'"\n                class="sw-import-export-activity__abort-process-action"\n                variant="danger"\n                @click="onAbortProcess(item)"\n            >\n                {{ $tc(\'sw-import-export.activity.contextMenu.abortProcess\') }}\n            </sw-context-menu-item>\n            {% endblock %}\n            \n            {% block sw_import_export_activity_listing_actions_download_invalid %}\n            <template v-if="item.invalidRecordsLog">\n                <a\n                    class="sw-import-export-activity__download-action"\n                    role="button"\n                    tabindex="0"\n                    @click="openProcessFileDownload(item.invalidRecordsLog)"\n                    @keydown.enter="openProcessFileDownload(item.invalidRecordsLog)"\n                >\n                    <sw-context-menu-item>\n                        {{ $tc(\'sw-import-export.activity.contextMenu.downloadInvalidFile\') }}\n                    </sw-context-menu-item>\n                </a>\n            </template>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-entity-listing>\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_spinner %}\n    <sw-loader v-else-if="showSpinner" />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_empty_state %}\n    <sw-empty-state\n        v-if="showEmptyState"\n        :title="emptyStateTitle"\n        :subline="emptyStateSubLine"\n        :absolute="false"\n        icon="regular-database"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_log_info_modal %}\n    <sw-import-export-activity-log-info-modal\n        v-if="showDetailModal"\n        :log-entity="selectedLog"\n        @log-close="closeSelectedLog"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_result_modal %}\n    <sw-import-export-activity-result-modal\n        v-if="showResultModal"\n        :log-entity="selectedLog"\n        :result="selectedResult"\n        @result-close="closeSelectedResult"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_activity_modal %}\n    <sw-import-export-edit-profile-modal\n        :profile="selectedProfile"\n        @profile-save="saveSelectedProfile"\n        @profile-close="closeSelectedProfile"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","importExport","feature"],mixins:[c.getByName("notification")],props:{type:{type:String,required:!1,default:"import",validValues:["import","export"],validator:function(t){return["import","export"].includes(t)}}},data:function(){return{logs:null,isLoading:!1,selectedProfile:null,selectedLog:null,selectedResult:null,activitiesReloadIntervall:1e4,activitiesReloadTimer:null,showDetailModal:!1,showResultModal:!1,stateText:{import:{succeeded:"sw-import-export.importer.messageImportSuccess",failed:"sw-import-export.importer.messageImportError"},dryrun:{succeeded:"sw-import-export.importer.messageImportSuccess",failed:"sw-import-export.importer.messageImportError"},export:{succeeded:"sw-import-export.exporter.messageExportSuccess"}}}},computed:{logRepository:function(){return this.repositoryFactory.create("import_export_log")},profileRepository:function(){return this.repositoryFactory.create("import_export_profile")},activityCriteria:function(){var t=new Shopware.Data.Criteria;return"import"===this.type?(t.addFilter(p.multi("OR",[p.equals("activity","import"),p.equals("activity","dryrun")])),t.getAssociation("invalidRecordsLog").addAssociation("file")):"export"===this.type&&t.addFilter(p.equals("activity","export")),t.addSorting(p.sort("createdAt","DESC")),t.setPage(1),t.addAssociation("user"),t.addAssociation("file"),t.addAssociation("profile"),t},exportActivityColumns:function(){return[{property:"createdAt",dataIndex:"createdAt",label:"sw-import-export.activity.columns.date",allowResize:!0,primary:!0},{property:"profileName",dataIndex:"profile.label",label:"sw-import-export.activity.columns.profile",allowResize:!0,primary:!1},{property:"state",dataIndex:"state",label:"sw-import-export.activity.columns.state",allowResize:!0,primary:!1},{property:"records",dataIndex:"records",label:"sw-import-export.activity.columns.records",allowResize:!0,primary:!1}].concat(s()("import"===this.type?[{property:"invalidRecords",dataIndex:"records",label:"sw-import-export.activity.columns.invalidRecords",allowResize:!0,primary:!1}]:[]),[{property:"file.size",dataIndex:"file.size",label:"sw-import-export.activity.columns.size",allowResize:!0,primary:!1},{property:"user.lastName",dataIndex:"user.lastName",label:"sw-import-export.activity.columns.user",allowResize:!0,primary:!1}])},hasActivitiesInProgress:function(){return!!this.logs&&this.logs.filter((function(t){return"progress"===t.state})).length>0},downloadFileText:function(){return"export"===this.type?this.$tc("sw-import-export.activity.contextMenu.downloadExportFile"):this.$tc("sw-import-export.activity.contextMenu.downloadImportFile")},showGrid:function(){var t;return!this.isLoading&&!(null===(t=this.logs)||void 0===t||!t.length)>0},showEmptyState:function(){var t;return!this.isLoading&&!(null===(t=this.logs)||void 0===t||!t.length)<=0},showSpinner:function(){return this.isLoading},emptyStateSubLine:function(){return"export"===this.type?this.$tc("sw-import-export.activity.emptyState.subLineExport"):this.$tc("sw-import-export.activity.emptyState.subLineImport")},emptyStateTitle:function(){return"export"===this.type?this.$tc("sw-import-export.activity.emptyState.titleExport"):this.$tc("sw-import-export.activity.emptyState.titleImport")},dateFilter:function(){return Shopware.Filter.getByName("date")}},watch:{hasActivitiesInProgress:function(t){t&&!this.activitiesReloadTimer?this.activitiesReloadTimer=window.setInterval(this.updateActivitiesInProgress.bind(this),this.activitiesReloadIntervall):this.activitiesReloadTimer&&(window.clearInterval(this.activitiesReloadTimer),this.activitiesReloadTimer=null)}},created:function(){this.createdComponent()},destroyed:function(){this.activitiesReloadTimer&&window.clearInterval(this.activitiesReloadTimer)},methods:{createdComponent:function(){return this.fetchActivities()},addActivity:function(t){this.logs.addAt(t,0)},fetchActivities:function(){var t=this;return n()(l.a.mark((function e(){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.logRepository.search(t.activityCriteria);case 3:i=e.sent,t.logs&&t.updateActivitiesFromLogs(i),t.logs=i,t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},updateActivitiesInProgress:function(){var t=this;return n()(l.a.mark((function e(){var i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=p.fromCriteria(t.activityCriteria)).setIds(t.logs.filter((function(t){return"progress"===t.state})).getIds()),i.addAssociation("file"),e.next=5,t.logRepository.search(i);case 5:o=e.sent,t.updateActivitiesFromLogs(o);case 7:case"end":return e.stop()}}),e)})))()},updateActivitiesFromLogs:function(t){var e=this;Object.values(t).forEach((function(t){var i,o,n,r=e.logs.get(t.id);if(r){var s=r.state;if(Object.keys(t).forEach((function(e){r[e]=t[e]})),s!==t.state){var a={message:e.$t(null!==(i=null===(o=e.stateText)||void 0===o||null===(n=o[t.activity])||void 0===n?void 0:n[t.state])&&void 0!==i?i:"",{profile:t.profileName}),autoClose:!1};if("succeeded"===t.state)return e.createNotificationSuccess(a),void("import"===t.activity&&0===t.records&&e.createNotificationWarning({message:e.$tc("sw-import-export.importer.messageImportWarning",0),autoClose:!1}));e.createNotificationError(a)}}}))},onOpenProfile:function(t){var e=this;return n()(l.a.mark((function i(){return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.profileRepository.get(t);case 2:e.selectedProfile=i.sent;case 3:case"end":return i.stop()}}),i)})))()},onAbortProcess:function(t){var e=this;this.importExport.cancel(t.id).then((function(){e.fetchActivities()}))},closeSelectedProfile:function(){this.selectedProfile=null},onShowLog:function(t){this.selectedLog=t,this.showDetailModal=!0},onShowResult:function(t){this.selectedLog=t,this.showResultModal=!0},closeSelectedLog:function(){this.selectedLog=null,this.showDetailModal=!1},closeSelectedResult:function(){this.selectedResult=null,this.showResultModal=!1},openProcessFileDownload:function(t){var e=this;return n()(l.a.mark((function i(){return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if("export"!==e.type||"succeeded"===t.state){i.next=2;break}return i.abrupt("return",null);case 2:return i.t0=window,i.next=5,e.importExport.getDownloadUrl(t.fileId);case 5:return i.t1=i.sent,i.abrupt("return",i.t0.open.call(i.t0,i.t1,"_blank"));case 7:case"end":return i.stop()}}),i)})))()},saveSelectedProfile:function(){var t=this;this.isLoading=!0,this.profileRepository.save(this.selectedProfile).then((function(){t.selectedProfile=null,t.createNotificationSuccess({message:t.$tc("sw-import-export.profile.messageSaveSuccess",0)})})).catch((function(){t.createNotificationError({message:t.$tc("sw-import-export.profile.messageSaveError",0)})})).finally((function(){t.isLoading=!1}))},calculateFileSize:function(t){return d.fileSize(t)},getStateLabel:function(t){var e="sw-import-export.activity.status.".concat(t);return this.$te(e)?this.$tc(e):t},getStateClass:function(t){return{"sw-import-export-activity__progress-indicator":"progress"===t}}}}},ohDV:function(t,e,i){var o=i("fbLt");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("P8hj").default)("e7b10830",o,!0,{})}}]);
//# sourceMappingURL=b3b6d202d6d936b53905.js.map