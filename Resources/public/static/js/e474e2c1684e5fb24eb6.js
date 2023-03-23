(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[26],{P0Tn:function(e,t,n){var i=n("v/UE");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("ydqr").default)("f6da8d3c",i,!0,{})},"v/UE":function(e,t,n){},z5eG:function(e,t,n){"use strict";n.r(t);var i=n("HZZ/"),r=n.n(i),o=n("J58c"),s=n.n(o),a=n("hJxD"),d=n.n(a),c=n("DcW8"),l=n.n(c),u=n("fdJG");n("uWpg"),n("P0Tn");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=Shopware.Utils;t.default={template:'\n{% block sw_code_editor %}\n<div\n    class="sw-code-editor"\n    :class="classes"\n>\n\n    \n    {% block sw_text_editor_label %}\n    <div\n        v-if="label.length"\n        class="sw-code-editor__label"\n    >{{ label }}\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_code_editor_editor %}\n    \n    <div\n        :ref="`editor${editorId}`"\n        class="sw-code-editor__editor"\n        :content="value"\n        tabindex="1"\n    ></div>\n    {% endblock %}\n    \n    {% block sw_code_editor_sanitize_info %}\n    <div\n        v-if="sanitizeInput"\n        class="sw-code-editor__sanitize-bar"\n    >\n        \n        {% block sw_code_editor_sanitize_info_content %}\n        <div\n            v-if="contentWasSanitized"\n            class="sw-code-editor__sanitized-hint"\n            :class="{\'sw-code-editor__sanitized-hint--visible\': contentWasSanitized}"\n        >\n            \n            {% block sw_code_editor_sanitize_info_content_sanitized %}\n            <sw-circle-icon\n                icon-name="regular-info-circle"\n                :size="30"\n                variant="warning"\n            />\n            <p class="sw-code-editor__sanitize-text">\n                {{ $tc(\'global.sw-code-editor.sanitizedHint\') }}\n            </p>\n            {% endblock %}\n        </div>\n        <div\n            class="sw-code-editor__sanitize-info"\n            :class="{\'sw-code-editor__sanitize-info--visible\': !contentWasSanitized}"\n        >\n            \n            {% block sw_code_editor_sanitize_info_content_hint %}\n            <sw-circle-icon\n                icon-name="regular-info-circle"\n                :size="30"\n                variant="info"\n            />\n            <p class="sw-code-editor__sanitize-text">\n                {{ $tc(\'global.sw-code-editor.sanitizeInfo\') }}\n            </p>\n            {% endblock %}\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    <sw-field-error\n        v-if="error"\n        :error="error"\n    />\n</div>\n{% endblock %}\n',inject:["feature","userInputSanitizeService"],props:{value:{type:String,required:!1,default:""},label:{type:String,required:!1,default:""},completerFunction:{type:Function,required:!1,default:null},editorConfig:{type:Object,required:!1,default:function(){return{}}},completionMode:{type:String,required:!1,default:"text",validValues:["entity","text"],validator:function(e){return!e.length||["entity","text"].includes(e)}},mode:{type:String,required:!1,default:"twig",validValues:["twig","text"],validator:function(e){return!e.length||["twig","text"].includes(e)}},softWraps:{type:Boolean,required:!1,default:!0},setFocus:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},sanitizeInput:{type:Boolean,required:!1,default:!1},sanitizeFieldName:{type:String,required:!1,default:null},error:{type:Object,required:!1,default:null}},data:function(){return{editor:{},editorId:h.createId(),contentWasSanitized:!1}},computed:{aceConfig:function(){return f(f({},{mode:"ace/mode/".concat(this.mode),showPrintMargin:!1,wrap:this.softWraps,readOnly:this.disabled}),this.editorConfig)},classes:function(){return{"has--error":!!this.error}}},watch:{value:function(e){null!==e&&e!==this.editor.getValue()&&this.editor.setValue(e,1)},softWraps:function(){this.editor.session.setOption("wrap",this.softWraps)}},mounted:function(){this.mountedComponent()},destroyed:function(){this.destroyedComponent()},methods:{mountedComponent:function(){this.editor=l.a.edit(this.$refs["editor".concat(this.editorId)],this.aceConfig),this.defineAutocompletion(this.completerFunction),this.editor.setValue(this.value||"",1),this.editor.on("input",this.onInput),this.editor.on("blur",this.onBlur),this.setFocus&&this.editor.focus()},destroyedComponent:function(){delete this.editor},onInput:function(){var e=this.editor.getValue();this.value!==e&&this.$emit("input",e)},onBlur:function(){var e=this;return r()(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sanitizeEditorInput(e.editor.getValue());case 2:n=t.sent,e.$emit("blur",n);case 4:case"end":return t.stop()}}),t)})))()},sanitizeEditorInput:function(e){var t=this;return r()(d.a.mark((function n(){var i,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.sanitizeInput){n.next=15;break}if(t.contentWasSanitized=!1,t.value===e){n.next=15;break}return n.prev=3,n.next=6,t.userInputSanitizeService.sanitizeInput({html:e,field:t.sanitizeFieldName});case 6:if(i=n.sent,t.contentWasSanitized=(null==i?void 0:i.preview)!==e,!t.contentWasSanitized){n.next=11;break}return t.editor.setValue(null!==(r=null==i?void 0:i.preview)&&void 0!==r?r:e,1),n.abrupt("return",t.editor.getValue());case 11:n.next=15;break;case 13:n.prev=13,n.t0=n.catch(3);case 15:return n.abrupt("return",e);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))()},defineAutocompletion:function(e){if(Object(u.setCompleters)([]),e){var t=JSON.parse(JSON.stringify(u.textCompleter)),n=JSON.parse(JSON.stringify(u.textCompleter));if("entity"===this.completionMode){n.identifierRegexps=[/[\[\]\.a-zA-Z_0-9\$\-\u00A2-\uFFFF]/],n.getCompletions=function(t,n,i,r,o){this.identifierRegexps=[/[\[\][a-zA-Z_0-9\$\-\u00A2-\uFFFF]/],o(null,e(r)),this.identifierRegexps=[/[\[\]\.a-zA-Z_0-9\$\-\u00A2-\uFFFF]/]},n.completerFunction=e,this.editor.completers=[n];this.editor.commands.on("afterExec",(function(e){"insertstring"===e.command.name&&"\n"!==e.args&&" "!==e.args&&e.editor.execCommand("startAutocomplete",null)}))}else t.identifierRegexps=null,t.getCompletions=function(t,n,i,r,o){o(null,e(r))},t.completerFunction=e,this.editor.completers=[t]}else this.editor.completers=[]}}}}}]);