angular.module('phoneDetails').directive('phoneDetailsDirective', function () {
  return {
    restrict: 'EA',
    templateUrl: './_resources/modules/phoneDetails/_partial_phonedetails_template.html',
    controller: 'PhoneDetailsController',
    replace: 'true',
    scope: {
      phone: '=',
      carouselImage: '@'
    }
  }
});