import { createLocalVue, shallowMount } from '@vue/test-utils';
import 'src/module/sw-settings-currency/page/sw-settings-currency-detail';

function createWrapper(privileges = []) {
    const localVue = createLocalVue();
    localVue.directive('tooltip', {});

    return shallowMount(Shopware.Component.build('sw-settings-currency-detail'), {
        localVue,
        mocks: {
            $tc: () => {},
            $device: {
                getSystemKey: () => {}
            }
        },
        provide: {
            repositoryFactory: {
                create: () => ({
                    create: () => {
                        return {
                            name: '',
                            isoCode: '',
                            shortName: '',
                            symbol: '',
                            factor: 1,
                            decimalPrecision: 1
                        };
                    }
                })
            },
            acl: {
                can: (identifier) => {
                    if (!identifier) { return true; }

                    return privileges.includes(identifier);
                }
            }
        },
        stubs: {
            'sw-page': true,
            'sw-button': true,
            'sw-button-process': true,
            'sw-language-switch': true,
            'sw-card-view': true,
            'sw-card': true,
            'sw-container': true,
            'sw-field': true,
            'sw-number-field': true,
            'sw-language-info': true
        }
    });
}

describe('module/sw-settings-currency/page/sw-settings-currency-detail', () => {
    it('should be a Vue.JS component', () => {
        const wrapper = createWrapper();

        expect(wrapper.isVueInstance()).toBe(true);
    });

    it('should not be able to save the currency', () => {
        const wrapper = createWrapper();

        const saveButton = wrapper.find('.sw-settings-currency-detail__save-action');

        expect(saveButton.attributes().disabled).toBeTruthy();
    });

    it('should not be able to save the currency', () => {
        const wrapper = createWrapper([
            'currencies.editor'
        ]);

        const saveButton = wrapper.find('.sw-settings-currency-detail__save-action');

        expect(saveButton.attributes().disabled).toBeFalsy();
    });
});

