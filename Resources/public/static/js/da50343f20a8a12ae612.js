(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[41022],{233522:function(){},841022:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return s}}),l(928155);let{Mixin:t}=Shopware;var s={template:'\n{% block sw_cms_element_form %}\n<div class="sw-cms-el-form">\n    <component\n        :is="selectedForm"\n        :form-settings="element.config"\n    />\n</div>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,mixins:[t.getByName("cms-element")],components:{contact:{template:'<div class="sw-cms-el-form-contact">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <div class="sw-cms-el-form-contact-form-group three-items">\n        <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.salutation\')">\n            <option\n                value=""\n                disabled\n                selected\n            >\n                {{ $tc(\'sw-cms.elements.form.element.label.salutationUndisclosed\') }}\n            </option>\n        </sw-select-field>\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.firstName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.lastName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n        />\n    </div>\n\n    <div class="sw-cms-el-form-contact-form-group two-items">\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.phone\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.phone\')"\n        />\n    </div>\n\n    <sw-text-field\n        :label="$tc(\'sw-cms.elements.form.element.label.subject\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.subject\')"\n    />\n\n    <sw-textarea-field\n        :label="$tc(\'sw-cms.elements.form.element.label.message\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.message\')"\n    />\n\n    <h4>{{ $tc(\'sw-cms.elements.form.element.label.privacy\') }}</h4>\n\n    <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n\n    <p class="sw-cms-el-form-note">\n        {{ $tc(\'sw-cms.elements.form.element.helpText.requiredFields\') }}\n    </p>\n\n    <div class="sw-cms-el-form__action">\n        {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n    </div>\n</div>\n',props:["formSettings"]},newsletter:{template:'<div class="sw-cms-el-form-newsletter">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.action\')">\n        <option\n            value=""\n            selected\n        >\n            {{ $tc(\'sw-cms.elements.form.element.label.subscribeToNewsletter\') }}\n        </option>\n    </sw-select-field>\n\n    <sw-text-field\n        :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n    />\n\n    <div class="sw-cms-el-form-contact-form-group three-items">\n        <sw-select-field :label="$tc(\'sw-cms.elements.form.element.newsletter.label.salutation\')">\n            <option\n                value=""\n                selected\n            >\n                {{ $tc(\'sw-cms.elements.form.element.label.salutationUndisclosed\') }}\n            </option>\n        </sw-select-field>\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.newsletter.label.firstName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.newsletter.label.lastName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n        />\n    </div>\n\n    <h4>{{ $tc(\'sw-cms.elements.form.element.label.privacy\') }}</h4>\n\n    <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n\n    <p class="sw-cms-el-form-note">\n        {{ $tc(\'sw-cms.elements.form.element.helpText.requiredFields\') }}\n    </p>\n\n    <div class="sw-cms-el-form__action">\n        {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n    </div>\n</div>\n\n',props:["formSettings"]}},computed:{selectedForm(){return this.element.config.type.value}},created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("form")}}}},928155:function(e,n,l){var t=l(233522);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),l(745346).Z("03338e68",t,!0,{})}}]);