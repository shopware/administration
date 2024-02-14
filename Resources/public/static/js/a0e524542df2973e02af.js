"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[31382],{31382:function(t,e,i){i.r(e),i.d(e,{default:function(){return s}});let{Mixin:a}=Shopware,{Criteria:l}=Shopware.Data;var s={template:'\n{% block sw_mail_template_list_grid %}\n<sw-card\n    :title="$tc(\'sw-mail-template.list.titleMailTemplateList\')"\n    position-identifier="sw-mail-template-list"\n>\n\n    \n    {% block sw_mail_template_list_grid_empty_state %}\n    <sw-empty-state\n        v-if="!isLoading && !showListing"\n        :title="$tc(\'sw-mail-template.list.emptyStateTitle\')"\n        :subline="$tc(\'sw-mail-template.list.emptyStateSubTitle\')"\n        :absolute="false"\n    >\n\n        \n        {% block sw_mail_template_list_grid_empty_state_icon %}\n        <template #icon>\n            <img\n                :src="assetFilter(\'/administration/static/img/empty-states/settings-empty-state.svg\')"\n                alt=""\n            >\n        </template>\n        {% endblock %}\n\n    </sw-empty-state>\n    {% endblock %}\n\n    <template #grid>\n        <sw-entity-listing\n            v-if="isLoading || showListing"\n            id="mailTemplateGrid"\n            class="sw-mail-templates-list-grid"\n            detail-route="sw.mail.template.detail"\n            identifier="sw-mail-template-list"\n            :items="mailTemplates"\n            :columns="getListColumns()"\n            :repository="mailTemplateRepository"\n            :full-page="false"\n            :is-loading="isLoading"\n            :allow-view="acl.can(\'mail_templates.viewer\')"\n            :allow-edit="acl.can(\'mail_templates.editor\')"\n            :allow-delete="acl.can(\'mail_templates.deleter\')"\n            :show-selection="acl.can(\'mail_templates.deleter\')"\n            :skeleton-item-amount="skeletonItemAmount"\n            @update-records="updateRecords"\n        >\n            \n            {% block sw_mail_template_list_grid_columns %}\n            {% endblock %}\n\n            \n            {% block sw_mail_template_list_grid_actions %}\n            <template #more-actions="{ item }">\n                \n                {% block sw_mail_template_list_grid_columns_actions_duplicate %}\n                <sw-context-menu-item\n                    class="sw-mail-template-list-grid__duplicate-action"\n                    :disabled="!acl.can(\'mail_templates.creator\')"\n                    @click="onDuplicate(item.id)"\n                >\n                    {{ $tc(\'sw-mail-template.list.contextMenuDuplicate\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n        </sw-entity-listing>\n    </template>\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory","acl"],mixins:[a.getByName("listing"),a.getByName("notification")],props:{searchTerm:{type:String,required:!1,default:""}},data(){return{mailTemplates:null,showDeleteModal:null,isLoading:!1}},computed:{mailTemplateRepository(){return this.repositoryFactory.create("mail_template")},skeletonItemAmount(){return this.mailTemplates&&0!==this.mailTemplates.length?this.mailTemplates.length:3},showListing(){return!!this.mailTemplates&&0!==this.mailTemplates.length},assetFilter(){return Shopware.Filter.getByName("asset")}},watch:{searchTerm(){this.getList()}},methods:{getList(){this.isLoading=!0;let t=new l(this.page,this.limit);t.addAssociation("mailTemplateType").addSorting(l.sort("mailTemplateType.name")),this.searchTerm&&t.setTerm(this.searchTerm),this.mailTemplateRepository.search(t).then(t=>(this.total=t.total,this.mailTemplates=t,this.isLoading=!1,this.mailTemplates))},getListColumns(){return[{property:"mailTemplateType.name",dataIndex:"mailTemplateType.name",label:"sw-mail-template.list.columnMailType",allowResize:!0,routerLink:"sw.mail.template.detail",primary:!0},{property:"description",dataIndex:"description",label:"sw-mail-template.list.columnDescription",allowResize:!0}]},onChangeLanguage(t){this.getList(t)},onDuplicate(t){this.isLoading=!0,this.mailTemplateRepository.clone(t).then(t=>{this.getList(),this.isLoading=!1,this.$router.push({name:"sw.mail.template.detail",params:{id:t.id}})})},updateRecords(t){this.mailTemplates=t}}}}}]);