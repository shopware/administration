(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[220],{"4l5F":function(n,e,o){},e1de:function(n,e,o){"use strict";o.r(e);var i=o("HZZ/"),t=o.n(i),s=o("hJxD"),l=o.n(s),a=(o("kKcv"),o("22wk")),r=Shopware.Mixin,c=Shopware.Data.Criteria,d="extension.plugin_upload";e.default={template:'\n{% block sw_extension_file_upload %}\n<div class="sw-extension-file-upload">\n    \n    {% block sw_extension_file_upload_content %}\n    <div class="sw-extension-file-upload__content">\n        \n        {% block sw_extension_file_upload_button %}\n        <sw-button\n            class="sw-extension-file-upload__button"\n            :is-loading="isLoading"\n            variant="primary"\n            @click="showConfirmModal"\n        >\n            {{ $tc(\'sw-extension.my-extensions.fileUpload.buttonFileUpload\') }}\n        </sw-button>\n        {% endblock %}\n        \n        {% block sw_extension_file_upload_form %}\n        <form\n            ref="fileForm"\n            class="sw-extension-file-upload__form"\n        >\n            \n            <input\n                id="files"\n                ref="fileInput"\n                class="sw-extension-file-upload__file-input"\n                type="file"\n                @change="onFileInputChange"\n            >\n        </form>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_extension_file_upload_confirm_modal %}\n    <sw-modal\n        v-if="confirmModalVisible"\n        class="sw-extension-file-upload-confirm-modal"\n        :title="$tc(\'sw-extension.my-extensions.fileUpload.titleWarningModal\')"\n        variant="small"\n        @modal-close="closeConfirmModal"\n    >\n        \n        {% block sw_extension_file_upload_confirm_modal_content %}\n        <template #default>\n            \n            {% block sw_extension_file_upload_confirm_modal_body %}\n            <p>\n                {{ $tc(\'sw-extension.my-extensions.fileUpload.descriptionWarningModal\') }}\n            </p>\n            {% endblock %}\n        </template>\n        <template #modal-footer>\n            \n            {% block sw_extension_file_upload_confirm_modal_footer %}\n            \n            {% block sw_extension_file_upload_confirm_modal_footer_checkbox %}\n            <sw-checkbox-field\n                v-model="shouldHideConfirmModal"\n            >\n                \n                {% block sw_extension_file_upload_confirm_modal_footer_checkbox_label %}\n                <template #label>\n                    {{ $tc(\'sw-extension.my-extensions.fileUpload.textHideWarning\') }}\n                </template>\n                {% endblock %}\n            </sw-checkbox-field>\n            {% endblock %}\n\n            \n            {% block sw_extension_file_upload_confirm_modal_footer_buttons %}\n            <div>\n                \n                {% block sw_extension_file_upload_confirm_modal_footer_cancel %}\n                <sw-button\n                    size="small"\n                    :disabled="isLoading"\n                    @click="closeConfirmModal"\n                >\n                    {{ $tc(\'global.default.cancel\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_extension_file_upload_confirm_modal_footer_continue %}\n                <sw-button\n                    variant="primary"\n                    size="small"\n                    :is-loading="isLoading"\n                    @click="onClickUpload"\n                >\n                    {{ $tc(\'global.default.confirm\') }}\n                </sw-button>\n                {% endblock %}\n            </div>\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["extensionStoreActionService","repositoryFactory"],mixins:[r.getByName("notification")],data:function(){return{isLoading:!0,confirmModalVisible:!1,shouldHideConfirmModal:!1,pluginUploadUserConfig:null}},computed:{userConfigRepository:function(){return this.repositoryFactory.create("user_config")},currentUser:function(){return Shopware.State.get("session").currentUser},userConfigCriteria:function(){var n,e=new c(1,25);return e.addFilter(c.equals("key",d)),e.addFilter(c.equals("userId",null===(n=this.currentUser)||void 0===n?void 0:n.id)),e}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var n=this;return t()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getUserConfig();case 2:n.isLoading=!1;case 3:case"end":return e.stop()}}),e)})))()},onClickUpload:function(){this.$refs.fileInput.click()},onFileInputChange:function(){var n=Array.from(this.$refs.fileInput.files);this.handleUpload(n),this.$refs.fileForm.reset()},handleUpload:function(n){var e=this;this.isLoading=!0;var o=new FormData;return o.append("file",n[0]),this.extensionStoreActionService.upload(o).then((function(){Shopware.Service("shopwareExtensionService").updateExtensionData().then((function(){return e.createNotificationSuccess({message:e.$tc("sw-extension.my-extensions.fileUpload.messageUploadSuccess")})}))})).catch((function(n){a.a.mapErrors(n.response.data.errors).forEach((function(n){n.parameters?e.showStoreError(n):e.createNotificationError({message:e.$tc(n.message)})}))})).finally((function(){e.isLoading=!1,e.confirmModalVisible=!1,!0===e.shouldHideConfirmModal&&e.saveConfig(!0)}))},showStoreError:function(n){var e=this.$tc("sw-extension.errors.messageToTheShopwareDocumentation",0,n.parameters);this.createNotificationError({message:"".concat(n.message," ").concat(e),autoClose:!1})},showConfirmModal:function(){!0!==this.pluginUploadUserConfig.value.hide_upload_warning?this.confirmModalVisible=!0:this.onClickUpload()},closeConfirmModal:function(){this.confirmModalVisible=!1},getUserConfig:function(){var n=this;return this.userConfigRepository.search(this.userConfigCriteria,Shopware.Context.api).then((function(e){var o;e.length?n.pluginUploadUserConfig=e.first():(n.pluginUploadUserConfig=n.userConfigRepository.create(Shopware.Context.api),n.pluginUploadUserConfig.key=d,n.pluginUploadUserConfig.userId=null===(o=n.currentUser)||void 0===o?void 0:o.id,n.pluginUploadUserConfig.value={hide_upload_warning:!1})}))},saveConfig:function(n){var e=this;this.pluginUploadUserConfig.value={hide_upload_warning:n},this.userConfigRepository.save(this.pluginUploadUserConfig,Shopware.Context.api).then((function(){e.getUserConfig()}))}}}},kKcv:function(n,e,o){var i=o("4l5F");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,o("ydqr").default)("7a49c776",i,!0,{})}}]);