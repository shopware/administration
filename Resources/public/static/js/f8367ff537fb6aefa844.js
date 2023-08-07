(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[593],{"11Ug":function(e,t,n){"use strict";n.r(t);var r=n("CsSd"),l=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=Shopware,i=p.Component,a=p.Mixin,s=i.getComponentHelper().mapPropertyErrors;t.default={template:'\n{% block sw_property_detail_base %}\n<sw-card\n    v-if="propertyGroup"\n    position-identifier="sw-property-detail-base"\n    :title="$tc(\'sw-property.detail.cardTitleGroupInfo\')"\n    :is-loading="isLoading"\n>\n\n    \n    {% block sw_property_detail_base_name %}\n    <sw-field\n        v-model="propertyGroup.name"\n        type="text"\n        required\n        :error="propertyGroupNameError"\n        :label="$tc(\'sw-property.detail.labelName\')"\n        :placeholder="placeholder(propertyGroup, \'name\', $tc(\'sw-property.detail.placeholderName\'))"\n        :disabled="!allowEdit"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_detail_base_description %}\n    <sw-field\n        v-model="propertyGroup.description"\n        type="textarea"\n        :label="$tc(\'sw-property.detail.labelDescription\')"\n        :placeholder="placeholder(propertyGroup, \'description\', $tc(\'sw-property.detail.placeholderDescription\'))"\n        :disabled="!allowEdit"\n    />\n    {% endblock %}\n\n    \n    {% block sw_property_detail_filter_visible_container %}\n    <sw-container\n        columns="repeat(2, 1fr)"\n        gap="0px 30px"\n    >\n        \n        {% block sw_property_detail_base_filterable %}\n        <sw-switch-field\n            v-model="propertyGroup.filterable"\n            name="propertyGroupFilterable"\n            class="sw-property-detail__filterable"\n            :label="$tc(\'sw-property.detail.labelFilterable\')"\n            :disabled="!allowEdit"\n        />\n        {% endblock %}\n\n        \n        {% block sw_property_detail_base_visible_on_detail %}\n        <sw-switch-field\n            v-model="propertyGroup.visibleOnProductDetailPage"\n            name="propertyGroupvisibleOnProductDetailPage"\n            class="sw-property-detail__visible-on-detail"\n            :label="$tc(\'sw-property.detail.labelvisibleOnProductDetailPage\')"\n            :disabled="!allowEdit"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n\n    \n    {% block sw_property_detail_sorting_display_container %}\n    <sw-container\n        columns="repeat(3, 1fr)"\n        gap="0px 30px"\n    >\n        \n        {% block sw_property_detail_display_type %}\n        <sw-field\n            v-model="propertyGroup.displayType"\n            type="select"\n            validation="required"\n            required\n            :label="$tc(\'sw-property.detail.labelDisplayType\')"\n            :disabled="!allowEdit"\n        >\n            <option\n                v-for="option in displayTypes"\n                :key="option.value"\n                :value="option.value"\n            >\n                {{ option.label }}\n            </option>\n        </sw-field>\n        {% endblock %}\n\n        \n        {% block sw_property_detail_sorting_type %}\n        <sw-field\n            v-model="propertyGroup.sortingType"\n            type="select"\n            validation="required"\n            :disabled="!allowEdit"\n            required\n            :label="$tc(\'sw-property.detail.labelSortingType\')"\n        >\n            <option\n                v-for="option in sortingTypes"\n                :key="option.value"\n                :value="option.value"\n            >\n                {{ option.label }}\n            </option>\n        </sw-field>\n        {% endblock %}\n\n        \n        {% block sw_property_detail_position %}\n        <sw-number-field\n            v-model="propertyGroup.position"\n            pattern="[0-9]"\n            :step="1"\n            :label="$tc(\'sw-property.detail.labelPosition\')"\n            :disabled="!allowEdit"\n            :placeholder="$tc(\'sw-property.detail.placeholderPosition\')"\n        />\n        {% endblock %}\n    </sw-container>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',mixins:[a.getByName("placeholder")],props:{propertyGroup:{type:Object,required:!0,default:function(){return{}}},isLoading:{type:Boolean,default:!1},allowEdit:{type:Boolean,required:!1,default:!0}},data:function(){return{sortingTypes:[{value:"alphanumeric",label:this.$tc("sw-property.detail.alphanumericSortingType")},{value:"position",label:this.$tc("sw-property.detail.positionSortingType")}],displayTypes:[{value:"media",label:this.$tc("sw-property.detail.mediaDisplayType")},{value:"text",label:this.$tc("sw-property.detail.textDisplayType")},{value:"select",label:this.$tc("sw-property.detail.selectDisplayType")},{value:"color",label:this.$tc("sw-property.detail.colorDisplayType")}]}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},s("propertyGroup",["name","displayType","sortingType"]))}}}]);