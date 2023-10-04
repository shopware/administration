(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[385],{GyOc:function(t,e,n){var o=n("gKxV");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("P8hj").default)("205ad66b",o,!0,{})},gKxV:function(t,e,n){},ofIJ:function(t,e,n){"use strict";n.r(e);var o=n("6lmj"),r=n.n(o),i=n("CsSd"),a=n.n(i);n("GyOc");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=Shopware.Data,c=p.Criteria,l=p.EntityCollection,u=Shopware.Component.getComponentHelper(),v=u.mapState,g=u.mapGetters;e.default={template:'\n{% block sw_product_detail_variants %}\n<div class="sw-product-detail-variants">\n\n    \n    {% block sw_product_detail_variants_sw_card_generated_variants %}\n    <sw-card\n        class="sw-product-detail-variants__generated-variants"\n        position-identifier="sw-product-detail-variants-generated-variants"\n        :class="{\'is--loading\': isLoading}"\n        :title="$tc(\'sw-product.variations.generatedVariationCardTitle\')"\n        large\n    >\n        <template\n            v-if="!isLoading && propertiesAvailable"\n            #tabs\n        >\n            <sw-tabs\n                position-identifier="sw-variant-card-tabs"\n                :small="false"\n                :default-item="defaultTab"\n                @new-item-active="setActiveTab($event.name)"\n            >\n                <sw-tabs-item\n                    name="all"\n                    :active-tab="activeTab"\n                >\n                    {{ $tc(\'sw-product.variations.variationCard.tabs.allProducts\') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item\n                    name="is-physical"\n                    :active-tab="activeTab"\n                >\n                    {{ $tc(\'sw-product.variations.variationCard.tabs.physicalProducts\') }}\n                </sw-tabs-item>\n\n                <sw-tabs-item\n                    name="is-download"\n                    :active-tab="activeTab"\n                >\n                    {{ $tc(\'sw-product.variations.variationCard.tabs.digitalProducts\') }}\n                </sw-tabs-item>\n            </sw-tabs>\n        </template>\n\n        <sw-skeleton v-if="isLoading" />\n\n        \n        {% block sw_product_detail_variants_sw_card_empty_state %}\n        <sw-empty-state\n            v-else-if="!propertiesAvailable"\n            class="sw-product-detail-variants__generated-variants-empty-state"\n            :absolute="false"\n            :title="$tc(\'sw-product.variations.emptyStatePropertyTitle\')"\n            :subline="$tc(\'sw-product.variations.emptyStatePropertyDescription\')"\n        >\n\n            <template #icon>\n                \n                {% block sw_product_properties_empty_state_image %}\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                    :alt="$tc(\'sw-product.properties.titleEmptyState\')"\n                >\n                {% endblock %}\n            </template>\n\n            <template #actions>\n                \n                {% block sw_product_properties_empty_state_button_property %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'product.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="ghost"\n                    :disabled="!acl.can(\'product.editor\')"\n                    @click="openAddPropertiesModal"\n                >\n                    {{ $tc(\'sw-product.properties.buttonAddProperties\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_variants_sw_card_empty_state_variant %}\n        <sw-empty-state\n            v-if="!isLoading && propertiesAvailable && variants.length === 0"\n            class="sw-product-detail-variants__generated-variants-empty-state"\n            :absolute="false"\n            :title="$tc(\'sw-product.variations.emptyStateTitle\')"\n            :subline="$tc(\'sw-product.variations.emptyStateDescription\')"\n        >\n\n            <template #icon>\n                \n                {% block sw_product_properties_empty_state_image %}\n                <img\n                    :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                    :alt="$tc(\'sw-product.properties.titleEmptyState\')"\n                >\n                {% endblock %}\n            </template>\n\n            <template #actions>\n                \n                {% block sw_product_properties_empty_state_button %}\n                <sw-button\n                    v-tooltip="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'product.creator\'),\n                        showOnDisabledElements: true\n                    }"\n                    variant="ghost"\n                    :disabled="!acl.can(\'product.creator\')"\n                    @click="openModal(\'variantGeneration\')"\n                >\n                    {{ $tc(\'sw-product.variations.emptyStateButton\') }}\n                </sw-button>\n                {% endblock %}\n            </template>\n        </sw-empty-state>\n        {% endblock %}\n\n        \n        {% block sw_product_detail_variants_sw_card_generated_variants_overview %}\n        <sw-product-variants-overview\n            v-if="product.id"\n            v-show="variantListHasContent && !isLoading"\n            ref="generatedVariants"\n            :product-states="currentProductStates"\n            :groups="groups"\n            :selected-groups="selectedGroups"\n            @variants-finish-update="updateVariantListHasContent"\n            @generator-open="openModal(\'variantGeneration\')"\n            @delivery-open="openModal(\'deliveryModal\')"\n        />\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_product_detail_variants_modal_variant_generation %}\n    <sw-product-modal-variant-generation\n        v-if="activeModal === \'variantGeneration\'"\n        :product="productEntity"\n        :groups="groups"\n        :actual-status="activeTab"\n        :selected-groups="selectedGroups"\n        @modal-close="activeModal = \'\'"\n        @variations-finish-generate="updateVariations"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_detail_variants_modal_delivery %}\n    <sw-product-modal-delivery\n        v-if="activeModal === \'deliveryModal\'"\n        :product="productEntity"\n        :selected-groups="selectedGroups"\n        @configuration-close="onConfigurationClosed"\n        @modal-close="activeModal = \'\'"\n    />\n    {% endblock %}\n\n    \n    {% block sw_product_properties_add_properties_modal %}\n    <sw-product-add-properties-modal\n        v-if="showAddPropertiesModal"\n        :new-properties="newProperties"\n        @modal-cancel="onCancelAddPropertiesModal"\n        @modal-save="onSaveAddPropertiesModal"\n    />\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","acl"],data:function(){return{variantListHasContent:!1,activeModal:"",isLoading:!0,productEntity:{},configuratorSettingsRepository:{},groups:[],productEntityLoaded:!1,propertiesAvailable:!0,showAddPropertiesModal:!1,defaultTab:"all",activeTab:"all"}},computed:d(d(d(d({},v("swProductDetail",["product","variants"])),v("context",{contextLanguageId:function(t){return t.api.languageId}})),g("swProductDetail",{isStoreLoading:"isLoading"})),{},{productRepository:function(){return this.repositoryFactory.create("product")},groupRepository:function(){return this.repositoryFactory.create("property_group")},propertyRepository:function(){return this.repositoryFactory.create("property_group_option")},productProperties:function(){var t,e;return this.isChild&&(null===(t=this.product)||void 0===t||null===(e=t.properties)||void 0===e?void 0:e.length)<=0?this.parentProduct.properties:this.product.properties},selectedGroups:function(){if(!this.productEntity.configuratorSettings)return[];var t=this.productEntity.configuratorSettings.reduce((function(t,e){return t.indexOf(e.option.groupId)<0&&t.push(e.option.groupId),t}),[]);return this.groups.filter((function(e){return t.indexOf(e.id)>=0}))},currentProductStates:function(){return this.activeTab.split(",")},assetFilter:function(){return Shopware.Filter.getByName("asset")}}),watch:{isStoreLoading:{handler:function(){!1===this.isStoreLoading&&this.loadData()}},contextLanguageId:{handler:function(){this.$refs.generatedVariants.getList()}}},created:function(){this.createdComponent()},mounted:function(){this.mountedComponent()},methods:{createdComponent:function(){this.checkIfPropertiesExists()},mountedComponent:function(){this.loadData()},setActiveTab:function(t){this.activeTab=t},loadData:function(){var t=this;this.isStoreLoading||this.loadOptions().then((function(){return t.loadGroups()}))},loadOptions:function(){var t=this;return new Promise((function(e){var n=new c(1,25);n.addAssociation("configuratorSettings.option"),n.addAssociation("prices"),t.productRepository.get(t.product.id,Shopware.Context.api,n).then((function(n){t.productEntity=n,t.productEntityLoaded=!0,e()}))}))},loadGroups:function(){var t=this;return new Promise((function(e){t.$nextTick().then((function(){var n=new c(1,null);t.groupRepository.search(n).then((function(n){t.groups=n,e()}))}))}))},updateVariations:function(){var t=this;this.$refs.generatedVariants.includeOptions=[],this.$refs.generatedVariants.filterWindowOpen=!1,this.loadOptions().then((function(){return t.loadGroups()})).then((function(){t.$refs.generatedVariants.getFilterOptions(),t.$refs.generatedVariants.resetFilterOptions()}))},updateVariantListHasContent:function(t){var e=this.$refs.generatedVariants.includeOptions.length>0,n=this.$route.query?this.$route.query.term:"";this.variantListHasContent=t.length>0||n||e,this.isLoading=!1},openModal:function(t){this.activeModal=t},onConfigurationClosed:function(){this.loadData(),this.activeModal=""},checkIfPropertiesExists:function(){var t=this;this.propertyRepository.search(new c(1,1)).then((function(e){t.propertiesAvailable=e.total>0}))},openAddPropertiesModal:function(){this.propertiesAvailable?(this.updateNewProperties(),this.showAddPropertiesModal=!0):this.$router.push({name:"sw.property.index"})},closeAddPropertiesModal:function(){this.showAddPropertiesModal=!1,this.updateNewProperties()},updateNewProperties:function(){this.newProperties=new l(this.productProperties.source,this.productProperties.entity,this.productProperties.context,c.fromCriteria(this.productProperties.criteria),this.productProperties,this.productProperties.total,this.productProperties.aggregations)},onCancelAddPropertiesModal:function(){this.closeAddPropertiesModal()},onSaveAddPropertiesModal:function(t){var e;this.closeAddPropertiesModal(),t.length<=0||(e=this.productProperties).splice.apply(e,[0,this.productProperties.length].concat(r()(t)))}}}}}]);