(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[297],{"7xON":function(t,e,i){},"B+51":function(t,e,i){"use strict";i.r(e);i("EhoF");var s=Shopware.Application,n=Shopware.Utils.types;e.default={template:'\n{% block sw_media_quickinfo_usage %}\n<div class="sw-media-quickinfo-usage">\n    \n    {% block sw_media_quickinfo_usage_loader %}\n    <sw-loader\n        v-if="isLoading"\n        size="30px"\n        class="sw-media-quickinfo-usage__loading-indicator"\n    />\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_usage_empty_state %}\n    <sw-alert\n        v-else-if="isNotUsed"\n        class="sw-media-quickinfo-usage__info-not-used"\n        variant="info"\n        :title="$tc(\'sw-media.sidebar.usage.titleMediaNotUsed\')"\n    >\n        {{ $tc(\'sw-media.sidebar.usage.labelMediaNotUsed\') }}\n    </sw-alert>\n    {% endblock %}\n\n    \n    {% block sw_media_quickinfo_usage_list %}\n    <ul\n        v-else\n        class="sw-media-quickinfo-usage__list"\n    >\n        \n        {% block sw_media_quickinfo_usage_item %}\n        <router-link\n            v-for="usage in getUsages"\n            :key="usage.link.id"\n            :to="{ name: usage.link.name, params: { id: usage.link.id } }"\n            :target="routerLinkTarget"\n        >\n            <li\n                v-tooltip="{\n                    showDelay: 300,\n                    hideDelay: 5,\n                    message: usage.tooltip\n                }"\n                class="sw-media-quickinfo-usage__item"\n            >\n                \n                {% block sw_media_quickinfo_usage_item_icon %}\n                <div class="sw-media-quickinfo-usage__label">\n                    <sw-icon\n                        :name="usage.icon.name"\n                        :color="usage.icon.color"\n                        small\n                    />\n                </div>\n                {% endblock %}\n\n                \n                {% block sw_media_quickinfo_usage_item_label %}\n                <div class="sw-media-quickinfo-usage__label">\n                    {{ usage.name }}\n                </div>\n                {% endblock %}\n            </li>\n        </router-link>\n        {% endblock %}\n    </ul>\n    {% endblock %}\n</div>\n{% endblock %}\n\n',props:{item:{required:!0,type:Object,validator:function(t){return"media"===t.getEntityName()}},routerLinkTarget:{required:!1,type:String,default:""}},data:function(){return{products:[],categories:[],manufacturers:[],mailTemplates:[],documentBaseConfigs:[],avatarUsers:[],paymentMethods:[],shippingMethods:[],layouts:[],isLoading:!1}},computed:{moduleFactory:function(){return s.getContainer("factory").module},getUsages:function(){var t=this,e=[];return this.products.forEach((function(i){var s=i.product;e.push(t.getProductUsage(s))})),this.categories.forEach((function(i){e.push(t.getCategoryUsage(i))})),this.manufacturers.forEach((function(i){e.push(t.getManufacturerUsage(i))})),this.mailTemplates.forEach((function(i){var s=i.mailTemplate;e.some((function(t){return t.link.id===s.id}))||e.push(t.getMailTemplateUsage(s))})),this.documentBaseConfigs.forEach((function(i){e.push(t.getDocumentBaseConfigUsage(i))})),this.paymentMethods.forEach((function(i){e.push(t.getPaymentMethodUsage(i))})),this.shippingMethods.forEach((function(i){e.push(t.getShippingMethodUsage(i))})),this.layouts.forEach((function(i){e.push(t.getLayoutUsage(i))})),n.isEmpty(this.avatarUsers)||this.avatarUsers.forEach((function(i){e.push(t.getAvatarUserUsage(i))})),e},isNotUsed:function(){return 0===this.getUsages.length}},watch:{item:function(){this.createdComponent()}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.loadProductAssociations(),this.loadCategoryAssociations(),this.loadManufacturerAssociations(),this.loadMailTemplateAssociations(),this.loadDocumentBaseConfigAssociations(),this.loadAvatarUserAssociations(),this.loadPaymentMethodAssociations(),this.loadShippingMethodAssociations(),this.loadLayoutAssociations()},loadProductAssociations:function(){this.products=this.item.productMedia},loadCategoryAssociations:function(){this.categories=this.item.categories},loadManufacturerAssociations:function(){this.manufacturers=this.item.productManufacturers},loadMailTemplateAssociations:function(){this.mailTemplates=this.item.mailTemplateMedia},loadDocumentBaseConfigAssociations:function(){this.documentBaseConfigs=this.item.documentBaseConfigs},loadAvatarUserAssociations:function(){this.avatarUsers=this.item.avatarUsers},loadPaymentMethodAssociations:function(){this.paymentMethods=this.item.paymentMethods},loadShippingMethodAssociations:function(){this.shippingMethods=this.item.shippingMethods},loadLayoutAssociations:function(){var t=this;this.layouts=[],this.item.cmsBlocks.forEach((function(e){t.isExistedCmsMedia(e.section.pageId)||t.layouts.push({id:e.section.pageId,name:e.section.page.translated.name})})),this.item.cmsSections.forEach((function(e){t.isExistedCmsMedia(e.pageId)||t.layouts.push({id:e.pageId,name:e.page.translated.name})})),this.item.cmsPages.forEach((function(e){t.isExistedCmsMedia(e.id)||t.layouts.push({id:e.id,name:e.translated.name})}))},isExistedCmsMedia:function(t){return this.layouts.some((function(e){return e.id===t}))},getProductUsage:function(t){return{name:t.translated.name,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInProducts"),link:{name:"sw.product.detail",id:t.id},icon:this.getIconForModule("sw-product")}},getCategoryUsage:function(t){return{name:t.translated.name,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInCategories"),link:{name:"sw.category.detail",id:t.id},icon:this.getIconForModule("sw-category")}},getManufacturerUsage:function(t){return{name:t.translated.name,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInManufacturers"),link:{name:"sw.manufacturer.detail",id:t.id},icon:this.getIconForModule("sw-manufacturer")}},getMailTemplateUsage:function(t){return{name:t.translated.description,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInMailTemplate"),link:{name:"sw.mail.template.detail",id:t.id},icon:this.getIconForModule("sw-mail-template")}},getDocumentBaseConfigUsage:function(t){return{name:t.name,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInDocument"),link:{name:"sw.settings.document.detail",id:t.id},icon:this.getIconForModule("sw-settings-document")}},getAvatarUserUsage:function(t){return{name:t.username,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInUser"),link:{name:"sw.settings.user.detail",id:t.id},icon:this.getIconForModule("sw-settings-user")}},getPaymentMethodUsage:function(t){return{name:t.translated.distinguishableName,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundInPayment"),link:{name:"sw.settings.payment.detail",id:t.id},icon:this.getIconForModule("sw-settings-payment")}},getShippingMethodUsage:function(t){return{name:t.translated.name,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundShipping"),link:{name:"sw.settings.shipping.detail",id:t.id},icon:this.getIconForModule("sw-settings-shipping")}},getLayoutUsage:function(t){return{name:t.name,tooltip:this.$tc("sw-media.sidebar.usage.tooltipFoundLayout"),link:{name:"sw.cms.detail",id:t.id},icon:this.getIconForModule("sw-cms")}},getIconForModule:function(t){var e=this.moduleFactory.getModuleRegistry().get(t);return{name:e.manifest.icon,color:e.manifest.color}}}}},EhoF:function(t,e,i){var s=i("7xON");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i("ydqr").default)("35a8ba4b",s,!0,{})}}]);