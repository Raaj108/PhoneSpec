angular.module('brandsList').directive('brandsListDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/modules/brandsList/_partial_brandsList_template.html',
    controller: 'brandsListController',
    replace: 'true',
    scope: {
      brands: '='
    }
  }
});