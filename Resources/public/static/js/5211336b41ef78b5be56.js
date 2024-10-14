(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[68594],{28381:function(){},768594:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(936610);let{Mixin:o}=Shopware,{Criteria:i}=Shopware.Data;var s={template:'\n{% block sw_cms_element_buy_box_config %}\n<div class="sw-cms-el-config-buy-box">\n\n    \n    {% block sw_cms_element_buy_box_config_tabs %}\n    <sw-tabs\n        position-identifier="sw-cms-element-config-buy-box"\n        class="sw-cms-el-config-buy-box__tabs"\n        default-item="content"\n    >\n        <template #default="{ active }">\n\n            \n            {% block sw_cms_element_buy_box_config_tab_content %}\n            <sw-tabs-item\n                name="content"\n                :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n            </sw-tabs-item>\n            {% endblock %}\n\n            \n            {% block sw_cms_element_buy_box_config_tab_option %}\n            <sw-tabs-item\n                name="options"\n                :title="$tc(\'sw-cms.elements.general.config.tab.options\')"\n                :active-tab="active"\n            >\n                {{ $tc(\'sw-cms.elements.general.config.tab.options\') }}\n            </sw-tabs-item>\n            {% endblock %}\n        </template>\n\n        <template #content="{ active }">\n            <div\n                v-if="active === \'content\'"\n                class="sw-cms-el-config-buy-box__tab-content"\n            >\n                \n                {% block sw_cms_element_buy_box_config_content_warning %}\n                <sw-alert\n                    v-if="isProductPage"\n                    class="sw-cms-el-config-buy-box__warning"\n                    variant="info"\n                >\n                    {{ $tc(\'sw-cms.elements.buyBox.infoText.tooltipSettingDisabled\') }}\n                </sw-alert>\n                {% endblock %}\n\n                \n                {% block sw_cms_element_buy_box_config_product_select %}\n                <sw-entity-single-select\n                    v-if="!isProductPage"\n                    ref="cmsProductSelection"\n                    v-model:value="element.config.product.value"\n                    entity="product"\n                    :label="$tc(\'sw-cms.elements.buyBox.config.label.selection\')"\n                    :placeholder="$tc(\'sw-cms.elements.buyBox.config.placeholder.selection\')"\n                    :criteria="productCriteria"\n                    :context="productSelectContext"\n                    show-clearable-button\n                    @update:value="onProductChange"\n                >\n\n                    \n                    {% block sw_cms_element_buy_box_config_product_variant_label %}\n                    <template #selection-label-property="{ item }">\n                        <sw-product-variant-info :variations="item.variation">\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_cms_element_buy_box_config_product_select_result_item %}\n                    <template #result-item="{ item, index }">\n                        <sw-select-result\n                            v-bind="{ item, index }"\n                        >\n\n                            \n                            {% block sw_entity_single_select_base_results_list_result_label %}\n                            <span class="sw-select-result__result-item-text">\n                                <sw-product-variant-info :variations="item.variation">\n                                    {{ item.translated.name || item.name }}\n                                </sw-product-variant-info>\n                            </span>\n                            {% endblock %}\n                        </sw-select-result>\n                    </template>\n                    {% endblock %}\n\n                </sw-entity-single-select>\n                {% endblock %}\n            </div>\n\n            <div\n                v-if="active === \'options\'"\n                class="sw-cms-el-config-buy-box__tab-options"\n            >\n\n                \n                {% block sw_cms_element_buy_box_config_options %}\n                <sw-select-field\n                    v-model:value="element.config.alignment.value"\n                    class="sw-cms-el-config-buy-box__alignment"\n                    :label="$tc(\'sw-cms.elements.general.config.label.alignment\')"\n                    :placeholder="$tc(\'sw-cms.elements.general.config.label.alignment\')"\n                >\n\n                    \n                    {% block sw_cms_element_product_box_config_alignment_options %}\n                    <option value="flex-start">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                    </option>\n                    <option value="center">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                    </option>\n                    <option value="flex-end">\n                        {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                    </option>\n                    {% endblock %}\n\n                </sw-select-field>\n                {% endblock %}\n\n            </div>\n        </template>\n    </sw-tabs>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["element-update"],mixins:[o.getByName("cms-element")],computed:{productRepository(){return this.repositoryFactory.create("product")},productSelectContext(){return{...Shopware.Context.api,inheritance:!0}},productCriteria(){let e=new i(1,25);return e.addAssociation("options.group"),e},selectedProductCriteria(){let e=new i(1,25);return e.addAssociation("deliveryTime"),e},isProductPage(){return this.cmsPageState?.currentPage?.type==="product_detail"}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("buy-box")},async onProductChange(e){e?await this.fetchProduct(e):this.deleteProduct(),this.$emit("element-update",this.element)},async fetchProduct(e){let t=await this.productRepository.get(e,this.productSelectContext,this.selectedProductCriteria);this.element.config.product.value=e,this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.element.data,"productId",e),this.$set(this.element.data,"product",t)):(this.element.data.productId=e,this.element.data.product=t)},deleteProduct(){this.element.config.product.value=null,this.isCompatEnabled("INSTANCE_SET")?(this.$set(this.element.data,"productId",null),this.$set(this.element.data,"product",null)):(this.element.data.productId=null,this.element.data.product=null)}}}},936610:function(e,t,n){var o=n(28381);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),n(745346).Z("282aac8e",o,!0,{})}}]);