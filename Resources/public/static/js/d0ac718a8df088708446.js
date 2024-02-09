(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[283],{JLCs:function(t,e,r){},"Tz+k":function(t,e,r){"use strict";r.r(e);r("dzcr");var o=Shopware.Mixin,n=Shopware.Data.Criteria;e.default={template:'\n{% block sw_import_export_importer %}\n<div class="sw-import-export-importer">\n    \n    {% block sw_import_export_importer_upload_csv_label %}\n    <h2>{{ $tc(\'sw-import-export.importer.uploadCsvLabel\') }}</h2>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_warning_block %}\n    <p><span v-html="$tc(\'sw-import-export.importer.warningBlock\')"></span></p>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_file_input %}\n    <sw-file-input\n        :key="isLoading"\n        {% if VUE3 %}\n        v-model:value="importFile"\n        {% else %}\n        v-model="importFile"\n        {% endif %}\n    >\n        <template #caption-label>\n            {{ $tc(\'sw-import-export.importer.labelUploadCaption\') }}\n        </template>\n    </sw-file-input>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_select_profile_label %}\n    <h2>{{ $tc(\'sw-import-export.importer.selectProfileLabel\') }}</h2>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_profile_select %}\n    <sw-entity-single-select\n        class="sw-import-export-importer__profile-select"\n        :disabled="isLoading"\n        :label="$tc(\'sw-import-export.importer.profileLabel\')"\n        entity="import_export_profile"\n        label-property="label"\n        :criteria="profileCriteria"\n        :value="selectedProfileId"\n        required\n        {% if VUE3 %}\n        @update:value="onProfileSelect"\n        {% else %}\n        @change="onProfileSelect"\n        {% endif %}\n    />\n    {% endblock %}\n\n    <template v-if="selectedProfile && selectedProfile.sourceEntity === \'product\'">\n        \n        {% block sw_import_export_importer_profile_select_product_variants_switch %}\n        <sw-switch-field\n            {% if VUE3 %}\n            v-model:value="config.includeVariants"\n            {% else %}\n            v-model="config.includeVariants"\n            {% endif %}\n            class="sw-import-export-importer__variants-switch-field"\n            :label="$tc(\'sw-import-export.importer.importVariants\')"\n        />\n        {% endblock %}\n    </template>\n\n    <template v-if="showProductVariantsInfo">\n        \n        {% block sw_import_export_importer_product_variants_warning %}\n        <sw-alert\n            variant="warning"\n            class="sw-import-export-importer__variants-warning"\n        >\n            \n            {% block sw_import_export_importer_product_variants_warning_text %}\n            <p>\n                <span v-html="$tc(\'sw-import-export.importer.variantsWarning\')"></span>\n            </p>\n            <p>\n                <a\n                    href="#"\n                    class="sw-import-export-importer__link"\n                    @click.prevent="setImportModalProfile(\'product_configurator_setting\')"\n                >\n                    {{ $tc(\'sw-import-export.importer.directImportVariantsLabel\') }}\n                </a>\n                <br>\n                <a\n                    href="#"\n                    class="sw-import-export-importer__link"\n                    @click.prevent="setImportModalProfile(\'property_group_option\')"\n                >\n                    {{ $tc(\'sw-import-export.importer.directImportPropertiesLabel\') }}\n                </a>\n            </p>\n            {% endblock %}\n        </sw-alert>\n        {% endblock %}\n    </template>\n\n    \n    {% block sw_import_export_importer_modal %}\n    <sw-modal\n        v-if="importModalProfile"\n        :title="$tc(\'sw-import-export.importer.importLabel\')"\n        @modal-close="setImportModalProfile(null)"\n    >\n        \n        {% block sw_import_export_importer_modal_exporter %}\n        <sw-import-export-importer\n            :source-entity="importModalProfile"\n            @import-started="$emit(\'import-started\', $event)"\n        />\n        {% endblock %}\n\n        <template #modal-footer>\n            \n            {% block sw_import_export_importer_modal_footer %}\n            <sw-button\n                size="small"\n                @click="setImportModalProfile(null)"\n            >\n                {{ $tc(\'sw-import-export.importer.close\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_import_export_importer_progress %}\n    <sw-import-export-progress\n        activity-type="import"\n        :disable-button="disableImporting"\n        @process-start="onStartProcess"\n        @process-start-dryrun="onStartDryRunProcess"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["importExport","repositoryFactory","feature"],mixins:[o.getByName("notification")],props:{sourceEntity:{type:String,required:!1,default:""}},data:function(){return{selectedProfileId:null,selectedProfile:null,config:{},isLoading:!1,importFile:null,importModalProfile:null}},computed:{profileCriteria:function(){var t=new n(1,25);return t.addSorting(n.sort("label")),this.sourceEntity.length>0&&t.addFilter(n.equals("sourceEntity",this.sourceEntity)),t.addFilter(n.not("AND",[n.equals("type","export")])),t},logRepository:function(){return this.repositoryFactory.create("import_export_log")},disableImporting:function(){return this.isLoading||null===this.selectedProfileId||null===this.importFile},showProductVariantsInfo:function(){return this.selectedProfile&&"product"===this.selectedProfile.sourceEntity&&this.config&&this.config.includeVariants},logCriteria:function(){var t=new n(1,25);return t.addAssociation("invalidRecordsLog"),t.addAssociation("file"),t}},methods:{onProfileSelect:function(t,e){this.selectedProfileId=t,this.selectedProfile=e},onStartProcess:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isLoading=!0;var r=this.selectedProfileId;this.importExport.import(r,this.importFile,this.handleProgress,this.config,e).then((function(){t.importFile=null})).catch((function(e){e.response&&e.response.data&&e.response.data.errors?e.response.data.errors.forEach((function(e){t.createNotificationError({message:"".concat(e.code,": ").concat(e.detail)})})):t.createNotificationError({message:e.message}),t.isLoading=!1}))},onStartDryRunProcess:function(){this.onStartProcess(!0)},handleProgress:function(t){this.createNotificationInfo({message:this.$tc("sw-import-export.importer.messageImportStarted")}),this.isLoading=!1,this.$emit("import-started",t)},setImportModalProfile:function(t){this.importModalProfile=t}}}},dzcr:function(t,e,r){var o=r("JLCs");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r("P8hj").default)("09337cb6",o,!0,{})}}]);