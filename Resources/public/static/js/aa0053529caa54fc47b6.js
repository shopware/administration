(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[630],{"2D/U":function(e,n,t){"use strict";t.r(n);n.default={template:'\n{% block sw_tree_item_element_actions %}\n<span v-if="hideActions"></span>\n\n<span v-else>{% parent %}</span>\n{% endblock %}\n\n\n{% block sw_tree_item_element_selection %}\n<div class="sw-tree-item__selection">\n    <sw-checkbox-field\n        :disabled="hasItemAssociation(item)"\n        :ghost-value="checkedGhost"\n        :value="checked || hasItemAssociation(item)"\n        {% if VUE3 %}\n        @update:value="toggleItemCheck($event, item)"\n        {% else %}\n        @change="toggleItemCheck($event, item)"\n        {% endif %}\n    />\n</div>\n{% endblock %}\n\n\n{% block sw_tree_item_children_items %}\n<sw-settings-rule-tree-item\n    v-for="child in item.children"\n    :key="child.id"\n    :association="association"\n    :item="child"\n    :dragged-item="draggedItem"\n    :parent-scope="parentScope"\n    :new-element-id="newElementId"\n    :translation-context="translationContext"\n    :on-change-route="onChangeRoute"\n    :active-parent-ids="activeParentIds"\n    :active-item-ids="activeItemIds"\n    :mark-inactive="markInactive"\n    :sortable="sortable"\n    :should-focus="shouldFocus"\n    :active-focus-id="activeFocusId"\n    :display-checkbox="displayCheckbox"\n    :disable-context-menu="disableContextMenu"\n    :get-is-highlighted="getIsHighlighted"\n    @check-item="emitCheckedItem"\n>\n    <template\n        v-if="hideActions"\n        #actions\n    >\n        <span></span>\n    </template>\n</sw-settings-rule-tree-item>\n{% endblock %}\n',props:{association:{type:String,required:!0},hideActions:{type:Boolean,required:!1,default:!0}},methods:{hasItemAssociation:function(e){var n,t;return(null===(n=e.data[this.association])||void 0===n?void 0:n.length)>0||(null===(t=e.data.extensions[this.association])||void 0===t?void 0:t.length)>0}}}}}]);
//# sourceMappingURL=aa0053529caa54fc47b6.js.map