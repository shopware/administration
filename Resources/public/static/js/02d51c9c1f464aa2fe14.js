(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[11301],{685222:function(){},311301:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}}),n(661779);var s={template:'\n{% block sw_cms_section_actions %}\n<div\n    class="sw-cms-section__actions"\n    :class="componentClasses"\n>\n\n    \n    {% block sw_cms_section_action_select %}\n    <div\n        class="sw-cms-section__action sw-cms-section-select"\n        role="button"\n        tabindex="0"\n        @click="selectSection"\n        @keydown.enter="selectSection"\n    >\n        <sw-icon\n            name="regular-layout"\n            size="20"\n        />\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{section:{type:Object,required:!0},disabled:{type:Boolean,required:!1,default:!1}},inject:["feature"],data(){return{cmsPageState:Shopware.State.get("cmsPageState")}},computed:{componentClasses(){return{"is--disabled":this.disabled}}},created(){this.createdComponent()},methods:{createdComponent(){this.cmsPageState.selectedSection&&this.$store.dispatch("cmsPageState/setSection",this.section)},selectSection(){this.disabled||(this.$store.dispatch("cmsPageState/setSection",this.section),this.$parent.$parent.$emit("page-config-open","itemConfig"))}}}},661779:function(e,t,n){var s=n(685222);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals),n(745346).Z("318e25da",s,!0,{})}}]);