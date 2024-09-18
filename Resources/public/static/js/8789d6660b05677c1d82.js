(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[25110],{347912:function(){},925110:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return n}}),r(241387);let{Mixin:o}=Shopware,{Criteria:i}=Shopware.Data;var n={template:'\n{% block sw_import_export_importer %}\n<div class="sw-import-export-importer">\n    \n    {% block sw_import_export_importer_upload_csv_label %}\n    <h2>{{ $tc(\'sw-import-export.importer.uploadCsvLabel\') }}</h2>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_warning_block %}\n    <p><span v-html="$tc(\'sw-import-export.importer.warningBlock\')"></span></p>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_file_input %}\n    <sw-file-input\n        :key="isLoading"\n        v-model:value="importFile"\n    >\n        <template #caption-label>\n            {{ $tc(\'sw-import-export.importer.labelUploadCaption\') }}\n        </template>\n    </sw-file-input>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_select_profile_label %}\n    <h2>{{ $tc(\'sw-import-export.importer.selectProfileLabel\') }}</h2>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_profile_select %}\n    <sw-entity-single-select\n        class="sw-import-export-importer__profile-select"\n        :disabled="isLoading"\n        :label="$tc(\'sw-import-export.importer.profileLabel\')"\n        entity="import_export_profile"\n        label-property="label"\n        :criteria="profileCriteria"\n        :value="selectedProfileId"\n        required\n        @update:value="onProfileSelect"\n    />\n    {% endblock %}\n\n    <template v-if="selectedProfile && selectedProfile.sourceEntity === \'product\'">\n        \n        {% block sw_import_export_importer_profile_select_product_variants_switch %}\n        <sw-switch-field\n            v-model:value="config.includeVariants"\n            class="sw-import-export-importer__variants-switch-field"\n            :label="$tc(\'sw-import-export.importer.importVariants\')"\n        />\n        {% endblock %}\n    </template>\n\n    <template v-if="showProductVariantsInfo">\n        \n        {% block sw_import_export_importer_product_variants_warning %}\n        <sw-alert\n            variant="warning"\n            class="sw-import-export-importer__variants-warning"\n        >\n            \n            {% block sw_import_export_importer_product_variants_warning_text %}\n            <p>\n                <span v-html="$tc(\'sw-import-export.importer.variantsWarning\')"></span>\n            </p>\n            <p>\n                <a\n                    href="#"\n                    class="sw-import-export-importer__link"\n                    @click.prevent="setImportModalProfile(\'product_configurator_setting\')"\n                >\n                    {{ $tc(\'sw-import-export.importer.directImportVariantsLabel\') }}\n                </a>\n                <br>\n                <a\n                    href="#"\n                    class="sw-import-export-importer__link"\n                    @click.prevent="setImportModalProfile(\'property_group_option\')"\n                >\n                    {{ $tc(\'sw-import-export.importer.directImportPropertiesLabel\') }}\n                </a>\n            </p>\n            {% endblock %}\n        </sw-alert>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_import_export_importer_modal %}\n    <sw-modal\n        v-if="importModalProfile"\n        :title="$tc(\'sw-import-export.importer.importLabel\')"\n        @modal-close="setImportModalProfile(null)"\n    >\n        \n        {% block sw_import_export_importer_modal_exporter %}\n        <sw-import-export-importer\n            :source-entity="importModalProfile"\n            @import-started="$emit(\'import-started\', $event)"\n        />\n        {% endblock %}\n\n        <template #modal-footer>\n            \n            {% block sw_import_export_importer_modal_footer %}\n            <sw-button\n                size="small"\n                @click="setImportModalProfile(null)"\n            >\n                {{ $tc(\'sw-import-export.importer.close\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_progress %}\n    <sw-import-export-progress\n        activity-type="import"\n        :disable-button="disableImporting"\n        @process-start="onStartProcess"\n        @process-start-dryrun="onStartDryRunProcess"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["importExport","repositoryFactory","feature"],emits:["import-started"],mixins:[o.getByName("notification")],props:{sourceEntity:{type:String,required:!1,default:""}},data(){return{selectedProfileId:null,selectedProfile:null,config:{},isLoading:!1,importFile:null,importModalProfile:null}},computed:{profileCriteria(){let t=new i(1,25);return t.addSorting(i.sort("label")),this.sourceEntity.length>0&&t.addFilter(i.equals("sourceEntity",this.sourceEntity)),t.addFilter(i.not("AND",[i.equals("type","export")])),t},logRepository(){return this.repositoryFactory.create("import_export_log")},disableImporting(){return this.isLoading||null===this.selectedProfileId||null===this.importFile},showProductVariantsInfo(){return this.selectedProfile&&"product"===this.selectedProfile.sourceEntity&&this.config&&this.config.includeVariants},logCriteria(){let t=new i(1,25);return t.addAssociation("invalidRecordsLog"),t.addAssociation("file"),t}},methods:{onProfileSelect(t,e){this.selectedProfileId=t,this.selectedProfile=e},onStartProcess(t=!1){this.isLoading=!0;let e=this.selectedProfileId;this.importExport.import(e,this.importFile,this.handleProgress,this.config,t).then(()=>{this.importFile=null}).catch(t=>{t.response&&t.response.data&&t.response.data.errors?t.response.data.errors.forEach(t=>{this.createNotificationError({message:`${t.code}: ${t.detail}`})}):this.createNotificationError({message:t.message}),this.isLoading=!1})},onStartDryRunProcess(){this.onStartProcess(!0)},handleProgress(t){this.createNotificationInfo({message:this.$tc("sw-import-export.importer.messageImportStarted")}),this.isLoading=!1,this.$emit("import-started",t)},setImportModalProfile(t){this.importModalProfile=t}}}},241387:function(t,e,r){var o=r(347912);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals),r(745346).Z("1985d7fb",o,!0,{})}}]);