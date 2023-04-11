(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[372],{"4nj8":function(n,i,t){"use strict";t.r(i);var e=t("HZZ/"),o=t.n(e),a=t("QGb3"),r=t.n(a),d=t("hJxD"),s=t.n(d);t("z06m"),i.default={template:'\n{% block sw_product_variants_delivery_media %}\n<div class="sw-product-variants-delivery-media">\n    \n    {% block sw_product_variants_delivery_media_groups %}\n    <div class="sw-product-variants-delivery-media__groups">\n        <ul>\n            \n            <li\n                v-for="group in selectedGroupsSorted"\n                :key="group.id"\n                class="sw-product-variants-delivery-media__groupElement"\n                :class="{\'is--selected\': activeGroup.id == group.id}"\n                @click="activeGroup = group"\n            >\n                <sw-icon\n                    name="regular-folder"\n                    size="16px"\n                    multicolor\n                />\n                {{ group.translated.name }}\n            </li>\n        </ul>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_delivery_media_media %}\n    <div\n        v-if="activeOptions.length"\n        class="sw-product-variants-delivery-media__media"\n    >\n        \n        {% block sw_product_variants_delivery_media_data_grid %}\n        <sw-data-grid\n            ref="variantsMedia"\n            :data-source="activeOptions"\n            :columns="optionColumns"\n            :show-actions="false"\n            :show-selection="false"\n            :compact-mode="false"\n            full-page\n        >\n\n            \n            {% block sw_product_variants_delivery_media_data_grid_column_name %}\n            <template\n                #column-name="{ item, isInlineEdit, compact }"\n            >\n                {{ item.option.translated.name }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_product_variants_delivery_media_data_grid_column_option_media %}\n            <template #column-option.media="{ item, isInlineEdit, compact }">\n                \n                {% block sw_product_variants_delivery_media_data_grid_column_option_media_listener %}\n                <sw-upload-listener\n                    :upload-tag="item.id"\n                    @media-upload-add="onUploadsAdded"\n                    @media-upload-finish="successfulUpload"\n                />\n                {% endblock %}\n\n                \n                {% block sw_product_variants_delivery_media_data_grid_column_option_media_upload %}\n                <sw-media-compact-upload-v2\n                    :source="item.mediaId"\n                    :upload-tag="item.id"\n                    :default-folder="product.getEntityName()"\n                    @media-upload-remove-image="removeMedia(item)"\n                    @selection-change="setMedia"\n                />\n                {% endblock %}\n            </template>\n            {% endblock %}\n\n        </sw-data-grid>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_product_variants_delivery_media_loader %}\n    <sw-loader v-if="isLoading" />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["repositoryFactory","mediaService"],props:{product:{type:Object,required:!0},selectedGroups:{type:Array,required:!0}},data:function(){return{activeGroup:{},isLoading:!1}},computed:{selectedGroupsSorted:function(){var n=[],i=r()(this.selectedGroups);return this.product.variantListingConfig.configuratorGroupConfig&&this.product.variantListingConfig.configuratorGroupConfig.length>0&&(n=this.product.variantListingConfig.configuratorGroupConfig.reduce((function(n,t){var e=i.find((function(n){return n.id===t.id}));return e&&(n.push(e),i.splice(i.indexOf(e),1)),n}),[])),n=[].concat(r()(n),r()(i))},optionColumns:function(){return[{property:"name",label:"sw-product.variations.deliveryModal.mediaOptions",rawData:!0},{property:"option.media",label:"sw-product.variations.deliveryModal.media",rawData:!0}]},activeOptions:function(){var n=this;return this.product.configuratorSettings.filter((function(i){return!i.isDeleted&&i.option.groupId===n.activeGroup.id}))}},watch:{activeOptions:function(){var n=this;this.$nextTick().then((function(){n.$refs.variantsMedia&&(n.$refs.variantsMedia.compact=!1)}))},activeGroup:{handler:function(){var n=this;this.product.variantListingConfig.configuratorGroupConfig.find((function(i){return i.id===n.activeGroup.id}))}}},methods:{onUploadsAdded:function(n){var i=this;return o()(s.a.mark((function t(){var e,o,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e=n.data).length){t.next=3;break}return t.abrupt("return");case 3:return o=e[0],a=i.activeOptions.find((function(n){return n.id===o.uploadTag})),i.isLoading=!0,e.forEach((function(n){a.mediaId=n.targetId})),t.next=9,i.mediaService.runUploads(o.uploadTag);case 9:case"end":return t.stop()}}),t)})))()},successfulUpload:function(){var n=this;return o()(s.a.mark((function i(){return s.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:n.isLoading=!1,n.$forceUpdate();case 2:case"end":return i.stop()}}),i)})))()},removeMedia:function(n){n.mediaId=null},setMedia:function(n,i){this.activeOptions.find((function(n){return n.id===i})).mediaId=n[0].id},onChangeGroupListing:function(n){var i=this,t=this.product.variantListingConfig.configuratorGroupConfig.findIndex((function(n){return n.id===i.activeGroup.id}));if(t>=0){var e=this.product.variantListingConfig.configuratorGroupConfig[t];this.product.variantListingConfig.configuratorGroupConfig[t]={id:e.id,expressionForListings:n,representation:e.representation}}else this.product.variantListingConfig.configuratorGroupConfig=[].concat(r()(this.product.variantListingConfig.configuratorGroupConfig),[{id:this.activeGroup.id,expressionForListings:n,representation:"box"}])}}}},ZvFF:function(n,i,t){},z06m:function(n,i,t){var e=t("ZvFF");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,t("ydqr").default)("7f68380e",e,!0,{})}}]);