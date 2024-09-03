(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[36072],{822419:function(){},236072:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}}),r(78313);let{Component:n,Context:o}=Shopware,{Criteria:i,EntityCollection:s}=Shopware.Data,{mapState:p,mapGetters:a}=n.getComponentHelper();var d={template:'\n{% block sw_product_properties %}\n<sw-inherit-wrapper\n    v-if="properties"\n    v-model:value="product.properties"\n    class="sw-product-properties"\n    :is-association="isAssociation"\n    :disabled="disabled || undefined"\n    :inherited-value="parentProduct.properties"\n>\n    <template #content="{ isInherited, updateCurrentValue, isInheritField, restoreInheritance, removeInheritance }">\n        \n        {% block sw_product_properties_card %}\n        <sw-card\n            class="sw-product-properties__card"\n            :class="{\n                \'is--inherited\': isInherited,\n                \'is--disabled\': disabled,\n            }"\n            position-identifier="sw-product-properties"\n            :is-loading="isLoading"\n        >\n            <template #title>\n                \n                {% block sw_product_properties_card_title %}\n                <div\n                    class="sw-card__title"\n                    :class="{ \'is--inherited\': isInherited }"\n                >\n                    \n                    {% block sw_product_properties_card_title_icon %}\n                    <sw-inheritance-switch\n                        v-if="isInheritField && showInheritanceSwitcher"\n                        class="sw-inherit-wrapper__inheritance-icon"\n                        :is-inherited="isInherited"\n                        :disabled="!acl.can(\'product.editor\') || undefined"\n                        @inheritance-restore="restoreInheritance"\n                        @inheritance-remove="removeInheritance"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_product_properties_card_title_text %}\n                    {{ $tc(\'sw-product.properties.cardTitle\') }}\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </template>\n\n            <template\n                v-if="productHasProperties"\n                #grid\n            >\n                \n                {% block sw_product_properties_filled_state %}\n                <sw-container rows="auto auto">\n                    \n                    {% block sw_product_properties_filled_state_header %}\n                    <sw-card-section\n                        secondary\n                        divider="bottom"\n                    >\n                        <sw-container\n                            columns="1fr auto"\n                            gap="0 15px"\n                        >\n                            \n                            {% block sw_product_properties_filled_state_header_form_control %}\n                            <sw-simple-search-field\n                                v-model:value="searchTerm"\n                                variant="form"\n                                size="small"\n                                :placeholder="$tc(\'sw-product.properties.placeholderSearchAddedProperties\')"\n                                :disabled="isPropertiesLoading || undefined"\n                                @search-term-change="onChangeSearchTerm"\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_product_properties_filled_state_header_button %}\n                            <sw-button\n                                v-tooltip="{\n                                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                                    disabled: acl.can(\'product.editor\'),\n                                    showOnDisabledElements: true\n                                }"\n                                class="sw-product-properties__button-add-property"\n                                variant="ghost"\n                                size="small"\n                                :disabled="!acl.can(\'product.editor\') || undefined"\n                                @click="turnOnAddPropertiesModal"\n                            >\n                                {{ $tc(\'sw-product.properties.buttonAddProperty\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </sw-container>\n                    </sw-card-section>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_properties_filled_state_body_filled_state %}\n                    <sw-entity-listing\n                        v-if="properties.length > 0"\n                        ref="entityListing"\n                        class="sw-product-properties__list"\n                        detail-route="sw.property.detail"\n                        identifier="sw-product-properties-list"\n                        plain-appearance\n                        :items="properties"\n                        :data-source="properties"\n                        :columns="propertyColumns"\n                        :repository="propertyGroupRepository"\n                        :full-page="false"\n                        :show-settings="false"\n                        :allow-column-edit="false"\n                        :allow-inline-edit="false"\n                        :allow-view="acl.can(\'product.viewer\') || undefined"\n                        :allow-edit="acl.can(\'property.editor\') || undefined"\n                        :allow-delete="acl.can(\'product.deleter\') || undefined"\n                    >\n                        <template #column-values="{ item }">\n                            \n                            {% block sw_product_properties_filled_state_body_filled_state_column_values %}\n                            <div\n                                v-for="option in item.options"\n                                :key="option.id"\n                                class="sw-product-properties-list__column-values"\n                            >\n                                <sw-label\n                                    size="medium"\n                                    :dismissable="acl.can(\'product.deleter\')"\n                                    @dismiss="onDeletePropertyValue(option)"\n                                >\n                                    {{ option.translated.name }}\n                                </sw-label>\n                            </div>\n                            {% endblock %}\n                        </template>\n\n                        <template #delete-modal-delete-item="{ item }">\n                            \n                            {% block sw_product_properties_filled_state_body_filled_state_delete_modal_delete_item %}\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="onDeleteProperty(item)"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n\n                        <template #bulk-modal-delete-items>\n                            \n                            {% block sw_product_properties_filled_state_body_filled_state_bulk_modal_delete_items %}\n                            <sw-button\n                                variant="danger"\n                                size="small"\n                                @click="onDeleteProperties"\n                            >\n                                {{ $tc(\'global.default.delete\') }}\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n                    </sw-entity-listing>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_properties_filled_state_body_empty_state %}\n                    <sw-empty-state\n                        v-if="properties.length <= 0"\n                        class="sw-product-properties__empty-state has--no-search-result"\n                        :absolute="false"\n                        :show-description="false"\n                        :title="$tc(\'sw-product.properties.titleEmptyStateList\')"\n                    >\n                        <template #icon>\n                            \n                            {% block sw_product_properties_filled_state_body_empty_state_image %}\n                            <img\n                                :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                                :alt="$tc(\'sw-product.properties.titleEmptyStateList\')"\n                            >\n                            {% endblock %}\n                        </template>\n                    </sw-empty-state>\n                    {% endblock %}\n\n                    \n                    {% block sw_product_properties_filled_state_body_loading_state %}\n                    <sw-loader v-if="isPropertiesLoading" />\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n            </template>\n\n            \n            {% block sw_product_properties_empty_state %}\n            <sw-empty-state\n                v-if="!productHasProperties"\n                class="sw-product-properties__empty-state has--no-properties"\n                :absolute="false"\n                :show-description="false"\n                :title="$tc(\'sw-product.properties.titleEmptyState\')"\n            >\n                <template #icon>\n                    \n                    {% block sw_product_properties_empty_state_image %}\n                    <img\n                        :src="assetFilter(\'/administration/static/img/empty-states/products-empty-state.svg\')"\n                        :alt="$tc(\'sw-product.properties.titleEmptyState\')"\n                    >\n                    {% endblock %}\n                </template>\n\n                <template #actions>\n                    \n                    {% block sw_product_properties_empty_state_button %}\n                    <sw-button\n                        v-tooltip="{\n                            message: $tc(\'sw-privileges.tooltip.warning\'),\n                            disabled: acl.can(\'product.editor\'),\n                            showOnDisabledElements: true\n                        }"\n                        variant="ghost"\n                        :disabled="!acl.can(\'product.editor\') || undefined"\n                        @click="turnOnAddPropertiesModal"\n                    >\n                        {{ $tc(\'sw-product.properties.buttonAddProperties\') }}\n                    </sw-button>\n                    {% endblock %}\n                </template>\n            </sw-empty-state>\n            {% endblock %}\n        </sw-card>\n        {% endblock %}\n\n        \n        {% block sw_product_properties_add_properties_modal %}\n        <sw-product-add-properties-modal\n            v-if="showAddPropertiesModal"\n            :new-properties="newProperties"\n            :properties-available="propertiesAvailable"\n            @modal-cancel="onCancelAddPropertiesModal"\n            @modal-save="onSaveAddPropertiesModal($event, updateCurrentValue)"\n        />\n        {% endblock %}\n    </template>\n</sw-inherit-wrapper>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory","acl"],props:{disabled:{type:Boolean,required:!1,default:!1},isAssociation:{type:Boolean,required:!1,default:!0},showInheritanceSwitcher:{type:Boolean,required:!1,default:!0}},data(){return{groupIds:[],properties:[],isPropertiesLoading:!1,searchTerm:null,showAddPropertiesModal:!1,newProperties:[],propertiesAvailable:!0}},computed:{propertyGroupRepository(){return this.repositoryFactory.create("property_group")},propertyOptionRepository(){return this.repositoryFactory.create("property_group_option")},propertyGroupCriteria(){let e=new i(1,10);e.addSorting(i.sort("name","ASC",!1)),e.addFilter(i.equalsAny("id",this.groupIds)),this.searchTerm&&e.setTerm(this.searchTerm);let t=this.productProperties.getIds();return e.getAssociation("options").addFilter(i.equalsAny("id",t)),e.addFilter(i.equalsAny("options.id",t)),e},propertyColumns(){return[{property:"name",label:"sw-product.properties.columnProperty",sortable:!1,routerLink:"sw.property.detail"},{property:"values",label:"sw-product.properties.columnValue",sortable:!1}]},...p("swProductDetail",["product","parentProduct"]),...a("swProductDetail",["isLoading","isChild"]),productProperties(){return this.isChild&&this.product?.properties?.length<=0?this.parentProduct.properties:this.product.properties},assetFilter(){return Shopware.Filter.getByName("asset")},productHasProperties(){return this.product?.id&&this.groupIds.length>0}},watch:{productProperties:{immediate:!0,handler(e){e&&(this.getGroupIds(),this.getProperties())}}},created(){this.createdComponent()},methods:{createdComponent(){this.checkIfPropertiesExists()},getGroupIds(){this.product?.id&&(this.groupIds=this.productProperties.reduce((e,{groupId:t})=>(0>e.indexOf(t)&&e.push(t),e),[]))},getProperties(){return!this.product?.id||this.groupIds.length<=0?(this.properties=[],this.searchTerm=null,Promise.resolve()):(this.isPropertiesLoading=!0,this.propertyGroupRepository.search(this.propertyGroupCriteria,o.api).then(e=>{this.properties=e}).catch(()=>{this.properties=[]}).finally(()=>{this.isPropertiesLoading=!1}))},onDeletePropertyValue(e){this.productProperties.remove(e.id)},onDeleteProperty(e){this.$refs.entityListing.deleteId=null,this.$nextTick(()=>{this.productProperties.filter(({groupId:t})=>t===e.id).forEach(({id:e})=>{this.productProperties.remove(e)}),this.$refs.entityListing.resetSelection()})},onDeleteProperties(){this.$refs.entityListing.showBulkDeleteModal=!1,this.$nextTick(()=>{Object.values({...this.$refs.entityListing.selection}).forEach(e=>{e.options.forEach(e=>{this.productProperties.remove(e.id)})}),this.$refs.entityListing.resetSelection()})},onChangeSearchTerm(e){return this.searchTerm=e,this.getProperties()},turnOnAddPropertiesModal(){this.propertiesAvailable?(this.updateNewProperties(),this.showAddPropertiesModal=!0):this.$router.push({name:"sw.property.index"})},turnOffAddPropertiesModal(){this.showAddPropertiesModal=!1,this.updateNewProperties()},updateNewProperties(){this.newProperties=new s(this.productProperties.source,this.productProperties.entity,this.productProperties.context,i.fromCriteria(this.productProperties.criteria),this.productProperties,this.productProperties.total,this.productProperties.aggregations)},onCancelAddPropertiesModal(){this.turnOffAddPropertiesModal()},onSaveAddPropertiesModal(e,t){this.turnOffAddPropertiesModal(),e.length<=0||"function"!=typeof t||t.bind(this)(e)},checkIfPropertiesExists(){this.propertyOptionRepository.search(new i(1,1)).then(e=>{this.propertiesAvailable=e.total>0})}}}},78313:function(e,t,r){var n=r(822419);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),r(745346).Z("5ba346da",n,!0,{})}}]);