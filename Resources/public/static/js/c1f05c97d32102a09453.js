(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[597],{H1ge:function(e,n,t){"use strict";t.r(n);n.default={template:'\n{% block sw_sales_channel_detail_base_options_delete %}{% endblock %}\n\n\n{% block sw_sales_channel_detail_base_general_input_active %}\n<sw-field\n    v-model="salesChannel.active"\n    v-tooltip="{ message: $tc(\'sw-sales-channel.detail.activateDisable\') }"\n    type="switch"\n    bordered\n    disabled\n    :label="$tc(\'sw-sales-channel.detail.labelInputActive\')"\n/>\n{% endblock %}\n',created:function(){this.createdComponent()},methods:{createdComponent:function(){this.onGenerateKeys(),this.isProductComparison&&this.onGenerateProductExportKey(!1)}}}}}]);