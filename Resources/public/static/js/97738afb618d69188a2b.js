(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[47],{NWmL:function(e,n,i){},fq6T:function(e,n,i){"use strict";i.r(n);i("zX73"),n.default={template:'\n{% block sw_bulk_edit_change_type_field_renderer %}\n<div class="sw-bulk-edit-change-field-renderer">\n    <template v-for="(formField, index) in formFields">\n        \n        {% block sw_bulk_edit_change_type_field_renderer_container %}\n        <sw-container\n            v-if="formField && bulkEditData[formField.name]"\n            :key="`formField-${index}`"\n            columns="240px 1fr"\n            gap="32px"\n            :class="`sw-bulk-edit-change-field__container sw-bulk-edit-change-field-${formField.name}`"\n        >\n            \n            {% block sw_bulk_edit_change_type_field_renderer_change_field %}\n            <div class="sw-bulk-edit-change-field-renderer__change-field">\n                \n                {% block sw_bulk_edit_change_type_field_renderer_change_field_title %}\n                <sw-field\n                    v-model="bulkEditData[formField.name].isChanged"\n                    class="sw-bulk-edit-change-field__change"\n                    type="checkbox"\n                    :label="!formField.config.changeLabel ? $tc(\'sw-bulk-edit.general.defaultChangeLabel\') : formField.config.changeLabel"\n                    :help-text="formField.labelHelpText"\n                    :disabled="!!bulkEditData[formField.name].disabled"\n                    @change="onChangeValue($event, formField.name)"\n                />\n                {% endblock %}\n\n                \n                {% block sw_bulk_edit_change_type_field_renderer_change_field_subtitle %}\n                <span v-if="formField.config.changeSubLabel">\n                    {{ formField.config.changeSubLabel }}\n                </span>\n                {% endblock %}\n            </div>\n            {% endblock %}\n\n            \n            {% block sw_bulk_edit_change_type_field_renderer_change_form_value_field %}\n            <sw-bulk-edit-change-type\n                v-if="showSelectBoxType(formField)"\n                v-model="bulkEditData[formField.name].type"\n                :allow-overwrite="getConfigValue(formField, \'allowOverwrite\')"\n                :allow-clear="getConfigValue(formField, \'allowClear\')"\n                :allow-add="getConfigValue(formField, \'allowAdd\')"\n                :allow-remove="getConfigValue(formField, \'allowRemove\')"\n            >\n                <template #value-field="{ isDisplayingValue }">\n                    <slot\n                        name="valueFieldWithBoxType"\n                        v-bind="{formField, entity, index, isDisplayingValue }"\n                    >\n                        <template v-if="formField.canInherit && isDisplayingValue">\n                            <div class="sw-bulk-edit-change-field-renderer__inheritance-group-field is--select-box-type">\n                                <sw-inheritance-switch\n                                    :is-inherited="bulkEditData[formField.name].isInherited"\n                                    @inheritance-restore="onInheritanceRestore(formField)"\n                                    @inheritance-remove="onInheritanceRemove(formField)"\n                                />\n                                <sw-bulk-edit-form-field-renderer\n                                    v-bind="formField"\n                                    :key="`formField-${index}`"\n                                    v-model="entity[formField.name]"\n                                    @input="onChangeValue($event, formField.name)"\n                                />\n                            </div>\n                        </template>\n                        <template v-else>\n                            <sw-bulk-edit-form-field-renderer\n                                v-if="isDisplayingValue"\n                                v-bind="formField"\n                                :key="`formField-${index}`"\n                                v-model="entity[formField.name]"\n                                @input="onChangeValue($event, formField.name)"\n                            />\n                        </template>\n                    </slot>\n                </template>\n            </sw-bulk-edit-change-type>\n            {% endblock %}\n\n            \n            {% block sw_bulk_edit_change_type_field_renderer_change_form_value_field_without_change_type %}\n            <template v-if="!showSelectBoxType(formField)">\n                <slot\n                    name="valueField"\n                    v-bind="{formField, entity, index, isDisplayingValue }"\n                >\n                    <template v-if="formField.canInherit">\n                        <div class="sw-bulk-edit-change-field-renderer__inheritance-group-field">\n                            <sw-inheritance-switch\n                                :is-inherited="bulkEditData[formField.name].isInherited"\n                                @inheritance-restore="onInheritanceRestore(formField)"\n                                @inheritance-remove="onInheritanceRemove(formField)"\n                            />\n                            <sw-bulk-edit-form-field-renderer\n                                v-bind="formField"\n                                :key="`formField-${index}`"\n                                v-model="entity[formField.name]"\n                                @input="onChangeValue($event, formField.name)"\n                            />\n                        </div>\n                    </template>\n                    <template v-else>\n                        <sw-bulk-edit-form-field-renderer\n                            v-bind="formField"\n                            :key="`formField-${index}`"\n                            v-model="entity[formField.name]"\n                            @input="onChangeValue($event, formField.name)"\n                        />\n                    </template>\n                </slot>\n            </template>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n    </template>\n</div>\n{% endblock %}\n',inject:["feature"],props:{bulkEditData:{type:Object,required:!0},formFields:{type:Array,required:!0},entity:{type:Object,required:!0},disabled:{type:Boolean,default:!1}},data:function(){return{isDisplayingValue:!0}},methods:{hasFormFieldConfig:function(e){return!!e.config},getConfigValue:function(e,n){return this.hasFormFieldConfig(e)&&e.config[n]?e.config[n]:null},showSelectBoxType:function(e){return!0===this.getConfigValue(e,"allowOverwrite")||!0===this.getConfigValue(e,"allowClear")||!0===this.getConfigValue(e,"allowAdd")||!0===this.getConfigValue(e,"allowRemove")},onChangeValue:function(e,n){this.bulkEditData[n].isInherited||(this.bulkEditData[n].value=e),this.$emit("change-value",n,e)},onInheritanceRestore:function(e){this.$emit("inheritance-restore",e)},onInheritanceRemove:function(e){this.$emit("inheritance-remove",e)}}}},zX73:function(e,n,i){var l=i("NWmL");l.__esModule&&(l=l.default),"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,i("ydqr").default)("4ae2cd2c",l,!0,{})}}]);