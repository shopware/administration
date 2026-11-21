const e='{% block sw_cms_preview_html %} <div class="sw-cms-preview-html"> <sw-code-editor v-model:value="demoValue" :disabled="true" :editor-config="editorConfig" /> </div> {% endblock %}',t={template:e,data(){return{demoValue:`
<h2>Lorem ipsum dolor</h2>
<p>Lorem ipsum dolor sit amet</p>
<button type="button">
    Click me!
</button>`.trim(),editorConfig:{highlightActiveLine:!1,cursorStyle:"slim",highlightGutterLine:!1,showFoldWidgets:!1}}}};export{t as default};
