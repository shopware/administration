"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[78159],{578159:function(t,e,a){a.r(e),a.d(e,{default:function(){return n}});let{Context:s}=Shopware,{Criteria:i}=Shopware.Data;var n={template:"\n{% block sw_settings_tax_rule_type_individual_states_cell %}\n<span>\n    {{ taxRule.type.typeName }}:\n    <template v-if=\"individualStates\">\n        {{ individualStates.join(', ') }}\n    </template>\n    <template v-else>\n        -\n    </template>\n</span>\n{% endblock %}\n",compatConfig:Shopware.compatConfig,inject:["repositoryFactory"],props:{taxRule:{type:Object,required:!0}},data(){return{individualStates:null}},computed:{stateRepository(){return this.repositoryFactory.create("country_state")}},watch:{"taxRule.data.states"(){this.loadStates()}},created(){this.createdComponent()},methods:{createdComponent(){this.loadStates()},loadStates(){if(!this.taxRule.data||!this.taxRule.data.states||!this.taxRule.data.states.length){this.individualStates=[];return}let t=new i(1,25);t.setIds(this.taxRule.data.states),this.stateRepository.search(t,s.api).then(t=>{this.individualStates=t.map(t=>t.name)})}}}}}]);