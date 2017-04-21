angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', '$http',  'phoneDetailsfactory', function ($scope, $log, $routeParams, $http, phoneDetailsfactory) {
  var phoneName = $routeParams.phone;
  var brandName = $routeParams.brand;
  $scope.phone = {};
  $scope.addClass = false;
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


  $scope.is_array = function (input) {
    var isArray = angular.isArray(input) ? true : false;
    return isArray;
  }
  $scope.is_object = function (input) {
    var isObject = angular.isObject(input) ? true : false;
    if (isObject == true) {
      $scope.addClass = true;
    }
    return isObject;
  }
}]);
