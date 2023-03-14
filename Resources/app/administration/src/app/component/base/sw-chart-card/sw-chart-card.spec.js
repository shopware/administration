/**
 * @package admin
 */

import { createLocalVue, shallowMount } from '@vue/test-utils';
import 'src/app/component/base/sw-chart-card';

const extendedRanges = [{
    label: '90Days',
    range: 90,
    interval: 'day',
    aggregate: 'day',
}, {
    label: '30Days',
    range: 30,
    interval: 'day',
    aggregate: 'day',
}, {
    label: '14Days',
    range: 14,
    interval: 'day',
    aggregate: 'day',
}, {
    label: '7Days',
    range: 7,
    interval: 'day',
    aggregate: 'day',
}];
const defaultRangeIndex = 1;
const defaultRange = extendedRanges[defaultRangeIndex];

async function createWrapper(additionalProps = {}) {
    const localVue = createLocalVue();

    return shallowMount(await Shopware.Component.build('sw-chart-card'), {
        localVue,
        propsData: {
            positionIdentifier: 'sw-chart-card__statistics-count',
            defaultRangeIndex,
            ...additionalProps
        },
        stubs: {
            'sw-card': true,
            'sw-select-field': true,
            'sw-chart': true,
        },
    });
}

describe('src/app/component/base/sw-chart-card', () => {
    it('properly checks for slot usage', async () => {
        const wrapper = await createWrapper();

        expect(wrapper.vm.hasHeaderLink).toBeFalsy();
        wrapper.vm.$slots['header-link'] = 'foo';

        expect(wrapper.vm.hasHeaderLink).toBeFalsy();
    });

    it('should set the correct range in the dropdown by default', async () => {
        const wrapper = await createWrapper({ availableRanges: extendedRanges });

        expect(wrapper.vm.selectedRange).toStrictEqual(defaultRange);
    });

    it('should emit "sw-chart-card-range-update" with current value of selectedRange property', async () => {
        const expectedEvent = 'sw-chart-card-range-update';
        const expectedValue = '7Days';
        const wrapper = await createWrapper();
        await wrapper.setData({ selectedRange: expectedValue });

        wrapper.vm.$emit = jest.fn();
        wrapper.vm.dispatchRangeUpdate();

        expect(wrapper.vm.$emit).toBeCalledWith(expectedEvent, expectedValue);
    });

    it('should emit "sw-chart-card-range-update" with current value of selectedRange property with non-default availableRanges', async () => {
        const expectedEvent = 'sw-chart-card-range-update';
        const expectedRange = extendedRanges[2];

        const wrapper = await createWrapper({ availableRanges: extendedRanges });
        expect(wrapper.vm.selectedRange).toStrictEqual(defaultRange);

        await wrapper.setData({ selectedRange: expectedRange });
        wrapper.vm.$emit = jest.fn();
        wrapper.vm.dispatchRangeUpdate();

        expect(wrapper.vm.$emit).toBeCalledWith(expectedEvent, expectedRange);
        expect(wrapper.vm.selectedRange).toEqual(expectedRange);
    });

    it('should set the correct the position identifier from the prop to the card', async () => {
        const wrapper = await createWrapper();
        const swCard = wrapper.find('sw-card-stub');

        expect(swCard.attributes('position-identifier')).toBe('sw-chart-card__statistics-count');

        await wrapper.setProps({
            positionIdentifier: 'sw-dashboard-statistics__statistics-sum'
        });

        expect(swCard.attributes('position-identifier')).toBe('sw-dashboard-statistics__statistics-sum');
    });
});
