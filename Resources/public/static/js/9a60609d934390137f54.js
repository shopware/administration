(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[350],{"/TUk":function(t,e,n){"use strict";n.r(e);var r=n("QGb3"),o=n.n(r),a=n("J58c"),i=n.n(a);n("fS6m");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=Shopware,l=d.Mixin,u=d.Context,p=Shopware.Component.getComponentHelper().mapPropertyErrors,m=Shopware.Data.Criteria;e.default={template:'\n{% block sw_product_stream_detail %}\n<sw-page class="sw-product-stream-detail">\n    \n    {% block sw_product_stream_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="productStream">\n            {{ productStream.name }}\n        </h2>\n        <h2\n            v-else\n            class="sw-product-stream-detail__empty-title"\n        >\n            {{ placeholder(productStream, \'name\', $tc(\'sw-product-stream.detail.textHeadline\')) }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_product_stream_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-product-stream.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        <sw-button-group\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'product_stream.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-product-stream-detail__save-button-group"\n            :split-button="true"\n        >\n            \n            {% block sw_product_stream_detail_actions_save %}\n            <sw-button-process\n                v-model="isSaveSuccessful"\n                v-tooltip.bottom="tooltipSave"\n                class="sw-product-stream-detail__save-action"\n                :is-loading="isLoading"\n                :disabled="!acl.can(\'product_stream.editor\')"\n                variant="primary"\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-product-stream.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_product_stream_detail_actions_save_context_menu %}\n            <sw-context-button>\n                <template #button>\n                    <sw-button\n                        class="sw-product-stream-detail__button-context-menu"\n                        square\n                        variant="primary"\n                        :disabled="isLoading || !acl.can(\'product_stream.editor\')"\n                    >\n                        <sw-icon name="regular-chevron-down-xs" />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_product_stream_detail_actions_save_context_menu_actions %}\n                \n                {% block sw_product_stream_detail_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-product-stream-detail__save-duplicate-action"\n                    :disabled="!acl.can(\'product_stream.creator\') || !acl.can(\'product_stream.editor\')"\n                    @click="onDuplicate"\n                >\n                    {{ $tc(\'sw-product.detail.buttonSaveDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="!productStreamId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading || customFieldsLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_product_stream_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(productStream, \'name\', $tc(\'sw-product-stream.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_stream_detail_basic_info %}\n                <sw-card\n                    position-identifier="sw-product-stream-detail-basic-info"\n                    :large="true"\n                    :title="$tc(\'sw-product-stream.detail.titleCard\')"\n                >\n                    \n                    {% block sw_product_basic_form_name_field %}\n                    <sw-text-field\n                        v-if="productStream"\n                        v-model="productStream.name"\n                        v-tooltip.bottom="getNoPermissionsTooltip(\'product_stream.editor\')"\n                        :label="$tc(\'sw-product-stream.detail.labelName\')"\n                        :validation="nameRequired"\n                        :required="isSystemLanguage"\n                        :placeholder="placeholder(productStream, \'name\', $tc(\'sw-product-stream.detail.placeholderName\'))"\n                        :error="productStreamNameError"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_basic_form_description_field %}\n                    <sw-textarea-field\n                        v-if="productStream"\n                        v-model="productStream.description"\n                        v-tooltip.bottom="getNoPermissionsTooltip(\'product_stream.editor\')"\n                        :label="$tc(\'sw-product-stream.detail.labelDescription\')"\n                        :placeholder="placeholder(productStream, \'description\', $tc(\'sw-product-stream.detail.placeholderDescription\'))"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_detail_filter %}\n                <sw-card\n                    :large="true"\n                    position-identifier="sw-product-stream-detail-filter"\n                    class="sw-product-stream-detail__condition_container"\n                    :class="{ \'is--disabled\': !acl.can(\'product_stream.editor\') }"\n                    :title="$tc(\'sw-product-stream.detail.titleFilter\')"\n                >\n                    \n                    {% block sw_product_stream_detail_filter_tree %}\n                    <sw-condition-tree\n                        v-if="productStream"\n                        :initial-conditions="productStreamFilters"\n                        :condition-repository="productStreamFiltersRepository"\n                        :condition-data-provider-service="productStreamConditionService"\n                        child-association-field="queries"\n                        association-field="productStreamId"\n                        :association-value="productStream.id"\n                        :root-condition="null"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                        @conditions-changed="updateFilterTree"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_stream_detail_filter_preview_button %}\n                    <sw-button\n                        class="sw-product-stream-detail__open_modal_preview"\n                        @click.prevent="openModalPreview"\n                    >\n                        {{ $tc(\'sw-product-stream.detail.buttonOpenPreview\') }}\n                    </sw-button>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_prouct_stream_detail_preview_modal %}\n                <sw-product-stream-modal-preview\n                    v-if="showModalPreview"\n                    ref="modalPreview"\n                    :filters="productStreamFiltersTree"\n                    @modal-close="closeModalPreview"\n                />\n                {% endblock %}\n\n                \n                {% block sw_prouct_stream_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-product-stream-detail-custom-field-sets"\n                    :large="true"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="productStream"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","productStreamConditionService","acl","customFieldDataProviderService"],provide:function(){return{productCustomFields:this.productCustomFields}},beforeRouteLeave:function(t,e,n){if(this.showModalPreview)return this.showModalPreview=!1,void this.$nextTick((function(){return n()}));n()},mixins:[l.getByName("placeholder"),l.getByName("notification"),l.getByName("discard-detail-page-changes")("productStream"),l.getByName("sw-inline-snippet")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{productStreamId:{type:String,required:!1,default:null}},data:function(){return{isLoading:!1,customFieldsLoading:!1,isSaveSuccessful:!1,productStream:null,productStreamFilters:null,productStreamFiltersTree:null,deletedProductStreamFilters:[],productCustomFields:{},showModalPreview:!1,languageId:null,customFieldSets:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:c(c({identifier:function(){return this.placeholder(this.productStream,"name")},productStreamRepository:function(){return this.repositoryFactory.create("product_stream")},productStreamFiltersRepository:function(){return this.productStream?this.repositoryFactory.create(this.productStream.filters.entity,this.productStream.filters.source):null},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},tooltipSave:function(){if(!this.acl.can("product_stream.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:!0};var t=this.$device.getSystemKey();return{message:"".concat(t," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},isSystemLanguage:function(){return this.languageId===u.api.systemLanguageId},nameRequired:function(){return this.isSystemLanguage}},p("productStream",["name"])),{},{showCustomFields:function(){return this.productStream&&this.customFieldSets&&this.customFieldSets.length>0}}),watch:{productStreamId:{immediate:!0,handler:function(){var t=this;this.productStreamId?(this.isLoading=!0,this.loadEntityData(this.productStreamId).then((function(){t.isLoading=!1}))):this.createProductStream()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-product-stream-detail__productStream",path:"productStream",scope:this}),this.languageId=u.api.languageId,this.productStreamId&&this.getProductCustomFields(),this.loadCustomFieldSets()},loadCustomFieldSets:function(){var t=this;this.customFieldDataProviderService.getCustomFieldSets("product_stream").then((function(e){t.customFieldSets=e}))},createProductStream:function(){var t=this;this.getProductCustomFields().then((function(){u.api.languageId=u.api.systemLanguageId,t.productStream=t.productStreamRepository.create(u.api),t.productStreamFilters=t.productStream.filters}))},loadEntityData:function(t){var e=this;return this.productStreamRepository.get(t,u.api).then((function(t){return e.productStream=t,e.loadFilters()}))},loadFilters:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===e){var n=new m(1,25);return n.addFilter(m.equals("productStreamId",this.productStreamId)),this.productStreamFiltersRepository.search(n,u.api).then((function(e){return t.loadFilters(e)}))}if(e.length>=e.total)return this.productStreamFilters=e,Promise.resolve();var r=m.fromCriteria(e.criteria);return r.page+=1,this.productStreamFiltersRepository.search(r,e.context).then((function(n){return e.push.apply(e,o()(n)),e.criteria=n.criteria,e.total=n.total,t.loadFilters(e)}))},abortOnLanguageChange:function(){return this.productStreamRepository.hasChanges(this.productStream)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(t){var e=this;this.languageId=t,this.isLoading=!0,this.loadEntityData(this.productStream.id).then((function(){e.isLoading=!1}))},onDuplicate:function(){var t=this;return this.onSave().then((function(){var e={cloneChildren:!0,overwrites:{name:"".concat(t.productStream.name||t.productStream.translated.name," ").concat(t.$tc("global.default.copy"))}};return t.isLoading=!0,t.productStreamRepository.clone(t.productStream.id,Shopware.Context.api,e).then((function(e){var n={name:"sw.product.stream.detail",params:{id:e.id}};t.$router.push(n)})).catch((function(){t.isLoading=!1,t.createNotificationError({message:t.$tc("global.notification.unspecifiedSaveErrorMessage")})}))}))},onSave:function(){var t=this;return this.isSaveSuccessful=!1,this.isLoading=!0,this.productStream.isNew()?(this.productStream.filters=this.productStreamFiltersTree,this.saveProductStream().then((function(){t.$router.push({name:"sw.product.stream.detail",params:{id:t.productStream.id}}),t.isSaveSuccessful=!0})).catch((function(){t.showErrorNotification(),t.isLoading=!1}))):this.productStreamRepository.save(this.productStream,u.api).then(this.syncProductStreamFilters).then((function(){return t.loadEntityData(t.productStream.id)})).then((function(){t.isSaveSuccessful=!0,t.isLoading=!1})).catch((function(){t.isLoading=!1,t.showErrorNotification()}))},showErrorNotification:function(){this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})},saveProductStream:function(){return this.productStreamRepository.save(this.productStream,u.api)},syncProductStreamFilters:function(){var t=this;return this.productStreamFiltersRepository.sync(this.productStreamFiltersTree,u.api).then((function(){return t.deletedProductStreamFilters.length>0?t.productStreamFiltersRepository.syncDeleted(t.deletedProductStreamFilters,u.api).then((function(){t.deletedProductStreamFilters=[]})):Promise.resolve()}))},onCancel:function(){this.$router.push({name:"sw.product.stream.index"})},openModalPreview:function(){this.showModalPreview=!0},closeModalPreview:function(){this.showModalPreview=!1},getProductCustomFields:function(){var t=this;this.customFieldsLoading=!0;var e=new m(1,null);e.addFilter(m.equals("relations.entityName","product"));var n=[];return this.customFieldSetRepository.search(e,u.api).then((function(e){var r=new m(1,null);r.addAssociation("customFields").addAssociation("relations"),e.forEach((function(e){n.push(t.customFieldSetRepository.get(e.id,u.api,r).then((function(e){var n=e.customFields.reduce((function(e,n){return e[n.name]=t.mapCustomFieldType({type:n.type,value:"customFields.".concat(n.name),label:t.getCustomFieldLabel(n)}),e}),{});Object.assign(t.productCustomFields,n)})))})),Promise.all(n).then((function(){t.customFieldsLoading=!1}))}))},getCustomFieldLabel:function(t){return this.getInlineSnippet(t.config.label)||t.name},mapCustomFieldType:function(t){switch(t.type){case"bool":t.type="boolean";break;case"html":case"text":t.type="string";break;case"date":t.type="string",t.format="date-time"}return t},updateFilterTree:function(t){var e=t.conditions,n=t.deletedIds;this.productStreamFiltersTree=e,this.deletedProductStreamFilters=[].concat(o()(this.deletedProductStreamFilters),o()(n))},getNoPermissionsTooltip:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t)}}}}},fS6m:function(t,e,n){var r=n("vFlL");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n("ydqr").default)("bdc76842",r,!0,{})},vFlL:function(t,e,n){}}]);