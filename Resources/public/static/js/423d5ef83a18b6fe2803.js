(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[27937],{55443:function(){},27937:function(i,n,e){"use strict";e.r(n),e.d(n,{default:function(){return t}}),e(2426);var t={template:'\n{% block sw_product_variants_delivery_media %}\n<div class="sw-product-variants-delivery-media">\n    \n    {% block sw_product_variants_delivery_media_groups %}\n    <div class="sw-product-variants-delivery-media__groups">\n        <ul>\n            <li\n                v-for="group in selectedGroupsSorted"\n                :key="group.id"\n                class="sw-product-variants-delivery-media__groupElement"\n                role="button"\n                tabindex="0"\n                :class="{\'is--selected\': activeGroup.id == group.id}"\n                @click="activeGroup = group"\n                @keydown.enter="activeGroup = group"\n            >\n                <sw-icon\n                    name="regular-folder"\n                    size="16px"\n                    multicolor\n                />\n                {{ group.translated.name }}\n            </li>\n        </ul>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_delivery_media_media %}\n    <div\n        v-if="activeOptions.length"\n        class="sw-product-variants-delivery-media__media"\n    >\n        \n        {% block sw_product_variants_delivery_media_data_grid %}\n        <sw-data-grid\n            ref="variantsMedia"\n            :data-source="activeOptions"\n            :columns="optionColumns"\n            :show-actions="false"\n            :show-selection="false"\n            :compact-mode="false"\n            full-page\n        >\n\n            \n            {% block sw_product_variants_delivery_media_data_grid_column_name %}\n            <template\n                #column-name="{ item, isInlineEdit, compact }"\n            >\n                {{ item.option.translated.name }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_delivery_media_data_grid_column_option_media %}\n            <template #column-option.media="{ item, isInlineEdit, compact }">\n                \n                {% block sw_product_variants_delivery_media_data_grid_column_option_media_listener %}\n                <sw-upload-listener\n                    :upload-tag="item.id"\n                    @media-upload-add="onUploadsAdded"\n                    @media-upload-finish="successfulUpload"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variants_delivery_media_data_grid_column_option_media_upload %}\n                <sw-media-compact-upload-v2\n                    :source="item.mediaId"\n                    :upload-tag="item.id"\n                    :default-folder="product.getEntityName()"\n                    @media-upload-remove-image="removeMedia(item)"\n                    @selection-change="setMedia"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n        </sw-data-grid>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_delivery_media_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["repositoryFactory","mediaService"],props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data(){return{activeGroup:{},isLoading:!1}},computed:{selectedGroupsSorted(){let i=[],n=[...this.selectedGroups];return this.product.variantListingConfig.configuratorGroupConfig&&this.product.variantListingConfig.configuratorGroupConfig.length>0&&(i=this.product.variantListingConfig.configuratorGroupConfig.reduce((i,e)=>{let t=n.find(i=>i.id===e.id);return t&&(i.push(t),n.splice(n.indexOf(t),1)),i},[])),i=[...i,...n]},optionColumns(){return[{property:"name",label:"sw-product.variations.deliveryModal.mediaOptions",rawData:!0},{property:"option.media",label:"sw-product.variations.deliveryModal.media",rawData:!0}]},activeOptions(){return this.product.configuratorSettings.filter(i=>!i.isDeleted&&i.option.groupId===this.activeGroup.id)}},watch:{activeOptions(){this.$nextTick().then(()=>{this.$refs.variantsMedia&&(this.$refs.variantsMedia.compact=!1)})},activeGroup:{handler(){this.product.variantListingConfig.configuratorGroupConfig.find(i=>i.id===this.activeGroup.id)}}},methods:{async onUploadsAdded({data:i}){if(0===i.length)return;let n=i[0],e=this.activeOptions.find(i=>i.id===n.uploadTag);this.isLoading=!0,i.forEach(i=>{e.mediaId=i.targetId}),await this.mediaService.runUploads(n.uploadTag)},async successfulUpload(){this.isLoading=!1,this.$forceUpdate()},removeMedia(i){i.mediaId=null},setMedia(i,n){this.activeOptions.find(i=>i.id===n).mediaId=i[0].id},onChangeGroupListing(i){let n=this.product.variantListingConfig.configuratorGroupConfig.findIndex(i=>i.id===this.activeGroup.id);if(n>=0){let e=this.product.variantListingConfig.configuratorGroupConfig[n];this.product.variantListingConfig.configuratorGroupConfig[n]={id:e.id,expressionForListings:i,representation:e.representation}}else this.product.variantListingConfig.configuratorGroupConfig=[...this.product.variantListingConfig.configuratorGroupConfig,{id:this.activeGroup.id,expressionForListings:i,representation:"box"}]}}}},2426:function(i,n,e){var t=e(55443);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[i.id,t,""]]),t.locals&&(i.exports=t.locals),e(45346).Z("892bdc64",t,!0,{})}}]);