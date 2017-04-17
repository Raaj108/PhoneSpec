angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', '$http', 'phoneDetailsfactory', function ($scope, $log, $routeParams, $http, phoneDetailsfactory) {
  var phoneName = $routeParams.phone;
  var brandName = $routeParams.brand;

  $http.get('phones/' + $scope.phoneId + '.json').then(function (response) {

    $scope.imageSwap($scope.phone.images[0]);
  });

  $scope.imageSwap = function (imageURL) {
    $scope.carouselImage = imageURL;
  }

  $scope.getPhone = function (brand, phone) {
    phoneDetailsfactory.getPhone(brand, phone).
    then(function successCallback(response) {
      $scope.phone = response.data;
      console.log($scope.phone)
    }, function errorCallback(response) {
      $log.error(response);
    });

  }
  $scope.getPhone(brandName, phoneName);
}]);
