"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[9830],{9830:function(i,n,e){e.r(n),e.d(n,{default:function(){return s}});let{Criteria:t}=Shopware.Data,{Filter:l}=Shopware;var s={template:'\n{% block sw_product_visibility_detail %}\n<sw-grid\n    class="sw-settings-listing-visibility-detail"\n    table\n    :items="items"\n    :selectable="false"\n>\n    \n    {% block sw_settings_listing_visibility_detail_columns %}\n    <template #columns="{ item }">\n        \n        {% block sw_settings_listing_visibility_detail_columns_sales_channel %}\n        <sw-grid-column\n            :label="$tc(\'sw-product.visibility.columnSalesChannel\')"\n            flex="0.5fr"\n            align="left"\n        >\n            \n            {% block sw_settings_listing_visibility_detail_columns_sales_channel_label %}\n            <span\n                v-tooltip="{ message: item.name, disabled: item.name.length < 10 }"\n                class="sw-product-visibility-detail__name"\n            >\n                {{ truncateFilter(item.name, 30) }}\n            </span>\n            {% endblock %}\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_visibility_detail_columns_all %}\n        <sw-grid-column\n            :label="$tc(\'sw-product.visibility.columnAll\')"\n            flex="0.3fr"\n            align="left"\n        >\n            <sw-radio-field\n                :disabled="disabled"\n                :value="item.visibility"\n                :name="\'visibility\' + item.id"\n                :options="[{ value: 30 }]"\n                @update:value="changeVisibilityValue($event, item)"\n            />\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_visibility_detail_columns_search_only %}\n        <sw-grid-column\n            :label="$tc(\'sw-product.visibility.columnSearchOnly\')"\n            flex="0.7fr"\n            align="left"\n        >\n            <sw-radio-field\n                :disabled="disabled"\n                :value="item.visibility"\n                :name="\'visibility\' + item.id"\n                :options="[{ value: 20 }]"\n                @update:value="changeVisibilityValue($event, item)"\n            />\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_visibility_detail_columns_link_only %}\n        <sw-grid-column\n            :label="$tc(\'sw-product.visibility.columnLinkOnly\')"\n            flex="1fr"\n            align="left"\n        >\n            <sw-radio-field\n                type="radio"\n                :disabled="disabled"\n                :value="item.visibility"\n                :name="\'visibility\' + item.id"\n                :options="[{ value: 10 }]"\n                @update:value="changeVisibilityValue($event, item)"\n            />\n        </sw-grid-column>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_visibility_detail_pagination %}\n    <template #pagination>\n        <sw-pagination\n            :page="page"\n            :limit="limit"\n            :total="total"\n            :total-visible="10"\n            :steps="[10]"\n            @page-change="onPageChange"\n        />\n    </template>\n    {% endblock %}\n</sw-grid>\n{% endblock %}\n',inject:["repositoryFactory"],props:{disabled:{type:Boolean,required:!1,default:!1},config:{required:!0,type:Array}},data(){return{items:[],page:1,limit:10,total:0}},computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},truncateFilter(){return l.getByName("truncate")}},created(){this.createdComponent()},methods:{createdComponent(){this.onPageChange({page:this.page,limit:this.limit})},onPageChange(i){let n=(i.page-1)*i.limit;this.total=this.config.length,this.fetchSalesChannels().then(e=>{this.items=e.slice(n,n+i.limit)})},changeVisibilityValue(i,n){n.visibility=Number(i)},fetchSalesChannels(){let i=this.config.map(i=>i.id),n=new t(1,25);return n.addFilter(t.equalsAny("id",i)),this.salesChannelRepository.search(n).then(i=>this.config.map(n=>{let e=i.get(n.id);return e?{...n,name:e.name}:n}))}}}}}]);