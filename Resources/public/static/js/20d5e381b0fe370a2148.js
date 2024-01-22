(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[64957],{4946:function(){},64957:function(n,i,e){"use strict";e.r(i),e.d(i,{default:function(){return t}}),e(46976);let{mapState:l}=Shopware.Component.getComponentHelper();var t={template:'\n{% block sw_product_visibility_detail %}\n<sw-grid\n    table\n    :items="items"\n    :selectable="false"\n>\n    \n    {% block sw_product_visibility_detail_columns %}\n    <template\n        #columns="{ item }"\n    >\n        \n        {% block sw_product_visibility_detail_columns_sales_channel %}\n        <sw-grid-column flex="minmax(100px, auto)">\n            \n            {% block sw_product_visibility_detail_columns_sales_channel_label %}\n            <span\n                v-if="item.salesChannelInternal"\n                class="sw-select__selection-item"\n            >\n                {{ item.salesChannelInternal.translated.name }}\n            </span>\n            <span v-else>\n                {{ item.salesChannel.translated.name }}\n            </span>\n            {% endblock %}\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_product_visibility_detail_columns_all %}\n        <sw-grid-column\n            flex="0.5fr"\n            :label="$tc(\'sw-product.visibility.columnAll\')"\n            align="center"\n        >\n            <sw-radio-field\n                :disabled="disabled"\n                :value="item.visibility"\n                :name="\'visibility\' + item.id"\n                :options="[{ value: 30 }]"\n                @update:value="changeVisibilityValue($event, item)"\n            />\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_product_visibility_detail_columns_search_only %}\n        <sw-grid-column\n            flex="1fr"\n            :label="$tc(\'sw-product.visibility.columnSearchOnly\')"\n            align="center"\n        >\n            <sw-radio-field\n                :disabled="disabled"\n                :value="item.visibility"\n                :name="\'visibility\' + item.id"\n                :options="[{ value: 20 }]"\n                @update:value="changeVisibilityValue($event, item)"\n            />\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_product_visibility_detail_columns_link_only %}\n        <sw-grid-column\n            flex="1fr"\n            :label="$tc(\'sw-product.visibility.columnLinkOnly\')"\n            align="center"\n        >\n            <sw-radio-field\n                :disabled="disabled"\n                :value="item.visibility"\n                :name="\'visibility\' + item.id"\n                :options="[{ value: 10 }]"\n                @update:value="changeVisibilityValue($event, item)"\n            />\n        </sw-grid-column>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_product_visibility_detail_pagination %}\n    <template #pagination>\n        <sw-pagination\n            :page="page"\n            :limit="limit"\n            :total="total"\n            :total-visible="10"\n            :steps="[10]"\n            @page-change="onPageChange"\n        />\n    </template>\n    {% endblock %}\n</sw-grid>\n{% endblock %}\n',props:{disabled:{type:Boolean,required:!1,default:!1}},data(){return{items:[],page:1,limit:10,total:0}},computed:{...l("swProductDetail",["product"])},created(){this.createdComponent()},methods:{createdComponent(){this.onPageChange({page:this.page,limit:this.limit})},onPageChange(n){let i=(n.page-1)*n.limit,e=this.product.visibilities.filter(n=>!n.isDeleted);this.total=e.length,this.items=e.slice(i,i+n.limit)},changeVisibilityValue(n,i){i.visibility=Number(n)}}}},46976:function(n,i,e){var l=e(4946);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[n.id,l,""]]),l.locals&&(n.exports=l.locals),e(45346).Z("43420b0a",l,!0,{})}}]);