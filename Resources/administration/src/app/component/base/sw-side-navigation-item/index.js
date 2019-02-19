import template from './sw-side-navigation-item.twig';
import './sw-side-navigation-item.scss';

/**
 * @public
 * @description Renders a side navigation item. It works like a router-link and has the same props.
 * @status ready
 * @example-type static
 * @component-example
 * <sw-side-navigation>
 *
 *     <sw-side-navigation-item :to="{ name: 'sw.explore.index' }">
 *         Explore
 *     </sw-side-navigation-item>
 *
 *     <sw-side-navigation-item to="A link">
 *         My Plugins
 *     </sw-side-navigation-item>
 *
 * </sw-side-navigation>
 */
export default {
    name: 'sw-side-navigation-item',
    template,

    props: {
        to: [String, Object],
        replace: Boolean,
        append: Boolean,
        tag: String,
        'active-class': {
            type: String,
            default: 'sw-side-navigation-item--active'
        },
        'exact-active-class': {
            type: String,
            default: 'sw-side-navigation-item--exact-active'
        },
        exact: Boolean
    }
};
