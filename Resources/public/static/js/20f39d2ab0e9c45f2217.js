(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[44466],{27567:function(){},44466:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}}),t(35801);let{Mixin:i}=Shopware;var s={template:'<div class="sw-cms-el-config-html">\n    <sw-code-editor\n        :value="element.config.content.value"\n        :set-focus="true"\n        @update:value="onInput"\n        @blur="onBlur"\n    />\n\n    <sw-alert variant="warning">\n        {{ $tc(\'sw-cms.elements.html.config.warning\') }}\n    </sw-alert>\n</div>\n',mixins:[i.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("html")},onBlur(e){this.emitChanges(e)},onInput(e){this.emitChanges(e)},emitChanges(e){e!==this.element.config.content.value&&(this.element.config.content.value=e,this.$emit("element-update",this.element))}}}},35801:function(e,n,t){var i=t(27567);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals),t(45346).Z("50e374e1",i,!0,{})}}]);