(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[40214],{765627:function(){},340214:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var o=t(988672);t(268136);let{Mixin:l}=Shopware;var i={template:'\n{% block sw_cms_element_product_box_config %}\n<div class="sw-cms-el-config-product-box">\n    \n    {% block sw_cms_element_product_box_config_product_select %}\n    <sw-entity-single-select\n        ref="cmsProductSelection"\n        v-model:value="element.config.product.value"\n        :label="$tc(\'sw-cms.elements.productBox.config.label.selection\')"\n        :placeholder="$tc(\'sw-cms.elements.productBox.config.placeholder.selection\')"\n        entity="product"\n        :criteria="productCriteria"\n        :context="productSelectContext"\n        show-clearable-button\n        @update:value="onProductChange"\n    >\n        <template #selection-label-property="{ item }">\n            <sw-product-variant-info\n                :variations="item.variation"\n            >\n                {{ item.translated.name || item.name }}\n            </sw-product-variant-info>\n        </template>\n        <template #result-item="{ item, index }">\n            <slot\n                name="result-item"\n                v-bind="{ item, index }"\n            >\n                <sw-select-result\n                    v-bind="{ item, index }"\n                >\n                    \n                    {% block sw_entity_single_select_base_results_list_result_label %}\n                    <span class="sw-select-result__result-item-text">\n                        <sw-product-variant-info :variations="item.variation">\n                            {{ item.translated.name || item.name }}\n                        </sw-product-variant-info>\n                    </span>\n                    {% endblock %}\n                </sw-select-result>\n            </slot>\n        </template>\n    </sw-entity-single-select>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_box_config_layout_select %}\n    <sw-select-field\n        v-model:value="element.config.boxLayout.value"\n        :label="$tc(\'sw-cms.elements.productBox.config.label.layoutType\')"\n    >\n        \n        {% block sw_cms_element_product_box_config_layout_select_options %}\n        <option value="standard">\n            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeStandard\') }}\n        </option>\n        <option value="image">\n            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeImage\') }}\n        </option>\n        <option value="minimal">\n            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeMinimal\') }}\n        </option>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_box_config_displaymode_select %}\n    <sw-select-field\n        v-model:value="element.config.displayMode.value"\n        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n    >\n        \n        {% block sw_cms_element_product_box_config_displaymode_select_options %}\n        <option value="standard">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n        </option>\n        <option value="cover">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n        </option>\n        <option value="contain">\n            {{ $tc(\'sw-cms.elements.general.config.label.displayModeContain\') }}\n        </option>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n\n    \n    {% block sw_cms_element_product_box_config_settings_vertical_align %}\n    <sw-select-field\n        v-model:value="element.config.verticalAlign.value"\n        :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n        :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n    >\n        \n        {% block sw_cms_element_product_box_config_settings_vertical_align_options %}\n        <option value="flex-start">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n        </option>\n        <option value="center">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n        </option>\n        <option value="flex-end">\n            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n        </option>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[l.getByName("cms-element")],computed:{productRepository(){return this.repositoryFactory.create("product")},productSelectContext(){let e={...Shopware.Context.api};return e.inheritance=!0,e},productCriteria(){let e=new o.Z(1,25);return e.addAssociation("options.group"),e}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("product-box")},onProductChange(e){if(e){let n=new o.Z(1,25);n.addAssociation("cover"),n.addAssociation("options.group"),this.productRepository.get(e,this.productSelectContext,n).then(n=>{this.element.config.product.value=e,this.$set(this.element.data,"productId",e),this.$set(this.element.data,"product",n)})}else this.element.config.product.value=null,this.$set(this.element.data,"productId",null),this.$set(this.element.data,"product",null);this.$emit("element-update",this.element)}}}},268136:function(e,n,t){var o=t(765627);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals),t(745346).Z("455cc1a3",o,!0,{})}}]);