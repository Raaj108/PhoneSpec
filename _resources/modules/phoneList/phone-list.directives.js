angular.module('phoneList').directive('phoneListDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/modules/phoneList/_partial_phonelist_table_template.html',
    controller: 'PhoneListController',
    replace: 'true',
    scope: {
      phones: '=',
      brands: '='
    }
  }
});
