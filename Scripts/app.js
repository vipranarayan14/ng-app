/*global angular */
(function () {
    var app = angular.module('gemStore', []);

    var gems = [
    {
        name: 'Emerald',
        price: '4000',
        description: 'This is a green gem.',
        image: 'eme.jpg',
        canPurchase: true,
        soldOut: false
    },

    {
        name: 'Sapphire',
        price: '7000',
        description: 'This is a blue gem.',
        image: 'sap.jpg',
        canPurchase: false,
        soldOut: false
    }

    ];


    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

})();
