/*global angular */
(function () {
    var app = angular.module('gemStore', ['directives']);

    var gems = [
    {
        name: 'Emerald',
        price: '4000',
        description: 'This is a green gem.',
        image: 'Images/eme.jpg',
        canPurchase: true,
        soldOut: false,
        reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem is so greeeenyyy!!!",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    },

    {
        name: 'Sapphire',
        price: '7000',
        description: 'This is a blue gem.',
        image: 'Images/sap.jpg',
        canPurchase: false,
        soldOut: false,
        reviews: [{
        stars: 5,
        body: "This is so awesome.",
        author: "mob@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Not that nice...",
        author: "pat@example.org",
        createdOn: 1397490980837
      }]
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

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
          this.review.createdOn = Date.now();
          product.reviews.push(this.review);
          this.review = {};
        };
    });

})();
