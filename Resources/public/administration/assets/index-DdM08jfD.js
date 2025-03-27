const{Component:t}=Shopware;t.register("sw-boolean-radio-group",{template:`
<sw-radio-field
    class="sw-boolean-radio-group"
    v-bind="$attrs"
    :options="options"
    v-model:value="castedValue"
    name="sw-field--castedValue"
    :bordered="bordered">
</sw-radio-field>
`,inject:["feature"],emits:["update:value"],props:{value:{type:Boolean,required:!1,default:!0},labelOptionTrue:{type:String,required:!0},labelOptionFalse:{type:String,required:!0},bordered:{type:Boolean,required:!1,default:!1}},computed:{options(){return[{value:"true",name:this.labelOptionTrue},{value:"false",name:this.labelOptionFalse}]},castedValue:{get(){return this.value?this.value.toString():"false"},set(e){this.$emit("update:value",e==="true")}}}});
