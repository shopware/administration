(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[416],{"0F0W":function(t,n,e){},eJcv:function(t,n,e){"use strict";e.r(n);e("f7kN");var o=Shopware.Mixin;n.default={template:'\n{% block sw_settings_country_state_list_card %}\n<sw-card\n    v-if="!isLoading"\n    position-identifier="sw-settings-country-state"\n>\n    <template #toolbar>\n        <sw-container\n            columns="1fr 32px minmax(100px, 200px)"\n            gap="0 10px"\n        >\n\n            \n            {% block sw_attribute_list_toolbar_searchfield %}\n            <sw-simple-search-field\n                v-model="term"\n                size="small"\n                variant="form"\n                @search-term-change="onSearchCountryState"\n            />\n            {% endblock %}\n\n            \n            {% block sw_settings_country_state_list_toolbar_delete %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'country.editor\'),\n                    showOnDisabledElements: true\n                }"\n                square\n                size="small"\n                class="sw-settings-country-state-list__delete-button"\n                :disabled="deleteButtonDisabled || !acl.can(\'country.editor\')"\n                @click="onDeleteCountryStates"\n            >\n                <sw-icon\n                    name="regular-trash"\n                    small\n                />\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_settings_country_state_list_toolbar_add %}\n            <sw-button\n                v-tooltip.bottom="{\n                    message: $tc(\'sw-privileges.tooltip.warning\'),\n                    disabled: acl.can(\'country.editor\'),\n                    showOnDisabledElements: true\n                }"\n                class="sw-settings-country-state__add-country-state-button"\n                size="x-small"\n                variant="primary"\n                :disabled="!acl.can(\'country.editor\')"\n                @click="onAddCountryState"\n            >\n                {{ $tc(\'sw-settings-country.detail.buttonAddCountryState\') }}\n            </sw-button>\n            {% endblock %}\n\n        </sw-container>\n    </template>\n\n    <template #grid>\n\n        \n        {% block sw_settings_country_state_list_listing %}\n        <sw-one-to-many-grid\n            ref="countryStateGrid"\n            class="sw-settings-country-state-list__content"\n            :is-loading="countryStateLoading"\n            :collection="country.states"\n            :full-page="false"\n            :local-mode="country.isNew()"\n            :columns="stateColumns"\n            :allow-delete="acl.can(\'country.editor\')"\n            :tooltip-delete="{\n                message: $tc(\'sw-privileges.tooltip.warning\'),\n                disabled: acl.can(\'country.editor\'),\n                showOnDisabledElements: true\n            }"\n            @selection-change="countryStateSelectionChanged"\n            @load-finish="checkEmptyState"\n        >\n\n            <template #column-name="{ item }">\n\n                \n                {% block sw_settings_country_state_list_listing_column_name %}\n                \n                <a\n                    class="sw-settings-country-state__link"\n                    @click="onClickCountryState(item)"\n                >\n                    {{ getCountryStateName(item) }}\n                </a>\n                {% endblock %}\n\n            </template>\n\n            <template #more-actions="{ item }">\n                \n                {% block sw_settings_country_state_list_listing_action_edit %}\n                <sw-context-menu-item\n                    v-tooltip.top="{\n                        message: $tc(\'sw-privileges.tooltip.warning\'),\n                        disabled: acl.can(\'country.editor\'),\n                        showOnDisabledElements: true\n                    }"\n                    class="sw-settings-country-state__edit-country-state-action"\n                    :disabled="!acl.can(\'country.editor\')"\n                    @click="onClickCountryState(item)"\n                >\n                    {{ $tc(\'sw-settings-country.detail.editAction\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n        </sw-one-to-many-grid>\n        {% endblock %}\n        \n        {% block sw_settings_country_state_list_empty %}\n        <sw-empty-state\n            v-if="showEmptyState"\n            :absolute="false"\n            :title="$tc(\'sw-country-state-detail.emptyTitle\')"\n            :subline="$tc(\'sw-country-state-detail.emptySubline\')"\n            auto-height\n        />\n        {% endblock %}\n    </template>\n    \n    {% block sw_settings_country_state_detail %}\n    <sw-country-state-detail\n        v-if="currentCountryState"\n        :country-state="currentCountryState"\n        @attribute-edit-save="onSaveCountryState"\n        @attribute-edit-cancel="onCancelCountryState"\n    />\n    {% endblock %}\n</sw-card>\n{% endblock %}\n\n',inject:["repositoryFactory","acl"],mixins:[o.getByName("notification")],props:{country:{type:Object,required:!0},isLoading:{type:Boolean,required:!1,default:!1},countryStateRepository:{type:Object,required:!1,default:null}},data:function(){return{deleteButtonDisabled:!0,term:null,currentCountryState:null,countryStateLoading:!1,showEmptyState:!1}},computed:{stateColumns:function(){return this.getStateColumns()},countryStates:function(){return this.country.states}},watch:{countryStates:function(){this.checkEmptyState()}},mounted:function(){this.mountedComponent()},methods:{mountedComponent:function(){this.checkEmptyState()},getStateColumns:function(){return[{property:"name",label:this.$tc("sw-settings-country.detail.columnStateNameLabel"),inlineEdit:"string",primary:!0},{property:"shortCode",label:this.$tc("sw-settings-country.detail.columnStateShortCodeLabel"),inlineEdit:"string"}]},countryStateSelectionChanged:function(t,n){this.deleteButtonDisabled=n<=0},onSearchCountryState:function(){this.country.states.criteria.setTerm(this.term),this.refreshCountryStateList()},onDeleteCountryStates:function(){var t=this,n=this.$refs.countryStateGrid.selection,e=Object.keys(n);return e.length?this.country.isNew()?(e.forEach((function(n){t.country.states.remove(n)})),this.$refs.countryStateGrid.resetSelection(),Promise.resolve()):(this.countryStateLoading=!0,this.countryStateRepository.syncDeleted(e,Shopware.Context.api).then((function(){t.$refs.countryStateGrid.resetSelection(),t.refreshCountryStateList()})).finally((function(){t.countryStateLoading=!1}))):Promise.resolve()},onAddCountryState:function(){this.currentCountryState=this.countryStateRepository.create(Shopware.Context.api)},onSaveCountryState:function(t){var n=this;return this.country.isNew()?(this.country.states.add(t),Promise.resolve().then((function(){n.currentCountryState=null}))):this.countryStateRepository.save(this.currentCountryState).then((function(){n.refreshCountryStateList()})).catch((function(t){"MISSING-SYSTEM-TRANSLATION"===t.response.data.errors[0].code&&n.createNotificationError({message:n.$tc("sw-country-state-detail.createNewStateError")})}))},onCancelCountryState:function(){this.currentCountryState=null},onClickCountryState:function(t){var n=this.countryStateRepository.create(Shopware.Context.api,t.id);n._isNew=!1,this.currentCountryState=Object.assign(n,t)},refreshCountryStateList:function(){var t=this;this.countryStateLoading=!0,this.$refs.countryStateGrid.load().then((function(){t.countryStateLoading=!1,t.currentCountryState=null}))},getCountryStateName:function(t){var n;return(null==t||null===(n=t.translated)||void 0===n?void 0:n.name)||(null==t?void 0:t.name)},checkEmptyState:function(){this.country.isNew()?this.showEmptyState=0===this.country.states.length:this.showEmptyState=0===this.$refs.countryStateGrid.total}}}},f7kN:function(t,n,e){var o=e("0F0W");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("ydqr").default)("a9512c12",o,!0,{})}}]);