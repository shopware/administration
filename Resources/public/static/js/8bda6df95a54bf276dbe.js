(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[39851],{501680:function(){},739851:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return n}}),o(295695);var n={template:'\n{% block sw_product_add_properties_modal %}\n<sw-modal\n    v-if="properties"\n    class="sw-product-add-properties-modal"\n    :title="$tc(\'sw-product.properties.addPropertiesModal.title\')"\n    @modal-close="onCancel"\n>\n    \n    {% block sw_product_add_properties_modal_filled_state %}\n    <div v-if="propertiesAvailable">\n        \n        {% block sw_product_add_properties_modal_filled_state_header %}\n        \n        {% block sw_product_add_properties_modal_filled_state_search_field %}\n        <sw-property-search\n            ref="propertySearch"\n            class="sw-product-add-properties-modal__search"\n            :options="newProperties"\n            :overlay="false"\n            :collapsible="false"\n            @option-select="onSelectOption"\n        >\n            <template\n                #toolbar="{ focus, input, searchTerm }"\n            >\n                \n                {% block sw_property_search_field %}\n                <div class="sw-property-search__toolbar sw-product-add-properties-modal__toolbar">\n                    <slot name="toolbar">\n                        <div class="sw-property-search__search-field-container">\n                            <slot name="toolbar-search-field">\n                                \n                                {% block sw_productadd_properties_selection_search_field %}\n                                <sw-simple-search-field\n                                    ref="searchField"\n                                    size="small"\n                                    variant="form"\n                                    class="sw-property-search__search-field sw-product-add-properties-modal__search-field"\n                                    :value="searchTerm"\n                                    :placeholder="$tc(\'sw-property-search.placeholderSearch\')"\n                                    @focus="focus"\n                                    @update:value="input"\n                                    @option-select="onSelectOption"\n                                />\n                                {% endblock %}\n                            </slot>\n                        </div>\n                    </slot>\n                </div>\n                {% endblock %}\n            </template>\n        </sw-property-search>\n        {% endblock %}\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_add_properties_modal_empty_state %}\n    <sw-empty-state\n        v-if="!propertiesAvailable"\n        :absolute="false"\n        :title="$tc(\'sw-product.properties.addPropertiesModal.titleEmptyState\')"\n        :subline="$tc(\'sw-product.properties.addPropertiesModal.descriptionEmptyState\')"\n    >\n        <template #icon>\n            \n            {% block sw_product_add_properties_modal_empty_state_image %}\n            <img\n                :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                :alt="$tc(\'sw-product.properties.addPropertiesModal.titleEmptyState\')"\n            >\n            {% endblock %}\n        </template>\n\n        <template #actions>\n            \n            {% block sw_product_properties_empty_state_button_property %}\n            <sw-button\n                variant="ghost"\n                @click="onOpenProperties"\n            >\n                {{ $tc(\'sw-product.properties.buttonAddProperties\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-empty-state>\n    {% endblock %}\n\n    <template #modal-footer>\n        \n        {% block sw_product_add_properties_modal_button_cancel %}\n        <sw-button\n            size="small"\n            @click="onCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_product_add_properties_modal_button_save %}\n        <sw-button\n            v-if="showSaveButton"\n            class="sw-product-add-properties-modal__button-save"\n            variant="primary"\n            size="small"\n            @click="onSave"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["modal-cancel","modal-save"],props:{newProperties:{type:Array,required:!0},propertiesAvailable:{type:Boolean,required:!1,default:!0}},data(){return{properties:[]}},computed:{showSaveButton(){return this.propertiesAvailable},assetFilter(){return Shopware.Filter.getByName("asset")}},methods:{onCancel(){this.$emit("modal-cancel")},onSave(){this.$emit("modal-save",this.newProperties)},onOpenProperties(){this.$emit("modal-cancel"),this.$nextTick(()=>{this.$router.push({name:"sw.property.index"})})},onSelectOption(e){let t=e.item;!0===e.selected?this.newProperties.add(t):this.newProperties.remove(t.id)}}}},295695:function(e,t,o){var n=o(501680);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),o(745346).Z("cf7b6c64",n,!0,{})}}]);