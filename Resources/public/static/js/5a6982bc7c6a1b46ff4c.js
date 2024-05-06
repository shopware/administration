(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[18898],{41840:function(){},52757:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}}),n(53585);var r={template:'\n{% block sw_order_state_card_entry %}\n\n<div class="sw-order-state-history-card-entry">\n    \n    {% block sw_order_state_card_entry_headline %}\n    <div>\n        <h2 v-if="title">\n            {{ title }}\n        </h2>\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_state_card_entry_history %}\n    <div\n        v-for="(entry, index) in history"\n        :key="index"\n        class="sw-order-state-card__history-entry"\n        :class="`sw-order-state-history__entry--${index}`"\n    >\n        \n        {% block sw_order_state_card_entry_icon %}\n        <sw-label\n            appearance="circle"\n            :class="getBackgroundColorFromState(entry.state.technicalName)"\n        >\n            <sw-icon\n                :name="getIconFromState(entry.state.technicalName)"\n                :class="getIconColorFromState(entry.state.technicalName)"\n                size="16"\n            />\n        </sw-label>\n        {% endblock %}\n\n        \n        {% block sw_order_state_card_entry_description %}\n        <span class="sw-order-state-card__text">{{ entry.state.translated.name }}</span>\n        {% endblock %}\n\n        \n        {% block sw_order_state_card_entry_date %}\n        <span\n            v-tooltip="{\n                showDelay: 300,\n                message:userDisplayName(entry.user)\n            }"\n            class="sw-order-state-card__date"\n        >\n            {{ dateFilter(entry.createdAt, { hour: \'2-digit\', minute: \'2-digit\' }) }}\n        </span>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_order_state_card_entry_state_select %}\n    <sw-order-state-select\n        :transition-options="transitionOptions"\n        :disabled="disabled"\n        v-on="$listeners"\n    />\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["stateStyleDataProviderService"],props:{history:{type:Array,required:!0},transitionOptions:{type:Array,required:!0},stateMachineName:{type:String,required:!0},title:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{dateFilter(){return Shopware.Filter.getByName("date")}},methods:{userDisplayName(e){let t="";return t=null===e?this.$tc("sw-order.stateCard.labelSystemUser"):e.username,`${this.$tc("sw-order.stateCard.labelLastEditedBy")} ${t}`},getIconFromState(e){return this.stateStyleDataProviderService.getStyle(this.stateMachineName,e).icon},getIconColorFromState(e){return this.stateStyleDataProviderService.getStyle(this.stateMachineName,e).iconStyle},getBackgroundColorFromState(e){return this.stateStyleDataProviderService.getStyle(this.stateMachineName,e).iconBackgroundStyle}}}},53585:function(e,t,n){var r=n(41840);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),n(45346).Z("597ed903",r,!0,{})}}]);