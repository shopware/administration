(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[13822],{962381:function(){},744580:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return o}}),a(895441);let{Mixin:t,Context:l}=Shopware,{Criteria:i}=Shopware.Data,{ShopwareError:s}=Shopware.Classes;var o={template:'\n{% block sw_sales_channel_detail_domains %}\n<sw-card\n    :title="$tc(\'sw-sales-channel.detail.titleDomains\')"\n    class="sw-sales-channel-detail-domains"\n    position-identifier="sw-sales-channel-detail-domains"\n>\n\n    \n    {% block sw_sales_channel_detail_domains_meta %}\n    <div class="sw-sales-channel-detail-domains__meta">\n        \n        {% block sw_sales_channel_detail_domains_headline %}\n        <h4 class="sw-sales-channel-detail-domains__headline sw-sales-channel-detail-base__headline">\n            <span class="sw-sales-channel-detail-domains__headline-text sw-sales-channel-detail-base__headline-text">\n                {{ $tc(\'sw-sales-channel.detail.titleDomainHeadline\') }}\n            </span>\n        </h4>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_domains_add_button %}\n        <sw-button\n            size="small"\n            :disabled="disableEdit"\n            class="sw-sales-channel-detail__button-domain-add"\n            @click="onClickOpenCreateDomainModal"\n        >\n            {{ $tc(\'sw-sales-channel.detail.buttonAddDomain\') }}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    <template #grid>\n        \n        {% block sw_sales_channel_detail_domains_grid %}\n        <sw-data-grid\n            ref="gridDomains"\n            :data-source="sortedDomains"\n            :columns="getDomainColumns()"\n            :show-selection="false"\n            :is-loading="isLoadingDomains"\n            :show-actions="true"\n            :sort-by="sortBy"\n            :sort-direction="sortDirection"\n            @column-sort="sortColumns"\n        >\n            \n            {% block sw_sales_channel_detail_domains_columns_template %}\n\n            \n            {% block sw_sales_channel_detail_domains_column_url %}\n            <template\n                #column-url="{ item }"\n            >\n                {{ unicodeUriFilter(item.url) }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_column_language_id %}\n            <template\n                #column-languageId="{ item, isInlineEdit}"\n            >\n                {{ item.language.name }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_column_currency_id %}\n            <template\n                #column-currencyId="{ item, isInlineEdit}"\n            >\n                {{ item.currency.translated.name }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_column_snippet_set_id %}\n            <template\n                #column-snippetSetId="{ item, isInlineEdit}"\n            >\n                {{ item.snippetSet.name }}\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_column_actions %}\n            <template #actions="{ item }">\n                \n                {% block sw_sales_channel_detail_domains_column_action_domain_edit %}\n                <sw-context-menu-item\n                    :disabled="disableEdit"\n                    @click="onClickEditDomain(item)"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.buttonEditDomain\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_detail_domains_column_action_domain_delete %}\n                <sw-context-menu-item\n                    :disabled="disableEdit"\n                    variant="danger"\n                    @click="onClickDeleteDomain(item)"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.buttonDeleteDomain\') }}\n                </sw-context-menu-item>\n                {% endblock %}\n            </template>\n            {% endblock %}\n            {% endblock %}\n        </sw-data-grid>\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_domains_create_modal %}\n    <sw-modal\n        v-if="currentDomain"\n        :title="currentDomainModalTitle"\n        @modal-close="onCloseCreateDomainModal"\n    >\n\n        \n        {% block sw_sales_channel_detail_domains_create_modal_content %}\n        <sw-container\n            columns="repeat(auto-fit, minmax(250px, 1fr))"\n            gap="0px 30px"\n        >\n            \n            {% block sw_sales_channel_detail_domains_input_url %}\n            <sw-url-field\n                v-model:value="currentDomain.url"\n                type="text"\n                omit-url-hash\n                omit-url-search\n                :label="$tc(\'sw-sales-channel.detail.labelInputUrl\')"\n                :error="error"\n                @update:value="onInput"\n            />\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_input_language %}\n            <sw-single-select\n                v-model:value="currentDomain.languageId"\n                class="sw-sales-channel-detail-domains__domain-language-select"\n                :options="salesChannel.languages"\n                label-property="name"\n                value-property="id"\n                required\n                :label="$tc(\'sw-sales-channel.detail.labelInputLanguage\')"\n                show-clearable-button\n                @update:value="onLanguageSelect"\n            />\n            {% endblock %}\n        </sw-container>\n\n        <sw-container\n            columns="repeat(auto-fit, minmax(250px, 1fr))"\n            gap="0px 30px"\n        >\n            \n            {% block sw_sales_channel_detail_domains_input_currency %}\n            <sw-single-select\n                v-model:value="currentDomain.currencyId"\n                class="sw-sales-channel-detail-domains__domain-currency-select"\n                :label="$tc(\'sw-sales-channel.detail.labelInputCurrency\')"\n                required\n                show-clearable-button\n                :options="salesChannel.currencies"\n                label-property="name"\n                value-property="id"\n                @update:value="onCurrencySelect"\n            />\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_input_snippet_set %}\n            <sw-entity-single-select\n                v-model:value="currentDomain.snippetSetId"\n                entity="snippet_set"\n                :criteria="snippetSetCriteria"\n                :label="$tc(\'sw-sales-channel.detail.labelInputSnippet\')"\n                required\n                show-clearable-button\n                @option-select="onOptionSelect"\n            />\n            {% endblock %}\n        </sw-container>\n\n        \n        {% block sw_sales_channel_detail_domains_hreflang %}\n        <sw-radio-field\n            v-model:value="currentDomain.hreflangUseOnlyLocale"\n            :label="$tc(\'sw-sales-channel.detail.hreflang.domainSettings.label\')"\n            identification="hreflang"\n            :options="hreflangLocalisationOptions"\n        />\n        {% endblock %}\n        {% endblock %}\n\n        <template #modal-footer>\n            \n            {% block sw_sales_channel_detail_domains_create_action_cancel %}\n            <sw-button\n                size="small"\n                @click="onCloseCreateDomainModal"\n            >\n                {{ $tc(\'sw-sales-channel.modal.buttonCancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_create_action_create %}\n            <sw-button\n                size="small"\n                variant="primary"\n                :disabled="disabled"\n                @click="onClickAddNewDomain"\n            >\n                {{ currentDomainModalButtonText }}\n            </sw-button>\n            {% endblock %}\n        </template>\n    </sw-modal>\n    {% endblock %}\n\n    \n    {% block sw_sales_channel_detail_domains_delete_modal %}\n    <sw-modal\n        v-if="deleteDomain"\n        :title="$tc(\'sw-sales-channel.detail.deleteDomainModalTitle\')"\n        variant="small"\n        @modal-close="onCloseDeleteDomainModal"\n    >\n\n        \n        {% block sw_sales_channel_detail_domains_delete_modal_confirm_text %}\n        {{ $tc(\'sw-sales-channel.detail.textConfirmDeleteDomain\', 0, { url: unicodeUriFilter(deleteDomain.url) }) }}\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_detail_domains_delete_modal_footer %}\n        <template #modal-footer>\n            \n            {% block sw_sales_channel_detail_domains_delete_modal_abort %}\n            <sw-button\n                size="small"\n                @click="onCloseDeleteDomainModal"\n            >\n                {{ $tc(\'sw-sales-channel.detail.buttonCloseDeleteDomainModal\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_sales_channel_detail_domains_delete_modal_confirm %}\n            <sw-button\n                size="small"\n                variant="danger"\n                @click="onConfirmDeleteDomain(deleteDomain)"\n            >\n                {{ $tc(\'sw-sales-channel.detail.buttonConfirmDeleteDomain\') }}\n            </sw-button>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </sw-modal>\n    {% endblock %}\n</sw-card>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[t.getByName("notification")],props:{salesChannel:{required:!0},disableEdit:{type:Boolean,required:!1,default:!1}},data(){return{currentDomain:null,currentDomainBackup:{url:null,language:null,languageId:null,currency:null,currencyId:null,snippetSet:null,snippetSetId:null},isLoadingDomains:!1,deleteDomain:null,sortBy:"url",sortDirection:"ASC",error:null}},computed:{domainRepository(){return this.repositoryFactory.create(this.salesChannel.domains.entity,this.salesChannel.domains.source)},currentDomainModalTitle(){return this.currentDomain?.isNew()?this.$t("sw-sales-channel.detail.titleCreateDomain"):this.$t("sw-sales-channel.detail.titleEditDomain",0,{name:this.unicodeUriFilter(this.currentDomainBackup.url)})},currentDomainModalButtonText(){return this.currentDomain?.isNew()?this.$t("sw-sales-channel.detail.buttonAddDomain"):this.$t("sw-sales-channel.detail.buttonEditDomain")},snippetSetCriteria(){return new i(1,25).addSorting(i.sort("name","ASC"))},salesChannelFilterCriteria(){let n=new i(1,25);return n.addAssociation("salesChannels").addSorting(i.sort("name","ASC")),n.addFilter(i.equals("salesChannels.id",this.salesChannel.id))},currencyCriteria(){return new i(1,25).addSorting(i.sort("name","ASC"))},hreflangLocalisationOptions(){return[{name:this.$tc("sw-sales-channel.detail.hreflang.domainSettings.byIso"),value:!1,helpText:this.$tc("sw-sales-channel.detail.hreflang.domainSettings.byIsoHelpText")},{name:this.$tc("sw-sales-channel.detail.hreflang.domainSettings.byAbbreviation"),value:!0,helpText:this.$tc("sw-sales-channel.detail.hreflang.domainSettings.byAbbreviationHelpText")}]},disabled(){return!this.currentDomain||!this.currentDomain.currencyId||!this.currentDomain.snippetSetId||!this.currentDomain.url||!this.currentDomain.languageId||this.disableEdit||null!==this.error},sortedDomains(){let n=[...this.salesChannel.domains];return this.localSortDomains(n)}},methods:{sortColumns(n){this.sortBy===n.dataIndex?this.sortDirection="ASC"===this.sortDirection?"DESC":"ASC":(this.sortBy=n.dataIndex,this.sortDirection="ASC")},unicodeUriFilter(n){return Shopware.Filter.getByName("unicodeUri")(n)},localSortDomains(n){return n.sort((n,e)=>{let a=this.getSortValue(n,this.sortBy).toString(),t=this.getSortValue(e,this.sortBy).toString(),l=a.localeCompare(t,void 0,{numeric:!0,sensitivity:"base"});return"ASC"===this.sortDirection?l:-1*l}),n},getSortValue(n,e){return(e=e.replace("Id",""),n.hasOwnProperty(e)&&"object"==typeof n[e]&&n[e].hasOwnProperty("name"))?n[e].name:n[e]},onInput(){this.error=null},async verifyUrl(n){return!(this.domainExistsLocal(n)||await this.domainExistsInDatabase(n.url))},domainExistsLocal(n){return this.salesChannel.domains.filter(e=>e.id!==n.id&&e.url===n.url).length>0},isOriginalUrl(n){return n===this.currentDomainBackup.url},async domainExistsInDatabase(n){let e=this.repositoryFactory.create(this.salesChannel.domains.entity),a=new i(1,25);a.addFilter(i.equals("url",n));let t=await e.search(a);return 0!==t.total&&t.first().salesChannelId!==this.salesChannel.id},setCurrentDomainBackup(n){this.currentDomainBackup={url:n.url,language:n.language,languageId:n.languageId,currency:n.currency,currencyId:n.currencyId,snippetSet:n.snippetSet,snippetSetId:n.snippetSetId}},resetCurrentDomainToBackup(){this.currentDomain.url=this.currentDomainBackup.url,this.currentDomain.language=this.currentDomainBackup.language,this.currentDomain.languageId=this.currentDomainBackup.languageId,this.currentDomain.currency=this.currentDomainBackup.currency,this.currentDomain.currencyId=this.currentDomainBackup.currencyId,this.currentDomain.snippetSet=this.currentDomainBackup.snippetSet,this.currentDomain.snippetSetId=this.currentDomainBackup.snippetSetId},setInitialCurrency(n){let e=this.salesChannel.currencies.first();n.currency=e,n.currencyId=e.id,this.currentDomain=n},setInitialLanguage(n){let e=this.salesChannel.languages.first();n.language=e,n.languageId=e.id,this.currentDomain=n},onClickOpenCreateDomainModal(){let n=this.domainRepository.create(l.api);this.setCurrentDomainBackup(n),1===this.salesChannel.currencies.length&&this.setInitialCurrency(n),1===this.salesChannel.languages.length&&this.setInitialLanguage(n),this.currentDomain=n},async onClickAddNewDomain(){if(this.isOriginalUrl(this.currentDomain.url)){this.currentDomain=null;return}if(!await this.verifyUrl(this.currentDomain)){this.error=new s({code:"DUPLICATED_URL"});return}this.currentDomain.isNew()&&this.salesChannel.domains.add(this.currentDomain),this.currentDomain=null},onClickEditDomain(n){this.currentDomain=n,this.setCurrentDomainBackup(this.currentDomain)},onCloseCreateDomainModal(){this.resetCurrentDomainToBackup(),this.currentDomain=null},onClickDeleteDomain(n){n.isNew()?this.onConfirmDeleteDomain(n):this.deleteDomain=n},onConfirmDeleteDomain(n){if(n.productExports.length>0){this.createNotificationError({message:this.$tc("sw-sales-channel.detail.messageDeleteDomainError",0,{url:this.unicodeUriFilter(n.url)})}),this.deleteDomain=null;return}this.deleteDomain=null,this.$nextTick(()=>{this.salesChannel.domains.remove(n.id)})},onCloseDeleteDomainModal(){this.deleteDomain=null},onLanguageSelect(n){this.onOptionSelect("language",this.salesChannel.languages.get(n))},onCurrencySelect(n){this.onOptionSelect("currency",this.salesChannel.currencies.get(n))},onOptionSelect(n,e){this.currentDomain[n]=e},getDomainColumns(){return[{property:"url",dataIndex:"url",label:this.$t("sw-sales-channel.detail.columnDomainUrl"),allowResize:!1,primary:!0,inlineEdit:!0},{property:"languageId",dataIndex:"languageId",label:this.$t("sw-sales-channel.detail.columnDomainLanguage"),allowResize:!1,inlineEdit:!1},{property:"snippetSetId",dataIndex:"snippetSetId",label:this.$t("sw-sales-channel.detail.columnDomainSnippetSet"),allowResize:!1,inlineEdit:!1},{property:"currencyId",dataIndex:"currencyId",label:this.$t("sw-sales-channel.detail.columnDomainCurrency"),allowResize:!1,inlineEdit:!1}]}}}},895441:function(n,e,a){var t=a(962381);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals),a(745346).Z("1c70641a",t,!0,{})}}]);