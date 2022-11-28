/**
 * @package content
 */
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import 'src/module/sw-category/page/sw-category-detail';

async function createWrapper(privileges = []) {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    return shallowMount(await Shopware.Component.build('sw-category-detail'), {
        localVue,
        stubs: {
            'sw-page': {
                template: `
    <div>
        <slot name="smart-bar-actions"></slot>
        <slot name="side-content"></slot>
    </div>`
            },
            'sw-category-tree': true,
            'sw-button': true,
            'sw-button-process': true,
            'sw-sidebar-collapse': true,
            'sw-landing-page-tree': true
        },
        provide: {
            acl: {
                can: (identifier) => {
                    if (!identifier) { return true; }

                    return privileges.includes(identifier);
                }
            },
            cmsService: {
                getEntityMappingTypes: () => {},
            },
            repositoryFactory: {
                create: () => ({
                    search: () => Promise.resolve({
                        get: () => ({ sections: [] })
                    })
                })
            },
            seoUrlService: {}
        }
    });
}

describe('src/module/sw-category/page/sw-category-detail', () => {
    beforeAll(() => {
        Shopware.State.registerModule('cmsPageState', {
            namespaced: true,
            actions: {
                resetCmsPageState: () => {},
            },
            mutations: {
                setCurrentMappingEntity: () => {},
                setCurrentMappingTypes: () => {},
                setCurrentDemoEntity: () => {},
                setCurrentPage: () => {},
            }
        });
    });

    it('should be a Vue.js component', async () => {
        const wrapper = await createWrapper();

        expect(wrapper.vm).toBeTruthy();
        wrapper.destroy();
    });

    it('should disable the save button', async () => {
        const wrapper = await createWrapper();
        Shopware.State.commit('swCategoryDetail/setActiveCategory', { category: {} });
        await wrapper.setData({
            isLoading: false
        });

        const saveButton = wrapper.find('.sw-category-detail__save-action');

        expect(saveButton.attributes().disabled).toBe('true');
        wrapper.destroy();
    });

    it('should enable the save button', async () => {
        const wrapper = await createWrapper([
            'category.editor'
        ]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', { category: {
            slotConfig: ''
        } });

        await wrapper.setData({
            isLoading: false
        });

        const saveButton = wrapper.find('.sw-category-detail__save-action');

        expect(saveButton.attributes().disabled).toBeUndefined();
        wrapper.destroy();
    });

    it('should not allow to edit', async () => {
        const wrapper = await createWrapper([]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', {
            category: {
                slotConfig: ''
            }
        });

        await wrapper.setData({
            isLoading: false
        });

        const categoryTree = wrapper.find('sw-category-tree-stub');

        expect(categoryTree.attributes()['allow-edit']).toBeUndefined();
        wrapper.destroy();
    });

    it('should allow to edit', async () => {
        const wrapper = await createWrapper([
            'category.editor'
        ]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', {
            category: {
                slotConfig: ''
            }
        });

        await wrapper.setData({
            isLoading: false
        });

        const categoryTree = wrapper.find('sw-category-tree-stub');

        expect(categoryTree.attributes()['allow-edit']).toBe('true');
        wrapper.destroy();
    });

    it('should not allow to create', async () => {
        const wrapper = await createWrapper([]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', {
            category: {
                slotConfig: ''
            }
        });

        await wrapper.setData({
            isLoading: false
        });

        const categoryTree = wrapper.find('sw-category-tree-stub');

        expect(categoryTree.attributes()['allow-create']).toBeUndefined();
        wrapper.destroy();
    });

    it('should allow to create', async () => {
        const wrapper = await createWrapper([
            'category.creator'
        ]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', {
            category: {
                slotConfig: ''
            }
        });

        await wrapper.setData({
            isLoading: false
        });

        const categoryTree = wrapper.find('sw-category-tree-stub');

        expect(categoryTree.attributes()['allow-create']).toBe('true');
        wrapper.destroy();
    });

    it('should not allow to delete', async () => {
        const wrapper = await createWrapper([]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', {
            category: {
                slotConfig: ''
            }
        });

        await wrapper.setData({
            isLoading: false
        });

        const categoryTree = wrapper.find('sw-category-tree-stub');

        expect(categoryTree.attributes()['allow-delete']).toBeUndefined();
        wrapper.destroy();
    });

    it('should allow to delete', async () => {
        const wrapper = await createWrapper([
            'category.deleter'
        ]);
        Shopware.State.commit('swCategoryDetail/setActiveCategory', {
            category: {
                slotConfig: ''
            }
        });

        await wrapper.setData({
            isLoading: false
        });

        const categoryTree = wrapper.find('sw-category-tree-stub');

        expect(categoryTree.attributes()['allow-delete']).toBe('true');
        wrapper.destroy();
    });
});
