(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[203],{GSRd:function(e,n,s){"use strict";s.r(n);var t=s("7yzw"),a=s.n(t),i=s("92Mt"),c=s.n(i),o=s("axCo"),r=(s("Hdkd"),Shopware.Utils.object);n.default=Shopware.Component.wrapComponentConfig({template:'<div>\n    <sw-card\n        class="sw-generic-cms-page-assignment"\n        position-identifier="sw-generic-cms-page-assignment"\n        :title="$tc(\'sw-category.base.cms.title\')"\n        :is-loading="isLoading"\n    >\n        <div class="sw-generic-cms-page-assignment__base-layout">\n            <sw-cms-list-item\n                active\n                :page="cmsPage"\n                @onItemClick="openLayoutModal"\n            />\n\n            <div class="sw-generic-cms-page-assignment__page-selection">\n                <div class="sw-generic-cms-page-assignment__page-selection-info">\n                    <div\n                        class="sw-generic-cms-page-assignment__page-selection-headline"\n                        :class="{ \'is--empty\': !cmsPage }"\n                    >\n                        {{ cmsPage ? cmsPage.name : $tc(\'sw-category.base.cms.defaultTitle\') }}\n                    </div>\n                    <div\n                        class="sw-generic-cms-page-assignment__page-selection-subheadline"\n                        :class="{ \'is--empty\': !cmsPage }"\n                    >\n                        {{ pageTypeTitle }}\n                    </div>\n                </div>\n\n                <div\n                    v-if="cmsPage"\n                    class="sw-generic-cms-page-assignment__page-selection-actions"\n                >\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__change-layout-action"\n                        size="small"\n                        @click="openLayoutModal"\n                    >\n                        {{ $tc(\'sw-category.base.cms.changeLayout\') }}\n                    </sw-button>\n\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__open-in-pagebuilder"\n                        size="small"\n                        @click="openInCmsEditor"\n                    >\n                        {{ $tc(\'sw-category.base.cms.editInPagebuilder\') }}\n                    </sw-button>\n\n                    <sw-button\n                        size="small"\n                        class="sw-generic-cms-page-assignment__layout-reset"\n                        square\n                        @click="onLayoutSelect(null)"\n                    >\n                        <sw-icon\n                            name="regular-trash"\n                            small\n                        />\n                    </sw-button>\n                </div>\n\n                <div\n                    v-else\n                    class="sw-generic-cms-page-assignment__page-selection-actions"\n                >\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__change-layout-action"\n                        size="small"\n                        @click="openLayoutModal"\n                    >\n                        {{ $tc(\'sw-category.base.cms.changeLayoutEmpty\') }}\n                    </sw-button>\n\n                    <sw-button\n                        class="sw-generic-cms-page-assignment__create-layout"\n                        size="small"\n                        @click="createNewLayout"\n                    >\n                        {{ $tc(\'sw-category.base.cms.editInPagebuilderEmpty\') }}\n                    </sw-button>\n                </div>\n            </div>\n        </div>\n    </sw-card>\n\n    <sw-cms-page-form\n        v-if="cmsPage"\n        :page="cmsPage"\n    />\n\n    <sw-cms-layout-modal\n        v-if="showLayoutSelection"\n        :cms-page-types="allowedPageTypes"\n        :pre-selection="cmsPage"\n        @modal-layout-select="onLayoutSelect"\n        @modal-close="closeLayoutModal"\n    />\n</div>\n',inject:["repositoryFactory","cmsPageTypeService"],props:{cmsPageId:{type:String,required:!1,default:null},slotOverrides:{type:Object,required:!1,default:null},allowedPageTypes:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{cmsPage:null,showLayoutSelection:!1,isLoading:!1}},computed:{cmsPageRepository:function(){return this.repositoryFactory.create("cms_page")},changesetGenerator:function(){return new Shopware.Data.ChangesetGenerator},cmsPageCriteria:function(){var e=new o.a(1,1);return e.addAssociation("previewMedia").getAssociation("sections").addSorting(o.a.sort("position")).getAssociation("blocks").addSorting(o.a.sort("position","ASC")).addAssociation("slots"),e},pageTypeTitle:function(e){var n,s=this.$tc("sw-category.base.cms.defaultDesc");if(!e)return s;var t=this.cmsPageTypeService.getType(null===(n=this.cmsPage)||void 0===n?void 0:n.type);return t?this.$tc(t.title):s}},watch:{cmsPageId:function(){this.getCmsPage()},cmsPage:{handler:function(e,n){n&&this.emitCmsPageOverrides()},deep:!0}},created:function(){this.getCmsPage()},methods:{openLayoutModal:function(){this.showLayoutSelection=!0},closeLayoutModal:function(){this.showLayoutSelection=!1},onLayoutSelect:function(e){this.$emit("update:cms-page-id",e)},openInCmsEditor:function(){this.cmsPageId&&this.$router.push({name:"sw.cms.detail",params:{id:this.cmsPageId}})},createNewLayout:function(){this.$emit("create-layout")},applySlotOverrides:function(e){var n,s=this;return this.slotOverrides?(null===(n=e.sections)||void 0===n||n.forEach((function(e){var n;null===(n=e.blocks)||void 0===n||n.forEach((function(e){var n;null===(n=e.slots)||void 0===n||n.forEach((function(e){var n=s.slotOverrides[e.id];n&&r.merge(e.config,r.cloneDeep(n))}))}))})),e):e},getCmsPage:function(){var e=this;return a()(c.a.mark((function n(){var s,t,a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==e.cmsPageId){n.next=3;break}return e.cmsPage=null,n.abrupt("return");case 3:return e.isLoading=!0,(s=e.cmsPageCriteria).setIds([e.cmsPageId]),n.next=8,e.cmsPageRepository.search(s);case 8:t=n.sent,a=e.applySlotOverrides(t[0]),Shopware.State.commit("cmsPageState/setCurrentPage",a),e.cmsPage=a,e.isLoading=!1;case 13:case"end":return n.stop()}}),n)})))()},deleteSpecificKeys:function(e){e&&e.forEach((function(e){e.blocks&&e.blocks.forEach((function(e){e.slots&&e.slots.forEach((function(e){e.config&&Object.values(e.config).forEach((function(e){e&&(e.entity&&delete e.entity,e.hasOwnProperty("required")&&delete e.required,e.type&&delete e.type)}))}))}))}))},emitCmsPageOverrides:function(){if(null!==this.cmsPage){this.cmsPage.sections&&this.deleteSpecificKeys(this.cmsPage.sections);var e=this.changesetGenerator.generate(this.cmsPage).changes,n={};e&&(Array.isArray(e.sections)&&e.sections.forEach((function(e){Array.isArray(e.blocks)&&e.blocks.forEach((function(e){Array.isArray(e.slots)&&e.slots.forEach((function(e){n[e.id]=e.config}))}))})),this.$emit("update:slot-overrides",n))}}}})},Hdkd:function(e,n,s){var t=s("vSRH");t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,s("P8hj").default)("a3a393b8",t,!0,{})},vSRH:function(e,n,s){}}]);