(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[20797],{64018:function(){},20797:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var s=t(92643);t(41428);let{Mixin:c}=Shopware;var i={template:'\n{% block sw_settings_cache_index %}\n<sw-page class="sw-settings-cache">\n\n    \n    {% block sw_settings_cache_smart_bar_header %}\n    <template #smart-bar-header>\n        \n        {% block sw_settings_cache_smart_bar_header_title %}\n        <h2>\n            \n            {% block sw_settings_cache_smart_bar_header_title_text %}\n            {{ $tc(\'sw-settings.index.title\') }}\n            <sw-icon\n                name="regular-chevron-right-xs"\n                small\n            />\n            {{ $tc(\'sw-settings-cache.general.mainMenuItemGeneral\') }}\n            {% endblock %}\n        </h2>\n    {% endblock %}\n    </template>\n{% endblock %}\n\n    \n{% block sw_settings_cache_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="componentIsBuilding">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <sw-card\n                v-else\n                position-identifier="sw-settings-cache-content"\n                :title="$tc(\'sw-settings-cache.general.mainMenuItemGeneral\')"\n                :is-loading="isLoading"\n            >\n\n                \n                {% block sw_settings_cache_content_toolbar %}\n                <template #toolbar>\n                    <sw-card-section secondary>\n                        <sw-container\n                            class="sw-settings-cache__card-toolbar"\n                            columns="1fr 1fr"\n                            rows="repeat(2, 40px)"\n                        >\n\n                            \n                            {% block sw_settings_cache_content_toolbar_environment %}\n                            <div>\n\n                                \n                                {% block sw_settings_cache_content_toolbar_environment_heading %}\n                                <p class="sw-settings-cache__card-toolbar-heading">\n                                    {{ $tc(\'sw-settings-cache.toolbar.environment\') }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_cache_content_toolbar_environment_text %}\n                                <p>{{ environmentValue }}</p>\n                                {% endblock %}\n                            </div>\n                        {% endblock %}\n\n                            \n                        {% block sw_settings_cache_content_toolbar_http_cache %}\n                            <div>\n\n                                \n                                {% block sw_settings_cache_content_toolbar_http_cache_heading %}\n                                <p class="sw-settings-cache__card-toolbar-heading">\n                                    {{ $tc(\'sw-settings-cache.toolbar.httpCache\') }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_cache_content_toolbar_http_cache_text %}\n                                <p>{{ httpCacheValue }}</p>\n                                {% endblock %}\n                            </div>\n                        {% endblock %}\n\n                            \n                        {% block sw_settings_cache_content_toolbar_cache_adapter %}\n                            <div>\n\n                                \n                                {% block sw_settings_cache_content_toolbar_cache_adapter_heading %}\n                                <p class="sw-settings-cache__card-toolbar-heading">\n                                    {{ $tc(\'sw-settings-cache.toolbar.cacheAdapter\') }}\n                                </p>\n                                {% endblock %}\n\n                                \n                                {% block sw_settings_cache_content_toolbar_cache_adapter_text %}\n                                <p>{{ cacheAdapterValue }}</p>\n                                {% endblock %}\n                            </div>\n                        {% endblock %}\n                        </sw-container>\n                    </sw-card-section>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_settings_cache_content_clear_cache_row %}\n                <sw-card-section divider="bottom">\n                    <sw-container\n                        align="center"\n                        columns="1fr auto"\n                        gap="20px"\n                    >\n                        <div>\n\n                            \n                            {% block sw_settings_cache_content_clear_cache_row_heading %}\n                            <p class="sw-settings-cache__card-section-heading">\n                                {{ $tc(\'sw-settings-cache.section.clearCachesHeadline\') }}\n                            </p>\n                            {% endblock %}\n\n                            \n                            {% block sw_settings_cache_content_clear_cache_row_text %}\n                            <p>{{ $tc(\'sw-settings-cache.section.clearCachesText\') }}</p>\n                            {% endblock %}\n                        </div>\n\n                        \n                        {% block sw_settings_cache_content_clear_cache_row_button %}\n                        <sw-button-process\n                            variant="ghost"\n                            :is-loading="processes.normalClearCache"\n                            :process-success="processSuccess.normalClearCache"\n                            @update:process-success="resetButtons"\n                            @click="clearCache"\n                        >\n                            {{ $tc(\'sw-settings-cache.section.clearCachesButton\') }}\n                        </sw-button-process>\n                        {% endblock %}\n                    </sw-container>\n                </sw-card-section>\n            {% endblock %}\n\n                \n            {% block sw_settings_cache_content_indexes_row %}\n                <sw-card-section class="sw-settings-cache__card-indexes">\n                    <sw-container>\n                        \n                        {% block sw_settings_cache_content_indexes_row_heading %}\n                        <p class="sw-settings-cache__card-section-heading">\n                            {{ $tc(\'sw-settings-cache.section.indexesHeadline\') }}\n                        </p>\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_cache_content_indexes_row_text %}\n                        <p>{{ $tc(\'sw-settings-cache.section.indexesText\') }}</p>\n                        {% endblock %}\n                    </sw-container>\n                    <sw-container\n                        columns="2fr 3fr 1fr"\n                        gap="10px"\n                        justify="end"\n                        align="end"\n                    >\n                        <sw-select-field\n                            v-model:value="indexingMethod"\n                            name="indexingMethod"\n                            class="sw-settings-cache__skip-indexers-select"\n                            :label="$tc(\'sw-settings-cache.section.indexingModeLabel\')"\n                            :disabled="processes.updateIndexes"\n                        >\n                            <option value="skip">\n                                {{ $tc(\'sw-settings-cache.section.indexingModeOptionSkipLabel\') }}\n                            </option>\n                            <option value="only">\n                                {{ $tc(\'sw-settings-cache.section.indexingModeOptionOnlyLabel\') }}\n                            </option>\n                        </sw-select-field>\n\n                        \n                    {% block sw_settings_cache_content_indexes_row_skip_select %}\n                        <sw-select-base\n                            class="sw-settings-cache__indexers-select"\n                            :label="indexingMethod === \'skip\' ? $tc(\'sw-settings-cache.section.indexesSkipSelectLabel\') : $tc(\'sw-settings-cache.section.indexesOnlySelectLabel\')"\n                            :disabled="processes.updateIndexes"\n                        >\n                            <template #sw-select-selection>\n                                <sw-label\n                                    v-for="(selection, index) in indexerSelection"\n                                    :key="index"\n                                    @dismiss="changeSelection(false, selection)"\n                                >\n                                    {{ selection }}\n                                </sw-label>\n                                <sw-label\n                                    ghost\n                                    class="sw-settings-cache__indexers-placeholder"\n                                >\n                                    {{ indexingMethod === \'skip\' ? $tc(\'sw-settings-cache.section.indexesSkipSelectPlaceholder\') : $tc(\'sw-settings-cache.section.indexesOnlySelectPlaceholder\') }}\n                                </sw-label>\n                            </template>\n                            <template #results-list>\n                                <sw-select-result-list :options="[indexers]">\n                                    <template #result-item="{ item, index }">\n                                        <ul\n                                            class="sw-settings-cache__indexers-list"\n                                            @click.stop\n                                        >\n                                            <li\n                                                v-for="(updaters, indexer) in item"\n                                                :key="indexer"\n                                            >\n                                                <sw-checkbox-field\n                                                    class="sw-settings-cache__indexers-entry"\n                                                    :value="indexerSelection.includes(indexer)"\n                                                    :label="indexer"\n                                                    :name="indexer"\n                                                    size="small"\n                                                    @update:value="changeSelection($event, indexer)"\n                                                />\n                                                <ul>\n                                                    <li\n                                                        v-for="(updater, index) in updaters"\n                                                        :key="index"\n                                                    >\n                                                        <sw-checkbox-field\n                                                            class="sw-settings-cache__indexers-entry"\n                                                            :value="indexerSelection.includes(updater) || indexerSelection.includes(indexer)"\n                                                            :label="updater"\n                                                            :name="updater"\n                                                            size="small"\n                                                            :disabled="indexerSelection.includes(indexer)"\n                                                            @click.prevent\n                                                            @update:value="changeSelection($event, updater)"\n                                                        />\n                                                    </li>\n                                                </ul>\n                                            </li>\n                                        </ul>\n                                    </template>\n                                </sw-select-result-list>\n                            </template>\n                        </sw-select-base>\n                    {% endblock %}\n\n                        \n                    {% block sw_settings_cache_content_indexes_row_button %}\n                        <sw-button-process\n                            name="updateIndexesButton"\n                            class="sw-button--large"\n                            variant="ghost"\n                            :is-loading="processes.updateIndexes"\n                            :process-success="processSuccess.updateIndexes"\n                            @update:process-success="resetButtons"\n                            @click="updateIndexes"\n                        >\n                            {{ $tc(\'sw-settings-cache.section.indexesButton\') }}\n                        </sw-button-process>\n                    {% endblock %}\n                    </sw-container>\n                </sw-card-section>\n        {% endblock %}\n            </sw-card>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["cacheApiService"],mixins:[c.getByName("notification")],data(){return{componentIsBuilding:!0,isLoading:!0,cacheInfo:null,processes:{normalClearCache:!1,updateIndexes:!1},processSuccess:{normalClearCache:!1,updateIndexes:!1},indexingMethod:"skip",indexerSelection:[],indexers:{"category.indexer":["category.child-count","category.tree","category.breadcrumb","category.seo-url"],"customer.indexer":["customer.many-to-many-id-field"],"landing_page.indexer":["landing_page.many-to-many-id-field","landing_page.seo-url"],"media.indexer":[],"media_folder.indexer":["media_folder.child-count"],"media_folder_configuration.indexer":[],"payment_method.indexer":[],"product.indexer":["product.inheritance","product.stock","product.variant-listing","product.child-count","product.many-to-many-id-field","product.category-denormalizer","product.cheapest-price","product.rating-averaget","product.stream","product.search-keyword","product.seo-url"],"product_stream.indexer":[],"product_stream_mapping.indexer":[],"promotion.indexer":["promotion.exclusion","promotion.redemption"],"rule.indexer":["rule.payload"],"sales_channel.indexer":["sales_channel.many-to-many"],"flow.indexer":[],"newsletter_recipient.indexer":[]}}},metaInfo(){return{title:this.$createTitle()}},computed:{httpCacheValue(){return null===this.cacheInfo?"":this.cacheInfo.httpCache?this.$tc("sw-settings-cache.toolbar.httpCacheOn"):this.$tc("sw-settings-cache.toolbar.httpCacheOff")},environmentValue(){return null===this.cacheInfo?"":"dev"===this.cacheInfo.environment?this.$tc("sw-settings-cache.toolbar.environmentDev"):this.$tc("sw-settings-cache.toolbar.environmentProd")},cacheAdapterValue(){return null===this.cacheInfo?"":this.cacheInfo.cacheAdapter}},created(){this.createdComponent()},methods:{createdComponent(){this.cacheApiService.info().then(e=>{this.cacheInfo=e.data,this.componentIsBuilding=!1,this.isLoading=!1})},resetButtons(){this.processSuccess={normalClearCache:!1,updateIndexes:!1}},decreaseWorkerPoll(){Shopware.State.commit("notification/setWorkerProcessPollInterval",s.i_),setTimeout(()=>{Shopware.State.commit("notification/setWorkerProcessPollInterval",s.GA)},6e4)},clearCache(){this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.clearCache.started")}),this.processes.normalClearCache=!0,this.cacheApiService.clear().then(()=>{this.processSuccess.normalClearCache=!0,this.createNotificationSuccess({message:this.$tc("sw-settings-cache.notifications.clearCache.success")})}).catch(()=>{this.processSuccess.normalClearCache=!1,this.createNotificationError({message:this.$tc("sw-settings-cache.notifications.clearCache.error")})}).finally(()=>{this.processes.normalClearCache=!1})},updateIndexes(){this.processes.updateIndexes=!0;let e=[],n=[];"skip"===this.indexingMethod?e=this.indexerSelection:this.createOnlySelection(n),this.cacheApiService.index(e,n).then(()=>{this.decreaseWorkerPoll(),this.createNotificationInfo({message:this.$tc("sw-settings-cache.notifications.index.started")}),this.processSuccess.updateIndexes=!0}).catch(()=>{this.processSuccess.updateIndexes=!1}).finally(()=>{this.processes.updateIndexes=!1})},changeSelection(e,n){if(e){this.indexerSelection.push(n);return}let t=this.indexerSelection.indexOf(n);t>-1&&this.indexerSelection.splice(t,1)},createOnlySelection(e){for(let[n,t]of Object.entries(this.indexers)){this.indexerSelection.indexOf(n)>-1&&e.push(n);let s=[];for(let e of t)this.indexerSelection.indexOf(e)>-1&&s.push(e);s.length>0&&e.push(n),e.push(...s)}},flipIndexers(){let e=[];for(let[n,t]of Object.entries(this.indexers))t.length>0?e.push(...t):e.push(n);this.indexerSelection=e.filter(e=>-1===this.indexerSelection.indexOf(e))}}}},41428:function(e,n,t){var s=t(64018);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),t(45346).Z("679b8ae5",s,!0,{})}}]);