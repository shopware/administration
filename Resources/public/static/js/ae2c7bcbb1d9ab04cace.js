(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[53623],{535013:function(){},653623:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return t}}),a(417598);let{Defaults:s}=Shopware,{Criteria:l}=Shopware.Data;var t={template:'\n{% block sw_sales_channel_modal_grid %}\n<sw-grid\n    v-if="!isLoading"\n    class="sw-sales-channel-modal-grid"\n    :items="salesChannelTypes"\n    :selectable="false"\n    :header="false"\n    :table="true"\n>\n    <template\n        #columns="{ item }"\n    >\n        \n        {% block sw_sales_channel_grid_columns %}\n        \n        {% block sw_sales_channel_grid_columns_icon %}\n        <sw-grid-column\n            flex="85px"\n            data-index="icon"\n            class="sw-sales-channel-modal-grid__icon-column"\n            label="icon"\n        >\n            <span\n                class="sw-sales-channel-modal-grid__icon"\n                role="button"\n                tabindex="0"\n                @click="onOpenDetail(item.id)"\n                @keydown.enter="onOpenDetail(item.id)"\n            >\n                <sw-icon\n                    v-if="item.iconName"\n                    :name="item.iconName"\n                />\n            </span>\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_grid_columns_content %}\n        <sw-grid-column\n            flex="minmax(150px, 1fr)"\n            data-index="content"\n            label="content"\n        >\n            <div class="sw-sales-channel-modal-grid__item-content">\n                <h3\n                    class="sw-sales-channel-modal-grid__item-name"\n                    role="button"\n                    tabindex="0"\n                    @click="onOpenDetail(item.id)"\n                    @keydown.enter="onOpenDetail(item.id)"\n                >{{ item.translated.name }}</h3>\n                <div\n                    class="sw-sales-channel-modal-grid__item-description"\n                    role="button"\n                    tabindex="0"\n                    @click="onOpenDetail(item.id)"\n                    @keydown.enter="onOpenDetail(item.id)"\n                >{{ item.translated.description }}</div>\n            </div>\n        </sw-grid-column>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_grid_columns_actions %}\n        <sw-grid-column\n            flex="auto"\n            align="center"\n            data-index="actions"\n            class="sw-sales-channel-modal-grid__actions"\n            label="actions"\n        >\n            <sw-button\n                v-tooltip="{\n                    message: $tc(\'sw-sales-channel.modal.messageNoProductStreams\'),\n                    showOnDisabledElements: true,\n                    disabled: !addChannelAction.disabled(item.id)\n                }"\n                class="sw-sales-channel-modal__add-channel-action"\n                size="small"\n                variant="primary"\n                :is-loading="addChannelAction.loading(item.id)"\n                :disabled="addChannelAction.disabled(item.id)"\n                @click="onAddChannel(item.id)"\n            >\n                {{ $tc(\'sw-sales-channel.modal.buttonAddChannel\') }}\n            </sw-button>\n        </sw-grid-column>\n        {% endblock %}\n        {% endblock %}\n    </template>\n</sw-grid>\n\n\n{% block sw_sales_channel_modal_grid_loader %}\n<sw-loader v-else />\n    {% endblock %}\n{% endblock %}\n',inject:["repositoryFactory"],props:{productStreamsExist:{type:Boolean,required:!1,default:!0},productStreamsLoading:{type:Boolean,required:!1,default:!1},addChannelAction:{type:Object,required:!0}},data(){return{salesChannelTypes:[],isLoading:!1,total:0}},computed:{salesChannelTypeRepository(){return this.repositoryFactory.create("sales_channel_type")}},created(){this.createdComponent()},methods:{createdComponent(){this.isLoading=!0;let n={...Shopware.Context.api,languageId:Shopware.State.get("session").languageId};this.salesChannelTypeRepository.search(new l(1,500),n).then(n=>{this.total=n.total,this.salesChannelTypes=n,this.isLoading=!1})},onAddChannel(n){this.$emit("grid-channel-add",n)},onOpenDetail(n){let e=this.salesChannelTypes.find(e=>e.id===n);this.$emit("grid-detail-open",e)},isProductComparisonSalesChannelType(n){return n===s.productComparisonTypeId}}}},417598:function(n,e,a){var s=a(535013);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),a(745346).Z("8984fb32",s,!0,{})}}]);