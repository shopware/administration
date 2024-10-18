(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[288],{"1DJR":function(e,t,i){},"9HM8":function(e,t,i){var o=i("1DJR");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,i("P8hj").default)("3aa58523",o,!0,{})},xmS6:function(e,t,i){"use strict";i.r(t);var o=i("7yzw"),n=i.n(o),r=i("92Mt"),l=i.n(r),s=(i("9HM8"),Shopware.Mixin),a=Shopware.Data.Criteria;t.default={template:'\n{% block sw_import_export_view_profile %}\n<div class="sw-import-export-view-profiles">\n    \n    {% block sw_import_export_view_profile_profiles %}\n    <sw-card\n        :title="$tc(\'sw-import-export.page.profileTab\')"\n        class="sw-import-export-view-profiles__grid-card"\n        position-identifier="sw-import-export-view-profiles"\n    >\n\n        \n        {% block sw_import_export_view_profile_profiles_toolbar %}\n        <div class="sw-import-export-view-profiles__toolbar">\n            \n            {% block sw_import_export_view_profile_profiles_toolbar_search_field %}\n            <sw-simple-search-field\n                v-model="searchTerm"\n                class="sw-import-export-view-profiles__search"\n                size="small"\n                variant="form"\n                @search-term-change="onSearch"\n            />\n            {% endblock %}\n\n            \n            {% block sw_import_export_view_profile_profiles_toolbar_add_new_profile %}\n            <sw-button\n                v-tooltip="createTooltip"\n                class="sw-import-export-view-profiles__create-action"\n                variant="ghost"\n                :disabled="isLoading || isNotSystemLanguage"\n                size="small"\n                @click="onAddNewProfile"\n            >\n                {{ $tc(\'sw-import-export.profile.addNewProfileLabel\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_import_export_view_profile_profiles_listing %}\n        <template #grid>\n            <sw-entity-listing\n                ref="listing"\n                class="sw-import-export-view-profiles__listing"\n                :repository="profileRepository"\n                :items="profiles"\n                :is-loading="isLoading"\n                :columns="profilesColumns"\n                :sort-by="sortBy"\n                :sort-direction="sortDirection"\n                :show-settings="false"\n                :show-selection="false"\n                :allow-column-edit="false"\n            >\n\n                \n                {% block sw_import_export_view_profile_profiles_listing_column_label %}\n                <template #column-label="{ item }">\n                    <a\n                        href="#"\n                        @click.prevent="onEditProfile(item.id)"\n                    >\n                        {{ item.translated.label || item.label }}\n                    </a>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_import_export_view_profile_profiles_listing_column_system_default %}\n                <template #column-systemDefault="{ item }">\n                    {{ getTypeLabel(item.systemDefault) }}\n                </template>\n                {% endblock %}\n\n                <template #actions="{ item }">\n                    \n                    {% block sw_import_export_view_profile_profiles_listing_edit %}\n                    <sw-context-menu-item\n                        class="sw-import-export-view-profiles__listing-open-action"\n                        @click="onEditProfile(item.id)"\n                    >\n                        {{ $tc(\'sw-import-export.profile.openLabel\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_import_export_view_profile_profiles_listing_duplicate %}\n                    <sw-context-menu-item\n                        class="sw-import-export-view-profiles__listing-duplicate-action"\n                        @click="onDuplicateProfile(item)"\n                    >\n                        {{ $tc(\'sw-import-export.profile.duplicateLabel\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_import_export_view_profile_profiles_listing_download_template %}\n                    <sw-context-menu-item\n                        class="sw-import-export-view-profiles__listing-download-template-action"\n                        @click="onDownloadTemplate(item)"\n                    >\n                        {{ $tc(\'sw-import-export.profile.downloadTemplateLabel\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_import_export_view_profile_profiles_listing_delete %}\n                    <sw-context-menu-item\n                        class="sw-import-export-view-profiles__listing-delete-action"\n                        variant="danger"\n                        :disabled="item.systemDefault"\n                        @click="onDeleteProfile(item.id)"\n                    >\n                        {{ $tc(\'sw-import-export.profile.deleteLabel\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n\n            </sw-entity-listing>\n        </template>\n        {% endblock %}\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_import_export_view_profile_modal %}\n    <sw-import-export-edit-profile-modal\n        :show="showProfileEditModal"\n        :profile="selectedProfile"\n        @profile-save="saveSelectedProfile"\n        @profile-close="closeSelectedProfile"\n    />\n    {% endblock %}\n\n    \n    {% block sw_import_export_view_new_profile_wizard %}\n    <sw-import-export-new-profile-wizard\n        v-if="showNewProfileWizard"\n        :profile="selectedProfile"\n        @profile-save="saveSelectedProfile"\n        @close="onCloseNewProfileWizard"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","importExport","feature"],mixins:[s.getByName("notification")],data:function(){return{isLoading:!1,selectedProfile:null,profiles:null,searchTerm:null,sortBy:"label",sortDirection:"ASC",showProfileEditModal:!1,showNewProfileWizard:!1}},metaInfo:function(){return{title:this.$createTitle()}},computed:{profileRepository:function(){return this.repositoryFactory.create("import_export_profile")},profileCriteria:function(){var e=new a(1,25);return e.setTerm(this.searchTerm),e.addAssociation("importExportLogs"),e.addSorting(a.sort(this.sortBy,this.sortDirection)),e},profilesColumns:function(){return[{property:"label",dataIndex:"label",label:"sw-import-export.profile.nameColumn",allowResize:!0,primary:!0},{property:"systemDefault",dataIndex:"systemDefault",label:"sw-import-export.profile.typeColumn",allowResize:!0}]},isNotSystemLanguage:function(){return Shopware.Context.api.systemLanguageId!==Shopware.Context.api.languageId},createTooltip:function(){return{showDelay:300,message:this.$tc("sw-import-export.profile.addNewProfileTooltipLanguage"),disabled:!this.isNotSystemLanguage}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadProfiles()},loadProfiles:function(){var e=this;return n()(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.profileRepository.search(e.profileCriteria);case 3:e.profiles=t.sent,e.isLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},reloadContent:function(){this.loadProfiles()},onSearch:function(){this.loadProfiles()},onAddNewProfile:function(){var e=this.profileRepository.create();e.fileType="text/csv",e.mapping=[],e.config={},e.config.createEntities=!0,e.config.updateEntities=!0,e.type="import-export",e.translated={},e.delimiter=";",e.enclosure='"',this.selectedProfile=null,this.selectedProfile=e,this.showNewProfileWizard=!0},onEditProfile:function(e){var t=this;return n()(l.a.mark((function i(){var o,n,r;return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.profileRepository.get(e);case 2:r=i.sent,Array.isArray(r.config)&&r.config.length<=0&&t.$set(r,"config",{}),void 0===(null===(o=r.config)||void 0===o?void 0:o.createEntities)&&(r.config.createEntities=!0),void 0===(null===(n=r.config)||void 0===n?void 0:n.updateEntities)&&(r.config.updateEntities=!0),t.selectedProfile=r,t.showProfileEditModal=!0;case 8:case"end":return i.stop()}}),i)})))()},onDuplicateProfile:function(e){var t=this,i={cloneChildren:!1,overwrites:{label:"".concat(this.$tc("sw-import-export.profile.copyOfLabel")," ").concat(e.label||e.translated.label),systemDefault:!1}};return this.profileRepository.clone(e.id,Shopware.Context.api,i).then((function(e){var i=new a(1,25);return i.setIds([e.id]),t.profileRepository.search(i)})).then((function(e){var i,o,n=e[0];return void 0===(null===(i=n.config)||void 0===i?void 0:i.createEntities)&&(n.config.createEntities=!0),void 0===(null===(o=n.config)||void 0===o?void 0:o.updateEntities)&&(n.config.updateEntities=!0),t.selectedProfile=n,t.showProfileEditModal=!0,t.loadProfiles()})).catch((function(){t.createNotificationError({message:t.$tc("global.notification.unspecifiedSaveErrorMessage")})}))},onDownloadTemplate:function(e){var t=this;return n()(l.a.mark((function i(){return l.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.t0=window,i.next=3,t.importExport.getTemplateFileDownloadUrl(e.id);case 3:return i.t1=i.sent,i.abrupt("return",i.t0.open.call(i.t0,i.t1,"_blank"));case 5:case"end":return i.stop()}}),i)})))()},onDeleteProfile:function(e){this.$refs.listing.showDelete(e)},closeSelectedProfile:function(){this.showProfileEditModal=!1,this.selectedProfile=null},saveSelectedProfile:function(){var e=this;return this.isLoading=!0,this.profileRepository.save(this.selectedProfile,Shopware.Context.api).then((function(){return e.showProfileEditModal=!1,e.selectedProfile=null,e.onCloseNewProfileWizard(),e.createNotificationSuccess({message:e.$tc("sw-import-export.profile.messageSaveSuccess",0)}),e.loadProfiles()})).catch((function(){e.createNotificationError({message:e.$tc("sw-import-export.profile.messageSaveError",0)})})).finally((function(){e.isLoading=!1}))},getTypeLabel:function(e){return e?this.$tc("sw-import-export.profile.defaultTypeLabel"):this.$tc("sw-import-export.profile.customTypeLabel")},onCloseNewProfileWizard:function(){this.showNewProfileWizard=!1,this.selectedProfile=null}}}}}]);