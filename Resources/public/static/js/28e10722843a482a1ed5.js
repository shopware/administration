(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[291],{Fm0o:function(e,t,a){var i=a("ueTW");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a("P8hj").default)("5b5c844a",i,!0,{})},UZOE:function(e,t,a){"use strict";a.r(t);var i=a("4fmW"),n=a.n(i),l=a("7yzw"),s=a.n(l),o=a("CsSd"),m=a.n(o),r=a("92Mt"),c=a.n(r),d=a("PYWG");a("Fm0o");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){m()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h=Shopware.Mixin,_=Shopware.Data,b=_.Criteria,w=_.EntityCollection,f=Shopware.Utils.debug.warn,v=Shopware.Component.getComponentHelper().mapPropertyErrors;t.default={template:'\n{% block sw_mail_template_detail %}\n<sw-page class="sw-mail-template-detail">\n\n    \n    {% block sw_mail_template_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="mailTemplate">\n            {{ $tc(\'sw-mail-template.detail.textHeadlineEdit\') }}\n        </h2>\n        <h2\n            v-else\n            class="sw-mail-template-detail__empty-title"\n        >\n            {{ $tc(\'sw-mail-template.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_mail_template_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="{\n                message: \'ESC\',\n                appearance: \'light\'\n            }"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-mail-template.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_mail_template_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-mail-template-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!allowSave"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-mail-template.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_content %}\n    <template #content>\n        <sw-card-view sidebar>\n            <template v-if="isLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_mail_template_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(mailTemplate.mailTemplateType, \'name\', $tc(\'sw-mail-template.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_basic_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-template.detail.basic.titleCard\')"\n                    position-identifier="sw-mail-template-detail-basic-info"\n                >\n                    \n                    {% block sw_mail_template_basic_form_mail_type_field %}\n                    <sw-entity-single-select\n                        id="mailTemplateTypes"\n                        {% if VUE3 %}\n                        v-model:value="mailTemplate.mailTemplateTypeId"\n                        {% else %}\n                        v-model="mailTemplate.mailTemplateTypeId"\n                        {% endif %}\n                        name="sw-field--mailTemplate-mailTemplateTypeId"\n                        entity="mail_template_type"\n                        required\n                        show-clearable-button\n                        :label="$tc(\'sw-mail-template.detail.basic.labelMailType\')"\n                        :placeholder="$tc(\'sw-mail-template.detail.basic.placeholderMailType\')"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        :error="mailTemplateMailTemplateTypeIdError"\n                        {% if VUE3 %}\n                        @update:value="onChangeType"\n                        {% else %}\n                        @change="onChangeType"\n                        {% endif %}\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_basic_form_description_field %}\n                    <sw-textarea-field\n                        {% if VUE3 %}\n                        v-model:value="mailTemplate.description"\n                        {% else %}\n                        v-model="mailTemplate.description"\n                        {% endif %}\n                        name="sw-field--mailTemplate-description"\n                        :label="$tc(\'sw-mail-template.detail.basic.labelDescription\')"\n                        :placeholder="$tc(\'sw-mail-template.detail.basic.placeholderDescription\')"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_options_info %}\n                <sw-card\n                    position-identifier="sw-mail-template-detail-options-info"\n                    :title="$tc(\'sw-mail-template.detail.options.titleCard\')"\n                >\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0 30px"\n                        class="sw-mail-template-detail-options__container"\n                    >\n                        <div class="sw-mail-template-detail__options-info-wrapper">\n\n                            \n                            {% block sw_mail_template_options_form_subject_field %}\n                            <sw-text-field\n                                {% if VUE3 %}\n                                v-model:value="mailTemplate.subject"\n                                {% else %}\n                                v-model="mailTemplate.subject"\n                                {% endif %}\n                                name="sw-field--mailTemplate-subject"\n                                required\n                                :label="$tc(\'sw-mail-template.detail.options.labelSubject\')"\n                                :placeholder="placeholder(mailTemplate, \'subject\', $tc(\'sw-mail-template.detail.options.placeholderSubject\'))"\n                                :disabled="!acl.can(\'mail_templates.editor\')"\n                                :error="mailTemplateSubjectError"\n                            />\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_mail_template_options_form_sender_name_field %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="mailTemplate.senderName"\n                            {% else %}\n                            v-model="mailTemplate.senderName"\n                            {% endif %}\n                            name="sw-field--mailTemplate-senderName"\n                            :label="$tc(\'sw-mail-template.detail.options.labelSenderName\')"\n                            :placeholder="placeholder(mailTemplate, \'senderName\', $tc(\'sw-mail-template.detail.options.placeholderSenderName\'))"\n                            :disabled="!acl.can(\'mail_templates.editor\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_attachments_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-template.detail.media.titleCard\')"\n                    position-identifier="sw-mail-template-detail-atttachments-info"\n                >\n                    \n                    {% block sw_mail_template_detail_attachments_info_upload %}\n                    <sw-upload-listener\n                        v-if="mailTemplate.id"\n                        auto-upload\n                        :upload-tag="mailTemplate.id"\n                        @media-upload-finish="successfulUpload"\n                    />\n\n                    <sw-media-upload-v2\n                        v-if="mailTemplate.id"\n                        variant="regular"\n                        default-folder="mail_template"\n                        :upload-tag="mailTemplate.id"\n                        :file-accept="fileAccept"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        @media-drop="onMediaDrop"\n                        @media-upload-sidebar-open="openMediaSidebar"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_detail_attachments_info_grid %}\n                    <sw-data-grid\n                        v-if="mailTemplateMedia && mailTemplateMedia.length > 0"\n                        class="sw-mail-template-detail__attachments-info-grid"\n                        :data-source="mailTemplateMedia"\n                        :columns="mediaColumns"\n                        :full-page="false"\n                        :show-settings="false"\n                        :allow-column-edit="false"\n                        :allow-inline-edit="false"\n                        :compact-mode="false"\n                        :show-selection="acl.can(\'mail_templates.editor\')"\n                        @selection-change="onSelectionChanged"\n                    >\n                        <template #preview-fileName="{ item }">\n                            \n                            {% block sw_mail_template_detail_attachments_info_grid_preview %}\n                            <sw-media-preview :source="item.id" />\n                            {% endblock %}\n                        </template>\n\n                        <template #actions="{ item }">\n                            \n                            {% block sw_mail_template_detail_attachments_info_grid_actions %}\n                            <sw-context-menu-item\n                                v-tooltip.bottom="{\n                                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                                    disabled: acl.can(\'mail_templates.editor\'),\n                                    showOnDisabledElements: true\n                                }"\n                                variant="danger"\n                                :disabled="!acl.can(\'mail_templates.editor\')"\n                                @click="onDeleteMedia(item.id)"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-context-menu-item>\n                            {% endblock %}\n                        </template>\n\n                        <template #bulk>\n                            \n                            {% block sw_mail_template_detail_attachments_info_grid_bulk %}\n                            <a\n                                class="link link-danger"\n                                role="link"\n                                tabindex="0"\n                                @click="onDeleteSelectedMedia"\n                                @keydown.enter="onDeleteSelectedMedia"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </a>\n                            {% endblock %}\n                        </template>\n                    </sw-data-grid>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_mail_template_detail_mail_text_info %}\n                <sw-card\n                    :title="$tc(\'sw-mail-template.detail.mailText.titleCard\')"\n                    position-identifier="sw-mail-template-detail-text-info"\n                >\n                    \n                    {% block sw_mail_template_mail_text_form_content_plain_field %}\n                    <sw-code-editor\n                        ref="plainEditor"\n                        :key="`${mailTemplate.mailTemplateTypeId}plain`"\n                        v-model="mailTemplate.contentPlain"\n                        name="content_plain"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-template.detail.mailText.labelContentPlain\')"\n                        :placeholder="placeholder(mailTemplate, \'contentPlain\', $tc(\'sw-mail-template.detail.mailText.placeholderPlain\'))"\n                        :completer-function="outerCompleterFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        :error="mailTemplateContentPlainError"\n                        required\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_mail_text_form_content_html_field %}\n                    <sw-code-editor\n                        ref="htmlEditor"\n                        :key="`${mailTemplate.mailTemplateTypeId}html`"\n                        v-model="mailTemplate.contentHtml"\n                        name="content_html"\n                        completion-mode="entity"\n                        :label="$tc(\'sw-mail-template.detail.mailText.labelContentHtml\')"\n                        :placeholder="placeholder(mailTemplate, \'contentHtml\', $tc(\'sw-mail-template.detail.mailText.placeholderHtml\'))"\n                        :completer-function="outerCompleterFunction"\n                        :editor-config="editorConfig"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        :error="mailTemplateContentHtmlError"\n                        required\n                    />\n                    {% endblock %}\n                </sw-card>\n                \n                {% block sw_mail_template_detail_preview_modal %}\n                <sw-modal\n                    v-if="mailPreview"\n                    class="sw-mail-template-preview-modal"\n                    :title="$tc(\'sw-mail-template.detail.previewModalTitle\')"\n                    :is-loading="isLoading"\n                    @modal-close="onCancelShowPreview"\n                >\n                    <template v-if="!isLoading">\n                        <span v-html="mailPreview"></span>\n                    </template>\n\n                    \n                    {% block sw_mail_template_detail_preview_modal_footer %}\n                    <template #modal-footer>\n                        \n                        {% block sw_mail_template_detail_preview_modal_footer_cancel %}\n                        <sw-button\n                            size="small"\n                            @click="onCancelShowPreview"\n                        >\n                            {{ $tc(\'global.default.close\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </template>\n                    {% endblock %}\n                </sw-modal>\n                {% endblock %}\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_mail_template_detail_sidebar %}\n    <template #sidebar>\n        <sw-sidebar :propagate-width="true">\n            \n            {% block sw_mail_template_detail_sidebar_inner %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_test_mail %}\n            <sw-sidebar-item\n                icon="regular-paper-plane"\n                :title="$tc(\'sw-mail-template.detail.sidebar.titleTestMail\')"\n                class="sw-mail-template-detail__test-mail-sidebar"\n            >\n                <div class="sw-mail-template-detail__test-mail-sidebar-container">\n                    \n                    {% block sw_mail_template_mail_text_form_test_mail_field %}\n                    <sw-text-field\n                        {% if VUE3 %}\n                        v-model:value="testerMail"\n                        {% else %}\n                        v-model="testerMail"\n                        {% endif %}\n                        name="sw-field--testerMail"\n                        :placeholder="$tc(\'sw-mail-template.detail.sidebar.placeholderTestMail\')"\n                        :label="$tc(\'sw-mail-template.detail.sidebar.labelTestMail\')"\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_mail_text_form_test_sales_channel_field %}\n                    <sw-entity-single-select\n                        {% if VUE3 %}\n                        v-model:value="testMailSalesChannelId"\n                        {% else %}\n                        v-model="testMailSalesChannelId"\n                        {% endif %}\n                        name="sw-field--testMailSalesChannelId"\n                        entity="sales_channel"\n                        :label="$tc(\'sw-mail-template.detail.basic.labelSalesChannels\')"\n                        :placeholder="$tc(\'sw-mail-template.detail.basic.placeholderSalesChannels\')"\n                        show-clearable-button\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_mail_template_mail_text_form_test_mail_button %}\n                    <sw-button\n                        :disabled="isLoading || !testMailRequirementsMet"\n                        class="sw-mail-template-detail__send-test-mail"\n                        @click="onClickTestMailTemplate"\n                    >\n                        {{ $tc(\'sw-mail-template.detail.sidebar.buttonTestMail\') }}\n                    </sw-button>\n                    {% endblock %}\n                </div>\n            </sw-sidebar-item>\n            {% endblock %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_variables %}\n            <sw-sidebar-item\n                icon="regular-code"\n                :title="$tc(\'sw-mail-template.detail.sidebar.titleShowAvailableVariables\')"\n                :disabled="isLoading || !hasTemplateData"\n                class="sw-mail-template-detail__show-available-variables"\n            >\n                <div class="sw-mail-template-detail__available-variables-sidebar-container">\n                    \n                    {% block sw_mail_template_available_variables_tree %}\n                    <sw-tree\n                        class="sw-mail-template-detail__available-variables-sidebar-container__tree"\n                        :searchable="false"\n                        :disable-context-menu="true"\n                        :on-change-route="() => { return false; }"\n                        :items="loadedAvailableVariables"\n                        :sortable="false"\n                        @get-tree-items="onGetTreeItems"\n                    >\n                        \n                        {% block sw_mail_template_available_variables_tree_headline %}\n                        <template #headline>\n                            <span></span>\n                        </template>\n                        {% endblock %}\n\n                        \n                        {% block sw_mail_template_available_variables_tree_items %}\n                        <template\n                            #items="{ treeItems, sortable, draggedItem, disableContextMenu, onChangeRoute }"\n                        >\n                            \n                            {% block sw_mail_template_available_variables_tree_items_item %}\n                            <sw-tree-item\n                                v-for="(item, index) in treeItems"\n                                :key="item.id"\n                                :item="item"\n                                :disable-context-menu="disableContextMenu"\n                                :on-change-route="onChangeRoute"\n                                :sortable="false"\n                                :display-checkbox="false"\n                            >\n                                \n                                {% block sw_mail_template_available_variables_tree_items_item_grip %}\n                                <template #grip>\n                                    <span></span>\n                                </template>\n                                {% endblock %}\n\n                                \n                                {% block sw_mail_template_available_variables_tree_items_item_actions %}\n                                <template #actions="{ item }">\n                                    <sw-icon\n                                        v-tooltip="{\n                                            message: $tc(\'sw-mail-template.detail.sidebar.copyTooltip\'),\n                                            width: 150,\n                                            position: \'bottom\'\n                                        }"\n                                        name="regular-products-s"\n                                        class="sw-mail-template-detail__copy_icon"\n                                        @click="onCopyVariable(item.schema)"\n                                    />\n                                </template>\n                                {% endblock %}\n                            </sw-tree-item>\n                            {% endblock %}\n                        </template>\n                        {% endblock %}\n                    </sw-tree>\n                    {% endblock %}\n                </div>\n            </sw-sidebar-item>\n            {% endblock %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_preview %}\n            <sw-sidebar-item\n                icon="regular-eye"\n                :title="$tc(\'sw-mail-template.detail.sidebar.titleShowPreview\')"\n                :disabled="isLoading || showPreview || !hasTemplateData"\n                class="sw-mail-template-detail__show-preview-sidebar"\n                @click="onClickShowPreview"\n            />\n            {% endblock %}\n\n            \n            {% block sw_mail_template_detail_sidebar_inner_media %}\n            <sw-sidebar-media-item ref="mediaSidebarItem">\n                <template\n                    #context-menu-items="media"\n                >\n                    \n                    {% block sw_mail_template_detail_sidebar_add_attachment %}\n                    <sw-context-menu-item\n                        :disabled="!acl.can(\'mail_templates.editor\')"\n                        @click="onAddItemToAttachment(media.mediaItem)"\n                    >\n                        {{ $tc(\'sw-mail-template.detail.sidebar.labelContextMenuAddToMailTemplate\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n                </template>\n            </sw-sidebar-media-item>\n            {% endblock %}\n\n            {% endblock %}\n        </sw-sidebar>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["mailService","entityMappingService","repositoryFactory","acl","feature"],mixins:[h.getByName("placeholder"),h.getByName("notification")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data:function(){return{mailTemplate:!1,testerMail:"",mailTemplateId:null,mailPreview:null,isLoading:!1,isSaveSuccessful:!1,mailTemplateType:{},selectedType:{},editorConfig:{enableBasicAutocompletion:!0},mailTemplateMedia:null,mailTemplateMediaSelected:{},fileAccept:"application/pdf, image/*",testMailSalesChannelId:null,availableVariables:{},entitySchema:Object.fromEntries(Shopware.EntityDefinition.getDefinitionRegistry())}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:u(u({},v("mailTemplate",["contentHtml","contentPlain","mailTemplateTypeId","subject"])),{},{loadedAvailableVariables:function(){return this.mailTemplateType&&this.mailTemplateType.templateData?(0===Object.values(this.availableVariables).length&&this.loadInitialAvailableVariables(),Object.values(this.availableVariables)):[]},identifier:function(){return this.placeholder(this.mailTemplateType,"name")},mailTemplateRepository:function(){return this.repositoryFactory.create("mail_template")},mediaRepository:function(){return this.repositoryFactory.create("media")},mailTemplateMediaRepository:function(){return this.repositoryFactory.create("mail_template_media")},outerCompleterFunction:function(){return e=this.entityMappingService,t=this.mailTemplateType,function(a){var i=[];return Object.keys(e.getEntityMapping(a,t.availableEntities)).forEach((function(e){i.push({value:e})})),i};var e,t},mailTemplateTypeRepository:function(){return this.repositoryFactory.create("mail_template_type")},testMailRequirementsMet:function(){var e,t,a,i;return this.testerMail&&(this.mailTemplate.subject||(null===(e=this.mailTemplate.translated)||void 0===e?void 0:e.subject))&&(this.mailTemplate.contentPlain||(null===(t=this.mailTemplate.translated)||void 0===t?void 0:t.contentPlain))&&(this.mailTemplate.contentHtml||(null===(a=this.mailTemplate.translated)||void 0===a?void 0:a.contentHtml))&&(this.mailTemplate.senderName||(null===(i=this.mailTemplate.translated)||void 0===i?void 0:i.senderName))},mediaColumns:function(){return this.getMediaColumns()},allowSave:function(){return this.mailTemplate&&this.mailTemplate.isNew()?this.acl.can("mail_templates.creator"):this.acl.can("mail_templates.editor")},tooltipSave:function(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},showPreview:function(){return void 0===this.mailTemplate.contentHtml||void 0===this.mailTemplate.mailTemplateTypeId||""===this.mailTemplate.contentHtml},hasTemplateData:function(){var e;return Object.keys((null===(e=this.mailTemplateType)||void 0===e?void 0:e.templateData)||{}).length>0}}),watch:{"$route.params.id":function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplate",path:"mailTemplate",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplateMedia",path:"mailTemplateMedia",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplateMediaSelected",path:"mailTemplateMediaSelected",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__mailTemplateType",path:"mailTemplateType",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__availableVariables",path:"availableVariables",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__testMailSalesChannelId",path:"testMailSalesChannelId",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-mail-template-detail__testerMail",path:"testerMail",scope:this}),this.$route.params.id&&(this.mailTemplateId=this.$route.params.id,this.loadEntityData())},loadEntityData:function(){var e=this,t=new b(1,25);t.addAssociation("mailTemplateType"),t.addAssociation("media.media"),this.isLoading=!0,this.mailTemplateRepository.get(this.mailTemplateId,Shopware.Context.api,t).then((function(t){e.mailTemplate=t,e.onChangeType(e.mailTemplate.mailTemplateType.id),e.getMailTemplateMedia()}))},getMailTemplateType:function(){var e=this;return this.mailTemplate.mailTemplateTypeId?this.mailTemplateTypeRepository.get(this.mailTemplate.mailTemplateTypeId).then((function(t){e.mailTemplateType=t,e.feature.isActive("VUE3")||(e.$refs.htmlEditor&&e.$refs.htmlEditor.defineAutocompletion(e.outerCompleterFunction),e.$refs.plainEditor&&e.$refs.plainEditor.defineAutocompletion(e.outerCompleterFunction))})):Promise.resolve()},createMediaCollection:function(){return new w("/media","media",Shopware.Context.api)},getMailTemplateMedia:function(){var e=this;this.mailTemplateMedia=this.createMediaCollection(),this.mailTemplate.media.forEach((function(t){t.languageId===Shopware.Context.api.languageId&&e.mailTemplateMedia.push(t.media)}))},abortOnLanguageChange:function(){return this.mailTemplateRepository.hasChanges(this.mailTemplate)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(e){Shopware.State.commit("context/setApiLanguageId",e),this.loadEntityData()},saveFinish:function(){this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"sw.mail.template.index"})},onSave:function(){var e=this,t=[],a=this.mailTemplate.subject||this.placeholder(this.mailTemplate,"subject");return this.isSaveSuccessful=!1,this.isLoading=!0,t.push(this.mailTemplateRepository.save(this.mailTemplate).then((function(){Promise.all(t).then((function(){e.loadEntityData(),e.saveFinish()}))})).catch((function(t){var i="";if(e.isLoading=!1,t.response.data.errors.length>0){var n=t.response.data.errors[0].detail;i="<br/> ".concat(e.$tc("sw-mail-template.detail.textErrorMessage"),': "').concat(n,'"')}e.createNotificationError({message:e.$tc("sw-mail-template.detail.messageSaveError",0,{subject:a})+i})}))),Promise.all(t)},onClickTestMailTemplate:function(){var e=this,t={message:this.$tc("sw-mail-template.general.notificationTestMailSuccessMessage")},a={message:this.$tc("sw-mail-template.general.notificationTestMailErrorMessage")},i={message:this.$tc("sw-mail-template.general.notificationTestMailSalesChannelErrorMessage")};this.testMailSalesChannelId?this.mailService.testMailTemplate(this.testerMail,this.mailPreviewContent(),this.mailTemplateMedia,this.testMailSalesChannelId).then((function(a){0!==(null==a?void 0:a.size)?e.createNotificationSuccess(t):e.createNotificationError({message:e.$tc("sw-mail-template.general.notificationGeneralSyntaxValidationErrorMessage")})})).catch((function(t){e.createNotificationError(a),f(e._name,t.message,t.response)})):this.createNotificationError(i)},onClickShowPreview:function(){var e=this;this.isLoading=!0,this.mailPreview=this.mailService.buildRenderPreview(this.mailTemplateType,this.mailPreviewContent()).then((function(t){e.mailPreview=t})).catch((function(t){var a,i,n,l,s,o,m,r;(e.mailPreview=null,null!==(a=t.response)&&void 0!==a&&null!==(i=a.data)&&void 0!==i&&null!==(n=i.errors)&&void 0!==n&&null!==(l=n[0])&&void 0!==l&&l.detail)?e.createNotificationError({message:e.$tc("sw-mail-template.general.notificationSyntaxValidationErrorMessage",0,{errorMsg:null===(s=t.response)||void 0===s||null===(o=s.data)||void 0===o||null===(m=o.errors)||void 0===m||null===(r=m[0])||void 0===r?void 0:r.detail})}):e.createNotificationError({message:e.$tc("sw-mail-template.general.notificationGeneralSyntaxValidationErrorMessage")})})).finally((function(){e.isLoading=!1}))},mailPreviewContent:function(){var e,t,a=u({},this.mailTemplate);return a.contentHtml&&(a.contentHtml=this.replaceContent(a.contentHtml)),null!==(e=a.translated)&&void 0!==e&&e.contentHtml&&(a.translated.contentHtml=this.replaceContent(a.translated.contentHtml)),a.contentPlain&&(a.contentPlain=this.replaceContent(a.contentPlain)),null!==(t=a.translated)&&void 0!==t&&t.contentPlain&&(a.translated.contentPlain=this.replaceContent(a.translated.contentPlain)),a},replaceContent:function(e){return e.replace(/\.at\(([0-9]*)\)\./g,(function(e){var t=parseInt(e.match(/[0-9]/g).join(""),10);return".".concat(t,".")})).replace(/\.first\./g,".0.")},onCancelShowPreview:function(){this.mailPreview=null},onCopyVariable:function(e){var t=this;navigator.clipboard?navigator.clipboard.writeText(e).catch((function(e){var a="";if(e.response.data.errors.length>0){var i=e.response.data.errors[0].detail;a="<br/> ".concat(t.$tc("sw-mail-template.detail.textErrorMessage"),': "').concat(i,'"')}t.createNotificationError({message:a})})):d.c.copyToClipboard(e)},onChangeType:function(e){var t=this;return s()(c.a.mark((function a(){var i,n,l,s,o,m;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e){a.next=3;break}return t.selectedType={},a.abrupt("return");case 3:return t.isLoading=!0,a.prev=4,a.next=7,t.getMailTemplateType();case 7:return a.next=9,t.mailTemplateTypeRepository.get(e);case 9:t.selectedType=a.sent,t.loadInitialAvailableVariables(),t.outerCompleterFunction(),a.next=19;break;case 14:a.prev=14,a.t0=a.catch(4),o=null!==(i=a.t0.message)&&void 0!==i?i:"",(null===(n=a.t0.response)||void 0===n||null===(l=n.data)||void 0===l||null===(s=l.errors)||void 0===s?void 0:s.length)>0&&(m=a.t0.response.data.errors[0].detail,o="<br/> ".concat(t.$tc("sw-mail-template.detail.textErrorMessage"),': "').concat(m,'"')),t.createNotificationError({message:o});case 19:return a.prev=19,t.isLoading=!1,a.finish(19);case 22:case"end":return a.stop()}}),a,null,[[4,14,19,22]])})))()},getMediaColumns:function(){return[{property:"fileName",label:"sw-mail-template.list.columnFilename"}]},successfulUpload:function(e){var t=this,a=e.targetId;this.mailTemplate.media.find((function(e){return e.mediaId===a}))||this.mediaRepository.get(a).then((function(e){t.createMailTemplateMediaAssoc(e)}))},onMediaDrop:function(e){this.successfulUpload({targetId:e.id})},createMailTemplateMediaAssoc:function(e){var t=this.mailTemplateMediaRepository.create();t.mailTemplateId=this.mailTemplateId,t.languageId=Shopware.Context.api.languageId,t.mediaId=e.id,this.mailTemplate.media.length<=0?t.position=0:t.position=this.mailTemplate.media.length,this.mailTemplate.media.push(t),this.mailTemplateMedia.push(e)},openMediaSidebar:function(){this.$refs.mediaSidebarItem.openContent()},onDeleteMedia:function(e){var t=this.mailTemplate.media.find((function(t){return t.mediaId===e}));t&&(this.mailTemplate.media.remove(t.id),this.getMailTemplateMedia())},onSelectionChanged:function(e){this.selectedItems=e},onDeleteSelectedMedia:function(){var e=this;Object.keys(this.selectedItems).forEach((function(t){e.onDeleteMedia(t)}))},_checkIfMediaIsAlreadyUsed:function(e){return this.mailTemplate.media.some((function(t){return t.mediaId===e&&t.languageId===Shopware.Context.api.languageId}))},onAddItemToAttachment:function(e){return this._checkIfMediaIsAlreadyUsed(e.id)?(this.createNotificationInfo({message:this.$tc("sw-mail-template.list.errorMediaItemDuplicated")}),!1):(this.createMailTemplateMediaAssoc(e),!0)},loadAvailableVariables:function(e,t){var a=this;if(!this.mailTemplateType||!this.mailTemplateType.availableEntities)return[];var i=e.concat("."),l=t.concat("."),s=Object.keys(Shopware.Utils.get(this.mailTemplateType.templateData,e)).map((function(t){var s=Shopware.Utils.get(a.mailTemplateType.templateData,i.concat(t)),o="object"===n()(s)&&null!==s?Object.values(s).length:0,m=a.isToManyAssociationVariable(e)?"".concat(l,"at(").concat(parseInt(t,10),")"):l+t;return{id:i+t,schema:m,name:t,childCount:o,parentId:e,afterId:null}}));return this.addVariables(s),!0},isToManyAssociationVariable:function(e){if(!e)return!1;var t=e.split(".");t.splice(1,0,"properties");var a=Shopware.Utils.get(this.entitySchema,"".concat(t.join(".")));return a&&"association"===a.type&&["one_to_many","many_to_many"].includes(a.relation)},onGetTreeItems:function(e,t){this.loadAvailableVariables(e,t)},addVariables:function(e){var t=this;e.forEach((function(e){t.$set(t.availableVariables,e.id,e)}))},loadInitialAvailableVariables:function(){var e=this;this.availableVariables={},this.hasTemplateData&&Object.keys(this.mailTemplateType.templateData).forEach((function(t){var a=Shopware.Utils.get(e.mailTemplateType.templateData,t),i=0;"object"===n()(a)&&null!==a&&(i=Object.values(a).length),e.addVariables([{id:t,schema:t,name:t,childCount:i,parentId:null,afterId:null}])}))}}}},ueTW:function(e,t,a){}}]);