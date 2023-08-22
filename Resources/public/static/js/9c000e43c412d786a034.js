(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[499],{"X/jP":function(e,o,s){"use strict";s.r(o);var l=s("7yzw"),t=s.n(l),n=s("92Mt"),i=s.n(n),a=Shopware.Mixin;o.default={template:'\n{% block sw_media_modal_folder_dissolve %}\n<sw-modal\n    variant="small"\n    class="sw-media-modal-folder-dissolve"\n    :title="$tc(\'global.default.warning\')"\n    @modal-close="closeDissolveModal"\n>\n\n    \n    {% block sw_media_modal_folder_dissolve_body %}\n    {{ $tc(\'global.sw-media-modal-folder-dissolve.dissolveMessage\', itemsToDissolve.length, { folderName: itemsToDissolve[0].name, count: itemsToDissolve.length }) }}\n    {% endblock %}\n\n    \n    {% block sw_media_modal_folder_dissolve_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_media_modal_folder_dissolve__cancel_button %}\n        <sw-button\n            size="small"\n            @click="closeDissolveModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_media_modal_folder_dissolve_confirm_button %}\n        <sw-button\n            class="sw-media-modal-folder-dissolve__confirm"\n            size="small"\n            variant="danger"\n            @click="dissolveSelection"\n        >\n            {{ $tc(\'global.sw-media-modal-folder-dissolve.buttonDissolve\') }}\n        </sw-button>\n        {% endblock %}\n\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["mediaFolderService"],mixins:[a.getByName("notification")],props:{itemsToDissolve:{required:!0,type:Array,validator:function(e){return 0!==e.length}}},methods:{closeDissolveModal:function(e){this.$emit("media-folder-dissolve-modal-close",{originalDomEvent:e})},_dissolveSelection:function(e){var o=this;return t()(i.a.mark((function s(){return i.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.isLoading=!0,s.prev=1,s.next=4,o.mediaFolderService.dissolveFolder(e.id);case 4:return o.createNotificationSuccess({title:o.$root.$tc("global.default.success"),message:o.$root.$tc("global.sw-media-modal-folder-dissolve.notification.successSingle.message",1,{folderName:e.name})}),s.abrupt("return",e.id);case 8:return s.prev=8,s.t0=s.catch(1),o.createNotificationError({title:o.$root.$tc("global.default.error"),message:o.$root.$tc("global.sw-media-modal-folder-dissolve.notification.errorSingle.message",1,{folderName:e.name})}),s.abrupt("return",null);case 12:return s.prev=12,e.isLoading=!1,s.finish(12);case 15:case"end":return s.stop()}}),s,null,[[1,8,12,15]])})))()},dissolveSelection:function(){var e=this;return t()(i.a.mark((function o(){var s;return i.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return s=[],o.prev=1,o.next=4,Promise.all(e.itemsToDissolve.map((function(o){return s.push(o.id),e._dissolveSelection(o)})));case 4:e.itemsToDissolve.length>1&&e.createNotificationSuccess({title:e.$root.$tc("global.default.success"),message:e.$root.$tc("global.sw-media-modal-folder-dissolve.notification.successOverall.message")}),e.$emit("media-folder-dissolve-modal-dissolve",s),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(1),e.itemsToDissolve.length>1&&e.createNotificationError({title:e.$root.$tc("global.default.error"),message:e.$root.$tc("global.sw-media-modal-folder-dissolve.notification.errorOverall.message")});case 11:case"end":return o.stop()}}),o,null,[[1,8]])})))()}}}}}]);