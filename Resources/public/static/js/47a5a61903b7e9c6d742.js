(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[5041],{585337:function(){},805041:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(782700);let{Mixin:o}=Shopware,{Criteria:l,EntityCollection:c}=Shopware.Data;var s={template:'\n{% block sw_cms_element_product_slider_config %}\n<div class="sw-cms-el-config-product-slider">\n    \n    {% block sw_cms_element_product_slider_config_tabs %}\n    <sw-tabs\n        position-identifier="sw-cms-element-config-product-slider"\n        class="sw-cms-el-config-product-slider__tabs"\n        default-item="content"\n    >\n        <template #default="{ active }">\n            \n            {% block sw_cms_element_product_slider_config_tab_content %}\n            <sw-tabs-item\n                :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                name="content"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n            {% endblock %}\n            \n            {% block sw_cms_element_product_slider_config_tab_options %}\n            <sw-tabs-item\n                :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n                name="settings"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template\n            #content="{ active }"\n        >\n            \n            {% block sw_cms_element_product_slider_config_content %}\n            <sw-container\n                v-if="active === \'content\'"\n                class="sw-cms-el-config-product-slider__tab-content"\n            >\n                \n                {% block sw_cms_element_product_slider_config_content_title %}\n                <sw-text-field\n                    v-model:value="element.config.title.value"\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.title\')"\n                    :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.title\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_content_product_assignment_type %}\n                <sw-single-select\n                    v-model:value="element.config.products.source"\n                    class="sw-cms-el-config-product-slider__product-assignment-type-select"\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.productAssignmentType\')"\n                    :options="productAssignmentTypes"\n                    show-clearable-button\n                    @update:value="onChangeAssignmentType"\n                />\n                {% endblock %}\n\n                <template v-if="element.config.products.source === \'product_stream\'">\n                    \n                    {% block sw_cms_element_product_slider_config_content_product_stream_select %}\n                    <sw-entity-single-select\n                        v-model:value="element.config.products.value"\n                        entity="product_stream"\n                        class="sw-cms-el-config-product-slider__product-stream-select"\n                        :label="$tc(\'sw-cms.elements.productSlider.config.label.productStreamChoice\')"\n                        :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.productStreamChoice\')"\n                        show-clearable-button\n                        @update:value="onChangeProductStream"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_product_slider_config_content_product_stream_performance_hint %}\n                    <sw-alert\n                        class="sw-cms-el-config-product-slider__product-stream-performance-hint"\n                        variant="info"\n                    >\n                        {{ $tc(\'sw-cms.elements.productSlider.config.textProductStreamPerformanceHint\') }}\n                    </sw-alert>\n                    {% endblock %}\n\n                    <sw-product-stream-modal-preview\n                        v-if="showProductStreamPreview"\n                        :filters="productStream.apiFilter"\n                        :default-limit="element.config.productStreamLimit.value"\n                        :default-sorting="element.config.productStreamSorting.value"\n                        @modal-close="onCloseProductStreamModal"\n                    />\n\n                    <sw-container\n                        columns="1fr 1fr"\n                        gap="30px"\n                    >\n                        \n                        {% block sw_cms_element_product_slider_config_content_product_stream_sorting %}\n                        <sw-single-select\n                            v-model:value="element.config.productStreamSorting.value"\n                            :label="$tc(\'sw-cms.elements.productSlider.config.label.productStreamSorting\')"\n                            class="sw-cms-el-config-product-slider__product-stream-sorting"\n                            :disabled="!productStream"\n                            :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.productStreamSorting\')"\n                            :options="productStreamSortingOptions"\n                            show-clearable-button\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_cms_element_product_slider_config_content_product_stream_limit %}\n                        <sw-number-field\n                            v-model:value="element.config.productStreamLimit.value"\n                            :label="$tc(\'sw-cms.elements.productSlider.config.label.productStreamLimit\')"\n                            class="sw-cms-el-config-product-slider__product-stream-limit"\n                            :disabled="!productStream"\n                            :min="1"\n                        />\n                        {% endblock %}\n                    </sw-container>\n\n                    \n                    {% block sw_cms_element_product_slider_config_content_product_stream_preview_link %}\n                    <div class="sw-cms-el-config-product-slider__product-stream-preview-link-container">\n                        <a\n                            class="sw-cms-el-config-product-slider__product-stream-preview-link link"\n                            :class="{ \'is--disabled\': !productStream }"\n                            href="#"\n                            @click.prevent="onClickProductStreamPreview"\n                        >\n                            {{ $tc(\'sw-cms.elements.productSlider.config.textProductStreamPreviewLink\') }}\n                            <sw-icon\n                                name="regular-long-arrow-right"\n                                small\n                            />\n                        </a>\n                    </div>\n                    {% endblock %}\n                </template>\n\n                \n                {% block sw_cms_element_product_slider_config_content_products %}\n                <sw-entity-multi-select\n                    v-else\n                    v-model:entityCollection="productCollection"\n                    class="sw-cms-el-config-product-slider__products"\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.selection\')"\n                    :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.selection\')"\n                    :context="productMultiSelectContext"\n                    :criteria="productMediaFilter"\n                    @update:entity-collection="onProductsChange"\n                >\n                    <template #selection-label-property="{ item }">\n                        <sw-product-variant-info\n                            :variations="item.variation"\n                        >\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </template>\n                    <template #result-item="{ item, index }">\n                        <slot\n                            name="result-item"\n                            v-bind="{ item, index }"\n                        >\n                            <sw-select-result\n                                v-bind="{ item, index, selected: isSelected(item.id)}"\n                            >\n                                \n                                {% block sw_entity_single_select_base_results_list_result_label %}\n                                <span class="sw-select-result__result-item-text">\n                                    <sw-product-variant-info\n                                        :variations="item.variation"\n                                    >\n                                        {{ item.translated.name || item.name }}\n                                    </sw-product-variant-info>\n                                </span>\n                                {% endblock %}\n                            </sw-select-result>\n                        </slot>\n                    </template>\n                </sw-entity-multi-select>\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_product_slider_config_settings %}\n            <sw-container\n                v-if="active === \'settings\'"\n                class="sw-cms-el-config-product-slider__tab-settings"\n            >\n\n                \n                {% block sw_cms_element_product_slider_config_settings_display_mode %}\n                <sw-select-field\n                    v-model:value="element.config.displayMode.value"\n                    :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n                >\n                    <option value="standard">\n                        {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n                    </option>\n                    <option value="cover">\n                        {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n                    </option>\n                    <option value="contain">\n                        {{ $tc(\'sw-cms.elements.general.config.label.displayModeContain\') }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_settings_vertical_align %}\n                <sw-select-field\n                    v-model:value="element.config.verticalAlign.value"\n                    :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                    :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                >\n                    <option value="flex-start">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                    </option>\n                    <option value="center">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                    </option>\n                    <option value="flex-end">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_settings_box_layout %}\n                <sw-select-field\n                    v-model:value="element.config.boxLayout.value"\n                    :label="$tc(\'sw-cms.elements.productBox.config.label.layoutType\')"\n                >\n                    <option value="standard">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeStandard\') }}\n                    </option>\n                    <option value="image">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeImage\') }}\n                    </option>\n                    <option value="minimal">\n                        {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeMinimal\') }}\n                    </option>\n                </sw-select-field>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_settings_navigation %}\n                <sw-switch-field\n                    v-model:value="element.config.navigation.value"\n                    bordered\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.navigation\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_settings_rotate %}\n                <sw-switch-field\n                    v-model:value="element.config.rotate.value"\n                    bordered\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.rotate\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_settings_border %}\n                <sw-switch-field\n                    v-model:value="element.config.border.value"\n                    bordered\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.border\')"\n                />\n                {% endblock %}\n\n                \n                {% block sw_cms_element_product_slider_config_settings_min_width %}\n                <sw-text-field\n                    v-model:value="element.config.elMinWidth.value"\n                    :label="$tc(\'sw-cms.elements.productSlider.config.label.minWidth\')"\n                    :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.minWidth\')"\n                />\n                {% endblock %}\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-tabs>\n    {% endblock %}\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","feature"],mixins:[o.getByName("cms-element")],data(){return{productCollection:null,productStream:null,showProductStreamPreview:!1,tempProductIds:[],tempStreamId:null}},computed:{productRepository(){return this.repositoryFactory.create("product")},productStreamRepository(){return this.repositoryFactory.create("product_stream")},products(){return this.element?.data?.products&&this.element.data.products.length>0?this.element.data.products:null},productMediaFilter(){let e=new l(1,25);return e.addAssociation("cover"),e.addAssociation("options.group"),e},productMultiSelectContext(){let e={...Shopware.Context.api};return e.inheritance=!0,e},productAssignmentTypes(){return[{label:this.$tc("sw-cms.elements.productSlider.config.productAssignmentTypeOptions.manual"),value:"static"},{label:this.$tc("sw-cms.elements.productSlider.config.productAssignmentTypeOptions.productStream"),value:"product_stream"}]},productStreamSortingOptions(){return[{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.nameAsc"),value:"name:ASC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.nameDesc"),value:"name:DESC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.creationDateAsc"),value:"createdAt:ASC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.creationDateDesc"),value:"createdAt:DESC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.random"),value:"random"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.priceAsc"),value:"cheapestPrice:ASC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.priceDesc"),value:"cheapestPrice:DESC"}]}},created(){this.createdComponent()},methods:{createdComponent(){if(this.initElementConfig("product-slider"),this.productCollection=new c("/product","product",Shopware.Context.api),!(this.element.config.products.value.length<=0)){if("product_stream"===this.element.config.products.source)this.loadProductStream();else{let e=new l(1,100);e.addAssociation("cover"),e.addAssociation("options.group"),e.setIds(this.element.config.products.value),this.productRepository.search(e,{...Shopware.Context.api,inheritance:!0}).then(e=>{this.productCollection=e})}}},onChangeAssignmentType(e){"product_stream"===e?(this.tempProductIds=this.element.config.products.value,this.element.config.products.value=this.tempStreamId):(this.tempStreamId=this.element.config.products.value,this.element.config.products.value=this.tempProductIds)},loadProductStream(){this.productStreamRepository.get(this.element.config.products.value,Shopware.Context.api,new l(1,25)).then(e=>{this.productStream=e})},onChangeProductStream(e){if(null===e){this.productStream=null;return}this.loadProductStream()},onClickProductStreamPreview(){null!==this.productStream&&(this.showProductStreamPreview=!0)},onCloseProductStreamModal(){this.showProductStreamPreview=!1},onProductsChange(){this.element.config.products.value=this.productCollection.getIds(),this.element?.data&&(this.isCompatEnabled("INSTANCE_SET")?this.$set(this.element.data,"products",this.productCollection):this.element.data.products=this.productCollection)},isSelected(e){return this.productCollection.has(e)}}}},782700:function(e,t,n){var o=n(585337);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),n(745346).Z("2dabed72",o,!0,{})}}]);