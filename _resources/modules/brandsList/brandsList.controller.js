angular.module('brandsList').controller('brandsListController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
  $scope.brands = [];

  //get all the brands using restful api
  $http({
    method: 'GET',
    url: 'http://phonespec-api.herokuapp.com/api/brand'
  }).then(function successCallback(response) {
    angular.forEach(response.data, function (value, key) {
      $scope.brands.push(value); // populate brands array
    })
  }, function errorCallback(response) {
    $log.error(response);
  });

  setTimeout(function () {
    angular.element('#phoneCarousel').carousel({
      interval: 2000,
      cycle: true
    })
  }, 100);

}]);