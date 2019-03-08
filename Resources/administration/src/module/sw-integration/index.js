import { Module } from 'src/core/shopware';

import './extension/sw-settings-index';
import './page/sw-integration-list';
import deDE from './snippet/de_DE.json';
import enGB from './snippet/en_GB.json';

Module.register('sw-integration', {
    type: 'core',
    name: 'integrations',
    description: 'The module for managing integrations.',
    version: '1.0.0',
    targetVersion: '1.0.0',
    color: '#9AA8B5',
    icon: 'default-action-settings',
    entity: 'integration',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            component: 'sw-integration-list',
            path: 'index',
            meta: {
                parentPath: 'sw.settings.index'
            }
        }
    },

    navigation: [{
        path: 'sw.integration.index',
        label: 'sw-integration.general.mainMenuItemIndex',
        id: 'sw-integration',
        parent: 'sw-settings'
    }]
});
