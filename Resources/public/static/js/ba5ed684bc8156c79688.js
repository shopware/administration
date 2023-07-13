(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[657],{"88R4":function(s,n,e){"use strict";e.r(n);var i=e("HZZ/"),t=e.n(i),r=e("hJxD"),a=e.n(r),o=Shopware.Mixin;n.default={template:'\n{% block sw_users_permissions %}\n<sw-page class="sw-users-permissions">\n    \n    {% block sw_users_permissions_smart_bar_header %}\n    <template #smart-bar-header>\n        <h2>\n            \n            {% block sw_users_permissions_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-users-permissions.general.label\') }}\n            {% endblock %}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_smart_bar_actions %}\n    <template #smart-bar-actions>\n        <sw-button-process\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!acl.can(\'users_and_permissions.editor\')"\n            @click="onSave"\n            @process-finish="onSaveFinish"\n        >\n            {{ $tc(\'global.default.save\') }}\n        </sw-button-process>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_users_permissions_content %}\n    <template #content>\n        <sw-card-view>\n            \n            {% block sw_users_permissions_content_user_list %}\n            <sw-users-permissions-user-listing\n                ref="userListing"\n            />\n            <sw-users-permissions-role-listing\n                ref="roleListing"\n                @get-list="reloadUserListing"\n            />\n            <sw-users-permissions-configuration\n                ref="configuration"\n                @loading-change="onChangeLoading"\n            />\n            {% endblock %}\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["feature","acl"],mixins:[o.getByName("notification")],data:function(){return{isLoading:!0,isSaveSuccessful:!1}},metaInfo:function(){return{title:this.$createTitle()}},methods:{reloadUserListing:function(){this.$refs.userListing&&this.$refs.userListing.getList(),this.$refs.roleListing&&this.$refs.roleListing.getList()},onChangeLoading:function(s){this.isLoading=s},onSave:function(){var s=this;return t()(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s.isLoading=!0,s.isSaveSuccessful=!1,n.prev=2,n.next=5,s.$refs.configuration.$refs.systemConfig.saveAll();case 5:s.isLoading=!1,s.isSaveSuccessful=!0,n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),s.isLoading=!1,s.createNotificationError({message:n.t0.message});case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))()},onSaveFinish:function(){this.isSaveSuccessful=!1}}}}}]);