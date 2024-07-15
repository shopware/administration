(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[19711],{592045:function(){},319711:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}}),n(780986);let{Criteria:a,EntityCollection:i}=Shopware.Data,{mapState:r,mapGetters:o}=Shopware.Component.getComponentHelper();var s={template:'\n{% block sw_product_detail_variants %}\n<div class="sw-product-detail-variants">\n\n    \n    {% block sw_product_detail_variants_sw_card_generated_variants %}\n    <sw-card\n        class="sw-product-detail-variants__generated-variants"\n        position-identifier="sw-product-detail-variants-generated-variants"\n        :class="{\'is--loading\': isLoading}"\n        :title="$tc(\'sw-product.variations.generatedVariationCardTitle\')"\n        large\n    >\n        <template\n            v-if="!isLoading && propertiesAvailable"\n            #tabs\n        >\n            <sw-tabs\n                position-identifier="sw-variant-card-tabs"\n                :small="false"\n                :default-item="defaultTab"\n                @new-item-active="setActiveTab($event.name)"\n            >\n                <sw-tabs-item\n                    name="all"\n                    :active-tab="activeTab"\n                >\n                    {{ $tc(\'sw-product.variations.variationCard.tabs.allProducts\') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item\n                    name="is-physical"\n                    :active-tab="activeTab"\n                >\n                    {{ $tc(\'sw-product.variations.variationCard.tabs.physicalProducts\') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item\n                    name="is-download"\n                    :active-tab="activeTab"\n                >\n                    {{ $tc(\'sw-product.variations.variationCard.tabs.digitalProducts\') }}\n                </sw-tabs-item>\n            </sw-tabs>\n        </template>\n\n        <sw-skeleton v-if="isLoading" />\n\n        \n        {% block sw_product_detail_variants_sw_card_empty_state %}\n        <sw-empty-state\n            v-else-if="!propertiesAvailable"\n            class="sw-product-detail-variants__generated-variants-empty-state"\n            :absolute="false"\n            :title="$tc(\'sw-product.variations.emptyStatePropertyTitle\')"\n            :subline="$tc(\'sw-product.variations.emptyStatePropertyDescription\')"\n        >\n\n            <template #icon>\n                \n                {% block sw_product_properties_empty_state_image %}\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                    :alt="$tc(\'sw-product.properties.titleEmptyState\')"\n                >\n                {% endblock %}\n            </template>\n\n            <template #actions>\n                \n                {% block sw_product_properties_empty_state_button_property %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'product.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="ghost"\n                    :disabled="!acl.can(\'product.editor\')"\n                    @click="openAddPropertiesModal"\n                >\n                    {{ $tc(\'sw-product.properties.buttonAddProperties\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_variants_sw_card_empty_state_variant %}\n        <sw-empty-state\n            v-if="!isLoading && propertiesAvailable && variants.length === 0"\n            class="sw-product-detail-variants__generated-variants-empty-state"\n            :absolute="false"\n            :title="$tc(\'sw-product.variations.emptyStateTitle\')"\n            :subline="$tc(\'sw-product.variations.emptyStateDescription\')"\n        >\n\n            <template #icon>\n                \n                {% block sw_product_properties_empty_state_image %}\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                    :alt="$tc(\'sw-product.properties.titleEmptyState\')"\n                >\n                {% endblock %}\n            </template>\n\n            <template #actions>\n                \n                {% block sw_product_properties_empty_state_button %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'product.creator\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="sw-product-detail-variants__generated-variants-empty-state-button"\n                    variant="ghost"\n                    :disabled="!acl.can(\'product.creator\')"\n                    @click="openModal(\'variantGeneration\')"\n                >\n                    {{ $tc(\'sw-product.variations.emptyStateButton\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_variants_sw_card_generated_variants_overview %}\n        <sw-product-variants-overview\n            v-if="product.id"\n            v-show="variantListHasContent && !isLoading"\n            ref="generatedVariants"\n            :product-states="currentProductStates"\n            :groups="groups"\n            :selected-groups="selectedGroups"\n            @variants-finish-update="updateVariantListHasContent"\n            @generator-open="openModal(\'variantGeneration\')"\n            @delivery-open="openModal(\'deliveryModal\')"\n        />\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_variants_modal_variant_generation %}\n    <sw-product-modal-variant-generation\n        v-if="activeModal === \'variantGeneration\'"\n        :product="productEntity"\n        :groups="groups"\n        :actual-status="activeTab"\n        :selected-groups="selectedGroups"\n        @modal-close="activeModal = \'\'"\n        @variations-finish-generate="updateVariations"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_detail_variants_modal_delivery %}\n    <sw-product-modal-delivery\n        v-if="activeModal === \'deliveryModal\'"\n        :product="productEntity"\n        :selected-groups="selectedGroups"\n        @configuration-close="onConfigurationClosed"\n        @modal-close="activeModal = \'\'"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_properties_add_properties_modal %}\n    <sw-product-add-properties-modal\n        v-if="showAddPropertiesModal"\n        :new-properties="newProperties"\n        @modal-cancel="onCancelAddPropertiesModal"\n        @modal-save="onSaveAddPropertiesModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],data(){return{variantListHasContent:!1,activeModal:"",isLoading:!0,productEntity:{},configuratorSettingsRepository:{},groups:[],productEntityLoaded:!1,propertiesAvailable:!0,showAddPropertiesModal:!1,defaultTab:"all",activeTab:"all"}},computed:{...r("swProductDetail",["product","variants"]),...r("context",{contextLanguageId:t=>t.api.languageId}),...o("swProductDetail",{isStoreLoading:"isLoading"}),productRepository(){return this.repositoryFactory.create("product")},groupRepository(){return this.repositoryFactory.create("property_group")},propertyRepository(){return this.repositoryFactory.create("property_group_option")},productProperties(){return this.isChild&&this.product?.properties?.length<=0?this.parentProduct.properties:this.product.properties},selectedGroups(){if(!this.productEntity.configuratorSettings)return[];let t=this.productEntity.configuratorSettings.reduce((t,e)=>(0>t.indexOf(e.option.groupId)&&t.push(e.option.groupId),t),[]);return this.groups.filter(e=>t.indexOf(e.id)>=0)},currentProductStates(){return this.activeTab.split(",")},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{isStoreLoading:{handler(){!1===this.isStoreLoading&&this.loadData()}},contextLanguageId:{handler(){this.$refs.generatedVariants.getList()}}},created(){this.createdComponent()},mounted(){this.mountedComponent()},methods:{createdComponent(){this.checkIfPropertiesExists()},mountedComponent(){this.loadData()},setActiveTab(t){this.activeTab=t},loadData(){this.isStoreLoading||this.loadOptions().then(()=>this.loadGroups())},loadOptions(){return new Promise(t=>{let e=new a(1,25);e.addAssociation("configuratorSettings.option"),e.addAssociation("prices"),this.productRepository.get(this.product.id,Shopware.Context.api,e).then(e=>{this.productEntity=e,this.productEntityLoaded=!0,t()})})},loadGroups(){return new Promise(t=>{this.$nextTick().then(()=>{let e=new a(1,null);this.groupRepository.search(e).then(e=>{this.groups=e,t()})})})},updateVariations(){this.$refs.generatedVariants.includeOptions=[],this.$refs.generatedVariants.filterWindowOpen=!1,this.loadOptions().then(()=>this.loadGroups()).then(()=>{this.$refs.generatedVariants.getFilterOptions(),this.$refs.generatedVariants.resetFilterOptions()})},updateVariantListHasContent(t){let e=this.$refs.generatedVariants.includeOptions.length>0,n=this.$route.query?this.$route.query.term:"";this.variantListHasContent=t.length>0||n||e,this.isLoading=!1},openModal(t){this.activeModal=t},onConfigurationClosed(){this.loadData(),this.activeModal=""},checkIfPropertiesExists(){this.propertyRepository.search(new a(1,1)).then(t=>{this.propertiesAvailable=t.total>0})},openAddPropertiesModal(){this.propertiesAvailable?(this.updateNewProperties(),this.showAddPropertiesModal=!0):this.$router.push({name:"sw.property.index"})},closeAddPropertiesModal(){this.showAddPropertiesModal=!1,this.updateNewProperties()},updateNewProperties(){this.newProperties=new i(this.productProperties.source,this.productProperties.entity,this.productProperties.context,a.fromCriteria(this.productProperties.criteria),this.productProperties,this.productProperties.total,this.productProperties.aggregations)},onCancelAddPropertiesModal(){this.closeAddPropertiesModal()},onSaveAddPropertiesModal(t){this.closeAddPropertiesModal(),t.length<=0||this.productProperties.splice(0,this.productProperties.length,...t)}}}},780986:function(t,e,n){var a=n(592045);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),n(745346).Z("2c8922c1",a,!0,{})}}]);