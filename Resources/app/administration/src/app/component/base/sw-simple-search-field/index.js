import template from './sw-simple-search-field.html.twig';
import './sw-simple-search-field.scss';

const { Component, Utils } = Shopware;

/**
 * @package admin
 *
 * @private
 * @description a search field with delayed update
 * @status ready
 * @example-type static
 * @component-example
 * <sw-simple-search-field
 *   v-model="value"
 *   :delay="1000"
 *   @input="onInput"
 *   @search-term-change="debouncedInputEvent"
 *  />
 */
Component.register('sw-simple-search-field', {
    template,
    inheritAttrs: false,

    emits: [
        'update:value',
        'search-term-change',
    ],

    props: {
        variant: {
            type: String,
            required: false,
            default: 'default',
            validValues: ['default', 'inverted', 'form'],
            validator(value) {
                if (!value.length) {
                    return true;
                }
                return ['default', 'inverted', 'form'].includes(value);
            },
        },

        value: {
            type: String,
            default: null,
            required: false,
        },

        delay: {
            type: Number,
            required: false,
            default: 400,
        },

        icon: {
            type: String,
            required: false,
            default: 'regular-search-s',
        },
    },

    data() {
        return {
            onSearchTermChanged: Utils.debounce(function debounceInput(input) {
                this.$emit('search-term-change', input);
            }, this.delay),
        };
    },

    computed: {
        fieldClasses() {
            return [
                `sw-simple-search-field--${this.variant}`,
            ];
        },

        placeholder() {
            return this.$attrs.placeholder || this.$tc('global.sw-simple-search-field.defaultPlaceholder');
        },

        listeners() {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
            if (this.isCompatEnabled('INSTANCE_LISTENERS')) {
                return this.$listeners;
            }

            return {};
        },
    },

    methods: {
        onInput(input) {
            this.$emit('update:value', input);
            this.onSearchTermChanged(input);
        },
    },
});
