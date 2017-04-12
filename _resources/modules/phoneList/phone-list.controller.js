// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module('phoneList').controller('PhoneListController', ['$scope', '$log', '$routeParams', 'phoneListfactory', function ($scope, $log, $routeParams, phoneListfactory) {

  var brandName = $routeParams.brand;
  $scope.phones = [];

  //get all the phones of a particular brands using restful api
  $scope.getPhoneWithBrand = function (brand) {
    phoneListfactory.getPhonesWithBrand(brand)
      .then(function successCallback(response) {
        angular.forEach(response.data, function (value, key) {
          $scope.phones.push(value.phoneName); // populate phones array
        })
      }, function errorCallback(response) {
        $log.error(response);
      });
  }
  $scope.getPhoneWithBrand(brandName);
}]);


 