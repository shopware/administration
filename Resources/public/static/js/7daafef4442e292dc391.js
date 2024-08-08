(window.webpackJsonpAdministration=window.webpackJsonpAdministration||[]).push([[5897],{252462:function(){},905897:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o}}),e(760001);let{uniqBy:s}=Shopware.Utils.array,a=(t,n)=>{t.style.visibility=n.value?"visible":"hidden",t.style.position=n.value?"static":"absolute",t.style.top=n.value?"auto":"0",t.style.left=n.value?"auto":"0",t.style.bottom=n.value?"auto":"0",t.style.right=n.value?"auto":"0",t.style.transform=n.value?"translateX(0)":"translateX(100%)"};var o={template:'\n{% block sw_sales_channel_products_assignment_modal %}\n<sw-modal\n    class="sw-sales-channel-products-assignment-modal"\n    :title="$tc(\'sw-sales-channel.detail.productAssignmentModal.title\')"\n    @modal-close="onCloseModal"\n>\n    <template #default>\n        \n        {% block sw_sales_channel_products_assignment_modal_tabs %}\n        <sw-tabs\n            class="sw-sales-channel-products-assignment-modal__tabs"\n            position-identifier="sw-sales-channel-products-assignment-modal"\n            default-item="singleProducts"\n        >\n            <template #default="{ active }">\n                \n                {% block sw_sales_channel_products_assignment_modal_tabs_single_products %}\n                <sw-tabs-item\n                    name="singleProducts"\n                    :title="$tc(\'sw-sales-channel.detail.productAssignmentModal.singleProducts\')"\n                    :active-tab="active"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.productAssignmentModal.singleProducts\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_products_assignment_modal_tabs_categories %}\n                <sw-tabs-item\n                    name="categories"\n                    :title="$tc(\'sw-sales-channel.detail.productAssignmentModal.categories.title\')"\n                    :active-tab="active"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.productAssignmentModal.categories.title\') }}\n                </sw-tabs-item>\n                {% endblock %}\n\n                \n                {% block sw_sales_channel_products_assignment_modal_tab_dynamic_product_groups %}\n                <sw-tabs-item\n                    name="dynamicProductGroups"\n                    :title="$tc(\'sw-sales-channel.detail.productAssignmentModal.dynamicProductGroups.title\')"\n                    :active-tab="active"\n                >\n                    {{ $tc(\'sw-sales-channel.detail.productAssignmentModal.dynamicProductGroups.title\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </template>\n\n            <template #content="{ active }">\n                <div\n                    class="sw-sales-channel-products-assignment-modal__content"\n                    :height="tabContentHeight"\n                >\n                    \n                    {% block sw_sales_channel_products_assignment_modal_tab_content_single_products %}\n                    <sw-sales-channel-products-assignment-single-products\n                        ref="product"\n                        v-hide="active === \'singleProducts\'"\n                        :sales-channel="salesChannel"\n                        :container-style="productContainerStyle"\n                        @selection-change="onChangeSelection"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_sales_channel_products_assignment_modal_tab_content_categories %}\n                    <sw-sales-channel-product-assignment-categories\n                        ref="category"\n                        v-hide="active === \'categories\'"\n                        :sales-channel="salesChannel"\n                        :container-style="categoryContainerStyle"\n                        @selection-change="onChangeSelection"\n                        @product-loading="setProductLoading"\n                    />\n                    {% endblock %}\n\n                    \n                    {% block sw_sales_channel_products_assignment_modal_tab_content_dynamic_product_groups %}\n                    <sw-sales-channel-products-assignment-dynamic-product-groups\n                        ref="productGroup"\n                        v-hide="active === \'dynamicProductGroups\'"\n                        :sales-channel="salesChannel"\n                        :container-style="productGroupContainerStyle"\n                        @selection-change="onChangeSelection"\n                        @product-loading="setProductLoading"\n                    />\n                    {% endblock %}\n                </div>\n            </template>\n        </sw-tabs>\n        {% endblock %}\n    </template>\n\n    <template #modal-footer>\n        \n        {% block sw_sales_channel_products_assignment_modal_footer_cancel %}\n        <sw-button\n            class="sw-sales-channel-products-assignment-modal__close-button"\n            size="small"\n            @click="onCloseModal"\n        >\n            {{ $tc(\'global.default.cancel\') }}\n        </sw-button>\n        {% endblock %}\n\n        \n        {% block sw_sales_channel_products_assignment_modal_footer_submit %}\n        <sw-button\n            size="small"\n            variant="primary"\n            :is-loading="isAssignProductLoading || isProductLoading"\n            @click="onAddProducts"\n        >\n            {{ $tc(\'sw-sales-channel.detail.products.buttonAddProducts\', productCount, { productCount: productCount }) }}\n        </sw-button>\n        {% endblock %}\n    </template>\n</sw-modal>\n{% endblock %}\n',directives:{hide:{bind:a,update:a}},props:{salesChannel:{type:Object,required:!0},isAssignProductLoading:{type:Boolean,required:!0}},data(){return{singleProducts:[],categoryProducts:[],groupProducts:[],isProductLoading:!1,tabContentHeight:"600px",productContainerStyle:{display:"grid",placeItems:"stretch"},categoryContainerStyle:{display:"grid",placeItems:"stretch"},productGroupContainerStyle:{display:"grid",placeItems:"stretch"}}},computed:{productCount(){return this.products.length},products(){return s([...this.singleProducts,...this.categoryProducts,...this.groupProducts],"id")}},mounted(){this.mountedComponent()},methods:{mountedComponent(){this.getProductContainerStyle(),this.getCategoryContainerStyle(),this.getProductGroupContainerStyle()},getProductContainerStyle(){let t=`${this.$refs?.product?.$refs?.cardSectionSecondary?.$el?.offsetHeight??0}px`;this.$set(this.productContainerStyle,"grid-template-rows",`auto calc(
                ${this.tabContentHeight} - ${t}
            )`)},getCategoryContainerStyle(){let t=`${this.$refs?.category?.$refs?.alert?.$el?.offsetHeight??0}px`,n=`${this.$refs?.category?.$refs?.cardSectionSecondary?.$el?.offsetHeight??0}px`;this.$set(this.categoryContainerStyle,"grid-template-rows",`auto calc(
                ${this.tabContentHeight} - (20px + ${t} + ${n})
            )`)},getProductGroupContainerStyle(){let t=`${this.$refs?.productGroup?.$refs?.alert?.$el?.offsetHeight??0}px`,n=`${this.$refs?.productGroup?.$refs?.cardSectionSecondary?.$el?.offsetHeight??0}px`;this.$set(this.productGroupContainerStyle,"grid-template-rows",`auto calc(
                ${this.tabContentHeight} - (20px + ${t} + ${n})
            )`)},onChangeSelection(t,n){this[n]=t},onCloseModal(){this.$emit("modal-close")},onAddProducts(){this.$emit("products-add",this.products)},setProductLoading(t){this.isProductLoading=t}}}},760001:function(t,n,e){var s=e(252462);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),e(745346).Z("99227ef6",s,!0,{})}}]);