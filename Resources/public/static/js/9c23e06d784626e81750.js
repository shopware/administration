(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[162],{"F+ES":function(e,n,t){"use strict";t.r(n);t("wTC+");var i=Shopware.Mixin;n.default={template:'\n{% block sw_cms_el_config_form %}\n<sw-tabs\n    position-identifier="sw-cms-element-config-form"\n    class="sw-cms-el-config-form__tabs"\n    default-item="content"\n>\n\n    <template #default="{ active }">\n        \n        {% block sw_cms_el_config_form_tab_content %}\n        <sw-tabs-item\n            :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n            name="content"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n        </sw-tabs-item>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_form_config_tab_options %}\n        <sw-tabs-item\n            v-if="element.config.type.value === \'contact\'"\n            :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n            name="options"\n            :active-tab="active"\n        >\n            {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n        </sw-tabs-item>\n        {% endblock %}\n    </template>\n\n    <template\n        #content="{ active }"\n    >\n        \n        {% block sw_cms_el_form_config_content %}\n        <sw-container\n            v-if="active === \'content\'"\n            class="sw-cms-el-config-form__tab-content"\n        >\n\n            \n            {% block sw_cms_el_form_config_content_form_type %}\n            <sw-select-field\n                v-model="element.config.type.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.type\')"\n            >\n                \n                {% block sw_cms_el_form_config_content_form_type_options %}\n                <option\n                    value=""\n                    disabled\n                >\n                    {{ $tc(\'sw-cms.elements.form.config.label.type\') }}\n                </option>\n                <option value="contact">\n                    {{ $tc(\'sw-cms.elements.form.config.label.typeContact\') }}\n                </option>\n                <option value="newsletter">\n                    {{ $tc(\'sw-cms.elements.form.config.label.typeNewsletter\') }}\n                </option>\n                {% endblock %}\n            </sw-select-field>\n            {% endblock %}\n\n            \n            {% block sw_cms_el_form_config_content_form_title %}\n            <sw-text-field\n                v-model="element.config.title.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.title\')"\n            />\n            {% endblock %}\n\n            \n            {% block sw_cms_el_form_config_content_form_confirmation_text %}\n            <sw-textarea-field\n                v-if="element.config.type.value === \'contact\'"\n                v-model="element.config.confirmationText.value"\n                :label="$tc(\'sw-cms.elements.form.config.label.confirmationText\')"\n            />\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n\n        \n        {% block sw_cms_el_form_config_options %}\n        <sw-container\n            v-else-if="active === \'options\' && element.config.type.value === \'contact\'"\n            class="sw-cms-el-config-form__tab-options"\n        >\n            <sw-tagged-field\n                v-model="element.config.mailReceiver.value"\n                :class="getLastMailClass"\n                :label="$tc(\'sw-cms.elements.form.config.label.receiverEmail\')"\n                name="mailReceiver"\n                placeholder="john@doe.com"\n                @change="updateMailReceiver"\n            />\n        </sw-container>\n        {% endblock %}\n    </template>\n</sw-tabs>\n{% endblock %}\n',inject:["systemConfigApiService"],mixins:[i.getByName("cms-element")],computed:{getLastMailClass:function(){return 1===this.element.config.mailReceiver.value.length?"is--last":""}},created:function(){this.createdComponent(),this.setShopMail()},methods:{createdComponent:function(){this.initElementConfig("form")},getShopMail:function(){var e=this;return new Promise((function(n){e.systemConfigApiService.getValues("core.basicInformation").then((function(e){n(e["core.basicInformation.email"])}))}))},setShopMail:function(){var e=this;this.getShopMail().then((function(n){e.element.config.defaultMailReceiver.value&&!e.element.config.mailReceiver.value.includes(n)&&e.element.config.mailReceiver.value.push(n)}))},updateMailReceiver:function(){var e=this;this.validateMail()&&this.getShopMail().then((function(n){e.element.config.mailReceiver.value.includes(n)?e.element.config.defaultMailReceiver.value=!0:e.element.config.defaultMailReceiver.value=!1}))},validateMail:function(){var e=this.element.config.mailReceiver.value[this.element.config.mailReceiver.value.length-1];if(e){if(null==e.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))return this.element.config.mailReceiver.value.pop(),!1}return!0}}}},"wTC+":function(e,n,t){var i=t("yrGk");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t("ydqr").default)("006400ab",i,!0,{})},yrGk:function(e,n,t){}}]);