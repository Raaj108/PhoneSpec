angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', '$http', 'phoneDetailsfactory', function ($scope, $log, $routeParams, $http, phoneDetailsfactory) {
  var phoneName = $routeParams.phone;
  var brandName = $routeParams.brand;
  $scope.phone = {};
  /**
    $http.get('phones/' + $scope.phoneId + '.json').then(function (response) {

      $scope.imageSwap($scope.phone.images[0]);
    });**/



  $scope.imageSwap = function (imageURL) {
    $scope.carouselImage = imageURL;
  }

  $scope.getPhone = (function (brand, phone) {
    phoneDetailsfactory.getPhone(brand, phone).
    then(function successCallback(response) {
      $scope.phone.data = response.data[0];
    }, function errorCallback(response) {
      $log.error(response);
    });
  })(brandName, phoneName);
  $log.info($scope.phone);


}]);
