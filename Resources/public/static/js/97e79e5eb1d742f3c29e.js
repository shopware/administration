"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[61509],{261509:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});let{Mixin:i,Data:{Criteria:n}}=Shopware,a=Shopware.Classes.ShopwareError;var r={template:'\n{% block sw_settings_snippet_detail %}\n<sw-page class="sw-settings-snippet-detail">\n\n    \n    {% block sw_settings_snippet_detail_smart_bar %}\n    <template #smart-bar-back>\n        <router-link\n            class="smart-bar__back-btn"\n            :to="backPath"\n            :style="{ \'color\': moduleData.color }"\n        >\n            <sw-icon\n                name="regular-chevron-left"\n                small\n            />\n            <sw-icon\n                v-if="moduleData && moduleData.icon"\n                :name="moduleData.icon"\n                small\n            />\n        </router-link>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="translationKey">\n            {{ translationKey }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-snippet.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_snippet_detail_actions_abort %}\n        <sw-button\n            :disabled="isLoading"\n            :router-link="backPath"\n        >\n            {{ $tc(\'sw-settings-snippet.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_snippet_detail_actions_save %}\n        <sw-button-process\n            v-tooltip="getNoPermissionsTooltip(\'snippet.editor\')"\n            class="sw-snippet-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!acl.can(\'snippet.editor\') || isLoading || !translationKey || !isSaveable"\n            variant="primary"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-snippet.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_snippet_set_detail_card %}\n                <div class="sw-settings-snippet-set-detail-card">\n                    \n                    {% block sw_settings_snippet_set_detail_card_information %}\n                    <sw-card\n                        position-identifier="sw-settings-snippet-detail-information"\n                        :title="$tc(\'sw-settings-snippet.detail.cardGeneralTitle\')"\n                        :is-loading="isLoading"\n                    >\n                        <div class="snippet-general-card">\n                            \n                            {% block sw_settings_snippet_set_detail_card_information_key %}\n                            <sw-text-field\n                                v-model:value="translationKey"\n                                v-tooltip.bottom="getNoPermissionsTooltip(\'snippet.editor\')"\n                                name="sw-field--translationKey"\n                                :label="$tc(\'sw-settings-snippet.detail.labelName\')"\n                                :placeholder="$tc(\'sw-settings-snippet.detail.labelNamePlaceholder\')"\n                                :disabled="!(isCreate || isAddedSnippet)"\n                                :error="invalidKeyError"\n                                @update:value="onChange"\n                            />\n                            {% endblock %}\n                        </div>\n                    </sw-card>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_set_detail_card_snippets %}\n                    <sw-card\n                        position-identifier="sw-settings-snippet-detail-snippets"\n                        :title="$tc(\'sw-settings-snippet.detail.cardSnippetSetsTitle\')"\n                        :is-loading="isLoading"\n                    >\n                        <div class="snippet-overview-card">\n                            \n                            {% block sw_settings_snippet_set_detail_card_snippets_fields %}\n                            <sw-text-field\n                                v-for="(snippet, index) in snippets"\n                                :key="snippet.setId"\n                                v-model:value="snippet.value"\n                                v-tooltip.bottom="getNoPermissionsTooltip(\'snippet.editor\')"\n                                name="sw-field--snippet-value"\n                                :class="`sw-settings-snippet-detail__translation-field--${index}`"\n                                :disabled="!acl.can(\'snippet.editor\')"\n                                :label="$tc(\'sw-settings-snippet.detail.labelContent\', 0, { name: sets.get(snippet.setId).name })"\n                                :placeholder="snippet.origin || $tc(\'sw-settings-snippet.general.placeholderValue\')"\n                                @update:value="onChange"\n                            />\n                            {% endblock %}\n                        </div>\n                    </sw-card>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',compatConfig:Shopware.compatConfig,inject:["snippetSetService","repositoryFactory","acl"],mixins:[i.getByName("notification")],data(){return{isLoading:!0,isCreate:!1,isAddedSnippet:!1,isSaveable:!0,isInvalidKey:!1,queryIds:this.$route.query.ids,page:this.$route.query.page,limit:this.$route.query.limit,moduleData:this.$route.meta.$module,translationKey:"",translationKeyOrigin:"",snippets:[],sets:{},isSaveSuccessful:!1,pushParams:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.translationKey},snippetRepository(){return this.repositoryFactory.create("snippet")},snippetSetRepository(){return this.repositoryFactory.create("snippet_set")},snippetSetCriteria(){let t=new n(1,null);return t.addSorting(n.sort("name","ASC")),t},backPath(){return this.$route.query?.ids?.length>0?{name:"sw.settings.snippet.list",query:{ids:this.$route.query.ids,limit:this.$route.query.limit,page:this.$route.query.page}}:{name:"sw.settings.snippet.index"}},invalidKeyError(){return this.isInvalidKey?new a({code:"DUPLICATED_SNIPPET_KEY",parameters:{key:this.translationKey}}):null},currentAuthor:{get(){return this._currentAuthor||`user/${Shopware.State.get("session").currentUser.username}`}}},created(){this.createdComponent()},methods:{createdComponent(){this.translationKeyOrigin=this.$route.params.key,this.prepareContent()},prepareContent(){this.isLoading=!0,this.$route.params.key||this.isCreate||this.onNewKeyRedirect(),this.translationKey=this.$route.params.key||"",this.snippetSetRepository.search(this.snippetSetCriteria).then(t=>{this.sets=t,this.initializeSnippet()}).finally(()=>{this.isLoading=!1})},initializeSnippet(){this.snippets=this.createSnippetDummy(),this.getCustomList().then(t=>{if(!t.total){this.isAddedSnippet=!0;return}this.applySnippetsToDummies(t.data[this.translationKey])})},applySnippetsToDummies(t){this.snippets.forEach(e=>{let s=t.find(t=>e.setId===t.setId);return s&&(e.author=s.author,e.id=s.id,e.value=s.value,e.origin=s.origin,e.translationKey=s.translationKey,e.setId=s.setId,s.id&&(e._isNew=!1)),e}),this.isAddedSnippet=t.some(t=>t.author.startsWith("user/")||""===t.author)},createSnippetDummy(){let t=[];return this.sets.forEach(e=>{let s=this.snippetRepository.create();s.author=this.currentAuthor,s.id=null,s.value=null,s.origin=null,s.translationKey=this.translationKey,s.setId=e.id,t.push(s)}),t},saveFinish(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.settings.snippet.detail",params:this.pushParams,query:{ids:this.queryIds,page:this.page,limit:this.limit}})},onSave(){let t=[];if(this.isSaveSuccessful=!1,this.isLoading=!0,this.isSaveable=this.checkIsSaveable(),!this.isSaveable){this.isLoading=!1,this.createNotificationError({message:this.$tc("sw-settings-snippet.detail.messageSaveError",0,{key:this.translationKey})});return}this.snippets.forEach(e=>{e.author||(e.author=this.currentAuthor),e.hasOwnProperty("value")&&null!==e.value||(e.value=e.origin),e.translationKey!==this.translationKey?(e.translationKey=this.translationKey,this.$route.params.key=this.translationKey,this.translationKeyOrigin=this.translationKey,t.push(this.snippetRepository.save(e))):e.origin!==e.value?t.push(this.snippetRepository.save(e)):e.hasOwnProperty("id")&&null!==e.id&&t.push(this.snippetRepository.delete(e.id))}),Promise.all(t).then(()=>{this.onNewKeyRedirect(!0),this.prepareContent(),this.isLoading=!1,this.isSaveSuccessful=!0}).catch(t=>{let e="";this.isLoading=!1,t.response.data.errors.length>0&&(e=`<br/>Error Message: "${t.response.data.errors[0].detail}"`),this.createNotificationError({message:this.$tc("sw-settings-snippet.detail.messageSaveError",0,{key:this.translationKey})+e})})},onChange(){if(!this.translationKey||this.translationKey.trim().length<=0){this.isSaveable=!1,this.isInvalidKey=!0;return}this.isInvalidKey=!1,this.doChange()},doChange:Shopware.Utils.debounce(function(){this.getCustomList().then(t=>{if(this.isSaveable=!1,!t.total||Object.keys(t.data)[0]===this.translationKeyOrigin){this.isSaveable=this.checkIsSaveable();return}this.isInvalidKey=!0,this.isSaveable=!1}),this.isSaveable&&(this.isCreate||this.isAddedSnippet)&&(this.translationKey=this.translationKey.trim())},1e3),onNewKeyRedirect(t=!1){this.isSaveSuccessful=!0;let e={key:this.translationKey};t&&(e.origin=this.translationKey),this.isCreate=!1,this.pushParams=e},getCustomList(){return this.snippetSetService.getCustomList(1,25,{translationKey:[this.translationKey]})},checkIsSaveable(){let t=0;return this.snippets.forEach(e=>{null!==e.value&&(this.translationKey.trim()!==this.translationKeyOrigin&&(t+=1),e.value.trim().length>=0&&(t+=1))}),t>0},getNoPermissionsTooltip(t,e=!0){return{showDelay:300,appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t),message:this.$tc("sw-privileges.tooltip.warning")}}}}}}]);