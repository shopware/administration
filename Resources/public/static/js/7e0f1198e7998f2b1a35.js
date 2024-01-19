(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[598],{fkSe:function(e,n,t){"use strict";t.r(n);var a=t("7yzw"),s=t.n(a),o=t("92Mt"),l=t.n(o),i=Shopware,r=i.Mixin,c=i.Context,d=i.Defaults,p=Shopware.Data.Criteria;n.default={template:'\n{% block sw_sales_channel_detail %}\n<sw-page class="sw-sales-channel-detail">\n    \n    {% block sw_sales_channel_detail_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_sales_channel_detail_header_headline %}\n        <h2>{{ placeholder(salesChannel, \'name\', $tc(\'sw-sales-channel.detail.textHeadline\')) }}</h2>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_sales_channel_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-sales-channel-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!allowSaving || isLoading || productComparison.invalidFileName"\n            variant="primary"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-sales-channel.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_sales_channel_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(salesChannel, \'name\', $tc(\'sw-sales-channel.detail.textHeadline\'))"\n            />\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_content_tabs %}\n            <sw-tabs\n                class="sw-sales-channel-detail-__tabs"\n                position-identifier="sw-sales-channel-detail"\n            >\n                {%  block sw_sales_channel_detail_content_tab_general %}\n                <sw-tabs-item\n                    :route="{ name: \'sw.sales.channel.detail.base\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabBase\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabBase\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_detail_content_tab_products %}\n                <sw-tabs-item\n                    v-if="isHeadless || isStoreFront"\n                    :route="{ name: \'sw.sales.channel.detail.products\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabProducts\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabProducts\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_detail_content_tab_theme %}{% endblock %}\n\n                {%  block sw_sales_channel_detail_content_tab_product_comparison %}\n                <sw-tabs-item\n                    v-if="isProductComparison && !isLoading"\n                    :route="{ name: \'sw.sales.channel.detail.productComparison\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabProductComparison\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabProductComparison\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                {%  block sw_sales_channel_detail_content_tab_analytics %}\n                <sw-tabs-item\n                    v-if="isStoreFront"\n                    :route="{ name: \'sw.sales.channel.detail.analytics\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-sales-channel.detail.tabAnalytics\')"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.tabAnalytics\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_content_view %}\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                {% if VUE3 %}\n                <router-view\n                    :key="$route.params.id"\n                    v-slot="{ Component }"\n                >\n                    <component\n                        :is="Component"\n                        :sales-channel="salesChannel"\n                        :product-export="productExport"\n                        :storefront-sales-channel-criteria="storefrontSalesChannelCriteria"\n                        :custom-field-sets="customFieldSets"\n                        :is-loading="isLoading"\n                        :product-comparison-access-url="productComparison.productComparisonAccessUrl"\n                        :template-options="productComparison.templateOptions"\n                        :show-template-modal="productComparison.showTemplateModal"\n                        :template-name="productComparison.templateName"\n                        @template-selected="onTemplateSelected"\n                        @access-key-changed="generateAccessUrl"\n                        @domain-changed="generateAccessUrl"\n                        @invalid-file-name="setInvalidFileName(true)"\n                        @valid-file-name="setInvalidFileName(false)"\n                        @template-modal-close="onTemplateModalClose"\n                        @template-modal-confirm="onTemplateModalConfirm"\n                    />\n                </router-view>\n                {% else %}\n                <router-view\n                    :key="$route.params.id"\n                    :sales-channel="salesChannel"\n                    :product-export="productExport"\n                    :storefront-sales-channel-criteria="storefrontSalesChannelCriteria"\n                    :custom-field-sets="customFieldSets"\n                    :is-loading="isLoading"\n                    :product-comparison-access-url="productComparison.productComparisonAccessUrl"\n                    :template-options="productComparison.templateOptions"\n                    :show-template-modal="productComparison.showTemplateModal"\n                    :template-name="productComparison.templateName"\n                    @template-selected="onTemplateSelected"\n                    @access-key-changed="generateAccessUrl"\n                    @domain-changed="generateAccessUrl"\n                    @invalid-file-name="setInvalidFileName(true)"\n                    @valid-file-name="setInvalidFileName(false)"\n                    @template-modal-close="onTemplateModalClose"\n                    @template-modal-confirm="onTemplateModalConfirm"\n                />\n                {% endif %}\n            </template>\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n    <template #sidebar>\n        \n        {% block sw_sales_channel_detail_sidebar %}\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","exportTemplateService","acl","feature"],mixins:[r.getByName("notification"),r.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":"onSave"},data:function(){return{salesChannel:null,isLoading:!1,customFieldSets:[],isSaveSuccessful:!1,productComparison:{newProductExport:null,productComparisonAccessUrl:null,invalidFileName:!1,templateOptions:[],templates:null,templateName:null,showTemplateModal:!1,selectedTemplate:null}}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{identifier:function(){return this.placeholder(this.salesChannel,"name")},productExport:function(){return this.salesChannel&&this.salesChannel.productExports.first()?this.salesChannel.productExports.first():(this.productComparison.newProductExport||(this.productComparison.newProductExport=this.productExportRepository.create(),this.productComparison.newProductExport.interval=0,this.productComparison.newProductExport.generateByCronjob=!1),this.productComparison.newProductExport)},isStoreFront:function(){return this.salesChannel?this.salesChannel.typeId===d.storefrontSalesChannelTypeId:this.$route.params.typeId===d.storefrontSalesChannelTypeId},isProductComparison:function(){return this.salesChannel?this.salesChannel.typeId===d.productComparisonTypeId:this.$route.params.typeId===d.productComparisonTypeId},isHeadless:function(){return this.salesChannel?this.salesChannel.typeId===d.apiSalesChannelTypeId:this.$route.params.typeId===d.apiSalesChannelTypeId},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},salesChannelAnalyticsRepository:function(){return this.repositoryFactory.create("sales_channel_analytics")},customFieldRepository:function(){return this.repositoryFactory.create("custom_field_set")},productExportRepository:function(){return this.repositoryFactory.create("product_export")},storefrontSalesChannelCriteria:function(){return new p(1,25).addFilter(p.equals("typeId",d.storefrontSalesChannelTypeId))},tooltipSave:function(){if(!this.allowSaving)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSaving,showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},allowSaving:function(){return this.acl.can("sales_channel.editor")}},watch:{"$route.params.id":function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){Shopware.ExtensionAPI.publishData({id:"sw-sales-channel-detail__salesChannel",path:"salesChannel",scope:this}),this.loadEntityData(),this.loadProductExportTemplates()},loadEntityData:function(){this.$route.params.id&&(this.$route.params.typeId||(this.salesChannel&&(this.salesChannel=null),this.loadSalesChannel(),this.loadCustomFieldSets()))},loadSalesChannel:function(){var e=this;this.isLoading=!0,this.salesChannelRepository.get(this.$route.params.id,c.api,this.getLoadSalesChannelCriteria()).then((function(n){e.salesChannel=n,e.salesChannel.maintenanceIpWhitelist||(e.salesChannel.maintenanceIpWhitelist=[]),e.generateAccessUrl(),e.isLoading=!1}))},getLoadSalesChannelCriteria:function(){var e=new p(1,25);return e.addAssociation("paymentMethods"),e.addAssociation("shippingMethods"),e.addAssociation("countries"),e.getAssociation("currencies").addSorting(p.sort("name","ASC")),e.addAssociation("domains"),e.addAssociation("languages"),e.addAssociation("analytics"),e.addAssociation("productExports"),e.addAssociation("productExports.salesChannelDomain.salesChannel"),e.addAssociation("domains.language"),e.addAssociation("domains.snippetSet"),e.addAssociation("domains.currency"),e},onTemplateSelected:function(e){var n=this;null!==this.productComparison.templates&&void 0!==this.productComparison.templates[e]&&(this.productComparison.selectedTemplate=this.productComparison.templates[e],Object.keys(this.productComparison.selectedTemplate).some((function(e){return n.productExport[e]!==n.productComparison.selectedTemplate[e]}))&&(this.productComparison.showTemplateModal=!0))},onTemplateModalClose:function(){this.productComparison.selectedTemplate=null,this.productComparison.templateName=null,this.productComparison.showTemplateModal=!1},onTemplateModalConfirm:function(){var e=this;Object.keys(this.productComparison.selectedTemplate).forEach((function(n){e.productExport[n]=e.productComparison.selectedTemplate[n]})),this.onTemplateModalClose(),this.createNotificationInfo({message:this.$tc("sw-sales-channel.detail.productComparison.templates.message.template-applied-message")})},loadCustomFieldSets:function(){var e=this,n=new p(1,100);n.addFilter(p.equals("relations.entityName","sales_channel")),n.getAssociation("customFields").addSorting(p.sort("config.customFieldPosition","ASC",!0)),this.customFieldRepository.search(n,c.api).then((function(n){e.customFieldSets=n}))},generateAccessUrl:function(){if(this.productExport.salesChannelDomain){var e=this.productExport.salesChannelDomain.url.replace(/\/+$/g,"");this.productComparison.productComparisonAccessUrl="".concat(e,"/store-api/product-export/").concat(this.productExport.accessKey,"/").concat(this.productExport.fileName)}else this.productComparison.productComparisonAccessUrl=""},loadProductExportTemplates:function(){this.productComparison.templateOptions=Object.values(this.exportTemplateService.getProductExportTemplateRegistry()),this.productComparison.templates=this.exportTemplateService.getProductExportTemplateRegistry()},saveFinish:function(){this.isSaveSuccessful=!1},setInvalidFileName:function(e){this.productComparison.invalidFileName=e},onSave:function(){var e=this;return s()(l.a.mark((function n(){var t,a,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,e.isSaveSuccessful=!1,e.isProductComparison&&!e.salesChannel.productExports.length&&e.salesChannel.productExports.add(e.productExport),t=e.updateAnalytics(),n.prev=4,n.next=7,e.salesChannelRepository.save(e.salesChannel,c.api);case 7:if(!t||null!==(a=e.salesChannel)&&void 0!==a&&null!==(s=a.analytics)&&void 0!==s&&s.trackingId){n.next=10;break}return n.next=10,e.salesChannelAnalyticsRepository.delete(t,c.api);case 10:e.isLoading=!1,e.isSaveSuccessful=!0,e.$root.$emit("sales-channel-change"),e.loadEntityData(),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(4),e.isLoading=!1,e.createNotificationError({message:e.$tc("sw-sales-channel.detail.messageSaveError",0,{name:e.salesChannel.name||e.placeholder(e.salesChannel,"name")})});case 20:case"end":return n.stop()}}),n,null,[[4,16]])})))()},updateAnalytics:function(){var e,n,t=this.salesChannel.analyticsId;return!t||null!==(e=this.salesChannel)&&void 0!==e&&null!==(n=e.analytics)&&void 0!==n&&n.trackingId||(this.salesChannel.analyticsId=null,delete this.salesChannel.analytics),t},abortOnLanguageChange:function(){return this.salesChannelRepository.hasChanges(this.salesChannel)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(){this.loadEntityData()}}}}}]);