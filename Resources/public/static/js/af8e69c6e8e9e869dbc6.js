(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[57],{orZ8:function(n,e,t){var a=t("ur8R");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t("ydqr").default)("8407570c",a,!0,{})},ur8R:function(n,e,t){},"w/Nb":function(n,e,t){"use strict";t.r(e);t("orZ8");var a=Shopware.Context,i=Shopware.Data,o=i.Criteria,s=i.EntityCollection;e.default={template:'\n{% block sw_category_entry_point_card %}\n<sw-card\n    class="sw-category-entry-point-card"\n    position-identifier="sw-category-entry-point"\n    :title="$tc(\'sw-category.base.entry-point-card.cardTitle\')"\n>\n\n    \n    {% block sw_category_entry_point_card_selection %}\n    <sw-single-select\n        v-model="selectedEntryPoint"\n        class="sw-category-entry-point-card__entry-point-selection"\n        :options="entryPoints"\n        :label="$tc(\'sw-category.base.entry-point-card.labelEntryPoint\')"\n        :placeholder="$tc(\'sw-category.base.entry-point-card.placeholderEntryPoint\')"\n        :help-text="helpText"\n        :disabled="hasExistingNavigation || !acl.can(\'category.editor\')"\n        show-clearable-button\n        @change="onEntryPointChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_entry_point_card_navigation_headline %}\n    <p v-if="hasExistingNavigation">\n        {{ $tc(\'sw-category.base.entry-point-card.existingNavigationDescription\') }}\n    </p>\n    {% endblock %}\n\n    \n    {% block sw_category_entry_point_card_navigation_list %}\n    <div\n        v-if="hasExistingNavigation"\n        class="sw-category-entry-point-card__navigation-list"\n    >\n\n        \n        {% block sw_category_detail_entry_point_navigation_list_link %}\n        <router-link\n            v-for="salesChannel in initialNavigationSalesChannels"\n            :key="salesChannel.id"\n            :to="{ name: \'sw.sales.channel.detail.base\', params: { id: salesChannel.id }}"\n            class="sw-category-entry-point-card__navigation-entry"\n        >\n            {{ salesChannel.translated.name }}\n        </router-link>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_category_entry_point_card_sales_channel_selection %}\n    <sw-category-sales-channel-multi-select\n        v-if="associatedCollection"\n        class="sw-category-entry-point-card__sales-channel-selection"\n        :entity-collection="associatedCollection"\n        :label="salesChannelSelectionLabel"\n        :criteria="salesChannelCriteria"\n        :placeholder="$tc(\'sw-category.base.entry-point-card.placeholderSalesChannels\')"\n        :disabled="!selectedEntryPoint || !acl.can(\'category.editor\')"\n        @change="onSalesChannelChange"\n    />\n    {% endblock %}\n\n    \n    {% block sw_category_entry_point_card_button_configure_home %}\n    <sw-button\n        class="sw-category-entry-point-card__button-configure-home"\n        variant="ghost"\n        size="small"\n        :disabled="selectedEntryPoint !== \'navigationSalesChannels\' || category.navigationSalesChannels.length === 0"\n        @click="openConfigureHomeModal"\n    >\n        {{ $tc(\'sw-category.base.entry-point-card.buttonConfigureHome\') }}\n    </sw-button>\n    {% endblock %}\n\n    \n    {% block sw_category_entry_point_card_configure_home_modal %}\n    <sw-category-entry-point-modal\n        v-if="configureHomeModalVisible"\n        :sales-channel-collection="category.navigationSalesChannels"\n        @modal-close="closeConfigureHomeModal"\n    />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["acl"],props:{category:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1}},data:function(){return{selectedEntryPoint:this.getInitialEntryPointFromCategory(),initialNavigationSalesChannels:this.category.navigationSalesChannels,addedNavigationSalesChannels:new s("/sales_channel","sales_channel",a.api),configureHomeModalVisible:!1}},computed:{entryPoints:function(){return[{value:"navigationSalesChannels",label:this.$tc("sw-category.base.entry-point-card.types.labelMainNavigation")},{value:"footerSalesChannels",label:this.$tc("sw-category.base.entry-point-card.types.labelFooterNavigation")},{value:"serviceSalesChannels",label:this.$tc("sw-category.base.entry-point-card.types.labelServiceNavigation")}]},associatedCollection:function(){return this.hasExistingNavigation?this.addedNavigationSalesChannels:this.category[this.selectedEntryPoint]},helpText:function(){switch(this.selectedEntryPoint){case"navigationSalesChannels":return this.$tc("sw-category.base.entry-point-card.types.helpTextMainNavigation");case"footerSalesChannels":return this.$tc("sw-category.base.entry-point-card.types.helpTextFooterNavigation");case"serviceSalesChannels":return this.$tc("sw-category.base.entry-point-card.types.helpTextServiceNavigation");default:return""}},hasExistingNavigation:function(){return this.initialNavigationSalesChannels.length>0},salesChannelSelectionLabel:function(){return this.hasExistingNavigation?this.$tc("sw-category.base.entry-point-card.labelSalesChannelsAdd"):this.$tc("global.entities.sales_channel",2)},salesChannelCriteria:function(){var n=new o(1,25);return this.hasExistingNavigation&&n.addFilter(o.not("or",[o.equalsAny("id",this.initialNavigationSalesChannels.getIds())])),n}},watch:{category:function(n){this.initialNavigationSalesChannels=n.navigationSalesChannels,this.addedNavigationSalesChannels=new s("/sales_channel","sales_channel",a.api),this.selectedEntryPoint=this.getInitialEntryPointFromCategory()}},methods:{getInitialEntryPointFromCategory:function(){return this.category.navigationSalesChannels&&this.category.navigationSalesChannels.length>0?"navigationSalesChannels":this.category.footerSalesChannels&&this.category.footerSalesChannels.length>0?"footerSalesChannels":this.category.serviceSalesChannels&&this.category.serviceSalesChannels.length>0?"serviceSalesChannels":""},onEntryPointChange:function(){this.resetSalesChannelCollections()},onSalesChannelChange:function(n){var e=this.selectedEntryPoint;if(this.hasExistingNavigation){var t=s.fromCollection(this.initialNavigationSalesChannels);n.forEach((function(n){t.add(n)})),this.addedNavigationSalesChannels=n,n=t}n.source=this.category[e].source,this.resetSalesChannelCollections(),this.category[e]=n},resetSalesChannelCollections:function(){var n=this,e=this.selectedEntryPoint;this.entryPoints.reduce((function(t,a){var i=a.value;return i===e||t.push(n.category[i]),t}),[]).forEach((function(n){n.getIds().forEach((function(e){n.remove(e)}))}))},openConfigureHomeModal:function(){this.configureHomeModalVisible=!0},closeConfigureHomeModal:function(){this.configureHomeModalVisible=!1}}}}}]);