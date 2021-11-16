import template from './sw-settings-tax-detail.html.twig';
import './sw-settings-tax-detail.scss';

const { Component, Mixin } = Shopware;
const { mapPropertyErrors } = Shopware.Component.getComponentHelper();

Component.register('sw-settings-tax-detail', {
    template,

    inject: ['repositoryFactory', 'acl', 'customFieldDataProviderService', 'systemConfigApiService'],

    mixins: [
        Mixin.getByName('notification'),
    ],

    shortcuts: {
        'SYSTEMKEY+S': {
            active() {
                return this.allowSave;
            },
            method: 'onSave',
        },
        ESCAPE: 'onCancel',
    },

    props: {
        taxId: {
            type: String,
            required: false,
            default: null,
        },
    },

    data() {
        return {
            tax: {},
            isLoading: false,
            isSaveSuccessful: false,
            customFieldSets: null,
            defaultTaxRateId: null,
            changeDefaultTaxRate: false,
        };
    },

    metaInfo() {
        return {
            title: this.$createTitle(this.identifier),
        };
    },

    computed: {
        identifier() {
            return this.tax.name || '';
        },

        taxRepository() {
            return this.repositoryFactory.create('tax');
        },

        ...mapPropertyErrors('tax', ['name', 'taxRate']),

        isNewTax() {
            return this.tax.isNew === 'function'
                ? this.tax.isNew()
                : false;
        },

        allowSave() {
            return this.isNewTax
                ? this.acl.can('tax.creator')
                : this.acl.can('tax.editor');
        },

        tooltipSave() {
            if (!this.allowSave) {
                return {
                    message: this.$tc('sw-privileges.tooltip.warning'),
                    disabled: this.allowSave,
                    showOnDisabledElements: true,
                };
            }

            const systemKey = this.$device.getSystemKey();

            return {
                message: `${systemKey} + S`,
                appearance: 'light',
            };
        },

        isShopwareDefaultTax() {
            return this.$te(`global.tax-rates.${this.tax.name}`, 'en-GB');
        },

        label() {
            return this.isShopwareDefaultTax ? this.$tc(`global.tax-rates.${this.tax.name}`) : this.tax.name;
        },

        showCustomFields() {
            return this.customFieldSets && this.customFieldSets.length > 0;
        },

        isDefaultTaxRate() {
            return this.taxId === this.defaultTaxRateId;
        },
    },

    watch: {
        taxId() {
            if (!this.taxId) {
                this.createdComponent();
            }
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.isLoading = true;
            if (this.taxId) {
                this.taxId = this.$route.params.id;
                this.taxRepository.get(this.taxId).then((tax) => {
                    this.tax = tax;
                    this.isLoading = false;
                });
                this.loadCustomFieldSets();
                this.reloadDefaultTaxRate();
                return;
            }

            this.tax = this.taxRepository.create();
            this.isLoading = false;
        },

        loadCustomFieldSets() {
            this.customFieldDataProviderService.getCustomFieldSets('tax').then((sets) => {
                this.customFieldSets = sets;
            });
        },

        /**
         * @deprecated tag:v6.5.0 - Will be removed
         */
        saveAndReload() {
            this.$emit('loading-change', true);
            return this.taxRepository.save(this.tax, this.apiContext).then(() => {
                return this.reloadEntityData();
            }).catch((error) => {
                this.$emit('error', error);
            }).finally(() => {
                this.$emit('loading-change', false);
                return Promise.resolve();
            });
        },

        onSave() {
            this.isSaveSuccessful = false;
            this.isLoading = true;

            return this.taxRepository.save(this.tax).then(() => {
                this.isSaveSuccessful = true;
                if (!this.taxId) {
                    this.$router.push({ name: 'sw.settings.tax.detail', params: { id: this.tax.id } });
                }

                this.reloadDefaultTaxRate();

                this.taxRepository.get(this.tax.id).then((updatedTax) => {
                    this.tax = updatedTax;
                    this.isLoading = false;
                });
            }).catch(() => {
                this.createNotificationError({
                    message: this.$tc('sw-settings-tax.detail.messageSaveError'),
                });
                this.isLoading = false;
            });
        },

        onCancel() {
            this.$router.push({ name: 'sw.settings.tax.index' });
        },

        changeName(name) {
            this.tax.name = name;
        },

        reloadDefaultTaxRate() {
            this.systemConfigApiService
                .getValues('core.tax')
                .then(response => {
                    this.defaultTaxRateId = response['core.tax.defaultTaxRate'] ?? null;
                })
                .catch(() => {
                    this.defaultTaxRateId = null;
                });
        },

        onChangeDefaultTaxRate() {
            console.log('LEL');
            this.changeDefaultTaxRate = true;
        },
    },
});
