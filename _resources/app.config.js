angular.module('phoneSpecApp').config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
    .when('/phones', {
      template: '<Phone-list-directive phones="phones"></Phone-list-directive>'
    })
    .when('/phones/:phoneId', {
      template: '<Phone-details-directive phoneId="phoneId"></Phone-list-directive>'
    })
    .otherwise('/phones');
}]);