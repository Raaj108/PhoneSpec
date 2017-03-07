// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module('phoneList').controller('PhoneListController', ['$scope', '$http', '$log', function ($scope, $http, $log) {
  $http.get('phones/phones.json').then(function (response) {
    $scope.phones = response.data;
  });
}]);