(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[10],{GoVY:function(t){t.exports=JSON.parse('{"sw.product.detail.base":{"product":["taxId","price","stock","manufacturerId","name","downloads"]},"sw.product.detail.cross.selling":{"product_cross_selling":["name","type","position"]}}')},HsKL:function(t,e,n){"use strict";n.r(e);var i=n("7yzw"),a=n.n(i),o=n("6lmj"),r=n.n(o),s=n("CsSd"),c=n.n(s),d=n("92Mt"),u=n.n(d),l=n("h11n"),p=n("LUrJ"),h=n("GoVY");n("RZLM");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=Shopware,S=g.Context,w=g.Mixin,v=Shopware.Data,b=v.Criteria,_=v.ChangesetGenerator,P=Shopware.Utils.object.cloneDeep,y=Shopware.Component.getComponentHelper(),C=y.mapPageErrors,k=y.mapState,A=y.mapGetters,M=Shopware.Utils.types;e.default={template:'\n{% block sw_product_detail %}\n<sw-page class="sw-product-detail">\n\n    \n    {% block sw_product_detail_header %}\n    <template #smart-bar-header>\n        <h2>\n            <sw-product-variant-info\n                :variations="product.variation"\n                :title-term="productTitle"\n            >\n                {{ productTitle }}\n            </sw-product-variant-info>\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_product_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-product.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        <sw-button-group\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'product.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-product-detail__save-button-group"\n            :split-button="true"\n        >\n            \n            {% block sw_product_detail_actions_save %}\n            <sw-button-process\n                v-tooltip.bottom="tooltipSave"\n                class="sw-product-detail__save-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                variant="primary"\n                :disabled="isLoading || !acl.can(\'product.editor\')"\n                {% if VUE3 %}\n                @update:process-success="saveFinish"\n                {% else %}\n                @process-finish="saveFinish"\n                {% endif %}\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-product.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_actions_save_context_menu %}\n            <sw-context-button>\n                <template #button>\n                    <sw-button\n                        class="sw-product-detail__button-context-menu"\n                        square\n                        variant="primary"\n                        :disabled="isLoading || !acl.can(\'product.editor\')"\n                    >\n                        <sw-icon\n                            name="regular-chevron-down-xs"\n                            size="16"\n                        />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_product_detail_actions_save_context_menu_actions %}\n                \n                {% block sw_product_detail_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-product-detail__save-duplicate-action"\n                    :disabled="!acl.can(\'product.creator\') || !acl.can(\'product.editor\') || product.parentId != null"\n                    @click="onDuplicate"\n                >\n                    {{ $tc(\'sw-product.detail.buttonSaveDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="!productId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_product_detail_content_top %}\n            <template v-if="!isLoading && isChild">\n                <router-link\n                    v-if="advanceModeEnabled"\n                    class="sw-card__back-link"\n                    :to="{ name: \'sw.product.detail.variants\', params: { id: product.parentId } }"\n                >\n                    <sw-icon\n                        name="regular-long-arrow-left"\n                        small\n                    />\n                    {{ $tc(\'sw-product.general.backToParent\') }}\n                </router-link>\n\n                <router-link\n                    v-else\n                    class="sw-card__back-link"\n                    :to="{ name: \'sw.product.detail.base\', params: { id: product.parentId } }"\n                >\n                    <sw-icon\n                        name="regular-long-arrow-left"\n                        small\n                    />\n                    {{ $tc(\'sw-product.general.backToGeneralOverview\') }}\n                </router-link>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(product, \'name\', $tc(\'sw-product.detail.textHeadline\'))"\n                :is-new-entity="!productId"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_detail_inheritance_warning %}\n            <sw-inheritance-warning\n                v-if="isChild"\n                :name="$tc(\'sw-product.general.inheritanceModuleName\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_tabs %}\n            <sw-tabs\n                v-if="productId"\n                class="sw-product-detail-page__tabs"\n                position-identifier="sw-product-detail"\n            >\n                \n                {% block sw_product_detail_content_tabs_general %}\n                <sw-tabs-item\n                    class="sw-product-detail__tab-general"\n                    :route="{ name: \'sw.product.detail.base\', params: { id: $route.params.id } }"\n                    :has-error="swProductDetailBaseError"\n                    :title="$tc(\'sw-product.detail.tabGeneral\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_specifications %}\n                <sw-tabs-item\n                    class="sw-product-detail__tab-specifications"\n                    :route="{ name: \'sw.product.detail.specifications\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabSpecifications\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabSpecifications\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_advanced_prices %}\n                <sw-tabs-item\n                    v-show="showModeSetting"\n                    class="sw-product-detail__tab-advanced-prices"\n                    :route="{ name: \'sw.product.detail.prices\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabAdvancedPrices\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabAdvancedPrices\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_advanced_variants %}\n                <sw-tabs-item\n                    v-show="!isChild && showModeSetting"\n                    class="sw-product-detail__tab-variants"\n                    :route="{ name: \'sw.product.detail.variants\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabVariation\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabVariation\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_layout %}\n                <sw-tabs-item\n                    v-show="!isChild && showModeSetting"\n                    class="sw-product-detail__tab-layout"\n                    :route="{ name: \'sw.product.detail.layout\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabLayout\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabLayout\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_seo %}\n                <sw-tabs-item\n                    v-show="showModeSetting"\n                    class="sw-product-detail__tab-seo"\n                    :route="{ name: \'sw.product.detail.seo\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabSeo\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabSeo\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_cross_selling %}\n                <sw-tabs-item\n                    v-show="!isChild && showModeSetting"\n                    class="sw-product-detail__tab-cross-selling"\n                    :route="{ name: \'sw.product.detail.crossSelling\', params: { id: $route.params.id } }"\n                    :has-error="swProductDetailCrossSellingError"\n                    :title="$tc(\'sw-product.detail.tabCrossSelling\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabCrossSelling\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_reviews %}\n                <sw-tabs-item\n                    v-show="showModeSetting"\n                    class="sw-product-detail__tab-reviews"\n                    :route="{ name: \'sw.product.detail.reviews\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabReviews\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabReviews\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_additional %}\n                {% endblock %}\n\n            </sw-tabs>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_view %}\n            <router-view\n                @cover-change="onCoverChange"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_clone_modal %}\n            <sw-product-clone-modal\n                v-if="cloning"\n                :product="product"\n                @clone-finish="onDuplicateFinish"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_settings_mode %}\n            <sw-product-settings-mode\n                v-if="showAdvanceModeSetting"\n                :is-loading="isLoading"\n                :mode-settings="advancedModeSetting"\n                @settings-item-change="onChangeSettingItem"\n                @settings-change="onChangeSetting"\n            />\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n    <template #sidebar>\n        \n        {% block sw_product_detail_sidebar %}\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',inject:["mediaService","repositoryFactory","numberRangeService","seoUrlService","acl","systemConfigApiService","entityValidationService"],mixins:[w.getByName("notification"),w.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.acl.can("product.editor")},method:"onSave"},ESCAPE:"onCancel"},props:{productId:{type:String,required:!1,default:null},creationStates:{type:Array,required:!1,default:null}},data:function(){return{productNumberPreview:"",isSaveSuccessful:!1,cloning:!1,defaultSalesChannelVisibility:30}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:m(m(m(m(m({},k("swProductDetail",["product","parentProduct","localMode","advancedModeSetting","modeSettings"])),A("swProductDetail",["productRepository","isLoading","isChild","defaultCurrency","defaultFeatureSet","showModeSetting","advanceModeEnabled","productStates"])),C(h)),k("cmsPageState",["currentPage"])),{},{identifier:function(){return this.productTitle},productTitle:function(){return this.isChild&&this.product?this.getInheritTitle():this.$i18n?this.placeholder(this.product,"name",this.$tc("sw-product.detail.textHeadline")):""},productRepository:function(){return this.repositoryFactory.create("product")},syncRepository:function(){return this.repositoryFactory.create("product",null,{useSync:!0})},currencyRepository:function(){return this.repositoryFactory.create("currency")},taxRepository:function(){return this.repositoryFactory.create("tax")},customFieldSetRepository:function(){return this.repositoryFactory.create("custom_field_set")},salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},productVisibilityRepository:function(){return this.repositoryFactory.create("product_visibility")},mediaRepository:function(){return this.product&&this.product.media?this.repositoryFactory.create(this.product.media.entity,this.product.media.source):null},featureSetRepository:function(){return this.repositoryFactory.create("product_feature_set")},currentUser:function(){return Shopware.State.get("session").currentUser},userModeSettingsRepository:function(){return this.repositoryFactory.create("user_config")},userModeSettingsCriteria:function(){var t=new b(1,25);return t.addFilter(b.equals("key","mode.setting.advancedModeSettings")),t.addFilter(b.equals("userId",this.currentUser&&this.currentUser.id)),t},productCriteria:function(){var t=new b(1,25);return t.getAssociation("media").addSorting(b.sort("position","ASC")),t.getAssociation("properties").addSorting(b.sort("name","ASC",!0)),t.getAssociation("prices").addSorting(b.sort("quantityStart","ASC",!0)),t.getAssociation("tags").addSorting(b.sort("name","ASC")),t.getAssociation("seoUrls").addFilter(b.equals("isCanonical",!0)),t.getAssociation("crossSellings").addSorting(b.sort("position","ASC")).getAssociation("assignedProducts").addSorting(b.sort("position","ASC")).addAssociation("product").getAssociation("product").addAssociation("options.group"),t.addAssociation("cover").addAssociation("categories").addAssociation("visibilities.salesChannel").addAssociation("options").addAssociation("configuratorSettings.option").addAssociation("unit").addAssociation("productReviews").addAssociation("seoUrls").addAssociation("mainCategories").addAssociation("options.group").addAssociation("customFieldSets").addAssociation("featureSet").addAssociation("cmsPage").addAssociation("featureSet").addAssociation("downloads.media"),t.getAssociation("manufacturer").addAssociation("media"),t},customFieldSetCriteria:function(){var t=new b(1,null);return t.addFilter(b.equals("relations.entityName","product")),t.addSorting(b.sort("config.customFieldPosition","ASC",!0)),t},defaultFeatureSetCriteria:function(){var t=new b(1,1);return t.addSorting(b.sort("createdAt","ASC")).addFilter(b.equalsAny("name",["Default","Standard"])),t},taxCriteria:function(){var t=new b(1,500);return t.addSorting(b.sort("position")),t},tooltipSave:function(){var t=this.$device.getSystemKey();return{message:"".concat(t," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},getModeSettingGeneralTab:function(){return[{key:"general_information",label:"sw-product.detailBase.cardTitleProductInfo",enabled:!0,name:"general"},{key:"prices",label:"sw-product.detailBase.cardTitlePrices",enabled:!0,name:"general"},{key:"deliverability",label:"sw-product.detailBase.cardTitleDeliverabilityInfo",enabled:!0,name:"general"},{key:"visibility_structure",label:"sw-product.detailBase.cardTitleAssignment",enabled:!0,name:"general"},{key:"media",label:"sw-product.detailBase.cardTitleMedia",enabled:!0,name:"general"},{key:"labelling",label:"sw-product.detailBase.cardTitleSettings",enabled:!0,name:"general"}]},getModeSettingSpecificationsTab:function(){return[{key:"measures_packaging",label:"sw-product.specifications.cardTitleMeasuresPackaging",enabled:!0,name:"specifications"},{key:"properties",label:"sw-product.specifications.cardTitleProperties",enabled:!0,name:"specifications"},{key:"essential_characteristics",label:"sw-product.specifications.cardTitleEssentialCharacteristics",enabled:!0,name:"specifications"},{key:"custom_fields",label:"sw-product.specifications.cardTitleCustomFields",enabled:!0,name:"specifications"}]},showAdvanceModeSetting:function(){if(this.isChild)return!1;return["sw.product.detail.base","sw.product.detail.specifications"].includes(this.$route.name)}}),watch:{productId:function(){this.destroyedComponent(),this.createdComponent()}},beforeCreate:function(){Shopware.State.registerModule("swProductDetail",p.a)},created:function(){this.createdComponent()},beforeUnmount:function(){Shopware.State.unregisterModule("swProductDetail")},destroyed:function(){this.destroyedComponent()},methods:{createdComponent:function(){var t=this;Shopware.ExtensionAPI.publishData({id:"sw-product-detail__product",path:"product",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-product-detail__cmsPage",path:"currentPage",scope:this}),Shopware.State.dispatch("cmsPageState/resetCmsPageState"),this.productId||Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.initState(),this.$root.$on("media-remove",(function(e){t.removeMediaItem(e)})),this.$root.$on("product-reload",(function(){t.loadAll()})),this.initAdvancedModeSettings()},destroyedComponent:function(){this.$root.$off("media-remove"),this.$root.$off("product-reload")},initState:function(){var t=this;return Shopware.State.commit("swProductDetail/setApiContext",Shopware.Context.api),this.productId?this.loadState():this.createState().then((function(){t.numberRangeService.reserve("product","",!0).then((function(e){t.productNumberPreview=e.number,t.product.productNumber=e.number}))}))},initAdvancedModeSettings:function(){Shopware.State.commit("swProductDetail/setAdvancedModeSetting",this.getAdvancedModeDefaultSetting()),this.getAdvancedModeSetting()},createUserModeSetting:function(){var t=this.userModeSettingsRepository.create();return t.key="mode.setting.advancedModeSettings",t.userId=this.currentUser&&this.currentUser.id,t},getAdvancedModeDefaultSetting:function(){var t=this.createUserModeSetting();return t.value={advancedMode:{label:"sw-product.general.textAdvancedMode",enabled:!0},settings:[].concat(r()(this.getModeSettingGeneralTab),r()(this.getModeSettingSpecificationsTab))},t},getAdvancedModeSetting:function(){var t=this;return this.userModeSettingsRepository.search(this.userModeSettingsCriteria).then(function(){var e=a()(u.a.mark((function e(n){var i,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.total){e.next=2;break}return e.abrupt("return");case 2:return i=n.first(),a=t.getAdvancedModeDefaultSetting().value.settings,i.value.settings=a.reduce((function(t,e){var n=i.value.settings.find((function(t){return t.key===e.key}));return t.push(n||e),t}),[]),Shopware.State.commit("swProductDetail/setAdvancedModeSetting",i),Shopware.State.commit("swProductDetail/setModeSettings",t.changeModeSettings()),e.next=9,t.$nextTick();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},saveAdvancedMode:function(){var t=this;Shopware.State.commit("swProductDetail/setLoading",["advancedMode",!0]),this.userModeSettingsRepository.save(this.advancedModeSetting).then((function(){t.getAdvancedModeSetting().then((function(){Shopware.State.commit("swProductDetail/setLoading",["advancedMode",!1])}))})).catch((function(){t.createNotificationError({message:t.$tc("global.notification.unspecifiedSaveErrorMessage")})}))},onChangeSetting:function(){Shopware.State.commit("swProductDetail/setAdvancedModeSetting",this.advancedModeSetting),this.saveAdvancedMode()},changeModeSettings:function(){var t=this.advancedModeSetting.value.settings.filter((function(t){return t.enabled}));return t.length?t.map((function(t){return t.key})):[]},onChangeSettingItem:function(){Shopware.State.commit("swProductDetail/setModeSettings",this.changeModeSettings()),this.saveAdvancedMode()},loadState:function(){return Shopware.State.commit("swProductDetail/setLocalMode",!1),Shopware.State.commit("swProductDetail/setProductId",this.productId),Shopware.State.commit("shopwareApps/setSelectedIds",[this.productId]),this.loadAll()},loadAll:function(){return Promise.all([this.loadProduct(),this.loadCurrencies(),this.loadTaxes(),this.loadAttributeSet()])},createState:function(){var t=this;return Shopware.State.commit("swProductDetail/setLocalMode",!0),Shopware.State.commit("shopwareApps/setSelectedIds",[]),Shopware.State.commit("swProductDetail/setLoading",["product",!0]),Shopware.State.commit("swProductDetail/setCreationStates",this.creationStates),Shopware.State.commit("swProductDetail/setProduct",this.productRepository.create()),Shopware.State.commit("swProductDetail/setProductId",this.product.id),this.product.active=!0,this.product.taxId=null,this.product.metaTitle="",this.product.additionalText="",this.product.variantListingConfig={},this.creationStates&&this.adjustProductAccordingToType(),Promise.all([this.loadCurrencies(),this.loadTaxes(),this.loadAttributeSet(),this.loadDefaultFeatureSet()]).then((function(){t.product.price=[{currencyId:t.defaultCurrency.id,net:null,linked:!0,gross:null}],t.product.purchasePrices=t.getDefaultPurchasePrices(),t.product.isNew&&(t.getDefaultTaxRate().then((function(e){t.product.taxId=e})),t.getDefaultSalesChannels().then((function(e){M.isEmpty(e)||(t.product.active=e.defaultActive,!e.defaultSalesChannelIds||e.defaultSalesChannelIds.length<=0||t.fetchSalesChannelByIds(e.defaultSalesChannelIds).then((function(n){n.length&&n.forEach((function(n){var i=t.createProductVisibilityEntity(e.defaultVisibilities,n);t.product.visibilities.push(i)}))})))}))),t.defaultFeatureSet&&t.defaultFeatureSet.length>0&&(t.product.featureSetId=t.defaultFeatureSet[0].id),Shopware.State.commit("swProductDetail/setLoading",["product",!1])}))},adjustProductAccordingToType:function(){this.creationStates.includes("is-download")&&(this.product.maxPurchase=1)},loadProduct:function(){var t=this;return Shopware.State.commit("swProductDetail/setLoading",["product",!0]),this.productRepository.get(this.productId||this.product.id,Shopware.Context.api,this.productCriteria).then((function(e){var n;!(null!==(n=e.purchasePrices)&&void 0!==n&&n.length)>0&&!e.parentId&&(e.purchasePrices=t.getDefaultPurchasePrices()),Shopware.State.commit("swProductDetail/setProduct",e),t.product.parentId?t.loadParentProduct():Shopware.State.commit("swProductDetail/setParentProduct",{}),Shopware.State.commit("swProductDetail/setLoading",["product",!1])}))},getDefaultPurchasePrices:function(){return[{currencyId:this.defaultCurrency.id,net:0,linked:!0,gross:0}]},loadParentProduct:function(){return Shopware.State.commit("swProductDetail/setLoading",["parentProduct",!0]),this.productRepository.get(this.product.parentId,Shopware.Context.api,this.productCriteria).then((function(t){Shopware.State.commit("swProductDetail/setParentProduct",t)})).then((function(){Shopware.State.commit("swProductDetail/setLoading",["parentProduct",!1])}))},loadCurrencies:function(){return Shopware.State.commit("swProductDetail/setLoading",["currencies",!0]),this.currencyRepository.search(new b(1,500)).then((function(t){Shopware.State.commit("swProductDetail/setCurrencies",t)})).then((function(){Shopware.State.commit("swProductDetail/setLoading",["currencies",!1])}))},loadTaxes:function(){return Shopware.State.commit("swProductDetail/setLoading",["taxes",!0]),this.taxRepository.search(this.taxCriteria).then((function(t){Shopware.State.commit("swProductDetail/setTaxes",t)})).then((function(){Shopware.State.commit("swProductDetail/setLoading",["taxes",!1])}))},getDefaultTaxRate:function(){return this.systemConfigApiService.getValues("core.tax").then((function(t){var e;return null!==(e=t["core.tax.defaultTaxRate"])&&void 0!==e?e:null}))},loadAttributeSet:function(){return Shopware.State.commit("swProductDetail/setLoading",["customFieldSets",!0]),this.customFieldSetRepository.search(this.customFieldSetCriteria).then((function(t){Shopware.State.commit("swProductDetail/setAttributeSet",t)})).finally((function(){Shopware.State.commit("swProductDetail/setLoading",["customFieldSets",!1])}))},loadDefaultFeatureSet:function(){return Shopware.State.commit("swProductDetail/setLoading",["defaultFeatureSet",!0]),this.featureSetRepository.search(this.defaultFeatureSetCriteria).then((function(t){Shopware.State.commit("swProductDetail/setDefaultFeatureSet",t)})).then((function(){Shopware.State.commit("swProductDetail/setLoading",["defaultFeatureSet",!1])}))},getDefaultSalesChannels:function(){return this.systemConfigApiService.getValues("core.defaultSalesChannel").then((function(t){return M.isEmpty(t)?{}:{defaultSalesChannelIds:null==t?void 0:t["core.defaultSalesChannel.salesChannel"],defaultVisibilities:null==t?void 0:t["core.defaultSalesChannel.visibility"],defaultActive:!(null==t||!t["core.defaultSalesChannel.active"])}}))},fetchSalesChannelByIds:function(t){var e=new b(1,25);return e.addFilter(b.equalsAny("id",t)),this.salesChannelRepository.search(e)},createProductVisibilityEntity:function(t,e){var n=this.productVisibilityRepository.create(S.api);return Object.assign(n,{visibility:t[e.id]||this.defaultSalesChannelVisibility,productId:this.product.id,salesChannelId:e.id,salesChannel:e}),n},abortOnLanguageChange:function(){return this.productRepository.hasChanges(this.product)},saveOnLanguageChange:function(){return this.onSave()},onChangeLanguage:function(t){Shopware.State.commit("context/setApiLanguageId",t),this.initState()},saveFinish:function(){this.isSaveSuccessful=!1,this.productId||this.$router.push({name:"sw.product.detail",params:{id:this.product.id}})},onSave:function(){var t=this;if(!this.validateProductPurchase())return this.createNotificationError({message:this.$tc("sw-product.detail.errorMinMaxPurchase")}),new Promise((function(t){t()}));this.validateProductPrices(),this.productId||this.productNumberPreview===this.product.productNumber&&this.numberRangeService.reserve("product").then((function(e){t.productNumberPreview="reserved",t.product.productNumber=e.number})),this.isSaveSuccessful=!1;var e=this.getCmsPageOverrides();if(M.isPlainObject(e)&&(this.product.slotConfig=P(e)),!this.entityValidationService.validate(this.product,this.customValidate)){var n=this.$tc("global.default.error"),i=this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");return this.createNotificationError({title:n,message:i}),Promise.resolve()}return this.saveProduct().then(this.onSaveFinished)},customValidate:function(t,e){return this.productStates.includes("is-download")&&(void 0===e.downloads||e.downloads.length<1)&&t.push(l.a.createRequiredError("/0/downloads")),t},validateProductPrices:function(){var t=this;this.product.prices.forEach((function(e){t.validatePrices("listPrice",e.price)})),this.validatePrices("listPrice",this.product.price),this.product.prices.forEach((function(e){t.validatePrices("regulationPrice",e.price)})),this.validatePrices("regulationPrice",this.product.price)},validatePrices:function(t,e){e&&e.forEach((function(e){e[t]&&(e[t].gross||e[t].net?e[t].gross?e[t].net||(e[t].net=0):e[t].gross=0:e[t]=null)}))},onSaveFinished:function(t){var e=this,n=[];if(Shopware.State.list().includes("swSeoUrl")){var i=Shopware.State.getters["swSeoUrl/getNewOrModifiedUrls"](),a=Shopware.State.get("swSeoUrl").defaultSeoUrl;i&&i.forEach((function(t){t.seoPathInfo?t.isModified=!0:(t.seoPathInfo=a.seoPathInfo,t.isModified=!1),n.push(e.seoUrlService.updateCanonicalUrl(t,t.languageId))})),"empty"===t&&i.length>0&&(t="success")}Promise.all(n).then((function(){e.$root.$emit("seo-url-save-finish")})).then((function(){switch(t){case"empty":e.isSaveSuccessful=!0,Shopware.State.commit("error/resetApiErrors");break;case"success":e.isSaveSuccessful=!0;break;default:var n,i,a,o,r,s,c,d,u,l;if("CONTENT__DUPLICATE_PRODUCT_NUMBER"===(null===(n=t)||void 0===n||null===(i=n.response)||void 0===i||null===(a=i.data)||void 0===a||null===(o=a.errors)||void 0===o||null===(r=o[0])||void 0===r?void 0:r.code)){var p=e.$tc("global.default.error"),h=e.$t("sw-product.notification.notificationSaveErrorProductNoAlreadyExists",{productNo:t.response.data.errors[0].meta.parameters.number});e.createNotificationError({title:p,message:h});break}var f=null===(s=t)||void 0===s||null===(c=s.response)||void 0===c||null===(d=c.data)||void 0===d||null===(u=d.errors)||void 0===u||null===(l=u[0])||void 0===l?void 0:l.detail,m=e.$tc("global.default.error"),g=null!=f?f:e.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");e.createNotificationError({title:m,message:g})}}))},onCancel:function(){this.$router.push({name:"sw.product.index"})},saveProduct:function(){var t=this;return Shopware.State.commit("swProductDetail/setLoading",["product",!0]),this.product.media&&this.product.media.forEach((function(t,e){t.position=e})),new Promise((function(e){if(!t.productRepository.hasChanges(t.product))return Shopware.State.commit("swProductDetail/setLoading",["product",!1]),e("empty"),void Shopware.State.commit("swProductDetail/setLoading",["product",!1]);t.syncRepository.save(t.product).then((function(){t.loadAll().then((function(){Shopware.State.commit("swProductDetail/setLoading",["product",!1]),e("success")}))})).catch((function(t){Shopware.State.commit("swProductDetail/setLoading",["product",!1]),e(t)}))}))},removeMediaItem:function(t,e){var n=this.product.media.find((function(t){return t.mediaId===e}));this.product.coverId===n.id&&(this.product.coverId=null),this.product.media.remove(e)},onCoverChange:function(t){if(t&&!(t.length<0)){var e=this.product.media.find((function(e){return e.mediaId===t}));e&&(this.product.coverId=e.id)}},getInheritTitle:function(){if(this.product.hasOwnProperty("translated")&&this.product.translated.hasOwnProperty("name")&&null!==this.product.translated.name)return this.product.translated.name;if(null!==this.product.name)return this.product.name;if(this.parentProduct&&this.parentProduct.hasOwnProperty("translated")){var t=this.parentProduct;return t.translated.hasOwnProperty("name")?t.translated.name:t.name}return""},onDuplicate:function(){this.cloning=!0},onDuplicateFinish:function(t){this.cloning=!1,this.$router.push({name:"sw.product.detail",params:{id:t.id}})},validateProductPurchase:function(){return!(this.product.maxPurchase&&this.product.minPurchase>this.product.maxPurchase)},getCmsPageOverrides:function(){if(null===this.currentPage)return null;this.deleteSpecifcKeys(this.currentPage.sections);var t=(new _).generate(this.currentPage).changes,e={};return null===t||M.isArray(t.sections)&&t.sections.forEach((function(t){M.isArray(t.blocks)&&t.blocks.forEach((function(t){M.isArray(t.slots)&&t.slots.forEach((function(t){e[t.id]=t.config}))}))})),e},deleteSpecifcKeys:function(t){t&&t.forEach((function(t){t.blocks&&t.blocks.forEach((function(t){t.slots&&t.slots.forEach((function(t){t.config&&Object.values(t.config).forEach((function(t){t.entity&&delete t.entity,t.hasOwnProperty("required")&&delete t.required,t.type&&delete t.type}))}))}))}))}}}},LUrJ:function(t,e,n){"use strict";e.a={namespaced:!0,state:function(){return{product:{},parentProduct:{},currencies:[],apiContext:{},taxes:[],variants:[],customFieldSets:[],defaultFeatureSet:{},loading:{init:!1,product:!1,parentProduct:!1,manufacturers:!1,currencies:!1,taxes:!1,customFieldSets:!1,media:!1,rules:!1,variants:!1,defaultFeatureSet:!1,advancedMode:!1},localMode:!1,advancedModeSetting:{},modeSettings:["general_information","prices","deliverability","visibility_structure","media","labelling","measures_packaging","properties","essential_characteristics","custom_fields"],creationStates:[]}},getters:{isLoading:function(t){return Object.values(t.loading).some((function(t){return t}))},defaultCurrency:function(t){if(!t.currencies)return{};var e=t.currencies.find((function(t){return t.isSystemDefault}));return e||{}},defaultPrice:function(t,e){var n=t.product.price;if(!n){if(!t.parentProduct.price)return{};n=t.parentProduct.price}return n.find((function(t){return t.currencyId===e.defaultCurrency.id}))},defaultFeatureSet:function(t){return t.defaultFeatureSet?t.defaultFeatureSet:{}},productTaxRate:function(t){return t.taxes?t.taxes.find((function(e){return t.product.taxId?e.id===t.product.taxId:t.parentProduct.taxId?e.id===t.parentProduct.taxId:{}})):{}},isChild:function(t){var e;return!(null===(e=t.product)||void 0===e||!e.parentId)&&!!t.product.parentId},showModeSetting:function(t){var e,n;return!(null===(e=t.product)||void 0===e||!e.parentId)||(null===(n=t.advancedModeSetting.value)||void 0===n?void 0:n.advancedMode.enabled)},showProductCard:function(t,e){return function(n){var i;if(null!==(i=t.product)&&void 0!==i&&i.parentId)return!0;return!(["essential_characteristics","custom_fields","labelling"].includes(n)&&!e.showModeSetting)&&t.modeSettings.includes(n)}},advanceModeEnabled:function(t){var e;return null===(e=t.advancedModeSetting.value)||void 0===e?void 0:e.advancedMode.enabled},productStates:function(t){return t.product.isNew()&&t.creationStates?t.creationStates:t.product.states?t.product.states:[]}},mutations:{setApiContext:function(t,e){t.apiContext=e},setCustomFields:function(t,e){t.customFieldSets=t.customFieldSets.map((function(t){return t.id===e.id?e:t}))},setLocalMode:function(t,e){t.localMode=e},setLoading:function(t,e){var n=e[0],i=e[1];return"boolean"==typeof i&&(void 0!==t.loading[n]&&(t.loading[n]=i,!0))},setAssignedProductsFromCrossSelling:function(t,e){var n=e.id,i=e.collection;t.product.crossSellings.get(n).assignedProducts=i},setProductId:function(t,e){t.productId=e},setProduct:function(t,e){t.product=e},setVariants:function(t,e){t.variants=e},setParentProduct:function(t,e){t.parentProduct=e},setCurrencies:function(t,e){t.currencies=e},setTaxes:function(t,e){t.taxes=e,!t.product||null!==t.product.taxId||t.parentProduct||t.parentProduct.id||(t.product.taxId=t.taxes[0].id)},setAttributeSet:function(t,e){t.customFieldSets=e},setDefaultFeatureSet:function(t,e){t.defaultFeatureSet=e},setAdvancedModeSetting:function(t,e){t.advancedModeSetting=e},setModeSettings:function(t,e){t.modeSettings=e},setCreationStates:function(t,e){t.creationStates=e}}}},RZLM:function(t,e,n){var i=n("hPt0");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("P8hj").default)("7aa0e4c6",i,!0,{})},hPt0:function(t,e,n){}}]);