(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[23306],{253529:function(){},123306:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}}),r(24550);let{Mixin:o}=Shopware,{Criteria:n}=Shopware.Data;var i={template:'\n{% block sw_import_export_exporter %}\n<div class="sw-import-export-exporter">\n    \n    {% block sw_import_export_exporter_header %}\n    <h2>{{ $tc(\'sw-import-export.importer.selectProfileLabel\') }}</h2>\n    {% endblock %}\n\n    \n    {% block sw_import_export_exporter_profile_select %}\n    <sw-entity-single-select\n        class="sw-import-export-exporter__profile-select"\n        :disabled="isLoading"\n        :label="$tc(\'sw-import-export.importer.profileLabel\')"\n        :criteria="profileCriteria"\n        entity="import_export_profile"\n        label-property="label"\n        :value="selectedProfileId"\n        required\n        show-clearable-button\n        @update:value="onProfileSelect"\n    />\n    {% endblock %}\n\n    <template v-if="selectedProfile && selectedProfile.sourceEntity === \'product\'">\n        \n        {% block sw_import_export_exporter_profile_select_product_variants_switch %}\n        <sw-switch-field\n            v-model:value="config.parameters.includeVariants"\n            class="sw-import-export-exporter__variants-switch-field"\n            :label="$tc(\'sw-import-export.exporter.exportVariants\')"\n        />\n        {% endblock %}\n    </template>\n\n    <template v-if="showProductVariantsInfo">\n        \n        {% block sw_import_export_exporter_product_variants_warning %}\n        <sw-alert\n            variant="warning"\n            class="sw-import-export-exporter__variants-warning"\n        >\n            \n            {% block sw_import_export_exporter_product_variants_warning_text %}\n            <p>\n                <span v-html="$tc(\'sw-import-export.exporter.variantsWarning\')"></span>\n            </p>\n            <p>\n                <a\n                    href="#"\n                    class="sw-import-export-exporter__link"\n                    @click.prevent="setExportModalProfile(\'product_configurator_setting\')"\n                >\n                    {{ $tc(\'sw-import-export.exporter.directExportVariantsLabel\') }}\n                </a>\n                <br>\n                <a\n                    href="#"\n                    class="sw-import-export-exporter__link"\n                    @click.prevent="setExportModalProfile(\'property_group_option\')"\n                >\n                    {{ $tc(\'sw-import-export.exporter.directExportPropertiesLabel\') }}\n                </a>\n            </p>\n            {% endblock %}\n        </sw-alert>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_import_export_exporter_modal %}\n    <sw-modal\n        v-if="exportModalProfile"\n        :title="$tc(\'sw-import-export.exporter.exportLabel\')"\n        @modal-close="setExportModalProfile(null)"\n    >\n        \n        {% block sw_import_export_exporter_modal_exporter %}\n        <sw-import-export-exporter\n            :source-entity="exportModalProfile"\n            @export-started="$emit(\'export-started\', $event)"\n        />\n        {% endblock %}\n\n        <template #modal-footer>\n            \n            {% block sw_import_export_exporter_modal_footer %}\n            <sw-button\n                size="small"\n                @click="setExportModalProfile(null)"\n            >\n                {{ $tc(\'sw-import-export.exporter.close\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_import_export_exporter_progress %}\n    <sw-import-export-progress\n        activity-type="export"\n        :disable-button="disableExporting"\n        @process-start="onStartProcess"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["importExport","repositoryFactory","feature"],emits:["export-started"],mixins:[o.getByName("notification")],props:{sourceEntity:{type:String,required:!1,default:""}},data(){return{selectedProfileId:null,selectedProfile:null,config:{parameters:{}},isLoading:!1,exportModalProfile:null}},computed:{profileCriteria(){let e=new n(1,25);return e.addSorting(n.sort("label")),this.sourceEntity.length>0&&e.addFilter(n.equals("sourceEntity",this.sourceEntity)),e.addFilter(n.not("AND",[n.equals("type","import")])),e},disableExporting(){return this.isLoading||null===this.selectedProfileId},showProductVariantsInfo(){return this.selectedProfile&&"product"===this.selectedProfile.sourceEntity&&this.config&&this.config.parameters&&this.config.parameters.includeVariants},logRepository(){return this.repositoryFactory.create("import_export_log")}},methods:{onProfileSelect(e,t){this.selectedProfileId=e,this.selectedProfile=t},onStartProcess(){this.isLoading=!0,this.importExport.export(this.selectedProfileId,this.handleProgress,this.config).catch(e=>{e.response&&e.response.data&&e.response.data.errors?e.response.data.errors.forEach(e=>{this.createNotificationError({message:`${e.code}: ${e.detail}`})}):this.createNotificationError({message:e.message}),this.isLoading=!1})},handleProgress(e){this.createNotificationInfo({message:this.$tc("sw-import-export.exporter.messageExportStarted")}),this.isLoading=!1,this.$emit("export-started",e)},setExportModalProfile(e){this.exportModalProfile=e}}}},24550:function(e,t,r){var o=r(253529);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),r(745346).Z("4a9f7651",o,!0,{})}}]);