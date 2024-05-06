(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[72091],{85171:function(){},72091:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}}),i(25125);let{Context:n,Mixin:r}=Shopware,{EntityCollection:o,Criteria:a}=Shopware.Data,{mapPropertyErrors:s,mapState:l,mapGetters:c}=Shopware.Component.getComponentHelper();var d={template:'\n{% block sw_product_category_form %}\n<div class="sw-product-category-form">\n    <sw-container class="sw-product-category-form__description">\n        \n        {% block sw_product_category_form_visibility_title %}\n        <span class="sw-product-category-form__visibility-title">\n            {{ $tc(\'sw-product.visibility.labelVisibility\') }}\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_product_category_form_visibility_body %}\n        <p class="sw-product-category-form__visibility-body">\n            {{ $tc(\'sw-product.visibility.bodyVisibility\') }}\n        </p>\n        {% endblock %}\n\n        \n        {% block sw_product_category_form_visibility_field %}\n        <sw-inherit-wrapper\n            ref="productVisibilitiesInheritance"\n            v-model:value="product.visibilities"\n            :has-parent="!!parentProduct.id"\n            class="sw-product-category-form__visibility_field"\n            :inherited-value="parentProduct.visibilities"\n            :label="$tc(\'sw-product.visibility.labelVisibility\')"\n            :custom-remove-inheritance-function="visibilitiesRemoveInheritanceFunction"\n            is-association\n        >\n            <template #content="{ currentValue, isInherited, updateCurrentValue }">\n                <sw-product-visibility-select\n                    v-if="!loading.product && !loading.parentProduct && multiSelectVisible"\n                    ref="productVisibility"\n                    :key="isInherited"\n                    class="sw-product-detail__select-visibility"\n                    :entity-collection="currentValue"\n                    :placeholder="$tc(\'sw-product.visibility.placeholderVisibility\')"\n                    :disabled="isInherited || !allowEdit"\n                    @update:entity-collection="updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_product_category_form_visibility_field_link %}\n    <sw-container\n        columns="repeat(auto-fit, minmax(250px, 1fr))"\n        align="center"\n    >\n        \n        {% block sw_product_category_form_active_field %}\n        <sw-inherit-wrapper\n            v-model:value="product.active"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.active"\n        >\n            <template #content="props">\n                <sw-switch-field\n                    class="sw-field--product-active no-margin"\n                    :error="productActiveError"\n                    :map-inheritance="props"\n                    :label="$tc(\'sw-product.settingsForm.labelActive\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n        <a\n            v-if="hasSelectedVisibilities && showModeSetting"\n            class="sw-card__quick-link advanced-visibility"\n            style="text-align: right; display: block"\n            role="button"\n            tabindex="0"\n            @click="displayAdvancedVisibility"\n            @keydown.enter="displayAdvancedVisibility"\n        >\n            {{ $tc(\'sw-product.visibility.linkAdvancedVisibility\') }} <sw-icon\n                name="regular-long-arrow-right"\n                small\n            />\n        </a>\n    </sw-container>\n\n    <sw-modal\n        v-if="displayVisibilityDetail"\n        :title="$tc(\'sw-product.visibility.textHeadline\')"\n        class="sw-product-category-form__visibility_modal"\n        variant="large"\n        @modal-close="closeAdvancedVisibility"\n    >\n        <p>{{ $tc(\'sw-product.visibility.visibilityModalDescription\') }}</p>\n\n        <sw-product-visibility-detail :disabled="!allowEdit" />\n\n        <template #modal-footer>\n            <sw-button\n                variant="primary"\n                size="small"\n                @click="closeAdvancedVisibility"\n            >\n                {{ $tc(\'sw-product.visibility.closeModal\') }}\n            </sw-button>\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_product_category_form_category_field %}\n    <sw-container\n        rows="2em 4em 4em"\n        class="sw-product-feature-set-form__description"\n    >\n        \n        {% block sw_product_category_form_categories_title %}\n        <span class="sw-product-category-form__visibility-title">\n            {{ $tc(\'sw-product.categoryForm.categoriesTitle\') }}\n        </span>\n        {% endblock %}\n\n        \n        {% block sw_product_category_form_categories_body %}\n        <p class="sw-product-category-form__categories-body">\n            {{ $tc(\'sw-product.categoryForm.descriptionCategories\') }}\n        </p>\n        <p class="sw-product-category-form__categories-body">\n            {{ $tc(\'sw-product.categoryForm.descriptionTags\') }}\n        </p>\n        {% endblock %}\n        <sw-inherit-wrapper\n            v-model:value="product.categories"\n            is-association\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.categories"\n            :label="$tc(\'sw-product.categoryForm.labelCategory\')"\n        >\n            <template #content="{ currentValue, isInherited }">\n                <sw-category-tree-field\n                    :key="isInherited"\n                    class="sw-product-detail__select-category"\n                    :categories-collection="currentValue ? currentValue : []"\n                    :disabled="isInherited || !allowEdit"\n                    :placeholder="$tc(\'sw-product.categoryForm.placeholderCategory\')"\n                />\n            </template>\n        </sw-inherit-wrapper>\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_product_category_form_tags_field %}\n    <sw-inherit-wrapper\n        v-if="showModeSetting"\n        v-model:value="product.tags"\n        class="sw-product-category-form__tag-field-wrapper"\n        :inherited-value="parentProduct.tags"\n        :has-parent="!!parentProduct.id"\n        is-association\n        :help-text="$tc(\'sw-product.categoryForm.helpTextTags\')"\n        :label="$tc(\'global.sw-tag-field.title\')"\n    >\n\n        <template #content="{ currentValue, isInherited, updateCurrentValue }">\n            <sw-entity-tag-select\n                v-if="!loading.product && !loading.parentProduct"\n                :key="isInherited"\n                class="sw-product-category-form__tag-field"\n                :disabled="isInherited || !allowEdit"\n                :placeholder="$tc(\'sw-product.categoryForm.placeholderTags\')"\n                :error="productTagsError"\n                :entity-collection="currentValue ? currentValue : {}"\n                @update:entity-collection="updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    \n    {% block sw_product_category_form_search_keyword_field %}\n    <sw-inherit-wrapper\n        v-if="showModeSetting"\n        v-model:value="product.customSearchKeywords"\n        :help-text="$tc(\'sw-product.categoryForm.helpTextSearchKeyword\')"\n        :inherited-value="parentProduct.customSearchKeywords"\n        :has-parent="!!parentProduct.id"\n        :label="$tc(\'sw-product.categoryForm.labelSearchKeyword\')"\n    >\n        <template #content="{ currentValue, isInherited, updateCurrentValue }">\n            <sw-multi-tag-select\n                class="sw-product-category-form__search-keyword-field"\n                :value="currentValue ? currentValue : []"\n                :placeholder="$tc(\'sw-product.categoryForm.placeholderSearchKeywords\')"\n                @update:value="updateCurrentValue"\n            >\n                <template #message-add-data>\n                    <span>{{ $tc(\'sw-product.categoryForm.textAddSearchKeyword\') }}</span>\n                </template>\n                <template #message-enter-valid-data>\n                    <span>{{ $tc(\'sw-product.categoryForm.textEnterValidSearchKeyword\') }}</span>\n                </template>\n            </sw-multi-tag-select>\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","systemConfigApiService","feature"],mixins:[r.getByName("notification")],props:{allowEdit:{type:Boolean,required:!1,default:!0}},data(){return{displayVisibilityDetail:!1,multiSelectVisible:!0,salesChannel:null,defaultVisibility:30}},computed:{...l("swProductDetail",["product","parentProduct","localMode","loading"]),...c("swProductDetail",["isChild","showModeSetting"]),...s("product",["tags","active"]),hasSelectedVisibilities(){return!!this.product&&!!this.product.visibilities&&this.product.visibilities.length>0},productVisibilityRepository(){return this.repositoryFactory.create(this.product.visibilities.entity)},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")}},created(){this.createdComponent()},methods:{createdComponent(){this.salesChannel=new o("/sales-channel","sales_channel",Shopware.Context.api,new a(1,25))},displayAdvancedVisibility(){this.displayVisibilityDetail=!0},closeAdvancedVisibility(){this.displayVisibilityDetail=!1},visibilitiesRemoveInheritanceFunction(e){return e.forEach(({productVersionId:e,salesChannelId:t,salesChannel:i,visibility:r})=>{let o=this.productVisibilityRepository.create(n.api);Object.assign(o,{productId:this.product.id,productVersionId:e,salesChannelId:t,salesChannel:i,visibility:r}),this.product.visibilities.push(o)}),this.$refs.productVisibilitiesInheritance.forceInheritanceRemove=!0,this.product.visibilities}}}},25125:function(e,t,i){var n=i(85171);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),i(45346).Z("780679bc",n,!0,{})}}]);