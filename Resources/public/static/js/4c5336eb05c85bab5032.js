(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[185],{"7h5S":function(e,t,n){"use strict";n.r(t);n("96w0");var o=Shopware.Mixin;t.default={mixins:[o.getByName("cms-element")],computed:{isProductPage:function(){var e,t,n;return null!==(e=null===(t=this.cmsPageState)||void 0===t||null===(n=t.currentPage)||void 0===n?void 0:n.type)&&void 0!==e&&e}},methods:{createdComponent:function(){var e,t,n;this.initElementConfig("product-name"),!this.isProductPage||null!==(e=this.element)&&void 0!==e&&null!==(t=e.translated)&&void 0!==t&&null!==(n=t.config)&&void 0!==n&&n.content||(this.element.config.content.source="mapped",this.element.config.content.value="product.name")},updateDemoValue:function(){if("mapped"===this.element.config.content.source){var e="",t="sw-cms-el-product-name__skeleton";"product.name"===this.element.config.content.value&&(t="sw-cms-el-product-name__placeholder",e=this.$tc("sw-cms.elements.productName.label")),this.demoValue='<h1 class="'.concat(t,'">').concat(e,"</h1>"),this.cmsPageState.currentDemoEntity&&(this.demoValue=this.getDemoValue(this.element.config.content.value))}}}}},"96w0":function(e,t,n){var o=n("TQdl");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("P8hj").default)("1a5576a6",o,!0,{})},TQdl:function(e,t,n){}}]);