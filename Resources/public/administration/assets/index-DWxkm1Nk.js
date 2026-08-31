const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CQOgeMh9.js","assets/index-LAf-pYmf.css","assets/index-oPRxrwKx.js","assets/index-k7L4EYIY.css","assets/index-D6lUT3iJ.js","assets/index-g9VAP1fb.css","assets/index-CaGybO-l.js","assets/index-CZmJ6t3I.css","assets/index-CgzI1OMe.js","assets/index-E-0dQQH8.css","assets/index-BjtLFtFk.js","assets/main-D0WESxT4.js","assets/administration-D0owlPNM.js","assets/main-BccBQUJb.css","assets/index-BjsqvC72.css","assets/index-RPqG9BrI.js","assets/index-veVC6IQH.css","assets/index-w5L9TbXz.js","assets/index-CeRJ247S.css","assets/index-Dr5aERs2.js","assets/index-D5hm6lWg.css","assets/index-dzcFVrRY.js","assets/index-BAMKfCgE.css","assets/index-Cy4LaznE.js","assets/index-DgkRWnkH.css","assets/index-Df7JzoD7.js","assets/index-CGVd0fri.css","assets/index-CXWvJkhl.js","assets/index-BnVLdLFY.css","assets/index-71nZjCBq.js","assets/index-Ccm3Uu34.css","assets/index-dgsDykJe.js","assets/index-COJv9EoM.css","assets/index-DLlIMH0i.js","assets/index-CjDCx6Mz.css","assets/index-DktxtDZX.js","assets/index-DeVP5Kwb.css","assets/index-BXsyro-I.js","assets/index-BmCMNmwN.css","assets/index-Cibn6jdN.js","assets/index-CdBEJD3t.css","assets/index-8Q-bv9An.js","assets/index-CK6nHLZA.css","assets/index-CTeuSt5q.js","assets/index-CQQ_pyIR.css","assets/index-CgJgi2G-.js","assets/index-DL4gaSPk.css"])))=>i.map(i=>d[i]);
var g=Object.defineProperty;var f=(i,t,e)=>t in i?g(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var d=(i,t,e)=>f(i,typeof t!="symbol"?t+"":t,e);import{X as h,_ as n}from"./administration-D0owlPNM.js";import{U as _}from"./user-config.class-6FxidUhV.js";import{s as v}from"./main-D0WESxT4.js";const{Application:y}=Shopware;y.addServiceProvider("exportTemplateService",()=>({registerProductExportTemplate:w,getProductExportTemplateByName:P,getProductExportTemplateRegistry:C}));const l={};function w(i){return l[i.name]=i,!0}function P(i){return l[i]}function C(){return l}const I=`aid,{#- -#}
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
`,N=`"{{ product.productNumber }}",{#- -#}
"{{ product.manufacturer.translated.name ?? '' }}",{#- -#}
"{{ product.manufacturerNumber }}",{#- -#}
"{{ product.ean }}",{#- -#}
"{{ product.translated.name|length > 80 ? product.translated.name|slice(0, 80) ~ '...' : product.translated.name }}",{#- -#}
"{{ product.translated.description|raw|length > 900 ? product.translated.description|raw|slice(0,900) ~ '...' : product.translated.description|raw }}{#- -#}
",{#- -#}
"{%- set productTypeCategory = product.seoCategory ?? product.categories.first -%}
{%- if productTypeCategory -%}
    {{ productTypeCategory.breadCrumb|slice(1)|join(' > ')|raw }}{#- -#}
{%- endif -%}",{#- -#}
{% set price = product.calculatedPrice %}
{%- if product.calculatedPrices.count > 0 -%}
    {% set price = product.calculatedPrices.last %}
{%- endif -%}
"{{ price.unitPrice }}",{#- -#}
"{%- if price.referencePrice is not null -%}
    {{ price.referencePrice.price|currency }} / {{ price.referencePrice.referenceUnit }} {{ price.referencePrice.unitName }}{#- -#}
{%- endif -%}",{#- -#}
"{{ entitySeoUrl('product', product.id) }}",{#- -#}
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
"{{ entitySeoUrl('product', product.id) }}",{#- -#}
{%- if product.media|length > 1 -%}
    "{%- for mediaAssociation in product.media|slice(0, 5) -%}
        {{ mediaAssociation.media.url }}
        {%- if not loop.last -%},{%- endif -%}
    {%- endfor -%}"
{%- endif -%}{#- -#}
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"billiger_de",translationKey:"sw-sales-channel.detail.productComparison.templates.template-label.billiger-de",headerTemplate:I.trim(),bodyTemplate:N.trim(),footerTemplate:"",fileName:"billiger.csv",encoding:"UTF-8",fileFormat:"csv",generateByCronjob:!1,interval:86400});const b=`"categoryPath",{#- -#}
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
`,S=`"{%- set productTypeCategory = product.seoCategory ?? product.categories.first -%}
{%- if productTypeCategory -%}
    {{ productTypeCategory.breadCrumb|slice(1)|join(' > ')|raw }}{#- -#}
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
"{{ entitySeoUrl('product', product.id) }}",{#- -#}
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
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"idealo",translationKey:"sw-sales-channel.detail.productComparison.templates.template-label.idealo",headerTemplate:b.trim(),bodyTemplate:S.trim(),footerTemplate:"",fileName:"idealo.csv",encoding:"UTF-8",fileFormat:"csv",generateByCronjob:!1,interval:86400});const E=`<?xml version="1.0" encoding="UTF-8" ?>
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
`,O=`<item>
    <g:id>{{ product.productNumber }}</g:id>
    <title>{{ product.translated.name|escape }}</title>
    <description>{{ product.translated.description|escape }}</description>
    <g:google_product_category>950{# change your Google Shopping category #}</g:google_product_category>
    {%- if productExport.feedLabel is defined and productExport.feedLabel is not empty -%}
        <g:feed_label>{{ productExport.feedLabel|escape }}</g:feed_label>
    {%- endif -%}
    {%- set productTypeCategory = product.seoCategory ?? product.categories.first -%}
    {%- if productTypeCategory -%}
        <g:product_type>{{ productTypeCategory.breadCrumb|slice(1)|join(' > ')|raw|escape }}</g:product_type>
    {%- endif -%}
    <link>{{ entitySeoUrl('product', product.id) }}</link>
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
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"google-product-search-de",translationKey:"sw-sales-channel.detail.productComparison.templates.template-label.google-product-search-de",headerTemplate:E.trim(),bodyTemplate:O,footerTemplate:T.trim(),fileName:"google.xml",encoding:"UTF-8",fileFormat:"xml",generateByCronjob:!1,interval:86400});const V=`{% set title = product.translated.name|default(product.name)|default('')|trim %}
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
{% set productUrl = entitySeoUrl('product', product.id) ~ '?referringSalesChannel=' ~ provider.referringSalesChannel %}
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
`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"open_ai",translationKey:"sw-sales-channel.detail.agenticCommerce.templates.template-label.open-ai",salesChannelTypeId:Shopware.Defaults.agenticCommerceTypeId,providerName:"open-ai",headerTemplate:"",bodyTemplate:V.trim(),footerTemplate:"",encoding:"UTF-8",fileFormat:"jsonl",generateByCronjob:!1,interval:86400});const x=`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <atom:link href="{{ productExport.salesChannelDomain.url }}/store-api/product-export/{{ productExport.accessKey }}/{{ productExport.fileName }}" rel="self" type="application/rss+xml" />
        <title>{{ context.salesChannel.name }}</title>
        <description>{{ context.salesChannel.name }}</description>
        <link>{{ productExport.salesChannelDomain.url }}</link>
        <language>{{ productExport.salesChannelDomain.language.locale.code }}</language>`,R=`{%- set title = product.translated.name|default(product.name)|default('')|trim -%}
{%- set description = product.translated.description|default(title)|default('')|striptags|trim -%}
{%- set price = product.calculatedPrice -%}
{%- if product.calculatedPrices.count > 0 -%}
    {%- set price = product.calculatedPrices.last -%}
{%- endif -%}
{%- set unitPrice = price.unitPrice -%}
{%- set regularPriceValue = unitPrice -%}
{%- set salePriceValue = null -%}
{%- if price.listPrice is defined and price.listPrice -%}
    {%- set regularPriceValue = price.listPrice.price -%}
    {%- if price.listPrice.price > unitPrice -%}
        {%- set salePriceValue = unitPrice -%}
    {%- endif -%}
{%- endif -%}
{%- set imageUrl = '' -%}
{%- if product.cover is defined and product.cover and product.cover.media is defined and product.cover.media -%}
    {%- set imageUrl = product.cover.media.url -%}
{%- endif -%}
{%- set additionalImageUrls = [] -%}
{%- if product.media is defined and product.media -%}
    {%- for productMedia in product.media -%}
        {%- if productMedia.media is defined and productMedia.media and productMedia.media.url and productMedia.id != product.coverId -%}
            {%- set additionalImageUrls = additionalImageUrls|merge([productMedia.media.url]) -%}
        {%- endif -%}
    {%- endfor -%}
{%- endif -%}
{%- set hasVariantListing = productExport.includeVariants and (product.parentId or product.childCount > 0) -%}
{%- set productUrl = entitySeoUrl('product', product.id) ~ '?referringSalesChannel=' ~ provider.referringSalesChannel -%}
{%- if provider.affiliateCode -%}
    {%- set productUrl = productUrl ~ '&affiliateCode=' ~ provider.affiliateCode|url_encode -%}
{%- endif -%}
{%- if provider.campaignCode -%}
    {%- set productUrl = productUrl ~ '&campaignCode=' ~ provider.campaignCode|url_encode -%}
{%- endif -%}

{%- set itemId = product.productNumber ? product.productNumber : product.id -%}
{%- set availability = product.available ? 'in_stock' : (product.restockTime ? 'backorder' : 'out_of_stock') -%}
{%- set brand = (product.manufacturer is defined and product.manufacturer) ? product.manufacturer.translated.name : provider.sellerName -%}
{%- set gtin = product.ean|default('') -%}
{%- set mpn = product.manufacturerNumber|default('') -%}
{%- set categoryPath = '' -%}
{%- if product.categories is defined and product.categories and product.categories.count > 0 -%}
    {%- set categoryPath = product.categories.first.getBreadCrumb|slice(1)|join(' > ') -%}
{%- endif -%}

{%- set mappedVariantOptions = {} -%}
{%- set customVariantEntries = [] -%}
{%- set reservedCustomGroupIds = [] -%}
{%- if provider.variantMapping is defined and provider.variantMapping -%}
    {%- for mappingProperty, propertyGroupIds in provider.variantMapping -%}
        {%- if mappingProperty != 'custom_variants' and propertyGroupIds -%}
            {%- for propertyGroupId in propertyGroupIds -%}
                {%- if propertyGroupId and propertyGroupId not in reservedCustomGroupIds -%}
                    {%- set reservedCustomGroupIds = reservedCustomGroupIds|merge([propertyGroupId]) -%}
                {%- endif -%}
            {%- endfor -%}
        {%- endif -%}
    {%- endfor -%}
{%- endif -%}
{%- if provider.variantMapping is defined and provider.variantMapping -%}
    {%- for mappingProperty, propertyGroupIds in provider.variantMapping -%}
        {%- if propertyGroupIds -%}
            {%- if mappingProperty == 'custom_variants' -%}
                {%- for customPropertyGroupId in propertyGroupIds -%}
                    {%- if customVariantEntries|length < 3 and customPropertyGroupId not in reservedCustomGroupIds -%}
                        {%- set customOptionName = null -%}
                        {%- set customCategoryName = null -%}

                        {%- if product.options is defined and product.options -%}
                            {%- for option in product.options -%}
                                {%- if customOptionName is null and option.groupId and option.groupId == customPropertyGroupId -%}
                                    {%- set optionName = option.translated.name|default(option.name)|default('') -%}
                                    {%- if optionName -%}
                                        {%- set customOptionName = optionName -%}
                                    {%- endif -%}

                                    {%- if option.group is defined and option.group -%}
                                        {%- set groupName = option.group.translated.name|default(option.group.name)|default('') -%}
                                        {%- if groupName -%}
                                            {%- set customCategoryName = groupName -%}
                                        {%- endif -%}
                                    {%- endif -%}
                                {%- endif -%}
                            {%- endfor -%}
                        {%- endif -%}

                        {%- if (customOptionName is null or customCategoryName is null) and product.sortedProperties is defined and product.sortedProperties -%}
                            {%- for group in product.sortedProperties -%}
                                {%- if group.id and group.id == customPropertyGroupId -%}
                                    {%- if customCategoryName is null -%}
                                        {%- set groupName = group.translated.name|default(group.name)|default('') -%}
                                        {%- if groupName -%}
                                            {%- set customCategoryName = groupName -%}
                                        {%- endif -%}
                                    {%- endif -%}

                                    {%- if customOptionName is null and group.options is defined and group.options -%}
                                        {%- for option in group.options -%}
                                            {%- if customOptionName is null -%}
                                                {%- set optionName = option.translated.name|default(option.name)|default('') -%}
                                                {%- if optionName -%}
                                                    {%- set customOptionName = optionName -%}
                                                {%- endif -%}
                                            {%- endif -%}
                                        {%- endfor -%}
                                    {%- endif -%}
                                {%- endif -%}
                            {%- endfor -%}
                        {%- endif -%}

                        {%- if customCategoryName and customOptionName -%}
                            {%- set customVariantEntries = customVariantEntries|merge([{
                                'category': customCategoryName,
                                'option': customOptionName
                            }]) -%}
                        {%- endif -%}
                    {%- endif -%}
                {%- endfor -%}
            {%- else -%}
                {%- set variantPropertyOptionName = null -%}

                {%- if product.options is defined and product.options -%}
                    {%- for option in product.options -%}
                        {%- if variantPropertyOptionName is null and option.groupId and option.groupId in propertyGroupIds -%}
                            {%- set optionName = option.translated.name|default(option.name)|default('') -%}
                            {%- if optionName -%}
                                {%- set variantPropertyOptionName = optionName -%}
                            {%- endif -%}
                        {%- endif -%}
                    {%- endfor -%}
                {%- endif -%}

                {%- if variantPropertyOptionName is null and product.sortedProperties is defined and product.sortedProperties -%}
                    {%- for group in product.sortedProperties -%}
                        {%- if variantPropertyOptionName is null and group.id and group.id in propertyGroupIds and group.options is defined and group.options -%}
                            {%- for option in group.options -%}
                                {%- if variantPropertyOptionName is null -%}
                                    {%- set optionName = option.translated.name|default(option.name)|default('') -%}
                                    {%- if optionName -%}
                                        {%- set variantPropertyOptionName = optionName -%}
                                    {%- endif -%}
                                {%- endif -%}
                            {%- endfor -%}
                        {%- endif -%}
                    {%- endfor -%}
                {%- endif -%}

                {%- if variantPropertyOptionName is not null -%}
                    {%- set mappedVariantOptions = mappedVariantOptions|merge({
                        (mappingProperty): variantPropertyOptionName
                    }) -%}
                {%- endif -%}
            {%- endif -%}
        {%- endif -%}
    {%- endfor -%}
{%- endif -%}

{# Skip rows that are missing core required Google fields. #}
{%- if title and imageUrl and price -%}
<item>
    <g:id>{{ itemId|escape }}</g:id>
    <title>{{ title|escape }}</title>
    <description>{{ description|escape }}</description>
    <link>{{ productUrl|escape }}</link>
    <g:image_link>{{ imageUrl|escape }}</g:image_link>
    {%- for additionalImageUrl in additionalImageUrls|slice(0, 10) %}
    <g:additional_image_link>{{ additionalImageUrl|escape }}</g:additional_image_link>
    {%- endfor %}
    <g:availability>{{ availability }}</g:availability>
    <g:price>{{ regularPriceValue|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:price>
    {%- if salePriceValue is not null %}
    <g:sale_price>{{ salePriceValue|number_format(context.currency.itemRounding.decimals, '.', '') }} {{ context.currency.isoCode }}</g:sale_price>
    {%- endif %}
    {%- if mappedVariantOptions.condition is defined and mappedVariantOptions.condition %}
    <g:condition>{{ mappedVariantOptions.condition|escape }}</g:condition>
    {%- else %}
    <g:condition>new</g:condition>
    {%- endif %}
    <g:brand>{{ brand|escape }}</g:brand>
    {%- if gtin %}
    <g:gtin>{{ gtin|escape }}</g:gtin>
    {%- endif %}
    {%- if mpn %}
    <g:mpn>{{ mpn|escape }}</g:mpn>
    {%- endif %}
    {%- if not gtin and not mpn %}
    <g:identifier_exists>no</g:identifier_exists>
    {%- endif %}
    {%- if categoryPath %}
    <g:product_type>{{ categoryPath|escape }}</g:product_type>
    {%- endif %}
    {%- if hasVariantListing %}
    <g:item_group_id>{{ (product.parentId ? product.parentId : product.id)|escape }}</g:item_group_id>
    {%- endif %}
    {%- if mappedVariantOptions.color is defined and mappedVariantOptions.color %}
    <g:color>{{ mappedVariantOptions.color|escape }}</g:color>
    {%- endif %}
    {%- if mappedVariantOptions.size is defined and mappedVariantOptions.size %}
    <g:size>{{ mappedVariantOptions.size|escape }}</g:size>
    {%- endif %}
    {%- if mappedVariantOptions.size_system is defined and mappedVariantOptions.size_system %}
    <g:size_system>{{ mappedVariantOptions.size_system|escape }}</g:size_system>
    {%- endif %}
    {%- if mappedVariantOptions.gender is defined and mappedVariantOptions.gender %}
    <g:gender>{{ mappedVariantOptions.gender|escape }}</g:gender>
    {%- endif %}
    {%- if mappedVariantOptions.age_group is defined and mappedVariantOptions.age_group %}
    <g:age_group>{{ mappedVariantOptions.age_group|escape }}</g:age_group>
    {%- endif %}
    {%- if mappedVariantOptions.material is defined and mappedVariantOptions.material %}
    <g:material>{{ mappedVariantOptions.material|escape }}</g:material>
    {%- endif %}
    {%- for customEntry in customVariantEntries %}
        {%- set customIndex = loop.index0 %}
        {%- if customIndex < 3 %}
    <g:custom_label_{{ customIndex }}>{{ (customEntry.category ~ ': ' ~ customEntry.option)|escape }}</g:custom_label_{{ customIndex }}>
        {%- endif %}
    {%- endfor %}
    {%- if product.shippingFree %}
    <g:shipping>
        <g:country>{{ (provider.shippingCountry ?: provider.storeCountry)|escape }}</g:country>
        {%- if provider.shippingService %}
        <g:service>{{ provider.shippingService|escape }}</g:service>
        {%- endif %}
        <g:price>0.00 {{ context.currency.isoCode }}</g:price>
    </g:shipping>
    {%- endif %}
</item>
{%- endif -%}`,U=`    </channel>
</rss>`;Shopware.Service("exportTemplateService").registerProductExportTemplate({name:"google",translationKey:"sw-sales-channel.detail.agenticCommerce.templates.template-label.google",salesChannelTypeId:Shopware.Defaults.agenticCommerceTypeId,providerName:"google",headerTemplate:x.trim(),bodyTemplate:R,footerTemplate:U.trim(),encoding:"UTF-8",fileFormat:"xml",generateByCronjob:!1,interval:86400});const{Application:k,Defaults:u}=Shopware;k.addServiceProvider("domainLinkService",()=>({getDomainLink:A}));function A(i){if(i.type.id!==u.storefrontSalesChannelTypeId||i.domains.length===0)return null;const t=i.domains.find(r=>r.languageId===Shopware.Store.get("session").languageId);if(t)return t.url;const e=i.domains.find(r=>r.languageId===u.systemLanguageId);return e?e.url:i.domains[0].url}const{Application:D}=Shopware,o=Shopware.Classes.ApiService;class G extends o{constructor(t,e,r="sales-channel-file"){super(t,e,r),this.name="salesChannelFileApiService"}list(t,e){return this.httpClient.get(`/_action/${this.getApiBasePath()}/${t}/${e}`,{headers:this.getBasicHeaders()}).then(r=>o.handleResponse(r))}detail(t,e,r){return this.httpClient.get(`/_action/${this.getApiBasePath()}/${t}/${e}/detail`,{headers:this.getBasicHeaders(),params:{fileName:r}}).then(a=>o.handleResponse(a))}preview(t,e,r,a={}){return this.httpClient.post(`/_action/${this.getApiBasePath()}/${t}/${e}/preview`,{fileName:r,templateOverrides:a},{headers:this.getBasicHeaders()}).then(m=>o.handleResponse(m))}}D.addServiceProvider("salesChannelFileApiService",()=>new G(Shopware.Application.getContainer("init").httpClient,Shopware.Service("loginService")));const{Application:L}=Shopware,s=class s extends _{constructor(){super(...arguments);d(this,"state",h({favorites:[]}))}async initService(){var e,r;this.userConfig=await this.getUserConfig(),(r=(e=this.userConfig)==null?void 0:e.value)!=null&&r.length&&(this.state.favorites=this.userConfig.value)}getFavoriteIds(){return this.state.favorites}isFavorite(e){return this.state.favorites.includes(e)}update(e,r){if(e&&!this.isFavorite(r))this.state.favorites.push(r);else if(!e&&this.isFavorite(r)){const a=this.state.favorites.indexOf(r);this.state.favorites.splice(a,1)}return this.saveUserConfig()}getConfigurationKey(){return s.USER_CONFIG_KEY}async readUserConfig(){var e;this.userConfig=await this.getUserConfig(),Array.isArray((e=this.userConfig)==null?void 0:e.value)&&(this.state.favorites=this.userConfig.value)}setUserConfig(){this.userConfig.value=this.state.favorites}};d(s,"USER_CONFIG_KEY","sales-channel-favorites");let c=s,p;L.addServiceProvider("salesChannelFavorites",()=>(p||(p=new c),p));const M='{% block sw_admin_menu_navigation_main %} {% parent %} <sw-sales-channel-menu v-if="canViewSalesChannels" /> {% endblock %}',{Component:F}=Shopware;F.override("sw-admin-menu",{template:M,inject:["acl"],computed:{canViewSalesChannels(){return this.acl.can("sales_channel.viewer")}}});Shopware.Service("privileges").addPrivilegeMappingEntry({category:"permissions",parent:null,key:"sales_channel",roles:{viewer:{privileges:["sales_channel:read","sales_channel_type:read",Shopware.Service("privileges").getPrivileges("payment.viewer"),"shipping_method:read","country:read","currency:read","sales_channel_domain:read","sales_channel_file:read","snippet_set:read","sales_channel_analytics:read","product_export:read","theme:read","custom_field_set:read","custom_field:read","custom_field_set_relation:read","category:read","customer_group:read",Shopware.Service("privileges").getPrivileges("media.viewer"),"product:read","product_export:read","product_stream:read","product_visibility:read","property_group:read","property_group_option:read","user_config:read","user_config:create","user_config:update","system_config:read","sales_channel_tracking_order:read","sales_channel_tracking_customer:read","order:read","order_transaction:read","state_machine_state:read",Shopware.Service("privileges").getPrivileges("measurement.viewer")],dependencies:[]},editor:{privileges:["sales_channel:update","sales_channel_analytics:create","sales_channel_analytics:delete","sales_channel_analytics:update","sales_channel_country:create","sales_channel_country:delete","sales_channel_country:update","sales_channel_currency:create","sales_channel_currency:delete","sales_channel_currency:update","sales_channel_domain:create","sales_channel_domain:delete","sales_channel_domain:update","sales_channel_file:create","sales_channel_file:update","sales_channel_language:create","sales_channel_language:delete","sales_channel_language:update","sales_channel_payment_method:create","sales_channel_payment_method:delete","sales_channel_payment_method:update","sales_channel_shipping_method:create","sales_channel_shipping_method:delete","sales_channel_shipping_method:update","theme_sales_channel:create","theme_sales_channel:delete","product_export:create","product_export:update","product_visibility:create","product_visibility:delete","system_config:create","system_config:update","system_config:delete","property_group:read"],dependencies:["sales_channel.viewer"]},creator:{privileges:["product_stream:read","sales_channel:create","product_export:create","product_export:update","property_group:read"],dependencies:["sales_channel.viewer","sales_channel.editor"]},deleter:{privileges:["sales_channel:delete","product_visibility:delete"],dependencies:["sales_channel.viewer"]}}});const $={_searchable:!1,name:{_searchable:!0,_score:v.HIGH_SEARCH_RANKING}},{Module:j}=Shopware;Shopware.Component.register("sw-sales-channel-defaults-select",()=>n(()=>import("./index-CQOgeMh9.js"),__vite__mapDeps([0,1])));Shopware.Component.register("sw-sales-channel-modal",()=>n(()=>import("./index-oPRxrwKx.js"),__vite__mapDeps([2,3])));Shopware.Component.register("sw-sales-channel-modal-grid",()=>n(()=>import("./index-D6lUT3iJ.js"),__vite__mapDeps([4,5])));Shopware.Component.register("sw-sales-channel-modal-detail",()=>n(()=>import("./index-CaGybO-l.js"),__vite__mapDeps([6,7])));Shopware.Component.register("sw-sales-channel-detail-domains",()=>n(()=>import("./index-CgzI1OMe.js"),__vite__mapDeps([8,9])));Shopware.Component.register("sw-sales-channel-detail-hreflang",()=>n(()=>import("./index-QCdEGHqD.js"),[]));Shopware.Component.register("sw-sales-channel-detail",()=>n(()=>import("./index-BjtLFtFk.js"),__vite__mapDeps([10,11,12,13,14])));Shopware.Component.extend("sw-sales-channel-create","sw-sales-channel-detail",()=>n(()=>import("./index-CSdkPkQ7.js"),[]));Shopware.Component.register("sw-sales-channel-list",()=>n(()=>import("./index-RPqG9BrI.js"),__vite__mapDeps([15,16])));Shopware.Component.register("sw-sales-channel-detail-base",()=>n(()=>import("./index-w5L9TbXz.js"),__vite__mapDeps([17,18])));Shopware.Component.register("sw-sales-channel-detail-products",()=>n(()=>import("./index-Dr5aERs2.js"),__vite__mapDeps([19,20])));Shopware.Component.register("sw-sales-channel-detail-agentic-files",()=>n(()=>import("./index-dzcFVrRY.js"),__vite__mapDeps([21,22])));Shopware.Component.register("sw-sales-channel-detail-agentic-file",()=>n(()=>import("./index-Cy4LaznE.js"),__vite__mapDeps([23,24])));Shopware.Component.register("sw-sales-channel-detail-analytics",()=>n(()=>import("./index-Df7JzoD7.js"),__vite__mapDeps([25,26])));Shopware.Component.extend("sw-sales-channel-create-base","sw-sales-channel-detail-base",()=>n(()=>import("./index-DYHl2E0R.js"),[]));Shopware.Component.register("sw-sales-channel-detail-product-comparison",()=>n(()=>import("./index-CXWvJkhl.js"),__vite__mapDeps([27,28])));Shopware.Component.register("sw-sales-channel-detail-product-comparison-preview",()=>n(()=>import("./index-71nZjCBq.js"),__vite__mapDeps([29,30])));Shopware.Component.register("sw-sales-channel-detail-agentic-commerce-integration",()=>n(()=>import("./index-dgsDykJe.js"),__vite__mapDeps([31,32])));Shopware.Component.register("sw-agentic-commerce-tracking-config",()=>n(()=>import("./index-DPrkl8N9.js"),[]));Shopware.Component.register("sw-sales-channel-detail-product-export-insights",()=>n(()=>import("./index-DLlIMH0i.js"),__vite__mapDeps([33,34])));Shopware.Component.register("sw-sales-channel-products-assignment-modal",()=>n(()=>import("./index-DktxtDZX.js"),__vite__mapDeps([35,36])));Shopware.Component.register("sw-sales-channel-products-assignment-single-products",()=>n(()=>import("./index-BXsyro-I.js"),__vite__mapDeps([37,38])));Shopware.Component.register("sw-sales-channel-products-assignment-dynamic-product-groups",()=>n(()=>import("./index-Cibn6jdN.js"),__vite__mapDeps([39,40])));Shopware.Component.register("sw-sales-channel-product-assignment-categories",()=>n(()=>import("./index-8Q-bv9An.js"),__vite__mapDeps([41,42])));Shopware.Component.register("sw-sales-channel-menu",()=>n(()=>import("./index-CTeuSt5q.js"),__vite__mapDeps([43,44])));Shopware.Component.register("sw-sales-channel-measurement",()=>n(()=>import("./index-CgJgi2G-.js"),__vite__mapDeps([45,46])));j.register("sw-sales-channel",{type:"core",name:"sales-channel",title:"sw-sales-channel.general.titleMenuItems",description:"The module for managing Sales Channels.",version:"1.0.0",targetVersion:"1.0.0",color:"var(--color-module-green-500)",icon:"regular-server",entity:"sales_channel",searchMatcher:(i,t,e)=>{var a;return t.toLowerCase().match(i)?[{name:e.name,icon:e.icon,color:e.color,label:t,entity:e.entity,route:e.routes.list,privilege:(a=e.routes.list)==null?void 0:a.meta.privilege}]:!1},routes:{detail:{component:"sw-sales-channel-detail",path:"detail/:id",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"},redirect:{name:"sw.sales.channel.detail.base"},children:{base:{component:"sw-sales-channel-detail-base",path:"base",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},products:{component:"sw-sales-channel-detail-products",path:"products",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},agenticFiles:{component:"sw-sales-channel-detail-agentic-files",path:"agentic-files",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},agenticFile:{component:"sw-sales-channel-detail-agentic-file",path:"agentic-files/:fileName(.*)",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},productComparison:{component:"sw-sales-channel-detail-product-comparison",path:"product-comparison",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},analytics:{component:"sw-sales-channel-detail-analytics",path:"analytics",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},agenticCommerceIntegration:{component:"sw-sales-channel-detail-agentic-commerce-integration",path:"agentic-commerce-integration",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}},productExportInsights:{component:"sw-sales-channel-detail-product-export-insights",path:"product-export-insights",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.viewer"}}}},create:{component:"sw-sales-channel-create",path:"create/:typeId",redirect:{name:"sw.sales.channel.create.base"},children:{base:{component:"sw-sales-channel-create-base",path:"base",meta:{parentPath:"sw.sales.channel.list",privilege:"sales_channel.creator"}}}},list:{component:"sw-sales-channel-list",path:"list",meta:{privilege:"sales_channel.viewer"}}},defaultSearchConfiguration:$});
