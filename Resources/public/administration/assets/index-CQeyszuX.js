const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DPU1OfeF.js","assets/index-BzoS81zQ.css","assets/index-BMGqgn7-.js","assets/index-HnxvVPxe.css","assets/index-CLEwiePH.js","assets/index-qag1lkOV.css","assets/index-DUtEfKWs.js","assets/index-NxhWqt99.css","assets/index-CZDc7BnG.js","assets/index-CjGYHR6y.css","assets/index-H5kZAkxJ.js","assets/index-CNPknCzY.css","assets/index-CZO8DCpD.js","assets/index-OSx-haSG.css","assets/index-2fcSxVru.js","assets/index-D5hm6lWg.css","assets/index-l5BbtsAc.js","assets/index-ZLS2Frkj.css","assets/index-k3B2PzaL.js","assets/index-BnVLdLFY.css","assets/index-71nZjCBq.js","assets/index-Ccm3Uu34.css","assets/index-dgsDykJe.js","assets/index-COJv9EoM.css","assets/index-DLlIMH0i.js","assets/index-CjDCx6Mz.css","assets/index-BOuHbig7.js","assets/index-BiofiMIA.css","assets/index-D6qKMiJu.js","assets/index-BmCMNmwN.css","assets/index-Cibn6jdN.js","assets/index-CdBEJD3t.css","assets/index-QAL9ZU-D.js","assets/index-zgIYC-1l.css","assets/index-C9ZVE7kF.js","assets/index-ISNoo5Bh.css","assets/index-BgT7tv2X.js","assets/index-BxSnbj0H.css"])))=>i.map(i=>d[i]);
var u=Object.defineProperty;var m=(t,r,e)=>r in t?u(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var s=(t,r,e)=>m(t,typeof r!="symbol"?r+"":r,e);import{R as g,_ as n}from"./administration-CNzdiowZ.js";import{U as f}from"./user-config.class-fFOxsubu.js";import{s as _}from"./main-pwrAVdOD.js";const{Application:h}=Shopware;h.addServiceProvider("exportTemplateService",()=>({registerProductExportTemplate:v,getProductExportTemplateByName:y,getProductExportTemplateRegistry:w}));const p={};function v(t){return p[t.name]=t,!0}function y(t){return p[t]}function w(){return p}const P=`aid,{#- -#}
brand,{#- -#}
mpnr,{#- -#}
ean,{#- -#}
name,{#- -#}
desc,{#- -#}
shop_cat,{#- -#}
price,{#- -#}
ppu,{#- -#}
link,{#- -#}
image,{#- -#}
dlv_time,{#- -#}
dlv_cost,{#- -#}
pzn,{#- -#}
unit_pricing_measure,{#- -#}
unit_pricing_base_measure,{#- -#}
target_url,{#- -#}
images{#- -#}
`,C=`"{{ product.productNumber }}",{#- -#}
"{{ product.manufacturer.translated.name ?? '' }}",{#- -#}
"{{ product.manufacturerNumber }}",{#- -#}
"{{ product.ean }}",{#- -#}
"{{ product.translated.name|length > 80 ? product.translated.name|slice(0, 80) ~ '...' : product.translated.name }}",{#- -#}
"{{ product.translated.description|raw|length > 900 ? product.translated.description|raw|slice(0,900) ~ '...' : product.translated.description|raw }}{#- -#}
",{#- -#}
"{%- if product.categories.count > 0 -%}
    {{ product.categories.first.getBreadCrumb|slice(1)|join(' > ')|raw }}{#- -#}
{%- endif -%}",{#- -#}
{% set price = product.calculatedPrice %}
{%- if product.calculatedPrices.count > 0 -%}
    {% set price = product.calculatedPrices.last %}
{%- endif -%}
"{{ price.unitPrice }}",{#- -#}
"{%- if price.referencePrice is not null -%}
    {{ price.referencePrice.price|currency }} / {{ price.referencePrice.referenceUnit }} {{ price.referencePrice.unitName }}{#- -#}
{%- endif -%}",{#- -#}
"{{ seoUrl('frontend.detail.page', {'productId': product.id}) }}",{#- -#}
"{% if product.cover is not null %}{{ product.cover.media.url }}{% endif %}",{#- -#}
"{%- if product.availableStock >= product.minPurchase and product.deliveryTime -%}
    {{ "detail.deliveryTimeAvailable"|trans({'%name%': product.deliveryTime.translation('name')}) }}{#- -#}
{%- elseif product.availableStock < product.minPurchase and product.deliveryTime and product.restockTime -%}
    {{ "detail.deliveryTimeRestock"|trans({'%count%': product.restockTime,'%restockTime%': product.restockTime,'%name%': product.deliveryTime.translation('name')}) }}{#- -#}
{%- else -%}
    {{ "detail.soldOut"|trans }}{#- -#}
{%- endif -%}",{#- -#}
"4.95",{# change your default delivery costs #}{#- -#}
,{#- -#}
"{% if product.purchaseUnit and product.unit %}{{ product.purchaseUnit }} {{ product.unit.shortCode }}{% endif %}",{#- -#}
"{% if product.referenceUnit and product.unit %}{{ product.referenceUnit }} {{ product.unit.shortCode }}{% endif %}",{#- -#}
"{{ seoUrl('frontend.detail.page', {'productId': product.id}) }}",{#- -#}
{%- if product.media|length > 1 -%}
    "{%- for mediaAssociation in product.media|slice(0, 5) -%}
        {{ mediaAssociation.media.url }}
        {%- if not loop.last -%},{%- endif -%}
    {%- endfor -%}"
{%- endif -%}{#- -#}
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"billiger_de",translationKey:"sw-sales-channel.detail.productComparison.templates.template-label.billiger-de",headerTemplate:P.trim(),bodyTemplate:C.trim(),footerTemplate:"",fileName:"billiger.csv",encoding:"UTF-8",fileFormat:"csv",generateByCronjob:!1,interval:86400});const I=`"categoryPath",{#- -#}
"brand",{#- -#}
"title",{#- -#}
"price",{#- -#}
"basePrice",{#- -#}
"hans",{#- -#}
"eans",{#- -#}
"deliveryCosts",{#- -#}
"url",{#- -#}
"delivery",{#- -#}
"sku",{#- -#}
"imageUrls",{#- -#}
"description",{#- -#}
"paymentCosts_CashInAdvance",{#- Change or add your payment methods -#}
"paymentCosts_CashOnDelivery",{#- Change or add your payment methods -#}
"paymentCosts_Invoice"{#- Change or add your payment methods -#}
`,b=`"{%- if product.categories.count > 0 -%}
    {{ product.categories.first.getBreadCrumb|slice(1)|join(' > ')|raw }}{#- -#}
{%- endif -%}",{#- -#}
"{{ product.manufacturer.translated.name ?? '' }}",{#- -#}
"{{ product.translated.name }}",{#- -#}
{% set price = product.calculatedPrice %}
{%- if product.calculatedPrices.count > 0 -%}
    {% set price = product.calculatedPrices.last %}
{%- endif -%}
"{{ price.unitPrice|currency }}",{#- -#}
"{%- if price.referencePrice is not null -%}
    {{ price.referencePrice.price|currency }} / {{ price.referencePrice.referenceUnit }} {{ price.referencePrice.unitName }}{#- -#}
{%- endif -%}",{#- -#}
"{{ product.manufacturerNumber }}", {#- -#}
"{{ product.ean }}",{#- -#}
"{{ 4.95|currency }}",{#- Change to your delivery costs -#}
"{{ seoUrl('frontend.detail.page', {'productId': product.id}) }}",{#- -#}
"{%- if product.availableStock >= product.minPurchase and product.deliveryTime -%}
    {{ "detail.deliveryTimeAvailable"|trans({'%name%': product.deliveryTime.translation('name')}) }}{#- -#}
{%- elseif product.availableStock < product.minPurchase and product.deliveryTime and product.restockTime -%}
    {{ "detail.deliveryTimeRestock"|trans({'%count%': product.restockTime,'%restockTime%': product.restockTime,'%name%': product.deliveryTime.translation('name')}) }}{#- -#}
{%- else -%}
    {{ "detail.soldOut"|trans }}{#- -#}
{%- endif -%}",{#- -#}
"{{ product.productNumber }}",{#- -#}
"{% if product.cover is not null %}{{ product.cover.media.url }}{% endif %}",{#- -#}
"{{ product.translated.description|striptags|raw|length > 300 ? product.translated.description|striptags|raw|slice(0,300) ~ '...' : product.translated.description|striptags|raw }}",{#- -#}
"0.00",{#- Change or add your payment methods -#}
"0.00",{#- Change or add your payment methods -#}
"0.00"{#- Change or add your payment methods -#}
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"idealo",translationKey:"sw-sales-channel.detail.productComparison.templates.template-label.idealo",headerTemplate:I.trim(),bodyTemplate:b.trim(),footerTemplate:"",fileName:"idealo.csv",encoding:"UTF-8",fileFormat:"csv",generateByCronjob:!1,interval:86400});const E=`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <atom:link href="{{ productExport.salesChannelDomain.url }}/store-api/product-export/{{ productExport.accessKey }}/{{ productExport.fileName }}" rel="self" type="application/rss+xml" />
        <title>{{ context.salesChannel.name }}</title>
        <description>{# change your shop's description #}</description>
        <link>{{ productExport.salesChannelDomain.url }}</link>
        <language>{{ productExport.salesChannelDomain.language.locale.code }}</language>
        <image>
            <url>{# add your logo URL #}</url>
            <title>{{ context.salesChannel.name }}</title>
            <link>{{ productExport.salesChannelDomain.url }}</link>
        </image>
`,S=`<item>
    <g:id>{{ product.productNumber }}</g:id>
    <title>{{ product.translated.name|escape }}</title>
    <description>{{ product.translated.description|escape }}</description>
    <g:google_product_category>950{# change your Google Shopping category #}</g:google_product_category>
    {%- if product.categories.count > 0 -%}
        <g:product_type>{{ product.categories.first.getBreadCrumb|slice(1)|join(' > ')|raw|escape }}</g:product_type>
    {%- endif -%}
    <link>{{ seoUrl('frontend.detail.page', {'productId': product.id}) }}</link>
    {% if product.cover.media is defined %}<g:image_link>{{ product.cover.media.url }}</g:image_link>{% endif %}
    <g:condition>new</g:condition>
    <g:availability>
        {%- if product.availableStock >= product.minPurchase and product.deliveryTime -%}
            in_stock
        {%- elseif product.availableStock < product.minPurchase and product.deliveryTime and product.restockTime -%}
            preorder
        {%- else -%}
            out_of_stock
        {%- endif -%}
    </g:availability>
    {% set price = product.calculatedPrice %}
    {%- if product.calculatedPrices.count > 0 -%}
        {% set price = product.calculatedPrices.last %}
    {%- endif -%}

    <g:price>{{ price.unitPrice|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:price>
    {% if product.manufacturer is defined %}<g:brand>{{ product.manufacturer.translated.name|escape }}</g:brand>{% endif %}
    <g:gtin>{{ product.ean }}</g:gtin>
    <g:mpn>{{ product.manufacturerNumber }}</g:mpn>
    <g:shipping>
        <g:country>DE</g:country>
        <g:service>Standard</g:service>
        {% if product.shippingFree  %}
            <g:price>0.00 {{ context.currency.isoCode }}</g:price>
        {% else %}
            <g:price>4.95 {{ context.currency.isoCode }}{# change your default delivery costs #}</g:price>
        {% endif %}
    </g:shipping>
</item>
`,T=`</channel>
</rss>
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"google-product-search-de",translationKey:"sw-sales-channel.detail.productComparison.templates.template-label.google-product-search-de",headerTemplate:E.trim(),bodyTemplate:S,footerTemplate:T.trim(),fileName:"google.xml",encoding:"UTF-8",fileFormat:"xml",generateByCronjob:!1,interval:86400});const N=`{% set title = product.translated.name|default(product.name)|default('')|trim %}
{% set description = product.translated.description|default(title)|default('')|striptags|trim %}
{% set price = product.calculatedPrice %}
{% if product.calculatedPrices.count > 0 %}
    {% set price = product.calculatedPrices.last %}
{% endif %}
{% set unitPrice = price.unitPrice %}
{% set regularPriceValue = unitPrice %}
{% set salePriceValue = null %}
{% if price.listPrice is defined and price.listPrice %}
    {% set regularPriceValue = price.listPrice.price %}
    {% if price.listPrice.price > unitPrice %}
        {% set salePriceValue = unitPrice %}
    {% endif %}
{% endif %}
{% set imageUrl = '' %}
{% if product.cover is defined and product.cover and product.cover.media is defined and product.cover.media %}
    {% set imageUrl = product.cover.media.url %}
{% endif %}
{% set additionalImageUrls = [] %}
{% if product.media is defined and product.media %}
    {% for productMedia in product.media %}
        {% if productMedia.media is defined and productMedia.media and productMedia.media.url and productMedia.id != product.coverId %}
            {% set additionalImageUrls = additionalImageUrls|merge([productMedia.media.url]) %}
        {% endif %}
    {% endfor %}
{% endif %}
{% set hasVariantListing = productExport.includeVariants and (product.parentId or product.childCount > 0) %}
{% set productUrl = seoUrl('frontend.detail.page', {'productId': product.id}) ~ '?referringSalesChannel=' ~ provider.referringSalesChannel %}
{% if provider.affiliateCode %}
    {% set productUrl = productUrl ~ '&affiliateCode=' ~ provider.affiliateCode|url_encode %}
{% endif %}
{% if provider.campaignCode %}
    {% set productUrl = productUrl ~ '&campaignCode=' ~ provider.campaignCode|url_encode %}
{% endif %}
{% set feedRow = {
    'is_eligible_search': provider.isEligibleSearch,
    'is_eligible_checkout': provider.isEligibleCheckout,
    'item_id': product.productNumber ? product.productNumber : product.id,
    'title': title,
    'description': description,
    'url': productUrl,
    'image_url': imageUrl,
    'price': (regularPriceValue|number_format(context.currency.itemRounding.decimals, '.', '')) ~ ' ' ~ context.currency.isoCode,
    'availability': product.available ? 'in_stock' : (product.restockTime ? 'backorder' : 'out_of_stock'),
    'brand': (product.manufacturer is defined and product.manufacturer) ? product.manufacturer.translated.name : provider.sellerName,
    'seller_name': provider.sellerName,
    'seller_url': provider.sellerUrl,
    'return_policy': provider.returnPolicyUrl,
    'store_country': provider.storeCountry,
    'gtin': product.ean|default(''),
    'mpn': product.manufacturerNumber|default(''),
    'is_digital': product.downloads is defined and product.downloads|length > 0
} %}
{% if provider.targetCountries is not empty %}
    {% set feedRow = feedRow|merge({
        'target_countries': provider.targetCountries
    }) %}
{% endif %}
{% if additionalImageUrls is not empty %}
    {% set feedRow = feedRow|merge({
        'additional_image_urls': additionalImageUrls|join(',')
    }) %}
{% endif %}
{% if salePriceValue is not null %}
    {% set feedRow = feedRow|merge({
        'sale_price': (salePriceValue|number_format(context.currency.itemRounding.decimals, '.', '')) ~ ' ' ~ context.currency.isoCode
    }) %}
{% endif %}
{% set feedRow = feedRow|merge({
    'listing_has_variations': hasVariantListing
}) %}
{% if hasVariantListing %}
    {% set offerId = 'SKU-' ~ (product.productNumber ? product.productNumber : product.id) ~ '-' ~ (regularPriceValue|number_format(context.currency.itemRounding.decimals, '.', '')) %}
    {% set feedRow = feedRow|merge({
        'offer_id': offerId,
        'group_id': product.parentId ? product.parentId : product.id,
        'item_group_title': title
    }) %}

    {# Collect resolved variant output fields and the final OpenAI variant_dict payload #}
    {% set mappedVariantOptions = {} %}
    {% set variantDict = {} %}
    {% set customVariantEntries = [] %}

    {# Property groups used by specific mappings (color/size/...) are excluded from custom variants #}
    {% set reservedCustomGroupIds = [] %}
    {% if provider.variantMapping is defined and provider.variantMapping %}
        {% for mappingProperty, propertyGroupIds in provider.variantMapping %}
            {% if mappingProperty != 'custom_variants' and propertyGroupIds %}
                {% for propertyGroupId in propertyGroupIds %}
                    {% if propertyGroupId and propertyGroupId not in reservedCustomGroupIds %}
                        {% set reservedCustomGroupIds = reservedCustomGroupIds|merge([propertyGroupId]) %}
                    {% endif %}
                {% endfor %}
            {% endif %}
        {% endfor %}
    {% endif %}
    {% if provider.variantMapping is defined and provider.variantMapping %}
        {% for mappingProperty, propertyGroupIds in provider.variantMapping %}
            {% if propertyGroupIds %}
                {% if mappingProperty == 'custom_variants' %}
                    {# Resolve up to 3 custom variant entries: category (group name) + option (selected value) #}
                    {% for customPropertyGroupId in propertyGroupIds %}
                        {% if customVariantEntries|length < 3 and customPropertyGroupId not in reservedCustomGroupIds %}
                            {% set customOptionName = null %}
                            {% set customCategoryName = null %}

                            {# Try to resolve custom category and option from direct product options first #}
                            {% if product.options is defined and product.options %}
                                {% for option in product.options %}
                                    {% if customOptionName is null and option.groupId and option.groupId == customPropertyGroupId %}
                                        {% set optionName = option.translated.name|default(option.name)|default('') %}
                                        {% if optionName %}
                                            {% set customOptionName = optionName %}
                                        {% endif %}

                                        {% if option.group is defined and option.group %}
                                            {% set groupName = option.group.translated.name|default(option.group.name)|default('') %}
                                            {% if groupName %}
                                                {% set customCategoryName = groupName %}
                                            {% endif %}
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                            {% endif %}

                            {# Fallback to sortedProperties when category or option is still missing #}
                            {% if (customOptionName is null or customCategoryName is null) and product.sortedProperties is defined and product.sortedProperties %}
                                {% for group in product.sortedProperties %}
                                    {% if group.id and group.id == customPropertyGroupId %}
                                        {% if customCategoryName is null %}
                                            {% set groupName = group.translated.name|default(group.name)|default('') %}
                                            {% if groupName %}
                                                {% set customCategoryName = groupName %}
                                            {% endif %}
                                        {% endif %}

                                        {# Pick the first option value from the matched custom property group #}
                                        {% if customOptionName is null and group.options is defined and group.options %}
                                            {% for option in group.options %}
                                                {% if customOptionName is null %}
                                                    {% set optionName = option.translated.name|default(option.name)|default('') %}
                                                    {% if optionName %}
                                                        {% set customOptionName = optionName %}
                                                    {% endif %}
                                                {% endif %}
                                            {% endfor %}
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                            {% endif %}

                            {# Add custom variant entry when both category and option were resolved #}
                            {% if customCategoryName and customOptionName %}
                                {% set customVariantEntries = customVariantEntries|merge([{
                                    'category': customCategoryName,
                                    'option': customOptionName
                                }]) %}
                            {% endif %}
                        {% endif %}
                    {% endfor %}
                {% else %}
                    {# Resolve standard mappings (color/size/size_system/gender/material): first matching option wins #}
                    {% set variantPropertyOptionName = null %}

                    {# Check direct variant options on the product first #}
                    {% if product.options is defined and product.options %}
                        {% for option in product.options %}
                            {% if variantPropertyOptionName is null and option.groupId and option.groupId in propertyGroupIds %}
                                {% set optionName = option.translated.name|default(option.name)|default('') %}
                                {% if optionName %}
                                    {% set variantPropertyOptionName = optionName %}
                                {% endif %}
                            {% endif %}
                        {% endfor %}
                    {% endif %}

                    {# Fallback to sortedProperties when no direct option matches #}
                    {% if variantPropertyOptionName is null and product.sortedProperties is defined and product.sortedProperties %}
                        {% for group in product.sortedProperties %}
                            {% if variantPropertyOptionName is null and group.id and group.id in propertyGroupIds and group.options is defined and group.options %}
                                {% for option in group.options %}
                                    {% if variantPropertyOptionName is null %}
                                        {% set optionName = option.translated.name|default(option.name)|default('') %}
                                        {% if optionName %}
                                            {% set variantPropertyOptionName = optionName %}
                                        {% endif %}
                                    {% endif %}
                                {% endfor %}
                            {% endif %}
                        {% endfor %}
                    {% endif %}

                    {# Add resolved standard variant value for the mapped OpenAI field #}
                    {% if variantPropertyOptionName is not null %}
                        {% set mappedVariantOptions = mappedVariantOptions|merge({
                            (mappingProperty): variantPropertyOptionName
                        }) %}
                    {% endif %}
                {% endif %}
            {% endif %}
        {% endfor %}
    {% endif %}

    {% if mappedVariantOptions is not empty %}
        {# Standard mapped fields are emitted as top-level fields and mirrored into variant_dict #}
        {% for variantKey, variantValue in mappedVariantOptions %}
            {% if variantValue %}
                {% set variantDict = variantDict|merge({
                    (variantKey): variantValue
                }) %}
            {% endif %}
        {% endfor %}
        {% set feedRow = feedRow|merge(mappedVariantOptions) %}
    {% endif %}

    {% if customVariantEntries is not empty %}
        {# Emit custom variants as custom_variant1..3_(category|option) and mirror into variant_dict #}
        {% for customEntry in customVariantEntries %}
            {% set customIndex = loop.index %}
            {% if customIndex <= 3 %}
                {% set feedRow = feedRow|merge({
                    ('custom_variant' ~ customIndex ~ '_category'): customEntry.category,
                    ('custom_variant' ~ customIndex ~ '_option'): customEntry.option
                }) %}
                {% set variantDict = variantDict|merge({
                    (customEntry.category): customEntry.option
                }) %}
            {% endif %}
        {% endfor %}
    {% endif %}

    {% if variantDict is not empty %}
        {# Attaching OpenAI variants object for this exported item #}
        {% set feedRow = feedRow|merge({
            'variant_dict': variantDict
        }) %}
    {% endif %}
{% endif %}

{# Skip rows that are missing core required feed data and would be invalid for OpenAI. #}
{% if title and imageUrl and price %}
    {{ feedRow|json_encode(constant('JSON_UNESCAPED_SLASHES'))|raw }}
{% endif %}
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"open_ai",translationKey:"sw-sales-channel.detail.agenticCommerce.templates.template-label.open-ai",salesChannelTypeId:Shopware.Defaults.agenticCommerceTypeId,providerName:"open-ai",headerTemplate:"",bodyTemplate:N.trim(),footerTemplate:"",encoding:"UTF-8",fileFormat:"jsonl",generateByCronjob:!1,interval:86400});const{Application:x,Defaults:l}=Shopware;x.addServiceProvider("domainLinkService",()=>({getDomainLink:O}));function O(t){if(t.type.id!==l.storefrontSalesChannelTypeId||t.domains.length===0)return null;const r=t.domains.find(a=>a.languageId===Shopware.Store.get("session").languageId);if(r)return r.url;const e=t.domains.find(a=>a.languageId===l.systemLanguageId);return e?e.url:t.domains[0].url}const{Application:R}=Shopware,o=class o extends f{constructor(){super(...arguments);s(this,"state",g({favorites:[]}))}async initService(){var e,a;this.userConfig=await this.getUserConfig(),(a=(e=this.userConfig)==null?void 0:e.value)!=null&&a.length&&(this.state.favorites=this.userConfig.value)}getFavoriteIds(){return this.state.favorites}isFavorite(e){return this.state.favorites.includes(e)}update(e,a){if(e&&!this.isFavorite(a))this.state.favorites.push(a);else if(!e&&this.isFavorite(a)){const i=this.state.favorites.indexOf(a);this.state.favorites.splice(i,1)}return this.saveUserConfig()}getConfigurationKey(){return o.USER_CONFIG_KEY}async readUserConfig(){var e;this.userConfig=await this.getUserConfig(),Array.isArray((e=this.userConfig)==null?void 0:e.value)&&(this.state.favorites=this.userConfig.value)}setUserConfig(){this.userConfig.value=this.state.favorites}};s(o,"USER_CONFIG_KEY","sales-channel-favorites");let c=o,d;R.addServiceProvider("salesChannelFavorites",()=>(d||(d=new c),d));const V='{% block sw_admin_menu_navigation_main %} {% parent %} <sw-sales-channel-menu v-if="canViewSalesChannels" /> {% endblock %}',{Component:k}=Shopware;k.override("sw-admin-menu",{template:V,inject:["acl"],computed:{canViewSalesChannels(){return this.acl.can("sales_channel.viewer")}}});Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:null,key:"sales_channel",roles:{viewer:{privileges:["sales_channel:read","sales_channel_type:read",Shopware.Service("privileges").getPrivileges("payment.viewer"),"shipping_method:read","country:read","currency:read","sales_channel_domain:read","snippet_set:read","sales_channel_analytics:read","product_export:read","theme:read","custom_field_set:read","custom_field:read","custom_field_set_relation:read","category:read","customer_group:read",Shopware.Service("privileges").getPrivileges("media.viewer"),"product_export:read","product_stream:read","product_visibility:read","user_config:read","user_config:create","user_config:update","system_config:read","sales_channel_tracking_order:read","sales_channel_tracking_customer:read","order:read","order_transaction:read","state_machine_state:read",Shopware.Service("privileges").getPrivileges("measurement.viewer")],dependencies:[]},editor:{privileges:["sales_channel:update","sales_channel_analytics:create","sales_channel_analytics:delete","sales_channel_analytics:update","sales_channel_country:create","sales_channel_country:delete","sales_channel_country:update","sales_channel_currency:create","sales_channel_currency:delete","sales_channel_currency:update","sales_channel_domain:create","sales_channel_domain:delete","sales_channel_domain:update","sales_channel_language:create","sales_channel_language:delete","sales_channel_language:update","sales_channel_payment_method:create","sales_channel_payment_method:delete","sales_channel_payment_method:update","sales_channel_shipping_method:create","sales_channel_shipping_method:delete","sales_channel_shipping_method:update","theme_sales_channel:create","theme_sales_channel:delete","product_export:create","product_export:update","product_visibility:create","product_visibility:delete","system_config:create","system_config:update","system_config:delete","property_group:read"],dependencies:["sales_channel.viewer"]},creator:{privileges:["product_stream:read","sales_channel:create","product_export:create","product_export:update","property_group:read"],dependencies:["sales_channel.viewer","sales_channel.editor"]},deleter:{privileges:["sales_channel:delete","product_visibility:delete"],dependencies:["sales_channel.viewer"]}}});const A={_searchable:!1,name:{_searchable:!0,_score:_.HIGH_SEARCH_RANKING}},{Module:U}=Shopware;Shopware.Component.register("sw-sales-channel-defaults-select",()=>n(()=>import("./index-DPU1OfeF.js"),__vite__mapDeps([0,1])));Shopware.Component.register("sw-sales-channel-modal",()=>n(()=>import("./index-BMGqgn7-.js"),__vite__mapDeps([2,3])));Shopware.Component.register("sw-sales-channel-modal-grid",()=>n(()=>import("./index-CLEwiePH.js"),__vite__mapDeps([4,5])));Shopware.Component.register("sw-sales-channel-modal-detail",()=>n(()=>import("./index-DUtEfKWs.js"),__vite__mapDeps([6,7])));Shopware.Component.register("sw-sales-channel-detail-domains",()=>n(()=>import("./index-CZDc7BnG.js"),__vite__mapDeps([8,9])));Shopware.Component.register("sw-sales-channel-detail-hreflang",()=>n(()=>import("./index-QCdEGHqD.js"),[]));Shopware.Component.register("sw-sales-channel-detail",()=>n(()=>import("./index-DNyYGwSs.js"),[]));Shopware.Component.extend("sw-sales-channel-create","sw-sales-channel-detail",()=>n(()=>import("./index-5x8V9Kv7.js"),[]));Shopware.Component.register("sw-sales-channel-list",()=>n(()=>import("./index-H5kZAkxJ.js"),__vite__mapDeps([10,11])));Shopware.Component.register("sw-sales-channel-detail-base",()=>n(()=>import("./index-CZO8DCpD.js"),__vite__mapDeps([12,13])));Shopware.Component.register("sw-sales-channel-detail-products",()=>n(()=>import("./index-2fcSxVru.js"),__vite__mapDeps([14,15])));Shopware.Component.register("sw-sales-channel-detail-analytics",()=>n(()=>import("./index-l5BbtsAc.js"),__vite__mapDeps([16,17])));Shopware.Component.extend("sw-sales-channel-create-base","sw-sales-channel-detail-base",()=>n(()=>import("./index-DYHl2E0R.js"),[]));Shopware.Component.register("sw-sales-channel-detail-product-comparison",()=>n(()=>import("./index-k3B2PzaL.js"),__vite__mapDeps([18,19])));Shopware.Component.register("sw-sales-channel-detail-product-comparison-preview",()=>n(()=>import("./index-71nZjCBq.js"),__vite__mapDeps([20,21])));Shopware.Component.register("sw-sales-channel-detail-agentic-commerce-integration",()=>n(()=>import("./index-dgsDykJe.js"),__vite__mapDeps([22,23])));Shopware.Component.register("sw-agentic-commerce-tracking-config",()=>n(()=>import("./index-DPrkl8N9.js"),[]));Shopware.Component.register("sw-sales-channel-detail-product-export-insights",()=>n(()=>import("./index-DLlIMH0i.js"),__vite__mapDeps([24,25])));Shopware.Component.register("sw-sales-channel-products-assignment-modal",()=>n(()=>import("./index-BOuHbig7.js"),__vite__mapDeps([26,27])));Shopware.Component.register("sw-sales-channel-products-assignment-single-products",()=>n(()=>import("./index-D6qKMiJu.js"),__vite__mapDeps([28,29])));Shopware.Component.register("sw-sales-channel-products-assignment-dynamic-product-groups",()=>n(()=>import("./index-Cibn6jdN.js"),__vite__mapDeps([30,31])));Shopware.Component.register("sw-sales-channel-product-assignment-categories",()=>n(()=>import("./index-QAL9ZU-D.js"),__vite__mapDeps([32,33])));Shopware.Component.register("sw-sales-channel-menu",()=>n(()=>import("./index-C9ZVE7kF.js"),__vite__mapDeps([34,35])));Shopware.Component.register("sw-sales-channel-measurement",()=>n(()=>import("./index-BgT7tv2X.js"),__vite__mapDeps([36,37])));U.register("sw-sales-channel",{type:"core",name:"sales-channel",title:"sw-sales-channel.general.titleMenuItems",description:"The module for managing Sales Channels.",version:"1.0.0",targetVersion:"1.0.0",color:"#14D7A5",icon:"solid-server",entity:"sales_channel",searchMatcher:(t,r,e)=>{var i;return r.toLowerCase().match(t)?[{name:e.name,icon:e.icon,color:e.color,label:r,entity:e.entity,route:e.routes.list,privilege:(i=e.routes.list)==null?void 0:i.meta.privilege}]:!1},routes:{detail:{component:"sw-sales-channel-detail",path:"detail/:id",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"},redirect:{name:"sw.sales.channel.detail.base"},children:{base:{component:"sw-sales-channel-detail-base",path:"base",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},products:{component:"sw-sales-channel-detail-products",path:"products",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},productComparison:{component:"sw-sales-channel-detail-product-comparison",path:"product-comparison",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},analytics:{component:"sw-sales-channel-detail-analytics",path:"analytics",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},agenticCommerceIntegration:{component:"sw-sales-channel-detail-agentic-commerce-integration",path:"agentic-commerce-integration",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},productExportInsights:{component:"sw-sales-channel-detail-product-export-insights",path:"product-export-insights",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}}}},create:{component:"sw-sales-channel-create",path:"create/:typeId",redirect:{name:"sw.sales.channel.create.base"},children:{base:{component:"sw-sales-channel-create-base",path:"base",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.creator"}}}},list:{component:"sw-sales-channel-list",path:"list",meta:{privilege:"sales_channel.viewer"}}},defaultSearchConfiguration:A});
