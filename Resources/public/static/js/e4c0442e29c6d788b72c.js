(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[45885],{144286:function(){},145885:function(t,i,o){"use strict";o.r(i),o.d(i,{default:function(){return e}}),o(752752);var e={template:'\n{% block sw_import_export_view_import %}\n<div class="sw-import-export-view-import">\n    \n    {% block sw_import_export_view_import_importer %}\n    <sw-card\n        :title="$tc(\'sw-import-export.importer.importLabel\')"\n        position-identifier="sw-import-export-view-import"\n    >\n        <sw-import-export-importer\n            @import-started="reloadContent"\n        />\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_import_export_view_import_activity %}\n    <sw-card\n        class="sw-import-export-view-import__activity"\n        position-identifier="sw-import-export-view-import-log-activity"\n    >\n        \n        {% block sw_import_export_view_import_activity_title %}\n        <template #title>\n            <div class="sw-card__title">\n                {{ $tc(\'sw-import-export.importer.importActivityLabel\') }}\n                <p class="sw-import-export__card-subtitle">\n                    {{ $tc(\'sw-import-export.exporter.exportActivityDescription\') }}\n                </p>\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_view_import_activity_grid %}\n        <template #grid>\n            <sw-import-export-activity\n                ref="activityGrid"\n                type="import"\n            />\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,metaInfo(){return{title:this.$createTitle()}},methods:{reloadContent(t){this.$refs.activityGrid.addActivity(t),this.$refs.activityGrid.fetchActivities()}}}},752752:function(t,i,o){var e=o(144286);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals),o(745346).Z("2accd73e",e,!0,{})}}]);