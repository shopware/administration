(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[46219],{79703:function(){},46219:function(n,a,o){"use strict";o.r(a),o.d(a,{default:function(){return e}}),o(96896);var e=Shopware.Component.wrapComponentConfig({template:'{# Information: the text should be harcoded and non translatable #}\n<div class="sw-ai-copilot-badge">\n    <sw-icon\n        v-tooltip="{\n            message: \'AI Copilot\',\n            disabled: label,\n            width: 98\n        }"\n        name="solid-sparkles"\n        size="12px"\n    />\n\n    <div\n        v-if="label"\n        class="sw-ai-copilot-badge__label"\n    >\n        <span class="disambiguation">\n            AI\n        </span>\n        <span>\n            Copilot\n        </span>\n    </div>\n</div>\n',props:{label:{type:Boolean,required:!1,default:!0}}})},96896:function(n,a,o){var e=o(79703);e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.id,e,""]]),e.locals&&(n.exports=e.locals),o(45346).Z("06bcdde0",e,!0,{})}}]);