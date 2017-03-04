angular.module('phoneSpecApp').directive('phoneListDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/templates/_partial_phonelist_table.html',
    controller: 'PhoneListController',
    replace: 'true'
  }
});