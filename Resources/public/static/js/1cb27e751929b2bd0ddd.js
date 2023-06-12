(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[580],{"U+iW":function(e,t,n){"use strict";n.r(t);var r=n("J58c"),o=n.n(r);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=Shopware.Mixin,s=Shopware.Data.Criteria,l=Shopware.Component.getComponentHelper(),p=l.mapPropertyErrors,d=l.mapState,u=l.mapGetters;t.default={template:'\n{% block sw_product_seo_form %}\n<div class="sw-product-seo-form">\n    \n    {% block sw_product_seo_form_meta_title %}\n    <sw-inherit-wrapper\n        v-model="product.metaTitle"\n        :has-parent="hasParent"\n        :label="$tc(\'sw-product.seoForm.labelMetaTitle\')"\n        :help-text="$tc(\'sw-product.seoForm.helpTextMetaTitle\')"\n        :inherited-value="parentProduct.metaTitle"\n    >\n        <template #content="props">\n            <sw-field\n                type="text"\n                :placeholder="$tc(\'sw-product.seoForm.placeholderMetaTitle\')"\n                :error="productMetaTitleError"\n                :disabled="props.isInherited || !allowEdit"\n                :value="props.currentValue"\n                @change="props.updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    \n    {% block sw_product_seo_form_meta_description %}\n    <sw-inherit-wrapper\n        v-model="product.metaDescription"\n        :has-parent="hasParent"\n        :label="$tc(\'sw-product.seoForm.labelMetaDescription\')"\n        :help-text="$tc(\'sw-product.seoForm.helpTextMetaDescription\')"\n        :inherited-value="parentProduct.metaDescription"\n    >\n        <template #content="props">\n            <sw-field\n                type="textarea"\n                :placeholder="$tc(\'sw-product.seoForm.placeholderMetaDescription\')"\n                :error="productMetaDescriptionError"\n                :disabled="props.isInherited || !allowEdit"\n                :value="props.currentValue"\n                @change="props.updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    \n    {% block sw_product_seo_form_keywords %}\n    <sw-inherit-wrapper\n        v-model="product.keywords"\n        :has-parent="hasParent"\n        :label="$tc(\'sw-product.seoForm.labelKeywords\')"\n        :help-text="$tc(\'sw-product.seoForm.helpTextKeywords\')"\n        :inherited-value="parentProduct.keywords"\n    >\n        <template #content="props">\n            <sw-field\n                type="text"\n                :placeholder="$tc(\'sw-product.seoForm.placeholderKeywords\')"\n                :error="productKeywordsError"\n                :disabled="props.isInherited || !allowEdit"\n                :value="props.currentValue"\n                @change="props.updateCurrentValue"\n            />\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    \n    {% block sw_product_seo_form_canonical_url %}\n    <template v-if="!hasParent && hasVariants">\n\n        \n        {% block sw_product_seo_form_canonical_url_switch %}\n        <sw-switch-field\n            v-model="canonicalProductSwitchEnabled"\n            :label="$tc(\'sw-product.seoForm.labelCanonicalUrlMode\')"\n        />\n        {% endblock %}\n\n        \n        {% block sw_product_seo_form_canonical_url_select %}\n        <sw-single-select\n            ref="canonicalProductSelect"\n            v-model="product.canonicalProductId"\n            :options="variants"\n            :disabled="!canonicalProductSwitchEnabled"\n            value-property="id"\n            :label="$tc(\'sw-product.seoForm.labelCanonicalProduct\')"\n            :placeholder="$tc(\'sw-product.seoForm.placeholderCanonicalProduct\')"\n            show-clearable-button\n            @search="onSearch"\n        >\n\n            <template #selection-label-property="{ item }">\n                \n                {% block sw_product_seo_form_canonical_url_select_selection %}\n                <sw-product-variant-info\n                    :variations="item.variation"\n                    :show-tooltip="false"\n                >\n                    {{ getItemName(item) }}\n                </sw-product-variant-info>\n                {% endblock %}\n            </template>\n\n            <template #result-label-property="{ item }">\n                \n                {% block sw_product_seo_form_canonical_url_select_result %}\n                <sw-product-variant-info\n                    :variations="item.variation"\n                    :show-tooltip="false"\n                >\n                    {{ getItemName(item) }}\n                </sw-product-variant-info>\n                {% endblock %}\n            </template>\n        </sw-single-select>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[i.getByName("placeholder")],props:{allowEdit:{type:Boolean,required:!1,default:!0}},data:function(){return{variants:[],searchTerm:"",canonicalProductSwitchEnabled:!1,switchStateHasBeenSet:!1,shouldKeepSelectValue:!1,selectValue:null}},computed:c(c(c({productRepository:function(){return this.repositoryFactory.create("product")},hasParent:function(){return!!this.parentProduct.id},hasVariants:function(){return this.product.childCount>0},variantCriteria:function(){var e=new s(1,25);(e.addAssociation("options.group"),e.addFilter(s.equals("parentId",this.product.id)),this.searchTerm)&&(e.setTerm(this.searchTerm),this.searchTerm.split(" ").filter((function(e){return""!==e})).forEach((function(t){e.addQuery(s.equals("product.options.name",t),3500),e.addQuery(s.contains("product.options.name",t),500)})));return e},isCanonicalUrlSelectLoading:function(){return this.variants.length<1},variantsWithResetOption:function(){var e=this.variants;return e.unshift({id:null,name:this.$tc("sw-product.seoForm.placeholderCanonicalProduct")}),e}},u("swProductDetail",["isLoading"])),d("swProductDetail",["product","parentProduct"])),p("product",["keywords","metaDescription","metaTitle"])),watch:{"product.canonicalProductId":{handler:function(e){void 0===e||this.switchStateHasBeenSet||(this.canonicalProductSwitchEnabled=!!e,this.switchStateHasBeenSet=!0)},immediate:!0},"product.id":{handler:function(e){e&&this.fetchVariants()},immediate:!0},canonicalProductSwitchEnabled:function(e){if(this.shouldKeepSelectValue){if(e)return this.product.canonicalProductId=this.selectValue,void(this.selectValue=null);this.selectValue=this.product.canonicalProductId,this.product.canonicalProductId=null}else this.shouldKeepSelectValue=!0},isLoading:function(e){e||(this.selectValue=this.product.canonicalProductId)}},methods:{fetchVariants:function(){var e=this;return this.productRepository.search(this.variantCriteria).then((function(t){return e.variants=t,t}))},getItemName:function(e){return e.id?e.translated.name||this.product.translated.name:e.name},onSearch:function(e){var t=this;this.searchTerm=e,this.fetchVariants().then((function(e){t.$refs.canonicalProductSelect.results=e,t.$nextTick().then((function(){t.$refs.canonicalProductSelect.resetActiveItem()}))}))}}}}}]);