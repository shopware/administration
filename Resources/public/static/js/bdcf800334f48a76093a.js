(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[596],{"8fSu":function(n,e,l){"use strict";l.r(e);var a=Shopware.Data.Criteria;e.default={template:'\n{% block sw_sales_channel_detail_hreflang %}\n<sw-card\n    :title="$tc(\'sw-sales-channel.detail.hreflang.title\')"\n    class="sw-sales-channel-detail-hreflang"\n    position-identifier="sw-sales-channel-detail-hreflang"\n>\n    \n    {% block sw_sales_channel_detail_hreflang_title %}\n    <h4>\n        <span class="sw-sales-channel-detail-domains__headline-text sw-sales-channel-detail-base__headline-text">{{ $tc(\'sw-sales-channel.detail.hreflang.titleCard\') }}</span>\n    </h4>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_hreflang_content %}\n    \n    {% block sw_sales_channel_detail_hreflang_content_description %}\n    <div class="sw-sales-channel-detail-base__description-text">\n        {{ $tc(\'sw-sales-channel.detail.hreflang.titleDescription\') }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_hreflang_content_enable %}\n    <sw-switch-field\n        {% if VUE3 %}\n        v-model:value="salesChannel.hreflangActive"\n        {% else %}\n        v-model="salesChannel.hreflangActive"\n        {% endif %}\n        :label="$tc(\'sw-sales-channel.detail.hreflang.enableCheckbox\')"\n        :disabled="disabled"\n        {% if VUE3 %}\n        @update:value="salesChannel.hreflangDefaultDomainId = null"\n        {% else %}\n        @change="salesChannel.hreflangDefaultDomainId = null"\n        {% endif %}\n    />\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_hreflang_content_domain %}\n    <sw-entity-single-select\n        {% if VUE3 %}\n        v-model:value="salesChannel.hreflangDefaultDomainId"\n        {% else %}\n        v-model="salesChannel.hreflangDefaultDomainId"\n        {% endif %}\n        :disabled="!salesChannel.hreflangActive || disabled"\n        :label="$tc(\'sw-sales-channel.detail.hreflang.defaultDomain\')"\n        entity="sales_channel_domain"\n        :criteria="domainCriteria"\n        label-property="url"\n        show-clearable-button\n    />\n    {% endblock %}\n\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',props:{salesChannel:{required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{domainCriteria:function(){var n=new a(1,25);return n.addFilter(a.equals("salesChannelId",this.salesChannel.id)),n}}}}}]);