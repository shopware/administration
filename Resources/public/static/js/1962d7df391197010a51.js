(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[46446],{72210:function(){},46446:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return o}}),r(32717);let{Mixin:a,Context:i}=Shopware,{mapPropertyErrors:s}=Shopware.Component.getComponentHelper(),{Criteria:n}=Shopware.Data;var o={template:'\n{% block sw_product_stream_detail %}\n<sw-page class="sw-product-stream-detail">\n    \n    {% block sw_product_stream_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="productStream">\n            {{ productStream.name }}\n        </h2>\n        <h2\n            v-else\n            class="sw-product-stream-detail__empty-title"\n        >\n            {{ placeholder(productStream, \'name\', $tc(\'sw-product-stream.detail.textHeadline\')) }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_product_stream_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-product-stream.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        <sw-button-group\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'product_stream.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-product-stream-detail__save-button-group"\n            :split-button="true"\n        >\n            \n            {% block sw_product_stream_detail_actions_save %}\n            <sw-button-process\n                v-model:processSuccess="isSaveSuccessful"\n                v-tooltip.bottom="tooltipSave"\n                class="sw-product-stream-detail__save-action"\n                :is-loading="isLoading"\n                :disabled="!acl.can(\'product_stream.editor\')"\n                variant="primary"\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-product-stream.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_product_stream_detail_actions_save_context_menu %}\n            <sw-context-button>\n                <template #button>\n                    <sw-button\n                        class="sw-product-stream-detail__button-context-menu"\n                        square\n                        variant="primary"\n                        :disabled="isLoading || !acl.can(\'product_stream.editor\')"\n                    >\n                        <sw-icon name="regular-chevron-down-xs" />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_product_stream_detail_actions_save_context_menu_actions %}\n                \n                {% block sw_product_stream_detail_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-product-stream-detail__save-duplicate-action"\n                    :disabled="!acl.can(\'product_stream.creator\') || !acl.can(\'product_stream.editor\')"\n                    @click="onDuplicate"\n                >\n                    {{ $tc(\'sw-product.detail.buttonSaveDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="!productStreamId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_stream_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading || customFieldsLoading">\n                <sw-skeleton variant="detail-bold" />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n\n                \n                {% block sw_product_stream_detail_content_language_info %}\n                <sw-language-info\n                    :entity-description="placeholder(productStream, \'name\', $tc(\'sw-product-stream.detail.textHeadline\'))"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_stream_detail_basic_info %}\n                <sw-card\n                    position-identifier="sw-product-stream-detail-basic-info"\n                    :large="true"\n                    :title="$tc(\'sw-product-stream.detail.titleCard\')"\n                >\n                    \n                    {% block sw_product_basic_form_name_field %}\n                    <sw-text-field\n                        v-if="productStream"\n                        v-model:value="productStream.name"\n                        v-tooltip.bottom="getNoPermissionsTooltip(\'product_stream.editor\')"\n                        name="sw-field--productStream-name"\n                        :label="$tc(\'sw-product-stream.detail.labelName\')"\n                        :validation="nameRequired"\n                        :required="isSystemLanguage"\n                        :placeholder="placeholder(productStream, \'name\', $tc(\'sw-product-stream.detail.placeholderName\'))"\n                        :error="productStreamNameError"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_basic_form_description_field %}\n                    <sw-textarea-field\n                        v-if="productStream"\n                        v-model:value="productStream.description"\n                        v-tooltip.bottom="getNoPermissionsTooltip(\'product_stream.editor\')"\n                        name="sw-field--productStream-description"\n                        :label="$tc(\'sw-product-stream.detail.labelDescription\')"\n                        :placeholder="placeholder(productStream, \'description\', $tc(\'sw-product-stream.detail.placeholderDescription\'))"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                    />\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_product_stream_detail_filter %}\n                <sw-card\n                    :large="true"\n                    position-identifier="sw-product-stream-detail-filter"\n                    class="sw-product-stream-detail__condition_container"\n                    :class="{ \'is--disabled\': !acl.can(\'product_stream.editor\') }"\n                    :title="$tc(\'sw-product-stream.detail.titleFilter\')"\n                >\n                    \n                    {% block sw_product_stream_detail_filter_tree %}\n                    <sw-condition-tree\n                        v-if="productStream"\n                        :initial-conditions="productStreamFilters"\n                        :condition-repository="productStreamFiltersRepository"\n                        :condition-data-provider-service="productStreamConditionService"\n                        child-association-field="queries"\n                        association-field="productStreamId"\n                        :association-value="productStream.id"\n                        :root-condition="null"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                        @conditions-changed="updateFilterTree"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_stream_detail_filter_preview_button %}\n                    <sw-button\n                        class="sw-product-stream-detail__open_modal_preview"\n                        @click.prevent="openModalPreview"\n                    >\n                        {{ $tc(\'sw-product-stream.detail.buttonOpenPreview\') }}\n                    </sw-button>\n                    {% endblock %}\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_prouct_stream_detail_preview_modal %}\n                <sw-product-stream-modal-preview\n                    v-if="showModalPreview"\n                    ref="modalPreview"\n                    :filters="productStreamFiltersTree"\n                    @modal-close="closeModalPreview"\n                />\n                {% endblock %}\n\n                \n                {% block sw_prouct_stream_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-product-stream-detail-custom-field-sets"\n                    :large="true"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="productStream"\n                        :disabled="!acl.can(\'product_stream.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","productStreamConditionService","acl","customFieldDataProviderService"],provide(){return{productCustomFields:this.productCustomFields}},beforeRouteLeave(t,e,r){if(this.showModalPreview){this.showModalPreview=!1,this.$nextTick(()=>r());return}r()},mixins:[a.getByName("placeholder"),a.getByName("notification"),a.getByName("discard-detail-page-changes")("productStream"),a.getByName("sw-inline-snippet")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},props:{productStreamId:{type:String,required:!1,default:null}},data(){return{isLoading:!1,customFieldsLoading:!1,isSaveSuccessful:!1,productStream:null,productStreamFilters:null,productStreamFiltersTree:null,deletedProductStreamFilters:[],productCustomFields:{},showModalPreview:!1,languageId:null,customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.productStream,"name")},productStreamRepository(){return this.repositoryFactory.create("product_stream")},productStreamFiltersRepository(){return this.productStream?this.repositoryFactory.create(this.productStream.filters.entity,this.productStream.filters.source):null},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},tooltipSave(){if(!this.acl.can("product_stream.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:!0};let t=this.$device.getSystemKey();return{message:`${t} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},isSystemLanguage(){return this.languageId===i.api.systemLanguageId},nameRequired(){return this.isSystemLanguage},...s("productStream",["name"]),showCustomFields(){return this.productStream&&this.customFieldSets&&this.customFieldSets.length>0}},watch:{productStreamId:{immediate:!0,handler(){if(!this.productStreamId){this.createProductStream();return}this.isLoading=!0,this.loadEntityData(this.productStreamId).then(()=>{this.isLoading=!1})}}},created(){this.createdComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-product-stream-detail__productStream",path:"productStream",scope:this}),this.languageId=i.api.languageId,this.productStreamId&&this.getProductCustomFields(),this.loadCustomFieldSets()},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("product_stream").then(t=>{this.customFieldSets=t})},createProductStream(){this.getProductCustomFields().then(()=>{i.api.languageId=i.api.systemLanguageId,this.productStream=this.productStreamRepository.create(i.api),this.productStreamFilters=this.productStream.filters})},loadEntityData(t){return this.productStreamRepository.get(t,i.api).then(t=>(this.productStream=t,this.loadFilters()))},loadFilters(t=null){if(null===t){let t=new n(1,25);return t.addFilter(n.equals("productStreamId",this.productStreamId)),this.productStreamFiltersRepository.search(t,i.api).then(t=>this.loadFilters(t))}if(t.length>=t.total)return this.productStreamFilters=t,Promise.resolve();let e=n.fromCriteria(t.criteria);return e.page+=1,this.productStreamFiltersRepository.search(e,t.context).then(e=>(t.push(...e),t.criteria=e.criteria,t.total=e.total,this.loadFilters(t)))},abortOnLanguageChange(){return this.productStreamRepository.hasChanges(this.productStream)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(t){this.languageId=t,this.isLoading=!0,this.loadEntityData(this.productStream.id).then(()=>{this.isLoading=!1})},onDuplicate(){return this.onSave().then(()=>{let t={cloneChildren:!0,overwrites:{name:`${this.productStream.name||this.productStream.translated.name} ${this.$tc("global.default.copy")}`}};return this.isLoading=!0,this.productStreamRepository.clone(this.productStream.id,t,Shopware.Context.api).then(t=>{let e={name:"sw.product.stream.detail",params:{id:t.id}};this.$router.push(e)}).catch(()=>{this.isLoading=!1,this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})})})},onSave(){return(this.isSaveSuccessful=!1,this.isLoading=!0,this.productStream.isNew())?(this.productStream.filters=this.productStreamFiltersTree,this.saveProductStream().then(()=>{this.$router.push({name:"sw.product.stream.detail",params:{id:this.productStream.id}}),this.isSaveSuccessful=!0}).catch(()=>{this.showErrorNotification(),this.isLoading=!1})):this.productStreamRepository.save(this.productStream,i.api).then(this.syncProductStreamFilters).then(()=>this.loadEntityData(this.productStream.id)).then(()=>{this.isSaveSuccessful=!0,this.isLoading=!1}).catch(()=>{this.isLoading=!1,this.showErrorNotification()})},showErrorNotification(){this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")})},saveProductStream(){return this.productStreamRepository.save(this.productStream,i.api)},syncProductStreamFilters(){return this.productStreamFiltersRepository.sync(this.productStreamFiltersTree,i.api).then(()=>this.deletedProductStreamFilters.length>0?this.productStreamFiltersRepository.syncDeleted(this.deletedProductStreamFilters,i.api).then(()=>{this.deletedProductStreamFilters=[]}):Promise.resolve())},onCancel(){this.$router.push({name:"sw.product.stream.index"})},openModalPreview(){this.showModalPreview=!0},closeModalPreview(){this.showModalPreview=!1},getProductCustomFields(){this.customFieldsLoading=!0;let t=new n(1,null);t.addFilter(n.equals("relations.entityName","product"));let e=[];return this.customFieldSetRepository.search(t,i.api).then(t=>{let r=new n(1,null);r.addAssociation("customFields").addAssociation("relations"),t.forEach(t=>{e.push(this.customFieldSetRepository.get(t.id,i.api,r).then(t=>{let e=t.customFields.reduce((t,e)=>(t[e.name]=this.mapCustomFieldType({type:e.type,value:`customFields.${e.name}`,label:this.getCustomFieldLabel(e)}),t),{});Object.assign(this.productCustomFields,e)}))}),Promise.all(e).then(()=>{this.customFieldsLoading=!1})})},getCustomFieldLabel(t){return this.getInlineSnippet(t.config.label)||t.name},mapCustomFieldType(t){switch(t.type){case"bool":t.type="boolean";break;case"html":case"text":t.type="string";break;case"date":t.type="string",t.format="date-time"}return t},updateFilterTree({conditions:t,deletedIds:e}){this.productStreamFiltersTree=t,this.deletedProductStreamFilters=[...this.deletedProductStreamFilters,...e]},getNoPermissionsTooltip(t,e=!0){return{showDelay:300,message:this.$tc("sw-privileges.tooltip.warning"),appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t)}}}}},32717:function(t,e,r){var a=r(72210);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),r(45346).Z("28c622ac",a,!0,{})}}]);