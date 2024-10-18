(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[59963],{928674:function(){},359963:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return s}}),a(767003);let{Defaults:l}=Shopware,{Criteria:t}=Shopware.Data;var s={template:'\n{% block sw_sales_channel_modal %}\n<sw-modal\n    class="sw-sales-channel-modal"\n    :title="$tc(modalTitle)"\n    @modal-close="onCloseModal"\n>\n    \n    {% block sw_sales_channel_modal_grid %}\n    <sw-sales-channel-modal-grid\n        v-if="!detailType"\n        :product-streams-exist="productStreamsExist"\n        :product-streams-loading="productStreamsLoading"\n        :add-channel-action="addChannelAction"\n        @grid-detail-open="onGridOpenDetails"\n        @grid-channel-add="onAddChannel"\n    />\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_modal_detail %}\n    <sw-sales-channel-modal-detail\n        v-else\n        :detail-type="detailType"\n    />\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_modal_footer %}\n    <template #modal-footer>\n        <a\n            href="#"\n            class="sw-sales-channel-modal__footer_left"\n            @click.prevent="openRoute({ name: \'sw.sales.channel.list\' })"\n        >\n            {{ $tc(\'sw-sales-channel.general.manageSalesChannels\') }}\n        </a>\n\n        \n        {% block sw_sales_channel_modal_footer_detail_actions %}\n        \n        {% block sw_sales_channel_modal_footer_back %}\n        <sw-button\n            v-if="detailType"\n            size="small"\n            @click.prevent="detailType = false"\n        >\n            {{ $tc(\'sw-sales-channel.modal.buttonBack\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_modal_footer_add_channel %}\n        <sw-button\n            v-if="detailType"\n            v-tooltip="{\n                message: $tc(\'sw-sales-channel.modal.messageNoProductStreams\'),\n                showOnDisabledElements: true,\n                disabled: !addChannelAction.disabled(detailType.id)\n            }"\n            class="sw-sales-channel-modal__add-sales-channel-action"\n            variant="primary"\n            size="small"\n            :is-loading="addChannelAction.loading(detailType.id)"\n            :disabled="addChannelAction.disabled(detailType.id)"\n            @click="onAddChannel(detailType.id)"\n        >\n            {{ $tc(\'sw-sales-channel.modal.buttonAddChannel\') }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_modal_footer_actions %}\n        \n        {% block sw_sales_channel_modal_footer_cancel %}\n        <sw-button\n            v-if="!detailType"\n            size="small"\n            @click="onCloseModal"\n        >\n            {{ $tc(\'sw-sales-channel.modal.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],emits:["modal-close"],data(){return{detailType:null,productStreamsExist:!1,productStreamsLoading:!1}},computed:{modalTitle(){return this.detailType?this.$tc("sw-sales-channel.modal.titleDetailPrefix",0,{name:this.detailType.name}):this.$tc("sw-sales-channel.modal.title")},productStreamRepository(){return this.repositoryFactory.create("product_stream")},addChannelAction(){return{loading:n=>this.isProductComparisonSalesChannelType(n)&&this.productStreamsLoading,disabled:n=>this.isProductComparisonSalesChannelType(n)&&!this.productStreamsExist}}},created(){this.createdComponent()},methods:{createdComponent(){this.productStreamsLoading=!0,this.productStreamRepository.search(new t(1,1)).then(n=>{n.total>0&&(this.productStreamsExist=!0),this.productStreamsLoading=!1})},onGridOpenDetails(n){this.detailType=n},onCloseModal(){this.$emit("modal-close")},onAddChannel(n){this.onCloseModal(),n&&this.$router.push({name:"sw.sales.channel.create",params:{typeId:n}})},openRoute(n){this.onCloseModal(),this.$router.push(n)},isProductComparisonSalesChannelType(n){return n===l.productComparisonTypeId}}}},767003:function(n,e,a){var l=a(928674);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[n.id,l,""]]),l.locals&&(n.exports=l.locals),a(745346).Z("46e99ed2",l,!0,{})}}]);