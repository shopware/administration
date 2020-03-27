import template from './sw-settings-import-export-view-profiles.html.twig';
import './sw-settings-import-export-view-profiles.scss';

const { Mixin } = Shopware;

Shopware.Component.register('sw-settings-import-export-view-profiles', {
    template,

    inject: ['repositoryFactory'],

    mixins: [
        Mixin.getByName('notification')
    ],

    metaInfo() {
        return {
            title: this.$createTitle()
        };
    },

    data() {
        return {
            isLoading: false,
            selectedProfile: null,
            profiles: null,
            searchTerm: null
        };
    },

    computed: {
        profileRepository() {
            return this.repositoryFactory.create('import_export_profile');
        },

        profileCriteria() {
            const criteria = new Shopware.Data.Criteria();

            criteria.setPage(1);
            criteria.setTerm(this.searchTerm);
            criteria.addAssociation('importExportLogs');

            return criteria;
        },

        profilesColumns() {
            return [
                {
                    property: 'name',
                    dataIndex: 'name',
                    label: 'sw-settings-import-export.profile.nameColumn',
                    allowResize: true,
                    primary: true
                },
                {
                    property: 'systemDefault',
                    dataIndex: 'systemDefault',
                    label: 'sw-settings-import-export.profile.typeColumn',
                    allowResize: true
                }
            ];
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.loadProfiles();
        },

        async loadProfiles() {
            this.isLoading = true;

            this.profiles = await this.profileRepository.search(this.profileCriteria, Shopware.Context.api);

            this.isLoading = false;
        },

        onSearch() {
            this.loadProfiles();
        },

        onAddNewProfile() {
            this.selectedProfile = this.profileRepository.create(Shopware.Context.api);
            this.selectedProfile.fileType = 'text/csv';
            this.selectedProfile.mapping = [];
            this.selectedProfile.delimiter = ';';
            this.selectedProfile.enclosure = '"';
        },

        async onEditProfile(id) {
            this.selectedProfile = await this.profileRepository.get(id, Shopware.Context.api);
        },

        onDuplicateProfile(item) {
            this.selectedProfile = this.profileRepository.create(Shopware.Context.api);

            this.selectedProfile.name = `${this.$tc('sw-settings-import-export.profile.copyOfLabel')} ${item.name}`;
            this.selectedProfile.systemDefault = false;
            this.selectedProfile.fileType = item.fileType;
            this.selectedProfile.mapping = item.mapping;
            this.selectedProfile.delimiter = item.delimiter;
            this.selectedProfile.enclosure = item.enclosure;
            this.selectedProfile.sourceEntity = item.sourceEntity;
        },

        onDeleteProfile(id) {
            this.$refs.listing.showDelete(id);
        },

        closeSelectedProfile() {
            this.selectedProfile = null;
        },

        saveSelectedProfile() {
            this.isLoading = true;
            this.profileRepository.save(this.selectedProfile, Shopware.Context.api).then(() => {
                this.selectedProfile = null;
                this.createNotificationSuccess({
                    title: this.$tc('sw-settings-import-export.profile.titleSaveSuccess'),
                    message: this.$tc('sw-settings-import-export.profile.messageSaveSuccess', 0)
                });
                return this.loadProfiles();
            }).catch(() => {
                this.createNotificationError({
                    title: this.$tc('sw-settings-import-export.profile.titleSaveError'),
                    message: this.$tc('sw-settings-import-export.profile.messageSaveError', 0)
                });
            }).finally(() => {
                this.isLoading = false;
            });
        },

        getTypeLabel(isSystemDefault) {
            return isSystemDefault ?
                this.$tc('sw-settings-import-export.profile.defaultTypeLabel') :
                this.$tc('sw-settings-import-export.profile.customTypeLabel');
        }
    }
});
