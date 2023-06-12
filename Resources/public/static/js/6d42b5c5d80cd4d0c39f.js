(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[440],{N2kP:function(n,t,i){"use strict";i.r(t);i("X10e"),t.default={template:"\n{% block sw_settings_logging_entry_info_tab_items %}\n\n<sw-tabs-item\n    :active=\"activeTab === 'html'\"\n    @click=\"activeTab = 'html'\"\n>\n    {{ $tc('sw-settings-logging.mailInfo.tabHTML') }}\n</sw-tabs-item>\n\n<sw-tabs-item\n    :active=\"activeTab === 'plain'\"\n    @click=\"activeTab = 'plain'\"\n>\n    {{ $tc('sw-settings-logging.mailInfo.tabPlain') }}\n</sw-tabs-item>\n\n{% parent() %}\n{% endblock %}\n\n\n{% block sw_settings_logging_entry_info_content %}\n\n{% parent() %}\n\n<template v-if=\"activeTab === 'html' || activeTab === 'plain'\">\n    \n    {% block sw_settings_logging_mail_sent_content_recipients %}\n    <div class=\"sw-settings-logging-mail-sent-info__recipients\">\n        \n        {% block sw_settings_logging_mail_sent_content_recipients_title %}\n        <span>{{ $tc('sw-settings-logging.mailInfo.recipientsTitle') }}: {{ recipientString }}</span>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_settings_logging_mail_sent_content_mailbody %}\n    <div>\n        \n        {% block sw_settings_logging_mail_sent_content_mailbody_title %}\n        <span>{{ $tc('sw-settings-logging.mailInfo.contentsTitle') }}:</span>\n        {% endblock %}\n\n        \n        {% block sw_settings_logging_mail_sent_content_mailbody_html %}\n        <div\n            v-if=\"activeTab === 'html'\"\n            class=\"sw-settings-logging-mail-sent-info__mail-content\"\n            v-html=\"logEntry.context.additionalData.contents['text/html']\"\n        ></div>\n        {% endblock %}\n\n        \n        {% block sw_settings_logging_mail_sent_content_mailbody_plain %}\n        <div\n            v-if=\"activeTab === 'plain'\"\n            class=\"sw-settings-logging-mail-sent-info__mail-content\"\n        >\n            {{ logEntry.context.additionalData.contents['text/plain'] }}\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</template>\n\n{% endblock %}\n",computed:{recipientString:function(){var n="",t=Object.keys(this.logEntry.context.additionalData.recipients);return t.slice(0,4).forEach((function(t){n+="".concat(t," ")})),t.length>=5&&(n+="..."),n}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.activeTab="html"}}}},X10e:function(n,t,i){var e=i("uUfA");e.__esModule&&(e=e.default),"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,i("ydqr").default)("e968e716",e,!0,{})},uUfA:function(n,t,i){}}]);