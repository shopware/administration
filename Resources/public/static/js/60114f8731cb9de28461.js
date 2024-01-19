(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[471],{"5p5t":function(t,e,n){"use strict";n.r(e);var i=n("7yzw"),s=n.n(i),a=n("c1oF"),r=n.n(a),o=n("CsSd"),l=n.n(o),c=n("92Mt"),d=n.n(c),g=n("PYWG");n("PA0k");function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=Shopware,p=u.Context,_=u.Mixin,f=Shopware.Data.Criteria;e.default={template:'\n{% block sw_settings_tag_detail_assignments %}\n<div class="sw-settings-tag-detail-assignments">\n    \n    {% block sw_settings_tag_detail_assignments_card %}\n    <sw-card\n        class="sw-settings-tag-detail-assignments__card"\n        position-identifier="sw-settings-tag-detail-assignments-card"\n        large\n    >\n        <template #toolbar>\n            \n            {% block sw_settings_tag_detail_assignments_toolbar %}\n            <sw-card-filter\n                :placeholder="$tc(\'sw-settings-tag.detail.assignments.searchPlaceholder\')"\n                @sw-card-filter-term-change="onTermChange"\n            />\n            {% endblock %}\n        </template>\n\n        \n        {% block sw_settings_tag_detail_assignments_header %}\n        <sw-container columns="1fr 1fr">\n            \n            {% block sw_settings_tag_detail_assignments_header_selected_filter %}\n            <sw-card-section\n                class="sw-settings-tag-detail-assignments__filter-selected"\n                divider="bottom"\n            >\n                <sw-switch-field\n                    {% if VUE3 %}\n                    v-model:value="showSelected"\n                    {% else %}\n                    v-model="showSelected"\n                    {% endif %}\n                    :disabled="isLoading"\n                    :label="$tc(\'sw-settings-tag.detail.assignments.showSelected\')"\n                />\n            </sw-card-section>\n            {% endblock %}\n            \n            {% block sw_settings_tag_detail_assignments_header_total_selected %}\n            <sw-card-section\n                class="sw-settings-tag-detail-assignments__total-selected"\n                divider="bottom"\n            >\n                {{ totalAssignments }} {{ $tc(\'sw-settings-tag.detail.assignments.selected\') }}\n            </sw-card-section>\n            {% endblock %}\n        </sw-container>\n        {% endblock %}\n\n        <template #grid>\n            \n            {% block sw_settings_tag_detail_assignments_grid %}\n            <sw-container columns="300px 1fr">\n                <sw-card-section divider="right">\n                    \n                    {% block sw_settings_tag_detail_assignments_associations_grid %}\n                    <sw-data-grid\n                        class="sw-settings-tag-detail-assignments__associations-grid"\n                        :data-source="assignmentAssociations"\n                        :columns="assignmentAssociationsColumns"\n                        :v-bind="$attrs"\n                        :show-selection="false"\n                        :show-actions="false"\n                        :show-header="false"\n                        :plain-appearance="true"\n                        :full-page="true"\n                        item-identifier-property="entity"\n                    >\n                        <template #column-name="{ item }">\n                            \n                            {% block sw_settings_tag_detail_assignments_associations_grid_column_name %}\n                            <sw-button\n                                class="associations-grid__row"\n                                :class="{ \'is--selected\': item.entity === selectedEntity }"\n                                :disabled="isLoading"\n                                @click.prevent="onAssignmentChange(item)"\n                            >\n                                <sw-icon\n                                    v-if="item.entity === selectedEntity"\n                                    name="regular-folder-open"\n                                    multicolor\n                                    small\n                                />\n                                <sw-icon\n                                    v-else\n                                    name="regular-folder"\n                                    multicolor\n                                    small\n                                />\n                                <span>\n                                    {{ item.name }}\n                                </span>\n                                <span\n                                    v-if="getCount(item.assignment)"\n                                    class="associations-grid__count"\n                                >\n                                    {{ getCount(item.assignment) }}\n                                    {{ $tc(\'sw-settings-tag.detail.assignments.assignments\', getCount(item.assignment)) }}\n                                </span>\n                            </sw-button>\n                            {% endblock %}\n                        </template>\n\n                        <template #actions="{ item }">\n                        </template>\n                    </sw-data-grid>\n                    {% endblock %}\n                </sw-card-section>\n                <sw-card-section>\n                    \n                    {% block sw_settings_tag_detail_assignments_entities_grid %}\n                    <sw-entity-listing\n                        :key="entitiesGridKey"\n                        class="sw-settings-tag-detail-assignments__entities-grid"\n                        :items="entities"\n                        :columns="entitiesColumns"\n                        :repository="entityRepository"\n                        :plain-appearance="true"\n                        :compact-mode="true"\n                        :show-selection="true"\n                        :show-actions="false"\n                        :show-header="true"\n                        :is-loading="isLoading"\n                        :disable-data-fetching="true"\n                        :pre-selection="selectedAssignments"\n                        :allow-inline-edit="false"\n                        :allow-delete="false"\n                        @page-change="onPageChange"\n                        @select-item="onSelectionChange"\n                    >\n                        <template #selection-content="{ item, isSelected, selectItem, itemIdentifierProperty }">\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_selection_content %}\n                            <div class="sw-data-grid__cell-content">\n                                \n                                {% block sw_settings_tag_detail_assignments_entities_grid_select_item_checkbox %}\n                                <sw-checkbox-field\n                                    v-if="isInherited(item.id, item.parentId)"\n                                    :key="`${itemIdentifierProperty}-inherited`"\n                                    :value="hasInheritedTag(item.id, item.parentId)"\n                                    :disabled="true"\n                                />\n                                <sw-checkbox-field\n                                    v-else\n                                    :key="itemIdentifierProperty"\n                                    :value="isSelected(item[itemIdentifierProperty])"\n                                    {% if VUE3 %}\n                                    @update:value="selectItem($event, item)"\n                                    {% else %}\n                                    @change="selectItem($event, item)"\n                                    {% endif %}\n                                />\n                                {% endblock %}\n                            </div>\n                            {% endblock %}\n                        </template>\n\n                        <template #column-name="{ item, selectItem }">\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_inheritance_switch %}\n                            <sw-inheritance-switch\n                                v-if="isInheritable && item.parentId && parentHasTags(item.id, item.parentId)"\n                                :is-inherited="isInherited(item.id, item.parentId)"\n                                :disabled="!isInherited(item.id, item.parentId)"\n                                @inheritance-remove="selectItem(true, item)"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_product %}\n                            <sw-product-variant-info\n                                v-if="selectedEntity === \'product\'"\n                                :variations="item.variation"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.translated.name || item.name"\n                                />\n                            </sw-product-variant-info>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_category %}\n                            <template\n                                v-else-if="selectedEntity === \'category\'"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.translated ? item.translated.name : item.name"\n                                />\n                                <sw-highlight-text\n                                    v-if="item.breadcrumb && item.breadcrumb.length > 1"\n                                    :text="item.breadcrumb.join(\' / \')"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_customer %}\n                            <template\n                                v-else-if="selectedEntity === \'customer\'"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="`${item.firstName} ${item.lastName}`"\n                                />\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.customerNumber"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_order %}\n                            <template\n                                v-else-if="selectedEntity === \'order\'"\n                            >\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="`${item.orderCustomer.firstName} ${item.orderCustomer.lastName}`"\n                                />\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="item.orderNumber"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_media %}\n                            <template\n                                v-else-if="selectedEntity === \'media\'"\n                            >\n                                <sw-media-preview-v2\n                                    :source="item.id"\n                                    :media-is-private="item.private"\n                                />\n                                <sw-highlight-text\n                                    :search-term="term"\n                                    :text="`${item.fileName}.${item.fileExtension}`"\n                                />\n                            </template>\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_newsletter_recipient %}\n                            <sw-highlight-text\n                                v-else-if="selectedEntity === \'newsletter_recipient\'"\n                                :search-term="term"\n                                :text="`${item.firstName} ${item.lastName}`"\n                            />\n                            {% endblock %}\n                            \n                            {% block sw_settings_tag_detail_assignments_entities_grid_column_name_default %}\n                            <sw-highlight-text\n                                v-else\n                                :search-term="term"\n                                :text="item.translated ? item.translated.name : item.name"\n                            />\n                            {% endblock %}\n                        </template>\n                    </sw-entity-listing>\n                    {% endblock %}\n                </sw-card-section>\n            </sw-container>\n            {% endblock %}\n        </template>\n    </sw-card>\n    {% endblock %}\n</div>\n{% endblock %}\n',inheritAttrs:!1,inject:["repositoryFactory"],mixins:[_.getByName("listing")],props:{tag:{type:Object,required:!0},toBeAdded:{type:Object,required:!0},toBeDeleted:{type:Object,required:!0},initialCounts:{type:Object,required:!1,default:function(){return{}}},property:{type:String,required:!1,default:null},entity:{type:String,required:!1,default:null}},data:function(){var t,e;return{selectedEntity:null!==(t=this.entity)&&void 0!==t?t:"product",selectedAssignment:null!==(e=this.property)&&void 0!==e?e:"products",entitiesGridKey:null,preSelected:{},entities:null,isLoading:!1,showSelected:this.property&&this.entity,counts:h({},this.initialCounts),currentPageCountBuckets:[],disableRouteParams:!0,page:1,limit:25}},computed:{tagDefinition:function(){return Shopware.EntityDefinition.get("tag")},isInheritable:function(){var t,e,n,i;return!0===(null===(t=Shopware.EntityDefinition.get(this.selectedEntity))||void 0===t||null===(e=t.properties)||void 0===e||null===(n=e.tags)||void 0===n||null===(i=n.flags)||void 0===i?void 0:i.inherited)},assignmentAssociations:function(){var t=this,e=[];return Object.entries(this.tagDefinition.properties).forEach((function(n){var i=r()(n,2),s=i[0],a=i[1];"many_to_many"===a.relation&&e.push({name:t.$tc("sw-settings-tag.detail.assignments.".concat(s)),entity:a.entity,assignment:s})})),e},assignmentAssociationsColumns:function(){return[{property:"name",dataIndex:"name",primary:!0,allowResize:!1,sortable:!1}]},entityRepository:function(){return this.repositoryFactory.create(this.selectedEntity)},entityCriteria:function(){var t=this,e=new f(this.page,this.limit);if(e.setTerm(this.term),e.addSorting(f.sort("createdAt","DESC")),"product"===this.selectedEntity&&e.addAssociation("options.group"),"order"===this.selectedEntity&&e.addAssociation("orderCustomer"),this.isInheritable&&this.addTagAggregations(e),!this.showSelected)return e;var n=Object.keys(this.toBeAdded[this.selectedAssignment]),i=Object.keys(this.toBeDeleted[this.selectedAssignment]).filter((function(e){var n=t.toBeDeleted[t.selectedAssignment][e].parentId;return!t.isInheritable||!n||(!t.isInherited(e,n)||!t.hasInheritedTag(e,n))}));return n.length?e.addFilter(f.multi("OR",[f.equals("tags.id",this.tag.id),f.equalsAny("id",n)])):e.addFilter(f.equals("tags.id",this.tag.id)),i.length?(e.addFilter(f.not("AND",[f.equalsAny("id",i)])),e):e},entitiesColumns:function(){return[{property:"name",primary:!0,allowResize:!1,sortable:!1}]},selectedAssignments:function(){var t=this,e=new Proxy(h({},this.preSelected),{get:function(t,e){return t[e]},set:function(t,e,n){return t[e]=n,!0}});return Object.values(this.toBeAdded[this.selectedAssignment]).forEach((function(n){t.$set(e,n.id,n)})),Object.values(this.toBeDeleted[this.selectedAssignment]).forEach((function(n){e.hasOwnProperty(n.id)&&t.$delete(e,n.id)})),e},totalAssignments:function(){var t=0;return Object.values(this.counts).forEach((function(e){t+=e})),t}},watch:{selectedEntity:function(){this.page=1,this.getList()},showSelected:function(){this.page=1,this.getList()}},methods:{getList:function(){var t=this;this.isLoading=!0;var e=this.entityCriteria;return this.showSelected&&this.isInheritable?this.searchInheritedEntities(e).then((function(){return t.search(e)})).catch((function(){t.isLoading=!1})):this.search(e)},search:function(t){var e=this;return this.entityRepository.search(t,h(h({},p.api),{},{inheritance:!0})).then((function(t){if(e.tag.isNew()||0===t.total)return e.entitiesGridKey=g.b.createId(),e.total=t.total,e.entities=t,e.isLoading=!1,null;var n=t.map((function(t){return t.id})),i=new f(1,e.limit);return i.addFilter(f.equalsAny("id",n)),e.isInheritable&&e.addTagAggregations(i,!1),i.addPostFilter(f.equals("tags.id",e.tag.id)),e.entityRepository.search(i).then((function(n){e.isInheritable&&(e.currentPageCountBuckets=n.aggregations.tags.buckets);var i={};n.forEach((function(t){i[t.id]=t})),e.preSelected=i,e.entitiesGridKey=g.b.createId(),e.total=t.total,e.entities=t,e.isLoading=!1}))})).catch((function(){e.isLoading=!1}))},addTagAggregations:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=f.count("tags","".concat(this.selectedEntity,".tags.id"));e&&(n=f.filter("tags",[f.equals("tags.id",this.tag.id)],n),t.addAggregation(f.terms("parentTags","id",null,null,f.count("parentTags","".concat(this.selectedEntity,".parent.tags.id"))))),t.addAggregation(f.terms("tags","id",null,null,n))},searchInheritedEntities:function(t){var e=Object.keys(this.toBeAdded[this.selectedAssignment]),n=Object.keys(this.toBeDeleted[this.selectedAssignment]);if(!e.length&&!n.length)return Promise.resolve();var i=Promise.resolve(),s=Promise.resolve();if(e.length){var a=new f(1,25);a.addFilter(f.multi("AND",[f.equals("tags.id",null),f.equalsAny("parentId",e)])),i=this.entityRepository.searchIds(a).then((function(e){var n=e.data;0!==e.total&&(t.filters=[f.multi("OR",[f.multi("AND",t.filters),f.equalsAny("id",n)])])}))}if(n.length){var r=new f(1,25);r.addFilter(f.equals("tags.id",null)),r.addFilter(f.equalsAny("parentId",n)),e.length&&r.addFilter(f.not("AND",[f.equalsAny("id",e)])),s=this.entityRepository.searchIds(r).then((function(e){var n=e.data;0!==e.total&&t.addFilter(f.not("AND",[f.equalsAny("id",n)]))}))}return Promise.all([i,s])},onTermChange:function(t){var e=this;return s()(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.term=t,e.page=1,n.next=4,e.getList();case 4:case"end":return n.stop()}}),n)})))()},onAssignmentChange:function(t){var e=t.entity,n=t.assignment;this.selectedEntity=e,this.selectedAssignment=n},onSelectionChange:function(t,e,n){var i=e.id;if(!n)return this.$emit("remove-assignment",this.selectedAssignment,i,e),void this.countDecrease(this.selectedAssignment);this.$emit("add-assignment",this.selectedAssignment,i,e),this.countIncrease(this.selectedAssignment)},getCount:function(t){return this.counts.hasOwnProperty(t)?this.counts[t]:null},countIncrease:function(t){this.counts.hasOwnProperty(t)?this.counts[t]+=1:this.$set(this.counts,t,1)},countDecrease:function(t){this.counts.hasOwnProperty(t)&&0!==this.counts[t]?this.counts[t]-=1:this.$set(this.counts,t,0),this.showSelected&&(this.page>1&&1===this.entities.length&&(this.page-=1),this.getList())},isInherited:function(t,e){if(!this.isInheritable||!e||this.toBeAdded[this.selectedAssignment].hasOwnProperty(t))return!1;var n=this.toBeDeleted[this.selectedAssignment].hasOwnProperty(t);return!(this.currentPageCountBuckets.filter((function(e){var i=e.key,s=e.tags;return i===t&&(n?s.count-1:s.count)>0})).length>0)&&this.parentHasTags(t,e)},parentHasTags:function(t,e){var n=this.toBeDeleted[this.selectedAssignment].hasOwnProperty(e),i=this.entities.aggregations.parentTags.buckets.filter((function(e){var i=e.key,s=e.parentTags;return i===t&&(n?s.count-1:s.count)>0})).length>0;return!!i||this.toBeAdded[this.selectedAssignment].hasOwnProperty(e)},hasInheritedTag:function(t,e){var n=this.toBeAdded[this.selectedAssignment].hasOwnProperty(e),i=this.toBeDeleted[this.selectedAssignment].hasOwnProperty(e);if(this.preSelected.hasOwnProperty(t)||this.toBeDeleted[this.selectedAssignment].hasOwnProperty(t))return n||this.preSelected.hasOwnProperty(e)&&!i;var s=this.entities.aggregations.tags.buckets.filter((function(e){return e.key===t})).length>0;return(s||n)&&!i},onPageChange:function(t){var e=t.page,n=t.limit;this.page=e,this.limit=n,this.getList()}}}},"8WZh":function(t,e,n){},PA0k:function(t,e,n){var i=n("8WZh");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("P8hj").default)("d258a952",i,!0,{})}}]);