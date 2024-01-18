(this.webpackJsonpAdministration=this.webpackJsonpAdministration||[]).push([[564],{e0Ti:function(e,t,r){"use strict";r.r(t);var n=Shopware.Data.Criteria;t.default={template:'\n{% block sw_order_create_details_header %}\n<div class="sw-order-create-details-header">\n    \n    {% block sw_order_create_details_new_customer_modal %}\n    <sw-order-new-customer-modal\n        v-if="showNewCustomerModal"\n        @close="onCloseNewCustomerModal"\n        @on-select-existing-customer="onSelectExistingCustomer"\n    />\n    {% endblock %}\n\n    \n    {% block sw_order_create_details_header_profile %}\n    <sw-container\n        class="sw-order-user-card__container"\n        columns="80px 1fr max-content"\n        gap="0 24px"\n    >\n        \n        {% block sw_order_create_details_header_profile_avatar %}\n        <sw-avatar\n            v-if="customer"\n            size="80px"\n            :color="$route.meta.$module.color"\n            :first-name="customer.firstName"\n            :last-name="customer.lastName"\n        />\n        <sw-avatar\n            v-else\n            size="80px"\n            color="#f9fafb"\n        />\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_header_profile_searching %}\n        <div class="sw-order-user-card__metadata">\n            <div class="sw-order-user-card__metadata-user-name">\n                {{ $tc(\'sw-order.createBase.detailsHeader.textCustomer\') }}\n            </div>\n            <sw-container\n                columns="1fr 128px"\n                gap="0 8px"\n            >\n                \n                {% block sw_order_create_search_customer %}\n                <sw-entity-single-select\n                    size="small"\n                    entity="customer"\n                    :criteria="customerCriteria"\n                    label-property="firstName"\n                    :value="customerId"\n                    :placeholder="$tc(\'sw-order.createBase.detailsHeader.placeholder\')"\n                    show-clearable-button\n                    {% if VUE3 %}\n                    @update:value="onSelectExistingCustomer"\n                    {% else %}\n                    @change="onSelectExistingCustomer"\n                    {% endif %}\n                >\n\n                    \n                    {% block sw_order_create_search_customer_slot_selection_label_property %}\n                    <template #selection-label-property="{ item: customer, getKey }">\n                        {{ getKey(customer, \'firstName\') || getKey(customer, `translated.firstName`) }}\n                        {{ getKey(customer, \'lastName\') || getKey(customer, `translated.lastName`) }}\n                    </template>\n                    {% endblock %}\n\n                    \n                    {% block sw_order_create_search_customer_slot_result_item %}\n                    <template #result-item="{ item, index, labelProperty, searchTerm, highlightSearchTerm, isSelected, setValue, getKey }">\n                        <sw-select-result\n                            :selected="isSelected(item)"\n                            v-bind="{ item, index }"\n                            class="sw-order-create-details-header__customer-result"\n                            @item-select="setValue"\n                        >\n                            \n                            {% block sw_order_create_search_customer_slot_result_item_content_container %}\n\n                            <div class="sw-order-create-details-header__customer-result-item has-many-childrens">\n                                <div>\n                                    \n                                    {% block sw_order_create_search_customer_slot_result_item_firstname %}\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="getKey(item, \'firstName\') || getKey(item, `translated.firstName`)"\n                                        :search-term="searchTerm"\n                                    />\n                                    {% endblock %}\n\n                                    \n                                    {% block sw_order_create_search_customer_slot_result_item_lastname %}\n                                    <sw-highlight-text\n                                        v-if="highlightSearchTerm"\n                                        :text="getKey(item, \'lastName\') || getKey(item, `translated.lastName`)"\n                                        :search-term="searchTerm"\n                                    />\n                                    {% endblock %}\n                                </div>\n\n                                \n                                {% block sw_order_create_search_customer_slot_result_item_number %}\n                                <sw-highlight-text\n                                    v-if="highlightSearchTerm"\n                                    :text="getKey(item, \'customerNumber\') || getKey(item, `translated.customerNumber`)"\n                                    :search-term="searchTerm"\n                                    class="text-truncate"\n                                />\n                                {% endblock %}\n\n                            </div>\n\n                            <div\n                                v-if="getKey(item, \'company\') || getKey(item, `translated.company`)"\n                                class="sw-order-create-details-header__customer-result-item"\n                            >\n                                \n                                {% block sw_order_create_search_customer_slot_result_item_company %}\n                                <sw-highlight-text\n                                    v-if="highlightSearchTerm"\n                                    :text="getKey(item, \'company\') || getKey(item, `translated.company`)"\n                                    :search-term="searchTerm"\n                                />\n                                {% endblock %}\n                            </div>\n\n                            <div class="sw-order-create-details-header__customer-result-item text-gray-500">\n                                \n                                {% block sw_order_create_search_customer_slot_result_item_address %}\n                                {{ item.defaultBillingAddress.street }} <br>\n                                {{ item.defaultBillingAddress.zipcode }} {{ item.defaultBillingAddress.city }} <br>\n                                {{ item.defaultBillingAddress.country.name }}\n                                {% endblock %}\n                            </div>\n                            {% endblock %}\n                        </sw-select-result>\n                    </template>\n                    {% endblock %}\n                </sw-entity-single-select>\n                {% endblock %}\n                <sw-button\n                    size="small"\n                    @click="onShowNewCustomerModal"\n                >\n                    {{ $tc(\'sw-order.createBase.detailsHeader.buttonAddNewCustomer\') }}\n                </sw-button>\n            </sw-container>\n        </div>\n        {% endblock %}\n\n        \n        {% block sw_order_create_details_header_profile_summary %}\n        <div class="sw-order-user-card__info-summary">\n            <div class="sw-order-user-card__metadata-price">\n                {{ currencyFilter(cartPrice ? cartPrice.totalPrice : 0, currency.shortName) }}\n            </div>\n            <div class="sw-order-user-card__metadata-item">\n                {{ orderDate }}\n            </div>\n        </div>\n        {% endblock %}\n        <slot></slot>\n    </sw-container>\n    {% endblock %}\n</div>\n{% endblock %}\n',props:{customer:{type:Object},orderDate:{type:String,required:!0},cartPrice:{type:Object},currency:{type:Object}},data:function(){return{showNewCustomerModal:!1}},computed:{customerId:{get:function(){return this.customer?this.customer.id:""},set:function(e){this.customer&&(this.customer.id=e)}},customerCriteria:function(){var e=new n(1,25);return e.addAssociation("defaultBillingAddress.country"),e},currencyFilter:function(){return Shopware.Filter.getByName("currency")}},methods:{onSelectExistingCustomer:function(e){e&&this.$emit("on-select-existing-customer",e)},onShowNewCustomerModal:function(){this.showNewCustomerModal=!0},onCloseNewCustomerModal:function(){this.showNewCustomerModal=!1}}}}}]);