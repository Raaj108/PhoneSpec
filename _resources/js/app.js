// Define the `phonecatApp` module
var phoneSpecApp = angular.module('phoneSpecApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phoneSpecApp.controller('PhoneListController', ['$scope', function ($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet with Wi-Fi.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
}]);


phoneSpecApp.directive('phoneListDirective', function () {
  return{
    restrict:'EA',
    templateUrl:'./_resources/templates/_partial_phonelist_table.html',
    controller:'PhoneListController'
  }
});