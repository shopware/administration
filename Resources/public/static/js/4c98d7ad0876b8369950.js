(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[392],{"2rPC":function(t,n,e){},H6UR:function(t,n,e){"use strict";e.r(n);e("HHQl"),n.default={template:'\n{% block sw_promotion_v2_empty_state_hero %}\n<div\n    v-bind="$attrs"\n    class="sw-promotion-v2-empty-state-hero"\n>\n\n    \n    {% block sw_promotion_v2_empty_state_hero_content %}\n    <div class="sw-promotion-v2-empty-state-hero__column-content">\n\n        \n        {% block sw_promotion_v2_empty_state_hero_content_title %}\n        <h1 class="sw-promotion-v2-empty-state-hero__title">\n            {{ title }}\n        </h1>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_empty_state_hero_content_description %}\n        <div\n            v-if="showDescription"\n            class="sw-promotion-v2-empty-state-hero__description"\n        >\n            {{ description }}\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_empty_state_hero_content_actions %}\n        <div\n            v-if="!!$slots.actions || !!$scopedSlots.actions"\n            class="sw-promotion-v2-empty-state-hero__actions"\n        >\n            <slot name="actions">\n                \n                {% block sw_promotion_v2_empty_state_hero_slot_actions %}{% endblock %}\n            </slot>\n        </div>\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_empty_state_hero_image %}\n    <div class="sw-promotion-v2-empty-state-hero__column-image">\n\n        \n        {% block sw_promotion_v2_empty_state_hero_image_asset %}\n        <img\n            class="sw-promotion-v2-empty-state-hero__asset"\n            :src="assetFilter(imagePath)"\n            alt=""\n        >\n        {% endblock %}\n\n    </div>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',props:{title:{type:String,required:!0},assetPath:{type:String,required:!1,default:""},description:{type:String,required:!1,default:""},hideDescription:{type:Boolean,required:!1,default:!1}},computed:{imagePath:function(){return this.assetPath||"/administration/static/img/empty-states/promotion-v2-empty-state-hero.svg"},showDescription:function(){return!this.hideDescription&&this.description&&this.description.length>0},assetFilter:function(){return Shopware.Filter.getByName("asset")}}}},HHQl:function(t,n,e){var o=e("2rPC");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,e("P8hj").default)("182a58ab",o,!0,{})}}]);
//# sourceMappingURL=4c98d7ad0876b8369950.js.map