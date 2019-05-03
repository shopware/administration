import { NEXT134 } from 'src/flag/feature_next134';
import { Module } from 'src/core/shopware';
import './service/cms.service';
import './state/cms-page.state';
import './mixin/sw-cms-element.mixin';
import './blocks';
import './elements';
import './component';
import './page/sw-cms-list';
import './page/sw-cms-detail';
import './page/sw-cms-create';

import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Module.register('sw-cms', {
    flag: NEXT134,
    type: 'core',
    name: 'cms',
    title: 'sw-cms.general.mainMenuItemGeneral',
    description: 'The module for creating content.',
    color: '#ff68b4',
    icon: 'default-symbol-content',
    favicon: 'icons-module-content.png',
    entity: 'cms_page',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        index: {
            component: 'sw-cms-list',
            path: 'index'
        },
        detail: {
            component: 'sw-cms-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sw.cms.index'
            }
        },
        create: {
            component: 'sw-cms-create',
            path: 'create',
            meta: {
                parentPath: 'sw.cms.index'
            }
        }
    },

    navigation: [{
        id: 'sw-cms',
        label: 'sw-cms.general.mainMenuItemGeneral',
        color: '#ff68b4',
        path: 'sw.cms.index',
        icon: 'default-symbol-content',
        position: 10,
        parent: 'sw-content'
    }]
});
