(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[590],{kZs0:function(n,e,t){"use strict";t.r(e);var o=Shopware.Data.Criteria;e.default={template:'\n{% block sw_promotion_v2_sales_channel_selection %}\n<sw-multi-select\n    {% if VUE3 %}\n    v-model:value="salesChannelIds"\n    {% else %}\n    v-model="salesChannelIds"\n    {% endif %}\n    v-bind="$attrs"\n    :options="salesChannels"\n    value-property="id"\n    label-property="name"\n>\n\n    \n    {% block sw_promotion_v2_sales_channel_selection_label %}\n    <template #selection-label-property="{ item }">\n        {{ item.name || item.translated.name }}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_sales_channel_selection_result_label %}\n    <template #result-label-property="{ item }">\n        {{ item.name || item.translated.name }}\n    </template>\n    {% endblock %}\n\n</sw-multi-select>\n{% endblock %}\n',inject:["repositoryFactory"],props:{promotion:{type:Object,required:!1,default:null}},data:function(){return{salesChannels:[],sortBy:"name"}},computed:{salesChannelRepository:function(){return this.repositoryFactory.create("sales_channel")},promotionSalesChannelRepository:function(){return this.promotion?this.repositoryFactory.create(this.promotion.salesChannels.entity,this.promotion.salesChannels.source):null},salesChannelIds:{get:function(){return this.promotion?this.promotion.salesChannels.map((function(n){return n.salesChannelId})):[]},set:function(n){n=n||[];var e=this.getChangeset(n),t=e.deleted,o=e.added;this.promotion.isNew()?this.handleLocalMode(t,o):this.handleWithRepository(t,o)}},salesChannelCriteria:function(){var n=new o(1,500);return n.addSorting(o.sort(this.sortBy,this.sortDirection,this.naturalSorting)),n}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var n=this;this.salesChannelRepository.search(this.salesChannelCriteria).then((function(e){n.salesChannels=e}))},getChangeset:function(n){var e=this,t=[],o=[];return n.forEach((function(n){e.promotion.salesChannels.find((function(e){return e.salesChannelId===n}))||o.push(n)})),this.promotion.salesChannels.forEach((function(e){n.includes(e.salesChannelId)||t.push(e.salesChannelId)})),{deleted:t,added:o}},getAssociationBySalesChannelId:function(n){return this.promotion.salesChannels.find((function(e){return e.salesChannelId===n}))},handleLocalMode:function(n,e){var t=this;n.forEach((function(n){var e=t.getAssociationBySalesChannelId(n);t.promotion.salesChannels.remove(e.id)})),e.forEach((function(n){var e=t.promotionSalesChannelRepository.create(t.promotion.salesChannels.context);e.salesChannelId=n,e.promotionId=t.promotion.id,e.priority=1,t.promotion.salesChannels.add(e)}))},handleWithRepository:function(n,e){var t=this;n.forEach((function(n){var e=t.getAssociationBySalesChannelId(n);t.promotion.salesChannels.remove(e.id)})),e.forEach((function(n){var e=t.promotionSalesChannelRepository.create(t.promotion.salesChannels.context);e.salesChannelId=n,e.promotionId=t.promotion.id,e.priority=1,t.promotion.salesChannels.add(e)}))}}}}}]);
//# sourceMappingURL=491c2e2738fa5497aff2.js.map