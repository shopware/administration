(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[257],{"5BYd":function(e,t,i){"use strict";i.r(t);var n=i("6lmj"),l=i.n(n),o=i("CsSd"),s=i.n(o);i("Wot/");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){s()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var r=Shopware,a=r.Component,u=r.Mixin,m=r.Service,f=Shopware.Data.Criteria,p=a.getComponentHelper().mapState,h=Shopware.Classes.ShopwareError;t.default={template:'\n{% block sw_flow_set_entity_custom_field_modal %}\n<sw-modal\n    class="sw-flow-set-entity-custom-field-modal"\n    :title="$tc(\'sw-flow.modals.setEntityCustomField.title\')"\n    :closable="false"\n    @modal-close="onClose"\n>\n    \n    {% block sw_flow_set_entity_custom_field_modal_content %}\n    <div class="sw-flow-set-entity-custom-field-modal__content">\n        \n        {% block sw_flow_tag_modal_to_field %}\n        <sw-single-select\n            {% if VUE3 %}\n            v-model:value="entity"\n            {% else %}\n            v-model="entity"\n            {% endif %}\n            class="sw-flow-set-entity-custom-field-modal__entity-field"\n            required\n            show-clearable-button\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.labelToField\')"\n            :placeholder="$tc(\'sw-flow.modals.setEntityCustomField.placeholderToField\')"\n            :error="entityError"\n            :options="entityOptions"\n            {% if VUE3 %}\n            @update:value="onEntityChange()"\n            {% else %}\n            @change="onEntityChange()"\n            {% endif %}\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_category %}\n        <sw-entity-single-select\n            {% if VUE3 %}\n            v-model:value="customFieldSetId"\n            {% else %}\n            v-model="customFieldSetId"\n            {% endif %}\n            class="sw-flow-set-entity-custom-field-modal__custom-field-set"\n            entity="custom_field_set"\n            required\n            :label-property="labelProperty"\n            :disabled="!entity"\n            :criteria="customFieldSetCriteria"\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.customFieldSet\')"\n            :placeholder="$tc(\'sw-flow.modals.setEntityCustomField.customFieldSetPlaceHolder\')"\n            :error="customFieldSetError"\n            @change="(id, customFieldSet) => onCustomFieldSetChange(id, customFieldSet)"\n        >\n            <template #selection-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n\n            <template #result-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n        </sw-entity-single-select>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_field_name %}\n        <sw-entity-single-select\n            {% if VUE3 %}\n            v-model:value="customFieldId"\n            {% else %}\n            v-model="customFieldId"\n            {% endif %}\n            class="sw-flow-set-entity-custom-field-modal__custom-field"\n            entity="custom_field"\n            required\n            :label-property="labelProperty"\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.customField\')"\n            :disabled="!customFieldSetId"\n            :criteria="customFieldCriteria"\n            :placeholder="$tc(\'sw-flow.modals.setEntityCustomField.customFieldPlaceHolder\')"\n            :error="customFieldError"\n            @change="(id, customField) => onCustomFieldChange(id, customField)"\n        >\n            <template #selection-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n\n            <template #result-label-property="{ item }">\n                {{ getInlineSnippet(item.config.label) || item.name }}\n            </template>\n        </sw-entity-single-select>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_field_value_options %}\n        <sw-single-select\n            v-if="customFieldId"\n            {% if VUE3 %}\n            v-model:value="fieldOptionSelected"\n            {% else %}\n            v-model="fieldOptionSelected"\n            {% endif %}\n            class="sw-flow-set-entity-custom-field-modal__custom-field-value-options"\n            :options="fieldOptions"\n            :label="$tc(\'sw-flow.modals.setEntityCustomField.customFieldOption\')"\n            :highlight-search-term="false"\n        />\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_field_value %}\n        <sw-form-field-renderer\n            v-if="showFieldValue"\n            v-model="customFieldValue"\n            class="sw-flow-set-entity-custom-field-modal__custom-field-value"\n            :config="renderedFieldConfig"\n            bordered\n        >\n            <template #label>\n                {{ $tc(\'sw-flow.modals.setEntityCustomField.prefixFieldName\') }}\n                {{ getInlineSnippet(customField.config.label) || customField.name }}\n            </template>\n        </sw-form-field-renderer>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_flow_set_entity_custom_field_modal_custom %}\n    {% endblock %}\n\n    \n    {% block sw_flow_set_entity_custom_field_modal_footer %}\n    <template #modal-footer>\n        \n        {% block sw_flow_set_entity_custom_field_modal_footer_cancel_button %}\n        <sw-button\n            class="sw-flow-set-entity-custom-field-modal__cancel-button"\n            @click="onClose"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_flow_set_entity_custom_field_modal_footer_save_button %}\n        <sw-button\n            class="sw-flow-set-entity-custom-field-modal__save-button"\n            variant="primary"\n            @click="onAddAction"\n        >\n            {{ sequence.id ? $tc(\'sw-flow.modals.buttonSaveAction\') : $tc(\'sw-flow.modals.buttonAddAction\') }}\n        </sw-button>\n        {% endblock %}\n    </template>\n    {% endblock %}\n</sw-modal>\n{% endblock %}\n',inject:["repositoryFactory"],mixins:[u.getByName("sw-inline-snippet"),u.getByName("notification")],props:{sequence:{type:Object,required:!0},action:{type:String,required:!1,default:null}},data:function(){return{customFieldSetId:null,customFieldId:null,customFieldValue:null,customFieldSetError:null,customFieldError:null,config:{},renderedFieldConfig:{},fieldOptions:[],fieldOptionSelected:"upsert",customField:{config:{label:""}},entity:null,entityError:null,entityOptions:[]}},computed:c({customFieldRepository:function(){return this.repositoryFactory.create("custom_field")},customFieldCriteria:function(){var e=new f(1,25);return e.addFilter(f.equals("customFieldSetId",this.customFieldSetId)),e},customFieldSetCriteria:function(){if(!this.entity)return null;var e=new f(1,25);return e.addFilter(f.equals("relations.entityName",this.convertToEntityTechnicalName(this.entity))),e},showFieldValue:function(){return this.customFieldId&&"clear"!==this.fieldOptionSelected},defaultFieldOptions:function(){return[{value:"upsert",label:"".concat(this.$tc("sw-flow.modals.setEntityCustomField.options.overwrite"))},{value:"create",label:"".concat(this.$tc("sw-flow.modals.setEntityCustomField.options.notOverwrite"))},{value:"clear",label:"".concat(this.$tc("sw-flow.modals.setEntityCustomField.options.clear"))}]},multipleFieldOptions:function(){return[].concat(l()(this.defaultFieldOptions),[{value:"add",label:"".concat(this.$tc("global.default.add"))},{value:"remove",label:"".concat(this.$tc("global.default.remove"))}])},labelProperty:function(){return"config.label.".concat(Shopware.State.get("session").currentLocale)}},p("swFlowState",["triggerEvent","customFieldSets","customFields","triggerActions"])),watch:{entity:function(e){e&&this.entityError&&(this.entityError=null)},renderedFieldConfig:function(e){"colorpicker"!==e.customFieldType||this.renderedFieldConfig.zIndex||(this.renderedFieldConfig=c(c({},this.renderedFieldConfig),{},{zIndex:1001})),this.fieldOptions=this.getFieldOptions(this.renderedFieldConfig)},customFieldSetId:function(e){e&&this.customFieldSetError&&(this.customFieldSetError=null)},customFieldId:function(e){e&&this.customFieldError&&(this.customFieldError=null)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.getEntityOptions(),this.sequence.config&&(this.entity=this.sequence.config.entity,this.customFieldSetId=this.sequence.config.customFieldSetId,this.customFieldSetLabel=this.sequence.config.customFieldSetLabel,this.customFieldId=this.sequence.config.customFieldId,this.customFieldLabel=this.sequence.config.customFieldLabel,this.customFieldValue=this.sequence.config.customFieldValue,this.getCustomFieldRendered())},getCustomFieldRendered:function(){var e=this;this.customFieldRepository.get(this.customFieldId).then((function(t){e.customField=t,e.renderedFieldConfig=e.validateOptionSelectFieldLabel(t.config)})).catch((function(){e.createNotificationError({message:e.$tc("global.notification.unspecifiedSaveErrorMessage")})})).finally((function(){e.fieldOptionSelected=e.sequence.config.option}))},onEntityChange:function(){this.customFieldSetId=null},onCustomFieldSetChange:function(e,t){t&&(Shopware.State.commit("swFlowState/setCustomFieldSets",[].concat(l()(this.customFieldSets),[t])),this.customFieldId=null,this.customFieldValue=null,this.renderedFieldConfig={})},onCustomFieldChange:function(e,t){t&&(this.customField=t,Shopware.State.commit("swFlowState/setCustomFields",[].concat(l()(this.customFields),[t])),this.customFieldValue=null,this.renderedFieldConfig=this.validateOptionSelectFieldLabel(t.config),"sw-entity-multi-id-select"===this.renderedFieldConfig.componentName&&(this.customFieldValue=[]))},validateOptionSelectFieldLabel:function(e){var t=this;return e.options?(e.options.forEach((function(e){e.label=t.getInlineSnippet(e.label)||e.value})),e):e},onClose:function(){this.customFieldSetError=null,this.customFieldError=null,this.$emit("modal-close")},onAddAction:function(){var e,t=this;if(this.entityError=this.fieldError(this.entity),this.customFieldSetError=this.entity?this.fieldError(this.customFieldSetId):null,this.customFieldError=this.customFieldSetId?this.fieldError(this.customFieldId):null,!(this.customFieldSetError||this.customFieldError||this.entityError)){var i=c(c({},this.sequence),{},{config:{entity:this.entity,customFieldSetId:this.customFieldSetId,customFieldId:this.customFieldId,customFieldValue:this.customFieldValue,option:this.fieldOptionSelected,optionLabel:null===(e=this.fieldOptions.find((function(e){return e.value===t.fieldOptionSelected})))||void 0===e?void 0:e.label}});this.$emit("process-finish",i)}},fieldError:function(e){return e&&e.length?null:new h({code:"c1051bb4-d103-4f74-8988-acbcafc7fdc3"})},getFieldOptions:function(e){switch(e.componentName){case"sw-entity-multi-id-select":case"sw-multi-select":return this.multipleFieldOptions;default:return this.defaultFieldOptions}},getEntityOptions:function(){var e;if(this.triggerEvent){var t=null!==(e=this.triggerEvent.aware)&&void 0!==e?e:[],i=m("flowBuilderService").getAvailableEntities(this.action,this.triggerActions,t,["customFields"]);i.length&&(this.entity=i[0].value),this.entityOptions=i}else this.entityOptions=[]},convertToEntityTechnicalName:function(e){return e.replace(/[A-Z]/g,(function(e){return"_".concat(e.toLowerCase())}))}}}},"Wot/":function(e,t,i){var n=i("ZHhh");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,i("P8hj").default)("4f776bb8",n,!0,{})},ZHhh:function(e,t,i){}}]);