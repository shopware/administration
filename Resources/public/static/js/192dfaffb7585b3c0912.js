(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[18918],{840940:function(){},818918:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(827497);let{Store:c}=Shopware;var s={template:'\n{% block sw_cms_block_product_heading %}\n<div\n    class="sw-cms-block-product-heading"\n    :class="currentDeviceViewClass"\n>\n    <slot name="left">\n        \n        {% block sw_cms_block_product_heading_slot_left %}{% endblock %}\n    </slot>\n\n    <slot name="right">\n        \n        {% block sw_cms_block_product_heading_slot_right %}{% endblock %}\n    </slot>\n</div>\n{% endblock %}\n',computed:{currentDeviceView(){return c.get("cmsPageState").currentCmsDeviceView},currentDeviceViewClass(){return this.currentDeviceView?`is--${this.currentDeviceView}`:null}}}},827497:function(e,n,t){var c=t(840940);c.__esModule&&(c=c.default),"string"==typeof c&&(c=[[e.id,c,""]]),c.locals&&(e.exports=c.locals),t(745346).Z("2ccb352d",c,!0,{})}}]);