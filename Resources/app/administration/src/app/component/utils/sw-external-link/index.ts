import template from './sw-external-link.html.twig';

const { Component } = Shopware;

/**
 * @package admin
 *
 * @private
 * @status ready
 * @description Wrapper component for sw-external-link and mt-external-link. Autoswitches between the two components.
 */
Component.register('sw-external-link', {
    template,

    computed: {
        useMeteorComponent() {
            // Use new meteor component in major
            if (Shopware.Feature.isActive('v6.7.0.0')) {
                return true;
            }

            // Throw warning when deprecated component is used
            Shopware.Utils.debug.warn(
                'sw-external-link',
                // eslint-disable-next-line max-len
                'The old usage of "sw-external-link" is deprecated and will be removed in v6.7.0.0. Please use "mt-external-link" instead.',
            );

            return false;
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
