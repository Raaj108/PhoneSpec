angular.module('phoneSpecApp').config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
    .when('/phones', {
      template: '<Phone-list-directive phones="phones"></Phone-list-directive>'
    })
    .when('/phones/:phoneId', {
      template: '<Phone-details-directive phone="phone" carousel-image="carouselImage"></Phone-list-directive>'
    })
    .otherwise('/phones');
}]);