(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[535],{PpRE:function(e,n,t){"use strict";t.r(n);n.default=Shopware.Component.wrapComponentConfig({template:'<div class="sw-custom-entity-input-field">\n    <sw-text-field\n        v-if="type === \'string\'"\n        class="sw-custom-entity-input-field__string"\n        :value="currentValue"\n        :label="label"\n        :placeholder="placeholder"\n        :help-text="helpText"\n        @change="onChange"\n    />\n\n    <sw-textarea-field\n        v-else-if="type === \'text\'"\n        class="sw-custom-entity-input-field__text"\n        :value="currentValue"\n        :label="label"\n        :placeholder="placeholder"\n        :help-text="helpText"\n        @change="onChange"\n    />\n\n    <sw-number-field\n        v-else-if="type === \'int\'"\n        class="sw-custom-entity-input-field__int"\n        :value="currentValue"\n        number-type="int"\n        :label="label"\n        :placeholder="placeholder"\n        :help-text="helpText"\n        {% if VUE3 %}\n        @update:value="onChange"\n        {% else %}\n        @change="onChange"\n        {% endif %}\n    />\n\n    <sw-number-field\n        v-else-if="type === \'float\'"\n        class="sw-custom-entity-input-field__float"\n        :value="currentValue"\n        number-type="float"\n        :digits="10"\n        :label="label"\n        :placeholder="placeholder"\n        :help-text="helpText"\n        {% if VUE3 %}\n        @update:value="onChange"\n        {% else %}\n        @change="onChange"\n        {% endif %}\n    />\n\n    <sw-switch-field\n        v-else-if="type === \'boolean\'"\n        class="sw-custom-entity-input-field__boolean"\n        :value="currentValue"\n        :label="label"\n        :placeholder="placeholder"\n        :help-text="helpText"\n        {% if VUE3 %}\n        @update:value="onChange"\n        {% else %}\n        @change="onChange"\n        {% endif %}\n    />\n\n    <sw-datepicker\n        v-else-if="type === \'date\'"\n        class="sw-custom-entity-input-field__date"\n        :value="currentValue"\n        :label="label"\n        :placeholder="placeholder"\n        :help-text="helpText"\n        @change="onChange"\n    />\n\n    \n\n    \n    \n\n    \n    \n\n    \n    <sw-text-field\n        v-else\n        class="sw-custom-entity-input-field__undefined"\n        :label="label"\n        :error="{ code: \'CONTENT__INVALID_CUSTOM_ENTITY_FIELD_TYPE\' }"\n        disabled\n    />\n</div>\n',inject:["feature"],model:{prop:"value",event:"change"},props:{value:{type:[Object,String,Number,Boolean],required:!1,default:null},type:{type:String,required:!0},label:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:""},helpText:{type:String,required:!1,default:""}},computed:{currentValue:{get:function(){return this.value},set:function(e){this.onChange(e)}}},methods:{onChange:function(e){this.feature.isActive("VUE3")?this.$emit("update:value",e):this.$emit("change",e)}}})}}]);