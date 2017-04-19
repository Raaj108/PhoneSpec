// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module('phoneList').controller('PhoneListController', ['$scope', '$http', '$log', '$routeParams', function ($scope, $http, $log, $routeParams) {
    $scope.brandName = $routeParams.brandName;
    $http.get('https://phonespec-api.herokuapp.com/api/brand/' + $scope.brandName + '/phone').then(function (response) {
        $scope.phones = response.data;
        $log.info($scope.phones)
    });
}]);