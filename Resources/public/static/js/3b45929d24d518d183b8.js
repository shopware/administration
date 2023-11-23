(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[163],{"+1uo":function(e,n,l){var t=l("mNtt");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,l("P8hj").default)("6773858b",t,!0,{})},mNtt:function(e,n,l){},rt4m:function(e,n,l){"use strict";l.r(n);var t={template:'<div class="sw-cms-el-form-contact">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <div class="sw-cms-el-form-contact-form-group three-items">\n        <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.salutation\')">\n            <option\n                value=""\n                disabled\n                selected\n            >\n                {{ $tc(\'sw-cms.elements.form.element.label.salutationUndisclosed\') }}\n            </option>\n        </sw-select-field>\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.firstName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.lastName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n        />\n    </div>\n\n    <div class="sw-cms-el-form-contact-form-group two-items">\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.phone\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.phone\')"\n        />\n    </div>\n\n    <sw-text-field\n        :label="$tc(\'sw-cms.elements.form.element.label.subject\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.subject\')"\n    />\n\n    <sw-textarea-field\n        :label="$tc(\'sw-cms.elements.form.element.label.message\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.message\')"\n    />\n\n    <h4>{{ $tc(\'sw-cms.elements.form.element.label.privacy\') }}</h4>\n\n    <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n\n    <p class="sw-cms-el-form-note">\n        {{ $tc(\'sw-cms.elements.form.element.helpText.requiredFields\') }}\n    </p>\n\n    <div class="sw-cms-el-form__action">\n        {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n    </div>\n</div>\n',props:["formSettings"]},s={template:'<div class="sw-cms-el-form-newsletter">\n    <h3\n        v-if="formSettings.title.value.length > 0"\n        class="sw-cms-el-form-headline"\n    >\n        {{ formSettings.title.value }}\n    </h3>\n\n    <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.action\')">\n        <option\n            value=""\n            selected\n        >\n            {{ $tc(\'sw-cms.elements.form.element.label.subscribeToNewsletter\') }}\n        </option>\n    </sw-select-field>\n\n    <sw-text-field\n        :label="$tc(\'sw-cms.elements.form.element.label.email\')"\n        :value="$tc(\'sw-cms.elements.form.element.placeholder.email\')"\n    />\n\n    <div class="sw-cms-el-form-contact-form-group three-items">\n        <sw-select-field :label="$tc(\'sw-cms.elements.form.element.label.salutation\')">\n            <option\n                value=""\n                selected\n            >\n                {{ $tc(\'sw-cms.elements.form.element.label.salutationUndisclosed\') }}\n            </option>\n        </sw-select-field>\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.firstName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.firstName\')"\n        />\n\n        <sw-text-field\n            :label="$tc(\'sw-cms.elements.form.element.label.lastName\')"\n            :value="$tc(\'sw-cms.elements.form.element.placeholder.lastName\')"\n        />\n    </div>\n\n    <h4>{{ $tc(\'sw-cms.elements.form.element.label.privacy\') }}</h4>\n\n    <sw-checkbox-field :label="$tc(\'sw-cms.elements.form.element.helpText.privacy\')" />\n\n    <p class="sw-cms-el-form-note">\n        {{ $tc(\'sw-cms.elements.form.element.helpText.requiredFields\') }}\n    </p>\n\n    <div class="sw-cms-el-form__action">\n        {{ $tc(\'sw-cms.elements.form.element.label.send\') }}\n    </div>\n</div>\n\n',props:["formSettings"]},m=(l("+1uo"),Shopware.Mixin);n.default={template:'\n{% block sw_cms_element_form %}\n<div class="sw-cms-el-form">\n    <component\n        :is="selectedForm"\n        :form-settings="element.config"\n    />\n</div>\n{% endblock %}\n',mixins:[m.getByName("cms-element")],components:{contact:t,newsletter:s},computed:{selectedForm:function(){return this.element.config.type.value}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("form")}}}}}]);
//# sourceMappingURL=3b45929d24d518d183b8.js.map