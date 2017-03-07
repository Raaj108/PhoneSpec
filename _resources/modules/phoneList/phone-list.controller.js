// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module('phoneList').controller('PhoneListController', ['$scope', '$http', function ($scope, $http) {
  $http.get('phones/phones.json').then(function (response) {
    $scope.phones = response.data;
  });
}]);