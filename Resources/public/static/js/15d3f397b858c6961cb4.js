(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[581],{"2xBE":function(t,e,n){"use strict";n.r(e);var i=n("J58c"),r=n.n(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=Shopware.Data.EntityCollection,a=Shopware.Component.getComponentHelper().mapState;e.default={template:'\n{% block sw_entity_multi_select_base_selection_list_label_inner %}\n<slot\n    name="selection-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty }"\n>\n    {{ item.salesChannel.translated.name }}\n</slot>\n{% endblock %}\n\n\n{% block sw_entity_multi_select_base_results_list_result_label %}\n<slot\n    name="result-label-property"\n    v-bind="{ item, index, labelProperty, valueProperty: \'id\' }"\n>\n    {{ item.translated.name }}\n</slot>\n{% endblock %}\n',data:function(){return{defaultVisibility:30}},computed:s(s({},a("swProductDetail",["product"])),{},{repository:function(){return this.repositoryFactory.create("sales_channel")},associationRepository:function(){return this.repositoryFactory.create("product_visibility")}}),methods:{isSelected:function(t){return this.currentCollection.some((function(e){return e.salesChannelId===t.id}))},addItem:function(t){if(this.isSelected(t)){var e=this.currentCollection.find((function(e){return e.salesChannelId===t.id}));this.remove(e)}else{var n=this.associationRepository.create(this.entityCollection.context);n.productId=this.product.id,n.productVersionId=this.product.versionId,n.salesChannelId=t.id,n.visibility=this.defaultVisibility,n.salesChannel=t,this.$emit("item-add",t);var i=l.fromCollection(this.currentCollection);i.add(n),this.emitChanges(i),this.onSelectExpanded()}}}}}}]);