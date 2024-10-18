(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[48530],{828362:function(){},48530:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var i=a(655593),s=a(684603),r=JSON.parse('{"sw.product.detail.base":{"product":["taxId","price","stock","manufacturerId","name","downloads"]},"sw.product.detail.cross.selling":{"product_cross_selling":["name","type","position"]}}');a(482193);let{Context:o,Mixin:n}=Shopware,{Criteria:d,ChangesetGenerator:c}=Shopware.Data,{cloneDeep:l}=Shopware.Utils.object,{mapPageErrors:u,mapState:p,mapGetters:h}=Shopware.Component.getComponentHelper(),m=Shopware.Utils.types;var g={template:'\n{% block sw_product_detail %}\n<sw-page class="sw-product-detail">\n\n    \n    {% block sw_product_detail_header %}\n    <template #smart-bar-header>\n        <h2>\n            <sw-product-variant-info\n                :variations="product.variation"\n                :title-term="productTitle"\n            >\n                {{ productTitle }}\n            </sw-product-variant-info>\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_product_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-product.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        <sw-button-group\n            v-tooltip.bottom="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'product.editor\'),\n                showOnDisabledElements: true\n            }"\n            class="sw-product-detail__save-button-group"\n            :split-button="true"\n        >\n            \n            {% block sw_product_detail_actions_save %}\n            <sw-button-process\n                v-tooltip.bottom="tooltipSave"\n                class="sw-product-detail__save-action"\n                :is-loading="isLoading"\n                :process-success="isSaveSuccessful"\n                variant="primary"\n                :disabled="isLoading || !acl.can(\'product.editor\')"\n                @update:process-success="saveFinish"\n                @click.prevent="onSave"\n            >\n                {{ $tc(\'sw-product.detail.buttonSave\') }}\n            </sw-button-process>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_actions_save_context_menu %}\n            <sw-context-button>\n                <template #button>\n                    <sw-button\n                        class="sw-product-detail__button-context-menu"\n                        square\n                        variant="primary"\n                        :disabled="isLoading || !acl.can(\'product.editor\')"\n                    >\n                        <sw-icon\n                            name="regular-chevron-down-xs"\n                            size="16"\n                        />\n                    </sw-button>\n                </template>\n\n                \n                {% block sw_product_detail_actions_save_context_menu_actions %}\n                \n                {% block sw_product_detail_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-product-detail__save-duplicate-action"\n                    :disabled="!acl.can(\'product.creator\') || !acl.can(\'product.editor\') || product.parentId != null"\n                    @click="onDuplicate"\n                >\n                    {{ $tc(\'sw-product.detail.buttonSaveDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n        </sw-button-group>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            :disabled="!productId"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            \n            {% block sw_product_detail_content_top %}\n            <template v-if="!isLoading && isChild">\n                <router-link\n                    v-if="advanceModeEnabled"\n                    class="sw-card__back-link"\n                    :to="{ name: \'sw.product.detail.variants\', params: { id: product.parentId } }"\n                >\n                    <sw-icon\n                        name="regular-long-arrow-left"\n                        small\n                    />\n                    {{ $tc(\'sw-product.general.backToParent\') }}\n                </router-link>\n\n                <router-link\n                    v-else\n                    class="sw-card__back-link"\n                    :to="{ name: \'sw.product.detail.base\', params: { id: product.parentId } }"\n                >\n                    <sw-icon\n                        name="regular-long-arrow-left"\n                        small\n                    />\n                    {{ $tc(\'sw-product.general.backToGeneralOverview\') }}\n                </router-link>\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_language_info %}\n            <sw-language-info\n                :entity-description="placeholder(product, \'name\', $tc(\'sw-product.detail.textHeadline\'))"\n                :is-new-entity="!productId"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_detail_inheritance_warning %}\n            <sw-inheritance-warning\n                v-if="isChild"\n                :name="$tc(\'sw-product.general.inheritanceModuleName\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_tabs %}\n            <sw-tabs\n                v-if="productId"\n                class="sw-product-detail-page__tabs"\n                position-identifier="sw-product-detail"\n            >\n                \n                {% block sw_product_detail_content_tabs_general %}\n                <sw-tabs-item\n                    class="sw-product-detail__tab-general"\n                    :route="{ name: \'sw.product.detail.base\', params: { id: $route.params.id } }"\n                    :has-error="swProductDetailBaseError"\n                    :title="$tc(\'sw-product.detail.tabGeneral\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabGeneral\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_specifications %}\n                <sw-tabs-item\n                    class="sw-product-detail__tab-specifications"\n                    :route="{ name: \'sw.product.detail.specifications\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabSpecifications\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabSpecifications\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_advanced_prices %}\n                <sw-tabs-item\n                    v-show="showModeSetting"\n                    class="sw-product-detail__tab-advanced-prices"\n                    :route="{ name: \'sw.product.detail.prices\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabAdvancedPrices\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabAdvancedPrices\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_advanced_variants %}\n                <sw-tabs-item\n                    v-show="!isChild && showModeSetting"\n                    class="sw-product-detail__tab-variants"\n                    :route="{ name: \'sw.product.detail.variants\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabVariation\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabVariation\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_layout %}\n                <sw-tabs-item\n                    v-show="!isChild && showModeSetting"\n                    class="sw-product-detail__tab-layout"\n                    :route="{ name: \'sw.product.detail.layout\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabLayout\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabLayout\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_seo %}\n                <sw-tabs-item\n                    v-show="showModeSetting"\n                    class="sw-product-detail__tab-seo"\n                    :route="{ name: \'sw.product.detail.seo\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabSeo\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabSeo\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_cross_selling %}\n                <sw-tabs-item\n                    v-show="!isChild && showModeSetting"\n                    class="sw-product-detail__tab-cross-selling"\n                    :route="{ name: \'sw.product.detail.crossSelling\', params: { id: $route.params.id } }"\n                    :has-error="swProductDetailCrossSellingError"\n                    :title="$tc(\'sw-product.detail.tabCrossSelling\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabCrossSelling\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_reviews %}\n                <sw-tabs-item\n                    v-show="showModeSetting"\n                    class="sw-product-detail__tab-reviews"\n                    :route="{ name: \'sw.product.detail.reviews\', params: { id: $route.params.id } }"\n                    :title="$tc(\'sw-product.detail.tabReviews\')"\n                >\n                    {{ $tc(\'sw-product.detail.tabReviews\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_product_detail_content_tabs_additional %}\n                {% endblock %}\n\n            </sw-tabs>\n            {% endblock %}\n\n            <sw-extension-component-section\n                position-identifier="sw-product-detail__before-content"\n            />\n\n            \n            {% block sw_product_detail_content_view %}\n            <router-view\n                v-slot="{ Component }"\n            >\n                <component\n                    :is="Component"\n                    @cover-change="onCoverChange"\n                />\n            </router-view>\n            {% endblock %}\n\n            \n            {% block sw_product_detail_content_clone_modal %}\n            <sw-product-clone-modal\n                v-if="cloning"\n                :product="product"\n                @clone-finish="onDuplicateFinish"\n            />\n            {% endblock %}\n\n            \n            {% block sw_product_settings_mode %}\n            <sw-product-settings-mode\n                v-if="showAdvanceModeSetting"\n                :is-loading="isLoading"\n                :mode-settings="advancedModeSetting"\n                @settings-item-change="onChangeSettingItem"\n                @settings-change="onChangeSetting"\n            />\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n\n    <template #sidebar>\n        \n        {% block sw_product_detail_sidebar %}\n        {% endblock %}\n    </template>\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["mediaService","repositoryFactory","numberRangeService","seoUrlService","acl","systemConfigApiService","entityValidationService"],provide(){return{swProductDetailLoadAll:this.loadAll}},mixins:[n.getByName("notification"),n.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":{active(){return this.acl.can("product.editor")},method:"onSave"},ESCAPE:"onCancel"},props:{productId:{type:String,required:!1,default:null},creationStates:{type:Array,required:!1,default:null}},data(){return{productNumberPreview:"",isSaveSuccessful:!1,cloning:!1,defaultSalesChannelVisibility:30}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{...p("swProductDetail",["product","parentProduct","localMode","advancedModeSetting","modeSettings"]),...h("swProductDetail",["productRepository","isLoading","isChild","defaultCurrency","defaultFeatureSet","showModeSetting","advanceModeEnabled","productStates"]),...u(r),identifier(){return this.productTitle},productTitle(){return this.isChild&&this.product?this.getInheritTitle():this.$i18n?this.placeholder(this.product,"name",this.$tc("sw-product.detail.textHeadline")):""},productRepository(){return this.repositoryFactory.create("product")},syncRepository(){return this.repositoryFactory.create("product",null,{useSync:!0})},currencyRepository(){return this.repositoryFactory.create("currency")},taxRepository(){return this.repositoryFactory.create("tax")},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},productVisibilityRepository(){return this.repositoryFactory.create("product_visibility")},mediaRepository(){return this.product&&this.product.media?this.repositoryFactory.create(this.product.media.entity,this.product.media.source):null},featureSetRepository(){return this.repositoryFactory.create("product_feature_set")},currentUser(){return Shopware.State.get("session").currentUser},userModeSettingsRepository(){return this.repositoryFactory.create("user_config")},userModeSettingsCriteria(){let t=new d(1,25);return t.addFilter(d.equals("key","mode.setting.advancedModeSettings")),t.addFilter(d.equals("userId",this.currentUser&&this.currentUser.id)),t},productCriteria(){let t=new d(1,25);return t.getAssociation("media").addSorting(d.sort("position","ASC")),t.getAssociation("properties").addSorting(d.sort("name","ASC",!0)),t.getAssociation("prices").addSorting(d.sort("quantityStart","ASC",!0)),t.getAssociation("tags").addSorting(d.sort("name","ASC")),t.getAssociation("seoUrls").addFilter(d.equals("isCanonical",!0)),t.getAssociation("crossSellings").addSorting(d.sort("position","ASC")).getAssociation("assignedProducts").addSorting(d.sort("position","ASC")).addAssociation("product").getAssociation("product").addAssociation("options.group"),t.addAssociation("cover").addAssociation("categories").addAssociation("visibilities.salesChannel").addAssociation("options").addAssociation("configuratorSettings.option").addAssociation("unit").addAssociation("productReviews").addAssociation("seoUrls").addAssociation("mainCategories").addAssociation("options.group").addAssociation("customFieldSets").addAssociation("featureSet").addAssociation("cmsPage").addAssociation("featureSet").addAssociation("downloads.media"),t.getAssociation("manufacturer").addAssociation("media"),t},customFieldSetCriteria(){let t=new d(1,null);return t.addFilter(d.equals("relations.entityName","product")),t.addSorting(d.sort("config.customFieldPosition","ASC",!0)),t},defaultFeatureSetCriteria(){let t=new d(1,1);return t.addSorting(d.sort("createdAt","ASC")).addFilter(d.equalsAny("name",["Default","Standard"])),t},taxCriteria(){let t=new d(1,500);return t.addSorting(d.sort("position")),t},tooltipSave(){let t=this.$device.getSystemKey();return{message:`${t} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},getModeSettingGeneralTab(){return[{key:"general_information",label:"sw-product.detailBase.cardTitleProductInfo",enabled:!0,name:"general"},{key:"prices",label:"sw-product.detailBase.cardTitlePrices",enabled:!0,name:"general"},{key:"deliverability",label:"sw-product.detailBase.cardTitleDeliverabilityInfo",enabled:!0,name:"general"},{key:"visibility_structure",label:"sw-product.detailBase.cardTitleAssignment",enabled:!0,name:"general"},{key:"media",label:"sw-product.detailBase.cardTitleMedia",enabled:!0,name:"general"},{key:"labelling",label:"sw-product.detailBase.cardTitleSettings",enabled:!0,name:"general"}]},getModeSettingSpecificationsTab(){return[{key:"measures_packaging",label:"sw-product.specifications.cardTitleMeasuresPackaging",enabled:!0,name:"specifications"},{key:"properties",label:"sw-product.specifications.cardTitleProperties",enabled:!0,name:"specifications"},{key:"essential_characteristics",label:"sw-product.specifications.cardTitleEssentialCharacteristics",enabled:!0,name:"specifications"},{key:"custom_fields",label:"sw-product.specifications.cardTitleCustomFields",enabled:!0,name:"specifications"}]},showAdvanceModeSetting(){return!this.isChild&&["sw.product.detail.base","sw.product.detail.specifications"].includes(this.$route.name)},cmsPageState(){return Shopware.Store.get("cmsPage")},currentPage(){return Shopware.Store.get("cmsPage").currentPage}},watch:{productId(){this.destroyedComponent(),this.createdComponent()}},beforeCreate(){Shopware.State.registerModule("swProductDetail",s.Z)},created(){this.createdComponent()},beforeUnmount(){Shopware.State.unregisterModule("swProductDetail")},unmounted(){this.destroyedComponent()},methods:{createdComponent(){Shopware.ExtensionAPI.publishData({id:"sw-product-detail__product",path:"product",scope:this}),Shopware.ExtensionAPI.publishData({id:"sw-product-detail__cmsPage",path:"currentPage",scope:this}),this.cmsPageState.resetCmsPageState(),this.productId||Shopware.State.getters["context/isSystemDefaultLanguage"]||Shopware.State.commit("context/resetLanguageToDefault"),this.initState(),this.isCompatEnabled("INSTANCE_EVENT_EMITTER")&&this.$root.$on("media-remove",t=>{this.removeMediaItem(t)}),this.initAdvancedModeSettings()},destroyedComponent(){this.isCompatEnabled("INSTANCE_EVENT_EMITTER")&&this.$root.$off("media-remove")},initState(){return(Shopware.State.commit("swProductDetail/setApiContext",Shopware.Context.api),this.productId)?this.loadState():this.createState().then(()=>{this.numberRangeService.reserve("product","",!0).then(t=>{this.productNumberPreview=t.number,this.product.productNumber=t.number})})},initAdvancedModeSettings(){Shopware.State.commit("swProductDetail/setAdvancedModeSetting",this.getAdvancedModeDefaultSetting()),this.getAdvancedModeSetting()},createUserModeSetting(){let t=this.userModeSettingsRepository.create();return t.key="mode.setting.advancedModeSettings",t.userId=this.currentUser&&this.currentUser.id,t},getAdvancedModeDefaultSetting(){let t=this.createUserModeSetting();return t.value={advancedMode:{label:"sw-product.general.textAdvancedMode",enabled:!0},settings:[...this.getModeSettingGeneralTab,...this.getModeSettingSpecificationsTab]},t},getAdvancedModeSetting(){return this.userModeSettingsRepository.search(this.userModeSettingsCriteria).then(async t=>{if(!t.total)return;let e=t.first(),a=this.getAdvancedModeDefaultSetting().value.settings;e.value.settings=a.reduce((t,a)=>{let i=e.value.settings.find(t=>t.key===a.key);return t.push(i||a),t},[]),Shopware.State.commit("swProductDetail/setAdvancedModeSetting",e),Shopware.State.commit("swProductDetail/setModeSettings",this.changeModeSettings()),await this.$nextTick()})},saveAdvancedMode(){Shopware.State.commit("swProductDetail/setLoading",["advancedMode",!0]),this.userModeSettingsRepository.save(this.advancedModeSetting).then(()=>{this.getAdvancedModeSetting().then(()=>{Shopware.State.commit("swProductDetail/setLoading",["advancedMode",!1])})}).catch(()=>{this.createNotificationError({message:this.$tc("global.notification.unspecifiedSaveErrorMessage")})})},onChangeSetting(){Shopware.State.commit("swProductDetail/setAdvancedModeSetting",this.advancedModeSetting),this.saveAdvancedMode()},changeModeSettings(){let t=this.advancedModeSetting.value.settings.filter(t=>t.enabled);return t.length?t.map(t=>t.key):[]},onChangeSettingItem(){Shopware.State.commit("swProductDetail/setModeSettings",this.changeModeSettings()),this.saveAdvancedMode()},loadState(){return Shopware.State.commit("swProductDetail/setLocalMode",!1),Shopware.State.commit("swProductDetail/setProductId",this.productId),Shopware.State.commit("shopwareApps/setSelectedIds",[this.productId]),this.loadAll()},loadAll(){return Promise.all([this.loadProduct(),this.loadCurrencies(),this.loadTaxes(),this.loadAttributeSet()])},createState(){return Shopware.State.commit("swProductDetail/setLocalMode",!0),Shopware.State.commit("shopwareApps/setSelectedIds",[]),Shopware.State.commit("swProductDetail/setLoading",["product",!0]),Shopware.State.commit("swProductDetail/setCreationStates",this.creationStates),Shopware.State.commit("swProductDetail/setProduct",this.productRepository.create()),Shopware.State.commit("swProductDetail/setProductId",this.product.id),this.product.active=!0,this.product.taxId=null,this.product.metaTitle="",this.product.additionalText="",this.product.variantListingConfig={},this.creationStates&&this.adjustProductAccordingToType(),Promise.all([this.loadCurrencies(),this.loadTaxes(),this.loadAttributeSet(),this.loadDefaultFeatureSet()]).then(()=>{this.product.price=[{currencyId:this.defaultCurrency.id,net:null,linked:!0,gross:null}],this.product.purchasePrices=this.getDefaultPurchasePrices(),this.product.isNew&&(this.getDefaultTaxRate().then(t=>{this.product.taxId=t}),this.getDefaultSalesChannels().then(t=>{!m.isEmpty(t)&&(this.product.active=t.defaultActive,t.defaultSalesChannelIds&&!(t.defaultSalesChannelIds.length<=0)&&this.fetchSalesChannelByIds(t.defaultSalesChannelIds).then(e=>{e.length&&e.forEach(e=>{let a=this.createProductVisibilityEntity(t.defaultVisibilities,e);this.product.visibilities.push(a)})}))})),this.defaultFeatureSet&&this.defaultFeatureSet.length>0&&(this.product.featureSetId=this.defaultFeatureSet[0].id),Shopware.State.commit("swProductDetail/setLoading",["product",!1])})},adjustProductAccordingToType(){this.creationStates.includes("is-download")&&(this.product.maxPurchase=1)},loadProduct(){return Shopware.State.commit("swProductDetail/setLoading",["product",!0]),this.productRepository.get(this.productId||this.product.id,Shopware.Context.api,this.productCriteria).then(async t=>{!t.purchasePrices?.length>0&&!t.parentId&&(this.defaultCurrency?.id||await this.loadCurrencies(),t.purchasePrices=this.getDefaultPurchasePrices()),Shopware.State.commit("swProductDetail/setProduct",t),this.product.parentId?this.loadParentProduct():Shopware.State.commit("swProductDetail/setParentProduct",{}),Shopware.State.commit("swProductDetail/setLoading",["product",!1])})},getDefaultPurchasePrices(){return[{currencyId:this.defaultCurrency.id,net:0,linked:!0,gross:0}]},loadParentProduct(){return Shopware.State.commit("swProductDetail/setLoading",["parentProduct",!0]),this.productRepository.get(this.product.parentId,Shopware.Context.api,this.productCriteria).then(t=>{Shopware.State.commit("swProductDetail/setParentProduct",t)}).then(()=>{Shopware.State.commit("swProductDetail/setLoading",["parentProduct",!1])})},loadCurrencies(){return Shopware.State.commit("swProductDetail/setLoading",["currencies",!0]),this.currencyRepository.search(new d(1,500)).then(t=>{Shopware.State.commit("swProductDetail/setCurrencies",t)}).then(()=>{Shopware.State.commit("swProductDetail/setLoading",["currencies",!1])})},loadTaxes(){return Shopware.State.commit("swProductDetail/setLoading",["taxes",!0]),this.taxRepository.search(this.taxCriteria).then(t=>{Shopware.State.commit("swProductDetail/setTaxes",t)}).then(()=>{Shopware.State.commit("swProductDetail/setLoading",["taxes",!1])})},getDefaultTaxRate(){return this.systemConfigApiService.getValues("core.tax").then(t=>t["core.tax.defaultTaxRate"]??null)},loadAttributeSet(){return Shopware.State.commit("swProductDetail/setLoading",["customFieldSets",!0]),this.customFieldSetRepository.search(this.customFieldSetCriteria).then(t=>{Shopware.State.commit("swProductDetail/setAttributeSet",t)}).finally(()=>{Shopware.State.commit("swProductDetail/setLoading",["customFieldSets",!1])})},loadDefaultFeatureSet(){return Shopware.State.commit("swProductDetail/setLoading",["defaultFeatureSet",!0]),this.featureSetRepository.search(this.defaultFeatureSetCriteria).then(t=>{Shopware.State.commit("swProductDetail/setDefaultFeatureSet",t)}).then(()=>{Shopware.State.commit("swProductDetail/setLoading",["defaultFeatureSet",!1])})},getDefaultSalesChannels(){return this.systemConfigApiService.getValues("core.defaultSalesChannel").then(t=>m.isEmpty(t)?{}:{defaultSalesChannelIds:t?.["core.defaultSalesChannel.salesChannel"],defaultVisibilities:t?.["core.defaultSalesChannel.visibility"],defaultActive:!!t?.["core.defaultSalesChannel.active"]})},fetchSalesChannelByIds(t){let e=new d(1,25);return e.addFilter(d.equalsAny("id",t)),this.salesChannelRepository.search(e)},createProductVisibilityEntity(t,e){let a=this.productVisibilityRepository.create(o.api);return Object.assign(a,{visibility:t[e.id]||this.defaultSalesChannelVisibility,productId:this.product.id,salesChannelId:e.id,salesChannel:e}),a},abortOnLanguageChange(){return this.productRepository.hasChanges(this.product)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(t){Shopware.State.commit("context/setApiLanguageId",t),this.initState()},saveFinish(){this.isSaveSuccessful=!1,this.productId||this.$router.push({name:"sw.product.detail",params:{id:this.product.id}})},onSave(){if(!this.validateProductPurchase())return this.createNotificationError({message:this.$tc("sw-product.detail.errorMinMaxPurchase")}),new Promise(t=>{t()});this.validateProductPrices(),this.productId||this.productNumberPreview!==this.product.productNumber||this.numberRangeService.reserve("product").then(t=>{this.productNumberPreview="reserved",this.product.productNumber=t.number}),this.isSaveSuccessful=!1;let t=this.getCmsPageOverrides();if(m.isPlainObject(t)&&(this.product.slotConfig=l(t)),!this.entityValidationService.validate(this.product,this.customValidate)){let t=this.$tc("global.default.error"),e=this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");return this.createNotificationError({title:t,message:e}),Promise.resolve()}return this.saveProduct().then(this.onSaveFinished)},customValidate(t,e){return this.productStates.includes("is-download")&&(void 0===e.downloads||e.downloads.length<1)&&t.push(i.Z.createRequiredError("/0/downloads")),t},validateProductPrices(){this.product.prices.forEach(t=>{this.validatePrices("listPrice",t.price)}),this.validatePrices("listPrice",this.product.price),this.product.prices.forEach(t=>{this.validatePrices("regulationPrice",t.price)}),this.validatePrices("regulationPrice",this.product.price)},validatePrices(t,e){e&&e.forEach(e=>{if(e[t]){if(!e[t].gross&&!e[t].net){e[t]=null;return}if(!e[t].gross){e[t].gross=0;return}e[t].net||(e[t].net=0)}})},onSaveFinished(t){let e=[];if(Shopware.State.list().includes("swSeoUrl")){let a=Shopware.State.getters["swSeoUrl/getNewOrModifiedUrls"](),i=Shopware.State.get("swSeoUrl").defaultSeoUrl;a&&a.forEach(t=>{t.seoPathInfo?t.isModified=!0:(t.seoPathInfo=i.seoPathInfo,t.isModified=!1),e.push(this.seoUrlService.updateCanonicalUrl(t,t.languageId))}),"empty"===t&&a.length>0&&(t="success")}Promise.all(e).then(()=>{this.isCompatEnabled("INSTANCE_EVENT_EMITTER")?this.$root.$emit("seo-url-save-finish"):Shopware.Utils.EventBus.emit("sw-product-detail-save-finish")}).then(()=>{switch(t){case"empty":this.isSaveSuccessful=!0,Shopware.State.commit("error/resetApiErrors");break;case"success":this.isSaveSuccessful=!0;break;default:{if("CONTENT__DUPLICATE_PRODUCT_NUMBER"===t?.response?.data?.errors?.[0]?.code){let e=this.$tc("global.default.error"),a=this.$t("sw-product.notification.notificationSaveErrorProductNoAlreadyExists",{productNo:t.response.data.errors[0].meta.parameters.number});this.createNotificationError({title:e,message:a});break}let e=t?.response?.data?.errors?.[0]?.detail,a=this.$tc("global.default.error"),i=e??this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid");this.createNotificationError({title:a,message:i})}}})},onCancel(){this.$router.push({name:"sw.product.index"})},saveProduct(){return Shopware.State.commit("swProductDetail/setLoading",["product",!0]),this.product.media&&this.product.media.forEach((t,e)=>{t.position=e}),new Promise(t=>{if(!this.productRepository.hasChanges(this.product)){Shopware.State.commit("swProductDetail/setLoading",["product",!1]),t("empty"),Shopware.State.commit("swProductDetail/setLoading",["product",!1]);return}this.syncRepository.save(this.product).then(()=>{this.loadAll().then(()=>{Shopware.State.commit("swProductDetail/setLoading",["product",!1]),t("success")})}).catch(e=>{Shopware.State.commit("swProductDetail/setLoading",["product",!1]),t(e)})})},removeMediaItem(t,e){let a=this.product.media.find(t=>t.mediaId===e);this.product.coverId===a.id&&(this.product.coverId=null),this.product.media.remove(e)},onCoverChange(t){if(!t||t.length<0)return;let e=this.product.media.find(e=>e.mediaId===t);e&&(this.product.coverId=e.id)},getInheritTitle(){if(this.product.hasOwnProperty("translated")&&this.product.translated.hasOwnProperty("name")&&null!==this.product.translated.name)return this.product.translated.name;if(null!==this.product.name)return this.product.name;if(this.parentProduct&&this.parentProduct.hasOwnProperty("translated")){let t=this.parentProduct;return t.translated.hasOwnProperty("name")?t.translated.name:t.name}return""},onDuplicate(){this.cloning=!0},onDuplicateFinish(t){this.cloning=!1,this.$router.push({name:"sw.product.detail",params:{id:t.id}})},validateProductPurchase(){return!this.product.maxPurchase||!(this.product.minPurchase>this.product.maxPurchase)},getCmsPageOverrides(){if(null===this.currentPage)return null;this.deleteSpecifcKeys(this.currentPage.sections);let{changes:t}=new c().generate(this.currentPage),e={};return null===t||m.isArray(t.sections)&&t.sections.forEach(t=>{m.isArray(t.blocks)&&t.blocks.forEach(t=>{m.isArray(t.slots)&&t.slots.forEach(t=>{e[t.id]=t.config})})}),e},deleteSpecifcKeys(t){t&&t.forEach(t=>{t.blocks&&t.blocks.forEach(t=>{t.slots&&t.slots.forEach(t=>{t.config&&Object.values(t.config).forEach(t=>{t.entity&&delete t.entity,t.hasOwnProperty("required")&&delete t.required,t.type&&delete t.type})})})})}}}},684603:function(t,e){"use strict";e.Z={namespaced:!0,state(){return{product:{},parentProduct:{},currencies:[],apiContext:{},taxes:[],variants:[],customFieldSets:[],defaultFeatureSet:{},loading:{init:!1,product:!1,parentProduct:!1,manufacturers:!1,currencies:!1,taxes:!1,customFieldSets:!1,media:!1,rules:!1,variants:!1,defaultFeatureSet:!1,advancedMode:!1},localMode:!1,advancedModeSetting:{},modeSettings:["general_information","prices","deliverability","visibility_structure","media","labelling","measures_packaging","properties","essential_characteristics","custom_fields"],creationStates:[]}},getters:{isLoading:t=>Object.values(t.loading).some(t=>t),defaultCurrency(t){return t.currencies&&t.currencies.length&&t.currencies.find(t=>t.isSystemDefault)||{}},defaultPrice(t,e){let a=t.product.price;if(!a){if(!t.parentProduct.price)return{};a=t.parentProduct.price}return a.find(t=>t.currencyId===e.defaultCurrency.id)},defaultFeatureSet(t){return t.defaultFeatureSet?t.defaultFeatureSet:{}},productTaxRate(t){return t.taxes?t.taxes.find(e=>t.product.taxId?e.id===t.product.taxId:t.parentProduct.taxId?e.id===t.parentProduct.taxId:{}):{}},isChild(t){return!!t.product?.parentId&&!!t.product.parentId},showModeSetting(t){return!!t.product?.parentId||t.advancedModeSetting.value?.advancedMode.enabled},showProductCard(t,e){return a=>!!t.product?.parentId||(!["essential_characteristics","custom_fields","labelling"].includes(a)||!!e.showModeSetting)&&t.modeSettings.includes(a)},advanceModeEnabled(t){return t.advancedModeSetting.value?.advancedMode.enabled},productStates(t){return t.product.isNew()&&t.creationStates?t.creationStates:t.product.states?t.product.states:[]}},mutations:{setApiContext(t,e){t.apiContext=e},setCustomFields(t,e){t.customFieldSets=t.customFieldSets.map(t=>t.id===e.id?e:t)},setLocalMode(t,e){t.localMode=e},setLoading(t,e){let a=e[0],i=e[1];return"boolean"==typeof i&&void 0!==t.loading[a]&&(t.loading[a]=i,!0)},setAssignedProductsFromCrossSelling(t,{id:e,collection:a}){t.product.crossSellings.get(e).assignedProducts=a},setProductId(t,e){t.productId=e},setProduct(t,e){t.product=e},setVariants(t,e){t.variants=e},setParentProduct(t,e){t.parentProduct=e},setCurrencies(t,e){t.currencies=e},setTaxes(t,e){t.taxes=e,!t.product||null!==t.product.taxId||t.parentProduct||t.parentProduct.id||(t.product.taxId=t.taxes[0].id)},setAttributeSet(t,e){t.customFieldSets=e},setDefaultFeatureSet(t,e){t.defaultFeatureSet=e},setAdvancedModeSetting(t,e){t.advancedModeSetting=e},setModeSettings(t,e){t.modeSettings=e},setCreationStates(t,e){t.creationStates=e}}}},482193:function(t,e,a){var i=a(828362);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),a(745346).Z("fcf45b2a",i,!0,{})}}]);