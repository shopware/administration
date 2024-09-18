(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[61336],{674999:function(){},661336:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}}),t(552632);var l={template:'\n{% block sw_settings_listing_delete_modal %}\n<sw-modal\n    :title="title"\n    variant="small"\n    class="sw-settings-listing-delete-modal"\n    @modal-close="emitCancel"\n>\n\n    \n    {% block sw_settings_listing_delete_modal_body_description %}\n    <p>{{ description }}</p>\n    {% endblock %}\n\n    \n    {% block sw_settings_listing_delete_modal_footer %}\n    <template #modal-footer>\n\n        \n        {% block sw_settings_listing_delete_modal_footer_cancel_button %}\n        <sw-button\n            size="small"\n            @click="emitCancel"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_listing_delete_modal_footer_delete_button %}\n        <sw-button\n            variant="danger"\n            size="small"\n            @click="emitDelete"\n        >\n            {{ $tc(\'global.default.delete\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,emits:["cancel","delete"],props:{title:{type:String,required:!0},description:{type:String,required:!0}},methods:{emitCancel(){this.$emit("cancel")},emitDelete(){this.$emit("delete")}}}},552632:function(e,n,t){var l=t(674999);l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.id,l,""]]),l.locals&&(e.exports=l.locals),t(745346).Z("2fe24b28",l,!0,{})}}]);