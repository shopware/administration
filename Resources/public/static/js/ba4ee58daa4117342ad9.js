(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[618],{HGAy:function(e,i,n){"use strict";n.r(i);var t=n("CsSd"),s=n.n(t);function l(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach((function(i){s()(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}var a=Shopware,o=a.Component,d=a.Mixin,c=Shopware.Classes.ShopwareError,m=o.getComponentHelper().mapPropertyErrors;i.default={template:'\n{% block sw_settings_delivery_time_detail %}\n<sw-page class="sw-settings-delivery-time-detail">\n\n    \n    {% block sw_settings_delivery_time_detail_smart_bar_header %}\n    <template #smart-bar-header>\n        <h2>{{ displayName }}</h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_delivery_time_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :disabled="!$route.params.id"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_delivery_time_detail_smart_bar_actions %}\n    <template #smart-bar-actions>\n\n        \n        {% block sw_settings_delivery_time_detail_smart_bar_actions_cancel %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-delivery-time.general.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_delivery_time_detail_smart_bar_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-delivery-time-detail__save"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!allowSave"\n            variant="primary"\n            {% if VUE3 %}\n            @update:process-success="saveFinish"\n            {% else %}\n            @process-finish="saveFinish"\n            {% endif %}\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-delivery-time.general.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_delivery_time_detail_content %}\n    <template #content>\n        <sw-card-view>\n\n            <sw-skeleton v-if="isLoading" />\n\n            <template v-else>\n                \n                {% block sw_settings_delivery_time_language_info %}\n                <sw-language-info\n                    :entity-description="displayName"\n                    :is-new-entity="!$route.params.id"\n                />\n                {% endblock %}\n\n                \n                {% block sw_settings_delivery_time_detail_form %}\n                <sw-card\n                    :is-loading="isLoading"\n                    position-identifier="sw-settings-delivery-time-detail-form"\n                >\n                    <template v-if="deliveryTime">\n\n                        \n                        {% block sw_settings_delivery_time_detail_name_field %}\n                        <sw-text-field\n                            {% if VUE3 %}\n                            v-model:value="deliveryTime.name"\n                            {% else %}\n                            v-model="deliveryTime.name"\n                            {% endif %}\n                            name="sw-field--deliveryTime-name"\n                            :label="$tc(\'sw-settings-delivery-time.detail.labelName\')"\n                            :error="deliveryTimeNameError"\n                            :disabled="!acl.can(\'delivery_times.editor\')"\n                            required\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_delivery_time_detail_unit_field %}\n                        <sw-single-select\n                            {% if VUE3 %}\n                            v-model:value="deliveryTime.unit"\n                            {% else %}\n                            v-model="deliveryTime.unit"\n                            {% endif %}\n                            name="sw-field--deliveryTime-unit"\n                            class="sw-delivery-time-detail__field-unit"\n                            :options="deliveryTimeUnits"\n                            :error="deliveryTimeUnitError"\n                            :label="$tc(\'sw-settings-delivery-time.detail.labelUnit\')"\n                            :disabled="!acl.can(\'delivery_times.editor\')"\n                            required\n                            show-clearable-button\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_delivery_time_min_max_container %}\n                        <sw-container\n                            columns="1fr 1fr"\n                            gap="30px"\n                        >\n\n                            \n                            {% block sw_settings_delivery_time_detail_min_field %}\n                            <sw-number-field\n                                {% if VUE3 %}\n                                v-model:value="deliveryTime.min"\n                                {% else %}\n                                v-model="deliveryTime.min"\n                                {% endif %}\n                                name="sw-field--deliveryTime-min"\n                                :label="$tc(\'sw-settings-delivery-time.detail.labelMin\')"\n                                :error="deliveryTimeMinError || invalidMinError"\n                                :min="0"\n                                :max="deliveryTime.max"\n                                :disabled="!acl.can(\'delivery_times.editor\')"\n                                required\n                            />\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_delivery_time_detail_max_field %}\n                            <sw-number-field\n                                {% if VUE3 %}\n                                v-model:value="deliveryTime.max"\n                                {% else %}\n                                v-model="deliveryTime.max"\n                                {% endif %}\n                                name="sw-field--deliveryTime-max"\n                                :label="$tc(\'sw-settings-delivery-time.detail.labelMax\')"\n                                :error="deliveryTimeMaxError"\n                                :min="deliveryTime.min"\n                                :disabled="!acl.can(\'delivery_times.editor\')"\n                                required\n                            />\n                            {% endblock %}\n                        </sw-container>\n                        {% endblock %}\n                    </template>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_delivery_time_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-delivery-time-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="deliveryTime"\n                        :disabled="!acl.can(\'delivery_times.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["repositoryFactory","acl","customFieldDataProviderService"],mixins:[d.getByName("notification")],shortcuts:{"SYSTEMKEY+S":{active:function(){return this.allowSave},method:"onSave"},ESCAPE:"onCancel"},data:function(){return{deliveryTime:null,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null}},metaInfo:function(){return{title:this.$createTitle()}},computed:r(r({},m("deliveryTime",["name","min","max","unit"])),{},{deliveryTimeRepository:function(){return this.repositoryFactory.create("delivery_time")},deliveryTimeUnits:function(){return[{value:"hour",label:this.$tc("sw-settings-delivery-time.detail.selectionUnitHour")},{value:"day",label:this.$tc("sw-settings-delivery-time.detail.selectionUnitDay")},{value:"week",label:this.$tc("sw-settings-delivery-time.detail.selectionUnitWeek")},{value:"month",label:this.$tc("sw-settings-delivery-time.detail.selectionUnitMonth")},{value:"year",label:this.$tc("sw-settings-delivery-time.detail.selectionUnitYear")}]},displayName:function(){return this.deliveryTime&&this.deliveryTime.name?this.deliveryTime.name:this.$tc("sw-settings-delivery-time.detail.textHeadlineNew")},isInvalidMinField:function(){return this.deliveryTime.min>this.deliveryTime.max},invalidMinError:function(){return this.isInvalidMinField?new c({code:"DELIVERY_TIME_MIN_INVALID"}):null},allowSave:function(){return!!this.deliveryTime&&(this.deliveryTime.isNew()?this.acl.can("delivery_times.creator"):this.acl.can("delivery_times.editor"))},tooltipSave:function(){if(!this.allowSave)return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.allowSave,showOnDisabledElements:!0};var e=this.$device.getSystemKey();return{message:"".concat(e," + S"),appearance:"light"}},tooltipCancel:function(){return{message:"ESC",appearance:"light"}},showCustomFields:function(){return this.deliveryTime&&this.customFieldSets&&this.customFieldSets.length>0}}),created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;this.isLoading=!0,this.loadCustomFieldSets(),this.deliveryTimeRepository.get(this.$route.params.id).then((function(i){e.deliveryTime=i,e.isLoading=!1})).catch((function(i){throw e.createNotificationError({message:e.$tc("sw-settings-delivery-time.detail.errorLoad")}),e.isLoading=!1,i}))},loadCustomFieldSets:function(){var e=this;this.customFieldDataProviderService.getCustomFieldSets("delivery_time").then((function(i){e.customFieldSets=i}))},onSave:function(){var e=this;return this.isLoading=!0,this.isSaveSuccessful=!1,this.deliveryTimeRepository.save(this.deliveryTime,Shopware.Context.api).then((function(){e.isLoading=!1,e.isSaveSuccessful=!0})).catch((function(i){throw e.createNotificationError({message:e.$tc("sw-settings-delivery-time.detail.errorSave")}),e.isLoading=!1,i}))},onChangeLanguage:function(){this.createdComponent()},saveFinish:function(){this.isSaveSuccessful=!1},onCancel:function(){this.$router.push({name:"sw.settings.delivery.time.index"})}}}}}]);