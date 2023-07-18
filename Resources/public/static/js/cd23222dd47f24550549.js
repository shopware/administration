(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[646],{Lkgv:function(t,e,n){"use strict";n.r(e);var i=n("Rw87"),s=Shopware,a=s.Mixin,r=s.Data.Criteria,o=Shopware.Classes.ShopwareError,l=Shopware.Utils;e.default={template:'\n{% block sw_settings_snippet_detail %}\n<sw-page class="sw-settings-snippet-detail">\n\n    \n    {% block sw_settings_snippet_detail_smart_bar %}\n    <template #smart-bar-back>\n        <router-link\n            class="smart-bar__back-btn"\n            :to="backPath"\n            :style="{ \'color\': moduleData.color }"\n        >\n            <sw-icon\n                name="regular-chevron-left"\n                small\n            />\n            <sw-icon\n                v-if="moduleData && moduleData.icon"\n                :name="moduleData.icon"\n                small\n            />\n        </router-link>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_detail_header %}\n    <template #smart-bar-header>\n        <h2 v-if="translationKey">\n            {{ translationKey }}\n        </h2>\n        <h2 v-else>\n            {{ $tc(\'sw-settings-snippet.detail.textHeadline\') }}\n        </h2>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_snippet_detail_actions_abort %}\n        <sw-button\n            :disabled="isLoading"\n            :router-link="backPath"\n        >\n            {{ $tc(\'sw-settings-snippet.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_snippet_detail_actions_save %}\n        <sw-button-process\n            v-tooltip="getNoPermissionsTooltip(\'snippet.editor\')"\n            class="sw-snippet-detail__save-action"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!acl.can(\'snippet.editor\') || isLoading || !translationKey || !isSaveable"\n            variant="primary"\n            @process-finish="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-snippet.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_snippet_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_snippet_set_detail_card %}\n                <div class="sw-settings-snippet-set-detail-card">\n                    \n                    {% block sw_settings_snippet_set_detail_card_information %}\n                    <sw-card\n                        position-identifier="sw-settings-snippet-detail-information"\n                        :title="$tc(\'sw-settings-snippet.detail.cardGeneralTitle\')"\n                        :is-loading="isLoading"\n                    >\n                        <div class="snippet-general-card">\n                            \n                            {% block sw_settings_snippet_set_detail_card_information_key %}\n                            <sw-field\n                                v-model="translationKey"\n                                v-tooltip.bottom="getNoPermissionsTooltip(\'snippet.editor\')"\n                                type="text"\n                                :label="$tc(\'sw-settings-snippet.detail.labelName\')"\n                                :placeholder="$tc(\'sw-settings-snippet.detail.labelNamePlaceholder\')"\n                                :disabled="!(isCreate || isAddedSnippet)"\n                                :error="invalidKeyError"\n                                @input="onChange"\n                            />\n                            {% endblock %}\n                        </div>\n                    </sw-card>\n                    {% endblock %}\n\n                    \n                    {% block sw_settings_snippet_set_detail_card_snippets %}\n                    <sw-card\n                        position-identifier="sw-settings-snippet-detail-snippets"\n                        :title="$tc(\'sw-settings-snippet.detail.cardSnippetSetsTitle\')"\n                        :is-loading="isLoading"\n                    >\n                        <div class="snippet-overview-card">\n                            \n                            {% block sw_settings_snippet_set_detail_card_snippets_fields %}\n                            <sw-field\n                                v-for="(snippet, index) in snippets"\n                                :key="snippet.setId"\n                                v-model="snippet.value"\n                                v-tooltip.bottom="getNoPermissionsTooltip(\'snippet.editor\')"\n                                type="text"\n                                :class="`sw-settings-snippet-detail__translation-field--${index}`"\n                                :disabled="!acl.can(\'snippet.editor\')"\n                                :label="$tc(\'sw-settings-snippet.detail.labelContent\', 0, { name: sets.get(snippet.setId).name })"\n                                :placeholder="snippet.origin || $tc(\'sw-settings-snippet.general.placeholderValue\')"\n                                @input="onChange"\n                            />\n                            {% endblock %}\n                        </div>\n                    </sw-card>\n                    {% endblock %}\n                </div>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["snippetSetService","repositoryFactory","acl"],mixins:[a.getByName("notification")],data:function(){return{isLoading:!0,isCreate:!1,isAddedSnippet:!1,isSaveable:!0,isInvalidKey:!1,queryIds:this.$route.query.ids,page:this.$route.query.page,limit:this.$route.query.limit,moduleData:this.$route.meta.$module,translationKey:"",translationKeyOrigin:"",snippets:[],sets:{},isSaveSuccessful:!1,pushParams:null}},metaInfo:function(){return{title:this.$createTitle(this.identifier)}},computed:{identifier:function(){return this.translationKey},snippetRepository:function(){return this.repositoryFactory.create("snippet")},snippetSetRepository:function(){return this.repositoryFactory.create("snippet_set")},snippetSetCriteria:function(){var t=new r(1,null);return t.addSorting(r.sort("name","ASC")),t},backPath:function(){return this.$route.query.ids&&this.$route.query.ids.length>0?{name:"sw.settings.snippet.list",query:{ids:this.$route.query.ids,limit:this.$route.query.limit,page:this.$route.query.page}}:{name:"sw.settings.snippet.index"}},invalidKeyError:function(){return this.isInvalidKey?new o({code:"DUPLICATED_SNIPPET_KEY",parameters:{key:this.translationKey}}):null},currentAuthor:{get:function(){return this._currentAuthor||"user/".concat(Shopware.State.get("session").currentUser.username)}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.translationKeyOrigin=this.$route.params.key,this.prepareContent()},prepareContent:function(){var t=this;this.isLoading=!0,this.$route.params.key||this.isCreate||this.onNewKeyRedirect(),this.translationKey=this.$route.params.key||"",this.snippetSetRepository.search(this.snippetSetCriteria).then((function(e){t.sets=e,t.initializeSnippet()})).finally((function(){t.isLoading=!1}))},initializeSnippet:function(){var t=this;this.snippets=this.createSnippetDummy(),this.getCustomList().then((function(e){e.total?t.applySnippetsToDummies(e.data[t.translationKey]):t.isAddedSnippet=!0}))},applySnippetsToDummies:function(t){this.snippets.forEach((function(e){var n=t.find((function(t){return e.setId===t.setId}));return n&&(e.author=n.author,e.id=n.id,e.value=n.value,e.origin=n.origin,e.translationKey=n.translationKey,e.setId=n.setId,n.id&&(e._isNew=!1)),e})),this.isAddedSnippet=t.some((function(t){return t.author.startsWith("user/")||""===t.author}))},createSnippetDummy:function(){var t=this,e=[];return this.sets.forEach((function(n){var i=t.snippetRepository.create();i.author=t.currentAuthor,i.id=null,i.value=null,i.origin=null,i.translationKey=t.translationKey,i.setId=n.id,e.push(i)})),e},saveFinish:function(){this.isSaveSuccessful=!1,this.$router.push({name:"sw.settings.snippet.detail",params:this.pushParams,query:{ids:this.queryIds,page:this.page,limit:this.limit}})},onSave:function(){var t=this,e=[];this.isSaveSuccessful=!1,this.isLoading=!0,this.isSaveable=this.checkIsSaveable(),this.isSaveable||(this.isLoading=!1,this.createNotificationError({title:this.$tc("global.default.error"),message:this.$tc("sw-settings-snippet.detail.messageSaveError",0,{key:this.translationKey})})),this.snippets.forEach((function(n){if(n.author||(n.author=t.currentAuthor),n.value=i.a.sanitize(n.value,{ADD_ATTR:["target"]}),n.hasOwnProperty("value")&&null!==n.value||(n.value=n.origin),n.translationKey!==t.translationKey){if(null!==n.id&&e.push(t.snippetRepository.delete(n.id)),null===n.value||""===n.value)return;n.translationKey=t.translationKey,n.id=null,e.push(t.snippetRepository.save(n))}else n.origin!==n.value?e.push(t.snippetRepository.save(n)):n.hasOwnProperty("id")&&null!==n.id&&e.push(t.snippetRepository.delete(n.id))})),Promise.all(e).then((function(){t.onNewKeyRedirect(!0),t.prepareContent(),t.isLoading=!1,t.isSaveSuccessful=!0})).catch((function(e){var n="";t.isLoading=!1,e.response.data.errors.length>0&&(n='<br/>Error Message: "'.concat(e.response.data.errors[0].detail).concat('"')),t.createNotificationError({title:t.$tc("global.default.error"),message:t.$tc("sw-settings-snippet.detail.messageSaveError",0,{key:t.translationKey})+n})}))},onChange:function(){if(!this.translationKey||this.translationKey.trim().length<=0)return this.isSaveable=!1,void(this.isInvalidKey=!0);this.isInvalidKey=!1,this.doChange()},doChange:l.debounce((function(){var t=this;this.getCustomList().then((function(e){t.isSaveable=!1,e.total&&Object.keys(e.data)[0]!==t.translationKeyOrigin?(t.isInvalidKey=!0,t.isSaveable=!1):t.isSaveable=t.checkIsSaveable()})),this.isSaveable&&(this.isCreate||this.isAddedSnippet)&&(this.translationKey=this.translationKey.trim())}),1e3),onNewKeyRedirect:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isSaveSuccessful=!0;var e={key:this.translationKey};t&&(e.origin=this.translationKey),this.isCreate=!1,this.pushParams=e},getCustomList:function(){return this.snippetSetService.getCustomList(1,25,{translationKey:[this.translationKey]})},checkIsSaveable:function(){var t=this,e=0;return this.snippets.forEach((function(n){null!==n.value&&(t.translationKey.trim()!==t.translationKeyOrigin&&(e+=1),n.value.trim().length>=0&&(e+=1))})),e>0},getNoPermissionsTooltip:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{showDelay:300,appearance:"dark",showOnDisabledElements:e,disabled:this.acl.can(t),message:this.$tc("sw-privileges.tooltip.warning")}}}}}}]);