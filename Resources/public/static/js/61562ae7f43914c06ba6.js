(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[332],{DQii:function(e,n,i){},KlHj:function(e,n,i){var s=i("DQii");s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i("P8hj").default)("5c0e3f3c",s,!0,{})},gjok:function(e,n,i){"use strict";i.r(n);var s=i("6lmj"),t=i.n(s),d=(i("KlHj"),Shopware.Utils.format);n.default={template:'\n{% block sw_tagged_field %}\n\n{% block sw_order_promotion_tag_field %}\n<sw-block-field\n    class="sw-tagged-field sw-order-promotion-tag-field"\n    :class="taggedFieldClasses"\n    v-bind="$attrs"\n    :disabled="disabled"\n    v-on="$listeners"\n>\n    <template #sw-field-input="{ identification, error, disabled, size, setFocusClass, removeFocusClass }">\n\n        \n        {% block sw_tagged_field_inner %}\n        <ul\n            class="sw-tagged-field__tag-list"\n            :class="taggedFieldListClasses"\n            role="listbox"\n            tabindex="0"\n            @click="setFocus(true)"\n            @keydown.enter="setFocus(true)"\n        >\n\n            \n            {% block sw_order_promotion_tag_field_tag_list %}\n            <li\n                v-for="(item, index) in value"\n                :key="`sw-tagged-field-value--${index}`"\n            >\n\n                \n                {% block sw_order_promotion_tag_field_tag_item %}\n                <sw-label\n                    v-if="item.isInvalid"\n                    {% if VUE2 %}\n                    :key="item.code + item.isInvalid"\n                    {% endif %}\n                    :size="size"\n                    :dismissable="!disabled"\n                    variant="danger"\n                    @selected="setFocus(true)"\n                    @dismiss="dismissTag(item)"\n                >\n                    {{ item.code }}\n                </sw-label>\n\n                <sw-label\n                    v-else\n                    {% if VUE2 %}\n                    :key="item.code + item.isInvalid"\n                    {% endif %}\n                    v-tooltip="{\n                        message: getPromotionCodeDescription(item),\n                        width: 220\n                    }"\n                    :size="size"\n                    :dismissable="!disabled"\n                    @selected="setFocus(true)"\n                    @dismiss="dismissTag(item)"\n                >\n                    {{ item.code }}\n                </sw-label>\n                {% endblock %}\n            </li>\n            {% endblock %}\n\n            \n            {% block sw_order_promotion_tag_field_item_input %}\n            <li>\n                \n                {% block sw_order_promotion_tag_field_input %}\n                \n                <input\n                    ref="taggedFieldInput"\n                    v-model="newTagName"\n                    type="text"\n                    class="sw-tagged-field__input"\n                    :class="taggedFieldInputClasses"\n                    :disabled="disabled"\n                    :placeholder="placeholder"\n                    @focus="setFocus(true)"\n                    @blur="setFocus(false)"\n                    @keydown="performAddTag"\n                >\n                {% endblock %}\n            </li>\n            {% endblock %}\n        </ul>\n        {% endblock %}\n    </template>\n</sw-block-field>\n{% endblock %}\n{% endblock %}\n',props:{currency:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{taggedFieldListClasses:function(){return{"sw-tagged-field__tag-list--disabled":this.disabled}}},methods:{performAddTag:function(e){var n=this;if(!this.disabled&&!this.noTriggerKey(e)&&("string"==typeof this.newTagName&&""!==this.newTagName&&!this.value.find((function(e){return e.code===n.newTagName})))){var i={code:this.newTagName};this.feature.isActive("VUE3")?this.$emit("update:value",[].concat(t()(this.value),[i])):this.$emit("change",[].concat(t()(this.value),[i])),this.newTagName=""}},dismissTag:function(e){this.$emit("on-remove-code",e)},setFocus:function(e){this.disabled||(this.hasFocus=e,e&&this.$refs.taggedFieldInput.focus())},getPromotionCodeDescription:function(e){if(!e.discountId)return e.code;var n=e.value,i=e.discountScope,s=e.discountType,t=e.groupId,o="percentage"===s?n:d.currency(Number(n),this.currency.isoCode);return this.$tc("sw-order.createBase.textPromotionDescription.".concat(i,".").concat(s),0,{value:o,groupId:t})}}}}}]);