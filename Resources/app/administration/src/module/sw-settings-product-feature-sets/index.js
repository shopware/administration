import './page/sw-settings-product-feature-sets-list';
import './page/sw-settings-product-feature-sets-detail';
import './component/sw-settings-product-feature-sets-values-card';
import './component/sw-settings-product-feature-sets-modal';
import { NEXT6997 } from 'src/flag/feature_next6997';


const { Module } = Shopware;

Module.register('sw-settings-product-feature-sets', {
    flag: NEXT6997,
    type: 'core',
    name: 'settings-product-feature-sets',
    title: 'sw-settings-product-feature-sets.general.mainMenuItemGeneral',
    description: 'Essential characteristics section in the settings module',
    color: '#9AA8B5',
    icon: 'default-action-settings',
    favicon: 'icon-module-settings.png',
    entity: 'product_feature_set',

    routes: {
        index: {
            component: 'sw-settings-product-feature-sets-list',
            path: 'index',
            meta: {
                parentPath: 'sw.settings.index'
            }
        },

        detail: {
            component: 'sw-settings-product-feature-sets-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sw.settings.product.feature.sets.index'
            },
            props: {
                default(route) {
                    return {
                        productFeatureSetId: route.params.id
                    };
                }
            }
        },

        create: {
            component: 'sw-settings-product-feature-sets-detail',
            path: 'create',
            meta: {
                parentPath: 'sw.settings.product.feature.sets.index'
            }
        }
    },

    settingsItem: {
        group: 'shop',
        to: 'sw.settings.product.feature.sets.index',
        icon: 'default-basic-checkmark-block'
    }
});
