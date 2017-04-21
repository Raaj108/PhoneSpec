angular.module('phoneList').directive('phoneListDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/modules/phoneList/templates/phonelist.table.template.html',
    controller: 'PhoneListController',
    replace: 'true',
    scope: {
      phones: '=',
      brands: '='
    }
  }
});
