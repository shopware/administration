/**
 * @package system-settings
 */
import { shallowMount } from '@vue/test-utils';
import swBulkEditState from 'src/module/sw-bulk-edit/state/sw-bulk-edit.state';
import 'src/module/sw-bulk-edit/component/sw-bulk-edit-order/sw-bulk-edit-order-documents-download-documents';

async function createWrapper() {
    return shallowMount(await Shopware.Component.build('sw-bulk-edit-order-documents-download-documents'), {
        stubs: {
            'sw-checkbox-field': true,
        },
        provide: {
            repositoryFactory: {
                create: () => {
                    return {
                        search: () => Promise.resolve(),
                    };
                },
            },
        },
    });
}

describe('sw-bulk-edit-order-documents-download-documents', () => {
    let wrapper;

    beforeAll(() => {
        Shopware.State.registerModule('swBulkEdit', swBulkEditState);
    });

    beforeEach(async () => {
        wrapper = await createWrapper();
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('should be a Vue.js component', async () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('should get document types once component created', async () => {
        wrapper.vm.getDocumentTypes = jest.fn(() => Promise.resolve());

        await wrapper.vm.createdComponent();

        expect(wrapper.vm.getDocumentTypes).toHaveBeenCalledTimes(1);
        wrapper.vm.getDocumentTypes.mockRestore();
    });

    it('should be able to get document types', async () => {
        wrapper.vm.documentTypeRepository.search = jest.fn(() => {
            return Promise.resolve([
                {
                    id: 1,
                    technicalName: 'invoice',
                },
                {
                    id: 2,
                    technicalName: 'delivery_note',
                },
            ]);
        });

        await wrapper.vm.createdComponent();

        expect(wrapper.vm.documentTypes).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: 1,
                technicalName: 'invoice',
                selected: false,
            }),
            expect.objectContaining({
                id: 2,
                technicalName: 'delivery_note',
                selected: false,
            }),
        ]));
        wrapper.vm.documentTypeRepository.search.mockRestore();
    });
});
