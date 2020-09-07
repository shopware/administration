import { createLocalVue, shallowMount } from '@vue/test-utils';
import 'src/module/sw-settings/mixin/sw-settings-list.mixin';
import 'src/module/sw-settings-custom-field/page/sw-settings-custom-field-set-list';
import 'src/app/component/grid/sw-grid';

let customFieldSets = mockCustomFieldSetData();

function mockCustomFieldSetData() {
    const _customFieldSets = [];

    for (let i = 0; i < 10; i += 1) {
        const customFieldSet = {
            id: `id${i}`,
            name: `custom_additional_field_set_${i}`,
            active: true,
            apiAlias: null,
            config: {
                label: {
                    'en-GB': 'Industrial'
                }
            },
            createdAt: '2020-09-04T11:22:08.376+00:00',
            global: false,
            position: 2,
            updatedAt: '2020-09-07T07:01:50.245+00:00'
        };

        _customFieldSets.push(customFieldSet);
    }
    console.log('_set', _customFieldSets);

    return _customFieldSets;
}

function mockCustomFieldSetRepository() {
    class Repository {
        constructor() {
            this._customFields = customFieldSets;
        }

        search() {
            const response = this._customFields;
            response.total = this._customFields.length;

            return Promise.resolve(this._customFields);
        }

        syncDeleted() {
            this._customFields.splice(0, 1);

            return Promise.resolve();
        }
    }

    return new Repository();
}

function createWrapper(privileges = []) {
    customFieldSets = mockCustomFieldSetData();
    const localVue = createLocalVue();
    localVue.directive('tooltip', {});

    const { Mixin } = Shopware;


    return shallowMount(Shopware.Component.build('sw-settings-custom-field-set-list'), {
        localVue,
        mocks: {
            $tc: () => {},
            $route: {
                params: {
                    id: '1234'
                }
            },
            $router: {
                replace: () => {}
            },
            $device: {
                getSystemKey: () => {},
                onResize: () => {}
            }
        },
        provide: {
            repositoryFactory: {
                create: () => ({
                    search: () => {
                        return mockCustomFieldSetRepository();
                    }
                })
            },
            acl: {
                can: (identifier) => {
                    if (!identifier) { return true; }

                    return privileges.includes(identifier);
                }
            },
            mixins: [
                Mixin.getByName('notification'),
                Mixin.getByName('sw-inline-snippet'),
                Mixin.getByName('discard-detail-page-changes')('set')
            ]
        },
        stubs: {
            'sw-page': `
                <div class="sw-page">
                    <slot name="smart-bar-actions"></slot>
                    <slot name="content">CONTENT</slot>
                    <slot></slot>
                </div>`,
            'sw-button': true,
            'sw-icon': true,
            'sw-search-bar': true,
            'sw-grid': Shopware.Component.build('sw-grid'),
            'sw-context-button': '<div class="sw-context-button"><slot></slot></div>',
            'sw-context-menu-item': '<div class="sw-context-menu-item"><slot></slot></div>',
            'sw-context-menu': '<div><slot></slot></div>',
            'sw-grid-column': '<div class="sw-grid-column"><slot></slot></div>',
            'sw-grid-row': '<div class="sw-grid-row"><slot></slot></div>',
            'sw-pagination': true,
            'sw-empty-state': true,
            'sw-card': true,
            'sw-card-view': true
        }
    });
}

describe('module/sw-settings-custom-field/page/sw-settings-custom-field-set-list', () => {
    it('should be a Vue.JS component', async () => {
        const wrapper = createWrapper();
        await wrapper.vm.$nextTick();

        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('should not be able to create a new custom-field set', async () => {
        const wrapper = createWrapper();
        await wrapper.vm.$nextTick();

        const createButton = wrapper.find('.sw-settings-custom-field-set-list__button-create');

        expect(createButton.attributes().disabled).toBeTruthy();
    });

    it('should be able to create a new custom-field set', async () => {
        const wrapper = createWrapper([
            'custom_fields.creator'
        ]);
        await wrapper.vm.$nextTick();

        const createButton = wrapper.find('.sw-settings-custom-field-set-list__button-create');

        expect(createButton.attributes().disabled).toBeFalsy();
    });

    it('should not be able to delete', async () => {
        const wrapper = createWrapper();
        await wrapper.vm.$nextTick();

        const deleteMenuItem = wrapper.find('.sw-settings-custom-field-set-list__delete-action');
        expect(deleteMenuItem.attributes().disabled).toBeTruthy();
    });

    it('should be able to delete', async () => {
        const wrapper = createWrapper([
            'custom_fields.editor'
        ]);
        await wrapper.vm.$nextTick();

        const deleteMenuItem = wrapper.find('.sw-settings-custom-field-set-list__delete-action');
        expect(deleteMenuItem.attributes().disabled).toBeFalsy();
    });

    it('should not be able to edit', async () => {
        const wrapper = createWrapper();
        await wrapper.vm.$nextTick();

        const editMenuItem = wrapper.find('.sw-custom-field-set-list__edit-action');
        expect(editMenuItem.attributes().disabled).toBeTruthy();
    });

    it('should be able to edit', async () => {
        const wrapper = createWrapper([
            'custom_fields.editor'
        ]);
        await wrapper.vm.$nextTick();
        console.log(wrapper.html());

        const editMenuItem = wrapper.find('.sw-custom-field-set-list__edit-action');
        expect(editMenuItem.attributes().disabled).toBeFalsy();
    });
});
