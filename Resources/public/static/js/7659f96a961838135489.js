(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[139],{"0G4z":function(n,e,i){"use strict";i.r(e);var t=i("6lmj"),s=i.n(t);i("En8A"),e.default={template:'\n{% block sw_cms_mapping_field %}\n<div class="sw-cms-mapping-field">\n\n    \n    {% block sw_cms_mapping_field_info %}\n    <div class="sw-cms-mapping-field__info">\n\n        \n        {% block sw_cms_mapping_field_label %}\n        <div class="sw-cms-mapping-field__label">\n            {{ label }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_mapping_field_mapping %}\n        <template v-if="allowedMappingTypes.length">\n            \n            {% block sw_cms_mapping_field_mapping_selection %}\n            <sw-context-button\n                v-if="!isMapped"\n                class="sw-cms-mapping-field__selection"\n                :menu-width="340"\n            >\n                \n                {% block sw_cms_mapping_field_mapping_selection_action %}\n                <template #button>\n                    <div class="sw-cms-mapping-field__action">\n                        <sw-icon\n                            name="regular-external-link"\n                            size="16"\n                        />\n                        <span class="sw-cms-mapping-field__action-label">\n                            {{ $tc(\'sw-cms.detail.label.buttonMappingAction\') }}\n                        </span>\n                    </div>\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_cms_mapping_field_mapping_selection_options %}\n                <div class="sw-cms-mapping-field__options">\n                    <sw-context-menu-item\n                        v-for="(prop, index) in allowedMappingTypes"\n                        :key="index"\n                        @click="onMappingSelect(prop)"\n                    >\n                        {{ prop }}\n                    </sw-context-menu-item>\n                </div>\n                {% endblock %}\n            </sw-context-button>\n            {% endblock %}\n\n            \n            {% block sw_cms_mapping_field_mapping_remove_action %}\n            <div\n                v-else\n                class="sw-cms-mapping-field__action-remove"\n                role="button"\n                tabindex="0"\n                @click="onMappingRemove"\n                @keydown.enter="onMappingRemove"\n            >\n                <sw-icon name="regular-times" />\n                <span class="sw-cms-mapping-field__action-label">\n                    {{ $tc(\'sw-cms.detail.label.buttonMappingRemoveAction\') }}\n                </span>\n            </div>\n            {% endblock %}\n        </template>\n        {% endblock %}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_cms_mapping_field_content %}\n    <div\n        v-if="!isMapped"\n        class="sw-cms-mapping-field__form-field"\n    >\n        <slot>\n        {% block sw_cms_mapping_field_slot_default %}{% endblock %}</slot>\n    </div>\n    {% endblock %}\n\n    <template v-else>\n        \n        {% block sw_cms_mapping_field_mapping_value %}\n        <div class="sw-cms-mapping-field__mapping-value">\n            {{ $tc(\'sw-cms.detail.label.mappingPreview\') }} <b>{{ config.value }}</b>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_cms_mapping_field_preview %}\n        <div\n            v-if="hasPreview"\n            class="sw-cms-mapping-field__preview"\n        >\n            <slot\n                v-if="demoValue !== null"\n                name="preview"\n                :demo-value="demoValue"\n            ></slot>\n\n            <sw-alert\n                v-else\n                variant="info"\n                class="sw-cms-mapping-field__empty-demo"\n            >\n                {{ $tc(\'sw-cms.detail.label.mappingEmptyPreview\') }}\n            </sw-alert>\n        </div>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',inject:["cmsService"],model:{prop:"config",event:"config-update"},props:{config:{type:Object,required:!0,default:function(){return{source:"static",value:null}}},valueTypes:{type:[String,Array],required:!1,default:"string"},entity:{type:String,required:!1,default:null},label:{type:String,required:!1,default:""}},data:function(){return{cmsPageState:Shopware.State.get("cmsPageState"),mappingTypes:{},allowedMappingTypes:[],demoValue:null}},computed:{isMapped:function(){return"mapped"===this.config.source},hasPreview:function(){return void 0!==this.$scopedSlots.preview}},watch:{cmsPageState:{deep:!0,handler:function(){this.updateMappingTypes(),this.updateDemoValue()}}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.updateMappingTypes(),this.updateDemoValue()},updateMappingTypes:function(){(this.mappingTypes=this.cmsPageState.currentMappingTypes,this.getAllowedMappingTypes(),"mapped"===this.config.source)&&(this.config.value.split(".")[0]!==this.cmsPageState.currentMappingEntity&&this.onMappingRemove())},updateDemoValue:function(){"mapped"===this.config.source&&(this.demoValue=this.getDemoValue(this.config.value))},onMappingSelect:function(n){this.config.source="mapped",this.config.value=n,this.demoValue=this.getDemoValue(n)},onMappingRemove:function(){this.config.source="static",this.config.value=this.config.type===Array?[]:null,this.demoValue=null},getAllowedMappingTypes:function(){var n=this,e=[];"entity"===this.valueTypes?null!==this.entity&&this.mappingTypes.entity&&this.mappingTypes.entity[this.entity]&&(e=this.mappingTypes.entity[this.entity]):Object.keys(this.mappingTypes).forEach((function(i){(i===n.valueTypes||n.valueTypes.includes(i))&&(e=[].concat(s()(e),s()(n.mappingTypes[i]))).sort()})),this.allowedMappingTypes=e},getDemoValue:function(n){return this.cmsService.getPropertyByMappingPath(this.cmsPageState.currentDemoEntity,n)}}}},En8A:function(n,e,i){var t=i("q8fI");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,i("P8hj").default)("4504e880",t,!0,{})},q8fI:function(n,e,i){}}]);