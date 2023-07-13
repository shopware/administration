(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[287],{bTKK:function(t,i,e){"use strict";e.r(i);e("neo9"),i.default={template:'\n{% block sw_import_export_view_import %}\n<div class="sw-import-export-view-import">\n    \n    {% block sw_import_export_view_import_importer %}\n    <sw-card\n        :title="$tc(\'sw-import-export.importer.importLabel\')"\n        position-identifier="sw-import-export-view-import"\n    >\n        <sw-import-export-importer\n            @import-started="reloadContent"\n        />\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_import_export_view_import_activity %}\n    <sw-card\n        class="sw-import-export-view-import__activity"\n        position-identifier="sw-import-export-view-import-log-activity"\n    >\n        \n        {% block sw_import_export_view_import_activity_title %}\n        <template #title>\n            <div class="sw-card__title">\n                {{ $tc(\'sw-import-export.importer.importActivityLabel\') }}\n                <p class="sw-import-export__card-subtitle">\n                    {{ $tc(\'sw-import-export.exporter.exportActivityDescription\') }}\n                </p>\n            </div>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_import_export_view_import_activity_grid %}\n        <template #grid>\n            <sw-import-export-activity\n                ref="activityGrid"\n                type="import"\n            />\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',metaInfo:function(){return{title:this.$createTitle()}},methods:{reloadContent:function(t){this.$refs.activityGrid.addActivity(t),this.$refs.activityGrid.fetchActivities()}}}},eIIR:function(t,i,e){},neo9:function(t,i,e){var o=e("eIIR");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("ydqr").default)("fe6ed22e",o,!0,{})}}]);