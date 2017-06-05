// Define the `PhoneListController` controller on the `phonecatApp` module

angular.module('phoneList').controller('PhoneListController', ['$scope', '$log', '$routeParams', 'phoneListfactory', 'brandListfactory', function ($scope, $log, $routeParams, phoneListfactory, brandListfactory) {

  var brandName = $routeParams.brand;
  $scope.phones = [];
  $scope.brands = [];
  $scope.brandName = brandName;

  $log.info($scope.brandName)

  $scope.getAllBrands = function () {
    brandListfactory.getBrands()
      .then(function successCallback(response) {
        angular.forEach(response.data, function (value, key) {
          $scope.brands.push(value); // populate brands array
        })
      }, function errorCallback(response) {
        $log.error(response);
      });

  }
  $scope.getAllBrands();

  //get all the phones of a particular brands using restful api
  $scope.getPhoneWithBrand = function (brand) {
    phoneListfactory.getPhonesWithBrand(brand)
      .then(function successCallback(response) {
        angular.forEach(response.data, function (value, key) {
          $scope.phones.push(value); // populate phones array
        })
      }, function errorCallback(response) {
        $log.error(response);
      });
  }
  $scope.getPhoneWithBrand(brandName);
}]);

