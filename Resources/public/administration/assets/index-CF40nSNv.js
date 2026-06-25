const e='{% block sw_cms_el_preview_html %} <div class="sw-cms-el-preview-html"> <sw-code-editor v-model:value="demoValue" :disabled="true" :editor-config="editorConfig" /> </div> {% endblock %}',t={template:e,data(){return{demoValue:`
<h2>Lorem ipsum</h2>
<p>Lorem ipsum</p>
<button type="button">
    Click me!
</button>`.trim(),editorConfig:{highlightActiveLine:!1,cursorStyle:"slim",highlightGutterLine:!1,showFoldWidgets:!1}}}};export{t as default};
