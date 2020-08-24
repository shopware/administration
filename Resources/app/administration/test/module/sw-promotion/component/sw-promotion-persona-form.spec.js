import { createLocalVue, shallowMount } from '@vue/test-utils';
import 'src/module/sw-promotion/component/sw-promotion-persona-form';
import promotionState from 'src/module/sw-promotion/page/sw-promotion-detail/state';

function createWrapper(privileges = []) {
    const localVue = createLocalVue();
    localVue.directive('tooltip', {});

    return shallowMount(Shopware.Component.build('sw-promotion-persona-form'), {
        localVue,
        stubs: {
            // 'sw-container': '<div class="sw-container"><slot></slot></div>',
            // 'sw-select-field': '<div class="sw-select-field"></div>',
            'sw-entity-single-select': '<div class="sw-entity-single-select"></div>',
            // 'sw-switch-field': '<div class="sw-switch-field"></div>',
            'sw-field': '<div class="sw-field"><slot></slot></div>',
            // 'sw-number-field': '<div class="sw-number-field"><slot></slot></div>',
            // 'sw-button': '<div class="sw-button"><slot></slot></div>',
            // 'sw-progress-bar': '<div class="sw-progress-bar"><slot></slot></div>',
            // 'sw-label': '<div class="sw-label"><slot></slot></div>',
            // 'sw-empty-state': '<div class="sw-empty-state"><slot></slot></div>',
            'sw-data-grid': '<div class="sw-data-grid"><slot></slot><slot name="actions"></slot></div>',
            'sw-pagination': '<div class="sw-pagination"><slot></slot></div>',
            // 'sw-icon': '<div class="sw-icon"></div>'
            // 'sw-promotion-sales-channel-select': '<div class="sw-promotion-sales-channel-select"><slot></slot></div>',
            // 'sw-datepicker': '<div class="sw-field-datepicker"><slot></slot></div>',
            // 'sw-entity-multi-select': '<div class="sw-entity-multi-select"><slot></slot></div>'
            'sw-card': '<div class="sw-card"><slot></slot></div>',
            // 'sw-context-button': '<div class="sw-context-button"><slot></slot></div>',
            'sw-context-menu-item': '<div class="sw-context-menu-item"><slot></slot></div>',
            // 'sw-modal': '<div class="sw-modal"><slot></slot><slot name="footer"></slot></div>',
            // 'sw-one-to-many-grid': '<div class="sw-one-to-many-grid"></div>'
            'sw-promotion-rule-select': '<div class="sw-promotion-rule-select"><slot></slot></div>'
            // 'sw-empty-state': true,
            // 'sw-card-section': true,
            // 'sw-card-filter': '<div><slot name="filter"></slot></div>',
            // 'sw-context-button': true,
        },
        provide: {
            acl: {
                can: (key) => {
                    if (!key) { return true; }

                    return privileges.includes(key);
                }
            },
            repositoryFactory: {
                create: () => {
                    return { search: () => {
                        return Promise.resolve([]);
                    } };
                }
            }
        },
        mocks: {
            $tc: v => v
        },
        propsData: {
            promotion: {
                name: 'Test Promotion',
                active: true,
                validFrom: '2020-07-28T12:00:00.000+00:00',
                validUntil: '2020-08-11T12:00:00.000+00:00',
                maxRedemptionsGlobal: 45,
                maxRedemptionsPerCustomer: 12,
                exclusive: false,
                code: null,
                useCodes: true,
                useIndividualCodes: true,
                individualCodePattern: 'code-%d',
                useSetGroups: false,
                customerRestriction: true,
                orderCount: 0,
                ordersPerCustomerCount: null,
                exclusionIds: ['d671d6d3efc74d2a8b977e3be3cd69c7'],
                translated: {
                    name: 'Test Promotion'
                },
                apiAlias: null,
                id: 'promotionId',
                setgroups: [],
                salesChannels: [
                    {
                        promotionId: 'promotionId',
                        salesChannelId: 'salesChannelId',
                        priority: 1,
                        createdAt: '2020-08-17T13:24:52.692+00:00',
                        id: 'promotionSalesChannelId'
                    }
                ],
                discounts: [],
                individualCodes: [],
                personaRules: [],
                personaCustomers: [],
                orderRules: [],
                cartRules: [],
                translations: [],
                hasOrders: false,
                isNew: () => false
            }
        }
    });
}

describe('src/module/sw-promotion/component/sw-promotion-persona-form', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = createWrapper();
    });

    afterEach(() => {
        wrapper.destroy();
    });

    beforeAll(() => {
        Shopware.State.registerModule('swPromotionDetail', promotionState);
    });

    it('should be a Vue.js component', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('should have disabled form fields', () => {
        expect(wrapper.vm.isEditingDisabled).toBe(true);

        console.log('wrapper.htm() : ', wrapper.html());

        const elements = wrapper.findAll('.sw-promotion-rule-select');
        expect(elements.wrappers.length).toBeGreaterThan(0);
        elements.wrappers.forEach(el => expect(el.attributes().disabled).toBe('disabled'));
    });

    it('should not have disabled form fields', () => {
        wrapper = createWrapper([
            'promotion.editor'
        ]);

        expect(wrapper.vm.isEditingDisabled).toBe(false);

        const elements = wrapper.findAll('.sw-promotion-rule-select');
        expect(elements.wrappers.length).toBeGreaterThan(0);
        elements.wrappers.forEach(el => expect(el.attributes().disabled).toBeUndefined());
    });
});
