(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[78718],{384764:function(){},420325:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return l}}),a(653551);let{Component:t,Mixin:s,Data:{Criteria:r}}=Shopware,{mapPropertyErrors:i}=t.getComponentHelper();var l={template:'\n{% block sw_settings_number_range_detail %}\n<sw-page class="sw-settings-number-range-detail">\n\n    \n    {% block sw_settings_number_range_detail_header %}\n    <template #smart-bar-header>\n        <h2>{{ placeholder(numberRange, \'name\', $tc(\'sw-settings-number-range.detail.textHeadline\')) }}</h2>\n    </template>\n    {% endblock %}\n    \n    {% block sw_settings_number_range_detail_language_switch %}\n    <template #language-switch>\n        <sw-language-switch\n            :save-changes-function="saveOnLanguageChange"\n            :abort-change-function="abortOnLanguageChange"\n            @on-change="onChangeLanguage"\n        />\n    </template>\n    {% endblock %}\n    \n    {% block sw_settings_number_range_detail_actions %}\n    <template #smart-bar-actions>\n        \n        {% block sw_settings_number_range_detail_actions_abort %}\n        <sw-button\n            v-tooltip.bottom="tooltipCancel"\n            :disabled="isLoading"\n            @click="onCancel"\n        >\n            {{ $tc(\'sw-settings-number-range.detail.buttonCancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_settings_number_range_detail_actions_save %}\n        <sw-button-process\n            v-tooltip.bottom="tooltipSave"\n            class="sw-settings-number-range-detail__save-action"\n            variant="primary"\n            :is-loading="isLoading"\n            :process-success="isSaveSuccessful"\n            :disabled="!acl.can(\'number_ranges.editor\')"\n            @update:process-success="saveFinish"\n            @click.prevent="onSave"\n        >\n            {{ $tc(\'sw-settings-number-range.detail.buttonSave\') }}\n        </sw-button-process>\n        {% endblock %}\n    </template>\n    {% endblock %}\n\n    \n    {% block sw_settings_number_range_detail_content %}\n    <template #content>\n        <sw-card-view>\n            <template v-if="isLoading">\n                <sw-skeleton />\n                <sw-skeleton />\n            </template>\n\n            <template v-else>\n                \n                {% block sw_settings_number_range_detail_language_info %}\n                <sw-language-info :entity-description="identifier" />\n                {% endblock %}\n\n                \n                {% block sw_settings_number_range_detail_content_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-number-range.detail.configCard\')"\n                    position-identifier="sw-settings-number-range-detail-content"\n                >\n                    \n                    {% block sw_settings_number_range_detail_content_global_warning %}\n                    <sw-alert\n                        v-if="numberRange && numberRange.type && numberRange.type.global"\n                        class="sw-number_range-quickinfo__alert-global-type"\n                        variant="warning"\n                        :title="$tc(\'sw-settings-number-range.general.infoGlobalTypeTitle\', 0, {typeName: numberRange.type.typeName})"\n                    >\n                        {{ $tc(\'sw-settings-number-range.general.infoGlobalType\', 0, {typeName: numberRange.type.typeName}) }}\n                    </sw-alert>\n                    {% endblock %}\n\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_name %}\n                        <sw-text-field\n                            v-model:value="numberRange.name"\n                            name="sw-field--numberRange-name"\n                            :label="$tc(\'sw-settings-number-range.detail.labelName\')"\n                            :placeholder="placeholder(numberRange,\'name\', $tc(\'sw-settings-number-range.detail.placeholderName\'))"\n                            validation="required"\n                            required\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                            :error="numberRangeNameError"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_description %}\n                        <sw-text-field\n                            v-model:value="numberRange.description"\n                            name="sw-field--numberRange-description"\n                            :label="$tc(\'sw-settings-number-range.detail.labelDescription\')"\n                            :placeholder="placeholder(numberRange,\'description\', $tc(\'sw-settings-number-range.detail.placeholderDescription\'))"\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(200px, 1fr))"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_settings_number_range_detail_content_field_prefix %}\n                        <sw-text-field\n                            v-model:value="prefix"\n                            name="sw-field--prefix"\n                            :disabled="advanced || !acl.can(\'number_ranges.editor\')"\n                            :label="$tc(\'sw-settings-number-range.detail.labelPrefix\')"\n                            :placeholder="advanced?$tc(\'sw-settings-number-range.detail.placeholderSimpleModeImpossible\'):$tc(\'sw-settings-number-range.detail.placeholderPrefix\')"\n                            @update:value="onChangePattern()"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_start %}\n                        <sw-number-field\n                            v-model:value="numberRange.start"\n                            name="sw-field--numberRange-start"\n                            number-type="int"\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                            :label="$tc(\'sw-settings-number-range.detail.labelStart\')"\n                            :placeholder="$tc(\'sw-settings-number-range.detail.placeholderStart\')"\n                            required\n                            validation="required"\n                            @update:value="onChangePattern()"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_suffix %}\n                        <sw-text-field\n                            v-model:value="suffix"\n                            name="sw-field--suffix"\n                            :disabled="advanced || !acl.can(\'number_ranges.editor\')"\n                            :label="$tc(\'sw-settings-number-range.detail.labelSuffix\')"\n                            :placeholder="advanced?$tc(\'sw-settings-number-range.detail.placeholderSimpleModeImpossible\'):$tc(\'sw-settings-number-range.detail.placeholderSuffix\')"\n                            @update:value="onChangePattern()"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_pattern %}\n                        <sw-text-field\n                            v-if="advanced"\n                            v-model:value="numberRange.pattern"\n                            name="sw-field--numberRange-pattern"\n                            :label="$tc(\'sw-settings-number-range.detail.labelPattern\')"\n                            :placeholder="$tc(\'sw-settings-number-range.detail.placeholderPattern\')"\n                            :disabled="!acl.can(\'number_ranges.editor\')"\n                            @update:value="onChangePattern()"\n                        />\n                        <div v-if="!advanced"></div>\n                        {% endblock %}\n                    </sw-container>\n\n                    <sw-container\n                        columns="1fr 1fr"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_settings_number_range_detail_content_field_default %}\n                        <div class="sw-settings-number-range-detail__field_default">\n                            <sw-switch-field\n                                v-model:value="advanced"\n                                name="sw-field--advanced"\n                                bordered\n                                :disabled="!acl.can(\'number_ranges.editor\')"\n                                :label="$tc(\'sw-settings-number-range.detail.labelAdvanced\')"\n                            />\n                            <sw-help-text\n                                :width="380"\n                                :text="$t(\'sw-settings-number-range.detail.helpTextAdvancedField\')"\n                            />\n                        </div>\n                        {% endblock %}\n                    </sw-container>\n\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(250px, 1fr))"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_settings_number_range_detail_content_field_current_number %}\n                        <sw-text-field\n                            v-if="state"\n                            v-model:value="state"\n                            name="sw-field--state"\n                            :disabled="true"\n                            :label="$tc(\'sw-settings-number-range.detail.labelCurrentNumber\')"\n                            :placeholder="numberRange.start?numberRange.start.toString():\'\'"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_settings_number_range_detail_content_field_preview %}\n                        <sw-text-field\n                            v-model:value="preview"\n                            name="sw-field--preview"\n                            :disabled="true"\n                            :label="$tc(\'sw-settings-number-range.detail.labelPreview\')"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_number_range_detail_assignment_card %}\n                <sw-card\n                    :title="$tc(\'sw-settings-number-range.detail.assignmentCard\')"\n                    position-identifier="sw-settings-number-range-detail-assignment"\n                    class="sw-settings-number-range-detail-assignment"\n                >\n                    \n                    {% block sw_settings_number_range_detail_assignment_card_global_warning %}\n                    <sw-alert\n                        v-if="numberRange !== null && numberRange.global"\n                        class="sw-number_range-quickinfo__alert-global-type"\n                        variant="info"\n                        :title="$tc(\'sw-settings-number-range.general.infoGlobalTitle\', 0, {name: numberRange.name})"\n                    >\n                        {{ $tc(\'sw-settings-number-range.general.infoGlobal\', 0, {name: numberRange.name}) }}\n                    </sw-alert>\n                    <sw-alert\n                        v-if="\n                            numberRange.type !== null &&\n                                numberRange.numberRangeSalesChannels &&\n                                numberRange.numberRangeSalesChannels.length > 0"\n                        class="sw-number_range-quickinfo__alert-global-type"\n                        variant="warning"\n                    >\n                        {{ $tc(\'sw-settings-number-range.general.infoSalesChannelBound\', 0, {name: numberRange.name}) }}\n                    </sw-alert>\n                    {% endblock %}\n                    <sw-container\n                        columns="repeat(auto-fit, minmax(100%, 1fr))"\n                        gap="0px 30px"\n                    >\n                        \n                        {% block sw_sales_channel_detail_base_general_input_type %}\n                        <sw-entity-single-select\n                            v-if="numberRange.type"\n                            id="numberRangeTypes"\n                            v-model:value="numberRange.typeId"\n                            name="sw-field--numberRange-typeId"\n                            entity="number_range_type"\n                            class="sw-number-range-detail__select-type"\n                            :disabled="disableNumberRangeTypeSelect"\n                            required\n                            show-clearable-button\n                            label-property="typeName"\n                            :label="$tc(\'sw-settings-number-range.detail.labelType\')"\n                            :criteria="numberRange.type.global ? numberRangeTypeCriteriaGlobal : numberRangeTypeCriteria"\n                            :error="numberRangeTypeIdError"\n                            @update:value="onChangeType"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_sales_channel_detail_base_general_input_sales_channel %}\n                        <sw-multi-select\n                            v-if="numberRange && (!numberRange.global || numberRange.global === false)"\n                            class="sw-number-range-detail__select-type"\n                            :label="$tc(\'sw-settings-number-range.detail.labelSalesChannel\')"\n                            :disabled="!numberRange.typeId || !acl.can(\'number_ranges.editor\')"\n                            :value="selectedNumberRangeSalesChannels"\n                            :options="salesChannels"\n                            name="sw-field--selectedNumberRangeSalesChannels"\n                            label-property="translated.name"\n                            value-property="id"\n                            @item-add="addSalesChannel"\n                            @item-remove="removeSalesChannel"\n                        />\n                        {% endblock %}\n                    </sw-container>\n                </sw-card>\n                {% endblock %}\n\n                \n                {% block sw_settings_number_range_detail_custom_field_sets %}\n                <sw-card\n                    v-if="showCustomFields"\n                    position-identifier="sw-settings-number-range-detail-custom-field-sets"\n                    :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                    :is-loading="isLoading"\n                >\n                    <sw-custom-field-set-renderer\n                        :entity="numberRange"\n                        :disabled="!acl.can(\'number_ranges.editor\')"\n                        :sets="customFieldSets"\n                    />\n                </sw-card>\n                {% endblock %}\n            </template>\n        </sw-card-view>\n    </template>\n    {% endblock %}\n</sw-page>\n{% endblock %}\n',inject:["numberRangeService","repositoryFactory","acl","customFieldDataProviderService"],mixins:[s.getByName("notification"),s.getByName("placeholder")],shortcuts:{"SYSTEMKEY+S":"onSave",ESCAPE:"onCancel"},data(){return{numberRangeId:void 0,numberRange:{},salesChannels:[],advanced:!1,simplePossible:!0,prefix:"",suffix:"",preview:"",state:1,isLoading:!1,isSaveSuccessful:!1,customFieldSets:null}},metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.numberRange,"name")},disableNumberRangeTypeSelect(){return this.numberRange.type.global||this.numberRange.global||null!==this.numberRange.type&&this.numberRange.numberRangeSalesChannels&&this.numberRange.numberRangeSalesChannels.length>0||!this.acl.can("number_ranges.editor")},numberRangeRepository(){return this.repositoryFactory.create("number_range")},numberRangeCriteria(){let e=new r(1,25);return e.addAssociation("type"),e.addAssociation("numberRangeSalesChannels"),e},numberRangeTypeRepository(){return this.repositoryFactory.create("number_range_type")},numberRangeTypeCriteria(){let e=new r(1,25);return e.addFilter(r.equals("global",!1)),e.addSorting(r.sort("typeName","ASC")),e},numberRangeTypeCriteriaGlobal(){let e=new r(1,25);return e.addFilter(r.equals("global",!0)),e.addSorting(r.sort("typeName","ASC")),e},salesChannelCriteria(){let e=new r(1,25);return e.addFilter(r.multi("OR",[r.equals("numberRangeSalesChannels.numberRange.id",this.numberRange.id),r.not("OR",[r.equals("numberRangeSalesChannels.numberRangeTypeId",this.numberRange.typeId)])])),e.addAssociation("numberRangeSalesChannels"),e},salesChannelRepository(){return this.repositoryFactory.create("sales_channel")},numberRangeSalesChannelsRepository(){return this.repositoryFactory.create("number_range_sales_channel")},selectedNumberRangeSalesChannels(){return this.numberRange.numberRangeSalesChannels?this.numberRange.numberRangeSalesChannels.map(e=>e.salesChannelId):[]},tooltipSave(){if(!this.acl.can("number_ranges.editor"))return{message:this.$tc("sw-privileges.tooltip.warning"),disabled:this.acl.can("number_ranges.editor"),showOnDisabledElements:!0};let e=this.$device.getSystemKey();return{message:`${e} + S`,appearance:"light"}},tooltipCancel(){return{message:"ESC",appearance:"light"}},showCustomFields(){return this.customFieldSets&&this.customFieldSets.length>0},...i("numberRange",["name","typeId"])},watch:{"numberRange.pattern"(){this.getPreview()},"numberRange.start"(){this.getPreview()}},created(){this.createdComponent()},methods:{async createdComponent(){this.isLoading=!0,this.$route.params.id&&!0!==this.numberRange.isLoading&&(this.numberRangeId=this.$route.params.id,await Promise.all([this.loadEntityData(),this.loadCustomFieldSets()])),this.isLoading=!1},async loadEntityData(){this.numberRange=await this.numberRangeRepository.get(this.numberRangeId,Shopware.Context.api,this.numberRangeCriteria),this.getState(),this.splitPattern(),await this.loadSalesChannels()},loadCustomFieldSets(){this.customFieldDataProviderService.getCustomFieldSets("number_range").then(e=>{this.customFieldSets=e})},splitPattern(){if(""===this.numberRange.pattern)return;let e=/([^{}]*)({[^{}]*?})([^{}]*)/ig,n=e.exec(this.numberRange.pattern);n&&4===n.length&&"{n}"===n[2]&&1===this.numberRange.pattern.match(e).length?(this.prefix=n[1]?n[1]:"",this.suffix=n[3]?n[3]:"",this.simplePossible=!0):(this.advanced=!0,this.simplePossible=!1)},getPreview(){return this.numberRange.type.technicalName?this.numberRangeService.previewPattern(this.numberRange.type.technicalName,this.numberRange.pattern,this.numberRange.start).then(e=>{this.preview=e.number}):Promise.resolve()},getState(){return this.numberRange.type.technicalName?this.numberRangeService.previewPattern(this.numberRange.type.technicalName,"{n}",0).then(e=>(e.number>1?this.state=e.number-1:this.state=this.numberRange.start,Promise.resolve())):Promise.resolve()},loadSalesChannels(){return this.salesChannelRepository.search(this.salesChannelCriteria).then(e=>{this.salesChannels=e})},onSave(){if(!this.acl.can("number_ranges.editor"))return!1;this.isSaveSuccessful=!1;let e=this.numberRange.name||this.placeholder(this.numberRange,"name");return(this.onChangePattern(),this.numberRange.pattern)?(this.state>1&&this.state>=this.numberRange.start&&this.createNotificationInfo({message:this.$tc("sw-settings-number-range.detail.infoStartDecrementMessage")}),this.isLoading=!0,this.numberRangeRepository.save(this.numberRange).then(()=>{this.isSaveSuccessful=!0}).catch(n=>{throw this.isLoading=!1,this.createNotificationError({message:this.$tc("sw-settings-number-range.detail.messageSaveError",0,{name:e})}),n}).finally(()=>{this.isLoading=!1,this.getState()})):(this.createNotificationError({message:this.$tc("sw-settings-number-range.detail.errorPatternNeededMessage")}),!1)},saveFinish(){this.isSaveSuccessful=!1},onCancel(){this.$router.push({name:"sw.settings.number.range.index"})},onChangeLanguage(){this.createdComponent()},abortOnLanguageChange(){return this.numberRangeRepository.hasChanges(this.numberRange)},saveOnLanguageChange(){return this.onSave()},onChangePattern(){if(null===this.prefix&&(this.prefix=""),null===this.suffix&&(this.suffix=""),!0!==this.advanced){this.numberRange.pattern=`${this.prefix}{n}${this.suffix}`;return}this.splitPattern()},onChangeType(){this.loadSalesChannels()},addSalesChannel(e){let n=this.numberRangeSalesChannelsRepository.create();n.numberRangeId=this.numberRange.id,n.numberRangeTypeId=this.numberRange.typeId,n.salesChannelId=e.id,this.numberRange.numberRangeSalesChannels.push(n),this.numberRange.numberRangeSalesChannels.length<=1&&this.$nextTick().then(()=>{let e=document.querySelector(".sw-card-view__content");e&&(e.scrollTop+=78)})},removeSalesChannel(e){let n=this.numberRange.numberRangeSalesChannels.find(n=>n.salesChannelId===e.id);this.numberRange.numberRangeSalesChannels.remove(n.id)},noSalesChannelSelected(){return!1===this.numberRange.global&&(!1===this.numberRange.type.global||null===this.numberRange.type.global)&&(!this.numberRange.numberRangeSalesChannels||0===this.numberRange.numberRangeSalesChannels.length)}}}},653551:function(e,n,a){var t=a(384764);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals),a(745346).Z("5dce7140",t,!0,{})}}]);