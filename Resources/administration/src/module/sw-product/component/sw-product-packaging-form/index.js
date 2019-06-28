import { Component, Mixin } from 'src/core/shopware';
import { mapState, mapGetters } from 'vuex';
import { mapApiErrors } from 'src/app/service/map-errors.service';
import template from './sw-product-packaging-form.html.twig';

Component.register('sw-product-packaging-form', {
    template,

    mixins: [
        Mixin.getByName('placeholder')
    ],

    computed: {
        ...mapGetters('swProductDetail', [
            'isLoading'
        ]),

        ...mapState('swProductDetail', [
            'product',
            'parentProduct'
        ]),

        ...mapApiErrors('product', [
            'purchaseUnit',
            'referenceUnit',
            'packUnit',
            'width',
            'height',
            'length',
            'weight'
        ])
    }
});
