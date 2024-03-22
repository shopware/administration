(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[99427],{59390:function(){},99427:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return s}}),e(62059);var s={template:'\n{% block sw_extension_my_extensions_listing_controls %}\n<div class="sw-extension-my-extensions-listing-controls">\n    \n    {% block sw_extension_my_extensions_listing_controls_active_switch %}\n    <sw-switch-field\n        v-model:value="filterByActiveState"\n        class="sw-extension-my-extensions-listing-controls__active-filter-switch"\n        :label="$tc(\'sw-extension.my-extensions.listing.controls.labelActiveStateSwitch\')"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_my_extensions_listing_controls_sorting_select %}\n    <sw-select-field\n        v-model:value="selectedSortingOption"\n        class="sw-extension-my-extensions-listing-controls__sorting-dropdown"\n        size="small"\n    >\n        \n        {% block sw_extension_my_extensions_listing_controls_sorting_select_option %}\n        <option\n            v-for="(sortingOption, index) in sortingOptions"\n            :key="`sorting-option-${index}`"\n            :value="sortingOption.value"\n        >\n            {{ sortingOption.name }}\n        </option>\n        {% endblock %}\n    </sw-select-field>\n    {% endblock %}\n</div>\n{% endblock %}\n',data(){return{filterByActiveState:!1,selectedSortingOption:"updated-at",sortingOptions:[{value:"updated-at",name:this.$tc("sw-extension.my-extensions.listing.controls.filterOptions.last-updated")},{value:"name-asc",name:this.$tc("sw-extension.my-extensions.listing.controls.filterOptions.name-asc")},{value:"name-desc",name:this.$tc("sw-extension.my-extensions.listing.controls.filterOptions.name-desc")}]}},watch:{filterByActiveState(n){this.$emit("update:active-state",n)},selectedSortingOption(n){this.$emit("update:sorting-option",n)}}}},62059:function(n,t,e){var s=e(59390);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[n.id,s,""]]),s.locals&&(n.exports=s.locals),e(45346).Z("da781214",s,!0,{})}}]);