(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[13299],{366986:function(){},413299:function(n,o,s){"use strict";s.r(o),s.d(o,{default:function(){return l}}),s(158432);var l={template:'\n{% block sw_cms_toolbar %}\n<div class="sw-cms-toolbar">\n    \n    {% block sw_cms_toolbar_title %}\n    <div class="sw-cms-toolbar__title">\n        <slot name="title">\n            \n            {% block sw_cms_toolbar_slot_title %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_toolbar_tools %}\n    <div class="sw-cms-toolbar__tools">\n        <slot name="tools">\n            \n            {% block sw_cms_toolbar_slot_tools %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_toolbar_language_switch %}\n    <div class="sw-cms-toolbar__language-selection">\n        <slot name="language-switch">\n            \n            {% block sw_cms_toolbar_slot_language_switch %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_toolbar_actions %}\n    <div class="sw-cms-toolbar__actions">\n\n        <sw-app-actions />\n\n        <slot name="actions">\n            \n            {% block sw_cms_toolbar_slot_actions %}{% endblock %}\n        </slot>\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n'}},158432:function(n,o,s){var l=s(366986);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[n.id,l,""]]),l.locals&&(n.exports=l.locals),s(745346).Z("a369a22c",l,!0,{})}}]);