angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
}]);