angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', '$http', 'phoneDetailsfactory', function ($scope, $log, $routeParams, $http, phoneDetailsfactory) {
  var phoneName = $routeParams.phone;
  var brandName = $routeParams.brand;
  $scope.phone = {};
  $scope.addClass = false;

  $scope.comments = [
    {
      "phone_id": "58dc3381f7f140329898f93f",
      "userName": "Rajan",
      "comment": "Good Phone",
      "timeStamp": "3:06 pm 6/8/2017"
    }, {
      "phone_id": "591145edf57ead208c36308e",
      "userName": "Anita",
      "comment": "Awesome Phone",
      "timeStamp": "2:06 pm 6/8/2017"
    }
  ];


  $scope.totalComments = $scope.comments.length;

  $log.info($scope.totalComments)
  /**
    $http.get('phones/' + $scope.phoneId + '.json').then(function (response) {

      $scope.imageSwap($scope.phone.images[0]);
    });**/
  $scope.images = ['samsung-gem.0', 'samsung-gem.1', 'samsung-gem.2', 'samsung-mesmerize-a-galaxy-s-phone.1', 'samsung-mesmerize-a-galaxy-s-phone.2', 'samsung-mesmerize-a-galaxy-s-phone.3']
  /**$scope.imageSwap = function (imageURL) {
    $scope.carouselImage = imageURL;
  }**/
  $scope.getPhone = (function (brand, phone) {
    phoneDetailsfactory.getPhone(brand, phone).
    then(function successCallback(response) {
      $scope.phone.data = response.data[0];
      //$log.info($scope.phone.data);
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
