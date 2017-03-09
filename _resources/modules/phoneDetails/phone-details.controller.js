angular.module('phoneDetails').controller('PhoneDetailsController', ['$scope', '$log', '$routeParams', '$http', function ($scope, $log, $routeParams, $http) {
  $scope.phoneId = $routeParams.phoneId;

  $http.get('phones/' + $scope.phoneId + '.json').then(function (response) {
    $scope.phone = response.data;     
  });
 
}]);