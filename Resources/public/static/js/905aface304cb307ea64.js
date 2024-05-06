"use strict";(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[6608],{6608:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var i={template:'\n{% block sw_tree_item_element_actions %}\n<span v-if="hideActions"></span>\n\n<span v-else>{% parent %}</span>\n{% endblock %}\n\n\n{% block sw_tree_item_element_selection %}\n<div class="sw-tree-item__selection">\n    <sw-checkbox-field\n        :disabled="hasItemAssociation(item)"\n        :ghost-value="checkedGhost"\n        :value="checked || hasItemAssociation(item)"\n        @update:value="toggleItemCheck($event, item)"\n    />\n</div>\n{% endblock %}\n\n\n{% block sw_tree_item_children_items %}\n<sw-settings-rule-tree-item\n    v-for="child in item.children"\n    :key="child.id"\n    :association="association"\n    :item="child"\n    :dragged-item="draggedItem"\n    :parent-scope="parentScope"\n    :new-element-id="newElementId"\n    :translation-context="translationContext"\n    :on-change-route="onChangeRoute"\n    :active-parent-ids="activeParentIds"\n    :active-item-ids="activeItemIds"\n    :mark-inactive="markInactive"\n    :sortable="sortable"\n    :should-focus="shouldFocus"\n    :active-focus-id="activeFocusId"\n    :display-checkbox="displayCheckbox"\n    :disable-context-menu="disableContextMenu"\n    :get-is-highlighted="getIsHighlighted"\n    :hide-action="true"\n    @check-item="emitCheckedItem"\n>\n    <template\n        v-if="hideActions"\n        #actions\n    >\n        <span></span>\n    </template>\n</sw-settings-rule-tree-item>\n{% endblock %}\n',props:{association:{type:String,required:!0},hideActions:{type:Boolean,required:!1,default:!1}},methods:{hasItemAssociation(e){return e.data[this.association]?.length>0||e.data.extensions[this.association]?.length>0}}}}}]);