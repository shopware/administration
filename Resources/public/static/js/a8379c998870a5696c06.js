(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[61526],{762283:function(){},661526:function(n,i,s){"use strict";s.r(i),s.d(i,{default:function(){return o}}),s(846325);var o={template:'<sw-system-config\n    ref="systemConfig"\n    domain="core.userPermission"\n    class="sw-users-permissions-configuration"\n    :class="{\n        \'is--disabled\': !acl.can(\'users_and_permissions.editor\')\n    }"\n    @loading-changed="onChangeLoading"\n/>\n',compatConfig:Shopware.compatConfig,inject:["acl"],emits:["loading-change"],methods:{onChangeLoading(n){this.$emit("loading-change",n)}}}},846325:function(n,i,s){var o=s(762283);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.id,o,""]]),o.locals&&(n.exports=o.locals),s(745346).Z("0f0148a9",o,!0,{})}}]);