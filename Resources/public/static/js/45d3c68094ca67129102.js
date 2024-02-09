(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[34],{"3i+3":function(e,n,i){},TJzs:function(e,n,i){"use strict";i.r(n);var t=i("7yzw"),s=i.n(t),a=i("CsSd"),l=i.n(a),o=i("92Mt"),d=i.n(o);i("uNQU");function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function c(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){l()(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var u=Shopware,m=u.Context,f=u.Utils,h=Shopware.Data.Criteria;n.default={template:'\n{% block sw_media_field %}\n<div class="sw-media-field">\n    \n    {% block sw_media_field_label %}\n    \n    <label\n        v-if="showLabel"\n        class="sw-media-field__label"\n    >\n        <slot name="label">\n            {{ label }}\n        </slot>\n    </label>\n    {% endblock %}\n\n    \n    {% block sw_media_field_input %}\n    <div\n        class="sw-media-field__input-container"\n        :class="mediaFieldClasses"\n    >\n        \n        {% block sw_media_field_preview %}\n        <sw-media-media-item\n            v-if="mediaEntity"\n            class="sw-media-field__media-list-item sw-media-field__input"\n            :item="mediaEntity"\n            :is-list="true"\n            :show-context-menu-button="false"\n            :editable="false"\n        />\n        <div\n            v-else\n            class="sw-media-field__empty-preview sw-media-field__input"\n        ></div>\n        {% endblock %}\n\n        \n        {% block sw_media_field_toggle_button %}\n        <sw-button\n            class="sw-media-field__toggle-button"\n            square\n            :disabled="disabled"\n            @click="onTogglePicker"\n        >\n            \n            {% block sw_media_field_media_icon %}\n            <sw-icon name="regular-image" />\n            {% endblock %}\n\n            \n            {% block sw_media_field_media_popover %}\n            <sw-popover\n                v-if="showPicker"\n                :z-index="1000"\n                popover-class="sw-media-field__expanded-content"\n                class="sw-media-field__popover"\n            >\n                <div @click.stop>\n                    \n                    {% block sw_media_field_action_bar %}\n                    <div class="sw-media-field__actions_bar">\n                        \n                        {% block sw_media_field_action_bar_button_toggle %}\n                        <sw-button\n                            class="sw-media-field__action-button"\n                            @click="toggleUploadField"\n                        >\n                            <sw-icon\n                                class="sw-media-field__icon-add"\n                                name="regular-plus"\n                                small\n                            />\n                            {{ toggleButtonLabel }}\n                        </sw-button>\n                        {% endblock %}\n\n                        \n                        {% block sw_media_field_action_bar_button_unlink %}\n                        <sw-button\n                            v-if="mediaId"\n                            class="sw-media-field__action-button is--remove"\n                            @click="removeLink"\n                        >\n                            <sw-icon\n                                class="sw-media-field__icon-remove"\n                                name="regular-times-circle-s"\n                                small\n                            />\n                            {{ $tc(\'global.sw-media-field.labelUnlink\') }}\n                        </sw-button>\n                        {% endblock %}\n                    </div>\n                    {% endblock %}\n\n                    \n                    {% block sw_media_field_upload_component %}\n                    <sw-upload-listener\n                        :upload-tag="uploadTag"\n                        auto-upload\n                        @media-upload-finish="exposeNewId"\n                    />\n\n                    <sw-media-upload-v2\n                        v-if="showUploadField"\n                        variant="regular"\n                        :file-accept="fileAccept"\n                        :default-folder="defaultFolder"\n                        :allow-multi-select="false"\n                        :upload-tag="uploadTag"\n                        :disabled="disabled"\n                    />\n                    {% endblock %}\n\n                    <div\n                        v-else\n                        class="sw-media-field__media-selection"\n                    >\n                        \n                        {% block sw_media_field_search_field %}\n                        <sw-simple-search-field\n                            v-model="searchTerm"\n                            @search-term-change="onSearchTermChange"\n                        />\n                        {% endblock %}\n\n                        \n                        {% block sw_media_field_media_list %}\n                        <sw-loader\n                            v-if="isLoadingSuggestions"\n                            class="sw-media-field__picker-loader"\n                        />\n\n                        <ul\n                            v-else\n                            class="sw-media-field__suggestion-list"\n                        >\n                            <li\n                                v-for="suggestion in suggestedItems"\n                                :key="suggestion.id"\n                                class="sw-media-field__suggestion-list-entry"\n                            >\n                                \n                                {% block sw_media_field_suggestion_preview %}\n                                <sw-media-media-item\n                                    class="sw-media-field__media-list-item"\n                                    :item="suggestion"\n                                    :is-list="true"\n                                    :show-context-menu-button="false"\n                                    @media-item-click="mediaItemChanged(suggestion.id)"\n                                />\n                                {% endblock %}\n                            </li>\n                        </ul>\n                        {% endblock %}\n                    </div>\n                </div>\n            </sw-popover>\n            {% endblock %}\n        </sw-button>\n        {% endblock %}\n    </div>\n    {% endblock %}\n</div>\n{% endblock %}\n',inject:["repositoryFactory","feature"],model:{prop:"mediaId",event:"media-id-change"},props:c(c({value:{type:String,required:!1,default:null},disabled:{type:Boolean,default:!1,required:!1}},window._features_.vue3?{}:{mediaId:{type:String,required:!1,default:null}}),{},{label:{type:String,required:!1,default:null},defaultFolder:{type:String,required:!1,validator:function(e){return e.length>0},default:null},fileAccept:{type:String,required:!1,default:"*/*"}}),data:function(){return{searchTerm:"",mediaEntity:null,showPicker:!1,showUploadField:!1,suggestedItems:[],isLoadingSuggestions:!1,pickerClasses:{},uploadTag:f.createId()}},computed:c(c({},window._features_.vue3?{mediaId:{get:function(){return this.value},set:function(e){this.$emit("update:value",e)}}}:{}),{},{mediaRepository:function(){return this.repositoryFactory.create("media")},mediaFieldClasses:function(){return{"is--active":this.showPicker}},toggleButtonLabel:function(){return this.showUploadField?this.$tc("global.sw-media-field.labelToggleSearchExisting"):this.$tc("global.sw-media-field.labelToggleUploadNew")},suggestionCriteria:function(){var e=new h(1,5);return e.addFilter(h.not("AND",[h.equals("uploadedAt",null)])),this.searchTerm&&e.addFilter(h.multi("OR",[h.contains("fileName",this.searchTerm),h.contains("fileExtension",this.searchTerm)])),this.defaultFolder&&e.addFilter(h.equals("mediaFolder.defaultFolder.entity",this.defaultFolder)),e}}),watch:{mediaId:function(e){this.fetchItem(e),this.feature.isActive("VUE3")?this.$emit("update:value",e):this.$emit("media-id-change",e)}},created:function(){this.createdComponent()},methods:{createdComponent:function(){this.fetchItem()},onSearchTermChange:function(e){this.searchTerm=e,this.fetchSuggestions()},fetchItem:function(){var e=arguments,n=this;return s()(d.a.mark((function i(){var t;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=e.length>0&&void 0!==e[0]?e[0]:n.mediaId){i.next=4;break}return n.mediaEntity=null,i.abrupt("return");case 4:return i.next=6,n.mediaRepository.get(t,m.api);case 6:n.mediaEntity=i.sent;case 7:case"end":return i.stop()}}),i)})))()},fetchSuggestions:function(){var e=this;return s()(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoadingSuggestions=!0,n.prev=1,n.next=4,e.mediaRepository.search(e.suggestionCriteria,m.api);case 4:e.suggestedItems=n.sent,n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(1),new Error(n.t0);case 10:return n.prev=10,e.isLoadingSuggestions=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))()},onTogglePicker:function(){this.showPicker=!this.showPicker,this.showPicker&&(this.showUploadField=!1,this.computePickerPositionAndStyle(),this.fetchSuggestions())},mediaItemChanged:function(e){this.feature.isActive("VUE3")?this.$emit("update:value",e):this.$emit("media-id-change",e),this.onTogglePicker()},removeLink:function(){this.feature.isActive("VUE3")?this.$emit("update:value",null):this.$emit("media-id-change",null)},computePickerPositionAndStyle:function(){if(this.$el){var e=this.$el.getBoundingClientRect();this.pickerClasses={top:"".concat(e.height+5,"px")}}else this.pickerClasses={}},toggleUploadField:function(){this.showUploadField=!this.showUploadField},exposeNewId:function(e){var n=e.targetId;this.feature.isActive("VUE3")?this.$emit("update:value",n):this.$emit("media-id-change",n),this.showUploadField=!1,this.showPicker=!1},showLabel:function(){var e,n;return!!this.label||!!this.$slots.label||!(null===(e=this.$scopedSlots)||void 0===e||null===(n=e.label)||void 0===n||!n.call(e))}}}},uNQU:function(e,n,i){var t=i("3i+3");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i("P8hj").default)("6aa329a6",t,!0,{})}}]);