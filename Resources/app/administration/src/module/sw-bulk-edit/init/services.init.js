import BulkEditApiFactory from '../service/bulk-edit.api.factory';

/**
 * @package services-settings
 */
// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
Shopware.Service().register('bulkEditApiFactory', () => {
    return new BulkEditApiFactory();
});
