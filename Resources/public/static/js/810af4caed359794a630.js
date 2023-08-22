(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[463],{"1hmb":function(e,t,n){var r=n("qiGC");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("P8hj").default)("74291886",r,!0,{})},LTSs:function(e,t,n){"use strict";n.r(t);var r=n("c1oF"),a=n.n(r),l=n("CsSd"),s=n.n(l);n("1hmb");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=Shopware.Mixin,p=Shopware.Component.getComponentHelper().mapCollectionPropertyErrors,u=Shopware.Data.EntityCollection,d=Shopware.Data.Criteria,m=Shopware.Utils;t.default={template:'\n{% block sw_seo_url_template_card %}\n<sw-card\n    class="sw-seo-url-template-card"\n    position-identifier="sw-seo-url-template-card"\n    :title="$tc(\'sw-seo-url-template-card.general.titleCard\')"\n    :is-loading="isLoading"\n>\n    <template #toolbar>\n        <sw-sales-channel-switch\n            :label="$tc(\'sw-seo-url-template-card.general.labelSalesChannelSelect\')"\n            @change-sales-channel-id="onSalesChannelChanged"\n        />\n    </template>\n\n    \n    {% block sw_seo_url_template_card_info_box %}\n    <sw-alert\n        :title="$tc(\'sw-seo-url-template-card.general.headlineInfoMessageBoxEmptyProperties\')"\n    >\n        <span>{{ $tc(\'sw-seo-url-template-card.general.textInfoMessageBoxEmptyProperties\') }}</span>\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_seo_url_template_card_entries %}\n    <template v-if="!isLoading && !salesChannelIsHeadless">\n        <div\n            v-for="(seoUrlTemplate, index) in getTemplatesForSalesChannel(salesChannelId)"\n            :key="index"\n            class="sw-seo-url-template-card__seo-url"\n        >\n            <sw-container\n                columns="3fr 1fr"\n                gap="5px"\n            >\n                \n                {% block sw_seo_url_template_card_entries_input_wrapper %}\n                <sw-inherit-wrapper\n                    v-model="seoUrlTemplate.template"\n                    :has-parent="seoUrlTemplate.salesChannelId !== null"\n                    :inherited-value="getPlaceholder(seoUrlTemplate)"\n                    @input="onInput(seoUrlTemplate)"\n                >\n\n                    <template #content="props">\n                        \n                        {% block sw_seo_url_template_card_entries_input %}\n                        <sw-text-field\n                            :map-inheritance="props"\n                            :value="props.currentValue"\n                            :disabled="props.isInherited"\n                            :error="seoUrlTemplatesTemplateError[index]"\n                            :name="`sw-field--seo-url-template-${seoUrlTemplate.entity}`"\n                            :label="getLabel(seoUrlTemplate)"\n                            :placeholder="getPlaceholder(seoUrlTemplate)"\n                            @input="props.updateCurrentValue"\n                        >\n\n                            <template #suffix>\n                                \n                                {% block sw_seo_url_template_card_entries_input_suffix %}\n                                <sw-loader\n                                    v-if="previewLoadingStates[seoUrlTemplate.id]"\n                                    size="16px"\n                                />\n                                <sw-icon\n                                    v-else-if="errorMessages[seoUrlTemplate.id]"\n                                    v-tooltip="$tc(\'sw-seo-url-template-card.general.tooltipInvalidTemplate\')"\n                                    name="regular-times"\n                                />\n                                <sw-icon\n                                    v-else-if="noEntityError.includes(seoUrlTemplate.id)"\n                                    v-tooltip="$tc(\'sw-seo-url-template-card.general.textUrlNoEntitiesForPreview\', 0, {\n                                        entity: $tc(`global.entities.${seoUrlTemplate.entityName}`, 0)\n                                    })"\n                                    name="regular-exclamation-triangle"\n                                />\n                                <sw-icon\n                                    v-else-if="!seoUrlTemplate.template"\n                                    v-tooltip="$tc(\'sw-seo-url-template-card.general.textUrlPreviewEmptyTemplate\', 1, {\n                                        entity: $tc(`global.entities.${seoUrlTemplate.entityName}`, 0)\n                                    })"\n                                    name="regular-exclamation-triangle"\n                                />\n                                <sw-icon\n                                    v-else\n                                    v-tooltip="$tc(\'sw-seo-url-template-card.general.tooltipValidTemplate\')"\n                                    name="regular-checkmark"\n                                />\n                                {% endblock %}\n                            </template>\n\n                        </sw-text-field>\n                        {% endblock %}\n                    </template>\n                </sw-inherit-wrapper>\n                {% endblock %}\n                \n                {% block sw_seo_url_template_card_entries_variables %}\n                <sw-single-select\n                    v-if="getVariableOptions(seoUrlTemplate.id) && !noEntityError.includes(seoUrlTemplate.id)"\n                    :value="selectedProperty"\n                    value-property="name"\n                    label-property="name"\n                    show-clearable-button\n                    :options="getVariableOptions(seoUrlTemplate.id)"\n                    :placeholder="$tc(\'sw-seo-url-template-card.general.placeholderSelectVariables\')"\n                    :label="$tc(\'sw-seo-url-template-card.general.labelPossibleValues\')"\n                    @change="(propertyName) => onSelectInput(propertyName, seoUrlTemplate)"\n                />\n                {% endblock %}\n            </sw-container>\n            \n            {% block sw_seo_url_template_card_entries_preview %}\n            <div\n                v-if="seoUrlTemplate.template"\n                class="sw-seo-url-template-card__preview"\n            >\n                \n                {% block sw_seo_url_template_card_entries_preview_label %}\n                <span class="sw-seo-url-template-card__preview-label">\n                    {{ $tc(\'sw-seo-url-template-card.general.preview\') }}\n                </span>\n                {% endblock %}\n                \n                {% block sw_seo_url_template_card_entries_preview_item %}\n                <div class="sw-seo-url-template-card__preview-item">\n                    <span v-if="previews[seoUrlTemplate.id] && previews[seoUrlTemplate.id].length > 0">\n                        {{ previews[seoUrlTemplate.id][0].seoPathInfo }}\n                    </span>\n                    <span v-else>\n                        {{ $tc(\'sw-seo-url-template-card.general.textUrlPreviewNotPossible\') }}\n                    </span>\n                    <span v-if="noEntityError.includes(seoUrlTemplate.id)">\n                        {{ $tc(\'sw-seo-url-template-card.general.textUrlNoEntitiesForPreview\', 0, {\n                            entity: $tc(`global.entities.${seoUrlTemplate.entityName}`, 0)\n                        }) }}\n                    </span>\n                </div>\n                {% endblock %}\n            </div>\n            {% endblock %}\n        </div>\n    </template>\n    <div v-if="salesChannelIsHeadless && !isLoading">\n        {{ $tc(\'sw-seo-url.textSeoUrlsDisallowedForHeadless\') }}\n    </div>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["seoUrlTemplateService","repositoryFactory"],mixins:[c.getByName("notification")],data:function(){return{defaultSeoUrlTemplates:null,seoUrlTemplates:null,seoUrlPreviewCriteria:{},isLoading:!0,debouncedPreviews:{},previewLoadingStates:{},errorMessages:{},previews:{},noEntityError:[],variableStores:{},seoUrlTemplateRepository:{},salesChannelId:null,salesChannels:[],selectedProperty:null}},computed:i(i({},p("seoUrlTemplates",["template"])),{},{salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},salesChannelIsHeadless:function(){var e=this,t=this.salesChannels.find((function(t){return t.id===e.salesChannelId}));return!!t&&"f183ee5650cf4bdb8a774337575067a6"===t.typeId}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){this.seoUrlTemplateRepository=this.repositoryFactory.create("seo_url_template"),this.seoUrlTemplates=new u(this.seoUrlTemplateRepository.route,this.seoUrlTemplateRepository.schema.entity,Shopware.Context.api,new d(1,25)),this.defaultSeoUrlTemplates=new u(this.seoUrlTemplateRepository.route,this.seoUrlTemplateRepository.schema.entity,Shopware.Context.api,new d(1,25)),this.seoUrlPreviewCriteria["frontend.navigation.page"]=new d(1,25).addFilter(d.not("and",[d.equals("path",null)])),this.fetchSalesChannels(),this.fetchSeoUrlTemplates()},fetchSeoUrlTemplates:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=new d(1,25);t||(t=null),n.addFilter(d.equals("salesChannelId",t)),this.isLoading=!0,this.seoUrlTemplateRepository.search(n).then((function(n){n.forEach((function(t){e.seoUrlTemplates.has(t.id)||e.seoUrlTemplates.add(t)})),t?e.createSeoUrlTemplatesFromDefaultRoutes(t):n.forEach((function(t){e.defaultSeoUrlTemplates.has(t)||e.defaultSeoUrlTemplates.add(t)})),e.isLoading=!1,e.seoUrlTemplates.forEach((function(t){e.fetchSeoUrlPreview(t),e.variableStores.hasOwnProperty(t.id)||e.seoUrlTemplateService.getContext(t).then((function(n){e.createVariableOptions(t.id,n)}))}))}))},createSeoUrlTemplatesFromDefaultRoutes:function(e){var t=this;this.defaultSeoUrlTemplates.forEach((function(n){if(!t.seoUrlTemplates.some((function(t){return t.routeName===n.routeName&&t.salesChannelId===e}))){var r=t.seoUrlTemplateRepository.create();r.routeName=n.routeName,r.salesChannelId=e,r.entityName=n.entityName,r.template=null,t.seoUrlTemplates.add(r)}}))},createVariableOptions:function(e,t){var n=[];Object.entries(t).forEach((function(e){var t=a()(e,2),r=t[0],l=t[1];n.push({name:"".concat(r)}),l instanceof Object&&Object.keys(l).forEach((function(e){n.push({name:"".concat(r,".").concat(e)})}))})),this.$set(this.variableStores,e,n)},getVariableOptions:function(e){return!!this.variableStores.hasOwnProperty(e)&&this.variableStores[e]},getLabel:function(e){var t=e.routeName.replace(/\./g,"-");return this.$tc("sw-seo-url-template-card.routeNames.".concat(t))?this.$tc("sw-seo-url-template-card.routeNames.".concat(t)):e.routeName},getPlaceholder:function(e){return e.salesChannelId?Object.values(this.defaultSeoUrlTemplates).find((function(t){return t.routeName===e.routeName})).template:null},onClickSave:function(){var e=this;Object.keys(this.errorMessages).some((function(t){return null!==e.errorMessages[t]}))?this.createSaveErrorNotification():(this.seoUrlTemplates.forEach((function(t){null===t.template&&e.seoUrlTemplates.remove(t.id)})),this.seoUrlTemplateRepository.sync(this.seoUrlTemplates).then((function(){e.seoUrlTemplates=new u(e.seoUrlTemplateRepository.route,e.seoUrlTemplateRepository.schema.entity,Shopware.Context.api,new d(1,25)),e.fetchSeoUrlTemplates(e.salesChannelId),e.createSaveSuccessNotification()})).catch((function(){e.createSaveErrorNotification()})))},createSaveErrorNotification:function(){var e=this.$tc("global.default.error"),t=this.$tc("sw-seo-url-template-card.general.messageSaveError");this.createNotificationError({title:e,message:t})},createSaveSuccessNotification:function(){var e=this.$tc("global.default.success"),t=this.$tc("sw-seo-url-template-card.general.messageSaveSuccess");this.createNotificationSuccess({title:e,message:t})},onSelectInput:function(e,t){if(null!==e){var n=t.template?"".concat(t.template,"/"):"";t.template="".concat(n,"{{ ").concat(e," }}"),this.fetchSeoUrlPreview(t)}},onInput:function(e){this.debouncedPreviewSeoUrlTemplate(e)},debouncedPreviewSeoUrlTemplate:function(e){var t=this;this.debouncedPreviews[e.id]?this.$set(this.errorMessages,e.id,null):this.debouncedPreviews[e.id]=m.debounce((function(){e.template&&""!==e.template?t.fetchSeoUrlPreview(e):t.$set(t.errorMessages,e.id,null)}),400),this.debouncedPreviews[e.id]()},fetchSeoUrlPreview:function(e){var t=this;this.$set(this.previewLoadingStates,e.id,!0);var n=this.seoUrlPreviewCriteria[e.routeName]?this.seoUrlPreviewCriteria[e.routeName]:new d(1,25);e.criteria=n.parse(),this.seoUrlTemplateService.preview(e).then((function(n){t.noEntityError=t.noEntityError.filter((function(t){return t!==e.id})),t.$set(t.previews,e.id,n),null===n?t.noEntityError.push(e.id):t.$set(t.errorMessages,e.id,null),t.previewLoadingStates[e.id]=!1})).catch((function(n){t.$set(t.errorMessages,e.id,n.response.data.errors[0].detail),t.$set(t.previews,e.id,[]),t.previewLoadingStates[e.id]=!1}))},fetchSalesChannels:function(){var e=this;this.salesChannelRepository.search(new d(1,25)).then((function(t){e.salesChannels=t}))},onSalesChannelChanged:function(e){this.salesChannelId=e,this.fetchSeoUrlTemplates(e)},getTemplatesForSalesChannel:function(e){return this.seoUrlTemplates.filter((function(t){return t.salesChannelId===e}))}}}},qiGC:function(e,t,n){}}]);