(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[388],{"q+wP":function(o,e,n){"use strict";n.r(e);n("uWIU");var i=Shopware.Data.Criteria,d=Shopware.Utils.createId;e.default={template:'\n{% block sw_promotion_v2_individual_codes_behavior %}\n<div class="sw-promotion-v2-individual-codes-behavior">\n\n    \n    {% block sw_promotion_v2_individual_codes_behavior_card %}\n    <sw-card\n        :key="cardIdentifier"\n        class="sw-promotion-v2-individual-codes-behavior__card"\n        position-identifier="sw-promotion-individual-codes-behavior"\n    >\n\n        \n        {% block sw_promotion_v2_individual_codes_behavior_toolbar %}\n        <template\n            v-if="promotion.individualCodes && promotion.individualCodes.length > 0"\n            #toolbar\n        >\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_toolbar_filter %}\n            <sw-card-filter\n                :placeholder="$tc(\'sw-promotion-v2.detail.base.codes.individual.searchPlaceholder\')"\n                @sw-card-filter-term-change="onSearchTermChange"\n            >\n                <template #filter>\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_toolbar_filter_add_codes %}\n                    <sw-button\n                        class="sw-promotion-v2-individual-codes-behavior__add-codes-action"\n                        variant="ghost"\n                        size="small"\n                        :disabled="!acl.can(\'promotion.editor\')"\n                        @click="onOpenAddCodesModal"\n                    >\n                        {{ $tc(\'sw-promotion-v2.detail.base.codes.individual.addButton\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_toolbar_filter_generate_codes %}\n                    <sw-button\n                        class="sw-promotion-v2-individual-codes-behavior__generate-codes-action"\n                        variant="ghost"\n                        size="small"\n                        :disabled="!acl.can(\'promotion.editor\')"\n                        @click="onOpenGenerateCodesModal"\n                    >\n                        {{ $tc(\'sw-promotion-v2.detail.base.codes.individual.generateButton\') }}\n                    </sw-button>\n                    {% endblock %}\n\n                </template>\n            </sw-card-filter>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_individual_codes_behavior_grid %}\n        <template\n            v-if="promotion.individualCodes && promotion.individualCodes.length > 0"\n            #grid\n        >\n            <sw-one-to-many-grid\n                ref="individualCodesGrid"\n                class="sw-promotion-v2-individual-codes-behavior__grid"\n                :is-loading="isGridLoading"\n                :collection="promotion.individualCodes"\n                :columns="codeColumns"\n                :local-mode="false"\n                sort-by="code"\n                sort-direction="ASC"\n                @selection-change="onSelectionChange"\n                @items-delete-finish="$emit(\'delete-finish\')"\n            >\n\n                \n                {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed %}\n                <template #column-payload="{ item }">\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_icon %}\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_icon_true %}\n                    <sw-icon\n                        v-if="!!item.payload"\n                        class="sw-promotion-v2-individual-codes-behavior__redeemed-state is--active"\n                        name="regular-checkmark-xs"\n                        small\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_icon_false %}\n                    <sw-icon\n                        v-else\n                        class="sw-promotion-v2-individual-codes-behavior__redeemed-state is--inactive"\n                        name="regular-times-s"\n                        small\n                    />\n                    {% endblock %}\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_customer %}\n                <template #column-payload.customerName="{ item }">\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_redeemed_customer_link %}\n                    \n                    <a\n                        v-if="item.payload && item.payload.customerId"\n                        class="sw-promotion-v2-individual-codes-behavior__redeemed-customer-name"\n                        @click="routeToCustomer(item.payload)"\n                    >\n                        {{ item.payload.customerName }}\n                    </a>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_individual_codes_behavior_grid_actions %}\n                <template #actions="{ item }">\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_actions_route_to_customer %}\n                    <sw-context-menu-item\n                        class="sw-promotion-v2-individual-codes-behavior__customer-route-action"\n                        :disabled="!(item.payload && item.payload.customerId)"\n                        @click="routeToCustomer(item.payload)"\n                    >\n                        {{ $tc(\'sw-promotion-v2.detail.base.codes.individual.openCustomer\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_actions_delete %}\n                    <sw-context-menu-item\n                        class="sw-promotion-v2-individual-codes-behavior__code-delete-action"\n                        variant="danger"\n                        :disabled="!acl.can(\'promotion.editor\')"\n                        @click="onShowCodeDeleteModal(item.id)"\n                    >\n                        {{ $tc(\'sw-property.list.contextMenuDelete\') }}\n                    </sw-context-menu-item>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_individual_codes_behavior_grid_actions_bulk %}\n                <template #bulk>\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_actions_bulk_delete %}\n                    \n                    <span\n                        class="sw-promotion-v2-individual-codes-behavior__code-bulk-delete-action link link-danger"\n                        @click="onShowCodeBulkDeleteModal"\n                    >\n                        {{ $tc(\'global.default.delete\') }}\n                    </span>\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n                \n                {% block sw_promotion_v2_individual_codes_behavior_grid_action_modals %}\n                <template #action-modals="{ item }">\n\n                    \n                    {% block sw_promotion_v2_individual_codes_behavior_grid_action_delete_modal %}\n                    <sw-confirm-modal\n                        v-if="codeDeleteModal === item.id"\n                        class="sw-promotion-v2-individual-codes-behavior__confirm-delete-modal"\n                        type="delete"\n                        :text="$tc(\'sw-promotion-v2.detail.base.codes.individual.textDeleteConfirm\', 1, { code: item.code })"\n                        @confirm="onConfirmCodeDelete(item.id)"\n                        @close="onCloseDeleteModal"\n                        @cancel="onCloseDeleteModal"\n                    />\n                    {% endblock %}\n\n                </template>\n                {% endblock %}\n\n            </sw-one-to-many-grid>\n        </template>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_individual_codes_behavior_empty_state %}\n        <sw-empty-state\n            v-else\n            class="sw-promotion-v2-individual-codes-behavior__empty-state"\n            :title="$tc(\'sw-promotion-v2.detail.base.codes.individual.emptyStateTitle\')"\n            :absolute="false"\n        >\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_empty_state_icon %}\n            <template #icon>\n                <img\n                    class="sw-promotion-v2-individual-codes-behavior__empty-state-icon"\n                    :src="\'/administration/static/img/empty-states/promotion-empty-state.svg\' | asset"\n                    :alt="$tc(\'sw-promotion-v2.detail.base.codes.individual.emptyStateTitle\')"\n                >\n            </template>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_empty_state_actions %}\n            <template #actions>\n                <sw-button\n                    class="sw-promotion-v2-individual-codes-behavior__empty-state-generate-action"\n                    variant="ghost"\n                    :disabled="!acl.can(\'promotion.editor\')"\n                    @click="onOpenGenerateCodesModal"\n                >\n                    {{ $tc(\'sw-promotion-v2.detail.base.codes.individual.generateButton\') }}\n                </sw-button>\n            </template>\n            {% endblock %}\n\n        </sw-empty-state>\n        {% endblock %}\n\n    </sw-card>\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_individual_codes_behavior_delete_bulk_modal %}\n    <sw-confirm-modal\n        v-if="codeBulkDeleteModal"\n        class="sw-promotion-v2-individual-codes-behavior__confirm-delete-bulk-modal"\n        type="delete"\n        :text="deleteConfirmText"\n        @confirm="onConfirmCodeBulkDelete"\n        @close="onCloseBulkDeleteModal"\n        @cancel="onCloseBulkDeleteModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_individual_codes_behavior_generate_codes_modal %}\n    <sw-promotion-v2-generate-codes-modal\n        v-if="generateCodesModal"\n        :promotion="promotion"\n        @generate-finish="onGenerateFinish"\n        @close="onCloseGenerateCodesModal"\n    />\n    {% endblock %}\n\n    \n    {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal %}\n    <sw-modal\n        v-if="addCodesModal"\n        class="sw-promotion-v2-individual-codes-behavior__add-codes-modal"\n        variant="small"\n        :title="$tc(\'sw-promotion-v2.detail.base.codes.individual.addCodesModal.title\')"\n        @modal-close="onCloseAddCodesModal"\n    >\n\n        \n        {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_content %}\n        <div class="sw-promotion-v2-individual-codes-behavior__content">\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_description %}\n            <p class="sw-promotion-v2-individual-codes-behavior__description">\n                {{ $tc(\'sw-promotion-v2.detail.base.codes.individual.addCodesModal.description\') }}\n            </p>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_code_amount %}\n            <sw-number-field\n                v-model="newCodeAmount"\n                class="sw-promotion-v2-individual-codes-behavior__code-amount"\n                :label="$tc(\'sw-promotion-v2.detail.base.codes.individual.addCodesModal.codeAmountLabel\')"\n                :min="1"\n            />\n            {% endblock %}\n\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_footer %}\n        <template #modal-footer>\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_footer_cancel %}\n            <sw-button\n                class="sw-promotion-v2-individual-codes-behavior__add-codes-button-cancel"\n                size="small"\n                @click="onCloseAddCodesModal"\n            >\n                {{ $tc(\'global.default.cancel\') }}\n            </sw-button>\n            {% endblock %}\n\n            \n            {% block sw_promotion_v2_individual_codes_behavior_add_codes_modal_footer_confirm %}\n            <sw-button-process\n                class="sw-promotion-v2-individual-codes-behavior__add-codes-button-confirm"\n                variant="primary"\n                size="small"\n                :is-loading="isAdding"\n                :process-success="false"\n                @click="onAddCodes"\n            >\n                {{ $tc(\'sw-promotion-v2.detail.base.codes.individual.addCodesModal.addCodesButton\') }}\n            </sw-button-process>\n            {% endblock %}\n\n        </template>\n        {% endblock %}\n\n    </sw-modal>\n    {% endblock %}\n\n</div>\n{% endblock %}\n',inject:["acl","repositoryFactory","promotionCodeApiService"],mixins:["notification"],props:{promotion:{type:Object,required:!0}},data:function(){return{limit:25,isGridLoading:!1,isAdding:!1,codeDeleteModal:!1,codeBulkDeleteModal:!1,generateCodesModal:!1,addCodesModal:!1,newCodeAmount:10,cardIdentifier:d(),currentSelection:[]}},computed:{promotionRepository:function(){return this.repositoryFactory.create("promotion")},customerRepository:function(){return this.repositoryFactory.create("customer")},deleteConfirmText:function(){return this.$tc("sw-promotion-v2.detail.base.codes.individual.textDeleteConfirm",this.currentSelection.length,{code:this.currentSelection[0].code||""})},codeColumns:function(){return[{property:"code",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnCode")},{property:"payload",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnRedeemed")},{property:"payload.customerName",label:this.$tc("sw-promotion-v2.detail.base.codes.individual.columnCustomer")}]}},watch:{"promotion.individualCodes":function(){this.cardIdentifier=d()}},mounted:function(){this.mountedComponent()},methods:{mountedComponent:function(){this.loadIndividualCodesGrid()},onSearchTermChange:function(o){this.promotion.individualCodes.criteria.setTerm(o),this.loadIndividualCodesGrid()},loadIndividualCodesGrid:function(){var o=this;this.$refs.individualCodesGrid&&(this.isGridLoading=!0,this.promotion.individualCodes.criteria.addSorting(i.naturalSorting("code")),this.$refs.individualCodesGrid.load().then((function(){o.isGridLoading=!1})))},onSelectionChange:function(){this.currentSelection=Object.values(this.$refs.individualCodesGrid.selection)},onShowCodeDeleteModal:function(o){this.codeDeleteModal=o},onShowCodeBulkDeleteModal:function(){this.codeBulkDeleteModal=!0},onConfirmCodeDelete:function(o){var e=this;this.onCloseDeleteModal(),this.$refs.individualCodesGrid.deleteItem(o).then((function(){e.loadIndividualCodesGrid()}))},onConfirmCodeBulkDelete:function(){var o=this;this.onCloseBulkDeleteModal(),this.$refs.individualCodesGrid.deleteItems().then((function(){o.loadIndividualCodesGrid()}))},onCloseDeleteModal:function(){this.codeDeleteModal=!1},onCloseBulkDeleteModal:function(){this.codeBulkDeleteModal=!1},onOpenGenerateCodesModal:function(){this.generateCodesModal=!0},onGenerateFinish:function(){this.onCloseGenerateCodesModal(),this.$emit("generate-finish")},onCloseGenerateCodesModal:function(){this.generateCodesModal=!1},onOpenAddCodesModal:function(){this.addCodesModal=!0},onAddCodes:function(){var o=this;this.isAdding=!0,this.promotionCodeApiService.addIndividualCodes(this.promotion.id,this.newCodeAmount).then((function(){o.isAdding=!1,o.onCloseAddCodesModal(),o.$emit("generate-finish")})).catch((function(e){o.isAdding=!1,e.response.data.errors.forEach((function(e){var n;switch(e.code){case"PROMOTION__INDIVIDUAL_CODES_PATTERN_INSUFFICIENTLY_COMPLEX":n="notComplexEnoughException";break;case"PROMOTION__INDIVIDUAL_CODES_PATTERN_ALREADY_IN_USE":n="alreadyInUseException";break;default:n="unknownErrorCode"}o.createNotificationError({autoClose:!1,message:o.$tc("sw-promotion-v2.detail.base.codes.individual.generateModal.".concat(n))})}))}))},onCloseAddCodesModal:function(){this.addCodesModal=!1},routeToCustomer:function(o){var e=this;return this.customerRepository.get(o.customerId).then((function(n){null!==n?e.$router.push({name:"sw.customer.detail",params:{id:n.id}}):e.createRoutingErrorNotification(o.customerName)})).catch((function(){e.createRoutingErrorNotification(o.customerName)}))},createRoutingErrorNotification:function(o){this.createNotificationError({message:this.$tc("sw-promotion-v2.detail.base.codes.individual.routingError",0,{name:o})})}}}},uWIU:function(o,e,n){var i=n("yUPe");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);(0,n("ydqr").default)("6cf99b33",i,!0,{})},yUPe:function(o,e,n){}}]);