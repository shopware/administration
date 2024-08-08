(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[95295],{668362:function(){},495295:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return a}}),o(590196);var i=o(539841);let{Mixin:t}=Shopware,{Criteria:s}=Shopware.Data,l="extension.plugin_upload";var a={template:'\n{% block sw_extension_file_upload %}\n<div class="sw-extension-file-upload">\n    \n    {% block sw_extension_file_upload_content %}\n    <div class="sw-extension-file-upload__content">\n        \n        {% block sw_extension_file_upload_button %}\n        <sw-button\n            class="sw-extension-file-upload__button"\n            :is-loading="isLoading"\n            variant="primary"\n            @click="showConfirmModal"\n        >\n            {{ $tc(\'sw-extension.my-extensions.fileUpload.buttonFileUpload\') }}\n        </sw-button>\n        {% endblock %}\n        \n        {% block sw_extension_file_upload_form %}\n        <form\n            ref="fileForm"\n            class="sw-extension-file-upload__form"\n        >\n            \n            <input\n                id="files"\n                ref="fileInput"\n                class="sw-extension-file-upload__file-input"\n                type="file"\n                @change="onFileInputChange"\n            >\n        </form>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_extension_file_upload_confirm_modal %}\n    <sw-modal\n        v-if="confirmModalVisible"\n        class="sw-extension-file-upload-confirm-modal"\n        :title="$tc(\'sw-extension.my-extensions.fileUpload.titleWarningModal\')"\n        variant="small"\n        @modal-close="closeConfirmModal"\n    >\n        \n        {% block sw_extension_file_upload_confirm_modal_content %}\n        <template #default>\n            \n            {% block sw_extension_file_upload_confirm_modal_body %}\n            <p>\n                {{ $tc(\'sw-extension.my-extensions.fileUpload.descriptionWarningModal\') }}\n            </p>\n            {% endblock %}\n        </template>\n        <template #modal-footer>\n            \n            {% block sw_extension_file_upload_confirm_modal_footer %}\n            \n            {% block sw_extension_file_upload_confirm_modal_footer_checkbox %}\n            <sw-checkbox-field\n                v-model:value="shouldHideConfirmModal"\n            >\n                \n                {% block sw_extension_file_upload_confirm_modal_footer_checkbox_label %}\n                <template #label>\n                    {{ $tc(\'sw-extension.my-extensions.fileUpload.textHideWarning\') }}\n                </template>\n                {% endblock %}\n            </sw-checkbox-field>\n            {% endblock %}\n\n            \n            {% block sw_extension_file_upload_confirm_modal_footer_buttons %}\n            <div>\n                \n                {% block sw_extension_file_upload_confirm_modal_footer_cancel %}\n                <sw-button\n                    size="small"\n                    :disabled="isLoading"\n                    @click="closeConfirmModal"\n                >\n                    {{ $tc(\'global.default.cancel\') }}\n                </sw-button>\n                {% endblock %}\n\n                \n                {% block sw_extension_file_upload_confirm_modal_footer_continue %}\n                <sw-button\n                    variant="primary"\n                    size="small"\n                    :is-loading="isLoading"\n                    @click="onClickUpload"\n                >\n                    {{ $tc(\'global.default.confirm\') }}\n                </sw-button>\n                {% endblock %}\n            </div>\n            {% endblock %}\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["extensionStoreActionService","repositoryFactory"],mixins:[t.getByName("notification")],data(){return{isLoading:!0,confirmModalVisible:!1,shouldHideConfirmModal:!1,pluginUploadUserConfig:null}},computed:{userConfigRepository(){return this.repositoryFactory.create("user_config")},currentUser(){return Shopware.State.get("session").currentUser},userConfigCriteria(){let n=new s(1,25);return n.addFilter(s.equals("key",l)),n.addFilter(s.equals("userId",this.currentUser?.id)),n}},created(){this.createdComponent()},methods:{async createdComponent(){await this.getUserConfig(),this.isLoading=!1},onClickUpload(){this.$refs.fileInput.click()},onFileInputChange(){let n=Array.from(this.$refs.fileInput.files);this.handleUpload(n),this.$refs.fileForm.reset()},handleUpload(n){this.isLoading=!0;let e=new FormData;return e.append("file",n[0]),this.extensionStoreActionService.upload(e).then(()=>{Shopware.Service("shopwareExtensionService").updateExtensionData().then(()=>this.createNotificationSuccess({message:this.$tc("sw-extension.my-extensions.fileUpload.messageUploadSuccess")}))}).catch(n=>{i.Z.mapErrors(n.response.data.errors).forEach(n=>{if(n.parameters){this.showStoreError(n);return}let e=[this.$tc(n.message),n.details].filter(Boolean).join("<br />");this.createNotificationError({message:e})})}).finally(()=>{this.isLoading=!1,this.confirmModalVisible=!1,!0===this.shouldHideConfirmModal&&this.saveConfig(!0)})},showStoreError(n){let e=this.$tc("sw-extension.errors.messageToTheShopwareDocumentation",0,n.parameters);this.createNotificationError({message:`${n.message} ${e}`,autoClose:!1})},showConfirmModal(){if(!0===this.pluginUploadUserConfig.value.hide_upload_warning){this.onClickUpload();return}this.confirmModalVisible=!0},closeConfirmModal(){this.confirmModalVisible=!1},getUserConfig(){return this.userConfigRepository.search(this.userConfigCriteria,Shopware.Context.api).then(n=>{n.length?this.pluginUploadUserConfig=n.first():(this.pluginUploadUserConfig=this.userConfigRepository.create(Shopware.Context.api),this.pluginUploadUserConfig.key=l,this.pluginUploadUserConfig.userId=this.currentUser?.id,this.pluginUploadUserConfig.value={hide_upload_warning:!1})})},saveConfig(n){this.pluginUploadUserConfig.value={hide_upload_warning:n},this.userConfigRepository.save(this.pluginUploadUserConfig,Shopware.Context.api).then(()=>{this.getUserConfig()})}}}},590196:function(n,e,o){var i=o(668362);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[n.id,i,""]]),i.locals&&(n.exports=i.locals),o(745346).Z("766b2b7e",i,!0,{})}}]);