(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[345],{Kzg8:function(e,n,r){"use strict";r.r(n);r("tJgk"),n.default={template:'\n{% block sw_privilege_error %}\n<sw-page class="sw-privilege-error">\n    \n    {% block sw_privilege_error_inner %}\n    <template #content>\n        \n        {% block sw_privilege_error_inner_content %}\n        <div class="sw-privilege-error__content">\n            \n            {% block sw_privilege_error_inner_content_image %}\n            <img\n                class="sw-privilege-error__access-denied-image"\n                :src="assetFilter(\'administration/static/img/privileges/access-denied.svg\')"\n                alt=""\n            >\n            {% endblock %}\n\n            \n            {% block sw_privilege_error_inner_content_headline %}\n            <h1>{{ $tc(\'sw-privilege-error.general.mainMenuItemGeneral\') }}</h1>\n            {% endblock %}\n\n            \n            {% block sw_privilege_error_inner_content_description %}\n            <p>{{ $tc(\'sw-privilege-error.general.descriptionTextModule\') }}</p>\n            {% endblock %}\n\n            \n            {% block sw_privilege_error_inner_content_back_button %}\n            <sw-button\n                variant="primary"\n                class="sw-privilege-error__back-button"\n                @click="routerGoBack"\n            >\n                {{ $tc(\'sw-privilege-error.general.goBack\') }}\n            </sw-button>\n            {% endblock %}\n        </div>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{assetFilter:function(){return Shopware.Filter.getByName("asset")}},methods:{routerGoBack:function(){this.$router.go(-1)}}}},VrdZ:function(e,n,r){},tJgk:function(e,n,r){var t=r("VrdZ");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,r("P8hj").default)("1e94f7fe",t,!0,{})}}]);