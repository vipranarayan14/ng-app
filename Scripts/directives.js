(function() {
  var app = angular.module('directives', []);
  
  app.directive("productReviews", function() {
   return {
     restrict: 'E',
     templateUrl: "product-reviews.html"
   };
});

})();
