(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[76014],{40450:function(){},76014:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}}),r(32875);let{Criteria:n}=Shopware.Data,{Context:a,Mixin:i}=Shopware,{mapPropertyErrors:o,mapState:l}=Shopware.Component.getComponentHelper();var s={template:'\n{% block sw_product_basic_form %}\n<div class="product-basic-form">\n    \n    {% block sw_product_basic_form_title_field %}\n    <sw-inherit-wrapper\n        v-model:value="product.name"\n        :has-parent="!!parentProduct.id"\n        :inherited-value="getInheritValue(\'translated\', \'name\')"\n    >\n        <template #content="props">\n\n            <sw-text-field\n                :map-inheritance="props"\n                :value="props.currentValue"\n                :disabled="props.isInherited || !allowEdit"\n                :label="$tc(\'sw-product.basicForm.labelTitle\')"\n                :required="isTitleRequired"\n                name="sw-field--product-name"\n                :error="productNameError"\n                :placeholder="placeholder(product, \'name\', $tc(\'sw-product.basicForm.placeholderName\'))"\n                @update:value="props.updateCurrentValue"\n            />\n\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    <sw-container\n        columns="2fr 1fr"\n        gap="0px 30px"\n    >\n        \n        {% block sw_product_basic_form_manufacturer_field %}\n        <sw-inherit-wrapper\n            v-model:value="product.manufacturerId"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.manufacturerId"\n            :label="$tc(\'sw-product.basicForm.labelManufacturer\')"\n        >\n            <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n                <sw-entity-single-select\n                    id="manufacturerId"\n                    :key="isInherited"\n                    :value="currentValue"\n                    entity="product_manufacturer"\n                    :disabled="isInherited || !allowEdit"\n                    class="sw-select-product__select_manufacturer"\n                    :error="productManufacturerIdError"\n                    :placeholder="$tc(\'sw-product.basicForm.placeholderManufacturer\')"\n                    show-clearable-button\n                    allow-entity-creation\n                    :entity-creation-label="$tc(\'sw-product.basicForm.labelManufacturerCreation\')"\n                    @update:value="updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n\n        \n        {% block sw_product_basic_form_id_field %}\n        <sw-text-field\n            v-model:value="product.productNumber"\n            :error="productProductNumberError"\n            :disabled="!allowEdit"\n            :label="$tc(\'sw-product.basicForm.labelProductNumber\')"\n            :help-text="productNumberHelpText"\n        />\n        {% endblock %}\n    </sw-container>\n\n    \n    {% block sw_product_basic_form_description_field %}\n    <sw-inherit-wrapper\n        v-model:value="product.description"\n        class="sw-product-basic-form__inheritance-wrapper-description"\n        :has-parent="!!parentProduct.id"\n        :inherited-value="getInheritValue(\'translated\', \'description\')"\n        :label="$tc(\'sw-product.basicForm.labelDescription\')"\n    >\n        <template #content="{ currentValue, updateCurrentValue, isInherited }">\n\n            <sw-text-editor\n                :key="isInherited"\n                :placeholder="placeholder(product, \'description\', $tc(\'sw-product.basicForm.placeholderDescriptionLong\'))"\n                :error="productDescriptionError"\n                :disabled="isInherited || !allowEdit"\n                :value="currentValue"\n                sanitize-input\n                sanitize-field-name="product_translation.description"\n                @update:value="updateCurrentValue"\n            />\n\n        </template>\n    </sw-inherit-wrapper>\n    {% endblock %}\n\n    <div class="product-basic-form__switches">\n\n        \n        {% block sw_product_settings_form_mark_as_topseller_field %}\n        <sw-inherit-wrapper\n            v-show="showSettingsInformation"\n            v-model:value="product.markAsTopseller"\n            class="sw-product-basic-form__promotion-switch"\n            :has-parent="!!parentProduct.id"\n            :inherited-value="parentProduct.markAsTopseller"\n        >\n            <template #content="props">\n\n                <sw-switch-field\n                    :error="productMarkAsTopsellerError"\n                    :map-inheritance="props"\n                    :help-text="highlightHelpText"\n                    :label="$tc(\'sw-product.settingsForm.labelMarkAsTopseller\')"\n                    :disabled="props.isInherited || !allowEdit"\n                    :value="props.currentValue"\n                    @update:value="props.updateCurrentValue"\n                />\n\n            </template>\n        </sw-inherit-wrapper>\n        {% endblock %}\n    </div>\n</div>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[i.getByName("placeholder")],props:{allowEdit:{type:Boolean,required:!1,default:!0},showSettingsInformation:{type:Boolean,required:!1,default:!0}},data(){return{productNumberRangeId:null}},computed:{...l("swProductDetail",["product","parentProduct","loading"]),...o("product",["name","description","productNumber","manufacturerId","active","markAsTopseller"]),numberRangeRepository(){return this.repositoryFactory.create("number_range")},isTitleRequired(){return Shopware.State.getters["context/isSystemDefaultLanguage"]},productNumberRangeLink(){return this.productNumberRangeId?{name:"sw.settings.number.range.detail",params:{id:this.productNumberRangeId}}:{name:"sw.settings.number.range.index"}},productNumberHelpText(){return this.$tc("sw-product.basicForm.productNumberHelpText.label",0,{link:`<sw-internal-link
                           :router-link=${JSON.stringify(this.productNumberRangeLink)}
                           :inline="true">
                           ${this.$tc("sw-product.basicForm.productNumberHelpText.linkText")}
                       </sw-internal-link>`})},highlightHelpText(){return this.$tc("sw-product.basicForm.highlightHelpText.label",0,{themesLink:`<sw-internal-link
                                 :router-link=${JSON.stringify({name:"sw.theme.manager.index"})}
                                 :inline="true">
                                 ${this.$tc("sw-product.basicForm.highlightHelpText.themeLinkText")}
                             </sw-internal-link>`,snippetLink:`<sw-internal-link
                                  :router-link=${JSON.stringify({name:"sw.settings.snippet.detail",params:{key:"listing.boxLabelTopseller"}})}
                                  :inline="true">
                                  ${this.$tc("sw-product.basicForm.highlightHelpText.snippetLinkText")}
                              </sw-internal-link>`})},numberRangeCriteria(){let e=new n(1,25);return e.addFilter(n.equals("type.technicalName","product")),e.addFilter(n.equals("global",!0)),e}},created(){this.createdComponent()},methods:{createdComponent(){this.loadProductNumberRangeId()},updateIsTitleRequired(){this.isTitleRequired=Shopware.Context.api.languageId===Shopware.Context.api.systemLanguageId},getInheritValue(e,t){let r=this.parentProduct;return r[e]?r[e].hasOwnProperty(t)?r[e][t]:r[e]:null},loadProductNumberRangeId(){return this.numberRangeRepository.searchIds(this.numberRangeCriteria,a.api).then(e=>{this.productNumberRangeId=e.data[0]})}}}},32875:function(e,t,r){var n=r(40450);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),r(45346).Z("4b2fb50a",n,!0,{})}}]);