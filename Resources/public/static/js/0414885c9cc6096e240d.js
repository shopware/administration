(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[195],{"/QiL":function(e,t,n){},obtY:function(e,t,n){"use strict";n.r(t);n("ywr9");var o=Shopware.Mixin;t.default={template:'\n{% block sw_cms_el_vimeo_video %}\n<div class="sw-cms-el-vimeo-video">\n    \n    <iframe\n        class="sw-cms-el-vimeo-video__video"\n        :src="videoUrl"\n    ></iframe>\n</div>\n{% endblock %}\n',mixins:[o.getByName("cms-element")],computed:{videoID:function(){return this.element.config.videoID.value},byLine:function(){return this.element.config.byLine.value?"":"byline=".concat(this.element.config.byLine.value,"&")},color:function(){return this.element.config.color.value?"color=".concat(this.element.config.color.value,"&").replace("#",""):""},doNotTrack:function(){return this.element.config.doNotTrack.value?"dnt=".concat(this.element.config.doNotTrack.value,"&"):""},loop:function(){return this.element.config.loop.value?"loop=".concat(this.element.config.loop.value,"&"):""},mute:function(){return this.element.config.mute.value?"mute=".concat(this.element.config.mute.value,"&"):""},title:function(){return this.element.config.title.value?"":"title=".concat(this.element.config.title.value,"&")},portrait:function(){return this.element.config.portrait.value?"":"portrait=".concat(this.element.config.portrait.value)},controls:function(){return this.element.config.controls.value?"":"controls=".concat(this.element.config.value)},videoUrl:function(){return"https://player.vimeo.com/video/\n            ".concat(this.videoID,"?            ").concat(this.byLine,"            ").concat(this.color,"            ").concat(this.doNotTrack,"            ").concat(this.loop,"            ").concat(this.controls,"            ").concat(this.title,"            ").concat(this.portrait).replace(/ /g,"")}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.initElementConfig("vimeo-video"),this.initElementData("vimeo-video")}}}},ywr9:function(e,t,n){var o=n("/QiL");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n("ydqr").default)("747dbf92",o,!0,{})}}]);