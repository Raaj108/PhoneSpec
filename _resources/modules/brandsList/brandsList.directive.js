angular.module('brandsList').directive('brandsListDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/modules/brandsList/templates/brandsList.template.html',
    controller: 'brandsListController',
    replace: 'true',
    scope: {
      brands: '='
    }
  }
});