(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[220],{"7JbI":function(n,s,e){},AYb6:function(n,s,e){"use strict";e.r(s);var o=e("XkwL"),i=e.n(o);e("kuV1"),s.default={template:'\n{% block sw_extension_permissions_modal %}\n<sw-modal\n    class="sw-extension-permissions-modal"\n    :title="modalTitle"\n    variant="small"\n    v-on="$listeners"\n>\n    \n    {% block sw_extension_permissions_modal_content %}\n    \n    {% block sw_extension_permissions_modal_intro %}\n    <div class="sw-extension-permissions-modal__intro">\n        \n        {% block sw_extension_permissions_modal_intro_image %}\n        <img\n            class="sw-extension-permissions-modal__image"\n            :src="\'/administration/static/img/extension-store/permissions.svg\' | asset"\n            alt=""\n        >\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_modal_intro_text %}\n        <p class="sw-extension-permissions-modal__description">\n            {{ descriptionText }}\n        </p>\n\n        <p\n            v-if="domainsList.length > 0"\n            class="sw-extension-permissions-modal__domain-hint"\n        >\n            {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.domainHint\') }}\n        </p>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_categories %}\n    <div class="sw-extension-permissions-modal__categories">\n        \n        {% block sw_extension_permissions_modal_category %}\n        <div\n            v-for="(permission, key) in permissionsWithGroupedOperations"\n            :key="key"\n            class="sw-extension-permissions-modal__category"\n        >\n            \n            {% block sw_extension_permissions_modal_category_inner %}\n            \n            {% block sw_extension_permissions_modal_category_label %}\n            <span class="sw-extension-permissions-modal__category-label">\n                {{ categoryLabel(key) }}\n            </span>\n            {% endblock %}\n\n            \n            {% block sw_extension_permissions_modal_link %}\n            <sw-button\n                class="sw-extension-permissions-modal__link"\n                @click="openDetailsModal(key)"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.textEntities\') }}\n                <sw-icon\n                    name="regular-long-arrow-right"\n                    size="16px"\n                />\n            </sw-button>\n            {% endblock %}\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_modal_category_domains %}\n        <div\n            v-if="domainsList.length > 0"\n            class="sw-extension-permissions-modal__category"\n        >\n            <span class="sw-extension-permissions-modal__category-label">\n                {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.domains\') }}\n            </span>\n\n            <sw-button\n                class="sw-extension-permissions-modal__link"\n                @click="toggleDomainsModal(true)"\n            >\n                {{ $tc(\'sw-extension-store.component.sw-extension-permissions-modal.showDomains\') }}\n\n                <sw-icon\n                    name="regular-long-arrow-right"\n                    size="16px"\n                />\n            </sw-button>\n        </div>\n        {% endblock %}\n    </div>\n    {% endblock %}\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_extension_permissions_modal_footer_inner %}\n        \n        {% block sw_extension_permissions_modal_footer_close %}\n        <sw-button\n            :variant="actionLabel === null ? \'primary\' : \'\'"\n            size="small"\n            @click="close"\n        >\n            {{ closeBtnLabel }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_extension_permissions_modal_footer_action %}\n        <sw-button\n            v-if="actionLabel"\n            variant="primary"\n            size="small"\n            @click="closeWithAction"\n        >\n            {{ actionLabel }}\n        </sw-button>\n        {% endblock %}\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_details %}\n    <sw-extension-permissions-details-modal\n        v-if="showDetailsModal"\n        :modal-title="modalTitle"\n        :permissions="permissionsWithGroupedOperations"\n        :selected-entity="selectedEntity"\n        @modal-close="closeDetailsModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_extension_permissions_modal_domains %}\n    <sw-extension-domains-modal\n        v-if="showDomainsModal"\n        :extension-label="extensionLabel"\n        :domains="domainsList"\n        @modal-close="toggleDomainsModal(false)"\n    />\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',props:{permissions:{type:Object,required:!0},domains:{type:Array,required:!1,default:function(){return[]}},extensionLabel:{type:String,required:!0},actionLabel:{type:String,required:!1,default:null},closeLabel:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null}},data:function(){return{showDetailsModal:!1,showDomainsModal:!1,selectedEntity:""}},computed:{modalTitle:function(){return this.title?this.title:this.$tc("sw-extension-store.component.sw-extension-permissions-modal.title",1,{extensionLabel:this.extensionLabel})},permissionsWithGroupedOperations:function(){return Object.fromEntries(Object.entries(this.permissions).map((function(n){var s=i()(n,2),e=s[0],o=s[1];return[e,o=o.reduce((function(n,s){var e=s.entity;return"additional_privileges"===e?(n[s.operation]=[],n):(n[e]=(n[e]||[]).concat(s.operation),n)}),{})]})))},domainsList:function(){return this.domains&&Array.isArray(this.domains)?this.domains:[]},closeBtnLabel:function(){return this.closeLabel?this.closeLabel:this.$tc("global.sw-modal.labelClose")},descriptionText:function(){return this.description?this.description:this.$tc("sw-extension-store.component.sw-extension-permissions-modal.description",1,{extensionLabel:this.extensionLabel})}},methods:{close:function(){this.$emit("modal-close")},closeWithAction:function(){this.$emit("close-with-action")},categoryLabel:function(n){return this.$tc("entityCategories.".concat(n,".title"))},openDetailsModal:function(n){this.selectedEntity=n,this.showDetailsModal=!0},closeDetailsModal:function(){this.selectedEntity="",this.showDetailsModal=!1},toggleDomainsModal:function(n){this.showDomainsModal=!!n}}}},kuV1:function(n,s,e){var o=e("7JbI");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);(0,e("ydqr").default)("23eea068",o,!0,{})}}]);