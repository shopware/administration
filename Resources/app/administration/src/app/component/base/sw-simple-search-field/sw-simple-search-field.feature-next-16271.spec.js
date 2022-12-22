import { shallowMount } from '@vue/test-utils';
import 'src/app/component/form/sw-field';
import 'src/app/component/form/sw-text-field';
import 'src/app/component/form/field-base/sw-contextual-field';
import 'src/app/component/form/field-base/sw-block-field';
import 'src/app/component/form/field-base/sw-base-field';
import 'src/app/component/form/field-base/sw-field-error';

async function createWrapper(additionalOptions = {}) {
    global.activeFeatureFlags = ['FEATURE_NEXT_16271'];

    await import('src/app/component/base/sw-simple-search-field');

    return shallowMount(await Shopware.Component.build('sw-simple-search-field'), {
        stubs: {
            'sw-field': await Shopware.Component.build('sw-field'),
            'sw-text-field': await Shopware.Component.build('sw-text-field'),
            'sw-contextual-field': await Shopware.Component.build('sw-contextual-field'),
            'sw-block-field': await Shopware.Component.build('sw-block-field'),
            'sw-base-field': await Shopware.Component.build('sw-base-field'),
            'sw-field-error': await Shopware.Component.build('sw-field-error'),
            'sw-icon': true,
        },
        provide: {
            validationService: {}
        },
        propsData: {
            value: 'search term'
        },
        ...additionalOptions
    });
}

describe('components/base/sw-simple-search-field FEATURE_NEXT_16271', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = await createWrapper();
    });

    it('should be a Vue.js component', async () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('should have `search term` as initial value', async () => {
        expect(wrapper.get('.sw-field').props('value')).toBe('search term');
    });

    it('should emit `input` event with FEATURE_NEXT_16271', async () => {
        jest.useFakeTimers();

        const changedValue = '@searchTermChange Sw Simple Search Field Typing';
        await wrapper.find('input[type="text"]').setValue(changedValue);

        /* wait for `$emit('input')` */
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('input')).toEqual([[changedValue]]);

        // Fast-forward until debounce is triggered
        jest.advanceTimersByTime(1000);
        expect(wrapper.emitted('search-term-change')).toEqual([[changedValue]]);
    });
});
