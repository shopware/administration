import template from './sw-datepicker.html.twig';

/**
 * @package admin
 *
 * @private
 * @status ready
 * @description Wrapper component for sw-textarea-field and mt-textarea. Autoswitches between the two components.
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default Shopware.Component.wrapComponentConfig({
    template,

    props: {
        value: {
            type: String,
            required: false,
            default: undefined,
        },

        modelValue: {
            type: String,
            required: false,
            default: undefined,
        },
    },

    computed: {
        useMeteorComponent() {
            // Use new meteor component in major
            if (Shopware.Feature.isActive('v6.7.0.0')) {
                return true;
            }

            // Throw warning when deprecated component is used
            Shopware.Utils.debug.warn(
                'sw-textarea-field',
                // eslint-disable-next-line max-len
                'The old usage of "sw-textarea-field" is deprecated and will be removed in v6.7.0.0. Please use "mt-textarea" instead.',
            );

            return false;
        },

        realValue: {
            get() {
                return this.modelValue || this.value;
            },
            set(value: string) {
                this.$emit('update:value', value);
                this.$emit('update:modelValue', value);
            },
        },
    },

    methods: {
        getSlots() {
            const allSlots = {
                ...this.$slots,
                ...this.$scopedSlots,
            };

            return allSlots;
        },
    },
});
