(function() {
  var app = angular.module('directives', []);

  app.directive('productReviews', function() {
    return {
      restrict: 'E',
      templateUrl: 'Views/product-reviews.html'
    };
  });

  app.directive('productTabs', function() {
    return {
      restrict: 'E',
      templateUrl: 'Views/product-tabs.html',
      controller: function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'tab'
    };
  });

})();
